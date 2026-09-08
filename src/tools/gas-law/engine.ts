export const R_ATM = 0.0821; // L·atm / (mol·K)
export const R_SI = 8.314; // J / (mol·K)
export const BOLTZMANN_K = 1.380649e-23; // J/K

export interface GasLawSolveResult {
  solvedVariable: string;
  solvedValue: number;
  unit: string;
  steps: string[];
  latexFormula: string;
}

export function toKelvin(val: number, unit: 'C' | 'K' | 'F'): number {
  if (unit === 'C') return val + 273.15;
  if (unit === 'F') return ((val - 32) * 5) / 9 + 273.15;
  return val;
}

export function fromKelvin(kelvin: number, unit: 'C' | 'K' | 'F'): number {
  if (unit === 'C') return kelvin - 273.15;
  if (unit === 'F') return ((kelvin - 273.15) * 9) / 5 + 32;
  return kelvin;
}

export function toAtm(val: number, unit: 'atm' | 'kPa' | 'mmHg' | 'bar' | 'Pa'): number {
  switch (unit) {
    case 'kPa':
      return val / 101.325;
    case 'mmHg':
      return val / 760;
    case 'bar':
      return val / 1.01325;
    case 'Pa':
      return val / 101325;
    default:
      return val;
  }
}

export function fromAtm(atm: number, unit: 'atm' | 'kPa' | 'mmHg' | 'bar' | 'Pa'): number {
  switch (unit) {
    case 'kPa':
      return atm * 101.325;
    case 'mmHg':
      return atm * 760;
    case 'bar':
      return atm * 1.01325;
    case 'Pa':
      return atm * 101325;
    default:
      return atm;
  }
}

export function toLiters(val: number, unit: 'L' | 'mL' | 'm3'): number {
  switch (unit) {
    case 'mL':
      return val / 1000;
    case 'm3':
      return val * 1000;
    default:
      return val;
  }
}

export function fromLiters(liters: number, unit: 'L' | 'mL' | 'm3'): number {
  switch (unit) {
    case 'mL':
      return liters * 1000;
    case 'm3':
      return liters / 1000;
    default:
      return liters;
  }
}

// Solve PV = nRT for unknown variable
export function solveIdealGas(
  solveFor: 'P' | 'V' | 'n' | 'T',
  P_atm: number,
  V_L: number,
  n_mol: number,
  T_K: number
): GasLawSolveResult {
  const steps: string[] = [];
  let solvedValue = 0;
  let unit = '';
  let latexFormula = '';

  if (solveFor === 'P') {
    if (V_L <= 0) throw new Error('Volume must be greater than zero');
    if (T_K <= 0) throw new Error('Temperature must be greater than zero');
    solvedValue = (n_mol * R_ATM * T_K) / V_L;
    unit = 'atm';
    latexFormula = 'P = \\frac{nRT}{V}';
    steps.push(`P = (${n_mol} mol × 0.0821 L·atm/mol·K × ${T_K} K) / ${V_L} L`);
    steps.push(`P = ${(n_mol * R_ATM * T_K).toFixed(4)} / ${V_L} = ${solvedValue.toFixed(4)} atm`);
  } else if (solveFor === 'V') {
    if (P_atm <= 0) throw new Error('Pressure must be greater than zero');
    if (T_K <= 0) throw new Error('Temperature must be greater than zero');
    solvedValue = (n_mol * R_ATM * T_K) / P_atm;
    unit = 'L';
    latexFormula = 'V = \\frac{nRT}{P}';
    steps.push(`V = (${n_mol} mol × 0.0821 L·atm/mol·K × ${T_K} K) / ${P_atm} atm`);
    steps.push(`V = ${(n_mol * R_ATM * T_K).toFixed(4)} / ${P_atm} = ${solvedValue.toFixed(4)} L`);
  } else if (solveFor === 'n') {
    if (T_K <= 0) throw new Error('Temperature must be greater than zero');
    solvedValue = (P_atm * V_L) / (R_ATM * T_K);
    unit = 'mol';
    latexFormula = 'n = \\frac{PV}{RT}';
    steps.push(`n = (${P_atm} atm × ${V_L} L) / (0.0821 L·atm/mol·K × ${T_K} K)`);
    steps.push(`n = ${(P_atm * V_L).toFixed(4)} / ${(R_ATM * T_K).toFixed(4)} = ${solvedValue.toFixed(4)} mol`);
  } else if (solveFor === 'T') {
    if (n_mol <= 0) throw new Error('Moles must be greater than zero');
    solvedValue = (P_atm * V_L) / (n_mol * R_ATM);
    unit = 'K';
    latexFormula = 'T = \\frac{PV}{nR}';
    steps.push(`T = (${P_atm} atm × ${V_L} L) / (${n_mol} mol × 0.0821 L·atm/mol·K)`);
    steps.push(`T = ${(P_atm * V_L).toFixed(4)} / ${(n_mol * R_ATM).toFixed(4)} = ${solvedValue.toFixed(2)} K (${(solvedValue - 273.15).toFixed(2)} °C)`);
  }

  return {
    solvedVariable: solveFor,
    solvedValue: Number(solvedValue.toFixed(4)),
    unit,
    steps,
    latexFormula,
  };
}

// Calculate RMS speed and kinetic energy
export function calcKineticParameters(T_K: number, M_g_per_mol: number, n_mol: number = 1) {
  if (T_K <= 0) throw new Error('Temperature must be positive');
  if (M_g_per_mol <= 0) throw new Error('Molar mass must be positive');

  // M in kg/mol
  const M_kg = M_g_per_mol / 1000;
  const c_rms = Math.sqrt((3 * R_SI * T_K) / M_kg);
  const totalEk = 1.5 * n_mol * R_SI * T_K;
  const averageEkPerMolecule = 1.5 * BOLTZMANN_K * T_K;

  return {
    c_rms: Number(c_rms.toFixed(2)), // m/s
    totalEk: Number(totalEk.toFixed(2)), // Joules
    averageEkPerMolecule: averageEkPerMolecule.toExponential(4), // Joules/molecule
  };
}

// Combined Gas Law (P1*V1 / T1 = P2*V2 / T2)
export function solveCombinedGasLaw(
  solveFor: 'P2' | 'V2' | 'T2',
  P1: number,
  V1: number,
  T1_K: number,
  P2: number,
  V2: number,
  T2_K: number
): number {
  if (solveFor === 'P2') {
    return Number(((P1 * V1 * T2_K) / (T1_K * V2)).toFixed(4));
  } else if (solveFor === 'V2') {
    return Number(((P1 * V1 * T2_K) / (T1_K * P2)).toFixed(4));
  } else {
    return Number(((P2 * V2 * T1_K) / (P1 * V1)).toFixed(2));
  }
}
