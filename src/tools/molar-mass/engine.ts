import { ELEMENTS, type ElementData } from './elements';

export interface ElementComposition {
  element: ElementData;
  count: number;
  subtotalMass: number;
  percentage: number;
}

export interface MolarMassResult {
  formula: string;
  totalMolarMass: number;
  composition: ElementComposition[];
  latexFormula: string;
  latexSumDerivation: string;
}

/**
 * Parses a chemical formula chunk (without hydrates or leading coefficients).
 * Handles brackets/parentheses like Ca(OH)2 or (NH4)2SO4 or [Fe(CN)6].
 */
function parseFormulaChunk(chunk: string): Record<string, number> {
  const counts: Record<string, number> = {};
  let i = 0;

  function parseSubgroup(): Record<string, number> {
    const subCounts: Record<string, number> = {};

    while (i < chunk.length) {
      const char = chunk[i];

      // Opening bracket/parenthesis
      if (char === '(' || char === '[' || char === '{') {
        i++;
        const inner = parseSubgroup();
        let multiplier = 1;

        // Check if there is a number right after closing bracket
        const numMatch = chunk.slice(i).match(/^\d+/);
        if (numMatch) {
          multiplier = parseInt(numMatch[0], 10);
          i += numMatch[0].length;
        }

        for (const [sym, count] of Object.entries(inner)) {
          subCounts[sym] = (subCounts[sym] || 0) + count * multiplier;
        }
      } else if (char === ')' || char === ']' || char === '}') {
        i++;
        return subCounts;
      } else {
        // Element symbol match: Capital letter followed optionally by lowercase
        const elemMatch = chunk.slice(i).match(/^[A-Z][a-z]?/);
        if (!elemMatch) {
          // Skip whitespace or unknown character if any
          i++;
          continue;
        }

        const symbol = elemMatch[0];
        i += symbol.length;

        // Check for count
        let count = 1;
        const countMatch = chunk.slice(i).match(/^\d+/);
        if (countMatch) {
          count = parseInt(countMatch[0], 10);
          i += countMatch[0].length;
        }

        subCounts[symbol] = (subCounts[symbol] || 0) + count;
      }
    }

    return subCounts;
  }

  const result = parseSubgroup();
  for (const [sym, count] of Object.entries(result)) {
    counts[sym] = (counts[sym] || 0) + count;
  }
  return counts;
}

/**
 * Main deconstructor that parses full formula including hydrates (e.g. CuSO4·5H2O).
 */
export function calculateMolarMass(rawInput: string): MolarMassResult {
  const cleanInput = rawInput.trim();
  if (!cleanInput) {
    throw new Error('Please enter a chemical formula (e.g., H2O, CuSO4·5H2O, Ca(OH)2).');
  }

  // Handle hydrates by splitting by · or * or .
  // We need to avoid splitting on decimal numbers if any, but in standard hydrate formulas,
  // the dot separates compounds: CuSO4.5H2O or CuSO4·5H2O
  const parts = cleanInput.split(/[·*]|(?<=[a-zA-Z\d\)\}\]])\.(?=\d*[A-Z])/);
  const totalCounts: Record<string, number> = {};

  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    // Check for leading coefficient on hydrate or molecule (e.g., 5H2O)
    const coeffMatch = trimmed.match(/^(\d+)(.*)$/);
    let coeff = 1;
    let formulaPart = trimmed;

    if (coeffMatch && coeffMatch[1] && coeffMatch[2]) {
      coeff = parseInt(coeffMatch[1], 10);
      formulaPart = coeffMatch[2];
    }

    const partCounts = parseFormulaChunk(formulaPart);
    for (const [sym, cnt] of Object.entries(partCounts)) {
      totalCounts[sym] = (totalCounts[sym] || 0) + cnt * coeff;
    }
  }

  const unknownSymbols = Object.keys(totalCounts).filter((sym) => !ELEMENTS[sym]);
  if (unknownSymbols.length > 0) {
    throw new Error(`Unknown element symbol(s): ${unknownSymbols.join(', ')}. Please check IUPAC capitalization.`);
  }

  let totalMass = 0;
  const composition: ElementComposition[] = [];
  const sumTerms: string[] = [];

  for (const [symbol, count] of Object.entries(totalCounts)) {
    const element = ELEMENTS[symbol];
    const subtotal = count * element.atomicMass;
    totalMass += subtotal;

    composition.push({
      element,
      count,
      subtotalMass: subtotal,
      percentage: 0, // filled in second pass
    });

    sumTerms.push(`(${count} \\times ${element.atomicMass})`);
  }

  // Calculate percentages and sort by atomic number
  composition.sort((a, b) => a.element.atomicNumber - b.element.atomicNumber);
  for (const item of composition) {
    item.percentage = totalMass > 0 ? (item.subtotalMass / totalMass) * 100 : 0;
  }

  // Convert raw formula to LaTeX-ready format (e.g. H_2O, CuSO_4\cdot 5H_2O)
  const latexFormula = cleanInput
    .replace(/·|\*/g, '\\cdot ')
    .replace(/(\d+)/g, '_{$1}');

  const latexSumDerivation = `M = \\sum (n_i \\times M_i) = ${sumTerms.join(' + ')} = ${totalMass.toFixed(3)}\\text{ g/mol}`;

  return {
    formula: cleanInput,
    totalMolarMass: Number(totalMass.toFixed(4)),
    composition,
    latexFormula,
    latexSumDerivation,
  };
}
