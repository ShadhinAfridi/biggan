import React, { useState } from 'react';
import { Calculator, Sparkles, AlertCircle } from 'lucide-react';

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
  topic: 'quadratic' | 'sigfigs' | 'kinematics' | 'molar-mass' | 'redox';
  lang?: 'en' | 'bn';
}

const GUIDES_DATA: Record<string, Record<CasioModel, ModelGuide>> = {
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
};

export const CasioGuide: React.FC<CasioGuideProps> = ({ topic, lang = 'bn' }) => {
  const [activeModel, setActiveModel] = useState<CasioModel>('fx-991es');

  const topicGuides = GUIDES_DATA[topic] || GUIDES_DATA['quadratic'];
  const guide = topicGuides[activeModel];

  const modelsList: { id: CasioModel; label: string; badge: string }[] = [
    { id: 'fx-991cw', label: 'fx-991CW', badge: lang === 'bn' ? 'নতুন ক্লাসউইজ' : 'New ClassWiz' },
    { id: 'fx-991ex', label: 'fx-991EX', badge: lang === 'bn' ? 'ক্লাসউইজ' : 'ClassWiz' },
    { id: 'fx-991es', label: 'fx-991ES PLUS', badge: lang === 'bn' ? 'জনপ্রিয়' : 'Most Popular' },
    { id: 'fx-100ms', label: 'fx-100MS / 570MS', badge: lang === 'bn' ? 'টু-লাইন ডিসপ্লে' : '2-Line Display' },
  ];

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              {lang === 'bn'
                ? 'কাসিও সায়েন্টিফিক ক্যালকুলেটর কি-স্ট্রোক গাইড'
                : 'Casio Scientific Calculator Keystroke Guide'}
              <span className="text-xs bg-amber-500/20 text-amber-300 font-mono px-2 py-0.5 rounded-full">
                Exam Ready
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              {lang === 'bn'
                ? 'বোর্ড ও ভর্তি পরীক্ষার হলে অনুমোদিত ফিজিক্যাল ক্যালকুলেটরে একই সমস্যা সমাধানের ধাপ:'
                : 'Exact button sequences permitted in board and university entrance examination halls:'}
            </p>
          </div>
        </div>
      </div>

      {/* Model Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
        {modelsList.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveModel(m.id)}
            className={`flex flex-col items-start px-3 py-2 rounded-lg border text-left transition-all ${
              activeModel === m.id
                ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm ring-1 ring-blue-500'
                : 'bg-slate-800/60 border-slate-700/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <span className="text-xs font-bold font-mono">{m.label}</span>
            <span className="text-[10px] text-slate-400">{m.badge}</span>
          </button>
        ))}
      </div>

      {/* Active Guide Content */}
      <div className="mt-5 space-y-4">
        <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-3">
          <div className="text-sm font-medium text-slate-200">{guide.modelName}</div>
          <div className="text-xs text-slate-400 mt-0.5">
            {lang === 'bn' ? guide.descriptionBn : guide.descriptionEn}
          </div>
        </div>

        <div className="space-y-3">
          {guide.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-800/40 border border-slate-800 rounded-lg p-3 flex flex-col gap-2"
            >
              <div className="text-xs font-semibold text-slate-300">
                {lang === 'bn' ? step.labelBn : step.labelEn}
              </div>

              {/* Keycaps */}
              <div className="flex flex-wrap items-center gap-1.5 py-1">
                {step.keys.map((key, kIdx) => (
                  <span
                    key={kIdx}
                    className="inline-flex items-center justify-center min-w-[28px] h-7 px-2 text-xs font-mono font-bold uppercase rounded bg-slate-700 text-amber-300 border border-slate-600 shadow-inner select-all"
                  >
                    {key}
                  </span>
                ))}
              </div>

              {(step.noteEn || step.noteBn) && (
                <div className="text-[11px] text-slate-400 italic">
                  {lang === 'bn' ? step.noteBn : step.noteEn}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pro Tip */}
        {(guide.proTipEn || guide.proTipBn) && (
          <div className="flex items-start gap-2 bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 text-xs text-amber-200">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-300">
                {lang === 'bn' ? 'গুরুত্বপূর্ণ টিপ: ' : 'Pro Tip: '}
              </span>
              {lang === 'bn' ? guide.proTipBn : guide.proTipEn}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
