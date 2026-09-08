import React, { useState } from 'react';
import {
  ELEMENTS,
  ELEMENT_LIST,
  type ElementData,
  type ElementCategory,
  type ElementBlock,
  type ElementState,
} from '../../tools/molar-mass/elements';
import {
  Sparkles,
  Filter,
  Search,
  Zap,
  Award,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  X,
  Layers,
} from 'lucide-react';

interface Props {
  lang?: 'en' | 'bn';
}

type ViewMode =
  | 'category'
  | 'block'
  | 'state'
  | 'electronegativity'
  | 'atomicRadius'
  | 'ionizationEnergy';

interface QuizQuestion {
  id: number;
  questionBn: string;
  questionEn: string;
  optionsBn: string[];
  optionsEn: string[];
  correctIndex: number;
  explanationBn: string;
  explanationEn: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    questionBn: 'পর্যায় সারণির কোন মৌলটির তড়িৎ ঋণাত্মকতা (Electronegativity) সবচেয়ে বেশি?',
    questionEn: 'Which element in the periodic table has the highest electronegativity?',
    optionsBn: ['ক্লোরিন (Cl)', 'ফ্লোরিন (F)', 'অক্সিজেন (O)', 'হিলিয়াম (He)'],
    optionsEn: ['Chlorine (Cl)', 'Fluorine (F)', 'Oxygen (O)', 'Helium (He)'],
    correctIndex: 1,
    explanationBn: 'পাউলিং স্কেলে ফ্লোরিনের (F) তড়িৎ ঋণাত্মকতা সর্বাধিক ৩.৯৮।',
    explanationEn: 'Fluorine (F) has the highest Pauling electronegativity at 3.98.',
  },
  {
    id: 2,
    questionBn: 'পটাশিয়াম (K) এর ল্যাটিন নাম নিচের কোনটি?',
    questionEn: 'What is the Latin name of Potassium (K)?',
    optionsBn: ['Natrium', 'Kalium', 'Ferrum', 'Plumbum'],
    optionsEn: ['Natrium', 'Kalium', 'Ferrum', 'Plumbum'],
    correctIndex: 1,
    explanationBn: 'পটাশিয়ামের ল্যাটিন নাম Kalium, যা থেকে এর প্রতীক K এসেছে।',
    explanationEn: 'The Latin name of Potassium is Kalium, which gives it the symbol K.',
  },
  {
    id: 3,
    questionBn: 'কক্ষ তাপমাত্রায় (STP) তরল অবস্থায় থাকে কোন অধাতুটি?',
    questionEn: 'Which nonmetal exists as a liquid at room temperature (STP)?',
    optionsBn: ['মার্কারি (Hg)', 'ব্রোমিন (Br)', 'আয়োডিন (I)', 'ক্লোরিন (Cl)'],
    optionsEn: ['Mercury (Hg)', 'Bromine (Br)', 'Iodine (I)', 'Chlorine (Cl)'],
    correctIndex: 1,
    explanationBn: 'অধাতুর মধ্যে ব্রোমিন (Br) তরল; আর ধাতুর মধ্যে পারদ (Hg) তরল।',
    explanationEn: 'Bromine (Br) is the only liquid nonmetal at STP; Mercury (Hg) is a liquid metal.',
  },
  {
    id: 4,
    questionBn: 'ক্রোমিয়াম (Cr, Z=24) এর সঠিক ইলেকট্রন বিন্যাস কোনটি?',
    questionEn: 'What is the correct ground-state electron configuration of Chromium (Cr, Z=24)?',
    optionsBn: ['[Ar] 3d⁴ 4s²', '[Ar] 3d⁵ 4s¹', '[Ar] 3d⁶ 4s⁰', '[Ar] 3d³ 4s² 4p¹'],
    optionsEn: ['[Ar] 3d⁴ 4s²', '[Ar] 3d⁵ 4s¹', '[Ar] 3d⁶ 4s⁰', '[Ar] 3d³ 4s² 4p¹'],
    correctIndex: 1,
    explanationBn: 'd-অরবিটাল অর্ধপূর্ণ (d⁵) অবস্থায় অধিক স্থিতিশীল বিধায় আউফবাউ নীতির ব্যতিক্রম ঘটে [Ar] 3d⁵ 4s¹ হয়।',
    explanationEn: 'The half-filled d⁵ subshell provides extra stability, creating the Aufbau exception [Ar] 3d⁵ 4s¹.',
  },
  {
    id: 5,
    questionBn: 'নিচের কোন মৌলটি মুদ্রা ধাতু (Coinage Metal) হিসেবে পরিচিত?',
    questionEn: 'Which of the following is known as a Coinage Metal?',
    optionsBn: ['সোডিয়াম (Na)', 'কপার (Cu)', 'ক্যালসিয়াম (Ca)', 'অ্যালুমিনিয়াম (Al)'],
    optionsEn: ['Sodium (Na)', 'Copper (Cu)', 'Calcium (Ca)', 'Aluminum (Al)'],
    correctIndex: 1,
    explanationBn: 'গ্রুপ ১১ এর কপার (Cu), সিলভার (Ag), এবং গোল্ড (Au) ঐতিহ্যগতভাবে মুদ্রা ধাতু হিসেবে পরিচিত।',
    explanationEn: 'Group 11 elements Copper (Cu), Silver (Ag), and Gold (Au) are historically known as coinage metals.',
  },
  {
    id: 6,
    questionBn: 'পর্যায় সারণির ১ম আয়নীকরণ শক্তি (1st Ionization Energy) সবচেয়ে বেশি কোনটির?',
    questionEn: 'Which element possesses the highest first ionization energy?',
    optionsBn: ['হাইড্রোজেন (H)', 'ফ্লোরিন (F)', 'হিলিয়াম (He)', 'নিয়ন (Ne)'],
    optionsEn: ['Hydrogen (H)', 'Fluorine (F)', 'Helium (He)', 'Neon (Ne)'],
    correctIndex: 2,
    explanationBn: 'হিলিয়ামের (He) ইলেকট্রন বিন্যাস 1s² পূর্ণ এবং নিউক্লিয়াসের অত্যন্ত কাছে হওয়ায় এর আয়নীকরণ শক্তি সর্বাধিক (২৩৭২ kJ/mol)।',
    explanationEn: 'Helium (He) has a fully saturated 1s² duet close to the nucleus, giving it the highest ionization energy (2372 kJ/mol).',
  },
  {
    id: 7,
    questionBn: 'লেড বা সীসা (Pb) এর ল্যাটিন নাম কোনটি?',
    questionEn: 'What is the Latin name of Lead (Pb)?',
    optionsBn: ['Stannum', 'Stibium', 'Plumbum', 'Hydrargyrum'],
    optionsEn: ['Stannum', 'Stibium', 'Plumbum', 'Hydrargyrum'],
    correctIndex: 2,
    explanationBn: 'সীসার ল্যাটিন নাম Plumbum, যা থেকে প্রতীক Pb এসেছে।',
    explanationEn: 'The Latin name of Lead is Plumbum, hence the symbol Pb.',
  },
  {
    id: 8,
    questionBn: 'মৌলসমূহের মধ্যে নিষ্ক্রিয় গ্যাসগুলো (Noble Gases) পর্যায় সারণির কোন গ্রুপে অবস্থিত?',
    questionEn: 'In which group of the periodic table are noble gases located?',
    optionsBn: ['গ্রুপ ১', 'গ্রুপ ২', 'গ্রুপ ১৭', 'গ্রুপ ১৮'],
    optionsEn: ['Group 1', 'Group 2', 'Group 17', 'Group 18'],
    correctIndex: 3,
    explanationBn: 'গ্রুপ ১৮ এর মৌলগুলো (He, Ne, Ar, Kr, Xe, Rn, Og) নিষ্ক্রিয় গ্যাস হিসেবে পরিচিত।',
    explanationEn: 'Group 18 elements (He, Ne, Ar, Kr, Xe, Rn, Og) are the noble gases with stable octets/duet.',
  },
];

const CATEGORY_COLORS: Record<ElementCategory, { bg: string; border: string; text: string; labelBn: string; labelEn: string }> = {
  'alkali-metal': {
    bg: 'bg-rose-500/20 hover:bg-rose-500/30',
    border: 'border-rose-500/50',
    text: 'text-rose-300',
    labelBn: 'ক্ষার ধাতু',
    labelEn: 'Alkali Metal',
  },
  'alkaline-earth': {
    bg: 'bg-amber-500/20 hover:bg-amber-500/30',
    border: 'border-amber-500/50',
    text: 'text-amber-300',
    labelBn: 'মৃৎক্ষার ধাতু',
    labelEn: 'Alkaline Earth',
  },
  'transition-metal': {
    bg: 'bg-blue-500/20 hover:bg-blue-500/30',
    border: 'border-blue-500/50',
    text: 'text-blue-300',
    labelBn: 'অবস্থান্তর ধাতু',
    labelEn: 'Transition Metal',
  },
  'post-transition-metal': {
    bg: 'bg-emerald-500/20 hover:bg-emerald-500/30',
    border: 'border-emerald-500/50',
    text: 'text-emerald-300',
    labelBn: 'পরবর্তী অবস্থান্তর ধাতু',
    labelEn: 'Post-Transition',
  },
  'metalloid': {
    bg: 'bg-teal-500/20 hover:bg-teal-500/30',
    border: 'border-teal-500/50',
    text: 'text-teal-300',
    labelBn: 'উপধাতু (অপধাতু)',
    labelEn: 'Metalloid',
  },
  'reactive-nonmetal': {
    bg: 'bg-lime-500/20 hover:bg-lime-500/30',
    border: 'border-lime-500/50',
    text: 'text-lime-300',
    labelBn: 'সক্রিয় অধাতু',
    labelEn: 'Reactive Nonmetal',
  },
  'noble-gas': {
    bg: 'bg-indigo-500/20 hover:bg-indigo-500/30',
    border: 'border-indigo-500/50',
    text: 'text-indigo-300',
    labelBn: 'নিষ্ক্রিয় গ্যাস',
    labelEn: 'Noble Gas',
  },
  'lanthanide': {
    bg: 'bg-sky-500/20 hover:bg-sky-500/30',
    border: 'border-sky-500/50',
    text: 'text-sky-300',
    labelBn: 'ল্যান্থানাইড সারি',
    labelEn: 'Lanthanide',
  },
  'actinide': {
    bg: 'bg-fuchsia-500/20 hover:bg-fuchsia-500/30',
    border: 'border-fuchsia-500/50',
    text: 'text-fuchsia-300',
    labelBn: 'অ্যাক্টিনাইড সারি',
    labelEn: 'Actinide',
  },
  'unknown': {
    bg: 'bg-slate-700/30 hover:bg-slate-700/40',
    border: 'border-slate-600',
    text: 'text-slate-400',
    labelBn: 'অজানা',
    labelEn: 'Unknown',
  },
};

const BLOCK_COLORS: Record<ElementBlock, { bg: string; border: string; text: string; labelBn: string; labelEn: string }> = {
  s: {
    bg: 'bg-red-500/20 hover:bg-red-500/30',
    border: 'border-red-500/50',
    text: 'text-red-300',
    labelBn: 's-ব্লক (গ্রুপ ১, ২, He)',
    labelEn: 's-Block (Groups 1, 2, He)',
  },
  p: {
    bg: 'bg-yellow-500/20 hover:bg-yellow-500/30',
    border: 'border-yellow-500/50',
    text: 'text-yellow-300',
    labelBn: 'p-ব্লক (গ্রুপ ১৩-১৮)',
    labelEn: 'p-Block (Groups 13-18)',
  },
  d: {
    bg: 'bg-blue-500/20 hover:bg-blue-500/30',
    border: 'border-blue-500/50',
    text: 'text-blue-300',
    labelBn: 'd-ব্লক (গ্রুপ ৩-১২)',
    labelEn: 'd-Block (Groups 3-12)',
  },
  f: {
    bg: 'bg-emerald-500/20 hover:bg-emerald-500/30',
    border: 'border-emerald-500/50',
    text: 'text-emerald-300',
    labelBn: 'f-ব্লক (ল্যান্থানাইড/অ্যাক্টিনাইড)',
    labelEn: 'f-Block (Lanthanides/Actinides)',
  },
};

const STATE_COLORS: Record<ElementState, { bg: string; border: string; text: string; labelBn: string; labelEn: string }> = {
  solid: {
    bg: 'bg-slate-800/60 hover:bg-slate-700/60',
    border: 'border-slate-600',
    text: 'text-slate-200',
    labelBn: 'কঠিন (Solid)',
    labelEn: 'Solid',
  },
  liquid: {
    bg: 'bg-cyan-500/25 hover:bg-cyan-500/40',
    border: 'border-cyan-400',
    text: 'text-cyan-200',
    labelBn: 'তরল (Liquid - Hg, Br)',
    labelEn: 'Liquid (Hg, Br)',
  },
  gas: {
    bg: 'bg-violet-500/25 hover:bg-violet-500/40',
    border: 'border-violet-400',
    text: 'text-violet-200',
    labelBn: 'গ্যাসীয় (Gas)',
    labelEn: 'Gas',
  },
  synthetic: {
    bg: 'bg-zinc-800/40 hover:bg-zinc-800/60 border-dashed',
    border: 'border-zinc-500',
    text: 'text-zinc-400',
    labelBn: 'কৃত্রিম / তেজস্ক্রিয় (Synthetic)',
    labelEn: 'Synthetic / Artificial',
  },
};

export const PeriodicTableIsland: React.FC<Props> = ({ lang = 'bn' }) => {
  const [activeTab, setActiveTab] = useState<'table' | 'quiz'>('table');
  const [viewMode, setViewMode] = useState<ViewMode>('category');
  const [selectedElement, setSelectedElement] = useState<ElementData>(ELEMENTS['H']);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Special Filters
  const [examMode, setExamMode] = useState<boolean>(false); // 1-30 mode
  const [aufbauOnly, setAufbauOnly] = useState<boolean>(false); // Aufbau exceptions
  const [latinOnly, setLatinOnly] = useState<boolean>(false); // Latin name origin
  const [selectedCategory, setSelectedCategory] = useState<ElementCategory | 'all'>('all');
  const [selectedBlock, setSelectedBlock] = useState<ElementBlock | 'all'>('all');

  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  // Filter logic
  const isElementHighlighted = (el: ElementData): boolean => {
    if (examMode && el.atomicNumber > 30) return false;
    if (aufbauOnly && !el.isAufbauException) return false;
    if (latinOnly && !el.latinName) return false;
    if (selectedCategory !== 'all' && el.category !== selectedCategory) return false;
    if (selectedBlock !== 'all' && el.block !== selectedBlock) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchSymbol = el.symbol.toLowerCase().includes(q);
      const matchEn = el.nameEn.toLowerCase().includes(q);
      const matchBn = el.nameBn.includes(q);
      const matchZ = el.atomicNumber.toString() === q;
      const matchLatin = el.latinName?.toLowerCase().includes(q) || false;
      return matchSymbol || matchEn || matchBn || matchZ || matchLatin;
    }

    return true;
  };

  const getElementStyling = (el: ElementData) => {
    const isSelected = selectedElement.symbol === el.symbol;
    const highlighted = isElementHighlighted(el);

    if (!highlighted) {
      return {
        bg: 'bg-slate-950/30 opacity-20 cursor-pointer',
        border: 'border-slate-800/40',
        text: 'text-slate-600',
      };
    }

    if (viewMode === 'block' && el.block) {
      const bStyle = BLOCK_COLORS[el.block];
      return {
        bg: isSelected ? 'bg-cyan-500/40 ring-2 ring-cyan-400 scale-105 z-10' : bStyle.bg,
        border: isSelected ? 'border-cyan-400' : bStyle.border,
        text: bStyle.text,
      };
    }

    if (viewMode === 'state' && el.state) {
      const sStyle = STATE_COLORS[el.state];
      return {
        bg: isSelected ? 'bg-cyan-500/40 ring-2 ring-cyan-400 scale-105 z-10' : sStyle.bg,
        border: isSelected ? 'border-cyan-400' : sStyle.border,
        text: sStyle.text,
      };
    }

    if (viewMode === 'electronegativity') {
      const en = el.electronegativity;
      let bgClass = 'bg-slate-800/40';
      let borderClass = 'border-slate-700';
      let textClass = 'text-slate-400';

      if (en !== undefined) {
        if (en < 1.2) {
          bgClass = 'bg-blue-900/40';
          borderClass = 'border-blue-700/60';
          textClass = 'text-blue-300';
        } else if (en < 1.8) {
          bgClass = 'bg-cyan-900/40';
          borderClass = 'border-cyan-600/60';
          textClass = 'text-cyan-300';
        } else if (en < 2.3) {
          bgClass = 'bg-emerald-900/40';
          borderClass = 'border-emerald-600/60';
          textClass = 'text-emerald-300';
        } else if (en < 2.8) {
          bgClass = 'bg-amber-900/40';
          borderClass = 'border-amber-600/60';
          textClass = 'text-amber-300';
        } else {
          bgClass = 'bg-rose-900/50';
          borderClass = 'border-rose-500';
          textClass = 'text-rose-200';
        }
      }
      return {
        bg: isSelected ? 'ring-2 ring-cyan-400 scale-105 z-10 ' + bgClass : bgClass,
        border: isSelected ? 'border-cyan-400' : borderClass,
        text: textClass,
      };
    }

    if (viewMode === 'atomicRadius') {
      const rad = el.atomicRadius;
      let bgClass = 'bg-slate-800/40';
      let borderClass = 'border-slate-700';
      let textClass = 'text-slate-400';

      if (rad !== undefined) {
        if (rad < 70) {
          bgClass = 'bg-sky-950/50';
          borderClass = 'border-sky-800';
          textClass = 'text-sky-300';
        } else if (rad < 130) {
          bgClass = 'bg-teal-900/40';
          borderClass = 'border-teal-700';
          textClass = 'text-teal-300';
        } else if (rad < 180) {
          bgClass = 'bg-indigo-900/40';
          borderClass = 'border-indigo-600';
          textClass = 'text-indigo-300';
        } else if (rad < 220) {
          bgClass = 'bg-purple-900/40';
          borderClass = 'border-purple-600';
          textClass = 'text-purple-300';
        } else {
          bgClass = 'bg-pink-900/50';
          borderClass = 'border-pink-500';
          textClass = 'text-pink-200';
        }
      }
      return {
        bg: isSelected ? 'ring-2 ring-cyan-400 scale-105 z-10 ' + bgClass : bgClass,
        border: isSelected ? 'border-cyan-400' : borderClass,
        text: textClass,
      };
    }

    if (viewMode === 'ionizationEnergy') {
      const ie = el.ionizationEnergy;
      let bgClass = 'bg-slate-800/40';
      let borderClass = 'border-slate-700';
      let textClass = 'text-slate-400';

      if (ie !== undefined) {
        if (ie < 550) {
          bgClass = 'bg-emerald-950/50';
          borderClass = 'border-emerald-800';
          textClass = 'text-emerald-300';
        } else if (ie < 800) {
          bgClass = 'bg-teal-900/40';
          borderClass = 'border-teal-700';
          textClass = 'text-teal-300';
        } else if (ie < 1100) {
          bgClass = 'bg-amber-900/40';
          borderClass = 'border-amber-600';
          textClass = 'text-amber-300';
        } else if (ie < 1500) {
          bgClass = 'bg-orange-900/50';
          borderClass = 'border-orange-600';
          textClass = 'text-orange-200';
        } else {
          bgClass = 'bg-red-900/60';
          borderClass = 'border-red-500';
          textClass = 'text-red-200';
        }
      }
      return {
        bg: isSelected ? 'ring-2 ring-cyan-400 scale-105 z-10 ' + bgClass : bgClass,
        border: isSelected ? 'border-cyan-400' : borderClass,
        text: textClass,
      };
    }

    // Default: category
    const cat = el.category || 'unknown';
    const cStyle = CATEGORY_COLORS[cat];
    return {
      bg: isSelected ? 'bg-cyan-500/40 ring-2 ring-cyan-400 scale-105 z-10' : cStyle.bg,
      border: isSelected ? 'border-cyan-400' : cStyle.border,
      text: cStyle.text,
    };
  };

  const handleSelectElement = (el: ElementData) => {
    setSelectedElement(el);
  };

  // Quiz Answer Handler
  const handleQuizAnswer = (optionIdx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionIdx);
    if (optionIdx === QUIZ_QUESTIONS[currentQuestionIndex].correctIndex) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    if (currentQuestionIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-4 sm:p-7 shadow-2xl space-y-6">
      {/* Tab Navigation (Periodic Table vs Board Exam Quiz) */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('table')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${
              activeTab === 'table'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            {lang === 'bn' ? '১১৮ মৌলের পর্যায় সারণি' : '118 IUPAC Periodic Table'}
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${
              activeTab === 'quiz'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Award className="w-4 h-4" />
            {lang === 'bn' ? 'পর্যায় সারণি কুইজ (SSC/HSC)' : 'Periodic Table Quiz'}
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === 'bn'
                ? 'নাম, প্রতীক বা পারমাণবিক সংখ্যা...'
                : 'Search element, symbol, or Z...'
            }
            className="w-full pl-9 pr-3 py-1.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {activeTab === 'table' && (
        <div className="space-y-6">
          {/* Controls Bar: View Modes & Filters */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
            {/* View Modes */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                {lang === 'bn' ? 'প্রদর্শন মোড (View Mode):' : 'Display Mode:'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'category', bn: 'শ্রেণি (Category)', en: 'Category' },
                  { id: 'block', bn: 'ব্লক (s, p, d, f)', en: 'Block' },
                  { id: 'state', bn: 'ভৌত অবস্থা (STP)', en: 'State' },
                  { id: 'electronegativity', bn: 'তড়িৎ ঋণাত্মকতা', en: 'Electronegativity' },
                  { id: 'atomicRadius', bn: 'পারমাণবিক ব্যাসার্ধ', en: 'Atomic Radius' },
                  { id: 'ionizationEnergy', bn: '১ম আয়নীকরণ শক্তি', en: 'Ionization Energy' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setViewMode(item.id as ViewMode)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition ${
                      viewMode === item.id
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    {lang === 'bn' ? item.bn : item.en}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick High-Yield Filters */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-amber-400" />
                {lang === 'bn' ? 'পরীক্ষা ও সিলেবাস ফিল্টার:' : 'Exam & Syllabus Presets:'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setExamMode(!examMode)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition ${
                    examMode
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-semibold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {lang === 'bn' ? 'বোর্ড পরীক্ষা (১-৩০)' : 'Board Exam (Z 1-30)'}
                </button>

                <button
                  onClick={() => setAufbauOnly(!aufbauOnly)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition ${
                    aufbauOnly
                      ? 'bg-rose-500/20 border-rose-400 text-rose-300 font-semibold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {lang === 'bn' ? 'আউফবাউ ব্যতিক্রম (Cr, Cu...)' : 'Aufbau Exceptions'}
                </button>

                <button
                  onClick={() => setLatinOnly(!latinOnly)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition ${
                    latinOnly
                      ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300 font-semibold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {lang === 'bn' ? 'ল্যাটিন নামযুক্ত মৌল' : 'Latin Names (Na, Fe...)'}
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Legend Bar */}
          <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-2xl">
            <div className="text-[11px] text-slate-400 mb-2 flex items-center justify-between">
              <span>{lang === 'bn' ? 'রঙিন নির্দেশিকা (ফিল্টার করতে ক্লিক করুন):' : 'Color Legend (click to filter):'}</span>
              {(selectedCategory !== 'all' || selectedBlock !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedBlock('all');
                  }}
                  className="text-cyan-400 hover:underline flex items-center gap-1 text-[10px]"
                >
                  <RotateCcw className="w-3 h-3" />
                  {lang === 'bn' ? 'সব রিসেট' : 'Reset all'}
                </button>
              )}
            </div>

            {viewMode === 'category' && (
              <div className="flex flex-wrap gap-1.5">
                {(Object.keys(CATEGORY_COLORS) as ElementCategory[])
                  .filter((cat) => cat !== 'unknown')
                  .map((cat) => {
                    const c = CATEGORY_COLORS[cat];
                    const isFiltered = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() =>
                          setSelectedCategory(selectedCategory === cat ? 'all' : cat)
                        }
                        className={`px-2 py-0.5 rounded-md text-[10px] font-medium border transition flex items-center gap-1.5 ${
                          c.bg
                        } ${c.border} ${c.text} ${
                          isFiltered ? 'ring-2 ring-white font-bold' : 'opacity-85 hover:opacity-100'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                        {lang === 'bn' ? c.labelBn : c.labelEn}
                      </button>
                    );
                  })}
              </div>
            )}

            {viewMode === 'block' && (
              <div className="flex flex-wrap gap-2">
                {(Object.keys(BLOCK_COLORS) as ElementBlock[]).map((blk) => {
                  const b = BLOCK_COLORS[blk];
                  const isFiltered = selectedBlock === blk;
                  return (
                    <button
                      key={blk}
                      onClick={() => setSelectedBlock(selectedBlock === blk ? 'all' : blk)}
                      className={`px-3 py-1 rounded-md text-xs font-semibold border transition ${
                        b.bg
                      } ${b.border} ${b.text} ${
                        isFiltered ? 'ring-2 ring-white font-bold' : 'opacity-85 hover:opacity-100'
                      }`}
                    >
                      {lang === 'bn' ? b.labelBn : b.labelEn}
                    </button>
                  );
                })}
              </div>
            )}

            {viewMode === 'state' && (
              <div className="flex flex-wrap gap-2">
                {(Object.keys(STATE_COLORS) as ElementState[]).map((st) => {
                  const s = STATE_COLORS[st];
                  return (
                    <div
                      key={st}
                      className={`px-2.5 py-0.5 rounded-md text-[11px] font-medium border ${s.bg} ${s.border} ${s.text}`}
                    >
                      {lang === 'bn' ? s.labelBn : s.labelEn}
                    </div>
                  );
                })}
              </div>
            )}

            {viewMode === 'electronegativity' && (
              <div className="flex items-center gap-2 text-[11px] text-slate-300">
                <span>{lang === 'bn' ? 'কম (০.৭)' : 'Low (0.7)'}</span>
                <div className="flex-1 h-3 rounded-full bg-gradient-to-r from-blue-700 via-emerald-600 via-amber-500 to-rose-600 border border-slate-700"></div>
                <span>{lang === 'bn' ? 'বেশি (ফ্লোরিন ৩.৯৮)' : 'High (Fluorine 3.98)'}</span>
              </div>
            )}

            {viewMode === 'atomicRadius' && (
              <div className="flex items-center gap-2 text-[11px] text-slate-300">
                <span>{lang === 'bn' ? 'ক্ষুদ্র (৩১ pm)' : 'Small (31 pm)'}</span>
                <div className="flex-1 h-3 rounded-full bg-gradient-to-r from-sky-800 via-teal-700 via-indigo-600 to-pink-600 border border-slate-700"></div>
                <span>{lang === 'bn' ? 'বৃহৎ (২৯৮ pm)' : 'Large (298 pm)'}</span>
              </div>
            )}

            {viewMode === 'ionizationEnergy' && (
              <div className="flex items-center gap-2 text-[11px] text-slate-300">
                <span>{lang === 'bn' ? 'কম (৩৭৬ kJ/mol)' : 'Low (376 kJ/mol)'}</span>
                <div className="flex-1 h-3 rounded-full bg-gradient-to-r from-emerald-800 via-teal-600 via-amber-500 to-red-600 border border-slate-700"></div>
                <span>{lang === 'bn' ? 'সর্বোচ্চ (হিলিয়াম ২৩৭২ kJ/mol)' : 'High (Helium 2372 kJ/mol)'}</span>
              </div>
            )}
          </div>

          {/* 18-Column IUPAC Periodic Table Grid */}
          <div className="overflow-x-auto pb-4 pt-1">
            <div className="min-w-[880px]">
              {/* Group Numbers Header (1-18) */}
              <div className="grid grid-cols-18 gap-1 mb-1 text-center font-mono text-[9px] sm:text-[10px] text-slate-500">
                {Array.from({ length: 18 }, (_, i) => i + 1).map((col) => (
                  <div key={col} className="p-0.5">
                    {col}
                  </div>
                ))}
              </div>

              {/* Periods 1 to 7 Grid */}
              <div className="grid grid-cols-18 gap-1.5">
                {ELEMENT_LIST.map((el) => {
                  const style = getElementStyling(el);
                  const isSelected = selectedElement.symbol === el.symbol;

                  const rowStyle = el.gridRow ? { gridRowStart: el.gridRow } : {};
                  const colStyle = el.gridCol ? { gridColumnStart: el.gridCol } : {};

                  return (
                    <button
                      key={el.symbol}
                      onClick={() => handleSelectElement(el)}
                      style={{ ...rowStyle, ...colStyle }}
                      className={`relative p-1 rounded-lg border text-center transition-all flex flex-col items-center justify-between aspect-square group ${
                        style.bg
                      } ${style.border} ${
                        isSelected ? 'ring-2 ring-cyan-400 z-10 shadow-lg scale-105' : ''
                      }`}
                    >
                      {/* Atomic Number */}
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 group-hover:text-white leading-none self-start">
                        {el.atomicNumber}
                      </span>

                      {/* Chemical Symbol */}
                      <span className={`text-xs sm:text-sm font-extrabold font-mono tracking-tight leading-none ${style.text}`}>
                        {el.symbol}
                      </span>

                      {/* Display metric based on viewMode or Bengali name */}
                      <span className="text-[8px] sm:text-[9px] font-mono truncate w-full text-slate-400 group-hover:text-slate-200 leading-none">
                        {viewMode === 'electronegativity' && el.electronegativity !== undefined
                          ? el.electronegativity
                          : viewMode === 'atomicRadius' && el.atomicRadius !== undefined
                          ? `${el.atomicRadius}pm`
                          : viewMode === 'ionizationEnergy' && el.ionizationEnergy !== undefined
                          ? `${el.ionizationEnergy}`
                          : lang === 'bn'
                          ? el.nameBn
                          : el.nameEn}
                      </span>

                      {/* Tiny Indicator for Aufbau Exception */}
                      {el.isAufbauException && (
                        <span
                          title="Aufbau exception"
                          className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400"
                        ></span>
                      )}
                    </button>
                  );
                })}

                {/* Lanthanides indicator button in Period 6, Col 3 */}
                <div
                  style={{ gridRowStart: 6, gridColumnStart: 3 }}
                  className="rounded-lg border border-sky-500/40 bg-sky-950/30 p-1 flex flex-col items-center justify-center text-center aspect-square"
                >
                  <span className="text-[8px] sm:text-[9px] font-bold text-sky-300">57-71</span>
                  <span className="text-[8px] sm:text-[9px] text-sky-400 font-mono">* La-Lu</span>
                </div>

                {/* Actinides indicator button in Period 7, Col 3 */}
                <div
                  style={{ gridRowStart: 7, gridColumnStart: 3 }}
                  className="rounded-lg border border-fuchsia-500/40 bg-fuchsia-950/30 p-1 flex flex-col items-center justify-center text-center aspect-square"
                >
                  <span className="text-[8px] sm:text-[9px] font-bold text-fuchsia-300">89-103</span>
                  <span className="text-[8px] sm:text-[9px] text-fuchsia-400 font-mono">** Ac-Lr</span>
                </div>

                {/* Spacer between main table and f-block */}
                <div
                  style={{ gridRowStart: 8, gridColumnStart: 1, gridColumnEnd: 19 }}
                  className="h-3 flex items-center justify-center"
                >
                  <div className="w-full border-t border-dashed border-slate-800/80"></div>
                </div>

                {/* Row 9 Label (* Lanthanide Series) */}
                <div
                  style={{ gridRowStart: 9, gridColumnStart: 1, gridColumnEnd: 4 }}
                  className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-sky-300 pr-2"
                >
                  <span>*</span>
                  <span>{lang === 'bn' ? 'ল্যান্থানাইড সারি' : 'Lanthanides'}</span>
                  <span className="text-[9px] text-slate-500 font-mono">(57-71)</span>
                </div>

                {/* Row 10 Label (** Actinide Series) */}
                <div
                  style={{ gridRowStart: 10, gridColumnStart: 1, gridColumnEnd: 4 }}
                  className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-fuchsia-300 pr-2"
                >
                  <span>**</span>
                  <span>{lang === 'bn' ? 'অ্যাক্টিনাইড সারি' : 'Actinides'}</span>
                  <span className="text-[9px] text-slate-500 font-mono">(89-103)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Element Detail Hero Card / Inspector */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              {/* Left: Element Badge & Core Identity */}
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-cyan-500/10 border-2 border-cyan-400 flex flex-col items-center justify-center text-cyan-300 font-mono shadow-inner">
                  <span className="text-xs text-slate-400">Z = {selectedElement.atomicNumber}</span>
                  <span className="text-3xl sm:text-4xl font-black tracking-tight">{selectedElement.symbol}</span>
                  <span className="text-[10px] text-slate-300">{selectedElement.atomicMass}</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {lang === 'bn' ? selectedElement.nameBn : selectedElement.nameEn}
                    </h3>
                    <span className="text-xs sm:text-sm text-slate-400 font-mono">
                      ({lang === 'bn' ? selectedElement.nameEn : selectedElement.nameBn})
                    </span>
                  </div>

                  {selectedElement.latinName && (
                    <div className="text-xs text-amber-300 flex items-center gap-1.5">
                      <span className="font-semibold">{lang === 'bn' ? 'ল্যাটিন নাম:' : 'Latin Origin:'}</span>
                      <em className="font-serif text-amber-200">{selectedElement.latinName}</em>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {lang === 'bn' ? 'পর্যায়:' : 'Period:'} <strong className="text-white">{selectedElement.period}</strong>
                    </span>
                    {selectedElement.group && (
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                        {lang === 'bn' ? 'গ্রুপ:' : 'Group:'} <strong className="text-white">{selectedElement.group}</strong>
                      </span>
                    )}
                    {selectedElement.block && (
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                        {selectedElement.block}-block
                      </span>
                    )}
                    {selectedElement.category && (
                      <span
                        className={`px-2.5 py-0.5 rounded-md border text-[11px] font-medium ${
                          CATEGORY_COLORS[selectedElement.category]?.bg || ''
                        } ${CATEGORY_COLORS[selectedElement.category]?.border || ''} ${
                          CATEGORY_COLORS[selectedElement.category]?.text || ''
                        }`}
                      >
                        {lang === 'bn'
                          ? CATEGORY_COLORS[selectedElement.category]?.labelBn
                          : CATEGORY_COLORS[selectedElement.category]?.labelEn}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Quick Action to Molar Mass Tool */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`/${lang}/tools/molar-mass?q=${selectedElement.symbol}`}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition shadow-lg"
                >
                  <Zap className="w-3.5 h-3.5" />
                  {lang === 'bn'
                    ? `${selectedElement.symbol} এর আণবিক ভর গণনা করুন`
                    : `Calculate Molar Mass with ${selectedElement.symbol}`}
                </a>
              </div>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-800/80 font-mono text-xs">
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 block uppercase">
                  {lang === 'bn' ? 'ইলেকট্রন বিন্যাস' : 'Electron Config'}
                </span>
                <span className="font-bold text-cyan-300 break-words">
                  {selectedElement.electronConfig || 'N/A'}
                </span>
                {selectedElement.isAufbauException && (
                  <span className="block text-[9px] text-amber-300 font-sans mt-0.5 font-semibold">
                    ★ আউফবাউ নীতির ব্যতিক্রম
                  </span>
                )}
              </div>

              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 block uppercase">
                  {lang === 'bn' ? 'তড়িৎ ঋণাত্মকতা (Pauling)' : 'Electronegativity'}
                </span>
                <span className="font-bold text-emerald-300 text-sm">
                  {selectedElement.electronegativity ?? '—'}
                </span>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 block uppercase">
                  {lang === 'bn' ? 'পারমাণবিক ব্যাসার্ধ' : 'Atomic Radius'}
                </span>
                <span className="font-bold text-purple-300 text-sm">
                  {selectedElement.atomicRadius ? `${selectedElement.atomicRadius} pm` : '—'}
                </span>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 block uppercase">
                  {lang === 'bn' ? '১ম আয়নীকরণ শক্তি' : '1st Ionization Energy'}
                </span>
                <span className="font-bold text-amber-300 text-sm">
                  {selectedElement.ionizationEnergy ? `${selectedElement.ionizationEnergy} kJ/mol` : '—'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Periodic Table Quiz Mini-Game Tab */}
      {activeTab === 'quiz' && (
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 max-w-3xl mx-auto">
          {!quizFinished ? (
            <div className="space-y-6">
              {/* Quiz Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40">
                    {lang === 'bn' ? 'প্রশ্ন' : 'Question'} {currentQuestionIndex + 1} /{' '}
                    {QUIZ_QUESTIONS.length}
                  </span>
                  <span className="text-xs text-slate-400">
                    {lang === 'bn' ? 'স্কোর:' : 'Score:'}{' '}
                    <strong className="text-cyan-400">{quizScore}</strong>
                  </span>
                </div>

                <button
                  onClick={resetQuiz}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  {lang === 'bn' ? 'পুনরায় শুরু' : 'Restart'}
                </button>
              </div>

              {/* Current Question */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {lang === 'bn'
                    ? QUIZ_QUESTIONS[currentQuestionIndex].questionBn
                    : QUIZ_QUESTIONS[currentQuestionIndex].questionEn}
                </h3>

                {/* Options List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(lang === 'bn'
                    ? QUIZ_QUESTIONS[currentQuestionIndex].optionsBn
                    : QUIZ_QUESTIONS[currentQuestionIndex].optionsEn
                  ).map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect =
                      selectedOption !== null &&
                      idx === QUIZ_QUESTIONS[currentQuestionIndex].correctIndex;
                    const isWrong = isSelected && !isCorrect;

                    let btnStyle = 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-850 hover:border-slate-700';

                    if (selectedOption !== null) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 ring-2 ring-emerald-400';
                      } else if (isWrong) {
                        btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-300';
                      } else {
                        btnStyle = 'bg-slate-900/40 border-slate-800 text-slate-500';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleQuizAnswer(idx)}
                        disabled={selectedOption !== null}
                        className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{option}</span>
                        {selectedOption !== null && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        )}
                        {selectedOption !== null && isWrong && (
                          <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Explanation & Next Button */}
              {selectedOption !== null && (
                <div className="p-4 bg-slate-900 border border-slate-700 rounded-2xl space-y-3">
                  <div className="flex items-start gap-2 text-xs">
                    <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-cyan-300 block mb-1">
                        {lang === 'bn' ? 'ব্যাখ্যা ও সমাধান:' : 'Explanation & Solution:'}
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {lang === 'bn'
                          ? QUIZ_QUESTIONS[currentQuestionIndex].explanationBn
                          : QUIZ_QUESTIONS[currentQuestionIndex].explanationEn}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleNextQuizQuestion}
                      className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition"
                    >
                      <span>
                        {currentQuestionIndex + 1 === QUIZ_QUESTIONS.length
                          ? lang === 'bn'
                            ? 'ফলাফল দেখুন'
                            : 'See Results'
                          : lang === 'bn'
                          ? 'পরবর্তী প্রশ্ন'
                          : 'Next Question'}
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Quiz Completed View */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 text-amber-300 flex items-center justify-center mx-auto shadow-lg">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white">
                {lang === 'bn' ? 'অভিনন্দন! কুইজ সম্পন্ন হয়েছে।' : 'Congratulations! Quiz Completed.'}
              </h3>
              <p className="text-sm text-slate-300">
                {lang === 'bn' ? 'আপনার মোট স্কোর:' : 'Your Total Score:'}{' '}
                <strong className="text-cyan-400 text-lg">
                  {quizScore} / {QUIZ_QUESTIONS.length}
                </strong>
              </p>
              <div className="pt-2">
                <button
                  onClick={resetQuiz}
                  className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 transition shadow-lg"
                >
                  <RotateCcw className="w-4 h-4" />
                  {lang === 'bn' ? 'আবার পরীক্ষা দিন' : 'Take Quiz Again'}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
