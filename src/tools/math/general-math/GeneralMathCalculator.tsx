import { RevisionTracker } from '../../../components/tools/RevisionTracker';
import React, { useState } from 'react';
import {
  Calculator,
  Layers,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Plus,
  Trash2,
  BookOpen,
} from 'lucide-react';
import { Latex } from '../../../components/math/Latex';
import {
  calcPowerSet,
  calcCartesianProduct,
  calcAlgebraicExpansion,
  calcPower,
  calcLogarithm,
  toScientificNotation,
  calcTrigRatios,
  calcRightTriangle,
  calcTowerTwoPoints,
  calcBrokenTree,
  calcComponendoDividendo,
  calcMensuration,
  calcGroupedStatistics,
  type ClassInterval,
  type MathResult,
  type StatisticsResult,
} from './engine';

interface Props {
  lang?: 'bn' | 'en';
}

type ChapterId = 'ch2' | 'ch3' | 'ch4' | 'ch9_10' | 'ch11' | 'ch16' | 'ch17';


const FrequencyHistogram: React.FC<{ classes: ClassInterval[]; modalIndex?: number; lang?: 'bn' | 'en' }> = ({
  classes,
  modalIndex,
  lang = 'bn',
}) => {
  if (!classes || classes.length === 0) return null;
  const maxFreq = Math.max(...classes.map((c) => c.freq), 1);
  const chartHeight = 110;
  const chartWidth = 320;
  const padding = 25;
  const barWidth = Math.max(16, (chartWidth - padding * 2) / classes.length - 6);

  return (
    <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 space-y-2 mt-3">
      <div className="flex items-center justify-between text-[11px]">
        <span className="font-semibold text-cyan-300">
          {lang === 'bn' ? 'গণসংখ্যা আয়তলেখ চিত্র (Frequency Histogram)' : 'Grouped Frequency Histogram'}
        </span>
        <span className="text-[10px] text-slate-400">
          {lang === 'bn' ? 'শীর্ষ গণসংখ্যা: ' : 'Peak Frequency: '}{maxFreq}
        </span>
      </div>
      <div className="flex justify-center overflow-x-auto">
        <svg viewBox={`0 0 ${chartWidth} ${chartHeight + 25}`} className="w-full max-w-sm h-32 overflow-visible">
          <line x1={padding} y1={chartHeight} x2={chartWidth - 10} y2={chartHeight} stroke="#475569" strokeWidth="1.5" />
          <line x1={padding} y1={10} x2={padding} y2={chartHeight} stroke="#475569" strokeWidth="1.5" />
          {classes.map((cls, idx) => {
            const barH = (cls.freq / maxFreq) * (chartHeight - 30);
            const x = padding + 8 + idx * (barWidth + 6);
            const y = chartHeight - barH;
            const isModal = idx === modalIndex;

            return (
              <g key={idx}>
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barH}
                  rx="3"
                  fill={isModal ? '#06b6d4' : '#1e293b'}
                  stroke={isModal ? '#67e8f9' : '#0ea5e9'}
                  strokeWidth="1.5"
                />
                <text
                  x={x + barWidth / 2}
                  y={y - 4}
                  textAnchor="middle"
                  fill={isModal ? '#67e8f9' : '#94a3b8'}
                  fontSize="9"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  {cls.freq}
                </text>
                <text
                  x={x + barWidth / 2}
                  y={chartHeight + 14}
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="8"
                  fontFamily="monospace"
                >
                  {cls.lower}-{cls.upper}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

const RightTriangleDiagram: React.FC<{ angle: number; dist: number; height: number; lang?: 'bn' | 'en' }> = ({
  angle,
  dist,
  height,
  lang = 'bn',
}) => {
  return (
    <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 space-y-2 mt-3">
      <div className="flex items-center justify-between text-[11px]">
        <span className="font-semibold text-cyan-300">
          {lang === 'bn' ? 'সমকোণী ত্রিভুজ জ্যামিতিক চিত্র' : 'Right-Angled Triangle Elevation Model'}
        </span>
        <span className="text-[10px] font-mono text-amber-400">θ = {angle}°</span>
      </div>
      <div className="flex justify-center">
        <svg viewBox="0 0 260 140" className="w-full max-w-xs h-32 overflow-visible">
          <line x1="20" y1="110" x2="240" y2="110" stroke="#475569" strokeWidth="1.5" />
          <path d="M 190 110 L 190 100 L 200 100" fill="none" stroke="#64748b" strokeWidth="1" />
          <polygon points="40,110 200,110 200,30" fill="rgba(6, 182, 212, 0.08)" stroke="#06b6d4" strokeWidth="2" />
          <path d="M 70 110 A 30 30 0 0 0 65 97" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="75" y="104" fill="#f59e0b" fontSize="9" fontWeight="bold" fontFamily="monospace">
            {angle}°
          </text>
          <text x="120" y="124" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
            {lang === 'bn' ? 'দূরত্ব ' : 'Base '}d = {dist}m
          </text>
          <text x="208" y="70" textAnchor="start" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">
            h = {height.toFixed(1)}m
          </text>
          <line x1="200" y1="110" x2="200" y2="30" stroke="#38bdf8" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
};

export const GeneralMathCalculator: React.FC<Props> = ({ lang = 'bn' }) => {
  const [activeChapter, setActiveChapter] = useState<ChapterId>('ch17');

  // Chapter 2 State
  const [ch2SubTab, setCh2SubTab] = useState<'power' | 'cartesian'>('power');
  const [ch2N, setCh2N] = useState<number>(3);
  const [ch2SetA, setCh2SetA] = useState<string>('a, b, c');
  const [ch2SetB, setCh2SetB] = useState<string>('1, 2');

  // Chapter 3 State
  const [ch3Type, setCh3Type] = useState<string>('sq_from_sum');
  const [ch3P1, setCh3P1] = useState<number>(5);
  const [ch3P2, setCh3P2] = useState<number>(6);

  // Chapter 4 State
  const [ch4Type, setCh4Type] = useState<'power' | 'log' | 'sci'>('log');
  const [ch4Base, setCh4Base] = useState<number>(10);
  const [ch4Target, setCh4Target] = useState<number>(100);
  const [ch4SciNum, setCh4SciNum] = useState<number>(45000);

  // Chapter 9 & 10 State
  const [trigSubTab, setTrigSubTab] = useState<'ratios' | 'height' | 'two_points' | 'broken_tree'>('height');
  const [trigAngle, setTrigAngle] = useState<number>(60);
  const [trigDist, setTrigDist] = useState<number>(30);
  const [twoPtAngle1, setTwoPtAngle1] = useState<number>(30);
  const [twoPtAngle2, setTwoPtAngle2] = useState<number>(60);
  const [twoPtDist, setTwoPtDist] = useState<number>(20);
  const [twoPtSide, setTwoPtSide] = useState<'same' | 'opposite'>('same');
  const [treeHeight, setTreeHeight] = useState<number>(48);
  const [treeAngle, setTreeAngle] = useState<number>(30);

  // Chapter 11 State
  const [ratioA, setRatioA] = useState<number>(5);
  const [ratioB, setRatioB] = useState<number>(3);

  // Chapter 16 State
  const [mensShape, setMensShape] = useState<string>('triangle_heron');
  const [mensP1, setMensP1] = useState<number>(3);
  const [mensP2, setMensP2] = useState<number>(4);
  const [mensP3, setMensP3] = useState<number>(5);

  // Chapter 17 (Statistics) State
  const [statClasses, setStatClasses] = useState<ClassInterval[]>([
    { lower: 31, upper: 40, freq: 4 },
    { lower: 41, upper: 50, freq: 6 },
    { lower: 51, upper: 60, freq: 8 },
  ]);

  // Calculations
  const ch2Result: MathResult =
    ch2SubTab === 'power'
      ? calcPowerSet(ch2N)
      : calcCartesianProduct(ch2SetA.split(','), ch2SetB.split(','));

  const ch3Result: MathResult =
    ch3Type === 'sq_from_sum'
      ? calcAlgebraicExpansion('sq_from_sum', { sum: ch3P1, prod: ch3P2 })
      : ch3Type === 'sq_from_diff'
      ? calcAlgebraicExpansion('sq_from_diff', { diff: ch3P1, prod: ch3P2 })
      : ch3Type === 'cube_sum'
      ? calcAlgebraicExpansion('cube_sum', { sum: ch3P1, prod: ch3P2 })
      : ch3Type === 'cube_diff'
      ? calcAlgebraicExpansion('cube_diff', { diff: ch3P1, prod: ch3P2 })
      : ch3Type === 'trinomial_sq'
      ? calcAlgebraicExpansion('trinomial_sq', { sum_abc: ch3P1, sum_pair: ch3P2 })
      : calcAlgebraicExpansion('trinomial_pair', { sum_abc: ch3P1, sum_sq: ch3P2 });

  const ch4Result: MathResult =
    ch4Type === 'power'
      ? calcPower(ch4Base, ch4Target)
      : ch4Type === 'log'
      ? calcLogarithm(ch4Base, ch4Target)
      : toScientificNotation(ch4SciNum);

  const trigResult: MathResult =
    trigSubTab === 'ratios'
      ? calcTrigRatios(trigAngle)
      : trigSubTab === 'height'
      ? calcRightTriangle('find_height', { theta: trigAngle, distance: trigDist })
      : trigSubTab === 'two_points'
      ? calcTowerTwoPoints(twoPtAngle1, twoPtAngle2, twoPtDist, twoPtSide)
      : calcBrokenTree(treeHeight, treeAngle);

  const ch11Result: MathResult = calcComponendoDividendo(ratioA, ratioB);

  const mensResult: MathResult =
    mensShape === 'equilateral_triangle'
      ? calcMensuration('equilateral_triangle', { a: mensP1 })
      : mensShape === 'triangle_included_angle'
      ? calcMensuration('triangle_included_angle', { a: mensP1, b: mensP2, theta: mensP3 })
      : mensShape === 'triangle_heron'
      ? calcMensuration('triangle_heron', { a: mensP1, b: mensP2, c: mensP3 })
      : mensShape === 'circle'
      ? calcMensuration('circle', { r: mensP1 })
      : mensShape === 'rhombus'
      ? calcMensuration('rhombus', { d1: mensP1, d2: mensP2 })
      : mensShape === 'regular_polygon'
      ? calcMensuration('regular_polygon', { n: mensP1, a: mensP2 })
      : mensShape === 'cube'
      ? calcMensuration('cube', { a: mensP1 })
      : calcMensuration('cylinder', { r: mensP1, h: mensP2 });

  const statResult: StatisticsResult = calcGroupedStatistics(statClasses);

  const handleAddClass = () => {
    const last = statClasses[statClasses.length - 1];
    const width = last ? last.upper - last.lower : 10;
    const newLower = last ? last.upper + 1 : 10;
    const newUpper = newLower + width;
    setStatClasses([...statClasses, { lower: newLower, upper: newUpper, freq: 5 }]);
  };

  const handleRemoveClass = (index: number) => {
    if (statClasses.length > 1) {
      setStatClasses(statClasses.filter((_, i) => i !== index));
    }
  };

  const handleUpdateClass = (index: number, field: keyof ClassInterval, val: number) => {
    const updated = [...statClasses];
    updated[index] = { ...updated[index], [field]: val };
    setStatClasses(updated);
  };

  const chapters = [
    { id: 'ch17', nameBn: '১৭ অধ্যায়: পরিসংখ্যান', nameEn: 'Ch 17: Statistics', icon: '📊' },
    { id: 'ch9_10', nameBn: '৯-১০ অধ্যায়: ত্রিকোণমিতি ও উচ্চতা', nameEn: 'Ch 9-10: Trigonometry', icon: '📐' },
    { id: 'ch3', nameBn: '৩য় অধ্যায়: বীজগাণিতিক রাশি', nameEn: 'Ch 3: Algebra', icon: '🔢' },
    { id: 'ch16', nameBn: '১৬ অধ্যায়: পরিমিতি (ক্ষেত্রফল ও ঘনবস্তু)', nameEn: 'Ch 16: Mensuration', icon: '📏' },
    { id: 'ch4', nameBn: '৪র্থ অধ্যায়: সূচক ও লগারিদম', nameEn: 'Ch 4: Logs & Powers', icon: '📈' },
    { id: 'ch11', nameBn: '১১ অধ্যায়: যোজন-বিয়োজন', nameEn: 'Ch 11: Ratio & Proportion', icon: '⚖️' },
    { id: 'ch2', nameBn: '২য় অধ্যায়: সেট ও ফাংশন', nameEn: 'Ch 2: Sets & Functions', icon: '🧮' },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl space-y-0">
      {/* Chapter Selection Ribbon */}
      <div className="bg-slate-950 border-b border-slate-800 p-3 sm:p-4 overflow-x-auto scrollbar-thin">
        {/* Mobile Chapter Dropdown */}
        <div className="md:hidden pb-1">
          <select
            value={activeChapter}
            onChange={(e) => setActiveChapter(e.target.value as ChapterId)}
            aria-label={lang === 'bn' ? 'সাধারণ গণিত অধ্যায় নির্বাচন' : 'Select General Math Chapter'}
            className="w-full bg-slate-900 text-white font-medium p-2.5 rounded-xl border border-slate-700 text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          >
            {chapters.map((ch) => (
              <option key={ch.id} value={ch.id}>
                {lang === 'bn' ? ch.nameBn : ch.nameEn}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Horizontal Tabs */}
        <div className="hidden md:flex gap-2 min-w-max">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => setActiveChapter(ch.id as ChapterId)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
                activeChapter === ch.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span>{ch.icon}</span>
              <span>{lang === 'bn' ? ch.nameBn : ch.nameEn}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Workspace */}
      <div className="p-4 sm:p-6 space-y-6">
        {/* ================= CHAPTER 17: STATISTICS ================= */}
        {activeChapter === 'ch17' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>📊</span> {lang === 'bn' ? 'পরিসংখ্যান: সংক্ষিপ্ত গড়, মধ্যক ও প্রচুরক' : 'Grouped Data Statistics: Mean, Median & Mode'}
                </h2>
                <p className="text-xs text-slate-400">
                  {lang === 'bn'
                    ? 'NCTB বোর্ড পরীক্ষার জন্য সম্পূর্ণ ক্রমযোজিত গণসংখ্যা সারণী ও পদক্ষেপভিত্তিক সমাধান'
                    : 'Complete step-deviation table and analytical CQ formulas'}
                </p>
              </div>
              <button
                onClick={() =>
                  setStatClasses([
                    { lower: 31, upper: 40, freq: 4 },
                    { lower: 41, upper: 50, freq: 6 },
                    { lower: 51, upper: 60, freq: 8 },
                  ])
                }
                className="px-3 py-1.5 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-mono hover:bg-cyan-900 transition flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                {lang === 'bn' ? 'বোর্ড নমুনা প্রিসেট (৩১-৬০)' : 'Load Board Walkthrough Preset'}
              </button>
            </div>

            {/* Class Interval Input Table */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                {lang === 'bn' ? 'শ্রেণি ব্যবধান ও গণসংখ্যা ইনপুট:' : 'Class Intervals & Frequencies:'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {statClasses.map((cls, idx) => (
                  <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2 relative">
                    <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                      <span>{lang === 'bn' ? `শ্রেণি #${idx + 1}` : `Class #${idx + 1}`}</span>
                      {statClasses.length > 1 && (
                        <button
                          onClick={() => handleRemoveClass(idx)}
                          className="text-red-400 hover:text-red-300 transition p-0.5"
                          title="Remove Class"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <label className="text-[10px] text-slate-400 block">{lang === 'bn' ? 'নিম্নসীমা' : 'Lower'}</label>
                        <input
                          type="number"
                          value={cls.lower}
                          onChange={(e) => handleUpdateClass(idx, 'lower', parseFloat(e.target.value) || 0)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-1.5 text-white font-mono text-center"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block">{lang === 'bn' ? 'উর্ধ্বসীমা' : 'Upper'}</label>
                        <input
                          type="number"
                          value={cls.upper}
                          onChange={(e) => handleUpdateClass(idx, 'upper', parseFloat(e.target.value) || 0)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-1.5 text-white font-mono text-center"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-cyan-400 block">{lang === 'bn' ? 'গণসংখ্যা (fi)' : 'Freq (fi)'}</label>
                        <input
                          type="number"
                          value={cls.freq}
                          onChange={(e) => handleUpdateClass(idx, 'freq', Math.max(0, parseFloat(e.target.value) || 0))}
                          className="w-full bg-slate-900 border border-cyan-700 rounded-lg p-1.5 text-cyan-300 font-mono text-center font-bold"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleAddClass}
                className="w-full py-2 bg-slate-950 hover:bg-slate-800 border border-dashed border-slate-700 rounded-xl text-xs font-mono text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5"
              >
                <Plus className="w-4 h-4 text-cyan-400" />
                {lang === 'bn' ? '+ নতুন শ্রেণি ব্যবধান যুক্ত করুন' : '+ Add Another Class Interval'}
              </button>
            </div>

            <FrequencyHistogram classes={statClasses} modalIndex={statResult.modalIndex} lang={lang} />

            {/* Step-Deviation Grouped Frequency Table */}
            {statResult.success && (
              <div className="space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  {lang === 'bn' ? 'সংক্ষিপ্ত সারণী (NCTB ছক):' : 'NCTB Grouped Analysis Table:'}
                </span>
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                  <table className="w-full text-xs text-left font-mono">
                    <thead className="bg-slate-900 text-slate-300 border-b border-slate-800">
                      <tr>
                        <th className="p-3">{lang === 'bn' ? 'শ্রেণি ব্যবধান' : 'Class Interval'}</th>
                        <th className="p-3 text-center">{lang === 'bn' ? 'মধ্যমান (xi)' : 'Midpoint (xi)'}</th>
                        <th className="p-3 text-center">{lang === 'bn' ? 'গণসংখ্যা (fi)' : 'Freq (fi)'}</th>
                        <th className="p-3 text-center">{lang === 'bn' ? 'ক্রমযোজিত গণসংখ্যা (Fc)' : 'Cum Freq (Fc)'}</th>
                        <th className="p-3 text-center">{lang === 'bn' ? 'ধাপ বিচ্যুতি (ui)' : 'Step Dev (ui)'}</th>
                        <th className="p-3 text-right">{lang === 'bn' ? 'fi × ui' : 'fi × ui'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 text-slate-300">
                      {statResult.table.map((row, i) => (
                        <tr key={i} className={row.mid === statResult.assumedMeanA ? 'bg-cyan-950/20 text-cyan-300' : ''}>
                          <td className="p-3 font-bold text-white">
                            {row.lower} – {row.upper}
                          </td>
                          <td className="p-3 text-center">{row.mid.toFixed(1)}</td>
                          <td className="p-3 text-center font-bold text-cyan-400">{row.freq}</td>
                          <td className="p-3 text-center text-emerald-400">{row.cumFreq}</td>
                          <td className="p-3 text-center">{row.u}</td>
                          <td className="p-3 text-right font-bold">{row.fu}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-slate-900 text-white font-bold border-t border-slate-800">
                      <tr>
                        <td className="p-3" colSpan={2}>{lang === 'bn' ? 'মোট (Total):' : 'Total:'}</td>
                        <td className="p-3 text-center text-cyan-400">n = {statResult.totalN}</td>
                        <td className="p-3 text-center">-</td>
                        <td className="p-3 text-center">-</td>
                        <td className="p-3 text-right text-emerald-400">
                          ∑(fi·ui) = {statResult.table.reduce((a, b) => a + b.fu, 0)}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                {/* Key Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">{lang === 'bn' ? 'সংক্ষিপ্ত পদ্ধতিতে গড়' : 'Arithmetic Mean'}</span>
                    <span className="text-2xl font-black text-cyan-400 block">{statResult.mean}</span>
                    <span className="text-[10px] font-mono text-slate-400">x̄ = a + (∑fi·ui / n) × h</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">{lang === 'bn' ? 'নির্ণীত মধ্যক' : 'Median'}</span>
                    <span className="text-2xl font-black text-emerald-400 block">{statResult.median}</span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {lang === 'bn' ? `মধ্যক শ্রেণি: ${statResult.medianClass.lower}-${statResult.medianClass.upper}` : `Median Class: ${statResult.medianClass.lower}-${statResult.medianClass.upper}`}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">{lang === 'bn' ? 'নির্ণীত প্রচুরক' : 'Mode'}</span>
                    <span className="text-2xl font-black text-amber-400 block">{statResult.mode}</span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {lang === 'bn' ? `প্রচুরক শ্রেণি: ${statResult.modalClass.lower}-${statResult.modalClass.upper}` : `Modal Class: ${statResult.modalClass.lower}-${statResult.modalClass.upper}`}
                    </span>
                  </div>
                </div>

                {/* Derivation Steps */}
                <div className="space-y-3 pt-3">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                    {lang === 'bn' ? 'ধাপে ধাপে সমাধান বিশ্লেষণ (KaTeX):' : 'Step-by-Step Derivations (KaTeX):'}
                  </span>
                  {statResult.steps.map((step, sIdx) => (
                    <div key={sIdx} className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-slate-200">
                        {lang === 'bn' ? step.labelBn : step.labelEn}
                      </div>
                      <div className="overflow-x-auto py-1 text-center font-mono text-sm text-cyan-300">
                        <Latex formula={step.latex} displayMode />
                      </div>
                      {step.notesBn && (
                        <p className="text-xs text-slate-400 border-t border-slate-900 pt-2 leading-relaxed">
                          {lang === 'bn' ? step.notesBn : step.notesEn || step.notesBn}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= CHAPTER 9 & 10: TRIGONOMETRY ================= */}
        {activeChapter === 'ch9_10' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>📐</span> {lang === 'bn' ? 'ত্রিকোণমিতি ও উচ্চতা-দূরত্ব সমস্যা' : 'Trigonometry, Heights & Distances'}
                </h2>
                <p className="text-xs text-slate-400">
                  {lang === 'bn'
                    ? '৬টি ত্রিকোণমিতিক অনুপাত, একক সমকোণী ত্রিভুজ, দুই বিন্দু হতে টাওয়ার এবং গাছ ভাঙার সমস্যা'
                    : '6 trigonometric ratios, right triangles, two observation points, and broken tree problems'}
                </p>
              </div>
            </div>

            {/* Sub Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'height', labelBn: 'উচ্চতা নির্ণয় (h = d tan θ)', labelEn: 'Height (h = d tan θ)' },
                { id: 'ratios', labelBn: '৬টি অনুপাত মান', labelEn: '6 Ratios' },
                { id: 'two_points', labelBn: 'বোর্ড CQ: দুই বিন্দু হতে টাওয়ার', labelEn: 'CQ: Tower Two Points' },
                { id: 'broken_tree', labelBn: 'বোর্ড CQ: গাছ ভাঙার সমস্যা', labelEn: 'CQ: Broken Tree' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTrigSubTab(t.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                    trigSubTab === t.id
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  {lang === 'bn' ? t.labelBn : t.labelEn}
                </button>
              ))}
            </div>

            {/* Inputs based on sub tab */}
            {trigSubTab === 'height' && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      {lang === 'bn' ? 'উন্নতি কোণ (θ) ডিগ্রিতে (0 < θ < 90°):' : 'Angle of Elevation θ (0 < θ < 90°):'}
                    </label>
                    <input
                      type="number"
                      value={trigAngle}
                      onChange={(e) => setTrigAngle(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      {lang === 'bn' ? 'গোড়া হতে অনুভূমিক দূরত্ব (মিটার):' : 'Horizontal Distance from Base (meters):'}
                    </label>
                    <input
                      type="number"
                      value={trigDist}
                      onChange={(e) => setTrigDist(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white font-mono"
                    />
                  </div>
                </div>
                <RightTriangleDiagram angle={trigAngle} dist={trigDist} height={trigDist * Math.tan((trigAngle * Math.PI) / 180)} lang={lang} />
              </div>
            )}

            {trigSubTab === 'ratios' && (
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <label className="text-xs font-mono text-slate-400 block mb-1">
                  {lang === 'bn' ? 'কোণ (θ) ডিগ্রিতে:' : 'Angle (θ) in Degrees:'}
                </label>
                <input
                  type="number"
                  value={trigAngle}
                  onChange={(e) => setTrigAngle(parseFloat(e.target.value) || 0)}
                  className="w-full sm:w-1/2 bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white font-mono"
                />
              </div>
            )}

            {trigSubTab === 'two_points' && (
              <div className="space-y-4 p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-xs text-slate-300 font-mono cursor-pointer">
                    <input
                      type="radio"
                      checked={twoPtSide === 'same'}
                      onChange={() => setTwoPtSide('same')}
                      className="text-cyan-500"
                    />
                    {lang === 'bn' ? 'একই পাশে দুটি বিন্দু' : 'Same Side of Tower'}
                  </label>
                  <label className="flex items-center gap-2 text-xs text-slate-300 font-mono cursor-pointer">
                    <input
                      type="radio"
                      checked={twoPtSide === 'opposite'}
                      onChange={() => setTwoPtSide('opposite')}
                      className="text-cyan-500"
                    />
                    {lang === 'bn' ? 'বিপরীত পাশে দুটি বিন্দু' : 'Opposite Sides'}
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      {lang === 'bn' ? 'দূরবর্তী কোণ θ1 (°):' : 'Farther Angle θ1 (°):'}
                    </label>
                    <input
                      type="number"
                      value={twoPtAngle1}
                      onChange={(e) => setTwoPtAngle1(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      {lang === 'bn' ? 'নিকটবর্তী কোণ θ2 (°):' : 'Closer Angle θ2 (°):'}
                    </label>
                    <input
                      type="number"
                      value={twoPtAngle2}
                      onChange={(e) => setTwoPtAngle2(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      {lang === 'bn' ? 'বিন্দুদ্বয়ের দূরত্ব d (m):' : 'Distance Between d (m):'}
                    </label>
                    <input
                      type="number"
                      value={twoPtDist}
                      onChange={(e) => setTwoPtDist(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono"
                    />
                  </div>
                </div>
              </div>
            )}

            {trigSubTab === 'broken_tree' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">
                    {lang === 'bn' ? 'গাছের সম্পূর্ণ উচ্চতা H (মিটার):' : 'Total Height of Tree H (meters):'}
                  </label>
                  <input
                    type="number"
                    value={treeHeight}
                    onChange={(e) => setTreeHeight(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">
                    {lang === 'bn' ? 'ভূমির সাথে উৎপন্ন কোণ θ (°):' : 'Angle with Ground θ (°):'}
                  </label>
                  <input
                    type="number"
                    value={treeAngle}
                    onChange={(e) => setTreeAngle(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white font-mono"
                  />
                </div>
              </div>
            )}

            {/* Results */}
            {trigResult.success ? (
              <div className="space-y-4">
                <div className="p-4 bg-cyan-950/20 border border-cyan-500/30 rounded-2xl flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-cyan-400">
                    {lang === 'bn' ? 'চূড়ান্ত ফলাফল:' : 'Calculated Value:'}
                  </span>
                  <span className="text-2xl font-black text-white font-mono">
                    {trigResult.value} {trigSubTab !== 'ratios' ? (trigSubTab === 'height' || trigSubTab === 'two_points' || trigSubTab === 'broken_tree' ? 'm' : '°') : ''}
                  </span>
                </div>

                <div className="space-y-3">
                  {trigResult.steps.map((st, i) => (
                    <div key={i} className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-slate-300">
                        {lang === 'bn' ? st.labelBn : st.labelEn}
                      </div>
                      <div className="overflow-x-auto py-1 text-center font-mono text-sm text-cyan-300">
                        <Latex formula={st.latex} displayMode />
                      </div>
                      {st.notesBn && (
                        <p className="text-xs text-slate-400 border-t border-slate-900 pt-1.5">
                          {lang === 'bn' ? st.notesBn : st.notesEn || st.notesBn}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-4 bg-red-950/40 border border-red-500/40 text-red-300 rounded-xl text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{trigResult.errorMessage}</span>
              </div>
            )}
          </div>
        )}

        {/* ================= CHAPTER 3: ALGEBRA ================= */}
        {activeChapter === 'ch3' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>🔢</span> {lang === 'bn' ? 'বীজগাণিতিক রাশি ও অনুসিদ্ধান্ত' : 'Algebraic Expressions & Identities'}
              </h2>
              <p className="text-xs text-slate-400">
                {lang === 'bn'
                  ? 'বর্গ, ঘন ও তিন পদের বর্গের অনুসিদ্ধান্ত প্রয়োগ করে মান নির্ণয়'
                  : 'Square, cubic and trinomial value determination'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-slate-950 rounded-2xl border border-slate-800">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">
                  {lang === 'bn' ? 'অনুপাত/সমস্যা প্রকারভেদ:' : 'Identity Type:'}
                </label>
                <select
                  value={ch3Type}
                  onChange={(e) => setCh3Type(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white font-mono"
                >
                  <option value="sq_from_sum">a² + b² from (a+b) & ab</option>
                  <option value="sq_from_diff">a² + b² from (a-b) & ab</option>
                  <option value="cube_sum">a³ + b³ from (a+b) & ab</option>
                  <option value="cube_diff">a³ - b³ from (a-b) & ab</option>
                  <option value="trinomial_sq">a²+b²+c² from (a+b+c) & (ab+bc+ca)</option>
                  <option value="trinomial_pair">ab+bc+ca from (a+b+c) & (a²+b²+c²)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">
                  {ch3Type.includes('sum') ? 'a + b (অথবা a + b + c):' : 'a - b:'}
                </label>
                <input
                  type="number"
                  value={ch3P1}
                  onChange={(e) => setCh3P1(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">
                  {ch3Type === 'trinomial_pair' ? 'a² + b² + c²:' : ch3Type === 'trinomial_sq' ? 'ab + bc + ca:' : 'ab:'}
                </label>
                <input
                  type="number"
                  value={ch3P2}
                  onChange={(e) => setCh3P2(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono"
                />
              </div>
            </div>

            {/* Results */}
            <div className="space-y-3">
              {ch3Result.steps.map((st, i) => (
                <div key={i} className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-slate-300">{lang === 'bn' ? st.labelBn : st.labelEn}</div>
                  <div className="overflow-x-auto py-1 text-center font-mono text-sm text-cyan-300">
                    <Latex formula={st.latex} displayMode />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= CHAPTER 16: MENSURATION ================= */}
        {activeChapter === 'ch16' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>📏</span> {lang === 'bn' ? 'পরিমিতি: ক্ষেত্রফল ও ঘনবস্তু' : 'Mensuration: 2D & 3D Solids'}
              </h2>
              <p className="text-xs text-slate-400">
                {lang === 'bn'
                  ? 'হ্যারন সূত্র (Heron), সমবাহু ত্রিভুজ, বৃত্ত, রম্বস, সুষম বহুভুজ, ঘনক ও সিলিন্ডার'
                  : 'Heron’s formula, triangles, regular polygons, cube, and cylinder'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 bg-slate-950 rounded-2xl border border-slate-800">
              <div className="sm:col-span-1">
                <label className="text-xs font-mono text-slate-400 block mb-1">
                  {lang === 'bn' ? 'জ্যামিতিক আকৃতি:' : 'Geometric Shape:'}
                </label>
                <select
                  value={mensShape}
                  onChange={(e) => setMensShape(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white font-mono"
                >
                  <option value="triangle_heron">Heron’s Triangle (a, b, c)</option>
                  <option value="equilateral_triangle">Equilateral Triangle (a)</option>
                  <option value="triangle_included_angle">Triangle 2 Sides & Angle</option>
                  <option value="circle">Circle (r)</option>
                  <option value="rhombus">Rhombus (d1, d2)</option>
                  <option value="regular_polygon">Regular Polygon (n, a)</option>
                  <option value="cube">Cube (a)</option>
                  <option value="cylinder">Cylinder (r, h)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">
                  {mensShape === 'circle' ? 'Radius r:' : mensShape === 'regular_polygon' ? 'Sides n:' : 'Parameter 1 (a/d1/r):'}
                </label>
                <input
                  type="number"
                  value={mensP1}
                  onChange={(e) => setMensP1(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono"
                />
              </div>

              {mensShape !== 'equilateral_triangle' && mensShape !== 'circle' && mensShape !== 'cube' && (
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">
                    {mensShape === 'cylinder' ? 'Height h:' : mensShape === 'regular_polygon' ? 'Side a:' : 'Parameter 2 (b/d2):'}
                  </label>
                  <input
                    type="number"
                    value={mensP2}
                    onChange={(e) => setMensP2(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono"
                  />
                </div>
              )}

              {(mensShape === 'triangle_heron' || mensShape === 'triangle_included_angle') && (
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">
                    {mensShape === 'triangle_included_angle' ? 'Included Angle θ (°):' : 'Side c:'}
                  </label>
                  <input
                    type="number"
                    value={mensP3}
                    onChange={(e) => setMensP3(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono"
                  />
                </div>
              )}
            </div>

            {mensResult.success ? (
              <div className="space-y-3">
                <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-2xl flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-emerald-400">
                    {lang === 'bn' ? 'গণনাকৃত মান:' : 'Calculated Value:'}
                  </span>
                  <span className="text-2xl font-black text-white font-mono">{mensResult.value}</span>
                </div>
                {mensResult.steps.map((st, i) => (
                  <div key={i} className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-slate-300">{lang === 'bn' ? st.labelBn : st.labelEn}</div>
                    <div className="overflow-x-auto py-1 text-center font-mono text-sm text-cyan-300">
                      <Latex formula={st.latex} displayMode />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-red-950/40 border border-red-500/40 text-red-300 rounded-xl text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{mensResult.errorMessage}</span>
              </div>
            )}
          </div>
        )}

        {/* ================= CHAPTER 4: EXPONENTS & LOGS ================= */}
        {activeChapter === 'ch4' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>📈</span> {lang === 'bn' ? 'সূচক ও লগারিদম' : 'Exponents & Logarithms'}
              </h2>
            </div>

            <div className="flex gap-2">
              {[
                { id: 'log', label: 'log_a(N)' },
                { id: 'power', label: 'Power (a^b)' },
                { id: 'sci', label: 'Scientific (A × 10^n)' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setCh4Type(t.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                    ch4Type === t.id
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-950 text-slate-300 border border-slate-800'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {ch4Type !== 'sci' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Base (a):</label>
                  <input
                    type="number"
                    value={ch4Base}
                    onChange={(e) => setCh4Base(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">
                    {ch4Type === 'log' ? 'Target (N > 0):' : 'Exponent (b):'}
                  </label>
                  <input
                    type="number"
                    value={ch4Target}
                    onChange={(e) => setCh4Target(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono"
                  />
                </div>
              </div>
            ) : (
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <label className="text-xs font-mono text-slate-400 block mb-1">Real Number:</label>
                <input
                  type="number"
                  value={ch4SciNum}
                  onChange={(e) => setCh4SciNum(parseFloat(e.target.value) || 0)}
                  className="w-full sm:w-1/2 bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono"
                />
              </div>
            )}

            {ch4Result.success ? (
              <div className="space-y-3">
                {ch4Result.steps.map((st, i) => (
                  <div key={i} className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-slate-300">{lang === 'bn' ? st.labelBn : st.labelEn}</div>
                    <div className="overflow-x-auto py-1 text-center font-mono text-sm text-cyan-300">
                      <Latex formula={st.latex} displayMode />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-red-950/40 border border-red-500/40 text-red-300 rounded-xl text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{ch4Result.errorMessage}</span>
              </div>
            )}
          </div>
        )}

        {/* ================= CHAPTER 11: RATIO & PROPORTION ================= */}
        {activeChapter === 'ch11' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>⚖️</span> {lang === 'bn' ? 'যোজন-বিয়োজন রূপান্তর' : 'Componendo-Dividendo Transformation'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-950 rounded-2xl border border-slate-800">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Numerator a:</label>
                <input
                  type="number"
                  value={ratioA}
                  onChange={(e) => setRatioA(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Denominator b:</label>
                <input
                  type="number"
                  value={ratioB}
                  onChange={(e) => setRatioB(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono"
                />
              </div>
            </div>

            {ch11Result.success ? (
              <div className="space-y-3">
                {ch11Result.steps.map((st, i) => (
                  <div key={i} className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-slate-300">{lang === 'bn' ? st.labelBn : st.labelEn}</div>
                    <div className="overflow-x-auto py-1 text-center font-mono text-sm text-cyan-300">
                      <Latex formula={st.latex} displayMode />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-red-950/40 border border-red-500/40 text-red-300 rounded-xl text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{ch11Result.errorMessage}</span>
              </div>
            )}
          </div>
        )}

        {/* ================= CHAPTER 2: SETS & FUNCTIONS ================= */}
        {activeChapter === 'ch2' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>🧮</span> {lang === 'bn' ? 'সেট ও ফাংশন' : 'Sets & Functions'}
              </h2>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setCh2SubTab('power')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  ch2SubTab === 'power' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-300 border border-slate-800'
                }`}
              >
                P(A) = 2^n
              </button>
              <button
                onClick={() => setCh2SubTab('cartesian')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  ch2SubTab === 'cartesian' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-300 border border-slate-800'
                }`}
              >
                Cartesian Product (A × B)
              </button>
            </div>

            {ch2SubTab === 'power' ? (
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <label className="text-xs font-mono text-slate-400 block mb-1">
                  {lang === 'bn' ? 'সেটের উপাদান সংখ্যা n (n \u2265 0):' : 'Number of Elements n (n \u2265 0):'}
                </label>
                <input
                  type="number"
                  value={ch2N}
                  onChange={(e) => setCh2N(Math.max(0, parseInt(e.target.value, 10) || 0))}
                  className="w-full sm:w-1/2 bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono"
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Set A (comma separated):</label>
                  <input
                    type="text"
                    value={ch2SetA}
                    onChange={(e) => setCh2SetA(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Set B (comma separated):</label>
                  <input
                    type="text"
                    value={ch2SetB}
                    onChange={(e) => setCh2SetB(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono"
                  />
                </div>
              </div>
            )}

            <div className="space-y-3">
              {ch2Result.steps.map((st, i) => (
                <div key={i} className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-slate-300">{lang === 'bn' ? st.labelBn : st.labelEn}</div>
                  <div className="overflow-x-auto py-1 text-center font-mono text-sm text-cyan-300">
                    <Latex formula={st.latex} displayMode />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Casio fx-991 Hardware Keystroke Guide Ribbon */}
      <div className="bg-slate-950 border-t border-slate-800 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <BookOpen className="w-4 h-4 text-cyan-400 flex-shrink-0" />
          <span>
            {lang === 'bn'
              ? 'কাসিও fx-991ES PLUS ও fx-991EX ClassWiz এ এই গণনার শর্টকাট দেখতে নিচে স্ক্রোল করুন।'
              : 'Scroll down to review Casio fx-991ES PLUS and fx-991EX ClassWiz hardware keystrokes.'}
          </span>
        </div>
        <span className="font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/60 text-[11px]">
          STAT • TABLE • EQN
        </span>
      </div>

      {/* Mobile Sticky Floating Answer Bar */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/40 px-4 py-2.5 shadow-2xl flex items-center justify-between"
        style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom, 0.625rem))' }}
      >
        <div>
          <span className="text-[10px] text-cyan-400 font-semibold block uppercase tracking-wider">
            {lang === 'bn' ? 'ফলাফল (Active Result):' : 'Active Result:'}
          </span>
          <div className="text-base font-mono font-bold text-white flex items-baseline gap-1.5">
            {activeChapter === 'ch17' && statResult.success && (
              <span>
                {lang === 'bn' ? 'গড়' : 'Mean'}: {statResult.mean} | {lang === 'bn' ? 'মধ্যক' : 'Med'}: {statResult.median}
              </span>
            )}
            {activeChapter === 'ch9_10' && trigSubTab === 'height' && (
              <span>h = {(trigDist * Math.tan((trigAngle * Math.PI) / 180)).toFixed(2)} m</span>
            )}
            {activeChapter === 'ch3' && ch3Result.success && (
              <span>{ch3Result.value}</span>
            )}
            {activeChapter === 'ch4' && ch4Result.success && (
              <span>{ch4Result.value}</span>
            )}
            {activeChapter === 'ch16' && mensResult.success && (
              <span>{mensResult.value}</span>
            )}
            {activeChapter === 'ch11' && compResult.success && (
              <span>{compResult.value}</span>
            )}
            {activeChapter === 'ch2' && ch2Result.success && (
              <span>{ch2Result.value}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
