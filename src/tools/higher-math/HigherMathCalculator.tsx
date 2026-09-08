import React, { useState } from 'react';
import {
  Layers,
  FunctionSquare,
  Divide,
  Triangle,
  GitBranch,
  Infinity,
  Compass,
  Grid,
  MapPin,
  Box,
  Dice5,
  Copy,
  Check,
  RotateCcw,
  AlertCircle,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { Latex } from '../../components/math/Latex';
import {
  solveThreeSetVenn,
  solveFractionalInverse,
  evaluateRemainderTheorem,
  solveCyclicCubic,
  solveApollonius,
  solveQuadratic,
  solveLinearInequality,
  solveInfiniteGeometricSum,
  convertRecurringDecimal,
  solveArcSector,
  solveLog,
  expandBinomial,
  solvePolygonArea,
  solveCoordinateLine,
  solveVector,
  solveSolidGeometry,
  solveProbability,
  type VennResult,
  type FractionalInverseResult,
  type RemainderResult,
  type CyclicCubicResult,
  type ApolloniusResult,
  type QuadraticResult,
  type InequalityResult,
  type GeometricSeriesResult,
  type RecurringDecimalResult,
  type ArcSectorResult,
  type LogResult,
  type BinomialResult,
  type PolygonAreaResult,
  type LinePropertiesResult,
  type VectorResult,
  type SolidResult,
  type ProbabilityResult,
} from './engine';

interface Props {
  lang?: 'bn' | 'en';
}

type ModuleTab =
  | 'sets'
  | 'algebra'
  | 'geometry'
  | 'equations'
  | 'series'
  | 'trig_logs'
  | 'binomial'
  | 'coord_vec'
  | 'solid_prob';

export const HigherMathCalculator: React.FC<Props> = ({ lang = 'bn' }) => {
  const [activeTab, setActiveTab] = useState<ModuleTab>('geometry');
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Tab 1: Sets & Functions State
  const [setsSubTab, setSetsSubTab] = useState<'venn' | 'inverse' | 'subsets'>('venn');
  const [vennNA, setVennNA] = useState<number>(30);
  const [vennNB, setVennNB] = useState<number>(25);
  const [vennNC, setVennNC] = useState<number>(20);
  const [vennNAB, setVennNAB] = useState<number>(10);
  const [vennNBC, setVennNBC] = useState<number>(8);
  const [vennNCA, setVennNCA] = useState<number>(7);
  const [vennNABC, setVennNABC] = useState<number>(4);
  const [invA, setInvA] = useState<number>(2);
  const [invB, setInvB] = useState<number>(2);
  const [invC, setInvC] = useState<number>(1);
  const [invD, setInvD] = useState<number>(-1);
  const [subsetsN, setSubsetsN] = useState<number>(4);

  // Tab 2: Algebra & Polynomials State
  const [algSubTab, setAlgSubTab] = useState<'remainder' | 'cyclic'>('remainder');
  const [polyCoeffs, setPolyCoeffs] = useState<string>('1, -6, 11, -6');
  const [polyA, setPolyA] = useState<number>(2);
  const [cycA, setCycA] = useState<number>(2);
  const [cycB, setCycB] = useState<number>(3);
  const [cycC, setCycC] = useState<number>(5);

  // Tab 3: Geometry (Apollonius) State
  const [triA, setTriA] = useState<number>(6);
  const [triB, setTriB] = useState<number>(5);
  const [triC, setTriC] = useState<number>(7);

  // Tab 4: Equations & Inequalities State
  const [eqSubTab, setEqSubTab] = useState<'quadratic' | 'inequality'>('quadratic');
  const [quadA, setQuadA] = useState<number>(2);
  const [quadB, setQuadB] = useState<number>(-5);
  const [quadC, setQuadC] = useState<number>(2);
  const [ineqA, setIneqA] = useState<number>(3);
  const [ineqB, setIneqB] = useState<number>(-5);
  const [ineqC, setIneqC] = useState<number>(7);

  // Tab 5: Series & Recurring Decimals State
  const [seriesSubTab, setSeriesSubTab] = useState<'geometric' | 'recurring'>('geometric');
  const [geoA, setGeoA] = useState<number>(1);
  const [geoR, setGeoR] = useState<number>(0.5);
  const [recWhole, setRecWhole] = useState<number>(0);
  const [recNonRecur, setRecNonRecur] = useState<string>('1');
  const [recRecur, setRecRecur] = useState<string>('2');

  // Tab 6: Trigonometry & Logs State
  const [trigSubTab, setTrigSubTab] = useState<'sector' | 'log'>('sector');
  const [arcR, setArcR] = useState<number>(7);
  const [arcDeg, setArcDeg] = useState<number>(30);
  const [logBase, setLogBase] = useState<number>(2);
  const [logX, setLogX] = useState<number>(32);

  // Tab 7: Binomial Expansion State
  const [binA, setBinA] = useState<number>(1);
  const [binB, setBinB] = useState<number>(2);
  const [binN, setBinN] = useState<number>(5);

  // Tab 8: Coordinates & Vectors State
  const [coordSubTab, setCoordSubTab] = useState<'line' | 'polygon' | 'vector'>('line');
  const [x1, setX1] = useState<number>(2);
  const [y1, setY1] = useState<number>(3);
  const [x2, setX2] = useState<number>(5);
  const [y2, setY2] = useState<number>(7);
  const [polyVertices, setPolyVertices] = useState<string>('2,3; 5,7; -2,4');
  const [vecX, setVecX] = useState<number>(3);
  const [vecY, setVecY] = useState<number>(4);

  // Tab 9: Solid Geometry & Probability State
  const [solidSubTab, setSolidSubTab] = useState<'cone' | 'cylinder' | 'sphere' | 'prob'>('cone');
  const [solidR, setSolidR] = useState<number>(3);
  const [solidH, setSolidH] = useState<number>(4);
  const [probFav, setProbFav] = useState<number>(4);
  const [probTot, setProbTot] = useState<number>(52);

  // Handle Copy
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Module Tabs Metadata
  const tabs = [
    { id: 'geometry', nameBn: '৩য়: এ্যাপোলোনিওস', nameEn: 'Ch 3: Geometry', icon: <Triangle className="w-4 h-4" /> },
    { id: 'equations', nameBn: '৫-৬: সমীকরণ ও অসমতা', nameEn: 'Ch 5-6: Equations', icon: <Divide className="w-4 h-4" /> },
    { id: 'series', nameBn: '৭ম: অসীম ধারা ও পৌনঃপুনিক', nameEn: 'Ch 7: Series', icon: <Infinity className="w-4 h-4" /> },
    { id: 'sets', nameBn: '১ম: সেট ও ফাংশন', nameEn: 'Ch 1: Sets & Func', icon: <FunctionSquare className="w-4 h-4" /> },
    { id: 'algebra', nameBn: '২য়: ভাগশেষ ও ঘন অভেদ', nameEn: 'Ch 2: Polynomials', icon: <Layers className="w-4 h-4" /> },
    { id: 'trig_logs', nameBn: '৮-৯: বৃত্তচাপ ও লগ', nameEn: 'Ch 8-9: Trig & Logs', icon: <Compass className="w-4 h-4" /> },
    { id: 'binomial', nameBn: '১০ম: দ্বিপদী বিস্তৃতি', nameEn: 'Ch 10: Binomial', icon: <Grid className="w-4 h-4" /> },
    { id: 'coord_vec', nameBn: '১১-১২: স্থানাঙ্ক ও ভেক্টর', nameEn: 'Ch 11-12: Coords', icon: <MapPin className="w-4 h-4" /> },
    { id: 'solid_prob', nameBn: '১৩-১৪: ঘনবস্তু ও সম্ভাবনা', nameEn: 'Ch 13-14: Solid & Prob', icon: <Box className="w-4 h-4" /> },
  ];

  // Presets
  const applyPreset = (type: string) => {
    setErrorMsg(null);
    if (type === 'dhaka_func') {
      setActiveTab('sets');
      setSetsSubTab('inverse');
      setInvA(2); setInvB(2); setInvC(1); setInvD(-1);
    } else if (type === 'apollonius_board') {
      setActiveTab('geometry');
      setTriA(6); setTriB(5); setTriC(7);
    } else if (type === 'quadratic_board') {
      setActiveTab('equations');
      setEqSubTab('quadratic');
      setQuadA(2); setQuadB(-5); setQuadC(2);
    } else if (type === 'recurring_board') {
      setActiveTab('series');
      setSeriesSubTab('recurring');
      setRecWhole(0); setRecNonRecur('1'); setRecRecur('2');
    } else if (type === 'shoelace_board') {
      setActiveTab('coord_vec');
      setCoordSubTab('polygon');
      setPolyVertices('2,3; 5,7; -2,4');
    } else if (type === 'cone_board') {
      setActiveTab('solid_prob');
      setSolidSubTab('cone');
      setSolidR(3); setSolidH(4);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl space-y-0">
      {/* Top Chapter Selector Bar */}
      <div className="bg-slate-950 border-b border-slate-800 p-3 sm:p-4 overflow-x-auto scrollbar-thin">
        <div className="flex gap-2 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as ModuleTab);
                setErrorMsg(null);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{lang === 'bn' ? tab.nameBn : tab.nameEn}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Preset Fast-Pick Ribbon */}
      <div className="bg-slate-950/60 border-b border-slate-800/80 px-4 py-2.5 flex items-center gap-2 overflow-x-auto text-xs">
        <span className="text-slate-400 flex items-center gap-1 shrink-0 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          {lang === 'bn' ? 'বোর্ড CQ প্রিসেট:' : 'Board CQ Presets:'}
        </span>
        <button
          onClick={() => applyPreset('apollonius_board')}
          className="px-2.5 py-1 bg-slate-900 hover:bg-indigo-950/40 text-slate-300 hover:text-indigo-300 border border-slate-800 rounded-lg shrink-0 transition"
        >
          {lang === 'bn' ? 'ত্রিভুজ মধ্যমা (a=6, b=5, c=7)' : 'Apollonius (a=6, b=5, c=7)'}
        </button>
        <button
          onClick={() => applyPreset('quadratic_board')}
          className="px-2.5 py-1 bg-slate-900 hover:bg-indigo-950/40 text-slate-300 hover:text-indigo-300 border border-slate-800 rounded-lg shrink-0 transition"
        >
          {lang === 'bn' ? 'দ্বিঘাত (2x² - 5x + 2 = 0)' : 'Quadratic (2x² - 5x + 2 = 0)'}
        </button>
        <button
          onClick={() => applyPreset('recurring_board')}
          className="px-2.5 py-1 bg-slate-900 hover:bg-indigo-950/40 text-slate-300 hover:text-indigo-300 border border-slate-800 rounded-lg shrink-0 transition"
        >
          {lang === 'bn' ? 'পৌনঃপুনিক (0.12̇)' : 'Recurring (0.12̇)'}
        </button>
        <button
          onClick={() => applyPreset('dhaka_func')}
          className="px-2.5 py-1 bg-slate-900 hover:bg-indigo-950/40 text-slate-300 hover:text-indigo-300 border border-slate-800 rounded-lg shrink-0 transition"
        >
          {lang === 'bn' ? 'বিপরীত ফাংশন f(x)=(2x+2)/(x-1)' : 'Inverse f(x)=(2x+2)/(x-1)'}
        </button>
        <button
          onClick={() => applyPreset('shoelace_board')}
          className="px-2.5 py-1 bg-slate-900 hover:bg-indigo-950/40 text-slate-300 hover:text-indigo-300 border border-slate-800 rounded-lg shrink-0 transition"
        >
          {lang === 'bn' ? 'Shoelace ক্ষেত্রফল (৩ শীর্ষবিন্দু)' : 'Shoelace Area (3 Points)'}
        </button>
      </div>

      {/* Main Workspace Layout (2 columns on large screens) */}
      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Inputs (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Module Sub-Tabs & Title */}
          {activeTab === 'geometry' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Triangle className="w-4 h-4 text-indigo-400" />
                  {lang === 'bn' ? 'অধ্যায় ৩: এ্যাপোলোনিয়াসের উপপাদ্য ও মধ্যমা' : 'Ch 3: Apollonius Theorem & Medians'}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {lang === 'bn'
                    ? 'তিন বাহুর দৈর্ঘ্য থেকে তিনটি মধ্যমা এবং ৩(বাহু)² = ৪(মধ্যমা)² এর সম্পর্ক'
                    : 'Calculate medians and verify 3Σa² = 4Σd²'}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">বাহু a</label>
                  <input
                    type="number"
                    value={triA}
                    onChange={(e) => setTriA(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">বাহু b</label>
                  <input
                    type="number"
                    value={triB}
                    onChange={(e) => setTriB(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">বাহু c</label>
                  <input
                    type="number"
                    value={triC}
                    onChange={(e) => setTriC(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'equations' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setEqSubTab('quadratic')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    eqSubTab === 'quadratic' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  {lang === 'bn' ? 'দ্বিঘাত সমীকরণ (Ch 5)' : 'Quadratic Eq (Ch 5)'}
                </button>
                <button
                  onClick={() => setEqSubTab('inequality')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    eqSubTab === 'inequality' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  {lang === 'bn' ? 'রৈখিক অসমতা (Ch 6)' : 'Linear Inequality (Ch 6)'}
                </button>
              </div>

              {eqSubTab === 'quadratic' ? (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                  <div className="text-xs font-mono text-indigo-300">ax² + bx + c = 0</div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">সহগ a</label>
                      <input
                        type="number"
                        value={quadA}
                        onChange={(e) => setQuadA(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">সহগ b</label>
                      <input
                        type="number"
                        value={quadB}
                        onChange={(e) => setQuadB(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">ধ্রুবক c</label>
                      <input
                        type="number"
                        value={quadC}
                        onChange={(e) => setQuadC(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                  <div className="text-xs font-mono text-indigo-300">ax + b ≤ c</div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">সহগ a</label>
                      <input
                        type="number"
                        value={ineqA}
                        onChange={(e) => setIneqA(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">পদ b</label>
                      <input
                        type="number"
                        value={ineqB}
                        onChange={(e) => setIneqB(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">সীমা c</label>
                      <input
                        type="number"
                        value={ineqC}
                        onChange={(e) => setIneqC(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'series' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setSeriesSubTab('geometric')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    seriesSubTab === 'geometric' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  {lang === 'bn' ? 'অসীম গুণোত্তর ধারা (S∞)' : 'Infinite Geometric Sum'}
                </button>
                <button
                  onClick={() => setSeriesSubTab('recurring')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    seriesSubTab === 'recurring' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  {lang === 'bn' ? 'পৌনঃপুনিক ভগ্নাংশ রূপান্তর' : 'Recurring Decimal'}
                </button>
              </div>

              {seriesSubTab === 'geometric' ? (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">প্রথম পদ a</label>
                      <input
                        type="number"
                        value={geoA}
                        onChange={(e) => setGeoA(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">সাধারণ অনুপাত r (|r| &lt; 1)</label>
                      <input
                        type="number"
                        step="0.1"
                        value={geoR}
                        onChange={(e) => setGeoR(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                  <p className="text-xs text-slate-400">
                    {lang === 'bn'
                      ? 'উদাহরণ: 0.12̇ এর জন্য পূর্ণ অংশ = 0, অনাবৃত্ত = 1, আবৃত্ত = 2'
                      : 'Example: For 0.12̇ enter whole=0, non-repeating=1, repeating=2'}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">পূর্ণ অংশ</label>
                      <input
                        type="number"
                        value={recWhole}
                        onChange={(e) => setRecWhole(parseInt(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">অনাবৃত্ত অংশ</label>
                      <input
                        type="text"
                        value={recNonRecur}
                        onChange={(e) => setRecNonRecur(e.target.value.replace(/[^0-9]/g, ''))}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                        placeholder="1"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">আবৃত্ত অংশ (̇)</label>
                      <input
                        type="text"
                        value={recRecur}
                        onChange={(e) => setRecRecur(e.target.value.replace(/[^0-9]/g, ''))}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                        placeholder="2"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'sets' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setSetsSubTab('venn')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    setsSubTab === 'venn' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  ৩ সেটের ভেনচিত্র
                </button>
                <button
                  onClick={() => setSetsSubTab('inverse')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    setsSubTab === 'inverse' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  বিপরীত ফাংশন f⁻¹(x)
                </button>
                <button
                  onClick={() => setSetsSubTab('subsets')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    setsSubTab === 'subsets' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  উপসেট 2ⁿ
                </button>
              </div>

              {setsSubTab === 'venn' && (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">n(A)</label>
                      <input
                        type="number"
                        value={vennNA}
                        onChange={(e) => setVennNA(parseInt(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-1.5 text-white font-mono text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">n(B)</label>
                      <input
                        type="number"
                        value={vennNB}
                        onChange={(e) => setVennNB(parseInt(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-1.5 text-white font-mono text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">n(C)</label>
                      <input
                        type="number"
                        value={vennNC}
                        onChange={(e) => setVennNC(parseInt(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-1.5 text-white font-mono text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">n(A∩B)</label>
                      <input
                        type="number"
                        value={vennNAB}
                        onChange={(e) => setVennNAB(parseInt(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-1.5 text-white font-mono text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">n(B∩C)</label>
                      <input
                        type="number"
                        value={vennNBC}
                        onChange={(e) => setVennNBC(parseInt(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-1.5 text-white font-mono text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">n(C∩A)</label>
                      <input
                        type="number"
                        value={vennNCA}
                        onChange={(e) => setVennNCA(parseInt(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-1.5 text-white font-mono text-xs"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">n(A∩B∩C)</label>
                    <input
                      type="number"
                      value={vennNABC}
                      onChange={(e) => setVennNABC(parseInt(e.target.value) || 0)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-1.5 text-white font-mono text-xs"
                    />
                  </div>
                </div>
              )}

              {setsSubTab === 'inverse' && (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                  <div className="text-xs text-indigo-300 font-mono">f(x) = (ax + b) / (cx + d)</div>
                  <div className="grid grid-cols-4 gap-2">
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">a</label>
                      <input
                        type="number"
                        value={invA}
                        onChange={(e) => setInvA(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">b</label>
                      <input
                        type="number"
                        value={invB}
                        onChange={(e) => setInvB(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">c</label>
                      <input
                        type="number"
                        value={invC}
                        onChange={(e) => setInvC(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">d</label>
                      <input
                        type="number"
                        value={invD}
                        onChange={(e) => setInvD(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}

              {setsSubTab === 'subsets' && (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                  <label className="text-xs text-slate-400 block mb-1">সেটের উপাদান সংখ্যা n</label>
                  <input
                    type="number"
                    min="0"
                    max="20"
                    value={subsetsN}
                    onChange={(e) => setSubsetsN(parseInt(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                  />
                </div>
              )}
            </div>
          )}

          {activeTab === 'algebra' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setAlgSubTab('remainder')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    algSubTab === 'remainder' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  ভাগশেষ ও উৎপাদক উপপাদ্য
                </button>
                <button
                  onClick={() => setAlgSubTab('cyclic')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    algSubTab === 'cyclic' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  চক্র-ক্রমিক ঘন অভেদ
                </button>
              </div>

              {algSubTab === 'remainder' ? (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">
                      বহুপদীর সহগসমূহ (কমা দিয়ে, সর্বোচ্চ ঘাত থেকে ধ্রুবক পদ):
                    </label>
                    <input
                      type="text"
                      value={polyCoeffs}
                      onChange={(e) => setPolyCoeffs(e.target.value)}
                      placeholder="1, -6, 11, -6"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">ভাজক (x - a) এর ক্ষেত্রে a এর মান:</label>
                    <input
                      type="number"
                      value={polyA}
                      onChange={(e) => setPolyA(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                    />
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                  <div className="text-xs text-indigo-300 font-mono">a³ + b³ + c³ - 3abc</div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">মান a</label>
                      <input
                        type="number"
                        value={cycA}
                        onChange={(e) => setCycA(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">মান b</label>
                      <input
                        type="number"
                        value={cycB}
                        onChange={(e) => setCycB(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">মান c</label>
                      <input
                        type="number"
                        value={cycC}
                        onChange={(e) => setCycC(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'trig_logs' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setTrigSubTab('sector')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    trigSubTab === 'sector' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  বৃত্তচাপ ও ক্ষেত্রফল (Ch 8)
                </button>
                <button
                  onClick={() => setTrigSubTab('log')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    trigSubTab === 'log' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  লগারিদম logₐ(x) (Ch 9)
                </button>
              </div>

              {trigSubTab === 'sector' ? (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">ব্যাসার্ধ r (একক)</label>
                    <input
                      type="number"
                      value={arcR}
                      onChange={(e) => setArcR(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">কোণ θ (ডিগ্রিতে)</label>
                    <input
                      type="number"
                      value={arcDeg}
                      onChange={(e) => setArcDeg(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                    />
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">ভিত্তি base (a &gt; 0, a ≠ 1)</label>
                    <input
                      type="number"
                      value={logBase}
                      onChange={(e) => setLogBase(parseFloat(e.target.value) || 2)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">রাশি x (x &gt; 0)</label>
                    <input
                      type="number"
                      value={logX}
                      onChange={(e) => setLogX(parseFloat(e.target.value) || 1)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'binomial' && (
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs text-indigo-300 font-mono">(ax + by)ⁿ</div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">সহগ a</label>
                  <input
                    type="number"
                    value={binA}
                    onChange={(e) => setBinA(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">সহগ b</label>
                  <input
                    type="number"
                    value={binB}
                    onChange={(e) => setBinB(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">ঘাত n (0 থেকে 12)</label>
                  <input
                    type="number"
                    min="0"
                    max="12"
                    value={binN}
                    onChange={(e) => setBinN(parseInt(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'coord_vec' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setCoordSubTab('line')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    coordSubTab === 'line' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  দূরত্ব, ঢাল ও রেখা
                </button>
                <button
                  onClick={() => setCoordSubTab('polygon')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    coordSubTab === 'polygon' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  Shoelace ক্ষেত্রফল
                </button>
                <button
                  onClick={() => setCoordSubTab('vector')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    coordSubTab === 'vector' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  ভেক্টরের মান ও দিক
                </button>
              </div>

              {coordSubTab === 'line' && (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">বিন্দু ১: (x₁, y₁)</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          value={x1}
                          onChange={(e) => setX1(parseFloat(e.target.value) || 0)}
                          className="w-1/2 bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-xs"
                          placeholder="x₁"
                        />
                        <input
                          type="number"
                          value={y1}
                          onChange={(e) => setY1(parseFloat(e.target.value) || 0)}
                          className="w-1/2 bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-xs"
                          placeholder="y₁"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">বিন্দু ২: (x₂, y₂)</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          value={x2}
                          onChange={(e) => setX2(parseFloat(e.target.value) || 0)}
                          className="w-1/2 bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-xs"
                          placeholder="x₂"
                        />
                        <input
                          type="number"
                          value={y2}
                          onChange={(e) => setY2(parseFloat(e.target.value) || 0)}
                          className="w-1/2 bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-xs"
                          placeholder="y₂"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {coordSubTab === 'polygon' && (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                  <label className="text-xs text-slate-400 block mb-1">
                    শীর্ষবিন্দুসমূহ (x,y ফরম্যাটে সেমিকোলন দিয়ে সাজান, যেমন 2,3; 5,7; -2,4):
                  </label>
                  <input
                    type="text"
                    value={polyVertices}
                    onChange={(e) => setPolyVertices(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                  />
                </div>
              )}

              {coordSubTab === 'vector' && (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">ভেক্টর x-উপাংশ</label>
                    <input
                      type="number"
                      value={vecX}
                      onChange={(e) => setVecX(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">ভেক্টর y-উপাংশ</label>
                    <input
                      type="number"
                      value={vecY}
                      onChange={(e) => setVecY(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'solid_prob' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setSolidSubTab('cone')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    solidSubTab === 'cone' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  কোণক
                </button>
                <button
                  onClick={() => setSolidSubTab('cylinder')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    solidSubTab === 'cylinder' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  বেলন
                </button>
                <button
                  onClick={() => setSolidSubTab('sphere')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    solidSubTab === 'sphere' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  গোলক
                </button>
                <button
                  onClick={() => setSolidSubTab('prob')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    solidSubTab === 'prob' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  সম্ভাবনা
                </button>
              </div>

              {solidSubTab !== 'prob' ? (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">ব্যাসার্ধ r</label>
                    <input
                      type="number"
                      value={solidR}
                      onChange={(e) => setSolidR(parseFloat(e.target.value) || 1)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                    />
                  </div>
                  {solidSubTab !== 'sphere' && (
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">উচ্চতা h</label>
                      <input
                        type="number"
                        value={solidH}
                        onChange={(e) => setSolidH(parseFloat(e.target.value) || 1)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">অনুকূল ফলাফল n(E)</label>
                    <input
                      type="number"
                      value={probFav}
                      onChange={(e) => setProbFav(parseInt(e.target.value) || 0)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">সমগ্র সম্ভাব্য ফলাফল n(S)</label>
                    <input
                      type="number"
                      value={probTot}
                      onChange={(e) => setProbTot(parseInt(e.target.value) || 1)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-white font-mono text-sm"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Step-by-Step KaTeX Derivations & Analytical Results (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              {lang === 'bn' ? 'গাণিতিক প্রমাণ ও বিশ্লেষণ (LaTeX Steps)' : 'Step-by-Step Proofs & Analysis'}
            </span>
            <button
              onClick={() => {
                // Copy current result LaTeX
                const el = document.getElementById('katex-output-box');
                if (el) handleCopy(el.innerText);
              }}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-indigo-300 transition cursor-pointer"
              title="Copy Steps"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (lang === 'bn' ? 'কপি হয়েছে' : 'Copied!') : (lang === 'bn' ? 'কপি' : 'Copy')}</span>
            </button>
          </div>

          <div id="katex-output-box" className="space-y-4">
            {/* RENDER DYNAMIC ACTIVE MODULE OUTPUT */}
            {activeTab === 'geometry' && (
              (() => {
                try {
                  const res = solveApollonius(triA, triB, triC);
                  return (
                    <div className="space-y-4">
                      <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <span className="text-xs font-mono uppercase text-indigo-400 block">
                            {lang === 'bn' ? 'মধ্যমাদ্বয় (Medians da, db, dc):' : 'Medians (da, db, dc):'}
                          </span>
                          <span className="text-xl font-black text-white font-mono">
                            dₐ = {res.medianA}, dᵦ = {res.medianB}, d_c = {res.medianC}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] text-slate-400 block">3Σa² = 4Σd²</span>
                          <span className="text-sm font-bold text-emerald-400 font-mono">{res.sidesSumSqTimes3}</span>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                        <Latex formula={res.stepsLatex} />
                      </div>
                    </div>
                  );
                } catch (e: any) {
                  return (
                    <div className="p-4 bg-red-950/40 border border-red-800/60 rounded-xl text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{e.message}</span>
                    </div>
                  );
                }
              })()
            )}

            {activeTab === 'equations' && (
              eqSubTab === 'quadratic' ? (
                (() => {
                  try {
                    const res = solveQuadratic(quadA, quadB, quadC);
                    return (
                      <div className="space-y-4">
                        <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <span className="text-xs font-mono uppercase text-indigo-400 block">
                              {lang === 'bn' ? 'মূলদ্বয় ও নিশ্চয়ক D:' : 'Roots & Discriminant D:'}
                            </span>
                            <span className="text-xl font-black text-white font-mono">
                              {res.rootsDisplay} (D = {res.discriminant})
                            </span>
                          </div>
                          <span className="text-xs px-2.5 py-1 bg-indigo-900/60 border border-indigo-700/50 text-indigo-200 rounded-lg">
                            {lang === 'bn' ? res.natureBn : res.natureEn}
                          </span>
                        </div>
                        <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                          <Latex formula={res.stepsLatex} />
                        </div>
                      </div>
                    );
                  } catch (e: any) {
                    return (
                      <div className="p-4 bg-red-950/40 border border-red-800/60 rounded-xl text-red-300 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{e.message}</span>
                      </div>
                    );
                  }
                })()
              ) : (
                (() => {
                  const res = solveLinearInequality(ineqA, ineqB, ineqC);
                  return (
                    <div className="space-y-4">
                      <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex items-center justify-between">
                        <div>
                          <span className="text-xs font-mono uppercase text-indigo-400 block">
                            {lang === 'bn' ? 'সমাধান ব্যবধী:' : 'Solution Interval:'}
                          </span>
                          <span className="text-xl font-black text-white font-mono">{res.interval}</span>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                        <Latex formula={res.stepsLatex} />
                      </div>
                    </div>
                  );
                })()
              )
            )}

            {activeTab === 'series' && (
              seriesSubTab === 'geometric' ? (
                (() => {
                  const res = solveInfiniteGeometricSum(geoA, geoR);
                  return (
                    <div className="space-y-4">
                      <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex items-center justify-between">
                        <div>
                          <span className="text-xs font-mono uppercase text-indigo-400 block">
                            {lang === 'bn' ? 'অসীমতক সমষ্টি S∞:' : 'Infinite Sum S∞:'}
                          </span>
                          <span className="text-2xl font-black text-white font-mono">
                            {res.hasSum ? res.sum : (lang === 'bn' ? 'অসীমতক সমষ্টি নেই' : 'No Infinite Sum')}
                          </span>
                        </div>
                        <span className={`text-xs px-2.5 py-1 rounded-lg border ${res.hasSum ? 'bg-emerald-950/60 border-emerald-700/60 text-emerald-300' : 'bg-rose-950/60 border-rose-700/60 text-rose-300'}`}>
                          {res.hasSum ? '|r| < 1 (অভিসারী)' : '|r| ≥ 1 (অপসারী)'}
                        </span>
                      </div>
                      <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                        <Latex formula={res.stepsLatex} />
                      </div>
                    </div>
                  );
                })()
              ) : (
                (() => {
                  try {
                    const res = convertRecurringDecimal(recWhole, recNonRecur, recRecur || '1');
                    return (
                      <div className="space-y-4">
                        <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex items-center justify-between">
                          <div>
                            <span className="text-xs font-mono uppercase text-indigo-400 block">
                              {lang === 'bn' ? 'সাধারণ ভগ্নাংশ (লঘিষ্ঠ আকার):' : 'Reduced Fraction:'}
                            </span>
                            <span className="text-2xl font-black text-white font-mono">
                              {res.fraction} ≈ {res.floatVal}
                            </span>
                          </div>
                        </div>
                        <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                          <Latex formula={res.stepsLatex} />
                        </div>
                      </div>
                    );
                  } catch (e: any) {
                    return (
                      <div className="p-4 bg-red-950/40 border border-red-800/60 rounded-xl text-red-300 text-xs">
                        {e.message}
                      </div>
                    );
                  }
                })()
              )
            )}

            {activeTab === 'sets' && (
              setsSubTab === 'venn' ? (
                (() => {
                  const res = solveThreeSetVenn(vennNA, vennNB, vennNC, vennNAB, vennNBC, vennNCA, vennNABC);
                  return (
                    <div className="space-y-4">
                      <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <span className="text-xs font-mono uppercase text-indigo-400 block">
                            n(A ∪ B ∪ C):
                          </span>
                          <span className="text-2xl font-black text-white font-mono">{res.union}</span>
                        </div>
                        <div className="text-xs text-slate-300 font-mono">
                          শুধু A: {res.onlyA} | শুধু B: {res.onlyB} | শুধু C: {res.onlyC}
                        </div>
                      </div>
                      <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                        <Latex formula={res.stepsLatex} />
                      </div>
                    </div>
                  );
                })()
              ) : setsSubTab === 'inverse' ? (
                (() => {
                  try {
                    const res = solveFractionalInverse(invA, invB, invC, invD);
                    return (
                      <div className="space-y-4">
                        <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <span className="text-xs font-mono uppercase text-indigo-400 block">
                              বিপরীত ফাংশন:
                            </span>
                            <span className="text-lg font-black text-white font-mono">
                              <Latex formula={res.inverseLatex} />
                            </span>
                          </div>
                          <div className="text-xs text-slate-400">
                            ডোমেন বর্জন: <Latex formula={res.domainExclusion} />
                          </div>
                        </div>
                        <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                          <Latex formula={res.stepsLatex} />
                        </div>
                      </div>
                    );
                  } catch (e: any) {
                    return (
                      <div className="p-4 bg-red-950/40 border border-red-800/60 rounded-xl text-red-300 text-xs">
                        {e.message}
                      </div>
                    );
                  }
                })()
              ) : (
                <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase text-indigo-400 block">উপসেট সংখ্যা:</span>
                    <span className="text-2xl font-black text-white font-mono">2^{subsetsN} = {Math.pow(2, subsetsN)}</span>
                  </div>
                  <span className="text-xs text-slate-400">প্রকৃত উপসেট: {Math.pow(2, subsetsN) - 1}</span>
                </div>
              )
            )}

            {activeTab === 'algebra' && (
              algSubTab === 'remainder' ? (
                (() => {
                  try {
                    const parsedCoeffs = polyCoeffs.split(',').map((s) => parseFloat(s.trim())).filter((n) => !isNaN(n));
                    if (parsedCoeffs.length === 0) throw new Error('Valid polynomial coefficients required.');
                    const res = evaluateRemainderTheorem(parsedCoeffs, polyA);
                    return (
                      <div className="space-y-4">
                        <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex items-center justify-between">
                          <div>
                            <span className="text-xs font-mono uppercase text-indigo-400 block">ভাগশেষ R = P({polyA}):</span>
                            <span className="text-2xl font-black text-white font-mono">{res.remainder}</span>
                          </div>
                          <span className={`text-xs px-2.5 py-1 rounded-lg border ${res.isFactor ? 'bg-emerald-950/60 border-emerald-700/60 text-emerald-300' : 'bg-slate-800 border-slate-700 text-slate-300'}`}>
                            {res.isFactor ? '(x - a) একটি উৎপাদক' : 'উৎপাদক নয়'}
                          </span>
                        </div>
                        <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                          <Latex formula={res.stepsLatex} />
                        </div>
                      </div>
                    );
                  } catch (e: any) {
                    return (
                      <div className="p-4 bg-red-950/40 border border-red-800/60 rounded-xl text-red-300 text-xs">
                        {e.message}
                      </div>
                    );
                  }
                })()
              ) : (
                (() => {
                  const res = solveCyclicCubic(cycA, cycB, cycC);
                  return (
                    <div className="space-y-4">
                      <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex items-center justify-between">
                        <div>
                          <span className="text-xs font-mono uppercase text-indigo-400 block">a³ + b³ + c³ - 3abc:</span>
                          <span className="text-2xl font-black text-white font-mono">{res.value}</span>
                        </div>
                        {res.isSumZero && (
                          <span className="text-xs px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-700/60 text-emerald-300">
                            a+b+c = 0 ⇒ 3abc
                          </span>
                        )}
                      </div>
                      <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                        <Latex formula={res.stepsLatex} />
                      </div>
                    </div>
                  );
                })()
              )
            )}

            {activeTab === 'trig_logs' && (
              trigSubTab === 'sector' ? (
                (() => {
                  const res = solveArcSector(arcR, arcDeg);
                  return (
                    <div className="space-y-4">
                      <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <span className="text-xs font-mono uppercase text-indigo-400 block">চাপ s ও ক্ষেত্রফল A:</span>
                          <span className="text-xl font-black text-white font-mono">s = {res.arcLength} একক, A = {res.sectorArea} বর্গ একক</span>
                        </div>
                        <span className="text-xs text-slate-400 font-mono">θ = {res.thetaRad} rad</span>
                      </div>
                      <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                        <Latex formula={res.stepsLatex} />
                      </div>
                    </div>
                  );
                })()
              ) : (
                (() => {
                  try {
                    const res = solveLog(logBase, logX);
                    return (
                      <div className="space-y-4">
                        <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex items-center justify-between">
                          <div>
                            <span className="text-xs font-mono uppercase text-indigo-400 block">log_{logBase}({logX}):</span>
                            <span className="text-2xl font-black text-white font-mono">{res.value}</span>
                          </div>
                        </div>
                        <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                          <Latex formula={res.stepsLatex} />
                        </div>
                      </div>
                    );
                  } catch (e: any) {
                    return (
                      <div className="p-4 bg-red-950/40 border border-red-800/60 rounded-xl text-red-300 text-xs">
                        {e.message}
                      </div>
                    );
                  }
                })()
              )
            )}

            {activeTab === 'binomial' && (
              (() => {
                try {
                  const res = expandBinomial(binA, binB, binN);
                  return (
                    <div className="space-y-4">
                      <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl">
                        <span className="text-xs font-mono uppercase text-indigo-400 block mb-1">
                          মোট পদ সংখ্যা: {binN + 1}
                        </span>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {res.terms.map((t) => (
                            <span key={t.index} className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-xs font-mono text-indigo-200">
                              T_{t.index}: {t.coeff}x^{t.powerA}y^{t.powerB}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                        <Latex formula={res.stepsLatex} />
                      </div>
                    </div>
                  );
                } catch (e: any) {
                  return (
                    <div className="p-4 bg-red-950/40 border border-red-800/60 rounded-xl text-red-300 text-xs">
                      {e.message}
                    </div>
                  );
                }
              })()
            )}

            {activeTab === 'coord_vec' && (
              coordSubTab === 'line' ? (
                (() => {
                  const res = solveCoordinateLine(x1, y1, x2, y2);
                  return (
                    <div className="space-y-4">
                      <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <span className="text-xs font-mono uppercase text-indigo-400 block">দূরত্ব d ও ঢাল m:</span>
                          <span className="text-lg font-black text-white font-mono">
                            d = {res.distance} একক, m = {res.slope !== null ? res.slope : 'অসংজ্ঞায়িত'}
                          </span>
                        </div>
                        <span className="text-xs text-indigo-300 font-mono">{res.equation}</span>
                      </div>
                      <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                        <Latex formula={res.stepsLatex} />
                      </div>
                    </div>
                  );
                })()
              ) : coordSubTab === 'polygon' ? (
                (() => {
                  try {
                    const pts = polyVertices.split(';').map((pair) => {
                      const [px, py] = pair.split(',').map((n) => parseFloat(n.trim()));
                      if (isNaN(px) || isNaN(py)) throw new Error('Invalid coordinate point.');
                      return [px, py] as [number, number];
                    });
                    const res = solvePolygonArea(pts);
                    return (
                      <div className="space-y-4">
                        <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex items-center justify-between">
                          <div>
                            <span className="text-xs font-mono uppercase text-indigo-400 block">Shoelace ক্ষেত্রফল:</span>
                            <span className="text-2xl font-black text-white font-mono">{res.area} বর্গ একক</span>
                          </div>
                          <span className="text-xs text-slate-400">{pts.length} টি শীর্ষবিন্দু</span>
                        </div>
                        <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                          <Latex formula={res.stepsLatex} />
                        </div>
                      </div>
                    );
                  } catch (e: any) {
                    return (
                      <div className="p-4 bg-red-950/40 border border-red-800/60 rounded-xl text-red-300 text-xs">
                        {e.message}
                      </div>
                    );
                  }
                })()
              ) : (
                (() => {
                  const res = solveVector(vecX, vecY);
                  return (
                    <div className="space-y-4">
                      <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex items-center justify-between">
                        <div>
                          <span className="text-xs font-mono uppercase text-indigo-400 block">ভেক্টরের মান |v| ও দিক θ:</span>
                          <span className="text-xl font-black text-white font-mono">|v| = {res.magnitude}, θ = {res.directionDeg}°</span>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                        <Latex formula={res.stepsLatex} />
                      </div>
                    </div>
                  );
                })()
              )
            )}

            {activeTab === 'solid_prob' && (
              solidSubTab !== 'prob' ? (
                (() => {
                  try {
                    const res = solveSolidGeometry(solidSubTab, solidR, solidH);
                    return (
                      <div className="space-y-4">
                        <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <span className="text-xs font-mono uppercase text-indigo-400 block">আয়তন ও সমগ্রতল:</span>
                            <span className="text-lg font-black text-white font-mono">
                              V = {res.volume} ঘন একক, A = {res.totalSurface} বর্গ একক
                            </span>
                          </div>
                          {res.slantHeight && (
                            <span className="text-xs text-indigo-300 font-mono">হেলানো উচ্চতা l = {res.slantHeight}</span>
                          )}
                        </div>
                        <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                          <Latex formula={res.stepsLatex} />
                        </div>
                      </div>
                    );
                  } catch (e: any) {
                    return (
                      <div className="p-4 bg-red-950/40 border border-red-800/60 rounded-xl text-red-300 text-xs">
                        {e.message}
                      </div>
                    );
                  }
                })()
              ) : (
                (() => {
                  try {
                    const res = solveProbability(probFav, probTot);
                    return (
                      <div className="space-y-4">
                        <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <span className="text-xs font-mono uppercase text-indigo-400 block">সম্ভাবনা P(E):</span>
                            <span className="text-2xl font-black text-white font-mono">{res.probability} ({res.percentage}%)</span>
                          </div>
                          <span className="text-xs text-slate-400 font-mono">বিপক্ষে অনুপাত: {res.oddsAgainst}</span>
                        </div>
                        <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-indigo-200 overflow-x-auto">
                          <Latex formula={res.stepsLatex} />
                        </div>
                      </div>
                    );
                  } catch (e: any) {
                    return (
                      <div className="p-4 bg-red-950/40 border border-red-800/60 rounded-xl text-red-300 text-xs">
                        {e.message}
                      </div>
                    );
                  }
                })()
              )
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
            <span>কাসিও সাইন্টিফিক ক্যালকুলেটর শর্টকাটের জন্য নিচে দেখুন</span>
            <span className="text-indigo-400 font-mono">fx-991EX / ClassWiz</span>
          </div>
        </div>
      </div>
    </div>
  );
};
