import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, Calculator, BookOpen, Layers, Atom, BookMarked, ArrowRight } from 'lucide-react';

interface SearchItem {
  id: string;
  category: 'tools' | 'formulas' | 'curriculum' | 'science' | 'glossary';
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  urlBn: string;
  urlEn: string;
  icon: string;
  keywords: string[];
}

const SEARCH_CATALOG: SearchItem[] = [
  // Tools
  {
    id: 'tool-physics',
    category: 'tools',
    titleBn: 'পদার্থবিজ্ঞান ক্যালকুলেটর',
    titleEn: 'Physics Solver (13 Chapters)',
    descBn: 'গতিবিদ্যা, বল, কাজ-শক্তি, চাপ, তরঙ্গ, আলো ও চলতড়িৎ',
    descEn: 'Kinematics, dynamics, work-energy, fluid pressure, optics, electricity',
    urlBn: '/bn/tools/physics/',
    urlEn: '/en/tools/physics/',
    icon: '⚡',
    keywords: ['physics', 'motion', 'force', 'energy', 'velocity', 'acceleration', 'ohm', 'sound', 'light', 'f=ma', 'পদার্থবিজ্ঞান', 'গতি', 'বল', 'শক্তি', 'আলো'],
  },
  {
    id: 'tool-chemistry',
    category: 'tools',
    titleBn: 'রসায়ন ক্যালকুলেটর',
    titleEn: 'Chemistry Solver (Stoichiometry & Mole)',
    descBn: 'মোল ধারণা, মোলারিটি, গ্রাহামের ব্যাপন, লিমিটিং বিক্রিয়ক ও pH',
    descEn: 'Mole concept, molarity, Graham diffusion, limiting reactant, pH',
    urlBn: '/bn/tools/chemistry/',
    urlEn: '/en/tools/chemistry/',
    icon: '⚗️',
    keywords: ['chemistry', 'mole', 'molarity', 'diffusion', 'ph', 'limiting reactant', 'রসায়ন', 'মোল', 'মোলারিটি', 'ব্যাপন'],
  },
  {
    id: 'tool-general-math',
    category: 'tools',
    titleBn: 'সাধারণ গণিত সমাধানকারী',
    titleEn: 'SSC General Math Solver',
    descBn: 'সেট, বীজগাণিতিক সূত্র, লগারিদম, ত্রিকোণমিতি, পরিমিতি ও পরিসংখ্যান',
    descEn: 'Sets, algebraic identities, logarithms, trigonometry, statistics',
    urlBn: '/bn/tools/general-math/',
    urlEn: '/en/tools/general-math/',
    icon: '➕',
    keywords: ['general math', 'statistics', 'mean', 'median', 'mode', 'trigonometry', 'algebra', 'গণিত', 'পরিসংখ্যান', 'ত্রিকোণমিতি', 'পরিমিতি'],
  },
  {
    id: 'tool-higher-math',
    category: 'tools',
    titleBn: 'উচ্চতর গণিত ক্যালকুলেটর',
    titleEn: 'Higher Mathematics Solver',
    descBn: 'এ্যাপোলোনিওসের উপপাদ্য, ভেনচিত্র, অসীম ধারা, দ্বিপদী বিস্তৃতি ও স্থানাঙ্ক',
    descEn: 'Apollonius theorem, Venn diagrams, infinite geometric series, binomial, vectors',
    urlBn: '/bn/tools/higher-math/',
    urlEn: '/en/tools/higher-math/',
    icon: '📐',
    keywords: ['higher math', 'apollonius', 'venn', 'series', 'binomial', 'geometry', 'vector', 'উচ্চতর গণিত', 'এ্যাপোলোনিওস', 'দ্বিপদী', 'ভেক্টর'],
  },
  {
    id: 'tool-biology',
    category: 'tools',
    titleBn: 'জীববিজ্ঞান ক্যালকুলেটর',
    titleEn: 'Quantitative Biology Calculator',
    descBn: 'বিএমআই (BMI), বিএমআর (BMR), শ্বসন এটিপি (ATP) ও মেন্ডেলীয় জেনেটিক্স',
    descEn: 'BMI, BMR caloric needs, respiration ATP yield, Mendelian genetics',
    urlBn: '/bn/tools/biology/',
    urlEn: '/en/tools/biology/',
    icon: '🧬',
    keywords: ['biology', 'bmi', 'bmr', 'atp', 'genetics', 'punnett', 'blood group', 'জীববিজ্ঞান', 'বিএমআই', 'শ্বসন', 'রক্ত'],
  },
  {
    id: 'tool-molar-mass',
    category: 'tools',
    titleBn: 'মোলার ভর ও শতকরা সংযুতি',
    titleEn: 'Molar Mass Deconstructor',
    descBn: 'যৌগের সংকেত ও কেলাস পানি থেকে আণবিক ভর ও মৌলের শতকরা হার',
    descEn: 'Formula weight, hydrate deconstruction and mass percentage',
    urlBn: '/bn/tools/molar-mass/',
    urlEn: '/en/tools/molar-mass/',
    icon: '⚖️',
    keywords: ['molar mass', 'molecular weight', 'hydrate', 'percentage composition', 'মোলার ভর', 'আণবিক ভর', 'কেলাস পানি'],
  },
  {
    id: 'tool-redox-balancer',
    category: 'tools',
    titleBn: 'আয়ন-ইলেকট্রন রেডক্স সমতা',
    titleEn: 'Redox Reaction Balancer',
    descBn: 'অম্লীয় ও ক্ষারীয় মাধ্যমে জারণ-বিজারণ অর্ধবিক্রিয়া সমতাকরণ',
    descEn: 'Ion-electron half-reaction balancing in acidic and basic media',
    urlBn: '/bn/tools/redox-balancer/',
    urlEn: '/en/tools/redox-balancer/',
    icon: '⚡',
    keywords: ['redox', 'oxidation', 'reduction', 'half reaction', 'kmno4', 'k2cr2o7', 'রেডক্স', 'জারণ', 'বিজারণ', 'সমতা'],
  },
  {
    id: 'tool-projectile',
    category: 'tools',
    titleBn: 'প্রাস ও দ্বিমাত্রিক গতিবিদ্যা',
    titleEn: 'Projectile Motion Solver',
    descBn: 'পাল্লা, সর্বোচ্চ উচ্চতা, উড্ডয়নকাল ও রিয়েলটাইম গ্রাফিক্যাল ট্র্যাজেক্টরি',
    descEn: 'Max height, time of flight, range and interactive ballistics trajectory',
    urlBn: '/bn/tools/projectile-motion/',
    urlEn: '/en/tools/projectile-motion/',
    icon: '🎯',
    keywords: ['projectile', 'motion', 'range', 'trajectory', 'ballistics', 'প্রাস', 'গতিবিদ্যা', 'পাল্লা', 'উচ্চতা'],
  },
  {
    id: 'tool-quadratic',
    category: 'tools',
    titleBn: 'দ্বিঘাত সমীকরণ সমাধানকারী',
    titleEn: 'Quadratic Equation Solver',
    descBn: 'নিশ্চায়ক, মূলের প্রকৃতি এবং ax² + bx + c = 0 এর সমাধান',
    descEn: 'Discriminant analysis, real/complex roots and vertex',
    urlBn: '/bn/tools/quadratic-solver/',
    urlEn: '/en/tools/quadratic-solver/',
    icon: '📐',
    keywords: ['quadratic', 'roots', 'discriminant', 'equation', 'দ্বিঘাত সমীকরণ', 'নিশ্চায়ক', 'মূল'],
  },
  {
    id: 'tool-vector',
    category: 'tools',
    titleBn: 'ভেক্টর ৩ডি গুণন ও কোণ ক্যালকুলেটর',
    titleEn: '3D Vector Calculator',
    descBn: 'ডট গুণন, ক্রস গুণন, মধ্যবর্তী কোণ, একক ভেক্টর ও লম্ব অভিক্ষেপ',
    descEn: 'Dot product, cross product, angle between vectors, unit vector',
    urlBn: '/bn/tools/vector-calculator/',
    urlEn: '/en/tools/vector-calculator/',
    icon: '↗️',
    keywords: ['vector', 'dot product', 'cross product', 'angle', 'projection', 'ভেক্টর', 'ডট গুণন', 'ক্রস গুণন'],
  },
  {
    id: 'tool-gas-law',
    category: 'tools',
    titleBn: 'আদর্শ গ্যাস সূত্র ও গতিতত্ত্ব',
    titleEn: 'Ideal Gas Law & Diffusion',
    descBn: 'বয়েলের সূত্র, চার্লসের সূত্র ও আদর্শ গ্যাস সমীকরণ (PV = nRT)',
    descEn: 'Boyles, Charles, combined gas law and ideal gas solver',
    urlBn: '/bn/tools/gas-law-calculator/',
    urlEn: '/en/tools/gas-law-calculator/',
    icon: '💨',
    keywords: ['gas law', 'pv=nrt', 'boyle', 'charles', 'diffusion', 'গ্যাস সূত্র', 'বয়েল', 'চার্লস'],
  },
  {
    id: 'tool-dilution',
    category: 'tools',
    titleBn: 'দ্রবণ লঘুকরণ ও মোলারিটি',
    titleEn: 'Solution Dilution & Concentration',
    descBn: 'M₁V₁ = M₂V₂, W = SMV/1000 ও পিপিএম (PPM) রূপান্তর',
    descEn: 'M1V1 = M2V2, volumetric dilution and ppm concentration',
    urlBn: '/bn/tools/solution-dilution/',
    urlEn: '/en/tools/solution-dilution/',
    icon: '🧪',
    keywords: ['dilution', 'molarity', 'm1v1=m2v2', 'ppm', 'দ্রবণ', 'লঘুকরণ', 'মোলারিটি'],
  },
  {
    id: 'tool-sigfigs',
    category: 'tools',
    titleBn: 'তাৎপর্যপূর্ণ অঙ্ক নির্ণায়ক',
    titleEn: 'Significant Figures Engine',
    descBn: 'সিগনিফিকেন্ট ফিগার গোনা, বৈজ্ঞানিক রূপ ও নির্ভুল রাউন্ডিং',
    descEn: 'Significant digits counter, scientific notation and arithmetic rounding',
    urlBn: '/bn/tools/significant-figures/',
    urlEn: '/en/tools/significant-figures/',
    icon: '📏',
    keywords: ['significant figures', 'sig figs', 'rounding', 'precision', 'তাৎপর্যপূর্ণ অঙ্ক'],
  },
  {
    id: 'tool-c-runner',
    category: 'tools',
    titleBn: 'সি প্রোগ্রামিং কোড ও মেমরি ট্রেসার',
    titleEn: 'C Code Runner & Memory Tracer',
    descBn: 'লুপ ও কন্ডিশনাল কোডের ধাপে ধাপে র‍্যাম ভ্যারিয়েবল ট্রেসিং',
    descEn: 'Step-by-step RAM memory tracing for loops and conditionals',
    urlBn: '/bn/tools/c-runner/',
    urlEn: '/en/tools/c-runner/',
    icon: '💻',
    keywords: ['c programming', 'c runner', 'memory tracer', 'loop', 'hsc ict', 'সি প্রোগ্রামিং', 'আইসিটি'],
  },
  {
    id: 'tool-html-runner',
    category: 'tools',
    titleBn: 'এইচটিএমএল৫ এডিটর ও লাইভ রানার',
    titleEn: 'HTML5 Live Web Runner',
    descBn: 'ব্রাউজারেই লাইভ এইচটিএমএল কোডিং, টেবিল ও ফর্ম প্র্যাকটিস',
    descEn: 'In-browser HTML live sandbox for tables, forms and styling',
    urlBn: '/bn/tools/html-runner/',
    urlEn: '/en/tools/html-runner/',
    icon: '🌐',
    keywords: ['html', 'web design', 'live runner', 'tables', 'forms', 'এইচটিএমএল', 'ওয়েব ডিজাইন'],
  },
  {
    id: 'tool-circuits',
    category: 'tools',
    titleBn: 'ডিজিটাল লজিক সার্কিট সিমুলেটর',
    titleEn: 'Digital Logic Circuit Simulator',
    descBn: 'মৌলিক ও সার্বজনীন গেট, হাফ ও ফুল অ্যাডার ও সত্যক সারণি',
    descEn: 'Basic/universal logic gates, adders and live truth tables',
    urlBn: '/bn/tools/circuit-simulator/',
    urlEn: '/en/tools/circuit-simulator/',
    icon: '🔌',
    keywords: ['logic gates', 'and or not', 'truth table', 'half adder', 'full adder', 'লজিক গেট', 'সত্যক সারণি'],
  },
  {
    id: 'tool-database',
    category: 'tools',
    titleBn: 'রিলেশনাল ডাটাবেজ ও এসকিউএল সিমুলেটর',
    titleEn: 'Relational Database & SQL Simulator',
    descBn: 'SELECT, WHERE, ORDER BY ও JOIN কুয়েরির লাইভ সিমুলেশন',
    descEn: 'Interactive SQL query execution against relational student tables',
    urlBn: '/bn/tools/database-simulator/',
    urlEn: '/en/tools/database-simulator/',
    icon: '🗄️',
    keywords: ['sql', 'database', 'select', 'join', 'dbms', 'hsc ict', 'ডাটাবেজ', 'এসকিউএল'],
  },

  // Periodic Table
  {
    id: 'periodic-table',
    category: 'science',
    titleBn: 'ইন্টারেক্টিভ পর্যায় সারণি (১১৮টি মৌল)',
    titleEn: 'Interactive Periodic Table of Elements',
    descBn: 'খাঁটি বাংলা উচ্চারণ, ছন্দে ছন্দে মুখস্থ করার উপায় ও ইলেকট্রন বিন্যাস',
    descEn: 'Complete 118 IUPAC elements with electron subshells and properties',
    urlBn: '/bn/periodic-table/',
    urlEn: '/en/periodic-table/',
    icon: '⚛️',
    keywords: ['periodic table', 'elements', 'mendeleev', 'iupac', 'atomic number', 'পর্যায় সারণি', 'মৌল', 'ইলেকট্রন বিন্যাস', 'ছন্দ'],
  },

  // Formulas
  {
    id: 'formulas-physics',
    category: 'formulas',
    titleBn: 'পদার্থবিজ্ঞান সূত্রমালা শিট',
    titleEn: 'Physics Master Formula Sheet',
    descBn: 'এসএসসি ও এইচএসসি পদার্থবিজ্ঞানের সকল অধ্যায়ের বোর্ড সূত্রাবলী',
    descEn: 'All board equations, constant values and units for Physics',
    urlBn: '/bn/formulas/physics/',
    urlEn: '/en/formulas/physics/',
    icon: '📑',
    keywords: ['physics formula', 'formula sheet', 'equations', 'পদার্থবিজ্ঞান সূত্র', 'সূত্রমালা'],
  },
  {
    id: 'formulas-chemistry',
    category: 'formulas',
    titleBn: 'রসায়ন সূত্রমালা শিট',
    titleEn: 'Chemistry Master Formula Sheet',
    descBn: 'মোল, গ্যাস সূত্র, দ্রবণ ঘনমাত্রা ও এনথ্যালপির গাণিতিক সমীকরণ',
    descEn: 'Chemical equations, mole laws, gas laws and thermodynamics formulas',
    urlBn: '/bn/formulas/chemistry/',
    urlEn: '/en/formulas/chemistry/',
    icon: '📑',
    keywords: ['chemistry formula', 'mole formulas', 'রসায়ন সূত্র', 'সূত্রমালা'],
  },
  {
    id: 'formulas-general-math',
    category: 'formulas',
    titleBn: 'সাধারণ গণিত সূত্রমালা শিট',
    titleEn: 'General Math Master Formula Sheet',
    descBn: 'বীজগণিতীয় অভেদ, ত্রিকোণমিতি, পরিমিতি ও পরিসংখ্যানের সূত্রাবলী',
    descEn: 'Algebraic identities, trigonometry and mensuration formulas',
    urlBn: '/bn/formulas/general-math/',
    urlEn: '/en/formulas/general-math/',
    icon: '📑',
    keywords: ['math formula', 'algebra formulas', 'trig formulas', 'গণিত সূত্র', 'সূত্রমালা'],
  },
  {
    id: 'formulas-higher-math',
    category: 'formulas',
    titleBn: 'উচ্চতর গণিত সূত্রমালা শিট',
    titleEn: 'Higher Math Master Formula Sheet',
    descBn: 'স্থানাঙ্ক জ্যামিতি, এ্যাপোলোনিওস, ভেক্টর, দ্বিপদী ও ঘন জ্যামিতি',
    descEn: 'Coordinate geometry, series, binomial expansion and vector formulas',
    urlBn: '/bn/formulas/higher-math/',
    urlEn: '/en/formulas/higher-math/',
    icon: '📑',
    keywords: ['higher math formula', 'vectors formulas', 'উচ্চতর গণিত সূত্র', 'সূত্রমালা'],
  },
  {
    id: 'formulas-ict',
    category: 'formulas',
    titleBn: 'আইসিটি সূত্রমালা ও বুলিয়ান অ্যালজেবরা',
    titleEn: 'ICT & Boolean Algebra Formula Sheet',
    descBn: 'ডি মরগানের সূত্র, বুলিয়ান উপপাদ্য ও সংখ্যা পদ্ধতির রূপান্তর সূত্র',
    descEn: 'De Morgan laws, Boolean theorems and number system expansions',
    urlBn: '/bn/formulas/ict/',
    urlEn: '/en/formulas/ict/',
    icon: '📑',
    keywords: ['ict formula', 'boolean algebra', 'de morgan', 'আইসিটি সূত্র', 'বুলিয়ান'],
  },
  {
    id: 'formulas-biology',
    category: 'formulas',
    titleBn: 'জীববিজ্ঞান সংখ্যাগত সূত্রমালা',
    titleEn: 'Quantitative Biology Formula Sheet',
    descBn: 'বিএমআই, ক্যালরিক চাহিদা, এটিপি শক্তি ও ট্রফিক লেভেল সমীকরণ',
    descEn: 'BMI, BMR calories, respiration ATP yield and ecological efficiency',
    urlBn: '/bn/formulas/biology/',
    urlEn: '/en/formulas/biology/',
    icon: '📑',
    keywords: ['biology formula', 'bmi formula', 'respiration formula', 'জীববিজ্ঞান সূত্র'],
  },

  // Curriculum & Progress
  {
    id: 'my-progress',
    category: 'curriculum',
    titleBn: 'আমার রিভিশন প্রগ্রেস ড্যাশবোর্ড',
    titleEn: 'My Revision Progress Dashboard',
    descBn: 'বোর্ড পরীক্ষার অধ্যায়ভিত্তিক প্রস্তুতি চেকলিস্ট ও স্ট্রিক ট্র্যাকার',
    descEn: 'Offline-first chapter revision checklist and study streak tracker',
    urlBn: '/bn/my-progress/',
    urlEn: '/en/my-progress/',
    icon: '📊',
    keywords: ['progress', 'revision', 'tracker', 'streak', 'checklist', 'প্রগ্রেস', 'রিভিশন', 'চেকলিস্ট'],
  },
  {
    id: 'curriculum-hub',
    category: 'curriculum',
    titleBn: 'এনসিটিবি কারিকুলাম ও সিলেবাস ডিরেক্টরি',
    titleEn: 'NCTB Curriculum & Marks Distribution',
    descBn: 'এসএসসি ও এইচএসসি সকল বিষয়ের সৃজনশীল (CQ) ও MCQ নম্বর বণ্টন',
    descEn: 'Complete SSC & HSC science chapters with CQ/MCQ marks distribution',
    urlBn: '/bn/curriculum/',
    urlEn: '/en/curriculum/',
    icon: '🎓',
    keywords: ['curriculum', 'syllabus', 'marks distribution', 'cq', 'mcq', 'কারিকুলাম', 'সিলেবাস', 'নম্বর বণ্টন'],
  },
];

interface GlobalSearchProps {
  lang: 'bn' | 'en';
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ lang }) => {
  const isBn = lang === 'bn';
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Global Ctrl+K / Cmd+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Filtered search items
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return SEARCH_CATALOG.slice(0, 8); // top suggestions when empty
    }

    return SEARCH_CATALOG.filter((item) => {
      const titleMatch = (isBn ? item.titleBn : item.titleEn).toLowerCase().includes(q) ||
        (isBn ? item.titleEn : item.titleBn).toLowerCase().includes(q);
      const descMatch = (isBn ? item.descBn : item.descEn).toLowerCase().includes(q);
      const kwMatch = item.keywords.some((k) => k.toLowerCase().includes(q));
      return titleMatch || descMatch || kwMatch;
    }).slice(0, 10);
  }, [query, isBn]);

  // Handle arrow key navigation inside modal
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        const targetUrl = isBn ? filtered[selectedIndex].urlBn : filtered[selectedIndex].urlEn;
        window.location.href = targetUrl;
      }
    }
  };

  return (
    <>
      {/* Trigger Button inside Navbar */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition shadow-sm cursor-pointer"
        title={isBn ? 'অনুসন্ধান করুন (Ctrl + K)' : 'Search (Ctrl + K)'}
      >
        <Search className="w-3.5 h-3.5 text-cyan-400" />
        <span className="hidden sm:inline text-slate-300">{isBn ? 'খুঁজুন...' : 'Search...'}</span>
        <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-950 text-slate-400 border border-slate-800">
          ⌘K
        </kbd>
      </button>

      {/* Glassmorphic Search Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-950/60">
              <Search className="w-5 h-5 text-cyan-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder={
                  isBn
                    ? 'ক্যালকুলেটর, সূত্র বা টপিক খুঁজুন (যেমন: গতি, মোলারিটি, F=ma, দ্বিঘাত)...'
                    : 'Search tools, formulas or topics (e.g. kinematics, molarity, quadratic, vectors)...'
                }
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="p-1 text-slate-400 hover:text-white rounded-md cursor-pointer"
                  aria-label="Clear query"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <kbd className="text-[11px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  ESC
                </kbd>
              )}
            </div>

            {/* Results List */}
            <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
              {filtered.length > 0 ? (
                filtered.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  const itemUrl = isBn ? item.urlBn : item.urlEn;
                  const itemTitle = isBn ? item.titleBn : item.titleEn;
                  const itemDesc = isBn ? item.descBn : item.descEn;

                  return (
                    <a
                      key={item.id}
                      href={itemUrl}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between p-3 rounded-xl transition ${
                        isSelected
                          ? 'bg-cyan-500/15 border border-cyan-500/40 text-white'
                          : 'hover:bg-slate-800/80 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-2xl p-1.5 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                          {item.icon}
                        </span>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold truncate text-white">
                            {itemTitle}
                          </div>
                          <div className="text-xs text-slate-400 truncate">
                            {itemDesc}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className={`w-4 h-4 shrink-0 transition ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                    </a>
                  );
                })
              ) : (
                <div className="py-12 text-center space-y-2">
                  <p className="text-sm text-slate-400 font-medium">
                    {isBn ? `"${query}" এর জন্য কোনো ফলাফল পাওয়া যায়নি` : `No results found for "${query}"`}
                  </p>
                  <p className="text-xs text-slate-500">
                    {isBn
                      ? 'অন্য কোনো শব্দ বা ইংরেজিতে টাইপ করে দেখুন (যেমন: physics, mole, quadratic)'
                      : 'Try searching with alternate keywords (e.g. physics, molar mass, vector)'}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <div className="flex items-center gap-2">
                <span>↑↓ নেভিগেশন</span>
                <span>•</span>
                <span>↵ নির্বাচন</span>
                <span>•</span>
                <span>ESC বন্ধ</span>
              </div>
              <span className="text-cyan-400 font-sans">
                {isBn ? '১৭টি টুলস ও ২০০+ সূত্র' : '17 Tools & 200+ Formulas'}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
