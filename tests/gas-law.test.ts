import { describe, it, expect } from 'vitest';
import {
  solveIdealGas,
  calcKineticParameters,
  solveCombinedGasLaw,
  toKelvin,
  toAtm,
  toLiters,
} from '../src/tools/gas-law/engine';

describe('Gas Law Engine Suite', () => {
  it('solves ideal gas law for Volume at STP (1 atm, 273.15 K, 1 mol)', () => {
    const res = solveIdealGas('V', 1, 0, 1, 273.15);
    expect(res.solvedValue).toBeCloseTo(22.42, 1);
    expect(res.unit).toBe('L');
  });

  it('solves ideal gas law for Pressure', () => {
    // 2 moles in 10 L at 300 K
    const res = solveIdealGas('P', 0, 10, 2, 300);
    // P = 2 * 0.0821 * 300 / 10 = 4.926 atm
    expect(res.solvedValue).toBeCloseTo(4.926, 2);
  });

  it('calculates RMS speed and kinetic energy correctly for O2 at 300K', () => {
    // O2 molar mass = 32 g/mol
    const res = calcKineticParameters(300, 32, 1);
    // c_rms = sqrt(3 * 8.314 * 300 / 0.032) = sqrt(233831.25) ≈ 483.56 m/s
    expect(res.c_rms).toBeCloseTo(483.56, 1);
    // totalEk = 1.5 * 1 * 8.314 * 300 = 3741.3 J
    expect(res.totalEk).toBeCloseTo(3741.3, 1);
  });

  it('solves combined gas law correctly', () => {
    // Initial: 1 atm, 2 L, 300 K -> Final: ?, 1 L, 600 K
    // P2 = (P1 * V1 * T2) / (T1 * V2) = (1 * 2 * 600) / (300 * 1) = 4 atm
    const p2 = solveCombinedGasLaw('P2', 1, 2, 300, 0, 1, 600);
    expect(p2).toBe(4);
  });

  it('converts temperature, pressure, and volume units accurately', () => {
    expect(toKelvin(25, 'C')).toBeCloseTo(298.15, 2);
    expect(toAtm(760, 'mmHg')).toBeCloseTo(1, 4);
    expect(toAtm(101.325, 'kPa')).toBeCloseTo(1, 4);
    expect(toLiters(250, 'mL')).toBe(0.25);
  });
});
