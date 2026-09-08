/**
 * SSC General Mathematics Mathematical & Computational Engine
 * Compliant with National Curriculum and Textbook Board (NCTB) Bangladesh (Classes 9-10).
 */

export interface StepItem {
  labelBn: string;
  labelEn: string;
  latex: string;
  notesBn?: string;
  notesEn?: string;
}

export interface MathResult {
  success: boolean;
  value?: number | string;
  steps: StepItem[];
  errorMessage?: string;
  extraData?: Record<string, any>;
}

// ==========================================
// CHAPTER 2: SETS & FUNCTIONS
// ==========================================
export function calcPowerSet(n: number): MathResult {
  if (n < 0 || !Number.isInteger(n)) {
    return {
      success: false,
      steps: [],
      errorMessage: 'উপাদান সংখ্যা (n) অবশ্যই একটি অঋণাত্মক পূর্ণসংখ্যা হতে হবে (n \u2265 0)।',
    };
  }
  const totalSubsets = Math.pow(2, n);
  const properSubsets = totalSubsets > 0 ? totalSubsets - 1 : 0;

  return {
    success: true,
    value: totalSubsets,
    extraData: { totalSubsets, properSubsets },
    steps: [
      {
        labelBn: 'প্রদত্ত উপাদান সংখ্যা',
        labelEn: 'Number of Elements',
        latex: `n = ${n}`,
      },
      {
        labelBn: 'শক্তি সেটের উপাদান সংখ্যা সূত্র',
        labelEn: 'Power Set Cardinality Formula',
        latex: `n(P(A)) = 2^n = 2^{${n}} = ${totalSubsets}`,
        notesBn: `অতএব, শক্তি সেটের উপাদান সংখ্যা ${totalSubsets}টি।`,
        notesEn: `Thus, power set has ${totalSubsets} subsets.`,
      },
      {
        labelBn: 'প্রকৃত উপসেট সংখ্যা (Proper Subsets)',
        labelEn: 'Proper Subsets Formula',
        latex: `2^n - 1 = ${totalSubsets} - 1 = ${properSubsets}`,
      },
    ],
  };
}

export function calcCartesianProduct(setA: string[], setB: string[]): MathResult {
  const cleanA = Array.from(new Set(setA.map((s) => s.trim()).filter(Boolean)));
  const cleanB = Array.from(new Set(setB.map((s) => s.trim()).filter(Boolean)));

  const pairs: [string, string][] = [];
  for (const a of cleanA) {
    for (const b of cleanB) {
      pairs.push([a, b]);
    }
  }

  const pairStrings = pairs.map(([a, b]) => `(${a}, ${b})`);

  return {
    success: true,
    value: pairs.length,
    extraData: { pairs, cleanA, cleanB },
    steps: [
      {
        labelBn: 'সেট A এবং সেট B',
        labelEn: 'Given Sets',
        latex: `A = \\{${cleanA.join(', ')}\\}, \\quad B = \\{${cleanB.join(', ')}\\}`,
      },
      {
        labelBn: 'কার্তেসীয় গুণের সংজ্ঞা',
        labelEn: 'Cartesian Product Definition',
        latex: `A \\times B = \\{(x, y) : x \\in A \\text{ and } y \\in B\\}`,
      },
      {
        labelBn: 'কার্তেসীয় গুণ সেট',
        labelEn: 'Evaluated Cartesian Set',
        latex: `A \\times B = \\{${pairStrings.slice(0, 15).join(', ')}${pairStrings.length > 15 ? ', \\dots' : ''}\\}`,
        notesBn: `মোট ক্রোমজোড় সংখ্যা: n(A \\times B) = ${cleanA.length} \\times ${cleanB.length} = ${pairs.length}`,
        notesEn: `Total ordered pairs = ${pairs.length}`,
      },
    ],
  };
}

// ==========================================
// CHAPTER 3: ALGEBRAIC EXPRESSIONS
// ==========================================
export type AlgebraType =
  | 'sq_from_sum'
  | 'sq_from_diff'
  | 'cube_sum'
  | 'cube_diff'
  | 'trinomial_sq'
  | 'trinomial_pair';

export function calcAlgebraicExpansion(type: AlgebraType, params: Record<string, number>): MathResult {
  const steps: StepItem[] = [];

  switch (type) {
    case 'sq_from_sum': {
      const { sum: apb, prod: ab } = params;
      const a2b2 = Math.pow(apb, 2) - 2 * ab;
      const amb2 = Math.pow(apb, 2) - 4 * ab;
      steps.push(
        {
          labelBn: 'প্রদত্ত মানসমূহ',
          labelEn: 'Given Values',
          latex: `a + b = ${apb}, \\quad ab = ${ab}`,
        },
        {
          labelBn: 'a² + b² এর অনুসিদ্ধান্ত',
          labelEn: 'Formula for a² + b²',
          latex: `a^2 + b^2 = (a+b)^2 - 2ab = (${apb})^2 - 2(${ab}) = ${a2b2}`,
        },
        {
          labelBn: '(a - b)² এর অনুসিদ্ধান্ত',
          labelEn: 'Formula for (a - b)²',
          latex: `(a-b)^2 = (a+b)^2 - 4ab = (${apb})^2 - 4(${ab}) = ${amb2}`,
        }
      );
      return { success: true, value: a2b2, steps, extraData: { a2b2, amb2 } };
    }

    case 'sq_from_diff': {
      const { diff: amb, prod: ab } = params;
      const a2b2 = Math.pow(amb, 2) + 2 * ab;
      const apb2 = Math.pow(amb, 2) + 4 * ab;
      steps.push(
        {
          labelBn: 'প্রদত্ত মানসমূহ',
          labelEn: 'Given Values',
          latex: `a - b = ${amb}, \\quad ab = ${ab}`,
        },
        {
          labelBn: 'a² + b² এর অনুসিদ্ধান্ত',
          labelEn: 'Formula for a² + b²',
          latex: `a^2 + b^2 = (a-b)^2 + 2ab = (${amb})^2 + 2(${ab}) = ${a2b2}`,
        },
        {
          labelBn: '(a + b)² এর অনুসিদ্ধান্ত',
          labelEn: 'Formula for (a + b)²',
          latex: `(a+b)^2 = (a-b)^2 + 4ab = (${amb})^2 + 4(${ab}) = ${apb2}`,
        }
      );
      return { success: true, value: a2b2, steps, extraData: { a2b2, apb2 } };
    }

    case 'cube_sum': {
      const { sum: apb, prod: ab } = params;
      const a3b3 = Math.pow(apb, 3) - 3 * ab * apb;
      steps.push(
        {
          labelBn: 'প্রদত্ত মানসমূহ',
          labelEn: 'Given Values',
          latex: `a + b = ${apb}, \\quad ab = ${ab}`,
        },
        {
          labelBn: 'a³ + b³ এর অনুসিদ্ধান্ত সূত্র',
          labelEn: 'Formula for a³ + b³',
          latex: `a^3 + b^3 = (a+b)^3 - 3ab(a+b)`,
        },
        {
          labelBn: 'মান বসিয়ে পাই',
          labelEn: 'Substitution & Evaluation',
          latex: `a^3 + b^3 = (${apb})^3 - 3(${ab})(${apb}) = ${Math.pow(apb, 3)} - ${3 * ab * apb} = ${a3b3}`,
        }
      );
      return { success: true, value: a3b3, steps };
    }

    case 'cube_diff': {
      const { diff: amb, prod: ab } = params;
      const a3b3 = Math.pow(amb, 3) + 3 * ab * amb;
      steps.push(
        {
          labelBn: 'প্রদত্ত মানসমূহ',
          labelEn: 'Given Values',
          latex: `a - b = ${amb}, \\quad ab = ${ab}`,
        },
        {
          labelBn: 'a³ - b³ এর অনুসিদ্ধান্ত সূত্র',
          labelEn: 'Formula for a³ - b³',
          latex: `a^3 - b^3 = (a-b)^3 + 3ab(a-b)`,
        },
        {
          labelBn: 'মান বসিয়ে পাই',
          labelEn: 'Substitution & Evaluation',
          latex: `a^3 - b^3 = (${amb})^3 + 3(${ab})(${amb}) = ${Math.pow(amb, 3)} + ${3 * ab * amb} = ${a3b3}`,
        }
      );
      return { success: true, value: a3b3, steps };
    }

    case 'trinomial_sq': {
      const { sum_abc, sum_pair } = params;
      const a2b2c2 = Math.pow(sum_abc, 2) - 2 * sum_pair;
      steps.push(
        {
          labelBn: 'প্রদত্ত রাশিমালা',
          labelEn: 'Given Quantities',
          latex: `a + b + c = ${sum_abc}, \\quad ab + bc + ca = ${sum_pair}`,
        },
        {
          labelBn: 'তিন পদের বর্গের অনুসিদ্ধান্ত',
          labelEn: 'Trinomial Identity',
          latex: `a^2 + b^2 + c^2 = (a+b+c)^2 - 2(ab + bc + ca)`,
        },
        {
          labelBn: 'হিসাব সম্পন্ন',
          labelEn: 'Final Evaluation',
          latex: `a^2 + b^2 + c^2 = (${sum_abc})^2 - 2(${sum_pair}) = ${Math.pow(sum_abc, 2)} - ${2 * sum_pair} = ${a2b2c2}`,
        }
      );
      return { success: true, value: a2b2c2, steps };
    }

    case 'trinomial_pair': {
      const { sum_abc, sum_sq } = params;
      const sum_pair = (Math.pow(sum_abc, 2) - sum_sq) / 2;
      steps.push(
        {
          labelBn: 'প্রদত্ত রাশিমালা',
          labelEn: 'Given Quantities',
          latex: `a + b + c = ${sum_abc}, \\quad a^2 + b^2 + c^2 = ${sum_sq}`,
        },
        {
          labelBn: 'যুগল গুণফলের যোগফল সূত্র',
          labelEn: 'Pairwise Sum Identity',
          latex: `ab + bc + ca = \\frac{(a+b+c)^2 - (a^2 + b^2 + c^2)}{2}`,
        },
        {
          labelBn: 'হিসাব সম্পন্ন',
          labelEn: 'Final Evaluation',
          latex: `ab + bc + ca = \\frac{(${sum_abc})^2 - (${sum_sq})}{2} = \\frac{${Math.pow(sum_abc, 2) - sum_sq}}{2} = ${sum_pair}`,
        }
      );
      return { success: true, value: sum_pair, steps };
    }
  }
}

// ==========================================
// CHAPTER 4: EXPONENTS & LOGARITHMS
// ==========================================
export function calcPower(base: number, exp: number): MathResult {
  if (base === 0 && exp < 0) {
    return {
      success: false,
      steps: [],
      errorMessage: 'শূন্যকে (0) ঋণাত্মক সূচকে উন্নীত করা অসংজ্ঞায়িত (Division by zero)।',
    };
  }
  if (base < 0 && !Number.isInteger(exp)) {
    return {
      success: false,
      steps: [],
      errorMessage: 'ঋণাত্মক ভিত্তির ভগ্নাংশ ঘাত জটিল সংখ্যা (Complex number) তৈরি করে।',
    };
  }

  const result = Math.pow(base, exp);
  return {
    success: true,
    value: result,
    steps: [
      {
        labelBn: 'সূচক সমীকরণ',
        labelEn: 'Exponential Expression',
        latex: `${base}^{${exp}} = ${result}`,
      },
    ],
  };
}

export function calcLogarithm(base: number, n: number): MathResult {
  if (base <= 0 || base === 1) {
    return {
      success: false,
      steps: [],
      errorMessage: 'লগারিদমের ভিত্তি অবশ্যই ধনাত্মক এবং ১ এর অসমান হতে হবে (a > 0 এবং a \u2260 1)।',
    };
  }
  if (n <= 0) {
    return {
      success: false,
      steps: [],
      errorMessage: 'লগারিদমের সংখ্যা (N) অবশ্যই কঠোরভাবে ধনাত্মক হতে হবে (N > 0)।',
    };
  }

  const result = Math.log(n) / Math.log(base);
  return {
    success: true,
    value: Number(result.toFixed(6)),
    steps: [
      {
        labelBn: 'ভিত্তি পরিবর্তন সূত্র (Change of Base)',
        labelEn: 'Change of Base Formula',
        latex: `\\log_{${base}}(${n}) = \\frac{\\ln(${n})}{\\ln(${base})}`,
      },
      {
        labelBn: 'গণনাকৃত মান',
        labelEn: 'Calculated Value',
        latex: `\\log_{${base}}(${n}) = \\frac{${Math.log(n).toFixed(6)}}{${Math.log(base).toFixed(6)}} \\approx ${result.toFixed(6)}`,
      },
    ],
  };
}

export function toScientificNotation(num: number): MathResult {
  if (num === 0) {
    return {
      success: true,
      value: '0',
      steps: [
        {
          labelBn: 'বৈজ্ঞানিক রূপ',
          labelEn: 'Scientific Notation',
          latex: `0 = 0 \\times 10^0`,
        },
      ],
    };
  }

  const exp = Math.floor(Math.log10(Math.abs(num)));
  const mantissa = num / Math.pow(10, exp);

  return {
    success: true,
    value: `${mantissa.toFixed(6)} × 10^${exp}`,
    steps: [
      {
        labelBn: 'বৈজ্ঞানিক রূপের আন্তর্জাতিক মানদণ্ড',
        labelEn: 'Standard Scientific Form',
        latex: `A \\times 10^n \\quad (1 \\le |A| < 10, \\, n \\in \\mathbb{Z})`,
      },
      {
        labelBn: 'রূপান্তরিত আকার',
        labelEn: 'Converted Representation',
        latex: `${num} = ${mantissa.toFixed(6)} \\times 10^{${exp}}`,
        notesBn: `এখানে তাৎপর্যপূর্ণ অংশ A = ${mantissa.toFixed(6)} এবং সূচক n = ${exp}।`,
      },
    ],
  };
}

// ==========================================
// CHAPTER 9 & 10: TRIGONOMETRY, HEIGHTS & DISTANCES
// ==========================================
export function calcTrigRatios(deg: number): MathResult {
  const rad = (deg * Math.PI) / 180;
  const sinV = Math.sin(rad);
  const cosV = Math.cos(rad);
  const tanV = Math.abs(cosV) > 1e-12 ? Math.tan(rad) : NaN;
  const cscV = Math.abs(sinV) > 1e-12 ? 1 / sinV : NaN;
  const secV = Math.abs(cosV) > 1e-12 ? 1 / cosV : NaN;
  const cotV = Math.abs(sinV) > 1e-12 && !isNaN(tanV) && Math.abs(tanV) > 1e-12 ? 1 / tanV : (Math.abs(sinV) > 1e-12 && isNaN(tanV) ? 0 : NaN);

  return {
    success: true,
    value: sinV,
    extraData: { sinV, cosV, tanV, cscV, secV, cotV, deg, rad },
    steps: [
      {
        labelBn: 'কোণের মান (ডিগ্রি ও রেডিয়ান)',
        labelEn: 'Angle in Degrees & Radians',
        latex: `\\theta = ${deg}^\\circ = ${rad.toFixed(5)} \\text{ rad}`,
      },
      {
        labelBn: 'মৌলিক ৩টি অনুপাত',
        labelEn: 'Primary 3 Ratios',
        latex: `\\sin(${deg}^\\circ) = ${sinV.toFixed(5)}, \\quad \\cos(${deg}^\\circ) = ${cosV.toFixed(5)}, \\quad \\tan(${deg}^\\circ) = ${!isNaN(tanV) ? tanV.toFixed(5) : '\\text{Undefined}'}`,
      },
      {
        labelBn: 'বিপরীত ৩টি অনুপাত',
        labelEn: 'Reciprocal 3 Ratios',
        latex: `\\csc(${deg}^\\circ) = ${!isNaN(cscV) ? cscV.toFixed(5) : '\\text{Undefined}'}, \\quad \\sec(${deg}^\\circ) = ${!isNaN(secV) ? secV.toFixed(5) : '\\text{Undefined}'}, \\quad \\cot(${deg}^\\circ) = ${!isNaN(cotV) ? cotV.toFixed(5) : '\\text{Undefined}'}`,
      },
    ],
  };
}

export function calcRightTriangle(
  mode: 'find_height' | 'find_dist' | 'find_angle',
  params: { theta?: number; height?: number; distance?: number }
): MathResult {
  const steps: StepItem[] = [];

  if (mode === 'find_height') {
    const { theta = 45, distance = 10 } = params;
    if (theta <= 0 || theta >= 90 || distance <= 0) {
      return { success: false, steps: [], errorMessage: 'উন্নতি কোণ 0° থেকে 90° এর মধ্যে এবং দূরত্ব ধনাত্মক হতে হবে।' };
    }
    const rad = (theta * Math.PI) / 180;
    const opp = distance * Math.tan(rad);
    const hyp = distance / Math.cos(rad);

    steps.push(
      {
        labelBn: 'প্রদত্ত তথ্য',
        labelEn: 'Given Parameters',
        latex: `\\theta = ${theta}^\\circ, \\quad \\text{দূরত্ব } d = ${distance} \\text{ m}`,
      },
      {
        labelBn: 'উচ্চতা সূত্র',
        labelEn: 'Height Equation',
        latex: `\\tan\\theta = \\frac{h}{d} \\implies h = d \\cdot \\tan\\theta`,
      },
      {
        labelBn: 'উচ্চতা ও দৃষ্টিরেখার দৈর্ঘ্য',
        labelEn: 'Evaluated Height & Line of Sight',
        latex: `h = ${distance} \\times \\tan(${theta}^\\circ) = ${opp.toFixed(4)} \\text{ m}`,
        notesBn: `দৃষ্টিরেখা (অতিভুজ) = \\frac{d}{\\cos\\theta} = ${hyp.toFixed(4)} \\text{ m}`,
      }
    );
    return { success: true, value: Number(opp.toFixed(4)), steps, extraData: { height: opp, lineOfSight: hyp } };
  }

  if (mode === 'find_dist') {
    const { theta = 45, height = 10 } = params;
    if (theta <= 0 || theta >= 90 || height <= 0) {
      return { success: false, steps: [], errorMessage: 'উন্নতি কোণ 0° থেকে 90° এর মধ্যে এবং উচ্চতা ধনাত্মক হতে হবে।' };
    }
    const rad = (theta * Math.PI) / 180;
    const adj = height / Math.tan(rad);
    const hyp = height / Math.sin(rad);

    steps.push(
      {
        labelBn: 'প্রদত্ত তথ্য',
        labelEn: 'Given Parameters',
        latex: `\\theta = ${theta}^\\circ, \\quad \\text{উচ্চতা } h = ${height} \\text{ m}`,
      },
      {
        labelBn: 'দূরত্ব সূত্র',
        labelEn: 'Distance Equation',
        latex: `\\tan\\theta = \\frac{h}{d} \\implies d = \\frac{h}{\\tan\\theta}`,
      },
      {
        labelBn: 'অনুভূমিক দূরত্ব নির্ণয়',
        labelEn: 'Calculated Distance',
        latex: `d = \\frac{${height}}{\\tan(${theta}^\\circ)} = ${adj.toFixed(4)} \\text{ m}`,
      }
    );
    return { success: true, value: Number(adj.toFixed(4)), steps, extraData: { distance: adj, lineOfSight: hyp } };
  }

  // find_angle
  const { height = 10, distance = 10 } = params;
  if (height <= 0 || distance <= 0) {
    return { success: false, steps: [], errorMessage: 'উচ্চতা ও দূরত্ব উভয়ই ধনাত্মক হতে হবে।' };
  }
  const rad = Math.atan2(height, distance);
  const deg = (rad * 180) / Math.PI;
  const hyp = Math.sqrt(height * height + distance * distance);

  steps.push(
    {
      labelBn: 'প্রদত্ত তথ্য',
      labelEn: 'Given Parameters',
      latex: `h = ${height} \\text{ m}, \\quad d = ${distance} \\text{ m}`,
    },
    {
      labelBn: 'উন্নতি কোণ নির্ণয় সূত্র',
      labelEn: 'Angle of Elevation Equation',
      latex: `\\tan\\theta = \\frac{h}{d} \\implies \\theta = \\arctan\\left(\\frac{h}{d}\\right)`,
    },
    {
      labelBn: 'উন্নতি কোণ ও অতিভুজ',
      labelEn: 'Calculated Angle & Hypotenuse',
      latex: `\\theta = \\arctan\\left(\\frac{${height}}{${distance}}\\right) = ${deg.toFixed(4)}^\\circ`,
      notesBn: `অতিভুজ (Line of Sight) = \\sqrt{${height}^2 + ${distance}^2} = ${hyp.toFixed(4)} \\text{ m}`,
    }
  );
  return { success: true, value: Number(deg.toFixed(4)), steps, extraData: { angleDeg: deg, hypotenuse: hyp } };
}

// NCTB Classic CQ 1: Tower from Two Observation Points
export function calcTowerTwoPoints(
  theta1Deg: number,
  theta2Deg: number,
  distBetween: number,
  side: 'same' | 'opposite' = 'same'
): MathResult {
  if (theta1Deg <= 0 || theta1Deg >= 90 || theta2Deg <= 0 || theta2Deg >= 90) {
    return { success: false, steps: [], errorMessage: 'উন্নতি কোণদ্বয় 0° থেকে 90° এর মধ্যে হতে হবে।' };
  }
  if (side === 'same' && theta1Deg >= theta2Deg) {
    return { success: false, steps: [], errorMessage: 'একই পাশে পর্যবেক্ষণে দূরবর্তী কোণ (θ1) অবশ্যই নিকটবর্তী কোণ (θ2) থেকে ছোট হতে হবে।' };
  }
  if (distBetween <= 0) {
    return { success: false, steps: [], errorMessage: 'পর্যবেক্ষণ বিন্দুর মধ্যবর্তী দূরত্ব ধনাত্মক হতে হবে।' };
  }

  const cot1 = 1 / Math.tan((theta1Deg * Math.PI) / 180);
  const cot2 = 1 / Math.tan((theta2Deg * Math.PI) / 180);

  let h = 0;
  if (side === 'same') {
    h = distBetween / (cot1 - cot2);
  } else {
    h = distBetween / (cot1 + cot2);
  }

  const steps: StepItem[] = [
    {
      labelBn: 'প্রদত্ত উন্নতি কোণ ও বিন্দুর দূরত্ব',
      labelEn: 'Given Elevation Angles & Distance',
      latex: `\\theta_1 = ${theta1Deg}^\\circ, \\quad \\theta_2 = ${theta2Deg}^\\circ, \\quad d = ${distBetween} \\text{ m}`,
    },
    {
      labelBn: 'কোট্যাঞ্জেন্ট মানসমূহ',
      labelEn: 'Cotangent Values',
      latex: `\\cot(${theta1Deg}^\\circ) = ${cot1.toFixed(4)}, \\quad \\cot(${theta2Deg}^\\circ) = ${cot2.toFixed(4)}`,
    },
    {
      labelBn: side === 'same' ? 'একই পাশের টাওয়ারের উচ্চতা সূত্র' : 'বিপরীত পাশের টাওয়ারের উচ্চতা সূত্র',
      labelEn: 'Tower Height Formula',
      latex: side === 'same'
        ? `h = \\frac{d}{\\cot\\theta_1 - \\cot\\theta_2}`
        : `h = \\frac{d}{\\cot\\theta_1 + \\cot\\theta_2}`,
    },
    {
      labelBn: 'নির্ণীত উচ্চতা',
      labelEn: 'Calculated Tower Height',
      latex: `h = \\frac{${distBetween}}{${side === 'same' ? `${cot1.toFixed(4)} - ${cot2.toFixed(4)}` : `${cot1.toFixed(4)} + ${cot2.toFixed(4)}`}} = ${h.toFixed(4)} \\text{ m}`,
    },
  ];

  return { success: true, value: Number(h.toFixed(4)), steps, extraData: { height: h } };
}

// NCTB Classic CQ 2: Broken Tree / Pole Problem
export function calcBrokenTree(totalHeight: number, thetaDeg: number): MathResult {
  if (totalHeight <= 0) {
    return { success: false, steps: [], errorMessage: 'গাছের মোট উচ্চতা ধনাত্মক হতে হবে।' };
  }
  if (thetaDeg <= 0 || thetaDeg >= 90) {
    return { success: false, steps: [], errorMessage: 'ভুমির সাথে কোণ 0° থেকে 90° এর মধ্যে হতে হবে।' };
  }

  const sinTheta = Math.sin((thetaDeg * Math.PI) / 180);
  // (H - x) * sin(theta) = x => x = H * sin(theta) / (1 + sin(theta))
  const brokenAt = (totalHeight * sinTheta) / (1 + sinTheta);
  const brokenPart = totalHeight - brokenAt;
  const groundDistance = brokenPart * Math.cos((thetaDeg * Math.PI) / 180);

  return {
    success: true,
    value: Number(brokenAt.toFixed(4)),
    extraData: { brokenAt, brokenPart, groundDistance },
    steps: [
      {
        labelBn: 'ধরি, গাছটি ভুমি থেকে x উচ্চতায় ভেঙেছিল',
        labelEn: 'Let height where tree broke = x',
        latex: `\\text{ভাঙা অংশের দৈর্ঘ্য } = H - x = ${totalHeight} - x`,
      },
      {
        labelBn: 'সমকোণী ত্রিভুজের সাইন অনুপাত',
        labelEn: 'Sine Equation for Broken Part',
        latex: `\\sin\\theta = \\frac{x}{H - x} \\implies x = \\frac{H \\sin\\theta}{1 + \\sin\\theta}`,
      },
      {
        labelBn: 'ভাঙা অংশের উচ্চতা ও বিচ্ছিন্ন অংশের দৈর্ঘ্য',
        labelEn: 'Calculated Intact Trunk & Broken Length',
        latex: `x = \\frac{${totalHeight} \\times \\sin(${thetaDeg}^\\circ)}{1 + \\sin(${thetaDeg}^\\circ)} = ${brokenAt.toFixed(4)} \\text{ m}`,
        notesBn: `ভাঙা অংশের দৈর্ঘ্য = ${brokenPart.toFixed(4)} m; গোড়া থেকে শীর্ষের স্পর্শবিন্দুর দূরত্ব = ${groundDistance.toFixed(4)} m।`,
      },
    ],
  };
}

// ==========================================
// CHAPTER 11: ALGEBRAIC RATIO & PROPORTION
// ==========================================
export function calcComponendoDividendo(a: number, b: number): MathResult {
  if (a === b) {
    return {
      success: false,
      steps: [],
      errorMessage: 'যোজন-বিয়োজনে a \u2260 b হতে হবে, নতুবা হর (a - b) শূন্য হয়ে মান অসংজ্ঞায়িত হয়।',
    };
  }

  const cd = (a + b) / (a - b);
  return {
    success: true,
    value: Number(cd.toFixed(4)),
    steps: [
      {
        labelBn: 'যোজন-বিয়োজনের সাধারণ ধর্ম',
        labelEn: 'Componendo-Dividendo Theorem',
        latex: `\\frac{a}{b} = \\frac{c}{d} \\implies \\frac{a+b}{a-b} = \\frac{c+d}{c-d}`,
      },
      {
        labelBn: 'মান বসিয়ে পাই',
        labelEn: 'Evaluation',
        latex: `\\frac{${a} + ${b}}{${a} - ${b}} = \\frac{${a + b}}{${a - b}} = ${cd.toFixed(4)}`,
      },
    ],
  };
}

// ==========================================
// CHAPTER 16: MENSURATION (2D & 3D)
// ==========================================
export type MensurationShape =
  | 'equilateral_triangle'
  | 'triangle_included_angle'
  | 'triangle_heron'
  | 'circle'
  | 'rhombus'
  | 'regular_polygon'
  | 'cube'
  | 'cylinder';

export function calcMensuration(shape: MensurationShape, params: Record<string, number>): MathResult {
  const steps: StepItem[] = [];

  switch (shape) {
    case 'equilateral_triangle': {
      const a = params.a;
      if (a <= 0) return { success: false, steps: [], errorMessage: 'বাহুর দৈর্ঘ্য ধনাত্মক হতে হবে।' };
      const area = (Math.sqrt(3) / 4) * a * a;
      steps.push(
        {
          labelBn: 'সমবাহু ত্রিভুজের ক্ষেত্রফল সূত্র',
          labelEn: 'Equilateral Triangle Area Formula',
          latex: `\\text{Area} = \\frac{\\sqrt{3}}{4} a^2`,
        },
        {
          labelBn: 'মান বসিয়ে ক্ষেত্রফল নির্ণয়',
          labelEn: 'Calculated Area',
          latex: `\\text{Area} = \\frac{\\sqrt{3}}{4} (${a})^2 = ${area.toFixed(4)} \\text{ sq. units}`,
        }
      );
      return { success: true, value: Number(area.toFixed(4)), steps };
    }

    case 'triangle_included_angle': {
      const { a, b, theta } = params;
      if (a <= 0 || b <= 0 || theta <= 0 || theta >= 180) {
        return { success: false, steps: [], errorMessage: 'বাহুদ্বয় ধনাত্মক এবং অন্তর্ভুক্ত কোণ 0° থেকে 180° এর মধ্যে হতে হবে।' };
      }
      const area = 0.5 * a * b * Math.sin((theta * Math.PI) / 180);
      steps.push(
        {
          labelBn: 'অন্তর্ভুক্ত কোণযুক্ত ত্রিভুজের ক্ষেত্রফল সূত্র',
          labelEn: 'Two Sides & Included Angle Formula',
          latex: `\\text{Area} = \\frac{1}{2} a b \\sin\\theta`,
        },
        {
          labelBn: 'মান বসিয়ে পাই',
          labelEn: 'Calculated Area',
          latex: `\\text{Area} = \\frac{1}{2} (${a}) (${b}) \\sin(${theta}^\\circ) = ${area.toFixed(4)} \\text{ sq. units}`,
        }
      );
      return { success: true, value: Number(area.toFixed(4)), steps };
    }

    case 'triangle_heron': {
      const { a, b, c } = params;
      if (a <= 0 || b <= 0 || c <= 0) {
        return { success: false, steps: [], errorMessage: 'ত্রিভুজের তিনটি বাহুই ধনাত্মক হতে হবে।' };
      }
      // Strict Triangle Inequality Validation
      if (a + b <= c || b + c <= a || c + a <= b) {
        return {
          success: false,
          steps: [],
          errorMessage: 'ত্রিভুজ অসমতা শর্ত ভঙ্গ হয়েছে: ত্রিভুজের যেকোনো দুই বাহুর সমষ্টি অবশ্যই তৃতীয় বাহু অপেক্ষা বৃহত্তর হতে হবে (a+b>c, b+c>a, c+a>b)।',
        };
      }
      const s = (a + b + c) / 2;
      const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      steps.push(
        {
          labelBn: 'অর্ধ-পরিসীমা (s) নির্ণয়',
          labelEn: 'Semi-perimeter (s)',
          latex: `s = \\frac{a + b + c}{2} = \\frac{${a} + ${b} + ${c}}{2} = ${s.toFixed(4)}`,
        },
        {
          labelBn: 'হ্যারনের ক্ষেত্রফল সূত্র (Heron\'s Formula)',
          labelEn: 'Heron\'s Area Formula',
          latex: `\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)}`,
        },
        {
          labelBn: 'মান বসিয়ে পাই',
          labelEn: 'Calculated Area',
          latex: `\\text{Area} = \\sqrt{${s.toFixed(2)}(${(s - a).toFixed(2)})(${(s - b).toFixed(2)})(${(s - c).toFixed(2)})} = ${area.toFixed(4)} \\text{ sq. units}`,
        }
      );
      return { success: true, value: Number(area.toFixed(4)), steps };
    }

    case 'circle': {
      const r = params.r;
      if (r <= 0) return { success: false, steps: [], errorMessage: 'ব্যাসার্ধ ধনাত্মক হতে হবে।' };
      const area = Math.PI * r * r;
      const circ = 2 * Math.PI * r;
      steps.push(
        {
          labelBn: 'বৃত্তের ক্ষেত্রফল ও পরিধি সূত্র',
          labelEn: 'Circle Area & Circumference Formulas',
          latex: `\\text{Area} = \\pi r^2, \\quad \\text{Circumference} = 2\\pi r`,
        },
        {
          labelBn: 'গণনাকৃত মান',
          labelEn: 'Calculated Values',
          latex: `\\text{Area} = \\pi (${r})^2 = ${area.toFixed(4)} \\text{ sq. units}, \\quad \\text{Circumference} = 2\\pi (${r}) = ${circ.toFixed(4)} \\text{ units}`,
        }
      );
      return { success: true, value: Number(area.toFixed(4)), steps, extraData: { area, circ } };
    }

    case 'rhombus': {
      const { d1, d2 } = params;
      if (d1 <= 0 || d2 <= 0) return { success: false, steps: [], errorMessage: 'কর্ণদ্বয় ধনাত্মক হতে হবে।' };
      const area = 0.5 * d1 * d2;
      steps.push(
        {
          labelBn: 'রম্বসের ক্ষেত্রফল সূত্র',
          labelEn: 'Rhombus Area Formula',
          latex: `\\text{Area} = \\frac{1}{2} d_1 d_2 = \\frac{1}{2} (${d1}) (${d2}) = ${area.toFixed(4)} \\text{ sq. units}`,
        }
      );
      return { success: true, value: Number(area.toFixed(4)), steps };
    }

    case 'regular_polygon': {
      const { n, a } = params;
      if (n < 3 || !Number.isInteger(n) || a <= 0) {
        return { success: false, steps: [], errorMessage: 'সুষম বহুভুজের বাহুর সংখ্যা n \u2265 3 পূর্ণসংখ্যা এবং বাহুর দৈর্ঘ্য a > 0 হতে হবে।' };
      }
      const area = (n * a * a) / (4 * Math.tan(Math.PI / n));
      steps.push(
        {
          labelBn: 'সুষম বহুভুজের ক্ষেত্রফল সূত্র',
          labelEn: 'Regular n-gon Area Formula',
          latex: `\\text{Area} = \\frac{n a^2}{4 \\tan\\left(\\frac{180^\\circ}{n}\\right)}`,
        },
        {
          labelBn: 'গণনাকৃত ক্ষেত্রফল',
          labelEn: 'Calculated Area',
          latex: `\\text{Area} = \\frac{${n} \\times (${a})^2}{4 \\tan\\left(\\frac{180^\\circ}{${n}}\\right)} = ${area.toFixed(4)} \\text{ sq. units}`,
        }
      );
      return { success: true, value: Number(area.toFixed(4)), steps };
    }

    case 'cube': {
      const a = params.a;
      if (a <= 0) return { success: false, steps: [], errorMessage: 'ঘনকের ধার ধনাত্মক হতে হবে।' };
      const faceDiag = a * Math.sqrt(2);
      const bodyDiag = a * Math.sqrt(3);
      const sa = 6 * a * a;
      const vol = Math.pow(a, 3);
      steps.push(
        {
          labelBn: 'ঘনকের পৃষ্ঠতল ও আয়তন সূত্রাবলী',
          labelEn: 'Cube Formulas',
          latex: `\\text{সমগ্র পৃষ্ঠের ক্ষেত্রফল} = 6a^2 = 6(${a})^2 = ${sa.toFixed(4)} \\text{ sq. units}, \\quad \\text{আয়তন} = a^3 = ${vol.toFixed(4)} \\text{ units}^3`,
        },
        {
          labelBn: 'কর্ণের দৈর্ঘ্য',
          labelEn: 'Diagonals',
          latex: `\\text{তলের কর্ণ} = a\\sqrt{2} = ${faceDiag.toFixed(4)}, \\quad \\text{বস্তুর কর্ণ} = a\\sqrt{3} = ${bodyDiag.toFixed(4)}`,
        }
      );
      return { success: true, value: vol, steps, extraData: { sa, vol, faceDiag, bodyDiag } };
    }

    case 'cylinder': {
      const { r, h } = params;
      if (r <= 0 || h <= 0) return { success: false, steps: [], errorMessage: 'বেলনের ব্যাসার্ধ ও উচ্চতা উভয়ই ধনাত্মক হতে হবে।' };
      const vol = Math.PI * r * r * h;
      const csa = 2 * Math.PI * r * h;
      const tsa = 2 * Math.PI * r * (r + h);
      steps.push(
        {
          labelBn: 'বেলন (সিলিন্ডার) এর সূত্রাবলী',
          labelEn: 'Cylinder Formulas',
          latex: `\\text{আয়তন} = \\pi r^2 h = ${vol.toFixed(4)} \\text{ units}^3`,
        },
        {
          labelBn: 'বক্রতল ও সমগ্রতলের ক্ষেত্রফল',
          labelEn: 'Curved and Total Surface Area',
          latex: `\\text{বক্রতলের ক্ষেত্রফল} = 2\\pi r h = ${csa.toFixed(4)}, \\quad \\text{সমগ্রতলের ক্ষেত্রফল} = 2\\pi r(r+h) = ${tsa.toFixed(4)}`,
        }
      );
      return { success: true, value: vol, steps, extraData: { vol, csa, tsa } };
    }
  }
}

// ==========================================
// CHAPTER 17: STATISTICS (GROUPED DATA)
// ==========================================
export interface ClassInterval {
  lower: number;
  upper: number;
  freq: number;
}

export interface GroupedRow {
  lower: number;
  upper: number;
  mid: number;
  freq: number;
  cumFreq: number;
  u: number;
  fu: number;
}

export interface StatisticsResult {
  success: boolean;
  table: GroupedRow[];
  totalN: number;
  assumedMeanA: number;
  classWidthH: number;
  mean: number;
  median: number;
  medianClass: { lower: number; upper: number; L: number; Fc: number; fm: number };
  mode: number;
  modalClass: { lower: number; upper: number; L: number; f1: number; f2: number; fm: number };
  steps: StepItem[];
  errorMessage?: string;
}

export function calcGroupedStatistics(classes: ClassInterval[]): StatisticsResult {
  if (!classes || classes.length === 0) {
    return {
      success: false,
      table: [],
      totalN: 0,
      assumedMeanA: 0,
      classWidthH: 0,
      mean: 0,
      median: 0,
      medianClass: { lower: 0, upper: 0, L: 0, Fc: 0, fm: 0 },
      mode: 0,
      modalClass: { lower: 0, upper: 0, L: 0, f1: 0, f2: 0, fm: 0 },
      steps: [],
      errorMessage: 'কমপক্ষে একটি শ্রেণি ব্যবধান ইনপুট দিন।',
    };
  }

  // Calculate width h (continuous vs discrete inference)
  let h = classes[0].upper - classes[0].lower;
  if (classes.length > 1) {
    if (classes[1].lower === classes[0].upper) {
      h = classes[0].upper - classes[0].lower;
    } else if (classes[1].lower > classes[0].upper) {
      h = classes[1].lower - classes[0].lower;
    }
  }

  // Compute total frequency and cumulative frequency
  let cum = 0;
  const frequencies = classes.map((c) => c.freq);
  const totalN = frequencies.reduce((a, b) => a + b, 0);

  if (totalN <= 0) {
    return {
      success: false,
      table: [],
      totalN: 0,
      assumedMeanA: 0,
      classWidthH: 0,
      mean: 0,
      median: 0,
      medianClass: { lower: 0, upper: 0, L: 0, Fc: 0, fm: 0 },
      mode: 0,
      modalClass: { lower: 0, upper: 0, L: 0, f1: 0, f2: 0, fm: 0 },
      steps: [],
      errorMessage: 'মোট গণসংখ্যা শূন্য হতে পারে না।',
    };
  }

  // Assumed mean 'a' is chosen as the midpoint of the middle class
  const midIdx = Math.floor(classes.length / 2);
  const assumedMeanA = (classes[midIdx].lower + classes[midIdx].upper) / 2;

  const table: GroupedRow[] = [];
  let sumFu = 0;

  classes.forEach((c) => {
    const mid = (c.lower + c.upper) / 2;
    cum += c.freq;
    const u = Math.round((mid - assumedMeanA) / h);
    const fu = c.freq * u;
    sumFu += fu;

    table.push({
      lower: c.lower,
      upper: c.upper,
      mid,
      freq: c.freq,
      cumFreq: cum,
      u,
      fu,
    });
  });

  // 1. Mean
  const mean = assumedMeanA + (sumFu / totalN) * h;

  // 2. Median: n/2 position, first interval where cumFreq >= n/2
  const halfN = totalN / 2;
  let medianClassIdx = -1;
  for (let i = 0; i < table.length; i++) {
    if (table[i].cumFreq >= halfN) {
      medianClassIdx = i;
      break;
    }
  }

  const medRow = table[medianClassIdx];
  const L_med = medRow.lower;
  const Fc = medianClassIdx > 0 ? table[medianClassIdx - 1].cumFreq : 0;
  const fm = medRow.freq;
  const median = L_med + ((halfN - Fc) / fm) * h;

  // 3. Mode: Maximum frequency class
  let maxF = -1;
  let modalIdx = 0;
  frequencies.forEach((f, idx) => {
    if (f > maxF) {
      maxF = f;
      modalIdx = idx;
    }
  });

  const modalRow = table[modalIdx];
  const L_mod = modalRow.lower;
  const f_modal = modalRow.freq;

  // NCTB Directive Edge Cases:
  // If modal class is first class, f_preceding = 0; if last class, f_succeeding = 0
  const f_preceding = modalIdx > 0 ? frequencies[modalIdx - 1] : 0;
  const f_succeeding = modalIdx < frequencies.length - 1 ? frequencies[modalIdx + 1] : 0;

  const f1 = f_modal - f_preceding;
  const f2 = f_modal - f_succeeding;

  let mode = modalRow.mid;
  if (f1 + f2 > 0) {
    mode = L_mod + (f1 / (f1 + f2)) * h;
  }

  const steps: StepItem[] = [
    {
      labelBn: 'সংক্ষিপ্ত পদ্ধতিতে গড় (Arithmetic Mean)',
      labelEn: 'Step-Deviation Arithmetic Mean',
      latex: `\\bar{x} = a + \\left(\\frac{\\sum f_i u_i}{n}\\right) \\times h`,
      notesBn: `অনুমিত গড় a = ${assumedMeanA}, \\sum f_i u_i = ${sumFu}, n = ${totalN}, শ্রেণি ব্যাপ্তি h = ${h}। \\bar{x} = ${assumedMeanA} + \\left(\\frac{${sumFu}}{${totalN}}\\right) \\times ${h} = ${mean.toFixed(4)}।`,
    },
    {
      labelBn: 'মধ্যক শ্রেণি নির্ধারণ ও গণনা (Median)',
      labelEn: 'Median Class Determination & Formula',
      latex: `\\text{Median} = L + \\left(\\frac{\\frac{n}{2} - F_c}{f_m}\\right) \\times h`,
      notesBn: `n/2 = ${halfN}। সুতরাং মধ্যক শ্রেণি হলো ${medRow.lower} - ${medRow.upper} (যেখানে প্রথম ক্রমযোজিত গণসংখ্যা \u2265 ${halfN})। L = ${L_med}, F_c = ${Fc}, f_m = ${fm}, h = ${h}। মধ্যক = ${median.toFixed(4)}।`,
    },
    {
      labelBn: 'প্রচুরক শ্রেণি ও প্রচুরক গণনা (Mode)',
      labelEn: 'Modal Class & Formula',
      latex: `\\text{Mode} = L + \\left(\\frac{f_1}{f_1 + f_2}\\right) \\times h`,
      notesBn: `সর্বোচ্চ গণসংখ্যা ${f_modal} বিদ্যমান ${modalRow.lower} - ${modalRow.upper} শ্রেণিতে। f_1 = ${f_modal} - ${f_preceding} = ${f1}, f_2 = ${f_modal} - ${f_succeeding} = ${f2}। প্রচুরক = ${L_mod} + \\left(\\frac{${f1}}{${f1} + ${f2}}\\right) \\times ${h} = ${mode.toFixed(4)}।`,
    },
  ];

  return {
    success: true,
    table,
    totalN,
    assumedMeanA,
    classWidthH: h,
    mean: Number(mean.toFixed(4)),
    median: Number(median.toFixed(4)),
    medianClass: { lower: medRow.lower, upper: medRow.upper, L: L_med, Fc, fm },
    mode: Number(mode.toFixed(4)),
    modalClass: { lower: modalRow.lower, upper: modalRow.upper, L: L_mod, f1, f2, fm: f_modal },
    steps,
  };
}
