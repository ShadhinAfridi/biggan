/**
 * NCTB SSC Higher Mathematics Calculation Engine
 * Deterministic mathematical solvers with KaTeX step-by-step proofs and bilingual explanations.
 */

// Greatest Common Divisor helper
export function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

// Factorial helper
export function factorial(n: number): number {
  if (n < 0) return 0;
  if (n === 0 || n === 1) return 1;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

// Combination nCr
export function combination(n: number, r: number): number {
  if (r < 0 || r > n) return 0;
  return Math.round(factorial(n) / (factorial(r) * factorial(n - r)));
}

// --- CHAPTER 1: SETS AND FUNCTIONS ---
export interface VennResult {
  union: number;
  onlyA: number;
  onlyB: number;
  onlyC: number;
  onlyAB: number;
  onlyBC: number;
  onlyCA: number;
  onlyABC: number;
  stepsLatex: string;
}

export function solveThreeSetVenn(
  nA: number,
  nB: number,
  nC: number,
  nAB: number,
  nBC: number,
  nCA: number,
  nABC: number
): VennResult {
  const union = nA + nB + nC - nAB - nBC - nCA + nABC;
  const onlyAB = nAB - nABC;
  const onlyBC = nBC - nABC;
  const onlyCA = nCA - nABC;
  const onlyA = nA - onlyAB - onlyCA - nABC;
  const onlyB = nB - onlyAB - onlyBC - nABC;
  const onlyC = nC - onlyCA - onlyBC - nABC;

  const stepsLatex = `\\begin{aligned}
n(A \\cup B \\cup C) &= n(A) + n(B) + n(C) - n(A \\cap B) - n(B \\cap C) - n(C \\cap A) + n(A \\cap B \\cap C) \\\\[4pt]
&= ${nA} + ${nB} + ${nC} - ${nAB} - ${nBC} - ${nCA} + ${nABC} \\\\[4pt]
&= \\mathbf{${union}} \\\\[6pt]
\\text{শুধুমাত্র A} &= n(A) - n(A \\cap B) - n(C \\cap A) + n(A \\cap B \\cap C) = \\mathbf{${onlyA}} \\\\[4pt]
\\text{শুধুমাত্র B} &= n(B) - n(A \\cap B) - n(B \\cap C) + n(A \\cap B \\cap C) = \\mathbf{${onlyB}} \\\\[4pt]
\\text{শুধুমাত্র C} &= n(C) - n(C \\cap A) - n(B \\cap C) + n(A \\cap B \\cap C) = \\mathbf{${onlyC}}
\\end{aligned}`;

  return {
    union,
    onlyA,
    onlyB,
    onlyC,
    onlyAB,
    onlyBC,
    onlyCA,
    onlyABC: nABC,
    stepsLatex,
  };
}

export interface FractionalInverseResult {
  formulaLatex: string;
  inverseLatex: string;
  domainExclusion: string;
  rangeExclusion: string;
  stepsLatex: string;
}

export function solveFractionalInverse(a: number, b: number, c: number, d: number): FractionalInverseResult {
  if (c === 0 && d === 0) throw new Error('Denominator cannot be zero.');

  const domainExclusion = c !== 0 ? `x \\ne ${(-d / c).toFixed(2)}` : 'সকল বাস্তব সংখ্যা \\mathbb{R}';
  const rangeExclusion = c !== 0 ? `y \\ne ${(a / c).toFixed(2)}` : 'সকল বাস্তব সংখ্যা \\mathbb{R}';

  const formatSign = (val: number, isConst = false) => {
    if (isConst) {
      return val >= 0 ? `+ ${val}` : `- ${Math.abs(val)}`;
    }
    return val === 1 ? '' : val === -1 ? '-' : `${val}`;
  };

  const origNum = `${formatSign(a)}x ${formatSign(b, true)}`;
  const origDen = `${formatSign(c)}x ${formatSign(d, true)}`;
  const invNum = `${formatSign(-d)}x ${formatSign(b, true)}`;
  const invDen = `${formatSign(c)}x ${formatSign(-a, true)}`;

  const formulaLatex = `f(x) = \\frac{${origNum}}{${origDen}}`;
  const inverseLatex = `f^{-1}(x) = \\frac{${invNum}}{${invDen}}`;

  const stepsLatex = `\\begin{aligned}
\\text{ধরি, } y &= f(x) = \\frac{${origNum}}{${origDen}} \\\\[4pt]
\\implies y(${origDen}) &= ${origNum} \\\\[4pt]
\\implies ${c}xy + ${d}y &= ${a}x + ${b} \\\\[4pt]
\\implies x(${c}y - ${a}) &= -${d}y + ${b} \\\\[4pt]
\\implies x &= \\frac{-${d}y + ${b}}{${c}y - ${a}} \\\\[6pt]
\\therefore f^{-1}(x) &= \\mathbf{\\frac{${invNum}}{${invDen}}}
\\end{aligned}`;

  return {
    formulaLatex,
    inverseLatex,
    domainExclusion,
    rangeExclusion,
    stepsLatex,
  };
}

// --- CHAPTER 2: ALGEBRAIC EXPRESSIONS ---
export interface RemainderResult {
  remainder: number;
  isFactor: boolean;
  stepsLatex: string;
}

export function evaluateRemainderTheorem(coeffs: number[], a: number): RemainderResult {
  const deg = coeffs.length - 1;
  let remainder = 0;
  const termsLatex: string[] = [];

  coeffs.forEach((c, idx) => {
    const power = deg - idx;
    const termVal = c * Math.pow(a, power);
    remainder += termVal;
    if (power > 1) {
      termsLatex.push(`${c}(${a})^{${power}}`);
    } else if (power === 1) {
      termsLatex.push(`${c}(${a})`);
    } else {
      termsLatex.push(`${c}`);
    }
  });

  const isFactor = Math.abs(remainder) < 1e-9;
  const stepsLatex = `\\begin{aligned}
P(x) \\text{ কে } (x - ${a}) \\text{ দ্বারা ভাগ করলে ভাগশেষ } R &= P(${a}) \\\\[4pt]
&= ${termsLatex.join(' + ')} \\\\[4pt]
&= \\mathbf{${remainder}}
\\end{aligned}`;

  return {
    remainder,
    isFactor,
    stepsLatex,
  };
}

export interface CyclicCubicResult {
  value: number;
  isSumZero: boolean;
  halfDiffFormVal: number;
  stepsLatex: string;
}

export function solveCyclicCubic(a: number, b: number, c: number): CyclicCubicResult {
  const sum = a + b + c;
  const isSumZero = Math.abs(sum) < 1e-9;
  const value = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3) - 3 * a * b * c;
  const halfDiffFormVal = 0.5 * sum * (Math.pow(a - b, 2) + Math.pow(b - c, 2) + Math.pow(c - a, 2));

  const stepsLatex = `\\begin{aligned}
a^3 + b^3 + c^3 - 3abc &= \\frac{1}{2}(a+b+c)[(a-b)^2 + (b-c)^2 + (c-a)^2] \\\\[4pt]
&= \\frac{1}{2}(${a} + ${b} + ${c})[(${a}-${b})^2 + (${b}-${c})^2 + (${c}-${a})^2] \\\\[4pt]
&= \\frac{1}{2}(${sum})[${Math.pow(a-b, 2)} + ${Math.pow(b-c, 2)} + ${Math.pow(c-a, 2)}] \\\\[4pt]
&= \\mathbf{${value}}
\\end{aligned}`;

  return {
    value,
    isSumZero,
    halfDiffFormVal,
    stepsLatex,
  };
}

// --- CHAPTER 3: GEOMETRY (APOLLONIUS THEOREM) ---
export interface ApolloniusResult {
  sideA: number;
  sideB: number;
  sideC: number;
  medianA: number;
  medianB: number;
  medianC: number;
  sidesSumSqTimes3: number;
  mediansSumSqTimes4: number;
  stepsLatex: string;
}

export function solveApollonius(a: number, b: number, c: number): ApolloniusResult {
  if (a + b <= c || b + c <= a || c + a <= b) {
    throw new Error('Invalid triangle: Sum of any two sides must exceed the third side.');
  }

  const medSqA = (2 * Math.pow(b, 2) + 2 * Math.pow(c, 2) - Math.pow(a, 2)) / 4.0;
  const medSqB = (2 * Math.pow(c, 2) + 2 * Math.pow(a, 2) - Math.pow(b, 2)) / 4.0;
  const medSqC = (2 * Math.pow(a, 2) + 2 * Math.pow(b, 2) - Math.pow(c, 2)) / 4.0;

  const medianA = Number(Math.sqrt(medSqA).toFixed(3));
  const medianB = Number(Math.sqrt(medSqB).toFixed(3));
  const medianC = Number(Math.sqrt(medSqC).toFixed(3));

  const sidesSumSqTimes3 = Number((3 * (a * a + b * b + c * c)).toFixed(2));
  const mediansSumSqTimes4 = Number((4 * (medSqA + medSqB + medSqC)).toFixed(2));

  const stepsLatex = `\\begin{aligned}
\\text{এ্যাপোলোনিয়াসের উপপাদ্য:} &\\quad b^2 + c^2 = 2\\left(d_a^2 + \\left(\\frac{a}{2}\\right)^2\\right) \\\\[4pt]
d_a^2 &= \\frac{2b^2 + 2c^2 - a^2}{4} = \\frac{2(${b})^2 + 2(${c})^2 - (${a})^2}{4} \\\\[4pt]
&= \\frac{${2 * b * b} + ${2 * c * c} - ${a * a}}{4} = ${medSqA.toFixed(3)} \\\\[4pt]
\\therefore d_a &= \\mathbf{${medianA}\\text{ একক}} \\\\[6pt]
\\text{বাহু ও মধ্যমার সম্পর্ক যাচাই:} &\\quad 3(a^2 + b^2 + c^2) = 4(d_a^2 + d_b^2 + d_c^2) = \\mathbf{${sidesSumSqTimes3}}
\\end{aligned}`;

  return {
    sideA: a,
    sideB: b,
    sideC: c,
    medianA,
    medianB,
    medianC,
    sidesSumSqTimes3,
    mediansSumSqTimes4,
    stepsLatex,
  };
}

// --- CHAPTER 5: QUADRATIC EQUATIONS ---
export interface QuadraticResult {
  discriminant: number;
  natureBn: string;
  natureEn: string;
  rootsDisplay: string;
  stepsLatex: string;
}

export function solveQuadratic(a: number, b: number, c: number): QuadraticResult {
  if (a === 0) throw new Error('Coefficient "a" cannot be 0 in a quadratic equation.');

  const d = b * b - 4 * a * c;
  let natureBn = '';
  let natureEn = '';
  let rootsDisplay = '';

  if (d > 0) {
    const sqrtD = Math.sqrt(d);
    const r1 = Number(((-b + sqrtD) / (2 * a)).toFixed(4));
    const r2 = Number(((-b - sqrtD) / (2 * a)).toFixed(4));
    natureBn = 'বাস্তব, অসমান এবং মূলদ (যদি D পূর্ণবর্গ হয়) বা অমূলদ';
    natureEn = 'Real, distinct, and rational/irrational';
    rootsDisplay = `x₁ = ${r1}, x₂ = ${r2}`;
  } else if (d === 0) {
    const r = Number((-b / (2 * a)).toFixed(4));
    natureBn = 'বাস্তব ও সমান';
    natureEn = 'Real and equal';
    rootsDisplay = `x₁ = x₂ = ${r}`;
  } else {
    const real = Number((-b / (2 * a)).toFixed(4));
    const imag = Number((Math.sqrt(-d) / (2 * a)).toFixed(4));
    natureBn = 'জটিল/অবাস্তব অনুবন্ধী যুগল';
    natureEn = 'Complex conjugate roots';
    rootsDisplay = `x = ${real} ± ${imag}i`;
  }

  const stepsLatex = `\\begin{aligned}
ax^2 + bx + c &= 0 \\implies (${a})x^2 + (${b})x + (${c}) = 0 \\\\[4pt]
\\text{নিশ্চায়ক } D &= b^2 - 4ac = (${b})^2 - 4(${a})(${c}) = \\mathbf{${d}} \\\\[4pt]
x &= \\frac{-b \\pm \\sqrt{D}}{2a} = \\frac{-(${b}) \\pm \\sqrt{${d}}}{2(${a})} \\\\[4pt]
&= \\mathbf{${rootsDisplay}}
\\end{aligned}`;

  return {
    discriminant: d,
    natureBn,
    natureEn,
    rootsDisplay,
    stepsLatex,
  };
}

// --- CHAPTER 6: LINEAR INEQUALITIES ---
export interface InequalityResult {
  boundary: number;
  interval: string;
  relation: string;
  stepsLatex: string;
}

export function solveLinearInequality(a: number, b: number, c: number): InequalityResult {
  if (a === 0) {
    const valid = b <= c;
    return {
      boundary: 0,
      interval: valid ? '(-∞, ∞)' : 'Ø (ফাঁকা সেট)',
      relation: valid ? 'সর্বদা সত্য' : 'অসম্ভব',
      stepsLatex: `b \\le c \\implies ${b} \\le ${c}`,
    };
  }

  const boundary = Number(((c - b) / a).toFixed(3));
  let interval = '';
  let relation = '';

  if (a > 0) {
    relation = 'x \\le';
    interval = `(-\\infty, ${boundary}]`;
  } else {
    relation = 'x \\ge';
    interval = `[${boundary}, \\infty)`;
  }

  const stepsLatex = `\\begin{aligned}
${a}x + ${b} &\\le ${c} \\\\[4pt]
\\implies ${a}x &\\le ${c} - (${b}) = ${c - b} \\\\[4pt]
\\implies x &${relation} \\frac{${c - b}}{${a}} = \\mathbf{${boundary}} \\\\[4pt]
\\text{সমাধান সেট ব্যবধী} &: \\mathbf{${interval}}
\\end{aligned}`;

  return {
    boundary,
    interval,
    relation,
    stepsLatex,
  };
}

// --- CHAPTER 7: INFINITE SERIES & RECURRING DECIMALS ---
export interface GeometricSeriesResult {
  hasSum: boolean;
  sum: number | null;
  ratio: number;
  stepsLatex: string;
}

export function solveInfiniteGeometricSum(a: number, r: number): GeometricSeriesResult {
  const hasSum = Math.abs(r) < 1;
  const sum = hasSum ? Number((a / (1 - r)).toFixed(4)) : null;

  const stepsLatex = hasSum
    ? `\\begin{aligned}
S_{\\infty} &= \\frac{a}{1 - r} \\quad (|r| = |${r}| < 1) \\\\[4pt]
&= \\frac{${a}}{1 - (${r})} = \\frac{${a}}{${(1 - r).toFixed(4)}} = \\mathbf{${sum}}
\\end{aligned}`
    : `\\begin{aligned}
|r| = |${r}| \\ge 1 \\implies \\text{ধারাটির কোনো অসীমতক সমষ্টি নেই (Divergent Series)}
\\end{aligned}`;

  return {
    hasSum,
    sum,
    ratio: r,
    stepsLatex,
  };
}

export interface RecurringDecimalResult {
  fraction: string;
  numerator: number;
  denominator: number;
  floatVal: number;
  stepsLatex: string;
}

export function convertRecurringDecimal(
  whole: number,
  nonRecurStr: string,
  recurStr: string
): RecurringDecimalResult {
  const fullStr = `${whole}${nonRecurStr}${recurStr}`;
  const nonRecurFull = `${whole}${nonRecurStr}`;

  const num = parseInt(fullStr) - (nonRecurFull ? parseInt(nonRecurFull) : 0);
  const den = parseInt('9'.repeat(recurStr.length) + '0'.repeat(nonRecurStr.length));
  const g = gcd(num, den);

  const reducedNum = num / g;
  const reducedDen = den / g;
  const fraction = `${reducedNum} / ${reducedDen}`;
  const floatVal = Number((num / den).toFixed(6));

  const stepsLatex = `\\begin{aligned}
\\text{সংখ্যার মান} &= ${whole}.${nonRecurStr}\\dot{${recurStr}} \\\\[4pt]
\\text{ভগ্নাংশ রূপান্তর} &= \\frac{\\text{সম্পূর্ণ সংখ্যা} - \\text{অনাবৃত্ত অংশ}}{9\\dots90\\dots0} \\\\[4pt]
&= \\frac{${fullStr} - ${nonRecurFull || 0}}{${den}} = \\frac{${num}}{${den}} = \\mathbf{\\frac{${reducedNum}}{${reducedDen}}}
\\end{aligned}`;

  return {
    fraction,
    numerator: reducedNum,
    denominator: reducedDen,
    floatVal,
    stepsLatex,
  };
}

// --- CHAPTER 8: TRIGONOMETRY (CIRCULAR MEASURE) ---
export interface ArcSectorResult {
  thetaRad: number;
  arcLength: number;
  sectorArea: number;
  stepsLatex: string;
}

export function solveArcSector(r: number, thetaDeg: number): ArcSectorResult {
  const thetaRad = (thetaDeg * Math.PI) / 180.0;
  const arcLength = Number((r * thetaRad).toFixed(3));
  const sectorArea = Number((0.5 * r * r * thetaRad).toFixed(3));

  const stepsLatex = `\\begin{aligned}
\\theta \\text{ (রেডিয়ানে)} &= ${thetaDeg}^\\circ \\times \\frac{\\pi}{180^\\circ} = ${thetaRad.toFixed(4)}\\text{ rad} \\\\[4pt]
\\text{বৃত্তচাপের দৈর্ঘ্য } s &= r\\theta = (${r})(${thetaRad.toFixed(4)}) = \\mathbf{${arcLength}\\text{ একক}} \\\\[4pt]
\\text{বৃত্তকলার ক্ষেত্রফল } A &= \\frac{1}{2}r^2\\theta = \\frac{1}{2}(${r})^2(${thetaRad.toFixed(4)}) = \\mathbf{${sectorArea}\\text{ বর্গ একক}}
\\end{aligned}`;

  return {
    thetaRad: Number(thetaRad.toFixed(4)),
    arcLength,
    sectorArea,
    stepsLatex,
  };
}

// --- CHAPTER 9: LOGARITHMIC FUNCTIONS ---
export interface LogResult {
  base: number;
  x: number;
  value: number;
  stepsLatex: string;
}

export function solveLog(base: number, x: number): LogResult {
  if (x <= 0 || base <= 0 || base === 1) {
    throw new Error('Invalid logarithm arguments (base > 0, base != 1, x > 0).');
  }

  const val = Number((Math.log(x) / Math.log(base)).toFixed(4));
  const stepsLatex = `\\begin{aligned}
\\log_{${base}}(${x}) &= \\frac{\\ln(${x})}{\\ln(${base})} = \\mathbf{${val}}
\\end{aligned}`;

  return {
    base,
    x,
    value: val,
    stepsLatex,
  };
}

// --- CHAPTER 10: BINOMIAL EXPANSIONS ---
export interface BinomialTerm {
  index: number;
  coeff: number;
  powerA: number;
  powerB: number;
  termLatex: string;
}

export interface BinomialResult {
  n: number;
  terms: BinomialTerm[];
  stepsLatex: string;
}

export function expandBinomial(coeffA: number, coeffB: number, n: number): BinomialResult {
  if (n < 0 || n > 12) throw new Error('Power "n" must be between 0 and 12 for clean expansion.');

  const terms: BinomialTerm[] = [];
  const termLatexList: string[] = [];

  for (let r = 0; r <= n; r++) {
    const c = combination(n, r);
    const fullCoeff = c * Math.pow(coeffA, n - r) * Math.pow(coeffB, r);
    const pA = n - r;
    const pB = r;

    let termStr = `${fullCoeff}`;
    if (pA > 0) termStr += pA === 1 ? 'x' : `x^{${pA}}`;
    if (pB > 0) termStr += pB === 1 ? 'y' : `y^{${pB}}`;

    terms.push({
      index: r + 1,
      coeff: fullCoeff,
      powerA: pA,
      powerB: pB,
      termLatex: termStr,
    });
    termLatexList.push(termStr);
  }

  const stepsLatex = `\\begin{aligned}
(${coeffA}x + ${coeffB}y)^{${n}} &= \\sum_{r=0}^{${n}} \\binom{${n}}{r} (${coeffA}x)^{${n}-r} (${coeffB}y)^r \\\\[4pt]
&= ${termLatexList.join(' + ')}
\\end{aligned}`;

  return {
    n,
    terms,
    stepsLatex,
  };
}

// --- CHAPTER 11: COORDINATE GEOMETRY ---
export interface PolygonAreaResult {
  area: number;
  vertices: [number, number][];
  stepsLatex: string;
}

export function solvePolygonArea(vertices: [number, number][]): PolygonAreaResult {
  const n = vertices.length;
  if (n < 3) throw new Error('At least 3 vertices required to form a polygon.');

  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < n; i++) {
    const next = (i + 1) % n;
    sum1 += vertices[i][0] * vertices[next][1];
    sum2 += vertices[i][1] * vertices[next][0];
  }

  const area = Number((0.5 * Math.abs(sum1 - sum2)).toFixed(3));

  const stepsLatex = `\\begin{aligned}
\\text{Shoelace ক্ষেত্রফল সূত্র:} &\\quad \\Delta = \\frac{1}{2} |(x_1y_2 + x_2y_3 + \\dots) - (y_1x_2 + y_2x_3 + \\dots)| \\\\[4pt]
&= \\frac{1}{2} |(${sum1}) - (${sum2})| = \\frac{1}{2} |${sum1 - sum2}| = \\mathbf{${area}\\text{ বর্গ একক}}
\\end{aligned}`;

  return {
    area,
    vertices,
    stepsLatex,
  };
}

export interface LinePropertiesResult {
  distance: number;
  slope: number | null;
  equation: string;
  stepsLatex: string;
}

export function solveCoordinateLine(x1: number, y1: number, x2: number, y2: number): LinePropertiesResult {
  const distance = Number(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(3));

  if (x1 === x2) {
    return {
      distance,
      slope: null,
      equation: `x = ${x1}`,
      stepsLatex: `\\begin{aligned}
d &= \\sqrt{(${x2}-${x1})^2 + (${y2}-${y1})^2} = \\mathbf{${distance}} \\\\[4pt]
x_1 &= x_2 = ${x1} \\implies \\text{উল্লম্ব রেখা (ঢাল অসংজ্ঞায়িত)}, \\quad x = ${x1}
\\end{aligned}`,
    };
  }

  const m = Number(((y2 - y1) / (x2 - x1)).toFixed(3));
  const c = Number((y1 - m * x1).toFixed(3));
  const equation = c >= 0 ? `y = ${m}x + ${c}` : `y = ${m}x - ${Math.abs(c)}`;

  const stepsLatex = `\\begin{aligned}
d &= \\sqrt{(${x2}-${x1})^2 + (${y2}-${y1})^2} = \\mathbf{${distance}\\text{ একক}} \\\\[4pt]
m &= \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{${y2} - ${y1}}{${x2} - ${x1}} = \\mathbf{${m}} \\\\[4pt]
\\text{সমীকরণ:} &\\quad y - y_1 = m(x - x_1) \\implies \\mathbf{${equation}}
\\end{aligned}`;

  return {
    distance,
    slope: m,
    equation,
    stepsLatex,
  };
}

// --- CHAPTER 12: PLANAR VECTORS ---
export interface VectorResult {
  x: number;
  y: number;
  magnitude: number;
  directionDeg: number;
  directionRad: number;
  stepsLatex: string;
}

export function solveVector(x: number, y: number): VectorResult {
  const magnitude = Number(Math.sqrt(x * x + y * y).toFixed(3));
  const directionRad = Math.atan2(y, x);
  let directionDeg = (directionRad * 180.0) / Math.PI;
  if (directionDeg < 0) directionDeg += 360;
  directionDeg = Number(directionDeg.toFixed(2));

  const stepsLatex = `\\begin{aligned}
|\\vec{v}| &= \\sqrt{x^2 + y^2} = \\sqrt{(${x})^2 + (${y})^2} = \\mathbf{${magnitude}\\text{ একক}} \\\\[4pt]
\\theta &= \\tan^{-1}\\left(\\frac{y}{x}\\right) = \\tan^{-1}\\left(\\frac{${y}}{${x}}\\right) = \\mathbf{${directionDeg}^\\circ}
\\end{aligned}`;

  return {
    x,
    y,
    magnitude,
    directionDeg,
    directionRad: Number(directionRad.toFixed(4)),
    stepsLatex,
  };
}

// --- CHAPTER 13: SOLID GEOMETRY ---
export interface SolidResult {
  shape: 'cone' | 'cylinder' | 'sphere';
  volume: number;
  curvedSurface?: number;
  totalSurface: number;
  slantHeight?: number;
  stepsLatex: string;
}

export function solveSolidGeometry(shape: 'cone' | 'cylinder' | 'sphere', r: number, h = 0): SolidResult {
  if (r <= 0 || (shape !== 'sphere' && h <= 0)) {
    throw new Error('Dimensions must be positive.');
  }

  if (shape === 'cone') {
    const l = Number(Math.sqrt(r * r + h * h).toFixed(3));
    const vol = Number(((1.0 / 3.0) * Math.PI * r * r * h).toFixed(3));
    const curved = Number((Math.PI * r * l).toFixed(3));
    const total = Number((Math.PI * r * (r + l)).toFixed(3));

    const stepsLatex = `\\begin{aligned}
\\text{হেলানো উচ্চতা } l &= \\sqrt{r^2 + h^2} = \\sqrt{${r}^2 + ${h}^2} = \\mathbf{${l}\\text{ একক}} \\\\[4pt]
\\text{আয়তন } V &= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (${r})^2 (${h}) = \\mathbf{${vol}\\text{ ঘন একক}} \\\\[4pt]
\\text{বক্রতল } A_{\\text{curved}} &= \\pi r l = \\pi (${r})(${l}) = \\mathbf{${curved}\\text{ বর্গ একক}} \\\\[4pt]
\\text{সমগ্রতল } A_{\\text{total}} &= \\pi r(r + l) = \\mathbf{${total}\\text{ বর্গ একক}}
\\end{aligned}`;

    return { shape, volume: vol, curvedSurface: curved, totalSurface: total, slantHeight: l, stepsLatex };
  } else if (shape === 'cylinder') {
    const vol = Number((Math.PI * r * r * h).toFixed(3));
    const curved = Number((2 * Math.PI * r * h).toFixed(3));
    const total = Number((2 * Math.PI * r * (r + h)).toFixed(3));

    const stepsLatex = `\\begin{aligned}
\\text{আয়তন } V &= \\pi r^2 h = \\pi (${r})^2 (${h}) = \\mathbf{${vol}\\text{ ঘন একক}} \\\\[4pt]
\\text{বক্রতল } A_{\\text{curved}} &= 2\\pi r h = 2\\pi (${r})(${h}) = \\mathbf{${curved}\\text{ বর্গ একক}} \\\\[4pt]
\\text{সমগ্রতল } A_{\\text{total}} &= 2\\pi r(r + h) = \\mathbf{${total}\\text{ বর্গ একক}}
\\end{aligned}`;

    return { shape, volume: vol, curvedSurface: curved, totalSurface: total, stepsLatex };
  } else {
    const vol = Number(((4.0 / 3.0) * Math.PI * Math.pow(r, 3)).toFixed(3));
    const total = Number((4 * Math.PI * r * r).toFixed(3));

    const stepsLatex = `\\begin{aligned}
\\text{আয়তন } V &= \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (${r})^3 = \\mathbf{${vol}\\text{ ঘন একক}} \\\\[4pt]
\\text{পৃষ্ঠতলের ক্ষেত্রফল } A &= 4\\pi r^2 = 4\\pi (${r})^2 = \\mathbf{${total}\\text{ বর্গ একক}}
\\end{aligned}`;

    return { shape, volume: vol, totalSurface: total, stepsLatex };
  }
}

// --- CHAPTER 14: PROBABILITY ---
export interface ProbabilityResult {
  favorable: number;
  total: number;
  probability: number;
  percentage: number;
  oddsAgainst: string;
  stepsLatex: string;
}

export function solveProbability(favorable: number, total: number): ProbabilityResult {
  if (total <= 0 || favorable < 0 || favorable > total) {
    throw new Error('Favorable outcomes must be between 0 and total outcomes (total > 0).');
  }

  const p = Number((favorable / total).toFixed(4));
  const percentage = Number((p * 100).toFixed(2));
  const g = gcd(favorable, total);
  const frac = `${favorable / g} / ${total / g}`;
  const oddsAgainst = `${total - favorable} : ${favorable}`;

  const stepsLatex = `\\begin{aligned}
P(E) &= \\frac{n(E)}{n(S)} = \\frac{\\text{অনুকূল ফলাফল (${favorable})}}{\\text{মোট ফলাফল (${total})}} \\\\[4pt]
&= \\mathbf{\\frac{${favorable / g}}{${total / g}} = ${p} \\; (${percentage}\\%)}
\\end{aligned}`;

  return {
    favorable,
    total,
    probability: p,
    percentage,
    oddsAgainst,
    stepsLatex,
  };
}
