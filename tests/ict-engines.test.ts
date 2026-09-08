import { describe, it, expect } from 'vitest';
import { evaluateGate, CIRCUIT_PRESETS } from '../src/tools/ict/circuit-simulator/logicEngine';
import { executeSql, INITIAL_DATABASE, SQL_PRESETS } from '../src/tools/ict/database-simulator/sqlEngine';
import { C_PRESETS } from '../src/tools/ict/c-runner/cEngine';
import { HTML_TEMPLATES } from '../src/tools/ict/html-runner/templates';
import { CURRICULUM_DATA, getSubjectsByLevel, getSubjectById, getChapterById } from '../src/data/curriculum';

describe('Digital Logic Gate & Circuit Simulator Engine', () => {
  it('evaluates basic logic gates accurately', () => {
    // AND
    expect(evaluateGate('AND', false, false)).toBe(false);
    expect(evaluateGate('AND', true, false)).toBe(false);
    expect(evaluateGate('AND', true, true)).toBe(true);

    // OR
    expect(evaluateGate('OR', false, false)).toBe(false);
    expect(evaluateGate('OR', false, true)).toBe(true);
    expect(evaluateGate('OR', true, true)).toBe(true);

    // NOT
    expect(evaluateGate('NOT', false)).toBe(true);
    expect(evaluateGate('NOT', true)).toBe(false);

    // XOR
    expect(evaluateGate('XOR', false, false)).toBe(false);
    expect(evaluateGate('XOR', true, false)).toBe(true);
    expect(evaluateGate('XOR', false, true)).toBe(true);
    expect(evaluateGate('XOR', true, true)).toBe(false);

    // NAND
    expect(evaluateGate('NAND', true, true)).toBe(false);
    expect(evaluateGate('NAND', true, false)).toBe(true);

    // NOR
    expect(evaluateGate('NOR', false, false)).toBe(true);
    expect(evaluateGate('NOR', true, false)).toBe(false);

    // XNOR
    expect(evaluateGate('XNOR', false, false)).toBe(true);
    expect(evaluateGate('XNOR', true, false)).toBe(false);
    expect(evaluateGate('XNOR', true, true)).toBe(true);
  });

  it('accurately computes Half Adder outputs (Sum & Carry)', () => {
    const halfAdderPreset = CIRCUIT_PRESETS.find((p) => p.id === 'half-adder')!;
    expect(halfAdderPreset).toBeDefined();

    // 0 + 0 => S=0, C=0
    let res = halfAdderPreset.compute({ A: false, B: false });
    expect(res.S).toBe(false);
    expect(res.C).toBe(false);

    // 0 + 1 => S=1, C=0
    res = halfAdderPreset.compute({ A: false, B: true });
    expect(res.S).toBe(true);
    expect(res.C).toBe(false);

    // 1 + 0 => S=1, C=0
    res = halfAdderPreset.compute({ A: true, B: false });
    expect(res.S).toBe(true);
    expect(res.C).toBe(false);

    // 1 + 1 => S=0, C=1
    res = halfAdderPreset.compute({ A: true, B: true });
    expect(res.S).toBe(false);
    expect(res.C).toBe(true);
  });

  it('accurately computes Full Adder outputs', () => {
    const fullAdderPreset = CIRCUIT_PRESETS.find((p) => p.id === 'full-adder')!;
    expect(fullAdderPreset).toBeDefined();

    // 1 + 1 + 0 => S=0, Cout=1
    let res = fullAdderPreset.compute({ A: true, B: true, Cin: false });
    expect(res.S).toBe(false);
    expect(res.Cout).toBe(true);

    // 1 + 1 + 1 => S=1, Cout=1
    res = fullAdderPreset.compute({ A: true, B: true, Cin: true });
    expect(res.S).toBe(true);
    expect(res.Cout).toBe(true);
  });
});

describe('Relational Database & SQL Simulator Engine', () => {
  it('executes SELECT * on Student table', () => {
    const res = executeSql('SELECT * FROM Student');
    expect(res.success).toBe(true);
    expect(res.rows.length).toBe(INITIAL_DATABASE.Student.data.length);
    expect(res.columns).toContain('Name');
    expect(res.columns).toContain('GPA');
  });

  it('filters records with WHERE clause', () => {
    const res = executeSql('SELECT Name, GPA FROM Student WHERE GPA >= 5.00');
    expect(res.success).toBe(true);
    expect(res.rows.length).toBeGreaterThan(0);
    for (const row of res.rows) {
      expect(Number(row.GPA)).toBeGreaterThanOrEqual(5.0);
    }
  });

  it('orders records correctly with ORDER BY', () => {
    const res = executeSql('SELECT Name, GPA FROM Student ORDER BY GPA DESC');
    expect(res.success).toBe(true);
    for (let i = 0; i < res.rows.length - 1; i++) {
      expect(Number(res.rows[i].GPA)).toBeGreaterThanOrEqual(Number(res.rows[i + 1].GPA));
    }
  });

  it('performs INNER JOIN between Student and Result tables', () => {
    const sql = 'SELECT Student.Roll, Student.Name, Result.Marks, Result.Grade FROM Student INNER JOIN Result ON Student.Roll = Result.Roll';
    const res = executeSql(sql);
    expect(res.success).toBe(true);
    expect(res.rows.length).toBeGreaterThan(0);
    expect(res.columns).toContain('Student.Name');
    expect(res.columns).toContain('Result.Marks');
  });

  it('performs GROUP BY with COUNT aggregate', () => {
    const sql = 'SELECT Group, COUNT(*) AS TotalStudents FROM Student GROUP BY Group;';
    const res = executeSql(sql);
    expect(res.success).toBe(true);
    expect(res.rows.length).toBe(3); // Science, Commerce, Humanities
  });

  it('returns graceful error message on invalid syntax', () => {
    const res = executeSql('INVALID QUERY HERE');
    expect(res.success).toBe(false);
    expect(res.message).toBeDefined();
  });
});

describe('C Code Runner & Memory Variable Tracer Engine', () => {
  it('generates execution steps for Fibonacci preset', () => {
    const fibPreset = C_PRESETS.find((p) => p.id === 'fibonacci')!;
    expect(fibPreset).toBeDefined();
    const trace = fibPreset.generateTrace('6');
    expect(trace.length).toBeGreaterThan(5);

    const finalStep = trace[trace.length - 1];
    expect(finalStep.output).toContain('Fibonacci');
    expect(finalStep.variables.n).toBe(6);
  });

  it('generates execution steps for prime check preset', () => {
    const primePreset = C_PRESETS.find((p) => p.id === 'prime-check')!;
    expect(primePreset).toBeDefined();
    const trace = primePreset.generateTrace('7');
    expect(trace.length).toBeGreaterThan(3);

    const finalStep = trace[trace.length - 1];
    expect(finalStep.variables.isPrime).toBe(1);
    expect(finalStep.output).toContain('7 is a Prime Number');
  });

  it('generates execution steps for Factorial preset', () => {
    const factPreset = C_PRESETS.find((p) => p.id === 'factorial')!;
    expect(factPreset).toBeDefined();
    const trace = factPreset.generateTrace('5');
    expect(trace.length).toBeGreaterThan(4);

    const finalStep = trace[trace.length - 1];
    expect(finalStep.output).toContain('Factorial of 5 = 120');
  });
});

describe('HTML Templates and Cheatsheet', () => {
  it('contains valid HTML templates with proper tags', () => {
    expect(HTML_TEMPLATES.length).toBeGreaterThanOrEqual(4);
    const tablePreset = HTML_TEMPLATES.find((p) => p.id === 'hsc-table-rowspan-colspan')!;
    expect(tablePreset).toBeDefined();
    expect(tablePreset.code).toContain('<table');
    expect(tablePreset.code).toContain('colspan');
    expect(tablePreset.code).toContain('rowspan');
  });
});

describe('Curriculum Data Taxonomy Integrity', () => {
  it('includes both SSC and HSC levels across 6 subjects', () => {
    const hsc = getSubjectsByLevel('hsc');
    const ssc = getSubjectsByLevel('ssc');

    expect(hsc.length).toBe(6);
    expect(ssc.length).toBe(6);

    const hscIds = hsc.map((s) => s.id);
    expect(hscIds).toContain('ict');
    expect(hscIds).toContain('physics');
    expect(hscIds).toContain('chemistry');
    expect(hscIds).toContain('biology');
    expect(hscIds).toContain('higher-math');
    expect(hscIds).toContain('general-math');

    const sscIds = ssc.map((s) => s.id);
    expect(sscIds).toContain('ict');
    expect(sscIds).toContain('physics');
    expect(sscIds).toContain('chemistry');
    expect(sscIds).toContain('biology');
    expect(sscIds).toContain('higher-math');
    expect(sscIds).toContain('general-math');
  });

  it('retrieves individual subjects and chapters reliably', () => {
    const ict = getSubjectById('hsc', 'ict');
    expect(ict).toBeDefined();
    expect(ict?.chapters.length).toBe(6);

    const ch3 = getChapterById('hsc-ict-ch3');
    expect(ch3).toBeDefined();
    expect(ch3?.titleBn).toContain('সংখ্যা পদ্ধতি');
    expect(ch3?.linkedToolIds).toContain('circuit-simulator');
    expect(ch3?.coreFormulas && ch3.coreFormulas.length > 0).toBe(true);
  });
});
