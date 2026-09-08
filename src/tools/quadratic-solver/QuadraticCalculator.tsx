import React, { useState, useMemo } from 'react';
import { solveQuadratic, type QuadraticResult } from './engine';
import { Latex } from '../../components/math/Latex';
import { Layers, CheckCircle, HelpCircle, ArrowRight, Copy, Check } from 'lucide-react';

interface Props {
  lang?: 'en' | 'bn';
}

const PRESETS = [
  { label: 'x² - 5x + 6 = 0 (Real)', a: 1, b: -5, c: 6 },
  { label: 'x² - 4x + 4 = 0 (Repeated)', a: 1, b: -4, c: 4 },
  { label: 'x² + 2x + 5 = 0 (Complex)', a: 1, b: 2, c: 5 },
  { label: '2x² + 7x - 15 = 0 (Fractions)', a: 2, b: 7, c: -15 },
  { label: '4x² - 12x + 9 = 0 (Zero Disc)', a: 4, b: -12, c: 9 },
];

export const QuadraticCalculator: React.FC<Props> = ({ lang = 'bn' }) => {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(-5);
  const [c, setC] = useState<number>(6);
  const [methodTab, setMethodTab] = useState<'formula' | 'completing_square'>('formula');
  const [copied, setCopied] = useState<boolean>(false);

  const { result, error } = useMemo(() => {
    try {
      return { result: solveQuadratic(a, b, c), error: null };
    } catch (e: any) {
      return { result: null, error: e.message };
    }
  }, [a, b, c]);

  const handleCopy = () => {
    if (!result) return;
    const text = `Quadratic Equation: ${a}x² + ${b}x + ${c} = 0
Roots: ${result.rootsDisplayLatex}
Discriminant: D = ${result.discriminant} (${result.rootType})
Vertex: (${result.vertex.h}, ${result.vertex.k})
Axis of Symmetry: x = ${result.axisOfSymmetry}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="w-6 h-6 text-violet-400" />
            {lang === 'bn' ? 'দ্বিঘাত সমীকরণ ধাপে ধাপে সমাধানকারী' : 'Procedural Quadratic Equation Solver'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'bn'
              ? 'বাস্তব ও জটিল মূল, নিশ্চয়ক (Discriminant) বিশ্লেষণ এবং পূর্ণবর্গ পদ্ধতি'
              : 'Solves real & complex roots, discriminant analysis, parabola vertex, and completing-the-square steps.'}
          </p>
        </div>

        {/* Method Toggle & Copy */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setMethodTab('formula')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                methodTab === 'formula'
                  ? 'bg-violet-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'bn' ? 'দ্বিঘাত সূত্র' : 'Quadratic Formula'}
            </button>
            <button
              onClick={() => setMethodTab('completing_square')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                methodTab === 'completing_square'
                  ? 'bg-violet-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'bn' ? 'পূর্ণবর্গ পদ্ধতি' : 'Completing the Square'}
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-violet-400" />}
            {copied ? (lang === 'bn' ? 'কপি হয়েছে' : 'Copied') : (lang === 'bn' ? 'কপি করুন' : 'Copy')}
          </button>
        </div>
      </div>

      {/* Input Coefficients */}
      <div className="space-y-3">
        <label className="block text-xs font-medium text-slate-300">
          {lang === 'bn' ? 'সহগসমূহ ইনপুট দিন (ax² + bx + c = 0):' : 'Enter Coefficients (ax² + bx + c = 0):'}
        </label>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <span className="text-[11px] text-slate-400 block mb-1">a (x² এর সহগ)</span>
            <input
              type="number"
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 focus:border-violet-500 rounded-xl text-base font-mono text-white text-center outline-none"
            />
          </div>
          <div>
            <span className="text-[11px] text-slate-400 block mb-1">b (x এর সহগ)</span>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 focus:border-violet-500 rounded-xl text-base font-mono text-white text-center outline-none"
            />
          </div>
          <div>
            <span className="text-[11px] text-slate-400 block mb-1">c (ধ্রুবক পদ)</span>
            <input
              type="number"
              value={c}
              onChange={(e) => setC(Number(e.target.value))}
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 focus:border-violet-500 rounded-xl text-base font-mono text-white text-center outline-none"
            />
          </div>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-xs text-slate-400">{lang === 'bn' ? 'উদাহরণ:' : 'Presets:'}</span>
          {PRESETS.map((p) => (
            <button
              key={p.label}
              onClick={() => {
                setA(p.a);
                setB(p.b);
                setC(p.c);
              }}
              className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700 transition"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs">
          {error}
        </div>
      )}

      {/* Main Solution Display */}
      {result && (
        <div className="space-y-5">
          {/* Main Card */}
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-violet-500/30 rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-violet-400">
                  {lang === 'bn' ? 'সমীকরণের সমাধান (Roots)' : 'Calculated Roots'}
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-mono">
                  <Latex formula={result.rootsDisplayLatex} />
                </div>
              </div>

              <div className="bg-slate-800/80 px-3 py-2 rounded-xl border border-slate-700 text-xs text-slate-300">
                <span className="text-slate-400 block text-[10px] uppercase">
                  {lang === 'bn' ? 'নিশ্চায়ক / পৃথায়ক (D)' : 'Discriminant (D)'}
                </span>
                <span className="font-mono font-bold text-violet-300">D = {result.discriminant}</span>
              </div>
            </div>

            {/* Parabola Characteristics */}
            <div className="pt-3 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block">{lang === 'bn' ? 'মূলের প্রকৃতি:' : 'Nature of Roots:'}</span>
                <span className="font-semibold text-emerald-300">
                  {result.rootType === 'real_distinct'
                    ? lang === 'bn' ? 'বাস্তব ও অসমান' : 'Real & Distinct'
                    : result.rootType === 'real_repeated'
                      ? lang === 'bn' ? 'বাস্তব ও সমান' : 'Real & Equal'
                      : lang === 'bn' ? 'জটিল অনুবন্ধী' : 'Complex Conjugates'}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">{lang === 'bn' ? 'পরাবৃত্তের শীর্ষবিন্দু (Vertex):' : 'Parabola Vertex:'}</span>
                <span className="font-mono text-slate-200">({result.vertex.h}, {result.vertex.k})</span>
              </div>
              <div>
                <span className="text-slate-400 block">{lang === 'bn' ? 'প্রতিসাম্য অক্ষ:' : 'Axis of Symmetry:'}</span>
                <span className="font-mono text-slate-200">x = {result.axisOfSymmetry}</span>
              </div>
            </div>
          </div>

          {/* Derivation Steps */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-200">
              {methodTab === 'formula'
                ? lang === 'bn'
                  ? 'দ্বিঘাত সূত্র দ্বারা সম্পূর্ণ প্রতিপাদন'
                  : 'Quadratic Formula Procedural Steps'
                : lang === 'bn'
                  ? 'পূর্ণবর্গকরণ পদ্ধতির ধারাবাহিক ধাপ'
                  : 'Completing-the-Square Procedural Steps'}
            </h3>

            <div className="space-y-2.5">
              {(methodTab === 'formula' ? result.latexSteps : result.completingTheSquareSteps).map(
                (step, idx) => (
                  <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 space-y-1.5">
                    <div className="text-xs font-bold text-slate-300">
                      {lang === 'bn' ? step.titleBn : step.titleEn}
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded-lg text-xs font-mono text-violet-200 overflow-x-auto border border-slate-800/80">
                      <Latex formula={step.latex} displayMode={true} />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
