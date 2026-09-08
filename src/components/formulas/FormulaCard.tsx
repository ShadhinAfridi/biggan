import React, { useState } from 'react';
import type { FormulaItem } from '../../data/formulaCatalog';
import { Latex } from '../math/Latex';
import { Copy, Check, Calculator, Link, Code2, ArrowRight } from 'lucide-react';

interface FormulaCardProps {
  formula: FormulaItem;
  lang: 'bn' | 'en';
}

export const FormulaCard: React.FC<FormulaCardProps> = ({ formula, lang }) => {
  const isBn = lang === 'bn';
  const [copiedType, setCopiedType] = useState<'text' | 'latex' | 'link' | null>(null);

  const copyToClipboard = async (text: string, type: 'text' | 'latex' | 'link') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    } catch {
      // fallback
    }
  };

  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/${lang}/formulas/${formula.subjectId}#${formula.id}`
    : `/${lang}/formulas/${formula.subjectId}#${formula.id}`;

  const toolUrl = formula.toolUrl
    ? formula.toolUrl.startsWith(`/${lang}`)
      ? formula.toolUrl
      : `/${lang}${formula.toolUrl.replace(/^\/(bn|en)/, '')}`
    : undefined;

  return (
    <article
      id={formula.id}
      className="formula-card bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 sm:p-6 space-y-4 transition duration-200 flex flex-col justify-between shadow-lg group relative scroll-mt-24"
    >
      <div className="space-y-3">
        {/* Card Header: Subject, Level & Chapter Badges */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
              {formula.level.toUpperCase()}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {isBn ? `অধ্যায় ${formula.chapterNumber}` : `Chapter ${formula.chapterNumber}`}
              {formula.paper ? (isBn ? ` (পত্র ${formula.paper})` : ` (Paper ${formula.paper})`) : ''}
            </span>
          </div>

          {/* Direct Anchor Permalink Button */}
          <button
            onClick={() => copyToClipboard(shareUrl, 'link')}
            title={isBn ? 'এই সূত্রের সরাসরি লিংক কপি করুন' : 'Copy direct link to this formula'}
            className="text-slate-500 hover:text-amber-400 p-1 rounded-md transition no-print cursor-pointer"
          >
            {copiedType === 'link' ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Link className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Formula Title */}
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-300 transition">
            {isBn ? formula.nameBn : formula.nameEn}
          </h3>
          <p className="text-xs text-slate-400">
            {isBn ? formula.nameEn : formula.nameBn} • {isBn ? formula.chapterTitleBn : formula.chapterTitleEn}
          </p>
        </div>

        {/* KaTeX Pre-rendered Display Container */}
        <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800/80 overflow-x-auto text-center font-mono text-amber-200 text-base sm:text-lg">
          <Latex formula={formula.latex} displayMode={true} />
        </div>

        {/* Plain Text & Copy Utility Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-950/60 px-3 py-2 rounded-xl border border-slate-850 text-xs font-mono text-slate-400 no-print">
          <span className="truncate max-w-[200px] text-slate-300 select-all font-sans text-[11px]">
            {formula.cleanText}
          </span>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => copyToClipboard(formula.cleanText, 'text')}
              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] font-medium transition cursor-pointer"
              title={isBn ? 'সাধারণ টেক্সট কপি করুন' : 'Copy plain text formula'}
            >
              {copiedType === 'text' ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">{isBn ? 'কপিড!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>{isBn ? 'টেক্সট' : 'Text'}</span>
                </>
              )}
            </button>

            <button
              onClick={() => copyToClipboard(formula.latex, 'latex')}
              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] font-medium transition cursor-pointer"
              title={isBn ? 'ল্যাটেক্স কোড কপি করুন' : 'Copy LaTeX code'}
            >
              {copiedType === 'latex' ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">LaTeX ✓</span>
                </>
              ) : (
                <>
                  <Code2 className="w-3 h-3" />
                  <span>LaTeX</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Educational Notes & Boundary Conditions */}
        {((isBn && formula.notesBn) || (!isBn && formula.notesEn)) && (
          <p className="text-xs text-slate-300 bg-amber-500/5 p-2.5 rounded-xl border border-amber-500/15 leading-relaxed">
            💡 <strong className="text-amber-300 font-semibold">{isBn ? 'প্রয়োগের শর্ত: ' : 'Condition: '}</strong>
            {isBn ? formula.notesBn : formula.notesEn}
          </p>
        )}
      </div>

      {/* Action Footer: Calculator Jump */}
      {toolUrl && (
        <div className="pt-3 border-t border-slate-800/80 no-print flex items-center justify-between">
          <a
            href={toolUrl}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 text-xs font-bold transition duration-150 border border-amber-500/20 shadow-sm"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>{isBn ? 'অনলাইন ক্যালকুলেটরে হিসাব করুন' : 'Solve in Calculator'}</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      )}
    </article>
  );
};
