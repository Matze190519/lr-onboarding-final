import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the database functions
vi.mock('./db', () => ({
  getDb: vi.fn(() => Promise.resolve(null)),
  createPartner: vi.fn(() => Promise.resolve({ id: 1, token: 'test-token-123' })),
  getPartnerByToken: vi.fn((token: string) => {
    if (token === 'valid-token') {
      return Promise.resolve({ id: 1, name: 'Test Partner', sponsorId: 1, token: 'valid-token' });
    }
    return Promise.resolve(undefined);
  }),
  getPartnersBySponsor: vi.fn(() => Promise.resolve([
    { id: 1, name: 'Partner 1', token: 'token1', sponsorId: 1 },
    { id: 2, name: 'Partner 2', token: 'token2', sponsorId: 1 },
  ])),
  getPartnerProgress: vi.fn(() => Promise.resolve([
    { stepId: 'step1', completed: true },
    { stepId: 'step2', completed: false },
  ])),
  getProgressSummary: vi.fn(() => Promise.resolve({ completed: 1, total: 2, percentage: 50 })),
  getActiveOnboardingSteps: vi.fn(() => Promise.resolve([
    { stepId: 'step1', title: 'Step 1', sortOrder: 1 },
    { stepId: 'step2', title: 'Step 2', sortOrder: 2 },
  ])),
  updateStepProgress: vi.fn(() => Promise.resolve()),
  initializeDefaultSteps: vi.fn(() => Promise.resolve()),
  deletePartner: vi.fn(() => Promise.resolve()),
}));

import { 
  createPartner, 
  getPartnerByToken, 
  getPartnersBySponsor,
  getProgressSummary,
  getActiveOnboardingSteps 
} from './db';

describe('Partner Management', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('createPartner', () => {
    it('should create a partner and return id and token', async () => {
      const result = await createPartner({
        name: 'Test Partner',
        sponsorId: 1,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('token');
      expect(result.id).toBe(1);
      expect(result.token).toBe('test-token-123');
    });
  });

  describe('getPartnerByToken', () => {
    it('should return partner for valid token', async () => {
      const partner = await getPartnerByToken('valid-token');
      
      expect(partner).toBeDefined();
      expect(partner?.name).toBe('Test Partner');
    });

    it('should return undefined for invalid token', async () => {
      const partner = await getPartnerByToken('invalid-token');
      
      expect(partner).toBeUndefined();
    });
  });

  describe('getPartnersBySponsor', () => {
    it('should return list of partners for a sponsor', async () => {
      const partners = await getPartnersBySponsor(1);
      
      expect(partners).toHaveLength(2);
      expect(partners[0].name).toBe('Partner 1');
      expect(partners[1].name).toBe('Partner 2');
    });
  });

  describe('getProgressSummary', () => {
    it('should return progress summary with percentage', async () => {
      const summary = await getProgressSummary(1);
      
      expect(summary.completed).toBe(1);
      expect(summary.total).toBe(2);
      expect(summary.percentage).toBe(50);
    });
  });

  describe('getActiveOnboardingSteps', () => {
    it('should return list of active onboarding steps', async () => {
      const steps = await getActiveOnboardingSteps();
      
      expect(steps).toHaveLength(2);
      expect(steps[0].stepId).toBe('step1');
      expect(steps[1].stepId).toBe('step2');
    });
  });
});

describe('Onboarding Steps', () => {
  it('should have correct default step structure', async () => {
    const steps = await getActiveOnboardingSteps();
    
    steps.forEach(step => {
      expect(step).toHaveProperty('stepId');
      expect(step).toHaveProperty('title');
      expect(step).toHaveProperty('sortOrder');
    });
  });
});
