import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, partners, partnerProgress, onboardingSteps, InsertPartner, InsertPartnerProgress, InsertOnboardingStep } from "../drizzle/schema";
import { ENV } from './_core/env';
import { nanoid } from 'nanoid';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ============================================
// Partner Management Functions
// ============================================

/** Create a new partner with a unique token */
export async function createPartner(data: { name: string; phone?: string; email?: string; sponsorId: number; lrPartnernummer?: string }) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const token = nanoid(16); // Generate unique 16-char token
  
  const result = await db.insert(partners).values({
    token,
    name: data.name,
    phone: data.phone || null,
    email: data.email || null,
    sponsorId: data.sponsorId,
    lrPartnernummer: data.lrPartnernummer || null,
  });

  // Initialize progress for all active steps
  const steps = await getActiveOnboardingSteps();
  for (const step of steps) {
    await db.insert(partnerProgress).values({
      partnerId: Number(result[0].insertId),
      stepId: step.stepId,
      completed: false,
    });
  }

  return { id: Number(result[0].insertId), token };
}

/** Get partner by token (for onboarding page) */
export async function getPartnerByToken(token: string) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(partners).where(eq(partners.token, token)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/** Get partner by ID */
export async function getPartnerById(id: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(partners).where(eq(partners.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/** Get all partners for a sponsor */
export async function getPartnersBySponsor(sponsorId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(partners).where(eq(partners.sponsorId, sponsorId));
}

/** Delete a partner */
export async function deletePartner(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Delete progress first
  await db.delete(partnerProgress).where(eq(partnerProgress.partnerId, id));
  // Then delete partner
  await db.delete(partners).where(eq(partners.id, id));
}

// ============================================
// Progress Tracking Functions
// ============================================

/** Get progress for a partner */
export async function getPartnerProgress(partnerId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(partnerProgress).where(eq(partnerProgress.partnerId, partnerId));
}

/** Update a step's completion status */
export async function updateStepProgress(partnerId: number, stepId: string, completed: boolean) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(partnerProgress)
    .set({ 
      completed, 
      completedAt: completed ? new Date() : null 
    })
    .where(
      and(
        eq(partnerProgress.partnerId, partnerId),
        eq(partnerProgress.stepId, stepId)
      )
    );
}

/** Get progress summary for a partner (completed/total) */
export async function getProgressSummary(partnerId: number) {
  const progress = await getPartnerProgress(partnerId);
  const total = progress.length;
  const completed = progress.filter(p => p.completed).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return { completed, total, percentage };
}

// ============================================
// Onboarding Steps Management
// ============================================

/** Get all active onboarding steps */
export async function getActiveOnboardingSteps() {
  const db = await getDb();
  if (!db) return [];

  return await db.select()
    .from(onboardingSteps)
    .where(eq(onboardingSteps.isActive, true))
    .orderBy(onboardingSteps.sortOrder);
}

/** Create or update onboarding step */
export async function upsertOnboardingStep(data: InsertOnboardingStep) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.insert(onboardingSteps).values(data).onDuplicateKeyUpdate({
    set: {
      title: data.title,
      description: data.description,
      sortOrder: data.sortOrder,
      isActive: data.isActive,
    }
  });
}

/** Initialize default onboarding steps */
export async function initializeDefaultSteps() {
  const defaultSteps = [
    { stepId: "lina_activated", title: "Lina (KI) aktivieren", description: "WhatsApp öffnen und Lina starten", sortOrder: 1 },
    { stepId: "lr_neo_downloaded", title: "LR Neo & MyOffice", description: "Apps downloaden & einloggen", sortOrder: 2 },
    { stepId: "whatsapp_groups_joined", title: "WhatsApp Gruppen beitreten", description: "Info- und Austausch-Gruppe", sortOrder: 3 },
    { stepId: "telegram_groups_joined", title: "Telegram Gruppen beitreten", description: "Club 1000, Produktgruppe, etc.", sortOrder: 4 },
    { stepId: "namelist_created", title: "Namensliste erstellen", description: "Kontakte aufschreiben", sortOrder: 5 },
    { stepId: "presentation_watched", title: "Geschäftsvorstellung angesehen", description: "Video oder Präsentation", sortOrder: 6 },
    { stepId: "webinar_attended", title: "Starterwebinar besucht", description: "Dienstag 20:00 Uhr", sortOrder: 7 },
  ];

  for (const step of defaultSteps) {
    await upsertOnboardingStep({ ...step, isActive: true });
  }
}
