export type LogicGateType = 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR' | 'XNOR';

export function evaluateGate(type: LogicGateType, a: boolean, b: boolean = false): boolean {
  switch (type) {
    case 'AND':
      return a && b;
    case 'OR':
      return a || b;
    case 'NOT':
      return !a;
    case 'NAND':
      return !(a && b);
    case 'NOR':
      return !(a || b);
    case 'XOR':
      return a !== b;
    case 'XNOR':
      return a === b;
    default:
      return false;
  }
}

export interface CircuitPreset {
  id: string;
  nameBn: string;
  nameEn: string;
  descriptionBn: string;
  descriptionEn: string;
  inputs: { id: string; label: string; defaultVal: boolean }[];
  outputs: { id: string; label: string; formula: string }[];
  truthTableHeaders: string[];
  compute: (inputs: Record<string, boolean>) => Record<string, boolean>;
  generateAllTruthRows: () => { inputs: boolean[]; outputs: boolean[] }[];
}

export const CIRCUIT_PRESETS: CircuitPreset[] = [
  {
    id: 'half-adder',
    nameBn: 'হাফ অ্যাডার (Half Adder)',
    nameEn: 'Half Adder Circuit',
    descriptionBn: 'দুটি একক বিট (A ও B) যোগ করে যোগফল Sum (XOR) এবং ক্যারি Carry (AND) তৈরি করে।',
    descriptionEn: 'Adds two single binary bits to produce a Sum (S = A ⊕ B) and Carry (C = A · B).',
    inputs: [
      { id: 'A', label: 'Input A', defaultVal: false },
      { id: 'B', label: 'Input B', defaultVal: true },
    ],
    outputs: [
      { id: 'S', label: 'Sum (যোগফল)', formula: 'A ⊕ B' },
      { id: 'C', label: 'Carry (হাতে থাকা)', formula: 'A · B' },
    ],
    truthTableHeaders: ['A', 'B', 'Sum (S)', 'Carry (C)'],
    compute: (inp) => {
      const a = Boolean(inp.A);
      const b = Boolean(inp.B);
      return {
        S: evaluateGate('XOR', a, b),
        C: evaluateGate('AND', a, b),
      };
    },
    generateAllTruthRows: () => [
      { inputs: [false, false], outputs: [false, false] },
      { inputs: [false, true], outputs: [true, false] },
      { inputs: [true, false], outputs: [true, false] },
      { inputs: [true, true], outputs: [false, true] },
    ],
  },
  {
    id: 'full-adder',
    nameBn: 'ফুল অ্যাডার (Full Adder)',
    nameEn: 'Full Adder Circuit',
    descriptionBn: 'তিনটি বাইনারি বিট (A, B ও পূর্ববর্তী Carry-in) যোগ করে Sum ও Carry-out নির্ণয় করে।',
    descriptionEn: 'Adds three binary bits (A, B, and Carry-in) using two Half Adders and an OR gate.',
    inputs: [
      { id: 'A', label: 'Input A', defaultVal: true },
      { id: 'B', label: 'Input B', defaultVal: true },
      { id: 'Cin', label: 'Carry In (Cin)', defaultVal: false },
    ],
    outputs: [
      { id: 'S', label: 'Sum (S)', formula: 'A ⊕ B ⊕ Cin' },
      { id: 'Cout', label: 'Carry Out (Cout)', formula: '(A · B) + (Cin · (A ⊕ B))' },
    ],
    truthTableHeaders: ['A', 'B', 'Cin', 'Sum (S)', 'Cout'],
    compute: (inp) => {
      const a = Boolean(inp.A);
      const b = Boolean(inp.B);
      const cin = Boolean(inp.Cin);
      const s1 = evaluateGate('XOR', a, b);
      const c1 = evaluateGate('AND', a, b);
      const s = evaluateGate('XOR', s1, cin);
      const c2 = evaluateGate('AND', s1, cin);
      const cout = evaluateGate('OR', c1, c2);
      return { S: s, Cout: cout };
    },
    generateAllTruthRows: () => [
      { inputs: [false, false, false], outputs: [false, false] },
      { inputs: [false, false, true], outputs: [true, false] },
      { inputs: [false, true, false], outputs: [true, false] },
      { inputs: [false, true, true], outputs: [false, true] },
      { inputs: [true, false, false], outputs: [true, false] },
      { inputs: [true, false, true], outputs: [false, true] },
      { inputs: [true, true, false], outputs: [false, true] },
      { inputs: [true, true, true], outputs: [true, true] },
    ],
  },
  {
    id: 'de-morgans-law',
    nameBn: 'ডি মরগানের প্রথম সূত্র প্রমাণ (De Morgan Proof)',
    nameEn: "De Morgan's First Law Circuit",
    descriptionBn: 'NOR গেটের আউটপুট এবং বুদবুদযুক্ত AND গেট (Bubble AND) এর আউটপুট যে অভিন্ন তা প্রমাণ করে।',
    descriptionEn: 'Proves NOR(A, B) produces the exact same output as AND(NOT A, NOT B) for all states.',
    inputs: [
      { id: 'A', label: 'Input A', defaultVal: false },
      { id: 'B', label: 'Input B', defaultVal: false },
    ],
    outputs: [
      { id: 'LHS', label: 'LHS: NOR(A, B)', formula: 'NOT (A + B)' },
      { id: 'RHS', label: 'RHS: (NOT A) · (NOT B)', formula: 'NOT A · NOT B' },
      { id: 'EQUAL', label: 'LHS == RHS (প্রমাণিত)', formula: 'Identical' },
    ],
    truthTableHeaders: ['A', 'B', 'LHS: NOT(A+B)', 'RHS: (NOT A)·(NOT B)', 'Equivalent?'],
    compute: (inp) => {
      const a = Boolean(inp.A);
      const b = Boolean(inp.B);
      const lhs = evaluateGate('NOR', a, b);
      const notA = evaluateGate('NOT', a);
      const notB = evaluateGate('NOT', b);
      const rhs = evaluateGate('AND', notA, notB);
      return {
        LHS: lhs,
        RHS: rhs,
        EQUAL: lhs === rhs,
      };
    },
    generateAllTruthRows: () => [
      { inputs: [false, false], outputs: [true, true, true] },
      { inputs: [false, true], outputs: [false, false, true] },
      { inputs: [true, false], outputs: [false, false, true] },
      { inputs: [true, true], outputs: [false, false, true] },
    ],
  },
];
