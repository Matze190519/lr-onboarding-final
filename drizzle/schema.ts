import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Partner table - stores new team members who receive the onboarding link
 */
export const partners = mysqlTable("partners", {
  id: int("id").autoincrement().primaryKey(),
  /** Unique token for the partner's onboarding link */
  token: varchar("token", { length: 64 }).notNull().unique(),
  /** Partner's name */
  name: varchar("name", { length: 255 }).notNull(),
  /** Partner's phone number (optional) */
  phone: varchar("phone", { length: 50 }),
  /** Partner's email (optional) */
  email: varchar("email", { length: 320 }),
  /** Sponsor's user ID (the person who invited this partner) */
  sponsorId: int("sponsorId").notNull(),
  /** LR Partner number (optional) */
  lrPartnernummer: varchar("lrPartnernummer", { length: 50 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Partner = typeof partners.$inferSelect;
export type InsertPartner = typeof partners.$inferInsert;

/**
 * Progress tracking - stores which steps a partner has completed
 */
export const partnerProgress = mysqlTable("partner_progress", {
  id: int("id").autoincrement().primaryKey(),
  /** Reference to the partner */
  partnerId: int("partnerId").notNull(),
  /** Step identifier (e.g., "lina_activated", "lr_neo_downloaded", etc.) */
  stepId: varchar("stepId", { length: 100 }).notNull(),
  /** Whether this step is completed */
  completed: boolean("completed").default(false).notNull(),
  /** When the step was completed */
  completedAt: timestamp("completedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PartnerProgress = typeof partnerProgress.$inferSelect;
export type InsertPartnerProgress = typeof partnerProgress.$inferInsert;

/**
 * Onboarding steps definition - configurable list of steps
 */
export const onboardingSteps = mysqlTable("onboarding_steps", {
  id: int("id").autoincrement().primaryKey(),
  /** Unique step identifier */
  stepId: varchar("stepId", { length: 100 }).notNull().unique(),
  /** Display title */
  title: varchar("title", { length: 255 }).notNull(),
  /** Description */
  description: text("description"),
  /** Order in the list */
  sortOrder: int("sortOrder").default(0).notNull(),
  /** Whether this step is active */
  isActive: boolean("isActive").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type OnboardingStep = typeof onboardingSteps.$inferSelect;
export type InsertOnboardingStep = typeof onboardingSteps.$inferInsert;
