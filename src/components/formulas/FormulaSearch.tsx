import React, { useState, useMemo } from 'react';
import type { FormulaItem } from '../../data/formulaCatalog';
import { FormulaCard } from './FormulaCard';
import { Search, X, Layers, Filter } from 'lucide-react';

interface FormulaSearchProps {
  formulas: FormulaItem[];
  lang: 'bn' | 'en';
  defaultSubject?: string;
  showSubjectFilter?: boolean;
}

const SUBJECT_NAMES_BN: Record<string, string> = {
  all: 'সকল বিষয়',
  physics: 'পদার্থবিজ্ঞান',
  chemistry: 'রসায়ন',
  'general-math': 'সাধারণ গণিত',
  'higher-math': 'উচ্চতর গণিত',
  ict: 'আইসিটি (ICT)',
  biology: 'জীববিজ্ঞান',
};

const SUBJECT_NAMES_EN: Record<string, string> = {
  all: 'All Subjects',
  physics: 'Physics',
  chemistry: 'Chemistry',
  'general-math': 'General Math',
  'higher-math': 'Higher Math',
  ict: 'ICT',
  biology: 'Biology',
};

export const FormulaSearch: React.FC<FormulaSearchProps> = ({
  formulas,
  lang,
  defaultSubject = 'all',
  showSubjectFilter = true,
}) => {
  const isBn = lang === 'bn';
  const [query, setQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(defaultSubject);
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'ssc' | 'hsc'>('all');

  // Available subjects from formula list
  const availableSubjects = useMemo(() => {
    const s = Array.from(new Set(formulas.map((f) => f.subjectId)));
    return ['all', ...s];
  }, [formulas]);

  // Filtered formulas
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return formulas.filter((f) => {
      // Subject match
      if (showSubjectFilter && selectedSubject !== 'all' && f.subjectId !== selectedSubject) {
        return false;
      }

      // Level match
      if (selectedLevel !== 'all' && f.level !== selectedLevel) {
        return false;
      }

      // Query match
      if (!q) return true;

      const mBn = f.nameBn.toLowerCase().includes(q);
      const mEn = f.nameEn.toLowerCase().includes(q);
      const mChBn = f.chapterTitleBn.toLowerCase().includes(q);
      const mChEn = f.chapterTitleEn.toLowerCase().includes(q);
      const mText = f.cleanText.toLowerCase().includes(q);
      const mLatex = f.latex.toLowerCase().includes(q);
      const mNotes = (f.notesBn || '').toLowerCase().includes(q) || (f.notesEn || '').toLowerCase().includes(q);

      return mBn || mEn || mChBn || mChEn || mText || mLatex || mNotes;
    });
  }, [formulas, query, selectedSubject, selectedLevel, showSubjectFilter]);

  const clearFilters = () => {
    setQuery('');
    setSelectedSubject('all');
    setSelectedLevel('all');
  };

  return (
    <div className="space-y-6">
      {/* Search Bar & Filters Section */}
      <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl shadow-xl space-y-4 backdrop-blur-md no-print">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              isBn
                ? 'সূত্রের নাম, রাশি বা সমীকরণ লিখে খুঁজুন (যেমন: F=ma, গতি, ত্রিভুজ, pH, v=u+at)...'
                : 'Search formulas by name, symbol, or equation (e.g. F=ma, velocity, triangle, pH)...'
            }
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-12 pr-10 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm sm:text-base transition"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 rounded-md"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Pills Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          {/* Level Filter: All, SSC, HSC */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              {isBn ? 'শ্রেণি:' : 'Level:'}
            </span>
            {(['all', 'ssc', 'hsc'] as const).map((lvl) => {
              const label =
                lvl === 'all'
                  ? isBn ? 'সকল শ্রেণি' : 'All Levels'
                  : lvl.toUpperCase();
              const active = selectedLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    active
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Subject Pills (if enabled) */}
          {showSubjectFilter && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                {isBn ? 'বিষয়:' : 'Subject:'}
              </span>
              {availableSubjects.map((sub) => {
                const label = isBn
                  ? SUBJECT_NAMES_BN[sub] || sub
                  : SUBJECT_NAMES_EN[sub] || sub;
                const active = selectedSubject === sub;
                return (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubject(sub)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                      active
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Counter and Filter Reset */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-xs text-slate-400">
          <div>
            {isBn ? (
              <span>
                মোট <strong className="text-amber-400 font-mono font-bold">{formulas.length}</strong> টির মধ্যে{' '}
                <strong className="text-white font-mono font-bold">{filtered.length}</strong> টি সূত্র প্রদর্শিত হচ্ছে
              </span>
            ) : (
              <span>
                Showing <strong className="text-amber-400 font-mono font-bold">{filtered.length}</strong> of{' '}
                <strong className="text-white font-mono font-bold">{formulas.length}</strong> formulas
              </span>
            )}
          </div>

          {(query || selectedSubject !== defaultSubject || selectedLevel !== 'all') && (
            <button
              onClick={clearFilters}
              className="text-xs text-rose-400 hover:text-rose-300 underline font-medium cursor-pointer"
            >
              {isBn ? 'ফিল্টার রিসেট করুন' : 'Reset filters'}
            </button>
          )}
        </div>
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">
            {isBn ? 'কোনো সূত্র পাওয়া যায়নি' : 'No formulas matched your search'}
          </h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            {isBn
              ? 'বানান পরীক্ষা করুন অথবা অন্য কোনো শব্দ, অধ্যায় বা রাশি দিয়ে খুঁজুন।'
              : 'Please check your spelling or search by topic, chapter, or variable name.'}
          </p>
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition cursor-pointer"
          >
            {isBn ? 'সব সূত্র দেখুন' : 'View All Formulas'}
          </button>
        </div>
      )}

      {/* Grid of Formulas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((formula) => (
          <FormulaCard key={formula.id} formula={formula} lang={lang} />
        ))}
      </div>
    </div>
  );
};
