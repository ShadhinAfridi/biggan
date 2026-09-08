import { describe, it, expect } from 'vitest';
import {
  parseChemicalFormula,
  calcGrahamDiffusion,
  calcAverageAtomicMass,
  calcBohrAngularMomentum,
  convertUnifiedMole,
  calcMolarity,
  calcEmpiricalAndMolecularFormula,
  calcLimitingReactant,
  calcOxidationState,
  calcReactionEnthalpy,
  calcPH,
  calcNeutralization,
  generateHydrocarbon,
} from '../src/tools/chemistry/engine';

describe('SSC Chemistry Engine - All Quantitative Modules Unit Tests', () => {
  // Formula Parser
  it('Parser: Correctly parses standard formulas and hydrates', () => {
    const water = parseChemicalFormula('H2O');
    expect(water.molarMass).toBeCloseTo(18.015, 2);
    expect(water.counts['H']).toBe(2);
    expect(water.counts['O']).toBe(1);

    const slakedLime = parseChemicalFormula('Ca(OH)2');
    expect(slakedLime.counts['Ca']).toBe(1);
    expect(slakedLime.counts['O']).toBe(2);
    expect(slakedLime.counts['H']).toBe(2);

    const blueVitriol = parseChemicalFormula('CuSO4.5H2O');
    expect(blueVitriol.counts['Cu']).toBe(1);
    expect(blueVitriol.counts['S']).toBe(1);
    expect(blueVitriol.counts['O']).toBe(9); // 4 + 5
    expect(blueVitriol.counts['H']).toBe(10);
    expect(blueVitriol.molarMass).toBeCloseTo(249.68, 1);
  });

  // Module A: Graham's Law
  it('Module A: Graham Diffusion Ratio (NH3 vs HCl)', () => {
    // NH3 = 17, HCl = 36.5
    const diffRes = calcGrahamDiffusion('ratio', { M1: 17.03, M2: 36.46 });
    expect(diffRes.success).toBe(true);
    expect(Number(diffRes.value)).toBeCloseTo(Math.sqrt(36.46 / 17.03), 2); // ~1.46
    expect(diffRes.extraData?.isG1Faster).toBe(true);
  });

  // Module B: Atomic Structure
  it('Module B: Average Atomic Mass of Chlorine & Bohr Angular Momentum', () => {
    const isoRes = calcAverageAtomicMass([
      { massNumber: 35, abundance: 75 },
      { massNumber: 37, abundance: 25 },
    ]);
    expect(isoRes.success).toBe(true);
    expect(isoRes.value).toBe(35.5);

    const bohrRes = calcBohrAngularMomentum(2);
    expect(bohrRes.success).toBe(true);
    expect(Number(bohrRes.value)).toBeCloseTo((2 * 6.626e-34) / (2 * Math.PI));
  });

  // Module C1: Unified Mole Equation
  it('Module C1: Unified Mole Conversion', () => {
    // 54g of Water (M = 18 g/mol) => 3 moles => 67.2 L at STP => 3 * 6.023e23 particles
    const moleRes = convertUnifiedMole({ type: 'mass', value: 54, molarMass: 18 });
    expect(moleRes.success).toBe(true);
    expect(moleRes.value).toBe(3);
    expect(moleRes.extraData?.volumeSTP).toBeCloseTo(67.2);
    expect(moleRes.extraData?.particles).toBeCloseTo(3 * 6.023e23);
  });

  // Module C2: Solution Molarity
  it('Module C2: Solution Molarity and Solute Mass', () => {
    // W = (S * V * M) / 1000 for 0.1 M, 250 mL of Na2CO3 (M = 106) => 2.65 g
    const wRes = calcMolarity('W', { S: 0.1, V: 250, M: 106 });
    expect(wRes.success).toBe(true);
    expect(wRes.value).toBe(2.65);

    // Molarity: 5.3g Na2CO3 in 250 mL => 0.2 M
    const sRes = calcMolarity('S', { W: 5.3, V: 250, M: 106 });
    expect(sRes.success).toBe(true);
    expect(sRes.value).toBe(0.2);
  });

  // Module C4: Empirical and Molecular Formula
  it('Module C4: Empirical and Molecular Formula Synthesis', () => {
    // Benzene: C = 92.31%, H = 7.69%, Molar mass = 78
    const formulaRes = calcEmpiricalAndMolecularFormula(
      [
        { symbol: 'C', percentage: 92.31 },
        { symbol: 'H', percentage: 7.69 },
      ],
      78
    );
    expect(formulaRes.success).toBe(true);
    expect(formulaRes.extraData?.empiricalFormula).toBe('CH');
    expect(formulaRes.extraData?.molecularFormula).toBe('C6H6');
    expect(formulaRes.extraData?.nFactor).toBe(6);
  });

  // Module C5: Limiting Reactant
  it('Module C5: Limiting Reactant and Excess Determination', () => {
    // 2 H2 + O2 -> 2 H2O (coeffA=2, coeffB=1, coeffC=2)
    // 4g H2 (2 mol) + 16g O2 (0.5 mol). Ratio H2 = 2/2 = 1, Ratio O2 = 0.5/1 = 0.5.
    // O2 is limiting!
    const limitRes = calcLimitingReactant(
      2, 4, 2, 'H2',
      1, 16, 32, 'O2',
      2, 18, 'H2O',
      18
    );
    expect(limitRes.success).toBe(true);
    expect(limitRes.value).toBe('O2');
    expect(limitRes.extraData?.isALimiting).toBe(false);
    expect(limitRes.extraData?.theoreticalMassC).toBe(18); // 0.5 * 2 * 18 = 18g H2O
    expect(limitRes.extraData?.percentYield).toBe(100);
  });

  // Module D: Oxidation State
  it('Module D: Algebraic Oxidation Number Solving', () => {
    // KMnO4: Mn should be +7
    const mnRes = calcOxidationState('KMnO4', 'Mn', 0);
    expect(mnRes.success).toBe(true);
    expect(mnRes.value).toBe('+7');

    // H2SO4: S should be +6
    const sRes = calcOxidationState('H2SO4', 'S', 0);
    expect(sRes.success).toBe(true);
    expect(sRes.value).toBe('+6');
  });

  // Module E: Bond Energy Enthalpy (Delta H)
  it('Module E: Reaction Enthalpy Delta H for Methane Chlorination', () => {
    // CH4 + Cl2 -> CH3Cl + HCl
    // Broken: 1 C-H (414) + 1 Cl-Cl (244) = 658
    // Formed: 1 C-Cl (326) + 1 H-Cl (431) = 757
    // Delta H = 658 - 757 = -99 kJ/mol
    const enthRes = calcReactionEnthalpy(
      [
        { bond: 'C-H', count: 1 },
        { bond: 'Cl-Cl', count: 1 },
      ],
      [
        { bond: 'C-Cl', count: 1 },
        { bond: 'H-Cl', count: 1 },
      ]
    );
    expect(enthRes.success).toBe(true);
    expect(enthRes.value).toBe(-99);
    expect(enthRes.extraData?.isExothermic).toBe(true);
  });

  // Module F: pH & Titration
  it('Module F: pH and Acid-Base Titration Neutralization', () => {
    // [H+] = 0.01 M => pH = 2, pOH = 12
    const phRes = calcPH(0.01, 'conc_H');
    expect(phRes.success).toBe(true);
    expect(phRes.value).toBe(2);
    expect(phRes.extraData?.pOH).toBe(12);

    // Titration: HCl (a=1) + NaOH (b=1): 25 mL of 0.1 M HCl neutralized by 0.1 M NaOH => 25 mL
    const titrRes = calcNeutralization(25, 0.1, 1, 1, undefined, 0.1, 'VB');
    expect(titrRes.success).toBe(true);
    expect(titrRes.value).toBe(25);
  });

  // Module G: Hydrocarbons
  it('Module G: Hydrocarbon Homologous Series Generation', () => {
    // Propane: n = 3, Alkane => C3H8
    const alkaneRes = generateHydrocarbon('alkane', 3);
    expect(alkaneRes.success).toBe(true);
    expect(alkaneRes.extraData?.molecularFormula).toBe('C3H8');
    expect(alkaneRes.extraData?.condensed).toBe('CH3-CH2-CH3');

    // Ethene: n = 2, Alkene => C2H4
    const alkeneRes = generateHydrocarbon('alkene', 2);
    expect(alkeneRes.success).toBe(true);
    expect(alkeneRes.extraData?.molecularFormula).toBe('C2H4');
    expect(alkeneRes.extraData?.condensed).toBe('CH2=CH2');
  });
});
