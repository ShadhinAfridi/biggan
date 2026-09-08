export const languages = {
  bn: 'বাংলা',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'bn';

export const ui = {
  bn: {
    // Site Brand
    'site.title': 'Biggan.me — বিজ্ঞান ও গণিত ক্যালকুলেটর (ধাপে ধাপে সমাধান)',
    'site.description': 'এসএসসি ও এইচএসসি বিজ্ঞান ও গণিতের ক্যালকুলেটর। সাথে প্রতিটি ধাপের সমীকরণ, কাসিও fx-991 নির্দেশিকা এবং বিষয়ভিত্তিক আলোচনা।',
    'site.tagline': '৯ম–১২শ শ্রেণির বিজ্ঞান ও গণিতের প্রতিটি ধাপের সমাধান',

    // Nav
    'nav.home': 'মূলপাতা',
    'nav.tools': 'ক্যালকুলেটর সমূহ',
    'nav.periodicTable': 'পর্যায় সারণি',
    'nav.glossary': 'বিজ্ঞান পরিভাষা',
    'nav.articles': 'টিউটোরিয়াল ও গাইড',
    'nav.curriculum': 'পাঠ্যক্রম',
    'nav.formulas': 'সূত্র সংকলন',
    'nav.progress': 'পড়ালেখার অগ্রগতি',
    'nav.about': 'আমাদের কথা',
    'nav.methodology': 'পদ্ধতি ও নির্ভুলতা',

    // Tools
    'tools.title': 'বিজ্ঞান ও গণিত ক্যালকুলেটর',
    'tools.subtitle': 'প্রতিটি গণনার সূত্রের ধাপ, এককের হিসাব এবং কাসিও fx-991 ক্যালকুলেটর ব্যবহারের নিয়ম।',
    'tools.molarMass.name': 'মোলার ভর ও শতকরা সংযুতি',
    'tools.molarMass.desc': 'যৌগের সংকেত থেকে প্রতিটি মৌলের পরমাণু সংখ্যা বের করে এবং কেলাস পানিসহ মোট মোলার ভর হিসাব করে।',
    'tools.redox.name': 'আয়ন-ইলেকট্রন জারণ-বিজারণ সমতা',
    'tools.redox.desc': 'অম্লীয় বা ক্ষারীয় মাধ্যমে অর্ধ-বিক্রিয়া পদ্ধতিতে জারণ-বিজারণ সমীকরণ সমতা করে।',
    'tools.sigFigs.name': 'তাৎপর্যপূর্ণ অঙ্ক (Sig Figs) ক্যালকুলেটর',
    'tools.sigFigs.desc': 'তাৎপর্যপূর্ণ অঙ্ক গণনা, বৈজ্ঞানিক রূপান্তর এবং যোগ ও গুণের রাউন্ডিং নিয়ম প্রয়োগ করে।',
    'tools.projectile.name': 'প্রাসের গতি ক্যালকুলেটর',
    'tools.projectile.desc': 'নিক্ষেপণ বেগ ও কোণ থেকে সর্বোচ্চ উচ্চতা, বিচরণকাল এবং অনুভূমিক পাল্লা হিসাব করে।',
    'tools.quadratic.name': 'দ্বিঘাত সমীকরণ সমাধান',
    'tools.quadratic.desc': 'নিশ্চায়ক বের করে সমীকরণের মূলের প্রকৃতি জানায় এবং বাস্তব ও জটিল মূলের মান দেখায়।',
    'tools.htmlRunner.name': 'এইচটিএমএল কোড প্র্যাকটিস ও রানার',
    'tools.htmlRunner.desc': 'সরাসরি ব্রাউজারে কোড লিখে প্রিভিউ দেখা, টেবিল (rowspan/colspan) তৈরি ও ট্যাগ যাচাইয়ের সুযোগ।',
    'tools.cRunner.name': 'সি প্রোগ্রামিং সিমুলেটর ও ভ্যারিয়েবল ট্রেসার',
    'tools.cRunner.desc': 'লুপ ও শর্তযুক্ত কোডের প্রতি লাইনে ভ্যারিয়েবলের মান কীভাবে বদলায় তা ধাপে ধাপে দেখায়।',
    'tools.dbSimulator.name': 'এসকিউএল ডেটাবেজ সিমুলেটর',
    'tools.dbSimulator.desc': 'ব্রাউজারে সরাসরি SELECT, WHERE, ORDER BY ও JOIN কুয়েরি চালিয়ে ডেটাবেজ প্র্যাকটিস করার টুল।',
    'tools.circuitSimulator.name': 'লজিক গেট ও সার্কিট সিমুলেটর',
    'tools.circuitSimulator.desc': 'মৌলিক ও সার্বজনীন গেট পরীক্ষা, হাফ ও ফুল অ্যাডার বর্তনী তৈরি এবং ট্রুথ টেবিল দেখার সিমুলেটর।',
    'tools.generalMath.name': 'এসএসসি সাধারণ গণিত সমাধানকারী',
    'tools.generalMath.desc': 'শ্রেণিকৃত উপাত্তের পরিসংখ্যান (গড়, মধ্যক, প্রচুরক), ত্রিকোণমিতিক উচ্চতা, বীজগণিত ও পরিমিতির সমস্যা সমাধান।',
    'tools.physics.name': 'এসএসসি পদার্থবিজ্ঞান ক্যালকুলেটর',
    'tools.physics.desc': 'পাঠ্যবইয়ের ১৩টি অধ্যায়ের গাণিতিক সমীকরণ সমাধান, সূত্রের ধাপ এবং ক্যালকুলেটর ব্যবহারের নির্দেশিকা।',
    'tools.chemistry.name': 'এসএসসি রসায়ন ক্যালকুলেটর',
    'tools.chemistry.desc': 'গ্যাসের ব্যাপন, মোলের রূপান্তর, দ্রবণের মোলারিটি, লিমিটিং বিক্রিয়ক, বিক্রিয়া তাপ ও pH সমাধান।',
    'tools.biology.name': 'এসএসসি জীববিজ্ঞান ক্যালকুলেটর',
    'tools.biology.desc': 'বিএমআই, বিএমআর, দৈনিক ক্যালরি চাহিদা, শ্বসনে এটিপি উৎপাদন, জেনেটিক ক্রস ও বাস্তুতন্ত্রের শক্তি হিসাব।',
    'tools.higherMath.name': 'এসএসসি উচ্চতর গণিত সমাধানকারী',
    'tools.higherMath.desc': 'পাঠ্যবইয়ের ১৪টি অধ্যায়ের সমাধান: ভেনচিত্র, অ্যাপোলোনিয়াস উপপাদ্য, দ্বিঘাত, অনন্ত ধারা ও স্থানাঙ্ক জ্যামিতি।',

    // Casio
    'casio.guideTitle': 'কাসিও fx-991 ও fx-100MS ক্যালকুলেটরে হিসাব করার নিয়ম',
    'casio.guideSubtitle': 'বোর্ড ও ভর্তি পরীক্ষায় অনুমোদিত সায়েন্টিফিক ক্যালকুলেটরে একই হিসাব করার ধাপসমূহ:',
    'casio.model.cw': 'fx-991CW (নতুন ক্লাসউইজ)',
    'casio.model.ex': 'fx-991EX (ক্লাসউইজ)',
    'casio.model.es': 'fx-991ES PLUS / 2nd Edition',
    'casio.model.ms': 'fx-100MS / fx-570MS',

    // Layout Sections
    'section.calculator': 'ক্যালকুলেটর',
    'section.derivation': 'সূত্র ও গাণিতিক প্রতিপাদন',
    'section.examples': 'পাঠ্যবই ও বোর্ড পরীক্ষার উদাহরণ',
    'section.casio': 'কাসিও ক্যালকুলেটর গাইড',
    'section.applications': 'ব্যবহারিক প্রয়োগ',
    'section.faq': 'সাধারণ জিজ্ঞাসা (FAQ)',

    // Common UI
    'ui.calculate': 'হিসাব করো',
    'ui.clear': 'মুছে ফেলো',
    'ui.copy': 'কপি করো',
    'ui.copied': 'কপি হয়েছে',
    'ui.share': 'শেয়ার করো',
    'ui.print': 'প্রিন্ট বা PDF সংরক্ষণ',
    'ui.steps': 'ধাপে ধাপে সমাধান',
    'ui.result': 'ফলাফল',
    'ui.input': 'মান লিখুন',
    'ui.example': 'উদাহরণ দেখুন',
    'ui.curriculum.nctb': 'এনসিটিবি (বাংলাদেশ)',
    'ui.curriculum.ncert': 'এনসিইআরটি / পশ্চিমবঙ্গ বোর্ড',

    // Footer & Trust
    'footer.disclaimer': 'Biggan.me বিজ্ঞান ও গণিত শিক্ষার উন্মুক্ত প্ল্যাটফর্ম। সমস্ত গণনা ও সূত্র NCTB পাঠ্যবইয়ের মানদণ্ড অনুযায়ী তৈরি।',
    'footer.privacy': 'গোপনীয়তা নীতি',
    'footer.terms': 'ব্যবহারের নিয়মাবলী',
    'footer.editorial': 'সম্পাদকীয় নীতিমালা',
    'footer.rights': 'সর্বস্বত্ব সংরক্ষিত।',
  },
  en: {
    // Site Brand
    'site.title': 'Biggan.me — Science & Math Calculators with Step-by-Step Solutions',
    'site.description': 'Calculators for SSC and HSC science and math, with step-by-step derivations, Casio fx-991 steps, and bilingual notes.',
    'site.tagline': 'Step-by-step solutions for class 9–12 science and math',

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
    'tools.title': 'Science & Math Calculators',
    'tools.subtitle': 'Step-by-step equations, unit breakdowns, and Casio fx-991 calculator steps for each problem.',
    'tools.molarMass.name': 'Molar Mass & Mass Percent',
    'tools.molarMass.desc': 'Find molar mass for hydrates, coordination compounds, and isotopic mixtures.',
    'tools.redox.name': 'Redox Equation Balancer',
    'tools.redox.desc': 'Balance redox reactions in acidic or basic solutions using the half-reaction method.',
    'tools.sigFigs.name': 'Significant Figures Calculator',
    'tools.sigFigs.desc': 'Count significant digits, convert to scientific notation, and apply rounding rules in arithmetic.',
    'tools.projectile.name': 'Projectile Motion Calculator',
    'tools.projectile.desc': 'Find maximum height, time of flight, horizontal range, and trajectory coordinates.',
    'tools.quadratic.name': 'Quadratic Equation Solver',
    'tools.quadratic.desc': 'Find real and complex roots, discriminant value, and step-by-step factoring.',
    'tools.htmlRunner.name': 'HTML Code Playground',
    'tools.htmlRunner.desc': 'Write and preview HTML, test table layouts with rowspan and colspan, and check tags.',
    'tools.cRunner.name': 'C Code Simulator & Variable Tracer',
    'tools.cRunner.desc': 'Step through loops and conditionals while watching variable values change line by line.',
    'tools.dbSimulator.name': 'SQL Database Simulator',
    'tools.dbSimulator.desc': 'Run SELECT, WHERE, ORDER BY, and JOIN queries on sample student database tables.',
    'tools.circuitSimulator.name': 'Logic Gate & Circuit Simulator',
    'tools.circuitSimulator.desc': 'Test basic and universal logic gates, build Half and Full Adders, and view truth tables.',
    'tools.generalMath.name': 'SSC General Math Solver',
    'tools.generalMath.desc': 'Solve problems in grouped statistics (mean, median, mode), height-distance, algebra, and mensuration.',
    'tools.physics.name': 'SSC Physics Calculator',
    'tools.physics.desc': 'Solvers for all 13 textbook chapters: kinematics, work-power, heat, optics, circuits, and decay.',
    'tools.chemistry.name': 'SSC Chemistry Calculator',
    'tools.chemistry.desc': 'Solvers for gas diffusion, mole conversions, solution molarity, limiting reactants, ΔH, and pH.',
    'tools.biology.name': 'SSC Biology Calculator',
    'tools.biology.desc': 'Calculators for BMI, BMR, daily calories, respiration ATP yield, Punnett squares, and energy flow.',
    'tools.higherMath.name': 'SSC Higher Math Calculator',
    'tools.higherMath.desc': 'Solvers for all 14 chapters: Venn sets, Apollonius medians, quadratics, series, binomials, and vectors.',

    // Casio
    'casio.guideTitle': 'Casio fx-991 & fx-100MS Keystroke Guide',
    'casio.guideSubtitle': 'Button sequences for standard scientific calculators allowed in board exams:',
    'casio.model.cw': 'fx-991CW (New ClassWiz)',
    'casio.model.ex': 'fx-991EX (ClassWiz)',
    'casio.model.es': 'fx-991ES PLUS / 2nd Edition',
    'casio.model.ms': 'fx-100MS / fx-570MS',

    // Layout Sections
    'section.calculator': 'Calculator',
    'section.derivation': 'Formula & Derivation',
    'section.examples': 'Solved Textbook Examples',
    'section.casio': 'Casio Calculator Guide',
    'section.applications': 'Practical Applications',
    'section.faq': 'Frequently Asked Questions',

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
    'footer.disclaimer': 'Biggan.me is a free educational tool for science and math. Formulas follow NCTB and international textbook standards.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.editorial': 'Editorial Standards',
    'footer.rights': 'All rights reserved.',
  },
} as const;
