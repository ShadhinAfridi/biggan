import { describe, it, expect } from 'vitest';
import {
  calculateBMI,
  calculateBMR,
  calculateRespirationATP,
  calculateMonohybridCross,
  calculateSexLinkedCross,
  calculateTrophicEnergy,
  checkBloodCompatibility,
} from '../src/tools/biology/engine';

describe('SSC Biology Quantitative Engine', () => {
  describe('Module A: Nutrition & Metabolism (BMI, BMR, TDEE)', () => {
    it('Case 1: accurately calculates BMI and clinical classification', () => {
      // Female, 16 yrs, 155 cm, 50 kg
      const res = calculateBMI(50, 155);
      expect(res.bmi).toBe(20.81);
      expect(res.category.categoryEn).toBe('Normal / Healthy Weight');
      expect(res.category.categoryBn).toContain('স্বাভাবিক');
      expect(res.healthyWeightMin).toBeGreaterThan(40);
      expect(res.healthyWeightMax).toBeLessThan(65);
    });

    it('identifies underweight and overweight boundary conditions', () => {
      const under = calculateBMI(40, 165); // 40 / 1.65^2 = 14.69
      expect(under.category.categoryEn).toBe('Underweight');
      expect(under.weightDelta).toBeLessThan(0); // needs to gain weight

      const over = calculateBMI(80, 165); // 80 / 1.65^2 = 29.38
      expect(over.category.categoryEn).toBe('Overweight');
      expect(over.weightDelta).toBeGreaterThan(0); // needs to lose weight
    });

    it('Case 1: accurately computes BMR and TDEE with Harris-Benedict formulas', () => {
      // Female, 50 kg, 155 cm, 16 years, Moderate (1.55)
      const femaleRes = calculateBMR('female', 50, 155, 16, 'moderate');
      // 655 + (9.6*50) + (1.8*155) - (4.7*16) = 655 + 480 + 279 - 75.2 = 1338.8
      expect(femaleRes.bmr).toBe(1338.8);
      expect(femaleRes.tdee).toBe(2075.1);

      // Male, 60 kg, 165 cm, 16 years, Sedentary (1.2)
      // 66 + (13.7*60) + (5*165) - (6.8*16) = 66 + 822 + 825 - 108.8 = 1604.2
      const maleRes = calculateBMR('male', 60, 165, 16, 'sedentary');
      expect(maleRes.bmr).toBe(1604.2);
      expect(maleRes.tdee).toBe(1925.0);
    });
  });

  describe('Module B: Bioenergetics & Respiration (Chapter 4)', () => {
    it('computes NCTB classical 38 ATP balance sheet for 1 mole of glucose', () => {
      const res = calculateRespirationATP(1, 'classical');
      expect(res.totalAtp).toBe(38);
      expect(res.co2Moles).toBe(6);
      expect(res.totalKcal).toBe(277.4); // 38 * 7.3
      expect(res.totalKj).toBe(1160.9);  // 38 * 30.55
      expect(res.stages.length).toBe(3);
      expect(res.stages[0].stageTotalAtp).toBe(8);  // Glycolysis
      expect(res.stages[1].stageTotalAtp).toBe(6);  // Acetyl-CoA
      expect(res.stages[2].stageTotalAtp).toBe(24); // Krebs cycle
    });

    it('computes modern 36 ATP yield and handles multiple glucose moles', () => {
      const modernRes = calculateRespirationATP(1, 'modern');
      expect(modernRes.totalAtp).toBe(36);

      const doubleRes = calculateRespirationATP(2.5, 'classical');
      expect(doubleRes.totalAtp).toBe(95); // 2.5 * 38
      expect(doubleRes.co2Moles).toBe(15);
    });
  });

  describe('Module C: Genetics & Punnett Squares (Chapter 12)', () => {
    it('executes Mendelian monohybrid heterozygous cross (Tt x Tt)', () => {
      const res = calculateMonohybridCross('Tt', 'Tt');
      expect(res.dominantPercentage).toBe(75);
      expect(res.recessivePercentage).toBe(25);
      expect(res.genotypes['TT']).toBe(1);
      expect(res.genotypes['Tt']).toBe(2);
      expect(res.genotypes['tt']).toBe(1);
    });

    it('Case 2: solves sex-linked carrier mother x normal father cross', () => {
      // Mother: XN_Xn (Carrier), Father: XN_Y (Normal)
      const res = calculateSexLinkedCross('XN_Xn', 'XN_Y', 'colorblindness');
      expect(res.daughterStats.normalPct).toBe(50);
      expect(res.daughterStats.carrierPct).toBe(50);
      expect(res.daughterStats.affectedPct).toBe(0); // No affected daughters

      expect(res.sonStats.normalPct).toBe(50);
      expect(res.sonStats.affectedPct).toBe(50); // 50% color-blind sons
      expect(res.overallAffectedPct).toBe(25);
    });

    it('solves affected mother x normal father cross (criss-cross inheritance)', () => {
      // Mother: Xn_Xn (Color-blind), Father: XN_Y (Normal)
      const res = calculateSexLinkedCross('Xn_Xn', 'XN_Y', 'colorblindness');
      expect(res.daughterStats.carrierPct).toBe(100);
      expect(res.sonStats.affectedPct).toBe(100); // All sons inherit color blindness from mother
    });
  });

  describe('Module D: Lindeman 10% Ecological Energy Flow (Chapter 13)', () => {
    it('Case 3: verifies 10% trophic level transfer and 90% heat loss', () => {
      const res = calculateTrophicEnergy(10000, 'J');
      expect(res.levels[0].energy).toBe(10000); // Level 1: Producers
      expect(res.levels[1].energy).toBe(1000);  // Level 2: Primary
      expect(res.levels[2].energy).toBe(100);   // Level 3: Secondary
      expect(res.levels[3].energy).toBe(10);    // Level 4: Tertiary
      expect(res.totalHeatLoss).toBe(9990);
    });
  });

  describe('Module E: Blood Group Compatibility (Chapter 6)', () => {
    it('correctly identifies universal donor and universal recipient', () => {
      const oNegToAbPos = checkBloodCompatibility('O-', 'AB+');
      expect(oNegToAbPos.isCompatible).toBe(true);

      const oNegToBPos = checkBloodCompatibility('O-', 'B+');
      expect(oNegToBPos.isCompatible).toBe(true);

      const aPosToBPos = checkBloodCompatibility('A+', 'B+');
      expect(aPosToBPos.isCompatible).toBe(false);
      expect(aPosToBPos.clumpingRisk).toBe(true);
    });
  });
});
