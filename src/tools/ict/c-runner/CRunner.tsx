import React, { useState } from 'react';
import { Play, SkipForward, SkipBack, RotateCcw, Terminal, HardDrive, FileText } from 'lucide-react';
import { C_PRESETS, type TraceStep } from './cEngine';

interface CRunnerProps {
  lang?: 'bn' | 'en';
}

export const CRunner: React.FC<CRunnerProps> = ({ lang = 'bn' }) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(C_PRESETS[0].id);
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('6');
  const [showWorksheet, setShowWorksheet] = useState<boolean>(false);

  const activePreset = C_PRESETS.find((p) => p.id === selectedPresetId) || C_PRESETS[0];
  const trace = activePreset.generateTrace(inputValue);
  const currentStep: TraceStep = trace[currentStepIdx] || trace[0];

  const handlePresetChange = (presetId: string) => {
    const p = C_PRESETS.find((preset) => preset.id === presetId);
    if (p) {
      setSelectedPresetId(presetId);
      setInputValue(p.defaultInput || '5');
      setCurrentStepIdx(0);
    }
  };

  const handleStepForward = () => {
    if (currentStepIdx < trace.length - 1) {
      setCurrentStepIdx((prev) => prev + 1);
    }
  };

  const handleStepBackward = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx((prev) => prev - 1);
    }
  };

  const handleRunAll = () => {
    setCurrentStepIdx(trace.length - 1);
  };

  const handleReset = () => {
    setCurrentStepIdx(0);
  };

  // Code lines for editor display
  const codeLines = activePreset.code.split('\n');

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl space-y-0">
      {/* Top Toolbar */}
      <div className="bg-slate-950 border-b border-slate-800 p-4 flex flex-wrap items-center justify-between gap-3">
        {/* Preset Selector */}
        <div className="flex items-center gap-2 flex-1 min-w-0 w-full sm:w-auto sm:min-w-[240px]">
          <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider shrink-0">
            {lang === 'bn' ? 'সি প্রোগ্রাম:' : 'C Preset:'}
          </span>
          <select
            value={selectedPresetId}
            onChange={(e) => handlePresetChange(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 text-xs font-medium text-white rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          >
            {C_PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {lang === 'bn' ? p.titleBn : p.titleEn}
              </option>
            ))}
          </select>
        </div>

        {/* Input Parameter (e.g. n) */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400">{lang === 'bn' ? 'ইনপুট n:' : 'Input n:'}</span>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setCurrentStepIdx(0);
            }}
            className="w-16 bg-slate-900 border border-slate-700 text-xs font-mono text-white rounded-lg px-2 py-1 text-center focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          />
        </div>

        {/* Stepping Controls */}
        <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-lg p-1">
          <button
            type="button"
            onClick={handleStepBackward}
            disabled={currentStepIdx === 0}
            className="px-2.5 py-1 rounded text-xs flex items-center gap-1 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition"
            title={lang === 'bn' ? 'পূর্ববর্তী ধাপে ফিরুন' : 'Step Backward'}
          >
            <SkipBack className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{lang === 'bn' ? 'পেছনে' : 'Back'}</span>
          </button>

          <span className="px-2 font-mono text-xs text-cyan-400 font-bold border-x border-slate-800">
            {currentStepIdx + 1} / {trace.length}
          </span>

          <button
            type="button"
            onClick={handleStepForward}
            disabled={currentStepIdx === trace.length - 1}
            className="px-2.5 py-1 rounded text-xs flex items-center gap-1 bg-cyan-600 hover:bg-cyan-500 text-white font-bold disabled:opacity-40 disabled:cursor-not-allowed transition"
            title={lang === 'bn' ? 'পরবর্তী ধাপে চলুন' : 'Step Forward'}
          >
            <span className="hidden sm:inline">{lang === 'bn' ? 'সামনে' : 'Step'}</span>
            <SkipForward className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Run to End / Reset */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleRunAll}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1"
          >
            <Play className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'সম্পূর্ণ চালান' : 'Run All'}</span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition text-xs"
            title="Reset to beginning"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setShowWorksheet(!showWorksheet)}
            className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 transition text-xs flex items-center gap-1"
            title="Toggle Dry-Run Worksheet"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden md:inline">{lang === 'bn' ? 'ড্রাই-রান শিট' : 'Worksheet'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Code on Left, Memory & Terminal on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 min-h-[500px]">
        {/* Left Column: C Code Editor with Line Highlight (7 cols) */}
        <div className="lg:col-span-7 flex flex-col bg-slate-950">
          <div className="bg-slate-900/60 border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>main.c (ANSI C99)</span>
            <span className="text-cyan-400 font-bold">
              {lang === 'bn' ? `বর্তমান লাইন: ${currentStep.lineNumber}` : `Line: ${currentStep.lineNumber}`}
            </span>
          </div>

          <div className="p-3 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed flex-1">
            {codeLines.map((line, idx) => {
              const lineNum = idx + 1;
              const isCurrentLine = lineNum === currentStep.lineNumber;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3 px-2 py-0.5 rounded transition ${
                    isCurrentLine
                      ? 'bg-cyan-950/80 border-l-4 border-cyan-400 text-cyan-200 font-bold'
                      : 'text-slate-300 hover:bg-slate-900/40'
                  }`}
                >
                  <span className="w-6 text-right text-slate-600 select-none text-xs">{lineNum}</span>
                  <span className="flex-1 whitespace-pre">{line}</span>
                  {isCurrentLine && (
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-cyan-900/80 text-cyan-300">
                      CURRENT
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Current Step Explanation Note */}
          <div className="bg-slate-900/90 border-t border-slate-800 p-3 px-4 flex items-center gap-2 text-xs text-slate-300">
            <span className="font-mono text-cyan-400 font-bold">{lang === 'bn' ? 'ব্যাখ্যা:' : 'Action:'}</span>
            <span>{currentStep.note || currentStep.lineContent}</span>
          </div>
        </div>

        {/* Right Column: RAM Variable Tracer & Terminal (5 cols) */}
        <div className="lg:col-span-5 flex flex-col bg-slate-950/90 divide-y divide-slate-800">
          {/* Top Half: Live Variable Registers in RAM */}
          <div className="p-4 space-y-3 flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 font-mono">
                <HardDrive className="w-3.5 h-3.5 text-cyan-400" />
                <span>{lang === 'bn' ? 'র‍্যাম মেমরি রেজিস্টার (Variables in RAM)' : 'Variable Memory (RAM)'}</span>
              </h4>
              <span className="text-[10px] font-mono text-slate-500">Live Stack</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {Object.entries(currentStep.variables).map(([varName, varVal]) => {
                const isChanged = currentStep.changedVar === varName;
                return (
                  <div
                    key={varName}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                      isChanged
                        ? 'bg-cyan-950/60 border-cyan-400 shadow-lg shadow-cyan-950/50'
                        : 'bg-slate-900 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="font-bold text-white">{varName}</span>
                      <span className="text-[10px] text-slate-500">int</span>
                    </div>
                    <div
                      className={`text-xl font-mono font-black mt-1 ${
                        isChanged ? 'text-cyan-300 drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]' : 'text-slate-200'
                      }`}
                    >
                      {String(varVal)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Half: Standard Output Terminal */}
          <div className="p-4 space-y-2 flex-1 flex flex-col">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Standard Output (stdout)</span>
              </span>
              <span className="text-[10px] text-slate-500">printf console</span>
            </div>

            <div className="flex-1 min-h-[140px] bg-slate-950 rounded-xl p-3 font-mono text-xs text-emerald-400 border border-slate-800 overflow-auto whitespace-pre leading-relaxed">
              {currentStep.output ? currentStep.output : <span className="text-slate-600">// No output yet...</span>}
              <span className="inline-block w-2 h-3.5 bg-emerald-400 ml-1 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Dry-Run Worksheet View (Collapsible) */}
      {showWorksheet && (
        <div className="bg-slate-950 border-t border-slate-800 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'bn' ? 'এইচএসসি আইসিটি পরীক্ষার ড্রাই-রান ওয়ার্কশিট (Dry-Run Table)' : 'Board Exam Dry-Run Worksheet'}</span>
            </h4>
            <button
              type="button"
              onClick={() => setShowWorksheet(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              ✕ {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
            </button>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-slate-900 text-slate-300 border-b border-slate-800">
                  <th className="p-2.5 border-r border-slate-800">Step #</th>
                  <th className="p-2.5 border-r border-slate-800">Line</th>
                  <th className="p-2.5 border-r border-slate-800">Statement</th>
                  <th className="p-2.5 border-r border-slate-800">Variables in RAM</th>
                  <th className="p-2.5">Console Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {trace.map((step, idx) => {
                  const isCurrent = idx === currentStepIdx;
                  return (
                    <tr
                      key={idx}
                      className={`transition ${
                        isCurrent ? 'bg-cyan-950/80 text-cyan-200 font-bold' : 'hover:bg-slate-900/40'
                      }`}
                    >
                      <td className="p-2 border-r border-slate-800">{step.stepIndex + 1}</td>
                      <td className="p-2 border-r border-slate-800">{step.lineNumber}</td>
                      <td className="p-2 border-r border-slate-800 font-semibold">{step.lineContent}</td>
                      <td className="p-2 border-r border-slate-800">
                        {Object.entries(step.variables)
                          .map(([k, v]) => `${k}=${v}`)
                          .join(', ')}
                      </td>
                      <td className="p-2 text-emerald-400">{step.output ? step.output.replace('\n', ' ') : '—'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
