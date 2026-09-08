import React, { useState, useMemo } from 'react';
import { calculateProjectile, type ProjectileResult } from './engine';
import { Latex } from '../../components/math/Latex';
import { Activity, Compass, Wind, ArrowUpRight, Check, Copy } from 'lucide-react';

interface Props {
  lang?: 'en' | 'bn';
}

const PROJECTILE_PRESETS = [
  { labelBn: 'ফুটবল কিক (45°)', labelEn: 'Football Kick (45°)', v0: 25, theta: 45, y0: 0 },
  { labelBn: 'ক্রিকেট বাউন্ডারি (35°)', labelEn: 'Cricket Six (35°)', v0: 32, theta: 35, y0: 1 },
  { labelBn: 'পাহাড় থেকে অনুভূমিক নিক্ষেপ (0°)', labelEn: 'Cliff Horizontal (0°)', v0: 20, theta: 0, y0: 45 },
  { labelBn: 'খাড়া উল্লম্ব নিক্ষেপ (90°)', labelEn: 'Vertical Launch (90°)', v0: 29.4, theta: 90, y0: 0 },
];

export const ProjectileCalculator: React.FC<Props> = ({ lang = 'bn' }) => {
  const [v0, setV0] = useState<number>(25);
  const [theta, setTheta] = useState<number>(45);
  const [y0, setY0] = useState<number>(0);
  const [g, setG] = useState<number>(9.8);
  const [copied, setCopied] = useState<boolean>(false);

  const result = useMemo(() => {
    try {
      return calculateProjectile({ v0, theta, y0, g });
    } catch {
      return null;
    }
  }, [v0, theta, y0, g]);

  const handleCopy = () => {
    if (!result) return;
    const text = `Projectile Motion Result:
Initial Velocity: ${v0} m/s
Launch Angle: ${theta}°
Initial Height: ${y0} m
Max Height (H_max): ${result.maxHeight} m
Horizontal Range (R): ${result.range} m
Total Flight Time (T): ${result.flightTime} s
Impact Velocity: ${result.impactVelocity} m/s`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // SVG Trajectory plot calculations
  const svgPath = useMemo(() => {
    if (!result || result.trajectory.length === 0) return '';
    const maxX = Math.max(result.range, 1);
    const maxY = Math.max(result.maxHeight * 1.2, 1);

    const svgWidth = 500;
    const svgHeight = 220;
    const padding = 20;

    const points = result.trajectory.map((p) => {
      const svgX = padding + (p.x / maxX) * (svgWidth - 2 * padding);
      const svgY = svgHeight - padding - (p.y / maxY) * (svgHeight - 2 * padding);
      return `${svgX.toFixed(1)},${svgY.toFixed(1)}`;
    });

    return `M ${points.join(' L ')}`;
  }, [result]);

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Activity className="w-6 h-6 text-sky-400" />
            {lang === 'bn' ? 'প্রাস ও প্রক্ষেপক গতিবিদ্যা সমাধানকারী' : 'Kinematic Projectile Motion Solver'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'bn'
              ? 'উচ্চতা, বিচরণকাল, অনুভূমিক পাল্লা ও দ্বিমাত্রিক গতিপথের ভেক্টর মডেল'
              : 'Calculate trajectory curve, maximum height, flight time, and vector velocity decomposition.'}
          </p>
        </div>

        {/* Gravity Selector & Copy Button */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 px-2 font-mono">g =</span>
            <button
              onClick={() => setG(9.8)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono transition ${
                g === 9.8
                  ? 'bg-sky-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              9.8 m/s² (NCTB)
            </button>
            <button
              onClick={() => setG(9.81)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono transition ${
                g === 9.81
                  ? 'bg-sky-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              9.81 m/s² (NCERT)
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-sky-400" />}
            {copied ? (lang === 'bn' ? 'কপি হয়েছে' : 'Copied') : (lang === 'bn' ? 'ফলাফল কপি' : 'Copy Result')}
          </button>
        </div>
      </div>

      {/* Control Inputs: Slider + Direct Numeric Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Initial Velocity v0 */}
        <div className="space-y-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
          <div className="flex justify-between items-center text-xs">
            <label className="font-medium text-slate-300">
              {lang === 'bn' ? 'আদি বেগ (v₀)' : 'Initial Velocity (v₀)'}
            </label>
            <div className="flex items-center gap-1">
              <input
                type="number"
                min="0"
                max="500"
                step="0.5"
                value={v0}
                onChange={(e) => setV0(parseFloat(e.target.value) || 0)}
                aria-label={lang === 'bn' ? 'আদি বেগ' : 'Initial Velocity'}
                className="w-16 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-right font-mono text-sky-400 font-bold text-xs outline-none focus:border-sky-500"
              />
              <span className="text-[10px] text-slate-400">m/s</span>
            </div>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={v0}
            onChange={(e) => setV0(Number(e.target.value))}
            aria-label={lang === 'bn' ? 'আদি বেগ স্লাইডার' : 'Initial Velocity Slider'}
            className="w-full accent-sky-500 cursor-pointer"
          />
        </div>

        {/* Launch Angle theta */}
        <div className="space-y-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
          <div className="flex justify-between items-center text-xs">
            <label className="font-medium text-slate-300">
              {lang === 'bn' ? 'নিক্ষেপণ কোণ (θ)' : 'Launch Angle (θ)'}
            </label>
            <div className="flex items-center gap-1">
              <input
                type="number"
                min="0"
                max="90"
                step="1"
                value={theta}
                onChange={(e) => setTheta(parseFloat(e.target.value) || 0)}
                aria-label={lang === 'bn' ? 'নিক্ষেপণ কোণ' : 'Launch Angle'}
                className="w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-right font-mono text-sky-400 font-bold text-xs outline-none focus:border-sky-500"
              />
              <span className="text-[10px] text-slate-400">°</span>
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="90"
            value={theta}
            onChange={(e) => setTheta(Number(e.target.value))}
            aria-label={lang === 'bn' ? 'নিক্ষেপণ কোণ স্লাইডার' : 'Launch Angle Slider'}
            className="w-full accent-sky-500 cursor-pointer"
          />
        </div>

        {/* Initial Elevation y0 */}
        <div className="space-y-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
          <div className="flex justify-between items-center text-xs">
            <label className="font-medium text-slate-300">
              {lang === 'bn' ? 'নিক্ষেপণের উচ্চতা (y₀)' : 'Initial Height (y₀)'}
            </label>
            <div className="flex items-center gap-1">
              <input
                type="number"
                min="0"
                max="200"
                step="1"
                value={y0}
                onChange={(e) => setY0(parseFloat(e.target.value) || 0)}
                aria-label={lang === 'bn' ? 'নিক্ষেপণের উচ্চতা' : 'Initial Height'}
                className="w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-right font-mono text-sky-400 font-bold text-xs outline-none focus:border-sky-500"
              />
              <span className="text-[10px] text-slate-400">m</span>
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="50"
            value={y0}
            onChange={(e) => setY0(Number(e.target.value))}
            aria-label={lang === 'bn' ? 'নিক্ষেপণের উচ্চতা স্লাইডার' : 'Initial Height Slider'}
            className="w-full accent-sky-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Exam Presets */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <span className="text-xs text-slate-400">{lang === 'bn' ? 'বোর্ড সিনারিও:' : 'Presets:'}</span>
        {PROJECTILE_PRESETS.map((p, idx) => (
          <button
            key={idx}
            onClick={() => {
              setV0(p.v0);
              setTheta(p.theta);
              setY0(p.y0);
            }}
            className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 hover:bg-sky-950 hover:text-sky-300 border border-slate-700 transition"
          >
            {lang === 'bn' ? p.labelBn : p.labelEn}
          </button>
        ))}
      </div>

      {/* SVG Interactive Trajectory Curve */}
      {result && (
        <div className="space-y-4">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 overflow-hidden relative">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2">
              <span className="font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                <Wind className="w-3.5 h-3.5" />
                {lang === 'bn' ? 'দ্বিমাত্রিক প্যারামেট্রিক গতিপথ চিত্র' : '2D Parametric Trajectory Curve'}
              </span>
              <span className="font-mono text-[11px]">
                {lang === 'bn'
                  ? `সর্বোচ্চ উচ্চতা: ${result.maxHeight}m | অনুভূমিক পাল্লা: ${result.range}m`
                  : `H_max: ${result.maxHeight}m | Range: ${result.range}m`}
              </span>
            </div>

            <div className="w-full aspect-[25/11] max-h-[220px]">
              <svg viewBox="0 0 500 220" className="w-full h-full overflow-visible">
                {/* Ground grid line */}
                <line x1="20" y1="200" x2="480" y2="200" stroke="#334155" strokeWidth="2" />

                {/* Trajectory Area and Curve */}
                <path d={`${svgPath} L 480,200 L 20,200 Z`} fill="rgba(14, 165, 233, 0.08)" />
                <path
                  d={svgPath}
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Launch point */}
                <circle cx="20" cy={200 - (y0 / (result.maxHeight * 1.2 || 1)) * 180} r="4" fill="#38bdf8" />
              </svg>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3">
              <span className="text-[10px] uppercase text-slate-400 block font-medium">
                {lang === 'bn' ? 'সর্বোচ্চ উচ্চতা (H_max)' : 'Maximum Height'}
              </span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">
                {result.maxHeight} <span className="text-xs text-slate-400">m</span>
              </div>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3">
              <span className="text-[10px] uppercase text-slate-400 block font-medium">
                {lang === 'bn' ? 'অনুভূমিক পাল্লা (Range)' : 'Horizontal Range'}
              </span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-sky-400 mt-1">
                {result.range} <span className="text-xs text-slate-400">m</span>
              </div>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3">
              <span className="text-[10px] uppercase text-slate-400 block font-medium">
                {lang === 'bn' ? 'মোট বিচরণকাল (T)' : 'Total Flight Time'}
              </span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">
                {result.flightTime} <span className="text-xs text-slate-400">s</span>
              </div>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3">
              <span className="text-[10px] uppercase text-slate-400 block font-medium">
                {lang === 'bn' ? 'চূড়ান্ত আঘাতের বেগ' : 'Impact Velocity'}
              </span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 mt-1">
                {result.impactVelocity} <span className="text-xs text-slate-400">m/s</span>
              </div>
            </div>
          </div>

          {/* Derivation Steps */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-200">
              {lang === 'bn' ? 'প্রতিপাদন ও ধারাবাহিক সমীকরণ সমাধান' : 'Step-by-Step Derivation & Solution'}
            </h3>
            <div className="space-y-2.5">
              {result.latexSteps.map((step, idx) => (
                <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 space-y-1.5">
                  <div className="text-xs font-bold text-slate-300">
                    {lang === 'bn' ? step.titleBn : step.titleEn}
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg text-xs font-mono text-sky-200 overflow-x-auto border border-slate-800/80">
                    <Latex formula={step.latex} displayMode={true} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
