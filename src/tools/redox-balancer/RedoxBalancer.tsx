import React, { useState } from 'react';
import { REDOX_PRESETS, type RedoxPreset } from './engine';
import { Latex } from '../../components/math/Latex';
import { Zap, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';

interface Props {
  lang?: 'en' | 'bn';
}

export const RedoxBalancer: React.FC<Props> = ({ lang = 'bn' }) => {
  const [selectedId, setSelectedId] = useState(REDOX_PRESETS[0].id);
  const [mediumFilter, setMediumFilter] = useState<'all' | 'acidic' | 'basic'>('all');

  const currentPreset = REDOX_PRESETS.find((p) => p.id === selectedId) || REDOX_PRESETS[0];
  const res = currentPreset.result;

  const filteredPresets = REDOX_PRESETS.filter(
    (p) => mediumFilter === 'all' || p.medium === mediumFilter
  );

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Zap className="w-6 h-6 text-cyan-400" />
            {lang === 'bn' ? 'আয়ন-ইলেকট্রন জারণ-বিজারণ সমতা ইঞ্জিন' : 'Ion-Electron Redox Balancing Engine'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'bn'
              ? 'HSC ও NCERT বোর্ড সিলেবাস ভিত্তিক অম্লীয় ও ক্ষারীয় মাধ্যমের অর্ধ-বিক্রিয়া পদ্ধতি'
              : 'NCTB HSC & NCERT Class 11 half-reaction method in acidic and alkaline media.'}
          </p>
        </div>

        {/* Medium Selector */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => setMediumFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              mediumFilter === 'all'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {lang === 'bn' ? 'সকল মাধ্যম' : 'All Media'}
          </button>
          <button
            onClick={() => setMediumFilter('acidic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              mediumFilter === 'acidic'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {lang === 'bn' ? 'অম্লীয় মাধ্যম' : 'Acidic (H⁺)'}
          </button>
          <button
            onClick={() => setMediumFilter('basic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              mediumFilter === 'basic'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {lang === 'bn' ? 'ক্ষারীয় মাধ্যম' : 'Basic (OH⁻)'}
          </button>
        </div>
      </div>

      {/* Preset Reaction Dropdown/Buttons */}
      <div className="space-y-2">
        <label className="block text-xs font-medium text-slate-300">
          {lang === 'bn' ? 'সিলেবাস ভিত্তিক বিক্রিয়া নির্বাচন করুন:' : 'Select Curriculum Redox Reaction:'}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {filteredPresets.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={`p-3 text-left rounded-xl border transition flex flex-col justify-between ${
                selectedId === p.id
                  ? 'bg-cyan-950/40 border-cyan-500/80 shadow-md ring-1 ring-cyan-500/50'
                  : 'bg-slate-950/60 border-slate-800 hover:bg-slate-800/60 text-slate-300'
              }`}
            >
              <div className="font-semibold text-xs text-white">
                {lang === 'bn' ? p.nameBn : p.nameEn}
              </div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80">
                <span className="text-[10px] text-slate-400 font-mono">{p.curriculum}</span>
                <span
                  className={`text-[9px] uppercase px-1.5 py-0.5 rounded font-bold ${
                    p.medium === 'acidic'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                  }`}
                >
                  {p.medium}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Unbalanced Reaction Banner */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">
            {lang === 'bn' ? 'অসমীকৃত আয়নিক বিক্রিয়া' : 'Unbalanced Ionic Equation'}
          </span>
          <div className="text-base text-cyan-300 font-mono mt-1 overflow-x-auto">
            <Latex formula={res.unbalancedLatex} />
          </div>
        </div>
        <div className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
          {res.medium === 'acidic'
            ? lang === 'bn' ? 'মাধ্যম: অম্লীয় (H⁺)' : 'Medium: Acidic (H⁺)'
            : lang === 'bn' ? 'মাধ্যম: ক্ষারীয় (OH⁻)' : 'Medium: Basic (OH⁻)'}
        </div>
      </div>

      {/* Half Reactions Visual Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Oxidation Half */}
        <div className="bg-slate-950/70 border border-amber-500/30 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {lang === 'bn' ? 'জারণ অর্ধ-বিক্রিয়া (Oxidation)' : 'Oxidation Half-Reaction'}
            </span>
            <span className="text-[10px] font-mono bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">
              {lang === 'bn' ? `গুণক: × ${res.oxidationHalf.multiplier}` : `Multiplier: × ${res.oxidationHalf.multiplier}`}
            </span>
          </div>
          <div className="p-3 bg-slate-900 rounded-lg text-xs font-mono text-slate-200 overflow-x-auto border border-slate-800">
            <Latex formula={res.oxidationHalf.balanced} />
          </div>
          <div className="text-[11px] text-slate-400">
            {lang === 'bn'
              ? `ইলেকট্রন স্থানান্তর: ${res.oxidationHalf.electronCount}টি e⁻ বর্জিত হয়েছে।`
              : `Transfers ${res.oxidationHalf.electronCount} electron(s) lost.`}
          </div>
        </div>

        {/* Reduction Half */}
        <div className="bg-slate-950/70 border border-cyan-500/30 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {lang === 'bn' ? 'বিজারণ অর্ধ-বিক্রিয়া (Reduction)' : 'Reduction Half-Reaction'}
            </span>
            <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/20">
              {lang === 'bn' ? `গুণক: × ${res.reductionHalf.multiplier}` : `Multiplier: × ${res.reductionHalf.multiplier}`}
            </span>
          </div>
          <div className="p-3 bg-slate-900 rounded-lg text-xs font-mono text-slate-200 overflow-x-auto border border-slate-800">
            <Latex formula={res.reductionHalf.balanced} />
          </div>
          <div className="text-[11px] text-slate-400">
            {lang === 'bn'
              ? `ইলেকট্রন স্থানান্তর: ${res.reductionHalf.electronCount}টি e⁻ গৃহীত হয়েছে।`
              : `Gains ${res.reductionHalf.electronCount} electron(s).`}
          </div>
        </div>
      </div>

      {/* Step-by-Step Proof Details */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-200">
          {lang === 'bn' ? 'বোর্ড পরীক্ষার উত্তরপত্র উপযোগী ধারাবাহিক ধাপসমূহ' : 'Detailed Examination Step-by-Step Derivation'}
        </h3>
        <div className="space-y-2.5">
          {res.steps.map((step, idx) => (
            <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
              <div className="text-xs font-bold text-slate-300">
                {lang === 'bn' ? step.titleBn : step.titleEn}
              </div>
              <div className="p-2.5 bg-slate-900 rounded-lg text-xs font-mono text-cyan-200 overflow-x-auto border border-slate-800/80">
                <Latex formula={step.latex} displayMode={true} />
              </div>
              <div className="text-xs text-slate-400">
                {lang === 'bn' ? step.explanationBn : step.explanationEn}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Balanced Equations Card */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-2xl p-5 shadow-xl space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {lang === 'bn' ? 'চূড়ান্ত সুষম নেট আয়ন সমীকরণ (Balanced Net Ionic Equation)' : 'Balanced Net Ionic Equation'}
          </div>
          <div className="text-base sm:text-lg font-mono text-white mt-2 p-3 bg-slate-950 rounded-xl border border-slate-800 overflow-x-auto">
            <Latex formula={res.balancedIonicLatex} displayMode={true} />
          </div>
        </div>

        {res.balancedMolecularLatex && (
          <div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              {lang === 'bn' ? 'পূর্ণাঙ্গ আণবিক সমীকরণ (Full Molecular Equation)' : 'Full Balanced Molecular Equation'}
            </div>
            <div className="text-xs sm:text-sm font-mono text-emerald-300 mt-2 p-3 bg-slate-950 rounded-xl border border-slate-800 overflow-x-auto">
              <Latex formula={res.balancedMolecularLatex} displayMode={true} />
            </div>
          </div>
        )}

        {(res.spectatorIonsEn || res.spectatorIonsBn) && (
          <div className="text-xs text-slate-400 pt-2 border-t border-slate-800">
            <span className="font-semibold text-slate-300">
              {lang === 'bn' ? 'দর্শক আয়ন ও ব্যাখ্যা: ' : 'Spectator Ions Note: '}
            </span>
            {lang === 'bn' ? res.spectatorIonsBn : res.spectatorIonsEn}
          </div>
        )}
      </div>
    </div>
  );
};
