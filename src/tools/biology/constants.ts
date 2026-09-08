/**
 * NCTB SSC Biology Quantitative Constants & Parameters
 * Standardized according to National Curriculum and Textbook Board Bangladesh (Classes 9-10).
 */

export interface ActivityLevel {
  id: string;
  multiplier: number;
  labelEn: string;
  labelBn: string;
  descriptionEn: string;
  descriptionBn: string;
}

export const ACTIVITY_LEVELS: ActivityLevel[] = [
  {
    id: 'sedentary',
    multiplier: 1.2,
    labelEn: 'Sedentary (Little or no exercise)',
    labelBn: 'পরিশ্রমহীন (ব্যায়াম বা শারীরিক পরিশ্রম নেই)',
    descriptionEn: 'Desk job, sitting most of the day',
    descriptionBn: 'সারাদিন বসে কাজ করা বা নিষ্ক্রিয় জীবনযাপন',
  },
  {
    id: 'light',
    multiplier: 1.375,
    labelEn: 'Lightly Active (1–3 days/week)',
    labelBn: 'অল্প পরিশ্রমী (সপ্তাহে ১-৩ দিন খেলাধুলা/ব্যায়াম)',
    descriptionEn: 'Light exercise or active lifestyle',
    descriptionBn: 'হালকা ব্যায়াম বা নিয়মিত হাঁটার অভ্যাস',
  },
  {
    id: 'moderate',
    multiplier: 1.55,
    labelEn: 'Moderately Active (3–5 days/week)',
    labelBn: 'মাঝারি পরিশ্রমী (সপ্তাহে ৩-৫ দিন নিয়মিত ব্যায়াম)',
    descriptionEn: 'Moderate exercise or sports',
    descriptionBn: 'মাঝারি শারীরিক কসরত বা নিয়মিত খেলাধুলা',
  },
  {
    id: 'active',
    multiplier: 1.725,
    labelEn: 'Very Active (6–7 days/week)',
    labelBn: 'কঠোর পরিশ্রমী (প্রতিদিন কঠোর ব্যায়াম/পরিশ্রম)',
    descriptionEn: 'Hard exercise, heavy sports, or manual labor',
    descriptionBn: 'কঠোর শারীরিক শ্রম বা প্রতিদিন খেলাধুলা',
  },
  {
    id: 'extreme',
    multiplier: 1.9,
    labelEn: 'Extremely Active (Athletes / Heavy physical labor)',
    labelBn: 'অত্যন্ত কঠোর পরিশ্রমী (ক্রীড়াবিদ / অতিরিক্ত কায়িক শ্রম)',
    descriptionEn: 'Intense training twice a day or rigorous job',
    descriptionBn: 'পেশাদার অ্যাথলেট বা দিনে দুই বেলা ভারী শ্রম',
  },
];

export interface BMICategory {
  min: number;
  max: number;
  categoryEn: string;
  categoryBn: string;
  statusEn: string;
  statusBn: string;
  colorClass: string;
  adviceEn: string;
  adviceBn: string;
}

export const BMI_CATEGORIES: BMICategory[] = [
  {
    min: 0,
    max: 18.499,
    categoryEn: 'Underweight',
    categoryBn: 'ওজন কম (কম ওজন)',
    statusEn: 'Underweight',
    statusBn: 'শরীরের ওজন প্রয়োজনের চেয়ে কম',
    colorClass: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    adviceEn: 'Nutritious diet and gradual weight gain advised.',
    adviceBn: 'পরিমিত পুষ্টিকর খাবার গ্রহণ করে স্বাভাবিক ওজনে আসা প্রয়োজন।',
  },
  {
    min: 18.5,
    max: 24.999,
    categoryEn: 'Normal / Healthy Weight',
    categoryBn: 'স্বাভাবিক ওজন (আদর্শ মান)',
    statusEn: 'Healthy Weight',
    statusBn: 'সুস্বাস্থ্যের আদর্শ মান',
    colorClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    adviceEn: 'Ideal health benchmark. Maintain balanced diet and active lifestyle.',
    adviceBn: 'সুস্বাস্থ্যের আদর্শ মান। বর্তমান ডায়েট ও শারীরিক সক্রিয়তা বজায় রাখুন।',
  },
  {
    min: 25.0,
    max: 29.999,
    categoryEn: 'Overweight',
    categoryBn: 'অতিরিক্ত ওজন (ওভারওয়েট)',
    statusEn: 'Overweight',
    statusBn: 'শরীরের আদর্শ মানের চেয়ে বেশি ওজন',
    colorClass: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    adviceEn: 'Regular exercise and caloric control recommended.',
    adviceBn: 'ব্যায়াম ও পরিমিত সুষম আহারের মাধ্যমে বাড়তি ওজন কমানো প্রয়োজন।',
  },
  {
    min: 30.0,
    max: Infinity,
    categoryEn: 'Obese',
    categoryBn: 'স্থূলতা (অতিরিক্ত মেদবহুলতা)',
    statusEn: 'Obese',
    statusBn: 'স্থূলতা - স্বাস্থ্যঝুঁকিপূর্ণ অবস্থা',
    colorClass: 'text-red-400 bg-red-500/10 border-red-500/30',
    adviceEn: 'High risk of hypertension, diabetes, and heart disease. Medical guidance advised.',
    adviceBn: 'হৃদরোগ, উচ্চ রক্তচাপ ও ডায়াবেটিসের উচ্চ ঝুঁকি। চিকিৎসকের পরামর্শ প্রয়োজন।',
  },
];

// ATP Energy Conversion Factors (NCTB Chapter 4)
export const ATP_ENERGY_KCAL = 7.3;    // kcal per mole of ATP
export const ATP_ENERGY_KJ = 30.55;    // kJ per mole of ATP

export interface RespirationStage {
  stageId: string;
  nameEn: string;
  nameBn: string;
  locationEn: string;
  locationBn: string;
  directAtpClassical: number;
  nadhClassical: number;
  fadh2Classical: number;
  atpClassical: number;
  atpModern: number;
  co2Produced: number;
}

export const RESPIRATION_STAGES: RespirationStage[] = [
  {
    stageId: 'glycolysis',
    nameEn: 'Glycolysis',
    nameBn: 'গ্লাইকোলাইসিস',
    locationEn: 'Cytoplasm',
    locationBn: 'কোষের সাইটোপ্লাজম',
    directAtpClassical: 2,   // Net 2 ATP
    nadhClassical: 2,         // 2 NADH = 6 ATP
    fadh2Classical: 0,
    atpClassical: 8,          // 2 + 6 = 8 ATP
    atpModern: 7,             // Modern shuttle (often 5 to 7 ATP)
    co2Produced: 0,
  },
  {
    stageId: 'acetyl_coa',
    nameEn: 'Acetyl-CoA Formation',
    nameBn: 'অ্যাসিটাইল কো-এ সৃষ্টি',
    locationEn: 'Mitochondrial Matrix',
    locationBn: 'মাইটোকন্ড্রিয়ার ম্যাট্রিক্স',
    directAtpClassical: 0,
    nadhClassical: 2,         // 2 NADH = 6 ATP
    fadh2Classical: 0,
    atpClassical: 6,
    atpModern: 5,
    co2Produced: 2,
  },
  {
    stageId: 'krebs_cycle',
    nameEn: 'Krebs Cycle (Citric Acid Cycle)',
    nameBn: 'ক্রেবস চক্র (সাইট্রিক এসিড চক্র)',
    locationEn: 'Mitochondrial Matrix',
    locationBn: 'মাইটোকন্ড্রিয়ার ম্যাট্রিক্স',
    directAtpClassical: 2,   // 2 GTP = 2 ATP
    nadhClassical: 6,         // 6 NADH = 18 ATP
    fadh2Classical: 2,        // 2 FADH2 = 4 ATP
    atpClassical: 24,         // 2 + 18 + 4 = 24 ATP
    atpModern: 20,            // 2 + 15 + 3 = 20 ATP
    co2Produced: 4,
  },
];

// Blood Types and Compatibility Matrix (NCTB Chapter 6)
export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export interface BloodTypeInfo {
  type: BloodType;
  antigens: string[];
  antibodies: string[];
  canDonateTo: BloodType[];
  canReceiveFrom: BloodType[];
}

export const BLOOD_GROUPS: Record<BloodType, BloodTypeInfo> = {
  'O-': {
    type: 'O-',
    antigens: ['None (নেই)'],
    antibodies: ['Anti-A', 'Anti-B'],
    canDonateTo: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], // Universal donor
    canReceiveFrom: ['O-'],
  },
  'O+': {
    type: 'O+',
    antigens: ['Rh(D)'],
    antibodies: ['Anti-A', 'Anti-B'],
    canDonateTo: ['O+', 'A+', 'B+', 'AB+'],
    canReceiveFrom: ['O+', 'O-'],
  },
  'A-': {
    type: 'A-',
    antigens: ['A'],
    antibodies: ['Anti-B'],
    canDonateTo: ['A+', 'A-', 'AB+', 'AB-'],
    canReceiveFrom: ['A-', 'O-'],
  },
  'A+': {
    type: 'A+',
    antigens: ['A', 'Rh(D)'],
    antibodies: ['Anti-B'],
    canDonateTo: ['A+', 'AB+'],
    canReceiveFrom: ['A+', 'A-', 'O+', 'O-'],
  },
  'B-': {
    type: 'B-',
    antigens: ['B'],
    antibodies: ['Anti-A'],
    canDonateTo: ['B+', 'B-', 'AB+', 'AB-'],
    canReceiveFrom: ['B-', 'O-'],
  },
  'B+': {
    type: 'B+',
    antigens: ['B', 'Rh(D)'],
    antibodies: ['Anti-A'],
    canDonateTo: ['B+', 'AB+'],
    canReceiveFrom: ['B+', 'B-', 'O+', 'O-'],
  },
  'AB-': {
    type: 'AB-',
    antigens: ['A', 'B'],
    antibodies: ['None (নেই)'],
    canDonateTo: ['AB+', 'AB-'],
    canReceiveFrom: ['AB-', 'A-', 'B-', 'O-'],
  },
  'AB+': {
    type: 'AB+',
    antigens: ['A', 'B', 'Rh(D)'],
    antibodies: ['None (নেই)'],
    canDonateTo: ['AB+'],
    canReceiveFrom: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], // Universal recipient
  },
};
