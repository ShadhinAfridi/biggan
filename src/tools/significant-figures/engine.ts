export interface SigFigAnalysis {
  rawInput: string;
  count: number;
  significantDigits: string;
  scientificNotation: string;
  rulesApplied: {
    ruleEn: string;
    ruleBn: string;
    passed: boolean;
  }[];
  decimalPlaces: number;
}

export interface ArithmeticResult {
  operation: 'add' | 'subtract' | 'multiply' | 'divide';
  num1: string;
  num2: string;
  rawResult: number;
  roundedResult: string;
  governingRuleEn: string;
  governingRuleBn: string;
  latexDerivation: string;
}

/**
 * Analyzes a single number string for significant figures.
 */
export function analyzeSigFigs(input: string): SigFigAnalysis {
  const clean = input.trim();
  if (!clean || isNaN(Number(clean))) {
    throw new Error('Please enter a valid numeric value (e.g., 0.00502, 104.50, 6.022e23).');
  }

  // Handle scientific notation e.g. 6.022e23 or 6.022E-4
  const sciMatch = clean.match(/^([+-]?\d*(?:\.\d*)?)[eE]([+-]?\d+)$/);
  let mantissa = clean;
  let exponent = 0;
  if (sciMatch) {
    mantissa = sciMatch[1];
    exponent = parseInt(sciMatch[2], 10);
  }

  const isNegative = mantissa.startsWith('-');
  const unsigned = mantissa.replace(/^[+-]/, '');
  const hasDecimal = unsigned.includes('.');

  const [intPart, decPart = ''] = unsigned.split('.');
  const decimalPlaces = hasDecimal ? decPart.length : 0;

  // Let's determine sig figs according to IUPAC / scientific rules:
  // 1. If decimal is present:
  //    - Leading zeros before the first non-zero digit are not significant.
  //    - All digits from the first non-zero digit to the end are significant.
  // 2. If no decimal:
  //    - Leading zeros are not significant.
  //    - Trailing zeros are ambiguous, conventionally not significant unless specified with decimal.
  let sigDigits = '';
  let count = 0;

  if (hasDecimal) {
    const combined = intPart + decPart;
    const firstNonZero = combined.search(/[1-9]/);
    if (firstNonZero === -1) {
      // e.g. 0.00 or 0.0 -> all zeros after decimal point
      count = decPart.length;
      sigDigits = decPart;
    } else {
      sigDigits = combined.slice(firstNonZero);
      count = sigDigits.length;
    }
  } else {
    // Integer without decimal
    const firstNonZero = intPart.search(/[1-9]/);
    if (firstNonZero === -1) {
      // Just 0
      count = 1;
      sigDigits = '0';
    } else {
      // Remove trailing zeros for standard conservative counting
      const trimmedTrailing = intPart.replace(/0+$/, '');
      sigDigits = trimmedTrailing.slice(firstNonZero);
      count = sigDigits.length;
    }
  }

  const numVal = Number(clean);
  let sciExp = 0;
  let sciMantissa = numVal;
  if (numVal !== 0) {
    sciExp = Math.floor(Math.log10(Math.abs(numVal)));
    sciMantissa = numVal / Math.pow(10, sciExp);
  }
  const scientificNotation = `${sciMantissa.toFixed(Math.max(0, count - 1))} \\times 10^{${sciExp}}`;

  const rulesApplied = [
    {
      ruleEn: 'All non-zero digits (1-9) are always significant.',
      ruleBn: 'সকল অশূন্য অঙ্ক (১-৯) সর্বদা তাৎপর্যপূর্ণ।',
      passed: /[1-9]/.test(unsigned),
    },
    {
      ruleEn: 'Captive zeros (zeros between non-zero digits) are significant.',
      ruleBn: 'দুটি অশূন্য অঙ্কের মধ্যবর্তী শূন্যসমূহ (Captive zeros) তাৎপর্যপূর্ণ।',
      passed: /[1-9]0+[1-9]/.test(unsigned.replace('.', '')),
    },
    {
      ruleEn: 'Leading zeros (zeros before the first non-zero digit) are NEVER significant.',
      ruleBn: 'বামপাশের শুরুর শূন্যসমূহ (Leading zeros) কখনই তাৎপর্যপূর্ণ নয়।',
      passed: /^0+/.test(unsigned) || /^0\./.test(unsigned),
    },
    {
      ruleEn: hasDecimal
        ? 'Trailing zeros in a decimal number ARE significant.'
        : 'Trailing zeros in a whole number without a decimal point are NOT significant (ambiguous).',
      ruleBn: hasDecimal
        ? 'দশমিকযুক্ত সংখ্যার ডানপাশের শেষ শূন্যসমূহ (Trailing zeros) তাৎপর্যপূর্ণ।'
        : 'দশমিকবিহীন পূর্ণসংখ্যার ডানপাশের শেষ শূন্যসমূহ সাধারণ নিয়মে তাৎপর্যপূর্ণ বিবেচনা করা হয় না।',
      passed: /0+$/.test(unsigned),
    },
  ];

  return {
    rawInput: clean,
    count,
    significantDigits: sigDigits,
    scientificNotation,
    rulesApplied,
    decimalPlaces,
  };
}

/**
 * Rounds a number to a specified number of significant figures.
 */
export function roundToSigFigs(num: number, sigFigs: number): string {
  if (num === 0) return '0';
  if (sigFigs <= 0) return num.toString();
  return Number(num.toPrecision(sigFigs)).toString();
}

/**
 * Performs precision-tracked arithmetic operations with governing rules.
 */
export function calculateSigFigArithmetic(
  op: 'add' | 'subtract' | 'multiply' | 'divide',
  val1: string,
  val2: string
): ArithmeticResult {
  const a1 = analyzeSigFigs(val1);
  const a2 = analyzeSigFigs(val2);

  const n1 = Number(val1);
  const n2 = Number(val2);
  let raw = 0;

  switch (op) {
    case 'add':
      raw = n1 + n2;
      break;
    case 'subtract':
      raw = n1 - n2;
      break;
    case 'multiply':
      raw = n1 * n2;
      break;
    case 'divide':
      if (n2 === 0) throw new Error('Division by zero is undefined.');
      raw = n1 / n2;
      break;
  }

  let rounded = '';
  let governingRuleEn = '';
  let governingRuleBn = '';
  let latex = '';

  if (op === 'add' || op === 'subtract') {
    // Addition/Subtraction Rule: Least number of decimal places
    const minDec = Math.min(a1.decimalPlaces, a2.decimalPlaces);
    rounded = raw.toFixed(minDec);
    governingRuleEn = `Addition/Subtraction Rule: Result is rounded to ${minDec} decimal place(s) (limited by the operand with fewest decimals: ${a1.decimalPlaces < a2.decimalPlaces ? val1 : val2}).`;
    governingRuleBn = `যোগ/বিয়োগের নিয়ম: ফলাফলটি সবচেয়ে কম দশমিক স্থান বিশিষ্ট সংখ্যার সাথে সমতা বজায় রেখে ${minDec} ঘর দশমিকে আসন্ন করা হয়েছে।`;
    const symbol = op === 'add' ? '+' : '-';
    latex = `${val1} ${symbol} ${val2} = ${raw} \\approx \\mathbf{${rounded}}`;
  } else {
    // Multiplication/Division Rule: Least number of significant figures
    const minSig = Math.min(a1.count, a2.count);
    rounded = roundToSigFigs(raw, minSig);
    governingRuleEn = `Multiplication/Division Rule: Result is rounded to ${minSig} significant figure(s) (limited by the operand with fewest sig figs: ${a1.count < a2.count ? val1 : val2}).`;
    governingRuleBn = `গুণ/ভাগের নিয়ম: ফলাফলটি সবচেয়ে কম তাৎপর্যপূর্ণ অঙ্ক বিশিষ্ট ইনপুটের নিয়মানুযায়ী ${minSig}টি তাৎপর্যপূর্ণ অঙ্কে আসন্ন করা হয়েছে।`;
    const symbol = op === 'multiply' ? '\\times' : '\\div';
    latex = `${val1} ${symbol} ${val2} = ${raw} \\approx \\mathbf{${rounded}}`;
  }

  return {
    operation: op,
    num1: val1,
    num2: val2,
    rawResult: raw,
    roundedResult: rounded,
    governingRuleEn,
    governingRuleBn,
    latexDerivation: latex,
  };
}
