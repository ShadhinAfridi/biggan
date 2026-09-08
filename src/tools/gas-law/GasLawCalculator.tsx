import React, { useState, useMemo } from 'react';
import {
  solveIdealGas,
  calcKineticParameters,
  solveCombinedGasLaw,
  toKelvin,
  fromKelvin,
  toAtm,
  fromAtm,
  toLiters,
  fromLiters,
} from './engine';
import { Latex } from '../../components/math/Latex';
import { Gauge, Copy, Check, RotateCcw, Sparkles, Wind, Flame, Layers } from 'lucide-react';

interface Props {
  lang?: 'en' | 'bn';
}

const COMMON_GASES = [
  { name: 'Oxygen (O₂)', M: 32 },
  { name: 'Nitrogen (N₂)', M: 28 },
  { name: 'Hydrogen (H₂)', M: 2.016 },
  { name: 'Helium (He)', M: 4.003 },
  { name: 'Carbon Dioxide (CO₂)', M: 44.01 },
  { name: 'Methane (CH₄)', M: 16.04 },
  { name: 'Chlorine (Cl₂)', M: 70.9 },
];

export const GasLawCalculator: React.FC<Props> = ({ lang = 'bn' }) => {
  const [activeTab, setActiveTab] = useState<'ideal' | 'kinetic' | 'combined'>('ideal');

  // Tab 1: Ideal Gas (PV = nRT)
  const [solveFor, setSolveFor] = useState<'P' | 'V' | 'n' | 'T'>('V');
  const [valP, setValP] = useState(1);
  const [unitP, setUnitP] = useState<'atm' | 'kPa' | 'mmHg' | 'bar'>('atm');
  const [valV, setValV] = useState(22.414);
  const [unitV, setUnitV] = useState<'L' | 'mL'>('L');
  const [valN, setValN] = useState(1);
  const [valT, setValT] = useState(0); // in Celsius default
  const [unitT, setUnitT] = useState<'C' | 'K'>('C');

  // Tab 2: Kinetic & RMS
  const [kineticT, setKineticT] = useState(25);
  const [selectedGasM, setSelectedGasM] = useState(32); // O2
  const [kineticMoles, setKineticMoles] = useState(1);

  // Tab 3: Combined Gas Law
  const [cSolveFor, setCSolveFor] = useState<'P2' | 'V2' | 'T2'>('V2');
  const [cP1, setCP1] = useState(1);
  const [cV1, setCV1] = useState(2);
  const [cT1, setCT1] = useState(273.15);
  const [cP2, setCP2] = useState(2);
  const [cV2, setCV2] = useState(1);
  const [cT2, setCT2] = useState(546.3);

  const [copied, setCopied] = useState(false);

  // Real-time computation for Tab 1
  const idealResult = useMemo(() => {
    try {
      const p_atm = toAtm(valP, unitP);
      const v_L = toLiters(valV, unitV);
      const t_K = toKelvin(valT, unitT);
      return solveIdealGas(solveFor, p_atm, v_L, valN, t_K);
    } catch {
      return null;
    }
  }, [solveFor, valP, unitP, valV, unitV, valN, valT, unitT]);

  // Real-time computation for Tab 2
  const kineticResult = useMemo(() => {
    try {
      const t_K = kineticT + 273.15;
      return calcKineticParameters(t_K, selectedGasM, kineticMoles);
    } catch {
      return null;
    }
  }, [kineticT, selectedGasM, kineticMoles]);

  // Real-time computation for Tab 3
  const combinedResult = useMemo(() => {
    try {
      return solveCombinedGasLaw(cSolveFor, cP1, cV1, cT1, cP2, cV2, cT2);
    } catch {
      return null;
    }
  }, [cSolveFor, cP1, cV1, cT1, cP2, cV2, cT2]);

  const handleCopy = () => {
    let text = '';
    if (activeTab === 'ideal' && idealResult) {
      text = `Ideal Gas Law: ${idealResult.solvedVariable} = ${idealResult.solvedValue} ${idealResult.unit}`;
    } else if (activeTab === 'kinetic' && kineticResult) {
      text = `RMS Speed = ${kineticResult.c_rms} m/s, Total Kinetic Energy = ${kineticResult.totalEk} J`;
    } else {
      text = `Combined Gas Law: ${cSolveFor} = ${combinedResult}`;
    }
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Cylinder Visual Piston Height
  const pistonHeight = useMemo(() => {
    const v = solveFor === 'V' && idealResult ? idealResult.solvedValue : toLiters(valV, unitV);
    const clamped = Math.max(5, Math.min(60, v));
    return 140 - (clamped / 60) * 90;
  }, [solveFor, idealResult, valV, unitV]);

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Wind className="w-6 h-6 text-emerald-400" />
            {lang === 'bn' ? 'আদর্শ গ্যাস ও গতিতত্ত্ব ক্যালকুলেটর' : 'Ideal Gas Law & Kinetic Solver'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'bn'
              ? 'PV = nRT সমীকরণ, মূল-গড়-বর্গ বেগ (RMS), গতিশক্তি ও সমন্বিত গ্যাস সূত্র'
              : 'Real-time solver for PV = nRT, molecular RMS speed, total kinetic energy, and state transformations.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? (lang === 'bn' ? 'কপি হয়েছে' : 'Copied') : (lang === 'bn' ? 'ফলাফল কপি' : 'Copy')}
          </button>
        </div>
      </div>

      {/* Mode Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('ideal')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
            activeTab === 'ideal' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-950 text-slate-400 hover:text-white'
          }`}
        >
          {lang === 'bn' ? 'আদর্শ গ্যাস সমীকরণ (PV = nRT)' : 'Ideal Gas Law (PV = nRT)'}
        </button>
        <button
          onClick={() => setActiveTab('kinetic')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
            activeTab === 'kinetic' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-950 text-slate-400 hover:text-white'
          }`}
        >
          {lang === 'bn' ? 'RMS বেগ ও গতিশক্তি (c_rms)' : 'RMS Speed & Kinetic Energy'}
        </button>
        <button
          onClick={() => setActiveTab('combined')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
            activeTab === 'combined' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-950 text-slate-400 hover:text-white'
          }`}
        >
          {lang === 'bn' ? 'সমন্বিত গ্যাস সূত্র (P₁V₁/T₁ = P₂V₂/T₂)' : 'Combined Gas Law'}
        </button>
      </div>

      {/* Tab 1: Ideal Gas Law */}
      {activeTab === 'ideal' && (
        <div className="space-y-6">
          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-slate-400">প্রিসেট:</span>
            <button
              onClick={() => {
                setSolveFor('V');
                setValP(1);
                setUnitP('atm');
                setValN(1);
                setValT(0);
                setUnitT('C');
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-300 hover:text-white"
            >
              STP অবস্থা (1 atm, 0°C, 1 mol)
            </button>
            <button
              onClick={() => {
                setSolveFor('V');
                setValP(100);
                setUnitP('kPa');
                setValN(1);
                setValT(25);
                setUnitT('C');
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-300 hover:text-white"
            >
              SATP অবস্থা (100 kPa, 25°C)
            </button>
            <button
              onClick={() => {
                setSolveFor('P');
                setValV(10);
                setUnitV('L');
                setValN(2);
                setValT(300);
                setUnitT('K');
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-300 hover:text-white"
            >
              উচ্চ চাপ সিলিন্ডার
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Inputs Panel */}
            <div className="lg:col-span-2 space-y-4 bg-slate-950/70 p-5 rounded-xl border border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-300">
                  {lang === 'bn' ? 'যেটির মান বের করবেন:' : 'Solve For:'}
                </span>
                <div className="flex gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                  {(['V', 'P', 'n', 'T'] as const).map((v) => (
                    <button
                      key={v}
                      onClick={() => setSolveFor(v)}
                      className={`px-3 py-1 rounded text-xs font-mono font-bold transition ${
                        solveFor === v ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Pressure P */}
                <div className={`space-y-1.5 ${solveFor === 'P' ? 'opacity-40 pointer-events-none' : ''}`}>
                  <label className="text-xs font-medium text-slate-300">চাপ (Pressure - P):</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={valP}
                      onChange={(e) => setValP(parseFloat(e.target.value) || 0)}
                      className="flex-1 px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-emerald-500"
                    />
                    <select
                      value={unitP}
                      onChange={(e: any) => setUnitP(e.target.value)}
                      className="px-2.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-slate-300 outline-none"
                    >
                      <option value="atm">atm</option>
                      <option value="kPa">kPa</option>
                      <option value="mmHg">mmHg</option>
                      <option value="bar">bar</option>
                    </select>
                  </div>
                </div>

                {/* Volume V */}
                <div className={`space-y-1.5 ${solveFor === 'V' ? 'opacity-40 pointer-events-none' : ''}`}>
                  <label className="text-xs font-medium text-slate-300">আয়তন (Volume - V):</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={valV}
                      onChange={(e) => setValV(parseFloat(e.target.value) || 0)}
                      className="flex-1 px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-emerald-500"
                    />
                    <select
                      value={unitV}
                      onChange={(e: any) => setUnitV(e.target.value)}
                      className="px-2.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-slate-300 outline-none"
                    >
                      <option value="L">L (Liters)</option>
                      <option value="mL">mL</option>
                    </select>
                  </div>
                </div>

                {/* Moles n */}
                <div className={`space-y-1.5 ${solveFor === 'n' ? 'opacity-40 pointer-events-none' : ''}`}>
                  <label className="text-xs font-medium text-slate-300">মোল সংখ্যা (Moles - n):</label>
                  <input
                    type="number"
                    value={valN}
                    onChange={(e) => setValN(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Temperature T */}
                <div className={`space-y-1.5 ${solveFor === 'T' ? 'opacity-40 pointer-events-none' : ''}`}>
                  <label className="text-xs font-medium text-slate-300">তাপমাত্রা (Temperature - T):</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={valT}
                      onChange={(e) => setValT(parseFloat(e.target.value) || 0)}
                      className="flex-1 px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-emerald-500"
                    />
                    <select
                      value={unitT}
                      onChange={(e: any) => setUnitT(e.target.value)}
                      className="px-2.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-slate-300 outline-none"
                    >
                      <option value="C">°C</option>
                      <option value="K">K (Kelvin)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Cylinder Visual Graphic */}
            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 flex flex-col items-center justify-center">
              <span className="text-[10px] font-mono text-slate-400 mb-2">গ্যাস সিলিন্ডার ও পিস্টন মডেল</span>
              <svg width="140" height="170" className="bg-slate-900 rounded-xl border border-slate-800">
                {/* Cylinder Outline */}
                <rect x="25" y="20" width="90" height="130" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="2" />
                {/* Gas Liquid / Cloud */}
                <rect x="26" y={pistonHeight} width="88" height={150 - pistonHeight} fill="#065f46" opacity="0.6" />
                {/* Piston Head */}
                <rect x="23" y={pistonHeight} width="94" height="12" rx="2" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1" />
                {/* Piston Rod */}
                <rect x="65" y="10" width="10" height={pistonHeight - 10} fill="#64748b" />
              </svg>
              <span className="text-xs font-mono text-emerald-400 mt-2 font-bold">
                {idealResult ? `${idealResult.solvedVariable} = ${idealResult.solvedValue} ${idealResult.unit}` : '...'}
              </span>
            </div>
          </div>

          {/* Results Step-by-Step Card */}
          {idealResult && (
            <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-400">ধাপে ধাপে সমাধান:</span>
                <span className="text-xs font-mono text-slate-400">R = 0.0821 L·atm/(mol·K)</span>
              </div>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-sm font-mono text-emerald-300">
                <Latex math={idealResult.latexFormula} />
              </div>
              <ul className="text-xs text-slate-300 space-y-1 font-mono pt-1">
                {idealResult.steps.map((s, idx) => (
                  <li key={idx}>▸ {s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: RMS Speed & Kinetic Energy */}
      {activeTab === 'kinetic' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-950/70 p-5 rounded-xl border border-slate-800">
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">গ্যাস নির্বাচন করুন:</label>
              <select
                value={selectedGasM}
                onChange={(e) => setSelectedGasM(parseFloat(e.target.value))}
                className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white font-mono outline-none"
              >
                {COMMON_GASES.map((g, i) => (
                  <option key={i} value={g.M}>
                    {g.name} (M = {g.M} g/mol)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">তাপমাত্রা (°C):</label>
              <input
                type="number"
                value={kineticT}
                onChange={(e) => setKineticT(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white font-mono outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">মোল সংখ্যা (n):</label>
              <input
                type="number"
                value={kineticMoles}
                onChange={(e) => setKineticMoles(parseFloat(e.target.value) || 1)}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white font-mono outline-none"
              />
            </div>
          </div>

          {kineticResult && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 font-mono">RMS বেগ (c_rms)</span>
                <span className="text-2xl font-bold font-mono text-cyan-400 block">{kineticResult.c_rms} m/s</span>
                <span className="text-[10px] text-slate-500">c = √(3RT/M)</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 font-mono">মোট গতিশক্তি (Ek)</span>
                <span className="text-2xl font-bold font-mono text-emerald-400 block">{kineticResult.totalEk} J</span>
                <span className="text-[10px] text-slate-500">Ek = (3/2) nRT</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 font-mono">প্রতি অণুর গড় গতিশক্তি</span>
                <span className="text-lg font-bold font-mono text-amber-400 block">{kineticResult.averageEkPerMolecule} J</span>
                <span className="text-[10px] text-slate-500">E = (3/2) kB T</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Combined Gas Law */}
      {activeTab === 'combined' && (
        <div className="space-y-6">
          <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-300">নির্ণেয় পরিবর্তিত চলক:</span>
              <div className="flex gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                {(['P2', 'V2', 'T2'] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setCSolveFor(v)}
                    className={`px-3 py-1 rounded text-xs font-mono font-bold transition ${
                      cSolveFor === v ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">P₁ (আদি চাপ):</label>
                <input
                  type="number"
                  value={cP1}
                  onChange={(e) => setCP1(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">V₁ (আদি আয়তন):</label>
                <input
                  type="number"
                  value={cV1}
                  onChange={(e) => setCV1(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">T₁ (আদি তাপমাত্রা K):</label>
                <input
                  type="number"
                  value={cT1}
                  onChange={(e) => setCT1(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                />
              </div>
              <div className={cSolveFor === 'P2' ? 'opacity-30' : ''}>
                <label className="text-slate-400 block mb-1">P₂ (শেষ চাপ):</label>
                <input
                  type="number"
                  value={cP2}
                  onChange={(e) => setCP2(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                />
              </div>
              <div className={cSolveFor === 'V2' ? 'opacity-30' : ''}>
                <label className="text-slate-400 block mb-1">V₂ (শেষ আয়তন):</label>
                <input
                  type="number"
                  value={cV2}
                  onChange={(e) => setCV2(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                />
              </div>
              <div className={cSolveFor === 'T2' ? 'opacity-30' : ''}>
                <label className="text-slate-400 block mb-1">T₂ (শেষ তাপমাত্রা K):</label>
                <input
                  type="number"
                  value={cT2}
                  onChange={(e) => setCT2(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 flex items-center justify-between">
            <span className="text-sm font-semibold text-white">ফলাফল ({cSolveFor}):</span>
            <span className="text-xl font-bold font-mono text-emerald-400">
              {cSolveFor} = {combinedResult}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
