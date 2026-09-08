import React, { useState, useMemo } from 'react';
import { ELEMENTS, type ElementData } from '../../tools/molar-mass/elements';
import { Sparkles, Filter, Info, Search } from 'lucide-react';

interface Props {
  lang?: 'en' | 'bn';
}

export const PeriodicTableIsland: React.FC<Props> = ({ lang = 'bn' }) => {
  const [examMode, setExamMode] = useState<boolean>(true); // default to NCTB/NCERT Class 9-10 examination mode (Z=1 to 30)
  const [selectedElement, setSelectedElement] = useState<ElementData>(ELEMENTS['H']);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const elementsList = useMemo(() => {
    return Object.values(ELEMENTS).sort((a, b) => a.atomicNumber - b.atomicNumber);
  }, []);

  const filteredElements = useMemo(() => {
    return elementsList.filter((el) => {
      // Exam mode filters for primary curriculum elements (Z <= 30 or essential group 1/17/18)
      if (examMode && el.atomicNumber > 30 && !['Br', 'Kr', 'I', 'Xe', 'Ag', 'Au', 'U'].includes(el.symbol)) {
        return false;
      }
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        el.symbol.toLowerCase().includes(q) ||
        el.nameEn.toLowerCase().includes(q) ||
        el.nameBn.includes(q) ||
        el.atomicNumber.toString() === q
      );
    });
  }, [elementsList, examMode, searchQuery]);

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-6">
      {/* Top Bar with Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            {lang === 'bn' ? 'দ্বৈতভাষিক ইন্টারেক্টিভ পর্যায় সারণী' : 'Bilingual Interactive Periodic Table'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'bn'
              ? 'NCTB ও NCERT বোর্ড পরীক্ষা মোড: ১-৩০ মৌল ও প্রধান গ্রুপসমূহ'
              : 'IUPAC authoritative data with authentic Bengali phonetic nomenclature.'}
          </p>
        </div>

        {/* Exam Mode Toggle & Search */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setExamMode(!examMode)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition ${
              examMode
                ? 'bg-cyan-600 border-cyan-500 text-white shadow-sm'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            {lang === 'bn'
              ? examMode ? 'বোর্ড পরীক্ষা মোড (১-৩০)' : 'পূর্ণাঙ্গ IUPAC সারণী'
              : examMode ? 'Board Exam Mode (1-30)' : 'Full IUPAC View'}
          </button>

          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'bn' ? 'মৌল বা পারমাণবিক সংখ্যা...' : 'Search element or Z...'}
              className="pl-8 pr-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 outline-none w-44 focus:border-cyan-500"
            />
          </div>
        </div>
      </div>

      {/* Selected Element Detail Hero Card */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/30 rounded-2xl p-5 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex flex-col items-center justify-center text-cyan-400 font-mono shadow-inner">
            <span className="text-[10px] text-slate-400">Z = {selectedElement.atomicNumber}</span>
            <span className="text-2xl font-black">{selectedElement.symbol}</span>
          </div>
          <div>
            <div className="text-lg font-bold text-white flex items-center gap-2">
              <span>{lang === 'bn' ? selectedElement.nameBn : selectedElement.nameEn}</span>
              <span className="text-xs text-slate-400 font-normal">
                ({lang === 'bn' ? selectedElement.nameEn : selectedElement.nameBn})
              </span>
            </div>
            <div className="text-xs text-slate-400 mt-0.5 flex flex-wrap items-center gap-3 font-mono">
              <span>
                {lang === 'bn' ? 'পারমাণবিক ভর:' : 'Atomic Mass:'}{' '}
                <strong className="text-slate-200">{selectedElement.atomicMass}</strong>
              </span>
              <span>•</span>
              <span>
                {lang === 'bn' ? 'পর্যায়:' : 'Period:'}{' '}
                <strong className="text-slate-200">{selectedElement.period}</strong>
              </span>
              {selectedElement.group && (
                <>
                  <span>•</span>
                  <span>
                    {lang === 'bn' ? 'গ্রুপ:' : 'Group:'}{' '}
                    <strong className="text-slate-200">{selectedElement.group}</strong>
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="text-xs bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700 self-start sm:self-auto font-mono text-cyan-300">
          {selectedElement.atomicNumber === 24 && (
            <span className="text-amber-300">Cr Exception: [Ar] 3d⁵ 4s¹</span>
          )}
          {selectedElement.atomicNumber === 29 && (
            <span className="text-amber-300">Cu Exception: [Ar] 3d¹⁰ 4s¹</span>
          )}
          {selectedElement.atomicNumber !== 24 && selectedElement.atomicNumber !== 29 && (
            <span>IUPAC Standard Weight</span>
          )}
        </div>
      </div>

      {/* Periodic Table Element Grid */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{lang === 'bn' ? 'মৌল নির্বাচন করুন:' : 'Select an Element:'}</span>
          <span className="font-mono text-[11px] text-cyan-400">
            {filteredElements.length} {lang === 'bn' ? 'টি মৌল প্রদর্শিত' : 'elements shown'}
          </span>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          {filteredElements.map((el) => {
            const isSelected = selectedElement.symbol === el.symbol;
            return (
              <button
                key={el.symbol}
                onClick={() => setSelectedElement(el)}
                className={`p-2 rounded-xl border text-center transition flex flex-col items-center justify-between aspect-square ${
                  isSelected
                    ? 'bg-cyan-600 border-cyan-400 text-white shadow-lg ring-2 ring-cyan-400/50 scale-105'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-600 text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <span className="text-[10px] font-mono text-slate-400 leading-none">
                  {el.atomicNumber}
                </span>
                <span className="text-base font-extrabold font-mono leading-none my-1">
                  {el.symbol}
                </span>
                <span className="text-[9px] truncate w-full leading-none opacity-80">
                  {lang === 'bn' ? el.nameBn : el.nameEn}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
