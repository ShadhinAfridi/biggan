import React, { useState, useMemo } from 'react';
import {
  LAB_COMPOUNDS,
  calcSolutionPrep,
  calcDilution,
  convertConcentration,
  calcTitration,
  type CommonCompound,
} from './engine';
import { Latex } from '../../components/math/Latex';
import { FlaskConical, Droplet, Sparkles, Copy, Check, RotateCcw, Scale, ArrowRight, Activity } from 'lucide-react';

interface Props {
  lang?: 'en' | 'bn';
}

export const SolutionDilutionCalculator: React.FC<Props> = ({ lang = 'bn' }) => {
  const [activeTab, setActiveTab] = useState<'prep' | 'dilution' | 'titration' | 'converter'>('prep');
  const [copied, setCopied] = useState(false);

  // Tab 1: Solution Preparation (W = SMV / 1000)
  const [prepSolveFor, setPrepSolveFor] = useState<'W' | 'S' | 'V'>('W');
  const [selectedCompound, setSelectedCompound] = useState<string>('Na2CO3');
  const [customMolarMass, setCustomMolarMass] = useState<number>(105.99);
  const [prepW, setPrepW] = useState<number>(2.65);
  const [prepS, setPrepS] = useState<number>(0.1);
  const [prepV, setPrepV] = useState<number>(250);

  // When compound changes, update molar mass
  const handleCompoundChange = (formula: string) => {
    setSelectedCompound(formula);
    const found = LAB_COMPOUNDS.find((c) => c.formula === formula);
    if (found) {
      setCustomMolarMass(found.molarMass);
    }
  };

  const prepResult = useMemo(() => {
    try {
      return calcSolutionPrep(prepSolveFor, prepW, prepS, customMolarMass, prepV);
    } catch (e: any) {
      return { result: 0, unit: '', steps: [e.message || 'Error'] };
    }
  }, [prepSolveFor, prepW, prepS, customMolarMass, prepV]);

  // Tab 2: Dilution (V1 S1 = V2 S2)
  const [dilSolveFor, setDilSolveFor] = useState<'V1' | 'S2' | 'V2' | 'S1'>('V1');
  const [dilV1, setDilV1] = useState<number>(10);
  const [dilS1, setDilS1] = useState<number>(1.0);
  const [dilV2, setDilV2] = useState<number>(100);
  const [dilS2, setDilS2] = useState<number>(0.1);

  const dilutionResult = useMemo(() => {
    try {
      return calcDilution(dilSolveFor, dilV1, dilS1, dilV2, dilS2);
    } catch (e: any) {
      return { result: 0, unit: '', solventToAdd: 0, steps: [e.message || 'Error'] };
    }
  }, [dilSolveFor, dilV1, dilS1, dilV2, dilS2]);

  // Tab 3: Titration (VA SA eA = VB SB eB)
  const [titrSolveFor, setTitrSolveFor] = useState<'vA' | 'sA' | 'vB' | 'sB'>('sB');
  const [titrVA, setTitrVA] = useState<number>(25);
  const [titrSA, setTitrSA] = useState<number>(0.1);
  const [titrEA, setTitrEA] = useState<number>(1); // e.g. HCl = 1, H2SO4 = 2
  const [titrVB, setTitrVB] = useState<number>(20);
  const [titrSB, setTitrSB] = useState<number>(0.125);
  const [titrEB, setTitrEB] = useState<number>(2); // e.g. Na2CO3 = 2, NaOH = 1

  const titrationResult = useMemo(() => {
    try {
      return calcTitration(titrVA, titrSA, titrEA, titrVB, titrSB, titrEB, titrSolveFor);
    } catch {
      return 0;
    }
  }, [titrVA, titrSA, titrEA, titrVB, titrSB, titrEB, titrSolveFor]);

  // Tab 4: Concentration Converter
  const [convMolarity, setConvMolarity] = useState<number>(0.1);
  const [convMolarMass, setConvMolarMass] = useState<number>(98.08); // H2SO4 default

  const convResult = useMemo(() => {
    return convertConcentration(convMolarity, convMolarMass);
  }, [convMolarity, convMolarMass]);

  const handleCopy = () => {
    let text = '';
    if (activeTab === 'prep') {
      text = `Solution Prep (${prepSolveFor}): ${prepResult.result} ${prepResult.unit}\nSteps:\n${prepResult.steps.join('\n')}`;
    } else if (activeTab === 'dilution') {
      text = `Dilution (${dilSolveFor}): ${dilutionResult.result} ${dilutionResult.unit}\nSolvent to add: ${dilutionResult.solventToAdd} mL\nSteps:\n${dilutionResult.steps.join('\n')}`;
    } else if (activeTab === 'titration') {
      text = `Titration Equivalence: ${titrSolveFor} = ${titrationResult} (VA·SA·eA = VB·SB·eB)`;
    } else {
      text = `Concentration Conversion: ${convMolarity} M = ${convResult.ppm} ppm = ${convResult.ppb} ppb = ${convResult.percentWv} % (w/v)`;
    }
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isBn = lang === 'bn';

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-2xl">
        <button
          onClick={() => setActiveTab('prep')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
            activeTab === 'prep'
              ? 'bg-white dark:bg-gray-700 text-teal-600 dark:text-teal-400 shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <Scale className="w-4 h-4" />
          {isBn ? 'দ্রবণ প্রস্তুতি (W = SMV/1000)' : 'Prep (W = SMV/1000)'}
        </button>

        <button
          onClick={() => setActiveTab('dilution')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
            activeTab === 'dilution'
              ? 'bg-white dark:bg-gray-700 text-teal-600 dark:text-teal-400 shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <Droplet className="w-4 h-4" />
          {isBn ? 'লঘুকরণ সূত্র (V₁S₁ = V₂S₂)' : 'Dilution (V₁S₁ = V₂S₂)'}
        </button>

        <button
          onClick={() => setActiveTab('titration')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
            activeTab === 'titration'
              ? 'bg-white dark:bg-gray-700 text-teal-600 dark:text-teal-400 shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <FlaskConical className="w-4 h-4" />
          {isBn ? 'টাইট্রেশন সমতাকরণ' : 'Titration Equivalence'}
        </button>

        <button
          onClick={() => setActiveTab('converter')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
            activeTab === 'converter'
              ? 'bg-white dark:bg-gray-700 text-teal-600 dark:text-teal-400 shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <Activity className="w-4 h-4" />
          {isBn ? 'ঘনমাত্রা রূপান্তর (PPM/%w-v)' : 'PPM / %w-v Converter'}
        </button>
      </div>

      {/* Main Grid: Control Panel + Dynamic Visual Flask */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Top Controls (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm space-y-6">
          {/* TAB 1: SOLUTION PREPARATION */}
          {activeTab === 'prep' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg flex items-center gap-2">
                  <Scale className="w-5 h-5 text-teal-500" />
                  {isBn ? 'প্রাইমারি স্ট্যান্ডার্ড দ্রবণ প্রস্তুতি' : 'Primary Standard Solution Preparation'}
                </h3>
                <span className="text-xs font-mono bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 px-2 py-1 rounded-md">
                  W = (S × M × V) / 1000
                </span>
              </div>

              {/* Solve For Picker */}
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  {isBn ? 'কোন রাশিটি নির্ণয় করতে চান?' : 'Solve For:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'W', labelBn: 'ভর W (g)', labelEn: 'Mass W (g)' },
                    { key: 'S', labelBn: 'মোলারিটি S (M)', labelEn: 'Molarity S (M)' },
                    { key: 'V', labelBn: 'আয়তন V (mL)', labelEn: 'Volume V (mL)' },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setPrepSolveFor(item.key as any)}
                      className={`py-2 px-3 text-sm font-semibold rounded-xl border transition-all ${
                        prepSolveFor === item.key
                          ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 shadow-sm'
                          : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-gray-300'
                      }`}
                    >
                      {isBn ? item.labelBn : item.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Common Compound Reagents */}
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                  {isBn ? 'বোর্ড ল্যাব রিএজেন্ট নির্বাচন করুন:' : 'Common Lab Reagent:'}
                </label>
                <select
                  value={selectedCompound}
                  onChange={(e) => handleCompoundChange(e.target.value)}
                  aria-label={isBn ? 'বোর্ড ল্যাব রিএজেন্ট' : 'Lab Reagent'}
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  {LAB_COMPOUNDS.map((c) => (
                    <option key={c.formula} value={c.formula}>
                      {c.formula} — {isBn ? c.nameBn : c.nameEn} ({c.molarMass} g/mol)
                    </option>
                  ))}
                </select>
              </div>

              {/* Inputs */}
              <div className="space-y-4">
                {/* Molar Mass */}
                <div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                    <span>{isBn ? 'আণবিক ভর M (Molar Mass)' : 'Molar Mass M (g/mol)'}</span>
                    <span className="font-mono text-teal-600 dark:text-teal-400">{customMolarMass} g/mol</span>
                  </div>
                  <input
                    type="number"
                    step="0.01"
                    value={customMolarMass}
                    onChange={(e) => setCustomMolarMass(parseFloat(e.target.value) || 1)}
                    aria-label={isBn ? 'আণবিক ভর M' : 'Molar Mass M'}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 text-sm font-mono text-gray-900 dark:text-gray-100"
                  />
                </div>

                {/* S if not solving for S */}
                {prepSolveFor !== 'S' && (
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>{isBn ? 'টার্গেট মোলারিটি S (Molarity)' : 'Target Molarity S (mol/L)'}</span>
                      <span className="font-mono text-teal-600 dark:text-teal-400">{prepS} M</span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        step="0.01"
                        value={prepS}
                        onChange={(e) => setPrepS(parseFloat(e.target.value) || 0)}
                        aria-label={isBn ? 'টার্গেট মোলারিটি S' : 'Target Molarity S'}
                        className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 text-sm font-mono text-gray-900 dark:text-gray-100"
                      />
                      <div className="flex gap-1">
                        {[0.1, 0.25, 0.5, 1.0].map((s) => (
                          <button
                            key={s}
                            onClick={() => setPrepS(s)}
                            className="px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-gray-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 rounded-lg text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                          >
                            {s}M
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* V if not solving for V */}
                {prepSolveFor !== 'V' && (
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>{isBn ? 'ফ্লাস্কের আয়তন V (Volume)' : 'Flask Volume V (mL)'}</span>
                      <span className="font-mono text-teal-600 dark:text-teal-400">{prepV} mL</span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        step="10"
                        value={prepV}
                        onChange={(e) => setPrepV(parseFloat(e.target.value) || 0)}
                        aria-label={isBn ? 'ফ্লাস্কের আয়তন V' : 'Flask Volume V'}
                        className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 text-sm font-mono text-gray-900 dark:text-gray-100"
                      />
                      <div className="flex gap-1">
                        {[100, 250, 500, 1000].map((v) => (
                          <button
                            key={v}
                            onClick={() => setPrepV(v)}
                            className="px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-gray-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 rounded-lg text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                          >
                            {v}mL
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* W if solving for S or V */}
                {prepSolveFor !== 'W' && (
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>{isBn ? 'প্রদত্ত দ্রবণের ভর W (Mass)' : 'Given Solute Mass W (g)'}</span>
                      <span className="font-mono text-teal-600 dark:text-teal-400">{prepW} g</span>
                    </div>
                    <input
                      type="number"
                      step="0.01"
                      value={prepW}
                      onChange={(e) => setPrepW(parseFloat(e.target.value) || 0)}
                      aria-label={isBn ? 'প্রদত্ত দ্রবণের ভর W' : 'Given Solute Mass W'}
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 text-sm font-mono text-gray-900 dark:text-gray-100"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: DILUTION */}
          {activeTab === 'dilution' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg flex items-center gap-2">
                  <Droplet className="w-5 h-5 text-teal-500" />
                  {isBn ? 'স্টক দ্রবণ লঘুকরণ (Dilution)' : 'Stock Solution Dilution'}
                </h3>
                <span className="text-xs font-mono bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 px-2 py-1 rounded-md">
                  V₁ × S₁ = V₂ × S₂
                </span>
              </div>

              {/* Solve For Picker */}
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  {isBn ? 'নির্ণেয় রাশি:' : 'Solve For:'}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { key: 'V1', labelBn: 'V₁ (স্টক আয়তন)', labelEn: 'V₁ (Stock Vol)' },
                    { key: 'S2', labelBn: 'S₂ (লঘু ঘনমাত্রা)', labelEn: 'S₂ (Dilute M)' },
                    { key: 'V2', labelBn: 'V₂ (চূড়ান্ত আয়তন)', labelEn: 'V₂ (Final Vol)' },
                    { key: 'S1', labelBn: 'S₁ (স্টক ঘনমাত্রা)', labelEn: 'S₁ (Stock M)' },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setDilSolveFor(item.key as any)}
                      className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all ${
                        dilSolveFor === item.key
                          ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 shadow-sm'
                          : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-gray-300'
                      }`}
                    >
                      {isBn ? item.labelBn : item.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* V1 */}
                <div className={dilSolveFor === 'V1' ? 'opacity-50 pointer-events-none' : ''}>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {isBn ? 'স্টক দ্রবণের আয়তন V₁ (mL)' : 'Stock Volume V₁ (mL)'}
                  </label>
                  <input
                    type="number"
                    value={dilV1}
                    onChange={(e) => setDilV1(parseFloat(e.target.value) || 0)}
                    aria-label={isBn ? 'স্টক দ্রবণের আয়তন V₁' : 'Stock Volume V₁'}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 text-sm font-mono text-gray-900 dark:text-gray-100"
                  />
                </div>

                {/* S1 */}
                <div className={dilSolveFor === 'S1' ? 'opacity-50 pointer-events-none' : ''}>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {isBn ? 'স্টক দ্রবণের মোলারিটি S₁ (M)' : 'Stock Molarity S₁ (M)'}
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={dilS1}
                    onChange={(e) => setDilS1(parseFloat(e.target.value) || 0)}
                    aria-label={isBn ? 'স্টক দ্রবণের মোলারিটি S₁' : 'Stock Molarity S₁'}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 text-sm font-mono text-gray-900 dark:text-gray-100"
                  />
                </div>

                {/* V2 */}
                <div className={dilSolveFor === 'V2' ? 'opacity-50 pointer-events-none' : ''}>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {isBn ? 'লঘুকৃত দ্রবণের আয়তন V₂ (mL)' : 'Target Volume V₂ (mL)'}
                  </label>
                  <input
                    type="number"
                    value={dilV2}
                    onChange={(e) => setDilV2(parseFloat(e.target.value) || 0)}
                    aria-label={isBn ? 'লঘুকৃত দ্রবণের আয়তন V₂' : 'Target Volume V₂'}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 text-sm font-mono text-gray-900 dark:text-gray-100"
                  />
                </div>

                {/* S2 */}
                <div className={dilSolveFor === 'S2' ? 'opacity-50 pointer-events-none' : ''}>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {isBn ? 'কাঙ্ক্ষিত মোলারিটি S₂ (M)' : 'Target Molarity S₂ (M)'}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={dilS2}
                    onChange={(e) => setDilS2(parseFloat(e.target.value) || 0)}
                    aria-label={isBn ? 'কাঙ্ক্ষিত মোলারিটি S₂' : 'Target Molarity S₂'}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 text-sm font-mono text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>

              {/* Lab Quick Presets */}
              <div className="pt-2">
                <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1.5">
                  {isBn ? 'বোর্ড প্র্যাকটিক্যাল প্রিসেট:' : 'Standard Dilution Scenarios:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => {
                      setDilSolveFor('V1');
                      setDilS1(12);
                      setDilV2(500);
                      setDilS2(0.1);
                    }}
                    className="px-2.5 py-1 text-xs bg-gray-100 dark:bg-gray-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 rounded-lg text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-mono"
                  >
                    12M HCl → 0.1M (500mL)
                  </button>
                  <button
                    onClick={() => {
                      setDilSolveFor('V1');
                      setDilS1(18);
                      setDilV2(250);
                      setDilS2(0.5);
                    }}
                    className="px-2.5 py-1 text-xs bg-gray-100 dark:bg-gray-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 rounded-lg text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-mono"
                  >
                    18M H₂SO₄ → 0.5M (250mL)
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TITRATION */}
          {activeTab === 'titration' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-teal-500" />
                  {isBn ? 'অম্ল-ক্ষার টাইট্রেশন সমতাকরণ' : 'Acid-Base Titration Equivalence'}
                </h3>
                <span className="text-xs font-mono bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 px-2 py-1 rounded-md">
                  V_A × S_A × e_A = V_B × S_B × e_B
                </span>
              </div>

              {/* Solve For */}
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  {isBn ? 'নির্ণেয় রাশি:' : 'Solve For:'}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { key: 'sB', label: 'S_B (ক্ষার মোলারিটি)' },
                    { key: 'vB', label: 'V_B (ক্ষার আয়তন)' },
                    { key: 'sA', label: 'S_A (এসিড মোলারিটি)' },
                    { key: 'vA', label: 'V_A (এসিড আয়তন)' },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setTitrSolveFor(item.key as any)}
                      className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all ${
                        titrSolveFor === item.key
                          ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 shadow-sm'
                          : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-gray-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Two columns: Acid vs Base */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Acid Column */}
                <div className="p-3.5 bg-red-50/50 dark:bg-red-950/20 rounded-xl border border-red-100 dark:border-red-900/30 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center gap-1.5">
                    {isBn ? 'এসিড দ্রবণ (Acid)' : 'Acid Solution'}
                  </span>
                  <div>
                    <label className="block text-xs text-gray-500 mb-0.5">V_A (mL)</label>
                    <input
                      type="number"
                      value={titrVA}
                      disabled={titrSolveFor === 'vA'}
                      onChange={(e) => setTitrVA(parseFloat(e.target.value) || 0)}
                      aria-label="V_A (mL)"
                      className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-2.5 py-1.5 text-sm font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-0.5">S_A (M)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={titrSA}
                      disabled={titrSolveFor === 'sA'}
                      onChange={(e) => setTitrSA(parseFloat(e.target.value) || 0)}
                      aria-label="S_A (M)"
                      className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-2.5 py-1.5 text-sm font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-0.5">
                      {isBn ? 'তুল্য সংখ্যা e_A (যেমন: HCl=1, H₂SO₄=2)' : 'Equivalence Factor e_A'}
                    </label>
                    <input
                      type="number"
                      value={titrEA}
                      onChange={(e) => setTitrEA(parseInt(e.target.value) || 1)}
                      aria-label={isBn ? 'তুল্য সংখ্যা e_A' : 'Equivalence Factor e_A'}
                      className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-2.5 py-1.5 text-sm font-mono"
                    />
                  </div>
                </div>

                {/* Base Column */}
                <div className="p-3.5 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl border border-blue-100 dark:border-blue-900/30 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                    {isBn ? 'ক্ষার দ্রবণ (Base)' : 'Base Solution'}
                  </span>
                  <div>
                    <label className="block text-xs text-gray-500 mb-0.5">V_B (mL)</label>
                    <input
                      type="number"
                      value={titrVB}
                      disabled={titrSolveFor === 'vB'}
                      onChange={(e) => setTitrVB(parseFloat(e.target.value) || 0)}
                      aria-label="V_B (mL)"
                      className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-2.5 py-1.5 text-sm font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-0.5">S_B (M)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={titrSB}
                      disabled={titrSolveFor === 'sB'}
                      onChange={(e) => setTitrSB(parseFloat(e.target.value) || 0)}
                      aria-label="S_B (M)"
                      className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-2.5 py-1.5 text-sm font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-0.5">
                      {isBn ? 'তুল্য সংখ্যা e_B (যেমন: NaOH=1, Na₂CO₃=2)' : 'Equivalence Factor e_B'}
                    </label>
                    <input
                      type="number"
                      value={titrEB}
                      onChange={(e) => setTitrEB(parseInt(e.target.value) || 1)}
                      aria-label={isBn ? 'তুল্য সংখ্যা e_B' : 'Equivalence Factor e_B'}
                      className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-2.5 py-1.5 text-sm font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CONCENTRATION CONVERTER */}
          {activeTab === 'converter' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg flex items-center gap-2">
                  <Activity className="w-5 h-5 text-teal-500" />
                  {isBn ? 'ঘনমাত্রা রূপান্তর ক্যালকুলেটর' : 'Concentration Unit Converter'}
                </h3>
                <span className="text-xs font-mono bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 px-2 py-1 rounded-md">
                  PPM = Molarity × M × 1000
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {isBn ? 'মোলারিটি S (mol/L)' : 'Molarity (mol/L)'}
                  </label>
                  <input
                    type="number"
                    step="0.001"
                    value={convMolarity}
                    onChange={(e) => setConvMolarity(parseFloat(e.target.value) || 0)}
                    aria-label={isBn ? 'মোলারিটি S' : 'Molarity'}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 text-sm font-mono text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {isBn ? 'আণবিক ভর M (g/mol)' : 'Molar Mass (g/mol)'}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={convMolarMass}
                    onChange={(e) => setConvMolarMass(parseFloat(e.target.value) || 1)}
                    aria-label={isBn ? 'আণবিক ভর M' : 'Molar Mass'}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 text-sm font-mono text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>

              {/* Conversion Output Cards */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-4 bg-teal-50/50 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/30 rounded-xl text-center">
                  <div className="text-xs text-gray-500 mb-1">PPM (mg/L)</div>
                  <div className="text-lg font-bold font-mono text-teal-600 dark:text-teal-400">
                    {convResult.ppm.toLocaleString()}
                  </div>
                </div>
                <div className="p-4 bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 rounded-xl text-center">
                  <div className="text-xs text-gray-500 mb-1">PPB (μg/L)</div>
                  <div className="text-lg font-bold font-mono text-indigo-600 dark:text-indigo-400">
                    {convResult.ppb.toLocaleString()}
                  </div>
                </div>
                <div className="p-4 bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/30 rounded-xl text-center">
                  <div className="text-xs text-gray-500 mb-1">%(w/v)</div>
                  <div className="text-lg font-bold font-mono text-purple-600 dark:text-purple-400">
                    {convResult.percentWv}%
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right / Visual Results Card (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-teal-500/5 via-teal-500/10 to-transparent border border-teal-200 dark:border-teal-800/40 rounded-2xl p-6 flex flex-col justify-between space-y-6">
          {/* Top Result Banner */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                {isBn ? 'ফলাফল ও লাইভ ডিসপ্লে' : 'Live Computed Result'}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-teal-600 dark:text-teal-400 hover:text-teal-700 bg-white/80 dark:bg-gray-800/80 px-2.5 py-1.5 rounded-lg border border-teal-200 dark:border-teal-800 shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? (isBn ? 'কপি হয়েছে' : 'Copied') : isBn ? 'কপি করুন' : 'Copy'}
              </button>
            </div>

            {/* Calculated Value Display */}
            {activeTab === 'prep' && (
              <div className="space-y-2">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {isBn ? 'নির্ণীত মান (' + prepSolveFor + '):' : 'Calculated ' + prepSolveFor + ':'}
                </div>
                <div className="text-4xl font-extrabold font-mono text-teal-600 dark:text-teal-400">
                  {prepResult.result}{' '}
                  <span className="text-xl font-normal text-gray-500 dark:text-gray-400">{prepResult.unit}</span>
                </div>
              </div>
            )}

            {activeTab === 'dilution' && (
              <div className="space-y-3">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {isBn ? 'নির্ণীত মান (' + dilSolveFor + '):' : 'Calculated ' + dilSolveFor + ':'}
                </div>
                <div className="text-4xl font-extrabold font-mono text-teal-600 dark:text-teal-400">
                  {dilutionResult.result}{' '}
                  <span className="text-xl font-normal text-gray-500 dark:text-gray-400">{dilutionResult.unit}</span>
                </div>
                {dilutionResult.solventToAdd > 0 && (
                  <div className="p-3 bg-teal-100/60 dark:bg-teal-950/40 rounded-xl text-xs text-teal-800 dark:text-teal-300 font-medium">
                    💧 {isBn ? 'প্রয়োজনীয় অতিরিক্ত দ্রাবক (পানি):' : 'Solvent (Water) to add:'}{' '}
                    <strong className="font-mono">{dilutionResult.solventToAdd} mL</strong>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'titration' && (
              <div className="space-y-2">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {isBn ? 'সমতাকৃত মান (' + titrSolveFor + '):' : 'Equivalence Value (' + titrSolveFor + '):'}
                </div>
                <div className="text-4xl font-extrabold font-mono text-teal-600 dark:text-teal-400">
                  {titrationResult}{' '}
                  <span className="text-xl font-normal text-gray-500 dark:text-gray-400">
                    {titrSolveFor.startsWith('v') ? 'mL' : 'M'}
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'converter' && (
              <div className="space-y-2">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {isBn ? 'মোলার ঘনত্ব (M):' : 'Molar Concentration:'}
                </div>
                <div className="text-4xl font-extrabold font-mono text-teal-600 dark:text-teal-400">
                  {convMolarity} <span className="text-xl font-normal text-gray-500">M</span>
                </div>
              </div>
            )}
          </div>

          {/* SVG Animated Flask Visual */}
          <div className="bg-white/60 dark:bg-gray-800/60 border border-teal-200/60 dark:border-teal-900/40 rounded-xl p-4 flex flex-col items-center justify-center">
            <svg viewBox="0 0 160 180" className="w-36 h-40 overflow-visible">
              <defs>
                {/* Liquid gradient */}
                <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#0d9488" stopOpacity="0.95" />
                </linearGradient>
                {/* Flask clip path */}
                <clipPath id="flaskClip">
                  <path d="M 68 20 L 92 20 L 92 65 L 135 150 A 15 15 0 0 1 122 170 L 38 170 A 15 15 0 0 1 25 150 L 68 65 Z" />
                </clipPath>
              </defs>

              {/* Flask Outline Background */}
              <path
                d="M 68 20 L 92 20 L 92 65 L 135 150 A 15 15 0 0 1 122 170 L 38 170 A 15 15 0 0 1 25 150 L 68 65 Z"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="3"
                className="dark:stroke-gray-600"
              />

              {/* Liquid fill inside flask clip */}
              <g clipPath="url(#flaskClip)">
                {/* Dynamic Height based on active Tab and volume */}
                {(() => {
                  let fillRatio = 0.5;
                  if (activeTab === 'prep') {
                    fillRatio = Math.min(1, Math.max(0.15, prepV / 1000));
                  } else if (activeTab === 'dilution') {
                    fillRatio = Math.min(1, Math.max(0.15, dilV2 / 1000));
                  } else if (activeTab === 'titration') {
                    fillRatio = Math.min(1, Math.max(0.2, (titrVA + titrVB) / 100));
                  }
                  const liquidY = 175 - fillRatio * 115;
                  return (
                    <rect
                      x="0"
                      y={liquidY}
                      width="160"
                      height="180"
                      fill="url(#liquidGrad)"
                      className="transition-all duration-500 ease-out"
                    />
                  );
                })()}
                {/* Gentle meniscus wave line */}
                <ellipse cx="80" cy="110" rx="30" ry="3" fill="rgba(255,255,255,0.4)" />
              </g>

              {/* Measurement marks on neck and bulb */}
              <line x1="88" y1="50" x2="96" y2="50" stroke="#64748b" strokeWidth="1.5" />
              <text x="100" y="53" fontSize="8" fill="#64748b" fontFamily="monospace">
                Calib
              </text>
              <line x1="72" y1="40" x2="80" y2="40" stroke="#94a3b8" strokeWidth="1" />
              <line x1="72" y1="50" x2="84" y2="50" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="72" y1="60" x2="80" y2="60" stroke="#94a3b8" strokeWidth="1" />

              {/* Rim top */}
              <ellipse cx="80" cy="20" rx="14" ry="3" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
            </svg>

            <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 mt-2">
              {activeTab === 'prep' && `${prepV} mL Volumetric Flask`}
              {activeTab === 'dilution' && `${dilV2} mL Target Flask`}
              {activeTab === 'titration' && `Neutralized Mix (${titrVA + titrVB} mL)`}
              {activeTab === 'converter' && `Homogeneous Solution`}
            </span>
          </div>

          {/* Step-by-Step Breakdown Display */}
          <div className="text-xs space-y-1 bg-white/70 dark:bg-gray-800/70 p-3 rounded-xl border border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-700 dark:text-gray-300 block mb-1">
              {isBn ? 'ধাপসমূহ (Formula Steps):' : 'Calculation Steps:'}
            </span>
            {activeTab === 'prep' &&
              prepResult.steps.map((st, i) => (
                <div key={i} className="font-mono text-gray-600 dark:text-gray-400">
                  {st}
                </div>
              ))}
            {activeTab === 'dilution' &&
              dilutionResult.steps.map((st, i) => (
                <div key={i} className="font-mono text-gray-600 dark:text-gray-400">
                  {st}
                </div>
              ))}
            {activeTab === 'titration' && (
              <div className="font-mono text-gray-600 dark:text-gray-400">
                {titrVA} × {titrSA} × {titrEA} = {titrVB} × {titrSB} × {titrEB}
              </div>
            )}
            {activeTab === 'converter' && (
              <div className="font-mono text-gray-600 dark:text-gray-400">
                PPM = {convMolarity} M × {convMolarMass} g/mol × 1000 = {convResult.ppm} mg/L
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
