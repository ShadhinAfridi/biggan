/**
 * NCTB SSC Biology Quantitative Calculation Engine
 * Pure TypeScript implementation with KaTeX step-by-step proofs and bilingual explanations.
 */

import {
  ACTIVITY_LEVELS,
  BMI_CATEGORIES,
  RESPIRATION_STAGES,
  BLOOD_GROUPS,
  ATP_ENERGY_KCAL,
  ATP_ENERGY_KJ,
  type BloodType,
  type BMICategory,
  type ActivityLevel,
} from './constants';

export interface BMIResult {
  bmi: number;
  category: BMICategory;
  healthyWeightMin: number;
  healthyWeightMax: number;
  weightDelta: number; // positive if need to lose, negative if need to gain, 0 if normal
  stepsLatex: string;
  explanationBn: string;
  explanationEn: string;
}

export function calculateBMI(weightKg: number, heightCm: number): BMIResult {
  if (weightKg <= 0 || heightCm <= 0) {
    throw new Error('Weight and height must be positive values.');
  }

  const heightM = heightCm / 100;
  const bmi = Number((weightKg / (heightM * heightM)).toFixed(2));

  let category = BMI_CATEGORIES[BMI_CATEGORIES.length - 1];
  for (const cat of BMI_CATEGORIES) {
    if (bmi >= cat.min && bmi <= cat.max) {
      category = cat;
      break;
    }
  }

  const healthyWeightMin = Number((18.5 * heightM * heightM).toFixed(1));
  const healthyWeightMax = Number((24.9 * heightM * heightM).toFixed(1));

  let weightDelta = 0;
  if (weightKg < healthyWeightMin) {
    weightDelta = Number((weightKg - healthyWeightMin).toFixed(1)); // negative indicates gain needed
  } else if (weightKg > healthyWeightMax) {
    weightDelta = Number((weightKg - healthyWeightMax).toFixed(1)); // positive indicates loss needed
  }

  const stepsLatex = `\\begin{aligned}
\\text{উচ্চতা (মিটার)} &= \\frac{${heightCm}\\text{ cm}}{100} = ${heightM.toFixed(2)}\\text{ m} \\\\[4pt]
\\text{BMI} &= \\frac{\\text{ওজন (kg)}}{[\\text{উচ্চতা (m)}]^2} = \\frac{${weightKg}}{(${heightM.toFixed(2)})^2} \\\\[4pt]
&= \\frac{${weightKg}}{${(heightM * heightM).toFixed(4)}} = \\mathbf{${bmi}}
\\end{aligned}`;

  const explanationBn = `আপনার বিএমআই (BMI) মান ${bmi}, যা "${category.categoryBn}" শ্রেণির অন্তর্ভুক্ত। উচ্চতা ${heightCm} সেমির জন্য আদর্শ স্বাস্থ্যকর ওজন পরিসীমা হলো ${healthyWeightMin} kg থেকে ${healthyWeightMax} kg। ${
    weightDelta > 0
      ? `আদর্শ ওজনে পৌঁছাতে প্রায় ${weightDelta} kg ওজন কমাতে হবে।`
      : weightDelta < 0
      ? `আদর্শ ওজনে পৌঁছাতে প্রায় ${Math.abs(weightDelta)} kg ওজন বাড়াতে হবে।`
      : 'আপনার ওজন সম্পূর্ণ স্বাভাবিক ও আদর্শ মানে রয়েছে।'
  }`;

  const explanationEn = `Your BMI is ${bmi}, categorized as "${category.categoryEn}". For a height of ${heightCm} cm, the healthy weight range is ${healthyWeightMin} kg to ${healthyWeightMax} kg. ${
    weightDelta > 0
      ? `You may consider losing approximately ${weightDelta} kg to reach the healthy range.`
      : weightDelta < 0
      ? `You may consider gaining approximately ${Math.abs(weightDelta)} kg to reach the healthy range.`
      : 'Your body weight is currently in the ideal healthy range.'
  }`;

  return {
    bmi,
    category,
    healthyWeightMin,
    healthyWeightMax,
    weightDelta,
    stepsLatex,
    explanationBn,
    explanationEn,
  };
}

export interface BMRResult {
  bmr: number;
  tdee: number;
  activity: ActivityLevel;
  stepsLatex: string;
  explanationBn: string;
  explanationEn: string;
}

export function calculateBMR(
  gender: 'male' | 'female',
  weightKg: number,
  heightCm: number,
  ageYears: number,
  activityId = 'moderate'
): BMRResult {
  if (weightKg <= 0 || heightCm <= 0 || ageYears <= 0) {
    throw new Error('Weight, height, and age must be positive.');
  }

  const activity = ACTIVITY_LEVELS.find((a) => a.id === activityId) || ACTIVITY_LEVELS[2];

  let bmr = 0;
  let stepsLatex = '';

  if (gender === 'male') {
    // Male formula: 66 + (13.7 * W) + (5 * H) - (6.8 * A)
    const termW = 13.7 * weightKg;
    const termH = 5 * heightCm;
    const termA = 6.8 * ageYears;
    bmr = Number((66 + termW + termH - termA).toFixed(2));

    stepsLatex = `\\begin{aligned}
\\text{BMR}_{\\text{পুরুষ}} &= 66 + (13.7 \\times W) + (5 \\times H) - (6.8 \\times A) \\\\[4pt]
&= 66 + (13.7 \\times ${weightKg}) + (5 \\times ${heightCm}) - (6.8 \\times ${ageYears}) \\\\[4pt]
&= 66 + ${termW.toFixed(1)} + ${termH.toFixed(1)} - ${termA.toFixed(1)} \\\\[4pt]
&= \\mathbf{${bmr}\\text{ kcal/দিন}} \\\\[6pt]
\\text{TDEE (দৈনিক ক্যালরি চাহিদা)} &= \\text{BMR} \\times \\text{Activity Factor} \\\\[4pt]
&= ${bmr} \\times ${activity.multiplier} = \\mathbf{${(bmr * activity.multiplier).toFixed(1)}\\text{ kcal/দিন}}
\\end{aligned}`;
  } else {
    // Female formula: 655 + (9.6 * W) + (1.8 * H) - (4.7 * A)
    const termW = 9.6 * weightKg;
    const termH = 1.8 * heightCm;
    const termA = 4.7 * ageYears;
    bmr = Number((655 + termW + termH - termA).toFixed(2));

    stepsLatex = `\\begin{aligned}
\\text{BMR}_{\\text{নারী}} &= 655 + (9.6 \\times W) + (1.8 \\times H) - (4.7 \\times A) \\\\[4pt]
&= 655 + (9.6 \\times ${weightKg}) + (1.8 \\times ${heightCm}) - (4.7 \\times ${ageYears}) \\\\[4pt]
&= 655 + ${termW.toFixed(1)} + ${termH.toFixed(1)} - ${termA.toFixed(1)} \\\\[4pt]
&= \\mathbf{${bmr}\\text{ kcal/দিন}} \\\\[6pt]
\\text{TDEE (দৈনিক ক্যালরি চাহিদা)} &= \\text{BMR} \\times \\text{Activity Factor} \\\\[4pt]
&= ${bmr} \\times ${activity.multiplier} = \\mathbf{${(bmr * activity.multiplier).toFixed(1)}\\text{ kcal/দিন}}
\\end{aligned}`;
  }

  const tdee = Number((bmr * activity.multiplier).toFixed(1));

  const explanationBn = `সম্পূর্ণ বিশ্রামাবস্থায় আপনার বেঁচে থাকার জন্য মৌলিক শক্তি (BMR) প্রয়োজন দৈনিক ${bmr} kcal। আপনার শারীরিক সক্রিয়তার মাত্রা (${activity.labelBn}) অনুযায়ী দৈনিক মোট শক্তি বা ক্যালরির চাহিদা (TDEE) হলো ${tdee} kcal।`;
  const explanationEn = `Your Basal Metabolic Rate (BMR) at complete rest is ${bmr} kcal/day. Factoring in your physical activity level (${activity.labelEn}), your Total Daily Energy Expenditure (TDEE) is ${tdee} kcal/day.`;

  return {
    bmr,
    tdee,
    activity,
    stepsLatex,
    explanationBn,
    explanationEn,
  };
}

export interface RespirationStageRow {
  stageNameBn: string;
  stageNameEn: string;
  directAtp: number;
  nadh: number;
  fadh2: number;
  stageTotalAtp: number;
  co2Produced: number;
}

export interface RespirationResult {
  glucoseMoles: number;
  model: 'classical' | 'modern';
  totalAtp: number;
  totalKcal: number;
  totalKj: number;
  co2Moles: number;
  stages: RespirationStageRow[];
  stepsLatex: string;
  explanationBn: string;
  explanationEn: string;
}

export function calculateRespirationATP(
  glucoseMoles = 1,
  model: 'classical' | 'modern' = 'classical'
): RespirationResult {
  if (glucoseMoles <= 0) {
    throw new Error('Glucose amount must be greater than 0.');
  }

  const stages: RespirationStageRow[] = RESPIRATION_STAGES.map((s) => {
    const atpPerGlucose = model === 'classical' ? s.atpClassical : s.atpModern;
    return {
      stageNameBn: s.nameBn,
      stageNameEn: s.nameEn,
      directAtp: s.directAtpClassical * glucoseMoles,
      nadh: s.nadhClassical * glucoseMoles,
      fadh2: s.fadh2Classical * glucoseMoles,
      stageTotalAtp: atpPerGlucose * glucoseMoles,
      co2Produced: s.co2Produced * glucoseMoles,
    };
  });

  const basePerGlucose = model === 'classical' ? 38 : 36;
  const totalAtp = basePerGlucose * glucoseMoles;
  const totalKcal = Number((totalAtp * ATP_ENERGY_KCAL).toFixed(1));
  const totalKj = Number((totalAtp * ATP_ENERGY_KJ).toFixed(1));
  const co2Moles = 6 * glucoseMoles;

  const stepsLatex = `\\begin{aligned}
\\text{গ্লুকোজ জারণ সমীকরণ:} &\\quad \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 + 38\\text{ADP} + 38\\text{Pi} \\xrightarrow{\\text{এনজাইম}} 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + 38\\text{ATP} \\\\[4pt]
\\text{মডেল} &: \\text{${model === 'classical' ? 'NCTB ক্লাসিক্যাল (38 ATP)' : 'আধুনিক প্রাণরসায়ন (36 ATP)'}} \\\\[4pt]
\\text{মোট উৎপাদিত ATP} &= ${glucoseMoles} \\times ${basePerGlucose} = \\mathbf{${totalAtp}\\text{ ATP}} \\\\[4pt]
\\text{উৎপন্ন মোট শক্তি (kcal)} &= ${totalAtp} \\times 7.3\\text{ kcal} = \\mathbf{${totalKcal}\\text{ kcal}} \\\\[4pt]
\\text{উৎপন্ন মোট শক্তি (kJ)} &= ${totalAtp} \\times 30.55\\text{ kJ} = \\mathbf{${totalKj}\\text{ kJ}} \\\\[4pt]
\\text{নিষ্ক্রান্ত } \\text{CO}_2 &= ${glucoseMoles} \\times 6 = \\mathbf{${co2Moles}\\text{ মোল}}
\\end{aligned}`;

  const explanationBn = `${glucoseMoles} মোল গ্লুকোজের সম্পূর্ণ সবাত শ্বসনে (${model === 'classical' ? 'NCTB পাঠ্যবই ধারা' : 'আধুনিক ধারা'}) সর্বমোট ${totalAtp}টি ATP এবং ${co2Moles} মোল CO₂ গ্যাস উৎপন্ন হয়। এই জারণ হতে প্রাপ্ত মোট কার্যকর শক্তি হলো ${totalKcal} kcal (${totalKj} kJ)। উল্লেখ্য, অবাত শ্বসনে মাত্র ২টি ATP (${(2 * glucoseMoles).toFixed(0)} ATP) উৎপন্ন হয়।`;

  const explanationEn = `Complete aerobic oxidation of ${glucoseMoles} mole(s) of glucose yields ${totalAtp} ATP and ${co2Moles} moles of CO₂. The biologically usable energy liberated amounts to ${totalKcal} kcal (${totalKj} kJ). Under anaerobic conditions, only 2 ATP per glucose molecule would be produced.`;

  return {
    glucoseMoles,
    model,
    totalAtp,
    totalKcal,
    totalKj,
    co2Moles,
    stages,
    stepsLatex,
    explanationBn,
    explanationEn,
  };
}

export interface MonohybridResult {
  parent1: string;
  parent2: string;
  gametes1: [string, string];
  gametes2: [string, string];
  grid: [
    [string, string],
    [string, string]
  ];
  genotypes: Record<string, number>;
  genotypicRatio: string;
  phenotypicRatio: string;
  dominantPercentage: number;
  recessivePercentage: number;
  stepsLatex: string;
  explanationBn: string;
  explanationEn: string;
}

export function calculateMonohybridCross(parent1: string, parent2: string): MonohybridResult {
  if (parent1.length !== 2 || parent2.length !== 2) {
    throw new Error('Parents must have 2 alleles (e.g., TT, Tt, tt).');
  }

  const g1: [string, string] = [parent1[0], parent1[1]];
  const g2: [string, string] = [parent2[0], parent2[1]];

  const combine = (a: string, b: string): string => {
    // Sort so uppercase (dominant) is first
    if (a.toUpperCase() === a && b.toUpperCase() !== b) return a + b;
    if (b.toUpperCase() === b && a.toUpperCase() !== a) return b + a;
    return a <= b ? a + b : b + a;
  };

  const grid: [[string, string], [string, string]] = [
    [combine(g1[0], g2[0]), combine(g1[0], g2[1])],
    [combine(g1[1], g2[0]), combine(g1[1], g2[1])],
  ];

  const allOffspring = [grid[0][0], grid[0][1], grid[1][0], grid[1][1]];
  const genotypes: Record<string, number> = {};
  let dominantCount = 0;
  let recessiveCount = 0;

  for (const child of allOffspring) {
    genotypes[child] = (genotypes[child] || 0) + 1;
    // Dominant if contains any uppercase letter
    if (/[A-Z]/.test(child)) {
      dominantCount++;
    } else {
      recessiveCount++;
    }
  }

  const dominantPercentage = (dominantCount / 4) * 100;
  const recessivePercentage = (recessiveCount / 4) * 100;

  // Format genotypic ratio
  const genoKeys = Object.keys(genotypes);
  const genotypicRatio = genoKeys.map((k) => `${genotypes[k]} ${k}`).join(' : ');
  const phenotypicRatio = `${dominantCount} প্রকট (Dominant) : ${recessiveCount} প্রচ্ছন্ন (Recessive)`;

  const stepsLatex = `\\begin{aligned}
\\text{জনক জনু (Parents)} &: \\text{Parent 1 } (${parent1}) \\times \\text{Parent 2 } (${parent2}) \\\\[4pt]
\\text{জননকোষ (Gametes)} &: \\text{P1: } ${g1[0]}, ${g1[1]} \\quad | \\quad \\text{P2: } ${g2[0]}, ${g2[1]} \\\\[4pt]
\\text{জিনোটাইপিক অনুপাত} &: ${genotypicRatio} \\\\[4pt]
\\text{ফিনোটাইপিক অনুপাত} &: ${dominantCount} : ${recessiveCount} \\implies \\mathbf{${dominantPercentage}\\%\\text{ প্রকট, } ${recessivePercentage}\\%\\text{ প্রচ্ছন্ন}}
\\end{aligned}`;

  const explanationBn = `মেন্ডেলের একসংকর জনন (Monohybrid Cross) পরীক্ষায় ${parent1} এবং ${parent2} এর মিলনে পুনেট স্কয়ারের মাধ্যমে ৪টি সম্ভাব্য সমন্বয় পাওয়া যায়। এর জিনোটাইপিক অনুপাত ${genotypicRatio} এবং ফিনোটাইপিক ফলাফল ${dominantPercentage}% প্রকট (Dominant/লম্বা) ও ${recessivePercentage}% প্রচ্ছন্ন (Recessive/খাটো)।`;

  const explanationEn = `A monohybrid cross between ${parent1} and ${parent2} yields a $2 \\times 2$ Punnett Square with genotypic distribution of ${genotypicRatio}. The phenotypic outcome is ${dominantPercentage}% dominant phenotype and ${recessivePercentage}% recessive phenotype.`;

  return {
    parent1,
    parent2,
    gametes1: g1,
    gametes2: g2,
    grid,
    genotypes,
    genotypicRatio,
    phenotypicRatio,
    dominantPercentage,
    recessivePercentage,
    stepsLatex,
    explanationBn,
    explanationEn,
  };
}

export interface SexLinkedChild {
  genotype: string;
  sex: 'female' | 'male';
  trait: 'normal' | 'carrier' | 'affected';
  labelBn: string;
  labelEn: string;
}

export interface SexLinkedResult {
  maternalGenotype: string;
  paternalGenotype: string;
  condition: 'colorblindness' | 'hemophilia';
  maternalGametes: [string, string];
  paternalGametes: [string, string];
  grid: [
    [SexLinkedChild, SexLinkedChild],
    [SexLinkedChild, SexLinkedChild]
  ];
  daughterStats: {
    normalPct: number;
    carrierPct: number;
    affectedPct: number;
  };
  sonStats: {
    normalPct: number;
    affectedPct: number;
  };
  overallAffectedPct: number;
  stepsLatex: string;
  explanationBn: string;
  explanationEn: string;
}

export function calculateSexLinkedCross(
  maternalGenotype: 'XN_XN' | 'XN_Xn' | 'Xn_Xn',
  paternalGenotype: 'XN_Y' | 'Xn_Y',
  condition: 'colorblindness' | 'hemophilia' = 'colorblindness'
): SexLinkedResult {
  const mGametes = maternalGenotype.split('_') as [string, string];
  const pGametes = paternalGenotype.split('_') as [string, string];

  const traitNameBn = condition === 'colorblindness' ? 'বর্ণান্ধতা' : 'হিমোফিলিয়া';
  const traitNameEn = condition === 'colorblindness' ? 'Color Blindness' : 'Hemophilia';

  const evaluateChild = (mAllele: string, pAllele: string): SexLinkedChild => {
    const isMale = pAllele === 'Y';
    if (!isMale) {
      // Female (XX)
      if (mAllele === 'XN' && pAllele === 'XN') {
        return {
          genotype: 'XᴺXᴺ',
          sex: 'female',
          trait: 'normal',
          labelBn: 'স্বাভাবিক কন্যা (Normal Female)',
          labelEn: 'Normal Female',
        };
      }
      if (mAllele === 'Xn' && pAllele === 'Xn') {
        return {
          genotype: 'XⁿXⁿ',
          sex: 'female',
          trait: 'affected',
          labelBn: `আক্রান্ত কন্যা (${traitNameBn})`,
          labelEn: `Affected Female (${traitNameEn})`,
        };
      }
      return {
        genotype: 'XᴺXⁿ',
        sex: 'female',
        trait: 'carrier',
        labelBn: `বাহক কন্যা (Carrier Female - দৃষ্টি স্বাভাবিক)`,
        labelEn: `Carrier Female (Normal Vision)`,
      };
    } else {
      // Male (XY)
      if (mAllele === 'XN') {
        return {
          genotype: 'XᴺY',
          sex: 'male',
          trait: 'normal',
          labelBn: 'স্বাভাবিক পুত্র (Normal Male)',
          labelEn: 'Normal Male',
        };
      }
      return {
        genotype: 'XⁿY',
        sex: 'male',
        trait: 'affected',
        labelBn: `আক্রান্ত পুত্র (${traitNameBn})`,
        labelEn: `Affected Male (${traitNameEn})`,
      };
    }
  };

  const grid: [[SexLinkedChild, SexLinkedChild], [SexLinkedChild, SexLinkedChild]] = [
    [evaluateChild(mGametes[0], pGametes[0]), evaluateChild(mGametes[0], pGametes[1])],
    [evaluateChild(mGametes[1], pGametes[0]), evaluateChild(mGametes[1], pGametes[1])],
  ];

  const allProgeny = [grid[0][0], grid[0][1], grid[1][0], grid[1][1]];
  const daughters = allProgeny.filter((p) => p.sex === 'female');
  const sons = allProgeny.filter((p) => p.sex === 'male');

  const dNormal = daughters.filter((d) => d.trait === 'normal').length;
  const dCarrier = daughters.filter((d) => d.trait === 'carrier').length;
  const dAffected = daughters.filter((d) => d.trait === 'affected').length;

  const sNormal = sons.filter((s) => s.trait === 'normal').length;
  const sAffected = sons.filter((s) => s.trait === 'affected').length;

  const daughterStats = {
    normalPct: (dNormal / daughters.length) * 100,
    carrierPct: (dCarrier / daughters.length) * 100,
    affectedPct: (dAffected / daughters.length) * 100,
  };

  const sonStats = {
    normalPct: (sNormal / sons.length) * 100,
    affectedPct: (sAffected / sons.length) * 100,
  };

  const overallAffectedPct = (allProgeny.filter((p) => p.trait === 'affected').length / 4) * 100;

  const matRepr = maternalGenotype.replace('XN', 'X^N').replace('Xn', 'X^n');
  const patRepr = paternalGenotype.replace('XN', 'X^N').replace('Xn', 'X^n');

  const stepsLatex = `\\begin{aligned}
\\text{মাতার জিনোটাইপ} &: ${matRepr}, \\quad \\text{পিতার জিনোটাইপ}: ${patRepr} \\\\[4pt]
\\text{কন্যা সন্তান (Daughters)} &: ${daughterStats.normalPct}\\%\\text{ স্বাভাবিক}, \\; ${daughterStats.carrierPct}\\%\\text{ বাহক (সুস্থ)}, \\; ${daughterStats.affectedPct}\\%\\text{ আক্রান্ত} \\\\[4pt]
\\text{পুত্র সন্তান (Sons)} &: ${sonStats.normalPct}\\%\\text{ স্বাভাবিক}, \\; ${sonStats.affectedPct}\\%\\text{ আক্রান্ত (${traitNameBn})} \\\\[4pt]
\\text{সর্বমোট অপত্যের মধ্যে আক্রান্ত} &: \\mathbf{${overallAffectedPct}\\%}
\\end{aligned}`;

  const explanationBn = `লিঙ্গ-সংযুক্ত প্রচ্ছন্ন বৈশিষ্ট্য (${traitNameBn}) সঞ্চারণে: কন্যা সন্তানদের মধ্যে ${daughterStats.normalPct}% সম্পূর্ণ স্বাভাবিক, ${daughterStats.carrierPct}% বাহক (সুস্থ দৃষ্টি সম্পন্ন) এবং ${daughterStats.affectedPct}% আক্রান্ত। পুত্র সন্তানদের ক্ষেত্রে ${sonStats.normalPct}% স্বাভাবিক এবং ${sonStats.affectedPct}% আক্রান্ত হবে। যেহেতু পুরুষদের একটি মাত্র X ক্রোমোজোম থাকে, তাই একটি প্রচ্ছন্ন অ্যালিল (Xⁿ) পেলেই তারা আক্রান্ত হয়; পুরুষ কখনো বাহক হতে পারে না।`;

  const explanationEn = `In sex-linked recessive inheritance of ${traitNameEn}: Daughters will be ${daughterStats.normalPct}% normal, ${daughterStats.carrierPct}% carriers, and ${daughterStats.affectedPct}% affected. Sons will be ${sonStats.normalPct}% normal and ${sonStats.affectedPct}% affected. Because human males possess only one X chromosome (hemizygous), inheriting a single recessive mutant allele results in phenotypic expression; males can never be silent carriers.`;

  return {
    maternalGenotype,
    paternalGenotype,
    condition,
    maternalGametes: mGametes,
    paternalGametes: pGametes,
    grid,
    daughterStats,
    sonStats,
    overallAffectedPct,
    stepsLatex,
    explanationBn,
    explanationEn,
  };
}

export interface TrophicLevelData {
  levelNumber: number;
  nameBn: string;
  nameEn: string;
  roleBn: string;
  roleEn: string;
  energy: number;
  percentage: number;
  heatLossFromPrevious: number;
}

export interface TrophicResult {
  producerEnergy: number;
  unit: 'J' | 'kcal';
  levels: TrophicLevelData[];
  totalHeatLoss: number;
  stepsLatex: string;
  explanationBn: string;
  explanationEn: string;
}

export function calculateTrophicEnergy(producerEnergy: number, unit: 'J' | 'kcal' = 'J'): TrophicResult {
  if (producerEnergy <= 0) {
    throw new Error('Producer energy must be greater than 0.');
  }

  const e1 = producerEnergy;
  const e2 = Number((e1 * 0.10).toFixed(2));
  const e3 = Number((e2 * 0.10).toFixed(2));
  const e4 = Number((e3 * 0.10).toFixed(3));

  const levels: TrophicLevelData[] = [
    {
      levelNumber: 1,
      nameBn: 'উৎপাদক (Trophic Level 1)',
      nameEn: 'Producers (Level 1)',
      roleBn: 'সবুজ উদ্ভিদ (সৌরশক্তি সংবন্ধনকারী)',
      roleEn: 'Autotrophs / Green Plants',
      energy: e1,
      percentage: 100,
      heatLossFromPrevious: 0,
    },
    {
      levelNumber: 2,
      nameBn: 'প্রথম স্তরের খাদক (Trophic Level 2)',
      nameEn: 'Primary Consumers (Level 2)',
      roleBn: 'তৃণভোজী প্রাণী (ঘাসফড়িং, হরিণ, গরু)',
      roleEn: 'Herbivores (Insects, Deer, Cattle)',
      energy: e2,
      percentage: 10,
      heatLossFromPrevious: Number((e1 * 0.90).toFixed(2)),
    },
    {
      levelNumber: 3,
      nameBn: 'দ্বিতীয় স্তরের খাদক (Trophic Level 3)',
      nameEn: 'Secondary Consumers (Level 3)',
      roleBn: 'গৌণ খাদক / ছোট মাংসাশী (ব্যাঙ, মাছ)',
      roleEn: 'Carnivores (Frogs, Small Fish)',
      energy: e3,
      percentage: 1,
      heatLossFromPrevious: Number((e2 * 0.90).toFixed(2)),
    },
    {
      levelNumber: 4,
      nameBn: 'তৃতীয় বা সর্বোচ্চ খাদক (Trophic Level 4)',
      nameEn: 'Tertiary Consumers (Level 4)',
      roleBn: 'সর্বোচ্চ খাদক (বাঘ, বাজপাখি, মানুষ)',
      roleEn: 'Apex Predators (Tiger, Hawk, Humans)',
      energy: e4,
      percentage: 0.1,
      heatLossFromPrevious: Number((e3 * 0.90).toFixed(3)),
    },
  ];

  const totalHeatLoss = Number((e1 - e4).toFixed(2));

  const stepsLatex = `\\begin{aligned}
\\text{লিণ্ডেম্যানের ১০\\% সূত্র} &: E_{n+1} = E_n \\times 0.10 \\\\[4pt]
\\text{উৎপাদক (Level 1)} &= \\mathbf{${e1}\\text{ ${unit}}} \\; (100\\%) \\\\[4pt]
\\text{তৃণভোজী (Level 2)} &= ${e1} \\times 0.10 = \\mathbf{${e2}\\text{ ${unit}}} \\; (10\\%) \\\\[4pt]
\\text{গৌণ খাদক (Level 3)} &= ${e2} \\times 0.10 = \\mathbf{${e3}\\text{ ${unit}}} \\; (1\\%) \\\\[4pt]
\\text{সর্বোচ্চ খাদক (Level 4)} &= ${e3} \\times 0.10 = \\mathbf{${e4}\\text{ ${unit}}} \\; (0.1\\%) \\\\[6pt]
\\text{মোট অপচয়কৃত শক্তি (তাপ ও শ্বসন)} &= ${e1} - ${e4} = \\mathbf{${totalHeatLoss}\\text{ ${unit}} \\; (99.9\\%)}
\\end{aligned}`;

  const explanationBn = `লিণ্ডেম্যানের ১০% শক্তি রূপান্তর নীতি অনুযায়ী, প্রতি খাদ্যস্তরে গৃহীত শক্তির মাত্র ১০% পরবর্তী খাদ্যস্তরে দৈহিক জৈবভর হিসেবে স্থানান্তরিত হয়। বাকি ৯০% শক্তি জীবের শ্বসন, বিপাক ও বর্জ্য উৎপাদনে ব্যয় হয়ে পরিবেশে তাপ হিসেবে বিনষ্ট হয়। ফলে উৎপাদকে ${e1} ${unit} শক্তি থাকলে সর্বোচ্চ খাদক স্তরে পৌঁছায় মাত্র ${e4} ${unit}।`;

  const explanationEn = `According to Lindeman's 10% Ecological Efficiency Law, only approximately 10% of the energy from one trophic level is incorporated into the biomass of the next level. The remaining 90% is dissipated as metabolic heat and waste through cellular respiration. An initial ${e1} ${unit} at the producer level diminishes to only ${e4} ${unit} at the apex predator level.`;

  return {
    producerEnergy,
    unit,
    levels,
    totalHeatLoss,
    stepsLatex,
    explanationBn,
    explanationEn,
  };
}

export interface BloodMatchResult {
  donor: BloodType;
  recipient: BloodType;
  isCompatible: boolean;
  donorAntigens: string[];
  recipientAntibodies: string[];
  clumpingRisk: boolean;
  explanationBn: string;
  explanationEn: string;
}

export function checkBloodCompatibility(donor: BloodType, recipient: BloodType): BloodMatchResult {
  const donorInfo = BLOOD_GROUPS[donor];
  const recipientInfo = BLOOD_GROUPS[recipient];

  const isCompatible = donorInfo.canDonateTo.includes(recipient);
  const clumpingRisk = !isCompatible;

  let explanationBn = '';
  let explanationEn = '';

  if (isCompatible) {
    explanationBn = `রক্তদান নিরাপদ। ${donor} গ্রুপের লোহিত কণিকায় বিদ্যমান অ্যান্টিজেন গ্রহীতার (${recipient}) রক্তরসে থাকা অ্যান্টিবডি দ্বারা জমাটবদ্ধ (Agglutination) হবে না।`;
    explanationEn = `Safe transfusion. The antigens on the donor's (${donor}) red blood cells will not be agglutinated by antibodies present in the recipient's (${recipient}) plasma.`;
  } else {
    explanationBn = `বিপজ্জনক! রক্তদান সম্পূর্ণ অনুপযুক্ত। দাতার (${donor}) লোহিত কণিকায় উপস্থিত অ্যান্টিজেন গ্রহীতার (${recipient}) অ্যান্টিবডির সাথে বিক্রিয়া করে রক্তকণিকা জমাটবদ্ধ (Agglutination / রক্ত জমাট বাঁধা) করে দেবে, যা রোগীর জীবনের জন্য প্রাণঘাতী।`;
    explanationEn = `Dangerous! Incompatible transfusion. The donor's (${donor}) red blood cell antigens will react with the antibodies present in the recipient's (${recipient}) plasma, causing fatal acute intravascular agglutination and hemolysis.`;
  }

  return {
    donor,
    recipient,
    isCompatible,
    donorAntigens: donorInfo.antigens,
    recipientAntibodies: recipientInfo.antibodies,
    clumpingRisk,
    explanationBn,
    explanationEn,
  };
}
