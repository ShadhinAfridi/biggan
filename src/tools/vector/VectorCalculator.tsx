import React, { useState, useMemo } from 'react';
import { calculateVectors, type Vector3D } from './engine';
import { Latex } from '../../components/math/Latex';
import { Compass, Copy, Check, RotateCcw, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface Props {
  lang?: 'en' | 'bn';
}

const PRESETS = [
  {
    labelBn: 'লম্ব ভেক্টর (Orthogonal / 90°)',
    labelEn: 'Orthogonal Vectors (90°)',
    a: { x: 2, y: -3, z: 1 },
    b: { x: 3, y: 2, z: 0 },
  },
  {
    labelBn: 'সমান্তরাল ভেক্টর (Parallel / 0°)',
    labelEn: 'Parallel Vectors (0°)',
    a: { x: 2, y: 4, z: 6 },
    b: { x: 4, y: 8, z: 12 },
  },
  {
    labelBn: 'বোর্ড প্রশ্ন: ৩ডি ভেক্টর কোণ',
    labelEn: 'Board CQ: 3D Vector Angle',
    a: { x: 2, y: 2, z: -1 },
    b: { x: 6, y: -3, z: 2 },
  },
  {
    labelBn: 'নদী-নৌকার বেগ লব্ধি (2D)',
    labelEn: 'River-Boat Relative Velocity (2D)',
    a: { x: 4, y: 0, z: 0 },
    b: { x: 0, y: 3, z: 0 },
  },
];

export const VectorCalculator: React.FC<Props> = ({ lang = 'bn' }) => {
  const [vecA, setVecA] = useState<Vector3D>({ x: 2, y: 3, z: -1 });
  const [vecB, setVecB] = useState<Vector3D>({ x: 4, y: -1, z: 2 });
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    return calculateVectors(vecA, vecB);
  }, [vecA, vecB]);

  const handleCopy = () => {
    const text = `Vector A = ${vecA.x}i + ${vecA.y}j + ${vecA.z}k (|A| = ${result.magA})
Vector B = ${vecB.x}i + ${vecB.y}j + ${vecB.z}k (|B| = ${result.magB})
Dot Product (A · B) = ${result.dotProduct}
Angle (θ) = ${result.angleDeg}°
Cross Product (A × B) = ${result.crossProduct.x}i + ${result.crossProduct.y}j + ${result.crossProduct.z}k
Parallelogram Area = ${result.parallelogramArea}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setVecA({ x: 2, y: 3, z: -1 });
    setVecB({ x: 4, y: -1, z: 2 });
  };

  // SVG Projection Plot
  const svgCenter = 120;
  const scale = 12;
  const aX = svgCenter + vecA.x * scale;
  const aY = svgCenter - vecA.y * scale;
  const bX = svgCenter + vecB.x * scale;
  const bY = svgCenter - vecB.y * scale;
  const sumX = svgCenter + (vecA.x + vecB.x) * scale;
  const sumY = svgCenter - (vecA.y + vecB.y) * scale;

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Compass className="w-6 h-6 text-cyan-400" />
            {lang === 'bn' ? 'ভেক্টর ক্যালকুলেটর ও ৩ডি বিশ্লেষক' : '3D Vector Math & Geometric Solver'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'bn'
              ? 'ডট গুণন, ক্রস গুণন, মধ্যবর্তী কোণ, লম্ব/সমান্তরাল যাচাই ও ক্ষেত্রফল নির্ণয়'
              : 'Calculate dot product, cross product, angle, unit vectors, projection, and area in real time.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? (lang === 'bn' ? 'কপি হয়েছে' : 'Copied') : (lang === 'bn' ? 'ফলাফল কপি' : 'Copy Result')}
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700 transition"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Presets */}
      <div className="space-y-1.5">
        <span className="text-[11px] font-mono text-slate-400 block uppercase">
          {lang === 'bn' ? 'বোর্ড ও অ্যাডমিশন প্রিসেট:' : 'Quick Presets:'}
        </span>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setVecA(p.a);
                setVecB(p.b);
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-700 text-xs text-slate-300 hover:text-white transition flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-cyan-400" />
              {lang === 'bn' ? p.labelBn : p.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vector A */}
        <div className="bg-slate-950/70 border border-cyan-500/30 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-bold text-sm text-cyan-400 flex items-center gap-1.5">
              <span>🔵</span> {lang === 'bn' ? 'ভেক্টর A (Vector A)' : 'Vector A'}
            </span>
            <span className="text-xs font-mono text-slate-400">
              |A| = <strong className="text-white">{result.magA}</strong>
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="text-[10px] font-mono text-slate-400 block mb-1">Ax (î)</label>
              <input
                type="number"
                value={vecA.x}
                onChange={(e) => setVecA({ ...vecA, x: parseFloat(e.target.value) || 0 })}
                className="w-full px-2.5 py-2 bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-lg text-sm font-mono text-white text-center outline-none"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono text-slate-400 block mb-1">Ay (ĵ)</label>
              <input
                type="number"
                value={vecA.y}
                onChange={(e) => setVecA({ ...vecA, y: parseFloat(e.target.value) || 0 })}
                className="w-full px-2.5 py-2 bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-lg text-sm font-mono text-white text-center outline-none"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono text-slate-400 block mb-1">Az (k̂)</label>
              <input
                type="number"
                value={vecA.z}
                onChange={(e) => setVecA({ ...vecA, z: parseFloat(e.target.value) || 0 })}
                className="w-full px-2.5 py-2 bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-lg text-sm font-mono text-white text-center outline-none"
              />
            </div>
          </div>
        </div>

        {/* Vector B */}
        <div className="bg-slate-950/70 border border-purple-500/30 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-bold text-sm text-purple-400 flex items-center gap-1.5">
              <span>🟣</span> {lang === 'bn' ? 'ভেক্টর B (Vector B)' : 'Vector B'}
            </span>
            <span className="text-xs font-mono text-slate-400">
              |B| = <strong className="text-white">{result.magB}</strong>
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="text-[10px] font-mono text-slate-400 block mb-1">Bx (î)</label>
              <input
                type="number"
                value={vecB.x}
                onChange={(e) => setVecB({ ...vecB, x: parseFloat(e.target.value) || 0 })}
                className="w-full px-2.5 py-2 bg-slate-900 border border-slate-700 focus:border-purple-500 rounded-lg text-sm font-mono text-white text-center outline-none"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono text-slate-400 block mb-1">By (ĵ)</label>
              <input
                type="number"
                value={vecB.y}
                onChange={(e) => setVecB({ ...vecB, y: parseFloat(e.target.value) || 0 })}
                className="w-full px-2.5 py-2 bg-slate-900 border border-slate-700 focus:border-purple-500 rounded-lg text-sm font-mono text-white text-center outline-none"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono text-slate-400 block mb-1">Bz (k̂)</label>
              <input
                type="number"
                value={vecB.z}
                onChange={(e) => setVecB({ ...vecB, z: parseFloat(e.target.value) || 0 })}
                className="w-full px-2.5 py-2 bg-slate-900 border border-slate-700 focus:border-purple-500 rounded-lg text-sm font-mono text-white text-center outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Visual Canvas & Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        {/* 2D Projection Canvas */}
        <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 flex flex-col items-center">
          <span className="text-[10px] font-mono text-slate-400 mb-2">
            {lang === 'bn' ? '২ডি প্রক্ষেপণ ও লব্ধি ভেক্টর (XY Plane)' : '2D XY Plane Vector Diagram'}
          </span>
          <svg width="240" height="240" className="bg-slate-900/80 rounded-lg border border-slate-800">
            {/* Grid & Axes */}
            <line x1="0" y1="120" x2="240" y2="120" stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="120" y1="0" x2="120" y2="240" stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />

            {/* Vector A */}
            <line x1="120" y1="120" x2={aX} y2={aY} stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrowA)" />
            {/* Vector B */}
            <line x1="120" y1="120" x2={bX} y2={bY} stroke="#c084fc" strokeWidth="3" markerEnd="url(#arrowB)" />
            {/* Sum A+B */}
            <line x1="120" y1="120" x2={sumX} y2={sumY} stroke="#34d399" strokeWidth="2" strokeDasharray="4,4" />

            {/* Labels */}
            <text x={aX + 5} y={aY - 5} fill="#38bdf8" fontSize="11" fontWeight="bold">A</text>
            <text x={bX + 5} y={bY - 5} fill="#c084fc" fontSize="11" fontWeight="bold">B</text>
            <text x={sumX + 5} y={sumY - 5} fill="#34d399" fontSize="10">A+B</text>
            <circle cx="120" cy="120" r="3" fill="#94a3b8" />
          </svg>
          <div className="flex items-center gap-4 text-[11px] font-mono mt-2 text-slate-400">
            <span className="text-sky-400 font-semibold">— Vector A</span>
            <span className="text-purple-400 font-semibold">— Vector B</span>
            <span className="text-emerald-400 font-semibold">-- A+B</span>
          </div>
        </div>

        {/* Core Metrics Cards */}
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {/* Dot Product */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <span className="text-[11px] text-slate-400 block font-mono">স্কেলার গুণন (A · B)</span>
            <span className="text-lg font-bold font-mono text-emerald-400 block">{result.dotProduct}</span>
            <span className="text-[10px] text-slate-500 block">ax·bx + ay·by + az·bz</span>
          </div>

          {/* Angle θ */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <span className="text-[11px] text-slate-400 block font-mono">মধ্যবর্তী কোণ (θ)</span>
            <span className="text-lg font-bold font-mono text-cyan-400 block">{result.angleDeg}°</span>
            <span className="text-[10px] text-slate-500 block">{result.angleRad} rad</span>
          </div>

          {/* Orthogonal Badge */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <span className="text-[11px] text-slate-400 block font-mono">লম্ব শর্ত (A · B = 0)</span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-md inline-block ${
              result.isOrthogonal ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-800 text-slate-400'
            }`}>
              {result.isOrthogonal ? (lang === 'bn' ? '✅ পরস্পর লম্ব (90°)' : 'Orthogonal (90°)') : (lang === 'bn' ? '❌ লম্ব নয়' : 'Not Orthogonal')}
            </span>
          </div>

          {/* Parallel Badge */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <span className="text-[11px] text-slate-400 block font-mono">সমান্তরাল শর্ত</span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-md inline-block ${
              result.isParallel ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' : 'bg-slate-800 text-slate-400'
            }`}>
              {result.isParallel ? (lang === 'bn' ? '✅ সমান্তরাল ভেক্টর' : 'Parallel Vectors') : (lang === 'bn' ? '❌ সমান্তরাল নয়' : 'Not Parallel')}
            </span>
          </div>

          {/* Parallelogram Area */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <span className="text-[11px] text-slate-400 block font-mono">সামান্তরিকের ক্ষেত্রফল</span>
            <span className="text-lg font-bold font-mono text-amber-400 block">{result.parallelogramArea}</span>
            <span className="text-[10px] text-slate-500 block">|A × B| sq units</span>
          </div>

          {/* Triangle Area */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <span className="text-[11px] text-slate-400 block font-mono">ত্রিভুজের ক্ষেত্রফল</span>
            <span className="text-lg font-bold font-mono text-pink-400 block">{result.triangleArea}</span>
            <span className="text-[10px] text-slate-500 block">½ |A × B| sq units</span>
          </div>
        </div>
      </div>

      {/* Detailed Operations & KaTeX Step-by-step */}
      <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <span>📝</span> {lang === 'bn' ? 'ধাপে ধাপে ভেক্টর গাণিতিক বিশ্লেষণ:' : 'Step-by-Step Mathematical Evaluation:'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1.5">
            <span className="text-slate-400 font-medium">ভেক্টর যোগফল (A + B):</span>
            <div className="text-emerald-300 font-mono text-sm">
              <Latex math={`\\vec{A} + \\vec{B} = ${result.sum.x}\\hat{i} + ${result.sum.y}\\hat{j} + ${result.sum.z}\\hat{k}`} />
            </div>
          </div>

          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1.5">
            <span className="text-slate-400 font-medium">ভেক্টর বিয়োগফল (A - B):</span>
            <div className="text-rose-300 font-mono text-sm">
              <Latex math={`\\vec{A} - \\vec{B} = ${result.diff.x}\\hat{i} + ${result.diff.y}\\hat{j} + ${result.diff.z}\\hat{k}`} />
            </div>
          </div>

          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1.5">
            <span className="text-slate-400 font-medium">ভেক্টর গুণন বা ক্রস প্রোডাক্ট (A × B):</span>
            <div className="text-purple-300 font-mono text-sm">
              <Latex math={`\\vec{A} \\times \\vec{B} = ${result.crossProduct.x}\\hat{i} + ${result.crossProduct.y}\\hat{j} + ${result.crossProduct.z}\\hat{k}`} />
            </div>
          </div>

          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1.5">
            <span className="text-slate-400 font-medium">B-এর ওপর A-এর স্কেলার অভিক্ষেপ:</span>
            <div className="text-amber-300 font-mono text-sm">
              <Latex math={`\\text{proj}_{B}(A) = \\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{B}|} = ${result.scalarProjAonB}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
