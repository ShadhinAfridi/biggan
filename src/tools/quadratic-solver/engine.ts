export type RootType = 'real_distinct' | 'real_repeated' | 'complex';

export interface QuadraticResult {
  a: number;
  b: number;
  c: number;
  discriminant: number;
  rootType: RootType;
  rootsDisplayLatex: string;
  x1: { real: number; imag: number };
  x2: { real: number; imag: number };
  vertex: { h: number; k: number };
  axisOfSymmetry: number;
  latexSteps: {
    titleEn: string;
    titleBn: string;
    latex: string;
  }[];
  completingTheSquareSteps: {
    titleEn: string;
    titleBn: string;
    latex: string;
  }[];
}

export function solveQuadratic(aInput: number, bInput: number, cInput: number): QuadraticResult {
  const a = Number(aInput);
  const b = Number(bInput);
  const c = Number(cInput);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    throw new Error('Please enter valid numerical coefficients a, b, and c.');
  }
  if (a === 0) {
    throw new Error('Coefficient "a" cannot be 0 in a quadratic equation (ax² + bx + c = 0).');
  }

  const D = b * b - 4 * a * c;
  const h = -b / (2 * a);
  const k = c - (b * b) / (4 * a);

  let rootType: RootType = 'real_distinct';
  let x1 = { real: 0, imag: 0 };
  let x2 = { real: 0, imag: 0 };
  let rootsDisplayLatex = '';

  if (Math.abs(D) < 1e-12) {
    rootType = 'real_repeated';
    const root = -b / (2 * a);
    x1 = { real: root, imag: 0 };
    x2 = { real: root, imag: 0 };
    rootsDisplayLatex = `x_1 = x_2 = ${root.toFixed(4).replace(/\.?0+$/, '')}`;
  } else if (D > 0) {
    rootType = 'real_distinct';
    const sqrtD = Math.sqrt(D);
    const r1 = (-b + sqrtD) / (2 * a);
    const r2 = (-b - sqrtD) / (2 * a);
    x1 = { real: r1, imag: 0 };
    x2 = { real: r2, imag: 0 };
    rootsDisplayLatex = `x_1 = ${r1.toFixed(4).replace(/\.?0+$/, '')}, \\quad x_2 = ${r2.toFixed(4).replace(/\.?0+$/, '')}`;
  } else {
    rootType = 'complex';
    const realPart = -b / (2 * a);
    const imagPart = Math.sqrt(-D) / (2 * Math.abs(a));
    x1 = { real: realPart, imag: imagPart };
    x2 = { real: realPart, imag: -imagPart };
    const realStr = realPart.toFixed(4).replace(/\.?0+$/, '');
    const imagStr = imagPart.toFixed(4).replace(/\.?0+$/, '');
    rootsDisplayLatex = `x = ${realStr} \\pm ${imagStr}i`;
  }

  // Formula Substitution Steps
  const latexSteps = [
    {
      titleEn: '1. Standard Form Identification',
      titleBn: '১. আদর্শ দ্বিঘাত সমীকরণ চিহ্নিতকরণ',
      latex: `${a}x^2 ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c} = 0 \\implies a = ${a}, \\; b = ${b}, \\; c = ${c}`,
    },
    {
      titleEn: '2. Discriminant (নিশ্চায়ক / পৃথায়ক) Calculation',
      titleBn: '২. পৃথায়ক বা নিশ্চয়ক (D) নির্ণয়',
      latex: `D = b^2 - 4ac = (${b})^2 - 4(${a})(${c}) = ${b * b} - ${4 * a * c} = ${D}`,
    },
    {
      titleEn: '3. Nature of Roots (মূলের প্রকৃতি)',
      titleBn: '৩. নিশ্চয়কের আলোকে মূলের প্রকৃতি নির্ধারণ',
      latex:
        D > 0
          ? `D = ${D} > 0 \\implies \\text{মূলদ্বয় বাস্তব ও অসমান (Real and distinct)}`
          : D === 0
            ? `D = 0 \\implies \\text{মূলদ্বয় বাস্তব ও পরস্পর সমান (Real and equal)}`
            : `D = ${D} < 0 \\implies \\text{মূলদ্বয় অবাস্তব/জটিল অনুবন্ধী (Complex conjugates)}`,
    },
    {
      titleEn: '4. Quadratic Formula Application',
      titleBn: '৪. দ্বিঘাত সূত্রের প্রয়োগ',
      latex: `x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{-(${b}) \\pm \\sqrt{${D}}}{2(${a})} = ${rootsDisplayLatex}`,
    },
  ];

  // Completing the Square Steps
  const bDivA = b / a;
  const cDivA = c / a;
  const halfB = bDivA / 2;
  const halfBSq = halfB * halfB;
  const rhs = halfBSq - cDivA;

  const completingTheSquareSteps = [
    {
      titleEn: 'Divide entire equation by "a"',
      titleBn: 'উভয়পক্ষকে a দ্বারা ভাগ করি',
      latex: `x^2 + \\left(${bDivA.toFixed(2)}\\right)x + \\left(${cDivA.toFixed(2)}\\right) = 0`,
    },
    {
      titleEn: 'Move constant term to the right-hand side',
      titleBn: 'ধ্রুবক পদটিকে ডানপাশে স্থানান্তর করি',
      latex: `x^2 + \\left(${bDivA.toFixed(2)}\\right)x = ${(-cDivA).toFixed(2)}`,
    },
    {
      titleEn: 'Add (b / 2a)² to both sides to complete the perfect square',
      titleBn: 'পূর্ণবর্গ তৈরিতে উভয়পাশে (b/2a)² যোগ করি',
      latex: `\\left(x + ${halfB.toFixed(2)}\\right)^2 = ${rhs.toFixed(2)}`,
    },
    {
      titleEn: 'Take square root of both sides and isolate x',
      titleBn: 'বর্গমূল করে x এর মান নির্ণয় করি',
      latex: `x + ${halfB.toFixed(2)} = \\pm\\sqrt{${rhs.toFixed(2)}} \\implies ${rootsDisplayLatex}`,
    },
  ];

  return {
    a,
    b,
    c,
    discriminant: D,
    rootType,
    rootsDisplayLatex,
    x1,
    x2,
    vertex: { h: Number(h.toFixed(3)), k: Number(k.toFixed(3)) },
    axisOfSymmetry: Number(h.toFixed(3)),
    latexSteps,
    completingTheSquareSteps,
  };
}
