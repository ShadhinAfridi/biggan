/**
 * SSC Physics Mathematical & Computational Engine
 * Compliant with National Curriculum and Textbook Board (NCTB) Bangladesh (Classes 9-10).
 * Covers all 13 NCTB Chapters with bidirectional formula solving and step-by-step KaTeX proofs.
 */

import { PHYSICAL_CONSTANTS } from './constants';

export interface StepItem {
  labelBn: string;
  labelEn: string;
  latex: string;
  notesBn?: string;
  notesEn?: string;
}

export interface PhysicsResult {
  success: boolean;
  value?: number | string;
  unit?: string;
  steps: StepItem[];
  errorMessage?: string;
  extraData?: Record<string, any>;
}

// Utility: format numbers cleanly for LaTeX and output
function fmt(num: number, decimals: number = 4): string {
  if (Math.abs(num) >= 1e6 || (Math.abs(num) < 1e-3 && num !== 0)) {
    return num.toExponential(decimals);
  }
  const factor = Math.pow(10, decimals);
  return (Math.round(num * factor) / factor).toString();
}

// ==========================================
// CHAPTER 1: PHYSICAL QUANTITIES & MEASUREMENT
// ==========================================

export function calcVernierConstant(s: number, N: number): PhysicsResult {
  if (s <= 0 || N <= 0 || !Number.isInteger(N)) {
    return {
      success: false,
      steps: [],
      errorMessage: 'মূল স্কেলের ক্ষুদ্রতম ঘর (s > 0) এবং ভার্নিয়ার ভাগ সংখ্যা (N > 0) ধনাত্মক পূর্ণসংখ্যা হতে হবে।',
    };
  }
  const vc = s / N;
  return {
    success: true,
    value: vc,
    unit: 'mm',
    extraData: { s, N, vc },
    steps: [
      {
        labelBn: 'প্রদত্ত উপাত্ত',
        labelEn: 'Given Data',
        latex: `s = ${s}\\text{ mm}, \\quad N = ${N}`,
      },
      {
        labelBn: 'ভার্নিয়ার ধ্রুবক (VC) সূত্র',
        labelEn: 'Vernier Constant Formula',
        latex: '\\text{VC} = \\frac{s}{N}',
      },
      {
        labelBn: 'মান বসিয়ে সমাধান',
        labelEn: 'Calculation',
        latex: `\\text{VC} = \\frac{${s}}{${N}} = ${fmt(vc, 4)}\\text{ mm} = ${fmt(vc / 10, 5)}\\text{ cm}`,
        notesBn: `অতএব, স্লাইড ক্যালিপার্সের ভার্নিয়ার ধ্রুবক ${fmt(vc, 4)} মিলিমিটার।`,
        notesEn: `Vernier Constant is ${fmt(vc, 4)} mm (${fmt(vc / 10, 5)} cm).`,
      },
    ],
  };
}

export function calcSlideCalipers(M: number, V: number, VC: number, E: number = 0): PhysicsResult {
  if (M < 0 || V < 0 || VC <= 0) {
    return {
      success: false,
      steps: [],
      errorMessage: 'মূল স্কেল পাঠ (M ≥ 0), ভার্নিয়ার সমপাতন (V ≥ 0) এবং ভার্নিয়ার ধ্রুবক (VC > 0) হতে হবে।',
    };
  }
  const totalLength = M + (V * VC) - E;
  return {
    success: true,
    value: totalLength,
    unit: 'mm',
    extraData: { M, V, VC, E, totalLength },
    steps: [
      {
        labelBn: 'প্রদত্ত মানসমূহ',
        labelEn: 'Given Readings',
        latex: `M = ${M}\\text{ mm}, \\quad V = ${V}, \\quad \\text{VC} = ${VC}\\text{ mm}, \\quad E = ${E}\\text{ mm}`,
      },
      {
        labelBn: 'স্লাইড ক্যালিপার্সের পাঠ সূত্র',
        labelEn: 'Slide Calipers Formula',
        latex: 'L = M + (V \\times \\text{VC}) - E',
      },
      {
        labelBn: 'মান প্রতিস্থাপন ও নির্ণয়',
        labelEn: 'Step-by-step Evaluation',
        latex: `L = ${M} + (${V} \\times ${VC}) - (${E}) = ${M} + ${fmt(V * VC, 4)} - ${E} = ${fmt(totalLength, 4)}\\text{ mm}`,
        notesBn: `বস্তুর প্রকৃত দৈর্ঘ্য ${fmt(totalLength, 4)} mm (বা ${fmt(totalLength / 10, 4)} cm)।`,
        notesEn: `Measured true length is ${fmt(totalLength, 4)} mm (${fmt(totalLength / 10, 4)} cm).`,
      },
    ],
  };
}

export function calcScrewGaugeLeastCount(p: number, N: number): PhysicsResult {
  if (p <= 0 || N <= 0 || !Number.isInteger(N)) {
    return {
      success: false,
      steps: [],
      errorMessage: 'পিচ (p > 0) এবং বৃত্তাকার স্কেলের মোট ভাগ সংখ্যা (N > 0) ধনাত্মক পূর্ণসংখ্যা হতে হবে।',
    };
  }
  const lc = p / N;
  return {
    success: true,
    value: lc,
    unit: 'mm',
    extraData: { p, N, lc },
    steps: [
      {
        labelBn: 'প্রদত্ত মানসমূহ',
        labelEn: 'Given Values',
        latex: `\\text{পিচ } p = ${p}\\text{ mm}, \\quad \\text{বৃত্তাকার স্কেলের ভাগ } N = ${N}`,
      },
      {
        labelBn: 'লঘিষ্ঠ গণন (LC) সূত্র',
        labelEn: 'Least Count Formula',
        latex: '\\text{LC} = \\frac{p}{N}',
      },
      {
        labelBn: 'লঘিষ্ঠ গণন হিসাব',
        labelEn: 'Evaluation',
        latex: `\\text{LC} = \\frac{${p}}{${N}} = ${fmt(lc, 4)}\\text{ mm}`,
        notesBn: `স্ক্রু গজের লঘিষ্ঠ গণন ${fmt(lc, 4)} mm।`,
        notesEn: `Least Count of screw gauge is ${fmt(lc, 4)} mm.`,
      },
    ],
  };
}

export function calcScrewGaugeReading(
  L_linear: number,
  C_scale: number,
  LC: number,
  E: number = 0
): PhysicsResult {
  if (L_linear < 0 || C_scale < 0 || LC <= 0) {
    return {
      success: false,
      steps: [],
      errorMessage: 'রৈখিক স্কেল পাঠ (L ≥ 0), বৃত্তাকার স্কেল পাঠ (C ≥ 0) এবং লঘিষ্ঠ গণন (LC > 0) হতে হবে।',
    };
  }
  const diameter = L_linear + (C_scale * LC) - E;
  return {
    success: true,
    value: diameter,
    unit: 'mm',
    extraData: { L_linear, C_scale, LC, E, diameter },
    steps: [
      {
        labelBn: 'স্ক্রু গজের পরিমাপক উপাত্ত',
        labelEn: 'Input Parameters',
        latex: `L_{\\text{linear}} = ${L_linear}\\text{ mm}, \\quad C_{\\text{scale}} = ${C_scale}, \\quad \\text{LC} = ${LC}\\text{ mm}, \\quad E = ${E}\\text{ mm}`,
      },
      {
        labelBn: 'ব্যাস/পুরুত্ব নির্ণয় সূত্র',
        labelEn: 'Diameter Formula',
        latex: 'd = L_{\\text{linear}} + (C_{\\text{scale}} \\times \\text{LC}) - E',
      },
      {
        labelBn: 'গণনাকৃত ব্যাস',
        labelEn: 'Calculated Diameter',
        latex: `d = ${L_linear} + (${C_scale} \\times ${LC}) - (${E}) = ${fmt(diameter, 4)}\\text{ mm}`,
      },
    ],
  };
}

export function calcSphereVolume(val: number, isDiameter: boolean = false): PhysicsResult {
  if (val <= 0) {
    return {
      success: false,
      steps: [],
      errorMessage: 'ব্যাসার্ধ বা ব্যাস অবশ্যই ধনাত্মক হতে হবে।',
    };
  }
  const r = isDiameter ? val / 2 : val;
  const d = isDiameter ? val : val * 2;
  const vol = (4 / 3) * Math.PI * Math.pow(r, 3);
  return {
    success: true,
    value: vol,
    unit: 'm³ বা cm³',
    extraData: { r, d, vol },
    steps: [
      {
        labelBn: isDiameter ? 'প্রদত্ত গোলকের ব্যাস ও ব্যাসার্ধ' : 'প্রদত্ত গোলকের ব্যাসার্ধ',
        labelEn: isDiameter ? 'Given Diameter & Radius' : 'Given Radius',
        latex: isDiameter ? `d = ${val}, \\quad r = \\frac{d}{2} = ${r}` : `r = ${r}`,
      },
      {
        labelBn: 'গোলকের আয়তন সূত্র',
        labelEn: 'Sphere Volume Formula',
        latex: 'V = \\frac{4}{3}\\pi r^3',
      },
      {
        labelBn: 'আয়তন গণনা',
        labelEn: 'Volume Evaluation',
        latex: `V = \\frac{4}{3} \\times \\pi \\times (${r})^3 = ${fmt(vol, 4)}`,
        notesBn: `গোলকের আয়তন প্রায় ${fmt(vol, 4)} ঘন একক।`,
        notesEn: `Calculated volume is ${fmt(vol, 4)} cubic units.`,
      },
    ],
  };
}

export function calcCylinderVolume(val: number, height: number, isDiameter: boolean = false): PhysicsResult {
  if (val <= 0 || height <= 0) {
    return {
      success: false,
      steps: [],
      errorMessage: 'ব্যাসার্ধ এবং উচ্চতা উভয়ই ধনাত্মক হতে হবে।',
    };
  }
  const r = isDiameter ? val / 2 : val;
  const vol = Math.PI * Math.pow(r, 2) * height;
  return {
    success: true,
    value: vol,
    unit: 'm³ বা cm³',
    extraData: { r, height, vol },
    steps: [
      {
        labelBn: 'বেলনের মাত্রা',
        labelEn: 'Cylinder Dimensions',
        latex: `r = ${r}, \\quad h = ${height}`,
      },
      {
        labelBn: 'বেলনের আয়তন সূত্র',
        labelEn: 'Cylinder Volume Formula',
        latex: 'V = \\pi r^2 h',
      },
      {
        labelBn: 'ফলাফল',
        labelEn: 'Calculated Volume',
        latex: `V = \\pi \\times (${r})^2 \\times ${height} = ${fmt(vol, 4)}`,
      },
    ],
  };
}

// ==========================================
// CHAPTER 2: MOTION (গতি)
// ==========================================

export function calcMotionEquation(
  solveFor: 'v' | 'u' | 'a' | 't' | 's',
  params: { u?: number; v?: number; a?: number; t?: number; s?: number }
): PhysicsResult {
  const { u, v, a, t, s } = params;

  if (solveFor === 'v') {
    // 1. v = u + at
    if (u !== undefined && a !== undefined && t !== undefined) {
      const res = u + a * t;
      return {
        success: true,
        value: res,
        unit: 'm/s',
        steps: [
          { labelBn: 'প্রদত্ত উপাত্ত', labelEn: 'Given Data', latex: `u = ${u}\\text{ m/s}, \\quad a = ${a}\\text{ m/s}^2, \\quad t = ${t}\\text{ s}` },
          { labelBn: 'গতির ১ম সমীকরণ', labelEn: 'First Equation of Motion', latex: 'v = u + at' },
          { labelBn: 'শেষ বেগ নির্ণয়', labelEn: 'Evaluation', latex: `v = ${u} + (${a} \\times ${t}) = ${fmt(res, 4)}\\text{ m/s}` },
        ],
      };
    }
    // 2. v^2 = u^2 + 2as => v = sqrt(u^2 + 2as)
    if (u !== undefined && a !== undefined && s !== undefined) {
      const valUnderRad = u * u + 2 * a * s;
      if (valUnderRad < 0) {
        return { success: false, steps: [], errorMessage: 'u² + 2as এর মান ঋণাত্মক হতে পারে না।' };
      }
      const res = Math.sqrt(valUnderRad);
      return {
        success: true,
        value: res,
        unit: 'm/s',
        steps: [
          { labelBn: 'প্রদত্ত উপাত্ত', labelEn: 'Given Data', latex: `u = ${u}\\text{ m/s}, \\quad a = ${a}\\text{ m/s}^2, \\quad s = ${s}\\text{ m}` },
          { labelBn: 'বেগ-সরণ সমীকরণ', labelEn: 'Velocity-Displacement Formula', latex: 'v = \\sqrt{u^2 + 2as}' },
          { labelBn: 'শেষ বেগ নির্ণয়', labelEn: 'Evaluation', latex: `v = \\sqrt{(${u})^2 + 2(${a})(${s})} = \\sqrt{${fmt(valUnderRad, 4)}} = ${fmt(res, 4)}\\text{ m/s}` },
        ],
      };
    }
    // 3. v = 2s/t - u
    if (s !== undefined && t !== undefined && u !== undefined) {
      if (t <= 0) return { success: false, steps: [], errorMessage: 'সময় t > 0 হতে হবে।' };
      const res = (2 * s) / t - u;
      return {
        success: true,
        value: res,
        unit: 'm/s',
        steps: [
          { labelBn: 'গড় বেগ হতে রূপান্তর', labelEn: 'From Average Velocity', latex: 's = \\left(\\frac{u + v}{2}\\right)t \\implies v = \\frac{2s}{t} - u' },
          { labelBn: 'মান প্রতিস্থাপন', labelEn: 'Calculation', latex: `v = \\frac{2(${s})}{${t}} - ${u} = ${fmt(res, 4)}\\text{ m/s}` },
        ],
      };
    }
  }

  if (solveFor === 's') {
    // 1. s = ut + 1/2 at^2
    if (u !== undefined && t !== undefined && a !== undefined) {
      const res = u * t + 0.5 * a * t * t;
      return {
        success: true,
        value: res,
        unit: 'm',
        steps: [
          { labelBn: 'প্রদত্ত মানসমূহ', labelEn: 'Given Data', latex: `u = ${u}\\text{ m/s}, \\quad t = ${t}\\text{ s}, \\quad a = ${a}\\text{ m/s}^2` },
          { labelBn: 'সরণ-সময় সমীকরণ', labelEn: 'Displacement-Time Formula', latex: 's = ut + \\frac{1}{2}at^2' },
          { labelBn: 'অতিক্রান্ত দূরত্ব', labelEn: 'Evaluation', latex: `s = (${u})(${t}) + \\frac{1}{2}(${a})(${t})^2 = ${fmt(u * t, 4)} + ${fmt(0.5 * a * t * t, 4)} = ${fmt(res, 4)}\\text{ m}` },
        ],
      };
    }
    // 2. s = (u + v)/2 * t
    if (u !== undefined && v !== undefined && t !== undefined) {
      const res = ((u + v) / 2) * t;
      return {
        success: true,
        value: res,
        unit: 'm',
        steps: [
          { labelBn: 'গড় বেগের সমীকরণ', labelEn: 'Displacement with Average Velocity', latex: 's = \\left(\\frac{u + v}{2}\\right)t' },
          { labelBn: 'হিসাব', labelEn: 'Evaluation', latex: `s = \\left(\\frac{${u} + ${v}}{2}\\right) \\times ${t} = ${fmt(res, 4)}\\text{ m}` },
        ],
      };
    }
    // 3. s = (v^2 - u^2)/(2a)
    if (v !== undefined && u !== undefined && a !== undefined) {
      if (a === 0) return { success: false, steps: [], errorMessage: 'ত্বরণ a = 0 হলে ভাগ অসংজ্ঞায়িত।' };
      const res = (v * v - u * u) / (2 * a);
      return {
        success: true,
        value: res,
        unit: 'm',
        steps: [
          { labelBn: 'বেগ-সরণ সমীকরণ থেকে সরণ', labelEn: 'From v² = u² + 2as', latex: 's = \\frac{v^2 - u^2}{2a}' },
          { labelBn: 'মান বসিয়ে সমাধান', labelEn: 'Calculation', latex: `s = \\frac{(${v})^2 - (${u})^2}{2(${a})} = ${fmt(res, 4)}\\text{ m}` },
        ],
      };
    }
  }

  if (solveFor === 'a') {
    // 1. a = (v - u)/t
    if (v !== undefined && u !== undefined && t !== undefined) {
      if (t <= 0) return { success: false, steps: [], errorMessage: 'সময় t অবশ্যই ধনাত্মক হতে হবে।' };
      const res = (v - u) / t;
      return {
        success: true,
        value: res,
        unit: 'm/s²',
        steps: [
          { labelBn: 'ত্বরণের সংজ্ঞা সূত্র', labelEn: 'Acceleration Definition', latex: 'a = \\frac{v - u}{t}' },
          { labelBn: 'ত্বরণ নির্ণয়', labelEn: 'Evaluation', latex: `a = \\frac{${v} - ${u}}{${t}} = ${fmt(res, 4)}\\text{ m/s}^2` },
        ],
      };
    }
    // 2. a = (v^2 - u^2)/(2s)
    if (v !== undefined && u !== undefined && s !== undefined) {
      if (s === 0) return { success: false, steps: [], errorMessage: 'সরণ s = 0 হলে ভাগ অসংজ্ঞায়িত।' };
      const res = (v * v - u * u) / (2 * s);
      return {
        success: true,
        value: res,
        unit: 'm/s²',
        steps: [
          { labelBn: 'বেগ-দূরত্ব হতে ত্বরণ', labelEn: 'From v² = u² + 2as', latex: 'a = \\frac{v^2 - u^2}{2s}' },
          { labelBn: 'হিসাব', labelEn: 'Evaluation', latex: `a = \\frac{(${v})^2 - (${u})^2}{2(${s})} = ${fmt(res, 4)}\\text{ m/s}^2` },
        ],
      };
    }
  }

  if (solveFor === 't') {
    // 1. t = (v - u)/a
    if (v !== undefined && u !== undefined && a !== undefined) {
      if (a === 0) return { success: false, steps: [], errorMessage: 'ত্বরণ a = 0 হলে সমবেগে t = s/v সূত্র প্রযোজ্য।' };
      const res = (v - u) / a;
      if (res < 0) return { success: false, steps: [], errorMessage: 'সময় ঋণাত্মক হতে পারে না। দিক বা চিহ্নের গরমিল চেক করুন।' };
      return {
        success: true,
        value: res,
        unit: 's',
        steps: [
          { labelBn: 'প্রয়োজনীয় সময় সূত্র', labelEn: 'Time Formula', latex: 't = \\frac{v - u}{a}' },
          { labelBn: 'সময় নির্ণয়', labelEn: 'Evaluation', latex: `t = \\frac{${v} - ${u}}{${a}} = ${fmt(res, 4)}\\text{ s}` },
        ],
      };
    }
    // 2. s = ut + 1/2 at^2 => at^2 + 2ut - 2s = 0
    if (s !== undefined && u !== undefined && a !== undefined) {
      if (a === 0) {
        if (u === 0) return { success: false, steps: [], errorMessage: 'u ও a উভয়ই শূন্য হতে পারে না।' };
        const res = s / u;
        return {
          success: true,
          value: res,
          unit: 's',
          steps: [{ labelBn: 'সমবেগ সূত্র', labelEn: 'Constant Velocity', latex: `t = \\frac{s}{u} = \\frac{${s}}{${u}} = ${fmt(res, 4)}\\text{ s}` }],
        };
      }
      const disc = 4 * u * u - 4 * a * (-2 * s);
      if (disc < 0) return { success: false, steps: [], errorMessage: 'বাস্তব সময়ে এই দূরত্বে পৌঁছানো সম্ভব নয় (Discriminant < 0)।' };
      const root1 = (-2 * u + Math.sqrt(disc)) / (2 * a);
      const root2 = (-2 * u - Math.sqrt(disc)) / (2 * a);
      const validT = [root1, root2].filter((tVal) => tVal >= 0);
      if (validT.length === 0) return { success: false, steps: [], errorMessage: 'কোনো ধনাত্মক সময় পাওয়া যায়নি।' };
      const chosenT = Math.min(...validT);
      return {
        success: true,
        value: chosenT,
        unit: 's',
        steps: [
          { labelBn: 'দ্বিঘাত সমীকরণের গঠন', labelEn: 'Quadratic Equation in t', latex: `\\frac{1}{2}at^2 + ut - s = 0 \\implies (${0.5 * a})t^2 + (${u})t - (${s}) = 0` },
          { labelBn: 'ধনাত্মক মূল গ্রহণ করে', labelEn: 'Positive Root', latex: `t = \\frac{-${u} + \\sqrt{(${u})^2 + 2(${a})(${s})}}{${a}} = ${fmt(chosenT, 4)}\\text{ s}` },
        ],
      };
    }
  }

  return {
    success: false,
    steps: [],
    errorMessage: 'পর্যাপ্ত ইনপুট পাওয়া যায়নি। সমীকরণের জন্য সঠিক ভ্যারিয়েবল নির্বাচন করুন।',
  };
}

export function calcVerticalProjection(u: number, g: number = PHYSICAL_CONSTANTS.G_STANDARD): PhysicsResult {
  if (u <= 0) {
    return {
      success: false,
      steps: [],
      errorMessage: 'খাড়া উপরের দিকে নিক্ষেপের আদি বেগ u > 0 হতে হবে।',
    };
  }
  const H_max = (u * u) / (2 * g);
  const t_rise = u / g;
  const T_flight = (2 * u) / g;

  return {
    success: true,
    value: H_max,
    unit: 'm',
    extraData: { H_max, t_rise, T_flight, g },
    steps: [
      {
        labelBn: 'নিক্ষিপ্ত বস্তুর প্রাথমিক শর্ত',
        labelEn: 'Initial Conditions',
        latex: `u = ${u}\\text{ m/s}, \\quad g = ${g}\\text{ m/s}^2`,
      },
      {
        labelBn: 'সর্বোচ্চ উচ্চতা (H_max) সূত্র',
        labelEn: 'Maximum Height Formula',
        latex: 'H_{\\text{max}} = \\frac{u^2}{2g}',
      },
      {
        labelBn: 'সর্বোচ্চ উচ্চতা হিসাব',
        labelEn: 'Maximum Height Calculation',
        latex: `H_{\\text{max}} = \\frac{(${u})^2}{2 \\times ${g}} = \\frac{${fmt(u * u, 2)}}{${2 * g}} = ${fmt(H_max, 4)}\\text{ m}`,
      },
      {
        labelBn: 'সর্বোচ্চ উচ্চতায় ওঠার সময় (t_rise)',
        labelEn: 'Time to Reach Peak',
        latex: `t_{\\text{rise}} = \\frac{u}{g} = \\frac{${u}}{${g}} = ${fmt(t_rise, 4)}\\text{ s}`,
      },
      {
        labelBn: 'মোট বিচরণকাল (Time of Flight T)',
        labelEn: 'Total Flight Time',
        latex: `T = \\frac{2u}{g} = 2 \\times ${fmt(t_rise, 4)} = ${fmt(T_flight, 4)}\\text{ s}`,
      },
    ],
  };
}

// ==========================================
// CHAPTER 3: FORCE (বল)
// ==========================================

export function calcNewtonSecondLaw(
  solveFor: 'F' | 'm' | 'a',
  params: { F?: number; m?: number; a?: number }
): PhysicsResult {
  const { F, m, a } = params;

  if (solveFor === 'F') {
    if (m === undefined || a === undefined || m <= 0) {
      return { success: false, steps: [], errorMessage: 'ভর m > 0 এবং ত্বরণ a প্রদান করুন।' };
    }
    const force = m * a;
    return {
      success: true,
      value: force,
      unit: 'N',
      steps: [
        { labelBn: 'প্রদত্ত উপাত্ত', labelEn: 'Given Data', latex: `m = ${m}\\text{ kg}, \\quad a = ${a}\\text{ m/s}^2` },
        { labelBn: 'নিউটনের ২য় সূত্র', labelEn: "Newton's 2nd Law", latex: 'F = m \\times a' },
        { labelBn: 'বল নির্ণয়', labelEn: 'Force Calculation', latex: `F = ${m} \\times ${a} = ${fmt(force, 4)}\\text{ N}` },
      ],
    };
  }

  if (solveFor === 'a') {
    if (F === undefined || m === undefined || m <= 0) {
      return { success: false, steps: [], errorMessage: 'প্রযুক্ত বল F এবং ভর m > 0 দিন।' };
    }
    const acc = F / m;
    return {
      success: true,
      value: acc,
      unit: 'm/s²',
      steps: [
        { labelBn: 'সূত্রের রূপান্তর', labelEn: 'Rearranged Equation', latex: 'a = \\frac{F}{m}' },
        { labelBn: 'ত্বরণ হিসাব', labelEn: 'Acceleration Evaluation', latex: `a = \\frac{${F}\\text{ N}}{${m}\\text{ kg}} = ${fmt(acc, 4)}\\text{ m/s}^2` },
      ],
    };
  }

  if (solveFor === 'm') {
    if (F === undefined || a === undefined || a === 0) {
      return { success: false, steps: [], errorMessage: 'বল F এবং অশূন্য ত্বরণ a দিন।' };
    }
    const mass = Math.abs(F / a);
    return {
      success: true,
      value: mass,
      unit: 'kg',
      steps: [
        { labelBn: 'ভর নির্ণয়ের রূপান্তর', labelEn: 'Mass Formula', latex: 'm = \\frac{F}{a}' },
        { labelBn: 'ভর গণনা', labelEn: 'Mass Evaluation', latex: `m = \\frac{${F}}{${a}} = ${fmt(mass, 4)}\\text{ kg}` },
      ],
    };
  }

  return { success: false, steps: [], errorMessage: 'অবৈধ অনুরোধ।' };
}

export function calcMomentumConservation(
  m1: number,
  u1: number,
  m2: number,
  u2: number,
  v1?: number,
  v2?: number
): PhysicsResult {
  if (m1 <= 0 || m2 <= 0) {
    return { success: false, steps: [], errorMessage: 'বস্তুদ্বয়ের ভর m1 ও m2 অবশ্যই ধনাত্মক হতে হবে।' };
  }

  // Coalescent / Inelastic collision (stick together) if neither v1 nor v2 is given
  if (v1 === undefined && v2 === undefined) {
    const vCombined = (m1 * u1 + m2 * u2) / (m1 + m2);
    return {
      success: true,
      value: vCombined,
      unit: 'm/s',
      extraData: { vCombined },
      steps: [
        {
          labelBn: 'সংঘর্ষের আদি উপাত্ত',
          labelEn: 'Initial Momentum State',
          latex: `m_1 = ${m1}\\text{ kg}, \\; u_1 = ${u1}\\text{ m/s}, \\quad m_2 = ${m2}\\text{ kg}, \\; u_2 = ${u2}\\text{ m/s}`,
        },
        {
          labelBn: 'মিলিত বেগের সূত্র (অস্থিতিস্থাপক সংঘর্ষ)',
          labelEn: 'Coalescent Velocity Formula',
          latex: 'm_1 u_1 + m_2 u_2 = (m_1 + m_2) v',
        },
        {
          labelBn: 'মিলিত বেগ সমাধান',
          labelEn: 'Combined Velocity Calculation',
          latex: `v = \\frac{m_1 u_1 + m_2 u_2}{m_1 + m_2} = \\frac{(${m1})(${u1}) + (${m2})(${u2})}{${m1} + ${m2}} = \\frac{${fmt(m1 * u1 + m2 * u2, 4)}}{${m1 + m2}} = ${fmt(vCombined, 4)}\\text{ m/s}`,
          notesBn: vCombined >= 0 ? 'সংঘর্ষের পর বস্তুদ্বয় ১ম বস্তুর গতির অভিমুখে চলবে।' : 'সংঘর্ষের পর বস্তুদ্বয় বিপরীত অভিমুখে চলবে।',
          notesEn: vCombined >= 0 ? 'Bodies move in the direction of body 1.' : 'Bodies move in the opposite direction.',
        },
      ],
    };
  }

  // If v1 is given, solve for v2
  if (v1 !== undefined && v2 === undefined) {
    const calculatedV2 = (m1 * u1 + m2 * u2 - m1 * v1) / m2;
    return {
      success: true,
      value: calculatedV2,
      unit: 'm/s',
      extraData: { v2: calculatedV2 },
      steps: [
        {
          labelBn: 'ভরবেগের সংরক্ষণ সূত্র',
          labelEn: 'Conservation of Linear Momentum',
          latex: 'm_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2 \\implies v_2 = \\frac{m_1 u_1 + m_2 u_2 - m_1 v_1}{m_2}',
        },
        {
          labelBn: '২য় বস্তুর শেষ বেগ হিসাব',
          labelEn: 'Calculation for v2',
          latex: `v_2 = \\frac{(${m1} \\times ${u1}) + (${m2} \\times ${u2}) - (${m1} \\times ${v1})}{${m2}} = ${fmt(calculatedV2, 4)}\\text{ m/s}`,
        },
      ],
    };
  }

  // If v2 is given, solve for v1
  if (v2 !== undefined && v1 === undefined) {
    const calculatedV1 = (m1 * u1 + m2 * u2 - m2 * v2) / m1;
    return {
      success: true,
      value: calculatedV1,
      unit: 'm/s',
      extraData: { v1: calculatedV1 },
      steps: [
        {
          labelBn: 'ভরবেগের সংরক্ষণ সূত্র',
          labelEn: 'Conservation of Linear Momentum',
          latex: 'm_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2 \\implies v_1 = \\frac{m_1 u_1 + m_2 u_2 - m_2 v_2}{m_1}',
        },
        {
          labelBn: '১ম বস্তুর শেষ বেগ হিসাব',
          labelEn: 'Calculation for v1',
          latex: `v_1 = \\frac{(${m1} \\times ${u1}) + (${m2} \\times ${u2}) - (${m2} \\times ${v2})}{${m1}} = ${fmt(calculatedV1, 4)}\\text{ m/s}`,
        },
      ],
    };
  }

  return { success: false, steps: [], errorMessage: 'অবৈধ ইনপুট সমন্বয়।' };
}

export function calcGravitationalForce(
  m1: number,
  m2: number,
  d: number,
  G: number = PHYSICAL_CONSTANTS.G_GRAVITATION
): PhysicsResult {
  if (m1 <= 0 || m2 <= 0 || d <= 0) {
    return { success: false, steps: [], errorMessage: 'ভর m1, m2 এবং দূরত্ব d অবশ্যই ধনাত্মক হতে হবে।' };
  }
  const force = (G * m1 * m2) / (d * d);
  return {
    success: true,
    value: force,
    unit: 'N',
    extraData: { force, G },
    steps: [
      {
        labelBn: 'মহাকর্ষীয় উপাত্ত',
        labelEn: 'Gravitational Parameters',
        latex: `m_1 = ${m1}\\text{ kg}, \\; m_2 = ${m2}\\text{ kg}, \\; d = ${d}\\text{ m}, \\; G = ${G.toExponential(3)}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2`,
      },
      {
        labelBn: 'নিউটনের মহাকর্ষ সূত্র',
        labelEn: "Newton's Law of Universal Gravitation",
        latex: 'F = G \\frac{m_1 m_2}{d^2}',
      },
      {
        labelBn: 'মহাকর্ষ বল হিসাব',
        labelEn: 'Calculated Force',
        latex: `F = (${G.toExponential(3)}) \\times \\frac{${m1} \\times ${m2}}{(${d})^2} = ${force.toExponential(4)}\\text{ N}`,
      },
    ],
  };
}

// ==========================================
// CHAPTER 4: WORK, POWER & ENERGY (কাজ, ক্ষমতা ও শক্তি)
// ==========================================

export function calcWork(F: number, s: number, thetaDeg: number = 0): PhysicsResult {
  const thetaRad = (thetaDeg * Math.PI) / 180;
  const work = F * s * Math.cos(thetaRad);
  return {
    success: true,
    value: work,
    unit: 'J',
    extraData: { work, thetaDeg },
    steps: [
      {
        labelBn: 'প্রদত্ত বল ও সরণ',
        labelEn: 'Input Parameters',
        latex: `F = ${F}\\text{ N}, \\quad s = ${s}\\text{ m}, \\quad \\theta = ${thetaDeg}^\\circ`,
      },
      {
        labelBn: 'কাজের সাধারণ সমীকরণ',
        labelEn: 'General Work Equation',
        latex: 'W = F s \\cos(\\theta)',
      },
      {
        labelBn: 'কাজ নির্ণয়',
        labelEn: 'Evaluation',
        latex: `W = ${F} \\times ${s} \\times \\cos(${thetaDeg}^\\circ) = ${F * s} \\times ${fmt(Math.cos(thetaRad), 4)} = ${fmt(work, 4)}\\text{ Joules (J)}`,
        notesBn: thetaDeg === 90 ? 'বল ও সরণ পরস্পর লম্ব হওয়ায় কৃতকাজ শূন্য (কাজহীন বল)।' : undefined,
        notesEn: thetaDeg === 90 ? 'Force and displacement are perpendicular; no work done.' : undefined,
      },
    ],
  };
}

export function calcKineticEnergy(
  solveFor: 'Ek' | 'm' | 'v',
  params: { Ek?: number; m?: number; v?: number }
): PhysicsResult {
  const { Ek, m, v } = params;

  if (solveFor === 'Ek') {
    if (m === undefined || v === undefined || m <= 0) {
      return { success: false, steps: [], errorMessage: 'ভর m > 0 এবং বেগ v প্রদান করুন।' };
    }
    const energy = 0.5 * m * v * v;
    return {
      success: true,
      value: energy,
      unit: 'J',
      steps: [
        { labelBn: 'গতিশক্তি সূত্র', labelEn: 'Kinetic Energy Formula', latex: 'E_k = \\frac{1}{2} m v^2' },
        { labelBn: 'হিসাব', labelEn: 'Evaluation', latex: `E_k = \\frac{1}{2} \\times ${m} \\times (${v})^2 = ${fmt(energy, 4)}\\text{ J}` },
      ],
    };
  }

  if (solveFor === 'v') {
    if (Ek === undefined || m === undefined || Ek < 0 || m <= 0) {
      return { success: false, steps: [], errorMessage: 'গতিশক্তি Ek ≥ 0 এবং ভর m > 0 হতে হবে।' };
    }
    const velocity = Math.sqrt((2 * Ek) / m);
    return {
      success: true,
      value: velocity,
      unit: 'm/s',
      steps: [
        { labelBn: 'বেগের সমীকরণ', labelEn: 'Velocity Formula', latex: 'v = \\sqrt{\\frac{2E_k}{m}}' },
        { labelBn: 'বেগ নির্ণয়', labelEn: 'Evaluation', latex: `v = \\sqrt{\\frac{2 \\times ${Ek}}{${m}}} = ${fmt(velocity, 4)}\\text{ m/s}` },
      ],
    };
  }

  return { success: false, steps: [], errorMessage: 'অবৈধ প্যারামিটার।' };
}

export function calcPotentialEnergy(m: number, h: number, g: number = PHYSICAL_CONSTANTS.G_STANDARD): PhysicsResult {
  if (m <= 0 || h < 0) {
    return { success: false, steps: [], errorMessage: 'ভর m > 0 এবং উচ্চতা h ≥ 0 হতে হবে।' };
  }
  const ep = m * g * h;
  return {
    success: true,
    value: ep,
    unit: 'J',
    steps: [
      { labelBn: 'বিভব শক্তি সমীকরণ', labelEn: 'Gravitational Potential Energy', latex: 'E_p = m g h' },
      { labelBn: 'মান প্রতিস্থাপন', labelEn: 'Calculation', latex: `E_p = ${m} \\times ${g} \\times ${h} = ${fmt(ep, 4)}\\text{ J}` },
    ],
  };
}

export function calcPowerAndEfficiency(
  usefulWorkOrPower: number,
  totalWorkOrPower: number,
  timeSeconds?: number
): PhysicsResult {
  if (usefulWorkOrPower < 0 || totalWorkOrPower <= 0) {
    return { success: false, steps: [], errorMessage: 'ব্যবহৃত ও প্রদত্ত ক্ষমতা/কাজ ধনাত্মক হতে হবে এবং প্রদত্ত মান > 0।' };
  }
  const eta = (usefulWorkOrPower / totalWorkOrPower) * 100;
  const powerWatts = timeSeconds && timeSeconds > 0 ? usefulWorkOrPower / timeSeconds : undefined;
  const hp = powerWatts ? powerWatts / PHYSICAL_CONSTANTS.HP_TO_WATTS : undefined;

  return {
    success: true,
    value: eta,
    unit: '%',
    extraData: { eta, powerWatts, hp },
    steps: [
      {
        labelBn: 'কর্মদক্ষতা (Efficiency) সূত্র',
        labelEn: 'Efficiency Formula',
        latex: '\\eta = \\left(\\frac{P_{\\text{useful}}}{P_{\\text{total}}}\\right) \\times 100\\%',
      },
      {
        labelBn: 'কর্মদক্ষতা হিসাব',
        labelEn: 'Calculated Efficiency',
        latex: `\\eta = \\left(\\frac{${usefulWorkOrPower}}{${totalWorkOrPower}}\\right) \\times 100\\% = ${fmt(eta, 2)}\\%`,
        notesBn: eta > 100 ? 'সতর্কতা: কোনো বাস্তব যন্ত্রের কর্মদক্ষতা ১০০% এর বেশি হতে পারে না!' : undefined,
        notesEn: eta > 100 ? 'Warning: Efficiency cannot exceed 100% in real physics systems!' : undefined,
      },
      ...(powerWatts !== undefined
        ? [
            {
              labelBn: 'ক্ষমতা (Watts ও অশ্বক্ষমতা HP)',
              labelEn: 'Power in Watts & Horsepower',
              latex: `P = \\frac{W}{t} = \\frac{${usefulWorkOrPower}}{${timeSeconds}} = ${fmt(powerWatts, 2)}\\text{ W} = ${fmt(hp!, 3)}\\text{ HP}`,
            },
          ]
        : []),
    ],
  };
}

// ==========================================
// CHAPTER 5: STATE OF MATTER & PRESSURE (পদার্থের অবস্থা ও চাপ)
// ==========================================

export function calcPressure(F: number, A: number): PhysicsResult {
  if (A <= 0) {
    return { success: false, steps: [], errorMessage: 'ক্ষেত্রফল A অবশ্যই শূন্যের চেয়ে বড় হতে হবে।' };
  }
  const p = F / A;
  return {
    success: true,
    value: p,
    unit: 'Pa',
    steps: [
      { labelBn: 'চাপের সংজ্ঞা সূত্র', labelEn: 'Pressure Definition', latex: 'P = \\frac{F}{A}' },
      { labelBn: 'চাপের মান হিসাব', labelEn: 'Calculation', latex: `P = \\frac{${F}\\text{ N}}{${A}\\text{ m}^2} = ${fmt(p, 4)}\\text{ Pa (বা N/m}^2\\text{)}` },
    ],
  };
}

export function calcLiquidPressure(h: number, rho: number = PHYSICAL_CONSTANTS.DENSITY_WATER, g: number = PHYSICAL_CONSTANTS.G_STANDARD): PhysicsResult {
  if (h < 0 || rho <= 0) {
    return { success: false, steps: [], errorMessage: 'গভীরতা h ≥ 0 এবং তরলের ঘনত্ব ρ > 0 হতে হবে।' };
  }
  const p = h * rho * g;
  return {
    success: true,
    value: p,
    unit: 'Pa',
    steps: [
      { labelBn: 'তরলের অভ্যন্তরে চাপ সূত্র', labelEn: 'Hydrostatic Pressure Formula', latex: 'P = h \\rho g' },
      { labelBn: 'মান প্রতিস্থাপন', labelEn: 'Evaluation', latex: `P = ${h} \\times ${rho} \\times ${g} = ${fmt(p, 4)}\\text{ Pa}` },
    ],
  };
}

export function calcHydraulicPress(
  F1: number,
  d1OrA1: number,
  d2OrA2: number,
  isDiameter: boolean = true
): PhysicsResult {
  if (F1 <= 0 || d1OrA1 <= 0 || d2OrA2 <= 0) {
    return { success: false, steps: [], errorMessage: 'বল এবং ব্যাস/ক্ষেত্রফলের মান ধনাত্মক হতে হবে।' };
  }
  let F2 = 0;
  let latexStep = '';

  if (isDiameter) {
    F2 = F1 * Math.pow(d2OrA2 / d1OrA1, 2);
    latexStep = `\\frac{F_1}{r_1^2} = \\frac{F_2}{r_2^2} \\implies F_2 = F_1 \\times \\left(\\frac{d_2}{d_1}\\right)^2 = ${F1} \\times \\left(\\frac{${d2OrA2}}{${d1OrA1}}\\right)^2 = ${fmt(F2, 4)}\\text{ N}`;
  } else {
    F2 = F1 * (d2OrA2 / d1OrA1);
    latexStep = `\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\times \\frac{A_2}{A_1} = ${F1} \\times \\frac{${d2OrA2}}{${d1OrA1}} = ${fmt(F2, 4)}\\text{ N}`;
  }

  return {
    success: true,
    value: F2,
    unit: 'N',
    extraData: { F2 },
    steps: [
      { labelBn: 'প্যাসকেলের নীতি (হাইড্রলিক প্রেস)', labelEn: "Pascal's Law in Hydraulic Press", latex: '\\frac{F_1}{A_1} = \\frac{F_2}{A_2}' },
      { labelBn: 'বড় পিস্টনে প্রযুক্ত উর্ধ্বমুখী বল F2', labelEn: 'Force on Output Piston', latex: latexStep },
    ],
  };
}

export function calcYoungsModulus(F: number, L: number, A: number, deltaL: number): PhysicsResult {
  if (L <= 0 || A <= 0 || deltaL <= 0) {
    return { success: false, steps: [], errorMessage: 'আদি দৈর্ঘ্য (L), ক্ষেত্রফল (A) এবং দৈর্ঘ্য বৃদ্ধি (ΔL) অবশ্যই ধনাত্মক হতে হবে।' };
  }
  const Y = (F * L) / (A * deltaL);
  return {
    success: true,
    value: Y,
    unit: 'Pa',
    steps: [
      { labelBn: 'ইয়ং-এর গুণাঙ্ক (Young’s Modulus) সূত্র', labelEn: "Young's Modulus Formula", latex: 'Y = \\frac{\\text{পীড়ন}}{\\text{বিকৃতি}} = \\frac{F/A}{\\Delta L / L} = \\frac{F \\times L}{A \\times \\Delta L}' },
      { labelBn: 'মান প্রতিস্থাপন ও নির্ণয়', labelEn: 'Evaluation', latex: `Y = \\frac{${F} \\times ${L}}{${A} \\times ${deltaL}} = ${fmt(Y, 4)}\\text{ Pa (বা N/m}^2\\text{)}` },
    ],
  };
}

// ==========================================
// CHAPTER 6: EFFECT OF HEAT ON MATTER (বস্তুর উপর তাপের প্রভাব)
// ==========================================

export function convertTemperature(val: number, from: 'C' | 'F' | 'K', useSimpleK: boolean = true): PhysicsResult {
  const kOffset = useSimpleK ? 273 : 273.15;
  let C = 0, F = 0, K = 0;

  if (from === 'C') {
    C = val;
    F = (9 / 5) * C + 32;
    K = C + kOffset;
  } else if (from === 'F') {
    F = val;
    C = (5 / 9) * (F - 32);
    K = C + kOffset;
  } else {
    K = val;
    if (K < 0) {
      return { success: false, steps: [], errorMessage: 'পরম তাপমাত্রা কেলভিন স্কেলে ০ K এর নিচে হতে পারে না।' };
    }
    C = K - kOffset;
    F = (9 / 5) * C + 32;
  }

  return {
    success: true,
    value: C,
    unit: '°C',
    extraData: { C, F, K },
    steps: [
      {
        labelBn: 'স্কেল রূপান্তরের মৌলিক সম্পর্ক',
        labelEn: 'Temperature Conversion Equation',
        latex: useSimpleK ? '\\frac{C}{5} = \\frac{F - 32}{9} = \\frac{K - 273}{5}' : '\\frac{C}{5} = \\frac{F - 32}{9} = \\frac{K - 273.15}{5}',
      },
      {
        labelBn: 'রূপান্তরিত মানসমূহ',
        labelEn: 'Converted Scales',
        latex: `\\text{সেলসিয়াস: } ${fmt(C, 2)}^\\circ\\text{C}, \\quad \\text{ফারেনহাইট: } ${fmt(F, 2)}^\\circ\\text{F}, \\quad \\text{কেলভিন: } ${fmt(K, 2)}\\text{ K}`,
      },
    ],
  };
}

export function calcThermalExpansion(
  type: 'linear' | 'area' | 'volume',
  initialVal: number,
  alpha: number,
  deltaTheta: number
): PhysicsResult {
  if (initialVal <= 0) {
    return { success: false, steps: [], errorMessage: 'আদি মাত্রা ধনাত্মক হতে হবে।' };
  }
  let coeff = alpha;
  let coeffNameBn = 'দৈর্ঘ্য প্রসারণ সহগ (α)';
  let formulaLatex = '\\Delta L = \\alpha L_1 \\Delta\\theta';

  if (type === 'area') {
    coeff = 2 * alpha;
    coeffNameBn = 'ক্ষেত্র প্রসারণ সহগ (β ≈ 2α)';
    formulaLatex = '\\Delta A = \\beta A_1 \\Delta\\theta = 2\\alpha A_1 \\Delta\\theta';
  } else if (type === 'volume') {
    coeff = 3 * alpha;
    coeffNameBn = 'আয়তন প্রসারণ সহগ (γ ≈ 3α)';
    formulaLatex = '\\Delta V = \\gamma V_1 \\Delta\\theta = 3\\alpha V_1 \\Delta\\theta';
  }

  const deltaVal = coeff * initialVal * deltaTheta;
  const finalVal = initialVal + deltaVal;

  return {
    success: true,
    value: finalVal,
    unit: type === 'linear' ? 'm' : type === 'area' ? 'm²' : 'm³',
    extraData: { deltaVal, finalVal, coeff },
    steps: [
      { labelBn: `প্রসারণ সহগ (${coeffNameBn})`, labelEn: 'Expansion Coefficient', latex: `\\text{সহগ } = ${coeff.toExponential(3)}\\text{ K}^{-1}, \\quad \\Delta\\theta = ${deltaTheta}^\\circ\\text{C}` },
      { labelBn: 'প্রসারণের সূত্র', labelEn: 'Expansion Formula', latex: formulaLatex },
      { labelBn: 'বৃদ্ধি ও চূড়ান্ত মান', labelEn: 'Change & Final Dimension', latex: `\\Delta = ${fmt(deltaVal, 6)}, \\quad \\text{চূড়ান্ত মান} = ${initialVal} + ${fmt(deltaVal, 6)} = ${fmt(finalVal, 6)}` },
    ],
  };
}

export function calcSensibleHeat(m: number, s: number, deltaTheta: number): PhysicsResult {
  if (m <= 0 || s <= 0) {
    return { success: false, steps: [], errorMessage: 'ভর m এবং আপেক্ষিক তাপ s উভয়ই ধনাত্মক হতে হবে।' };
  }
  const Q = m * s * deltaTheta;
  return {
    success: true,
    value: Q,
    unit: 'J',
    steps: [
      { labelBn: 'তাপশক্তির সূত্র (তাপমাত্রা পরিবর্তন)', labelEn: 'Sensible Heat Formula', latex: 'Q = m \\times s \\times \\Delta\\theta' },
      { labelBn: 'শোষিত বা বর্জিত তাপ', labelEn: 'Heat Calculation', latex: `Q = ${m} \\times ${s} \\times ${deltaTheta} = ${fmt(Q, 4)}\\text{ Joules (J)}` },
    ],
  };
}

export function calcLatentHeat(m: number, phase: 'fusion' | 'vaporization', customL?: number): PhysicsResult {
  if (m <= 0) {
    return { success: false, steps: [], errorMessage: 'ভর m অবশ্যই ধনাত্মক হতে হবে।' };
  }
  const L = customL ?? (phase === 'fusion' ? PHYSICAL_CONSTANTS.LATENT_HEAT_FUSION_ICE : PHYSICAL_CONSTANTS.LATENT_HEAT_VAPOR_WATER);
  const Q = m * L;
  const nameBn = phase === 'fusion' ? 'গলনের সুপ্ততাপ (Lf)' : 'বাষ্পীভবনের সুপ্ততাপ (Lv)';

  return {
    success: true,
    value: Q,
    unit: 'J',
    steps: [
      { labelBn: `${nameBn} সূত্র`, labelEn: 'Latent Heat Formula', latex: 'Q = m \\times L' },
      { labelBn: 'প্রয়োজনীয় সুপ্ততাপ হিসাব', labelEn: 'Latent Heat Evaluation', latex: `Q = ${m} \\times ${L} = ${fmt(Q, 4)}\\text{ J}` },
    ],
  };
}

// ==========================================
// CHAPTER 7: WAVES & SOUND (তরঙ্গ ও শব্দ)
// ==========================================

export function calcWaveSpeed(f: number, lambda: number): PhysicsResult {
  if (f <= 0 || lambda <= 0) {
    return { success: false, steps: [], errorMessage: 'কম্পাঙ্ক f এবং তরঙ্গদৈর্ঘ্য λ উভয়ই ধনাত্মক হতে হবে।' };
  }
  const v = f * lambda;
  const T = 1 / f;
  return {
    success: true,
    value: v,
    unit: 'm/s',
    extraData: { v, T },
    steps: [
      { labelBn: 'প্রদত্ত কম্পাঙ্ক ও তরঙ্গদৈর্ঘ্য', labelEn: 'Given Frequency & Wavelength', latex: `f = ${f}\\text{ Hz}, \\quad \\lambda = ${lambda}\\text{ m}` },
      { labelBn: 'তরঙ্গবেগ সমীকরণ', labelEn: 'Wave Speed Formula', latex: 'v = f \\times \\lambda' },
      { labelBn: 'তরঙ্গবেগ নির্ণয়', labelEn: 'Wave Speed Calculation', latex: `v = ${f} \\times ${lambda} = ${fmt(v, 4)}\\text{ m/s}, \\quad T = \\frac{1}{f} = ${fmt(T, 4)}\\text{ s}` },
    ],
  };
}

export function calcSpeedOfSoundTemp(thetaCelsius: number, v0: number = PHYSICAL_CONSTANTS.V_SOUND_0): PhysicsResult {
  const vTheta = v0 + PHYSICAL_CONSTANTS.SOUND_TEMP_COEFF * thetaCelsius;
  const minEchoDist = (vTheta * PHYSICAL_CONSTANTS.PERSISTENCE_OF_HEARING) / 2;

  return {
    success: true,
    value: vTheta,
    unit: 'm/s',
    extraData: { vTheta, minEchoDist },
    steps: [
      {
        labelBn: 'শব্দের বেগ ও তাপমাত্রার সম্পর্ক সূত্র',
        labelEn: 'Sound Speed with Temperature',
        latex: 'v_\\theta = v_0 + 0.6 \\times \\theta',
      },
      {
        labelBn: `${thetaCelsius}°C তাপমাত্রায় শব্দের বেগ`,
        labelEn: 'Speed at given temperature',
        latex: `v_{${thetaCelsius}} = ${v0} + 0.6 \\times (${thetaCelsius}) = ${fmt(vTheta, 2)}\\text{ m/s}`,
      },
      {
        labelBn: 'প্রতিধ্বনি শোনার ন্যূনতম দূরত্ব (t ≥ 0.1 s)',
        labelEn: 'Minimum Echo Distance for Persistence of Hearing',
        latex: `d_{\\text{min}} = \\frac{v \\times 0.1}{2} = \\frac{${fmt(vTheta, 2)} \\times 0.1}{2} = ${fmt(minEchoDist, 3)}\\text{ m}`,
        notesBn: `অতএব, ${thetaCelsius}°C তাপমাত্রায় স্পষ্ট প্রতিধ্বনি শুনতে প্রতিফলকের ন্যূনতম দূরত্ব হতে হবে ${fmt(minEchoDist, 2)} মিটার।`,
        notesEn: `Minimum barrier distance for echo at ${thetaCelsius}°C is ${fmt(minEchoDist, 2)} meters.`,
      },
    ],
  };
}

export function calcEchoDistance(v: number, tOrD: number, solveFor: 'd' | 't'): PhysicsResult {
  if (v <= 0 || tOrD <= 0) {
    return { success: false, steps: [], errorMessage: 'বেগ এবং সময়/দূরত্ব ধনাত্মক হতে হবে।' };
  }

  if (solveFor === 'd') {
    const t = tOrD;
    const d = (v * t) / 2;
    const isEchoHeard = t >= PHYSICAL_CONSTANTS.PERSISTENCE_OF_HEARING;
    return {
      success: true,
      value: d,
      unit: 'm',
      steps: [
        { labelBn: 'প্রতিধ্বনির দূরত্বের সূত্র', labelEn: 'Echo Distance Formula', latex: '2d = v \\times t \\implies d = \\frac{v \\times t}{2}' },
        { labelBn: 'প্রতিফলকের দূরত্ব', labelEn: 'Calculated Distance', latex: `d = \\frac{${v} \\times ${t}}{2} = ${fmt(d, 4)}\\text{ m}` },
        {
          labelBn: 'শ্রাব্যতার স্থায়িত্বকাল পরীক্ষা',
          labelEn: 'Persistence of Hearing Check',
          latex: `t = ${t}\\text{ s} ${isEchoHeard ? '\\ge' : '<'} 0.1\\text{ s}`,
          notesBn: isEchoHeard ? 'যেহেতু সময় ০.১ সেকেন্ডের সমান বা বেশি, তাই প্রতিধ্বনি সুস্পষ্টভাবে শোনা যাবে।' : 'সতর্কতা: সময় ০.১ সেকেন্ডের কম হওয়ায় প্রতিধ্বনি আলাদাভাবে শোনা যাবে না।',
          notesEn: isEchoHeard ? 'Clear echo is heard as time is >= 0.1 s.' : 'Echo not distinctly audible because time is < 0.1 s.',
        },
      ],
    };
  } else {
    const d = tOrD;
    const t = (2 * d) / v;
    const isEchoHeard = t >= PHYSICAL_CONSTANTS.PERSISTENCE_OF_HEARING;
    return {
      success: true,
      value: t,
      unit: 's',
      steps: [
        { labelBn: 'প্রতিধ্বনি পৌঁছানোর সময় সূত্র', labelEn: 'Echo Time Formula', latex: 't = \\frac{2d}{v}' },
        { labelBn: 'প্রয়োজনীয় সময় হিসাব', labelEn: 'Calculated Time', latex: `t = \\frac{2 \\times ${d}}{${v}} = ${fmt(t, 4)}\\text{ s}` },
        {
          labelBn: 'শ্রাব্যতার স্থায়িত্বকাল শর্ত',
          labelEn: 'Persistence of Hearing Status',
          latex: `t = ${fmt(t, 4)}\\text{ s} ${isEchoHeard ? '\\ge' : '<'} 0.1\\text{ s}`,
          notesBn: isEchoHeard ? 'প্রতিধ্বনি শোনা সম্ভব।' : 'প্রতিধ্বনি শোনা সম্ভব নয় (দূরত্ব খুব কম)।',
          notesEn: isEchoHeard ? 'Echo audible.' : 'Echo not audible.',
        },
      ],
    };
  }
}

// ==========================================
// CHAPTER 8: REFLECTION OF LIGHT (আলোর প্রতিফলন)
// ==========================================

export function calcMirrorEquation(
  type: 'concave' | 'convex',
  u: number,
  fMagnitude: number,
  ho?: number
): PhysicsResult {
  if (u <= 0 || fMagnitude <= 0) {
    return { success: false, steps: [], errorMessage: 'লক্ষ্যবস্তুর দূরত্ব u > 0 এবং ফোকাস দূরত্ব ধনাত্মক হতে হবে।' };
  }

  // Concave: f > 0, Convex: f < 0
  const f = type === 'concave' ? fMagnitude : -fMagnitude;

  if (u === f) {
    return {
      success: true,
      value: Infinity,
      unit: 'cm বা m',
      steps: [
        { labelBn: 'দর্পণের সাধারণ সমীকরণ', labelEn: 'Mirror Equation', latex: '\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}' },
        {
          labelBn: 'ফোকাসে লক্ষ্যবস্তু',
          labelEn: 'Object at Principal Focus',
          latex: `u = f = ${f}\\text{ cm} \\implies v \\to \\infty`,
          notesBn: 'লক্ষ্যবস্তু প্রধান ফোকাসে থাকায় বিম্ব অসীমে গঠিত হবে।',
          notesEn: 'Image formed at infinity.',
        },
      ],
    };
  }

  // 1/v = 1/f - 1/u => v = (u*f)/(u - f)
  const v = (u * f) / (u - f);
  const m = -v / u;
  const absM = Math.abs(m);
  const hi = ho !== undefined ? absM * ho : undefined;

  const isReal = v > 0;
  const natureBn = isReal ? 'বাস্তব ও উল্টো (Real & Inverted)' : 'অবাস্তব ও সোজা (Virtual & Erect)';
  const natureEn = isReal ? 'Real & Inverted' : 'Virtual & Erect';

  return {
    success: true,
    value: v,
    unit: 'cm বা m',
    extraData: { v, m, absM, isReal, hi },
    steps: [
      {
        labelBn: 'দর্পণ প্রকার ও সাইন কনভেনশন',
        labelEn: 'Mirror Sign Convention',
        latex: `${type === 'concave' ? '\\text{অবতল দর্পণ: } f = +' : '\\text{উত্তল দর্পণ: } f = -'}${fMagnitude}, \\quad u = +${u}`,
      },
      {
        labelBn: 'দর্পণের সমীকরণ হতে বিম্বের দূরত্ব (v)',
        labelEn: 'Image Distance Formula',
        latex: '\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} \\implies v = \\frac{u \\times f}{u - f}',
      },
      {
        labelBn: 'বিম্বের দূরত্ব নির্ণয়',
        labelEn: 'Image Distance Calculation',
        latex: `v = \\frac{(${u})(${f})}{${u} - (${f})} = \\frac{${fmt(u * f, 2)}}{${fmt(u - f, 2)}} = ${fmt(v, 4)}`,
        notesBn: `বিম্বের প্রকৃতি: ${natureBn}। বিম্বটি দর্পণ থেকে ${fmt(Math.abs(v), 2)} দূরে গঠিত হয়েছে।`,
        notesEn: `Image nature: ${natureEn}. Formed at distance ${fmt(Math.abs(v), 2)}.`,
      },
      {
        labelBn: 'রৈখিক বিবর্ধন (Linear Magnification)',
        labelEn: 'Linear Magnification',
        latex: `m = -\\frac{v}{u} = -\\frac{${fmt(v, 3)}}{${u}} = ${fmt(m, 3)}, \\quad |m| = ${fmt(absM, 3)}`,
        notesBn: absM > 1 ? 'বিম্বটি বিবর্ধিত (Magnified)' : absM < 1 ? 'বিম্বটি খর্বিত (Diminished)' : 'বিম্বটি লক্ষ্যবস্তুর সমান',
        notesEn: absM > 1 ? 'Magnified' : absM < 1 ? 'Diminished' : 'Same size',
      },
      ...(hi !== undefined
        ? [
            {
              labelBn: 'বিম্বের দৈর্ঘ্য (Image Height)',
              labelEn: 'Image Height',
              latex: `h_i = |m| \\times h_o = ${fmt(absM, 3)} \\times ${ho} = ${fmt(hi, 3)}`,
            },
          ]
        : []),
    ],
  };
}

// ==========================================
// CHAPTER 9: REFRACTION OF LIGHT (আলোর প্রতিসরণ)
// ==========================================

export function calcSnellsLaw(eta1: number, theta1Deg: number, eta2: number): PhysicsResult {
  if (eta1 <= 0 || eta2 <= 0) {
    return { success: false, steps: [], errorMessage: 'প্রতিসরাঙ্ক অবশ্যই শূন্যের চেয়ে বড় হতে হবে।' };
  }
  const theta1Rad = (theta1Deg * Math.PI) / 180;
  const sinTheta2 = (eta1 * Math.sin(theta1Rad)) / eta2;

  if (sinTheta2 > 1.0) {
    // Total internal reflection occurred
    const critAngleDeg = (Math.asin(eta2 / eta1) * 180) / Math.PI;
    return {
      success: false,
      steps: [
        {
          labelBn: 'পূর্ণ অভ্যন্তরীণ প্রতিফলন (Total Internal Reflection)',
          labelEn: 'Total Internal Reflection Occurred',
          latex: `\\sin(\\theta_2) = \\frac{\\eta_1 \\sin(\\theta_1)}{\\eta_2} = \\frac{${eta1} \\times ${fmt(Math.sin(theta1Rad), 4)}}{${eta2}} = ${fmt(sinTheta2, 4)} > 1.0`,
          notesBn: `যেহেতু sin(θ2) > 1.0 এবং আপাতন কোণ (${theta1Deg}°) সংকট কোণ (${fmt(critAngleDeg, 2)}°) অপেক্ষা বড়, তাই কোনো প্রতিসরণ ঘটবে না; আলোকরশ্মি সম্পূর্ণ প্রতিফলিত হবে।`,
          notesEn: `Incidence angle exceeds critical angle (${fmt(critAngleDeg, 2)}°); light undergoes Total Internal Reflection.`,
        },
      ],
      errorMessage: 'আপাতন কোণ সংকট কোণের চেয়ে বড় হওয়ায় পূর্ণ অভ্যন্তরীণ প্রতিফলন ঘটেছে (sinθ₂ > 1)।',
    };
  }

  const theta2Rad = Math.asin(sinTheta2);
  const theta2Deg = (theta2Rad * 180) / Math.PI;
  const relativeIndex = eta2 / eta1;

  return {
    success: true,
    value: theta2Deg,
    unit: '°',
    extraData: { theta2Deg, relativeIndex },
    steps: [
      {
        labelBn: 'স্নেলের প্রতিসরণ সূত্র',
        labelEn: "Snell's Law of Refraction",
        latex: '\\eta_1 \\sin(\\theta_1) = \\eta_2 \\sin(\\theta_2) \\implies \\sin(\\theta_2) = \\frac{\\eta_1 \\sin(\\theta_1)}{\\eta_2}',
      },
      {
        labelBn: 'প্রতিসরণ কোণ (θ2) নির্ণয়',
        labelEn: 'Refraction Angle Calculation',
        latex: `\\sin(\\theta_2) = \\frac{${eta1} \\times \\sin(${theta1Deg}^\\circ)}{${eta2}} = ${fmt(sinTheta2, 4)} \\implies \\theta_2 = ${fmt(theta2Deg, 2)}^\\circ`,
      },
      {
        labelBn: 'আপেক্ষিক প্রতিসরাঙ্ক (₁η₂)',
        labelEn: 'Relative Refractive Index',
        latex: `_1\\eta_2 = \\frac{\\eta_2}{\\eta_1} = \\frac{${eta2}}{${eta1}} = ${fmt(relativeIndex, 4)}`,
      },
    ],
  };
}

export function calcCriticalAngle(etaDense: number, etaRare: number): PhysicsResult {
  if (etaDense <= etaRare) {
    return {
      success: false,
      steps: [],
      errorMessage: 'সংকট কোণের জন্য প্রথম মাধ্যমকে অবশ্যই ঘনতর হতে হবে (η_dense > η_rare)।',
    };
  }
  const ratio = etaRare / etaDense;
  const critAngleRad = Math.asin(ratio);
  const critAngleDeg = (critAngleRad * 180) / Math.PI;

  return {
    success: true,
    value: critAngleDeg,
    unit: '°',
    extraData: { critAngleDeg },
    steps: [
      {
        labelBn: 'সংকট কোণ (Critical Angle) সূত্র',
        labelEn: 'Critical Angle Formula',
        latex: '\\sin(\\theta_c) = \\frac{\\eta_{\\text{rare}}}{\\eta_{\\text{dense}}}',
      },
      {
        labelBn: 'সংকট কোণ গণনা',
        labelEn: 'Critical Angle Evaluation',
        latex: `\\sin(\\theta_c) = \\frac{${etaRare}}{${etaDense}} = ${fmt(ratio, 4)} \\implies \\theta_c = \\arcsin(${fmt(ratio, 4)}) = ${fmt(critAngleDeg, 2)}^\\circ`,
        notesBn: `ঘন মাধ্যমের সংকট কোণ ${fmt(critAngleDeg, 2)} ডিগ্রি।`,
        notesEn: `Critical angle is ${fmt(critAngleDeg, 2)} degrees.`,
      },
    ],
  };
}

export function calcLensEquation(
  type: 'convex' | 'concave',
  u: number,
  fMagnitude: number
): PhysicsResult {
  if (u <= 0 || fMagnitude <= 0) {
    return { success: false, steps: [], errorMessage: 'লক্ষ্যবস্তুর দূরত্ব u > 0 এবং ফোকাস দূরত্ব ধনাত্মক হতে হবে।' };
  }
  const f = type === 'convex' ? fMagnitude : -fMagnitude;

  if (u === f) {
    return {
      success: true,
      value: Infinity,
      unit: 'm বা cm',
      steps: [
        { labelBn: 'লেন্সের সমীকরণ', labelEn: 'Lens Equation', latex: '\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}' },
        { labelBn: 'ফোকাসে বস্তু', labelEn: 'Object at Focus', latex: 'u = f \\implies v \\to \\infty', notesBn: 'বিম্ব অসীমে গঠিত হবে।' },
      ],
    };
  }

  // 1/v = 1/f - 1/u => v = (u*f)/(u - f)
  const v = (u * f) / (u - f);
  const m = -v / u;
  const power = 1 / (f / 100); // Assuming f in cm -> Power in Dioptre

  return {
    success: true,
    value: v,
    unit: 'cm',
    extraData: { v, m, power },
    steps: [
      {
        labelBn: 'লেন্সের সাইন কনভেনশন',
        labelEn: 'Lens Sign Convention',
        latex: `${type === 'convex' ? '\\text{উত্তল লেন্স: } f = +' : '\\text{অবতল লেন্স: } f = -'}${fMagnitude}\\text{ cm}, \\quad u = +${u}\\text{ cm}`,
      },
      {
        labelBn: 'লেন্সের সূত্র হতে বিম্বের দূরত্ব',
        labelEn: 'Lens Equation for Image Distance',
        latex: '\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} \\implies v = \\frac{u \\times f}{u - f}',
      },
      {
        labelBn: 'বিম্বের অবস্থান ও ক্ষমতা',
        labelEn: 'Image Distance & Lens Power',
        latex: `v = \\frac{(${u})(${f})}{${u} - (${f})} = ${fmt(v, 3)}\\text{ cm}, \\quad P = \\frac{1}{f\\text{ (m)}} = ${fmt(power, 2)}\\text{ D}`,
        notesBn: v > 0 ? 'বাস্তব বিম্ব (লেন্সের বিপরীত পাশে)।' : 'অবাস্তব বিম্ব (লেন্সের একই পাশে)।',
      },
    ],
  };
}

// ==========================================
// CHAPTER 10: STATIC ELECTRICITY (স্থির তড়িৎ)
// ==========================================

export function calcCoulombsLaw(
  q1: number,
  q2: number,
  r: number,
  k: number = PHYSICAL_CONSTANTS.K_COULOMB
): PhysicsResult {
  if (r <= 0) {
    return { success: false, steps: [], errorMessage: 'দূরত্ব r অবশ্যই ধনাত্মক হতে হবে।' };
  }
  const force = (k * q1 * q2) / (r * r);
  const isRepulsive = force > 0;

  return {
    success: true,
    value: Math.abs(force),
    unit: 'N',
    extraData: { force, isRepulsive },
    steps: [
      {
        labelBn: 'কুলম্বের উপাত্ত',
        labelEn: "Coulomb's Law Inputs",
        latex: `q_1 = ${q1}\\text{ C}, \\; q_2 = ${q2}\\text{ C}, \\; r = ${r}\\text{ m}, \\; k = ${k.toExponential(1)}\\text{ N}\\cdot\\text{m}^2/\\text{C}^2`,
      },
      {
        labelBn: 'কুলম্বের সূত্র',
        labelEn: "Coulomb's Formula",
        latex: 'F = k \\frac{q_1 q_2}{r^2}',
      },
      {
        labelBn: 'তড়িৎ বলের মান ও প্রকৃতি',
        labelEn: 'Electrostatic Force Calculation',
        latex: `F = (${k.toExponential(1)}) \\times \\frac{(${q1})(${q2})}{(${r})^2} = ${force.toExponential(4)}\\text{ N}`,
        notesBn: isRepulsive ? 'সমধর্মী চার্জ হওয়ায় পারস্পরিক বিকর্ষণ বল অনুভূত হবে।' : 'বিপরীতধর্মী চার্জ হওয়ায় আকর্ষণ বল অনুভূত হবে।',
        notesEn: isRepulsive ? 'Repulsive force between like charges.' : 'Attractive force between opposite charges.',
      },
    ],
  };
}

export function calcElectricFieldAndPotential(
  Q: number,
  r: number,
  k: number = PHYSICAL_CONSTANTS.K_COULOMB
): PhysicsResult {
  if (r <= 0) {
    return { success: false, steps: [], errorMessage: 'দূরত্ব r > 0 হতে হবে।' };
  }
  const E = (k * Math.abs(Q)) / (r * r);
  const V = (k * Q) / r;

  return {
    success: true,
    value: E,
    unit: 'N/C',
    extraData: { E, V },
    steps: [
      {
        labelBn: 'চার্জ ও দূরত্ব',
        labelEn: 'Charge & Distance',
        latex: `Q = ${Q}\\text{ C}, \\quad r = ${r}\\text{ m}`,
      },
      {
        labelBn: 'তড়িৎ প্রাবল্য (Electric Field Intensity)',
        labelEn: 'Electric Field Intensity',
        latex: `E = k \\frac{Q}{r^2} = (${k.toExponential(1)}) \\times \\frac{|${Q}|}{(${r})^2} = ${fmt(E, 4)}\\text{ N/C}`,
      },
      {
        labelBn: 'তড়িৎ বিভব (Electric Potential)',
        labelEn: 'Electric Potential',
        latex: `V = k \\frac{Q}{r} = (${k.toExponential(1)}) \\times \\frac{${Q}}{${r}} = ${fmt(V, 4)}\\text{ Volts (V)}`,
      },
    ],
  };
}

export function calcCapacitance(Q: number, V: number): PhysicsResult {
  if (V === 0) {
    return { success: false, steps: [], errorMessage: 'বিভব পার্থক্য V = 0 হতে পারে না।' };
  }
  const C = Math.abs(Q / V);
  return {
    success: true,
    value: C,
    unit: 'F',
    steps: [
      { labelBn: 'ধারকত্ব (Capacitance) সূত্র', labelEn: 'Capacitance Formula', latex: 'C = \\frac{Q}{V}' },
      { labelBn: 'ধারকত্ব হিসাব', labelEn: 'Evaluation', latex: `C = \\frac{${Q}\\text{ C}}{${V}\\text{ V}} = ${C.toExponential(4)}\\text{ Farad (F)}` },
    ],
  };
}

// ==========================================
// CHAPTER 11: CURRENT ELECTRICITY (চল তড়িৎ)
// ==========================================

export function calcOhmsLaw(
  solveFor: 'V' | 'I' | 'R',
  params: { V?: number; I?: number; R?: number }
): PhysicsResult {
  const { V, I, R } = params;

  if (solveFor === 'V') {
    if (I === undefined || R === undefined || R < 0) {
      return { success: false, steps: [], errorMessage: 'প্রবাহ I এবং রোধ R ≥ 0 দিন।' };
    }
    const res = I * R;
    return {
      success: true,
      value: res,
      unit: 'V',
      steps: [
        { labelBn: 'ওহমের সূত্র', labelEn: "Ohm's Law", latex: 'V = I \\times R' },
        { labelBn: 'বিভব পার্থক্য', labelEn: 'Potential Difference', latex: `V = ${I}\\text{ A} \\times ${R}\\;\\Omega = ${fmt(res, 4)}\\text{ Volts (V)}` },
      ],
    };
  }

  if (solveFor === 'I') {
    if (V === undefined || R === undefined || R <= 0) {
      return { success: false, steps: [], errorMessage: 'বিভব পার্থক্য V এবং রোধ R > 0 দিন।' };
    }
    const res = V / R;
    return {
      success: true,
      value: res,
      unit: 'A',
      steps: [
        { labelBn: 'তড়িৎ প্রবাহের সমীকরণ', labelEn: 'Current Formula', latex: 'I = \\frac{V}{R}' },
        { labelBn: 'প্রবাহ নির্ণয়', labelEn: 'Current Calculation', latex: `I = \\frac{${V}\\text{ V}}{${R}\\;\\Omega} = ${fmt(res, 4)}\\text{ A}` },
      ],
    };
  }

  if (solveFor === 'R') {
    if (V === undefined || I === undefined || I === 0) {
      return { success: false, steps: [], errorMessage: 'বিভব পার্থক্য V এবং অশূন্য প্রবাহ I দিন।' };
    }
    const res = V / I;
    return {
      success: true,
      value: res,
      unit: 'Ω',
      steps: [
        { labelBn: 'রোধের সমীকরণ', labelEn: 'Resistance Formula', latex: 'R = \\frac{V}{I}' },
        { labelBn: 'রোধ নির্ণয়', labelEn: 'Resistance Calculation', latex: `R = \\frac{${V}\\text{ V}}{${I}\\text{ A}} = ${fmt(res, 4)}\\;\\Omega` },
      ],
    };
  }

  return { success: false, steps: [], errorMessage: 'অবৈধ অনুরোধ।' };
}

export function calcResistivityAndResistance(
  rho: number,
  L: number,
  radiusOrArea: number,
  isRadius: boolean = false
): PhysicsResult {
  if (rho <= 0 || L <= 0 || radiusOrArea <= 0) {
    return { success: false, steps: [], errorMessage: 'আপেক্ষিক রোধ, দৈর্ঘ্য ও ব্যাসার্ধ/ক্ষেত্রফল ধনাত্মক হতে হবে।' };
  }
  const A = isRadius ? Math.PI * Math.pow(radiusOrArea, 2) : radiusOrArea;
  const R = (rho * L) / A;

  return {
    success: true,
    value: R,
    unit: 'Ω',
    extraData: { A, R },
    steps: [
      {
        labelBn: 'রোধ ও আপেক্ষিক রোধের সম্পর্ক',
        labelEn: 'Resistance-Resistivity Formula',
        latex: isRadius ? 'A = \\pi r^2, \\quad R = \\rho \\frac{L}{A}' : 'R = \\rho \\frac{L}{A}',
      },
      {
        labelBn: 'প্রস্থচ্ছেদের ক্ষেত্রফল ও রোধ হিসাব',
        labelEn: 'Evaluation',
        latex: `A = ${A.toExponential(3)}\\text{ m}^2, \\quad R = (${rho.toExponential(2)}) \\times \\frac{${L}}{${A.toExponential(3)}} = ${fmt(R, 4)}\\;\\Omega`,
      },
    ],
  };
}

export function calcEquivalentResistance(type: 'series' | 'parallel', resistors: number[]): PhysicsResult {
  const validR = resistors.filter((r) => r > 0);
  if (validR.length < 2) {
    return { success: false, steps: [], errorMessage: 'তুল্য রোধের জন্য অন্তত ২টি ধনাত্মক রোধ ইনপুট দিন।' };
  }

  if (type === 'series') {
    const Rs = validR.reduce((acc, val) => acc + val, 0);
    return {
      success: true,
      value: Rs,
      unit: 'Ω',
      steps: [
        { labelBn: 'শ্রেণি সমবায়ের তুল্য রোধ সূত্র', labelEn: 'Series Equivalent Formula', latex: 'R_s = R_1 + R_2 + \\dots + R_n' },
        { labelBn: 'তুল্য রোধ হিসাব', labelEn: 'Series Calculation', latex: `R_s = ${validR.join(' + ')} = ${fmt(Rs, 4)}\\;\\Omega` },
      ],
    };
  } else {
    const sumInverse = validR.reduce((acc, val) => acc + 1 / val, 0);
    const Rp = 1 / sumInverse;
    return {
      success: true,
      value: Rp,
      unit: 'Ω',
      steps: [
        { labelBn: 'সমান্তরাল সমবায়ের তুল্য রোধ সূত্র', labelEn: 'Parallel Equivalent Formula', latex: '\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots + \\frac{1}{R_n}' },
        { labelBn: 'তুল্য রোধ হিসাব', labelEn: 'Parallel Calculation', latex: `\\frac{1}{R_p} = ${validR.map((r) => `\\frac{1}{${r}}`).join(' + ')} = ${fmt(sumInverse, 4)} \\implies R_p = ${fmt(Rp, 4)}\\;\\Omega` },
      ],
    };
  }
}

export function calcElectricityBill(powerWatts: number, hoursDaily: number, days: number = 30, unitCost: number = 7.5): PhysicsResult {
  if (powerWatts <= 0 || hoursDaily <= 0 || days <= 0 || unitCost < 0) {
    return { success: false, steps: [], errorMessage: 'ওয়াট, সময় এবং বিল রেট অবশ্যই অঋণাত্মক হতে হবে।' };
  }
  const totalHours = hoursDaily * days;
  const energyKWh = (powerWatts * totalHours) / 1000;
  const totalCost = energyKWh * unitCost;

  return {
    success: true,
    value: totalCost,
    unit: 'টাকা / BDT',
    extraData: { energyKWh, totalCost },
    steps: [
      {
        labelBn: 'ব্যয়িত বিদ্যুৎ শক্তি (বোর্ড অফ ট্রেড ইউনিট - kWh)',
        labelEn: 'Electrical Energy Consumption Formula',
        latex: '\\text{ব্যয়িত শক্তি (kWh)} = \\frac{P\\text{ (Watts)} \\times t\\text{ (Hours)}}{1000}',
      },
      {
        labelBn: 'মোট ইউনিটের পরিমাণ',
        labelEn: 'Total Energy (kWh)',
        latex: `\\text{ইউনিট} = \\frac{${powerWatts} \\times (${hoursDaily} \\times ${days})}{1000} = \\frac{${powerWatts * totalHours}}{1000} = ${fmt(energyKWh, 2)}\\text{ kWh}`,
      },
      {
        labelBn: 'মোট বিদ্যুৎ বিল',
        labelEn: 'Total Cost Estimation',
        latex: `\\text{বিল} = ${fmt(energyKWh, 2)} \\times ${unitCost}\\text{ ৳} = ${fmt(totalCost, 2)}\\text{ টাকা}`,
      },
    ],
  };
}

// ==========================================
// CHAPTER 12: MAGNETIC EFFECTS OF CURRENT (বিদ্যুতের চৌম্বক ক্রিয়া)
// ==========================================

export function calcTransformer(
  Vp: number,
  Np: number,
  Ns: number,
  Ip?: number,
  efficiency: number = 100
): PhysicsResult {
  if (Vp <= 0 || Np <= 0 || Ns <= 0) {
    return { success: false, steps: [], errorMessage: 'প্রাথমিক ভোল্টেজ এবং পাকসংখ্যা ধনাত্মক পূর্ণসংখ্যা হতে হবে।' };
  }
  const Vs = Vp * (Ns / Np);
  const isStepUp = Vs > Vp;
  const typeBn = isStepUp ? 'স্টেপ-আপ (আরোহী) ট্রান্সফরমার' : 'স্টেপ-ডাউন (অবরোহী) ট্রান্সফরমার';
  const typeEn = isStepUp ? 'Step-up Transformer' : 'Step-down Transformer';

  let Is: number | undefined = undefined;
  if (Ip !== undefined && Ip > 0) {
    // Ideal transformer: Vp * Ip * (eta/100) = Vs * Is => Is = (Vp * Ip * eta)/(Vs * 100)
    Is = (Vp * Ip * (efficiency / 100)) / Vs;
  }

  return {
    success: true,
    value: Vs,
    unit: 'V',
    extraData: { Vs, isStepUp, Is },
    steps: [
      {
        labelBn: 'ট্রান্সফরমারের মূল রূপান্তর সূত্র',
        labelEn: 'Transformer Ratio Formula',
        latex: '\\frac{V_p}{V_s} = \\frac{N_p}{N_s} = \\frac{I_s}{I_p}',
      },
      {
        labelBn: 'গৌণ কুন্ডলীর ভোল্টেজ (Vs)',
        labelEn: 'Secondary Voltage Calculation',
        latex: `V_s = V_p \\times \\frac{N_s}{N_p} = ${Vp} \\times \\frac{${Ns}}{${Np}} = ${fmt(Vs, 3)}\\text{ Volts (V)}`,
        notesBn: `ট্রান্সফরমারের ধরন: ${typeBn} (যেহেতু ${isStepUp ? 'Vs > Vp' : 'Vs < Vp'})।`,
        notesEn: `Transformer type: ${typeEn}.`,
      },
      ...(Is !== undefined
        ? [
            {
              labelBn: `গৌণ প্রবাহ (দক্ষতা ${efficiency}%)`,
              labelEn: `Secondary Current (Efficiency ${efficiency}%)`,
              latex: `I_s = I_p \\times \\frac{V_p}{V_s} \\times \\left(\\frac{\\eta}{100}\\right) = ${Ip} \\times \\frac{${Vp}}{${fmt(Vs, 2)}} \\times ${efficiency / 100} = ${fmt(Is, 4)}\\text{ A}`,
            },
          ]
        : []),
    ],
  };
}

// ==========================================
// CHAPTER 13: RADIOACTIVITY & ELECTRONICS (তেজস্ক্রিয়তা ও ইলেকট্রনিক্স)
// ==========================================

export function calcMassEnergyEquivalence(mKg: number, c: number = PHYSICAL_CONSTANTS.C_LIGHT): PhysicsResult {
  if (mKg <= 0) {
    return { success: false, steps: [], errorMessage: 'বিলুপ্ত ভর m অবশ্যই ধনাত্মক হতে হবে।' };
  }
  const E = mKg * c * c;
  return {
    success: true,
    value: E,
    unit: 'J',
    steps: [
      {
        labelBn: 'আইনস্টাইনের ভর-শক্তি সমীকরণ',
        labelEn: "Einstein's Mass-Energy Equivalence",
        latex: 'E = m c^2',
      },
      {
        labelBn: 'উৎপন্ন শক্তির হিসাব',
        labelEn: 'Energy Calculation',
        latex: `E = ${mKg}\\text{ kg} \\times (${c.toExponential(1)}\\text{ m/s})^2 = ${E.toExponential(4)}\\text{ Joules (J)}`,
      },
    ],
  };
}

export function calcRadioactiveDecay(N0: number, Thalf: number, t: number): PhysicsResult {
  if (N0 <= 0 || Thalf <= 0 || t < 0) {
    return { success: false, steps: [], errorMessage: 'আদি পরিমাণ N0 > 0, অর্ধায়ু T½ > 0 এবং সময় t ≥ 0 হতে হবে।' };
  }
  const power = t / Thalf;
  const Nt = N0 * Math.pow(0.5, power);
  const lambda = Math.LN2 / Thalf;

  return {
    success: true,
    value: Nt,
    unit: 'অক্ষত পরমাণু / kg',
    extraData: { Nt, lambda, power },
    steps: [
      {
        labelBn: 'অর্ধায়ু ও তেজস্ক্রিয় ক্ষয় সূত্র',
        labelEn: 'Half-Life Decay Formula',
        latex: 'N(t) = N_0 \\left(\\frac{1}{2}\\right)^{\\frac{t}{T_{1/2}}} = N_0 \\times 2^{-\\frac{t}{T_{1/2}}}',
      },
      {
        labelBn: 'অক্ষত পরিমাণের মান নির্ণয়',
        labelEn: 'Remaining Substance Evaluation',
        latex: `N(${t}) = ${N0} \\times \\left(\\frac{1}{2}\\right)^{\\frac{${t}}{${Thalf}}} = ${N0} \\times \\left(\\frac{1}{2}\\right)^{${fmt(power, 3)}} = ${fmt(Nt, 4)}`,
        notesBn: `মোট ক্ষয়প্রাপ্ত পরিমাণ: ${fmt(N0 - Nt, 4)} (বা ${fmt(((N0 - Nt) / N0) * 100, 2)}%)।`,
        notesEn: `Decayed fraction: ${fmt(((N0 - Nt) / N0) * 100, 2)}%.`,
      },
      {
        labelBn: 'ক্ষয় ধ্রুবক (Decay Constant λ)',
        labelEn: 'Decay Constant',
        latex: `\\lambda = \\frac{\\ln(2)}{T_{1/2}} = \\frac{0.693}{${Thalf}} = ${lambda.toExponential(4)}\\text{ সময়}^{-1}`,
      },
    ],
  };
}
