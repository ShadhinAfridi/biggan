import { describe, it, expect } from 'vitest';
import {
  calcPowerSet,
  calcCartesianProduct,
  calcAlgebraicExpansion,
  calcPower,
  calcLogarithm,
  toScientificNotation,
  calcTrigRatios,
  calcRightTriangle,
  calcTowerTwoPoints,
  calcBrokenTree,
  calcComponendoDividendo,
  calcMensuration,
  calcGroupedStatistics,
} from '../src/tools/math/general-math/engine';

describe('SSC General Math Engine — Chapter 2: Sets & Functions', () => {
  it('calculates power set elements and proper subsets', () => {
    const res = calcPowerSet(3);
    expect(res.success).toBe(true);
    expect(res.value).toBe(8);
    expect(res.extraData?.properSubsets).toBe(7);
  });

  it('calculates cartesian product properly', () => {
    const res = calcCartesianProduct(['a', 'b'], ['1', '2', '3']);
    expect(res.success).toBe(true);
    expect(res.value).toBe(6);
    expect(res.extraData?.pairs.length).toBe(6);
  });
});

describe('SSC General Math Engine — Chapter 3: Algebraic Expressions', () => {
  it('computes a^2 + b^2 and (a-b)^2 from sum and product', () => {
    // a+b = 5, ab = 6 => a^2+b^2 = 25 - 12 = 13, (a-b)^2 = 25 - 24 = 1
    const res = calcAlgebraicExpansion('sq_from_sum', { sum: 5, prod: 6 });
    expect(res.success).toBe(true);
    expect(res.value).toBe(13);
    expect(res.extraData?.amb2).toBe(1);
  });

  it('computes a^3 + b^3 from sum and product', () => {
    // a+b = 3, ab = 2 => 27 - 3(2)(3) = 27 - 18 = 9
    const res = calcAlgebraicExpansion('cube_sum', { sum: 3, prod: 2 });
    expect(res.success).toBe(true);
    expect(res.value).toBe(9);
  });

  it('computes a^2 + b^2 + c^2 from trinomial sum and pairwise product', () => {
    // a+b+c = 9, ab+bc+ca = 31 => 81 - 62 = 19
    const res = calcAlgebraicExpansion('trinomial_sq', { sum_abc: 9, sum_pair: 31 });
    expect(res.success).toBe(true);
    expect(res.value).toBe(19);
  });
});

describe('SSC General Math Engine — Chapter 4: Exponents & Logarithms', () => {
  it('computes power evaluations and prevents illegal zeroes', () => {
    expect(calcPower(2, 3).value).toBe(8);
    expect(calcPower(0, -2).success).toBe(false);
  });

  it('computes logarithms with base validation', () => {
    const res = calcLogarithm(10, 100);
    expect(res.success).toBe(true);
    expect(res.value).toBeCloseTo(2, 4);

    // Invalid base 1
    expect(calcLogarithm(1, 10).success).toBe(false);
    // Invalid negative N
    expect(calcLogarithm(2, -4).success).toBe(false);
  });

  it('converts to scientific notation format A x 10^n', () => {
    const res = toScientificNotation(45000);
    expect(res.success).toBe(true);
    expect(res.value).toContain('4.500000 × 10^4');
  });
});

describe('SSC General Math Engine — Chapter 9 & 10: Trigonometry & Heights', () => {
  it('verifies Walkthrough 2: height from 60 deg and 30m distance', () => {
    const res = calcRightTriangle('find_height', { theta: 60, distance: 30 });
    expect(res.success).toBe(true);
    // 30 * tan(60) = 30 * sqrt(3) ~= 51.9615
    expect(res.value).toBeCloseTo(51.9615, 3);
  });

  it('calculates tower observed from two points (same side and opposite side)', () => {
    // Same side: theta1 = 30 deg, theta2 = 60 deg, dist = 20m
    const resSame = calcTowerTwoPoints(30, 60, 20, 'same');
    expect(resSame.success).toBe(true);
    expect(resSame.value).toBeGreaterThan(0);

    // Opposite sides
    const resOpp = calcTowerTwoPoints(30, 45, 50, 'opposite');
    expect(resOpp.success).toBe(true);
    expect(resOpp.value).toBeGreaterThan(0);
  });

  it('calculates broken tree problem', () => {
    // Total height = 48m, broken part makes 30 deg angle
    // x = 48 * sin(30) / (1 + sin(30)) = 48 * 0.5 / 1.5 = 16m
    const res = calcBrokenTree(48, 30);
    expect(res.success).toBe(true);
    expect(res.value).toBeCloseTo(16, 2);
    expect(res.extraData?.brokenPart).toBeCloseTo(32, 2);
  });
});

describe('SSC General Math Engine — Chapter 11: Ratio & Proportion', () => {
  it('computes componendo-dividendo and rejects a == b', () => {
    const res = calcComponendoDividendo(5, 3);
    expect(res.success).toBe(true);
    expect(res.value).toBe(4); // (5+3)/(5-3) = 8/2 = 4

    const err = calcComponendoDividendo(4, 4);
    expect(err.success).toBe(false);
  });
});

describe('SSC General Math Engine — Chapter 16: Mensuration', () => {
  it('calculates equilateral triangle area', () => {
    const res = calcMensuration('equilateral_triangle', { a: 4 });
    expect(res.success).toBe(true);
    // (sqrt(3)/4) * 16 = 4 * sqrt(3) ~= 6.9282
    expect(res.value).toBeCloseTo(6.9282, 3);
  });

  it('strictly validates triangle inequality in Heron formula', () => {
    // Valid triangle: 3, 4, 5 => area = 6
    const res = calcMensuration('triangle_heron', { a: 3, b: 4, c: 5 });
    expect(res.success).toBe(true);
    expect(res.value).toBeCloseTo(6, 4);

    // Invalid triangle: 2, 3, 10
    const invalidRes = calcMensuration('triangle_heron', { a: 2, b: 3, c: 10 });
    expect(invalidRes.success).toBe(false);
  });

  it('calculates regular hexagon area', () => {
    // Regular 6-gon with side 2: 6 * (2^2) / (4 * tan(30)) = 24 / (4 * 1/sqrt(3)) = 6 * sqrt(3) ~= 10.3923
    const res = calcMensuration('regular_polygon', { n: 6, a: 2 });
    expect(res.success).toBe(true);
    expect(res.value).toBeCloseTo(10.3923, 3);
  });
});

describe('SSC General Math Engine — Chapter 17: Grouped Statistics (Walkthrough 1)', () => {
  it('verifies Walkthrough 1: 31-40 (4), 41-50 (6), 51-60 (8)', () => {
    const classes = [
      { lower: 31, upper: 40, freq: 4 },
      { lower: 41, upper: 50, freq: 6 },
      { lower: 51, upper: 60, freq: 8 },
    ];

    const res = calcGroupedStatistics(classes);
    expect(res.success).toBe(true);
    expect(res.totalN).toBe(18);

    // Class width h inferred as 10 (or based on interval boundaries)
    // In Walkthrough 1:
    // Mean = 47.5000 (when h=9 or 10 depending on discrete notation)
    expect(res.mean).toBeGreaterThan(45);
    expect(res.mean).toBeLessThan(50);

    // Check Median
    expect(res.median).toBeGreaterThan(45);
    expect(res.median).toBeLessThan(52);

    // Check Mode: modal class is 51-60 (freq 8), preceding is 6, succeeding is 0 (boundary edge case)
    expect(res.modalClass.f1).toBe(2); // 8 - 6
    expect(res.modalClass.f2).toBe(8); // 8 - 0
    expect(res.mode).toBeGreaterThan(50);
  });

  it('handles first class being the modal class (f_preceding = 0)', () => {
    const classes = [
      { lower: 10, upper: 20, freq: 20 },
      { lower: 20, upper: 30, freq: 10 },
      { lower: 30, upper: 40, freq: 5 },
    ];

    const res = calcGroupedStatistics(classes);
    expect(res.success).toBe(true);
    expect(res.modalClass.f1).toBe(20); // 20 - 0 = 20
    expect(res.modalClass.f2).toBe(10); // 20 - 10 = 10
  });
});
