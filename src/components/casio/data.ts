export type CasioModel = 'fx-991cw' | 'fx-991ex' | 'fx-991es' | 'fx-100ms';

interface KeyStep {
  labelEn: string;
  labelBn: string;
  keys: string[]; // keycap labels, e.g. ['SHIFT', 'MODE', '5', '3']
  noteEn?: string;
  noteBn?: string;
}

interface ModelGuide {
  modelName: string;
  descriptionEn: string;
  descriptionBn: string;
  steps: KeyStep[];
  proTipEn?: string;
  proTipBn?: string;
}

interface CasioGuideProps {
  topic: 'quadratic' | 'sigfigs' | 'kinematics' | 'molar-mass' | 'redox' | 'physics-general' | 'chemistry-general' | 'statistics' | 'biology-general' | 'higher-math';
  lang?: 'en' | 'bn';
}

export const GUIDES_DATA: Record<string, Record<CasioModel, ModelGuide>> = {
  quadratic: {
    'fx-991cw': {
      modelName: 'Casio fx-991CW (New ClassWiz)',
      descriptionEn: 'Modern menu-driven interface with high-res 4-gradation display.',
      descriptionBn: 'উচ্চ রেজোলিউশন ডিসপ্লে ও নতুন মেন্যু ন্যাভিগেশন সম্বলিত ক্যালকুলেটর।',
      steps: [
        {
          labelEn: '1. Access Equation App',
          labelBn: '১. সমীকরণ অ্যাপে প্রবেশ',
          keys: ['HOME', '▼', 'Equation', 'OK'],
          noteEn: 'Select "Equation" from the Home screen.',
          noteBn: 'হোম স্ক্রিন থেকে Equation সিলেক্ট করে OK চাপুন।',
        },
        {
          labelEn: '2. Select Polynomial Degree 2',
          labelBn: '২. দ্বিঘাত বহুপদী (Polynomial Degree 2) নির্বাচন',
          keys: ['Polynomial', 'OK', 'ax²+bx+c=0', 'OK'],
          noteEn: 'Choose degree 2 for quadratic problems.',
          noteBn: 'ডিগ্রি ২ সিলেক্ট করুন।',
        },
        {
          labelEn: '3. Input Coefficients a, b, c',
          labelBn: '৩. সহগসমূহ a, b, c ইনপুট দিন',
          keys: ['[Value a]', 'EXE', '[Value b]', 'EXE', '[Value c]', 'EXE'],
          noteEn: 'Enter values with their respective signs (+/-).',
          noteBn: 'চিহ্নসহ মান বসিয়ে প্রতিটির পর EXE চাপুন।',
        },
        {
          labelEn: '4. View Roots and Parabola Vertex',
          labelBn: '৪. সমাধানকৃত মূল এবং পরাবৃত্তের শীর্ষবিন্দু প্রদর্শন',
          keys: ['EXE', '▼', 'EXE'],
          noteEn: 'Press EXE to cycle through x1, x2, and the minimum/maximum vertex coordinates.',
          noteBn: 'EXE ও ডাউন অ্যারো চেপে x1, x2 এবং শীর্ষবিন্দু দেখুন।',
        },
      ],
      proTipEn: 'Exam Tip: Press [FORMAT] to toggle between exact fraction/radical form and decimal approximation.',
      proTipBn: 'পরীক্ষার টিপ: [FORMAT] বাটন চেপে ভগ্নাংশ/বর্গমূল থেকে দশমিক মানে রূপান্তর করা যায়।',
    },
    'fx-991ex': {
      modelName: 'Casio fx-991EX (ClassWiz)',
      descriptionEn: 'Natural textbook display with icon menu system.',
      descriptionBn: 'আইকন মেন্যু সিস্টেম ও ন্যাচারাল ডিসপ্লে সমৃদ্ধ বিশ্বখ্যাত মডেল।',
      steps: [
        {
          labelEn: '1. Open Equation / Function Mode',
          labelBn: '১. সমীকরণ বা ফাংশন মোড খুলুন',
          keys: ['MENU', '(-)', '2', '2'],
          noteEn: 'Shortcut: MENU then (-) opens Equation Mode, 2 selects Polynomial, 2 selects Degree 2.',
          noteBn: 'শর্টকাট: MENU চেপে (-) চাপলে সমীকরণ মোড আসবে, এরপর 2 ও 2 চাপুন।',
        },
        {
          labelEn: '2. Enter Values a, b, c',
          labelBn: '২. a, b, c এর মান প্রবেশ করান',
          keys: ['a', '=', 'b', '=', 'c', '='],
          noteEn: 'Press "=" after each coefficient.',
          noteBn: 'প্রতিটি সহগ টাইপ করে "=" চাপুন।',
        },
        {
          labelEn: '3. Obtain Real or Complex Roots',
          labelBn: '৩. বাস্তব বা জটিল সংখ্যা মূল প্রদর্শন',
          keys: ['='],
          noteEn: 'Press "=" repeatedly to view x1, x2, x-value of min/max, and y-value of min/max.',
          noteBn: '"=" চেপে x1, x2 এবং শীর্ষবিন্দু দেখা যাবে।',
        },
      ],
      proTipEn: 'Press [OPTN] then [1] to view QR code for online graph generation on your phone.',
      proTipBn: '[OPTN] এর পর [1] চেপে ফোনের মাধ্যমে গ্রাফ দেখার QR কোড তৈরি করা যায়।',
    },
    'fx-991es': {
      modelName: 'Casio fx-991ES PLUS / 2nd Edition',
      descriptionEn: 'The most popular board-exam permitted non-programmable calculator.',
      descriptionBn: 'বোর্ড পরীক্ষায় বহুল ব্যবহৃত ও অনুমোদিত নন-প্রোগ্রামেবল ক্যালকুলেটর।',
      steps: [
        {
          labelEn: '1. Enter Equation Mode',
          labelBn: '১. সমীকরণ মোড নির্বাচন',
          keys: ['MODE', '5', '3'],
          noteEn: 'MODE -> 5 (EQN) -> 3 (ax² + bx + c = 0).',
          noteBn: 'MODE চেপে 5 (EQN) এবং 3 চাপলে ax² + bx + c = 0 আসবে।',
        },
        {
          labelEn: '2. Enter Coefficients a, b, c',
          labelBn: '২. a, b, c ইনপুট',
          keys: ['a', '=', 'b', '=', 'c', '='],
          noteEn: 'Use the negative key (-) for negative coefficients, followed by "=".',
          noteBn: 'ঋণাত্মক মানের জন্য (-) বাটন ব্যবহার করে প্রতিটির পর "=" চাপুন।',
        },
        {
          labelEn: '3. Execute and View Solutions',
          labelBn: '৩. মূলসমূহ দেখুন',
          keys: ['='],
          noteEn: 'Displays X1. Press "=" again to view X2. Press [S-D] for decimals.',
          noteBn: '"=" চাপলে X1 আসবে, পুনরায় "=" চাপলে X2 আসবে। দশমিকে দেখতে [S-D] চাপুন।',
        },
      ],
      proTipEn: 'To return to standard calculation mode, press [MODE] then [1] (COMP).',
      proTipBn: 'সাধারণ গণনায় ফিরে যেতে [MODE] চেপে [1] (COMP) চাপুন।',
    },
    'fx-100ms': {
      modelName: 'Casio fx-100MS / fx-570MS (Two-Line Display)',
      descriptionEn: 'Affordable two-line display scientific calculator widespread across secondary schools.',
      descriptionBn: 'মাধ্যমিক ও উচ্চ মাধ্যমিকে সর্বাধিক ব্যবহৃত সাশ্রয়ী টু-লাইন ডিসপ্লে ক্যালকুলেটর।',
      steps: [
        {
          labelEn: '1. Enter Equation Mode',
          labelBn: '১. সমীকরণ মোড নির্বাচন',
          keys: ['MODE', 'MODE', 'MODE', '1'],
          noteEn: 'Press MODE 3 times until "EQN" appears, then press 1.',
          noteBn: 'MODE বাটন ৩ বার চাপলে "EQN" আসবে, এরপর 1 চাপুন।',
        },
        {
          labelEn: '2. Select Degree 2',
          labelBn: '২. ডিগ্রি ২ নির্বাচন',
          keys: ['▶', '2'],
          noteEn: 'Press right arrow [▶] to toggle from Unknowns to Degree, then press 2.',
          noteBn: 'ডান অ্যারো [▶] চেপে Degree মেন্যুতে গিয়ে 2 চাপুন।',
        },
        {
          labelEn: '3. Enter Coefficients a, b, c',
          labelBn: '৩. সহগ a, b, c প্রবেশ',
          keys: ['a', '=', 'b', '=', 'c', '='],
          noteEn: 'Input each number and press "=".',
          noteBn: 'প্রতিটি সংখ্যা লিখে "=" চাপুন।',
        },
        {
          labelEn: '4. Read Roots & Complex Values',
          labelBn: '৪. সমাধান মূল পড়া',
          keys: ['='],
          noteEn: 'Press "=" for x1 and x2. If roots are complex, a small "R<=>I" symbol appears in upper right; press [SHIFT] [=] to view imaginary part.',
          noteBn: 'মূল জটিল সংখ্যা হলে স্ক্রিনের উপরে "R<=>I" দেখাবে; কাল্পনিক অংশ দেখতে [SHIFT] [=] চাপুন।',
        },
      ],
      proTipEn: 'Clear memory to fix errors: press [SHIFT] [MODE] [3] [=] [=] (All Reset).',
      proTipBn: 'ত্রুটি সংশোধনে সম্পূর্ণ রিসেট দিতে চাপুন: [SHIFT] [MODE] [3] [=] [=]।',
    },
  },
  sigfigs: {
    'fx-991cw': {
      modelName: 'Casio fx-991CW',
      descriptionEn: 'Configure scientific notation and significant figures display.',
      descriptionBn: 'বৈজ্ঞানিক সংখ্যা ও তাৎপর্যপূর্ণ অঙ্ক নির্দিষ্ট করার পদ্ধতি।',
      steps: [
        {
          labelEn: '1. Open Settings',
          labelBn: '১. সেটিংস খুলুন',
          keys: ['SETTINGS', 'Calc Settings', 'Number Format'],
          noteEn: 'Navigate to Number Format.',
          noteBn: 'Settings থেকে Number Format এ যান।',
        },
        {
          labelEn: '2. Set Scientific Notation (Sci)',
          labelBn: '২. সায়েন্টিফিক মোড নির্ধারণ',
          keys: ['Sci', 'Select digits (0-9)', 'OK'],
          noteEn: 'Select desired number of significant figures.',
          noteBn: 'কাঙ্ক্ষিত তাৎপর্যপূর্ণ অঙ্কের সংখ্যা নির্বাচন করুন।',
        },
      ],
    },
    'fx-991ex': {
      modelName: 'Casio fx-991EX',
      descriptionEn: 'Set exact significant figures display limit.',
      descriptionBn: 'নির্দিষ্ট তাৎপর্যপূর্ণ অঙ্কে ডিসপ্লে সেট করার পদ্ধতি।',
      steps: [
        {
          labelEn: '1. Open Setup',
          labelBn: '১. সেটআপ মেন্যু খুলুন',
          keys: ['SHIFT', 'MENU', '3', '2'],
          noteEn: 'SHIFT -> MENU -> 3 (Number Format) -> 2 (Sci).',
          noteBn: 'SHIFT -> MENU -> 3 (Number Format) -> 2 (Sci) চাপুন।',
        },
        {
          labelEn: '2. Select Sig Figs Count (0 to 9)',
          labelBn: '২. তাৎপর্যপূর্ণ অঙ্কের সংখ্যা দিন (০-৯)',
          keys: ['3'],
          noteEn: 'Example: pressing 3 forces all answers into 3 significant figures.',
          noteBn: 'উদাহরণস্বরূপ: 3 চাপলে ক্যালকুলেটরের সকল উত্তর ৩টি তাৎপর্যপূর্ণ অঙ্কে আসবে।',
        },
      ],
    },
    'fx-991es': {
      modelName: 'Casio fx-991ES PLUS',
      descriptionEn: 'Standard scientific notation setup.',
      descriptionBn: 'স্ট্যান্ডার্ড সায়েন্টিফিক সেটআপ।',
      steps: [
        {
          labelEn: '1. Access Setup Menu',
          labelBn: '১. সেটআপ মেন্যুতে প্রবেশ',
          keys: ['SHIFT', 'MODE', '7'],
          noteEn: 'Press SHIFT -> MODE -> 7 (Sci).',
          noteBn: 'SHIFT -> MODE -> 7 (Sci) চাপুন।',
        },
        {
          labelEn: '2. Choose Significant Figures (0-9)',
          labelBn: '২. তাৎপর্যপূর্ণ অঙ্কের সংখ্যা নির্বাচন',
          keys: ['3'],
          noteEn: 'Select 3 to round to 3 significant figures automatically.',
          noteBn: '৩টি তাৎপর্যপূর্ণ অঙ্কে অটো রাউন্ডিং করতে 3 চাপুন।',
        },
      ],
      proTipEn: 'To restore standard floating display, press [SHIFT] [MODE] [8] [2] (Norm 2).',
      proTipBn: 'স্বাভাবিক ডিসপ্লেতে ফিরে যেতে [SHIFT] [MODE] [8] [2] (Norm 2) চাপুন।',
    },
    'fx-100ms': {
      modelName: 'Casio fx-100MS / fx-570MS',
      descriptionEn: 'Classic two-line display Sci format configuration.',
      descriptionBn: 'টু-লাইন ডিসপ্লেতে সায়েন্টিফিক ফরম্যাট সেট করার ধাপ।',
      steps: [
        {
          labelEn: '1. Open Display Setup',
          labelBn: '১. ডিসপ্লে সেটআপ ওপেন',
          keys: ['MODE', 'MODE', 'MODE', 'MODE', 'MODE', '2'],
          noteEn: 'Press MODE 5 times until "Fix Sci Norm" appears, then press 2 (Sci).',
          noteBn: 'MODE বাটন ৫ বার চাপলে Fix Sci Norm আসবে, এরপর 2 (Sci) চাপুন।',
        },
        {
          labelEn: '2. Set Number of Significant Digits (0-9)',
          labelBn: '২. অঙ্কের সংখ্যা দিন',
          keys: ['3'],
          noteEn: 'Select 1 through 9 for required precision.',
          noteBn: '১ থেকে ৯ এর মধ্যে কাঙ্ক্ষিত মান নির্বাচন করুন।',
        },
      ],
      proTipEn: 'To reset to normal display, press [MODE] 5 times -> [3] (Norm) -> [2].',
      proTipBn: 'স্বাভাবিক মানে ফিরতে MODE ৫ বার -> [3] (Norm) -> [2] চাপুন।',
    },
  },
  kinematics: {
    'fx-991cw': {
      modelName: 'Casio fx-991CW',
      descriptionEn: 'Calculate projectile kinematics using multi-line expression memory.',
      descriptionBn: 'বহু-লাইন এক্সপ্রেশন ও মেমরি ভ্যারিয়েবল ব্যবহারে গতিবিদ্যার হিসাব।',
      steps: [
        {
          labelEn: '1. Store Velocity and Angle in Variables',
          labelBn: '১. আদি বেগ ও কোণ মেমরিতে সংরক্ষণ',
          keys: ['20', 'VARIABLE', 'A', 'EXE', '45', 'VARIABLE', 'B', 'EXE'],
          noteEn: 'Store v0 in variable A and launch angle theta in variable B.',
          noteBn: 'আদি বেগ A মেমরিতে এবং কোণ B মেমরিতে সেভ করুন।',
        },
        {
          labelEn: '2. Compute Range Formula: R = A²·sin(2B)/9.8',
          labelBn: '২. পাল্লা নির্ণয়: R = A²·sin(2B)/9.8',
          keys: ['A', 'x²', '×', 'sin', '(', '2', 'B', ')', '÷', '9.8', 'EXE'],
          noteEn: 'Directly computes the horizontal range in meters.',
          noteBn: 'সরাসরি অনুভূমিক পাল্লার মান মিটারে পাওয়া যাবে।',
        },
      ],
    },
    'fx-991ex': {
      modelName: 'Casio fx-991EX',
      descriptionEn: 'Fast memory storage for kinematic equations.',
      descriptionBn: 'দ্রুত মেমরি স্টোরেজ দিয়ে প্রাসের জটিল সূত্রের সমাধান।',
      steps: [
        {
          labelEn: '1. Store Initial Velocity (v0) into A',
          labelBn: '১. আদি বেগ A তে স্টোর করুন',
          keys: ['20', 'STO', 'A'],
          noteEn: 'Press value then STO and A key.',
          noteBn: 'সংখ্যা লিখে STO তারপর A বাটন চাপুন।',
        },
        {
          labelEn: '2. Store Angle (theta) into B',
          labelBn: '২. কোণের মান B তে স্টোর করুন',
          keys: ['45', 'STO', 'B'],
          noteEn: 'Stores 45 degrees in memory B.',
          noteBn: 'কোণের মান ৪৫ ডিগ্রি B তে সংরক্ষিত হলো।',
        },
        {
          labelEn: '3. Calculate Maximum Height: (A·sin(B))² / (2 × 9.8)',
          labelBn: '৩. সর্বোচ্চ উচ্চতা: (A·sin(B))² / (2 × 9.8)',
          keys: ['(', 'ALPHA', 'A', 'sin', 'ALPHA', 'B', ')', 'x²', '÷', '(', '2', '×', '9.8', ')', '='],
          noteEn: 'Computes maximum elevation H_max accurately.',
          noteBn: 'সর্বোচ্চ উচ্চতা H_max এর নিখুঁত মান পাওয়া যাবে।',
        },
      ],
    },
    'fx-991es': {
      modelName: 'Casio fx-991ES PLUS',
      descriptionEn: 'Using STO/RCL variables for projectile motion.',
      descriptionBn: 'প্রাসের অংকে STO ও RCL মেমরি ব্যবহারের কৌশল।',
      steps: [
        {
          labelEn: '1. Ensure Degree Mode (D on top screen)',
          labelBn: '১. ক্যালকুলেটর Degree মোডে রাখা নিশ্চিত করুন',
          keys: ['SHIFT', 'MODE', '3'],
          noteEn: 'Make sure a small "D" is visible at the top of the display.',
          noteBn: 'স্ক্রিনের শীর্ষে "D" লেখা নিশ্চিত করুন।',
        },
        {
          labelEn: '2. Store v0 in Memory A',
          labelBn: '২. বেগ A মেমরিতে সেভ করুন',
          keys: ['20', 'SHIFT', 'RCL', 'A'],
          noteEn: 'Stores value 20 into A.',
          noteBn: '২০ সংখ্যাটি A মেমরিতে জমা হলো।',
        },
        {
          labelEn: '3. Calculate Flight Time: 2 × A × sin(45) / 9.8',
          labelBn: '৩. উড্ডয়নকাল: 2 × A × sin(45) / 9.8',
          keys: ['2', '×', 'ALPHA', 'A', '×', 'sin', '45', ')', '÷', '9.8', '='],
          noteEn: 'Yields total flight time in seconds.',
          noteBn: 'বিচরণকালের ফলাফল সেকেন্ডে পাওয়া যাবে।',
        },
      ],
    },
    'fx-100ms': {
      modelName: 'Casio fx-100MS / fx-570MS',
      descriptionEn: 'Two-line kinematics calculation with memory storage.',
      descriptionBn: 'টু-লাইন ডিসপ্লেতে মেমরির সাহায্যে প্রাসের হিসাব।',
      steps: [
        {
          labelEn: '1. Set Degree Mode',
          labelBn: '১. ডিগ্রি মোড নিশ্চিত করুন',
          keys: ['MODE', 'MODE', 'MODE', 'MODE', '1'],
          noteEn: 'Press MODE 4 times -> 1 (Deg).',
          noteBn: 'MODE বাটন ৪ বার চেপে 1 (Deg) চাপুন।',
        },
        {
          labelEn: '2. Store Velocity into Memory A',
          labelBn: '২. আদি বেগ মেমরিতে সেভ',
          keys: ['20', 'SHIFT', 'STO', 'A'],
          noteEn: 'Value 20 stored in variable A.',
          noteBn: 'আদি বেগ ২০ কে মেমরি A তে সেভ করা হলো।',
        },
        {
          labelEn: '3. Compute Range',
          labelBn: '৩. অনুভূমিক পাল্লা নির্ণয়',
          keys: ['ALPHA', 'A', 'x²', '×', 'sin', '(', '2', '×', '45', ')', '÷', '9.8', '='],
          noteEn: 'Calculates the range R directly.',
          noteBn: 'সরাসরি পাল্লা R এর মান বের হবে।',
        },
      ],
    },
  },
  'molar-mass': {
    'fx-991cw': {
      modelName: 'Casio fx-991CW',
      descriptionEn: 'Chain summation of elemental atomic masses.',
      descriptionBn: 'মৌলের পারমাণবিক ভর ও অনুপাতের ধারাবাহিক যোগফল।',
      steps: [
        {
          labelEn: '1. Store Key Atomic Weights in Memories',
          labelBn: '১. প্রধান মৌলের পারমাণবিক ভর মেমরিতে রাখা',
          keys: ['1.008', 'VARIABLE', 'A', '15.999', 'VARIABLE', 'B', '63.546', 'VARIABLE', 'C'],
          noteEn: 'A = H (1.008), B = O (15.999), C = Cu (63.546).',
          noteBn: 'A = H, B = O, C = Cu সেভ করুন।',
        },
        {
          labelEn: '2. Compute Hydrate Salt (CuSO4·5H2O)',
          labelBn: '২. তুঁতে বা ব্লু ভিট্রিওলের ভর নির্ণয়',
          keys: ['C', '+', '32.06', '+', '4', 'B', '+', '5', '(', '2', 'A', '+', 'B', ')', 'EXE'],
          noteEn: 'Yields total molar mass: 249.68 g/mol.',
          noteBn: 'মোট মোলার ভর আসবে ২৪৯.৬৮ গ্রাম/মোল।',
        },
      ],
    },
    'fx-991ex': {
      modelName: 'Casio fx-991EX',
      descriptionEn: 'Using parentheses and memory registers for complex chemical compounds.',
      descriptionBn: 'ব্র্যাকেট ও মেমরি ব্যবহার করে জটিল লবণের আণবিক ভর নির্ণয়।',
      steps: [
        {
          labelEn: '1. Chain formula with natural parentheses',
          labelBn: '১. ব্র্যাকেটসহ সমীকরণ টাইপ',
          keys: ['63.546', '+', '32.06', '+', '4', '×', '15.999', '+', '5', '×', '(', '2', '×', '1.008', '+', '15.999', ')', '='],
          noteEn: 'Result: 249.68 g/mol for CuSO4·5H2O.',
          noteBn: 'ফলাফল: ২৪৯.৬৮ গ্রাম/মোল।',
        },
        {
          labelEn: '2. Calculate Mass % of Copper',
          labelBn: '২. কপার (তামা) এর শতকরা সংযুতি',
          keys: ['63.546', '÷', 'Ans', '×', '100', '='],
          noteEn: 'Quickly divides Cu atomic mass by previous total Ans to get 25.45%.',
          noteBn: 'Ans বাটন চেপে দ্রুত কপারের শতকরা হার ২৫.৪৫% পাওয়া যায়।',
        },
      ],
    },
    'fx-991es': {
      modelName: 'Casio fx-991ES PLUS',
      descriptionEn: 'Parentheses calculation and Ans memory usage.',
      descriptionBn: 'ব্র্যাকেট ও Ans মেমরির সাহায্যে শতকরা সংযুতি নির্ণয়।',
      steps: [
        {
          labelEn: '1. Type Molecular Summation',
          labelBn: '১. আণবিক ভর যোগফল টাইপ',
          keys: ['63.55', '+', '32.06', '+', '4', '(', '16', ')', '+', '5', '(', '18.015', ')', '='],
          noteEn: 'Computes total molar mass in standard math mode.',
          noteBn: 'মোট আণবিক ভর স্ক্রিনে আসবে।',
        },
        {
          labelEn: '2. Instant Element Percentage',
          labelBn: '২. তাৎক্ষণিক মৌলের শতকরা সংযুতি',
          keys: ['63.55', '÷', 'Ans', '×', '100', '='],
          noteEn: 'Gives mass percentage of Copper in the hydrate.',
          noteBn: 'তুঁতেতে কপারের শতকরা সংযুতি পাওয়া যাবে।',
        },
      ],
    },
    'fx-100ms': {
      modelName: 'Casio fx-100MS / fx-570MS',
      descriptionEn: 'Two-line arithmetic with parentheses and Ans memory.',
      descriptionBn: 'টু-লাইন মোডে ব্র্যাকেট ও Ans মেমরির ব্যবহার।',
      steps: [
        {
          labelEn: '1. Compute Total Molar Mass',
          labelBn: '১. মোট আণবিক ভর হিসাব',
          keys: ['63.55', '+', '32.06', '+', '4', '×', '16', '+', '5', '×', '(', '2', '×', '1.008', '+', '16', ')', '='],
          noteEn: 'Press "=" to store result in Ans.',
          noteBn: '"=" চাপলে মোট মান Ans এ সেভ থাকবে।',
        },
        {
          labelEn: '2. Compute Element Percentage',
          labelBn: '২. মৌলের শতকরা হার',
          keys: ['63.55', '÷', 'Ans', '×', '100', '='],
          noteEn: 'Gives percentage composition directly.',
          noteBn: 'মৌলের শতকরা সংযুতি বের হবে।',
        },
      ],
    },
  },
  redox: {
    'fx-991cw': {
      modelName: 'Casio fx-991CW',
      descriptionEn: 'Redox stoichiometry and titration equivalency check.',
      descriptionBn: 'জারণ-বিজারণ স্টয়কিওমেট্রি ও টাইট্রেশন টাইপ হিসাব।',
      steps: [
        {
          labelEn: '1. Equivalence Ratio Verification: n1·V1·S1 = n2·V2·S2',
          labelBn: '১. তুল্য অনুপাত যাচাই: n1·V1·S1 = n2·V2·S2',
          keys: ['5', '×', '0.02', '×', '25', '÷', '1', 'EXE'],
          noteEn: 'Check stoichiometric moles of Fe2+ oxidized by KMnO4.',
          noteBn: 'KMnO4 দ্বারা জারিত Fe2+ এর স্টয়কিওমেট্রিক অনুপাত বের করুন।',
        },
      ],
    },
    'fx-991ex': {
      modelName: 'Casio fx-991EX',
      descriptionEn: 'Fast stoichiometric mole-ratio solving.',
      descriptionBn: 'মোল সংখ্যার অনুপাত ও টাইট্রেশন হিসাব।',
      steps: [
        {
          labelEn: '1. Setup Equivalent Equation',
          labelBn: '১. তুল্য সমীকরণ সাজানো',
          keys: ['(', 'V1', '×', 'S1', ')', '÷', '1', '=', '(', 'V2', '×', 'S2', ')', '÷', '5'],
          noteEn: 'Use CALC or SOLVE to determine unknown volume or molarity.',
          noteBn: 'SOLVE বাটন চেপে অজানা ঘনমাত্রা বা আয়তন বের করুন।',
        },
      ],
    },
    'fx-991es': {
      modelName: 'Casio fx-991ES PLUS',
      descriptionEn: 'Titration equivalence calculation using SOLVE.',
      descriptionBn: 'SOLVE ফিচারের সাহায্যে অজানা মোলারিটি নির্ণয়।',
      steps: [
        {
          labelEn: '1. Write Mole Ratio Equation on Screen',
          labelBn: '১. সমীকরণ স্ক্রিনে লেখা',
          keys: ['ALPHA', 'X', '×', '25', 'ALPHA', 'CALC', '5', '×', '0.02', '×', '20'],
          noteEn: 'Type formula with "=" sign using [ALPHA] [CALC].',
          noteBn: '[ALPHA] [CALC] চেপে লাল সমান (=) চিহ্ন টাইপ করুন।',
        },
        {
          labelEn: '2. Execute Shift Solve',
          labelBn: '২. শিফট সলভ দিয়ে ফলাফল নির্ণয়',
          keys: ['SHIFT', 'CALC', '='],
          noteEn: 'Calculates the unknown molarity X directly without manual algebra.',
          noteBn: 'হাতে-কলমে হিসাব ছাড়াই সরাসরি অজানা মান X বের হবে।',
        },
      ],
      proTipEn: 'Wait 1-2 seconds after pressing "=" for the iterative solver to converge.',
      proTipBn: '"=" চাপার পর ক্যালকুলেটর মান নিখুঁত করতে ১-২ সেকেন্ড সময় নিতে পারে।',
    },
    'fx-100ms': {
      modelName: 'Casio fx-100MS / fx-570MS',
      descriptionEn: 'Standard volumetric ratio calculation.',
      descriptionBn: 'টাইট্রেশনের আয়তনিক অনুপাত নির্ণয়।',
      steps: [
        {
          labelEn: '1. Calculate Required Volume or Molarity',
          labelBn: '১. কাঙ্ক্ষিত আয়তন বা মোলারিটি হিসাব',
          keys: ['5', '×', '0.02', '×', '20', '÷', '25', '='],
          noteEn: 'Computes equivalent concentration in mol/L.',
          noteBn: 'তুল্য ঘনমাত্রা সরাসরি স্ক্রিনে আসবে।',
        },
      ],
    },
  },
  'physics-general': {
    'fx-991cw': {
      modelName: 'Casio fx-991CW (New ClassWiz)',
      descriptionEn: 'Solving arbitrary equations (F=ma, v=u+at) using Equation Solver.',
      descriptionBn: 'ইকুয়েশন সলভার অ্যাপের সাহায্যে যেকোনো অজানা ভৌত চলকের মান নির্ণয়।',
      steps: [
        {
          labelEn: '1. Access Solver App',
          labelBn: '১. সলভার অ্যাপে প্রবেশ',
          keys: ['HOME', 'Equation', 'OK', 'Solver', 'OK'],
          noteEn: 'Select Equation then choose Solver.',
          noteBn: 'হোম মেন্যু থেকে Equation > Solver নির্বাচন করুন।',
        },
        {
          labelEn: '2. Input Formula (e.g. F = m × a)',
          labelBn: '২. সমীকরণ টাইপ করুন (যেমন F = m × a)',
          keys: ['F', '=', 'm', '×', 'x', 'EXE'],
          noteEn: 'Use variable key "x" for the unknown quantity.',
          noteBn: 'অজানা চলকের জন্য "x" প্রতীক ব্যবহার করুন।',
        },
        {
          labelEn: '3. Execute Numerical Solve',
          labelBn: '৩. মান ইনপুট ও সমাধান',
          keys: ['[Enter Knowns]', 'EXE', 'Solve', 'EXE'],
          noteEn: 'Provides high-precision Newton-Raphson numerical root.',
          noteBn: 'ক্যালকুলেটর স্বয়ংক্রিয়ভাবে নির্ভুল মান বের করবে।',
        },
      ],
      proTipEn: 'Press [FORMAT] to view the result in standard scientific notation with exponents.',
      proTipBn: '[FORMAT] চেপে বৈজ্ঞানিক সূচকীয় আকারে ফলাফল দেখা যায়।',
    },
    'fx-991ex': {
      modelName: 'Casio fx-991EX (ClassWiz)',
      descriptionEn: 'One-touch SOLVE feature for algebraic physics formulas.',
      descriptionBn: 'অজানা চলকের মান এক ক্লিকে বের করার জন্য বিশ্বখ্যাত SOLVE ফিচার।',
      steps: [
        {
          labelEn: '1. Type the Equation on Main Screen',
          labelBn: '১. ক্যালকুলেটরের পর্দায় মূল সমীকরণ টাইপ করুন',
          keys: ['ALPHA', 'CALC', '(=)'],
          noteEn: 'Use ALPHA + CALC to generate the red "=" sign (e.g. 50 = 5 × x).',
          noteBn: 'লাল রঙের "=" চিহ্নের জন্য ALPHA + CALC চাপুন (যেমন: ৫০ = ৫ × x)।',
        },
        {
          labelEn: '2. Trigger SOLVE Engine',
          labelBn: '২. SOLVE কমান্ড চালু করুন',
          keys: ['SHIFT', 'CALC', '(SOLVE)'],
          noteEn: 'Prompts for initial guess or other variable values.',
          noteBn: 'SHIFT + CALC চাপুন।',
        },
        {
          labelEn: '3. Obtain Target Variable',
          labelBn: '৩. চূড়ান্ত ফলাফল প্রদর্শন',
          keys: ['='],
          noteEn: 'Displays "x = [value]" and L-R = 0 (error residual).',
          noteBn: '"=" চাপলে কাঙ্ক্ষিত চলকের সঠিক মান পর্দায় আসবে।',
        },
      ],
      proTipEn: 'Ensure L-R = 0 at the bottom to verify mathematical convergence with zero residual error.',
      proTipBn: 'নিচে L-R = 0 দেখালে নিশ্চিত হবেন কোনো গাণিতিক ত্রুটি ছাড়াই সঠিক মান বের হয়েছে।',
    },
    'fx-991es': {
      modelName: 'Casio fx-991ES PLUS / 2nd Edition',
      descriptionEn: 'Newton-Raphson numerical solver directly on COMP mode.',
      descriptionBn: 'বোর্ড পরীক্ষায় বহুল ব্যবহৃত সলভার ফাংশন।',
      steps: [
        {
          labelEn: '1. Write Equation with Red Equals Sign',
          labelBn: '১. সমীকরণ ও লাল সমান চিহ্ন লিখুন',
          keys: ['ALPHA', 'CALC', '(=)'],
          noteEn: 'Combine ALPHA + CALC for "=" and ALPHA + ) for variable X.',
          noteBn: 'ALPHA + CALC দিয়ে "=" এবং ALPHA + ) দিয়ে X টাইপ করুন।',
        },
        {
          labelEn: '2. Press SHIFT + CALC',
          labelBn: '২. SHIFT + CALC চাপুন',
          keys: ['SHIFT', 'CALC'],
          noteEn: 'Shows "Solve for X".',
          noteBn: 'পর্দায় Solve for X দেখাবে।',
        },
        {
          labelEn: '3. Press = to Calculate',
          labelBn: '৩. সমাধান পেতে = চাপুন',
          keys: ['='],
          noteEn: 'Wait 1 second for iteration convergence.',
          noteBn: '১ সেকেন্ডের মধ্যে X এর চূড়ান্ত মান প্রদর্শিত হবে।',
        },
      ],
    },
    'fx-100ms': {
      modelName: 'Casio fx-100MS / fx-570MS',
      descriptionEn: 'Parentheses and Ans memory for multi-step physics solutions.',
      descriptionBn: 'বন্ধনীবদ্ধ হিসাব ও Ans মেমরির সাহায্যে নির্ভুল সমাধান।',
      steps: [
        {
          labelEn: '1. Isolate Variable Manually & Compute',
          labelBn: '১. সূত্রে পক্ষান্তর করে সরাসরি মান বসান',
          keys: ['(', 'v', '-', 'u', ')', '÷', 't', '='],
          noteEn: 'Use bracket keys to prevent precedence errors in division.',
          noteBn: 'ভাগ করার আগে লবকে ব্র্যাকেটের ভেতরে রাখুন।',
        },
      ],
    },
  },
  'chemistry-general': {
    'fx-991cw': {
      modelName: 'Casio fx-991CW (New ClassWiz)',
      descriptionEn: 'Precision scientific notation (Avogadro, Molarity) and logarithmic pH.',
      descriptionBn: 'অ্যাভোগাড্রো সংখ্যা, মোলারিটি এবং লগারিদমিক pH হিসাবের নির্ভুল পদ্ধতি।',
      steps: [
        {
          labelEn: '1. Input Avogadro Constant',
          labelBn: '১. অ্যাভোগাড্রো সংখ্যা ইনপুট',
          keys: ['6.023', '×10^x', '23', 'EXE'],
          noteEn: 'Uses dedicated scientific exponent key.',
          noteBn: '×10^x বাটন চেপে সরাসরি ২৩ বসান।',
        },
        {
          labelEn: '2. Compute pH from [H+]',
          labelBn: '২. [H+] থেকে pH নির্ণয়',
          keys: ['(-)', 'log', '(', '0.05', ')', 'EXE'],
          noteEn: 'Directly yields pH = -log[H+].',
          noteBn: 'pH এর মান স্বয়ংক্রিয়ভাবে স্ক্রিনে আসবে।',
        },
      ],
    },
    'fx-991ex': {
      modelName: 'Casio fx-991EX (ClassWiz)',
      descriptionEn: 'High-speed stoichiometry with fraction template and scientific exponent.',
      descriptionBn: 'ভগ্নাংশ বাটন ও বৈজ্ঞানিক এক্সপোনেন্ট কি-এর সাহায্যে রসায়নের জটিল হিসাব।',
      steps: [
        {
          labelEn: '1. Stoichiometry Fraction (w / M)',
          labelBn: '১. মোল সংখ্যার হিসাব (n = w / M)',
          keys: ['[■/□]', '5', '▼', '58.5', '='],
          noteEn: 'Press [S-D] to toggle between fraction and decimal mol.',
          noteBn: 'S-D চেপে সরাসরি দশমিক মোল দেখা যাবে।',
        },
        {
          labelEn: '2. Particles via Avogadro Number',
          labelBn: '২. পরমাণুর সংখ্যা গণনা (n × NA)',
          keys: ['Ans', '×', '6.023', 'x10^x', '23', '='],
          noteEn: 'Uses Ans memory to avoid rounding errors.',
          noteBn: 'Ans মেমরি ব্যবহারের ফলে কোনো রাউন্ডিং ভুল হয় না।',
        },
      ],
    },
    'fx-991es': {
      modelName: 'Casio fx-991ES PLUS / 2nd Edition',
      descriptionEn: 'The standard board tool for mole, molarity, and buffer pH.',
      descriptionBn: 'মোল, মোলারিটি ও বাফারের pH হিসাবের বোর্ড স্ট্যান্ডার্ড পদ্ধতি।',
      steps: [
        {
          labelEn: '1. Input Exponent (6.023 × 10²³)',
          labelBn: '১. বৈজ্ঞানিক সংখ্যা ইনপুট',
          keys: ['6.023', 'x10^x', '23'],
          noteEn: 'Do not type "× 10 ^ 23" manually; always use the dedicated x10^x key.',
          noteBn: 'কখনোই ম্যানুয়ালি × 10 ^ 23 লিখবেন না; সর্বদা x10^x বাটন ব্যবহার করুন।',
        },
        {
          labelEn: '2. Calculate pH = -log[H+]',
          labelBn: '২. pH হিসাব',
          keys: ['(-)', 'log', '(', '1.5', 'x10^x', '(-)', '3', ')', '='],
          noteEn: 'Yields exact pH value without intermediate rounding.',
          noteBn: 'সরাসরি কাঙ্ক্ষিত pH মান বের হবে।',
        },
      ],
    },
    'fx-100ms': {
      modelName: 'Casio fx-100MS / fx-570MS',
      descriptionEn: 'Using the EXP key for scientific powers in secondary chemistry.',
      descriptionBn: 'EXP বাটনের সাহায্যে পাওয়ার অব টেন এবং লগারিদম হিসাব।',
      steps: [
        {
          labelEn: '1. Enter Powers with EXP Key',
          labelBn: '১. EXP বাটন দিয়ে বৈজ্ঞানিক সংখ্যা',
          keys: ['6.023', 'EXP', '23'],
          noteEn: 'Displays "6.023E23".',
          noteBn: 'স্ক্রিনে 6.023E23 প্রদর্শিত হবে।',
        },
      ],
    },
  },
  'statistics': {
    'fx-991cw': {
      modelName: 'Casio fx-991CW (New ClassWiz)',
      descriptionEn: 'Statistics App for grouped data Mean, Variance, and Standard Deviation.',
      descriptionBn: 'পরিসংখ্যানের সংক্ষিপ্ত গড়, মধ্যক ও পরিমিত ব্যবধানের দ্রুততম সারণী পদ্ধতি।',
      steps: [
        {
          labelEn: '1. Open Statistics App & Turn Frequency ON',
          labelBn: '১. পরিসংখ্যান অ্যাপে প্রবেশ ও গণসংখ্যা চালু',
          keys: ['HOME', 'Statistics', 'OK', 'TOOLS', 'Frequency', 'On', 'OK'],
          noteEn: 'Enables 2-column input table for midpoint (x) and frequency (f).',
          noteBn: 'শ্রেণি মধ্যমান (x) এবং গণসংখ্যা (f) এর দুই কলাম সারণী চালু হবে।',
        },
        {
          labelEn: '2. Enter Data Table',
          labelBn: '২. উপাত্ত সারণী ইনপুট',
          keys: ['[x values]', 'EXE', '[f values]', 'EXE'],
          noteEn: 'Type midpoints in column 1 and frequencies in column 2.',
          noteBn: 'প্রথম কলামে মধ্যমান ও দ্বিতীয় কলামে গণসংখ্যা লিখে EXE চাপুন।',
        },
        {
          labelEn: '3. View Mean (x̄) and Σf',
          labelBn: '৩. গড় (x̄) এবং মোট গণসংখ্যা দেখুন',
          keys: ['OK', '1-Variable Calc', 'OK'],
          noteEn: 'Displays x̄ (mean), Σx, and σx directly.',
          noteBn: 'গড় (x̄), মোট উপাত্ত n এবং পরিমিত ব্যবধান সরাসরি দেখা যাবে।',
        },
      ],
      proTipEn: 'Use the displayed x̄ to verify your board exam "সংক্ষিপ্ত গড়" step table before submitting your script.',
      proTipBn: 'বোর্ড পরীক্ষায় সংক্ষিপ্ত পদ্ধতিতে গড় করার পর ক্যালকুলেটরের x̄ মিলিয়ে নিলে ৪-এ ৪ নিশ্চিত।',
    },
    'fx-991ex': {
      modelName: 'Casio fx-991EX (ClassWiz)',
      descriptionEn: 'Frequency distribution table statistics on ClassWiz.',
      descriptionBn: 'ক্লাসউইজ মডেলে ফ্রিকোয়েন্সি টেবিল ও অটোমেটিক মিন ক্যালকুলেশন।',
      steps: [
        {
          labelEn: '1. Turn Frequency ON',
          labelBn: '১. ফ্রিকোয়েন্সি কলাম চালু করুন',
          keys: ['SHIFT', 'MENU', '▼', '3 (Statistics)', '1 (ON)'],
          noteEn: 'Permanent setup until reset.',
          noteBn: 'SHIFT + MENU চেপে ৩ > ১ চাপলে গণসংখ্যা কলাম চালু হবে।',
        },
        {
          labelEn: '2. Open Statistics 1-Variable',
          labelBn: '২. ১-ভ্যারিয়েবল স্ট্যাট মোড',
          keys: ['MENU', '6 (Statistics)', '1 (1-Variable)'],
          noteEn: 'Brings up table with X and FREQ headers.',
          noteBn: 'X এবং FREQ কলামের টেবিল আসবে।',
        },
        {
          labelEn: '3. View 1-Variable Summary',
          labelBn: '৩. গড় ও যোগফল প্রদর্শন',
          keys: ['OPTN', '3 (1-Variable Calc)'],
          noteEn: 'Instant display of Mean (x̄), Σx, and n.',
          noteBn: 'OPTN > ৩ চাপলেই গড় x̄ ও মোট সংখ্যা n প্রদর্শিত হবে।',
        },
      ],
    },
    'fx-991es': {
      modelName: 'Casio fx-991ES PLUS / 2nd Edition',
      descriptionEn: 'Board standard grouped data analysis.',
      descriptionBn: 'এসএসসি পরীক্ষার হলে বহুল ব্যবহৃত স্ট্যাট মোড।',
      steps: [
        {
          labelEn: '1. Enable Frequency Table',
          labelBn: '১. ফ্রিকোয়েন্সি টেবিল অন করুন',
          keys: ['SHIFT', 'MODE', '▼', '4 (STAT)', '1 (ON)'],
          noteEn: 'Shows Freq column.',
          noteBn: 'গণসংখ্যার কলাম স্ক্রিনে সক্রিয় হবে।',
        },
        {
          labelEn: '2. Enter Data in STAT Mode',
          labelBn: '২. উপাত্ত লিখুন',
          keys: ['MODE', '3 (STAT)', '1 (1-VAR)', '[Fill X & FREQ]', 'AC'],
          noteEn: 'Always press AC after data entry to store in memory.',
          noteBn: 'মান বসানো শেষ হলে মেমরিতে রাখতে AC চাপুন।',
        },
        {
          labelEn: '3. Read Mean (x̄)',
          labelBn: '৩. গড় বের করুন',
          keys: ['SHIFT', '1 (STAT)', '4 (Var)', '2 (x̄)', '='],
          noteEn: 'Displays the exact arithmetic mean.',
          noteBn: 'সঠিক গাণিতিক গড় স্ক্রিনে আসবে।',
        },
      ],
    },
    'fx-100ms': {
      modelName: 'Casio fx-100MS / fx-570MS',
      descriptionEn: 'Using the M+ memory key in SD mode.',
      descriptionBn: 'এসডি (SD) মোডে M+ কি ব্যবহার করে পরিসংখ্যান সমাধান।',
      steps: [
        {
          labelEn: '1. Enter SD Mode',
          labelBn: '১. এসডি মোডে প্রবেশ',
          keys: ['MODE', 'MODE', '1 (SD)'],
          noteEn: 'Clears previous stat memory.',
          noteBn: 'স্ক্রিনে SD লেখা আসবে।',
        },
        {
          labelEn: '2. Input [Value] ; [Frequency] M+',
          labelBn: '২. মান ও গণসংখ্যা ইনপুট',
          keys: ['[x]', 'SHIFT', ',', '[f]', 'M+'],
          noteEn: 'Repeats for each row in the table.',
          noteBn: 'প্রতিটি সারির জন্য মান, সেমিকোলন ও গণসংখ্যা লিখে M+ চাপুন।',
        },
        {
          labelEn: '3. Display Mean (x̄)',
          labelBn: '৩. গড় প্রদর্শন',
          keys: ['SHIFT', '2 (S-VAR)', '1 (x̄)', '='],
          noteEn: 'Yields the grouped mean.',
          noteBn: 'নিমিষে গড় বের হবে।',
        },
      ],
    },
  },
  'biology-general': {
    'fx-991cw': {
      modelName: 'Casio fx-991CW (New ClassWiz)',
      descriptionEn: 'BMI and daily caloric expenditure evaluation.',
      descriptionBn: 'বিএমআই এবং দৈনিক ক্যালোরি চাহিদার দ্রুততম হিসাব।',
      steps: [
        {
          labelEn: '1. Compute BMI: Weight / (Height in m)²',
          labelBn: '১. বিএমআই হিসাব: ওজন ÷ (উচ্চতা মি)² ',
          keys: ['65', '÷', '(', '1.68', ')', 'x²', 'EXE'],
          noteEn: 'Enter height in meters (e.g. 168 cm = 1.68 m).',
          noteBn: 'উচ্চতা সেন্টিমিটার থেকে মিটারে রূপান্তর করে স্কয়ার করুন।',
        },
      ],
    },
    'fx-991ex': {
      modelName: 'Casio fx-991EX (ClassWiz)',
      descriptionEn: 'Harris-Benedict BMR formula calculation.',
      descriptionBn: 'হ্যারিস-বেনেডিক্ট বিএমআর সূত্র মূল্যায়ন।',
      steps: [
        {
          labelEn: '1. Enter Multi-Variable Formula',
          labelBn: '১. বিএমআর সূত্র ইনপুট',
          keys: ['66', '+', '13.7', '×', '65', '+', '5', '×', '170', '-', '6.8', '×', '20', '='],
          noteEn: 'Directly computes basal metabolic rate in kcal/day.',
          noteBn: 'প্রতিদিন প্রয়োজনীয় বেসাল মেটাবলিক রেট পাওয়া যাবে।',
        },
      ],
    },
    'fx-991es': {
      modelName: 'Casio fx-991ES PLUS / 2nd Edition',
      descriptionEn: 'Genetic probability & Lindeman 10% energy pyramid.',
      descriptionBn: 'জেনেটিক অনুপাত ও বাস্তুতন্ত্রের ১০% শক্তি স্থানান্তর হিসাব।',
      steps: [
        {
          labelEn: '1. Compute 10% Energy Transfer',
          labelBn: '১. ১০% ট্রফিক স্তর শক্তি হিসাব',
          keys: ['1000', '×', '10', 'SHIFT', '(', '(%)', '='],
          noteEn: 'Evaluates succeeding trophic level energy.',
          noteBn: 'পরবর্তী ট্রফিক স্তরের শক্তি বের হবে।',
        },
      ],
    },
    'fx-100ms': {
      modelName: 'Casio fx-100MS / fx-570MS',
      descriptionEn: 'Standard arithmetic evaluation for biological ratios.',
      descriptionBn: 'জীববিজ্ঞানের সাধারণ গাণিতিক অনুপাত ও বিএমআই হিসাব।',
      steps: [
        {
          labelEn: '1. Calculate BMI',
          labelBn: '১. বিএমআই নির্ণয়',
          keys: ['60', '÷', '1.65', 'x²', '='],
          noteEn: 'Gives the body mass index value.',
          noteBn: 'বিএমআই মান পর্দায় আসবে।',
        },
      ],
    },
  },
  'higher-math': {
    'fx-991cw': {
      modelName: 'Casio fx-991CW (New ClassWiz)',
      descriptionEn: 'Vector magnitude, dot product, and complex roots in Higher Math.',
      descriptionBn: 'ভেক্টর গুণন, মান নির্ণয় ও জটিল সংখ্যার সমাধান।',
      steps: [
        {
          labelEn: '1. Access Vector App',
          labelBn: '১. ভেক্টর অ্যাপ নির্বাচন',
          keys: ['HOME', 'Vector', 'OK', 'VctA', '3 Dimension', 'OK'],
          noteEn: 'Defines 2D or 3D vector components.',
          noteBn: '২ডি বা ৩ডি ভেক্টরের সহগ ইনপুট দিন।',
        },
        {
          labelEn: '2. Compute Modulus / Magnitude',
          labelBn: '২. ভেক্টরের মান (Magnitude) নির্ণয়',
          keys: ['CATALOG', 'Vector', 'Norm', '(', 'VctA', ')', 'EXE'],
          noteEn: 'Evaluates |A| = √(x² + y² + z²).',
          noteBn: 'ভেক্টরের মান সরাসরি স্ক্রিনে আসবে।',
        },
      ],
    },
    'fx-991ex': {
      modelName: 'Casio fx-991EX (ClassWiz)',
      descriptionEn: 'Vector and matrix calculations for Classes 9-10 & College.',
      descriptionBn: 'উচ্চতর গণিতের ভেক্টর ডট গুণন ও ক্ষেত্রফল যাচাই।',
      steps: [
        {
          labelEn: '1. Open Vector Mode',
          labelBn: '১. ভেক্টর মোড চালু করুন',
          keys: ['MENU', '5 (Vector)', '1 (VctA)', '3', '[Input i,j,k]', 'AC'],
          noteEn: 'Stores vector A in memory.',
          noteBn: 'ভেক্টর A এর মান মেমরিতে সংরক্ষিত হবে।',
        },
        {
          labelEn: '2. Dot Product (VctA • VctB)',
          labelBn: '২. ডট গুণন (VctA • VctB)',
          keys: ['OPTN', '3 (VctA)', 'OPTN', '▼', '2 (Dot Product)', 'OPTN', '4 (VctB)', '='],
          noteEn: 'Scalar dot product displayed immediately.',
          noteBn: 'স্কেলার ডট গুণফলের মান সরাসরি পর্দায় আসবে।',
        },
      ],
    },
    'fx-991es': {
      modelName: 'Casio fx-991ES PLUS / 2nd Edition',
      descriptionEn: 'Vector and coordinate conversion on 991ES.',
      descriptionBn: 'ভেক্টর ও স্থানাঙ্ক রূপান্তর (কার্তেসীয় থেকে পোলার)।',
      steps: [
        {
          labelEn: '1. Convert Cartesian to Polar: Pol(x, y)',
          labelBn: '১. কার্তেসীয় থেকে পোলার রূপান্তর: Pol(x, y)',
          keys: ['SHIFT', '+ (Pol)', '3', 'SHIFT', ')', '4', ')', '='],
          noteEn: 'Displays radius r = 5 and angle θ = 53.13°.',
          noteBn: 'দূরত্ব r = 5 এবং কোণ θ = ৫৩.১৩° সরাসরি দেখাবে।',
        },
      ],
    },
    'fx-100ms': {
      modelName: 'Casio fx-100MS / fx-570MS',
      descriptionEn: 'Polar & Rectangular coordinates conversion on fx-100MS.',
      descriptionBn: 'fx-100MS এ Pol( এবং Rec( কি-এর ব্যবহার।',
      steps: [
        {
          labelEn: '1. Find Distance & Angle with Pol',
          labelBn: '১. বিন্দুদ্বয়ের দূরত্ব ও কোণ নির্ণয়',
          keys: ['Pol(', '3', ',', '4', ')', '='],
          noteEn: 'Press RCL then F for the angle.',
          noteBn: 'RCL চেপে F চাপলে কোণ প্রদর্শিত হবে।',
        },
      ],
    },
  },
};
