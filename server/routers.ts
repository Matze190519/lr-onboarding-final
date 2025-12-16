import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { 
  createPartner, 
  getPartnerByToken, 
  getPartnersBySponsor, 
  getPartnerProgress, 
  updateStepProgress, 
  getProgressSummary,
  getActiveOnboardingSteps,
  initializeDefaultSteps,
  deletePartner
} from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Partner Management (for sponsors)
  partner: router({
    // Create a new partner (protected - only logged in sponsors)
    create: protectedProcedure
      .input(z.object({
        name: z.string().min(1, "Name ist erforderlich"),
        phone: z.string().optional(),
        email: z.string().email().optional().or(z.literal("")),
        lrPartnernummer: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        const result = await createPartner({
          name: input.name,
          phone: input.phone,
          email: input.email || undefined,
          sponsorId: ctx.user.id,
          lrPartnernummer: input.lrPartnernummer,
        });
        return result;
      }),

    // Get all partners for the logged-in sponsor
    list: protectedProcedure.query(async ({ ctx }) => {
      const partnerList = await getPartnersBySponsor(ctx.user.id);
      
      // Add progress summary for each partner
      const partnersWithProgress = await Promise.all(
        partnerList.map(async (partner) => {
          const summary = await getProgressSummary(partner.id);
          return { ...partner, progress: summary };
        })
      );
      
      return partnersWithProgress;
    }),

    // Delete a partner
    delete: protectedProcedure
      .input(z.object({ partnerId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        // Verify ownership
        const partnerList = await getPartnersBySponsor(ctx.user.id);
        const isOwner = partnerList.some(p => p.id === input.partnerId);
        if (!isOwner) {
          throw new Error("Du kannst nur deine eigenen Partner löschen");
        }
        await deletePartner(input.partnerId);
        return { success: true };
      }),

    // Get partner details with progress (for sponsor dashboard)
    getDetails: protectedProcedure
      .input(z.object({ partnerId: z.number() }))
      .query(async ({ ctx, input }) => {
        const partnerList = await getPartnersBySponsor(ctx.user.id);
        const partner = partnerList.find(p => p.id === input.partnerId);
        if (!partner) {
          throw new Error("Partner nicht gefunden");
        }
        
        const progress = await getPartnerProgress(input.partnerId);
        const steps = await getActiveOnboardingSteps();
        const summary = await getProgressSummary(input.partnerId);
        
        // Combine steps with progress
        const stepsWithProgress = steps.map(step => {
          const progressItem = progress.find(p => p.stepId === step.stepId);
          return {
            ...step,
            completed: progressItem?.completed || false,
            completedAt: progressItem?.completedAt,
          };
        });
        
        return { partner, steps: stepsWithProgress, summary };
      }),
  }),

  // Onboarding (public - for partners viewing their page)
  onboarding: router({
    // Get onboarding data by token (public)
    getByToken: publicProcedure
      .input(z.object({ token: z.string() }))
      .query(async ({ input }) => {
        const partner = await getPartnerByToken(input.token);
        if (!partner) {
          return null;
        }
        
        const progress = await getPartnerProgress(partner.id);
        const steps = await getActiveOnboardingSteps();
        const summary = await getProgressSummary(partner.id);
        
        const stepsWithProgress = steps.map(step => {
          const progressItem = progress.find(p => p.stepId === step.stepId);
          return {
            ...step,
            completed: progressItem?.completed || false,
            completedAt: progressItem?.completedAt,
          };
        });
        
        return { 
          partner: { name: partner.name }, 
          steps: stepsWithProgress, 
          summary 
        };
      }),

    // Update step progress (public - partner marks their own progress)
    updateProgress: publicProcedure
      .input(z.object({
        token: z.string(),
        stepId: z.string(),
        completed: z.boolean(),
      }))
      .mutation(async ({ input }) => {
        const partner = await getPartnerByToken(input.token);
        if (!partner) {
          throw new Error("Partner nicht gefunden");
        }
        
        await updateStepProgress(partner.id, input.stepId, input.completed);
        return { success: true };
      }),
  }),

  // Admin/Setup (protected)
  admin: router({
    // Initialize default onboarding steps
    initSteps: protectedProcedure.mutation(async () => {
      await initializeDefaultSteps();
      return { success: true };
    }),

    // Get all onboarding steps
    getSteps: protectedProcedure.query(async () => {
      return await getActiveOnboardingSteps();
    }),
  }),
});

export type AppRouter = typeof appRouter;
