import React, { useState, useEffect } from 'react';
import {
  Trophy,
  CheckCircle2,
  Circle,
  RotateCcw,
  Sparkles,
  Zap,
  FlaskConical,
  Activity,
  Layers,
  Flame,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

interface ChapterDef {
  id: string;
  num?: number | string;
  nameBn: string;
  nameEn: string;
}

interface SubjectDef {
  id: string;
  nameBn: string;
  nameEn: string;
  icon: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  toolUrlBn: string;
  toolUrlEn: string;
  chapters: ChapterDef[];
}

const SUBJECTS_CONFIG: SubjectDef[] = [
  {
    id: 'physics',
    nameBn: 'এসএসসি পদার্থবিজ্ঞান',
    nameEn: 'SSC Physics',
    icon: '⚡',
    color: 'from-amber-500 to-amber-600',
    badgeBg: 'bg-amber-500/10',
    badgeText: 'text-amber-400 border-amber-500/30',
    toolUrlBn: '/bn/tools/physics',
    toolUrlEn: '/en/tools/physics',
    chapters: [
      { id: 'ch1', num: 1, nameBn: 'ভৌত রাশি ও পরিমাপ', nameEn: 'Physical Quantities & Measurement' },
      { id: 'ch2', num: 2, nameBn: 'গতি (Motion)', nameEn: 'Motion & Kinematics' },
      { id: 'ch3', num: 3, nameBn: 'বল (Force & Momentum)', nameEn: 'Force & Momentum' },
      { id: 'ch4', num: 4, nameBn: 'কাজ, ক্ষমতা ও শক্তি', nameEn: 'Work, Power & Energy' },
      { id: 'ch5', num: 5, nameBn: 'পদার্থের অবস্থা ও চাপ', nameEn: 'State of Matter & Pressure' },
      { id: 'ch6', num: 6, nameBn: 'বস্তুর উপর তাপের প্রভাব', nameEn: 'Effect of Heat on Matter' },
      { id: 'ch7', num: 7, nameBn: 'তরঙ্গ ও শব্দ', nameEn: 'Waves & Sound' },
      { id: 'ch8', num: 8, nameBn: 'আলোর প্রতিফলন', nameEn: 'Reflection of Light' },
      { id: 'ch9', num: 9, nameBn: 'আলোর প্রতিসরণ', nameEn: 'Refraction of Light' },
      { id: 'ch10', num: 10, nameBn: 'স্থির তড়িৎ', nameEn: 'Static Electricity' },
      { id: 'ch11', num: 11, nameBn: 'চল তড়িৎ', nameEn: 'Current Electricity' },
      { id: 'ch12', num: 12, nameBn: 'বিদ্যুতের চৌম্বক ক্রিয়া', nameEn: 'Magnetic Effects of Current' },
      { id: 'ch13', num: 13, nameBn: 'তেজস্ক্রিয়তা ও আধুনিক পদার্থবিজ্ঞান', nameEn: 'Radioactivity & Modern Physics' },
    ],
  },
  {
    id: 'higher-math',
    nameBn: 'এসএসসি উচ্চতর গণিত',
    nameEn: 'SSC Higher Mathematics',
    icon: '📐',
    color: 'from-indigo-500 to-purple-600',
    badgeBg: 'bg-indigo-500/10',
    badgeText: 'text-indigo-400 border-indigo-500/30',
    toolUrlBn: '/bn/tools/higher-math',
    toolUrlEn: '/en/tools/higher-math',
    chapters: [
      { id: 'geometry', num: 3, nameBn: '৩য়: এ্যাপোলোনিওসের উপপাদ্য', nameEn: 'Ch 3: Geometry (Apollonius)' },
      { id: 'equations', num: '5-6', nameBn: '৫-৬: দ্বিঘাত সমীকরণ ও অসমতা', nameEn: 'Ch 5-6: Equations & Inequalities' },
      { id: 'series', num: 7, nameBn: '৭ম: অসীম গুণোত্তর ধারা ও পৌনঃপুনিক', nameEn: 'Ch 7: Infinite Geometric Series' },
      { id: 'sets', num: 1, nameBn: '১ম: সেট, ফাংশন ও বিপরীত ফাংশন', nameEn: 'Ch 1: Sets, Functions & Inverse' },
      { id: 'algebra', num: 2, nameBn: '২য়: ভাগশেষ উপপাদ্য ও ঘন অভেদ', nameEn: 'Ch 2: Polynomials & Identities' },
      { id: 'trig_logs', num: '8-9', nameBn: '৮-৯: বৃত্তচাপ ও লগারিদম', nameEn: 'Ch 8-9: Radian Measure & Logarithms' },
      { id: 'binomial', num: 10, nameBn: '১০ম: দ্বিপদী বিস্তৃতি', nameEn: 'Ch 10: Binomial Expansion' },
      { id: 'coord_vec', num: '11-12', nameBn: '১১-১২: স্থানাঙ্ক জ্যামিতি ও ভেক্টর', nameEn: 'Ch 11-12: Coordinate Geometry & Vectors' },
      { id: 'solid_prob', num: '13-14', nameBn: '১৩-১৪: ঘন জ্যামিতি ও সম্ভাবনা', nameEn: 'Ch 13-14: Solid Geometry & Probability' },
    ],
  },
  {
    id: 'chemistry',
    nameBn: 'এসএসসি রসায়ন',
    nameEn: 'SSC Chemistry',
    icon: '⚗️',
    color: 'from-teal-500 to-emerald-600',
    badgeBg: 'bg-teal-500/10',
    badgeText: 'text-teal-400 border-teal-500/30',
    toolUrlBn: '/bn/tools/chemistry',
    toolUrlEn: '/en/tools/chemistry',
    chapters: [
      { id: 'diffusion', num: 2, nameBn: '২য়: গ্রাহামের ব্যাপন সূত্র', nameEn: 'Ch 2: Graham\'s Law of Diffusion' },
      { id: 'atomic_structure', num: 3, nameBn: '৩য়: বোর মডেল ও পারমাণবিক ভর', nameEn: 'Ch 3: Bohr Atomic Model & Isotopes' },
      { id: 'mole_molarity', num: 6, nameBn: '৬ষ্ঠ: মোল ধারণা ও মোলারিটি', nameEn: 'Ch 6: Mole Concept & Molarity' },
      { id: 'composition_formula', num: '6b', nameBn: '৬ষ্ঠ: শতকরা সংযুতি ও আণবিক সংকেত', nameEn: 'Ch 6: Empirical & Molecular Formula' },
      { id: 'limiting_reactant', num: '6c', nameBn: '৬ষ্ঠ: লিমিটিং বিক্রিয়ক ও স্টয়কিওমেট্রি', nameEn: 'Ch 6: Limiting Reactant & Yield' },
      { id: 'oxidation', num: 7, nameBn: '৭ম: জারণ সংখ্যা ও রেডক্স গণনা', nameEn: 'Ch 7: Oxidation States & Redox' },
      { id: 'bond_energy', num: 8, nameBn: '৮ম: বন্ধন শক্তি ও বিক্রিয়া তাপ (ΔH)', nameEn: 'Ch 8: Bond Energies & ΔH' },
      { id: 'acid_base', num: 9, nameBn: '৯ম: এসিড-ক্ষার প্রশমন ও pH', nameEn: 'Ch 9: Acid-Base & pH Scale' },
      { id: 'hydrocarbon', num: 11, nameBn: '১১শ: হাইড্রোকার্বন সমগোত্রীয় শ্রেণি', nameEn: 'Ch 11: Hydrocarbon Series' },
    ],
  },
  {
    id: 'general-math',
    nameBn: 'এসএসসি সাধারণ গণিত',
    nameEn: 'SSC General Mathematics',
    icon: '🧮',
    color: 'from-cyan-500 to-blue-600',
    badgeBg: 'bg-cyan-500/10',
    badgeText: 'text-cyan-400 border-cyan-500/30',
    toolUrlBn: '/bn/tools/general-math',
    toolUrlEn: '/en/tools/general-math',
    chapters: [
      { id: 'ch2', num: 2, nameBn: '২য়: সেট ও শক্তি সেট', nameEn: 'Ch 2: Sets & Power Set' },
      { id: 'ch3', num: 3, nameBn: '৩য়: বীজগাণিতিক সূত্র ও মান নির্ণয়', nameEn: 'Ch 3: Algebraic Expansions' },
      { id: 'ch4', num: 4, nameBn: '৪র্থ: সূচক, লগারিদম ও বৈজ্ঞানিক রূপ', nameEn: 'Ch 4: Exponents & Logarithms' },
      { id: 'ch9_10', num: '9-10', nameBn: '৯-১০: ত্রিকোণমিতি ও উচ্চতা-দূরত্ব', nameEn: 'Ch 9-10: Trig & Heights/Distances' },
      { id: 'ch11', num: 11, nameBn: '১১শ: অনুপাত ও যোজন-বিয়োজন', nameEn: 'Ch 11: Ratio & Componendo-Dividendo' },
      { id: 'ch16', num: 16, nameBn: '১৬শ: পরিমিতি (ত্রিভুজ, বৃত্ত, ঘনবস্তু)', nameEn: 'Ch 16: Mensuration' },
      { id: 'ch17', num: 17, nameBn: '১৭শ: পরিসংখ্যান (গড়, মধ্যক, প্রচুরক)', nameEn: 'Ch 17: Statistics (Mean, Median, Mode)' },
    ],
  },
  {
    id: 'biology',
    nameBn: 'এসএসসি জীববিজ্ঞান',
    nameEn: 'SSC Biology',
    icon: '🧬',
    color: 'from-emerald-500 to-teal-600',
    badgeBg: 'bg-emerald-500/10',
    badgeText: 'text-emerald-400 border-emerald-500/30',
    toolUrlBn: '/bn/tools/biology',
    toolUrlEn: '/en/tools/biology',
    chapters: [
      { id: 'bioenergetics', num: 4, nameBn: '৪র্থ: শ্বসন জৈবশক্তি ও ATP হিসাব', nameEn: 'Ch 4: Respiration ATP Yield' },
      { id: 'bmi_bmr', num: 5, nameBn: '৫ম: বিএমআই (BMI) ও বিএমআর (BMR)', nameEn: 'Ch 5: BMI & BMR Caloric Needs' },
      { id: 'blood_matching', num: 6, nameBn: '৬ষ্ঠ: রক্তের গ্রুপ ও সামঞ্জস্যতা', nameEn: 'Ch 6: Blood Group Compatibility' },
      { id: 'monohybrid', num: 12, nameBn: '১২শ: মেন্ডেলীয় একসংকর জনন', nameEn: 'Ch 12: Mendelian Monohybrid Cross' },
      { id: 'sex_linked', num: '12b', nameBn: '১২শ: বর্ণান্ধতা ও লিঙ্গ-সংযুক্ত বংশগতি', nameEn: 'Ch 12: Sex-Linked Inheritance' },
      { id: 'trophic_energy', num: 13, nameBn: '১৩শ: খাদ্যশৃঙ্খল ১০% শক্তি পিরামিড', nameEn: 'Ch 13: 10% Trophic Energy' },
    ],
  },
];

interface Props {
  lang?: 'bn' | 'en';
}

export const ProgressDashboard: React.FC<Props> = ({ lang = 'bn' }) => {
  const [progressState, setProgressState] = useState<Record<string, string[]>>({});
  const [mounted, setMounted] = useState(false);

  const loadAllProgress = () => {
    const newState: Record<string, string[]> = {};
    for (const sub of SUBJECTS_CONFIG) {
      try {
        const saved = localStorage.getItem(`biggan_progress_${sub.id}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            newState[sub.id] = parsed;
          }
        }
      } catch {
        // ignore
      }
      if (!newState[sub.id]) {
        newState[sub.id] = [];
      }
    }
    setProgressState(newState);
  };

  useEffect(() => {
    setMounted(true);
    loadAllProgress();

    const handleUpdate = () => loadAllProgress();
    window.addEventListener('biggan-progress-updated', handleUpdate);
    return () => window.removeEventListener('biggan-progress-updated', handleUpdate);
  }, []);

  const toggleChapter = (subjectId: string, chapterId: string) => {
    const currentList = progressState[subjectId] || [];
    const isDone = currentList.includes(chapterId);
    const updated = isDone ? currentList.filter((c) => c !== chapterId) : [...currentList, chapterId];

    const updatedState = { ...progressState, [subjectId]: updated };
    setProgressState(updatedState);

    try {
      localStorage.setItem(`biggan_progress_${subjectId}`, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('biggan-progress-updated', { detail: { toolId: subjectId } }));
    } catch {
      // ignore
    }
  };

  const resetAllProgress = () => {
    const msg =
      lang === 'bn'
        ? 'আপনি কি নিশ্চিত যে আপনার সমস্ত বিষয়ের রিভিশন প্রগ্রেস মুছে ফেলতে চান?'
        : 'Are you sure you want to reset all revision progress across all subjects?';
    if (window.confirm(msg)) {
      for (const sub of SUBJECTS_CONFIG) {
        try {
          localStorage.removeItem(`biggan_progress_${sub.id}`);
          window.dispatchEvent(new CustomEvent('biggan-progress-updated', { detail: { toolId: sub.id } }));
        } catch {
          // ignore
        }
      }
      loadAllProgress();
    }
  };

  // Calculations
  let totalAllChapters = 0;
  let completedAllChapters = 0;

  for (const sub of SUBJECTS_CONFIG) {
    const list = progressState[sub.id] || [];
    totalAllChapters += sub.chapters.length;
    completedAllChapters += list.filter((id) => sub.chapters.some((c) => c.id === id)).length;
  }

  const overallPercent = totalAllChapters > 0 ? Math.round((completedAllChapters / totalAllChapters) * 100) : 0;
  const remainingChapters = totalAllChapters - completedAllChapters;

  if (!mounted) {
    return (
      <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-3xl animate-pulse text-slate-400 text-sm">
        {lang === 'bn' ? 'রিভিশন প্রগ্রেস ড্যাশবোর্ড লোড হচ্ছে...' : 'Loading revision dashboard...'}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Overview Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Completion */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20 border border-slate-800 p-5 rounded-2xl space-y-2 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold uppercase tracking-wider">
              {lang === 'bn' ? 'সামগ্রিক অগ্রগতি' : 'Overall Completion'}
            </span>
            <Trophy className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl sm:text-4xl font-mono font-extrabold text-white">
            {overallPercent}%
          </div>
          <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-500"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
        </div>

        {/* Completed Chapters */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2 shadow-lg">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold uppercase tracking-wider">
              {lang === 'bn' ? 'রিভাইজড অধ্যায়' : 'Revised Chapters'}
            </span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl sm:text-4xl font-mono font-extrabold text-emerald-400">
            {completedAllChapters}
            <span className="text-sm font-sans font-normal text-slate-500 ml-1">/ {totalAllChapters}</span>
          </div>
          <p className="text-[11px] text-slate-400">
            {lang === 'bn' ? 'বোর্ড পরীক্ষার জন্য প্রস্তুত' : 'Ready for board exam'}
          </p>
        </div>

        {/* Remaining Chapters */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2 shadow-lg">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold uppercase tracking-wider">
              {lang === 'bn' ? 'অবশিষ্ট অধ্যায়' : 'Remaining Chapters'}
            </span>
            <Activity className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-3xl sm:text-4xl font-mono font-extrabold text-cyan-400">
            {remainingChapters}
          </div>
          <p className="text-[11px] text-slate-400">
            {lang === 'bn' ? 'রিভিশন বাকি রয়েছে' : 'Chapters left to revise'}
          </p>
        </div>

        {/* Target STEM Subjects */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2 shadow-lg">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold uppercase tracking-wider">
              {lang === 'bn' ? 'টার্গেট বিষয়সমূহ' : 'Target Subjects'}
            </span>
            <BookOpen className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl sm:text-4xl font-mono font-extrabold text-purple-400">
            5 <span className="text-sm font-sans font-normal text-slate-500">STEM</span>
          </div>
          <p className="text-[11px] text-slate-400">
            {lang === 'bn' ? 'পদার্থ, রসায়ন, গণিত, উচ্চতর গণিত, জীব' : 'Physics, Chem, Math, HM, Bio'}
          </p>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-900/60 border border-slate-800 rounded-2xl">
        <div className="text-xs text-slate-300 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>
            {lang === 'bn'
              ? 'নিচের প্রতিটি বিষয়ের কার্ড থেকে সরাসরি অধ্যায় টিক দিন। তথ্য স্বয়ংক্রিয়ভাবে আপনার ব্রাউজারে সংরক্ষিত হয়।'
              : 'Toggle completed chapters directly from subject cards below. Progress is saved locally.'}
          </span>
        </div>
        {completedAllChapters > 0 && (
          <button
            onClick={resetAllProgress}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-red-950/50 text-slate-400 hover:text-red-300 text-xs font-semibold border border-slate-700 transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'সমস্ত প্রগ্রেস রিসেট করুন' : 'Reset All Progress'}</span>
          </button>
        )}
      </div>

      {/* Per-Subject Detailed Cards */}
      <div className="space-y-6">
        {SUBJECTS_CONFIG.map((sub) => {
          const completedList = progressState[sub.id] || [];
          const totalCount = sub.chapters.length;
          const doneCount = completedList.filter((id) => sub.chapters.some((c) => c.id === id)).length;
          const percent = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;
          const toolUrl = lang === 'bn' ? sub.toolUrlBn : sub.toolUrlEn;

          return (
            <div
              key={sub.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl hover:border-slate-700 transition"
            >
              {/* Subject Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl p-2.5 rounded-2xl bg-slate-950 border border-slate-800">
                    {sub.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-bold text-white">
                        {lang === 'bn' ? sub.nameBn : sub.nameEn}
                      </h2>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${sub.badgeBg} ${sub.badgeText}`}>
                        {doneCount}/{totalCount} ({percent}%)
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {percent === 100
                        ? (lang === 'bn' ? '🎉 সম্পূর্ণ সিলেবাস রিভাইজড!' : '🎉 Syllabus 100% Completed!')
                        : (lang === 'bn' ? `${totalCount - doneCount}টি অধ্যায় বাকি আছে` : `${totalCount - doneCount} chapters remaining`)}
                    </p>
                  </div>
                </div>

                {/* Direct Link to Subject Calculator */}
                <a
                  href={toolUrl}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition"
                >
                  <span>{lang === 'bn' ? 'ক্যালকুলেটর খুলুন' : 'Open Calculator'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800/80">
                <div
                  className={`h-full bg-gradient-to-r ${sub.color} transition-all duration-500`}
                  style={{ width: `${percent}%` }}
                />
              </div>

              {/* Chapter Checkbox Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-1">
                {sub.chapters.map((ch) => {
                  const isDone = completedList.includes(ch.id);
                  return (
                    <button
                      key={ch.id}
                      onClick={() => toggleChapter(sub.id, ch.id)}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl text-left text-xs transition border cursor-pointer ${
                        isDone
                          ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                          : 'bg-slate-950/60 hover:bg-slate-800/60 border-slate-800 text-slate-300'
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                      <span className={`truncate text-[11px] ${isDone ? 'line-through text-slate-400' : 'font-medium'}`}>
                        {ch.num ? `${ch.num}. ` : ''}{lang === 'bn' ? ch.nameBn : ch.nameEn}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
