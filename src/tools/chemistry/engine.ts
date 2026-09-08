/**
 * SSC Chemistry Mathematical & Computational Engine
 * Compliant with National Curriculum and Textbook Board (NCTB) Bangladesh (Classes 9-10).
 * Covers quantitative modules across Chapters 1-12 with KaTeX step-by-step proofs.
 */

import { ATOMIC_WEIGHTS, BOND_ENERGIES, CHEMISTRY_CONSTANTS } from './constants';

export interface StepItem {
  labelBn: string;
  labelEn: string;
  latex: string;
  notesBn?: string;
  notesEn?: string;
}

export interface ChemistryResult {
  success: boolean;
  value?: number | string;
  unit?: string;
  steps: StepItem[];
  errorMessage?: string;
  extraData?: Record<string, any>;
}

// Utility: Format numbers cleanly
function fmt(num: number, decimals: number = 4): string {
  if (Math.abs(num) >= 1e6 || (Math.abs(num) < 1e-3 && num !== 0)) {
    return num.toExponential(decimals);
  }
  const factor = Math.pow(10, decimals);
  return (Math.round(num * factor) / factor).toString();
}

// ==========================================
// FORMULA PARSER ENGINE (Parentheses & Hydrates)
// ==========================================

function parseFormulaChunk(chunk: string): Record<string, number> {
  const counts: Record<string, number> = {};
  let i = 0;

  function parseSubgroup(): Record<string, number> {
    const subCounts: Record<string, number> = {};

    while (i < chunk.length) {
      const char = chunk[i];

      if (char === '(' || char === '[' || char === '{') {
        i++;
        const inner = parseSubgroup();
        let multiplier = 1;

        const numMatch = chunk.slice(i).match(/^\d+/);
        if (numMatch) {
          multiplier = parseInt(numMatch[0], 10);
          i += numMatch[0].length;
        }

        for (const [sym, count] of Object.entries(inner)) {
          subCounts[sym] = (subCounts[sym] || 0) + count * multiplier;
        }
      } else if (char === ')' || char === ']' || char === '}') {
        i++;
        return subCounts;
      } else {
        const elemMatch = chunk.slice(i).match(/^[A-Z][a-z]?/);
        if (!elemMatch) {
          i++;
          continue;
        }

        const symbol = elemMatch[0];
        i += symbol.length;

        let count = 1;
        const countMatch = chunk.slice(i).match(/^\d+/);
        if (countMatch) {
          count = parseInt(countMatch[0], 10);
          i += countMatch[0].length;
        }

        subCounts[symbol] = (subCounts[symbol] || 0) + count;
      }
    }

    return subCounts;
  }

  const result = parseSubgroup();
  for (const [sym, count] of Object.entries(result)) {
    counts[sym] = (counts[sym] || 0) + count;
  }
  return counts;
}

export interface ParsedFormula {
  counts: Record<string, number>;
  molarMass: number;
  details: Array<{ symbol: string; count: number; atomicWeight: number; mass: number; percentage: number }>;
}

export function parseChemicalFormula(rawFormula: string): ParsedFormula {
  // Normalize whitespace, unicode dots (·, ⋅, •, *), or dot separators
  const cleanInput = rawFormula.trim();
  if (!cleanInput) {
    throw new Error('রাসায়নিক সংকেত প্রদান করুন (যেমন: H2O, CuSO4.5H2O, Na2CO3)।');
  }

  // Split on hydrate dots/asterisks or whitespace before water (e.g. CuSO4 5H2O)
  const normalized = cleanInput.replace(/[\u00B7\u22C5\u2022\*]/g, '.');
  const parts = normalized.split(/(?<=[a-zA-Z\d\)\}\]])\.(?=\d*[A-Z])|\s+(?=\d*H2O)/i);

  const totalCounts: Record<string, number> = {};

  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    const coeffMatch = trimmed.match(/^(\d+)(.*)$/);
    let coeff = 1;
    let formulaPart = trimmed;

    if (coeffMatch && coeffMatch[1] && coeffMatch[2]) {
      coeff = parseInt(coeffMatch[1], 10);
      formulaPart = coeffMatch[2];
    }

    const partCounts = parseFormulaChunk(formulaPart);
    for (const [sym, cnt] of Object.entries(partCounts)) {
      totalCounts[sym] = (totalCounts[sym] || 0) + cnt * coeff;
    }
  }

  // Calculate total molar mass
  let totalMass = 0;
  const details: ParsedFormula['details'] = [];

  for (const [symbol, count] of Object.entries(totalCounts)) {
    const atomicWeight = ATOMIC_WEIGHTS[symbol] || 0;
    if (atomicWeight === 0) {
      throw new Error(`অজানা মৌল চিহ্ন: ${symbol}। সঠিক প্রতীক লিখুন।`);
    }
    const mass = atomicWeight * count;
    totalMass += mass;
    details.push({ symbol, count, atomicWeight, mass, percentage: 0 });
  }

  // Compute percentages
  for (const item of details) {
    item.percentage = (item.mass / totalMass) * 100;
  }

  return { counts: totalCounts, molarMass: totalMass, details };
}

// ==========================================
// MODULE A: GAS DIFFUSION - GRAHAM'S LAW (CHAPTER 2)
// ==========================================

export const PRESET_GASES: Record<string, { nameBn: string; nameEn: string; formula: string; molarMass: number }> = {
  NH3: { nameBn: 'অ্যামোনিয়া (NH₃)', nameEn: 'Ammonia (NH3)', formula: 'NH3', molarMass: 17.031 },
  HCl: { nameBn: 'হাইড্রোজেন ক্লোরাইড (HCl)', nameEn: 'Hydrogen Chloride (HCl)', formula: 'HCl', molarMass: 36.461 },
  CO2: { nameBn: 'কার্বন ডাই অক্সাইড (CO₂)', nameEn: 'Carbon Dioxide (CO2)', formula: 'CO2', molarMass: 44.009 },
  CH4: { nameBn: 'মিথেন (CH₄)', nameEn: 'Methane (CH4)', formula: 'CH4', molarMass: 16.043 },
  SO2: { nameBn: 'সালফার ডাই অক্সাইড (SO₂)', nameEn: 'Sulfur Dioxide (SO2)', formula: 'SO2', molarMass: 64.066 },
  O2: { nameBn: 'অক্সিজেন (O₂)', nameEn: 'Oxygen (O2)', formula: 'O2', molarMass: 31.998 },
  N2: { nameBn: 'নাইট্রোজেন (N₂)', nameEn: 'Nitrogen (N2)', formula: 'N2', molarMass: 28.014 },
  H2: { nameBn: 'হাইড্রোজেন (H₂)', nameEn: 'Hydrogen (H2)', formula: 'H2', molarMass: 2.016 },
  Cl2: { nameBn: 'ক্লোরিন (Cl₂)', nameEn: 'Chlorine (Cl2)', formula: 'Cl2', molarMass: 70.9 },
};

export function calcGrahamDiffusion(
  solveFor: 'ratio' | 'r1' | 'r2' | 'M1' | 'M2',
  params: { r1?: number; r2?: number; M1?: number; M2?: number }
): ChemistryResult {
  const { r1, r2, M1, M2 } = params;

  if (solveFor === 'ratio') {
    if (!M1 || !M2 || M1 <= 0 || M2 <= 0) {
      return { success: false, steps: [], errorMessage: 'উভয় গ্যাসের আণবিক ভর (M1 > 0, M2 > 0) প্রদান করুন।' };
    }
    const ratio = Math.sqrt(M2 / M1);
    const isG1Faster = ratio > 1;
    return {
      success: true,
      value: ratio,
      unit: 'অনুপাত (Ratio)',
      extraData: { ratio, isG1Faster },
      steps: [
        {
          labelBn: 'গ্রাহামের গ্যাস ব্যাপন সূত্র',
          labelEn: "Graham's Law of Effusion",
          latex: '\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}}',
        },
        {
          labelBn: 'মান প্রতিস্থাপন ও ব্যাপন হারের তুলনা',
          labelEn: 'Evaluation & Comparison',
          latex: `\\frac{r_1}{r_2} = \\sqrt{\\frac{${M2}}{${M1}}} = \\sqrt{${fmt(M2 / M1, 4)}} = ${fmt(ratio, 4)}`,
          notesBn: isG1Faster
            ? `১ম গ্যাসের ব্যাপনের হার ২য় গ্যাস অপেক্ষা ${fmt(ratio, 2)} গুণ বেশি (যেহেতু ১ম গ্যাস হালকা)।`
            : `২য় গ্যাসের ব্যাপনের হার ১ম গ্যাস অপেক্ষা ${fmt(1 / ratio, 2)} গুণ বেশি (যেহেতু ২য় গ্যাস হালকা)।`,
          notesEn: isG1Faster
            ? `Gas 1 diffuses ${fmt(ratio, 2)} times faster than Gas 2 because it has a lower molecular mass.`
            : `Gas 2 diffuses ${fmt(1 / ratio, 2)} times faster than Gas 1.`,
        },
      ],
    };
  }

  if (solveFor === 'r1') {
    if (!r2 || !M1 || !M2 || r2 <= 0 || M1 <= 0 || M2 <= 0) {
      return { success: false, steps: [], errorMessage: 'r2, M1 এবং M2 এর ধনাত্মক মান প্রদান করুন।' };
    }
    const calculatedR1 = r2 * Math.sqrt(M2 / M1);
    return {
      success: true,
      value: calculatedR1,
      unit: 'cm/s বা mL/s',
      steps: [
        { labelBn: '১ম গ্যাসের ব্যাপন হার সূত্র', labelEn: 'Diffusion Rate Formula for r1', latex: 'r_1 = r_2 \\times \\sqrt{\\frac{M_2}{M_1}}' },
        { labelBn: 'হিসাব', labelEn: 'Evaluation', latex: `r_1 = ${r2} \\times \\sqrt{\\frac{${M2}}{${M1}}} = ${fmt(calculatedR1, 4)}` },
      ],
    };
  }

  if (solveFor === 'M1') {
    if (!r1 || !r2 || !M2 || r1 <= 0 || r2 <= 0 || M2 <= 0) {
      return { success: false, steps: [], errorMessage: 'r1, r2 এবং M2 এর ধনাত্মক মান দিন।' };
    }
    const calculatedM1 = M2 * Math.pow(r2 / r1, 2);
    return {
      success: true,
      value: calculatedM1,
      unit: 'g/mol',
      steps: [
        { labelBn: 'আণবিক ভর M1 রূপান্তর', labelEn: 'Molar Mass Formula for M1', latex: 'M_1 = M_2 \\times \\left(\\frac{r_2}{r_1}\\right)^2' },
        { labelBn: 'মান নির্ণয়', labelEn: 'Calculation', latex: `M_1 = ${M2} \\times \\left(\\frac{${r2}}{${r1}}\\right)^2 = ${fmt(calculatedM1, 4)}\\text{ g/mol}` },
      ],
    };
  }

  return { success: false, steps: [], errorMessage: 'অবৈধ প্যারামিটার।' };
}

// ==========================================
// MODULE B: ATOMIC STRUCTURE (CHAPTER 3)
// ==========================================

export function calcAverageAtomicMass(
  isotopes: Array<{ massNumber: number; abundance: number }>
): ChemistryResult {
  if (isotopes.length < 2) {
    return { success: false, steps: [], errorMessage: 'অন্তত ২টি আইসোটোপ ও তাদের শতকরা প্রাচুর্য ইনপুট দিন।' };
  }

  const totalAbundance = isotopes.reduce((acc, iso) => acc + iso.abundance, 0);
  if (Math.abs(totalAbundance - 100) > 0.5) {
    return {
      success: false,
      steps: [],
      errorMessage: `আইসোটোপসমূহের শতকরা প্রাচুর্যের যোগফল অবশ্যই ১০০% হতে হবে (বর্তমান যোগফল: ${fmt(totalAbundance, 2)}%)।`,
    };
  }

  const weightedSum = isotopes.reduce((acc, iso) => acc + iso.massNumber * iso.abundance, 0);
  const avgMass = weightedSum / 100;

  const expansionLatex = isotopes
    .map((iso) => `(${iso.massNumber} \\times ${iso.abundance}\\%)`)
    .join(' + ');

  return {
    success: true,
    value: avgMass,
    unit: 'amu বা g/mol',
    extraData: { avgMass, totalAbundance },
    steps: [
      {
        labelBn: 'গড় আপেক্ষিক পারমাণবিক ভর সূত্র',
        labelEn: 'Average Relative Atomic Mass Formula',
        latex: '\\text{গড় পারমাণবিক ভর} = \\frac{\\sum (A_i \\times p_i)}{100}',
      },
      {
        labelBn: 'আইসোটোপসমূহের মান বসিয়ে হিসাব',
        labelEn: 'Step-by-step Substitution',
        latex: `\\text{ভর} = \\frac{${expansionLatex}}{100} = \\frac{${fmt(weightedSum, 3)}}{100} = ${fmt(avgMass, 3)}`,
        notesBn: `অতএব, মৌলটির গড় আপেক্ষিক পারমাণবিক ভর ${fmt(avgMass, 3)}।`,
        notesEn: `The average relative atomic mass of the element is ${fmt(avgMass, 3)}.`,
      },
    ],
  };
}

export function calcBohrAngularMomentum(n: number): ChemistryResult {
  if (n < 1 || !Number.isInteger(n)) {
    return { success: false, steps: [], errorMessage: 'প্রধান কোয়ান্টাম সংখ্যা n অবশ্যই ধনাত্মক পূর্ণসংখ্যা হতে হবে (n = 1, 2, 3...)।' };
  }

  const h = CHEMISTRY_CONSTANTS.PLANCK_CONSTANT;
  const angularMomentum = (n * h) / (2 * Math.PI);

  return {
    success: true,
    value: angularMomentum,
    unit: 'kg·m²/s (বা J·s)',
    extraData: { n, angularMomentum },
    steps: [
      {
        labelBn: 'বোর পরমাণু মডেলের কৌণিক ভরবেগ প্রস্তাবনা',
        labelEn: "Bohr's Angular Momentum Postulate",
        latex: 'mvr = \\frac{n h}{2\\pi}',
      },
      {
        labelBn: `${n}-তম শক্তিস্তরের ইলেকট্রনের কৌণিক ভরবেগ`,
        labelEn: `Angular momentum for orbit n = ${n}`,
        latex: `mvr = \\frac{${n} \\times (6.626 \\times 10^{-34})}{2\\pi} = ${angularMomentum.toExponential(4)}\\text{ kg}\\cdot\\text{m}^2/\\text{s}`,
      },
    ],
  };
}

// ==========================================
// MODULE C: MOLE & CHEMICAL COUNTING (CHAPTER 6)
// ==========================================

export function convertUnifiedMole(
  input: {
    type: 'moles' | 'mass' | 'volume' | 'particles';
    value: number;
    molarMass: number;
  }
): ChemistryResult {
  const { type, value, molarMass } = input;
  if (value <= 0 || molarMass <= 0) {
    return { success: false, steps: [], errorMessage: 'প্রদত্ত মান এবং আণবিক ভর উভয়ই ধনাত্মক হতে হবে।' };
  }

  const NA = CHEMISTRY_CONSTANTS.AVOGADRO_NUMBER;
  const V_STP = CHEMISTRY_CONSTANTS.MOLAR_VOLUME_STP;

  let moles = 0;
  if (type === 'moles') moles = value;
  else if (type === 'mass') moles = value / molarMass;
  else if (type === 'volume') moles = value / V_STP;
  else if (type === 'particles') moles = value / NA;

  const massGrams = moles * molarMass;
  const volumeSTP = moles * V_STP;
  const particles = moles * NA;

  return {
    success: true,
    value: moles,
    unit: 'mol',
    extraData: { moles, massGrams, volumeSTP, particles, molarMass },
    steps: [
      {
        labelBn: 'মোলের সমন্বিত সমীকরণ (NCTB Unified Mole Formula)',
        labelEn: 'Unified Mole Conversion Formula',
        latex: 'n = \\frac{W}{M} = \\frac{V}{22.4} = \\frac{N}{6.023 \\times 10^{23}}',
      },
      {
        labelBn: 'মোট মোল সংখ্যা (n)',
        labelEn: 'Calculated Mole Count (n)',
        latex: `n = ${fmt(moles, 4)}\\text{ moles (মোল)}`,
      },
      {
        labelBn: 'রূপান্তরিত সকল পরিমাপসমূহ (STP-তে)',
        labelEn: 'Equivalent Quantities at STP',
        latex: `\\begin{aligned} W &= n \\times M = ${fmt(moles, 4)} \\times ${molarMass} = ${fmt(massGrams, 4)}\\text{ g} \\\\ V &= n \\times 22.4 = ${fmt(moles, 4)} \\times 22.4 = ${fmt(volumeSTP, 4)}\\text{ L} \\\\ N &= n \\times 6.023 \\times 10^{23} = ${particles.toExponential(4)}\\text{ টি কণা} \\end{aligned}`,
      },
    ],
  };
}

export function calcMolarity(
  solveFor: 'W' | 'S' | 'V' | 'M',
  params: { W?: number; S?: number; V?: number; M?: number; compoundName?: string }
): ChemistryResult {
  const { W, S, V, M, compoundName } = params;

  if (solveFor === 'W') {
    if (!S || !V || !M || S <= 0 || V <= 0 || M <= 0) {
      return { success: false, steps: [], errorMessage: 'মোলারিটি (S), আয়তন (V mL), এবং আণবিক ভর (M) দিন।' };
    }
    const calculatedW = (S * V * M) / 1000;
    return {
      success: true,
      value: calculatedW,
      unit: 'g (গ্রাম)',
      extraData: { W: calculatedW, S, V, M },
      steps: [
        {
          labelBn: 'দ্রব্যের ভর নির্ণয়ের সূত্র',
          labelEn: 'Solute Mass Formula',
          latex: 'W = \\frac{S \\times V \\times M}{1000}',
        },
        {
          labelBn: 'মান প্রতিস্থাপন ও ভর হিসাব',
          labelEn: 'Mass Evaluation',
          latex: `W = \\frac{${S}\\text{ M} \\times ${V}\\text{ mL} \\times ${M}\\text{ g/mol}}{1000} = ${fmt(calculatedW, 4)}\\text{ grams}`,
          notesBn: `ল্যাবরেটরি প্রস্তুতি নির্দেশিকা: একটি ${V} mL এর মেজারিং ফ্লাস্কে ${fmt(calculatedW, 4)} g ${compoundName || 'দ্রব'} ডিজিটাল ব্যালেন্সে মেপে নিয়ে পাতিত পানিতে দ্রবীভূত করে দাগ পর্যন্ত পানি পূর্ণ করুন। এতে ${S} M ঘনমাত্রার দ্রবণ প্রস্তুত হবে।`,
          notesEn: `Lab Preparation Note: Weigh ${fmt(calculatedW, 4)} g of solute on an analytical balance, transfer to a ${V} mL volumetric flask, dissolve in distilled water, and dilute to the calibration mark.`,
        },
      ],
    };
  }

  if (solveFor === 'S') {
    if (!W || !V || !M || W <= 0 || V <= 0 || M <= 0) {
      return { success: false, steps: [], errorMessage: 'দ্রব্যের ভর (W), আয়তন (V mL), এবং আণবিক ভর (M) দিন।' };
    }
    const calculatedS = (1000 * W) / (V * M);
    return {
      success: true,
      value: calculatedS,
      unit: 'M (Molar বা mol/L)',
      extraData: { S: calculatedS, W, V, M },
      steps: [
        {
          labelBn: 'মোলারিটির সূত্র',
          labelEn: 'Molarity Formula',
          latex: 'S = \\frac{1000 \\times W}{V \\times M}',
        },
        {
          labelBn: 'মোলারিটি নির্ণয়',
          labelEn: 'Molarity Calculation',
          latex: `S = \\frac{1000 \\times ${W}}{${V} \\times ${M}} = ${fmt(calculatedS, 4)}\\text{ Molar (M)}`,
        },
      ],
    };
  }

  if (solveFor === 'V') {
    if (!W || !S || !M || W <= 0 || S <= 0 || M <= 0) {
      return { success: false, steps: [], errorMessage: 'ভর (W), মোলারিটি (S), এবং আণবিক ভর (M) দিন।' };
    }
    const calculatedV = (1000 * W) / (S * M);
    return {
      success: true,
      value: calculatedV,
      unit: 'mL',
      steps: [
        { labelBn: 'দ্রবণের আয়তন সূত্র', labelEn: 'Solution Volume Formula', latex: 'V = \\frac{1000 \\times W}{S \\times M}' },
        { labelBn: 'আয়তন হিসাব', labelEn: 'Volume Evaluation', latex: `V = \\frac{1000 \\times ${W}}{${S} \\times ${M}} = ${fmt(calculatedV, 2)}\\text{ mL}` },
      ],
    };
  }

  return { success: false, steps: [], errorMessage: 'অবৈধ অনুরোধ।' };
}

export function calcEmpiricalAndMolecularFormula(
  elements: Array<{ symbol: string; percentage: number }>,
  actualMolarMass?: number
): ChemistryResult {
  if (elements.length < 2) {
    return { success: false, steps: [], errorMessage: 'অন্তত ২টি মৌলের শতকরা সংযুতি প্রদান করুন।' };
  }

  const sumPct = elements.reduce((acc, el) => acc + el.percentage, 0);
  if (Math.abs(sumPct - 100) > 1.0) {
    return {
      success: false,
      steps: [],
      errorMessage: `মৌলসমূহের শতকরা পরিমাণের যোগফল প্রায় ১০০% হতে হবে (বর্তমান যোগফল: ${fmt(sumPct, 2)}%)।`,
    };
  }

  // 1. Divide by atomic mass
  const moleRatios = elements.map((el) => {
    const ar = ATOMIC_WEIGHTS[el.symbol] || 1;
    const ratio = el.percentage / ar;
    return { ...el, ar, ratio };
  });

  // 2. Find min ratio
  const minRatio = Math.min(...moleRatios.map((m) => m.ratio));

  // 3. Divide by min ratio to get simplest integer ratio
  const rawSubs = moleRatios.map((m) => m.ratio / minRatio);

  // Check if we need to multiply by 2 or 3 for near-half fractions (e.g. 1.5 -> 3:2)
  let factor = 1;
  for (const s of rawSubs) {
    const frac = Math.abs(s - Math.round(s));
    if (Math.abs(frac - 0.5) < 0.08) factor = Math.max(factor, 2);
    else if (Math.abs(frac - 0.33) < 0.08 || Math.abs(frac - 0.67) < 0.08) factor = Math.max(factor, 3);
  }

  const integers = rawSubs.map((s) => Math.round(s * factor));

  // Empirical formula string
  let empiricalFormula = '';
  let empiricalMass = 0;
  for (let i = 0; i < elements.length; i++) {
    const count = integers[i];
    empiricalFormula += `${elements[i].symbol}${count > 1 ? count : ''}`;
    empiricalMass += (ATOMIC_WEIGHTS[elements[i].symbol] || 1) * count;
  }

  let molecularFormula = empiricalFormula;
  let nFactor = 1;

  if (actualMolarMass && actualMolarMass > 0) {
    nFactor = Math.round(actualMolarMass / empiricalMass);
    if (nFactor < 1) nFactor = 1;
    molecularFormula = '';
    for (let i = 0; i < elements.length; i++) {
      const count = integers[i] * nFactor;
      molecularFormula += `${elements[i].symbol}${count > 1 ? count : ''}`;
    }
  }

  return {
    success: true,
    value: molecularFormula,
    extraData: { empiricalFormula, molecularFormula, empiricalMass, nFactor },
    steps: [
      {
        labelBn: 'ধাপ ১: শতকরা পরিমাণকে নিজ নিজ আপেক্ষিক পারমাণবিক ভর দিয়ে ভাগ',
        labelEn: 'Step 1: Divide percentages by atomic mass (Ar)',
        latex: moleRatios.map((m) => `\\frac{\\%(${m.symbol})}{A_r} = \\frac{${m.percentage}}{${fmt(m.ar, 2)}} = ${fmt(m.ratio, 3)}`).join(', \\quad '),
      },
      {
        labelBn: 'ধাপ ২: প্রাপ্ত ভাগফলগুলোকে ক্ষুদ্রতম ভাগফল দিয়ে ভাগ',
        labelEn: 'Step 2: Divide by the smallest ratio',
        latex: moleRatios.map((m, idx) => `${m.symbol} = \\frac{${fmt(m.ratio, 3)}}{${fmt(minRatio, 3)}} = ${fmt(rawSubs[idx], 2)} \\approx ${integers[idx]}`).join(', \\quad '),
      },
      {
        labelBn: 'ধাপ ৩: স্থূল সংকেত (Empirical Formula)',
        labelEn: 'Step 3: Empirical Formula',
        latex: `\\text{স্থূল সংকেত: } \\mathbf{${empiricalFormula}}, \\quad \\text{স্থূল সংকেত ভর} = ${fmt(empiricalMass, 2)}`,
      },
      ...(actualMolarMass
        ? [
            {
              labelBn: 'ধাপ ৪: আণবিক সংকেত গুণক (n) ও আণবিক সংকেত',
              labelEn: 'Step 4: Molecular Formula Multiplier (n)',
              latex: `n = \\frac{\\text{আণবিক ভর}}{\\text{স্থূল সংকেত ভর}} = \\frac{${actualMolarMass}}{${fmt(empiricalMass, 2)}} = ${nFactor} \\implies \\text{আণবিক সংকেত: } \\mathbf{${molecularFormula}}`,
            },
          ]
        : []),
    ],
  };
}

export function calcLimitingReactant(
  coeffA: number,
  massA: number,
  molarMassA: number,
  nameA: string,
  coeffB: number,
  massB: number,
  molarMassB: number,
  nameB: string,
  coeffC: number,
  molarMassC: number,
  nameC: string,
  actualProductMass?: number
): ChemistryResult {
  if (massA <= 0 || massB <= 0 || molarMassA <= 0 || molarMassB <= 0) {
    return { success: false, steps: [], errorMessage: 'বিক্রিয়কদ্বয়ের ভর ও আণবিক ভর ধনাত্মক হতে হবে।' };
  }

  const molesA = massA / molarMassA;
  const molesB = massB / molarMassB;

  const ratioA = molesA / coeffA;
  const ratioB = molesB / coeffB;

  const isALimiting = ratioA < ratioB;
  const limitingName = isALimiting ? nameA : nameB;
  const excessName = isALimiting ? nameB : nameA;

  // Calculate theoretical yield of product C based on limiting reagent
  const limitingMoles = isALimiting ? ratioA : ratioB;
  const theoreticalMolesC = limitingMoles * coeffC;
  const theoreticalMassC = theoreticalMolesC * molarMassC;

  // Calculate excess reactant remaining
  let excessMolesLeft = 0;
  let excessMassLeft = 0;

  if (isALimiting) {
    const requiredMolesB = molesA * (coeffB / coeffA);
    excessMolesLeft = molesB - requiredMolesB;
    excessMassLeft = excessMolesLeft * molarMassB;
  } else {
    const requiredMolesA = molesB * (coeffA / coeffB);
    excessMolesLeft = molesA - requiredMolesA;
    excessMassLeft = excessMolesLeft * molarMassA;
  }

  const percentYield = actualProductMass && actualProductMass > 0
    ? (actualProductMass / theoreticalMassC) * 100
    : undefined;

  return {
    success: true,
    value: limitingName,
    extraData: { isALimiting, limitingName, excessName, excessMassLeft, excessMolesLeft, theoreticalMassC, percentYield },
    steps: [
      {
        labelBn: 'বিক্রিয়কদ্বয়ের মোল সংখ্যা নির্ণয়',
        labelEn: 'Moles of Reactants',
        latex: `n(${nameA}) = \\frac{${massA}}{${molarMassA}} = ${fmt(molesA, 4)}\\text{ mol}, \\quad n(${nameB}) = \\frac{${massB}}{${molarMassB}} = ${fmt(molesB, 4)}\\text{ mol}`,
      },
      {
        labelBn: 'স্টয়কিওমেট্রিক অনুপাত তুলনা (সহগ দিয়ে ভাগ)',
        labelEn: 'Stoichiometric Mole Ratio Comparison',
        latex: `\\frac{n(${nameA})}{${coeffA}} = ${fmt(ratioA, 4)}, \\quad \\frac{n(${nameB})}{${coeffB}} = ${fmt(ratioB, 4)}`,
        notesBn: `যেহেতু ${isALimiting ? `${nameA} এর অনুপাত কম (${fmt(ratioA, 4)} < ${fmt(ratioB, 4)})` : `${nameB} এর অনুপাত কম (${fmt(ratioB, 4)} < ${fmt(ratioA, 4)})`}, তাই ${limitingName} হলো লিমিটিং বিক্রিয়ক।`,
        notesEn: `${limitingName} is the limiting reactant because it has a smaller stoichiometric mole-to-coefficient ratio.`,
      },
      {
        labelBn: 'অবশিষ্ট অতিরিক্ত বিক্রিয়কের পরিমাণ',
        labelEn: 'Excess Reactant Leftover',
        latex: `\\text{অবশিষ্ট } ${excessName} = ${fmt(excessMolesLeft, 4)}\\text{ mol} = ${fmt(excessMassLeft, 3)}\\text{ grams}`,
      },
      {
        labelBn: `উৎপাদ (${nameC}) এর তাত্ত্বিক পরিমাণ (Theoretical Yield)`,
        labelEn: 'Theoretical Yield of Product',
        latex: `W(${nameC}) = ${fmt(theoreticalMolesC, 4)}\\text{ mol} \\times ${molarMassC}\\text{ g/mol} = ${fmt(theoreticalMassC, 3)}\\text{ grams}`,
      },
      ...(percentYield !== undefined
        ? [
            {
              labelBn: 'শতকরা ফলন (Percentage Yield)',
              labelEn: 'Percentage Yield',
              latex: `\\text{শতকরা ফলন} = \\left(\\frac{\\text{প্রাপ্ত ভর}}{\\text{তাত্ত্বিক ভর}}\\right) \\times 100\\% = \\left(\\frac{${actualProductMass}}{${fmt(theoreticalMassC, 3)}}\\right) \\times 100\\% = ${fmt(percentYield, 2)}\\%`,
            },
          ]
        : []),
    ],
  };
}

// ==========================================
// MODULE D: CHEMICAL REACTIONS & OXIDATION STATES (CHAPTER 7)
// ==========================================

export function calcOxidationState(
  compound: string,
  targetElement: string,
  netCharge: number = 0
): ChemistryResult {
  const parsed = parseChemicalFormula(compound);
  const counts = parsed.counts;

  const targetCount = counts[targetElement];
  if (!targetCount) {
    return { success: false, steps: [], errorMessage: `যৌগটিতে ${targetElement} মৌলটি পাওয়া যায়নি।` };
  }

  // Standard oxidation state assignments
  const knownOxidation: Record<string, number> = {
    H: 1,
    Na: 1,
    K: 1,
    Li: 1,
    Mg: 2,
    Ca: 2,
    Ba: 2,
    Al: 3,
    O: -2,
    F: -1,
    Cl: -1,
    Br: -1,
    I: -1,
  };

  let knownSum = 0;
  const termsLatex: string[] = [];

  for (const [elem, count] of Object.entries(counts)) {
    if (elem === targetElement) {
      termsLatex.push(count > 1 ? `${count}x` : 'x');
    } else {
      const ox = knownOxidation[elem] ?? 0;
      knownSum += ox * count;
      const sign = ox >= 0 ? `+${ox}` : `${ox}`;
      termsLatex.push(`(${sign}) \\times ${count}`);
    }
  }

  // targetCount * x + knownSum = netCharge => x = (netCharge - knownSum) / targetCount
  const x = (netCharge - knownSum) / targetCount;
  const signX = x >= 0 ? `+${fmt(x, 2)}` : `${fmt(x, 2)}`;

  return {
    success: true,
    value: signX,
    unit: '',
    extraData: { oxidationState: x, targetElement, compound },
    steps: [
      {
        labelBn: 'জারণ সংখ্যার নীতি অনুযায়ী সমীকরণ গঠন',
        labelEn: 'Oxidation Number Algebraic Equation',
        latex: `\\sum (\\text{জারণ মান} \\times \\text{পরমাণু সংখ্যা}) = ${netCharge}`,
      },
      {
        labelBn: 'পরিচিত মৌলসমূহের জারণ মান বসিয়ে পাই',
        labelEn: 'Substitution of Known Oxidation States',
        latex: `${termsLatex.join(' + ')} = ${netCharge}`,
      },
      {
        labelBn: `${targetElement} এর জারণ সংখ্যা নির্ণয়`,
        labelEn: `Solved Oxidation State of ${targetElement}`,
        latex: `${targetCount > 1 ? `${targetCount}x` : 'x'} + (${knownSum}) = ${netCharge} \\implies x = \\mathbf{${signX}}`,
        notesBn: `${compound} যৌগে ${targetElement} এর জারণ সংখ্যা ${signX}।`,
        notesEn: `The oxidation state of ${targetElement} in ${compound} is ${signX}.`,
      },
    ],
  };
}

// ==========================================
// MODULE E: BOND ENERGY & ENTHALPY (CHAPTER 8)
// ==========================================

export interface BondItem {
  bond: string;
  count: number;
}

export function calcReactionEnthalpy(
  brokenBonds: BondItem[],
  formedBonds: BondItem[],
  reactionName?: string
): ChemistryResult {
  let sumBroken = 0;
  const brokenDetails = brokenBonds.map((item) => {
    const energy = BOND_ENERGIES[item.bond] || 0;
    const subtotal = energy * item.count;
    sumBroken += subtotal;
    return { ...item, energy, subtotal };
  });

  let sumFormed = 0;
  const formedDetails = formedBonds.map((item) => {
    const energy = BOND_ENERGIES[item.bond] || 0;
    const subtotal = energy * item.count;
    sumFormed += subtotal;
    return { ...item, energy, subtotal };
  });

  const deltaH = sumBroken - sumFormed;
  const isExothermic = deltaH < 0;

  return {
    success: true,
    value: deltaH,
    unit: 'kJ/mol',
    extraData: { deltaH, isExothermic, sumBroken, sumFormed },
    steps: [
      {
        labelBn: 'বিক্রিয়া তাপ ও বন্ধন শক্তির সমীকরণ',
        labelEn: 'Reaction Enthalpy Formula',
        latex: '\\Delta H = \\sum B_{\\text{broken}} - \\sum B_{\\text{formed}} = B_1 - B_2',
      },
      {
        labelBn: 'ভাঙা বন্ধনের মোট শক্তি B1 (শোষিত শক্তি — তাপহারী)',
        labelEn: 'Bonds Broken Energy B1 (Endothermic)',
        latex: `B_1 = ${brokenDetails.map((b) => `${b.count} \\times ${b.energy}`).join(' + ')} = ${sumBroken}\\text{ kJ/mol}`,
      },
      {
        labelBn: 'গঠিত বন্ধনের মোট শক্তি B2 (নির্গত শক্তি — তাপোৎপাদী)',
        labelEn: 'Bonds Formed Energy B2 (Exothermic)',
        latex: `B_2 = ${formedDetails.map((b) => `${b.count} \\times ${b.energy}`).join(' + ')} = ${sumFormed}\\text{ kJ/mol}`,
      },
      {
        labelBn: 'বিক্রিয়া তাপ (ΔH) ও বিক্রিয়ার শ্রেণিবিভাগ',
        labelEn: 'Reaction Enthalpy & Classification',
        latex: `\\Delta H = ${sumBroken} - ${sumFormed} = \\mathbf{${deltaH}\\text{ kJ/mol}}`,
        notesBn: isExothermic
          ? `যেহেতু ΔH ঋণাত্মক (${deltaH} kJ/mol), এটি একটি তাপোৎপাদী (Exothermic) বিক্রিয়া। বিক্রিয়ায় তাপ উৎপন্ন হয়।`
          : `যেহেতু ΔH ধনাত্মক (+${deltaH} kJ/mol), এটি একটি তাপহারী (Endothermic) বিক্রিয়া।`,
        notesEn: isExothermic
          ? `Since ΔH is negative (${deltaH} kJ/mol), this is an Exothermic reaction (releases heat).`
          : `Since ΔH is positive (+${deltaH} kJ/mol), this is an Endothermic reaction (absorbs heat).`,
      },
    ],
  };
}

// ==========================================
// MODULE F: ACID-BASE & PH (CHAPTER 9)
// ==========================================

export function calcPH(value: number, type: 'conc_H' | 'pH' | 'pOH'): ChemistryResult {
  if (value <= 0) {
    return { success: false, steps: [], errorMessage: 'মান অবশ্যই শূন্যের চেয়ে বড় হতে হবে।' };
  }

  let pH = 0;
  let pOH = 0;
  let concH = 0;
  let concOH = 0;

  if (type === 'conc_H') {
    concH = value;
    pH = -Math.log10(concH);
    pOH = 14 - pH;
    concOH = Math.pow(10, -pOH);
  } else if (type === 'pH') {
    pH = value;
    pOH = 14 - pH;
    concH = Math.pow(10, -pH);
    concOH = Math.pow(10, -pOH);
  } else {
    pOH = value;
    pH = 14 - pOH;
    concH = Math.pow(10, -pH);
    concOH = Math.pow(10, -pOH);
  }

  const natureBn = pH < 7 ? 'অম্লীয় (Acidic)' : pH > 7 ? 'ক্ষারীয় (Basic)' : 'নিরপেক্ষ (Neutral)';
  const natureEn = pH < 7 ? 'Acidic' : pH > 7 ? 'Basic' : 'Neutral';

  return {
    success: true,
    value: pH,
    unit: '',
    extraData: { pH, pOH, concH, concOH, natureBn, natureEn },
    steps: [
      {
        labelBn: 'pH ও pOH এর সংজ্ঞা সূত্র',
        labelEn: 'pH and pOH Definition Formulas',
        latex: '\\text{pH} = -\\log_{10}[\\text{H}^+], \\quad \\text{pH} + \\text{pOH} = 14',
      },
      {
        labelBn: 'pH ও আয়ন ঘনমাত্রা হিসাব',
        labelEn: 'Evaluated Quantities',
        latex: `\\text{pH} = ${fmt(pH, 2)}, \\quad \\text{pOH} = ${fmt(pOH, 2)}, \\quad [\\text{H}^+] = ${concH.toExponential(3)}\\text{ M}`,
        notesBn: `দ্রবণের প্রকৃতি: ${natureBn} (যেহেতু pH = ${fmt(pH, 2)})। সম্পূর্ণ আয়নিত তীব্র এসিড/ক্ষারক বিবেচিত।`,
        notesEn: `Solution nature: ${natureEn}. Assumes strong acid/base complete dissociation.`,
      },
    ],
  };
}

export function calcNeutralization(
  VA: number,
  SA: number,
  aFactor: number,
  bFactor: number,
  VB?: number,
  SB?: number,
  solveFor: 'VB' | 'SB' = 'VB'
): ChemistryResult {
  // aFactor = moles of acid, bFactor = moles of base in balanced equation: a A + b B -> products
  // (VA * SA) / a = (VB * SB) / b
  if (VA <= 0 || SA <= 0 || aFactor <= 0 || bFactor <= 0) {
    return { success: false, steps: [], errorMessage: 'এসিডের আয়তন ও ঘনমাত্রা এবং সহগ অবশ্যই ধনাত্মক হতে হবে।' };
  }

  if (solveFor === 'VB') {
    if (!SB || SB <= 0) return { success: false, steps: [], errorMessage: 'ক্ষারকের মোলারিটি SB প্রদান করুন।' };
    const calculatedVB = (VA * SA * bFactor) / (aFactor * SB);
    return {
      success: true,
      value: calculatedVB,
      unit: 'mL',
      steps: [
        { labelBn: 'প্রশমন টাইট্রেশন সমীকরণ', labelEn: 'Titration Neutralization Formula', latex: '\\frac{V_A \\times S_A}{a} = \\frac{V_B \\times S_B}{b} \\implies V_B = \\frac{V_A \\times S_A \\times b}{a \\times S_B}' },
        { labelBn: 'ক্ষারকের প্রয়োজনীয় আয়তন', labelEn: 'Required Base Volume', latex: `V_B = \\frac{${VA} \\times ${SA} \\times ${bFactor}}{${aFactor} \\times ${SB}} = ${fmt(calculatedVB, 2)}\\text{ mL}` },
      ],
    };
  }

  if (solveFor === 'SB') {
    if (!VB || VB <= 0) return { success: false, steps: [], errorMessage: 'ক্ষারকের আয়তন VB প্রদান করুন।' };
    const calculatedSB = (VA * SA * bFactor) / (aFactor * VB);
    return {
      success: true,
      value: calculatedSB,
      unit: 'M (Molar)',
      steps: [
        { labelBn: 'ক্ষারকের ঘনমাত্রা সূত্র', labelEn: 'Base Molarity Formula', latex: 'S_B = \\frac{V_A \\times S_A \\times b}{a \\times V_B}' },
        { labelBn: 'ক্ষারকের মোলারিটি', labelEn: 'Calculated Base Molarity', latex: `S_B = \\frac{${VA} \\times ${SA} \\times ${bFactor}}{${aFactor} \\times ${VB}} = ${fmt(calculatedSB, 4)}\\text{ M}` },
      ],
    };
  }

  return { success: false, steps: [], errorMessage: 'অবৈধ অনুরোধ।' };
}

// ==========================================
// MODULE G: HYDROCARBONS (CHAPTER 11)
// ==========================================

const GREEK_PREFIXES = ['', 'Meth', 'Eth', 'Prop', 'But', 'Pent', 'Hex', 'Hept', 'Oct', 'Non', 'Dec'];
const BANGLA_PREFIXES = ['', 'মিথ', 'ইথ', 'প্রোপ', 'বিউট', 'পেন্ট', 'হেক্স', 'হেপ্ট', 'অক্ট', 'নন', 'ডেক'];

export function generateHydrocarbon(
  series: 'alkane' | 'alkene' | 'alkyne',
  n: number
): ChemistryResult {
  if (n < 1 || n > 10 || !Number.isInteger(n)) {
    return { success: false, steps: [], errorMessage: 'কার্বন সংখ্যা n অবশ্যই ১ থেকে ১০ এর মধ্যে হতে হবে।' };
  }
  if ((series === 'alkene' || series === 'alkyne') && n < 2) {
    return { success: false, steps: [], errorMessage: 'অ্যালকিন ও অ্যালকাইনের জন্য কার্বন সংখ্যা নূন্যতম ২ হতে হবে (দ্বিবন্ধন/ত্রিবন্ধন)।' };
  }

  let hCount = 0;
  let generalFormula = '';
  let iupacSuffixEn = '';
  let iupacSuffixBn = '';
  let condensed = '';

  if (series === 'alkane') {
    hCount = 2 * n + 2;
    generalFormula = 'C_n H_{2n+2}';
    iupacSuffixEn = 'ane';
    iupacSuffixBn = 'েন';
    if (n === 1) condensed = 'CH4';
    else if (n === 2) condensed = 'CH3-CH3';
    else condensed = `CH3-${'CH2-'.repeat(n - 2)}CH3`;
  } else if (series === 'alkene') {
    hCount = 2 * n;
    generalFormula = 'C_n H_{2n}';
    iupacSuffixEn = 'ene';
    iupacSuffixBn = 'িন';
    if (n === 2) condensed = 'CH2=CH2';
    else condensed = `CH2=CH-${'CH2-'.repeat(n - 3)}CH3`.replace(/-$/, '');
  } else {
    hCount = 2 * n - 2;
    generalFormula = 'C_n H_{2n-2}';
    iupacSuffixEn = 'yne';
    iupacSuffixBn = 'াইন';
    if (n === 2) condensed = 'CH≡CH';
    else condensed = `CH≡C-${'CH2-'.repeat(n - 3)}CH3`.replace(/-$/, '');
  }

  const molecularFormula = `C${n}H${hCount}`;
  const nameEn = GREEK_PREFIXES[n] + iupacSuffixEn;
  const nameBn = BANGLA_PREFIXES[n] + iupacSuffixBn;

  const molarMass = n * 12.011 + hCount * 1.008;
  const carbonPct = ((n * 12.011) / molarMass) * 100;

  return {
    success: true,
    value: `${nameBn} (${nameEn}) - ${molecularFormula}`,
    extraData: { molecularFormula, nameEn, nameBn, condensed, molarMass, carbonPct },
    steps: [
      {
        labelBn: 'সমগোত্রীয় শ্রেণির সাধারণ সংকেত',
        labelEn: 'General Homologous Formula',
        latex: generalFormula,
      },
      {
        labelBn: 'আণবিক সংকেত ও নাম',
        labelEn: 'Molecular Formula & IUPAC Name',
        latex: `\\mathbf{${molecularFormula}} \\quad \\text{(${nameBn} / ${nameEn})}`,
      },
      {
        labelBn: 'গাঠনিক সংকেত (Condensed Structure)',
        labelEn: 'Condensed Structural Formula',
        latex: `\\text{${condensed}}`,
      },
      {
        labelBn: 'আণবিক ভর ও কার্বনের শতকরা সংযুতি',
        labelEn: 'Molar Mass & Carbon Percentage',
        latex: `M = (${n} \\times 12.011) + (${hCount} \\times 1.008) = ${fmt(molarMass, 2)}\\text{ g/mol}, \\quad \\%\\text{C} = ${fmt(carbonPct, 2)}\\%`,
      },
    ],
  };
}
