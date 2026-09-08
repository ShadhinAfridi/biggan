/**
 * Physical & Chemical Constants for SSC Chemistry (Classes 9-10)
 * Compliant with National Curriculum and Textbook Board (NCTB) Bangladesh
 */

// NCTB Textbook standard relative atomic masses (Ar)
export const ATOMIC_WEIGHTS: Record<string, number> = {
  H: 1.008,
  He: 4.003,
  Li: 6.941,
  Be: 9.012,
  B: 10.81,
  C: 12.011,
  N: 14.007,
  O: 15.999,
  F: 18.998,
  Ne: 20.18,
  Na: 22.99,
  Mg: 24.305,
  Al: 26.982,
  Si: 28.085,
  P: 30.974,
  S: 32.06,
  Cl: 35.45,
  Ar: 39.948,
  K: 39.098,
  Ca: 40.078,
  Sc: 44.956,
  Ti: 47.867,
  V: 50.942,
  Cr: 51.996,
  Mn: 54.938,
  Fe: 55.845,
  Co: 58.933,
  Ni: 58.693,
  Cu: 63.546,
  Zn: 65.38,
  Br: 79.904,
  Ag: 107.87,
  I: 126.9,
  Ba: 137.33,
  Pb: 207.2,
};

// Official NCTB Chapter 8 Bond Energies Databank (kJ/mol)
export const BOND_ENERGIES: Record<string, number> = {
  'C-H': 414,
  'C-Cl': 326,
  'C-C': 344,
  'C=C': 615,
  'C#C': 812, // Triple bond
  'N#N': 946, // Triple bond
  'Br-Br': 193,
  'O-O': 143,
  'H-Cl': 431,
  'H-I': 299,
  'C=O': 724,
  'N-H': 391,
  'O-H': 464,
  'O=O': 498,
  'Cl-Cl': 244,
  'I-I': 151,
  'H-H': 436,
  'H-Br': 366,
  'H-F': 563,
  'C-O': 350,
};

// Core physical & chemical constants
export const CHEMISTRY_CONSTANTS = {
  // Avogadro's number (NCTB textbook convention: 6.023 x 10^23)
  AVOGADRO_NUMBER: 6.023e23,

  // Molar volume of any ideal gas at STP (Liters / mol)
  MOLAR_VOLUME_STP: 22.4,

  // Molar volume at room temperature (SATP: 25°C, 1 atm)
  MOLAR_VOLUME_SATP: 24.789,

  // Planck's constant (J·s or m^2·kg/s)
  PLANCK_CONSTANT: 6.626e-34,

  // Electron rest mass (kg)
  ELECTRON_MASS: 9.11e-31,

  // Speed of light (m/s)
  SPEED_OF_LIGHT: 3.0e8,

  // Water dissociation constant Kw at 25°C
  KW: 1.0e-14,
} as const;
