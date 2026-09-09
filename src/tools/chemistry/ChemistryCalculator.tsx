import { RevisionTracker } from '../../components/tools/RevisionTracker';
import React, { useState } from 'react';
import {
  FlaskConical,
  Beaker,
  Flame,
  Wind,
  Atom,
  TestTube2,
  Sparkles,
  Copy,
  Check,
  AlertCircle,
  BookOpen,
  ArrowRight,
  Droplet,
} from 'lucide-react';
import { Latex } from '../../components/math/Latex';
import {
  parseChemicalFormula,
  calcGrahamDiffusion,
  calcAverageAtomicMass,
  calcBohrAngularMomentum,
  convertUnifiedMole,
  calcMolarity,
  calcEmpiricalAndMolecularFormula,
  calcLimitingReactant,
  calcOxidationState,
  calcReactionEnthalpy,
  calcPH,
  calcNeutralization,
  generateHydrocarbon,
  PRESET_GASES,
  type ChemistryResult,
} from './engine';

interface Props {
  lang?: 'bn' | 'en';
}

type ChemistryTab =
  | 'mole_molarity'
  | 'composition_formula'
  | 'limiting_reactant'
  | 'bond_energy'
  | 'diffusion'
  | 'oxidation'
  | 'acid_base'
  | 'hydrocarbon'
  | 'atomic_structure';


const PHRainbowGauge: React.FC<{ ph: number; lang?: 'bn' | 'en' }> = ({ ph, lang = 'bn' }) => {
  const clampedPH = Math.max(0, Math.min(14, ph));
  const percent = (clampedPH / 14) * 100;

  let statusBn = 'নিরপেক্ষ (Neutral)';
  let statusEn = 'Neutral';
  let badgeColor = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';

  if (clampedPH < 3) {
    statusBn = 'তীব্র এসিডিক (Strongly Acidic)';
    statusEn = 'Strongly Acidic';
    badgeColor = 'bg-red-500/20 text-red-300 border-red-500/40';
  } else if (clampedPH < 7) {
    statusBn = 'মৃদু এসিডিক (Weakly Acidic)';
    statusEn = 'Weakly Acidic';
    badgeColor = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
  } else if (clampedPH === 7) {
    statusBn = 'নিরপেক্ষ (Neutral)';
    statusEn = 'Neutral';
    badgeColor = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
  } else if (clampedPH <= 11) {
    statusBn = 'মৃদু ক্ষারীয় (Weakly Basic)';
    statusEn = 'Weakly Basic';
    badgeColor = 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
  } else {
    statusBn = 'তীব্র ক্ষারীয় (Strongly Basic)';
    statusEn = 'Strongly Basic';
    badgeColor = 'bg-purple-500/20 text-purple-300 border-purple-500/40';
  }

  return (
    <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 space-y-2 mt-3">
      <div className="flex items-center justify-between text-[11px]">
        <span className="font-semibold text-teal-300">
          {lang === 'bn' ? 'pH রেইনবো কালার স্কেল (pH Spectrum Gauge)' : 'pH Rainbow Color Gauge'}
        </span>
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${badgeColor}`}>
          {lang === 'bn' ? statusBn : statusEn}
        </span>
      </div>

      <div className="relative pt-3 pb-1">
        <div
          className="absolute top-0 -ml-1.5 transition-all duration-300 text-teal-300"
          style={{ left: `${percent}%` }}
        >
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white mx-auto drop-shadow" />
        </div>

        <div
          className="w-full h-3.5 rounded-full shadow-inner border border-slate-700/60"
          style={{
            background: 'linear-gradient(to right, #ef4444 0%, #f97316 20%, #eab308 40%, #10b981 50%, #06b6d4 70%, #3b82f6 85%, #8b5cf6 100%)',
          }}
        />

        <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1 px-0.5">
          <span>0 (এসিড)</span>
          <span className="text-amber-400 font-bold">3</span>
          <span className="text-emerald-400 font-bold">7 (নিরপেক্ষ)</span>
          <span className="text-cyan-400 font-bold">11</span>
          <span>14 (ক্ষার)</span>
        </div>
      </div>
    </div>
  );
};

export const ChemistryCalculator: React.FC<Props> = ({ lang = 'bn' }) => {
  const [activeTab, setActiveTab] = useState<ChemistryTab>('mole_molarity');
  const [copied, setCopied] = useState(false);

  // Module C1 & C2: Mole & Molarity State
  const [moleSubTab, setMoleSubTab] = useState<'molarity' | 'unified_mole'>('molarity');
  const [molaritySolveFor, setMolaritySolveFor] = useState<'W' | 'S' | 'V'>('W');
  const [molarityW, setMolarityW] = useState<number>(5.3);
  const [molarityS, setMolarityS] = useState<number>(0.1);
  const [molarityV, setMolarityV] = useState<number>(250);
  const [molarityFormula, setMolarityFormula] = useState<string>('Na2CO3');

  const [unifiedType, setUnifiedType] = useState<'mass' | 'moles' | 'volume' | 'particles'>('mass');
  const [unifiedValue, setUnifiedValue] = useState<number>(54);
  const [unifiedFormula, setUnifiedFormula] = useState<string>('H2O');

  // Module C3 & C4: Composition & Formula State
  const [compSubTab, setCompSubTab] = useState<'pct' | 'empirical'>('pct');
  const [compFormula, setCompFormula] = useState<string>('CuSO4.5H2O');
  const [empEl1, setEmpEl1] = useState<{ sym: string; pct: number }>({ sym: 'C', pct: 92.31 });
  const [empEl2, setEmpEl2] = useState<{ sym: string; pct: number }>({ sym: 'H', pct: 7.69 });
  const [empActualMass, setEmpActualMass] = useState<number>(78);

  // Module C5: Limiting Reactant State
  const [limPreset, setLimPreset] = useState<string>('h2_o2');
  const [limMassA, setLimMassA] = useState<number>(4);
  const [limMassB, setLimMassB] = useState<number>(16);
  const [limActualProduct, setLimActualProduct] = useState<number>(18);

  // Module E: Bond Energy State
  const [bondReaction, setBondReaction] = useState<string>('methane_cl');

  // Module A: Gas Diffusion State
  const [gas1, setGas1] = useState<string>('NH3');
  const [gas2, setGas2] = useState<string>('HCl');

  // Module D: Oxidation State State
  const [oxCompound, setOxCompound] = useState<string>('KMnO4');
  const [oxTarget, setOxTarget] = useState<string>('Mn');

  // Module F: Acid-Base & pH State
  const [abSubTab, setAbSubTab] = useState<'ph' | 'titration'>('ph');
  const [phInput, setPhInput] = useState<number>(0.01);
  const [titrVa, setTitrVa] = useState<number>(25);
  const [titrSa, setTitrSa] = useState<number>(0.1);
  const [titrSb, setTitrSb] = useState<number>(0.1);

  // Module G: Hydrocarbon State
  const [hcSeries, setHcSeries] = useState<'alkane' | 'alkene' | 'alkyne'>('alkane');
  const [hcN, setHcN] = useState<number>(3);

  // Module B: Atomic Structure State
  const [atomSubTab, setAtomSubTab] = useState<'isotope' | 'bohr'>('isotope');
  const [iso1Mass, setIso1Mass] = useState<number>(35);
  const [iso1Pct, setIso1Pct] = useState<number>(75);
  const [iso2Mass, setIso2Mass] = useState<number>(37);
  const [iso2Pct, setIso2Pct] = useState<number>(25);
  const [bohrN, setBohrN] = useState<number>(2);

  // Dispatched Result per Active Tab
  let activeResult: ChemistryResult = { success: false, steps: [] };

  try {
    switch (activeTab) {
      case 'mole_molarity':
        if (moleSubTab === 'molarity') {
          const parsed = parseChemicalFormula(molarityFormula);
          activeResult = calcMolarity(molaritySolveFor, {
            W: molarityW,
            S: molarityS,
            V: molarityV,
            M: parsed.molarMass,
            compoundName: molarityFormula,
          });
        } else {
          const parsed = parseChemicalFormula(unifiedFormula);
          activeResult = convertUnifiedMole({
            type: unifiedType,
            value: unifiedValue,
            molarMass: parsed.molarMass,
          });
        }
        break;

      case 'composition_formula':
        if (compSubTab === 'pct') {
          const parsed = parseChemicalFormula(compFormula);
          activeResult = {
            success: true,
            value: `${parsed.molarMass.toFixed(3)} g/mol`,
            steps: [
              {
                labelBn: 'যৌগের আণবিক ভর ও উপাদান মৌলসমূহ',
                labelEn: 'Molecular Mass and Elemental Composition',
                latex: `M(${compFormula}) = ${parsed.molarMass.toFixed(3)}\\text{ g/mol}`,
              },
              ...parsed.details.map((d) => ({
                labelBn: `${d.symbol} মৌলের শতকরা পরিমাণ`,
                labelEn: `Percentage of ${d.symbol}`,
                latex: `\\%\\text{ of } ${d.symbol} = \\frac{${d.count} \\times ${d.atomicWeight.toFixed(3)}}{${parsed.molarMass.toFixed(3)}} \\times 100\\% = \\mathbf{${d.percentage.toFixed(2)}\\%}`,
              })),
            ],
          };
        } else {
          activeResult = calcEmpiricalAndMolecularFormula(
            [
              { symbol: empEl1.sym, percentage: empEl1.pct },
              { symbol: empEl2.sym, percentage: empEl2.pct },
            ],
            empActualMass
          );
        }
        break;

      case 'limiting_reactant':
        if (limPreset === 'h2_o2') {
          activeResult = calcLimitingReactant(2, limMassA, 2.016, 'H2', 1, limMassB, 31.998, 'O2', 2, 18.015, 'H2O', limActualProduct);
        } else if (limPreset === 'mg_hcl') {
          activeResult = calcLimitingReactant(1, limMassA, 24.305, 'Mg', 2, limMassB, 36.461, 'HCl', 1, 95.211, 'MgCl2', limActualProduct);
        } else if (limPreset === 'caco3_hcl') {
          activeResult = calcLimitingReactant(1, limMassA, 100.086, 'CaCO3', 2, limMassB, 36.461, 'HCl', 1, 44.009, 'CO2', limActualProduct);
        } else {
          activeResult = calcLimitingReactant(1, limMassA, 28.014, 'N2', 3, limMassB, 2.016, 'H2', 2, 17.031, 'NH3', limActualProduct);
        }
        break;

      case 'bond_energy':
        if (bondReaction === 'methane_cl') {
          activeResult = calcReactionEnthalpy(
            [{ bond: 'C-H', count: 1 }, { bond: 'Cl-Cl', count: 1 }],
            [{ bond: 'C-Cl', count: 1 }, { bond: 'H-Cl', count: 1 }]
          );
        } else if (bondReaction === 'ethene_h2') {
          activeResult = calcReactionEnthalpy(
            [{ bond: 'C=C', count: 1 }, { bond: 'H-H', count: 1 }],
            [{ bond: 'C-C', count: 1 }, { bond: 'C-H', count: 2 }]
          );
        } else if (bondReaction === 'ammonia') {
          activeResult = calcReactionEnthalpy(
            [{ bond: 'N#N', count: 1 }, { bond: 'H-H', count: 3 }],
            [{ bond: 'N-H', count: 6 }]
          );
        } else {
          // Methane Combustion: CH4 + 2 O2 -> CO2 + 2 H2O
          activeResult = calcReactionEnthalpy(
            [{ bond: 'C-H', count: 4 }, { bond: 'O=O', count: 2 }],
            [{ bond: 'C=O', count: 2 }, { bond: 'O-H', count: 4 }]
          );
        }
        break;

      case 'diffusion':
        const m1 = PRESET_GASES[gas1]?.molarMass || 17;
        const m2 = PRESET_GASES[gas2]?.molarMass || 36.5;
        activeResult = calcGrahamDiffusion('ratio', { M1: m1, M2: m2 });
        break;

      case 'oxidation':
        activeResult = calcOxidationState(oxCompound, oxTarget, 0);
        break;

      case 'acid_base':
        if (abSubTab === 'ph') {
          activeResult = calcPH(phInput, 'conc_H');
        } else {
          activeResult = calcNeutralization(titrVa, titrSa, 1, 1, undefined, titrSb, 'VB');
        }
        break;

      case 'hydrocarbon':
        activeResult = generateHydrocarbon(hcSeries, hcN);
        break;

      case 'atomic_structure':
        if (atomSubTab === 'isotope') {
          activeResult = calcAverageAtomicMass([
            { massNumber: iso1Mass, abundance: iso1Pct },
            { massNumber: iso2Mass, abundance: iso2Pct },
          ]);
        } else {
          activeResult = calcBohrAngularMomentum(bohrN);
        }
        break;
    }
  } catch (err: any) {
    activeResult = { success: false, steps: [], errorMessage: err.message || 'গণনায় ত্রুটি ঘটেছে।' };
  }

  const handleCopy = () => {
    if (activeResult.value !== undefined) {
      navigator.clipboard.writeText(`${activeResult.value} ${activeResult.unit || ''}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const tabs = [
    { id: 'mole_molarity', num: 6, titleBn: 'মোলার ধারণা ও মোলারিটি', titleEn: 'Mole & Molarity', icon: <Beaker className="w-4 h-4" /> },
    { id: 'composition_formula', num: 6, titleBn: 'সংযুতি ও আণবিক সংকেত', titleEn: 'Composition & Formula', icon: <FlaskConical className="w-4 h-4" /> },
    { id: 'limiting_reactant', num: 6, titleBn: 'লিমিটিং বিক্রিয়ক ও ফলন', titleEn: 'Limiting Reactant', icon: <TestTube2 className="w-4 h-4" /> },
    { id: 'bond_energy', num: 8, titleBn: 'বন্ধন শক্তি ও ΔH', titleEn: 'Bond Energy & ΔH', icon: <Flame className="w-4 h-4" /> },
    { id: 'diffusion', num: 2, titleBn: 'গ্যাসের ব্যাপন (Graham)', titleEn: 'Gas Diffusion', icon: <Wind className="w-4 h-4" /> },
    { id: 'oxidation', num: 7, titleBn: 'জারণ সংখ্যা নির্ণয়', titleEn: 'Oxidation Number', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'acid_base', num: 9, titleBn: 'এসিড-ক্ষার ও pH', titleEn: 'Acid-Base & pH', icon: <Droplet className="w-4 h-4" /> },
    { id: 'hydrocarbon', num: 11, titleBn: 'হাইড্রোকার্বন', titleEn: 'Hydrocarbons', icon: <Atom className="w-4 h-4" /> },
    { id: 'atomic_structure', num: 3, titleBn: 'পরমাণুর গঠন ও বোর', titleEn: 'Atomic Structure', icon: <Atom className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
      {/* Top Banner Header */}
      <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-900 via-teal-950/40 to-slate-900 border-b border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-teal-400 font-semibold text-sm mb-1">
            <FlaskConical className="w-4 h-4" />
            <span>{lang === 'bn' ? 'এসএসসি রসায়ন সমাধান ও সমীকরণ ইঞ্জিন' : 'SSC Chemistry Unified Solutions Suite'}</span>
            <span className="px-2 py-0.5 rounded-full text-xs bg-teal-500/10 border border-teal-500/20 text-teal-300">
              NCTB 9-10
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {lang === 'bn' ? 'গাণিতিক রসায়ন ও রাসায়নিক গণনা ক্যালকুলেটর' : 'Quantitative Chemistry & Stoichiometry Solver'}
          </h2>
        </div>

        {/* Quick Links to Standalone Tools */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <a
            href={`/${lang}/tools/molar-mass`}
            className="flex items-center gap-1 bg-slate-800/80 hover:bg-slate-800 text-teal-300 px-2.5 py-1.5 rounded-lg border border-slate-700 transition"
          >
            <span>কেলাস পানি ও মোলার ভর</span>
            <ArrowRight className="w-3 h-3" />
          </a>
          <a
            href={`/${lang}/tools/redox-balancer`}
            className="flex items-center gap-1 bg-slate-800/80 hover:bg-slate-800 text-teal-300 px-2.5 py-1.5 rounded-lg border border-slate-700 transition"
          >
            <span>আয়ন-ইলেকট্রন রেডক্স সমতাকরণ</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Module Tabs Header */}
      <div className="p-3 bg-slate-950/60 border-b border-slate-800 overflow-x-auto scrollbar-thin">
        {/* Mobile Dropdown */}
        <div className="md:hidden pb-1">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value as ChemistryTab)}
            aria-label="Select Chemistry Module"
            className="w-full bg-slate-800 text-white font-medium p-2.5 rounded-xl border border-slate-700"
          >
            {tabs.map((tb) => (
              <option key={tb.id} value={tb.id}>
                {tb.num}ম অধ্যায়: {lang === 'bn' ? tb.titleBn : tb.titleEn}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex items-center gap-1.5 min-w-max">
          {tabs.map((tb) => (
            <button
              key={tb.id}
              onClick={() => setActiveTab(tb.id as ChemistryTab)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === tb.id
                  ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20 font-bold'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              <span>{tb.icon}</span>
              <span>{lang === 'bn' ? tb.titleBn : tb.titleEn}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Workspace Grid */}
      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Form Controls (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Active Title */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-sm font-bold text-teal-400">
              {tabs.find((t) => t.id === activeTab)?.num}ম অধ্যায়: {lang === 'bn' ? tabs.find((t) => t.id === activeTab)?.titleBn : tabs.find((t) => t.id === activeTab)?.titleEn}
            </span>
            <span className="text-xs text-slate-500 font-mono">Module: #{activeTab}</span>
          </div>

          {/* TAB 1: MOLE & MOLARITY */}
          {activeTab === 'mole_molarity' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setMoleSubTab('molarity')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${moleSubTab === 'molarity' ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                >
                  দ্রবণের মোলারিটি (W = S·V·M / 1000)
                </button>
                <button
                  onClick={() => setMoleSubTab('unified_mole')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${moleSubTab === 'unified_mole' ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                >
                  মোলের সমন্বিত রূপান্তর (n, W, V, N)
                </button>
              </div>

              {moleSubTab === 'molarity' ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 font-medium">নির্ণয় করতে হবে:</span>
                    <select
                      value={molaritySolveFor}
                      onChange={(e) => setMolaritySolveFor(e.target.value as any)}
                      aria-label="Solve for variable"
                      className="bg-slate-950 text-teal-300 border border-slate-700 rounded px-2 py-1 text-xs"
                    >
                      <option value="W">দ্রব্যের ভর W (grams)</option>
                      <option value="S">মোলারিটি S (Molar)</option>
                      <option value="V">আয়তন V (mL)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-400">দ্রব্যের সংকেত (Solute)</label>
                      <input
                        type="text"
                        value={molarityFormula}
                        onChange={(e) => setMolarityFormula(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm font-mono"
                        placeholder="e.g. Na2CO3, NaOH, HCl"
                      />
                      <div className="flex gap-1.5 mt-1.5">
                        {['Na2CO3', 'NaOH', 'HCl', 'H2SO4', 'NaCl'].map((c) => (
                          <button
                            key={c}
                            onClick={() => setMolarityFormula(c)}
                            className="text-[10px] px-1.5 py-0.5 bg-slate-800 hover:bg-slate-700 text-teal-300 rounded"
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    {molaritySolveFor !== 'W' && (
                      <div>
                        <label className="text-xs text-slate-400">দ্রব্যের ভর W (grams)</label>
                        <input
                          type="number"
                          value={molarityW}
                          onChange={(e) => setMolarityW(parseFloat(e.target.value) || 0)}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm"
                        />
                      </div>
                    )}

                    {molaritySolveFor !== 'S' && (
                      <div>
                        <label className="text-xs text-slate-400">মোলারিটি S (M)</label>
                        <input
                          type="number"
                          step="0.05"
                          value={molarityS}
                          onChange={(e) => setMolarityS(parseFloat(e.target.value) || 0.1)}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm"
                        />
                        <div className="flex gap-1.5 mt-1.5">
                          {[
                            { label: 'মোলার (1M)', val: 1.0 },
                            { label: 'সেমিমোলার (0.5M)', val: 0.5 },
                            { label: 'ডেসিমোলার (0.1M)', val: 0.1 },
                          ].map((p) => (
                            <button
                              key={p.val}
                              onClick={() => setMolarityS(p.val)}
                              className="text-[10px] px-1.5 py-0.5 bg-slate-800 hover:bg-slate-700 text-teal-300 rounded"
                            >
                              {p.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {molaritySolveFor !== 'V' && (
                      <div>
                        <label className="text-xs text-slate-400">আয়তন V (mL)</label>
                        <input
                          type="number"
                          value={molarityV}
                          onChange={(e) => setMolarityV(parseFloat(e.target.value) || 250)}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-400">যৌগের সংকেত</label>
                      <input
                        type="text"
                        value={unifiedFormula}
                        onChange={(e) => setUnifiedFormula(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">ইনপুটের ধরন</label>
                      <select
                        value={unifiedType}
                        onChange={(e) => setUnifiedType(e.target.value as any)}
                        aria-label="Unified input type"
                        className="w-full bg-slate-950 text-teal-300 border border-slate-700 rounded-lg p-2 text-sm"
                      >
                        <option value="mass">ভর W (grams)</option>
                        <option value="moles">মোল সংখ্যা n</option>
                        <option value="volume">STP-তে আয়তন V (Liters)</option>
                        <option value="particles">কণার সংখ্যা N</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">মান প্রবেশ করান:</label>
                    <input
                      type="number"
                      value={unifiedValue}
                      onChange={(e) => setUnifiedValue(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: PERCENTAGE COMPOSITION & EMPIRICAL FORMULA */}
          {activeTab === 'composition_formula' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setCompSubTab('pct')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${compSubTab === 'pct' ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                >
                  শতকরা সংযুতি (সংকেত হতে)
                </button>
                <button
                  onClick={() => setCompSubTab('empirical')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${compSubTab === 'empirical' ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                >
                  স্থূল ও আণবিক সংকেত নির্ণয়
                </button>
              </div>

              {compSubTab === 'pct' ? (
                <div>
                  <label className="text-xs text-slate-400">যৌগের সংকেত (কেলাস পানিসহ প্রযোজ্য)</label>
                  <input
                    type="text"
                    value={compFormula}
                    onChange={(e) => setCompFormula(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm font-mono"
                    placeholder="e.g. CuSO4.5H2O, H2SO4, Ca(OH)2"
                  />
                  <div className="flex gap-1.5 mt-2">
                    {['CuSO4.5H2O', 'H2SO4', 'Ca(OH)2', 'Na2CO3.10H2O', 'C6H12O6'].map((f) => (
                      <button
                        key={f}
                        onClick={() => setCompFormula(f)}
                        className="text-[10px] px-1.5 py-0.5 bg-slate-800 text-teal-300 rounded"
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-400">১ম মৌল প্রতীক ও %</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={empEl1.sym}
                          onChange={(e) => setEmpEl1({ ...empEl1, sym: e.target.value })}
                          className="w-16 bg-slate-950 border border-slate-700 rounded p-2 text-center text-sm font-mono text-white"
                        />
                        <input
                          type="number"
                          step="0.01"
                          value={empEl1.pct}
                          onChange={(e) => setEmpEl1({ ...empEl1, pct: parseFloat(e.target.value) || 0 })}
                          className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">২য় মৌল প্রতীক ও %</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={empEl2.sym}
                          onChange={(e) => setEmpEl2({ ...empEl2, sym: e.target.value })}
                          className="w-16 bg-slate-950 border border-slate-700 rounded p-2 text-center text-sm font-mono text-white"
                        />
                        <input
                          type="number"
                          step="0.01"
                          value={empEl2.pct}
                          onChange={(e) => setEmpEl2({ ...empEl2, pct: parseFloat(e.target.value) || 0 })}
                          className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">প্রকৃত আণবিক ভর (ঐচ্ছিক — আণবিক সংকেত বের করতে)</label>
                    <input
                      type="number"
                      value={empActualMass}
                      onChange={(e) => setEmpActualMass(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white"
                      placeholder="e.g. 78 for Benzene (C6H6)"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: LIMITING REACTANT */}
          {activeTab === 'limiting_reactant' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs text-slate-400 font-medium">বোর্ড পরীক্ষার আদর্শ বিক্রিয়া নির্বাচন:</label>
                <select
                  value={limPreset}
                  onChange={(e) => setLimPreset(e.target.value)}
                  aria-label="Limiting reactant reaction"
                  className="w-full bg-slate-950 text-teal-300 border border-slate-700 rounded-lg p-2 text-xs font-mono"
                >
                  <option value="h2_o2">2 H2 + O2 → 2 H2O (পানির সংশ্লেষণ)</option>
                  <option value="mg_hcl">Mg + 2 HCl → MgCl2 + H2 (ধাতু ও এসিড)</option>
                  <option value="caco3_hcl">CaCO3 + 2 HCl → CaCl2 + H2O + CO2 (চুনাপাথর)</option>
                  <option value="n2_h2">N2 + 3 H2 → 2 NH3 (হেবার-বোশ পদ্ধতি)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400">১ম বিক্রিয়কের ভর (g)</label>
                  <input
                    type="number"
                    value={limMassA}
                    onChange={(e) => setLimMassA(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400">২য় বিক্রিয়কের ভর (g)</label>
                  <input
                    type="number"
                    value={limMassB}
                    onChange={(e) => setLimMassB(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-400">ল্যাবরেটরিতে প্রাপ্ত উৎপাদের ভর (ঐচ্ছিক — শতকরা ফলন নির্ণয়):</label>
                <input
                  type="number"
                  value={limActualProduct}
                  onChange={(e) => setLimActualProduct(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white"
                />
              </div>
            </div>
          )}

          {/* TAB 4: BOND ENERGY */}
          {activeTab === 'bond_energy' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs text-slate-400 font-medium">বিক্রিয়া নির্বাচন (NCTB ৮ম অধ্যায় মানসমূহ):</label>
                <select
                  value={bondReaction}
                  onChange={(e) => setBondReaction(e.target.value)}
                  aria-label="Bond energy reaction"
                  className="w-full bg-slate-950 text-teal-300 border border-slate-700 rounded-lg p-2.5 text-xs font-mono"
                >
                  <option value="methane_cl">CH4 + Cl2 → CH3Cl + HCl (মিথেনের ক্লোরিনেশন)</option>
                  <option value="ethene_h2">C2H4 + H2 → C2H6 (ইথিনের হাইড্রোজিনেশন)</option>
                  <option value="ammonia">N2 + 3 H2 → 2 NH3 (অ্যামোনিয়া সংশ্লেষণ)</option>
                  <option value="methane_combustion">CH4 + 2 O2 → CO2 + 2 H2O (মিথেন দহন)</option>
                </select>
              </div>

              <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs space-y-1 text-slate-300">
                <span className="text-teal-400 font-bold block">পাঠ্যবইয়ের প্রমিত বন্ধন শক্তিসমূহ (kJ/mol):</span>
                <p>C-H: 414 • Cl-Cl: 244 • C-Cl: 326 • H-Cl: 431 • C=C: 615 • C-C: 344 • H-H: 436 • N≡N: 946 • N-H: 391</p>
              </div>
            </div>
          )}

          {/* TAB 5: GAS DIFFUSION */}
          {activeTab === 'diffusion' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400">১ম গ্যাস নির্বাচন:</label>
                  <select
                    value={gas1}
                    onChange={(e) => setGas1(e.target.value)}
                    aria-label="First gas"
                    className="w-full bg-slate-950 text-teal-300 border border-slate-700 rounded-lg p-2 text-xs"
                  >
                    {Object.entries(PRESET_GASES).map(([k, g]) => (
                      <option key={k} value={k}>{lang === 'bn' ? g.nameBn : g.nameEn} (M={g.molarMass})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-400">২য় গ্যাস নির্বাচন:</label>
                  <select
                    value={gas2}
                    onChange={(e) => setGas2(e.target.value)}
                    aria-label="Second gas"
                    className="w-full bg-slate-950 text-teal-300 border border-slate-700 rounded-lg p-2 text-xs"
                  >
                    {Object.entries(PRESET_GASES).map(([k, g]) => (
                      <option key={k} value={k}>{lang === 'bn' ? g.nameBn : g.nameEn} (M={g.molarMass})</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: OXIDATION STATE */}
          {activeTab === 'oxidation' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400">যৌগের সংকেত:</label>
                  <input
                    type="text"
                    value={oxCompound}
                    onChange={(e) => setOxCompound(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white font-mono"
                  />
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {['KMnO4', 'K2Cr2O7', 'H2SO4', 'HNO3', 'Na2S2O3'].map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          setOxCompound(c);
                          if (c === 'KMnO4') setOxTarget('Mn');
                          else if (c === 'K2Cr2O7') setOxTarget('Cr');
                          else if (c === 'H2SO4' || c === 'Na2S2O3') setOxTarget('S');
                          else if (c === 'HNO3') setOxTarget('N');
                        }}
                        className="text-[10px] px-1.5 py-0.5 bg-slate-800 text-teal-300 rounded"
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs text-slate-400">টার্গেট মৌল:</label>
                  <input
                    type="text"
                    value={oxTarget}
                    onChange={(e) => setOxTarget(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: ACID-BASE & PH */}
          {activeTab === 'acid_base' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setAbSubTab('ph')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${abSubTab === 'ph' ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                >
                  pH ও pOH গণনা
                </button>
                <button
                  onClick={() => setAbSubTab('titration')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${abSubTab === 'titration' ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                >
                  প্রশমন টাইট্রেশন (Va·Sa / a = Vb·Sb / b)
                </button>
              </div>

              {abSubTab === 'ph' ? (
                <div>
                  <label className="text-xs text-slate-400">[H+] আয়ন মোলার ঘনমাত্রা (M):</label>
                  <input
                    type="number"
                    step="0.001"
                    value={phInput}
                    onChange={(e) => setPhInput(parseFloat(e.target.value) || 0.01)}
                    className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white"
                  />
                  <div className="flex gap-1.5 mt-1.5">
                    {[
                      { label: '0.1 M HCl', val: 0.1 },
                      { label: '0.01 M HCl', val: 0.01 },
                      { label: '0.001 M HCl', val: 0.001 },
                    ].map((p) => (
                      <button
                        key={p.val}
                        onClick={() => setPhInput(p.val)}
                        className="text-[10px] px-1.5 py-0.5 bg-slate-800 text-teal-300 rounded"
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                  <PHRainbowGauge ph={typeof activeResult.value === 'number' ? activeResult.value : (phInput > 0 ? -Math.log10(phInput) : 7)} lang={lang} />
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">এসিডের আয়তন Va (mL)</label>
                    <input
                      type="number"
                      value={titrVa}
                      onChange={(e) => setTitrVa(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">এসিড মোলারিটি Sa (M)</label>
                    <input
                      type="number"
                      step="0.05"
                      value={titrSa}
                      onChange={(e) => setTitrSa(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">ক্ষারক মোলারিটি Sb (M)</label>
                    <input
                      type="number"
                      step="0.05"
                      value={titrSb}
                      onChange={(e) => setTitrSb(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 8: HYDROCARBON */}
          {activeTab === 'hydrocarbon' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400">সমগোত্রীয় শ্রেণি:</label>
                  <select
                    value={hcSeries}
                    onChange={(e) => setHcSeries(e.target.value as any)}
                    aria-label="Homologous series"
                    className="w-full bg-slate-950 text-teal-300 border border-slate-700 rounded p-2 text-sm"
                  >
                    <option value="alkane">অ্যালকেন (Alkane - CnH2n+2)</option>
                    <option value="alkene">অ্যালকিন (Alkene - CnH2n)</option>
                    <option value="alkyne">অ্যালকাইন (Alkyne - CnH2n-2)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-400">কার্বন সংখ্যা n (১ থেকে ১০):</label>
                  <input
                    type="number"
                    min={hcSeries === 'alkane' ? 1 : 2}
                    max={10}
                    value={hcN}
                    onChange={(e) => setHcN(parseInt(e.target.value) || (hcSeries === 'alkane' ? 1 : 2))}
                    className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 9: ATOMIC STRUCTURE */}
          {activeTab === 'atomic_structure' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setAtomSubTab('isotope')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${atomSubTab === 'isotope' ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                >
                  আইসোটোপ হতে আপেক্ষিক পারমাণবিক ভর
                </button>
                <button
                  onClick={() => setAtomSubTab('bohr')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${atomSubTab === 'bohr' ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                >
                  বোর কৌণিক ভরবেগ (mvr)
                </button>
              </div>

              {atomSubTab === 'isotope' ? (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">১ম আইসোটোপ ভর ও প্রাচুর্য (%)</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={iso1Mass}
                        onChange={(e) => setIso1Mass(parseFloat(e.target.value) || 0)}
                        className="w-1/2 bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white"
                      />
                      <input
                        type="number"
                        value={iso1Pct}
                        onChange={(e) => setIso1Pct(parseFloat(e.target.value) || 0)}
                        className="w-1/2 bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">২য় আইসোটোপ ভর ও প্রাচুর্য (%)</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={iso2Mass}
                        onChange={(e) => setIso2Mass(parseFloat(e.target.value) || 0)}
                        className="w-1/2 bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white"
                      />
                      <input
                        type="number"
                        value={iso2Pct}
                        onChange={(e) => setIso2Pct(parseFloat(e.target.value) || 0)}
                        className="w-1/2 bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="text-xs text-slate-400">শক্তিস্তর বা কক্ষপথের ক্রম n (১, ২, ৩, ৪...):</label>
                  <input
                    type="number"
                    min={1}
                    value={bohrN}
                    onChange={(e) => setBohrN(parseInt(e.target.value) || 1)}
                    className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Mathematical Derivations & Output (5 Cols) */}
        <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-4 sm:p-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                {lang === 'bn' ? 'ধাপে ধাপে গাণিতিক সমাধান' : 'Step-by-Step Derivation'}
              </span>
              <button
                onClick={handleCopy}
                disabled={!activeResult.success}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-teal-300 transition disabled:opacity-30 cursor-pointer"
                title="Copy Final Result"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (lang === 'bn' ? 'কপি হয়েছে' : 'Copied!') : (lang === 'bn' ? 'কপি' : 'Copy')}</span>
              </button>
            </div>

            {/* Error Message */}
            {!activeResult.success && activeResult.errorMessage && (
              <div className="p-3 bg-red-950/40 border border-red-800/60 rounded-xl flex items-start gap-2 text-red-300 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{activeResult.errorMessage}</span>
              </div>
            )}

            {/* Prominent Result Hero Box */}
            {activeResult.success && (
              <div className="p-4 bg-gradient-to-br from-teal-500/10 via-slate-900 to-slate-900 border border-teal-500/30 rounded-xl">
                <span className="text-xs text-teal-400 font-semibold block mb-1">
                  {lang === 'bn' ? 'নির্ণীত ফলাফল (Final Answer):' : 'Final Answer:'}
                </span>
                <div className="text-2xl font-mono font-extrabold text-white flex items-baseline gap-2">
                  <span>{typeof activeResult.value === 'number' ? (Math.abs(activeResult.value) < 0.001 && activeResult.value !== 0 ? activeResult.value.toExponential(4) : activeResult.value.toLocaleString(undefined, { maximumFractionDigits: 4 })) : activeResult.value}</span>
                  {activeResult.unit && (
                    <span className="text-sm font-sans font-medium text-teal-300">
                      {activeResult.unit}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Step-by-Step Derivations */}
            {activeResult.steps.length > 0 && (
              <div className="space-y-3 pt-1">
                {activeResult.steps.map((step, idx) => (
                  <div key={idx} className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs space-y-1.5">
                    <span className="font-semibold text-slate-400 block">
                      {idx + 1}. {lang === 'bn' ? step.labelBn : step.labelEn}
                    </span>
                    <div className="py-1 px-2 bg-slate-950/80 rounded font-mono overflow-x-auto text-teal-200">
                      <Latex formula={step.latex} />
                    </div>
                    {step.notesBn && (
                      <p className="text-slate-400 italic text-[11px]">
                        {lang === 'bn' ? step.notesBn : step.notesEn}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
            <span>NCTB কারিকুলাম ৯-১০ স্ট্যান্ডার্ড সমীকরণ</span>
            <span className="text-teal-400 font-mono">Chemistry 9-10</span>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Floating Answer Bar */}
      {activeResult.success && (
        <div
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-teal-500/40 px-4 py-2.5 shadow-2xl flex items-center justify-between"
          style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom, 0.625rem))' }}
        >
          <div>
            <span className="text-[10px] text-teal-400 font-semibold block uppercase tracking-wider">
              {lang === 'bn' ? 'ফলাফল (Result):' : 'Result:'}
            </span>
            <div className="text-base font-mono font-bold text-white flex items-baseline gap-1.5">
              <span>
                {typeof activeResult.value === 'number'
                  ? Math.abs(activeResult.value) < 0.001 && activeResult.value !== 0
                    ? activeResult.value.toExponential(4)
                    : activeResult.value.toLocaleString(undefined, { maximumFractionDigits: 4 })
                  : activeResult.value}
              </span>
              {activeResult.unit && <span className="text-xs text-teal-300 font-normal">{activeResult.unit}</span>}
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition flex items-center gap-1 shadow-lg shadow-teal-500/20"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (lang === 'bn' ? 'কপি!' : 'Copied!') : (lang === 'bn' ? 'কপি' : 'Copy')}</span>
          </button>
        </div>
      )}
    </div>
  );
};
