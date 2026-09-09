import React, { useState, useEffect } from 'react';
import { calculateMolarMass, type MolarMassResult } from './engine';
import { Latex } from '../../components/math/Latex';
import { Atom, Copy, Check, RefreshCw, AlertTriangle } from 'lucide-react';

interface Props {
  lang?: 'en' | 'bn';
}

const PRESETS = [
  { label: 'H2O (Water / পানি)', formula: 'H2O' },
  { label: 'CuSO4·5H2O (Blue Vitriol / তুঁতে)', formula: 'CuSO4·5H2O' },
  { label: 'Ca(OH)2 (Slaked Lime / চুন)', formula: 'Ca(OH)2' },
  { label: 'C6H12O6 (Glucose / গ্লুকোজ)', formula: 'C6H12O6' },
  { label: 'K4[Fe(CN)6] (Potassium Ferrocyanide)', formula: 'K4[Fe(CN)6]' },
];

export const MolarMassCalculator: React.FC<Props> = ({ lang = 'bn' }) => {
  const [formulaInput, setFormulaInput] = useState('CuSO4·5H2O');
  const [result, setResult] = useState<MolarMassResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCalculate = (input: string) => {
    try {
      setError(null);
      const res = calculateMolarMass(input);
      setResult(res);
    } catch (err: any) {
      setError(err.message || 'Error parsing formula');
      setResult(null);
    }
  };

  useEffect(() => {
    handleCalculate(formulaInput);
  }, []);

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(
      `${result.formula} = ${result.totalMolarMass} g/mol`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Atom className="w-6 h-6 text-emerald-400" />
            {lang === 'bn' ? 'মোলার ভর ও শতকরা সংযুতি গণক' : 'Molar Mass & Composition Deconstructor'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'bn'
              ? 'কেলাস পানি ও ব্র্যাকেটসহ রাসায়নিক সংকেত লিখুন'
              : 'Supports hydrates (e.g. ·5H2O), coordinate brackets, and nested salts.'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            disabled={!result}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? (lang === 'bn' ? 'কপি হয়েছে' : 'Copied') : (lang === 'bn' ? 'কপি করুন' : 'Copy')}
          </button>
        </div>
      </div>

      {/* Input Field & Submit */}
      <div className="space-y-2">
        <label className="block text-xs font-medium text-slate-300">
          {lang === 'bn' ? 'রাসায়নিক সংকেত (Chemical Formula):' : 'Enter Chemical Formula:'}
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={formulaInput}
            onChange={(e) => {
              setFormulaInput(e.target.value);
              handleCalculate(e.target.value);
            }}
            placeholder="e.g. CuSO4·5H2O, Ca(OH)2, H2SO4"
            className="flex-1 px-4 py-3 bg-slate-950 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl text-lg font-mono text-white placeholder-slate-500 outline-none transition"
          />
          <button
            onClick={() => handleCalculate(formulaInput)}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            {lang === 'bn' ? 'গণনা করুন' : 'Calculate'}
          </button>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <span className="text-xs text-slate-400 mr-1">{lang === 'bn' ? 'উদাহরণ:' : 'Quick Presets:'}</span>
          {PRESETS.map((p) => (
            <button
              key={p.formula}
              onClick={() => {
                setFormulaInput(p.formula);
                handleCalculate(p.formula);
              }}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
            >
              {p.formula}
            </button>
          ))}
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-start gap-3 text-rose-300 text-xs">
          <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold">{lang === 'bn' ? 'সংকেত ত্রুটি:' : 'Formula Error:'}</div>
            <div className="mt-0.5">{error}</div>
          </div>
        </div>
      )}

      {/* Results Display */}
      {result && (
        <div className="space-y-6 pt-2">
          {/* Main Card */}
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-emerald-500/30 rounded-2xl p-5 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  {lang === 'bn' ? 'মোট আণবিক ভর' : 'Total Molar Mass'}
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 font-mono flex items-baseline gap-2">
                  {result.totalMolarMass}
                  <span className="text-sm font-sans font-normal text-slate-400">g/mol (বা ডাল্টন)</span>
                </div>
              </div>
              <div className="text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 self-start sm:self-auto">
                <Latex formula={result.latexFormula} />
              </div>
            </div>

            {/* LaTeX Derivation Formula */}
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-300">
              <span className="text-slate-400 block mb-1">
                {lang === 'bn' ? 'ধাপে ধাপে সমষ্টি প্রতিপাদন:' : 'Step-by-Step Derivation:'}
              </span>
              <div className="overflow-x-auto py-1">
                <Latex formula={result.latexSumDerivation} displayMode={true} />
              </div>
            </div>
          </div>

          {/* Elemental Breakdown Table */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-200">
              {lang === 'bn' ? 'উপাদান মৌলসমূহের শতকরা সংযুতি ও বিশ্লেষণ' : 'Elemental Mass Percent Composition'}
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-800 touch-pan-x">
              <table className="w-full min-w-[460px] text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-950/80 text-slate-400 border-b border-slate-800 font-medium">
                    <th className="py-2.5 px-3">{lang === 'bn' ? 'মৌল' : 'Element'}</th>
                    <th className="py-2.5 px-3 text-center">{lang === 'bn' ? 'সংখ্যা' : 'Atoms'}</th>
                    <th className="py-2.5 px-3 text-right">{lang === 'bn' ? 'পারমাণবিক ভর' : 'Atomic Mass'}</th>
                    <th className="py-2.5 px-3 text-right">{lang === 'bn' ? 'উপাদান ভর' : 'Subtotal'}</th>
                    <th className="py-2.5 px-3 w-40">{lang === 'bn' ? 'শতকরা সংযুতি' : 'Mass %'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono">
                  {result.composition.map((item) => (
                    <tr key={item.element.symbol} className="hover:bg-slate-800/30 transition">
                      <td className="py-2.5 px-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-emerald-500/10 text-emerald-400 font-bold flex items-center justify-center text-xs border border-emerald-500/20">
                          {item.element.symbol}
                        </span>
                        <div>
                          <div className="font-sans font-medium text-slate-200">
                            {lang === 'bn' ? item.element.nameBn : item.element.nameEn}
                          </div>
                          <div className="text-[10px] text-slate-500">Z = {item.element.atomicNumber}</div>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 text-center text-slate-300 font-semibold">{item.count}</td>
                      <td className="py-2.5 px-3 text-right text-slate-400">{item.element.atomicMass}</td>
                      <td className="py-2.5 px-3 text-right text-slate-300 font-semibold">
                        {item.subtotalMass.toFixed(3)}
                      </td>
                      <td className="py-2.5 px-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                          <span className="text-slate-200 font-semibold text-[11px] w-12 text-right">
                            {item.percentage.toFixed(2)}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
