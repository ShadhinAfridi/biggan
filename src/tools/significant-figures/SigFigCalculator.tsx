import React, { useState, useEffect } from 'react';
import {
  analyzeSigFigs,
  calculateSigFigArithmetic,
  type SigFigAnalysis,
  type ArithmeticResult,
} from './engine';
import { Latex } from '../../components/math/Latex';
import { Binary, Check, Copy, RefreshCw, Calculator, BookOpen } from 'lucide-react';

interface Props {
  lang?: 'en' | 'bn';
}

export const SigFigCalculator: React.FC<Props> = ({ lang = 'bn' }) => {
  const [activeTab, setActiveTab] = useState<'counter' | 'arithmetic'>('counter');

  // Mode 1 State
  const [inputVal, setInputVal] = useState('0.005020');
  const [analysis, setAnalysis] = useState<SigFigAnalysis | null>(null);

  // Mode 2 State
  const [val1, setVal1] = useState('12.1');
  const [val2, setVal2] = useState('0.354');
  const [op, setOp] = useState<'add' | 'subtract' | 'multiply' | 'divide'>('add');
  const [arithmetic, setArithmetic] = useState<ArithmeticResult | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      setError(null);
      if (activeTab === 'counter') {
        const res = analyzeSigFigs(inputVal);
        setAnalysis(res);
      } else {
        const res = calculateSigFigArithmetic(op, val1, val2);
        setArithmetic(res);
      }
    } catch (e: any) {
      setError(e.message);
    }
  }, [inputVal, val1, val2, op, activeTab]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Binary className="w-6 h-6 text-amber-400" />
            {lang === 'bn' ? 'তাৎপর্যপূর্ণ অঙ্ক (Significant Figures) ক্যালকুলেটর' : 'Significant Figures Engine'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'bn'
              ? 'তাৎপর্যপূর্ণ অঙ্কের সংখ্যা গণনা, বৈজ্ঞানিক প্রকাশ ও নির্ভুল গাণিতিক রাউন্ডিং'
              : 'Precision analysis, decimal rules for addition/subtraction, and sig-fig rules for multiplication/division.'}
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('counter')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              activeTab === 'counter'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {lang === 'bn' ? 'অঙ্ক গণনা ও নিয়ম' : 'Count & Rules'}
          </button>
          <button
            onClick={() => setActiveTab('arithmetic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              activeTab === 'arithmetic'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {lang === 'bn' ? 'গাণিতিক অপারেশন (+, -, ×, ÷)' : 'Precision Math'}
          </button>
        </div>
      </div>

      {error && (
        <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs">
          {error}
        </div>
      )}

      {/* MODE 1: COUNTER */}
      {activeTab === 'counter' && (
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="block text-xs font-medium text-slate-300">
              {lang === 'bn' ? 'সংখ্যা ইনপুট দিন (Enter number):' : 'Enter numeric value:'}
            </label>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="e.g. 0.005020, 104.50, 100"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl text-lg font-mono text-white outline-none"
            />
            {/* Quick chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-xs text-slate-400">{lang === 'bn' ? 'পরীক্ষার জটিল উদাহরণ:' : 'Tricky Examples:'}</span>
              {['0.005020', '104.50', '6.022e23', '100.0', '0.040', '0.00025', '5.000', '1200', '1.2000e4'].map((chip) => (
                <button
                  key={chip}
                  onClick={() => setInputVal(chip)}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:bg-amber-950 hover:text-amber-300 border border-slate-700 transition"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {analysis && (
            <div className="space-y-4">
              {/* Highlight Card */}
              <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 rounded-2xl p-5 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-amber-400">
                      {lang === 'bn' ? 'তাৎপর্যপূর্ণ অঙ্কের সংখ্যা' : 'Significant Figures Count'}
                    </span>
                    <div className="text-4xl font-extrabold text-white mt-1 font-mono flex items-baseline gap-3">
                      {analysis.count}
                      <span className="text-sm font-sans font-normal text-slate-400">
                        {lang === 'bn' ? 'টি অঙ্ক তাৎপর্যপূর্ণ' : 'significant digit(s)'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-slate-800/80 px-3 py-2 rounded-xl border border-slate-700 text-xs font-mono text-slate-300">
                      <span className="text-slate-400 block text-[10px] uppercase">
                        {lang === 'bn' ? 'বৈজ্ঞানিক সংকেত' : 'Scientific Notation'}
                      </span>
                      <Latex formula={analysis.scientificNotation} />
                    </div>

                    <button
                      onClick={() =>
                        handleCopy(
                          `Number: ${inputVal}\nSignificant Figures: ${analysis.count}\nScientific Notation: ${analysis.scientificNotation}`
                        )
                      }
                      className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400 rounded-xl border border-slate-700 transition"
                      title={lang === 'bn' ? 'ফলাফল কপি করুন' : 'Copy result'}
                    >
                      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center gap-4 text-xs text-slate-300 font-mono">
                  <div>
                    <span className="text-slate-500">{lang === 'bn' ? 'তাৎপর্যপূর্ণ অংশ: ' : 'Sig Digits: '}</span>
                    <span className="text-amber-300 font-bold">{analysis.significantDigits}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">{lang === 'bn' ? 'দশমিক স্থান: ' : 'Decimals: '}</span>
                    <span className="text-slate-200">{analysis.decimalPlaces}</span>
                  </div>
                </div>
              </div>

              {/* Rules Applied List */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  {lang === 'bn' ? 'প্রযোজ্য আন্তর্জাতিক বিজ্ঞান নীতিমালা:' : 'Evaluation Rules Applied:'}
                </h3>
                <div className="space-y-2">
                  {analysis.rulesApplied.map((rule, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl flex items-start gap-2.5 text-xs"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <div className="text-slate-300">{lang === 'bn' ? rule.ruleBn : rule.ruleEn}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODE 2: ARITHMETIC */}
      {activeTab === 'arithmetic' && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'bn' ? 'মান ১ (Value 1):' : 'Value 1:'}
              </label>
              <input
                type="text"
                value={val1}
                onChange={(e) => setVal1(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm font-mono text-white outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'bn' ? 'অপারেশন:' : 'Operation:'}
              </label>
              <select
                value={op}
                onChange={(e) => setOp(e.target.value as any)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm font-mono text-white outline-none"
              >
                <option value="add">{lang === 'bn' ? '+ যোগ (Addition)' : '+ Addition'}</option>
                <option value="subtract">{lang === 'bn' ? '- বিয়োগ (Subtraction)' : '- Subtraction'}</option>
                <option value="multiply">{lang === 'bn' ? '× গুণ (Multiplication)' : '× Multiplication'}</option>
                <option value="divide">{lang === 'bn' ? '÷ ভাগ (Division)' : '÷ Division'}</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'bn' ? 'মান ২ (Value 2):' : 'Value 2:'}
              </label>
              <input
                type="text"
                value={val2}
                onChange={(e) => setVal2(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm font-mono text-white outline-none"
              />
            </div>
          </div>

          {arithmetic && (
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 rounded-2xl p-5 shadow-xl space-y-4">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-amber-400">
                  {lang === 'bn' ? 'চূড়ান্ত নির্ভুল রাউন্ডিং ফলাফল' : 'Precision-Rounded Output'}
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 font-mono">
                  {arithmetic.roundedResult}
                </div>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-sm font-mono text-amber-300 overflow-x-auto">
                <Latex formula={arithmetic.latexDerivation} displayMode={true} />
              </div>

              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200">
                <span className="font-semibold">{lang === 'bn' ? 'নিয়ম ব্যাখ্যা: ' : 'Governing Rule: '}</span>
                {lang === 'bn' ? arithmetic.governingRuleBn : arithmetic.governingRuleEn}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
