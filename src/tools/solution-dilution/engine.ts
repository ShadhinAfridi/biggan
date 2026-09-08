export interface CommonCompound {
  formula: string;
  nameBn: string;
  nameEn: string;
  molarMass: number;
  equivalentFactor: number; // For acid-base neutralization
}

export const LAB_COMPOUNDS: CommonCompound[] = [
  { formula: 'NaOH', nameBn: 'সোডিয়াম হাইড্রোক্সাইড (কস্টিক সোডা)', nameEn: 'Sodium Hydroxide', molarMass: 39.997, equivalentFactor: 1 },
  { formula: 'Na2CO3', nameBn: 'সোডিয়াম কার্বনেট (সোডা অ্যাশ)', nameEn: 'Sodium Carbonate', molarMass: 105.99, equivalentFactor: 2 },
  { formula: 'HCl', nameBn: 'হাইড্রোক্লোরিক এসিড', nameEn: 'Hydrochloric Acid', molarMass: 36.46, equivalentFactor: 1 },
  { formula: 'H2SO4', nameBn: 'সালফিউরিক এসিড', nameEn: 'Sulfuric Acid', molarMass: 98.08, equivalentFactor: 2 },
  { formula: 'H2C2O4·2H2O', nameBn: 'অক্সালিক এসিড (ডাই-হাইড্রেট)', nameEn: 'Oxalic Acid Dihydrate', molarMass: 126.07, equivalentFactor: 2 },
  { formula: 'KMnO4', nameBn: 'পটাশিয়াম পারম্যাঙ্গানেট (অম্লীয়)', nameEn: 'Potassium Permanganate', molarMass: 158.03, equivalentFactor: 5 },
  { formula: 'C6H12O6', nameBn: 'গ্লুকোজ', nameEn: 'Glucose', molarMass: 180.16, equivalentFactor: 1 },
  { formula: 'NaCl', nameBn: 'সোডিয়াম ক্লোরাইড (খাবার লবণ)', nameEn: 'Sodium Chloride', molarMass: 58.44, equivalentFactor: 1 },
];

export function round(val: number, decimals: number = 4): number {
  return Number(val.toFixed(decimals));
}

// 1. Solution Preparation (W = SMV / 1000)
export function calcSolutionPrep(
  solveFor: 'W' | 'S' | 'V',
  W_g: number,
  S_M: number,
  M_g_per_mol: number,
  V_mL: number
): { result: number; unit: string; steps: string[] } {
  if (M_g_per_mol <= 0) throw new Error('Molar mass must be greater than zero');

  const steps: string[] = [];
  let result = 0;
  let unit = '';

  if (solveFor === 'W') {
    if (S_M <= 0 || V_mL <= 0) throw new Error('Molarity and Volume must be positive');
    result = round((S_M * M_g_per_mol * V_mL) / 1000);
    unit = 'g';
    steps.push(`W = (S × M × V) / 1000`);
    steps.push(`W = (${S_M} M × ${M_g_per_mol} g/mol × ${V_mL} mL) / 1000 = ${result} g`);
  } else if (solveFor === 'S') {
    if (W_g <= 0 || V_mL <= 0) throw new Error('Mass and Volume must be positive');
    result = round((1000 * W_g) / (M_g_per_mol * V_mL));
    unit = 'M (mol/L)';
    steps.push(`S = (1000 × W) / (M × V)`);
    steps.push(`S = (1000 × ${W_g} g) / (${M_g_per_mol} g/mol × ${V_mL} mL) = ${result} M`);
  } else {
    if (W_g <= 0 || S_M <= 0) throw new Error('Mass and Molarity must be positive');
    result = round((1000 * W_g) / (S_M * M_g_per_mol));
    unit = 'mL';
    steps.push(`V = (1000 × W) / (S × M)`);
    steps.push(`V = (1000 × ${W_g} g) / (${S_M} M × ${M_g_per_mol} g/mol) = ${result} mL`);
  }

  return { result, unit, steps };
}

// 2. Stock Solution Dilution (V1 * S1 = V2 * S2)
export function calcDilution(
  solveFor: 'V1' | 'S1' | 'V2' | 'S2',
  V1: number,
  S1: number,
  V2: number,
  S2: number
): { result: number; unit: string; solventToAdd: number; steps: string[] } {
  let result = 0;
  let unit = '';
  let solventToAdd = 0;
  const steps: string[] = [];

  if (solveFor === 'V1') {
    if (S1 <= 0) throw new Error('Initial concentration must be positive');
    result = round((V2 * S2) / S1);
    unit = 'mL';
    solventToAdd = round(Math.max(0, V2 - result));
    steps.push(`V₁ = (V₂ × S₂) / S₁ = (${V2} mL × ${S2} M) / ${S1} M = ${result} mL`);
    steps.push(`যোগ করতে হওয়া দ্রাবক (পানি) = V₂ - V₁ = ${V2} - ${result} = ${solventToAdd} mL`);
  } else if (solveFor === 'S2') {
    if (V2 <= 0) throw new Error('Final volume must be positive');
    result = round((V1 * S1) / V2);
    unit = 'M';
    solventToAdd = round(Math.max(0, V2 - V1));
    steps.push(`S₂ = (V₁ × S₁) / V₂ = (${V1} mL × ${S1} M) / ${V2} mL = ${result} M`);
  } else if (solveFor === 'V2') {
    if (S2 <= 0) throw new Error('Target concentration must be positive');
    result = round((V1 * S1) / S2);
    unit = 'mL';
    solventToAdd = round(Math.max(0, result - V1));
    steps.push(`V₂ = (V₁ × S₁) / S₂ = (${V1} mL × ${S1} M) / ${S2} M = ${result} mL`);
    steps.push(`যোগ করতে হওয়া দ্রাবক = ${solventToAdd} mL`);
  } else {
    if (V1 <= 0) throw new Error('Initial volume must be positive');
    result = round((V2 * S2) / V1);
    unit = 'M';
    steps.push(`S₁ = (V₂ × S₂) / V₁ = (${V2} mL × ${S2} M) / ${V1} mL = ${result} M`);
  }

  return { result, unit, solventToAdd, steps };
}

// 3. Concentration Converter (Molarity, PPM, PPB, w/v%)
export function convertConcentration(molarity: number, molarMass: number) {
  if (molarity <= 0 || molarMass <= 0) {
    return { ppm: 0, ppb: 0, percentWv: 0 };
  }
  const ppm = round(molarity * molarMass * 1000, 2);
  const ppb = round(ppm * 1000, 2);
  const percentWv = round((molarity * molarMass) / 10, 3);

  return { ppm, ppb, percentWv };
}

// 4. Volumetric Titration Equivalence (VA * SA * eA = VB * SB * eB)
export function calcTitration(
  vA: number,
  sA: number,
  eA: number,
  vB: number,
  sB: number,
  eB: number,
  solveFor: 'vA' | 'sA' | 'vB' | 'sB'
): number {
  if (solveFor === 'vA') {
    return round((vB * sB * eB) / (sA * eA));
  } else if (solveFor === 'sA') {
    return round((vB * sB * eB) / (vA * eA));
  } else if (solveFor === 'vB') {
    return round((vA * sA * eA) / (sB * eB));
  } else {
    return round((vA * sA * eA) / (vB * eB));
  }
}
