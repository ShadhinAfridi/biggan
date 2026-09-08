export const languages = {
  bn: 'বাংলা',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'bn';

export const ui = {
  bn: {
    // Site Brand
    'site.title': 'Biggan.me — বিজ্ঞান ও গণিত সমস্যা সমাধান ও গাণিতিক টুলস',
    'site.description': 'NCTB ও NCERT কারিকুলাম ভিত্তিক বৈজ্ঞানিক ক্যালকুলেটর, ধাপে ধাপে সমীকরণ সমাধান, কাসিও fx-991 কি-স্ট্রোক গাইড এবং দ্বৈতভাষিক সায়েন্স ডিকশনারি।',
    'site.tagline': 'বিজ্ঞান ও গণিতের প্রতিটি ধাপ স্পষ্ট ও নির্ভুল',

    // Nav
    'nav.home': 'মূলপাতা',
    'nav.tools': 'ক্যালকুলেটর সমূহ',
    'nav.periodicTable': 'পর্যায় সারণী',
    'nav.glossary': 'বিজ্ঞান পরিভাষা',
    'nav.articles': 'টিউটোরিয়াল ও গাইড',
    'nav.curriculum': 'কারিকুলাম',
    'nav.formulas': 'সূত্র সংকলন',
    'nav.progress': 'আমার অগ্রগতি',
    'nav.about': 'পরিচিতি',
    'nav.methodology': 'পদ্ধতি ও নির্ভুলতা',

    // Tools
    'tools.title': 'প্রোগ্রাম্যাটিক বিজ্ঞান ক্যালকুলেটর',
    'tools.subtitle': 'প্রতিটি গণনায় পূর্ণাঙ্গ সমীকরণ প্রতিপাদন, একক বিশ্লেষণ ও কাসিও fx-991 সমাধান গাইড',
    'tools.molarMass.name': 'মোলার ভর ও শতকরা সংযুতি',
    'tools.molarMass.desc': 'কেলাস পানিযুক্ত লবণসহ যেকোনো যৌগের মোলার ভর ও মৌলের শতকরা পরিমাণ নির্ণয়।',
    'tools.redox.name': 'আয়ন-ইলেকট্রন জারণ-বিজারণ সমতা',
    'tools.redox.desc': 'অম্লীয় ও ক্ষারীয় মাধ্যমে অর্ধ-বিক্রিয়া পদ্ধতিতে পূর্ণাঙ্গ সমতাকরণ ও ইলেকট্রন স্থানান্তর।',
    'tools.sigFigs.name': 'তাৎপর্যপূর্ণ অঙ্ক (Sig Figs) নির্ণায়ক',
    'tools.sigFigs.desc': 'তাৎপর্যপূর্ণ অঙ্কের সংখ্যা গণনা, বৈজ্ঞানিক রূপান্তর এবং নির্ভুল যোগ-গুণ বিশ্লেষণ।',
    'tools.projectile.name': 'প্রাস ও প্রক্ষেপক গতিবিদ্যা',
    'tools.projectile.desc': 'সর্বোচ্চ উচ্চতা, বিচরণকাল, অনুভূমিক পাল্লা ও দ্বিমাত্রিক গতিপথের ভেক্টর চিত্র।',
    'tools.quadratic.name': 'দ্বিঘাত সমীকরণ ধাপে ধাপে সমাধান',
    'tools.quadratic.desc': 'বাস্তব ও জটিল মূল, নিশ্চয়ক (Discriminant) বিশ্লেষণ এবং পূর্ণবর্গ পদ্ধতি।',
    'tools.htmlRunner.name': 'এইচটিএমএল (HTML) কোড এডিটর ও রানার',
    'tools.htmlRunner.desc': 'লাইভ প্রিভিউ, টেবিল (rowspan/colspan), বোর্ড প্রশ্ন ও ভুল সংশোধনের এইচটিএমএল প্লেগ্রাউন্ড।',
    'tools.cRunner.name': 'সি প্রোগ্রামিং (C Code) সিমুলেটর ও মেমরি ট্রেসার',
    'tools.cRunner.desc': 'লুপ, শর্ত ও ভ্যারিয়েবলের ধাপভিত্তিক মেমরি ট্রেস এবং এইচএসসি বোর্ড স্ট্যান্ডার্ড সি রানার।',
    'tools.dbSimulator.name': 'রিলেশনাল ডেটাবেজ ও SQL কুয়েরি সিমুলেটর',
    'tools.dbSimulator.desc': 'ব্রাউজারে সরাসরি SQL কুয়েরি রান, টেবিল রিলেশনশিপ ও এইচএসসি বোর্ড ডেটাবেজ এক্সপ্লোরার।',
    'tools.circuitSimulator.name': 'ডিজিটাল লজিক গেট ও সার্কিট সিমুলেটর',
    'tools.circuitSimulator.desc': 'লজিক গেট (AND, OR, NOT, XOR), হাফ/ফুল অ্যাডার এবং লাইভ ট্রুথ টেবিল সিমুলেটর।',
    'tools.generalMath.name': 'এসএসসি সাধারণ গণিত সমাধান ও সমীকরণ ইঞ্জিন',
    'tools.generalMath.desc': 'পরিসংখ্যান (গড়, মধ্যক, প্রচুরক), ত্রিকোণমিতি ও উচ্চতা, বীজগণিত ও পরিমিতির সম্পূর্ণ সমাধান।',
    'tools.physics.name': 'এসএসসি পদার্থবিজ্ঞান সমাধান ইঞ্জিন',
    'tools.physics.desc': '১৩টি অধ্যায়ের সম্পূর্ণ সমীকরণ সমাধান, কাসিও শর্টকাট ও বোর্ড প্রশ্নের অ্যানালাইসিস।',
    'tools.chemistry.name': 'এসএসসি রসায়ন সমাধান ইঞ্জিন',
    'tools.chemistry.desc': 'পরিমাণগত রসায়ন, ব্যাপন, মোল, মোলারিটি, সীমিত বিক্রিয়ক, ΔH ও pH সমাধানকারী।',
    'tools.biology.name': 'এসএসসি জীববিজ্ঞান সমাধান ইঞ্জিন',
    'tools.biology.desc': 'বিএমআই, বিএমআর, শ্বসন এটিপি, পুনেট স্কয়ার ও শক্তি পিরামিডের পুঙ্খানুপুঙ্খ হিসাব।',
    'tools.higherMath.name': 'এসএসসি উচ্চতর গণিত প্রমাণ ইঞ্জিন',
    'tools.higherMath.desc': '১৪টি অধ্যায়ের সম্পূর্ণ সমাধান: এ্যাপোলোনিওস, দ্বিঘাত, ধারা, দ্বিপদী বিস্তৃতি ও ক্ষেত্রফল।',

    // Casio
    'casio.guideTitle': 'কাসিও fx-991 ও fx-100MS ফিজিক্যাল ক্যালকুলেটর কি-স্ট্রোক গাইড',
    'casio.guideSubtitle': 'বোর্ড ও ভর্তি পরীক্ষায় অনুমোদিত সায়েন্টিফিক ক্যালকুলেটরে হুবহু একই হিসাব করার ধাপসমূহ:',
    'casio.model.cw': 'fx-991CW (নতুন ক্লাসউইজ)',
    'casio.model.ex': 'fx-991EX (ক্লাসউইজ)',
    'casio.model.es': 'fx-991ES PLUS / 2nd Edition',
    'casio.model.ms': 'fx-100MS / fx-570MS',

    // Layout Sections
    'section.calculator': 'ইন্টারেক্টিভ গণনাকারী',
    'section.derivation': 'গাণিতিক ভিত্তি ও সমীকরণ প্রতিপাদন',
    'section.examples': 'পাঠ্যবই ও বোর্ড পরীক্ষার ৩টি সমাধানকৃত উদাহরণ',
    'section.casio': 'ক্যালকুলেটর কি-স্ট্রোক গাইড',
    'section.applications': 'বাস্তব ও শিল্পক্ষেত্রে প্রয়োগ',
    'section.faq': 'বহুল জিজ্ঞাসিত প্রশ্নাবলী (FAQ)',

    // Common UI
    'ui.calculate': 'গণনা করুন',
    'ui.clear': 'মুছে ফেলুন',
    'ui.copy': 'কপি করুন',
    'ui.copied': 'কপি করা হয়েছে!',
    'ui.share': 'শেয়ার করুন',
    'ui.print': 'প্রিন্ট বা PDF সংরক্ষণ',
    'ui.steps': 'ধাপে ধাপে সমাধান',
    'ui.result': 'ফলাফল',
    'ui.input': 'ইনপুট দিন',
    'ui.example': 'উদাহরণ দেখুন',
    'ui.curriculum.nctb': 'NCTB (বাংলাদেশ)',
    'ui.curriculum.ncert': 'NCERT / WBCHSE (ভারত)',

    // Footer & Trust
    'footer.disclaimer': 'Biggan.me একটি উন্মুক্ত বিজ্ঞান প্ল্যাটফর্ম। সমস্ত গণনা NCTB ও IUPAC স্বীকৃত আন্তর্জাতিক মানদণ্ডে নির্মিত।',
    'footer.privacy': 'গোপনীয়তা নীতি',
    'footer.terms': 'ব্যবহারের শর্তাবলী',
    'footer.editorial': 'সম্পাদকীয় নীতিমালা',
    'footer.rights': 'সর্বস্বত্ব সংরক্ষিত।',
  },
  en: {
    // Site Brand
    'site.title': 'Biggan.me — Step-by-Step STEM Solvers & Scientific Calculators',
    'site.description': 'Bilingual STEM platform featuring step-by-step LaTeX derivations, Casio fx-991 keystroke guides, and NCTB/NCERT curriculum alignment.',
    'site.tagline': 'Every step transparent, mathematically rigorous, and exam-ready',

    // Nav
    'nav.home': 'Home',
    'nav.tools': 'Calculators',
    'nav.periodicTable': 'Periodic Table',
    'nav.glossary': 'Glossary',
    'nav.articles': 'Guides & Articles',
    'nav.curriculum': 'Curriculum',
    'nav.formulas': 'Formula Sheet',
    'nav.progress': 'My Progress',
    'nav.about': 'About',
    'nav.methodology': 'Methodology',

    // Tools
    'tools.title': 'Programmatic Scientific Calculators',
    'tools.subtitle': 'Full algebraic intermediate steps, dimensional unit validation, and physical Casio exam hardware keystrokes.',
    'tools.molarMass.name': 'Molar Mass & Composition Deconstructor',
    'tools.molarMass.desc': 'Calculate molecular mass of hydrates, coordination complexes, and isotopic percent compositions.',
    'tools.redox.name': 'Ion-Electron Redox Balancer',
    'tools.redox.desc': 'Balance oxidation-reduction reactions in acidic and basic media via step-by-step half-reactions.',
    'tools.sigFigs.name': 'Significant Figures Engine',
    'tools.sigFigs.desc': 'Determine significant digits, scientific notation conversions, and precision-tracked arithmetic.',
    'tools.projectile.name': 'Kinematic Projectile Motion Solver',
    'tools.projectile.desc': 'Calculate maximum height, time of flight, range, and interactive 2D trajectory vector plots.',
    'tools.quadratic.name': 'Procedural Quadratic Equation Solver',
    'tools.quadratic.desc': 'Real and complex roots, discriminant analysis, and completing-the-square derivations.',
    'tools.htmlRunner.name': 'HTML Code Playground & Live Runner',
    'tools.htmlRunner.desc': 'Live responsive iframe sandbox, board exam tables (rowspan/colspan), and error fixer.',
    'tools.cRunner.name': 'C Programming Code Simulator & Memory Tracer',
    'tools.cRunner.desc': 'Step-by-step RAM variable memory tracing, loops, conditional branches, and board C algorithms.',
    'tools.dbSimulator.name': 'Relational Database & SQL Simulator',
    'tools.dbSimulator.desc': 'In-browser SQL queries, relational schemas, ER diagrams, and secondary exam databases.',
    'tools.circuitSimulator.name': 'Digital Logic Gate & Circuit Simulator',
    'tools.circuitSimulator.desc': 'Interactive logic gates, Half/Full Adders, universal gate circuits, and live truth tables.',
    'tools.generalMath.name': 'SSC General Mathematics Solver & Equation Engine',
    'tools.generalMath.desc': 'Step-by-step solver for grouped statistics (Mean, Median, Mode), trigonometry, algebra, and mensuration.',
    'tools.physics.name': 'SSC Physics Equation Suite',
    'tools.physics.desc': 'Complete solver covering all 13 NCTB chapters: Kinematics, Dynamics, Heat, Optics & Circuits.',
    'tools.chemistry.name': 'SSC Chemistry Equation Suite',
    'tools.chemistry.desc': 'Quantitative solver covering Graham’s Law, Bohr Model, Mole, Limiting Reactants, ΔH, and pH.',
    'tools.biology.name': 'SSC Biology Solutions Suite',
    'tools.biology.desc': 'Quantitative solver for BMI, BMR, Caloric Needs, Respiration ATP, Punnett squares, and Energy.',
    'tools.higherMath.name': 'SSC Higher Math Solver & Proofs',
    'tools.higherMath.desc': 'Comprehensive solver for all 14 NCTB chapters: Apollonius, quadratics, series, binomials & geometry.',

    // Casio
    'casio.guideTitle': 'Casio fx-991 & fx-100MS Hardware Keystroke Guide',
    'casio.guideSubtitle': 'Exact button sequences permitted in secondary board and university entrance exams:',
    'casio.model.cw': 'fx-991CW (New ClassWiz)',
    'casio.model.ex': 'fx-991EX (ClassWiz)',
    'casio.model.es': 'fx-991ES PLUS / 2nd Edition',
    'casio.model.ms': 'fx-100MS / fx-570MS',

    // Layout Sections
    'section.calculator': 'Interactive Calculator Workspace',
    'section.derivation': 'Mathematical Foundations & Derivations',
    'section.examples': 'Solved Textbook & Board Exam Exemplars',
    'section.casio': 'Casio Hardware Operational Bridge',
    'section.applications': 'Industrial & Real-World Applications',
    'section.faq': 'Frequently Asked Questions (FAQ)',

    // Common UI
    'ui.calculate': 'Calculate',
    'ui.clear': 'Clear',
    'ui.copy': 'Copy',
    'ui.copied': 'Copied!',
    'ui.share': 'Share',
    'ui.print': 'Print / Save PDF',
    'ui.steps': 'Step-by-Step Solution',
    'ui.result': 'Result',
    'ui.input': 'Input',
    'ui.example': 'Load Example',
    'ui.curriculum.nctb': 'NCTB (Bangladesh)',
    'ui.curriculum.ncert': 'NCERT / WBCHSE (India)',

    // Footer & Trust
    'footer.disclaimer': 'Biggan.me is an open scientific learning utility. Calculations align with IUPAC and secondary board standards.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.editorial': 'Editorial Standards',
    'footer.rights': 'All rights reserved.',
  },
} as const;
