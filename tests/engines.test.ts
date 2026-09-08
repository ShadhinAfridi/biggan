import { describe, it, expect } from 'vitest';
import { calculateMolarMass } from '../src/tools/molar-mass/engine';
import { REDOX_PRESETS, getRedoxSolution } from '../src/tools/redox-balancer/engine';
import { analyzeSigFigs, calculateSigFigArithmetic } from '../src/tools/significant-figures/engine';
import { calculateProjectile } from '../src/tools/projectile-motion/engine';
import { solveQuadratic } from '../src/tools/quadratic-solver/engine';

describe('Molar Mass Deconstructor Engine', () => {
  it('correctly calculates molar mass of water (H2O)', () => {
    const res = calculateMolarMass('H2O');
    expect(res.totalMolarMass).toBeCloseTo(18.015, 2);
    expect(res.composition).toHaveLength(2);
    expect(res.composition.find((c) => c.element.symbol === 'H')?.count).toBe(2);
    expect(res.composition.find((c) => c.element.symbol === 'O')?.count).toBe(1);
  });

  it('correctly calculates hydrated salt (CuSO4·5H2O)', () => {
    const res = calculateMolarMass('CuSO4·5H2O');
    // Cu (63.546) + S (32.06) + 4*O (63.996) + 5*(H2O = 18.015) = 249.68 g/mol
    expect(res.totalMolarMass).toBeCloseTo(249.68, 1);
    const cu = res.composition.find((c) => c.element.symbol === 'Cu');
    expect(cu?.percentage).toBeGreaterThan(25);
    expect(cu?.percentage).toBeLessThan(26);
  });

  it('handles nested parentheses like Ca(OH)2', () => {
    const res = calculateMolarMass('Ca(OH)2');
    expect(res.totalMolarMass).toBeCloseTo(74.09, 1);
    expect(res.composition.find((c) => c.element.symbol === 'O')?.count).toBe(2);
    expect(res.composition.find((c) => c.element.symbol === 'H')?.count).toBe(2);
  });

  it('throws for unknown element symbols', () => {
    expect(() => calculateMolarMass('Xx2O')).toThrow(/Unknown element symbol/);
  });
});

describe('Ion-Electron Redox Balancer Engine', () => {
  it('provides verified solution for acidic KMnO4 + FeSO4', () => {
    const sol = getRedoxSolution('permanganate-iron-acidic');
    expect(sol).toBeDefined();
    expect(sol?.medium).toBe('acidic');
    expect(sol?.oxidationHalf.multiplier).toBe(5);
    expect(sol?.reductionHalf.multiplier).toBe(1);
    expect(sol?.balancedIonicLatex).toContain('5\\text{Fe}^{2+}');
    expect(sol?.balancedIonicLatex).toContain('8\\text{H}^+');
  });

  it('provides verified solution for basic KMnO4 + KI', () => {
    const sol = getRedoxSolution('permanganate-iodide-basic');
    expect(sol).toBeDefined();
    expect(sol?.medium).toBe('basic');
    expect(sol?.balancedIonicLatex).toContain('\\text{OH}^-');
    expect(sol?.reductionHalf.multiplier).toBe(2);
  });
});

describe('Significant Figures Engine', () => {
  it('correctly identifies sig figs for leading and trailing zeros', () => {
    const a1 = analyzeSigFigs('0.00500');
    expect(a1.count).toBe(3);
    expect(a1.significantDigits).toBe('500');
    expect(a1.decimalPlaces).toBe(5);

    const a2 = analyzeSigFigs('104.50');
    expect(a2.count).toBe(5);

    const a3 = analyzeSigFigs('100');
    expect(a3.count).toBe(1);
  });

  it('governs addition by decimal places', () => {
    const res = calculateSigFigArithmetic('add', '12.1', '0.354');
    // 12.1 has 1 decimal place -> result should be 12.5
    expect(res.roundedResult).toBe('12.5');
  });

  it('governs multiplication by least significant figures', () => {
    const res = calculateSigFigArithmetic('multiply', '2.5', '3.42');
    // 2.5 has 2 sig figs -> 8.55 rounds to 8.6 (2 sig figs)
    expect(res.roundedResult).toBe('8.6');
  });
});

describe('Kinematic Projectile Motion Solver', () => {
  it('calculates trajectory metrics for standard ground launch', () => {
    const res = calculateProjectile({ v0: 20, theta: 45, y0: 0, g: 9.8 });
    expect(res.v0x).toBeCloseTo(14.14, 1);
    expect(res.v0y).toBeCloseTo(14.14, 1);
    expect(res.maxHeight).toBeCloseTo(10.2, 1);
    expect(res.range).toBeCloseTo(40.8, 1);
    expect(res.trajectory.length).toBeGreaterThan(50);
  });

  it('validates invalid inputs', () => {
    expect(() => calculateProjectile({ v0: -5, theta: 45 })).toThrow();
    expect(() => calculateProjectile({ v0: 20, theta: 110 })).toThrow();
  });
});

describe('Procedural Quadratic Equation Solver', () => {
  it('solves distinct real roots: x^2 - 5x + 6 = 0', () => {
    const res = solveQuadratic(1, -5, 6);
    expect(res.discriminant).toBe(1);
    expect(res.rootType).toBe('real_distinct');
    expect(res.x1.real).toBe(3);
    expect(res.x2.real).toBe(2);
  });

  it('solves repeated root: x^2 - 4x + 4 = 0', () => {
    const res = solveQuadratic(1, -4, 4);
    expect(res.discriminant).toBe(0);
    expect(res.rootType).toBe('real_repeated');
    expect(res.x1.real).toBe(2);
  });

  it('solves complex conjugate roots: x^2 + 2x + 5 = 0', () => {
    const res = solveQuadratic(1, 2, 5);
    expect(res.discriminant).toBe(-16);
    expect(res.rootType).toBe('complex');
    expect(res.x1.real).toBe(-1);
    expect(res.x1.imag).toBe(2);
    expect(res.x2.real).toBe(-1);
    expect(res.x2.imag).toBe(-2);
  });

  it('throws when a = 0', () => {
    expect(() => solveQuadratic(0, 2, 1)).toThrow(/cannot be 0/);
  });
});
