import React, { useState } from 'react';
import { Zap, Cpu, Table } from 'lucide-react';
import { CIRCUIT_PRESETS, evaluateGate, type LogicGateType } from './logicEngine';

interface CircuitSimulatorProps {
  lang?: 'bn' | 'en';
}

export const CircuitSimulator: React.FC<CircuitSimulatorProps> = ({ lang = 'bn' }) => {
  const [activeTab, setActiveTab] = useState<'presets' | 'singleGate'>('presets');
  const [selectedPresetId, setSelectedPresetId] = useState<string>(CIRCUIT_PRESETS[0].id);
  const [presetInputs, setPresetInputs] = useState<Record<string, boolean>>({
    A: false,
    B: true,
    Cin: false,
  });

  // Single gate mode state
  const [singleGateType, setSingleGateType] = useState<LogicGateType>('NAND');
  const [gateInA, setGateInA] = useState<boolean>(true);
  const [gateInB, setGateInB] = useState<boolean>(false);

  const activePreset = CIRCUIT_PRESETS.find((p) => p.id === selectedPresetId) || CIRCUIT_PRESETS[0];

  const handlePresetChange = (presetId: string) => {
    const preset = CIRCUIT_PRESETS.find((p) => p.id === presetId);
    if (preset) {
      setSelectedPresetId(presetId);
      const defaults: Record<string, boolean> = {};
      preset.inputs.forEach((inp) => {
        defaults[inp.id] = inp.defaultVal;
      });
      setPresetInputs(defaults);
    }
  };

  const togglePresetInput = (id: string) => {
    setPresetInputs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Compute live outputs for preset
  const presetOutputs = activePreset.compute(presetInputs);
  const truthRows = activePreset.generateAllTruthRows();

  // Compute for single gate
  const singleGateOutput = evaluateGate(singleGateType, gateInA, gateInB);

  // Check which truth row is currently active
  const isRowActive = (inputs: boolean[]) => {
    return activePreset.inputs.every((inp, idx) => presetInputs[inp.id] === inputs[idx]);
  };

  const allGates: LogicGateType[] = ['AND', 'OR', 'NOT', 'NAND', 'NOR', 'XOR', 'XNOR'];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl space-y-0">
      {/* Top Header & Mode Navigation */}
      <div className="bg-slate-950 border-b border-slate-800 p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('presets')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'presets'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'বোর্ড সার্কিট প্রিসেট' : 'Board Circuit Presets'}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('singleGate')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'singleGate'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'একক গেট পরীক্ষাগার' : 'Single Gate Sandbox'}</span>
          </button>
        </div>

        {activeTab === 'presets' && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400">{lang === 'bn' ? 'সার্কিট নির্বাচন:' : 'Preset:'}</span>
            <select
              value={selectedPresetId}
              onChange={(e) => handlePresetChange(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-xs font-medium text-white rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            >
              {CIRCUIT_PRESETS.map((p) => (
                <option key={p.id} value={p.id}>
                  {lang === 'bn' ? p.nameBn : p.nameEn}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {activeTab === 'presets' ? (
        <div className="p-6 space-y-6">
          {/* Circuit Info Banner */}
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-1">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              {lang === 'bn' ? activePreset.nameBn : activePreset.nameEn}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'bn' ? activePreset.descriptionBn : activePreset.descriptionEn}
            </p>
          </div>

          {/* Interactive Circuit Canvas */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                {lang === 'bn' ? '১. টাচ করে ইনপুট সিগন্যাল পরিবর্তন করুন (০ বা ১):' : '1. Tap Input Switches (0 or 1):'}
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                HIGH = 1 (Active) • LOW = 0 (Off)
              </span>
            </div>

            {/* Inputs Switches Bar */}
            <div className="flex flex-wrap items-center gap-4">
              {activePreset.inputs.map((inp) => {
                const val = Boolean(presetInputs[inp.id]);
                return (
                  <button
                    key={inp.id}
                    type="button"
                    onClick={() => togglePresetInput(inp.id)}
                    className={`flex-1 min-w-[140px] p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center justify-center gap-2 select-none active:scale-95 ${
                      val
                        ? 'bg-cyan-950/60 border-cyan-400 shadow-lg shadow-cyan-950/50'
                        : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-xs font-mono text-slate-400 font-bold">{inp.label}</span>
                    <span
                      className={`text-2xl font-black font-mono transition ${
                        val ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-slate-500'
                      }`}
                    >
                      {val ? '1' : '0'}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                        val ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {val ? 'HIGH / ON' : 'LOW / OFF'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Signal Flow Diagram & Outputs */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                {lang === 'bn' ? '২. আউটপুট সিগন্যাল ও এলইডি সূচক:' : '2. Computed Circuit Outputs & LEDs:'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {activePreset.outputs.map((out) => {
                  const val = Boolean(presetOutputs[out.id]);
                  return (
                    <div
                      key={out.id}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-between ${
                        val
                          ? 'bg-emerald-950/40 border-emerald-500/70 shadow-lg shadow-emerald-950/40'
                          : 'bg-slate-900/60 border-slate-800'
                      }`}
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-white block">{out.label}</span>
                        <span className="text-[11px] font-mono text-slate-400 block">{out.formula}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`text-2xl font-mono font-black ${
                            val ? 'text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.9)]' : 'text-slate-600'
                          }`}
                        >
                          {val ? '1' : '0'}
                        </span>
                        <div
                          className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                            val
                              ? 'bg-emerald-400 border-emerald-300 shadow-[0_0_12px_rgba(52,211,153,1)] scale-110'
                              : 'bg-slate-800 border-slate-700'
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dynamic Truth Table */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Table className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'bn' ? 'লাইভ ট্রুথ টেবিল (সত্যক সারণী)' : 'Real-Time Truth Table'}</span>
              </h4>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-800/40">
                {lang === 'bn' ? 'সক্রিয় সারি হাইলাইট করা আছে' : 'Active Row Highlighted'}
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
              <table className="w-full text-center border-collapse text-xs font-mono">
                <thead>
                  <tr className="bg-slate-900 text-slate-300 border-b border-slate-800">
                    {activePreset.truthTableHeaders.map((header, idx) => (
                      <th key={idx} className="p-2.5 border-r border-slate-800 last:border-r-0 font-bold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {truthRows.map((row, rowIdx) => {
                    const active = isRowActive(row.inputs);
                    return (
                      <tr
                        key={rowIdx}
                        className={`transition-colors duration-150 ${
                          active ? 'bg-cyan-950/80 text-cyan-300 font-bold' : 'text-slate-400 hover:bg-slate-900/40'
                        }`}
                      >
                        {row.inputs.map((val, i) => (
                          <td key={`in-${i}`} className="p-2 border-r border-slate-800 last:border-r-0">
                            {val ? '1' : '0'}
                          </td>
                        ))}
                        {row.outputs.map((val, i) => (
                          <td
                            key={`out-${i}`}
                            className={`p-2 border-r border-slate-800 last:border-r-0 ${
                              val ? 'text-emerald-400 font-bold' : ''
                            }`}
                          >
                            {val ? '1' : '0'}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        /* Single Gate Sandbox Mode */
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
              {lang === 'bn' ? 'গেট নির্বাচন করুন:' : 'Select Logic Gate:'}
            </label>
            <div className="flex flex-wrap gap-2">
              {allGates.map((gate) => (
                <button
                  key={gate}
                  type="button"
                  onClick={() => setSingleGateType(gate)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition ${
                    singleGateType === gate
                      ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-900/40'
                      : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {gate}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-around gap-6">
            {/* Input Switches */}
            <div className="space-y-4 w-full md:w-auto">
              <button
                type="button"
                onClick={() => setGateInA(!gateInA)}
                className={`w-full md:w-36 p-3 rounded-xl border-2 font-mono flex items-center justify-between gap-3 ${
                  gateInA ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-500'
                }`}
              >
                <span className="text-xs font-bold">Input A</span>
                <span className="text-xl font-black">{gateInA ? '1' : '0'}</span>
              </button>

              {singleGateType !== 'NOT' && (
                <button
                  type="button"
                  onClick={() => setGateInB(!gateInB)}
                  className={`w-full md:w-36 p-3 rounded-xl border-2 font-mono flex items-center justify-between gap-3 ${
                    gateInB ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-500'
                  }`}
                >
                  <span className="text-xs font-bold">Input B</span>
                  <span className="text-xl font-black">{gateInB ? '1' : '0'}</span>
                </button>
              )}
            </div>

            {/* Gate Visual Symbol Box */}
            <div className="p-6 rounded-2xl bg-slate-900 border-2 border-cyan-700/60 text-center space-y-1 min-w-[140px] shadow-xl">
              <div className="text-2xl font-black text-white font-mono tracking-wider">{singleGateType}</div>
              <div className="text-[10px] font-mono text-cyan-400 uppercase">Logic Gate</div>
            </div>

            {/* Output Indicator */}
            <div className="w-full md:w-auto flex flex-col items-center gap-2">
              <span className="text-xs font-mono text-slate-400 uppercase font-bold">Output Y</span>
              <div
                className={`p-4 px-6 rounded-xl border-2 flex items-center gap-3 ${
                  singleGateOutput
                    ? 'bg-emerald-950/50 border-emerald-400 shadow-lg shadow-emerald-950'
                    : 'bg-slate-900 border-slate-800'
                }`}
              >
                <span
                  className={`text-3xl font-mono font-black ${
                    singleGateOutput ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,1)]' : 'text-slate-600'
                  }`}
                >
                  {singleGateOutput ? '1' : '0'}
                </span>
                <div
                  className={`w-6 h-6 rounded-full border-2 ${
                    singleGateOutput
                      ? 'bg-emerald-400 border-emerald-300 shadow-[0_0_12px_rgba(52,211,153,1)]'
                      : 'bg-slate-800 border-slate-700'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
