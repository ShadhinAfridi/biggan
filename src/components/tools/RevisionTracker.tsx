import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Trophy, RotateCcw, ListChecks, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export interface RevisionChapter {
  id: string;
  num?: number | string;
  title: string;
}

interface RevisionTrackerProps {
  toolId: string;
  currentChapterId: string;
  chapters: RevisionChapter[];
  lang?: 'bn' | 'en';
  accentColor?: 'amber' | 'emerald' | 'blue' | 'purple' | 'cyan';
}

export const RevisionTracker: React.FC<RevisionTrackerProps> = ({
  toolId,
  currentChapterId,
  chapters,
  lang = 'bn',
  accentColor = 'emerald',
}) => {
  const [completed, setCompleted] = useState<string[]>([]);
  const [showList, setShowList] = useState(false);
  const [mounted, setMounted] = useState(false);

  const storageKey = `biggan_progress_${toolId}`;

  // Load from localStorage
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCompleted(parsed);
        }
      }
    } catch {
      // Ignore localStorage errors
    }

    const handleExternalUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ toolId: string }>;
      if (!customEvent.detail || customEvent.detail.toolId === toolId) {
        try {
          const saved = localStorage.getItem(storageKey);
          if (saved) setCompleted(JSON.parse(saved));
        } catch {
          // ignore
        }
      }
    };

    window.addEventListener('biggan-progress-updated', handleExternalUpdate);
    return () => window.removeEventListener('biggan-progress-updated', handleExternalUpdate);
  }, [storageKey, toolId]);

  const saveProgress = (newCompleted: string[]) => {
    setCompleted(newCompleted);
    try {
      localStorage.setItem(storageKey, JSON.stringify(newCompleted));
      window.dispatchEvent(new CustomEvent('biggan-progress-updated', { detail: { toolId } }));
    } catch {
      // Ignore write errors
    }
  };

  const toggleChapter = (id: string) => {
    const isDone = completed.includes(id);
    const updated = isDone ? completed.filter((c) => c !== id) : [...completed, id];
    saveProgress(updated);
  };

  const resetProgress = () => {
    if (window.confirm(lang === 'bn' ? 'আপনি কি এই বিষয়ের সমস্ত রিভিশন প্রগ্রেস রিসেট করতে চান?' : 'Are you sure you want to reset your revision progress for this subject?')) {
      saveProgress([]);
    }
  };

  const isCurrentDone = completed.includes(currentChapterId);
  const totalCount = chapters.length;
  const completedCount = completed.filter((id) => chapters.some((ch) => ch.id === id)).length;
  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const colorStyles = {
    amber: {
      bar: 'from-amber-500 to-amber-400',
      badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      activeBtn: 'bg-amber-500 text-slate-950 hover:bg-amber-400',
      text: 'text-amber-400',
    },
    emerald: {
      bar: 'from-emerald-500 to-teal-400',
      badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      activeBtn: 'bg-emerald-500 text-slate-950 hover:bg-emerald-400',
      text: 'text-emerald-400',
    },
    blue: {
      bar: 'from-blue-500 to-cyan-400',
      badge: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
      activeBtn: 'bg-blue-500 text-slate-950 hover:bg-blue-400',
      text: 'text-blue-400',
    },
    purple: {
      bar: 'from-purple-500 to-pink-400',
      badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
      activeBtn: 'bg-purple-500 text-slate-950 hover:bg-purple-400',
      text: 'text-purple-400',
    },
    cyan: {
      bar: 'from-cyan-500 to-teal-400',
      badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
      activeBtn: 'bg-cyan-500 text-slate-950 hover:bg-cyan-400',
      text: 'text-cyan-400',
    },
  }[accentColor];

  if (!mounted) {
    return (
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 text-xs text-slate-400 animate-pulse">
        {lang === 'bn' ? 'রিভিশন ট্র্যাকার লোড হচ্ছে...' : 'Loading revision tracker...'}
      </div>
    );
  }

  return (
    <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-3 sm:p-4 text-xs shadow-lg space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        {/* Title & Progress Count */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-slate-800 text-emerald-400">
            {percent === 100 ? <Trophy className="w-4 h-4 text-amber-400" /> : <ListChecks className="w-4 h-4" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm">
                {lang === 'bn' ? 'বোর্ড পরীক্ষা রিভিশন ট্র্যাকার' : 'Board Exam Revision Tracker'}
              </span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${colorStyles.badge}`}>
                {completedCount}/{totalCount} {lang === 'bn' ? 'অধ্যায়' : 'chapters'} ({percent}%)
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              {percent === 100
                ? (lang === 'bn' ? '🎉 অভিনন্দন! সমস্ত অধ্যায় সম্পন্ন হয়েছে!' : '🎉 Excellent! Full syllabus completed!')
                : (lang === 'bn' ? 'বোর্ড পরীক্ষার জন্য প্রস্তুতি ট্র্যাক করুন (লোকাল স্টোরেজে সংরক্ষিত)' : 'Track board exam revision progress (saved locally)')}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Current Chapter Toggle Button */}
          <button
            onClick={() => toggleChapter(currentChapterId)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition cursor-pointer text-xs ${
              isCurrentDone
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
            title={lang === 'bn' ? 'বর্তমান অধ্যায় সম্পন্ন হয়েছে কি না টিক দিন' : 'Mark current chapter completed'}
          >
            {isCurrentDone ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'bn' ? 'বর্তমান অধ্যায় রিভাইজড ✓' : 'Current Revised ✓'}</span>
              </>
            ) : (
              <>
                <Circle className="w-3.5 h-3.5 text-slate-400" />
                <span>{lang === 'bn' ? 'অধ্যায় রিভিশন চিহ্নিত করুন' : 'Mark As Revised'}</span>
              </>
            )}
          </button>

          {/* Toggle Full Chapter List */}
          <button
            onClick={() => setShowList(!showList)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
            title={lang === 'bn' ? 'সব অধ্যায়ের তালিকা দেখুন' : 'Show all chapters checklist'}
          >
            {showList ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {/* Reset progress */}
          {completedCount > 0 && (
            <button
              onClick={resetProgress}
              className="p-1.5 rounded-lg bg-slate-800/60 hover:bg-red-950/40 hover:text-red-300 text-slate-500 border border-slate-800 transition"
              title={lang === 'bn' ? 'প্রগ্রেস রিসেট' : 'Reset progress'}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800/80">
        <div
          className={`h-full bg-gradient-to-r ${colorStyles.bar} transition-all duration-500 ease-out`}
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Expanded Checklist of All Chapters */}
      {showList && (
        <div className="pt-2 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 max-h-60 overflow-y-auto scrollbar-thin">
          {chapters.map((ch) => {
            const isDone = completed.includes(ch.id);
            const isCurrent = ch.id === currentChapterId;
            return (
              <button
                key={ch.id}
                onClick={() => toggleChapter(ch.id)}
                className={`flex items-center gap-2 p-2 rounded-lg text-left transition text-[11px] ${
                  isCurrent
                    ? 'bg-slate-800 border border-slate-600'
                    : 'bg-slate-950/50 hover:bg-slate-800/60 border border-slate-850'
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : (
                  <Circle className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                )}
                <span className={`truncate ${isDone ? 'line-through text-slate-500' : 'text-slate-200 font-medium'}`}>
                  {ch.num ? `${ch.num}. ` : ''}{ch.title}
                </span>
                {isCurrent && (
                  <span className="ml-auto text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {lang === 'bn' ? 'বর্তমান' : 'Active'}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
