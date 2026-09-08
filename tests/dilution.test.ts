import { describe, it, expect } from 'vitest';
import {
  calcSolutionPrep,
  calcDilution,
  convertConcentration,
  calcTitration,
} from '../src/tools/solution-dilution/engine';

describe('Solution Preparation & Dilution Suite', () => {
  it('calculates mass W needed for 0.1 M, 250 mL Na2CO3 (M = 105.99)', () => {
    // W = (S * M * V) / 1000 = (0.1 * 105.99 * 250) / 1000 = 2.64975 g
    const res = calcSolutionPrep('W', 0, 0.1, 105.99, 250);
    expect(res.result).toBeCloseTo(2.6498, 3);
    expect(res.unit).toBe('g');
  });

  it('calculates molarity S from mass and volume', () => {
    // 4g NaOH in 1000 mL -> S = 1000 * 4 / (40 * 1000) = 0.1 M
    const res = calcSolutionPrep('S', 4, 0, 40, 1000);
    expect(res.result).toBe(0.1);
  });

  it('calculates stock dilution V1 S1 = V2 S2 and water to add', () => {
    // Prepare 500 mL of 0.1 M from 2.0 M stock
    // V1 = (500 * 0.1) / 2 = 25 mL
    // water to add = 500 - 25 = 475 mL
    const res = calcDilution('V1', 0, 2.0, 500, 0.1);
    expect(res.result).toBe(25);
    expect(res.solventToAdd).toBe(475);
  });

  it('converts molarity to ppm and percent w/v', () => {
    // 0.01 M NaOH (M = 40)
    // ppm = 0.01 * 40 * 1000 = 400 ppm
    // % w/v = 0.01 * 40 / 10 = 0.04%
    const res = convertConcentration(0.01, 40);
    expect(res.ppm).toBe(400);
    expect(res.percentWv).toBe(0.04);
  });

  it('calculates acid-base titration equivalence volume', () => {
    // 25 mL of 0.1 M H2SO4 (e=2) neutralized by 0.2 M NaOH (e=1)
    // VB = (VA * SA * eA) / (SB * eB) = (25 * 0.1 * 2) / (0.2 * 1) = 5 / 0.2 = 25 mL
    const vb = calcTitration(25, 0.1, 2, 0, 0.2, 1, 'vB');
    expect(vb).toBe(25);
  });
});
