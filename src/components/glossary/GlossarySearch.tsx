import React, { useState, useMemo } from 'react';
import type { GlossaryTerm } from '../../data/glossaryTerms';
import { Latex } from '../math/Latex';
import { Search, X, BookOpen, Calculator, Lightbulb, ArrowRight, Layers } from 'lucide-react';

interface GlossarySearchProps {
  terms: GlossaryTerm[];
  lang: 'bn' | 'en';
}

const SUBJECT_MAP_BN: Record<string, string> = {
  all: 'সব বিষয়',
  physics: 'পদার্থবিজ্ঞান',
  chemistry: 'রসায়ন',
  biology: 'জীববিজ্ঞান',
  'higher-math': 'উচ্চতর গণিত',
  'general-math': 'সাধারণ গণিত',
  ict: 'আইসিটি (ICT)',
};

const SUBJECT_MAP_EN: Record<string, string> = {
  all: 'All Subjects',
  physics: 'Physics',
  chemistry: 'Chemistry',
  biology: 'Biology',
  'higher-math': 'Higher Math',
  'general-math': 'General Math',
  ict: 'ICT',
};

const QUANTITY_TYPE_LABELS_BN: Record<string, string> = {
  scalar: 'স্কেলার রাশি',
  vector: 'ভেক্টর রাশি',
  constant: 'ভৌত ধ্রুবক',
  concept: 'মৌলিক প্রত্যয়',
  dimensionless: 'মাত্রাহীন অনুপাত',
};

const QUANTITY_TYPE_LABELS_EN: Record<string, string> = {
  scalar: 'Scalar Quantity',
  vector: 'Vector Quantity',
  constant: 'Physical Constant',
  concept: 'Fundamental Concept',
  dimensionless: 'Dimensionless Ratio',
};

export const GlossarySearch: React.FC<GlossarySearchProps> = ({ terms, lang }) => {
  const [query, setQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const isBn = lang === 'bn';

  // Extract available subjects
  const subjectList = useMemo(() => {
    const subs = Array.from(new Set(terms.map((t) => t.subjectId)));
    return ['all', ...subs];
  }, [terms]);

  // Filtered terms
  const filteredTerms = useMemo(() => {
    const q = query.trim().toLowerCase();

    return terms.filter((term) => {
      // Subject filter
      if (selectedSubject !== 'all' && term.subjectId !== selectedSubject) {
        return false;
      }

      // Quantity type filter
      if (selectedType !== 'all' && term.quantityType !== selectedType) {
        return false;
      }

      // Text query match
      if (!q) return true;

      const matchBn = term.termBn.toLowerCase().includes(q);
      const matchEn = term.termEn.toLowerCase().includes(q);
      const matchPronunciation = term.pronunciationBn.toLowerCase().includes(q);
      const matchSymbol = term.symbol.toLowerCase().includes(q);
      const matchDefBn = term.definitionBn.toLowerCase().includes(q);
      const matchDefEn = term.definitionEn.toLowerCase().includes(q);
      const matchCurriculum = term.curriculum.toLowerCase().includes(q);

      return (
        matchBn ||
        matchEn ||
        matchPronunciation ||
        matchSymbol ||
        matchDefBn ||
        matchDefEn ||
        matchCurriculum
      );
    });
  }, [terms, query, selectedSubject, selectedType]);

  const clearFilters = () => {
    setQuery('');
    setSelectedSubject('all');
    setSelectedType('all');
  };

  return (
    <div className="space-y-6">
      {/* Search Bar & Filters Section */}
      <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl shadow-xl space-y-4 backdrop-blur-md">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              isBn
                ? 'টার্ম, প্রতীক, বাংলা বা ইংরেজি নাম লিখে খুঁজুন (যেমন: বেগ, velocity, v, মোলারিটি, ত্বরণ)...'
                : 'Search by term name, symbol, formula, or keyword (e.g. velocity, molarity, v, a)...'
            }
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-12 pr-10 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-sm sm:text-base transition"
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

        {/* Subject Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            {isBn ? 'বিষয়:' : 'Subject:'}
          </span>
          {subjectList.map((sub) => {
            const label = isBn
              ? SUBJECT_MAP_BN[sub] || sub
              : SUBJECT_MAP_EN[sub] || sub;
            const active = selectedSubject === sub;
            return (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
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

        {/* Result Counter & Active Filter Reset */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-xs text-slate-400">
          <div>
            {isBn ? (
              <span>
                মোট <strong className="text-cyan-400 font-mono font-bold">{terms.length}</strong> টির মধ্যে{' '}
                <strong className="text-white font-mono font-bold">{filteredTerms.length}</strong> টি পরিভাষা প্রদর্শিত হচ্ছে
              </span>
            ) : (
              <span>
                Showing <strong className="text-cyan-400 font-mono font-bold">{filteredTerms.length}</strong> of{' '}
                <strong className="text-white font-mono font-bold">{terms.length}</strong> scientific terms
              </span>
            )}
          </div>

          {(query || selectedSubject !== 'all' || selectedType !== 'all') && (
            <button
              onClick={clearFilters}
              className="text-xs text-rose-400 hover:text-rose-300 underline font-medium cursor-pointer"
            >
              {isBn ? 'ফিল্টার রিসেট করুন' : 'Reset filters'}
            </button>
          )}
        </div>
      </div>

      {/* Zero State */}
      {filteredTerms.length === 0 && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">
            {isBn ? 'কোনো বৈজ্ঞানিক পরিভাষা খুঁজে পাওয়া যায়নি' : 'No scientific terms matched your search'}
          </h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            {isBn
              ? 'বানান পরীক্ষা করুন অথবা অন্য কোনো প্রাসঙ্গিক শব্দ বা প্রতীক দিয়ে অনুসন্ধান করুন।'
              : 'Please check your spelling or search by general topic, symbol, or English term name.'}
          </p>
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-sm transition cursor-pointer"
          >
            {isBn ? 'সব টার্ম দেখুন' : 'View All Terms'}
          </button>
        </div>
      )}

      {/* Grid of Glossary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTerms.map((term) => {
          const typeLabel = isBn
            ? QUANTITY_TYPE_LABELS_BN[term.quantityType] || term.quantityType
            : QUANTITY_TYPE_LABELS_EN[term.quantityType] || term.quantityType;

          const termUrl = `/${lang}/glossary/${term.id}`;
          const toolUrl = term.relatedToolUrl
            ? term.relatedToolUrl.startsWith(`/${lang}`)
              ? term.relatedToolUrl
              : `/${lang}${term.relatedToolUrl.replace(/^\/(bn|en)/, '')}`
            : undefined;

          return (
            <article
              key={term.id}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 space-y-4 transition shadow-lg flex flex-col justify-between group"
            >
              {/* Card Header */}
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-3">
                  <div>
                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition flex flex-wrap items-center gap-2">
                      <a href={termUrl} className="hover:underline">
                        {isBn ? term.termBn : term.termEn}
                      </a>
                      <span className="text-xs text-slate-400 font-normal">
                        ({isBn ? term.termEn : term.termBn})
                      </span>
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded">
                        {isBn ? term.subjectNameBn : term.subjectNameEn}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {term.curriculum}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-md text-[10px] uppercase font-bold bg-slate-800/80 text-slate-300 border border-slate-700 shrink-0">
                    {typeLabel}
                  </span>
                </div>

                {/* Definition Snippet */}
                <p className="text-sm text-slate-300 leading-relaxed pt-1">
                  {isBn ? term.definitionBn : term.definitionEn}
                </p>
              </div>

              {/* Math / Spec Grid */}
              <div className="grid grid-cols-2 gap-2.5 p-3.5 bg-slate-950/90 rounded-xl border border-slate-800/80 text-xs font-mono text-slate-300">
                <div>
                  <span className="text-slate-500 block text-[10px] font-sans">
                    {isBn ? 'সংজ্ঞাকারী সমীকরণ:' : 'Defining Equation:'}
                  </span>
                  <div className="text-cyan-300 font-bold overflow-x-auto py-0.5">
                    <Latex formula={term.definingEquation} />
                  </div>
                </div>

                <div>
                  <span className="text-slate-500 block text-[10px] font-sans">
                    {isBn ? 'এসআই (SI) একক:' : 'Standard SI Unit:'}
                  </span>
                  <div className="text-emerald-300 py-0.5 break-words">
                    {isBn ? term.siUnitBn : term.siUnitEn}
                  </div>
                </div>

                <div className="col-span-2 pt-2 border-t border-slate-900 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-slate-500 text-[10px] font-sans mr-2">
                      {isBn ? 'মাত্রিক সংকেত:' : 'Dimension:'}
                    </span>
                    <span className="text-amber-300 font-bold">
                      <Latex formula={term.dimensionalFormula} />
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] font-sans mr-1">
                      {isBn ? 'প্রতীক:' : 'Symbol:'}
                    </span>
                    <span className="text-cyan-400 font-bold font-mono">
                      {term.symbol}
                    </span>
                  </div>
                </div>
              </div>

              {/* Mnemonic Hint if available */}
              {((isBn && term.mnemonicBn) || (!isBn && term.mnemonicEn)) && (
                <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200/90 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">{isBn ? 'মনে রাখার কৌশল: ' : 'Memory Hook: '}</span>
                    {isBn ? term.mnemonicBn : term.mnemonicEn}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80">
                <a
                  href={termUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-0.5 transition"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>
                    {isBn ? 'পূর্ণাঙ্গ সংজ্ঞা, ব্যাখ্যা ও প্রশ্নোত্তর' : 'Full Guide, Explanations & FAQs'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                {toolUrl && (
                  <a
                    href={toolUrl}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-800/50 px-2.5 py-1 rounded-lg transition"
                  >
                    <Calculator className="w-3 h-3" />
                    <span>{isBn ? 'ক্যালকুলেটর দেখুন' : 'Open Calculator'}</span>
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
