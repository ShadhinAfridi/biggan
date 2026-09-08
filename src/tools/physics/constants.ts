/**
 * Physical Constants for SSC Physics (Classes 9-10)
 * Compliant with National Curriculum and Textbook Board (NCTB) Bangladesh
 */

export const PHYSICAL_CONSTANTS = {
  // Acceleration due to gravity (m/s^2)
  G_STANDARD: 9.8,
  G_PRECISE: 9.81,

  // Speed of light in vacuum (m/s)
  C_LIGHT: 3.0e8,

  // Universal Gravitational Constant (N·m^2/kg^2) - NCTB textbook standard
  G_GRAVITATION: 6.673e-11,
  G_GRAVITATION_CODATA: 6.6743e-11,

  // Coulomb's Constant in vacuum / air (N·m^2/C^2)
  K_COULOMB: 9.0e9,

  // Permittivity of free space (C^2 / (N·m^2))
  EPSILON_0: 8.854e-12,

  // Standard speed of sound in dry air at 0°C (m/s)
  V_SOUND_0: 332.0, // Used in NCTB textbooks (330 or 332)
  SOUND_TEMP_COEFF: 0.6, // m/s per °C

  // Latent heat constants (J/kg)
  LATENT_HEAT_FUSION_ICE: 336000, // 3.36 × 10^5 J/kg
  LATENT_HEAT_VAPOR_WATER: 2268000, // 2.268 × 10^6 J/kg

  // Specific heat of water (J/(kg·K))
  SPECIFIC_HEAT_WATER: 4200,
  SPECIFIC_HEAT_ICE: 2100,
  SPECIFIC_HEAT_STEAM: 2000,

  // Standard water density (kg/m^3)
  DENSITY_WATER: 1000,

  // Human persistence of hearing (seconds)
  PERSISTENCE_OF_HEARING: 0.1,

  // 1 Horsepower in Watts
  HP_TO_WATTS: 746,

  // Commercial 1 kWh to Joules
  KWH_TO_JOULES: 3.6e6,
} as const;
