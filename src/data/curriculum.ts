export interface CurriculumChapter {
  id: string;
  chapterNumber: number;
  paper?: 1 | 2;
  titleBn: string;
  titleEn: string;
  summaryBn: string;
  summaryEn: string;
  marksWeightage: {
    cq: string;
    mcq: string;
  };
  keyTopics: string[];
  linkedToolIds?: string[];
  coreFormulas?: {
    nameBn: string;
    nameEn: string;
    latex: string;
    notesBn?: string;
    notesEn?: string;
  }[];
}

export interface CurriculumSubject {
  id: string;
  level: 'ssc' | 'hsc';
  nameBn: string;
  nameEn: string;
  icon: string;
  color: string;
  badgeColor: string;
  code: string;
  descriptionBn: string;
  descriptionEn: string;
  chapters: CurriculumChapter[];
}

export const CURRICULUM_DATA: CurriculumSubject[] = [
  // ================= HSC SUBJECTS =================
  {
    id: 'ict',
    level: 'hsc',
    nameBn: 'তথ্য ও যোগাযোগ প্রযুক্তি',
    nameEn: 'Information & Communication Technology (ICT)',
    icon: '💻',
    color: 'from-cyan-600 to-blue-600',
    badgeColor: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/40',
    code: 'HSC 275',
    descriptionBn: 'ডিজিটাল লজিক গেট, এইচটিএমএল ওয়েব ডিজাইন, সি প্রোগ্রামিং এবং ডেটাবেজ ম্যানেজমেন্ট সিস্টেমের ব্যবহারিক সিমুলেটর ও বোর্ড পরীক্ষার প্রস্তুতি।',
    descriptionEn: 'Interactive logic gates, HTML web design, C programming, and relational database simulators aligned with NCTB HSC Board syllabus.',
    chapters: [
      {
        id: 'hsc-ict-ch1',
        chapterNumber: 1,
        titleBn: 'তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত',
        titleEn: 'ICT: Global and Bangladesh Perspective',
        summaryBn: 'ভার্চুয়াল রিয়েলিটি, কৃত্রিম বুদ্ধিমত্তা, রোবটিক্স, ক্রায়োসার্জারি, বায়োমেট্রিক্স ও সাইবার নিরাপত্তা।',
        summaryEn: 'Virtual reality, artificial intelligence, robotics, cryosurgery, biometrics, and cyber security ethics.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৪-৫ নম্বর' },
        keyTopics: ['ভার্চুয়াল রিয়েলিটি', 'কৃত্রিম বুদ্ধিমত্তা', 'বায়োমেট্রিক্স', 'ক্রায়োসার্জারি', 'সাইবার ক্রাইম ও এথিক্স'],
      },
      {
        id: 'hsc-ict-ch2',
        chapterNumber: 2,
        titleBn: 'কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং',
        titleEn: 'Communication Systems & Networking',
        summaryBn: 'ডেটা ট্রান্সমিশন মোড ও মেথড, মাধ্যম (ফাইবার অপটিক, মাইক্রোওয়েভ), ওয়্যারলেস (Bluetooth, Wi-Fi, WiMAX) ও নেটওয়ার্ক টপোলজি।',
        summaryEn: 'Data transmission modes/methods, guided and unguided media, wireless protocols, and network topologies.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৪-৫ নম্বর' },
        keyTopics: ['ট্রান্সমিশন মোড (Simplex, Duplex)', 'নেটওয়ার্ক টপোলজি (Star, Mesh, Tree)', 'ফাইবার অপটিক কেবল', 'ক্লাউড কম্পিউটিং'],
      },
      {
        id: 'hsc-ict-ch3',
        chapterNumber: 3,
        titleBn: 'সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস',
        titleEn: 'Number Systems & Digital Devices',
        summaryBn: 'বাইনারি, অকটাল, হেক্সাডেসিমেল রূপান্তর, ২ এর পরিপূরক, বুলিয়ান অ্যালজেবরা, মৌলিক ও সার্বজনীন গেট, অ্যাডার, এনকোডার ও ডিকোডার।',
        summaryEn: 'Number conversions, 2s complement, Boolean algebra, basic and universal logic gates, adders, and decoders.',
        marksWeightage: { cq: '২০ নম্বর (২টি CQ)', mcq: '৬-৭ নম্বর' },
        keyTopics: ['২ এর পরিপূরক বিয়োগ', 'মৌলিক ও সার্বজনীন গেট (NAND, NOR)', 'হাফ ও ফুল অ্যাডার', 'ডিকোডার ও এনকোডার', 'ডি মরগানের উপপাদ্য'],
        linkedToolIds: ['circuit-simulator'],
        coreFormulas: [
          { nameBn: 'ডি মরগানের প্রথম সূত্র', nameEn: "De Morgan's First Law", latex: '\\overline{A + B} = \\overline{A} \\cdot \\overline{B}' },
          { nameBn: 'ডি মরগানের দ্বিতীয় সূত্র', nameEn: "De Morgan's Second Law", latex: '\\overline{A \\cdot B} = \\overline{A} + \\overline{B}' },
          { nameBn: 'হাফ অ্যাডার যোগফল (Sum)', nameEn: 'Half Adder Sum', latex: 'S = A \\oplus B = \\overline{A}B + A\\overline{B}' },
          { nameBn: 'হাফ অ্যাডার ক্যারি (Carry)', nameEn: 'Half Adder Carry', latex: 'C = A \\cdot B' },
        ],
      },
      {
        id: 'hsc-ict-ch4',
        chapterNumber: 4,
        titleBn: 'ওয়েব ডিজাইন পরিচিতি এবং HTML',
        titleEn: 'Introduction to Web Design & HTML',
        summaryBn: 'ওয়েবসাইটের কাঠামো, HTML মৌলিক ট্যাগ, টেবিল তৈরি (colspan, rowspan), হাইপারলিঙ্ক, ছবি সংযোজন এবং ফর্ম ডিজাইন।',
        summaryEn: 'Web structures, fundamental HTML tags, complex tables (colspan, rowspan), hyperlinks, multimedia, and forms.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৪-৫ নম্বর' },
        keyTopics: ['HTML টেবিল ও Colspan/Rowspan', 'ওয়েবসাইট কাঠামো (Tree, Web-linked)', 'হাইপারলিঙ্ক (<a>) ও ইমেজ (<img>)', 'HTML রেজিস্ট্রেশন ফর্ম'],
        linkedToolIds: ['html-runner'],
      },
      {
        id: 'hsc-ict-ch5',
        chapterNumber: 5,
        titleBn: 'প্রোগ্রামিং ভাষা (C Programming)',
        titleEn: 'Programming Language (C Language)',
        summaryBn: 'প্রোগ্রামের সংগঠন, অ্যালগরিদম ও ফ্লোচার্ট, সি চলক ও ডেটা টাইপ, শর্তযুক্ত বিবৃতি (if-else), লুপ (for, while) এবং অ্যারে।',
        summaryEn: 'Program design, algorithms & flowcharts, C variables, conditional logic (if-else), iteration loops, and array manipulations.',
        marksWeightage: { cq: '২০ নম্বর (২টি CQ)', mcq: '৫-৬ নম্বর' },
        keyTopics: ['ফ্লোচার্ট ও অ্যালগরিদম', 'ফর ও হোয়াইল লুপ (for, while)', 'শর্তযুক্ত শাখা (if-else)', 'মৌলিক ধারা ও প্রাইম সংখ্যা নির্ণয়', '১D ও ২D অ্যারে'],
        linkedToolIds: ['c-runner'],
      },
      {
        id: 'hsc-ict-ch6',
        chapterNumber: 6,
        titleBn: 'ডেটাবেজ ম্যানেজমেন্ট সিস্টেম (DBMS)',
        titleEn: 'Database Management System (DBMS)',
        summaryBn: 'রিলেশনাল ডেটাবেজ, প্রাইমারি কি ও ফরেন কি, ডেটাবেজ রিলেশন (1:1, 1:N, M:N), এসকিউএল (SQL) কুয়েরি এবং ডেটা সিকিউরিটি।',
        summaryEn: 'Relational databases, primary & foreign keys, entity relationships, SQL queries (SELECT, WHERE, JOIN), and security.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩-৪ নম্বর' },
        keyTopics: ['প্রাইমারি কি ও কম্পোজিট কি', 'ডেটাবেজ রিলেশনশিপ (1:Many, Many:Many)', 'SQL কুয়েরি (SELECT, UPDATE)', 'ইনডেক্সিং ও সর্টিং'],
        linkedToolIds: ['database-simulator'],
      },
    ],
  },
  {
    id: 'physics',
    level: 'hsc',
    nameBn: 'পদার্থবিজ্ঞান',
    nameEn: 'Physics',
    icon: '⚡',
    color: 'from-amber-600 to-orange-600',
    badgeColor: 'text-amber-400 bg-amber-950/60 border-amber-800/40',
    code: 'HSC 174 & 175',
    descriptionBn: 'গতিবিদ্যা, ভেক্টর, কাজ-শক্তি-ক্ষমতা, মহাকর্ষ, পর্যায়বৃত্ত গতি এবং তড়িৎচৌম্বকবিদ্যার সূত্র ও গাণিতিক সমস্যা সমাধান।',
    descriptionEn: 'Kinematics, vectors, mechanics, gravitation, periodic motion, thermodynamics, and electromagnetism.',
    chapters: [
      {
        id: 'hsc-phy1-ch2',
        chapterNumber: 2,
        paper: 1,
        titleBn: 'ভেক্টর',
        titleEn: 'Vectors',
        summaryBn: 'ভেক্টরের যোজন-বিয়োজন, ডট গুণন ও ক্রস গুণন, নদী-নৌকার আপেক্ষিক বেগ এবং ডাইভারজেন্স ও কার্ল।',
        summaryEn: 'Vector addition, dot and cross products, relative velocity, river-boat river crossings, and vector calculus.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩-৪ নম্বর' },
        keyTopics: ['সামান্তরিকের সূত্র', 'ডট ও ক্রস গুণন', 'নদী-নৌকার লব্ধি বেগ ও ন্যূনতম পথ', 'ভেক্টর ক্যালকুলাস (Grad, Div, Curl)'],
        coreFormulas: [
          { nameBn: 'লব্ধির মান', nameEn: 'Resultant Magnitude', latex: 'R = \\sqrt{P^2 + Q^2 + 2PQ\\cos\\alpha}' },
          { nameBn: 'স্কেলার গুণন', nameEn: 'Dot Product', latex: '\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta' },
          { nameBn: 'ভেক্টর গুণন', nameEn: 'Cross Product', latex: '|\\vec{A} \\times \\vec{B}| = AB\\sin\\theta' },
        ],
      },
      {
        id: 'hsc-phy1-ch3',
        chapterNumber: 3,
        paper: 1,
        titleBn: 'গতিবিদ্যা (প্রাস ও প্রক্ষেপক)',
        titleEn: 'Dynamics & Projectile Motion',
        summaryBn: 'রৈখিক গতি সমীকরণ, প্রাস বা প্রক্ষেপকের দ্বিমাত্রিক গতি, সর্বোচ্চ উচ্চতা, বিচরণকাল ও পাল্লা নির্ণয়।',
        summaryEn: 'Kinematic equations, 2D projectile trajectory, peak altitude, flight duration, and horizontal range.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩-৪ নম্বর' },
        keyTopics: ['প্রাসের গতিপথের পরাবৃত্তীয় সমীকরণ', 'সর্বোচ্চ উচ্চতা ও অনুভূমিক পাল্লা', 'উল্লম্বভাবে নিক্ষিপ্ত বস্তু', 'ক্যালকুলেটর ভেক্টর ট্র্যাকিং'],
        linkedToolIds: ['projectile-motion'],
        coreFormulas: [
          { nameBn: 'সর্বোচ্চ উচ্চতা', nameEn: 'Maximum Height', latex: 'H = \\frac{v_0^2 \\sin^2\\theta}{2g}' },
          { nameBn: 'বিচরণকাল', nameEn: 'Time of Flight', latex: 'T = \\frac{2v_0 \\sin\\theta}{g}' },
          { nameBn: 'অনুভূমিক পাল্লা', nameEn: 'Horizontal Range', latex: 'R = \\frac{v_0^2 \\sin(2\\theta)}{g}' },
        ],
      },
      {
        id: 'hsc-phy1-ch4',
        chapterNumber: 4,
        paper: 1,
        titleBn: 'নিউটনীয় বলবিদ্যা',
        titleEn: 'Newtonian Mechanics',
        summaryBn: 'বলের ঘাত ও ঘাত বল, রৈখিক ভরবেগের নিত্যতা, জড়তার ভ্রামক, বৃত্তাকার গতি ও ব্যাংকিং কোণ।',
        summaryEn: 'Impulse of force, conservation of linear momentum, moment of inertia, and circular road banking.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩-৪ নম্বর' },
        keyTopics: ['ভরবেগের সংরক্ষণ সূত্র', 'জড়তার ভ্রামক ও চক্রগতির ব্যাসার্ধ', 'রাস্তার ব্যাংকিং ও নিরাপদ বেগ', 'টর্ক ও কৌণিক ভরবেগ'],
        coreFormulas: [
          { nameBn: 'ব্যাংকিং কোণ', nameEn: 'Road Banking Angle', latex: '\\tan\\theta = \\frac{v^2}{rg}' },
          { nameBn: 'জড়তার ভ্রামক', nameEn: 'Moment of Inertia', latex: 'I = \\sum m_i r_i^2 = M K^2' },
        ],
      },
      {
        id: 'hsc-phy1-ch8',
        chapterNumber: 8,
        paper: 1,
        titleBn: 'পর্যায়বৃত্ত গতি',
        titleEn: 'Periodic Motion',
        summaryBn: 'সরল ছন্দিত স্পন্দন, সরল দোলকের গতি ও সূত্রাবলী, স্প্রিং-ভর ব্যবস্থা এবং যান্ত্রিক শক্তির নিত্যতা।',
        summaryEn: 'Simple harmonic motion (SHM), simple pendulum mechanics, spring oscillations, and conservation of energy.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '২-৩ নম্বর' },
        keyTopics: ['সরল ছন্দিত গতির ব্যবকলনীয় সমীকরণ', 'দোলনকাল ও কম্পাঙ্ক', 'সরল দোলকের সূত্র ও পাহাড়ের উচ্চতা', 'স্প্রিং ধ্রুবক'],
        coreFormulas: [
          { nameBn: 'দোলনকাল (সরল দোলক)', nameEn: 'Pendulum Period', latex: 'T = 2\\pi \\sqrt{\\frac{L}{g}}' },
          { nameBn: 'দোলনকাল (স্প্রিং)', nameEn: 'Spring Period', latex: 'T = 2\\pi \\sqrt{\\frac{m}{k}}' },
        ],
      },
    ],
  },
  {
    id: 'chemistry',
    level: 'hsc',
    nameBn: 'রসায়ন',
    nameEn: 'Chemistry',
    icon: '⚗️',
    color: 'from-emerald-600 to-teal-600',
    badgeColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/40',
    code: 'HSC 176 & 177',
    descriptionBn: 'গুণগত রসায়ন, মৌলের পর্যায়বৃত্ত ধর্ম, রাসায়নিক পরিবর্তন (pH ও বাফার), জারণ-বিজারণ ও পরিমাণগত রসায়ন।',
    descriptionEn: 'Qualitative analysis, periodic properties, chemical kinetics & equilibrium, redox titration, and stoichiometry.',
    chapters: [
      {
        id: 'hsc-chem1-ch2',
        chapterNumber: 2,
        paper: 1,
        titleBn: 'গুণগত রসায়ন',
        titleEn: 'Qualitative Chemistry',
        summaryBn: 'পরমাণুর গঠন, কোয়ান্টাম সংখ্যা, অফবাউ ও হুন্ডের নীতি, দ্রাব্যতা ও দ্রাব্যতা গুণফল (Ksp), এবং বর্ণালী বিশ্লেষণ।',
        summaryEn: 'Atomic models, quantum numbers, electronic configurations, solubility product (Ksp), and flame tests.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৪-৫ নম্বর' },
        keyTopics: ['৪টি কোয়ান্টাম সংখ্যা', 'অফবাউ ও পাউলির বর্জন নীতি', 'দ্রাব্যতা গুণফল (Ksp) ও অধঃক্ষেপণ', 'হাইড্রোজেন পরমাণুর বর্ণালী'],
        coreFormulas: [
          { nameBn: 'রিডবার্গ সমীকরণ', nameEn: 'Rydberg Formula', latex: '\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)' },
          { nameBn: 'দ্রাব্যতা গুণফল (Ksp)', nameEn: 'Solubility Product', latex: 'K_{sp} = [A^{y+}]^x [B^{x-}]^y' },
        ],
      },
      {
        id: 'hsc-chem1-ch3',
        chapterNumber: 3,
        paper: 1,
        titleBn: 'মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন',
        titleEn: 'Periodic Properties & Chemical Bonding',
        summaryBn: 'ইলেকট্রন বিন্যাস ভিত্তিক পর্যায় সারণী, আয়নিকরণ শক্তি, তড়িৎ ঋণাত্মকতা, সংকরায়ন (Hybridization), এবং ভেসপার তত্ত্ব।',
        summaryEn: 'Periodic table periodicity, ionization energy, electronegativity, orbital hybridization, and molecular geometry.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৪-৫ নম্বর' },
        keyTopics: ['আয়নিকরণ শক্তি ও ইলেকট্রন আসক্তি', 'সংকরায়ন (sp, sp2, sp3, dsp3)', 'অণুর আকৃতি ও বন্ধন কোণ (VSEPR)', 'হাইড্রোজেন বন্ধন'],
        linkedToolIds: ['periodic-table'],
      },
      {
        id: 'hsc-chem2-ch3',
        chapterNumber: 3,
        paper: 2,
        titleBn: 'পরিমাণগত রসায়ন (জারণ-বিজারণ ও টাইট্রেশন)',
        titleEn: 'Quantitative Chemistry & Redox',
        summaryBn: 'মোল ধারণা, মোলার দ্রবণ, আয়ন-ইলেকট্রন পদ্ধতিতে জারণ-বিজারণ সমতা, টাইট্রেশন ও জারণমিতি (KMnO4, K2Cr2O7)।',
        summaryEn: 'Molar concentration, redox balancing via ion-electron method, acid-base titration, and permanganometry.',
        marksWeightage: { cq: '১০-১৫ নম্বর (১-২টি CQ)', mcq: '৫ নম্বর' },
        keyTopics: ['আয়ন-ইলেকট্রন পদ্ধতিতে সমতা', 'অম্লীয় ও ক্ষারীয় মাধ্যমে টাইট্রেশন', 'মোলার দ্রবণ প্রস্তুতি ও পিপিএম (ppm)', 'কেলাস পানির মোলার ভর'],
        linkedToolIds: ['redox-balancer', 'molar-mass'],
        coreFormulas: [
          { nameBn: 'দ্রবণের ঘনমাত্রা সূত্র', nameEn: 'Molarity Equation', latex: 'S = \\frac{1000 \\times W}{M \\times V (\\text{mL})}' },
          { nameBn: 'টাইট্রেশন সূত্র', nameEn: 'Titration Equivalence', latex: 'V_1 S_1 e_1 = V_2 S_2 e_2' },
        ],
      },
    ],
  },
  {
    id: 'higher-math',
    level: 'hsc',
    nameBn: 'উচ্চতর গণিত',
    nameEn: 'Higher Mathematics',
    icon: '📐',
    color: 'from-purple-600 to-indigo-600',
    badgeColor: 'text-purple-400 bg-purple-950/60 border-purple-800/40',
    code: 'HSC 265 & 266',
    descriptionBn: 'ম্যাট্রিক্স ও নির্ণায়ক, সরলরেখা, বৃত্ত, অন্তরীকরণ ও যোগজীকরণ, জটিল সংখ্যা এবং দ্বিঘাত সমীকরণ।',
    descriptionEn: 'Matrices & determinants, coordinate geometry, calculus (differentiation & integration), and quadratic equations.',
    chapters: [
      {
        id: 'hsc-hm1-ch1',
        chapterNumber: 1,
        paper: 1,
        titleBn: 'ম্যাট্রিক্স ও নির্ণায়ক',
        titleEn: 'Matrices & Determinants',
        summaryBn: 'ম্যাট্রিক্সের যোগ, বিয়োগ, গুণ, বিপরীত ম্যাট্রিক্স, নির্ণায়কের ধর্মাবলী এবং ক্র্যামারের নিয়মে একঘাত সমীকরণ জোট সমাধান।',
        summaryEn: 'Matrix operations, matrix multiplication, inverse matrices, determinant expansions, and Cramer’s rule.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩-৪ নম্বর' },
        keyTopics: ['ম্যাট্রিক্সের গুণন যোগ্যতা', 'বিপরীত ম্যাট্রিক্স (Inverse Matrix)', 'নির্ণায়কের অনুরাশি ও সহগুণক', 'ক্র্যামারের নিয়মে সমীকরণ সমাধান'],
        coreFormulas: [
          { nameBn: 'বিপরীত ম্যাট্রিক্স', nameEn: 'Inverse Matrix', latex: 'A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)' },
          { nameBn: 'ক্র্যামারের নিয়ম', nameEn: "Cramer's Rule", latex: 'x = \\frac{D_x}{D}, \\quad y = \\frac{D_y}{D}, \\quad z = \\frac{D_z}{D}' },
        ],
      },
      {
        id: 'hsc-hm2-ch4',
        chapterNumber: 4,
        paper: 2,
        titleBn: 'বহুপদী ও বহুপদী সমীকরণ (দ্বিঘাত সমীকরণ)',
        titleEn: 'Polynomials & Quadratic Equations',
        summaryBn: 'দ্বিঘাত সমীকরণের মূলের প্রকৃতি, নিশ্চয়ক (Discriminant), মূল ও সহগের সম্পর্ক এবং সাধারণ মূল থাকার শর্ত।',
        summaryEn: 'Roots of quadratic equations, discriminant analysis, relations between roots and coefficients, and common roots.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩ নম্বর' },
        keyTopics: ['নিশ্চায়ক বা পৃথায়ক (Discriminant)', 'মূল ও সহগের সম্পর্ক', 'জটিল মূলের অনুবন্ধী জোড়', 'কাসিও মোড 5 3 সমাধান'],
        linkedToolIds: ['quadratic-solver'],
        coreFormulas: [
          { nameBn: 'দ্বিঘাত সূত্র', nameEn: 'Quadratic Formula', latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}' },
          { nameBn: 'মূলের যোগফল ও গুণফল', nameEn: 'Sum & Product of Roots', latex: '\\alpha + \\beta = -\\frac{b}{a}, \\quad \\alpha\\beta = \\frac{c}{a}' },
        ],
      },
    ],
  },
  {
    id: 'biology',
    level: 'hsc',
    nameBn: 'জীববিজ্ঞান',
    nameEn: 'Biology',
    icon: '🧬',
    color: 'from-green-600 to-emerald-600',
    badgeColor: 'text-green-400 bg-green-950/60 border-green-800/40',
    code: 'HSC 178 & 179',
    descriptionBn: 'উদ্ভিদবিজ্ঞান ও প্রাণিবিজ্ঞান: কোষ ও কোষের গঠন, জিনতত্ত্ব, মানব শারীরতত্ত্ব, রক্ত সংবহন ও বাস্তুতন্ত্র।',
    descriptionEn: 'Botany & Zoology: Cytology, genetics, molecular biology, human organ systems, circulation, and ecology.',
    chapters: [
      {
        id: 'hsc-bio1-ch1',
        chapterNumber: 1,
        paper: 1,
        titleBn: 'কোষ ও এর গঠন',
        titleEn: 'Cell & Its Structure',
        summaryBn: 'কোষ প্রাচীর, প্লাজমামেমব্রেনের ফ্লুইড মোজাইক মডেল, সাইটোপ্লাজমীয় অঙ্গাণু, ডিএনএ ও আরএনএ এর গঠন ও প্রতিলিপন।',
        summaryEn: 'Cell wall, fluid mosaic model, organelles (mitochondria, chloroplasts), DNA double helix, and replication.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৪ নম্বর' },
        keyTopics: ['ফ্লুইড মোজাইক মডেল', 'মাইটোকন্ড্রিয়া ও ক্লোরোপ্লাস্ট', 'DNA ও RNA এর গঠন', 'প্রতিলিপন ও প্রোটিন সংশ্লেষণ'],
      },
      {
        id: 'hsc-bio2-ch11',
        chapterNumber: 11,
        paper: 2,
        titleBn: 'জিনতত্ত্ব ও বিবর্তন',
        titleEn: 'Genetics & Evolution',
        summaryBn: 'মেন্ডেলের সূত্রাবলী ও ব্যতিক্রম, লিঙ্গ নির্ধারণ নীতি, সেক্স-লিঙ্কড ডিসঅর্ডার (হিমোফিলিয়া, বর্ণান্ধতা) এবং ডারউইনবাদ।',
        summaryEn: "Mendelian genetics & exceptions, sex determination, sex-linked disorders (hemophilia, color blindness), and evolution.",
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৪ নম্বর' },
        keyTopics: ['মেন্ডেলের প্রথম ও দ্বিতীয় সূত্র', 'অসম্পূর্ণ প্রকটতা (1:2:1)', 'সেক্স-লিঙ্কড ইনহেরিটেন্স', 'Rh ফ্যাক্টর ও এরিথ্রোব্লাস্টোসিস ফিটালিস'],
      },
    ],
  },
  {
    id: 'general-math',
    level: 'hsc',
    nameBn: 'সাধারণ ও ফলিত গণিত',
    nameEn: 'General & Applied Mathematics',
    icon: '➕',
    color: 'from-blue-600 to-indigo-600',
    badgeColor: 'text-blue-400 bg-blue-950/60 border-blue-800/40',
    code: 'HSC 129',
    descriptionBn: 'বিন্যাস ও সমাবেশ, সম্ভাবনা, ব্যবসায়িক পরিসংখ্যান ও সূচক বিশ্লেষণ, রৈখিক প্রোগ্রামিং এবং সিদ্ধান্ত তত্ত্ব।',
    descriptionEn: 'Permutations and combinations, probability theory, statistical index numbers, and linear programming.',
    chapters: [
      {
        id: 'hsc-gm-ch5',
        chapterNumber: 5,
        paper: 1,
        titleBn: 'বিন্যাস ও সমাবেশ',
        titleEn: 'Permutations & Combinations',
        summaryBn: 'গণনার যোজন ও গুণন বিধি, n সংখ্যক বস্তুর বিন্যাস ও সমাবেশ, বৃত্তাকার বিন্যাস এবং ব্যবহারিক প্রয়োগ।',
        summaryEn: 'Fundamental principles of counting, permutations and combinations of n items, circular arrangements.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩-৪ নম্বর' },
        keyTopics: ['গণনার গুণন বিধি', 'nPr ও nCr নির্ণয়', 'শব্দ গঠনের বিন্যাস সংখ্যা', 'কাসিও nCr ক্যালকুলেটর শর্টকাট'],
        coreFormulas: [
          { nameBn: 'বিন্যাস সূত্র', nameEn: 'Permutation Formula', latex: '^nP_r = \\frac{n!}{(n-r)!}' },
          { nameBn: 'সমাবেশ সূত্র', nameEn: 'Combination Formula', latex: '^nC_r = \\frac{n!}{r!(n-r)!}' },
        ],
      },
      {
        id: 'hsc-gm-ch10',
        chapterNumber: 10,
        paper: 2,
        titleBn: 'সম্ভাবনা (Probability)',
        titleEn: 'Probability Theory',
        summaryBn: 'নমুনা ক্ষেত্র ও ঘটনা, শর্তাধীন সম্ভাবনা, সম্ভাবনার যোজন ও গুণন সূত্র এবং দ্বিপদী বিন্যাস।',
        summaryEn: 'Sample space, events, conditional probability, addition and multiplication theorems.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩-৪ নম্বর' },
        keyTopics: ['নমুনা ক্ষেত্র তৈরি', 'পরস্পর বর্জনশীল ঘটনা', 'শর্তাধীন সম্ভাবনা P(A|B)', 'দ্বিপদী সম্ভাবনার প্রয়োগ'],
        coreFormulas: [
          { nameBn: 'মৌলিক সম্ভাবনা', nameEn: 'Probability Definition', latex: 'P(A) = \\frac{n(A)}{n(S)}' },
          { nameBn: 'সম্ভাবনার যোগসূত্র', nameEn: 'Addition Rule', latex: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)' },
        ],
      },
    ],
  },

  // ================= SSC SUBJECTS =================
  {
    id: 'physics',
    level: 'ssc',
    nameBn: 'পদার্থবিজ্ঞান (এসএসসি)',
    nameEn: 'SSC Physics (Classes 9-10)',
    icon: '⚡',
    color: 'from-amber-600 to-yellow-600',
    badgeColor: 'text-amber-400 bg-amber-950/60 border-amber-800/40',
    code: 'SSC 136',
    descriptionBn: 'ভৌত রাশি ও পরিমাপ, তাৎপর্যপূর্ণ অঙ্ক, গতি, বল, কাজ-ক্ষমতা-শক্তি, আলোর প্রতিফলন ও চলতড়িৎ।',
    descriptionEn: 'Physical quantities & measurement, sig figs, motion, force, work-power-energy, reflection of light, and electricity.',
    chapters: [
      {
        id: 'ssc-phy-ch1',
        chapterNumber: 1,
        titleBn: 'ভৌত রাশি ও পরিমাপ',
        titleEn: 'Physical Quantities & Measurement',
        summaryBn: 'মৌলিক ও লব্ধ একক, মাত্রা বিশ্লেষণ, ভার্নিয়ার স্কেল, স্ক্রু গজ এবং তাৎপর্যপূর্ণ অঙ্কের গণনা।',
        summaryEn: 'Fundamental and derived units, dimensional analysis, vernier callipers, micrometer screw gauge, and significant figures.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩-৪ নম্বর' },
        keyTopics: ['ভার্নিয়ার ধ্রুবক (VC)', 'স্ক্রু গজের লঘিষ্ঠ গণন (LC)', 'তাৎপর্যপূর্ণ অঙ্ক (Sig Figs)', 'পরিমাপের ত্রুটি'],
        linkedToolIds: ['significant-figures'],
      },
      {
        id: 'ssc-phy-ch2',
        chapterNumber: 2,
        titleBn: 'গতি',
        titleEn: 'Motion',
        summaryBn: 'দূরত্ব ও সরণ, দ্রুতি ও বেগ, ত্বরণ, গতির সমীকরণাবলী এবং মুক্তভাবে পড়ন্ত বস্তুর নিয়মাবলী।',
        summaryEn: 'Distance, displacement, velocity, acceleration, rectilinear equations of motion, and free-fall gravitation.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩ নম্বর' },
        keyTopics: ['গতির ৪টি মৌলিক সমীকরণ', 'পড়ন্ত বস্তুর ৩টি সূত্র', 'বেগ-সময় লেখচিত্র (v-t graph)', 'দূরত্ব নির্ণয়'],
        coreFormulas: [
          { nameBn: 'গতির সমীকরণ', nameEn: 'Equation of Motion', latex: 'v = u + at, \\quad s = ut + \\frac{1}{2}at^2, \\quad v^2 = u^2 + 2as' },
        ],
      },
    ],
  },
  {
    id: 'chemistry',
    level: 'ssc',
    nameBn: 'রসায়ন (এসএসসি)',
    nameEn: 'SSC Chemistry (Classes 9-10)',
    icon: '⚗️',
    color: 'from-teal-600 to-cyan-600',
    badgeColor: 'text-teal-400 bg-teal-950/60 border-teal-800/40',
    code: 'SSC 137',
    descriptionBn: 'পদার্থের অবস্থা, পদার্থের গঠন, পর্যায় সারণী, রাসায়নিক বন্ধন, এবং মোলের ধারণা ও রাসায়নিক গণনা।',
    descriptionEn: 'States of matter, atomic structure, periodic table, chemical bonding, mole concept, and stoichiometry.',
    chapters: [
      {
        id: 'ssc-chem-ch4',
        chapterNumber: 4,
        titleBn: 'পর্যায় সারণি',
        titleEn: 'Periodic Table',
        summaryBn: 'পর্যায় সারণির পটভূমি, ইলেকট্রন বিন্যাস হতে গ্রুপ ও পর্যায় নির্ণয়, পর্যায়বৃত্ত ধর্ম (পরমাণুর আকার, আয়নীকরণ শক্তি)।',
        summaryEn: 'Periodic table development, finding group/period from electron configuration, and periodic properties.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩-৪ নম্বর' },
        keyTopics: ['গ্রুপ ও পর্যায় নির্ণয়ের ৩টি নিয়ম', 'পারমাণবিক আকার ও ব্যাসার্ধ', 'ধাতব ও অধাতব ধর্ম', '১ থেকে ৩০ মৌলের বিশেষ ধর্ম'],
        linkedToolIds: ['periodic-table'],
      },
      {
        id: 'ssc-chem-ch6',
        chapterNumber: 6,
        titleBn: 'মোলের ধারণা ও রাসায়নিক গণনা',
        titleEn: 'Concept of Mole & Chemical Calculations',
        summaryBn: 'মোল, অ্যাভোগাড্রো সংখ্যা, মোলার ভর, গ্যাসীয় আয়তন, মোলারিটি, শতকরা সংযুতি ও স্থূল সংকেত নির্ণয়।',
        summaryEn: 'Mole, Avogadro number, molar mass, molar volume, molarity, mass percentage, and empirical formulas.',
        marksWeightage: { cq: '১০-১৫ নম্বর (১-২টি CQ)', mcq: '৪-৫ নম্বর' },
        keyTopics: ['মোলার ভর ও অনু সংখ্যা নির্ণয়', 'মোলার দ্রবণ প্রস্তুতি', 'শতকরা সংযুতি হতে স্থূল ও আণবিক সংকেত', 'সীমিত বিক্রিয়ক (Limiting Reactant)'],
        linkedToolIds: ['molar-mass'],
      },
    ],
  },
  {
    id: 'general-math',
    level: 'ssc',
    nameBn: 'সাধারণ গণিত (এসএসসি)',
    nameEn: 'SSC General Mathematics (Classes 9-10)',
    icon: '➕',
    color: 'from-blue-600 to-sky-600',
    badgeColor: 'text-blue-400 bg-blue-950/60 border-blue-800/40',
    code: 'SSC 109',
    descriptionBn: 'বাস্তব সংখ্যা, সেট ও ফাংশন, বীজগণিতীয় রাশি, সূচক ও লগারিদম, একচলক বিশিষ্ট সমীকরণ এবং ত্রিকোণমিতি।',
    descriptionEn: 'Real numbers, sets & functions, algebraic expressions, exponents & logs, linear equations, and trigonometry.',
    chapters: [
      {
        id: 'ssc-gm-ch3',
        chapterNumber: 3,
        titleBn: 'বীজগণিতীয় রাশি',
        titleEn: 'Algebraic Expressions',
        summaryBn: 'বর্গ ও ঘনের সূত্রাবলী, মান নির্ণয়, উৎপাদকে বিশ্লেষণ এবং ভাগশেষ উপপাদ্য।',
        summaryEn: 'Square and cubic formulas, value determination, factorization, and remainder theorem.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩-৪ নম্বর' },
        keyTopics: ['বর্গ ও ঘনের অনুসিদ্ধান্ত', 'উৎপাদকে বিশ্লেষণ (Middle Term)', 'ভাগশেষ উপপাদ্য'],
        linkedToolIds: ['general-math'],
      },
      {
        id: 'ssc-gm-ch9',
        chapterNumber: 9,
        titleBn: 'ত্রিকোণমিতিক অনুপাত ও দূরত্ব',
        titleEn: 'Trigonometric Ratios & Distances',
        summaryBn: 'সূক্ষ্মকোণের ত্রিকোণমিতিক অনুপাত, ত্রিকোণমিতিক অভেদাবলী এবং কোণ ও দূরত্বের ব্যবহারিক সমস্যা।',
        summaryEn: 'Trigonometric ratios of acute angles, identities, and angle of elevation / height calculations.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩-৪ নম্বর' },
        keyTopics: ['ত্রিকোণমিতিক অভেদাবলী', 'উন্নতি ও অবনতি কোণ', 'টাওয়ার ও গাছের উচ্চতা ও দূরত্ব সমস্যা'],
        linkedToolIds: ['general-math'],
        coreFormulas: [
          { nameBn: 'মৌলিক অভেদ', nameEn: 'Fundamental Identity', latex: '\\sin^2\\theta + \\cos^2\\theta = 1, \\quad 1 + \\tan^2\\theta = \\sec^2\\theta' },
          { nameBn: 'উচ্চতা সূত্র', nameEn: 'Height Equation', latex: 'h = d \\cdot \\tan\\theta' },
        ],
      },
      {
        id: 'ssc-gm-ch16',
        chapterNumber: 16,
        titleBn: 'পরিমিতি (ক্ষেত্রফল ও ঘনবস্তু)',
        titleEn: 'Mensuration (2D & 3D Solids)',
        summaryBn: 'ত্রিভুজ (হ্যারন সূত্র), চতুর্ভুজ, বৃত্ত, সুষম বহুভুজ, ঘনক ও বেলনের ক্ষেত্রফল ও আয়তন নির্ণয়।',
        summaryEn: 'Triangle areas (Heron’s), circles, regular polygons, cube and cylinder volumes.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩-৪ নম্বর' },
        keyTopics: ['হ্যারনের ক্ষেত্রফল সূত্র', 'সুষম বহুভুজের ক্ষেত্রফল', 'ঘনক ও সিলিন্ডারের সমগ্রতল ও আয়তন'],
        linkedToolIds: ['general-math'],
        coreFormulas: [
          { nameBn: 'হ্যারনের ক্ষেত্রফল সূত্র', nameEn: "Heron's Formula", latex: '\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)}' },
          { nameBn: 'সিলিন্ডারের আয়তন', nameEn: 'Cylinder Volume', latex: 'V = \\pi r^2 h' },
        ],
      },
      {
        id: 'ssc-gm-ch17',
        chapterNumber: 17,
        titleBn: 'পরিসংখ্যান (গড়, মধ্যক ও প্রচুরক)',
        titleEn: 'Statistics (Mean, Median & Mode)',
        summaryBn: 'শ্রেণি বিন্যাসকৃত উপাত্তের সারণী তৈরি, সংক্ষিপ্ত পদ্ধতিতে গড়, মধ্যক ও প্রচুরক নির্ণয়।',
        summaryEn: 'Grouped frequency distribution tables, step-deviation mean, grouped median and mode.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩-৪ নম্বর' },
        keyTopics: ['ধাপ বিচ্যুতি পদ্ধতিতে গড়', 'মধ্যক শ্রেণি ও মধ্যক সূত্র', 'প্রচুরক শ্রেণি ও প্রচুরক সূত্র'],
        linkedToolIds: ['general-math'],
        coreFormulas: [
          { nameBn: 'সংক্ষিপ্ত গড়', nameEn: 'Step-Deviation Mean', latex: '\\bar{x} = a + \\left( \\frac{\\sum f_i u_i}{n} \\right) \\times h' },
          { nameBn: 'মধ্যক সূত্র', nameEn: 'Grouped Median', latex: '\\text{Median} = L + \\left( \\frac{\\frac{n}{2} - F_c}{f_m} \\right) \\times h' },
          { nameBn: 'প্রচুরক সূত্র', nameEn: 'Grouped Mode', latex: '\\text{Mode} = L + \\left( \\frac{f_1}{f_1 + f_2} \\right) \\times h' },
        ],
      },
    ],
  },
  {
    id: 'higher-math',
    level: 'ssc',
    nameBn: 'উচ্চতর গণিত (এসএসসি)',
    nameEn: 'SSC Higher Mathematics (Classes 9-10)',
    icon: '📐',
    color: 'from-purple-600 to-violet-600',
    badgeColor: 'text-purple-400 bg-purple-950/60 border-purple-800/40',
    code: 'SSC 126',
    descriptionBn: 'সেট ও ফাংশন, বীজগাণিতিক রাশি, সমীকরণ (দ্বিঘাত সমীকরণ), অসমতা, দ্বিপদী বিস্তৃতি এবং স্থানাঙ্ক জ্যামিতি।',
    descriptionEn: 'Sets & functions, algebraic expressions, quadratic equations, inequalities, and coordinate geometry.',
    chapters: [
      {
        id: 'ssc-hm-ch5',
        chapterNumber: 5,
        titleBn: 'সমীকরণ (দ্বিঘাত সমীকরণ সমাধান)',
        titleEn: 'Equations (Quadratic Equations)',
        summaryBn: 'এক চলক বিশিষ্ট দ্বিঘাত সমীকরণ, নিশ্চয়ক বিশ্লেষণ, মূলের প্রকৃতি এবং সূচকীয় সমীকরণ।',
        summaryEn: 'Single-variable quadratic equations, discriminant analysis, root nature, and exponential equations.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩-৪ নম্বর' },
        keyTopics: ['দ্বিঘাত সূত্র প্রয়োগ', 'নিশ্চায়ক (b^2 - 4ac) বিশ্লেষণ', 'সূচক সমীকরণ'],
        linkedToolIds: ['quadratic-solver'],
        coreFormulas: [
          { nameBn: 'দ্বিঘাত সমাধান সূত্র', nameEn: 'Quadratic Formula', latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}' },
        ],
      },
      {
        id: 'ssc-hm-ch11',
        chapterNumber: 11,
        titleBn: 'স্থানাঙ্ক জ্যামিতি',
        titleEn: 'Coordinate Geometry',
        summaryBn: 'কার্তেসীয় স্থানাঙ্ক, দুটি বিন্দুর মধ্যবর্তী দূরত্ব, সরলরেখার ঢাল এবং ত্রিভুজের ক্ষেত্রফল নির্ণয়।',
        summaryEn: 'Cartesian coordinates, distance formula, slope of straight lines, and triangle polygon areas.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩ নম্বর' },
        keyTopics: ['দূরত্ব সূত্র', 'সরলরেখার ঢাল (m)', 'বহুভুজের ক্ষেত্রফল সূত্র'],
        coreFormulas: [
          { nameBn: 'দূরত্ব সূত্র', nameEn: 'Distance Formula', latex: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}' },
          { nameBn: 'ঢাল সূত্র', nameEn: 'Slope Formula', latex: 'm = \\frac{y_2 - y_1}{x_2 - x_1}' },
        ],
      },
    ],
  },
  {
    id: 'biology',
    level: 'ssc',
    nameBn: 'জীববিজ্ঞান (এসএসসি)',
    nameEn: 'SSC Biology (Classes 9-10)',
    icon: '🧬',
    color: 'from-emerald-600 to-green-600',
    badgeColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/40',
    code: 'SSC 138',
    descriptionBn: 'জীবন পাঠ, জীবকোষ ও টিস্যু, কোষ বিভাজন, জীবনীশক্তি (সালোকসংশ্লেষণ ও শ্বসন), এবং জীবে প্রজনন ও বংশগতি।',
    descriptionEn: 'Cell biology, tissues, cell division (mitosis/meiosis), bioenergetics, and genetics.',
    chapters: [
      {
        id: 'ssc-bio-ch2',
        chapterNumber: 2,
        titleBn: 'জীবকোষ ও টিস্যু',
        titleEn: 'Living Cells & Tissues',
        summaryBn: 'উদ্ভিদ ও প্রাণিকোষের অঙ্গাণুসমূহ, মাইটোকন্ড্রিয়া, প্লাস্টিড, সরল ও জটিল টিস্যু এবং পেশি টিস্যু।',
        summaryEn: 'Plant and animal cell organelles, mitochondria, plastids, simple and complex plant/animal tissues.',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৩-৪ নম্বর' },
        keyTopics: ['উদ্ভিদ ও প্রাণী কোষের তুলনা', 'ক্লোরোপ্লাস্টের গঠন', 'জাইলেম ও ফ্লোয়েম টিস্যু'],
      },
      {
        id: 'ssc-bio-ch4',
        chapterNumber: 4,
        titleBn: 'জীবনীশক্তি (Bioenergetics)',
        titleEn: 'Bioenergetics',
        summaryBn: 'ATP শক্তি মুদ্রা, সালোকসংশ্লেষণ (আলোক পর্যায় ও কেলভিন চক্র), এবং শ্বসন (গ্লাইকোলাইসিস ও ক্রেবস চক্র)।',
        summaryEn: 'ATP currency, photosynthesis (light & dark reactions), and aerobic respiration (glycolysis, Krebs cycle).',
        marksWeightage: { cq: '১০ নম্বর (১টি CQ)', mcq: '৪ নম্বর' },
        keyTopics: ['সালোকসংশ্লেষণের আলোক ও অন্ধকার পর্যায়', 'C3 ও C4 গতিপথ', 'সবাত ও অবাত শ্বসনের ATP হিসাব'],
      },
    ],
  },
  {
    id: 'ict',
    level: 'ssc',
    nameBn: 'তথ্য ও যোগাযোগ প্রযুক্তি (এসএসসি)',
    nameEn: 'SSC ICT (Classes 9-10)',
    icon: '💻',
    color: 'from-cyan-600 to-sky-600',
    badgeColor: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/40',
    code: 'SSC 154',
    descriptionBn: 'তথ্য ও যোগাযোগ প্রযুক্তি এবং আমাদের বাংলাদেশ, কম্পিউটার নিরাপত্তা ও ম্যালওয়্যার, ইন্টারনেট ও ডিজিটাল স্বাক্ষরতা।',
    descriptionEn: 'ICT and development in Bangladesh, computer security & antivirus, spreadsheet basics, and digital literacy.',
    chapters: [
      {
        id: 'ssc-ict-ch1',
        chapterNumber: 1,
        titleBn: 'তথ্য ও যোগাযোগ প্রযুক্তি এবং আমাদের বাংলাদেশ',
        titleEn: 'ICT & Our Bangladesh',
        summaryBn: 'ডিজিটাল বাংলাদেশ, ই-লার্নিং, ই-গভর্ন্যান্স, ই-সার্ভিস, এবং তথ্যপ্রযুক্তিতে ক্যারিয়ার সম্ভাবনা।',
        summaryEn: 'Digital Bangladesh initiatives, e-learning, e-governance, e-services, and IT careers.',
        marksWeightage: { cq: 'প্রযোজ্য নয়', mcq: '৫ নম্বর' },
        keyTopics: ['ই-লার্নিং ও দূরশিক্ষণ', 'ই-স্বাস্থ্যসেবা ও টেলিমেডিসিন', 'ই-গভর্ন্যান্স'],
      },
      {
        id: 'ssc-ict-ch3',
        chapterNumber: 3,
        titleBn: 'আমার শিক্ষায় ইন্টারনেট',
        titleEn: 'Internet in My Education',
        summaryBn: 'ডিজিটাল কন্টেন্ট, ই-বুক, শিক্ষায় ইন্টারনেটের ব্যবহার, কপিরাইট আইন ও ক্রিয়েটিভ কমন্স।',
        summaryEn: 'Digital learning materials, e-books, internet research safety, and fair use copyright laws.',
        marksWeightage: { cq: 'প্রযোজ্য নয়', mcq: '৫ নম্বর' },
        keyTopics: ['ডিজিটাল কন্টেন্টের প্রকারভেদ', 'ই-বুক রিডার', 'কপিরাইট ও প্লেজারিজম'],
        linkedToolIds: ['html-runner'],
      },
    ],
  },
];

export function getSubjectsByLevel(level: 'ssc' | 'hsc'): CurriculumSubject[] {
  return CURRICULUM_DATA.filter((s) => s.level === level);
}

export function getSubjectById(level: 'ssc' | 'hsc', subjectId: string): CurriculumSubject | undefined {
  return CURRICULUM_DATA.find((s) => s.level === level && s.id === subjectId);
}

export function getChapterById(chapterId: string): CurriculumChapter | undefined {
  for (const subject of CURRICULUM_DATA) {
    const chapter = subject.chapters.find((c) => c.id === chapterId);
    if (chapter) return chapter;
  }
  return undefined;
}
