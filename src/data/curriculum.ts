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
  {
    "id": "ict",
    "level": "hsc",
    "nameBn": "তথ্য ও যোগাযোগ প্রযুক্তি",
    "nameEn": "Information & Communication Technology (ICT)",
    "icon": "💻",
    "color": "from-cyan-600 to-blue-600",
    "badgeColor": "text-cyan-400 bg-cyan-950/60 border-cyan-800/40",
    "code": "HSC 275",
    "descriptionBn": "ডিজিটাল লজিক গেট, এইচটিএমএল ওয়েব ডিজাইন, সি প্রোগ্রামিং এবং ডেটাবেজ ম্যানেজমেন্ট সিস্টেমের ব্যবহারিক সিমুলেটর ও বোর্ড পরীক্ষার প্রস্তুতি।",
    "descriptionEn": "Interactive logic gates, HTML web design, C programming, and relational database simulators aligned with NCTB HSC Board syllabus.",
    "chapters": [
      {
        "id": "hsc-ict-ch1",
        "chapterNumber": 1,
        "titleBn": "তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত",
        "titleEn": "ICT: Global and Bangladesh Perspective",
        "summaryBn": "ভার্চুয়াল রিয়েলিটি, কৃত্রিম বুদ্ধিমত্তা, রোবটিক্স, ক্রায়োসার্জারি, বায়োমেট্রিক্স ও সাইবার নিরাপত্তা।",
        "summaryEn": "Virtual reality, artificial intelligence, robotics, cryosurgery, biometrics, and cyber security ethics.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৪-৫ নম্বর"
        },
        "keyTopics": [
          "ভার্চুয়াল রিয়েলিটি",
          "কৃত্রিম বুদ্ধিমত্তা",
          "বায়োমেট্রিক্স",
          "ক্রায়োসার্জারি",
          "সাইবার ক্রাইম ও এথিক্স"
        ]
      },
      {
        "id": "hsc-ict-ch2",
        "chapterNumber": 2,
        "titleBn": "কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং",
        "titleEn": "Communication Systems & Networking",
        "summaryBn": "ডেটা ট্রান্সমিশন মোড ও মেথড, মাধ্যম (ফাইবার অপটিক, মাইক্রোওয়েভ), ওয়্যারলেস (Bluetooth, Wi-Fi, WiMAX) ও নেটওয়ার্ক টপোলজি।",
        "summaryEn": "Data transmission modes/methods, guided and unguided media, wireless protocols, and network topologies.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৪-৫ নম্বর"
        },
        "keyTopics": [
          "ট্রান্সমিশন মোড (Simplex, Duplex)",
          "নেটওয়ার্ক টপোলজি (Star, Mesh, Tree)",
          "ফাইবার অপটিক কেবল",
          "ক্লাউড কম্পিউটিং"
        ]
      },
      {
        "id": "hsc-ict-ch3",
        "chapterNumber": 3,
        "titleBn": "সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস",
        "titleEn": "Number Systems & Digital Devices",
        "summaryBn": "বাইনারি, অকটাল, হেক্সাডেসিমেল রূপান্তর, ২ এর পরিপূরক, বুলিয়ান অ্যালজেবরা, মৌলিক ও সার্বজনীন গেট, অ্যাডার, এনকোডার ও ডিকোডার।",
        "summaryEn": "Number conversions, 2s complement, Boolean algebra, basic and universal logic gates, adders, and decoders.",
        "marksWeightage": {
          "cq": "২০ নম্বর (২টি CQ)",
          "mcq": "৬-৭ নম্বর"
        },
        "keyTopics": [
          "২ এর পরিপূরক বিয়োগ",
          "মৌলিক ও সার্বজনীন গেট (NAND, NOR)",
          "হাফ ও ফুল অ্যাডার",
          "ডিকোডার ও এনকোডার",
          "ডি মরগানের উপপাদ্য"
        ],
        "linkedToolIds": [
          "circuit-simulator"
        ],
        "coreFormulas": [
          {
            "nameBn": "ডি মরগানের প্রথম সূত্র",
            "nameEn": "De Morgan's First Law",
            "latex": "\\overline{A + B} = \\overline{A} \\cdot \\overline{B}"
          },
          {
            "nameBn": "ডি মরগানের দ্বিতীয় সূত্র",
            "nameEn": "De Morgan's Second Law",
            "latex": "\\overline{A \\cdot B} = \\overline{A} + \\overline{B}"
          },
          {
            "nameBn": "হাফ অ্যাডার যোগফল (Sum)",
            "nameEn": "Half Adder Sum",
            "latex": "S = A \\oplus B = \\overline{A}B + A\\overline{B}"
          },
          {
            "nameBn": "হাফ অ্যাডার ক্যারি (Carry)",
            "nameEn": "Half Adder Carry",
            "latex": "C = A \\cdot B"
          },
          {
            "nameBn": "ফুল অ্যাডার যোগফল (Sum)",
            "nameEn": "Full Adder Sum",
            "latex": "S = A \\oplus B \\oplus C_{in}",
            "notesBn": "তিনটি ইনপুট বিট (A, B ও পূর্ববর্তী ক্যারি Cin) যোগ করার পর লব্ধ যোগফল বিট। দুটি হাফ অ্যাডার এবং একটি OR গেট দিয়ে বাস্তবায়ন করা যায়।",
            "notesEn": "Sum output bit when adding three binary inputs (A, B, Cin) in a Full Adder circuit."
          },
          {
            "nameBn": "ফুল অ্যাডার ক্যারি (Carry-out)",
            "nameEn": "Full Adder Carry-out",
            "latex": "C_{out} = AB + BC_{in} + C_{in}A = AB + C_{in}(A \\oplus B)",
            "notesBn": "ফুল অ্যাডারে পরবর্তী স্তরে প্রেরিত ক্যারি আউটপুট বিট। দুটি প্রোডাক্ট টার্ম ও এক্স-অর গেটের আউটপুটের সাহায্যে সরলীকরণ করা হয়।",
            "notesEn": "Carry output generated to higher bit positions in Full Adder addition."
          },
          {
            "nameBn": "স্থানিক সংখ্যা পদ্ধতির সাধারণ বিস্তার",
            "nameEn": "Positional Number System Expansion",
            "latex": "N = \\sum_{i=-m}^{n-1} d_i \\cdot r^i = d_{n-1}r^{n-1} + \\dots + d_0 r^0 + d_{-1}r^{-1} + \\dots + d_{-m}r^{-m}",
            "notesBn": "যেকোনো ভিত্তি r (যেমন বাইনারিতে r=2, অক্টালে r=8, হেক্সাডেসিমেলে r=16) বিশিষ্ট সংখ্যার দশমিক মান নির্ণয়ের বহুপদী সূত্র।",
            "notesEn": "General base-r polynomial expansion formula to compute the decimal equivalent value."
          },
          {
            "nameBn": "২-এর পরিপূরকে n-বিট সংখ্যার সীমা",
            "nameEn": "n-bit Two's Complement Range",
            "latex": "\\text{Range} = -2^{n-1} \\text{ to } +(2^{n-1} - 1)",
            "notesBn": "কম্পিউটার মেমরিতে n-বিট রেজিস্টারে ২-এর পরিপূরক পদ্ধতিতে সংরক্ষিত হতে পারা সর্বনিম্ন ও সর্বোচ্চ পূর্ণসংখ্যার সীমা (যেমন ৮-বিটের জন্য -১২৮ থেকে +১২৭)।",
            "notesEn": "Represents the range of signed integers representable in n bits (e.g., -128 to +127 for 8-bit registers)."
          },
          {
            "nameBn": "বুলিয়ান শোষণ উপপাদ্য",
            "nameEn": "Boolean Absorption Laws",
            "latex": "A + AB = A, \\quad A(A + B) = A, \\quad A + \\overline{A}B = A + B",
            "notesBn": "ডিজিটাল সার্কিটের গেট সংখ্যা কমাতে এবং বুলিয়ান সমীকরণ দ্রুততম উপায়ে সরলীকরণে বহুল ব্যবহৃত শোষণ সূত্র।",
            "notesEn": "Reduces logic expression complexity by eliminating redundant literals."
          },
          {
            "nameBn": "কনসেনসাস উপপাদ্য",
            "nameEn": "Consensus Theorem",
            "latex": "AB + \\overline{A}C + BC = AB + \\overline{A}C",
            "notesBn": "বুলিয়ান এক্সপ্রেশনের অপ্রয়োজনীয় পদ বাদ দিতে কনসেনসাস উপপাদ্য ব্যবহৃত হয়, যেখানে BC পদটি স্বয়ংক্রিয়ভাবে বাদ পড়ে।",
            "notesEn": "Eliminates redundant terms in SOP logic expressions where the BC term is redundant."
          },
          {
            "nameBn": "এনকোডার ও ডিকোডার লাইন সম্পর্ক",
            "nameEn": "Encoder and Decoder Line Relations",
            "latex": "\\text{Encoder: } 2^n \\to n, \\quad \\text{Decoder: } n \\to 2^n",
            "notesBn": "এনকোডারে 2^n সংখ্যক ইনপুট থেকে n সংখ্যক আউটপুট পাওয়া যায়; অপরদিকে ডিকোডারে n সংখ্যক ইনপুট থেকে 2^n সংখ্যক আউটপুট পাওয়া যায়।",
            "notesEn": "Input-to-output channel ratios for standard binary Encoders and Decoders."
          },
          {
            "nameBn": "মাল্টিপ্লেক্সার নির্বাচন লাইন সূত্র",
            "nameEn": "Multiplexer Select Line Formula",
            "latex": "2^n \\text{ Data Inputs} \\implies n \\text{ Select Lines} \\to 1 \\text{ Output}",
            "notesBn": "অনেকগুলো ডেটা লাইনের মধ্যে নির্দিষ্ট একটি লাইন আউটপুটে পাঠাতে n সংখ্যক সিলেক্ট লাইনের প্রয়োজন হয়।",
            "notesEn": "Determines the number of select lines needed to route 2^n input data channels to 1 output."
          }
        ]
      },
      {
        "id": "hsc-ict-ch4",
        "chapterNumber": 4,
        "titleBn": "ওয়েব ডিজাইন পরিচিতি এবং HTML",
        "titleEn": "Introduction to Web Design & HTML",
        "summaryBn": "ওয়েবসাইটের কাঠামো, HTML মৌলিক ট্যাগ, টেবিল তৈরি (colspan, rowspan), হাইপারলিঙ্ক, ছবি সংযোজন এবং ফর্ম ডিজাইন।",
        "summaryEn": "Web structures, fundamental HTML tags, complex tables (colspan, rowspan), hyperlinks, multimedia, and forms.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৪-৫ নম্বর"
        },
        "keyTopics": [
          "HTML টেবিল ও Colspan/Rowspan",
          "ওয়েবসাইট কাঠামো (Tree, Web-linked)",
          "হাইপারলিঙ্ক (<a>) ও ইমেজ (<img>)",
          "HTML রেজিস্ট্রেশন ফর্ম"
        ],
        "linkedToolIds": [
          "html-runner"
        ]
      },
      {
        "id": "hsc-ict-ch5",
        "chapterNumber": 5,
        "titleBn": "প্রোগ্রামিং ভাষা (C Programming)",
        "titleEn": "Programming Language (C Language)",
        "summaryBn": "প্রোগ্রামের সংগঠন, অ্যালগরিদম ও ফ্লোচার্ট, সি চলক ও ডেটা টাইপ, শর্তযুক্ত বিবৃতি (if-else), লুপ (for, while) এবং অ্যারে।",
        "summaryEn": "Program design, algorithms & flowcharts, C variables, conditional logic (if-else), iteration loops, and array manipulations.",
        "marksWeightage": {
          "cq": "২০ নম্বর (২টি CQ)",
          "mcq": "৫-৬ নম্বর"
        },
        "keyTopics": [
          "ফ্লোচার্ট ও অ্যালগরিদম",
          "ফর ও হোয়াইল লুপ (for, while)",
          "শর্তযুক্ত শাখা (if-else)",
          "মৌলিক ধারা ও প্রাইম সংখ্যা নির্ণয়",
          "১D ও ২D অ্যারে"
        ],
        "linkedToolIds": [
          "c-runner"
        ]
      },
      {
        "id": "hsc-ict-ch6",
        "chapterNumber": 6,
        "titleBn": "ডেটাবেজ ম্যানেজমেন্ট সিস্টেম (DBMS)",
        "titleEn": "Database Management System (DBMS)",
        "summaryBn": "রিলেশনাল ডেটাবেজ, প্রাইমারি কি ও ফরেন কি, ডেটাবেজ রিলেশন (1:1, 1:N, M:N), এসকিউএল (SQL) কুয়েরি এবং ডেটা সিকিউরিটি।",
        "summaryEn": "Relational databases, primary & foreign keys, entity relationships, SQL queries (SELECT, WHERE, JOIN), and security.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "প্রাইমারি কি ও কম্পোজিট কি",
          "ডেটাবেজ রিলেশনশিপ (1:Many, Many:Many)",
          "SQL কুয়েরি (SELECT, UPDATE)",
          "ইনডেক্সিং ও সর্টিং"
        ],
        "linkedToolIds": [
          "database-simulator"
        ]
      }
    ]
  },
  {
    "id": "physics",
    "level": "hsc",
    "nameBn": "পদার্থবিজ্ঞান",
    "nameEn": "Physics",
    "icon": "⚡",
    "color": "from-amber-600 to-orange-600",
    "badgeColor": "text-amber-400 bg-amber-950/60 border-amber-800/40",
    "code": "HSC 174 & 175",
    "descriptionBn": "গতিবিদ্যা, ভেক্টর, কাজ-শক্তি-ক্ষমতা, মহাকর্ষ, পর্যায়বৃত্ত গতি এবং তড়িৎচৌম্বকবিদ্যার সূত্র ও গাণিতিক সমস্যা সমাধান।",
    "descriptionEn": "Kinematics, vectors, mechanics, gravitation, periodic motion, thermodynamics, and electromagnetism.",
    "chapters": [
      {
        "id": "hsc-phy1-ch2",
        "chapterNumber": 2,
        "paper": 1,
        "titleBn": "ভেক্টর",
        "titleEn": "Vectors",
        "summaryBn": "ভেক্টরের যোজন-বিয়োজন, ডট গুণন ও ক্রস গুণন, নদী-নৌকার আপেক্ষিক বেগ এবং ডাইভারজেন্স ও কার্ল।",
        "summaryEn": "Vector addition, dot and cross products, relative velocity, river-boat river crossings, and vector calculus.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "সামান্তরিকের সূত্র",
          "ডট ও ক্রস গুণন",
          "নদী-নৌকার লব্ধি বেগ ও ন্যূনতম পথ",
          "ভেক্টর ক্যালকুলাস (Grad, Div, Curl)"
        ],
        "coreFormulas": [
          {
            "nameBn": "লব্ধির মান",
            "nameEn": "Resultant Magnitude",
            "latex": "R = \\sqrt{P^2 + Q^2 + 2PQ\\cos\\alpha}"
          },
          {
            "nameBn": "স্কেলার গুণন",
            "nameEn": "Dot Product",
            "latex": "\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta"
          },
          {
            "nameBn": "ভেক্টর গুণন",
            "nameEn": "Cross Product",
            "latex": "|\\vec{A} \\times \\vec{B}| = AB\\sin\\theta"
          }
        ]
      },
      {
        "id": "hsc-phy1-ch3",
        "chapterNumber": 3,
        "paper": 1,
        "titleBn": "গতিবিদ্যা (প্রাস ও প্রক্ষেপক)",
        "titleEn": "Dynamics & Projectile Motion",
        "summaryBn": "রৈখিক গতি সমীকরণ, প্রাস বা প্রক্ষেপকের দ্বিমাত্রিক গতি, সর্বোচ্চ উচ্চতা, বিচরণকাল ও পাল্লা নির্ণয়।",
        "summaryEn": "Kinematic equations, 2D projectile trajectory, peak altitude, flight duration, and horizontal range.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "প্রাসের গতিপথের পরাবৃত্তীয় সমীকরণ",
          "সর্বোচ্চ উচ্চতা ও অনুভূমিক পাল্লা",
          "উল্লম্বভাবে নিক্ষিপ্ত বস্তু",
          "ক্যালকুলেটর ভেক্টর ট্র্যাকিং"
        ],
        "linkedToolIds": [
          "projectile-motion"
        ],
        "coreFormulas": [
          {
            "nameBn": "সর্বোচ্চ উচ্চতা",
            "nameEn": "Maximum Height",
            "latex": "H = \\frac{v_0^2 \\sin^2\\theta}{2g}"
          },
          {
            "nameBn": "বিচরণকাল",
            "nameEn": "Time of Flight",
            "latex": "T = \\frac{2v_0 \\sin\\theta}{g}"
          },
          {
            "nameBn": "অনুভূমিক পাল্লা",
            "nameEn": "Horizontal Range",
            "latex": "R = \\frac{v_0^2 \\sin(2\\theta)}{g}"
          }
        ]
      },
      {
        "id": "hsc-phy1-ch4",
        "chapterNumber": 4,
        "paper": 1,
        "titleBn": "নিউটনীয় বলবিদ্যা",
        "titleEn": "Newtonian Mechanics",
        "summaryBn": "বলের ঘাত ও ঘাত বল, রৈখিক ভরবেগের নিত্যতা, জড়তার ভ্রামক, বৃত্তাকার গতি ও ব্যাংকিং কোণ।",
        "summaryEn": "Impulse of force, conservation of linear momentum, moment of inertia, and circular road banking.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "ভরবেগের সংরক্ষণ সূত্র",
          "জড়তার ভ্রামক ও চক্রগতির ব্যাসার্ধ",
          "রাস্তার ব্যাংকিং ও নিরাপদ বেগ",
          "টর্ক ও কৌণিক ভরবেগ"
        ],
        "coreFormulas": [
          {
            "nameBn": "ব্যাংকিং কোণ",
            "nameEn": "Road Banking Angle",
            "latex": "\\tan\\theta = \\frac{v^2}{rg}"
          },
          {
            "nameBn": "জড়তার ভ্রামক",
            "nameEn": "Moment of Inertia",
            "latex": "I = \\sum m_i r_i^2 = M K^2"
          }
        ]
      },
      {
        "id": "hsc-phy1-ch8",
        "chapterNumber": 8,
        "paper": 1,
        "titleBn": "পর্যায়বৃত্ত গতি",
        "titleEn": "Periodic Motion",
        "summaryBn": "সরল ছন্দিত স্পন্দন, সরল দোলকের গতি ও সূত্রাবলী, স্প্রিং-ভর ব্যবস্থা এবং যান্ত্রিক শক্তির নিত্যতা।",
        "summaryEn": "Simple harmonic motion (SHM), simple pendulum mechanics, spring oscillations, and conservation of energy.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "২-৩ নম্বর"
        },
        "keyTopics": [
          "সরল ছন্দিত গতির ব্যবকলনীয় সমীকরণ",
          "দোলনকাল ও কম্পাঙ্ক",
          "সরল দোলকের সূত্র ও পাহাড়ের উচ্চতা",
          "স্প্রিং ধ্রুবক"
        ],
        "coreFormulas": [
          {
            "nameBn": "দোলনকাল (সরল দোলক)",
            "nameEn": "Pendulum Period",
            "latex": "T = 2\\pi \\sqrt{\\frac{L}{g}}"
          },
          {
            "nameBn": "দোলনকাল (স্প্রিং)",
            "nameEn": "Spring Period",
            "latex": "T = 2\\pi \\sqrt{\\frac{m}{k}}"
          }
        ]
      },
      {
        "id": "hsc-phy1-ch6",
        "chapterNumber": 6,
        "paper": 1,
        "titleBn": "মহাকর্ষ ও অভিকর্ষ",
        "titleEn": "Gravitation & Gravity",
        "summaryBn": "নিউটনের মহাকর্ষ সূত্র, মহাকর্ষীয় প্রাবল্য ও বিভব, উচ্চতা ও গভীরতায় g-এর পরিবর্তন, মুক্তিবেগ এবং কৃত্রিম উপগ্রহ।",
        "summaryEn": "Newton law of gravitation, gravitational potential, variation of g with altitude/depth, escape velocity, and satellite orbits.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "নিউটনের মহাকর্ষ সূত্র ও মহাকর্ষীয় ধ্রুবক G",
          "উচ্চতা ও গভীরতায় g-এর পরিবর্তন",
          "মুক্তিবেগ (Escape Velocity)",
          "কৃত্রিম উপগ্রহের উচ্চতা, বেগ ও পর্যায়কাল",
          "কেপলারের ৩টি সূত্র"
        ],
        "linkedToolIds": [
          "projectile-motion"
        ],
        "coreFormulas": [
          {
            "nameBn": "মহাকর্ষীয় বল সূত্র",
            "nameEn": "Newton's Law of Gravitation",
            "latex": "F = G \\frac{m_1 m_2}{r^2}",
            "notesBn": "মহাবিশ্বের যেকোনো দুটি বস্তুকণার মধ্যকার আকর্ষণ বল। এখানে G = 6.673 × 10^-11 N m^2 kg^-2।",
            "notesEn": "Universal gravitational force between two point masses where G = 6.673 x 10^-11 N m^2 kg^-2."
          },
          {
            "nameBn": "উচ্চতায় অভিকর্ষজ ত্বরণ",
            "nameEn": "Gravity at Altitude h",
            "latex": "g_h = g \\left(1 - \\frac{2h}{R}\\right) = g \\frac{R^2}{(R+h)^2}",
            "notesBn": "পৃথিবীপৃষ্ঠ হতে h উচ্চতায় অভিকর্ষজ ত্বরণ। h << R হলে প্রথম রূপটি এবং বড় উচ্চতার জন্য দ্বিতীয় রূপটি প্রযোজ্য।",
            "notesEn": "Gravitational acceleration at altitude h above Earth surface."
          },
          {
            "nameBn": "গভীরতায় অভিকর্ষজ ত্বরণ",
            "nameEn": "Gravity at Depth d",
            "latex": "g_d = g \\left(1 - \\frac{d}{R}\\right)",
            "notesBn": "পৃথিবীপৃষ্ঠ হতে d গভীরতায় অভিকর্ষজ ত্বরণ। পৃথিবীর কেন্দ্রে d = R হওয়ায় g = 0 হয়।",
            "notesEn": "Gravitational acceleration at depth d below Earth surface, reaching 0 at Earth center."
          },
          {
            "nameBn": "মুক্তিবেগ",
            "nameEn": "Escape Velocity",
            "latex": "v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}",
            "notesBn": "যে ন্যূনতম বেগে কোনো বস্তুকে নিক্ষেপ করলে তা আর পৃথিবীতে ফিরে আসে না। পৃথিবীর জন্য এর মান প্রায় ১১.২ কিমি/সে।",
            "notesEn": "Minimum velocity to escape Earth gravitational pull, approximately 11.2 km/s on Earth."
          },
          {
            "nameBn": "কৃত্রিম উপগ্রহের বেগ ও পর্যায়কাল",
            "nameEn": "Satellite Orbital Velocity & Period",
            "latex": "v = \\sqrt{\\frac{GM}{R+h}}, \\quad T = \\frac{2\\pi (R+h)^{3/2}}{\\sqrt{GM}}",
            "notesBn": "পৃথিবীপৃষ্ঠ হতে h উচ্চতায় বৃত্তাকার কক্ষপথে ঘূর্ণায়মান কৃত্রিম উপগ্রহের রৈখিক বেগ ও পর্যায়কাল।",
            "notesEn": "Orbital velocity and orbital time period of a satellite orbiting at altitude h."
          }
        ]
      },
      {
        "id": "hsc-phy1-ch7",
        "chapterNumber": 7,
        "paper": 1,
        "titleBn": "পদার্থের গাঠনিক ধর্ম",
        "titleEn": "Structural Properties of Matter",
        "summaryBn": "স্থিতিস্থাপকতা, হুকের সূত্র, ইয়ং-এর গুণাঙ্ক, আয়তন ও দৃঢ়তার গুণাঙ্ক, পৃষ্ঠটান ও সান্দ্রতা (স্টোকসের সূত্র)।",
        "summaryEn": "Elasticity, Hooke law, Young modulus, surface tension, capillary action, and Stokes viscosity.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "পীড়ন ও বিকৃতি",
          "ইয়ং ও পয়সনের অনুপাত",
          "একক আয়তনে স্থিতিস্থাপক শক্তি",
          "পৃষ্ঠটান ও কৈশিক নল",
          "সান্দ্রতা ও প্রান্তিক বেগ"
        ],
        "coreFormulas": [
          {
            "nameBn": "ইয়ং-এর গুণাঙ্ক",
            "nameEn": "Young's Modulus",
            "latex": "Y = \\frac{F \\cdot L}{A \\cdot l} = \\frac{m g L}{\\pi r^2 l}",
            "notesBn": "তারের দৈর্ঘ্য বরাবর প্রযুক্ত বল ও দৈর্ঘ্যের পরিবর্তনের অনুপাত। তারের উপাদানের স্থিতিস্থাপক ধর্ম প্রকাশ করে।",
            "notesEn": "Ratio of tensile stress to tensile strain for solid wires undergoing elastic deformation."
          },
          {
            "nameBn": "একক আয়তনে স্থিতিস্থাপক শক্তি",
            "nameEn": "Elastic Energy per Unit Volume",
            "latex": "u = \\frac{1}{2} \\times \\text{পীড়ন} \\times \\text{বিকৃতি} = \\frac{1}{2} \\frac{Y l^2}{L^2}",
            "notesBn": "তার প্রসারিত করতে প্রতি একক আয়তনে কৃতকাজ বা সঞ্চিত স্থৈতিক শক্তির ঘনত্ব।",
            "notesEn": "Elastic potential energy stored per unit volume in a deformed wire."
          },
          {
            "nameBn": "পৃষ্ঠটান ও কৈশিক আরোহণ",
            "nameEn": "Surface Tension & Capillary Rise",
            "latex": "T = \\frac{r h \\rho g}{2 \\cos\\theta}",
            "notesBn": "কৈশিক নলে তরলের উচ্চতা h, স্পর্শকোণ θ, ব্যাসার্ধ r এবং তরলের ঘনত্বের সাথে পৃষ্ঠটানের সম্পর্ক।",
            "notesEn": "Relation between surface tension and capillary rise h with contact angle θ."
          },
          {
            "nameBn": "স্টোকসের সূত্র ও প্রান্তিক বেগ",
            "nameEn": "Stokes' Law & Terminal Velocity",
            "latex": "F = 6\\pi \\eta r v, \\quad v_t = \\frac{2r^2(\\rho - \\sigma)g}{9\\eta}",
            "notesBn": "সান্দ্র মাধ্যমে r ব্যাসার্ধের গোলকের উপর সান্দ্র বল ও অর্জিত সর্বোচ্চ প্রান্তিক বেগ।",
            "notesEn": "Viscous drag force and constant terminal velocity attained by a sphere falling through fluid."
          }
        ]
      },
      {
        "id": "hsc-phy1-ch10",
        "chapterNumber": 10,
        "paper": 1,
        "titleBn": "আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব",
        "titleEn": "Ideal Gas and Kinetic Theory",
        "summaryBn": "বয়েল, চার্লস ও অ্যাভোগাড্রোর সূত্র, আদর্শ গ্যাস সমীকরণ, মূল-গড়-বর্গ বেগ (RMS), স্বাধীনতার মাত্রা ও সম্পৃক্ত বাষ্পচাপ।",
        "summaryEn": "Gas laws, ideal gas equation, RMS speed, kinetic energy of gas molecules, degrees of freedom, and relative humidity.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "আদর্শ গ্যাস সমীকরণ PV=nRT",
          "গ্যাস অণুর RMS বেগ",
          "গ্যাসের মোট গতিশক্তি",
          "সম্পৃক্ত ও অসম্পৃক্ত বাষ্পচাপ",
          "আপেক্ষিক আর্দ্রতা ও শিশিরাংক"
        ],
        "coreFormulas": [
          {
            "nameBn": "আদর্শ গ্যাস সমীকরণ",
            "nameEn": "Ideal Gas Equation",
            "latex": "PV = nRT = \\frac{w}{M}RT = N k_B T",
            "notesBn": "চাপ P, আয়তন V, মোল সংখ্যা n এবং পরম তাপমাত্রা T-এর সার্বিক সমীকরণ। সার্বজনীন গ্যাস ধ্রুবক R = 8.314 J mol^-1 K^-1।",
            "notesEn": "State equation relating pressure, volume, temperature, and moles of ideal gas."
          },
          {
            "nameBn": "মূল-গড়-বর্গ (RMS) বেগ",
            "nameEn": "RMS Velocity of Gas Molecules",
            "latex": "c_{rms} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3P}{\\rho}} = \\sqrt{\\frac{3k_B T}{m}}",
            "notesBn": "গ্যাস অণুসমূহের বেগের বর্গের গড়ের বর্গমূল, যা পরম তাপমাত্রার বর্গমূলের সমানুপাতিক।",
            "notesEn": "Root-mean-square speed of gas particles as a function of temperature and molar mass."
          },
          {
            "nameBn": "গ্যাসের মোট গতিশক্তি",
            "nameEn": "Total Kinetic Energy of Gas",
            "latex": "E_k = \\frac{3}{2} n R T = \\frac{3}{2} N k_B T",
            "notesBn": "n মোল আদর্শ গ্যাসের অণুসমূহের মোট রৈখিক গতিশক্তি। প্রতি অণুর গড় গতিশক্তি = (3/2) kB T।",
            "notesEn": "Total translational kinetic energy for n moles of ideal gas particles."
          },
          {
            "nameBn": "আপেক্ষিক আর্দ্রতা",
            "nameEn": "Relative Humidity",
            "latex": "R = \\frac{f}{F} \\times 100\\%",
            "notesBn": "বায়ুর তাপমাত্রায় সম্পৃক্ত বাষ্পচাপ F এবং শিশিরাংকে সম্পৃক্ত বাষ্পচাপ f-এর শতকরা অনুপাত।",
            "notesEn": "Percentage ratio of actual vapor pressure f to saturation vapor pressure F."
          }
        ]
      },
      {
        "id": "hsc-phy2-ch1",
        "chapterNumber": 1,
        "paper": 2,
        "titleBn": "তাপগতিবিদ্যা",
        "titleEn": "Thermodynamics",
        "summaryBn": "তাপগতিবিদ্যার শূন্যতম, প্রথম ও দ্বিতীয় সূত্র, সমোষ্ণ ও রুদ্ধতাপীয় প্রক্রিয়া, কার্নো চক্র, কর্মদক্ষতা ও এন্ট্রপি।",
        "summaryEn": "Laws of thermodynamics, isothermal and adiabatic processes, Carnot cycle, engine efficiency, and entropy.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "প্রথম সূত্র dQ = dU + dW",
          "সমোষ্ণ ও রুদ্ধতাপীয় সম্পর্ক",
          "কার্নোর চক্র ও ইঞ্জিন দক্ষতা",
          "রেফ্রিজারেটরের কৃতকার্য সহগ",
          "এন্ট্রপির পরিবর্তন"
        ],
        "coreFormulas": [
          {
            "nameBn": "তাপগতিবিদ্যার প্রথম সূত্র",
            "nameEn": "First Law of Thermodynamics",
            "latex": "dQ = dU + dW = dU + P\\,dV",
            "notesBn": "প্রদত্ত তাপশক্তি dQ অন্তস্থ শক্তির বৃদ্ধি dU এবং বহিঃস্থ কাজে dW রূপান্তরিত হয়।",
            "notesEn": "Conservation of energy stating added heat equals increase in internal energy plus work done."
          },
          {
            "nameBn": "রুদ্ধতাপীয় প্রক্রিয়ার সম্পর্ক",
            "nameEn": "Adiabatic Process Relations",
            "latex": "PV^\\gamma = C, \\quad TV^{\\gamma-1} = C, \\quad T^\\gamma P^{1-\\gamma} = C",
            "notesBn": "তাপের আদান-প্রদান ছাড়া দ্রুত সংঘটিত প্রক্রিয়ায় চাপ, আয়তন ও তাপমাত্রার সম্পর্ক (যেখানে γ = Cp/Cv)।",
            "notesEn": "Equations relating state variables in a reversible adiabatic process."
          },
          {
            "nameBn": "কার্নো ইঞ্জিনের কর্মদক্ষতা",
            "nameEn": "Carnot Engine Efficiency",
            "latex": "\\eta = 1 - \\frac{T_2}{T_1} = 1 - \\frac{Q_2}{Q_1} = \\frac{W}{Q_1} \\times 100\\%",
            "notesBn": "উৎস তাপমাত্রা T1 এবং গ্রাহক তাপমাত্রা T2 বিশিষ্ট আদর্শ কার্নো ইঞ্জিনের সর্বোচ্চ তাত্ত্বিক কর্মদক্ষতা।",
            "notesEn": "Maximum theoretical thermal efficiency of a reversible heat engine."
          },
          {
            "nameBn": "এন্ট্রপির পরিবর্তন",
            "nameEn": "Entropy Change Formula",
            "latex": "dS = \\frac{dQ}{T}, \\quad \\Delta S = m c \\ln\\left(\\frac{T_2}{T_1}\\right)",
            "notesBn": "তাপমাত্রা পরিবর্তনের ক্ষেত্রে এন্ট্রপির পরিবর্তন। কোনো প্রত্যাবর্তী চক্রে মোট এন্ট্রপির পরিবর্তন শূন্য।",
            "notesEn": "Change in thermodynamic entropy during reversible heating or cooling."
          }
        ]
      },
      {
        "id": "hsc-phy2-ch2",
        "chapterNumber": 2,
        "paper": 2,
        "titleBn": "স্থির তড়িৎ",
        "titleEn": "Static Electricity",
        "summaryBn": "কুলম্বের সূত্র, তড়িৎ ক্ষেত্র প্রাবল্য ও বিভব, গাউসের সূত্র, ডাই-ইলেকট্রিক মাধ্যম, ধারক ও ধারকত্ব।",
        "summaryEn": "Coulombs law, electric field & potential, Gauss law, dielectric mediums, capacitors, and energy storage.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "কুলম্বের সূত্র ও তড়িৎ বল",
          "তড়িৎ প্রাবল্য ও বিভব সম্পর্ক",
          "সমান্তরাল পাত ধারকের ধারকত্ব",
          "ধারকের সমবায় (শ্রেণি ও সমান্তরাল)",
          "ধারকে সঞ্চিত শক্তি"
        ],
        "coreFormulas": [
          {
            "nameBn": "কুলম্বের সূত্র",
            "nameEn": "Coulomb's Law",
            "latex": "F = \\frac{1}{4\\pi\\varepsilon_0 \\kappa} \\frac{q_1 q_2}{r^2}",
            "notesBn": "দুটি বিন্দু চার্জের মধ্যকার আকর্ষণ বা বিকর্ষণ বল। শূন্য মাধ্যমে 1/(4πε0) = 9 × 10^9 N m^2 C^-2।",
            "notesEn": "Electrostatic force between two stationary point charges in a medium of dielectric constant κ."
          },
          {
            "nameBn": "তড়িৎ প্রাবল্য ও বিভব সম্পর্ক",
            "nameEn": "Electric Field & Potential Relation",
            "latex": "E = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r^2}, \\quad V = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r}, \\quad E = -\\frac{dV}{dr}",
            "notesBn": "বিন্দু চার্জের তড়িৎ প্রাবল্য E এবং বিভব V। ঋণাত্মক বিভব নতিমাত্রা প্রাবল্যের সমান।",
            "notesEn": "Electric field intensity, electrostatic potential, and potential gradient relationship."
          },
          {
            "nameBn": "ধারকের ধারকত্ব ও সঞ্চিত শক্তি",
            "nameEn": "Capacitor Capacitance & Stored Energy",
            "latex": "C = \\frac{\\varepsilon_0 \\kappa A}{d}, \\quad U = \\frac{1}{2} C V^2 = \\frac{1}{2}\\frac{Q^2}{C} = \\frac{1}{2}QV",
            "notesBn": "সমান্তরাল পাত ধারকের ধারকত্ব এবং আহিত ধারকের তড়িৎক্ষেত্রে সঞ্চিত মোট স্থৈতিক শক্তি।",
            "notesEn": "Capacitance of parallel-plate capacitor and potential energy stored in electrostatic field."
          }
        ]
      },
      {
        "id": "hsc-phy2-ch3",
        "chapterNumber": 3,
        "paper": 2,
        "titleBn": "চল তড়িৎ",
        "titleEn": "Current Electricity",
        "summaryBn": "ওহমের সূত্র, তারের আপেক্ষিক রোধ ও তাপমাত্রা সহগ, তড়িৎ কোষের অভ্যন্তরীণ রোধ, কার্শফের সূত্র ও হুইটস্টোন ব্রিজ।",
        "summaryEn": "Ohms law, resistivity, temperature coefficient, internal resistance, Kirchhoffs laws, and Wheatstone bridge.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "আপেক্ষিক রোধ ও তাপমাত্রা সহগ",
          "কার্শফের কারেন্ট ও ভোল্টেজ সূত্র (KCL, KVL)",
          "হুইটস্টোন ব্রিজের নীতি ও মিটার ব্রিজ",
          "শান্ট ও পরিমাপক যন্ত্রের বিস্তার"
        ],
        "coreFormulas": [
          {
            "nameBn": "কার্শফের কারেন্ট ও ভোল্টেজ সূত্র",
            "nameEn": "Kirchhoff's Laws (KCL & KVL)",
            "latex": "\\sum I = 0, \\quad \\sum E = \\sum IR",
            "notesBn": "বর্তমানের জটিল নেটওয়ার্ক বিশ্লেষণে কার্শফের ১ম সূত্র (চার্জের নিত্যতা) এবং ২য় সূত্র (শক্তির নিত্যতা)।",
            "notesEn": "Conservation of charge at junctions (KCL) and conservation of energy in closed loops (KVL)."
          },
          {
            "nameBn": "হুইটস্টোন ব্রিজ নীতি",
            "nameEn": "Wheatstone Bridge Principle",
            "latex": "\\frac{P}{Q} = \\frac{R}{S}",
            "notesBn": "গ্যালভানোমিটারে কোনো প্রবাহ না থাকলে (নাল কন্ডিশন) চারটি রোধের মধ্যকার ভারসাম্য সম্পর্ক।",
            "notesEn": "Balance condition for four resistance arms in a null-deflection Wheatstone bridge."
          },
          {
            "nameBn": "শান্ট রোধ সমীকরণ",
            "nameEn": "Shunt Resistance Formula",
            "latex": "S = \\frac{I_g \\cdot G}{I - I_g} = \\frac{G}{n - 1}",
            "notesBn": "গ্যালভানোমিটার বা অ্যামিটারের পরিমাপ সীমা n গুণ বৃদ্ধি করতে সমান্তরালে যুক্ত ক্ষুদ্র রোধের মান।",
            "notesEn": "Low parallel resistance needed to extend ammeter or galvanometer current range."
          }
        ]
      },
      {
        "id": "hsc-phy2-ch7",
        "chapterNumber": 7,
        "paper": 2,
        "titleBn": "ভৌত আলোকবিজ্ঞান",
        "titleEn": "Physical Optics",
        "summaryBn": "হাইগেনসের নীতি, আলোর ব্যতিচার, ইয়ং-এর দ্বি-চির পরীক্ষা, অপবর্তন (একক চির ও গ্রেটিং) এবং সমবর্তন।",
        "summaryEn": "Huygens principle, wave interference, Youngs double slit experiment, single slit diffraction, and polarization.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "ইয়ং-এর দ্বি-চির ব্যতিচার ও ডোরার প্রস্থ",
          "একক চিরে ফ্রনহফার অপবর্তন",
          "অপবর্তন গ্রেটিং সমীকরণ",
          "ব্রুস্টারের সূত্র ও সমবর্তন"
        ],
        "coreFormulas": [
          {
            "nameBn": "ইয়ং-এর দ্বি-চির ব্যতিচার ডোরার প্রস্থ",
            "nameEn": "Young's Double Slit Fringe Width",
            "latex": "\\Delta x = \\frac{\\lambda D}{2d}, \\quad y_n = \\frac{n \\lambda D}{2d}",
            "notesBn": "চিরদ্বয়ের মধ্যবর্তী দূরত্ব 2d, পর্দা দূরত্ব D এবং তরঙ্গদৈর্ঘ্য λ হলে পরপর দুটি উজ্জ্বল বা অন্ধকার ডোরার ব্যবধান।",
            "notesEn": "Fringe separation and position of nth bright fringe in Youngs two-slit interference."
          },
          {
            "nameBn": "একক চিরে ফ্রনহফার অপবর্তন",
            "nameEn": "Single Slit Diffraction Condition",
            "latex": "a \\sin\\theta = n\\lambda \\quad (\\text{অবম}), \\quad a \\sin\\theta = (2n+1)\\frac{\\lambda}{2} \\quad (\\text{উজ্জ্বল})",
            "notesBn": "a প্রস্থের একক চিরের ক্ষেত্রে অবম (Minima) ও গৌণ চরম (Maxima) সৃষ্টি হওয়ার কৌণিক শর্ত।",
            "notesEn": "Diffraction minima and secondary maxima conditions for slit width a."
          },
          {
            "nameBn": "অপবর্তন গ্রেটিং সমীকরণ",
            "nameEn": "Diffraction Grating Equation",
            "latex": "(a + b)\\sin\\theta = d \\sin\\theta = n\\lambda",
            "notesBn": "গ্রেটিং ধ্রুবক d = (a+b) = 1/N বিশিষ্ট গ্রেটিং-এ n-তম উজ্জ্বল বিন্দুর কৌণিক বিচ্যুতি সমীকরণ।",
            "notesEn": "Principal maxima condition for optical grating with grating element d = 1/N."
          }
        ]
      },
      {
        "id": "hsc-phy2-ch8",
        "chapterNumber": 8,
        "paper": 2,
        "titleBn": "আধুনিক পদার্থবিজ্ঞানের সূচনা",
        "titleEn": "Introduction to Modern Physics",
        "summaryBn": "মাইকেলসন-মর্লি পরীক্ষা, বিশেষ আপেক্ষিকতা তত্ত্ব, কাল দীর্ঘায়ন, দৈর্ঘ্য সংকোচন, ভর বৃদ্ধি ও ফটোইলেকট্রিক ক্রিয়া।",
        "summaryEn": "Special relativity, time dilation, length contraction, relativistic mass, mass-energy equivalence, and photoelectric effect.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "কাল দীর্ঘায়ন ও দৈর্ঘ্য সংকোচন",
          "আপেক্ষিক ভর ও ভর-শক্তি E = mc^2",
          "আইনস্টাইনের আলোক-তড়িৎ সমীকরণ",
          "কম্পটন ক্রিয়া ও ডি-ব্রগলি তরঙ্গদৈর্ঘ্য"
        ],
        "coreFormulas": [
          {
            "nameBn": "কাল দীর্ঘায়ন ও দৈর্ঘ্য সংকোচন",
            "nameEn": "Time Dilation & Length Contraction",
            "latex": "t = \\frac{t_0}{\\sqrt{1 - v^2/c^2}}, \\quad L = L_0 \\sqrt{1 - \\frac{v^2}{c^2}}",
            "notesBn": "গতিশীল পর্যবেক্ষকের সাপেক্ষে সময় বৃদ্ধি পায় (কাল দীর্ঘায়ন) এবং গতির অভিমুখে দৈর্ঘ্য সংকুচিত হয়।",
            "notesEn": "Relativistic dilation of moving clock intervals and contraction of moving object lengths."
          },
          {
            "nameBn": "আপেক্ষিক ভর ও আইনস্টাইনের ভর-শক্তি সমীকরণ",
            "nameEn": "Relativistic Mass & Energy Equivalence",
            "latex": "m = \\frac{m_0}{\\sqrt{1 - v^2/c^2}}, \\quad E = mc^2",
            "notesBn": "আলোর কাছাকাছি বেগে গতিশীল বস্তুর ভর বৃদ্ধি পায় এবং ভর সম্পূর্ণ শক্তিতে রূপান্তরিত হওয়ার বিখ্যাত সমীকরণ।",
            "notesEn": "Relativistic inertial mass variation and Einstein mass-energy equivalence."
          },
          {
            "nameBn": "আইনস্টাইনের আলোক-তড়িৎ সমীকরণ",
            "nameEn": "Einstein's Photoelectric Equation",
            "latex": "h\\nu = W_0 + K_{\\max} = h\\nu_0 + \\frac{1}{2}m v_{\\max}^2 = e V_s",
            "notesBn": "আপতিত ফোটনের শক্তি কার্য-অপেক্ষক W0 এবং নির্গত ফটোইলেকট্রনের সর্বোচ্চ গতিশক্তিতে বণ্টিত হয়।",
            "notesEn": "Energy conservation of photons ejecting electrons with work function W0 and stopping potential Vs."
          }
        ]
      },
      {
        "id": "hsc-phy2-ch9",
        "chapterNumber": 9,
        "paper": 2,
        "titleBn": "পরমাণুর মডেল ও নিউক্লিয়ার পদার্থবিজ্ঞান",
        "titleEn": "Atomic Models & Nuclear Physics",
        "summaryBn": "রাদারফোর্ড ও বোর পরমাণু মডেল, কক্ষপথের ব্যাসার্ধ ও শক্তি, তেজস্ক্রিয় ক্ষয় সূত্র, অর্ধায়ু, গড় আয়ু এবং নিউক্লিয়ার ফিশন-ফিউশন।",
        "summaryEn": "Bohr atomic model, orbital radius, energy levels, radioactive decay law, half-life, mean life, and mass defect.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "বোর মডেলের ব্যাসার্ধ ও শক্তিস্তর",
          "তেজস্ক্রিয় ক্ষয় সূত্র ও ক্ষয় ধ্রুবক",
          "অর্ধায়ু ও গড় আয়ুর সম্পর্ক",
          "ভর ত্রুটি ও নিউক্লীয় বন্ধন শক্তি"
        ],
        "coreFormulas": [
          {
            "nameBn": "বোর মডেলের ব্যাসার্ধ ও শক্তিস্তর",
            "nameEn": "Bohr Orbit Radius & Energy Level",
            "latex": "r_n = \\frac{n^2 h^2 \\varepsilon_0}{\\pi m e^2}, \\quad E_n = -\\frac{13.6}{n^2}\\text{ eV}",
            "notesBn": "হাইড্রোজেন পরমাণুর n-তম বোর কক্ষপথের ব্যাসার্ধ ও মোট শক্তিস্তরের কোয়ান্টাম সমীকরণ।",
            "notesEn": "Quantized orbital radius and negative energy eigenvalues in hydrogen-like atoms."
          },
          {
            "nameBn": "তেজস্ক্রিয় ক্ষয় সূত্র ও অর্ধায়ু",
            "nameEn": "Radioactive Decay Law & Half-Life",
            "latex": "N(t) = N_0 e^{-\\lambda t}, \\quad T_{1/2} = \\frac{\\ln 2}{\\lambda} = \\frac{0.693}{\\lambda}, \\quad \\tau = \\frac{1}{\\lambda}",
            "notesBn": "তেজস্ক্রিয় পদার্থের অবশিষ্ট অক্ষত পরমাণু সংখ্যা, অর্ধায়ু T1/2 এবং গড় আয়ুর গাণিতিক সম্পর্ক।",
            "notesEn": "Exponential decay rate of unstable radionuclides and relationship to half-life."
          },
          {
            "nameBn": "ভর ত্রুটি ও নিউক্লীয় বন্ধন শক্তি",
            "nameEn": "Mass Defect & Binding Energy",
            "latex": "\\Delta m = [Z m_p + (A - Z)m_n] - M_{\\text{nucleus}}, \\quad B.E. = \\Delta m \\cdot c^2 = \\Delta m \\times 931.5\\text{ MeV}",
            "notesBn": "নিউক্লিয়নের ভর ও নিউক্লিয়াসের প্রকৃত ভরের ব্যবধান থেকে নির্গত বিপুল স্থায়িত্ব প্রদানকারী বন্ধন শক্তি।",
            "notesEn": "Mass defect of constituents converted to nuclear binding energy via Einstein relation."
          }
        ]
      }
    ]
  },
  {
    "id": "chemistry",
    "level": "hsc",
    "nameBn": "রসায়ন",
    "nameEn": "Chemistry",
    "icon": "⚗️",
    "color": "from-emerald-600 to-teal-600",
    "badgeColor": "text-emerald-400 bg-emerald-950/60 border-emerald-800/40",
    "code": "HSC 176 & 177",
    "descriptionBn": "গুণগত রসায়ন, মৌলের পর্যায়বৃত্ত ধর্ম, রাসায়নিক পরিবর্তন (pH ও বাফার), জারণ-বিজারণ ও পরিমাণগত রসায়ন।",
    "descriptionEn": "Qualitative analysis, periodic properties, chemical kinetics & equilibrium, redox titration, and stoichiometry.",
    "chapters": [
      {
        "id": "hsc-chem1-ch2",
        "chapterNumber": 2,
        "paper": 1,
        "titleBn": "গুণগত রসায়ন",
        "titleEn": "Qualitative Chemistry",
        "summaryBn": "পরমাণুর গঠন, কোয়ান্টাম সংখ্যা, অফবাউ ও হুন্ডের নীতি, দ্রাব্যতা ও দ্রাব্যতা গুণফল (Ksp), এবং বর্ণালী বিশ্লেষণ।",
        "summaryEn": "Atomic models, quantum numbers, electronic configurations, solubility product (Ksp), and flame tests.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৪-৫ নম্বর"
        },
        "keyTopics": [
          "৪টি কোয়ান্টাম সংখ্যা",
          "অফবাউ ও পাউলির বর্জন নীতি",
          "দ্রাব্যতা গুণফল (Ksp) ও অধঃক্ষেপণ",
          "হাইড্রোজেন পরমাণুর বর্ণালী"
        ],
        "coreFormulas": [
          {
            "nameBn": "রিডবার্গ সমীকরণ",
            "nameEn": "Rydberg Formula",
            "latex": "\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)"
          },
          {
            "nameBn": "দ্রাব্যতা গুণফল (Ksp)",
            "nameEn": "Solubility Product",
            "latex": "K_{sp} = [A^{y+}]^x [B^{x-}]^y"
          }
        ]
      },
      {
        "id": "hsc-chem1-ch3",
        "chapterNumber": 3,
        "paper": 1,
        "titleBn": "মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন",
        "titleEn": "Periodic Properties & Chemical Bonding",
        "summaryBn": "ইলেকট্রন বিন্যাস ভিত্তিক পর্যায় সারণী, আয়নিকরণ শক্তি, তড়িৎ ঋণাত্মকতা, সংকরায়ন (Hybridization), এবং ভেসপার তত্ত্ব।",
        "summaryEn": "Periodic table periodicity, ionization energy, electronegativity, orbital hybridization, and molecular geometry.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৪-৫ নম্বর"
        },
        "keyTopics": [
          "আয়নিকরণ শক্তি ও ইলেকট্রন আসক্তি",
          "সংকরায়ন (sp, sp2, sp3, dsp3)",
          "অণুর আকৃতি ও বন্ধন কোণ (VSEPR)",
          "হাইড্রোজেন বন্ধন"
        ],
        "linkedToolIds": [
          "periodic-table"
        ]
      },
      {
        "id": "hsc-chem2-ch3",
        "chapterNumber": 3,
        "paper": 2,
        "titleBn": "পরিমাণগত রসায়ন (জারণ-বিজারণ ও টাইট্রেশন)",
        "titleEn": "Quantitative Chemistry & Redox",
        "summaryBn": "মোল ধারণা, মোলার দ্রবণ, আয়ন-ইলেকট্রন পদ্ধতিতে জারণ-বিজারণ সমতা, টাইট্রেশন ও জারণমিতি (KMnO4, K2Cr2O7)।",
        "summaryEn": "Molar concentration, redox balancing via ion-electron method, acid-base titration, and permanganometry.",
        "marksWeightage": {
          "cq": "১০-১৫ নম্বর (১-২টি CQ)",
          "mcq": "৫ নম্বর"
        },
        "keyTopics": [
          "আয়ন-ইলেকট্রন পদ্ধতিতে সমতা",
          "অম্লীয় ও ক্ষারীয় মাধ্যমে টাইট্রেশন",
          "মোলার দ্রবণ প্রস্তুতি ও পিপিএম (ppm)",
          "কেলাস পানির মোলার ভর"
        ],
        "linkedToolIds": [
          "redox-balancer",
          "molar-mass"
        ],
        "coreFormulas": [
          {
            "nameBn": "দ্রবণের ঘনমাত্রা সূত্র",
            "nameEn": "Molarity Equation",
            "latex": "S = \\frac{1000 \\times W}{M \\times V (\\text{mL})}"
          },
          {
            "nameBn": "টাইট্রেশন সূত্র",
            "nameEn": "Titration Equivalence",
            "latex": "V_1 S_1 e_1 = V_2 S_2 e_2"
          },
          {
            "nameBn": "এসিড-ক্ষার ও রেডক্স টাইট্রেশন সমতা",
            "nameEn": "Titration Equivalence Formula",
            "latex": "V_A \\cdot S_A \\cdot e_A = V_B \\cdot S_B \\cdot e_B",
            "notesBn": "প্রশমন বা জারণ-বিজারণ টাইট্রেশনে পূর্ণ প্রশমনের শর্ত, যেখানে e হলো তুল্য সংখ্যা (যেমন H2SO4-এর জন্য e=2, KMnO4-এর অম্লীয় মাধ্যমে e=5)।",
            "notesEn": "Equivalence relation in volumetric titration where e represents equivalence factor / valence change."
          }
        ]
      },
      {
        "id": "hsc-chem2-ch1",
        "chapterNumber": 1,
        "paper": 2,
        "titleBn": "পরিবেশ রসায়ন",
        "titleEn": "Environmental Chemistry (Gas Laws)",
        "summaryBn": "বয়েল, চার্লস ও অ্যাভোগাড্রো সূত্র, সমন্বিত গ্যাস সমীকরণ, ডাল্টনের আংশিক চাপ, গ্রাহামের ব্যাপন সূত্র এবং ভ্যান ডার ওয়ালস সমীকরণ।",
        "summaryEn": "Gas laws, combined gas law, Daltons partial pressures, Grahams law of diffusion, and Van der Waals equation.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৪ নম্বর"
        },
        "keyTopics": [
          "বয়েল ও চার্লসের সমন্বিত সূত্র",
          "ডাল্টনের আংশিক চাপ ও মোল ভগ্নাংশ",
          "গ্রাহামের ব্যাপন সূত্র ও আণবিক ভর",
          "বাস্তব গ্যাস ও ভ্যান ডার ওয়ালস সমীকরণ",
          "গ্রিনহাউস গ্যাস ও এসিড বৃষ্টি"
        ],
        "coreFormulas": [
          {
            "nameBn": "সমন্বিত গ্যাস সূত্র",
            "nameEn": "Combined Gas Law",
            "latex": "\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}",
            "notesBn": "স্থির ভরের যেকোনো গ্যাসের চাপ, আয়তন এবং পরম তাপমাত্রার যুগপৎ পরিবর্তনের সমন্বিত সমীকরণ।",
            "notesEn": "Combined relationship of pressure, volume, and absolute temperature for a constant gas quantity."
          },
          {
            "nameBn": "গ্যাস ঘনত্ব সমীকরণ",
            "nameEn": "Ideal Gas Density Equation",
            "latex": "PM = \\rho RT \\implies \\rho = \\frac{PM}{RT}",
            "notesBn": "আদর্শ গ্যাসের আণবিক ভর M এবং ঘনত্বের ρ সরাসরি সম্পর্ক। উচ্চ চাপে গ্যাসের ঘনত্ব বৃদ্ধি পায়।",
            "notesEn": "Calculates gas density ρ as a direct function of pressure, molecular weight, and temperature."
          },
          {
            "nameBn": "ডাল্টনের আংশিক চাপ সূত্র",
            "nameEn": "Dalton's Law of Partial Pressures",
            "latex": "P_{\\text{total}} = p_A + p_B + p_C, \\quad p_i = x_i \\cdot P_{\\text{total}} = \\frac{n_i}{n_{\\text{total}}} P_{\\text{total}}",
            "notesBn": "পরস্পর বিক্রিয়াহীন গ্যাস মিশ্রণের মোট চাপ উপাদান গ্যাসসমূহের আংশিক চাপের সমষ্টির সমান। উপাদান চাপ = মোল ভগ্নাংশ × মোট চাপ।",
            "notesEn": "Total pressure of a non-reacting gas mixture equals the sum of component partial pressures."
          },
          {
            "nameBn": "গ্রাহামের গ্যাস ব্যাপন সূত্র",
            "nameEn": "Graham's Law of Diffusion",
            "latex": "\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}} = \\sqrt{\\frac{\\rho_2}{\\rho_1}} = \\frac{t_2}{t_1}",
            "notesBn": "স্থির তাপমাত্রা ও চাপে গ্যাসের ব্যাপন হার তার আণবিক ভর বা ঘনত্বের বর্গমূলের ব্যস্তানুপাতিক। ভারী গ্যাস ধীরে ব্যাপিত হয়।",
            "notesEn": "Rate of effusion/diffusion inversely proportional to the square root of molar mass."
          },
          {
            "nameBn": "ভ্যান ডার ওয়ালস বাস্তব গ্যাস সমীকরণ",
            "nameEn": "Van der Waals Real Gas Equation",
            "latex": "\\left(P + \\frac{an^2}{V^2}\\right)(V - nb) = nRT",
            "notesBn": "আণবিক আকর্ষণ বলজনিত চাপ সংশোধন (an^2/V^2) এবং অণুসমূহের নিজস্ব আয়তন সংশোধন (nb) যুক্ত বাস্তব গ্যাস সমীকরণ।",
            "notesEn": "Modifies ideal gas law to account for intermolecular attractions (a) and molecular volume (b)."
          }
        ]
      },
      {
        "id": "hsc-chem1-ch4",
        "chapterNumber": 4,
        "paper": 1,
        "titleBn": "রাসায়নিক পরিবর্তন ও সাম্যাবস্থা",
        "titleEn": "Chemical Changes & Equilibrium",
        "summaryBn": "রাসায়নিক বিক্রিয়ার গতিবেগ, লা-শাতেলিয়ের নীতি, সাম্যধ্রুবক Kp ও Kc, অসওয়াল্ডের লঘুকরণ সূত্র, বাফার দ্রবণ এবং আরহেনিয়াস সমীকরণ।",
        "summaryEn": "Reaction kinetics, Le Chatelier principle, equilibrium constants Kp & Kc, buffer solutions, and Arrhenius activation energy.",
        "marksWeightage": {
          "cq": "১০-১৫ নম্বর (১-২টি CQ)",
          "mcq": "৪-৫ নম্বর"
        },
        "keyTopics": [
          "ভরক্রিয়া সূত্র ও Kp, Kc রাশিমালা",
          "Kp ও Kc-এর সম্পর্ক Kp = Kc(RT)^Δn",
          "হ্যান্ডারসন-হ্যাসেলবালখ সমীকরণ",
          "বাফার ক্রিয়া কৌশল",
          "আরহেনিয়াসের সক্রিয়করণ শক্তি"
        ],
        "linkedToolIds": [
          "chemistry"
        ],
        "coreFormulas": [
          {
            "nameBn": "ভরক্রিয়া সূত্র ও সাম্যধ্রুবক (Kp ও Kc)",
            "nameEn": "Equilibrium Constants (Kp & Kc)",
            "latex": "aA + bB \\rightleftharpoons cC + dD \\implies K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}, \\quad K_p = \\frac{p_C^c \\cdot p_D^d}{p_A^a \\cdot p_B^b}",
            "notesBn": "সাম্যাবস্থায় উৎপাদের সক্রিয় ভরের গুণফল এবং বিক্রিয়কের সক্রিয় ভরের গুণফলের অনুপাত একটি নির্দিষ্ট তাপমাত্রায় ধ্রুব থাকে।",
            "notesEn": "Equilibrium constant expressions in terms of molar concentrations (Kc) and partial pressures (Kp)."
          },
          {
            "nameBn": "Kp ও Kc-এর সম্পর্ক",
            "nameEn": "Relation Between Kp and Kc",
            "latex": "K_p = K_c (RT)^{\\Delta n}, \\quad \\Delta n = (c+d) - (a+b)",
            "notesBn": "Δn হলো গ্যাসীয় উৎপাদ এবং গ্যাসীয় বিক্রিয়কের মোল সংখ্যার পার্থক্য। Δn = 0 হলে Kp = Kc হয়।",
            "notesEn": "Mathematical bridge connecting pressure and concentration equilibrium constants with Δn mole difference."
          },
          {
            "nameBn": "অসওয়াল্ডের লঘুকরণ সূত্র",
            "nameEn": "Ostwald's Dilution Law",
            "latex": "K_a = \\frac{\\alpha^2 C}{1 - \\alpha} \\approx \\alpha^2 C \\implies \\alpha = \\sqrt{\\frac{K_a}{C}}",
            "notesBn": "মৃদু এসিডের বিয়োজন মাত্রা α দ্রবণের মোলার ঘনমাত্রার C বর্গমূলের ব্যস্তানুপাতিক (যখন α << 1)।",
            "notesEn": "Degree of ionization α of a weak electrolyte related to concentration C and dissociation constant Ka."
          },
          {
            "nameBn": "হ্যান্ডারসন-হ্যাসেলবালখ অম্লীয় বাফার সমীকরণ",
            "nameEn": "Henderson-Hasselbalch (Acidic Buffer)",
            "latex": "\\text{pH} = \\text{pK}_a + \\log_{10}\\frac{[\\text{লবণ / Salt}]}{[\\text{অম্ল / Acid}]}",
            "notesBn": "মৃদু অম্ল ও তার তীব্র ক্ষারের লবণের বাফার দ্রবণের কাঙ্ক্ষিত pH নির্ণয়ের সমীকরণ।",
            "notesEn": "Computes pH of weak acid and conjugate base buffer mixtures."
          },
          {
            "nameBn": "হ্যান্ডারসন-হ্যাসেলবালখ ক্ষারীয় বাফার সমীকরণ",
            "nameEn": "Henderson-Hasselbalch (Basic Buffer)",
            "latex": "\\text{pOH} = \\text{pK}_b + \\log_{10}\\frac{[\\text{লবণ / Salt}]}{[\\text{ক্ষার / Base}]}, \\quad \\text{pH} = 14 - \\text{pOH}",
            "notesBn": "মৃদু ক্ষার ও তার তীব্র অম্লের লবণের বাফার দ্রবণের pOH ও pH নির্ণয়ের সমীকরণ।",
            "notesEn": "Computes pOH and derived pH of weak base and conjugate salt buffer systems."
          },
          {
            "nameBn": "আরহেনিয়াসের সক্রিয়করণ শক্তি সমীকরণ",
            "nameEn": "Arrhenius Equation for Activation Energy",
            "latex": "k = A e^{-E_a / RT} \\implies \\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)",
            "notesBn": "বিক্রিয়ার হার ধ্রুবক k-এর উপর তাপমাত্রার প্রভাব এবং সক্রিয়করণ শক্তি Ea নির্ণয়ের সমীকরণ।",
            "notesEn": "Quantifies temperature dependence of reaction rate constants on activation energy Ea."
          }
        ]
      },
      {
        "id": "hsc-chem2-ch4",
        "chapterNumber": 4,
        "paper": 2,
        "titleBn": "তড়িৎ রসায়ন",
        "titleEn": "Electrochemistry",
        "summaryBn": "তড়িৎ পরিবাহী, ফ্যারাডের তড়িৎ বিশ্লেষণ সূত্র, প্রমাণ তড়িৎদ্বার বিভব, গ্যালভানিক কোষ, নার্নস্ট সমীকরণ এবং কোষ বিভব।",
        "summaryEn": "Electrolytic conduction, Faradays laws of electrolysis, standard electrode potentials, galvanic cells, and Nernst equation.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৪ নম্বর"
        },
        "keyTopics": [
          "ফ্যারাডের ১ম সূত্র ও তড়িৎ রাসায়নিক তুল্যাঙ্ক Z",
          "কোষ বিভব E°cell = E°cathode - E°anode",
          "নার্নস্ট সমীকরণ ও তড়িৎ প্রবাহ",
          "লেড-এসিড ও লিথিয়াম-আয়ন ব্যাটারি"
        ],
        "coreFormulas": [
          {
            "nameBn": "ফ্যারাডের তড়িৎ বিশ্লেষণের প্রথম সূত্র",
            "nameEn": "Faraday's First Law of Electrolysis",
            "latex": "W = Z \\cdot I \\cdot t = \\frac{M}{e \\cdot F} \\cdot I \\cdot t = \\frac{M \\cdot Q}{n \\cdot 96500}",
            "notesBn": "তড়িৎদ্বারে সঞ্চিত বা দ্রবীভূত পদার্থের ভর W প্রবাহিত তড়িৎ চার্জের সমানুপাতিক। ফ্যারাডে ধ্রুবক F = 96,500 C mol^-1।",
            "notesEn": "Mass W of substance deposited during electrolysis proportional to total charge Q passed."
          },
          {
            "nameBn": "প্রমাণ গ্যালভানিক কোষের তড়িৎচালক বল",
            "nameEn": "Standard Cell Potential (EMF)",
            "latex": "E_{\\text{cell}}^\\circ = E_{\\text{cathode (red)}}^\\circ - E_{\\text{anode (red)}}^\\circ",
            "notesBn": "ক্যাথোডের প্রমাণ বিজারণ বিভব থেকে অ্যানোডের প্রমাণ বিজারণ বিভব বিয়োগ করে স্বতঃস্ফূর্ত কোষের বিভব নির্ণয়।",
            "notesEn": "Standard EMF of galvanic cell determined from standard reduction potentials of cathode and anode."
          },
          {
            "nameBn": "নার্নস্ট সমীকরণ (কোষ বিভব)",
            "nameEn": "Nernst Equation for Cell Potential",
            "latex": "E = E^\\circ - \\frac{2.303 RT}{nF}\\log_{10} Q = E^\\circ - \\frac{0.0592}{n}\\log_{10}\\frac{[\\text{Products}]}{[\\text{Reactants}]}",
            "notesBn": "অ-প্রমাণ ঘনমাত্রায় (25°C তাপমাত্রায়) তড়িৎদ্বার বা পূর্ণ কোষের বিভব নির্ণয়ের সমীকরণ।",
            "notesEn": "Relates cell potential to reaction quotient Q under non-standard concentration conditions."
          },
          {
            "nameBn": "কোষ বিভব ও গিবস মুক্ত শক্তি",
            "nameEn": "Cell Potential & Gibbs Free Energy",
            "latex": "\\Delta G^\\circ = -n F E^\\circ = -RT \\ln K",
            "notesBn": "স্বতঃস্ফূর্ত কোষ বিক্রিয়ায় ΔG° ঋণাত্মক হলে E°cell ধনাত্মক হয়। সাম্যধ্রুবক K-এর সাথে মুক্ত শক্তির সরাসরি সম্পর্ক।",
            "notesEn": "Thermodynamic connection between electrochemical cell voltage and free energy change ΔG°."
          }
        ]
      }
    ]
  },
  {
    "id": "higher-math",
    "level": "hsc",
    "nameBn": "উচ্চতর গণিত",
    "nameEn": "Higher Mathematics",
    "icon": "📐",
    "color": "from-purple-600 to-indigo-600",
    "badgeColor": "text-purple-400 bg-purple-950/60 border-purple-800/40",
    "code": "HSC 265 & 266",
    "descriptionBn": "ম্যাট্রিক্স ও নির্ণায়ক, সরলরেখা, বৃত্ত, অন্তরীকরণ ও যোগজীকরণ, জটিল সংখ্যা এবং দ্বিঘাত সমীকরণ।",
    "descriptionEn": "Matrices & determinants, coordinate geometry, calculus (differentiation & integration), and quadratic equations.",
    "chapters": [
      {
        "id": "hsc-hm1-ch1",
        "chapterNumber": 1,
        "paper": 1,
        "titleBn": "ম্যাট্রিক্স ও নির্ণায়ক",
        "titleEn": "Matrices & Determinants",
        "summaryBn": "ম্যাট্রিক্সের যোগ, বিয়োগ, গুণ, বিপরীত ম্যাট্রিক্স, নির্ণায়কের ধর্মাবলী এবং ক্র্যামারের নিয়মে একঘাত সমীকরণ জোট সমাধান।",
        "summaryEn": "Matrix operations, matrix multiplication, inverse matrices, determinant expansions, and Cramer’s rule.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "ম্যাট্রিক্সের গুণন যোগ্যতা",
          "বিপরীত ম্যাট্রিক্স (Inverse Matrix)",
          "নির্ণায়কের অনুরাশি ও সহগুণক",
          "ক্র্যামারের নিয়মে সমীকরণ সমাধান"
        ],
        "coreFormulas": [
          {
            "nameBn": "বিপরীত ম্যাট্রিক্স",
            "nameEn": "Inverse Matrix",
            "latex": "A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)"
          },
          {
            "nameBn": "ক্র্যামারের নিয়ম",
            "nameEn": "Cramer's Rule",
            "latex": "x = \\frac{D_x}{D}, \\quad y = \\frac{D_y}{D}, \\quad z = \\frac{D_z}{D}"
          }
        ]
      },
      {
        "id": "hsc-hm2-ch4",
        "chapterNumber": 4,
        "paper": 2,
        "titleBn": "বহুপদী ও বহুপদী সমীকরণ (দ্বিঘাত সমীকরণ)",
        "titleEn": "Polynomials & Quadratic Equations",
        "summaryBn": "দ্বিঘাত সমীকরণের মূলের প্রকৃতি, নিশ্চয়ক (Discriminant), মূল ও সহগের সম্পর্ক এবং সাধারণ মূল থাকার শর্ত।",
        "summaryEn": "Roots of quadratic equations, discriminant analysis, relations between roots and coefficients, and common roots.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩ নম্বর"
        },
        "keyTopics": [
          "নিশ্চায়ক বা পৃথায়ক (Discriminant)",
          "মূল ও সহগের সম্পর্ক",
          "জটিল মূলের অনুবন্ধী জোড়",
          "কাসিও মোড 5 3 সমাধান"
        ],
        "linkedToolIds": [
          "quadratic-solver"
        ],
        "coreFormulas": [
          {
            "nameBn": "দ্বিঘাত সূত্র",
            "nameEn": "Quadratic Formula",
            "latex": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"
          },
          {
            "nameBn": "মূলের যোগফল ও গুণফল",
            "nameEn": "Sum & Product of Roots",
            "latex": "\\alpha + \\beta = -\\frac{b}{a}, \\quad \\alpha\\beta = \\frac{c}{a}"
          }
        ]
      },
      {
        "id": "hsc-hm1-ch3",
        "chapterNumber": 3,
        "paper": 1,
        "titleBn": "সরলরেখা",
        "titleEn": "Straight Lines",
        "summaryBn": "স্থানাঙ্ক জ্যামিতি, দূরত্বের সূত্র, অনুপাত বিভক্তিকরণ, ত্রিভুজের ক্ষেত্রফল, বিভিন্ন আকারে সরলরেখার সমীকরণ, লম্ব ও সমান্তরাল রেখা।",
        "summaryEn": "Coordinate geometry, distance formula, section formula, triangle area, straight line equations, perpendicular distance, and parallel lines.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৪ নম্বর"
        },
        "keyTopics": [
          "অন্তর্বিভক্তিকরণ ও বহির্বিভক্তিকরণ সূত্র",
          "ত্রিভুজের ভরকেন্দ্র ও ক্ষেত্রফল",
          "সরলরেখার আদর্শ আকার (y=mx+c, x/a+y/b=1)",
          "দুটি রেখার মধ্যবর্তী কোণ ও লম্ব/সমান্তরাল শর্ত",
          "বিন্দু হতে সরলরেখার লম্ব দূরত্ব"
        ],
        "linkedToolIds": [
          "higher-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "অন্তর্বিভক্তিকরণ ও বহির্বিভক্তিকরণ সূত্র",
            "nameEn": "Internal & External Section Formula",
            "latex": "x = \\frac{m_1 x_2 \\pm m_2 x_1}{m_1 \\pm m_2}, \\quad y = \\frac{m_1 y_2 \\pm m_2 y_1}{m_1 \\pm m_2}",
            "notesBn": "দুটি বিন্দুর সংযোজক রেখাংশকে m1:m2 অনুপাতে অন্তর্বিভক্ত (+) বা বহির্বিভক্ত (-) করা বিন্দুর স্থানাঙ্ক।",
            "notesEn": "Coordinates dividing line segment between two points in ratio m1:m2 internally or externally."
          },
          {
            "nameBn": "ত্রিভুজের ভরকেন্দ্র ও ক্ষেত্রফল",
            "nameEn": "Centroid & Area of Triangle",
            "latex": "G = \\left(\\frac{x_1+x_2+x_3}{3}, \\frac{y_1+y_2+y_3}{3}\\right), \\quad \\Delta = \\frac{1}{2}|x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)|",
            "notesBn": "ত্রিভুজের তিনটি শীর্ষবিন্দু জানা থাকলে মধ্যমাত্রয়ের ছেদবিন্দু ভরকেন্দ্র এবং ক্ষেত্রফল নির্ণয়ের সূত্র।",
            "notesEn": "Formulas for triangle centroid and enclosed polygon area via coordinate determinants."
          },
          {
            "nameBn": "সরলরেখার আদর্শ সমীকরণসমূহ",
            "nameEn": "Standard Forms of Straight Line",
            "latex": "y = mx + c, \\quad y - y_1 = m(x - x_1), \\quad \\frac{x}{a} + \\frac{y}{b} = 1, \\quad x\\cos\\alpha + y\\sin\\alpha = p",
            "notesBn": "ঢাল-ছেদক আকার, এক-বিন্দুগামী আকার, অক্ষের খণ্ডিতাংশ আকার এবং অভিলম্ব আকারের সমীকরণ।",
            "notesEn": "Slope-intercept, point-slope, intercept, and normal forms of linear equations."
          },
          {
            "nameBn": "দুটি সরলরেখার মধ্যবর্তী কোণ ও শর্ত",
            "nameEn": "Angle Between Two Lines & Conditions",
            "latex": "\\tan\\theta = \\pm \\frac{m_1 - m_2}{1 + m_1 m_2} \\quad (m_1 = m_2 \\implies \\text{সমান্তরাল}, \\; m_1 m_2 = -1 \\implies \\text{লম্ব})",
            "notesBn": "m1 ও m2 ঢালবিশিষ্ট দুটি রেখার মধ্যবর্তী কোণ; ঢাল সমান হলে রেখাদ্বয় সমান্তরাল এবং গুণফল -১ হলে পরস্পর লম্ব।",
            "notesEn": "Angle θ between lines with slopes m1 and m2; parallelism and perpendicularity criteria."
          },
          {
            "nameBn": "বিন্দু হতে সরলরেখার লম্ব দূরত্ব",
            "nameEn": "Perpendicular Distance from Point to Line",
            "latex": "d = \\frac{|a x_1 + b y_1 + c|}{\\sqrt{a^2 + b^2}}",
            "notesBn": "(x1, y1) বিন্দু থেকে ax + by + c = 0 সরলরেখার উপর অঙ্কিত লম্বের দৈর্ঘ্য।",
            "notesEn": "Shortest Euclidean perpendicular distance from point (x1, y1) to line ax + by + c = 0."
          },
          {
            "nameBn": "দুটি সমান্তরাল সরলরেখার দূরত্ব",
            "nameEn": "Distance Between Parallel Lines",
            "latex": "d = \\frac{|c_1 - c_2|}{\\sqrt{a^2 + b^2}}",
            "notesBn": "ax + by + c1 = 0 এবং ax + by + c2 = 0 সমান্তরাল সরলরেখাদ্বয়ের মধ্যবর্তী লম্ব দূরত্ব।",
            "notesEn": "Perpendicular distance separating two parallel linear equations."
          }
        ]
      },
      {
        "id": "hsc-hm1-ch4",
        "chapterNumber": 4,
        "paper": 1,
        "titleBn": "বৃত্ত",
        "titleEn": "Circles",
        "summaryBn": "বৃত্তের আদর্শ ও সাধারণ সমীকরণ, কেন্দ্র ও ব্যাসার্ধ নির্ণয়, অক্ষের খণ্ডিতাংশ, স্পর্শক ও স্পর্শকের শর্ত।",
        "summaryEn": "Standard circle equation, center & radius, axis intercepts, tangent equations, and tangency conditions.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "বৃত্তের সাধারণ সমীকরণ x^2+y^2+2gx+2fy+c=0",
          "অক্ষদ্বয়ের ছেদিতাংশের দৈর্ঘ্য",
          "বৃত্তের স্পর্শক সমীকরণ ও স্পর্শক হওয়ার শর্ত",
          "সাধারণ জ্যা ও ব্যাসের সমীকরণ"
        ],
        "coreFormulas": [
          {
            "nameBn": "বৃত্তের সাধারণ সমীকরণ ও কেন্দ্র-ব্যাসার্ধ",
            "nameEn": "General Circle Equation & Radius",
            "latex": "x^2 + y^2 + 2gx + 2fy + c = 0 \\implies \\text{Center: } (-g, -f), \\quad r = \\sqrt{g^2 + f^2 - c}",
            "notesBn": "বৃত্তের দ্বিতীয় ঘাতের সমীকরণ যেখানে x^2 ও y^2 এর সহগ সমান এবং xy যুক্ত কোনো পদ নেই।",
            "notesEn": "General form of circle with center coordinates (-g, -f) and radius r."
          },
          {
            "nameBn": "অক্ষদ্বয় হতে কর্তিত অংশের দৈর্ঘ্য",
            "nameEn": "Intercepts on Coordinate Axes",
            "latex": "X\\text{-ছেদক} = 2\\sqrt{g^2 - c}, \\quad Y\\text{-ছেদক} = 2\\sqrt{f^2 - c}",
            "notesBn": "বৃত্ত দ্বারা X ও Y অক্ষ থেকে কর্তিত জ্যা-এর দৈর্ঘ্য। স্পর্শ করলে রুটের ভেতরের মান শূন্য হয়।",
            "notesEn": "Length of intercepts cut off by the circle from coordinate axes."
          },
          {
            "nameBn": "স্পর্শকের শর্ত ও স্পর্শক সমীকরণ",
            "nameEn": "Tangent Condition & Equation",
            "latex": "c^2 = a^2(1 + m^2), \\quad x x_1 + y y_1 = a^2",
            "notesBn": "y = mx + c রেখাটি x^2 + y^2 = a^2 বৃত্তের স্পর্শক হওয়ার আবশ্যিক শর্ত ও বিন্দু স্পর্শক সমীকরণ।",
            "notesEn": "Condition of tangency for line y = mx + c and point equation of tangent."
          }
        ]
      },
      {
        "id": "hsc-hm1-ch7",
        "chapterNumber": 7,
        "paper": 1,
        "titleBn": "সংযুক্ত কোণের ত্রিকোণমিতিক অনুপাত",
        "titleEn": "Trigonometric Ratios of Associated Angles",
        "summaryBn": "যৌগিক কোণ (A±B), গুণফল ও যোগফলের রূপান্তর সূত্রাবলী, গুণিতক ও উপ-গুণিতক কোণ এবং ত্রিভুজের ধর্ম।",
        "summaryEn": "Compound angles, product-sum transformations, multiple/sub-multiple angles, and sine/cosine laws of triangles.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৪ নম্বর"
        },
        "keyTopics": [
          "যৌগিক কোণের সাইন ও কোসাইন",
          "গুণফল থেকে যোগফল রূপান্তর",
          "যোগফল থেকে গুণফল রূপান্তর",
          "গুণিতক কোণের অনুপাত sin 2A, cos 2A, tan 2A",
          "ত্রিভুজের সাইন ও কোসাইন সূত্র"
        ],
        "coreFormulas": [
          {
            "nameBn": "যৌগিক কোণের ত্রিকোণমিতিক সূত্র",
            "nameEn": "Compound Angle Addition Formulas",
            "latex": "\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B, \\quad \\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B",
            "notesBn": "দুটি কোণের যোগফল ও বিয়োগফলের ত্রিকোণমিতিক অনুপাতের মৌলিক ভিত্তি সূত্রাবলী।",
            "notesEn": "Angle addition and subtraction formulas for sine and cosine."
          },
          {
            "nameBn": "গুণফল থেকে যোগফলে রূপান্তর",
            "nameEn": "Product to Sum Transformations",
            "latex": "2\\sin A \\cos B = \\sin(A+B) + \\sin(A-B), \\quad 2\\cos A \\cos B = \\cos(A+B) + \\cos(A-B)",
            "notesBn": "দুটি ত্রিকোণমিতিক অনুপাতের গুণফলকে পৃথক কোণের যোগফল বা বিয়োগফলে রূপান্তর করার সূত্র।",
            "notesEn": "Transforms trigonometric products into sums/differences, essential in calculus integration."
          },
          {
            "nameBn": "যোগফল থেকে গুণফলে রূপান্তর",
            "nameEn": "Sum to Product Transformations",
            "latex": "\\sin C + \\sin D = 2\\sin\\frac{C+D}{2}\\cos\\frac{C-D}{2}, \\quad \\cos C + \\cos D = 2\\cos\\frac{C+D}{2}\\cos\\frac{C-D}{2}",
            "notesBn": "দুটি ভিন্ন কোণের সাইন বা কোসাইনের যোগফলকে গুণফল আকারে সাজানোর সূত্রাবলী।",
            "notesEn": "Converts sums of trigonometric ratios into factorized products."
          },
          {
            "nameBn": "গুণিতক কোণের সূত্রাবলী",
            "nameEn": "Multiple Angle Formulas (2A)",
            "latex": "\\sin 2A = 2\\sin A \\cos A = \\frac{2\\tan A}{1+\\tan^2 A}, \\quad \\cos 2A = \\cos^2 A - \\sin^2 A = 1 - 2\\sin^2 A",
            "notesBn": "2A কোণের সাইন, কোসাইন ও ট্যানজেন্ট অনুপাতকে একক কোণ A-এর অনুপাতে রূপান্তর।",
            "notesEn": "Double angle identities expressing sin 2A and cos 2A in terms of angle A."
          },
          {
            "nameBn": "ত্রিভুজের সাইন ও কোসাইন সূত্র",
            "nameEn": "Sine & Cosine Rules of Triangle",
            "latex": "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R, \\quad \\cos A = \\frac{b^2 + c^2 - a^2}{2bc}",
            "notesBn": "যেকোনো ত্রিভুজের বাহু ও বিপরীত কোণের মধ্যকার সার্বিক সম্পর্ক (R হলো পরিবৃত্তের ব্যাসার্ধ)।",
            "notesEn": "Fundamental laws relating sides and angles in arbitrary triangles with circumradius R."
          }
        ]
      },
      {
        "id": "hsc-hm1-ch9",
        "chapterNumber": 9,
        "paper": 1,
        "titleBn": "অন্তরীকরণ (Differentiation)",
        "titleEn": "Differentiation (Calculus I)",
        "summaryBn": "ফাংশনের লিমিট, মূল নিয়মে অন্তরজ, গুণফল ও ভাগফলের নিয়ম, শৃঙ্খল নিয়ম (Chain rule), পর্যায়ক্রমিক অন্তরজ এবং চরম মান (গুরুমান ও লঘুমান)।",
        "summaryEn": "Limits, first principles derivative, product/quotient/chain rules, successive differentiation, and maxima/minima.",
        "marksWeightage": {
          "cq": "১০-১৫ নম্বর (১-২টি CQ)",
          "mcq": "৪-৫ নম্বর"
        },
        "keyTopics": [
          "মূল নিয়মে অন্তরীকরণ",
          "গুণফল (uv) ও ভাগফল (u/v) নিয়ম",
          "ত্রিকোণমিতিক ও সূচকীয় ডেরিভেটিভ",
          "পর্যায়ক্রমিক অন্তরীকরণ y_n",
          "চরমমান: গুরুমান ও লঘুমান নির্ণয়"
        ],
        "linkedToolIds": [
          "higher-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "মূল নিয়মে অন্তরজের সংজ্ঞা ও ঘাত সূত্র",
            "nameEn": "First Principles & Power Rule",
            "latex": "f'(x) = \\lim_{h \\to 0}\\frac{f(x+h) - f(x)}{h}, \\quad \\frac{d}{dx}(x^n) = n x^{n-1}",
            "notesBn": "অন্তরীকরণের মৌলিক সংজ্ঞা এবং যেকোনো বাস্তব ঘাত n-এর জন্য বহুপদী অন্তরজ নির্ণয়ের নিয়ম।",
            "notesEn": "Limit definition of derivative from first principles and the polynomial power rule."
          },
          {
            "nameBn": "গুণফল ও ভাগফলের ডেরিভেটিভ",
            "nameEn": "Product & Quotient Rules",
            "latex": "\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}, \\quad \\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}",
            "notesBn": "দুটি ব্যবকলনযোগ্য ফাংশনের গুণফল ও ভাগফলের অন্তরজ নির্ণয়ের সার্বজনীন নিয়ম।",
            "notesEn": "Differentiation rules for composite products and quotients of differentiable functions."
          },
          {
            "nameBn": "মৌলিক ফাংশনসমূহের ডেরিভেটিভ",
            "nameEn": "Derivatives of Elementary Functions",
            "latex": "\\frac{d}{dx}(\\sin x) = \\cos x, \\quad \\frac{d}{dx}(\\cos x) = -\\sin x, \\quad \\frac{d}{dx}(e^x) = e^x, \\quad \\frac{d}{dx}(\\ln x) = \\frac{1}{x}",
            "notesBn": "ত্রিকোণমিতিক, এক্সপোনেনশিয়াল এবং স্বাভাবিক লগারিদমীয় ফাংশনের আদর্শ ডেরিভেটিভ।",
            "notesEn": "Standard derivative formulas for trigonometric and exponential functions."
          },
          {
            "nameBn": "গুরুমান ও লঘুমানের শর্তাবলী",
            "nameEn": "Conditions for Maxima & Minima",
            "latex": "f'(x) = 0; \\quad f''(x) < 0 \\implies \\text{গুরুমান (Max)}, \\quad f''(x) > 0 \\implies \\text{লঘুমান (Min)}",
            "notesBn": "ফাংশনের সর্বোচ্চ ও সর্বনিম্ন মান নির্ণয়ের ক্ষেত্রে প্রথম ও দ্বিতীয় ক্রমের অন্তরজ পরীক্ষা।",
            "notesEn": "First and second derivative tests to identify local maximum and minimum turning points."
          }
        ]
      },
      {
        "id": "hsc-hm1-ch10",
        "chapterNumber": 10,
        "paper": 1,
        "titleBn": "যোগজীকরণ (Integration)",
        "titleEn": "Integration (Calculus II)",
        "summaryBn": "অনির্দিষ্ট যোগজ, প্রতিস্থাপন পদ্ধতি, আংশিক ভগ্নাংশ, খণ্ডশ যোগজীকরণ (বাই পার্টস), নির্দিষ্ট যোগজ এবং আবদ্ধ অঞ্চলের ক্ষেত্রফল।",
        "summaryEn": "Indefinite integrals, substitution, partial fractions, integration by parts, definite integrals, and area under curve.",
        "marksWeightage": {
          "cq": "১০-১৫ নম্বর (১-২টি CQ)",
          "mcq": "৪-৫ নম্বর"
        },
        "keyTopics": [
          "আদর্শ অনির্দিষ্ট যোগজ",
          "প্রতিস্থাপন পদ্ধতি ও আংশিক ভগ্নাংশ",
          "খণ্ডশ যোগজীকরণ সূত্র (Integration by Parts)",
          "নির্দিষ্ট যোগজের ধর্মাবলী",
          "বক্ররেখা দ্বারা আবদ্ধ ক্ষেত্রফল নির্ণয়"
        ],
        "linkedToolIds": [
          "higher-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "আদর্শ অনির্দিষ্ট যোগজসমূহ",
            "nameEn": "Standard Indefinite Integrals",
            "latex": "\\int x^n \\,dx = \\frac{x^{n+1}}{n+1} + c \\; (n \\neq -1), \\quad \\int \\frac{1}{x}\\,dx = \\ln|x| + c, \\quad \\int e^{ax}\\,dx = \\frac{1}{a}e^{ax} + c",
            "notesBn": "বীজগাণিতিক ও এক্সপোনেনশিয়াল ফাংশনের বিপরীত ব্যবকলন বা অনির্দিষ্ট যোগজ সমীকরণ।",
            "notesEn": "Fundamental anti-derivative rules for polynomial, reciprocal, and exponential forms."
          },
          {
            "nameBn": "ত্রিকোণমিতিক ফাংশনের যোগজ",
            "nameEn": "Trigonometric Integrals",
            "latex": "\\int \\sin x \\,dx = -\\cos x + c, \\quad \\int \\cos x \\,dx = \\sin x + c, \\quad \\int \\sec^2 x \\,dx = \\tan x + c",
            "notesBn": "আদর্শ ত্রিকোণমিতিক ফাংশনসমূহের মৌলিক যোগজীকরণ মান।",
            "notesEn": "Basic antiderivatives of common trigonometric functions."
          },
          {
            "nameBn": "খণ্ডশ যোগজীকরণ (Integration by Parts)",
            "nameEn": "Integration by Parts Formula",
            "latex": "\\int u v \\,dx = u \\int v \\,dx - \\int \\left( \\frac{du}{dx} \\int v \\,dx \\right) dx",
            "notesBn": "দুটি ফাংশনের গুণফলের যোগজ নির্ণয়ের পদ্ধতি (LIATE নিয়ম অনুযায়ী u নির্বাচন করতে হয়)।",
            "notesEn": "Product integration formula based on LIATE priority rule."
          },
          {
            "nameBn": "নির্দিষ্ট যোগজ দ্বারা ক্ষেত্রফল",
            "nameEn": "Definite Integral & Area Under Curve",
            "latex": "A = \\int_{a}^{b} y \\,dx = \\int_{a}^{b} f(x) \\,dx",
            "notesBn": "x = a থেকে x = b সীমার মধ্যে y = f(x) বক্ররেখা এবং X-অক্ষ দ্বারা আবদ্ধ সমতল অঞ্চলের ক্ষেত্রফল।",
            "notesEn": "Calculates the net geometric area bounded by a continuous curve between limits [a, b]."
          }
        ]
      },
      {
        "id": "hsc-hm2-ch3",
        "chapterNumber": 3,
        "paper": 2,
        "titleBn": "জটিল সংখ্যা",
        "titleEn": "Complex Numbers",
        "summaryBn": "জটিল সংখ্যার বীজগাণিতিক ধর্ম, আরগ্যান্ড চিত্র, পরমমান ও আর্গুমেন্ট, অয়লারের সূত্র এবং এককের কাল্পনিক ঘনমূলের ধর্ম।",
        "summaryEn": "Complex algebra, Argand diagram, modulus & argument, Euler formula, and cube roots of unity.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "জটিল সংখ্যার পরমমান ও মুখ্য আর্গুমেন্ট",
          "এককের কাল্পনিক ঘনমূল (1, ω, ω^2)",
          "অয়লারের রূপ e^(iθ)",
          "জটিল সংখ্যার বর্গমূল নির্ণয়"
        ],
        "coreFormulas": [
          {
            "nameBn": "পরমমান ও আর্গুমেন্ট নির্ণয়",
            "nameEn": "Modulus & Argument of Complex Number",
            "latex": "z = x + iy \\implies |z| = \\sqrt{x^2 + y^2}, \\quad \\arg(z) = \\tan^{-1}\\left(\\frac{y}{x}\\right)",
            "notesBn": "আরগ্যান্ড চিত্রে জটিল সংখ্যার মূলবিন্দু হতে দূরত্ব (মডুলাস) এবং বাস্তব অক্ষের সাথে কোণ (আর্গুমেন্ট)।",
            "notesEn": "Modulus magnitude and phase argument of complex number z = x + iy."
          },
          {
            "nameBn": "এককের কাল্পনিক ঘনমূলের বৈশিষ্ট্য",
            "nameEn": "Properties of Cube Roots of Unity",
            "latex": "1 + \\omega + \\omega^2 = 0, \\quad \\omega^3 = 1, \\quad \\omega^{3n+r} = \\omega^r",
            "notesBn": "এককের তিনটি ঘনমূলের (১, ω, ω^2) যোগফল শূন্য এবং ঘনফল সর্বদা ১ হয়।",
            "notesEn": "Algebraic sum and cyclic power properties of complex cube roots of unity."
          },
          {
            "nameBn": "অয়লারের সূত্র ও পোলার রূপ",
            "nameEn": "Euler's Formula & Polar Form",
            "latex": "z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta}",
            "notesBn": "জটিল সংখ্যার ত্রিকোণমিতিক ও এক্সপোনেনশিয়াল পোলার প্রকাশ, যেখানে e^(iθ) = cos θ + i sin θ।",
            "notesEn": "Polar exponential representation connecting trigonometry and imaginary exponentiation."
          }
        ]
      },
      {
        "id": "hsc-hm2-ch6",
        "chapterNumber": 6,
        "paper": 2,
        "titleBn": "কণিক (Conics)",
        "titleEn": "Conics (Parabola, Ellipse, Hyperbola)",
        "summaryBn": "পরাবৃত্ত, উপবৃত্ত ও অধিবৃত্তের আদর্শ সমীকরণ, শীর্ষবিন্দু, উপকেন্দ্র, দ্বিকাক্ষ, উৎকেন্দ্রিকতা এবং উপকেন্দ্রিক লম্বের দৈর্ঘ্য।",
        "summaryEn": "Standard forms of parabola, ellipse, hyperbola, vertex, foci, directrix, eccentricity, and latus rectum.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৪ নম্বর"
        },
        "keyTopics": [
          "পরাবৃত্তের উপাদান ও স্পর্শক",
          "উপবৃত্তের উৎকেন্দ্রিকতা e < 1 ও ক্ষেত্রফল",
          "অধিবৃত্তের উৎকেন্দ্রিকতা e > 1 ও অসীমতট",
          "কণিকের সাধারণ সমীকরণ ax^2+2hxy+by^2..."
        ],
        "coreFormulas": [
          {
            "nameBn": "পরাবৃত্তের আদর্শ সমীকরণ ও উপাদান",
            "nameEn": "Standard Parabola Formula",
            "latex": "y^2 = 4ax \\implies \\text{শীর্ষ: } (0,0), \\; \\text{উপকেন্দ্র: } (a,0), \\; \\text{নিয়ামক: } x = -a, \\; \\text{উপকেন্দ্রিক লম্ব: } 4a",
            "notesBn": "উৎকেন্দ্রিকতা e = 1 বিশিষ্ট কণিকের আদর্শ রূপ। উপকেন্দ্রিক লম্বের মোট দৈর্ঘ্য 4a।",
            "notesEn": "Parabola elements with eccentricity e = 1, focal coordinate, directrix, and latus rectum."
          },
          {
            "nameBn": "উপবৃত্তের সমীকরণ ও উৎকেন্দ্রিকতা",
            "nameEn": "Ellipse Equation & Eccentricity",
            "latex": "\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\; (a > b) \\implies e = \\sqrt{1 - \\frac{b^2}{a^2}} < 1, \\quad \\text{উপকেন্দ্রদ্বয়: } (\\pm ae, 0)",
            "notesBn": "উপবৃত্তের উৎকেন্দ্রিকতা সর্বদা 0 < e < 1 হয়। এর ক্ষেত্রফল = πab।",
            "notesEn": "Ellipse formula with eccentricity e < 1, foci at (±ae, 0), and area πab."
          },
          {
            "nameBn": "অধিবৃত্তের সমীকরণ ও উৎকেন্দ্রিকতা",
            "nameEn": "Hyperbola Equation & Eccentricity",
            "latex": "\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 \\implies e = \\sqrt{1 + \\frac{b^2}{a^2}} > 1, \\quad \\text{উপকেন্দ্রদ্বয়: } (\\pm ae, 0)",
            "notesBn": "অধিবৃত্তের উৎকেন্দ্রিকতা সর্বদা e > 1 হয় এবং দুটি অসীমতট রেখা বিদ্যমান: y = ±(b/a)x।",
            "notesEn": "Hyperbola equation with eccentricity e > 1 and focal positions."
          }
        ]
      },
      {
        "id": "hsc-hm2-ch8",
        "chapterNumber": 8,
        "paper": 2,
        "titleBn": "স্থিতিবিদ্যা",
        "titleEn": "Statics",
        "summaryBn": "একবিন্দুতে ক্রিয়ারত বলসমূহের সাম্যাবস্থা, সামান্তরিকের সূত্র, লামির উপপাদ্য, বলের ত্রিভুজ সূত্র এবং সমান্তরাল বল।",
        "summaryEn": "Equilibrium of concurrent coplanar forces, parallelogram law, Lamis theorem, triangle law of forces, and parallel forces.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "লামির উপপাদ্য ও প্রয়োগ",
          "বলের ত্রিভুজ সূত্র",
          "সদৃশ ও অসদৃশ সমান্তরাল বল",
          "লব্ধির ক্রিয়াবিন্দু নির্ণয়"
        ],
        "coreFormulas": [
          {
            "nameBn": "লামির উপপাদ্য",
            "nameEn": "Lami's Theorem",
            "latex": "\\frac{P}{\\sin\\alpha} = \\frac{Q}{\\sin\\beta} = \\frac{R}{\\sin\\gamma}",
            "notesBn": "একটি বিন্দুতে ক্রিয়ারত তিনটি সমতলীয় বল সাম্যাবস্থায় থাকলে প্রতিটি বল অপর দুটি বলের অন্তর্বর্তী কোণের সাইনের সমানুপাতিক।",
            "notesEn": "Equilibrium condition for three concurrent coplanar forces balancing each other."
          },
          {
            "nameBn": "বলের ত্রিভুজ সূত্র",
            "nameEn": "Triangle Law of Forces",
            "latex": "\\frac{P}{OA} = \\frac{Q}{AB} = \\frac{R}{BO}",
            "notesBn": "কোনো বিন্দুতে ক্রিয়াশীল তিনটি বল কোনো ত্রিভুজের একই ক্রমে গৃহীত তিনটি বাহু দ্বারা মানে ও দিকে সূচিত হলে তারা সাম্যাবস্থায় থাকে।",
            "notesEn": "Geometric equilibrium condition represented by cyclic sides of a closed triangle."
          }
        ]
      }
    ]
  },
  {
    "id": "biology",
    "level": "hsc",
    "nameBn": "জীববিজ্ঞান",
    "nameEn": "Biology",
    "icon": "🧬",
    "color": "from-green-600 to-emerald-600",
    "badgeColor": "text-green-400 bg-green-950/60 border-green-800/40",
    "code": "HSC 178 & 179",
    "descriptionBn": "উদ্ভিদবিজ্ঞান ও প্রাণিবিজ্ঞান: কোষ ও কোষের গঠন, জিনতত্ত্ব, মানব শারীরতত্ত্ব, রক্ত সংবহন ও বাস্তুতন্ত্র।",
    "descriptionEn": "Botany & Zoology: Cytology, genetics, molecular biology, human organ systems, circulation, and ecology.",
    "chapters": [
      {
        "id": "hsc-bio1-ch1",
        "chapterNumber": 1,
        "paper": 1,
        "titleBn": "কোষ ও এর গঠন",
        "titleEn": "Cell & Its Structure",
        "summaryBn": "কোষ প্রাচীর, প্লাজমামেমব্রেনের ফ্লুইড মোজাইক মডেল, সাইটোপ্লাজমীয় অঙ্গাণু, ডিএনএ ও আরএনএ এর গঠন ও প্রতিলিপন।",
        "summaryEn": "Cell wall, fluid mosaic model, organelles (mitochondria, chloroplasts), DNA double helix, and replication.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৪ নম্বর"
        },
        "keyTopics": [
          "ফ্লুইড মোজাইক মডেল",
          "মাইটোকন্ড্রিয়া ও ক্লোরোপ্লাস্ট",
          "DNA ও RNA এর গঠন",
          "প্রতিলিপন ও প্রোটিন সংশ্লেষণ"
        ],
        "coreFormulas": [
          {
            "nameBn": "কোষ পৃষ্ঠীয় ক্ষেত্রফল ও আয়তন অনুপাত",
            "nameEn": "Cell Surface Area to Volume Ratio",
            "latex": "\\frac{\\text{Surface Area}}{\\text{Volume}} = \\frac{4\\pi r^2}{\\frac{4}{3}\\pi r^3} = \\frac{3}{r}",
            "notesBn": "কোষের আকার বৃদ্ধি পেলে ক্ষেত্রফল-আয়তন অনুপাত হ্রাস পায়, যা কোষ বিভাজনের অন্যতম উদ্দীপক হিসেবে কাজ করে।",
            "notesEn": "Explains biological limits on cell size: as radius r grows, SA/V ratio drops by 3/r."
          }
        ]
      },
      {
        "id": "hsc-bio2-ch11",
        "chapterNumber": 11,
        "paper": 2,
        "titleBn": "জিনতত্ত্ব ও বিবর্তন",
        "titleEn": "Genetics & Evolution",
        "summaryBn": "মেন্ডেলের সূত্রাবলী ও ব্যতিক্রম, লিঙ্গ নির্ধারণ নীতি, সেক্স-লিঙ্কড ডিসঅর্ডার (হিমোফিলিয়া, বর্ণান্ধতা) এবং ডারউইনবাদ।",
        "summaryEn": "Mendelian genetics & exceptions, sex determination, sex-linked disorders (hemophilia, color blindness), and evolution.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৪ নম্বর"
        },
        "keyTopics": [
          "মেন্ডেলের প্রথম ও দ্বিতীয় সূত্র",
          "অসম্পূর্ণ প্রকটতা (1:2:1)",
          "সেক্স-লিঙ্কড ইনহেরিটেন্স",
          "Rh ফ্যাক্টর ও এরিথ্রোব্লাস্টোসিস ফিটালিস"
        ],
        "coreFormulas": [
          {
            "nameBn": "হার্ডি-ওয়াইনবার্গ সাম্যাবস্থা সমীকরণ",
            "nameEn": "Hardy-Weinberg Equilibrium Equation",
            "latex": "p^2 + 2pq + q^2 = 1, \\quad p + q = 1",
            "notesBn": "জনপুঞ্জে বিবর্তনীয় চাপ অনুপস্থিত থাকলে অ্যালিল ও জিনোটাইপিক ফ্রিকোয়েন্সি প্রজন্মান্তরে অপরিবর্তিত থাকে (p=প্রকট অ্যালিল, q=প্রচ্ছন্ন অ্যালিল)।",
            "notesEn": "Calculates allele (p, q) and genotype frequencies (p^2, 2pq, q^2) in non-evolving populations."
          },
          {
            "nameBn": "এপিস্ট্যাসিস পরিবর্তিত মেন্ডেলীয় অনুপাত",
            "nameEn": "Epistasis Modified Mendelian Ratios",
            "latex": "\\text{দ্বৈত প্রচ্ছন্ন: } 9:7, \\quad \\text{প্রকট এপিস্ট্যাসিস: } 12:3:1, \\quad \\text{পলিজেনিক: } 1:4:6:4:1",
            "notesBn": "দ্বিসংকর ক্রসে একটি জিন অন্য নন-অ্যালিলিক জিনের প্রকাশ বাধা দিলে সাধারণ ৯:৩:৩:১ অনুপাত রূপান্তরিত হয়।",
            "notesEn": "Modified dihybrid phenotypic cross ratios caused by gene interaction and epistasis."
          }
        ]
      },
      {
        "id": "hsc-bio1-ch9",
        "chapterNumber": 9,
        "paper": 1,
        "titleBn": "উদ্ভিদ শরীরতত্ত্ব",
        "titleEn": "Plant Physiology",
        "summaryBn": "খনিজ লবণ শোষণ, প্রস্বেদন, সালোকসংশ্লেষণ (C3 ও C4 চক্র), এবং শ্বসন ও শ্বসনিক অনুপাত (RQ)।",
        "summaryEn": "Mineral absorption, transpiration, photosynthesis, Calvin & Hatch-Slack cycle, respiration, and RQ.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৪ নম্বর"
        },
        "keyTopics": [
          "সালোকসংশ্লেষণ আলোক ও অন্ধকার পর্যায়",
          "C3 ও C4 উদ্ভিদের পার্থক্য",
          "গ্লাইকোলাইসিস ও ক্রেবস চক্র",
          "শ্বসনিক অনুপাত (RQ) ও কোয়ান্টাম ইল্ড"
        ],
        "coreFormulas": [
          {
            "nameBn": "শ্বসনিক অনুপাত বা রেস্পিরেটরি কোশেন্ট (RQ)",
            "nameEn": "Respiratory Quotient (RQ)",
            "latex": "\\text{RQ} = \\frac{\\text{উৎপন্ন } \\text{CO}_2}{\\text{ব্যবহৃত } \\text{O}_2} = \\frac{V_{\\text{CO}_2}}{V_{\\text{O}_2}}",
            "notesBn": "শ্বসনে নির্গত কার্বন ডাই-অক্সাইড এবং গৃহীত অক্সিজেনের অনুপাত। গ্লুকোজের জন্য RQ = 1.0, ফ্যাটের জন্য প্রায় 0.7।",
            "notesEn": "Ratio of volume of CO2 released to volume of O2 absorbed in cellular respiration."
          },
          {
            "nameBn": "সালোকসংশ্লেষণের কোয়ান্টাম ইল্ড",
            "nameEn": "Quantum Yield of Photosynthesis",
            "latex": "\\Phi = \\frac{\\text{উৎপন্ন } \\text{O}_2 \\text{ অণু}}{\\text{শোষিত ফোটন সংখ্যা}} = \\frac{1}{8} \\approx 12.5\\%",
            "notesBn": "প্রতি ১ অণু O2 তৈরি করতে ন্যূনতম ৮টি আলোক ফোটনের প্রয়োজন হয়, ফলে তাত্ত্বিক কোয়ান্টাম দক্ষতা প্রায় ১২.৫%।",
            "notesEn": "Number of oxygen molecules evolved per photon absorbed in photosynthetic photochemical reactions."
          }
        ]
      },
      {
        "id": "hsc-bio2-ch4",
        "chapterNumber": 4,
        "paper": 2,
        "titleBn": "মানব শরীরতত্ত্ব: রক্ত ও সংবহন",
        "titleEn": "Human Physiology: Circulation",
        "summaryBn": "রক্তরস ও রক্তকণিকা, রক্ত জমাট বাঁধা, মানব হৃদপিণ্ডের গঠন, কার্ডিয়াক চক্র, কার্ডিয়াক আউটপুট ও রক্তচাপ।",
        "summaryEn": "Blood composition, coagulation cascade, cardiac cycle, cardiac output, ECG, and blood pressure.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "কার্ডিয়াক চক্রের বিভিন্ন পর্যায়",
          "স্ট্রোক ভলিউম ও কার্ডিয়াক আউটপুট",
          "রক্তচাপ ও ব্যারোরিসেপ্টর",
          "করোনারি বাইপাস ও এনজিওপ্লাস্টি"
        ],
        "coreFormulas": [
          {
            "nameBn": "হৃদপিণ্ডের কার্ডিয়াক আউটপুট সূত্র",
            "nameEn": "Cardiac Output Formula",
            "latex": "\\text{CO} = \\text{SV} \\times \\text{HR} = 70\\text{ mL} \\times 72/\\text{min} \\approx 5040\\text{ mL/min} = 5.04\\text{ L/min}",
            "notesBn": "প্রতি মিনিটে হৃদপিণ্ড যে পরিমাণ রক্ত পাম্প করে। স্ট্রোক ভলিউম SV (প্রায় ৭০ মিলি) এবং হৃদস্পন্দন হার HR-এর গুণফল।",
            "notesEn": "Total volume of blood pumped by the ventricles per minute as product of Stroke Volume and Heart Rate."
          }
        ]
      },
      {
        "id": "hsc-bio2-ch6",
        "chapterNumber": 6,
        "paper": 2,
        "titleBn": "মানব শরীরতত্ত্ব: বর্জ্য ও নিষ্কাশন",
        "titleEn": "Human Physiology: Excretion & Osmoregulation",
        "summaryBn": "বৃক্কের গঠন, নেফ্রন, মূত্র সৃষ্টির কৌশল, গ্লোমেরুলার পরিস্রাবণ হার (GFR) এবং অসমোরিগ্যুলেশন।",
        "summaryEn": "Kidney morphology, nephron ultrafiltration, GFR, countercurrent mechanism, and osmoregulation.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩ নম্বর"
        },
        "keyTopics": [
          "নেফ্রনের গঠন ও কাজ",
          "আল্ট্রাফিল্ট্রেশন ও GFR",
          "মূত্র উৎপাদন ও রেনিন-এনজিওটেনসিন সিস্টেম",
          "হিমোডায়ালাইসিস"
        ],
        "coreFormulas": [
          {
            "nameBn": "গ্লোমেরুলার পরিস্রাবণ হার (GFR) ও ফিল্ট্রেশন ভগ্নাংশ",
            "nameEn": "Glomerular Filtration Rate (GFR)",
            "latex": "\\text{GFR} \\approx 125\\text{ mL/min} = 180\\text{ L/day}, \\quad \\text{FF} = \\frac{\\text{GFR}}{\\text{RPF}} \\approx 20\\%",
            "notesBn": "প্রতি মিনিটে উভয় বৃক্কের নেফ্রনে গ্লোমেরুলাস দ্বারা পরিস্রুত তরলের পরিমাণ (সুস্থ মানুষের গড়ে ১২৫ মিলি/মিনিট বা দিনে ১৮০ লিটার)।",
            "notesEn": "Volume of ultrafiltrate formed each minute by kidney glomeruli and filtration fraction of renal plasma."
          }
        ]
      }
    ]
  },
  {
    "id": "general-math",
    "level": "hsc",
    "nameBn": "সাধারণ ও ফলিত গণিত",
    "nameEn": "General & Applied Mathematics",
    "icon": "➕",
    "color": "from-blue-600 to-indigo-600",
    "badgeColor": "text-blue-400 bg-blue-950/60 border-blue-800/40",
    "code": "HSC 129",
    "descriptionBn": "বিন্যাস ও সমাবেশ, সম্ভাবনা, ব্যবসায়িক পরিসংখ্যান ও সূচক বিশ্লেষণ, রৈখিক প্রোগ্রামিং এবং সিদ্ধান্ত তত্ত্ব।",
    "descriptionEn": "Permutations and combinations, probability theory, statistical index numbers, and linear programming.",
    "chapters": [
      {
        "id": "hsc-gm-ch5",
        "chapterNumber": 5,
        "paper": 1,
        "titleBn": "বিন্যাস ও সমাবেশ",
        "titleEn": "Permutations & Combinations",
        "summaryBn": "গণনার যোজন ও গুণন বিধি, n সংখ্যক বস্তুর বিন্যাস ও সমাবেশ, বৃত্তাকার বিন্যাস এবং ব্যবহারিক প্রয়োগ।",
        "summaryEn": "Fundamental principles of counting, permutations and combinations of n items, circular arrangements.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "গণনার গুণন বিধি",
          "nPr ও nCr নির্ণয়",
          "শব্দ গঠনের বিন্যাস সংখ্যা",
          "কাসিও nCr ক্যালকুলেটর শর্টকাট"
        ],
        "coreFormulas": [
          {
            "nameBn": "বিন্যাস সূত্র",
            "nameEn": "Permutation Formula",
            "latex": "^nP_r = \\frac{n!}{(n-r)!}"
          },
          {
            "nameBn": "সমাবেশ সূত্র",
            "nameEn": "Combination Formula",
            "latex": "^nC_r = \\frac{n!}{r!(n-r)!}"
          }
        ]
      },
      {
        "id": "hsc-gm-ch10",
        "chapterNumber": 10,
        "paper": 2,
        "titleBn": "সম্ভাবনা (Probability)",
        "titleEn": "Probability Theory",
        "summaryBn": "নমুনা ক্ষেত্র ও ঘটনা, শর্তাধীন সম্ভাবনা, সম্ভাবনার যোজন ও গুণন সূত্র এবং দ্বিপদী বিন্যাস।",
        "summaryEn": "Sample space, events, conditional probability, addition and multiplication theorems.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "নমুনা ক্ষেত্র তৈরি",
          "পরস্পর বর্জনশীল ঘটনা",
          "শর্তাধীন সম্ভাবনা P(A|B)",
          "দ্বিপদী সম্ভাবনার প্রয়োগ"
        ],
        "coreFormulas": [
          {
            "nameBn": "মৌলিক সম্ভাবনা",
            "nameEn": "Probability Definition",
            "latex": "P(A) = \\frac{n(A)}{n(S)}"
          },
          {
            "nameBn": "সম্ভাবনার যোগসূত্র",
            "nameEn": "Addition Rule",
            "latex": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"
          }
        ]
      }
    ]
  },
  {
    "id": "physics",
    "level": "ssc",
    "nameBn": "পদার্থবিজ্ঞান (এসএসসি)",
    "nameEn": "SSC Physics (Classes 9-10)",
    "icon": "⚡",
    "color": "from-amber-600 to-yellow-600",
    "badgeColor": "text-amber-400 bg-amber-950/60 border-amber-800/40",
    "code": "SSC 136",
    "descriptionBn": "ভৌত রাশি ও পরিমাপ, গতি, বল, কাজ-ক্ষমতা-শক্তি, পদার্থের অবস্থা ও চাপ, তাপ, শব্দ, আলো, তড়িৎ এবং আধুনিক পদার্থবিজ্ঞানের পূর্ণাঙ্গ গাণিতিক সমাধান।",
    "descriptionEn": "Physical quantities, motion, force, work-power-energy, pressure, heat, sound, light optics, electricity, and modern physics.",
    "chapters": [
      {
        "id": "ssc-phy-ch1",
        "chapterNumber": 1,
        "titleBn": "ভৌত রাশি ও পরিমাপ",
        "titleEn": "Physical Quantities & Measurement",
        "summaryBn": "মৌলিক ও লব্ধ একক, মাত্রা বিশ্লেষণ, স্লাইড ক্যালিপার্স, স্ক্রু গজ এবং গোলক/সিলিন্ডারের আয়তন পরিমাপ।",
        "summaryEn": "Fundamental and derived units, dimensional analysis, vernier callipers, micrometer screw gauge, and volumetric estimations.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "ভার্নিয়ার ধ্রুবক (VC = s/N)",
          "স্লাইড ক্যালিপার্স পাঠ (L = M + V·VC - E)",
          "স্ক্রু গজের লঘিষ্ঠ গণন (LC = p/N)",
          "তাৎপর্যপূর্ণ অঙ্ক"
        ],
        "linkedToolIds": [
          "physics",
          "significant-figures"
        ],
        "coreFormulas": [
          {
            "nameBn": "ভার্নিয়ার ধ্রুবক",
            "nameEn": "Vernier Constant",
            "latex": "\\text{VC} = \\frac{s}{N}"
          },
          {
            "nameBn": "স্লাইড ক্যালিপার্স পাঠ",
            "nameEn": "Slide Calipers Reading",
            "latex": "L = M + (V \\times \\text{VC}) - E"
          }
        ]
      },
      {
        "id": "ssc-phy-ch2",
        "chapterNumber": 2,
        "titleBn": "গতি (Motion)",
        "titleEn": "Motion & Kinematics",
        "summaryBn": "দূরত্ব ও সরণ, দ্রুতি ও বেগ, সুষম ত্বরণ, গতির ৪টি সমীকরণাবলী এবং অভিকর্ষের অধীনে মুক্তভাবে পড়ন্ত ও নিক্ষিপ্ত বস্তু।",
        "summaryEn": "Distance, displacement, velocity, acceleration, rectilinear equations of motion, and vertical projection under gravity.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "গতির সমীকরণ (v=u+at, s=ut+0.5at²)",
          "বেগ-সরণ সমীকরণ (v²=u²+2as)",
          "সর্বোচ্চ উচ্চতা (H_max = u²/2g)",
          "উড্ডয়নকাল (T = 2u/g)"
        ],
        "linkedToolIds": [
          "physics",
          "projectile-motion"
        ],
        "coreFormulas": [
          {
            "nameBn": "গতির সমীকরণ",
            "nameEn": "Equations of Motion",
            "latex": "v = u + at, \\quad s = ut + \\frac{1}{2}at^2, \\quad v^2 = u^2 + 2as"
          },
          {
            "nameBn": "খাড়া নিক্ষেপে সর্বোচ্চ উচ্চতা",
            "nameEn": "Max Height in Vertical Projection",
            "latex": "H_{\\text{max}} = \\frac{u^2}{2g}, \\quad T = \\frac{2u}{g}"
          }
        ]
      },
      {
        "id": "ssc-phy-ch3",
        "chapterNumber": 3,
        "titleBn": "বল (Force)",
        "titleEn": "Force & Momentum",
        "summaryBn": "জড়তা ও বল, নিউটনের ৩টি সূত্র, ভরবেগ ও ভরবেগের সংরক্ষণ সূত্র, সংঘর্ষ ও নিউটনের মহাকর্ষ সূত্র।",
        "summaryEn": "Inertia, Newton's laws of motion, momentum conservation, elastic/inelastic collisions, and Newton's law of gravitation.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩ নম্বর"
        },
        "keyTopics": [
          "নিউটনের ২য় সূত্র (F = ma)",
          "ভরবেগের সংরক্ষণ (m1u1 + m2u2 = m1v1 + m2v2)",
          "মিলিত বেগ (v = (m1u1+m2u2)/(m1+m2))",
          "মহাকর্ষ সূত্র (F = G·m1m2/d²)"
        ],
        "linkedToolIds": [
          "physics"
        ],
        "coreFormulas": [
          {
            "nameBn": "নিউটনের দ্বিতীয় সূত্র",
            "nameEn": "Newton's Second Law",
            "latex": "F = m \\times a"
          },
          {
            "nameBn": "ভরবেগের সংরক্ষণ সূত্র",
            "nameEn": "Conservation of Momentum",
            "latex": "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2"
          },
          {
            "nameBn": "মহাকর্ষ সূত্র",
            "nameEn": "Law of Gravitation",
            "latex": "F = G \\frac{m_1 m_2}{d^2}"
          }
        ]
      },
      {
        "id": "ssc-phy-ch4",
        "chapterNumber": 4,
        "titleBn": "কাজ, ক্ষমতা ও শক্তি",
        "titleEn": "Work, Power & Energy",
        "summaryBn": "কাজের সংজ্ঞা ও প্রকারভেদ, গতিশক্তি ও বিভব শক্তি, শক্তির রূপান্তর ও সংরক্ষণশীলতা নীতি, ক্ষমতা ও কর্মদক্ষতা।",
        "summaryEn": "Work, kinetic and gravitational potential energy, conservation of mechanical energy, power in Watts/HP, and efficiency.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "কৃতকাজ (W = F·s·cosθ)",
          "গতিশক্তি (Ek = 0.5mv²)",
          "বিভব শক্তি (Ep = mgh)",
          "কর্মদক্ষতা (η = P_useful / P_total × 100%)"
        ],
        "linkedToolIds": [
          "physics"
        ],
        "coreFormulas": [
          {
            "nameBn": "কাজের সাধারণ সমীকরণ",
            "nameEn": "Work Formula",
            "latex": "W = F s \\cos(\\theta)"
          },
          {
            "nameBn": "যান্ত্রিক শক্তি",
            "nameEn": "Mechanical Energy",
            "latex": "E_k = \\frac{1}{2}mv^2, \\quad E_p = mgh"
          },
          {
            "nameBn": "কর্মদক্ষতা",
            "nameEn": "Efficiency",
            "latex": "\\eta = \\left(\\frac{P_{\\text{useful}}}{P_{\\text{total}}}\\right) \\times 100\\%"
          }
        ]
      },
      {
        "id": "ssc-phy-ch5",
        "chapterNumber": 5,
        "titleBn": "পদার্থের অবস্থা ও চাপ",
        "titleEn": "State of Matter & Pressure",
        "summaryBn": "চাপ ও ঘনত্ব, তরল স্তম্ভের চাপ, প্লবতা ও আর্কিমিডিসের নীতি, প্যাসকেলের সূত্র (হাইড্রলিক প্রেস), এবং স্থিতিস্থাপকতা ও ইয়ং-এর গুণাঙ্ক।",
        "summaryEn": "Pressure, density, hydrostatic pressure, Archimedes' principle, Pascal's hydraulic press, elasticity, and Young's modulus.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩ নম্বর"
        },
        "keyTopics": [
          "চাপ ও ঘনত্ব (P=F/A, ρ=m/V)",
          "তরলের চাপ (P = hρg)",
          "প্যাসকেলের নীতি (F1/A1 = F2/A2)",
          "ইয়ং-এর গুণাঙ্ক (Y = FL / AΔL)"
        ],
        "linkedToolIds": [
          "physics"
        ],
        "coreFormulas": [
          {
            "nameBn": "তরলের অভ্যন্তরে চাপ",
            "nameEn": "Hydrostatic Pressure",
            "latex": "P = h \\rho g"
          },
          {
            "nameBn": "প্যাসকেলের সূত্র (হাইড্রলিক প্রেস)",
            "nameEn": "Pascal's Hydraulic Ratio",
            "latex": "\\frac{F_1}{r_1^2} = \\frac{F_2}{r_2^2}"
          },
          {
            "nameBn": "ইয়ং-এর গুণাঙ্ক",
            "nameEn": "Young's Modulus",
            "latex": "Y = \\frac{F \\times L}{A \\times \\Delta L}"
          }
        ]
      },
      {
        "id": "ssc-phy-ch6",
        "chapterNumber": 6,
        "titleBn": "বস্তুর উপর তাপের প্রভাব",
        "titleEn": "Effect of Heat on Matter",
        "summaryBn": "তাপ ও তাপমাত্রা, বিভিন্ন থার্মোমিটার স্কেলের রূপান্তর, কঠিনের প্রসারণ (α, β, γ), আপেক্ষিক তাপ এবং গলন ও বাষ্পীভবনের সুপ্ততাপ।",
        "summaryEn": "Heat vs temperature, scale conversions (C, F, K), thermal expansions (linear, area, volumetric), and latent heats.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩ নম্বর"
        },
        "keyTopics": [
          "স্কেল রূপান্তর (C/5 = (F-32)/9 = (K-273)/5)",
          "তাপধারণ ক্ষমতা ও আপেক্ষিক তাপ (Q = msΔθ)",
          "সুপ্ততাপ (Q = mL)",
          "প্রসারণ সহগ (β=2α, γ=3α)"
        ],
        "linkedToolIds": [
          "physics"
        ],
        "coreFormulas": [
          {
            "nameBn": "তাপমাত্রা স্কেল রূপান্তর",
            "nameEn": "Temperature Scale Formula",
            "latex": "\\frac{C}{5} = \\frac{F - 32}{9} = \\frac{K - 273}{5}"
          },
          {
            "nameBn": "শোষিত/বর্জিত তাপ",
            "nameEn": "Sensible Heat",
            "latex": "Q = m \\times s \\times \\Delta\\theta"
          },
          {
            "nameBn": "সুপ্ততাপ সমীকরণ",
            "nameEn": "Latent Heat",
            "latex": "Q = m \\times L"
          }
        ]
      },
      {
        "id": "ssc-phy-ch7",
        "chapterNumber": 7,
        "titleBn": "তরঙ্গ ও শব্দ",
        "titleEn": "Waves & Sound",
        "summaryBn": "তরঙ্গের বৈশিষ্ট্য, পর্যায়কাল ও কম্পাঙ্ক, তরঙ্গ সমীকরণ (v = fλ), তাপমাত্রার সাথে শব্দের বেগ এবং প্রতিধ্বনি ও শ্রাব্যতার স্থায়িত্বকাল।",
        "summaryEn": "Wave properties, time period, frequency, wave speed (v = fλ), temperature effect on sound, and echo reflection.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩ নম্বর"
        },
        "keyTopics": [
          "তরঙ্গবেগ (v = fλ)",
          "শব্দের বেগের তাপমাত্রা সূত্র (v_θ = 332 + 0.6θ)",
          "প্রতিধ্বনি শোনার দূরত্ব (2d = vt)",
          "শ্রাব্যতার স্থায়িত্বকাল (০.১ সেকেন্ড)"
        ],
        "linkedToolIds": [
          "physics"
        ],
        "coreFormulas": [
          {
            "nameBn": "তরঙ্গ বেগ সমীকরণ",
            "nameEn": "Wave Speed Equation",
            "latex": "v = f \\times \\lambda, \\quad f = \\frac{1}{T}"
          },
          {
            "nameBn": "শব্দের বেগ ও তাপমাত্রা",
            "nameEn": "Speed of Sound with Temp",
            "latex": "v_\\theta = 332 + 0.6 \\times \\theta"
          },
          {
            "nameBn": "প্রতিধ্বনির ন্যূনতম দূরত্ব",
            "nameEn": "Minimum Echo Distance",
            "latex": "2d = v \\times t \\implies d_{\\text{min}} = \\frac{v \\times 0.1}{2}"
          }
        ]
      },
      {
        "id": "ssc-phy-ch8",
        "chapterNumber": 8,
        "titleBn": "আলোর প্রতিফলন",
        "titleEn": "Reflection of Light",
        "summaryBn": "প্রতিফলনের সূত্রাবলী, অবতল ও উত্তল গোলীয় দর্পণ, ফোকাস দূরত্ব ও বক্রতার ব্যাসার্ধ (f = R/2), দর্পণ সমীকরণ এবং রৈখিক বিবর্ধন।",
        "summaryEn": "Laws of reflection, spherical mirrors (concave/convex), mirror formula, real/virtual images, and magnification.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "বক্রতার ব্যাসার্ধ (R = 2f)",
          "দর্পণের সূত্র (1/f = 1/u + 1/v)",
          "রৈখিক বিবর্ধন (m = -v/u, |m| = hi/ho)",
          "বাস্তব ও অবাস্তব প্রতিবিম্ব গঠন"
        ],
        "linkedToolIds": [
          "physics"
        ],
        "coreFormulas": [
          {
            "nameBn": "দর্পণ সমীকরণ",
            "nameEn": "Mirror Equation",
            "latex": "\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}"
          },
          {
            "nameBn": "রৈখিক বিবর্ধন",
            "nameEn": "Linear Magnification",
            "latex": "m = -\\frac{v}{u}, \\quad |m| = \\frac{h_i}{h_o}"
          }
        ]
      },
      {
        "id": "ssc-phy-ch9",
        "chapterNumber": 9,
        "titleBn": "আলোর প্রতিসরণ",
        "titleEn": "Refraction of Light",
        "summaryBn": "প্রতিসরণের নিয়মাবলী, স্নেলের সূত্র, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন, লেন্সের সূত্র এবং লেন্সের ক্ষমতা (Dioptre)।",
        "summaryEn": "Refraction, Snell's law, critical angle and total internal reflection, lens formula, and optical power in Dioptres.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "স্নেলের সূত্র (η1·sinθ1 = η2·sinθ2)",
          "সংকট কোণ (sinθc = η_rare / η_dense)",
          "লেন্স সমীকরণ (1/f = 1/u + 1/v)",
          "লেন্সের ক্ষমতা (P = 1/f)"
        ],
        "linkedToolIds": [
          "physics"
        ],
        "coreFormulas": [
          {
            "nameBn": "স্নেলের সূত্র",
            "nameEn": "Snell's Law",
            "latex": "\\eta_1 \\sin(\\theta_1) = \\eta_2 \\sin(\\theta_2)"
          },
          {
            "nameBn": "সংকট কোণ",
            "nameEn": "Critical Angle",
            "latex": "\\sin(\\theta_c) = \\frac{\\eta_{\\text{rare}}}{\\eta_{\\text{dense}}}"
          },
          {
            "nameBn": "লেন্সের ক্ষমতা",
            "nameEn": "Power of Lens",
            "latex": "P = \\frac{1}{f\\text{ (in meters)}}"
          }
        ]
      },
      {
        "id": "ssc-phy-ch10",
        "chapterNumber": 10,
        "titleBn": "স্থির তড়িৎ",
        "titleEn": "Static Electricity",
        "summaryBn": "আধান ও আধানের কোয়ান্টায়ন, কুলম্বের সূত্র, তড়িৎ ক্ষেত্র ও প্রাবল্য, তড়িৎ বিভব এবং ধারক ও ধারকত্ব।",
        "summaryEn": "Charge quantization, Coulomb's law of electrostatics, electric field intensity, electric potential, and capacitors.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩ নম্বর"
        },
        "keyTopics": [
          "কুলম্বের সূত্র (F = k·q1q2/r²)",
          "তড়িৎ প্রাবল্য (E = k·Q/r²)",
          "তড়িৎ বিভব (V = k·Q/r)",
          "ধারকত্ব (C = Q/V)"
        ],
        "linkedToolIds": [
          "physics"
        ],
        "coreFormulas": [
          {
            "nameBn": "কুলম্বের সূত্র",
            "nameEn": "Coulomb's Law",
            "latex": "F = k \\frac{q_1 q_2}{r^2}"
          },
          {
            "nameBn": "তড়িৎ প্রাবল্য ও বিভব",
            "nameEn": "Electric Field & Potential",
            "latex": "E = k \\frac{Q}{r^2}, \\quad V = k \\frac{Q}{r}"
          }
        ]
      },
      {
        "id": "ssc-phy-ch11",
        "chapterNumber": 11,
        "titleBn": "চল তড়িৎ",
        "titleEn": "Current Electricity",
        "summaryBn": "তড়িৎ প্রবাহ, ওহমের সূত্র ও রোধ, রোধের নির্ভরশীলতা ও আপেক্ষিক রোধ, শ্রেণি ও সমান্তরাল তুল্য রোধ এবং বিদ্যুৎ বিল ও বট ইউনিট হিসাব।",
        "summaryEn": "Electric current, Ohm's law, resistivity, series & parallel circuits, electrical power, and commercial energy billing (kWh).",
        "marksWeightage": {
          "cq": "১৫-২০ নম্বর (১-২টি CQ)",
          "mcq": "৪-৫ নম্বর"
        },
        "keyTopics": [
          "ওহমের সূত্র (V = IR)",
          "আপেক্ষিক রোধ (R = ρL/A)",
          "তুল্য রোধ (Rs, Rp)",
          "বিদ্যুৎ বিল ও ইউনিট (kWh = Pt/1000)"
        ],
        "linkedToolIds": [
          "physics"
        ],
        "coreFormulas": [
          {
            "nameBn": "ওহমের সূত্র ও রোধ",
            "nameEn": "Ohm's Law & Resistance",
            "latex": "V = I \\times R, \\quad R = \\rho \\frac{L}{A}"
          },
          {
            "nameBn": "তুল্য রোধ সমবায়",
            "nameEn": "Equivalent Resistance",
            "latex": "R_s = \\sum R_i, \\quad \\frac{1}{R_p} = \\sum \\frac{1}{R_i}"
          },
          {
            "nameBn": "বিদ্যুৎ শক্তির হিসাব",
            "nameEn": "Energy Consumption",
            "latex": "\\text{kWh} = \\frac{P\\text{ (W)} \\times t\\text{ (hours)}}{1000}"
          }
        ]
      },
      {
        "id": "ssc-phy-ch12",
        "chapterNumber": 12,
        "titleBn": "বিদ্যুতের চৌম্বক ক্রিয়া",
        "titleEn": "Magnetic Effects of Current",
        "summaryBn": "তড়িৎবাহী তারের চৌম্বক ক্ষেত্র, তড়িৎ চুম্বক, তড়িৎ চৌম্বকীয় আবেশ, এবং স্টেপ-আপ ও স্টেপ-ডাউন ট্রান্সফরমারের মূলনীতি।",
        "summaryEn": "Magnetic fields of current-carrying wires, electromagnets, electromagnetic induction, and step-up/step-down transformers.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩ নম্বর"
        },
        "keyTopics": [
          "আবেশ ও ফ্যারাডের সূত্র",
          "ট্রান্সফরমার সমীকরণ (Vp/Vs = Np/Ns = Is/Ip)",
          "স্টেপ-আপ বনাম স্টেপ-ডাউন নীতি",
          "আদর্শ ক্ষমতা সংরক্ষণ"
        ],
        "linkedToolIds": [
          "physics"
        ],
        "coreFormulas": [
          {
            "nameBn": "ট্রান্সফরমার রূপান্তর সূত্র",
            "nameEn": "Transformer Equations",
            "latex": "\\frac{V_p}{V_s} = \\frac{N_p}{N_s} = \\frac{I_s}{I_p}"
          }
        ]
      },
      {
        "id": "ssc-phy-ch13",
        "chapterNumber": 13,
        "titleBn": "আধুনিক পদার্থবিজ্ঞান ও ইলেকট্রনিক্স",
        "titleEn": "Modern Physics & Electronics",
        "summaryBn": "তেজস্ক্রিয়তা (আলফা, বিটা, গামা), ক্ষয় সূত্র ও অর্ধায়ু (Half-life), আইনস্টাইনের ভর-শক্তি সমীকরণ এবং সেমিকন্ডাক্টর ও ডায়োড।",
        "summaryEn": "Radioactivity, alpha/beta/gamma radiation, half-life decay, mass-energy equivalence (E = mc²), semiconductors, and electronics.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "ভর-শক্তি সমীকরণ (E = mc²)",
          "তেজস্ক্রিয় ক্ষয় ও অর্ধায়ু (N(t) = N0·2^(-t/T½))",
          "ক্ষয় ধ্রুবক (λ = 0.693/T½)",
          "সেমিকন্ডাক্টর ও রেকটিফায়ার"
        ],
        "linkedToolIds": [
          "physics"
        ],
        "coreFormulas": [
          {
            "nameBn": "ভর-শক্তি সমীকরণ",
            "nameEn": "Mass-Energy Equivalence",
            "latex": "E = m \\times c^2"
          },
          {
            "nameBn": "তেজস্ক্রিয় ক্ষয় সূত্র",
            "nameEn": "Radioactive Decay Law",
            "latex": "N(t) = N_0 \\left(\\frac{1}{2}\\right)^{\\frac{t}{T_{1/2}}}, \\quad \\lambda = \\frac{0.693}{T_{1/2}}"
          }
        ]
      }
    ]
  },
  {
    "id": "chemistry",
    "level": "ssc",
    "nameBn": "রসায়ন (এসএসসি)",
    "nameEn": "SSC Chemistry (Classes 9-10)",
    "icon": "⚗️",
    "color": "from-teal-600 to-cyan-600",
    "badgeColor": "text-teal-400 bg-teal-950/60 border-teal-800/40",
    "code": "SSC 137",
    "descriptionBn": "পদার্থের অবস্থা, পদার্থের গঠন, পর্যায় সারণী, রাসায়নিক বন্ধন, এবং মোলের ধারণা ও রাসায়নিক গণনা।",
    "descriptionEn": "States of matter, atomic structure, periodic table, chemical bonding, mole concept, and stoichiometry.",
    "chapters": [
      {
        "id": "ssc-chem-ch2",
        "chapterNumber": 2,
        "titleBn": "পদার্থের অবস্থা (গ্রাহামের ব্যাপন সূত্র)",
        "titleEn": "States of Matter (Graham’s Law of Diffusion)",
        "summaryBn": "কণার গতিতত্ত্ব, ব্যাপন ও নিঃসরণ, গ্রাহামের ব্যাপন সূত্র এবং গলনাঙ্ক ও স্ফুটনাঙ্ক লেখচিত্র।",
        "summaryEn": "Kinetic theory of particles, diffusion and effusion, Graham’s law of diffusion, and cooling curves.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "কণার গতিতত্ত্বের স্বীকার্য",
          "গ্রাহামের ব্যাপন সূত্র (r1/r2 = √(M2/M1))",
          "ব্যাপন বনাম নিঃসরণ",
          "উর্ধ্বপাতন ও শীতলীকরণ বক্ররেখা"
        ],
        "linkedToolIds": [
          "chemistry"
        ],
        "coreFormulas": [
          {
            "nameBn": "গ্রাহামের ব্যাপন সূত্র",
            "nameEn": "Graham's Law of Diffusion",
            "latex": "\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}} = \\frac{t_2}{t_1}"
          }
        ]
      },
      {
        "id": "ssc-chem-ch3",
        "chapterNumber": 3,
        "titleBn": "পদার্থের গঠন (আইসোটোপ ও বোর মডেল)",
        "titleEn": "Structure of Matter (Isotopes & Bohr Model)",
        "summaryBn": "রাদারফোর্ড ও বোর পরমাণু মডেল, আইসোটোপ ও আপেক্ষিক পারমাণবিক ভর, এবং ইলেকট্রন বিন্যাস নীতি।",
        "summaryEn": "Rutherford & Bohr atomic models, isotopes, average atomic mass, and electron configurations.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "বোর মডেল ও কৌণিক ভরবেগ (mvr = nh/2π)",
          "আইসোটোপ হতে গড় পারমাণবিক ভর",
          "ইলেকট্রন বিন্যাস (2n² ও s,p,d,f নিয়ম)"
        ],
        "linkedToolIds": [
          "chemistry"
        ],
        "coreFormulas": [
          {
            "nameBn": "গড় আপেক্ষিক পারমাণবিক ভর",
            "nameEn": "Average Atomic Mass",
            "latex": "A_{\\text{avg}} = \\sum \\frac{A_i \\times p_i}{100}"
          },
          {
            "nameBn": "বোর কৌণিক ভরবেগ",
            "nameEn": "Bohr Angular Momentum",
            "latex": "mvr = \\frac{nh}{2\\pi}"
          }
        ]
      },
      {
        "id": "ssc-chem-ch4",
        "chapterNumber": 4,
        "titleBn": "পর্যায় সারণি",
        "titleEn": "Periodic Table",
        "summaryBn": "পর্যায় সারণির পটভূমি, ইলেকট্রন বিন্যাস হতে গ্রুপ ও পর্যায় নির্ণয়, পর্যায়বৃত্ত ধর্ম (পরমাণুর আকার, আয়নীকরণ শক্তি)।",
        "summaryEn": "Periodic table development, finding group/period from electron configuration, and periodic properties.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "গ্রুপ ও পর্যায় নির্ণয়ের ৩টি নিয়ম",
          "পারমাণবিক আকার ও ব্যাসার্ধ",
          "ধাতব ও অধাতব ধর্ম",
          "১ থেকে ৩০ মৌলের বিশেষ ধর্ম"
        ],
        "linkedToolIds": [
          "chemistry"
        ]
      },
      {
        "id": "ssc-chem-ch6",
        "chapterNumber": 6,
        "titleBn": "মোলের ধারণা ও রাসায়নিক গণনা",
        "titleEn": "Concept of Mole & Chemical Calculations",
        "summaryBn": "মোল, অ্যাভোগাড্রো সংখ্যা, মোলার ভর, গ্যাসীয় আয়তন, মোলারিটি, শতকরা সংযুতি, স্থূল সংকেত ও লিমিটিং বিক্রিয়ক।",
        "summaryEn": "Mole, Avogadro number, molar mass, molar volume, molarity, mass percentage, empirical formulas, and limiting reactants.",
        "marksWeightage": {
          "cq": "১০-১৫ নম্বর (১-২টি CQ)",
          "mcq": "৪-৫ নম্বর"
        },
        "keyTopics": [
          "মোলার ভর ও অনু সংখ্যা নির্ণয়",
          "মোলার দ্রবণ প্রস্তুতি (W = SVM/1000)",
          "শতকরা সংযুতি হতে স্থূল ও আণবিক সংকেত",
          "সীমিত বিক্রিয়ক (Limiting Reactant)"
        ],
        "linkedToolIds": [
          "chemistry",
          "molar-mass"
        ],
        "coreFormulas": [
          {
            "nameBn": "সমন্বিত মোল সূত্র",
            "nameEn": "Unified Mole Formula",
            "latex": "n = \\frac{W}{M} = \\frac{V}{22.4} = \\frac{N}{6.023 \\times 10^{23}}"
          },
          {
            "nameBn": "দ্রবণের মোলারিটি",
            "nameEn": "Solution Molarity",
            "latex": "W = \\frac{S \\times V \\times M}{1000}"
          },
          {
            "nameBn": "শতকরা সংযুতি",
            "nameEn": "Percentage Composition",
            "latex": "\\%\\text{Element} = \\frac{n \\times A_r}{M_r} \\times 100\\%"
          }
        ]
      },
      {
        "id": "ssc-chem-ch7",
        "chapterNumber": 7,
        "titleBn": "রাসায়নিক বিক্রিয়া (জারণ সংখ্যা ও রেডক্স)",
        "titleEn": "Chemical Reactions (Oxidation Numbers & Redox)",
        "summaryBn": "বিক্রিয়ার শ্রেণিবিভাগ, জারণ-বিজারণ (ইলেকট্রন স্থানান্তর), জারণ সংখ্যা নির্ণয় এবং লা-শাতেলিয়ারের নীতি।",
        "summaryEn": "Reaction classification, oxidation-reduction, algebraic oxidation numbers, and Le Chatelier’s principle.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "জারণ সংখ্যা নির্ণয়",
          "রেডক্স সমতাকরণ ও ইলেকট্রন স্থানান্তর",
          "সংযোজন, বিয়োজন ও প্রতিস্থাপন",
          "লা-শাতেলিয়ারের নীতি"
        ],
        "linkedToolIds": [
          "chemistry",
          "redox-balancer"
        ],
        "coreFormulas": [
          {
            "nameBn": "নিরপেক্ষ যৌগে জারণ সংখ্যার যোগফল",
            "nameEn": "Sum of Oxidation Numbers",
            "latex": "\\sum (\\text{O.N.}) = 0"
          }
        ]
      },
      {
        "id": "ssc-chem-ch8",
        "chapterNumber": 8,
        "titleBn": "রসায়ন ও শক্তি (বন্ধন শক্তি ও ΔH)",
        "titleEn": "Chemistry & Energy (Bond Energy & ΔH)",
        "summaryBn": "রাসায়নিক শক্তির রূপান্তর, বন্ধন শক্তি হতে বিক্রিয়া তাপ (ΔH) গণনা এবং তড়িৎ রাসায়নিক কোষ (গ্যালভানিক ও ড্রাই সেল)।",
        "summaryEn": "Chemical energy transformations, calculating reaction enthalpy (ΔH) from bond energies, and electrochemical cells.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "বন্ধন শক্তি হতে ΔH হিসাব",
          "তাপোৎপাদী বনাম তাপহারী বিক্রিয়া",
          "ড্রাই সেল ও তড়িৎ বিশ্লেষণ"
        ],
        "linkedToolIds": [
          "chemistry"
        ],
        "coreFormulas": [
          {
            "nameBn": "বিক্রিয়া তাপ (এনথ্যালপি)",
            "nameEn": "Reaction Enthalpy",
            "latex": "\\Delta H = \\sum B_{\\text{broken}} - \\sum B_{\\text{formed}}"
          }
        ]
      },
      {
        "id": "ssc-chem-ch9",
        "chapterNumber": 9,
        "titleBn": "অ্যাসিড-ক্ষার সমতা (pH ও টাইট্রেশন)",
        "titleEn": "Acid-Base Equilibrium (pH & Titration)",
        "summaryBn": "এসিড ও ক্ষারকের বৈশিষ্ট্য, pH স্কেল ও গুরুত্ব, নির্দেশক এবং অ্যাসিড-ক্ষার প্রশমন টাইট্রেশন।",
        "summaryEn": "Acid-base characteristics, pH scale, indicators, and acid-base neutralization titrations.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "pH ও pOH গণনা",
          "মাটি ও রক্তে pH এর গুরুত্ব",
          "প্রশমন টাইট্রেশন (VaSa/a = VbSb/b)"
        ],
        "linkedToolIds": [
          "chemistry"
        ],
        "coreFormulas": [
          {
            "nameBn": "হাইড্রোজেন আয়ন সূচক",
            "nameEn": "pH Formula",
            "latex": "\\text{pH} = -\\log_{10}[\\text{H}^+], \\quad \\text{pH} + \\text{pOH} = 14"
          },
          {
            "nameBn": "টাইট্রেশন সমীকরণ",
            "nameEn": "Neutralization Titration",
            "latex": "\\frac{V_A S_A}{a} = \\frac{V_B S_B}{b}"
          }
        ]
      },
      {
        "id": "ssc-chem-ch11",
        "chapterNumber": 11,
        "titleBn": "খনিজ সম্পদ: জীবাশ্ম (হাইড্রোকার্বন সমগোত্রীয় শ্রেণি)",
        "titleEn": "Mineral Resources: Fossils (Hydrocarbons)",
        "summaryBn": "হাইড্রোকার্বনের শ্রেণিবিভাগ, অ্যালকেন, অ্যালকিন ও অ্যালকাইনের সমগোত্রীয় শ্রেণি, প্রস্তুতি ও পলিমারকরণ।",
        "summaryEn": "Classification of hydrocarbons, homologous series of alkanes/alkenes/alkynes, preparation, and polymerization.",
        "marksWeightage": {
          "cq": "১০-১৫ নম্বর (১-২টি CQ)",
          "mcq": "৪-৫ নম্বর"
        },
        "keyTopics": [
          "সমগোত্রীয় শ্রেণি ও সাধারণ সংকেত",
          "অ্যালকেনের দহন ও হ্যালোজেনেশন",
          "অসম্পৃক্ততার পরীক্ষা (ব্রোমিন ও বায়ার পরীক্ষা)",
          "পলিমার ও প্লাস্টিক"
        ],
        "linkedToolIds": [
          "chemistry"
        ],
        "coreFormulas": [
          {
            "nameBn": "অ্যালকেন সাধারণ সংকেত",
            "nameEn": "Alkane General Formula",
            "latex": "\\text{C}_n\\text{H}_{2n+2}"
          },
          {
            "nameBn": "অ্যালকিন সাধারণ সংকেত",
            "nameEn": "Alkene General Formula",
            "latex": "\\text{C}_n\\text{H}_{2n}"
          },
          {
            "nameBn": "অ্যালকাইন সাধারণ সংকেত",
            "nameEn": "Alkyne General Formula",
            "latex": "\\text{C}_n\\text{H}_{2n-2}"
          }
        ]
      }
    ]
  },
  {
    "id": "general-math",
    "level": "ssc",
    "nameBn": "সাধারণ গণিত (এসএসসি)",
    "nameEn": "SSC General Mathematics (Classes 9-10)",
    "icon": "➕",
    "color": "from-blue-600 to-sky-600",
    "badgeColor": "text-blue-400 bg-blue-950/60 border-blue-800/40",
    "code": "SSC 109",
    "descriptionBn": "বাস্তব সংখ্যা, সেট ও ফাংশন, বীজগণিতীয় রাশি, সূচক ও লগারিদম, একচলক বিশিষ্ট সমীকরণ এবং ত্রিকোণমিতি।",
    "descriptionEn": "Real numbers, sets & functions, algebraic expressions, exponents & logs, linear equations, and trigonometry.",
    "chapters": [
      {
        "id": "ssc-gm-ch3",
        "chapterNumber": 3,
        "titleBn": "বীজগণিতীয় রাশি",
        "titleEn": "Algebraic Expressions",
        "summaryBn": "বর্গ ও ঘনের সূত্রাবলী, মান নির্ণয়, উৎপাদকে বিশ্লেষণ এবং ভাগশেষ উপপাদ্য।",
        "summaryEn": "Square and cubic formulas, value determination, factorization, and remainder theorem.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "বর্গ ও ঘনের অনুসিদ্ধান্ত",
          "উৎপাদকে বিশ্লেষণ (Middle Term)",
          "ভাগশেষ উপপাদ্য"
        ],
        "linkedToolIds": [
          "general-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "বর্গের মৌলিক সূত্র ও অনুসিদ্ধান্ত",
            "nameEn": "Square Expansions & Identities",
            "latex": "(a \\pm b)^2 = a^2 \\pm 2ab + b^2, \\quad a^2 + b^2 = (a+b)^2 - 2ab = (a-b)^2 + 2ab",
            "notesBn": "দ্বিপদী রাশির বর্গের সম্প্রসারণ এবং মান নির্ণয়ের সর্বাধিক ব্যবহৃত অনুসিদ্ধান্ত।",
            "notesEn": "Fundamental binomial square expansions and algebraic corollaries."
          },
          {
            "nameBn": "বর্গের বিয়োগফল ও ৪ab সূত্র",
            "nameEn": "Difference of Squares & 4ab Formula",
            "latex": "a^2 - b^2 = (a+b)(a-b), \\quad 4ab = (a+b)^2 - (a-b)^2, \\quad ab = \\left(\\frac{a+b}{2}\\right)^2 - \\left(\\frac{a-b}{2}\\right)^2",
            "notesBn": "উৎপাদকে বিশ্লেষণ এবং দুটি রাশির গুণফলকে দুটি বর্গের বিয়োগফল রূপে প্রকাশের সূত্র।",
            "notesEn": "Difference of squares factorization and expression of product ab as difference of two squares."
          },
          {
            "nameBn": "তিন পদের বর্গের সূত্র",
            "nameEn": "Three-Term Square Expansion",
            "latex": "(a+b+c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)",
            "notesBn": "ত্রিপদী রাশির বর্গের বিস্তার এবং তিনটি চলকের পারস্পরিক গুণফলের সমষ্টি নির্ণয়।",
            "notesEn": "Trinomial square expansion identity relating individual squares to pairwise products."
          },
          {
            "nameBn": "ঘনফল ও ঘনের অনুসিদ্ধান্ত",
            "nameEn": "Cube Expansions & Corollaries",
            "latex": "(a \\pm b)^3 = a^3 \\pm 3a^2 b + 3ab^2 \\pm b^3 = a^3 \\pm b^3 \\pm 3ab(a \\pm b)",
            "notesBn": "দ্বিপদী রাশির ঘনের বিস্তার এবং বীজগাণিতিক মান নির্ণয়ের অনুসিদ্ধান্ত।",
            "notesEn": "Binomial cube expansions and calculation corollaries."
          },
          {
            "nameBn": "দুটি ঘনের যোগফল ও বিয়োগফল (উৎপাদক)",
            "nameEn": "Sum & Difference of Cubes Factorization",
            "latex": "a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)",
            "notesBn": "ঘনের যোগফল ও বিয়োগফলের মৌলিক উৎপাদকীয় বিশ্লেষণ সূত্র।",
            "notesEn": "Factorization identities for the sum and difference of two cubic terms."
          }
        ]
      },
      {
        "id": "ssc-gm-ch9",
        "chapterNumber": 9,
        "titleBn": "ত্রিকোণমিতিক অনুপাত ও দূরত্ব",
        "titleEn": "Trigonometric Ratios & Distances",
        "summaryBn": "সূক্ষ্মকোণের ত্রিকোণমিতিক অনুপাত, ত্রিকোণমিতিক অভেদাবলী এবং কোণ ও দূরত্বের ব্যবহারিক সমস্যা।",
        "summaryEn": "Trigonometric ratios of acute angles, identities, and angle of elevation / height calculations.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "ত্রিকোণমিতিক অভেদাবলী",
          "উন্নতি ও অবনতি কোণ",
          "টাওয়ার ও গাছের উচ্চতা ও দূরত্ব সমস্যা"
        ],
        "linkedToolIds": [
          "general-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "মৌলিক অভেদ",
            "nameEn": "Fundamental Identity",
            "latex": "\\sin^2\\theta + \\cos^2\\theta = 1, \\quad 1 + \\tan^2\\theta = \\sec^2\\theta"
          },
          {
            "nameBn": "উচ্চতা সূত্র",
            "nameEn": "Height Equation",
            "latex": "h = d \\cdot \\tan\\theta"
          }
        ]
      },
      {
        "id": "ssc-gm-ch16",
        "chapterNumber": 16,
        "titleBn": "পরিমিতি (ক্ষেত্রফল ও ঘনবস্তু)",
        "titleEn": "Mensuration (2D & 3D Solids)",
        "summaryBn": "ত্রিভুজ (হ্যারন সূত্র), চতুর্ভুজ, বৃত্ত, সুষম বহুভুজ, ঘনক ও বেলনের ক্ষেত্রফল ও আয়তন নির্ণয়।",
        "summaryEn": "Triangle areas (Heron’s), circles, regular polygons, cube and cylinder volumes.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "হ্যারনের ক্ষেত্রফল সূত্র",
          "সুষম বহুভুজের ক্ষেত্রফল",
          "ঘনক ও সিলিন্ডারের সমগ্রতল ও আয়তন"
        ],
        "linkedToolIds": [
          "general-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "হ্যারনের ক্ষেত্রফল সূত্র",
            "nameEn": "Heron's Formula",
            "latex": "\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)}"
          },
          {
            "nameBn": "সিলিন্ডারের আয়তন",
            "nameEn": "Cylinder Volume",
            "latex": "V = \\pi r^2 h"
          },
          {
            "nameBn": "বিষমবাহু ত্রিভুজ ও হেরনের সূত্র",
            "nameEn": "Heron's Formula for Triangle Area",
            "latex": "A = \\sqrt{s(s-a)(s-b)(s-c)}, \\quad s = \\frac{a+b+c}{2}",
            "notesBn": "তিনটি ভিন্ন বাহু a, b, c এবং অর্ধ-পরিসীমা s জানা থাকলে ত্রিভুজের ক্ষেত্রফল নির্ণয়ের সার্বজনীন সূত্র।",
            "notesEn": "Heron's formula to find triangle area given three side lengths and semi-perimeter s."
          },
          {
            "nameBn": "সমবাহু ও সমদ্বিবাহু ত্রিভুজের ক্ষেত্রফল",
            "nameEn": "Equilateral & Isosceles Triangle Area",
            "latex": "\\text{সমবাহু: } A = \\frac{\\sqrt{3}}{4}a^2, \\quad \\text{সমদ্বিবাহু: } A = \\frac{b}{4}\\sqrt{4a^2 - b^2}",
            "notesBn": "সমবাহু ত্রিভুজের এক বাহু a এবং সমদ্বিবাহু ত্রিভুজের সমান সমান বাহু a ও ভূমি b হলে ক্ষেত্রফল।",
            "notesEn": "Dedicated area formulas for equilateral and isosceles triangles."
          },
          {
            "nameBn": "বেলন ও গোলকের আয়তন ও ক্ষেত্রফল",
            "nameEn": "Cylinder & Sphere Volume and Surface Area",
            "latex": "\\text{বেলন: } V = \\pi r^2 h, \\; A = 2\\pi r(r+h); \\quad \\text{গোলক: } V = \\frac{4}{3}\\pi r^3, \\; A = 4\\pi r^2",
            "notesBn": "ব্যাসার্ধ r ও উচ্চতা h বিশিষ্ট বেলন (সিলিন্ডার) এবং গোলকের আয়তন ও সমগ্রতলের ক্ষেত্রফল।",
            "notesEn": "Volume and total surface area formulas for cylinders and spherical solids."
          }
        ]
      },
      {
        "id": "ssc-gm-ch17",
        "chapterNumber": 17,
        "titleBn": "পরিসংখ্যান (গড়, মধ্যক ও প্রচুরক)",
        "titleEn": "Statistics (Mean, Median & Mode)",
        "summaryBn": "শ্রেণি বিন্যাসকৃত উপাত্তের সারণী তৈরি, সংক্ষিপ্ত পদ্ধতিতে গড়, মধ্যক ও প্রচুরক নির্ণয়।",
        "summaryEn": "Grouped frequency distribution tables, step-deviation mean, grouped median and mode.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "ধাপ বিচ্যুতি পদ্ধতিতে গড়",
          "মধ্যক শ্রেণি ও মধ্যক সূত্র",
          "প্রচুরক শ্রেণি ও প্রচুরক সূত্র"
        ],
        "linkedToolIds": [
          "general-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "সংক্ষিপ্ত গড়",
            "nameEn": "Step-Deviation Mean",
            "latex": "\\bar{x} = a + \\left( \\frac{\\sum f_i u_i}{n} \\right) \\times h"
          },
          {
            "nameBn": "মধ্যক সূত্র",
            "nameEn": "Grouped Median",
            "latex": "\\text{Median} = L + \\left( \\frac{\\frac{n}{2} - F_c}{f_m} \\right) \\times h"
          },
          {
            "nameBn": "প্রচুরক সূত্র",
            "nameEn": "Grouped Mode",
            "latex": "\\text{Mode} = L + \\left( \\frac{f_1}{f_1 + f_2} \\right) \\times h"
          }
        ]
      },
      {
        "id": "ssc-gm-ch4",
        "chapterNumber": 4,
        "titleBn": "সূচক ও লগারিদম",
        "titleEn": "Exponents and Logarithms",
        "summaryBn": "সূচকের সূত্রাবলী, ঋণাত্মক ও ভগ্নাংশ সূচক, লগারিদমের সংজ্ঞা, গুণফল-ভাগফল সূত্র এবং ভিত্তি রূপান্তর।",
        "summaryEn": "Laws of indices, negative and fractional exponents, definition and laws of logarithms, base change formula.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩ নম্বর"
        },
        "keyTopics": [
          "সূচকের গুণফল ও ভাগফল সূত্র",
          "a^0 = 1 এবং ঋণাত্মক সূচক a^(-n)",
          "লগারিদমের গুণফল ও ঘাত সূত্র",
          "ভিত্তি রূপান্তর ও সাধারণ লগারিদম"
        ],
        "coreFormulas": [
          {
            "nameBn": "সূচকের মৌলিক সূত্রাবলী",
            "nameEn": "Laws of Indices / Exponents",
            "latex": "a^m \\cdot a^n = a^{m+n}, \\quad \\frac{a^m}{a^n} = a^{m-n}, \\quad (a^m)^n = a^{mn}, \\quad a^0 = 1, \\quad a^{-n} = \\frac{1}{a^n}",
            "notesBn": "একই ভিত্তি বিশিষ্ট সূচকের গুণের ক্ষেত্রে ঘাত যোগ এবং ভাগের ক্ষেত্রে ঘাত বিয়োগ হয়।",
            "notesEn": "Fundamental laws of powers and integer/fractional exponents."
          },
          {
            "nameBn": "লগারিদমের মৌলিক সূত্র ও ভিত্তি পরিবর্তন",
            "nameEn": "Laws of Logarithms & Base Change",
            "latex": "\\log_a(MN) = \\log_a M + \\log_a N, \\quad \\log_a\\left(\\frac{M}{N}\\right) = \\log_a M - \\log_a N, \\quad \\log_a(M^p) = p\\log_a M, \\quad \\log_a b = \\frac{\\log_c b}{\\log_c a}",
            "notesBn": "লগারিদমের গুণফল, ভাগফল, ঘাত সূত্র এবং ভিত্তি পরিবর্তন করার সার্বজনীন সম্পর্ক।",
            "notesEn": "Product, quotient, power rules of logarithms and the change of base formula."
          }
        ]
      },
      {
        "id": "ssc-gm-ch13",
        "chapterNumber": 13,
        "titleBn": "সসীম ধারা (সমান্তর ও গুণোত্তর)",
        "titleEn": "Finite Series (Arithmetic & Geometric)",
        "summaryBn": "অনুক্রম ও ধারা, সমান্তর ধারার n-তম পদ ও সমষ্টি, গুণোত্তর ধারার n-তম পদ ও সমষ্টি এবং স্বাভাবিক সংখ্যার সমষ্টি।",
        "summaryEn": "Sequences and series, nth term and sum of arithmetic series, geometric series, and sum of first n natural numbers.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "সমান্তর ধারার n-তম পদ ও সাধারণ অন্তর d",
          "সমান্তর ধারার n পদের সমষ্টি",
          "গুণোত্তর ধারার n-তম পদ ও সাধারণ অনুপাত r",
          "গুণোত্তর ধারার সমষ্টি (r < 1 ও r > 1)",
          "স্বাভাবিক সংখ্যা, বর্গের ও ঘনের সমষ্টি"
        ],
        "coreFormulas": [
          {
            "nameBn": "সমান্তর ধারার n-তম পদ",
            "nameEn": "nth Term of Arithmetic Progression (AP)",
            "latex": "T_n = a + (n-1)d",
            "notesBn": "প্রথম পদ a এবং সাধারণ অন্তর d বিশিষ্ট যেকোনো সমান্তর ধারার n-তম পদের মান।",
            "notesEn": "Formula for the nth term of an arithmetic sequence with first term a and common difference d."
          },
          {
            "nameBn": "সমান্তর ধারার n পদের সমষ্টি",
            "nameEn": "Sum of First n Terms of AP",
            "latex": "S_n = \\frac{n}{2}[2a + (n-1)d] = \\frac{n}{2}(a + l)",
            "notesBn": "সমান্তর ধারার প্রথম n সংখ্যক পদের যোগফল (যেখানে l হলো শেষ পদ)।",
            "notesEn": "Total sum of first n terms of arithmetic series given difference d or last term l."
          },
          {
            "nameBn": "গুণোত্তর ধারার n-তম পদ",
            "nameEn": "nth Term of Geometric Progression (GP)",
            "latex": "T_n = a r^{n-1}",
            "notesBn": "প্রথম পদ a এবং সাধারণ অনুপাত r বিশিষ্ট গুণোত্তর ধারার n-তম পদের মান।",
            "notesEn": "Nth term formula for geometric sequence with common ratio r."
          },
          {
            "nameBn": "গুণোত্তর ধারার n পদের সমষ্টি",
            "nameEn": "Sum of First n Terms of GP",
            "latex": "S_n = \\frac{a(1 - r^n)}{1 - r} \\; (r < 1) \\quad \\text{বা} \\quad S_n = \\frac{a(r^n - 1)}{r - 1} \\; (r > 1)",
            "notesBn": "গুণোত্তর ধারার প্রথম n পদের সমষ্টি; সাধারণ অনুপাত r < 1 নাকি r > 1 তার উপর ভিত্তি করে সূত্র প্রযুক্ত হয়।",
            "notesEn": "Sum of n terms of a geometric progression depending on whether ratio r is less than or greater than 1."
          },
          {
            "nameBn": "স্বাভাবিক সংখ্যা, বর্গ ও ঘনের সমষ্টি",
            "nameEn": "Sum of Natural Numbers, Squares & Cubes",
            "latex": "\\sum_{i=1}^n i = \\frac{n(n+1)}{2}, \\quad \\sum_{i=1}^n i^2 = \\frac{n(n+1)(2n+1)}{6}, \\quad \\sum_{i=1}^n i^3 = \\left[\\frac{n(n+1)}{2}\\right]^2",
            "notesBn": "প্রথম n সংখ্যক স্বাভাবিক পূর্ণসংখ্যা, তাদের বর্গের এবং ঘনের যোগফল নির্ণয়ের বিশেষ ধারা সূত্র।",
            "notesEn": "Summation identities for the first n integers, their squares, and their cubes."
          }
        ]
      }
    ]
  },
  {
    "id": "higher-math",
    "level": "ssc",
    "nameBn": "উচ্চতর গণিত (এসএসসি)",
    "nameEn": "SSC Higher Mathematics (Classes 9-10)",
    "icon": "📐",
    "color": "from-purple-600 to-violet-600",
    "badgeColor": "text-purple-400 bg-purple-950/60 border-purple-800/40",
    "code": "SSC 126",
    "descriptionBn": "সেট ও ফাংশন, বীজগাণিতিক রাশি, জ্যামিতি (এ্যাপোলোনিওস), সমীকরণ, অসমতা, অসীম ধারা, ত্রিকোণমিতি, দ্বিপদী বিস্তৃতি, স্থানাঙ্ক জ্যামিতি, ভেক্টর, ঘন জ্যামিতি ও সম্ভাবনা।",
    "descriptionEn": "Sets & functions, algebraic expressions, Apollonius geometry, equations, inequalities, infinite series, trigonometry, binomial expansions, coordinate geometry, vectors, solid geometry, and probability.",
    "chapters": [
      {
        "id": "ssc-hm-ch1",
        "chapterNumber": 1,
        "titleBn": "সেট ও ফাংশন (Set and Function)",
        "titleEn": "Set and Function",
        "summaryBn": "সার্বিক সেট, উপসেট সংখ্যা (2^n), ৩ সেটের ভেনচিত্র ও সংযোগ সূত্র, এক-এক ফাংশন ও ভগ্নাংশ বিপরীত ফাংশন।",
        "summaryEn": "Subsets (2^n), three-set inclusion-exclusion Venn principle, injective functions, and fractional inverse functions.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "২-৩ নম্বর"
        },
        "keyTopics": [
          "উপসেটের সংখ্যা (2ⁿ)",
          "তিন সেটের ভেনচিত্র সূত্র",
          "এক-এক ও সার্বিক ফাংশন",
          "বিপরীত ফাংশন ও ডোমেন-রেঞ্জ"
        ],
        "linkedToolIds": [
          "higher-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "উপসেট সংখ্যা",
            "nameEn": "Subsets Count",
            "latex": "n(P(A)) = 2^n"
          },
          {
            "nameBn": "তিন সেটের সংযোগ",
            "nameEn": "Three-Set Union",
            "latex": "n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - n(A \\cap B) - n(B \\cap C) - n(C \\cap A) + n(A \\cap B \\cap C)"
          },
          {
            "nameBn": "ভগ্নাংশ বিপরীত ফাংশন",
            "nameEn": "Fractional Inverse",
            "latex": "f(x) = \\frac{ax+b}{cx+d} \\implies f^{-1}(x) = \\frac{-dx+b}{cx-a}"
          }
        ]
      },
      {
        "id": "ssc-hm-ch2",
        "chapterNumber": 2,
        "titleBn": "বীজগাণিতিক রাশি (Algebraic Expression)",
        "titleEn": "Algebraic Expressions",
        "summaryBn": "বহুপদী, সমমাত্রিক ও প্রতিসম রাশি, চক্র-ক্রমিক রাশি, ভাগশেষ উপপাদ্য এবং আংশিক ভগ্নাংশ।",
        "summaryEn": "Polynomials, homogeneous and symmetric expressions, cyclic expressions, remainder theorem, and partial fractions.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "ভাগশেষ উপপাদ্য ও উৎপাদক উপপাদ্য",
          "চক্র-ক্রমিক ঘন অভেদ (a³+b³+c³-3abc)",
          "আংশিক ভগ্নাংশে প্রকাশ"
        ],
        "linkedToolIds": [
          "higher-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "ভাগশেষ উপপাদ্য",
            "nameEn": "Remainder Theorem",
            "latex": "P(x) = (x-a)Q(x) + R \\implies R = P(a)"
          },
          {
            "nameBn": "চক্র-ক্রমিক ঘন অভেদ",
            "nameEn": "Cyclic Cubic Identity",
            "latex": "a^3+b^3+c^3-3abc = \\frac{1}{2}(a+b+c)[(a-b)^2+(b-c)^2+(c-a)^2]"
          }
        ]
      },
      {
        "id": "ssc-hm-ch3",
        "chapterNumber": 3,
        "titleBn": "জ্যামিতি (Geometry - Apollonius Theorem)",
        "titleEn": "Geometry (Apollonius Theorem)",
        "summaryBn": "লম্ব অভিক্ষেপ, পিথাগোরাসের উপপাদ্যের বিস্তৃতি, এ্যাপোলোনিয়াসের উপপাদ্য এবং ত্রিভুজের বাহু ও মধ্যমার সম্পর্ক।",
        "summaryEn": "Orthogonal projections, generalization of Pythagoras theorem, Apollonius theorem, and sides-medians relation.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "২-৩ নম্বর"
        },
        "keyTopics": [
          "লম্ব অভিক্ষেপ (Orthogonal Projection)",
          "এ্যাপোলোনিয়াসের উপপাদ্য",
          "বাহু ও মধ্যমার বর্গের সম্পর্ক (3Σa² = 4Σd²)"
        ],
        "linkedToolIds": [
          "higher-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "এ্যাপোলোনিয়াসের উপপাদ্য",
            "nameEn": "Apollonius's Theorem",
            "latex": "AB^2 + AC^2 = 2(AD^2 + BD^2)"
          },
          {
            "nameBn": "মধ্যমা নির্ণয় সূত্র",
            "nameEn": "Median Formula",
            "latex": "d_a^2 = \\frac{2b^2 + 2c^2 - a^2}{4}"
          },
          {
            "nameBn": "বাহু ও মধ্যমার সম্পর্ক",
            "nameEn": "Sides-Medians Relation",
            "latex": "3(a^2 + b^2 + c^2) = 4(d_a^2 + d_b^2 + d_c^2)"
          }
        ]
      },
      {
        "id": "ssc-hm-ch4",
        "chapterNumber": 4,
        "titleBn": "জ্যামিতিক অঙ্কন (Geometric Constructions)",
        "titleEn": "Geometric Constructions",
        "summaryBn": "নির্দিষ্ট শর্ত সাপেক্ষে ত্রিভুজ অঙ্কন, পরিবৃত্ত, অন্তর্বৃত্ত ও বহির্বৃত্ত অঙ্কন।",
        "summaryEn": "Constructions of triangles given specific conditions, circumcircles, incircles, and excircles.",
        "marksWeightage": {
          "cq": "১০ নম্বর (বিকল্প CQ)",
          "mcq": "১-২ নম্বর"
        },
        "keyTopics": [
          "ত্রিভুজ অঙ্কন (ভূমি, শিরঃকোণ ও অন্যান্য দুই বাহুর সমষ্টি/অন্তর)",
          "পরিবৃত্ত ও অন্তর্বৃত্ত"
        ],
        "linkedToolIds": [
          "higher-math"
        ]
      },
      {
        "id": "ssc-hm-ch5",
        "chapterNumber": 5,
        "titleBn": "সমীকরণ (দ্বিঘাত সমীকরণ ও মূলের প্রকৃতি)",
        "titleEn": "Equations (Quadratics & Discriminants)",
        "summaryBn": "এক চলক বিশিষ্ট দ্বিঘাত সমীকরণ, নিশ্চয়ক (b² - 4ac) বিশ্লেষণ, বাস্তব ও জটিল মূল এবং দ্বিঘাত সমীকরণ জোট।",
        "summaryEn": "Single-variable quadratic equations, discriminant analysis, real and complex roots, and systems of equations.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "দ্বিঘাত সূত্র প্রয়োগ",
          "নিশ্চায়ক (D = b² - 4ac) বিশ্লেষণ",
          "মূলের বাস্তব, সমান ও অবাস্তব প্রকৃতি",
          "সূচক সমীকরণ"
        ],
        "linkedToolIds": [
          "higher-math",
          "quadratic-solver"
        ],
        "coreFormulas": [
          {
            "nameBn": "দ্বিঘাত সমাধান সূত্র",
            "nameEn": "Quadratic Formula",
            "latex": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"
          },
          {
            "nameBn": "নিশ্চায়ক সূত্র",
            "nameEn": "Discriminant Formula",
            "latex": "D = b^2 - 4ac"
          }
        ]
      },
      {
        "id": "ssc-hm-ch6",
        "chapterNumber": 6,
        "titleBn": "অসমতা (Linear Inequalities)",
        "titleEn": "Linear Inequalities",
        "summaryBn": "এক চলক বিশিষ্ট রৈখিক অসমতার সমাধান, সংখ্যারেখায় প্রদর্শন এবং বাস্তব ব্যবধী সংকেত।",
        "summaryEn": "Single-variable linear inequalities, number line representations, and interval notation.",
        "marksWeightage": {
          "cq": "৫-১০ নম্বর (CQ ক/খ)",
          "mcq": "২ নম্বর"
        },
        "keyTopics": [
          "অসমতার মৌলিক স্বীকার্য",
          "এক চলক রৈখিক অসমতা সমাধান",
          "সংখ্যারেখা ও বাস্তব ব্যবধী [a, b]"
        ],
        "linkedToolIds": [
          "higher-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "রৈখিক অসমতা সীমা",
            "nameEn": "Inequality Boundary",
            "latex": "ax + b \\le c \\implies x \\le \\frac{c-b}{a} \\quad (a > 0)"
          }
        ]
      },
      {
        "id": "ssc-hm-ch7",
        "chapterNumber": 7,
        "titleBn": "অসীম ধারা (Infinite Geometric Series)",
        "titleEn": "Infinite Geometric Series",
        "summaryBn": "অসীম গুণোত্তর ধারার অভিসারিতা শর্ত (|r| < 1), অসীমতক সমষ্টি (S∞) এবং পৌনঃপুনিক দশমিককে ভগ্নাংশে রূপান্তর।",
        "summaryEn": "Convergence conditions (|r| < 1), infinite geometric sum (S∞), and converting recurring decimals to fractions.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩ নম্বর"
        },
        "keyTopics": [
          "অসীম গুণোত্তর ধারা",
          "সমষ্টি থাকার শর্ত (|r| < 1)",
          "অসীমতক সমষ্টি সূত্র",
          "পৌনঃপুনিক দশমিককে মূলদ ভগ্নাংশে প্রকাশ"
        ],
        "linkedToolIds": [
          "higher-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "অসীমতক সমষ্টি",
            "nameEn": "Infinite Sum",
            "latex": "S_\\infty = \\frac{a}{1 - r} \\quad (|r| < 1)"
          },
          {
            "nameBn": "পৌনঃপুনিক রূপান্তর",
            "nameEn": "Recurring Decimal",
            "latex": "0.\\dot{a}\\dot{b} = \\frac{ab}{99}, \\quad a.b\\dot{c}\\dot{d} = \\frac{abcd - ab}{990}"
          }
        ]
      },
      {
        "id": "ssc-hm-ch8",
        "chapterNumber": 8,
        "titleBn": "ত্রিকোণমিতি (বৃত্তীয় পরিমাপ ও বৃত্তচাপ)",
        "titleEn": "Trigonometry (Circular Measure)",
        "summaryBn": "রেডিয়ান কোণ, বৃত্তচাপের দৈর্ঘ্য (s = rθ), বৃত্তকলার ক্ষেত্রফল (A = 0.5 r²θ) এবং চতুর্ভাগে ত্রিকোণমিতিক চিহ্নের পরিবর্তন।",
        "summaryEn": "Radian angle measure, arc length (s = rθ), sector area (A = 0.5 r²θ), and quadrant sign rules.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "ডিগ্রি ও রেডিয়ান রূপান্তর",
          "বৃত্তচাপের দৈর্ঘ্য s = rθ",
          "বৃত্তকলার ক্ষেত্রফল",
          "কোঅর্ডিনেট কোয়াড্রান্ট নিয়ম"
        ],
        "linkedToolIds": [
          "higher-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "বৃত্তচাপের দৈর্ঘ্য",
            "nameEn": "Arc Length",
            "latex": "s = r\\theta \\quad (\\theta \\text{ in radians})"
          },
          {
            "nameBn": "বৃত্তকলার ক্ষেত্রফল",
            "nameEn": "Sector Area",
            "latex": "A = \\frac{1}{2}r^2\\theta"
          }
        ]
      },
      {
        "id": "ssc-hm-ch9",
        "chapterNumber": 9,
        "titleBn": "সূচকীয় ও লগারিদমীয় ফাংশন (Exponential & Log)",
        "titleEn": "Exponential & Logarithmic Functions",
        "summaryBn": "সূচক ও লগারিদমের নিয়মাবলী, ভিত্তি পরিবর্তন সূত্র, লগারিদম সমীকরণ সমাধান এবং ডোমেন ও রেঞ্জ।",
        "summaryEn": "Exponent and logarithm laws, base change formula, logarithmic equations, domain and range.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "২-৩ নম্বর"
        },
        "keyTopics": [
          "লগারিদমের মৌলিক ধর্মাবলী",
          "ভিত্তি পরিবর্তন সূত্র (Change of Base)",
          "লগারিদমীয় ফাংশনের ডোমেন ও রেঞ্জ"
        ],
        "linkedToolIds": [
          "higher-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "ভিত্তি পরিবর্তন সূত্র",
            "nameEn": "Change of Base",
            "latex": "\\log_a b = \\frac{\\ln b}{\\ln a}"
          }
        ]
      },
      {
        "id": "ssc-hm-ch10",
        "chapterNumber": 10,
        "titleBn": "দ্বিপদী বিস্তৃতি (Binomial Expansion)",
        "titleEn": "Binomial Expansion",
        "summaryBn": "প্যাসকেলের ত্রিভুজ, দ্বিপদী উপপাদ্য, সমাবেশ (ⁿCr) এবং সাধারণ পদ T(r+1) নির্ণয়।",
        "summaryEn": "Pascal's triangle, binomial theorem, combinations (nCr), and general term determination.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩ নম্বর"
        },
        "keyTopics": [
          "প্যাসকেলের ত্রিভুজ বিধি",
          "দ্বিপদী উপপাদ্য (x+y)ⁿ",
          "সাধারণ পদ T(r+1) = ⁿCr xⁿ⁻ʳ yʳ",
          "মধ্যপদ ও x-বর্জিত পদ"
        ],
        "linkedToolIds": [
          "higher-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "দ্বিপদী উপপাদ্য",
            "nameEn": "Binomial Theorem",
            "latex": "(x + y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r"
          },
          {
            "nameBn": "সমাবেশ সূত্র",
            "nameEn": "Combination Formula",
            "latex": "\\binom{n}{r} = \\frac{n!}{r!(n-r)!}"
          }
        ]
      },
      {
        "id": "ssc-hm-ch11",
        "chapterNumber": 11,
        "titleBn": "স্থানাঙ্ক জ্যামিতি (Coordinate Geometry & Shoelace)",
        "titleEn": "Coordinate Geometry (Shoelace Formula)",
        "summaryBn": "দুটি বিন্দুর দূরত্ব, সরলরেখার ঢাল ও সমীকরণ, এবং Shoelace সূত্রের সাহায্যে ত্রিভুজ ও বহুভুজের ক্ষেত্রফল।",
        "summaryEn": "Distance formula, straight line slope and equations, and Shoelace polygon area formula.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "দূরত্ব সূত্র",
          "সরলরেখার ঢাল (m = (y₂-y₁)/(x₂-x₁))",
          "সরলরেখার সমীকরণ y = mx + c",
          "Shoelace ক্ষেত্রফল সূত্র"
        ],
        "linkedToolIds": [
          "higher-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "দূরত্ব সূত্র",
            "nameEn": "Distance Formula",
            "latex": "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}"
          },
          {
            "nameBn": "ঢাল সূত্র",
            "nameEn": "Slope Formula",
            "latex": "m = \\frac{y_2 - y_1}{x_2 - x_1}"
          },
          {
            "nameBn": "Shoelace ক্ষেত্রফল",
            "nameEn": "Shoelace Formula",
            "latex": "\\Delta = \\frac{1}{2} |(x_1 y_2 + x_2 y_3 + \\dots) - (y_1 x_2 + y_2 x_3 + \\dots)|"
          }
        ]
      },
      {
        "id": "ssc-hm-ch12",
        "chapterNumber": 12,
        "titleBn": "সমতলীয় ভেক্টর (Planar Vectors)",
        "titleEn": "Planar Vectors",
        "summaryBn": "দ্বিমাত্রিক ভেক্টরের জ্যামিতিক ও বীজগণিতীয় রূপ, একক ভেক্টর, ভেক্টরের মান ও দিক এবং ভেক্টরের সাহায্যে জ্যামিতিক প্রমাণ।",
        "summaryEn": "Geometric and algebraic representations of 2D vectors, unit vectors, magnitude, direction, and vector proofs.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "২-৩ নম্বর"
        },
        "keyTopics": [
          "ভেক্টরের মান |v|",
          "দিক কোণ θ = tan⁻¹(y/x)",
          "ভেক্টর যোগের ত্রিভুজ ও সামান্তরিক বিধি",
          "ভেক্টরের জ্যামিতিক প্রমাণ"
        ],
        "linkedToolIds": [
          "higher-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "ভেক্টরের মান ও দিক",
            "nameEn": "Vector Magnitude & Direction",
            "latex": "|\\vec{v}| = \\sqrt{x^2 + y^2}, \\quad \\theta = \\tan^{-1}\\left(\\frac{y}{x}\\right)"
          }
        ]
      },
      {
        "id": "ssc-hm-ch13",
        "chapterNumber": 13,
        "titleBn": "ঘন জ্যামিতি (Solid Geometry - Cone, Cylinder, Sphere)",
        "titleEn": "Solid Geometry (3D Shapes)",
        "summaryBn": "ঘনক, আয়তাকার ঘনবস্তু, প্রিজম, পিরামিড, সমবৃত্তভূমিক কোণক, বেলন ও গোলকের সমগ্রতল ও আয়তন নির্ণয়।",
        "summaryEn": "Cuboid, prisms, pyramids, right circular cones, cylinders, and spheres surface area and volume.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩ নম্বর"
        },
        "keyTopics": [
          "কোণকের হেলানো উচ্চতা l, আয়তন ও বক্রতল",
          "সিলিন্ডারের সমগ্রতল ও আয়তন",
          "গোলকের ক্ষেত্রফল ও আয়তন"
        ],
        "linkedToolIds": [
          "higher-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "কোণকের আয়তন ও তল",
            "nameEn": "Cone Volume & Area",
            "latex": "l = \\sqrt{r^2+h^2}, \\; V = \\frac{1}{3}\\pi r^2 h, \\; A = \\pi r l"
          },
          {
            "nameBn": "গোলকের আয়তন ও ক্ষেত্রফল",
            "nameEn": "Sphere Volume & Area",
            "latex": "V = \\frac{4}{3}\\pi r^3, \\; A = 4\\pi r^2"
          }
        ]
      },
      {
        "id": "ssc-hm-ch14",
        "chapterNumber": 14,
        "titleBn": "সম্ভাবনা (Probability)",
        "titleEn": "Probability",
        "summaryBn": "নমুনা ক্ষেত্র, অনুকূল ফলাফল, মুদ্রা ও ছক্কার পরীক্ষা, প্রোবাবিলিটি ট্রি (Probability Tree) এবং সম্ভাবনার সূত্রাবলী।",
        "summaryEn": "Sample space, favorable outcomes, coin and die experiments, probability trees, and classical probability laws.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "২-৩ নম্বর"
        },
        "keyTopics": [
          "নমুনা ক্ষেত্র ও ঘটনা",
          "মুদ্রা নিক্ষেপ ও ছক্কার সম্ভাবনা",
          "প্রোবাবিলিটি ট্রি (Tree Diagram)",
          "সম্ভাবনা সূত্র P(E) = n(E)/n(S)"
        ],
        "linkedToolIds": [
          "higher-math"
        ],
        "coreFormulas": [
          {
            "nameBn": "সম্ভাবনা সূত্র",
            "nameEn": "Probability Formula",
            "latex": "P(E) = \\frac{n(E)}{n(S)}, \\quad 0 \\le P(E) \\le 1"
          }
        ]
      }
    ]
  },
  {
    "id": "biology",
    "level": "ssc",
    "nameBn": "জীববিজ্ঞান (এসএসসি)",
    "nameEn": "SSC Biology (Classes 9-10)",
    "icon": "🧬",
    "color": "from-emerald-600 to-green-600",
    "badgeColor": "text-emerald-400 bg-emerald-950/60 border-emerald-800/40",
    "code": "SSC 138",
    "descriptionBn": "জীবন পাঠ, জীবকোষ ও টিস্যু, কোষ বিভাজন, জীবনীশক্তি (সালোকসংশ্লেষণ ও শ্বসন), এবং জীবে প্রজনন ও বংশগতি।",
    "descriptionEn": "Cell biology, tissues, cell division (mitosis/meiosis), bioenergetics, and genetics.",
    "chapters": [
      {
        "id": "ssc-bio-ch2",
        "chapterNumber": 2,
        "titleBn": "জীবকোষ ও টিস্যু",
        "titleEn": "Living Cells & Tissues",
        "summaryBn": "উদ্ভিদ ও প্রাণিকোষের অঙ্গাণুসমূহ, মাইটোকন্ড্রিয়া, প্লাস্টিড, সরল ও জটিল টিস্যু এবং অণুবীক্ষণ যন্ত্রের বিবর্ধন।",
        "summaryEn": "Plant and animal cell organelles, mitochondria, plastids, simple/complex tissues, and microscopic magnification.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "উদ্ভিদ ও প্রাণী কোষের তুলনা",
          "ক্লোরোপ্লাস্টের গঠন",
          "জাইলেম ও ফ্লোয়েম টিস্যু",
          "কোষের বিবর্ধন"
        ],
        "linkedToolIds": [
          "biology"
        ]
      },
      {
        "id": "ssc-bio-ch4",
        "chapterNumber": 4,
        "titleBn": "জীবনীশক্তি (সবাত ও অবাত শ্বসনের ATP হিসাব)",
        "titleEn": "Bioenergetics (Respiration ATP Balance Sheet)",
        "summaryBn": "ATP শক্তি মুদ্রা, সালোকসংশ্লেষণ (আলোক পর্যায় ও কেলভিন চক্র), এবং শ্বসনে গ্লুকোজ জারণের ৩৮টি ATP উৎপাদন।",
        "summaryEn": "ATP energy currency, photosynthesis pathways, and aerobic respiration balance sheet yielding 38 ATP.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৪ নম্বর"
        },
        "keyTopics": [
          "সালোকসংশ্লেষণের আলোক ও অন্ধকার পর্যায়",
          "সবাত শ্বসনের ৪টি ধাপ (গ্লাইকোলাইসিস, ক্রেবস চক্র)",
          "গ্লুকোজ জারণে ৩৮টি ATP হিসাব",
          "অবাত শ্বসন ও সন্ধান"
        ],
        "linkedToolIds": [
          "biology"
        ],
        "coreFormulas": [
          {
            "nameBn": "সবাত শ্বসন সমীকরণ",
            "nameEn": "Aerobic Respiration Equation",
            "latex": "\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\longrightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + 38\\text{ATP} \\; (277.4\\text{ kcal})"
          }
        ]
      },
      {
        "id": "ssc-bio-ch5",
        "chapterNumber": 5,
        "titleBn": "খাদ্য, পুষ্টি এবং পরিপাক (BMI ও BMR)",
        "titleEn": "Food, Nutrition and Digestion (BMI & BMR)",
        "summaryBn": "খাদ্যের উপাদান, ভিটামিন ও খনিজ লবণ, বিএমআই (BMI), হ্যারিস-বেনেডিক্ট বিএমআর (BMR) এবং দৈনিক ক্যালরি চাহিদা।",
        "summaryEn": "Nutrients, balanced diet, Body Mass Index (BMI), Harris-Benedict BMR, and daily caloric requirements (TDEE).",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৪-৫ নম্বর"
        },
        "keyTopics": [
          "বিএমআই (BMI) নির্ণয় ও ওজন শ্রেণি",
          "হ্যারিস-বেনেডিক্ট সূত্রে BMR হিসাব",
          "পরিশ্রমের ভিত্তিতে দৈনিক ক্যালরি চাহিদা",
          "পরিপাকতন্ত্র ও খাদ্য পরিপাক"
        ],
        "linkedToolIds": [
          "biology"
        ],
        "coreFormulas": [
          {
            "nameBn": "দেহ ভর সূচি (BMI)",
            "nameEn": "Body Mass Index Formula",
            "latex": "\\text{BMI} = \\frac{\\text{Weight (kg)}}{[\\text{Height (m)}]^2}"
          },
          {
            "nameBn": "পুরুষ BMR সূত্র",
            "nameEn": "Male BMR Formula",
            "latex": "\\text{BMR}_{\\text{Male}} = 66 + (13.7 \\times W) + (5 \\times H) - (6.8 \\times A)"
          },
          {
            "nameBn": "নারী BMR সূত্র",
            "nameEn": "Female BMR Formula",
            "latex": "\\text{BMR}_{\\text{Female}} = 655 + (9.6 \\times W) + (1.8 \\times H) - (4.7 \\times A)"
          }
        ]
      },
      {
        "id": "ssc-bio-ch6",
        "chapterNumber": 6,
        "titleBn": "জীবে পরিবহন (রক্তের গ্রুপ ও রক্তচাপ)",
        "titleEn": "Transport in Organisms (Blood Groups & Pressure)",
        "summaryBn": "রক্তরস ও রক্তকণিকা, ABO ও Rh রক্তের গ্রুপ, রক্ত পরিসঞ্চালন ও সামঞ্জস্যতা, হৃৎপিণ্ডের গঠন এবং রক্তচাপ।",
        "summaryEn": "Blood plasma & cells, ABO & Rh blood groups, safe transfusion, cardiac anatomy, and blood pressure.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "সার্বজনীন দাতা (O-) ও গ্রহীতা (AB+)",
          "অ্যান্টিজেন ও অ্যান্টিবডি বিক্রিয়া",
          "হৃৎপিণ্ডের রক্ত সংবহন",
          "সিস্টোল ও ডায়াস্টোল রক্তচাপ"
        ],
        "linkedToolIds": [
          "biology"
        ]
      },
      {
        "id": "ssc-bio-ch11",
        "chapterNumber": 11,
        "titleBn": "জীবের প্রজনন",
        "titleEn": "Reproduction in Organisms",
        "summaryBn": "পুষ্পের বিভিন্ন অংশ ও স্তবক, পরাগায়ন, নিষেক ও নতুন জীবের সৃষ্টি, এবং মানব প্রজনন ও ভ্রূণের বিকাশ।",
        "summaryEn": "Floral anatomy, pollination, fertilization, embryo development, and human reproduction.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "একটি আদর্শ ফুলের বিভিন্ন অংশ",
          "স্বপরাগায়ন বনাম পরপরাগায়ন",
          "দ্বিনিষেক ও শস্য (3n) সৃষ্টি"
        ],
        "linkedToolIds": [
          "biology"
        ]
      },
      {
        "id": "ssc-bio-ch12",
        "chapterNumber": 12,
        "titleBn": "জীবের বংশগতি ও বিবর্তন (পুনেট স্কয়ার ও বর্ণান্ধতা)",
        "titleEn": "Heredity & Evolution (Punnett Squares & Color Blindness)",
        "summaryBn": "ক্রোমোজোম ও ডিএনএ অনুলিপন, মেন্ডেলের সূত্রাবলী, পুনেট স্কয়ার এবং লিঙ্গ-সংযুক্ত প্রচ্ছন্ন রোগ (বর্ণান্ধতা ও থ্যালাসেমিয়া)।",
        "summaryEn": "Chromosomes, DNA replication, Mendel’s laws, Punnett squares, and sex-linked traits (color blindness, thalassemia).",
        "marksWeightage": {
          "cq": "১০-১৫ নম্বর (১-২টি CQ)",
          "mcq": "৪-৫ নম্বর"
        },
        "keyTopics": [
          "মেন্ডেলের একসংকর জনন (৩:১ ফিনোটাইপ)",
          "পুনেট স্কয়ার বিশ্লেষণ",
          "লাল-সবুজ বর্ণান্ধতার সঞ্চারণ (XN, Xn)",
          "থ্যালাসেমিয়া ও ডিএনএ টেস্ট"
        ],
        "linkedToolIds": [
          "biology"
        ],
        "coreFormulas": [
          {
            "nameBn": "মেন্ডেলীয় ফিনোটাইপিক অনুপাত",
            "nameEn": "Mendelian Phenotypic Ratio",
            "latex": "3\\text{ প্রকট (Dominant)} : 1\\text{ প্রচ্ছন্ন (Recessive)}"
          },
          {
            "nameBn": "মেন্ডেলীয় জিনোটাইপিক অনুপাত",
            "nameEn": "Mendelian Genotypic Ratio",
            "latex": "1\\,TT : 2\\,Tt : 1\\,tt"
          }
        ]
      },
      {
        "id": "ssc-bio-ch13",
        "chapterNumber": 13,
        "titleBn": "জীবের পরিবেশ (লিণ্ডেম্যানের ১০% শক্তি প্রবাহ)",
        "titleEn": "Environment of Life (Lindeman’s 10% Law)",
        "summaryBn": "বাস্তুতন্ত্রের উপাদানসমূহ, খাদ্যশৃঙ্খল ও খাদ্যজাল, ট্রফিক স্তর এবং লিণ্ডেম্যানের ১০% শক্তি রূপান্তর পিরামিড।",
        "summaryEn": "Ecosystem components, food chains & food webs, trophic levels, and Lindeman’s 10% ecological energy pyramid.",
        "marksWeightage": {
          "cq": "১০ নম্বর (১টি CQ)",
          "mcq": "৩-৪ নম্বর"
        },
        "keyTopics": [
          "বাস্তুতন্ত্রের পুষ্টিস্তর (Trophic Levels)",
          "লিণ্ডেম্যানের ১০% শক্তি নীতি",
          "শক্তির পিরামিড ও ৯০% তাপীয় অপচয়",
          "নাইট্রোজেন চক্র"
        ],
        "linkedToolIds": [
          "biology"
        ],
        "coreFormulas": [
          {
            "nameBn": "লিণ্ডেম্যানের শক্তি রূপান্তর সূত্র",
            "nameEn": "Lindeman's Efficiency Law",
            "latex": "E_{n+1} = E_n \\times 0.10"
          }
        ]
      }
    ]
  },
  {
    "id": "ict",
    "level": "ssc",
    "nameBn": "তথ্য ও যোগাযোগ প্রযুক্তি (এসএসসি)",
    "nameEn": "SSC ICT (Classes 9-10)",
    "icon": "💻",
    "color": "from-cyan-600 to-sky-600",
    "badgeColor": "text-cyan-400 bg-cyan-950/60 border-cyan-800/40",
    "code": "SSC 154",
    "descriptionBn": "তথ্য ও যোগাযোগ প্রযুক্তি এবং আমাদের বাংলাদেশ, কম্পিউটার নিরাপত্তা ও ম্যালওয়্যার, ইন্টারনেট ও ডিজিটাল স্বাক্ষরতা।",
    "descriptionEn": "ICT and development in Bangladesh, computer security & antivirus, spreadsheet basics, and digital literacy.",
    "chapters": [
      {
        "id": "ssc-ict-ch1",
        "chapterNumber": 1,
        "titleBn": "তথ্য ও যোগাযোগ প্রযুক্তি এবং আমাদের বাংলাদেশ",
        "titleEn": "ICT & Our Bangladesh",
        "summaryBn": "ডিজিটাল বাংলাদেশ, ই-লার্নিং, ই-গভর্ন্যান্স, ই-সার্ভিস, এবং তথ্যপ্রযুক্তিতে ক্যারিয়ার সম্ভাবনা।",
        "summaryEn": "Digital Bangladesh initiatives, e-learning, e-governance, e-services, and IT careers.",
        "marksWeightage": {
          "cq": "প্রযোজ্য নয়",
          "mcq": "৫ নম্বর"
        },
        "keyTopics": [
          "ই-লার্নিং ও দূরশিক্ষণ",
          "ই-স্বাস্থ্যসেবা ও টেলিমেডিসিন",
          "ই-গভর্ন্যান্স"
        ]
      },
      {
        "id": "ssc-ict-ch3",
        "chapterNumber": 3,
        "titleBn": "আমার শিক্ষায় ইন্টারনেট",
        "titleEn": "Internet in My Education",
        "summaryBn": "ডিজিটাল কন্টেন্ট, ই-বুক, শিক্ষায় ইন্টারনেটের ব্যবহার, কপিরাইট আইন ও ক্রিয়েটিভ কমন্স।",
        "summaryEn": "Digital learning materials, e-books, internet research safety, and fair use copyright laws.",
        "marksWeightage": {
          "cq": "প্রযোজ্য নয়",
          "mcq": "৫ নম্বর"
        },
        "keyTopics": [
          "ডিজিটাল কন্টেন্টের প্রকারভেদ",
          "ই-বুক রিডার",
          "কপিরাইট ও প্লেজারিজম"
        ],
        "linkedToolIds": [
          "html-runner"
        ]
      }
    ]
  }
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
