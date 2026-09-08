import React, { useState } from 'react';
import { calculateMolarMass } from '../../tools/molar-mass/engine';

interface Props {
  lang?: 'en' | 'bn';
}

type SolverMode = 'force' | 'energy' | 'molar';

export const QuickSolverPreview: React.FC<Props> = ({ lang = 'bn' }) => {
  const [mode, setMode] = useState<SolverMode>('force');

  // Mode 1: Force (F = ma)
  const [mass, setMass] = useState<number>(15);
  const [accel, setAccel] = useState<number>(4);

  // Mode 2: Kinetic Energy (Ek = 0.5 * m * v^2)
  const [velocity, setVelocity] = useState<number>(12);

  // Mode 3: Molar Mass
  const [formula, setFormula] = useState<string>('H2SO4');

  // Compute live results
  const forceResult = mass * accel;
  const energyResult = 0.5 * mass * Math.pow(velocity, 2);

  let molarResult: { mass: number; err?: string } = { mass: 98.079 };
  try {
    if (formula.trim()) {
      const res = calculateMolarMass(formula.trim());
      molarResult = { mass: Math.round(res.totalMolarMass * 1000) / 1000 };
    }
  } catch {
    molarResult = { mass: 0, err: lang === 'bn' ? 'অপরিচিত সংকেত' : 'Invalid formula' };
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4 text-left">
      {/* Widget Header with live status */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          <span className="text-xs font-mono font-semibold text-slate-200">
            {lang === 'bn' ? 'লাইভ হিসাব ও সমাধান ডেমো' : 'Live Interactive Demo'}
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
          0ms offline
        </span>
      </div>

      {/* Solver Mode Tabs */}
      <div className="flex gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800/80 text-xs">
        <button
          onClick={() => setMode('force')}
          className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition ${
            mode === 'force'
              ? 'bg-slate-850 text-cyan-400 font-semibold border border-slate-750 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {lang === 'bn' ? 'বল (F = ma)' : 'Force (F = ma)'}
        </button>

        <button
          onClick={() => setMode('energy')}
          className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition ${
            mode === 'energy'
              ? 'bg-slate-850 text-cyan-400 font-semibold border border-slate-750 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {lang === 'bn' ? 'গতিশক্তি (Ek)' : 'Kinetic Energy'}
        </button>

        <button
          onClick={() => setMode('molar')}
          className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition ${
            mode === 'molar'
              ? 'bg-slate-850 text-cyan-400 font-semibold border border-slate-750 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {lang === 'bn' ? 'আণবিক ভর' : 'Molar Mass'}
        </button>
      </div>

      {/* Input Form Fields */}
      {mode === 'force' && (
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <label className="block text-slate-400 text-[11px] mb-1 font-mono">
              {lang === 'bn' ? 'ভর (m) [kg]:' : 'Mass (m) [kg]:'}
            </label>
            <input
              type="number"
              value={mass}
              onChange={(e) => setMass(Number(e.target.value) || 0)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white font-mono focus:outline-none focus:border-cyan-500"
            />
          </div>
          <div>
            <label className="block text-slate-400 text-[11px] mb-1 font-mono">
              {lang === 'bn' ? 'ত্বরণ (a) [m/s²]:' : 'Acceleration (a) [m/s²]:'}
            </label>
            <input
              type="number"
              value={accel}
              onChange={(e) => setAccel(Number(e.target.value) || 0)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white font-mono focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>
      )}

      {mode === 'energy' && (
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <label className="block text-slate-400 text-[11px] mb-1 font-mono">
              {lang === 'bn' ? 'ভর (m) [kg]:' : 'Mass (m) [kg]:'}
            </label>
            <input
              type="number"
              value={mass}
              onChange={(e) => setMass(Number(e.target.value) || 0)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white font-mono focus:outline-none focus:border-cyan-500"
            />
          </div>
          <div>
            <label className="block text-slate-400 text-[11px] mb-1 font-mono">
              {lang === 'bn' ? 'বেগ (v) [m/s]:' : 'Velocity (v) [m/s]:'}
            </label>
            <input
              type="number"
              value={velocity}
              onChange={(e) => setVelocity(Number(e.target.value) || 0)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white font-mono focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>
      )}

      {mode === 'molar' && (
        <div className="space-y-1 text-xs">
          <label className="block text-slate-400 text-[11px] font-mono">
            {lang === 'bn' ? 'রাসায়নিক সংকেত (যেমন H2SO4, CuSO4.5H2O):' : 'Chemical Formula:'}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={formula}
              onChange={(e) => setFormula(e.target.value)}
              className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white font-mono uppercase focus:outline-none focus:border-cyan-500"
            />
            {['H2O', 'Ca(OH)2', 'CuSO4'].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setFormula(preset)}
                className="px-2 py-1 bg-slate-950 hover:bg-slate-800 text-[11px] font-mono text-slate-400 rounded-lg border border-slate-800"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Live Result Box */}
      <div className="bg-slate-950 border border-slate-800/90 rounded-xl p-3.5 space-y-1.5 font-mono text-xs">
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span>{lang === 'bn' ? 'ধাপে ধাপে হিসাব:' : 'Derivation Step:'}</span>
          <span className="text-emerald-400 font-medium">{lang === 'bn' ? 'ফলাফল' : 'Result'}</span>
        </div>

        {mode === 'force' && (
          <div className="text-slate-300">
            <div>F = m × a = {mass} kg × {accel} m/s²</div>
            <div className="text-base font-bold text-cyan-300 pt-1">
              F = {forceResult} N (নিউটন)
            </div>
          </div>
        )}

        {mode === 'energy' && (
          <div className="text-slate-300">
            <div>E_k = ½ × {mass} kg × ({velocity} m/s)²</div>
            <div className="text-base font-bold text-cyan-300 pt-1">
              E_k = {energyResult} J (জুল)
            </div>
          </div>
        )}

        {mode === 'molar' && (
          <div className="text-slate-300">
            <div>Formula: {formula}</div>
            {molarResult.err ? (
              <div className="text-rose-400 text-xs">{molarResult.err}</div>
            ) : (
              <div className="text-base font-bold text-cyan-300 pt-1">
                M = {molarResult.mass} g/mol
              </div>
            )}
          </div>
        )}
      </div>

      {/* CTA to full tool */}
      <div className="pt-1 flex items-center justify-between text-xs">
        <span className="text-[11px] text-slate-500">
          {lang === 'bn' ? 'অনুমোদিত কাসিও কি-স্ট্রোকসহ' : 'With Casio fx-991 keystrokes'}
        </span>
        <a
          href={
            mode === 'force' || mode === 'energy'
              ? `/${lang}/tools/physics`
              : `/${lang}/tools/chemistry`
          }
          className="text-cyan-400 hover:text-cyan-300 hover:underline font-medium flex items-center gap-1"
        >
          <span>{lang === 'bn' ? 'সম্পূর্ণ সমাধান দেখুন' : 'Open Full Solver'}</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );
};
