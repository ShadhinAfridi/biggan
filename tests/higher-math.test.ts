import { describe, it, expect } from 'vitest';
import {
  solveThreeSetVenn,
  solveFractionalInverse,
  evaluateRemainderTheorem,
  solveCyclicCubic,
  solveApollonius,
  solveQuadratic,
  solveLinearInequality,
  solveInfiniteGeometricSum,
  convertRecurringDecimal,
  solveArcSector,
  solveLog,
  expandBinomial,
  combination,
  solvePolygonArea,
  solveCoordinateLine,
  solveVector,
  solveSolidGeometry,
  solveProbability,
} from '../src/tools/higher-math/engine';

describe('SSC Higher Mathematics 14-Chapter Calculation Engine', () => {
  describe('Chapter 1: Sets and Functions', () => {
    it('accurately computes 3-set Venn inclusion-exclusion', () => {
      // nA=25, nB=20, nC=15, nAB=8, nBC=6, nCA=7, nABC=3
      const res = solveThreeSetVenn(25, 20, 15, 8, 6, 7, 3);
      // Union = 25 + 20 + 15 - 8 - 6 - 7 + 3 = 42
      expect(res.union).toBe(42);
      expect(res.onlyA).toBe(25 - (8 - 3) - (7 - 3) - 3); // 25 - 5 - 4 - 3 = 13
      expect(res.onlyB).toBe(20 - (8 - 3) - (6 - 3) - 3); // 20 - 5 - 3 - 3 = 9
      expect(res.onlyC).toBe(15 - (7 - 3) - (6 - 3) - 3); // 15 - 4 - 3 - 3 = 5
    });

    it('determines fractional inverse and domain/range exclusions', () => {
      // f(x) = (2x + 1) / (x - 3)
      const res = solveFractionalInverse(2, 1, 1, -3);
      expect(res.domainExclusion).toContain('3.00'); // x != 3
      expect(res.rangeExclusion).toContain('2.00');  // y != 2
      expect(res.inverseLatex).toContain('3x + 1');
    });
  });

  describe('Chapter 2: Algebraic Expressions', () => {
    it('evaluates Remainder Theorem P(a)', () => {
      // P(x) = x^3 - 6x^2 + 11x - 6 = (x-1)(x-2)(x-3)
      // Dividing by (x - 1) gives remainder P(1) = 0
      const res1 = evaluateRemainderTheorem([1, -6, 11, -6], 1);
      expect(res1.remainder).toBe(0);
      expect(res1.isFactor).toBe(true);

      // Dividing by (x - 4) gives P(4) = 64 - 96 + 44 - 6 = 6
      const res4 = evaluateRemainderTheorem([1, -6, 11, -6], 4);
      expect(res4.remainder).toBe(6);
      expect(res4.isFactor).toBe(false);
    });

    it('evaluates cyclic cubic identity and zero sum condition', () => {
      // a=1, b=2, c=-3 => sum = 0 => a^3+b^3+c^3 - 3abc = 0
      const res = solveCyclicCubic(1, 2, -3);
      expect(res.isSumZero).toBe(true);
      expect(res.value).toBe(0);
    });
  });

  describe('Chapter 3: Geometry (Apollonius Theorem)', () => {
    it('calculates triangle medians and verifies 3*sum(sides^2) = 4*sum(medians^2)', () => {
      // a = 5, b = 6, c = 7
      const res = solveApollonius(5, 6, 7);
      expect(res.medianA).toBeGreaterThan(5);
      expect(res.sidesSumSqTimes3).toBe(3 * (25 + 36 + 49)); // 3 * 110 = 330
      expect(Math.abs(res.sidesSumSqTimes3 - res.mediansSumSqTimes4)).toBeLessThan(0.1);
    });
  });

  describe('Chapter 5: Equations (Quadratics)', () => {
    it('solves quadratic with real distinct, equal, and complex roots', () => {
      // x^2 - 5x + 6 = 0 -> roots 2, 3
      const realRes = solveQuadratic(1, -5, 6);
      expect(realRes.discriminant).toBe(1);
      expect(realRes.rootsDisplay).toContain('3');
      expect(realRes.rootsDisplay).toContain('2');

      // x^2 - 4x + 4 = 0 -> root 2
      const equalRes = solveQuadratic(1, -4, 4);
      expect(equalRes.discriminant).toBe(0);
      expect(equalRes.rootsDisplay).toContain('2');

      // x^2 + 4 = 0 -> roots +- 2i
      const compRes = solveQuadratic(1, 0, 4);
      expect(compRes.discriminant).toBe(-16);
      expect(compRes.natureBn).toContain('জটিল');
    });
  });

  describe('Chapter 6: Inequalities', () => {
    it('solves linear inequality with positive and negative coefficients', () => {
      // 2x - 3 <= 5 -> 2x <= 8 -> x <= 4
      const posRes = solveLinearInequality(2, -3, 5);
      expect(posRes.boundary).toBe(4);
      expect(posRes.interval).toContain('4');

      // -2x + 1 <= 5 -> -2x <= 4 -> x >= -2
      const negRes = solveLinearInequality(-2, 1, 5);
      expect(negRes.boundary).toBe(-2);
      expect(negRes.relation).toContain('x \\ge');
    });
  });

  describe('Chapter 7: Infinite Series & Recurring Decimals', () => {
    it('computes sum of infinite geometric series when |r| < 1', () => {
      // a = 1, r = 1/2 -> S = 1 / (1 - 0.5) = 2
      const res = solveInfiniteGeometricSum(1, 0.5);
      expect(res.hasSum).toBe(true);
      expect(res.sum).toBe(2);

      // r = 2 -> diverges
      const divRes = solveInfiniteGeometricSum(1, 2);
      expect(divRes.hasSum).toBe(false);
    });

    it('converts recurring decimal 0.333... and 0.1666... to irreducible fractions', () => {
      // 0.3... -> 1/3
      const res1 = convertRecurringDecimal(0, '', '3');
      expect(res1.fraction).toBe('1 / 3');

      // 0.1666... -> 1/6
      const res2 = convertRecurringDecimal(0, '1', '6');
      expect(res2.fraction).toBe('1 / 6');
    });
  });

  describe('Chapter 8 & 9: Trigonometry & Logarithms', () => {
    it('calculates arc length and sector area', () => {
      // r = 10, theta = 60 degrees
      const res = solveArcSector(10, 60);
      expect(res.arcLength).toBeCloseTo(10.472, 2);
      expect(res.sectorArea).toBeCloseTo(52.36, 2);
    });

    it('solves logarithm with base change', () => {
      // log_2(8) = 3
      const res = solveLog(2, 8);
      expect(res.value).toBe(3);
    });
  });

  describe('Chapter 10: Binomial Expansions', () => {
    it('computes combinations and expands binomial power', () => {
      expect(combination(5, 2)).toBe(10);
      const res = expandBinomial(1, 1, 4); // (x+y)^4 -> coeffs 1, 4, 6, 4, 1
      expect(res.terms.map((t) => t.coeff)).toEqual([1, 4, 6, 4, 1]);
    });
  });

  describe('Chapter 11: Coordinate Geometry', () => {
    it('computes Shoelace area for triangle (2,5), (-1,1), (2,1)', () => {
      // Vertices: (2,5), (-1,1), (2,1)
      const res = solvePolygonArea([
        [2, 5],
        [-1, 1],
        [2, 1],
      ]);
      // Base = 3 (from x=-1 to x=2 at y=1), Height = 4 (from y=1 to y=5) => Area = 0.5 * 3 * 4 = 6
      expect(res.area).toBe(6);
    });

    it('computes line distance, slope and equation', () => {
      const res = solveCoordinateLine(0, 0, 3, 4);
      expect(res.distance).toBe(5);
      expect(res.slope).toBeCloseTo(1.333, 2);
    });
  });

  describe('Chapter 12, 13 & 14: Vectors, Solid Geometry & Probability', () => {
    it('calculates vector magnitude and angle', () => {
      const res = solveVector(3, 4);
      expect(res.magnitude).toBe(5);
      expect(res.directionDeg).toBeCloseTo(53.13, 2);
    });

    it('solves 3D cone geometry', () => {
      // r = 3, h = 4 -> slant l = 5, vol = 1/3 * pi * 9 * 4 = 12 * pi = 37.699
      const res = solveSolidGeometry('cone', 3, 4);
      expect(res.slantHeight).toBe(5);
      expect(res.volume).toBeCloseTo(37.699, 2);
    });

    it('computes probability and odds', () => {
      // 3 favorable out of 6 -> 0.5 (50%)
      const res = solveProbability(3, 6);
      expect(res.probability).toBe(0.5);
      expect(res.percentage).toBe(50);
    });
  });
});
