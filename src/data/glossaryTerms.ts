export interface GlossaryFAQ {
  questionBn: string;
  answerBn: string;
  questionEn: string;
  answerEn: string;
}

export interface GlossaryTerm {
  id: string;
  subjectId: 'physics' | 'chemistry' | 'biology' | 'higher-math' | 'general-math' | 'ict';
  subjectNameBn: string;
  subjectNameEn: string;
  termBn: string;
  termEn: string;
  pronunciationBn: string;
  symbol: string;
  definingEquation: string;
  siUnitBn: string;
  siUnitEn: string;
  cgsUnit?: string;
  dimensionalFormula: string;
  quantityType: 'scalar' | 'vector' | 'constant' | 'concept' | 'dimensionless';
  curriculum: string;
  definitionBn: string;
  definitionEn: string;
  explanationBn: string;
  explanationEn: string;
  keyPointsBn: string[];
  keyPointsEn: string[];
  mnemonicBn?: string;
  mnemonicEn?: string;
  relatedToolUrl?: string;
  relatedTermIds?: string[];
  faqs: GlossaryFAQ[];
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    "id": "physical-quantity",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "ভৌত রাশি",
    "termEn": "Physical Quantity",
    "pronunciationBn": "ফিজিক্যাল কোয়ান্টিটি",
    "symbol": "Q",
    "definingEquation": "Q = n \\times u",
    "siUnitBn": "রাশির প্রকৃতির ওপর নির্ভরশীল",
    "siUnitEn": "Depends on nature of quantity",
    "cgsUnit": "Varies",
    "dimensionalFormula": "[M^a L^b T^c]",
    "quantityType": "concept",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ১ (ভৌত রাশি ও পরিমাপ)",
    "definitionBn": "ভৌত জগতে যা কিছু পরিমাপ করা যায় তাকে ভৌত রাশি বলে।",
    "definitionEn": "Any measurable property of a physical body or system that can be quantified by measurement.",
    "explanationBn": "পদার্থবিজ্ঞানের প্রতিটি সমীকরণ ও নিয়মের মূল ভিত্তি হলো ভৌত রাশি। একটি ভৌত রাশিকে প্রকাশ করতে তার সাংখ্যিক মান ($n$) এবং একটি নির্দিষ্ট আদর্শ একক ($u$) প্রয়োজন হয়। যেমন: দৈর্ঘ্য, ভর, সময়, বেগ ও বল। ভৌত রাশিকে মৌলিক রাশি (যা অন্য কোনো রাশির ওপর নির্ভর করে না) এবং লব্ধ রাশি (যা মৌলিক রাশির সমন্বয়ে গঠিত) এই দুই ভাগে ভাগ করা হয়।",
    "explanationEn": "Physical quantities are the core foundation of all laws and equations in physics. A physical quantity is represented by the product of a numerical value and a standard unit. They are divided into fundamental quantities (independent base measurements such as length, mass, and time) and derived quantities (combinations of base quantities such as velocity and force).",
    "keyPointsBn": [
      "পরিমাপযোগ্য যেকোনো প্রাকৃতিক বিষয়ই ভৌত রাশি।",
      "এসআই পদ্ধতিতে ৭টি মৌলিক রাশি রয়েছে (দৈর্ঘ্য, ভর, সময়, তাপমাত্রা, তড়িৎ প্রবাহ, দীপন তীব্রতা, পদার্থের পরিমাণ)।",
      "রাশিকে প্রকাশের দিক বিবেচনায় স্কেলার ও ভেক্টর শ্রেণিতে ভাগ করা যায়।"
    ],
    "keyPointsEn": [
      "Any quantifiable natural property constitutes a physical quantity.",
      "The SI system defines 7 fundamental base quantities.",
      "Classified into scalar and vector quantities based on directional dependence."
    ],
    "mnemonicBn": "৭টি মৌলিক রাশি মনে রাখার কৌশল: ভদ স ত তা দী প (ভর, দৈর্ঘ্য, সময়, তাপমাত্রা, তড়িৎ প্রবাহ, দীপন তীব্রতা, পদার্থের পরিমাণ)",
    "mnemonicEn": "7 SI Base units: Length (m), Mass (kg), Time (s), Current (A), Temp (K), Intensity (cd), Amount (mol)",
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "velocity",
      "acceleration",
      "force"
    ],
    "faqs": [
      {
        "questionBn": "ভৌত রাশি কাকে বলে?",
        "answerBn": "ভৌত জগতে যা কিছু সরাসরি বা পরোক্ষভাবে পরিমাপ করা যায়, তাকে ভৌত রাশি বলে। যেমন—দৈর্ঘ্য, সময়, বল ইত্যাদি।",
        "questionEn": "What is a Physical Quantity?",
        "answerEn": "A physical quantity is a property of a material or system that can be quantified by measurement."
      },
      {
        "questionBn": "মৌলিক রাশি ও লব্ধ রাশির পার্থক্য কী?",
        "answerBn": "যেসব রাশি স্বাধীন এবং অন্য রাশির ওপর নির্ভর করে না তাদের মৌলিক রাশি বলে। পক্ষান্তরে, যেসব রাশি মৌলিক রাশির ওপর নির্ভর করে বা একাধিক মৌলিক রাশি থেকে লাভ করা যায় তাদের লব্ধ রাশি বলে।",
        "questionEn": "What is the difference between base and derived quantities?",
        "answerEn": "Base quantities are independent fundamental standards, whereas derived quantities are defined algebraically in terms of base quantities."
      }
    ]
  },
  {
    "id": "displacement",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "সরণ",
    "termEn": "Displacement",
    "pronunciationBn": "ডিসপ্লেসমেন্ট",
    "symbol": "\\vec{s} \\text{ বা } \\Delta\\vec{r}",
    "definingEquation": "\\Delta\\vec{r} = \\vec{r}_f - \\vec{r}_i",
    "siUnitBn": "$m$ (মিটার)",
    "siUnitEn": "m (meter)",
    "cgsUnit": "cm (সেন্টিমিটার)",
    "dimensionalFormula": "[L]",
    "quantityType": "vector",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ২ (গতি)",
    "definitionBn": "নির্দিষ্ট দিকে কোনো গতিশীল বস্তুর আদি ও শেষ অবস্থানের মধ্যকার সরলরৈখিক ন্যূনতম দূরত্বকে সরণ বলে।",
    "definitionEn": "The shortest straight-line vector directed from an object's initial position to its final position.",
    "explanationBn": "সরণ একটি ভেক্টর রাশি যার মান ও দিক উভয়ই আছে। কোনো বস্তু আঁকাবাঁকা পথে যত দূরত্বই অতিক্রম করুক না কেন, তার সরণ হবে কেবল আদি অবস্থান ও শেষ অবস্থানের মধ্যকার সরাসরি সরলরেখা। বৃত্তাকার পথে একবার ঘুরে এসে আদি বিন্দুতে পৌঁছালে অতিক্রান্ত দূরত্ব $2\\pi r$ হলেও সামগ্রিক সরণ হয় শূন্য ($0$)।",
    "explanationEn": "Displacement is a vector quantity representing the shortest straight-line distance from start to finish along with its direction. Even if a particle traverses a winding path, its displacement depends exclusively on its initial and final boundary points.",
    "keyPointsBn": [
      "সরণ ধনাত্মক, ঋণাত্মক কিংবা শূন্য হতে পারে।",
      "দূরত্ব স্কেলার রাশি কিন্তু সরণ ভেক্টর রাশি।",
      "বস্তু বৃত্তাকার পথে একবার পূর্ণ আবর্তন করলে সরণ শূন্য।"
    ],
    "keyPointsEn": [
      "Displacement can be positive, negative, or zero.",
      "Distance is scalar, whereas displacement is a vector.",
      "A complete circular round trip results in zero net displacement."
    ],
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "velocity",
      "acceleration"
    ],
    "faqs": [
      {
        "questionBn": "সরণ কাকে বলে? এর একক ও মাত্রা কী?",
        "answerBn": "নির্দিষ্ট দিকে বস্তুর অবস্থানের পরিবর্তনকে সরণ বলে। এর এসআই একক মিটার ($m$) এবং মাত্রা $[L]$।",
        "questionEn": "What is displacement? State its SI unit and dimension.",
        "answerEn": "Displacement is the change in position of an object in a specific direction. Its SI unit is meter (m) and dimension is [L]."
      },
      {
        "questionBn": "সরণ শূন্য হলেও কি দূরত্ব শূন্য নাও হতে পারে?",
        "answerBn": "হ্যাঁ, কোনো বস্তু যদি কোনো বিন্দু থেকে যাত্রা শুরু করে পুনরায় সেই বিন্দুতেই ফিরে আসে, তবে তার সরণ শূন্য হবে, কিন্তু মোট অতিক্রান্ত দূরত্ব শূন্য হবে না।",
        "questionEn": "Can displacement be zero when distance travelled is non-zero?",
        "answerEn": "Yes, if an object returns to its starting point after traversing any trajectory, its net displacement is zero while its distance is non-zero."
      }
    ]
  },
  {
    "id": "velocity",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "বেগ",
    "termEn": "Velocity",
    "pronunciationBn": "ভেলোসিটি",
    "symbol": "\\vec{v}",
    "definingEquation": "\\vec{v} = \\frac{d\\vec{r}}{dt} = \\frac{\\Delta\\vec{s}}{\\Delta t}",
    "siUnitBn": "$m/s$ (মিটার/সেকেন্ড)",
    "siUnitEn": "m/s (meter per second)",
    "cgsUnit": "cm/s",
    "dimensionalFormula": "[L T^{-1}]",
    "quantityType": "vector",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ২ (গতি)",
    "definitionBn": "নির্দিষ্ট দিকে সময়ের সাথে কোনো বস্তুর সরণের পরিবর্তনের হারকে বেগ বলে।",
    "definitionEn": "The time rate of change of position of an object in a specified direction.",
    "explanationBn": "বেগ একটি ভেক্টর রাশি যা নির্দেশ করে কোনো বস্তু কত দ্রুত এবং কোন অভিমুখে গতিশীল। দ্রুতি হলো বেগের পরম মান। কোনো বস্তুর বেগের পরিবর্তন দুইভাবে ঘটতে পারে: বেগের মানের পরিবর্তনের মাধ্যমে অথবা কেবল গতির দিক পরিবর্তনের মাধ্যমে (যেমন সুষম বৃত্তাকার গতিতে দ্রুতি স্থির থাকলেও প্রতি মুহূর্তে বেগের দিক পরিবর্তিত হয়)।",
    "explanationEn": "Velocity is a directional vector quantity specifying both the speed and direction of travel. Speed is the scalar magnitude of velocity. An object accelerates whenever its speed changes, its direction changes, or both.",
    "keyPointsBn": [
      "বেগের মান হলো দ্রুতি ($v = |\\vec{v}|$)।",
      "সুষম বৃত্তাকার গতিতে দ্রুতি ধ্রুব হলেও দিক পরিবর্তনের কারণে বেগ পরিবর্তনশীল।",
      "এসআই একক $m/s$, মাত্রিক সংকেত $[L T^{-1}]$।"
    ],
    "keyPointsEn": [
      "The magnitude of velocity is speed.",
      "Uniform circular motion has constant speed but changing velocity.",
      "SI unit is m/s; dimensional formula is [L T^-1]."
    ],
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "displacement",
      "acceleration",
      "momentum"
    ],
    "faqs": [
      {
        "questionBn": "বেগ কাকে বলে?",
        "answerBn": "সময়ের সাথে নির্দিষ্ট দিকে কোনো বস্তুর অবস্থানের পরিবর্তনের হারকে বেগ বলে। এটি একটি ভেক্টর রাশি।",
        "questionEn": "What is velocity?",
        "answerEn": "Velocity is the rate of change of displacement with respect to time."
      },
      {
        "questionBn": "দ্রুতি ও বেগের মধ্যে মূল পার্থক্য কী?",
        "answerBn": "দ্রুতি হলো যেকোনো দিকে অতিক্রান্ত দূরত্বের হার (স্কেলার রাশি), আর বেগ হলো একটি নির্দিষ্ট অভিমুখে সরণের হার (ভেক্টর রাশি)।",
        "questionEn": "What is the difference between speed and velocity?",
        "answerEn": "Speed is scalar representing path length over time, whereas velocity is a vector representing displacement over time."
      }
    ]
  },
  {
    "id": "acceleration",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "ত্বরণ",
    "termEn": "Acceleration",
    "pronunciationBn": "অ্যাক্সিলারেশন",
    "symbol": "\\vec{a}",
    "definingEquation": "\\vec{a} = \\frac{d\\vec{v}}{dt} = \\frac{\\vec{v} - \\vec{u}}{t}",
    "siUnitBn": "$m/s^2$ (মিটার/সেকেন্ড²)",
    "siUnitEn": "m/s^2 (meter per second squared)",
    "cgsUnit": "cm/s^2",
    "dimensionalFormula": "[L T^{-2}]",
    "quantityType": "vector",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ২ (গতি)",
    "definitionBn": "সময়ের সাথে কোনো বস্তুর বেগ বৃদ্ধির হারকে ত্বরণ বলে।",
    "definitionEn": "The rate at which the velocity of an object changes with respect to time.",
    "explanationBn": "যখন কোনো গতিশীল বস্তুর বেগ সময়ের সাথে বৃদ্ধি পায়, তখন তাকে ধনাত্মক ত্বরণ বা সাধারণভাবে ত্বরণ বলা হয়। পক্ষান্তরে সময়ের সাথে বেগ হ্রাস পাওয়ার হারকে ঋণাত্মক ত্বরণ বা মন্দন (Deceleration) বলে। অভিকর্ষ বলের প্রভাবে মুক্তভাবে পড়ন্ত বস্তুতে উৎপন্ন ত্বরণকে অভিকর্ষজ ত্বরণ ($g \\approx 9.8\\text{ m/s}^2$) বলা হয়।",
    "explanationEn": "Acceleration occurs whenever a body experiences a change in velocity magnitude or direction over time. Negative acceleration (velocity decreasing over time) is called retardation or deceleration. Free-falling bodies accelerate under Earth's gravitational pull at approximately 9.8 m/s^2.",
    "keyPointsBn": [
      "ত্বরণ = (শেষ বেগ - আদি বেগ) / সময়।",
      "ঋণাত্মক ত্বরণকে মন্দন (Deceleration) বলে।",
      "এসআই একক $m/s^2$, মাত্রা $[L T^{-2}]$।"
    ],
    "keyPointsEn": [
      "Acceleration = (final velocity - initial velocity) / time.",
      "Negative acceleration is termed deceleration or retardation.",
      "SI unit is m/s^2; dimension is [L T^-2]."
    ],
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "velocity",
      "force"
    ],
    "faqs": [
      {
        "questionBn": "ত্বরণ কাকে বলে? এর একক কী?",
        "answerBn": "সময়ের সাথে কোনো বস্তুর অসম বেগের বৃদ্ধির হারকে ত্বরণ বলে। এর এসআই একক মিটার/সেকেন্ড² ($m/s^2$)।",
        "questionEn": "What is acceleration and its unit?",
        "answerEn": "Acceleration is the rate of change of velocity per unit time. Its SI unit is m/s^2."
      },
      {
        "questionBn": "মন্দন বলতে কী বোঝায়?",
        "answerBn": "সময়ের সাথে কোনো বস্তুর বেগ হ্রাস পাওয়ার হারকে মন্দন বা ঋণাত্মক ত্বরণ বলে।",
        "questionEn": "What is deceleration?",
        "answerEn": "Deceleration is negative acceleration, representing the rate at which an object slows down over time."
      }
    ]
  },
  {
    "id": "force",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "বল",
    "termEn": "Force",
    "pronunciationBn": "ফোর্স",
    "symbol": "\\vec{F}",
    "definingEquation": "\\vec{F} = m\\vec{a} = \\frac{d\\vec{p}}{dt}",
    "siUnitBn": "$N$ (নিউটন) বা $kg\\cdot m/s^2$",
    "siUnitEn": "N (Newton) or kg*m/s^2",
    "cgsUnit": "dyn (ডাইন)",
    "dimensionalFormula": "[M L T^{-2}]",
    "quantityType": "vector",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ৩ (বল)",
    "definitionBn": "যা স্থির বস্তুর ওপর ক্রিয়া করে তাকে গতিশীল করে বা করতে চায়, অথবা গতিশীল বস্তুর ওপর ক্রিয়া করে তার গতির পরিবর্তন করে বা করতে চায়, তাকে বল বলে।",
    "definitionEn": "An external agency or interaction that changes or tends to change the state of rest or uniform motion of a body.",
    "explanationBn": "নিউটনের গতির দ্বিতীয় সূত্র অনুসারে বস্তুর ভরবেগের পরিবর্তনের হার তার ওপর প্রযুক্ত নেট বলের সমানুপাতিক এবং বল যেদিকে ক্রিয়া করে ভরবেগের পরিবর্তনও সেদিকে ঘটে ($F = ma$)। ১ নিউটন বল হলো সেই পরিমাণ বল যা ১ কেজি ভরের কোনো বস্তুতে প্রযুক্ত হয়ে ১ মিটার/সেকেন্ড² ত্বরণ সৃষ্টি করতে পারে। প্রকৃতিতে চারটি মৌলিক বল বিদ্যমান: মহাকর্ষ বল, তাড়িতচৌম্বক বল, সবল নিউক্লীয় বল এবং দুর্বল নিউক্লীয় বল।",
    "explanationEn": "According to Newton's second law, net force equals mass multiplied by acceleration (F = ma). 1 Newton is defined as the force required to accelerate a 1 kg mass at 1 m/s^2. In nature, all forces stem from four fundamental interactions: gravitational, electromagnetic, strong nuclear, and weak nuclear forces.",
    "keyPointsBn": [
      "নিউটনের ২য় সূত্র থেকে বলের সমীকরণ $F = ma$ প্রতিপাদিত হয়।",
      "১ নিউটন = $10^5$ ডাইন।",
      "বলের একক নিউটন ($N$), মাত্রিক সংকেত $[M L T^{-2}]$।"
    ],
    "keyPointsEn": [
      "Formulated mathematically via Newton's 2nd law as F = ma.",
      "1 N = 10^5 dynes.",
      "SI unit is Newton (N); dimension is [M L T^-2]."
    ],
    "mnemonicBn": "নিউটনের ৩টি গতিসূত্র: ১ম - জড়তা ও বলের সংজ্ঞা; ২য় - F = ma (বলের মান); ৩য় - ক্রিয়া ও প্রতিক্রিয়া সমান ও বিপরীত।",
    "mnemonicEn": "Newton's 3 laws: 1st - Inertia, 2nd - F = ma, 3rd - Action & Reaction",
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "momentum",
      "friction",
      "gravitation"
    ],
    "faqs": [
      {
        "questionBn": "১ নিউটন বল কাকে বলে?",
        "answerBn": "যে পরিমাণ বল ১ কেজি ভরের কোনো বস্তুর ওপর প্রযুক্ত হয়ে তাতে ১ মিটার/সেকেন্ড² ত্বরণ সৃষ্টি করতে পারে, তাকে ১ নিউটন ($1\\text{ N}$) বলে।",
        "questionEn": "Define 1 Newton of force.",
        "answerEn": "One Newton is the force that imparts an acceleration of 1 m/s^2 to a mass of 1 kg."
      },
      {
        "questionBn": "প্রকৃতির চারটি মৌলিক বল কী কী?",
        "answerBn": "প্রকৃতির চারটি মৌলিক বল হলো: ১. মহাকর্ষ বল, ২. তাড়িতচৌম্বক বল, ৩. সবল নিউক্লীয় বল এবং ৪. দুর্বল নিউক্লীয় বল।",
        "questionEn": "What are the four fundamental forces of nature?",
        "answerEn": "Gravitational force, electromagnetic force, strong nuclear force, and weak nuclear force."
      }
    ]
  },
  {
    "id": "momentum",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "ভরবেগ",
    "termEn": "Momentum",
    "pronunciationBn": "মোমেন্টাম",
    "symbol": "\\vec{p}",
    "definingEquation": "\\vec{p} = m\\vec{v}",
    "siUnitBn": "$kg\\cdot m/s$",
    "siUnitEn": "kg*m/s",
    "cgsUnit": "g*cm/s",
    "dimensionalFormula": "[M L T^{-1}]",
    "quantityType": "vector",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ৩ (বল)",
    "definitionBn": "কোনো গতিশীল বস্তুর ভর ও বেগের গুণফলকে তার ভরবেগ বলে।",
    "definitionEn": "The product of the mass and velocity of a moving object.",
    "explanationBn": "ভরবেগ নির্দেশ করে কোনো বস্তুর মধ্যে গতির কী পরিমাণ সঞ্চার হয়েছে। এটি একটি ভেক্টর রাশি যার দিক বেগের অভিমুখে হয়। বাইরে থেকে কোনো নেট বল প্রযুক্ত না হলে যেকোনো সংঘর্ষে বা মিথস্ক্রিয়ায় সামগ্রিক ভরবেগ সংরক্ষিত থাকে ($m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$), যাকে ভরবেগের নিত্যতা সূত্র বলা হয়।",
    "explanationEn": "Linear momentum measures the quantity of motion contained in an object. When no external unbalanced force acts upon a system, total linear momentum remains conserved before and after collisions.",
    "keyPointsBn": [
      "ভরবেগ = ভর × বেগ ($p = mv$)।",
      "বাইরের বল অনুপস্থিত থাকলে সিস্টেমের মোট ভরবেগ সংরক্ষিত থাকে।",
      "এসআই একক $kg\\cdot m/s$, মাত্রা $[M L T^{-1}]$।"
    ],
    "keyPointsEn": [
      "Momentum = mass * velocity (p = mv).",
      "Conserved in isolated systems according to the law of conservation of momentum.",
      "SI unit is kg*m/s; dimension is [M L T^-1]."
    ],
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "velocity",
      "force",
      "kinetic-energy"
    ],
    "faqs": [
      {
        "questionBn": "ভরবেগ কাকে বলে? এটি স্কেলার না ভেক্টর রাশি?",
        "answerBn": "কোনো বস্তুর ভর ও বেগের গুণফলকে ভরবেগ বলে ($p = mv$)। বেগ ভেক্টর হওয়ায় ভরবেগও একটি ভেক্টর রাশি।",
        "questionEn": "What is momentum? Is it scalar or vector?",
        "answerEn": "Momentum is the product of mass and velocity (p = mv). It is a vector quantity pointing in the direction of velocity."
      }
    ]
  },
  {
    "id": "friction",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "ঘর্ষণ",
    "termEn": "Friction",
    "pronunciationBn": "ফ্রিকশন",
    "symbol": "f \\text{ বা } f_s, f_k",
    "definingEquation": "f = \\mu R = \\mu mg",
    "siUnitBn": "$N$ (নিউটন)",
    "siUnitEn": "N (Newton)",
    "cgsUnit": "dyn",
    "dimensionalFormula": "[M L T^{-2}]",
    "quantityType": "vector",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ৩ (বল)",
    "definitionBn": "একটি বস্তু যখন অন্য একটি বস্তুর সংস্পর্শে থেকে গতিশীল হয় বা হতে চেষ্টা করে, তখন তাদের স্পর্শতলে গতির বিরুদ্ধে যে বাধার সৃষ্টি হয় তাকে ঘর্ষণ বলে।",
    "definitionEn": "A resistive force that opposes the relative motion or tendency of motion between two touching surfaces.",
    "explanationBn": "ঘর্ষণ মূলত পৃষ্ঠতলের আণুবীক্ষণিক অমসৃণতার ফলস্বরূপ সৃষ্টি হয়। ঘর্ষণ চার প্রকার: স্থিতি ঘর্ষণ, গতীয় ঘর্ষণ, আবর্ত ঘর্ষণ এবং প্রবাহী ঘর্ষণ। ঘর্ষণ ছাড়া আমরা রাস্তায় হাঁটতে পারতাম না, গাড়ি ব্রেক করে থামাতে পারত না কিংবা কোনো কিছু হাতে ধরে রাখা সম্ভব হতো না। আবার ঘর্ষণের ফলে যন্ত্রাংশ ক্ষয়প্রাপ্ত হয় এবং তাপ হিসেবে বিপুল শক্তি নষ্ট হয়। এজন্য ঘর্ষণকে পদার্থবিজ্ঞানে একটি 'প্রয়োজনীয় উপদ্রব' (Necessary Evil) বলা হয়।",
    "explanationEn": "Friction arises due to microscopic asperities interlocking across contact surfaces. It is categorized into static, kinetic, rolling, and fluid friction. While friction wastes mechanical energy as heat, it is indispensable for walking, braking vehicles, and grasping objects, making it a 'necessary evil'.",
    "keyPointsBn": [
      "ঘর্ষণ ৪ প্রকার: স্থিতি, গতীয়, আবর্ত ও প্রবাহী ঘর্ষণ।",
      "ঘর্ষণ বল স্পর্শতলের অভিলম্ব প্রতিক্রিয়ার সমানুপাতিক ($f = \\mu R$)।",
      "ঘর্ষণকে 'প্রয়োজনীয় উপদ্রব' বলা হয়।"
    ],
    "keyPointsEn": [
      "4 types of friction: static, kinetic, rolling, and fluid friction.",
      "Proportional to the normal contact force (f = mu * R).",
      "Referred to as a 'necessary evil' in applied mechanics."
    ],
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "force",
      "work"
    ],
    "faqs": [
      {
        "questionBn": "ঘর্ষণকে প্রয়োজনীয় উপদ্রব বলা হয় কেন?",
        "answerBn": "ঘর্ষণের কারণে যন্ত্রাংশ ক্ষয় হয় এবং তাপ হিসেবে শক্তি নষ্ট হয় (উপদ্রব); কিন্তু ঘর্ষণ না থাকলে হাঁটা, যানবাহন নিয়ন্ত্রণ বা কোনো কিছু ধরে রাখা অসম্ভব হতো (প্রয়োজনীয়)। তাই একে প্রয়োজনীয় উপদ্রব বলে।",
        "questionEn": "Why is friction called a necessary evil?",
        "answerEn": "It dissipates mechanical energy and wears down machine parts (an evil), yet it is indispensable for walking, gripping, and vehicle braking (necessary)."
      }
    ]
  },
  {
    "id": "gravitation",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "মহাকর্ষ",
    "termEn": "Gravitation",
    "pronunciationBn": "গ্র্যাভিটেশন",
    "symbol": "F_g \\text{ ও } G",
    "definingEquation": "F = G \\frac{m_1 m_2}{d^2}",
    "siUnitBn": "মহাকর্ষীয় ধ্রুবকের একক: $N\\cdot m^2/kg^2$",
    "siUnitEn": "Gravitational constant unit: N*m^2/kg^2",
    "cgsUnit": "dyn*cm^2/g^2",
    "dimensionalFormula": "[M^{-1} L^3 T^{-2}]",
    "quantityType": "vector",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ৩ (বল) / মহাকর্ষ ও অভিকর্ষ",
    "definitionBn": "এই মহাবিশ্বের যেকোনো দুটি বস্তুকণা তাদের ভরের কারণে একে অপরকে যে বল দ্বারা আকর্ষণ করে তাকে মহাকর্ষ বলে।",
    "definitionEn": "The universal attractive force mutually exerted between any two masses across spacetime.",
    "explanationBn": "স্যার আইজ্যাক নিউটনের সার্বজনীন মহাকর্ষ সূত্র অনুযায়ী, মহাবিশ্বের প্রতিটি বস্তুকণা একে অপরকে আকর্ষণ করে। এই আকর্ষণ বলের মান বস্তুকণাদ্বয়ের ভরের গুণফলের সমানুপাতিক, তাদের মধ্যকার দূরত্বের বর্গের ব্যস্তানুপাতিক এবং বলটি তাদের সংযোগকারী সরলরেখা বরাবর ক্রিয়া করে। মহাকর্ষীয় ধ্রুবক $G = 6.673 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$। পৃথিবীর সাথে অন্য কোনো বস্তুর আকর্ষণকে নির্দিষ্টভাবে 'অভিকর্ষ' (Gravity) বলা হয়।",
    "explanationEn": "Newton's law of universal gravitation states that every particle attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance separating them.",
    "keyPointsBn": [
      "মহাকর্ষীয় ধ্রুবক $G = 6.673 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$ একটি সর্বজনীন ধ্রুবক।",
      "বস্তুর ভর অপরিবর্তিত থাকে, কিন্তু দূরত্বের সাথে বল বর্গের ব্যস্তানুপাতে পরিবর্তিত হয়।",
      "পৃথিবী ও অন্য যেকোনো বস্তুর আকর্ষণ বলকে অভিকর্ষ বলে।"
    ],
    "keyPointsEn": [
      "Universal constant G = 6.673 * 10^-11 N*m^2/kg^2.",
      "Follows an inverse-square law with respect to separation distance.",
      "Attraction between Earth and an object is specifically called gravity."
    ],
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "force",
      "acceleration"
    ],
    "faqs": [
      {
        "questionBn": "মহাকর্ষ ও অভিকর্ষের মধ্যে পার্থক্য কী?",
        "answerBn": "মহাবিশ্বের যেকোনো দুটি বস্তুর মধ্যকার পারস্পরিক আকর্ষণ হলো মহাকর্ষ। আর দুটি বস্তুর একটি যদি পৃথিবী হয়, তবে তাদের মধ্যকার আকর্ষণকে অভিকর্ষ বলে।",
        "questionEn": "What is the difference between gravitation and gravity?",
        "answerEn": "Gravitation is the attractive force between any two masses in the universe. Gravity specifically denotes the gravitational pull between Earth and another body."
      }
    ]
  },
  {
    "id": "work",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "কাজ",
    "termEn": "Work",
    "pronunciationBn": "ওয়ার্ক",
    "symbol": "W",
    "definingEquation": "W = \\vec{F} \\cdot \\vec{s} = F s \\cos\\theta",
    "siUnitBn": "$J$ (জুল) বা $N\\cdot m$",
    "siUnitEn": "J (Joule) or N*m",
    "cgsUnit": "erg (আর্গ)",
    "dimensionalFormula": "[M L^2 T^{-2}]",
    "quantityType": "scalar",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ৪ (কাজ, ক্ষমতা ও শক্তি)",
    "definitionBn": "কোনো বস্তুর ওপর বল প্রযুক্ত হয়ে যদি বলের অভিমুখে বস্তুর সরণ ঘটে, তবে প্রযুক্ত বল ও বলের অভিমুখে সরণের উপাংশের গুণফলকে কাজ বলে।",
    "definitionEn": "The scalar product of the applied force vector and the displacement vector.",
    "explanationBn": "পদার্থবিজ্ঞানের দৃষ্টিতে কেবল বল প্রয়োগ করলেই কাজ হয় না; বলের ফলে সরণ ঘটতে হবে। বল ও সরণের মধ্যবর্তী কোণ $\\theta$ হলে কাজ $W = F s \\cos\\theta$। কোণ $\\theta = 0^\\circ$ হলে ধনাত্মক কাজ সর্বোচ্চ হয়। কিন্তু যদি বল ও সরণ পরস্পর লম্ব হয় ($\\theta = 90^\\circ$), যেমন সুষম বৃত্তাকার গতিতে কেন্দ্রমুখী বলের ক্ষেত্রে, তখন কাজ শূন্য ($W = 0$) হয়—একে কাজহীন বল (No-work force) বলা হয়।",
    "explanationEn": "In physics, work requires displacement along or against the direction of the applied force. If force and displacement are perpendicular (theta = 90 deg), work done is zero (termed a no-work force, such as centripetal force in circular orbits).",
    "keyPointsBn": [
      "কাজ একটি স্কেলার রাশি।",
      "বলের দিকে সরণ হলে ধনাত্মক কাজ, বিপরীত দিকে হলে ঋণাত্মক কাজ।",
      "বল ও সরণের মধ্যবর্তী কোণ ৯০° হলে কোনো কাজ হয় না ($W=0$, কাজহীন বল)।",
      "১ জুল = $10^7$ আর্গ।"
    ],
    "keyPointsEn": [
      "Work is a scalar quantity.",
      "Positive when motion aligns with force, negative when opposing.",
      "Zero work when force is perpendicular to displacement (theta = 90 deg).",
      "1 Joule = 10^7 ergs."
    ],
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "power",
      "kinetic-energy",
      "potential-energy"
    ],
    "faqs": [
      {
        "questionBn": "১ জুল কাজ কাকে বলে?",
        "answerBn": "কোনো বস্তুর ওপর ১ নিউটন বল প্রয়োগের ফলে যদি বলের দিকে বস্তুর ১ মিটার সরণ ঘটে, তবে সম্পন্ন কাজের পরিমাণকে ১ জুল ($1\\text{ J}$) বলে।",
        "questionEn": "Define 1 Joule of work.",
        "answerEn": "One Joule is the work done when an applied force of 1 Newton causes a displacement of 1 meter in the direction of the force."
      },
      {
        "questionBn": "কাজহীন বল কাকে বলে? একটি উদাহরণ দাও।",
        "answerBn": "বল ও সরণের মধ্যবর্তী কোণ ৯০° হলে কৃতকাজ শূন্য হয়, এই বলকে কাজহীন বল বলে। যেমন: পৃথিবী সূর্যের চারদিকে ঘোরার সময় মহাকর্ষ বল কোনো কাজ করে না।",
        "questionEn": "What is a no-work force? Give an example.",
        "answerEn": "When applied force is perpendicular to displacement, work done is zero. Earth orbiting the Sun under centripetal gravity is a classic example."
      }
    ]
  },
  {
    "id": "kinetic-energy",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "গতিশক্তি",
    "termEn": "Kinetic Energy",
    "pronunciationBn": "কাইনেটিক এনার্জি",
    "symbol": "E_k \\text{ বা } K",
    "definingEquation": "E_k = \\frac{1}{2}mv^2 = \\frac{p^2}{2m}",
    "siUnitBn": "$J$ (জুল)",
    "siUnitEn": "J (Joule)",
    "cgsUnit": "erg",
    "dimensionalFormula": "[M L^2 T^{-2}]",
    "quantityType": "scalar",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ৪ (কাজ, ক্ষমতা ও শক্তি)",
    "definitionBn": "কোনো গতিশীল বস্তু তার গতির কারণে কাজ করার যে সামর্থ্য অর্জন করে, তাকে তার গতিশক্তি বলে।",
    "definitionEn": "The energy possessed by an object due to its motion, defined as half the product of mass and the square of velocity.",
    "explanationBn": "স্থির অবস্থান থেকে কোনো বস্তুর বেগ $v$-তে পৌঁছাতে তার ওপর যে পরিমাণ নেট কাজ সম্পন্ন হয়, তা-ই বস্তুতে গতিশক্তি হিসেবে জমা হয়। কাজ-শক্তি উপপাদ্য (Work-Energy Theorem) অনুসারে, বস্তুর ওপর প্রযুক্ত মোট কাজ তার গতিশক্তির পরিবর্তনের সমান ($W = \\Delta E_k$)। গতিশক্তি বেগের বর্গের সমানুপাতিক ($E_k \\propto v^2$); ফলে বেগ দ্বিগুণ করলে গতিশক্তি চারগুণ বৃদ্ধি পায়।",
    "explanationEn": "Kinetic energy is the work needed to accelerate a body of a given mass from rest to its stated velocity. According to the work-energy theorem, net work done equals the change in kinetic energy. Because KE scales quadratically with velocity, doubling speed quadruples kinetic energy.",
    "keyPointsBn": [
      "গতিশক্তি সমীকরণ: $E_k = \\frac{1}{2}mv^2$ বা $E_k = \\frac{p^2}{2m}$।",
      "গতিশক্তি সর্বদা ধনাত্মক স্কেলার রাশি।",
      "বেগ দ্বিগুণ করলে গতিশক্তি ৪ গুণ হয়।"
    ],
    "keyPointsEn": [
      "Formula: Ek = 1/2 * m * v^2 or p^2 / (2m).",
      "Kinetic energy is strictly non-negative.",
      "Doubling speed increases kinetic energy by a factor of 4."
    ],
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "momentum",
      "work",
      "potential-energy"
    ],
    "faqs": [
      {
        "questionBn": "গতিশক্তি ও ভরবেগের মধ্যে সম্পর্ক কী?",
        "answerBn": "গতিশক্তি ($E_k$) এবং ভরবেগ ($p$)-এর মধ্যে সম্পর্ক হলো: $E_k = \\frac{p^2}{2m}$ বা $p = \\sqrt{2m E_k}$।",
        "questionEn": "What is the relation between kinetic energy and momentum?",
        "answerEn": "Kinetic energy Ek and momentum p are related by Ek = p^2 / (2m)."
      }
    ]
  },
  {
    "id": "potential-energy",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "বিভব শক্তি",
    "termEn": "Potential Energy",
    "pronunciationBn": "পটেনশিয়াল এনার্জি",
    "symbol": "E_p \\text{ বা } U",
    "definingEquation": "E_p = mgh \\text{ (অভিকর্ষীয়) বা } \\frac{1}{2}kx^2 \\text{ (স্প্রিং)}",
    "siUnitBn": "$J$ (জুল)",
    "siUnitEn": "J (Joule)",
    "cgsUnit": "erg",
    "dimensionalFormula": "[M L^2 T^{-2}]",
    "quantityType": "scalar",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ৪ (কাজ, ক্ষমতা ও শক্তি)",
    "definitionBn": "স্বাভাবিক অবস্থান বা আকৃতি থেকে পরিবর্তন করে কোনো বস্তুকে অন্য কোনো অবস্থান বা আকৃতিতে আনলে বস্তু কাজ করার যে সামর্থ্য অর্জন করে তাকে বিভব শক্তি বলে।",
    "definitionEn": "The stored energy of a body resulting from its relative position in a force field or its internal elastic deformation.",
    "explanationBn": "অভিকর্ষের বিপরীতে কোনো বস্তুকে ভূপৃষ্ঠ থেকে $h$ উচ্চতায় তুললে কৃতকাজ বিভব শক্তি হিসেবে সঞ্চিত হয় ($E_p = mgh$)। অনুরূপভাবে স্প্রিংকে প্রসারিত বা সংকুচিত করলে স্থিতিস্থাপক বিভব শক্তি ($E_p = \\frac{1}{2}kx^2$) সঞ্চিত হয়। শক্তি সংরক্ষণশীলতার নিয়মে মুক্তভাবে পড়ন্ত বস্তুর শীর্ষবিন্দুতে বিভব শক্তি সর্বোচ্চ এবং ভূমিতে স্পর্শের ঠিক পূর্বমুহূর্তে তা সম্পূর্ণ গতিশক্তিতে রূপান্তরিত হয়।",
    "explanationEn": "Gravitational potential energy equals mgh when lifted through height h against gravity. Elastic potential energy stored in an ideal spring deformed by distance x equals 1/2*k*x^2. In isolated conservative systems, potential energy converts reversibly into kinetic energy.",
    "keyPointsBn": [
      "ভূপৃষ্ঠে অভিকর্ষীয় বিভব শক্তি সাধারণত শূন্য ধরা হয়।",
      "উচ্চতা বৃদ্ধিতে বিভব শক্তি বাড়ে ($E_p = mgh$)।",
      "স্প্রিং-এর সঞ্চিত বিভব শক্তি: $E_p = \\frac{1}{2}kx^2$।"
    ],
    "keyPointsEn": [
      "Gravitational potential energy is commonly referenced as zero at ground level.",
      "Increases linearly with elevation (Ep = mgh).",
      "Stored elastic spring energy is Ep = 1/2 * k * x^2."
    ],
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "work",
      "kinetic-energy"
    ],
    "faqs": [
      {
        "questionBn": "বিভব শক্তি কাকে বলে?",
        "answerBn": "বস্তুর স্বাভাবিক অবস্থান বা আকৃতির পরিবর্তনের কারণে তার ভেতরে যে কাজ করার সামর্থ্য জমা হয়, তাকে বিভব শক্তি বলে।",
        "questionEn": "What is potential energy?",
        "answerEn": "Potential energy is stored energy resulting from position in a force field or physical deformation."
      }
    ]
  },
  {
    "id": "power",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "ক্ষমতা",
    "termEn": "Power",
    "pronunciationBn": "পাওয়ার",
    "symbol": "P",
    "definingEquation": "P = \\frac{dW}{dt} = \\frac{W}{t} = \\vec{F} \\cdot \\vec{v}",
    "siUnitBn": "$W$ (ওয়াট) বা $J/s$",
    "siUnitEn": "W (Watt) or J/s",
    "cgsUnit": "erg/s",
    "dimensionalFormula": "[M L^2 T^{-3}]",
    "quantityType": "scalar",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ৪ (কাজ, ক্ষমতা ও শক্তি)",
    "definitionBn": "কোনো ব্যক্তি বা উৎসের কাজ করার সময়ভিত্তিক হারকে ক্ষমতা বলে।",
    "definitionEn": "The rate at which work is done or energy is transferred per unit of time.",
    "explanationBn": "ক্ষমতা নির্দেশ করে কোনো কাজ কত দ্রুত সম্পন্ন হচ্ছে। ১ সেকেন্ডে ১ জুল কাজ সম্পন্ন হলে তার ক্ষমতাকে ১ ওয়াট ($1\\text{ W}$) বলা হয়। প্রকৌশলে ক্ষমতার অপর একটি বহুল-ব্যবহৃত একক হলো অশ্বক্ষমতা (Horsepower বা HP)। ১ অশ্বক্ষমতা = ৭৪৬ ওয়াট ($1\\text{ HP} = 746\\text{ W}$)। ইঞ্জিনের লভ্য কার্যকর ক্ষমতা ও প্রদত্ত মোট ক্ষমতার অনুপাতকে কর্মদক্ষতা (Efficiency, $\\eta$) বলে।",
    "explanationEn": "Power measures how quickly work is produced. 1 Watt represents 1 Joule of work done per second. Another practical industrial unit is horsepower, where 1 HP = 746 Watts. The ratio of useful power output to total power input defines mechanical efficiency.",
    "keyPointsBn": [
      "ক্ষমতা = কাজ / সময় ($P = W/t$) বা বল × বেগ ($P = Fv$)।",
      "১ ওয়াট = ১ জুল/সেকেন্ড।",
      "১ অশ্বক্ষমতা (HP) = ৭৪৬ ওয়াট ($1\\text{ HP} = 746\\text{ W}$)।"
    ],
    "keyPointsEn": [
      "Power = Work / Time (P = W/t) or Force * Velocity (P = Fv).",
      "1 Watt = 1 Joule per second.",
      "1 Horsepower (HP) = 746 Watts."
    ],
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "work",
      "kinetic-energy"
    ],
    "faqs": [
      {
        "questionBn": "১ ওয়াট ক্ষমতা কাকে বলে? ১ অশ্বক্ষমতা সমান কত ওয়াট?",
        "answerBn": "১ সেকেন্ডে ১ জুল কাজ করার ক্ষমতাকে ১ ওয়াট বলে। ১ অশ্বক্ষমতা ($1\\text{ HP}$) সমান ৭৪৬ ওয়াট।",
        "questionEn": "Define 1 Watt. How many Watts equal 1 Horsepower?",
        "answerEn": "One Watt is one Joule of energy transferred per second. 1 Horsepower equals 746 Watts."
      }
    ]
  },
  {
    "id": "pressure",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "চাপ",
    "termEn": "Pressure",
    "pronunciationBn": "প্রেশার",
    "symbol": "P",
    "definingEquation": "P = \\frac{F}{A} \\text{ এবং তরলে } P = h\\rho g",
    "siUnitBn": "$Pa$ (প্যাসকেল) বা $N/m^2$",
    "siUnitEn": "Pa (Pascal) or N/m^2",
    "cgsUnit": "Ba (ব্যারি)",
    "dimensionalFormula": "[M L^{-1} T^{-2}]",
    "quantityType": "scalar",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ৫ (পদার্থের অবস্থা ও চাপ)",
    "definitionBn": "কোনো তলের একক ক্ষেত্রফলের ওপর লম্বভাবে প্রযুক্ত বলকে চাপ বলে।",
    "definitionEn": "The perpendicular compressive force applied per unit surface area of an object.",
    "explanationBn": "একই পরিমাণ বল যদি অপেক্ষাকৃত ক্ষুদ্র ক্ষেত্রফলে প্রযুক্ত হয় তবে চাপের মান অনেক বৃদ্ধি পায় (যেমন: ধারালো ছুরির প্রান্ত সহজে কেটে যায় কারণ ক্ষেত্রফল খুব কম থাকায় চাপ অনেক বেশি হয়)। স্থির তরলের অভ্যন্তরে $h$ গভীরতায় তরলের চাপ $P = h\\rho g$, যা তরলের গভীরতা ও ঘনত্বের ওপর সরাসরি নির্ভর করে। ১ প্যাসকেল হলো ১ বর্গমিটার ক্ষেত্রফলের ওপর ১ নিউটন বল লম্বভাবে প্রযুক্ত হলে উৎপন্ন চাপ।",
    "explanationEn": "Pressure is inversely proportional to contact area for a constant force. In static fluids, pressure at depth h is given by P = h*rho*g, depending exclusively on depth, fluid density, and gravitational acceleration.",
    "keyPointsBn": [
      "চাপ = বল / ক্ষেত্রফল ($P = F/A$)।",
      "তরলের অভ্যন্তরে চাপ: $P = h\\rho g$।",
      "এসআই একক প্যাসকেল ($Pa$), মাত্রা $[M L^{-1} T^{-2}]$।"
    ],
    "keyPointsEn": [
      "Pressure = Force / Area (P = F/A).",
      "Hydrostatic pressure at depth h is P = h*rho*g.",
      "SI unit is Pascal (Pa); dimension is [M L^-1 T^-2]."
    ],
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "force",
      "density",
      "archimedes-principle"
    ],
    "faqs": [
      {
        "questionBn": "১ প্যাসকেল চাপ কাকে বলে?",
        "answerBn": "১ বর্গমিটার ক্ষেত্রফলের ওপর লম্বভাবে ১ নিউটন বল প্রযুক্ত হলে যে চাপ অনুভূত হয়, তাকে ১ প্যাসকেল ($1\\text{ Pa}$) বলে।",
        "questionEn": "Define 1 Pascal of pressure.",
        "answerEn": "One Pascal is the pressure exerted by a normal force of 1 Newton uniformly over an area of 1 square meter."
      }
    ]
  },
  {
    "id": "density",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "ঘনত্ব",
    "termEn": "Density",
    "pronunciationBn": "ডেনসিটি",
    "symbol": "\\rho \\text{ (রো)}",
    "definingEquation": "\\rho = \\frac{m}{V}",
    "siUnitBn": "$kg/m^3$ (কেজি/মিটার³)",
    "siUnitEn": "kg/m^3",
    "cgsUnit": "g/cm^3",
    "dimensionalFormula": "[M L^{-3}]",
    "quantityType": "scalar",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ৫ (পদার্থের অবস্থা ও চাপ)",
    "definitionBn": "কোনো বস্তুর একক আয়তনের ভরকে তার উপাদানের ঘনত্ব বলে।",
    "definitionEn": "The volumetric mass density of a substance, defined as mass divided by volume.",
    "explanationBn": "ঘনত্ব বস্তুর অভ্যন্তরীণ উপাদানের একটি সহজাত বৈশিষ্ট্য। ৪° সেলসিয়াস তাপমাত্রায় বিশুদ্ধ পানির ঘনত্ব সর্বোচ্চ ($1000\\text{ kg/m}^3$ বা $1\\text{ g/cm}^3$)। কোনো বস্তু পানিতে ভাসবে নাকি ডুববে তা ঘনত্বের ওপর নির্ভর করে: তরলের চেয়ে কম ঘনত্বের বস্তু ভেসে থাকে আর বেশি ঘনত্বের বস্তু ডুবে যায়।",
    "explanationEn": "Density is an intrinsic property characterizing how tightly matter is packed. Pure water exhibits its peak density of 1000 kg/m^3 (1 g/cm^3) at 4 degrees Celsius. Flotation depends entirely on relative density.",
    "keyPointsBn": [
      "ঘনত্ব = ভর / আয়তন ($\\rho = m/V$)।",
      "৪°C-এ পানির ঘনত্ব $1000\\text{ kg/m}^3$ বা $1\\text{ g/cm}^3$।",
      "এসআই একক $kg/m^3$, মাত্রা $[M L^{-3}]$।"
    ],
    "keyPointsEn": [
      "Density = Mass / Volume (rho = m/V).",
      "Density of water peaks at 4 deg C at 1000 kg/m^3.",
      "SI unit is kg/m^3; dimension is [M L^-3]."
    ],
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "pressure",
      "archimedes-principle"
    ],
    "faqs": [
      {
        "questionBn": "পানির ঘনত্ব ৪° সেলসিয়াসে সর্বোচ্চ কেন?",
        "answerBn": "পানির ব্যতিক্রমী প্রসারণের কারণে ০°C থেকে ৪°C পর্যন্ত উত্তপ্ত করলে পানি সংকুচিত হয়ে আয়তন সর্বনিম্ন হয়, ফলে ৪°C-এ ঘনত্ব সর্বোচ্চ ($1000\\text{ kg/m}^3$) হয়।",
        "questionEn": "Why is water density maximum at 4 degrees Celsius?",
        "answerEn": "Due to anomalous expansion, water contracts between 0 deg C and 4 deg C to reach minimum volume, yielding maximum density at 4 deg C."
      }
    ]
  },
  {
    "id": "archimedes-principle",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "আর্কিমিডিসের নীতি ও প্লবতা",
    "termEn": "Archimedes' Principle & Buoyancy",
    "pronunciationBn": "আর্কিমিডিস প্রিন্সিপল অ্যান্ড বুয়ান্সি",
    "symbol": "F_B \\text{ বা } B",
    "definingEquation": "F_B = V\\rho g = W_{\\text{displaced}}",
    "siUnitBn": "$N$ (নিউটন)",
    "siUnitEn": "N (Newton)",
    "cgsUnit": "dyn",
    "dimensionalFormula": "[M L T^{-2}]",
    "quantityType": "vector",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ৫ (পদার্থের অবস্থা ও চাপ)",
    "definitionBn": "কোনো বস্তুকে স্থির তরল বা বায়বীয় পদার্থে আংশিক বা সম্পূর্ণ নিমজ্জিত করলে বস্তুটি কিছুটা ওজন হারায় বলে মনে হয়; এই আপাত হারানো ওজন বস্তুটি দ্বারা অপসারিত তরলের ওজনের সমান।",
    "definitionEn": "An upward buoyant force is exerted on a body immersed in a fluid, equal to the weight of the fluid that the body displaces.",
    "explanationBn": "তরলে নিমজ্জিত কোনো বস্তুর ওপর তরল পদার্থ যে ঊর্ধ্বমুখী লব্ধি বল প্রয়োগ করে তাকে প্লবতা (Buoyant Force) বলে। আর্কিমিডিসের নীতি অনুযায়ী, প্লবতার মান অপসারিত তরলের ওজনের সমান ($F_B = V\\rho g$)। কোনো বস্তুর ওজন যদি অপসারিত তরলের ওজনের চেয়ে বেশি হয় তবে বস্তু ডুবে যাবে; সমান হলে নিমজ্জিত অবস্থায় ভাসবে এবং কম হলে আংশিক ভেসে থাকবে।",
    "explanationEn": "The net upward hydrostatic force exerted by a fluid on an immersed body is buoyancy. Archimedes' principle asserts that buoyancy equals the weight of displaced fluid (F_B = V*rho*g).",
    "keyPointsBn": [
      "প্লবতা = অপসারিত তরলের আয়তন × তরলের ঘনত্ব × অভিকর্ষজ ত্বরণ ($V\\rho g$)।",
      "বস্তুর ভাসন ও নিমজ্জনের শর্ত আর্কিমিডিসের নীতি দ্বারা ব্যাখ্যা করা যায়।",
      "ভারী লোহার জাহাজ জলে ভাসে কারণ তার নিমজ্জিত অংশের অপসারিত পানির ওজন জাহাজের মোট ওজনের চেয়ে বেশি।"
    ],
    "keyPointsEn": [
      "Buoyant force = Volume displaced * fluid density * g.",
      "Determines laws of floatation and sinking.",
      "Heavy steel ships float because displaced water weight balances total ship weight."
    ],
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "density",
      "pressure"
    ],
    "faqs": [
      {
        "questionBn": "প্লবতা কাকে বলে?",
        "answerBn": "কোনো বস্তুকে কোনো তরল বা বায়বীয় পদার্থে নিমজ্জিত করলে বস্তুটির ওপর তরল যে ঊর্ধ্বমুখী লব্ধি বল প্রয়োগ করে তাকে প্লবতা বলে।",
        "questionEn": "What is Buoyancy?",
        "answerEn": "Buoyancy is the upward force exerted by a fluid that opposes the weight of an immersed object."
      }
    ]
  },
  {
    "id": "refractive-index",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "প্রতিসরণাঙ্ক",
    "termEn": "Refractive Index",
    "pronunciationBn": "রিফ্র্যাক্টিভ ইনডেক্স",
    "symbol": "n \\text{ বা } \\mu",
    "definingEquation": "n = \\frac{c}{v} = \\frac{\\sin i}{\\sin r}",
    "siUnitBn": "এককবিহীন (Dimensionless)",
    "siUnitEn": "Dimensionless",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "dimensionless",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ৯ (আলোর প্রতিসরণ)",
    "definitionBn": "শূন্য মাধ্যমে আলোর বেগ এবং নির্দিষ্ট মাধ্যমে আলোর বেগের অনুপাতকে ওই মাধ্যমের পরম প্রতিসরণাঙ্ক বলে।",
    "definitionEn": "The dimensionless ratio of the speed of light in vacuum to its phase velocity in a given optical medium.",
    "explanationBn": "স্নেলের সূত্র অনুযায়ী এক স্বচ্ছ মাধ্যম থেকে অন্য মাধ্যমে আলো প্রতিসরিত হওয়ার সময় আপতন কোণের সাইন ও প্রতিসরণ কোণের সাইনের অনুপাত একটি ধ্রুব সংখ্যা, যা দ্বিতীয় মাধ্যমের প্রতিসরণাঙ্ক প্রকাশ করে ($n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$)। যেমন: পানির প্রতিসরণাঙ্ক ১.৩৩ এবং কাচের প্রতিসরণাঙ্ক ১.৫২। যে মাধ্যমের প্রতিসরণাঙ্ক যত বেশি, সেই মাধ্যমে আলো তত ধীরগতিতে চলে।",
    "explanationEn": "Refractive index indicates how much the optical path bends and how light decelerates inside a medium. Snell's law governs refraction across optical boundaries as n1*sin(theta1) = n2*sin(theta2).",
    "keyPointsBn": [
      "প্রতিসরণাঙ্ক $n = c/v$ (শূন্যে বেগ / মাধ্যমে বেগ)।",
      "এটি দুটি একই জাতীয় রাশির অনুপাত বিধায় এর কোনো একক বা মাত্রা নেই।",
      "প্রতিসরণাঙ্ক বেশি হলে মাধ্যমটি আলোকীয়ভাবে ঘন।"
    ],
    "keyPointsEn": [
      "Refractive index n = c / v.",
      "Dimensionless ratio with no physical units.",
      "Higher refractive index implies an optically denser medium."
    ],
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "velocity"
    ],
    "faqs": [
      {
        "questionBn": "পানির প্রতিসরণাঙ্ক ১.৩৩ বলতে কী বোঝায়?",
        "answerBn": "পানির প্রতিসরণাঙ্ক ১.৩৩ বলতে বোঝায় শূন্য মাধ্যমে আলোর বেগ এবং পানিতে আলোর বেগের অনুপাত ১.৩৩, অর্থাৎ পানিতে আলো প্রায় ১.৩৩ গুণ ধীরে চলে।",
        "questionEn": "What does a water refractive index of 1.33 mean?",
        "answerEn": "It means light travels 1.33 times slower in water than in a vacuum."
      }
    ]
  },
  {
    "id": "electric-potential",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "তড়িৎ বিভব",
    "termEn": "Electric Potential",
    "pronunciationBn": "ইলেকট্রিক পটেনশিয়াল",
    "symbol": "V",
    "definingEquation": "V = \\frac{W}{q} = k\\frac{Q}{r}",
    "siUnitBn": "$V$ (ভোল্ট) বা $J/C$",
    "siUnitEn": "V (Volt) or J/C",
    "cgsUnit": "statV (স্ট্যাটভোল্ট)",
    "dimensionalFormula": "[M L^2 T^{-3} I^{-1}]",
    "quantityType": "scalar",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ১০ (স্থির তড়িৎ) ও ১১ (চল তড়িৎ)",
    "definitionBn": "অসীম দূরত্ব থেকে প্রতি একক ধনাত্মক আধানকে তড়িৎক্ষেত্রের কোনো নির্দিষ্ট বিন্দুতে আনতে যে পরিমাণ কাজ সম্পন্ন হয়, তাকে ওই বিন্দুর তড়িৎ বিভব বলে।",
    "definitionEn": "The electric potential energy per unit electric charge at a designated point in an electrostatic field.",
    "explanationBn": "তড়িৎ বিভব হলো তড়িৎক্ষেত্রের একটি বিন্দুর তড়িৎগত অবস্থা যা নির্দেশ করে অন্য বস্তুর সংস্পর্শে এলে আধানের আদান-প্রদান কোন দিকে ঘটবে। আধান সর্বদা উচ্চ বিভব থেকে নিম্ন বিভবের দিকে প্রবাহিত হয়। দুটি বিন্দুর মধ্যে বিভব পার্থক্য ($V = V_A - V_B$) থাকলেই কেবল পরিবাহীর মধ্য দিয়ে তড়িৎ প্রবাহ চালিত হতে পারে।",
    "explanationEn": "Electric potential dictates the direction of spontaneous charge flow, moving positive charge from higher to lower potentials. A voltage difference between conductors drives electrical current across circuits.",
    "keyPointsBn": [
      "তড়িৎ বিভব = কৃতকাজ / আধান ($V = W/q$)।",
      "১ ভোল্ট = ১ জুল / ১ কুলম্ব।",
      "তড়িৎ প্রবাহের জন্য বিভব পার্থক্য অপরিহার্য।"
    ],
    "keyPointsEn": [
      "Electric Potential = Work / Charge (V = W/q).",
      "1 Volt = 1 Joule per Coulomb.",
      "Potential difference drives electric current."
    ],
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "resistance",
      "work"
    ],
    "faqs": [
      {
        "questionBn": "১ ভোল্ট বিভব কাকে বলে?",
        "answerBn": "অসীম দূরত্ব থেকে ১ কুলম্ব ধনাত্মক আধানকে তড়িৎক্ষেত্রের কোনো বিন্দুতে আনতে যদি ১ জুল কাজ করতে হয়, তবে ওই বিন্দুর বিভবকে ১ ভোল্ট বলে।",
        "questionEn": "Define 1 Volt.",
        "answerEn": "One Volt is the electric potential when 1 Joule of work moves a charge of 1 Coulomb from infinity."
      }
    ]
  },
  {
    "id": "resistance",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "বৈদ্যুতিক রোধ",
    "termEn": "Electrical Resistance",
    "pronunciationBn": "রেজিস্ট্যান্স",
    "symbol": "R",
    "definingEquation": "R = \\frac{V}{I} = \\rho \\frac{L}{A}",
    "siUnitBn": "$\\Omega$ (ওহম)",
    "siUnitEn": "Ohm (\\Omega)",
    "cgsUnit": "stat\\Omega",
    "dimensionalFormula": "[M L^2 T^{-3} I^{-2}]",
    "quantityType": "scalar",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ১১ (চল তড়িৎ)",
    "definitionBn": "পরিবাহীর যে ধর্মের জন্য এর মধ্য দিয়ে তড়িৎ প্রবাহ বাধাগ্রস্ত হয়, তাকে রোধ বলে।",
    "definitionEn": "The measure of opposition to the flow of electric current through an electrical conductor.",
    "explanationBn": "ওহমের সূত্র অনুসারে নির্দিষ্ট তাপমাত্রায় পরিবাহীর দুই প্রান্তের বিভব পার্থক্য ও প্রবাহের অনুপাত একটি ধ্রুবক, যা রোধ ($R = V/I$) প্রকাশ করে। পরিবাহীর রোধ ৪টি বিষয়ের ওপর নির্ভর করে: তারের দৈর্ঘ্য ($R \\propto L$), প্রস্থচ্ছেদের ক্ষেত্রফল ($R \\propto 1/A$), উপাদান (আপেক্ষিক রোধ $\\rho$) এবং তাপমাত্রা। দৈর্ঘ্য বৃদ্ধি পেলে রোধ বাড়ে, কিন্তু তার মোটা হলে রোধ কমে যায়।",
    "explanationEn": "Electrical resistance arises as conducting electrons collide with lattice ions. By Ohm's law, R = V/I. Resistance scales directly with wire length and inversely with cross-sectional area as R = rho * L / A.",
    "keyPointsBn": [
      "ওহমের সূত্র: $V = IR$ বা $R = V/I$।",
      "তারের রোধের নির্ভরতা সূত্র: $R = \\rho \\frac{L}{A}$।",
      "তাপমাত্রা বাড়লে ধাতব পরিবাহীর রোধ বৃদ্ধি পায়।"
    ],
    "keyPointsEn": [
      "Ohm's Law: V = IR or R = V/I.",
      "Resistance geometry formula: R = rho * L / A.",
      "Resistance of metallic conductors increases with rising temperature."
    ],
    "mnemonicBn": "ওহমস ল ট্রায়াঙ্গল: V উপরে, নিচে I এবং R (ভোল্টেজ = কারেন্ট × রোধ)",
    "mnemonicEn": "V = I * R (Voltage = Current * Resistance)",
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "electric-potential",
      "power"
    ],
    "faqs": [
      {
        "questionBn": "১ ওহম রোধ কাকে বলে?",
        "answerBn": "কোনো পরিবাহীর দুই প্রান্তে ১ ভোল্ট বিভব পার্থক্য প্রয়োগ করলে যদি তার মধ্য দিয়ে ১ অ্যাম্পিয়ার তড়িৎ প্রবাহিত হয়, তবে ওই পরিবাহীর রোধকে ১ ওহম ($1\\text{ }\\Omega$) বলে।",
        "questionEn": "Define 1 Ohm of resistance.",
        "answerEn": "One Ohm is the resistance between two points when 1 Volt potential difference produces 1 Ampere current."
      }
    ]
  },
  {
    "id": "planck-constant",
    "subjectId": "physics",
    "subjectNameBn": "পদার্থবিজ্ঞান",
    "subjectNameEn": "Physics",
    "termBn": "প্লাঙ্কের ধ্রুবক",
    "termEn": "Planck Constant",
    "pronunciationBn": "প্ল্যাঙ্ক কনস্ট্যান্ট",
    "symbol": "h",
    "definingEquation": "E = h\\nu = \\frac{hc}{\\lambda}",
    "siUnitBn": "$J\\cdot s$ (জুল-সেকেন্ড)",
    "siUnitEn": "J*s (Joule-second)",
    "cgsUnit": "erg*s",
    "dimensionalFormula": "[M L^2 T^{-1}]",
    "quantityType": "constant",
    "curriculum": "NCTB পদার্থবিজ্ঞান অধ্যায় ১৩ (আধুনিক পদার্থবিজ্ঞান) / কোয়ান্টাম তত্ত্ব",
    "definitionBn": "আলো বা তড়িৎচৌম্বকীয় বিকিরণের একটি ফোটনের শক্তি এবং তার কম্পাঙ্কের মধ্যকার সমানুপাতিক মৌলিক ধ্রুবককে প্লাঙ্কের ধ্রুবক বলে।",
    "definitionEn": "A fundamental physical constant relating the energy of a photon to its electromagnetic frequency.",
    "explanationBn": "ম্যাক্স প্লাঙ্ক ১৯০০ সালে কোয়ান্টাম তত্ত্ব প্রস্তাব করার সময় এই সার্বজনীন ধ্রুবকটি প্রবর্তন করেন। এর পরীক্ষালব্ধ মান হলো $6.62607015 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$। এটি কোয়ান্টাম বলবিজ্ঞানের সবচেয়ে মৌলিক ধ্রুবক, যা কৌণিক ভরবেগের কোয়ান্টায়ন এবং আলোর কণা-ধর্ম ব্যাখ্যার জন্য অপরিহার্য।",
    "explanationEn": "Introduced by Max Planck, this fundamental constant links photon energy to wave frequency through E = h*nu. Its SI value is fixed exactly at 6.62607015 * 10^-34 J*s.",
    "keyPointsBn": [
      "প্লাঙ্কের ধ্রুবকের মান: $h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$।",
      "ফোটনের শক্তি: $E = hf$ বা $E = \\frac{hc}{\\lambda}$।",
      "কৌণিক ভরবেগ এবং প্লাঙ্কের ধ্রুবকের মাত্রা হুবহু একই ($[M L^2 T^{-1}]$)।"
    ],
    "keyPointsEn": [
      "Value: h = 6.626 * 10^-34 J*s.",
      "Governs photon energy via E = h*f.",
      "Shares the exact same dimension as angular momentum ([M L^2 T^-1])."
    ],
    "relatedToolUrl": "/bn/tools/physics",
    "relatedTermIds": [
      "velocity",
      "kinetic-energy"
    ],
    "faqs": [
      {
        "questionBn": "প্লাঙ্কের ধ্রুবক ও কৌণিক ভরবেগের মাত্রা কি একই?",
        "answerBn": "হ্যাঁ, প্লাঙ্কের ধ্রুবক ($h$) এবং কৌণিক ভরবেগ ($L$) উভয়ের মাত্রিক সংকেত হলো $[M L^2 T^{-1}]$।",
        "questionEn": "Does Planck's constant share dimensions with angular momentum?",
        "answerEn": "Yes, both possess the identical dimensional formula [M L^2 T^-1]."
      }
    ]
  },
  {
    "id": "atom",
    "subjectId": "chemistry",
    "subjectNameBn": "রসায়ন",
    "subjectNameEn": "Chemistry",
    "termBn": "পরমাণু",
    "termEn": "Atom",
    "pronunciationBn": "অ্যাটম",
    "symbol": "X",
    "definingEquation": "{}_Z^A X \\text{ (ভরসংখ্যা } A = Z + N)",
    "siUnitBn": "পরমাণুর ভর: $u$ (amu) বা $kg$",
    "siUnitEn": "amu (u) or kg",
    "cgsUnit": "g",
    "dimensionalFormula": "[M]",
    "quantityType": "concept",
    "curriculum": "NCTB রসায়ন অধ্যায় ৩ (পদার্থের গঠন)",
    "definitionBn": "মৌলিক পদার্থের ক্ষুদ্রতম কণা যা রাসায়নিক বিক্রিয়ায় সরাসরি অংশগ্রহণ করে কিন্তু স্বাধীন অস্তিত্ব বজায় রাখতে পারে না, তাকে পরমাণু বলে।",
    "definitionEn": "The smallest constituent unit of an element that retains its chemical properties and directly participates in chemical reactions.",
    "explanationBn": "একটি পরমাণুর কেন্দ্রে একটি ক্ষুদ্র, ঘন ও ধনাত্মক আধানযুক্ত নিউক্লিয়াস থাকে যাতে প্রোটন ও নিউট্রন বিদ্যমান। নিউক্লিয়াসের চারপাশে নির্দিষ্ট অনুমোদিত বৃত্তাকার কক্ষপথে ঋণাত্মক চার্জযুক্ত ইলেকট্রন আবর্তন করে। প্রোটন সংখ্যা ($Z$) মৌলের পারমাণবিক সংখ্যা নির্ধারণ করে, আর প্রোটন ও নিউট্রনের সমষ্টিকে ভর সংখ্যা ($A$) বলা হয়।",
    "explanationEn": "An atom comprises a dense central nucleus containing positively charged protons and neutral neutrons, surrounded by an electron cloud. The atomic number Z dictates elemental identity, while the nucleon sum A = Z + N defines atomic mass number.",
    "keyPointsBn": [
      "পরমাণু ৩টি স্থায়ী মূল কণিকা নিয়ে গঠিত: ইলেকট্রন, প্রোটন ও নিউট্রন।",
      "পরমাণুর সামগ্রিক আধান শূন্য কারণ প্রোটন সংখ্যা ও ইলেকট্রন সংখ্যা সমান।",
      "পরমাণুর বেশিরভাগ অংশই ফাঁকা।"
    ],
    "keyPointsEn": [
      "Composed of three stable subatomic particles: electrons, protons, and neutrons.",
      "Electrically neutral because proton count balances electron count.",
      "The vast majority of an atom's volume is empty space."
    ],
    "relatedToolUrl": "/bn/tools/chemistry",
    "relatedTermIds": [
      "molecule",
      "isotope",
      "mole"
    ],
    "faqs": [
      {
        "questionBn": "পরমাণু কাকে বলে?",
        "answerBn": "মৌলের ক্ষুদ্রতম কণা যা রাসায়নিক বিক্রিয়ায় সরাসরি অংশগ্রহণ করে কিন্তু সচরাচর মুক্ত অবস্থায় থাকে না, তাকে পরমাণু বলে।",
        "questionEn": "What is an atom?",
        "answerEn": "An atom is the basic unit of a chemical element that participates in chemical combinations."
      }
    ]
  },
  {
    "id": "molecule",
    "subjectId": "chemistry",
    "subjectNameBn": "রসায়ন",
    "subjectNameEn": "Chemistry",
    "termBn": "অণু",
    "termEn": "Molecule",
    "pronunciationBn": "মলিকিউল",
    "symbol": "\\text{Molecules (e.g. } \\text{H}_2, \\text{H}_2\\text{O})",
    "definingEquation": "\\text{Mass} = \\sum A_r",
    "siUnitBn": "আণবিক ভর: $u$ (amu)",
    "siUnitEn": "amu (u)",
    "cgsUnit": "g",
    "dimensionalFormula": "[M]",
    "quantityType": "concept",
    "curriculum": "NCTB রসায়ন অধ্যায় ৩ (পদার্থের গঠন)",
    "definitionBn": "মৌলিক বা যৌগিক পদার্থের ক্ষুদ্রতম কণা যা স্বাধীনভাবে অস্তিত্ব বজায় রাখতে পারে এবং যাতে পদার্থের সব ধর্ম অক্ষুণ্ণ থাকে, তাকে অণু বলে।",
    "definitionEn": "An electrically neutral group of two or more atoms held together by chemical covalent bonds that exists independently.",
    "explanationBn": "দুই বা ততোধিক পরমাণু রাসায়নিক বন্ধনের মাধ্যমে যুক্ত হয়ে অণু গঠন করে। যদি একই মৌলের পরমাণু যুক্ত হয় তবে তা মৌলিক অণু (যেমন $\\text{O}_2, \\text{N}_2, \\text{O}_3$), আর ভিন্ন মৌলের পরমাণু যুক্ত হলে যৌগিক অণু (যেমন $\\text{H}_2\\text{O}, \\text{CO}_2, \\text{CH}_4$) তৈরি হয়।",
    "explanationEn": "Molecules represent chemical combinations of atoms. Homonuclear molecules (like O2) contain identical elemental atoms, while heteronuclear molecules (like H2O) form chemical compounds.",
    "keyPointsBn": [
      "অণু মুক্ত অবস্থায় স্বাধীনভাবে থাকতে পারে।",
      "পরমাণুসমূহ রাসায়নিক বন্ধন (সমযোজী) দ্বারা যুক্ত হয়ে অণু গঠন করে।",
      "অণুর বিভাজনে পরমাণু পাওয়া যায়।"
    ],
    "keyPointsEn": [
      "Molecules exist stably in a free state.",
      "Held together via covalent chemical bonds.",
      "Can be decomposed into their constituent atoms."
    ],
    "relatedToolUrl": "/bn/tools/chemistry",
    "relatedTermIds": [
      "atom",
      "mole",
      "molar-mass"
    ],
    "faqs": [
      {
        "questionBn": "পরমাণু ও অণুর মধ্যে প্রধান পার্থক্য কী?",
        "answerBn": "পরমাণু রাসায়নিক বিক্রিয়ায় সরাসরি অংশ নেয় কিন্তু স্বাধীনভাবে থাকতে পারে না; পক্ষান্তরে অণু স্বাধীনভাবে থাকতে পারে কিন্তু বিক্রিয়ায় অংশ নেওয়ার পূর্বে পরমাণুতে বিভক্ত হয়।",
        "questionEn": "What is the key difference between an atom and a molecule?",
        "answerEn": "An atom directly participates in reactions but rarely exists free; a molecule exists independently in nature."
      }
    ]
  },
  {
    "id": "isotope",
    "subjectId": "chemistry",
    "subjectNameBn": "রসায়ন",
    "subjectNameEn": "Chemistry",
    "termBn": "আইসোটোপ",
    "termEn": "Isotope",
    "pronunciationBn": "আইসোটোপ",
    "symbol": "{}_Z^{A_1}X, {}_Z^{A_2}X",
    "definingEquation": "Z_1 = Z_2 \\text{ কিন্তু } A_1 \\ne A_2",
    "siUnitBn": "এককবিহীন শ্রেণিবিন্যাস",
    "siUnitEn": "Dimensionless classification",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "concept",
    "curriculum": "NCTB রসায়ন অধ্যায় ৩ (পদার্থের গঠন)",
    "definitionBn": "যেসব পরমাণুর প্রোটন সংখ্যা সমান কিন্তু নিউট্রন সংখ্যার ভিন্নতার কারণে ভর সংখ্যা ভিন্ন হয়, তাদেরকে পরস্পরের আইসোটোপ বলে।",
    "definitionEn": "Variants of a particular chemical element which differ in neutron number, and consequently in nucleon number, while maintaining identical proton numbers.",
    "explanationBn": "আইসোটোপগুলোর পারমাণবিক সংখ্যা একই হওয়ায় তারা পর্যায় সারণীতে একই স্থান দখল করে এবং তাদের রাসায়নিক ধর্ম অভিন্ন হয়। কিন্তু নিউট্রন সংখ্যা ভিন্ন হওয়ার কারণে এদের ভৌত ধর্মে (যেমন ভর, ঘনত্ব, তেজস্ক্রিয়তা) পার্থক্য দেখা যায়। হাইড্রোজেনের তিনটি প্রধান আইসোটোপ রয়েছে: প্রোটিয়াম (${}_1^1\\text{H}$), ডিউটেরিয়াম (${}_1^2\\text{H}$), এবং ট্রিটিয়াম (${}_1^3\\text{H}$)।",
    "explanationEn": "Isotopes possess identical numbers of protons and electrons, conferring virtually identical chemical reactivity, but differ in neutron count, altering nuclear stability and physical mass. Hydrogen isotopes include protium, deuterium, and tritium.",
    "keyPointsBn": [
      "প্রোটন সংখ্যা (Z) সমান, কিন্তু ভর সংখ্যা (A) ভিন্ন।",
      "রাসায়নিক ধর্ম একই, তবে ভৌত ধর্মে কিছুটা পার্থক্য থাকে।",
      "তেজস্ক্রিয় আইসোটোপ ক্যান্সার চিকিৎসা ও কৃষি গবেষণায় ব্যবহৃত হয়।"
    ],
    "keyPointsEn": [
      "Identical atomic number Z, differing mass number A.",
      "Identical chemical properties, differing nuclear stability.",
      "Radioisotopes find extensive clinical and agricultural applications."
    ],
    "mnemonicBn": "আইসোটোপ-এ 'প' আছে = প্রোটন সংখ্যা সমান; আইসোবার-এ 'ব' আছে = ভর সংখ্যা সমান; আইসোটোন-এ 'ন' আছে = নিউট্রন সংখ্যা সমান।",
    "mnemonicEn": "IsotoPe = same Protons, IsoBar = same mass (Bhor), IsotoNe = same Neutrons",
    "relatedToolUrl": "/bn/tools/chemistry",
    "relatedTermIds": [
      "atom",
      "molar-mass"
    ],
    "faqs": [
      {
        "questionBn": "আইসোটোপ কাকে বলে? হাইড্রোজেনের ৩টি আইসোটোপের নাম লেখ।",
        "answerBn": "যেসব পরমাণুর প্রোটন সংখ্যা সমান কিন্তু ভর সংখ্যা ভিন্ন তাদের আইসোটোপ বলে। হাইড্রোজেনের তিনটি আইসোটোপ: প্রোটিয়াম (${}_1^1\\text{H}$), ডিউটেরিয়াম (${}_1^2\\text{H}$) এবং ট্রিটিয়াম (${}_1^3\\text{H}$)।",
        "questionEn": "What are isotopes? Name the 3 isotopes of hydrogen.",
        "answerEn": "Atoms with identical proton count but different mass numbers. Hydrogen's 3 isotopes are Protium, Deuterium, and Tritium."
      }
    ]
  },
  {
    "id": "mole",
    "subjectId": "chemistry",
    "subjectNameBn": "রসায়ন",
    "subjectNameEn": "Chemistry",
    "termBn": "মোল",
    "termEn": "Mole",
    "pronunciationBn": "মোল",
    "symbol": "n",
    "definingEquation": "n = \\frac{w}{M} = \\frac{V_{\\text{STP}}}{22.4} = \\frac{N}{6.023 \\times 10^{23}}",
    "siUnitBn": "$mol$ (মোল)",
    "siUnitEn": "mol (mole)",
    "cgsUnit": "mol",
    "dimensionalFormula": "[N]",
    "quantityType": "scalar",
    "curriculum": "NCTB রসায়ন অধ্যায় ৬ (মোলের ধারণা ও রাসায়নিক গণনা)",
    "definitionBn": "কোনো পদার্থের যে পরিমাণের মধ্যে অ্যাভোগ্যাড্রোর সংখ্যা সংখ্যক ($৬.০২৩ \\times ১০^{২৩}$) মৌলিক কণা (অণু, পরমাণু বা আয়ন) বিদ্যমান থাকে, তাকে ঐ পদার্থের এক মোল বলে।",
    "definitionEn": "The SI base unit of amount of substance, containing exactly 6.02214076 x 10^23 elementary entities.",
    "explanationBn": "মোল হলো রসায়নের হিসাব-নিকাশের কেন্দ্রীয় একক। যেকোনো মৌলের পারমাণবিক ভর অথবা যৌগের আণবিক ভরকে গ্রামে প্রকাশ করলে তাকে ১ মোল বলা হয় (যেমন: ১৮ গ্রাম পানি = ১ মোল পানি)। প্রমাণ তাপমাত্রা ও চাপে (STP) যেকোনো আদর্শ গ্যাসের ১ মোলের আয়তন ২২.৪ লিটার।",
    "explanationEn": "The mole bridges the microscopic world of atoms with macroscopic bench chemistry. Expressing molecular weight in grams gives 1 mole. At STP (0 deg C, 1 atm), one mole of any ideal gas occupies 22.4 liters.",
    "keyPointsBn": [
      "অ্যাভোগ্যাড্রোর সংখ্যা: $N_A = 6.023 \\times 10^{23}$।",
      "এসটিপিতে ১ মোল যেকোনো গ্যাসের আয়তন $22.4\\text{ L}$।",
      "সমন্বিত মোল সূত্র: $n = \\frac{w}{M} = \\frac{V}{22.4} = \\frac{N}{N_A}$।"
    ],
    "keyPointsEn": [
      "Avogadro's constant NA = 6.023 * 10^23 entities.",
      "Standard molar volume at STP is 22.4 L/mol.",
      "Unified mole formula: n = w/M = V/22.4 = N/NA."
    ],
    "relatedToolUrl": "/bn/tools/molar-mass",
    "relatedTermIds": [
      "molar-mass",
      "molarity",
      "atom"
    ],
    "faqs": [
      {
        "questionBn": "১ মোল পানি বলতে কী বোঝায়?",
        "answerBn": "১ মোল পানি বলতে ১৮ গ্রাম পানিকে বোঝায়, যার মধ্যে $৬.০২৩ \\times ১০^{২৩}$ টি পানির অণু থাকে এবং প্রমাণ তাপমাত্রা ও চাপে বাষ্পীয় অবস্থায় এর আয়তন ২২.৪ লিটার।",
        "questionEn": "What does 1 mole of water represent?",
        "answerEn": "It represents 18 grams of water containing 6.023 * 10^23 H2O molecules, occupying 22.4 L as vapor at STP."
      }
    ]
  },
  {
    "id": "molar-mass",
    "subjectId": "chemistry",
    "subjectNameBn": "রসায়ন",
    "subjectNameEn": "Chemistry",
    "termBn": "মোলার ভর",
    "termEn": "Molar Mass",
    "pronunciationBn": "মোলার মাস",
    "symbol": "M",
    "definingEquation": "M = \\frac{m}{n}",
    "siUnitBn": "$kg/mol$ (ব্যবহারিক: $g/mol$)",
    "siUnitEn": "kg/mol (practical: g/mol)",
    "cgsUnit": "g/mol",
    "dimensionalFormula": "[M N^{-1}]",
    "quantityType": "scalar",
    "curriculum": "NCTB রসায়ন অধ্যায় ৬ (মোলের ধারণা ও রাসায়নিক গণনা)",
    "definitionBn": "কোনো পদার্থের এক মোল পরিমাণ কণার সামগ্রিক ভরকে তার মোলার ভর বলে।",
    "definitionEn": "The mass of a given chemical substance divided by the amount of substance, expressed in grams per mole (g/mol).",
    "explanationBn": "মোলার ভর সংকেতে উপস্থিত পরমাণুসমূহের পারমাণবিক ভরের সমষ্টি দ্বারা হিসাব করা হয়। যেমন: পানির ($\\text{H}_2\\text{O}$) মোলার ভর = $(2 \\times 1) + 16 = 18\\text{ g/mol}$। কেলাসিত লবণের ক্ষেত্রে কেলাস পানির ভরও যোগ করতে হয়; যেমন তুঁতে ($\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$) এর মোলার ভর $249.68\\text{ g/mol}$।",
    "explanationEn": "Calculated by summing the relative atomic masses of all constituent atoms in a chemical formula. For crystal hydrates like copper sulfate pentahydrate (CuSO4*5H2O), waters of crystallization are factored into total molar mass.",
    "keyPointsBn": [
      "আণবিক ভরের মানকে গ্রামে প্রকাশ করলে মোলার ভর পাওয়া যায়।",
      "ব্যবহারিক একক: গ্রাম/মোল ($g/mol$)।",
      "দ্রবণের মোলারিটি ও স্টোইকিওমেট্রি গণনায় মোলার ভর অপরিহার্য।"
    ],
    "keyPointsEn": [
      "Numerically equal to formula weight expressed in g/mol.",
      "Crucial for calculating solution molarity and limiting reactants.",
      "Accounts for waters of crystallization in hydrates."
    ],
    "relatedToolUrl": "/bn/tools/molar-mass",
    "relatedTermIds": [
      "mole",
      "molarity",
      "molecule"
    ],
    "faqs": [
      {
        "questionBn": "তুঁতের (CuSO4·5H2O) মোলার ভর কত?",
        "answerBn": "তুঁতের মোলার ভর হলো $63.5 + 32 + (4 \\times 16) + (5 \\times 18) = 249.5\\text{ g/mol}$।",
        "questionEn": "What is the molar mass of blue vitriol (CuSO4*5H2O)?",
        "answerEn": "The molar mass of copper sulfate pentahydrate is approximately 249.68 g/mol."
      }
    ]
  },
  {
    "id": "molarity",
    "subjectId": "chemistry",
    "subjectNameBn": "রসায়ন",
    "subjectNameEn": "Chemistry",
    "termBn": "মোলার ঘনমাত্রা",
    "termEn": "Molarity",
    "pronunciationBn": "মোলারিটি",
    "symbol": "S \\text{ বা } M",
    "definingEquation": "S = \\frac{1000w}{M \\times V\\text{ (mL)}} = \\frac{n}{V\\text{ (L)}}",
    "siUnitBn": "$mol/L$ বা $M$ (মোলার)",
    "siUnitEn": "mol/L or M (Molar)",
    "cgsUnit": "mol/cm^3",
    "dimensionalFormula": "[N L^{-3}]",
    "quantityType": "scalar",
    "curriculum": "NCTB রসায়ন অধ্যায় ৬ (মোলের ধারণা ও রাসায়নিক গণনা)",
    "definitionBn": "নির্দিষ্ট তাপমাত্রায় ১ লিটার দ্রবণে দ্রবীভূত দ্রবের মোল সংখ্যাকে ঐ দ্রবণের মোলার ঘনমাত্রা বা মোলারিটি বলে।",
    "definitionEn": "The concentration of a solution expressed as the number of moles of solute per liter of solution.",
    "explanationBn": "মোলারিটি তাপমাত্রার ওপর নির্ভরশীল কারণ তাপমাত্রা পরিবর্তনের সাথে সাথে দ্রবণের আয়তন সংকুচিত বা প্রসারিত হয়। ১ লিটার দ্রবণে ১ মোল দ্রব দ্রবীভূত থাকলে তাকে মোলার দ্রবণ ($1\\text{ M}$), ০.৫ মোল থাকলে সেমি-মোলার দ্রবণ ($0.5\\text{ M}$), এবং ০.১ মোল থাকলে ডেসিমোলার দ্রবণ ($0.1\\text{ M}$) বলা হয়। টাইট্রেশনে অ্যাসিড ও ক্ষারের প্রশমন ঘটাতে $V_A S_A = V_B S_B$ সমীকরণ ব্যবহৃত হয়।",
    "explanationEn": "Molarity measures volumetric solution concentration. Because liquids expand with temperature, molarity varies slightly with temperature. Common benchmarks: Molar (1 M), Semi-molar (0.5 M), Decimolar (0.1 M), and Centimolar (0.01 M).",
    "keyPointsBn": [
      "মোলারিটি সূত্র: $S = \\frac{1000w}{MV}$।",
      "ডেসিমোলার দ্রবণ = $0.1\\text{ M}$, সেমি-মোলার = $0.5\\text{ M}$।",
      "তাপমাত্রা বাড়লে দ্রবণের আয়তন বেড়ে মোলারিটি হ্রাস পায়।"
    ],
    "keyPointsEn": [
      "Formula: S = (1000 * w) / (M * V).",
      "Decimolar = 0.1 M; Semi-molar = 0.5 M.",
      "Decreases as temperature rises due to thermal expansion of solution volume."
    ],
    "relatedToolUrl": "/bn/tools/chemistry",
    "relatedTermIds": [
      "mole",
      "molar-mass",
      "ph-scale"
    ],
    "faqs": [
      {
        "questionBn": "ডেসিমোলার দ্রবণ বলতে কী বোঝায়?",
        "answerBn": "নির্দিষ্ট তাপমাত্রায় ১ লিটার দ্রবণে যদি ০.১ মোল দ্রব দ্রবীভূত থাকে, তবে তাকে ডেসিমোলার দ্রবণ ($0.1\\text{ M}$) বলে।",
        "questionEn": "What is a decimolar solution?",
        "answerEn": "A solution containing 0.1 moles of solute per liter of solution."
      }
    ]
  },
  {
    "id": "valency",
    "subjectId": "chemistry",
    "subjectNameBn": "রসায়ন",
    "subjectNameEn": "Chemistry",
    "termBn": "যোজ্যতা",
    "termEn": "Valency",
    "pronunciationBn": "ভ্যালেন্সি",
    "symbol": "v",
    "definingEquation": "v = \\text{বন্ড গঠনের সক্ষমতা}",
    "siUnitBn": "এককবিহীন পূর্ণসংখ্যা",
    "siUnitEn": "Dimensionless integer",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "concept",
    "curriculum": "NCTB রসায়ন অধ্যায় ৫ (রাসায়নিক বন্ধন)",
    "definitionBn": "কোনো মৌলের একটি পরমাণুর অন্য কোনো মৌলের পরমাণুর সাথে যুক্ত হওয়ার সামর্থ্যকে তার যোজ্যতা বলে।",
    "definitionEn": "A measure of the combining capacity of an atom with other atoms when forming chemical compounds.",
    "explanationBn": "ঐতিহাসিকভাবে একটি পরমাণু কয়টি হাইড্রোজেন পরমাণু বা ক্লোরিন পরমাণুর সাথে যুক্ত হতে পারে, তা দিয়ে যোজ্যতা নির্ধারণ করা হতো। আধুনিক ইলেকট্রনীয় মতবাদ অনুযায়ী, নিষ্ক্রিয় গ্যাসের স্থিতিশীল ইলেকট্রন বিন্যাস (অষ্টক বা দ্বিত্ব) অর্জনের জন্য কোনো পরমাণু যতগুলো ইলেকট্রন গ্রহণ, বর্জন বা শেয়ার করে, সেই সংখ্যাই হলো ঐ মৌলের যোজ্যতা। আয়রন, কপার ইত্যাদি অবস্থান্তর মৌল পরিবর্তনশীল যোজ্যতা প্রদর্শন করে (যেমন $\\text{Fe}^{2+}$ ও $\\text{Fe}^{3+}$)।",
    "explanationEn": "Valency reflects an atom's combining capacity to satisfy the octet or duet rule. Elements achieve chemical stability by losing, gaining, or sharing outer-shell valence electrons. Transition metals frequently exhibit variable valency.",
    "keyPointsBn": [
      "যোজ্যতা সর্বদা একটি ধনাত্মক পূর্ণসংখ্যা, এর কোনো চার্জ নেই।",
      "নিষ্ক্রিয় গ্যাসসমূহের যোজ্যতা শূন্য ($0$)।",
      "পরিবর্তনশীল যোজ্যতার উদাহরণ: আয়রন ($2, 3$), কপার ($1, 2$)।"
    ],
    "keyPointsEn": [
      "Valency is a positive integer without charge signs.",
      "Noble gases have zero valency.",
      "Transition metals exhibit variable valencies (e.g., Fe: 2 and 3)."
    ],
    "relatedToolUrl": "/bn/tools/chemistry",
    "relatedTermIds": [
      "chemical-bond",
      "oxidation-state"
    ],
    "faqs": [
      {
        "questionBn": "যোজ্যতা ও জারণ সংখ্যার মধ্যে পার্থক্য কী?",
        "answerBn": "যোজ্যতা হলো পরমাণুর যুক্ত হওয়ার ক্ষমতা এবং এটি চিহ্নহীন পূর্ণসংখ্যা; পক্ষান্তরে জারণ সংখ্যা হলো পরমাণুর আধানের প্রকৃত অবস্থা যা ধনাত্মক, ঋণাত্মক বা ভগ্নাংশ হতে পারে।",
        "questionEn": "What is the difference between valency and oxidation state?",
        "answerEn": "Valency is a chargeless combining capacity integer, while oxidation state carries formal positive, negative, or fractional charge signs."
      }
    ]
  },
  {
    "id": "chemical-bond",
    "subjectId": "chemistry",
    "subjectNameBn": "রসায়ন",
    "subjectNameEn": "Chemistry",
    "termBn": "রাসায়নিক বন্ধন",
    "termEn": "Chemical Bond",
    "pronunciationBn": "কেমিক্যাল বন্ড",
    "symbol": "— (বন্ড)",
    "definingEquation": "\\Delta H_{\\text{bond}} = E_{\\text{reactants}} - E_{\\text{products}}",
    "siUnitBn": "বন্ধন শক্তি: $kJ/mol$",
    "siUnitEn": "Bond energy: kJ/mol",
    "cgsUnit": "kcal/mol",
    "dimensionalFormula": "[M L^2 T^{-2} N^{-1}]",
    "quantityType": "concept",
    "curriculum": "NCTB রসায়ন অধ্যায় ৫ (রাসায়নিক বন্ধন)",
    "definitionBn": "অণুতে পরমাণুসমূহ যে আকর্ষণ বলের মাধ্যমে পরস্পরের সাথে যুক্ত থাকে, তাকে রাসায়নিক বন্ধন বলে।",
    "definitionEn": "A lasting attraction between atoms, ions, or molecules that enables the formation of chemical compounds.",
    "explanationBn": "পরমাণুসমূহ তাদের সর্ববহিঃস্থ শক্তিস্তরে অষ্টক পূরণের মাধ্যমে স্থিতিশীলতা অর্জনের জন্য বন্ধন গঠন করে। রাসায়নিক বন্ধন প্রধানত তিন প্রকার: ১. আয়নিক বন্ধন (ইলেকট্রন স্থানান্তরের মাধ্যমে সৃষ্ট অ্যানায়ন ও ক্যাটায়নের স্থির তড়িৎ আকর্ষণ), ২. সমযোজী বন্ধন (ইলেকট্রন জোড় শেয়ারের মাধ্যমে), এবং ৩. ধাতব বন্ধন (ধাতব কেলাসে মুক্ত ইলেকট্রন সাগরে ধনাত্মক আয়নসমূহের আকর্ষণ)।",
    "explanationEn": "Atoms bind chemically to achieve closed-shell electron stability. The primary types are ionic bonding (electrostatic attraction between opposite ions), covalent bonding (shared valence electron pairs), and metallic bonding (cations immersed in a delocalized sea of electrons).",
    "keyPointsBn": [
      "প্রধান ৩ প্রকার বন্ধন: আয়নিক, সমযোজী এবং ধাতব বন্ধন।",
      "আয়নিক যৌগের গলনাঙ্ক ও স্ফুটনাঙ্ক সাধারণত সমযোজী যৌগের চেয়ে অনেক বেশি।",
      "বন্ধন গঠনে শক্তি নির্গত হয়, ফলে যৌগ অধিক স্থিতিশীল হয়।"
    ],
    "keyPointsEn": [
      "3 primary classes: ionic, covalent, and metallic bonds.",
      "Ionic solids exhibit high melting points and electrical conductivity in solution.",
      "Bond formation is exothermic, releasing stabilizing energy."
    ],
    "relatedToolUrl": "/bn/tools/chemistry",
    "relatedTermIds": [
      "electronegativity",
      "valency",
      "enthalpy"
    ],
    "faqs": [
      {
        "questionBn": "আয়নিক ও সমযোজী বন্ধনের মূল পার্থক্য কী?",
        "answerBn": "ধাতু ও অধাতুর মধ্যে ইলেকট্রন আদান-প্রদানের মাধ্যমে সৃষ্ট বন্ধন হলো আয়নিক বন্ধন; আর দুটি অধাতব পরমাণুর মধ্যে ইলেকট্রন শেয়ারের মাধ্যমে সৃষ্ট বন্ধন হলো সমযোজী বন্ধন।",
        "questionEn": "What is the core difference between ionic and covalent bonds?",
        "answerEn": "Ionic bonds form via complete electron transfer between metals and non-metals; covalent bonds form via electron pair sharing between non-metals."
      }
    ]
  },
  {
    "id": "electronegativity",
    "subjectId": "chemistry",
    "subjectNameBn": "রসায়ন",
    "subjectNameEn": "Chemistry",
    "termBn": "তড়িৎ ঋণাত্মকতা",
    "termEn": "Electronegativity",
    "pronunciationBn": "ইলেকট্রোনেগেটিভিটি",
    "symbol": "\\chi \\text{ (কাই)}",
    "definingEquation": "\\chi_A - \\chi_B = 0.102 \\sqrt{\\Delta}",
    "siUnitBn": "এককবিহীন স্কেল (পাউলিং স্কেল)",
    "siUnitEn": "Dimensionless (Pauling scale)",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "constant",
    "curriculum": "NCTB রসায়ন অধ্যায় ৪ (পর্যায় সারণী) ও ৫ (রাসায়নিক বন্ধন)",
    "definitionBn": "সমযোজী বন্ধনে আবদ্ধ দুটি পরমাণুর শেয়ারকৃত ইলেকট্রন যুগলকে কোনো একটি পরমাণুর নিজের দিকে আকর্ষণ করার আপেক্ষিক ক্ষমতাকে তড়িৎ ঋণাত্মকতা বলে।",
    "definitionEn": "A chemical property that describes the tendency of an atom to attract shared electron pairs in a covalent bond.",
    "explanationBn": "পর্যায় সারণীতে একই পর্যায়ে বাম থেকে ডানে গেলে পারমাণবিক ব্যাসার্ধ হ্রাস পেয়ে নিউক্লিয়াসের আকর্ষণ বাড়ে, ফলে তড়িৎ ঋণাত্মকতা বৃদ্ধি পায়। আবার একই গ্রুপে উপর থেকে নিচে নামলে নতুন শক্তিস্তর যুক্ত হওয়ায় তড়িৎ ঋণাত্মকতা হ্রাস পায়। পুরো পর্যায় সারণীতে ফ্লোরিন ($\\text{F}$) এর তড়িৎ ঋণাত্মকতা সবচেয়ে বেশি (৪.০)। দুটি পরমাণুর তড়িৎ ঋণাত্মকতার পার্থক্য ০.৫ এর বেশি হলে বন্ধনটি পোলার সমযোজী এবং ২.০ এর বেশি হলে আয়নিক বৈশিষ্ট্য লাভ করে।",
    "explanationEn": "Electronegativity measures electron greed in covalent partnerships. It peaks in the upper right of the periodic table, with Fluorine possessing the highest Pauling rating (4.0). If electronegativity differences exceed 0.5, bonds become polar; differences over 2.0 yield predominantly ionic character.",
    "keyPointsBn": [
      "সবচেয়ে বেশি তড়িৎ ঋণাত্মক মৌল ফ্লোরিন ($4.0$), এরপর অক্সিজেন ($3.5$) ও নাইট্রোজেন ($3.0$)।",
      "তড়িৎ ঋণাত্মকতার পার্থক্য $0.5$ থেকে $1.9$ হলে বন্ধনটি পোলার হয় (যেমন পানি $\\text{H}_2\\text{O}$)।",
      "পাউলিং স্কেলে এর মান মাপা হয়, এর কোনো একক নেই।"
    ],
    "keyPointsEn": [
      "Fluorine is the most electronegative element (4.0), followed by Oxygen (3.5).",
      "Differences between 0.5 and 1.9 create polar covalent dipoles (e.g., water).",
      "Standardized on the dimensionless Pauling scale."
    ],
    "mnemonicBn": "তড়িৎ ঋণাত্মকতার সক্রিয়তা ক্রম: FONClBrI (ফোন কল ব্রাই) -> F > O > N > Cl > Br > I",
    "mnemonicEn": "FONClBrI: F (4.0) > O (3.5) > N (3.0) = Cl (3.0) > Br (2.8) > I (2.5)",
    "relatedToolUrl": "/bn/tools/chemistry",
    "relatedTermIds": [
      "chemical-bond",
      "oxidation-state"
    ],
    "faqs": [
      {
        "questionBn": "পানি কেন একটি পোলার অণু?",
        "answerBn": "অক্সিজেনের তড়িৎ ঋণাত্মকতা (৩.৫) হাইড্রোজেনের (২.১) চেয়ে বেশি হওয়ায় বন্ধন ইলেকট্রন অক্সিজেনের দিকে ঝুঁকে থাকে, ফলে অক্সিজেনে আংশিক ঋণাত্মক ($\\delta^-$) ও হাইড্রোজেনে আংশিক ধনাত্মক ($\\delta^+$) পোল তৈরি হয়।",
        "questionEn": "Why is water a polar molecule?",
        "answerEn": "Oxygen's high electronegativity (3.5) pulls shared electrons away from Hydrogen (2.1), generating persistent dipole moments."
      }
    ]
  },
  {
    "id": "oxidation-state",
    "subjectId": "chemistry",
    "subjectNameBn": "রসায়ন",
    "subjectNameEn": "Chemistry",
    "termBn": "জারণ সংখ্যা",
    "termEn": "Oxidation State",
    "pronunciationBn": "অক্সিডেশন স্টেট",
    "symbol": "\\text{Ox. No.}",
    "definingEquation": "\\sum \\text{Ox} = \\text{যৌগের মোট চার্জ}",
    "siUnitBn": "চিহ্নযুক্ত পূর্ণসংখ্যা বা ভগ্নাংশ",
    "siUnitEn": "Signed integer or fraction",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "concept",
    "curriculum": "NCTB রসায়ন অধ্যায় ৭ (রাসায়নিক বিক্রিয়া - রেডক্স)",
    "definitionBn": "যৌগ গঠনের সময় কোনো পরমাণু যতগুলো ইলেকট্রন বর্জন করে ধনাত্মক আয়নে বা যতগুলো ইলেকট্রন গ্রহণ করে ঋণাত্মক আয়নে পরিণত হয়, সেই সংখ্যাকে চিহ্নসহ ঐ পরমাণুর জারণ সংখ্যা বলে।",
    "definitionEn": "The hypothetical charge that an atom would have if all bonds to atoms of different elements were 100% ionic.",
    "explanationBn": "জারণ সংখ্যা মূলত পরমাণুর আধানের আনুষ্ঠানিক রূপ। মুক্ত মৌলের পরমাণুর জারণ সংখ্যা সর্বদা শূন্য ($0$)। ক্ষার ধাতুর জারণ সংখ্যা সর্বদা $+1$ এবং মৃৎক্ষার ধাতুর $+2$ হয়। কোনো নিরপেক্ষ যৌগে উপস্থিত পরমাণুসমূহের জারণ সংখ্যার যোগফল শূন্য ($\\sum \\text{Ox} = 0$)। যেমন $\\text{KMnO}_4$-এ পটাশিয়াম $+1$, অক্সিজেন $-2$ হলে ম্যাঙ্গানিজের জারণ সংখ্যা দাঁড়ায় $+7$। জারণ সংখ্যা বৃদ্ধি পাওয়া মানে জারণ (Oxidation) এবং হ্রাস পাওয়া মানে বিজারণ (Reduction)।",
    "explanationEn": "Oxidation numbers track electron bookkeeping in redox reactions. Oxidation corresponds to an increase in oxidation state (loss of electrons), whereas reduction denotes a decrease (gain of electrons).",
    "keyPointsBn": [
      "মুক্ত মৌলের জারণ সংখ্যা সর্বদা শূন্য ($0$)।",
      "নিরপেক্ষ যৌগের মোট জারণ সংখ্যার সমষ্টি শূন্য।",
      "জারণ সংখ্যা বৃদ্ধি = জারণ; জারণ সংখ্যা হ্রাস = বিজারণ।"
    ],
    "keyPointsEn": [
      "Pure uncombined elements have zero oxidation state.",
      "The sum of oxidation numbers in neutral compounds equals zero.",
      "Increase in oxidation number = oxidation; decrease = reduction."
    ],
    "relatedToolUrl": "/bn/tools/redox-balancer",
    "relatedTermIds": [
      "valency",
      "chemical-bond"
    ],
    "faqs": [
      {
        "questionBn": "KMnO4 যৌগে Mn-এর জারণ সংখ্যা কত?",
        "answerBn": "$\\text{KMnO}_4$-এ K-এর জারণ সংখ্যা $+1$ এবং O-এর $-2$। ধরি Mn = $x$। সমীকরণ: $+1 + x + 4(-2) = 0 \\Rightarrow x - 7 = 0 \\Rightarrow x = +7$। অতএব Mn-এর জারণ সংখ্যা $+7$।",
        "questionEn": "What is the oxidation number of Mn in KMnO4?",
        "answerEn": "Setting 1 + x + 4(-2) = 0 yields x = +7 for Manganese."
      }
    ]
  },
  {
    "id": "diffusion",
    "subjectId": "chemistry",
    "subjectNameBn": "রসায়ন",
    "subjectNameEn": "Chemistry",
    "termBn": "ব্যাপন ও গ্রাহামের সূত্র",
    "termEn": "Diffusion & Graham's Law",
    "pronunciationBn": "ডিফিউশন অ্যান্ড গ্রাহামস ল",
    "symbol": "r",
    "definingEquation": "r \\propto \\frac{1}{\\sqrt{M}} \\Rightarrow \\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}} = \\sqrt{\\frac{d_2}{d_1}}",
    "siUnitBn": "ব্যাপন হার: $mL/s$ বা $mol/s$",
    "siUnitEn": "Diffusion rate: mL/s or mol/s",
    "cgsUnit": "cm^3/s",
    "dimensionalFormula": "[L^3 T^{-1}]",
    "quantityType": "scalar",
    "curriculum": "NCTB রসায়ন অধ্যায় ২ (পদার্থের অবস্থা)",
    "definitionBn": "কোনো মাধ্যমে কঠিন, তরল বা বায়বীয় পদার্থের স্বতঃস্ফূর্ত ও সমভাবে চারদিকে ছড়িয়ে পড়ার প্রক্রিয়াকে ব্যাপন বলে।",
    "definitionEn": "The spontaneous net movement of particles from an area of higher concentration to an area of lower concentration.",
    "explanationBn": "ব্যাপন পদার্থের কণাগুলোর গতিশক্তির কারণে ঘটে থাকে। গ্রাহামের গ্যাস ব্যাপন সূত্রানুসারে, নির্দিষ্ট তাপমাত্রা ও চাপে যেকোনো গ্যাসের ব্যাপন হার ($r$) তার ঘনত্বের বা মোলার ভরের বর্গমূলের ব্যস্তানুপাতিক ($\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}}$)। যে গ্যাসের আণবিক ভর যত কম, সেই গ্যাস তত দ্রুত ব্যাপিত হয়। যেমন অ্যামোনিয়া ($\\text{NH}_3$, ভর ১৭) হাইড্রোক্লোরিক অ্যাসিডের ($\\text{HCl}$, ভর ৩৬.৫) চেয়ে দ্রুত ব্যাপিত হয়। সরু ছিদ্রপথে চাপের প্রভাবে নির্গমনকে নিঃসরণ (Effusion) বলে।",
    "explanationEn": "Graham's law dictates that the rate of diffusion or effusion of a gas is inversely proportional to the square root of its molar mass. Lighter gases travel significantly faster than heavier molecules at equal thermal kinetic temperatures.",
    "keyPointsBn": [
      "ব্যাপন স্বতঃস্ফূর্ত প্রক্রিয়া, কিন্তু নিঃসরণ বাহ্যিক চাপের প্রভাবে ঘটে।",
      "গ্রাহামের সূত্র: ব্যাপন হার মোলার ভরের বর্গমূলের ব্যস্তানুপাতিক।",
      "আণবিক ভর কম হলে ব্যাপনের হার বেশি হয়।"
    ],
    "keyPointsEn": [
      "Diffusion is spontaneous; effusion occurs through a pinhole under pressure.",
      "Graham's law: Rate is inversely proportional to the square root of molar mass.",
      "Lighter molecules diffuse faster than heavier molecules."
    ],
    "relatedToolUrl": "/bn/tools/chemistry",
    "relatedTermIds": [
      "molar-mass",
      "mole"
    ],
    "faqs": [
      {
        "questionBn": "ব্যাপন ও নিঃসরণের মধ্যে প্রধান পার্থক্য কী?",
        "answerBn": "ব্যাপন ঘটে স্বাভাবিক চাপে স্বতঃস্ফূর্তভাবে, আর নিঃসরণ ঘটে সরু ছিদ্রপথে উচ্চচাপ থেকে নিম্নচাপ অঞ্চলে বলপ্রয়োগের মাধ্যমে।",
        "questionEn": "What is the difference between diffusion and effusion?",
        "answerEn": "Diffusion is spontaneous dispersal through concentration gradients; effusion is forced escape through microscopic apertures under pressure."
      }
    ]
  },
  {
    "id": "enthalpy",
    "subjectId": "chemistry",
    "subjectNameBn": "রসায়ন",
    "subjectNameEn": "Chemistry",
    "termBn": "বিক্রিয়া তাপ ও এনথালপি",
    "termEn": "Enthalpy Change",
    "pronunciationBn": "এনথালপি ডেল্টা এইচ",
    "symbol": "\\Delta H",
    "definingEquation": "\\Delta H = \\sum D_{\\text{broken}} - \\sum D_{\\text{formed}} = H_{\\text{products}} - H_{\\text{reactants}}",
    "siUnitBn": "$kJ/mol$ (কিলোজুল/মোল)",
    "siUnitEn": "kJ/mol",
    "cgsUnit": "kcal/mol",
    "dimensionalFormula": "[M L^2 T^{-2} N^{-1}]",
    "quantityType": "scalar",
    "curriculum": "NCTB রসায়ন অধ্যায় ৮ (রসায়ন ও শক্তি)",
    "definitionBn": "স্থির চাপে কোনো রাসায়নিক বিক্রিয়ায় উৎপন্ন বা শোষিত তাপের পরিমাণকে ঐ বিক্রিয়ার বিক্রিয়া তাপ বা এনথালপি পরিবর্তন (ΔH) বলে।",
    "definitionEn": "The total heat energy absorbed or released during a chemical transformation under constant pressure conditions.",
    "explanationBn": "রাসায়নিক বিক্রিয়ায় বিক্রিয়কসমূহের মধ্যকার পুরাতন বন্ধন ভাঙতে শক্তি শোষিত হয় এবং উৎপাদের নতুন বন্ধন গঠিত হতে শক্তি নির্গত হয়। শোষিত ও নির্গত শক্তির ব্যবধানই হলো $\\Delta H$। যদি নির্গত শক্তি শোষিত শক্তির চেয়ে বেশি হয়, তবে বিক্রিয়াটি তাপোৎপাদী (Exothermic) হয় এবং $\\Delta H$ ঋণাত্মক ($-$) হয়। আর যদি শোষিত শক্তি বেশি হয়, তবে বিক্রিয়াটি তাপহারী (Endothermic) হয় এবং $\\Delta H$ ধনাত্মক ($+$) হয়।",
    "explanationEn": "Enthalpy change measures net bond energetics. Bond breaking absorbs energy (+), whereas bond creation releases energy (-). Exothermic reactions show Delta H < 0 (warming the surroundings); endothermic reactions show Delta H > 0.",
    "keyPointsBn": [
      "তাপোৎপাদী বিক্রিয়ায় $\\Delta H < 0$ (ঋণাত্মক)।",
      "তাপহারী বিক্রিয়ায় $\\Delta H > 0$ (ধনাত্মক)।",
      "বন্ধন শক্তি দিয়ে হিসাব: $\\Delta H = \\text{ভাঙা বন্ধনের শক্তি} - \\text{গড়া বন্ধনের শক্তি}$।"
    ],
    "keyPointsEn": [
      "Exothermic reactions: Delta H < 0 (releases heat).",
      "Endothermic reactions: Delta H > 0 (absorbs heat).",
      "Calculated via bond energies: Delta H = Broken bonds - Formed bonds."
    ],
    "relatedToolUrl": "/bn/tools/chemistry",
    "relatedTermIds": [
      "chemical-bond",
      "molar-mass"
    ],
    "faqs": [
      {
        "questionBn": "তাপোৎপাদী ও তাপহারী বিক্রিয়া কাকে বলে?",
        "answerBn": "যে বিক্রিয়ায় তাপ উৎপন্ন হয় তাকে তাপোৎপাদী বিক্রিয়া বলে ($\\Delta H$ ঋণাত্মক)। আর যে বিক্রিয়ায় পরিবেশ থেকে তাপ শোষিত হয় তাকে তাপহারী বিক্রিয়া বলে ($\\Delta H$ ধনাত্মক)।",
        "questionEn": "Define exothermic and endothermic reactions.",
        "answerEn": "Exothermic reactions release thermal energy (Delta H < 0), while endothermic reactions absorb heat (Delta H > 0)."
      }
    ]
  },
  {
    "id": "ph-scale",
    "subjectId": "chemistry",
    "subjectNameBn": "রসায়ন",
    "subjectNameEn": "Chemistry",
    "termBn": "পিএইচ স্কেল",
    "termEn": "pH Scale",
    "pronunciationBn": "পিএইচ স্কেল",
    "symbol": "\\text{pH}",
    "definingEquation": "\\text{pH} = -\\log_{10}[\\text{H}^+] \\text{ এবং } \\text{pH} + \\text{pOH} = 14",
    "siUnitBn": "এককবিহীন স্কেল (০ থেকে ১৪)",
    "siUnitEn": "Dimensionless index (0 to 14)",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "scalar",
    "curriculum": "NCTB রসায়ন অধ্যায় ১০ (খনিজ সম্পদ ও অম্ল-ক্ষারক)",
    "definitionBn": "কোনো জলীয় দ্রবণে হাইড্রোজেন আয়নের (H+) মোলার ঘনমাত্রার ঋণাত্মক লগারিদমকে ঐ দ্রবণের pH বলে।",
    "definitionEn": "A logarithmic scale used to specify the acidity or basicity of an aqueous solution.",
    "explanationBn": "ডেনিশ বিজ্ঞানী সোরেনসেন ১৯০৯ সালে pH স্কেল আবিষ্কার করেন। বিশুদ্ধ পানিতে ২৫°C তাপমাত্রায় $[\\text{H}^+] = 10^{-7}\\text{ M}$, ফলে এর $\\text{pH} = 7$, যা নিরপেক্ষ নির্দেশ করে। pH-এর মান ৭-এর কম হলে দ্রবণটি অম্লীয় বা অ্যাসিডিক এবং ৭-এর বেশি হলে দ্রবণটি ক্ষারীয়। মানবদেহের রক্তের স্বাভাবিক pH হলো ৭.৪, যার সামান্য পরিবর্তনও মারাত্মক স্বাস্থ্যঝুঁকি ডেকে আনে।",
    "explanationEn": "Devised by S.P.L. Sorensen, pH gauges hydronium ion concentration. Neutral solutions at 25 deg C hold pH = 7. Acidic solutions range from 0 to <7; alkaline solutions range from >7 to 14. Human blood requires tight regulation around pH 7.4.",
    "keyPointsBn": [
      "সূত্র: $\\text{pH} = -\\log_{10}[\\text{H}^+]$।",
      "$\\text{pH} < 7$ অম্লীয়, $\\text{pH} = 7$ নিরপেক্ষ, $\\text{pH} > 7$ ক্ষারীয়।",
      "২৫°C তাপমাত্রায় $\\text{pH} + \\text{pOH} = 14$।"
    ],
    "keyPointsEn": [
      "Formula: pH = -log10[H+].",
      "pH < 7 is acidic, pH = 7 is neutral, pH > 7 is basic.",
      "Water self-ionization guarantees pH + pOH = 14 at 25 deg C."
    ],
    "relatedToolUrl": "/bn/tools/chemistry",
    "relatedTermIds": [
      "molarity",
      "mole"
    ],
    "faqs": [
      {
        "questionBn": "একটি দ্রবণে [H+] = 0.01 M হলে এর pH কত?",
        "answerBn": "$\\text{pH} = -\\log_{10}(0.01) = -\\log_{10}(10^{-2}) = 2$। সুতরাং দ্রবণটি তীব্র অম্লীয়।",
        "questionEn": "What is the pH if [H+] = 0.01 M?",
        "answerEn": "pH = -log10(0.01) = -log10(10^-2) = 2 (strongly acidic)."
      }
    ]
  },
  {
    "id": "cell",
    "subjectId": "biology",
    "subjectNameBn": "জীববিজ্ঞান",
    "subjectNameEn": "Biology",
    "termBn": "কোষ",
    "termEn": "Cell",
    "pronunciationBn": "সেল",
    "symbol": "\\text{Cell}",
    "definingEquation": "\\text{Structure} = \\text{Membrane} + \\text{Cytoplasm} + \\text{Nucleus}",
    "siUnitBn": "আকার: মাইক্রোমিটার ($\\mu m$)",
    "siUnitEn": "Size: micrometer (\\mu m)",
    "cgsUnit": "cm",
    "dimensionalFormula": "[L]",
    "quantityType": "concept",
    "curriculum": "NCTB জীববিজ্ঞান অধ্যায় ২ (জীবকোষ ও টিস্যু)",
    "definitionBn": "জীবদেহের গঠন ও শারীরবৃত্তীয় কাজের ক্ষুদ্রতম একক যা স্ব-প্রজননশীল এবং একটি অর্ধভেদ্য পর্দা দ্বারা পরিবেষ্টিত থাকে, তাকে কোষ বলে।",
    "definitionEn": "The basic structural, functional, and biological unit of all known organisms, often called the building block of life.",
    "explanationBn": "বিজ্ঞানী রবার্ট হুক ১৬৬৫ সালে সর্বপ্রথম কর্কের পাতলা ছেদে মৃত কোষ আবিষ্কার করেন। নিউক্লিয়াসের গঠনের ওপর ভিত্তি করে কোষ দুই প্রকার: আদিকোষ (Prokaryotic, যেমন ব্যাকটেরিয়া) যাতে সুগঠিত নিউক্লিয়াস নেই, এবং প্রকৃতকোষ (Eukaryotic, যেমন উদ্ভিদ ও প্রাণিকোষ) যাতে দ্বি-স্তরযুক্ত ঝিল্লি ও সুগঠিত নিউক্লিয়াস বিদ্যমান। উদ্ভিদকোষে প্লাস্টিড ও সেলুলোজ নির্মিত কোষপ্রাচীর থাকে যা প্রাণিকোষে অনুপস্থিত।",
    "explanationEn": "Discovered by Robert Hooke in 1665, cells are the foundational units of living tissue. Prokaryotes lack membrane-bound nuclei, whereas eukaryotes possess distinct nuclei and specialized organelles such as mitochondria and chloroplasts.",
    "keyPointsBn": [
      "কোষ জীবদেহের গঠন ও কাজের মৌলিক একক।",
      "নিউক্লিয়াসের ওপর ভিত্তি করে কোষ আদিকোষ ও প্রকৃতকোষে বিভক্ত।",
      "উদ্ভিদকোষের অনন্য বৈশিষ্ট্য: কোষপ্রাচীর, প্লাস্টিড ও বৃহৎ কোষগহ্বর।"
    ],
    "keyPointsEn": [
      "The universal structural and metabolic unit of life.",
      "Classified into prokaryotic and eukaryotic architectures.",
      "Plant cells feature cell walls, chloroplasts, and large central vacuoles."
    ],
    "relatedToolUrl": "/bn/tools/biology",
    "relatedTermIds": [
      "dna",
      "mitosis",
      "atp"
    ],
    "faqs": [
      {
        "questionBn": "উদ্ভিদ ও প্রাণিকোষের দুটি প্রধান পার্থক্য কী?",
        "answerBn": "উদ্ভিদকোষে সেলুলোজ নির্মিত জড় কোষপ্রাচীর ও প্লাস্টিড থাকে, যা প্রাণিকোষে থাকে না।",
        "questionEn": "State two key differences between plant and animal cells.",
        "answerEn": "Plant cells possess rigid cellulose cell walls and chloroplasts, both absent in animal cells."
      }
    ]
  },
  {
    "id": "dna",
    "subjectId": "biology",
    "subjectNameBn": "জীববিজ্ঞান",
    "subjectNameEn": "Biology",
    "termBn": "ডিএনএ ও বংশগতি",
    "termEn": "DNA (Deoxyribonucleic Acid)",
    "pronunciationBn": "ডিঅক্সিরাইবোনিউক্লিক এসিড",
    "symbol": "\\text{DNA}",
    "definingEquation": "\\text{Double Helix: A=T, G}\\equiv\\text{C}",
    "siUnitBn": "আণবিক ভর: ডাল্টন ($Da$ বা $kDa$)",
    "siUnitEn": "Dalton (Da / kDa)",
    "cgsUnit": "None",
    "dimensionalFormula": "[M]",
    "quantityType": "concept",
    "curriculum": "NCTB জীববিজ্ঞান অধ্যায় ১২ (জীবের বংশগতি ও বিবর্তন)",
    "definitionBn": "জীবদেহের সমস্ত চারিত্রিক বৈশিষ্ট্য বহনকারী এবং বংশপরম্পরায় স্থানান্তরকারী দ্বি-সূত্রক সর্পিল নিউক্লিক অ্যাসিডকে ডিএনএ (DNA) বলে।",
    "definitionEn": "A double-stranded helical biopolymer that carries the genetic blueprint for the development, functioning, growth, and reproduction of all known organisms.",
    "explanationBn": "১৯৫৩ সালে ওয়াটসন ও ক্রিক ডিএনএ-এর দ্বি-সূত্রক মডেল (Double Helix) আবিষ্কারের জন্য নোবেল পুরস্কার পান। ডিএনএ ডিঅক্সিরাইবোজ শর্করা, অজৈব ফসফেট এবং চারটি নাইট্রোজেনঘটিত ক্ষারক (অ্যাডেনিন, গুয়ানিন, সাইটোসিন ও থাইমিন) নিয়ে গঠিত। চারগাফের পরিপূরক নীতি অনুসারে অ্যাডেনিন সর্বদা থাইমিনের সাথে দুটি হাইড্রোজেন বন্ধন ($A=T$) এবং গুয়ানিন সর্বদা সাইটোসিনের সাথে তিনটি হাইড্রোজেন বন্ধন ($G \\equiv C$) দ্বারা যুক্ত থাকে।",
    "explanationEn": "Formulated by Watson and Crick in 1953, DNA consists of antiparallel nucleotide strands forming a right-handed double helix. Base pairing follows strict hydrogen-bond complementarity: Adenine pairs with Thymine (A=T), and Guanine pairs with Cytosine (G=C).",
    "keyPointsBn": [
      "ডিএনএ জীবদেহের প্রধান বংশগতীয় উপাদান (Master Molecule of Life)।",
      "ক্ষারক পরিপূরক নীতি: $A=T$ (২টি H-বন্ড) এবং $G \\equiv C$ (৩টি H-বন্ড)।",
      "ডিএনএ অণুর প্রতি ঘূর্ণনের দৈর্ঘ্য $3.4\\text{ nm}$ এবং ব্যাস $2.0\\text{ nm}$।"
    ],
    "keyPointsEn": [
      "The primary carrier of hereditary information across generations.",
      "Complementary base pairing: A=T (2 H-bonds) and G=C (3 H-bonds).",
      "Helix diameter is 2.0 nm, with a pitch of 3.4 nm per complete turn."
    ],
    "relatedToolUrl": "/bn/tools/biology",
    "relatedTermIds": [
      "cell",
      "mitosis",
      "monohybrid-cross"
    ],
    "faqs": [
      {
        "questionBn": "ডিএনএ-এর ৪টি নাইট্রোজেন বেস কী কী?",
        "answerBn": "ডিএনএ-এর ৪টি নাইট্রোজেন বেস হলো: অ্যাডেনিন (A), থাইমিন (T), গুয়ানিন (G) এবং সাইটোসিন (C)।",
        "questionEn": "What are the 4 nitrogenous bases of DNA?",
        "answerEn": "Adenine (A), Thymine (T), Guanine (G), and Cytosine (C)."
      }
    ]
  },
  {
    "id": "mitosis",
    "subjectId": "biology",
    "subjectNameBn": "জীববিজ্ঞান",
    "subjectNameEn": "Biology",
    "termBn": "মাইটোসিস",
    "termEn": "Mitosis",
    "pronunciationBn": "মাইটোসিস",
    "symbol": "2n \\rightarrow 2n",
    "definingEquation": "2n \\xrightarrow{\\text{division}} 2n + 2n",
    "siUnitBn": "কোষের সংখ্যা বৃদ্ধি",
    "siUnitEn": "Equational division",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "concept",
    "curriculum": "NCTB জীববিজ্ঞান অধ্যায় ৩ (কোষ বিভাজন)",
    "definitionBn": "যে সমীকরণিক কোষ বিভাজন প্রক্রিয়ায় একটি প্রকৃত মাতৃকোষ বিভাজিত হয়ে সমআকৃতির, সমগুণসম্পন্ন এবং সমসংখ্যক ক্রোমোজোম বিশিষ্ট দুটি অপত্য কোষ সৃষ্টি করে, তাকে মাইটোসিস বলে।",
    "definitionEn": "A process of equational cell division where a single parent cell divides to produce two genetically identical daughter cells.",
    "explanationBn": "মাইটোসিস জীবের দৈহিক বৃদ্ধি এবং ক্ষতস্থান নিরাময়ের জন্য অপরিহার্য। এটি ৫টি প্রধান ধাপে সম্পন্ন হয়: প্রোফেজ, প্রো-মেটাফেজ, মেটাফেজ, অ্যানাফেজ এবং টেলোফেজ। মেটাফেজ ধাপে ক্রোমোজোমগুলো বিষুবীয় অঞ্চলে অবস্থান করে এবং সবচেয়ে খাটো ও মোটা দেখা যায়। মাইটোসিসের অনিয়ন্ত্রিত বিভাজনের ফলেই টিউমার ও ক্যান্সারের সৃষ্টি হয়।",
    "explanationEn": "Mitosis powers organismal somatic growth, regeneration, and asexual reproduction. It progresses through five sequential phases: Prophase, Prometaphase, Metaphase, Anaphase, and Telophase. Dysregulated mitotic cycles cause uncontrolled cellular proliferation leading to oncogenic tumors.",
    "keyPointsBn": [
      "মাইটোসিসকে সমীকরণিক বিভাজন (Equational Division) বলা হয় কারণ ক্রোমোজোম সংখ্যা অপরিবর্তিত থাকে ($2n \\rightarrow 2n$)।",
      "দেহের দৈহিক বৃদ্ধি ও ক্ষয়পূরণের জন্য দায়ী।",
      "অনিয়ন্ত্রিত মাইটোসিস টিউমার ও ক্যান্সারের জন্ম দেয়।"
    ],
    "keyPointsEn": [
      "Known as equational division because ploidy is conserved (2n -> 2n).",
      "Drives tissue growth, maintenance, and wound repair.",
      "Unchecked mitotic proliferation triggers cancer."
    ],
    "relatedToolUrl": "/bn/tools/biology",
    "relatedTermIds": [
      "cell",
      "dna"
    ],
    "faqs": [
      {
        "questionBn": "মাইটোসিসকে সমীকরণিক বিভাজন বলা হয় কেন?",
        "answerBn": "কারণ এ প্রক্রিয়ায় উৎপন্ন অপত্য কোষের ক্রোমোজোম সংখ্যা, আকার ও গুণাবলি হুবহু মাতৃকোষের ক্রোমোজোম সংখ্যার সমান ($2n \\rightarrow 2n$) থাকে।",
        "questionEn": "Why is mitosis called equational division?",
        "answerEn": "Because chromosome number and genetic composition in daughter cells remain identical to the parent cell."
      }
    ]
  },
  {
    "id": "photosynthesis",
    "subjectId": "biology",
    "subjectNameBn": "জীববিজ্ঞান",
    "subjectNameEn": "Biology",
    "termBn": "সালোকসংশ্লেষণ",
    "termEn": "Photosynthesis",
    "pronunciationBn": "ফটোসিনথেসিস",
    "symbol": "\\text{Photosynthesis}",
    "definingEquation": "6\\text{CO}_2 + 12\\text{H}_2\\text{O} \\xrightarrow[\\text{Chlorophyll}]{\\text{Light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 + 6\\text{H}_2\\text{O}",
    "siUnitBn": "জৈব রাসায়নিক প্রক্রিয়া",
    "siUnitEn": "Biochemical process",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "concept",
    "curriculum": "NCTB জীববিজ্ঞান অধ্যায় ৪ (জীবনীশক্তি)",
    "definitionBn": "যে জৈব রাসায়নিক প্রক্রিয়ায় সবুজ উদ্ভিদ সূর্যালোকের উপস্থিতিতে ক্লোরোফিলের সাহায্যে পানি ও কার্বন ডাই-অক্সাইডের বিক্রিয়ায় শর্করা জাতীয় খাদ্য তৈরি করে এবং উপজাত হিসেবে অক্সিজেন নির্গত করে, তাকে সালোকসংশ্লেষণ বলে।",
    "definitionEn": "The biochemical process by which green plants and certain organisms convert light energy into chemical energy in glucose, releasing oxygen.",
    "explanationBn": "সালোকসংশ্লেষণ পৃথিবীর সমস্ত জীবজগতের শক্তির মূল আধার। এটি দুটি প্রধান পর্যায়ে সম্পন্ন হয়: আলোক-নির্ভর পর্যায় (থাইলাকয়েডে ঘটে যেখানে ATP ও NADPH উৎপন্ন হয়) এবং আলোক-নিরপেক্ষ পর্যায় বা কেলভিন চক্র (স্ট্রোমাতে ঘটে যেখানে $\\text{CO}_2$ বিজারণের মাধ্যমে গ্লুকোজ সংশ্লেষিত হয়)। ক্লোরোফিল প্রধানত লাল ও নীল আলো বেশি শোষণ করে এবং সবুজ আলো প্রতিফলিত করে।",
    "explanationEn": "Photosynthesis drives primary ecological production. Chloroplasts synthesize carbohydrates from water and CO2 under sunlight. Light-dependent reactions produce ATP and NADPH in thylakoids, which drive the Calvin cycle in the stroma.",
    "keyPointsBn": [
      "সার্বজনীন সমীকরণ: $6\\text{CO}_2 + 12\\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 + 6\\text{H}_2\\text{O}$।",
      "উদ্ভিদের ক্লোরোপ্লাস্টে এটি সম্পন্ন হয়।",
      "উপজাত হিসেবে উপকারি অক্সিজেন গ্যাস উৎপন্ন করে।"
    ],
    "keyPointsEn": [
      "Net reaction: 6CO2 + 12H2O -> C6H12O6 + 6O2 + 6H2O.",
      "Takes place within leaf mesophyll chloroplasts.",
      "Releases breathable oxygen as an essential metabolic byproduct."
    ],
    "relatedToolUrl": "/bn/tools/biology",
    "relatedTermIds": [
      "cellular-respiration",
      "atp"
    ],
    "faqs": [
      {
        "questionBn": "সালোকসংশ্লেষণে উপজাত হিসেবে নির্গত অক্সিজেনের উৎস কী?",
        "answerBn": "সালোকসংশ্লেষণে নির্গত অক্সিজেনের উৎস হলো পানি ($\\text{H}_2\\text{O}$), যা সূর্যালোকের সাহায্যে ফটোলাইসিস প্রক্রিয়ায় ভেঙে নির্গত হয়।",
        "questionEn": "What is the source of oxygen gas in photosynthesis?",
        "answerEn": "Water (H2O), through the light-driven photolysis splitting reaction."
      }
    ]
  },
  {
    "id": "cellular-respiration",
    "subjectId": "biology",
    "subjectNameBn": "জীববিজ্ঞান",
    "subjectNameEn": "Biology",
    "termBn": "কোষীয় শ্বসন",
    "termEn": "Cellular Respiration",
    "pronunciationBn": "রেসপিরেশন",
    "symbol": "\\text{Respiration}",
    "definingEquation": "\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + 38\\text{ ATP (or 36 ATP)}",
    "siUnitBn": "শক্তি নির্গমন: $kcal$ বা $kJ$",
    "siUnitEn": "Energy release: kcal or kJ",
    "cgsUnit": "cal",
    "dimensionalFormula": "[M L^2 T^{-2}]",
    "quantityType": "concept",
    "curriculum": "NCTB জীববিজ্ঞান অধ্যায় ৪ (জীবনীশক্তি)",
    "definitionBn": "যে জৈব রাসায়নিক প্রক্রিয়ায় কোষস্থ খাদ্যবস্তু অক্সিজেনের উপস্থিতিতে বা অনুপস্থিতিতে জারিত হয়ে খাদ্যের রাসায়নিক শক্তিকে ব্যবহারযোগ্য জৈব শক্তি এটিপিতে (ATP) রূপান্তরিত করে, তাকে শ্বসন বলে।",
    "definitionEn": "The metabolic pathways that break down glucose and produce ATP through aerobic and anaerobic oxidation.",
    "explanationBn": "শ্বসন সব জীবকোষে দিবা-রাত্রি নিরবচ্ছিন্নভাবে চলতে থাকে। শ্বসন দুই প্রকার: সবাত শ্বসন (অক্সিজেনের উপস্থিতিতে ঘটে এবং ১ মোল গ্লুকোজ থেকে ৩৮টি বা আধুনিক মতে ৩৬টি ATP উৎপন্ন হয়) এবং অবাত শ্বসন (অক্সিজেনের অনুপস্থিতিতে ঘটে এবং মাত্র ২টি ATP উৎপন্ন হয়)। সবাত শ্বসনের ৪টি ধাপ: গ্লাইকোলাইসিস (সাইটোপ্লাজমে ঘটে), অ্যাসিটাইল-CoA সৃষ্টি, ক্রেবস চক্র (মাইটোকন্ড্রিয়ায় ঘটে) এবং ইলেকট্রন ট্রান্সপোর্ট চেইন।",
    "explanationEn": "Aerobic respiration breaks down 1 mole of glucose to yield 38 ATP (classical NCTB) or 36 ATP (modern biochemical consensus), releasing 686 kcal. It comprises Glycolysis, Acetyl-CoA synthesis, the Krebs cycle, and the electron transport chain.",
    "keyPointsBn": [
      "সবাত শ্বসনে ১ মোল গ্লুকোজ থেকে ৩৮টি ATP ও ৬৮৬ কিলোক্যালরি শক্তি নির্গত হয়।",
      "ক্রেবস চক্র মাইটোকন্ড্রিয়ার ম্যাট্রিক্সে সম্পন্ন হয়, এজন্য মাইটোকন্ড্রিয়াকে কোষের পাওয়ার হাউজ বলে।",
      "অক্সিজেনবিহীন শ্বসনকে অবাত শ্বসন বা গাঁজন (Fermentation) বলে।"
    ],
    "keyPointsEn": [
      "Aerobic respiration generates 38 ATP and 686 kcal per mole of glucose.",
      "Krebs cycle occurs in mitochondrial matrix, dubbing mitochondria the powerhouse of the cell.",
      "Anaerobic pathway yields only 2 net ATP."
    ],
    "relatedToolUrl": "/bn/tools/biology",
    "relatedTermIds": [
      "atp",
      "photosynthesis"
    ],
    "faqs": [
      {
        "questionBn": "মাইটোকন্ড্রিয়াকে কোষের পাওয়ার হাউজ বলা হয় কেন?",
        "answerBn": "কারণ শ্বসনের সবচেয়ে গুরুত্বপূর্ণ ধাপ ক্রেবস চক্র ও ইলেকট্রন ট্রান্সপোর্ট চেইন মাইটোকন্ড্রিয়ায় সম্পন্ন হয় এবং কোষের যাবতীয় কাজের জন্য প্রয়োজনীয় শক্তির সিংহভাগ (ATP) এখানেই উৎপন্ন হয়।",
        "questionEn": "Why are mitochondria called the powerhouses of the cell?",
        "answerEn": "Because aerobic respiration stages (Krebs cycle and ETC) occur within mitochondria, generating the vast majority of cellular ATP."
      }
    ]
  },
  {
    "id": "atp",
    "subjectId": "biology",
    "subjectNameBn": "জীববিজ্ঞান",
    "subjectNameEn": "Biology",
    "termBn": "এটিপি (জৈব মুদ্রা)",
    "termEn": "ATP (Adenosine Triphosphate)",
    "pronunciationBn": "এডিনোসিন ট্রাইফসফেট",
    "symbol": "\\text{ATP}",
    "definingEquation": "\\text{ADP} + \\text{Pi} + \\text{Energy (7.3 kcal)} \\rightleftharpoons \\text{ATP}",
    "siUnitBn": "শক্তি সঞ্চয়: $7.3\\text{ kcal/mol}$ বা $30.55\\text{ kJ/mol}$",
    "siUnitEn": "7.3 kcal/mol or 30.55 kJ/mol",
    "cgsUnit": "cal/mol",
    "dimensionalFormula": "[M L^2 T^{-2} N^{-1}]",
    "quantityType": "concept",
    "curriculum": "NCTB জীববিজ্ঞান অধ্যায় ৪ (জীবনীশক্তি)",
    "definitionBn": "এডিনিন ও রাইবোজ শর্করার সাথে তিনটি ফসফেট গ্রুপ যুক্ত হয়ে গঠিত উচ্চ শক্তিসম্পন্ন জৈব যৌগকে এটিপি (ATP) বলে, যা জীবদেহের সমস্ত কাজের শক্তির উৎস হিসেবে কাজ করে।",
    "definitionEn": "The primary energy currency of the cell, storing metabolic energy in its high-energy phosphoanhydride bonds.",
    "explanationBn": "এটিপিকে জীবদেহের 'জৈব মুদ্রা' বা 'শক্তি মুদ্রা' (Biological Coin / Energy Currency) বলা হয়। কারণ কোষের কোনো বিক্রিয়ায় শক্তি উৎপন্ন হলে তা এটিপি হিসেবে জমা হয়, আবার কোষের যেকোনো কাজ (যেমন পেশি সংকোচন, প্রোটিন সংশ্লেষণ, স্নায়ু সংকেত পরিবহন) সম্পাদনে এটিপি ভেঙে এডিপি (ADP) ও অজৈব ফসফেটে (Pi) রূপান্তরিত হয়ে শক্তি জোগায়। এটিপির প্রান্তীয় ফসফেট বন্ধন ভাঙলে প্রতি মোলে ৭.৩ কিলোক্যালরি (৩০.৫৫ কিলোজুল) শক্তি নির্গত হয়।",
    "explanationEn": "Referred to as the biological currency of life. Breaking terminal phosphate bonds of ATP yields approximately 7.3 kcal/mol (30.55 kJ/mol), powering vital mechanical, osmotic, and chemical work.",
    "keyPointsBn": [
      "এটিপিকে কোষের জৈব মুদ্রা বা শক্তি মুদ্রা বলা হয়।",
      "প্রতি মোল ATP হাইড্রোলাইসিসে ৭.৩ কিলোক্যালরি শক্তি নির্গত হয়।",
      "ফসফোরাইলেশন প্রক্রিয়ায় ADP থেকে ATP তৈরি হয়।"
    ],
    "keyPointsEn": [
      "Known as the cellular energy coin.",
      "Hydrolysis of terminal phosphate yields 7.3 kcal/mol.",
      "Regenerated via cellular respiration and photophosphorylation."
    ],
    "relatedToolUrl": "/bn/tools/biology",
    "relatedTermIds": [
      "cellular-respiration",
      "photosynthesis"
    ],
    "faqs": [
      {
        "questionBn": "এটিপিকে জৈব মুদ্রা বা শক্তি মুদ্রা বলা হয় কেন?",
        "answerBn": "টাকা দিয়ে যেমন যেকোনো কেনাবেচা করা যায়, তেমনি কোষ তার শক্তি উৎপাদনকালে তা ATP আকারে সঞ্চয় করে এবং যেকোনো কাজের সময় ATP খরচ করে শক্তি লাভ করে। তাই একে জৈব মুদ্রা বলে।",
        "questionEn": "Why is ATP termed the energy currency of the cell?",
        "answerEn": "Just as monetary currency facilitates commerce, cells store and spend energy directly in the form of ATP."
      }
    ]
  },
  {
    "id": "monohybrid-cross",
    "subjectId": "biology",
    "subjectNameBn": "জীববিজ্ঞান",
    "subjectNameEn": "Biology",
    "termBn": "মনোহাইব্রিড ক্রস ও মেন্ডেলের সূত্র",
    "termEn": "Monohybrid Cross",
    "pronunciationBn": "মনোহাইব্রিড ক্রস",
    "symbol": "Tt \\times Tt",
    "definingEquation": "\\text{Phenotypic Ratio } 3:1, \\text{ Genotypic Ratio } 1:2:1",
    "siUnitBn": "অনুপাত (Ratio)",
    "siUnitEn": "Statistical ratio",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "concept",
    "curriculum": "NCTB জীববিজ্ঞান অধ্যায় ১২ (জীবের বংশগতি)",
    "definitionBn": "একজোড়া বিপরীতধর্মী বৈশিষ্ট্যের ওপর ভিত্তি করে একই প্রজাতির দুটি জীবের মধ্যে যে সংকরায়ণ বা ক্রস ঘটানো হয়, তাকে মনোহাইব্রিড ক্রস বলে।",
    "definitionEn": "A genetic cross between parents that differ in only one specific contrasting trait.",
    "explanationBn": "গ্রেগর জোহান মেন্ডেল মটরশুঁটি গাছে লম্বা ($TT$) ও খাটো ($tt$) জাতের মধ্যে মনোহাইব্রিড ক্রস সম্পন্ন করেন। প্রথম অপত্য বংশে ($F_1$) কেবল প্রকট বৈশিষ্ট্য (সব গাছ লম্বা $Tt$) প্রকাশ পায়। কিন্তু $F_1$ উদ্ভিদের মধ্যে স্ব-পরাগায়ন ঘটালে দ্বিতীয় অপত্য বংশে ($F_2$) দৃশ্যমান ফিনোটাইপিক অনুপাত দাঁড়ায় ৩:১ (৩টি লম্বা : ১টি খাটো) এবং জিনোটাইপিক অনুপাত দাঁড়ায় ১:২:১ ($1\\text{ }TT : 2\\text{ }Tt : 1\\text{ }tt$)। এর ওপর ভিত্তি করে মেন্ডেলের প্রথম সূত্র বা 'পৃথকীকরণ সূত্র' (Law of Segregation) প্রতিষ্ঠিত হয়।",
    "explanationEn": "Mendel's monohybrid crosses established the Law of Segregation. Crossing homozygous tall (TT) and dwarf (tt) pea plants yields all tall heterozygotes (Tt) in F1, which segregate in F2 to display a 3:1 phenotypic ratio and a 1:2:1 genotypic ratio.",
    "keyPointsBn": [
      "একজোড়া বিপরীত বৈশিষ্ট্যের ক্রস হলো মনোহাইব্রিড ক্রস।",
      "F2 জনুতে ফিনোটাইপিক অনুপাত ৩:১ এবং জিনোটাইপিক অনুপাত ১:২:১।",
      "মেন্ডেলের ১ম সূত্র (পৃথকীকরণ সূত্র) এর দ্বারা প্রমাণিত হয়।"
    ],
    "keyPointsEn": [
      "Tracks inheritance of a single contrasting gene pair.",
      "F2 generation produces a 3:1 phenotypic and 1:2:1 genotypic distribution.",
      "Demonstrates Mendel's Law of Segregation."
    ],
    "relatedToolUrl": "/bn/tools/biology",
    "relatedTermIds": [
      "dna"
    ],
    "faqs": [
      {
        "questionBn": "মেন্ডেলের প্রথম সূত্রটি (পৃথকীকরণ সূত্র) লেখ।",
        "answerBn": "সংকর জীবে বিপরীত বৈশিষ্ট্যের ফ্যাক্টরগুলো (জিন) মিশ্রিত বা পরিবর্তিত না হয়ে পাশাপাশি অবস্থান করে এবং গ্যামেট সৃষ্টির সময় পরস্পর থেকে পৃথক হয়ে ভিন্ন ভিন্ন গ্যামেটে প্রবেশ করে।",
        "questionEn": "State Mendel's First Law (Law of Segregation).",
        "answerEn": "Allele pairs segregate during gamete formation so that each gamete carries only one allele for each gene."
      }
    ]
  },
  {
    "id": "ecosystem",
    "subjectId": "biology",
    "subjectNameBn": "জীববিজ্ঞান",
    "subjectNameEn": "Biology",
    "termBn": "বাস্তুতন্ত্র ও শক্তি প্রবাহ",
    "termEn": "Ecosystem & Energy Flow",
    "pronunciationBn": "ইকোসিস্টেম অ্যান্ড এনার্জি ফ্লো",
    "symbol": "\\text{Ecosystem}",
    "definingEquation": "E_{n+1} = 0.10 \\times E_n \\text{ (লিন্ডেম্যানের ১০\\% সূত্র)}",
    "siUnitBn": "শক্তি: জুল ($J$) বা ক্যালরি ($cal$)",
    "siUnitEn": "Energy: Joule (J)",
    "cgsUnit": "erg",
    "dimensionalFormula": "[M L^2 T^{-2}]",
    "quantityType": "concept",
    "curriculum": "NCTB জীববিজ্ঞান অধ্যায় ১৩ (জীবের পরিবেশ ও বাস্তুতন্ত্র)",
    "definitionBn": "কোনো নির্দিষ্ট অঞ্চলে বসবাসকারী জীব সম্প্রদায় এবং তাদের চারপাশের জড় পরিবেশের মধ্যকার পারস্পরিক আন্তঃক্রিয়া ও শক্তি বিনিময়ের সুষম ব্যবস্থাকে বাস্তুতন্ত্র বলে।",
    "definitionEn": "A structural and functional community where living biotic organisms interact with their non-living abiotic environment and exchange energy.",
    "explanationBn": "একটি বাস্তুতন্ত্রে উৎপাদক (সবুজ উদ্ভিদ), খাদক (তৃণভোজী, মাংসাশী) ও বিয়োজক (ব্যাকটেরিয়া, ছত্রাক) বিদ্যমান থাকে। বাস্তুতন্ত্রে পুষ্টি উপাদানগুলো চক্রাকারে আবর্তিত হয়, কিন্তু শক্তির প্রবাহ সর্বদা একমুখী (Unidirectional)। লিন্ডেম্যানের ১০% নীতি (Lindeman's 10% Law) অনুসারে, এক পুষ্টি স্তর থেকে পরবর্তী পুষ্টি স্তরে মাত্র ১০% শক্তি স্থানান্তরিত হয় এবং বাকি ৯০% শক্তি শ্বসন ও দৈহিক তাপ হিসেবে পরিবেশে নষ্ট হয়ে যায়।",
    "explanationEn": "An ecosystem integrates biotic communities with abiotic environments. While nutrients cycle continuously, energy flow is strictly unidirectional. Lindeman's 10% ecological law asserts that only 10% of trophic energy passes to the subsequent feeding level, with 90% lost to metabolic respiration.",
    "keyPointsBn": [
      "বাস্তুতন্ত্রের ৩টি জীব উপাদান: উৎপাদক, খাদক ও বিয়োজক।",
      "বাস্তুতন্ত্রে শক্তির প্রবাহ একমুখী এবং পুষ্টির প্রবাহ চক্রাকার।",
      "লিন্ডেম্যানের ১০% নিয়ম: প্রতি পুষ্টি স্তরে মাত্র ১০% শক্তি পরবর্তী স্তরে পৌঁছায়।"
    ],
    "keyPointsEn": [
      "Biotic components include producers, consumers, and decomposers.",
      "Energy flow is strictly unidirectional; nutrient cycling is circular.",
      "Lindeman's rule: only 10% of energy transfers between successive trophic tiers."
    ],
    "relatedToolUrl": "/bn/tools/biology",
    "relatedTermIds": [
      "photosynthesis",
      "cellular-respiration"
    ],
    "faqs": [
      {
        "questionBn": "বাস্তুতন্ত্রে শক্তির প্রবাহ একমুখী কেন?",
        "answerBn": "কারণ সূর্য থেকে উৎপাদকে আসা সৌরশক্তি আর কখনো সূর্যে ফিরে যায় না এবং খাদ্য শিকলে স্থানান্তরের পর তাপ হিসেবে অপচয় হওয়া শক্তি পুনরায় কোনো পুষ্টি স্তরে ফেরত আসে না।",
        "questionEn": "Why is ecosystem energy flow unidirectional?",
        "answerEn": "Solar energy captured by producers degrades into dissipated metabolic heat that cannot be recycled back up the energy chain."
      }
    ]
  },
  {
    "id": "power-set",
    "subjectId": "general-math",
    "subjectNameBn": "সাধারণ গণিত",
    "subjectNameEn": "General Math",
    "termBn": "শক্তি সেট",
    "termEn": "Power Set",
    "pronunciationBn": "পাওয়ার সেট",
    "symbol": "P(A)",
    "definingEquation": "n(P(A)) = 2^n, \\text{ প্রকৃত উপসেট } = 2^n - 1",
    "siUnitBn": "উপাদান সংখ্যা (কার্ডিনালিটি)",
    "siUnitEn": "Cardinality",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "concept",
    "curriculum": "NCTB সাধারণ গণিত অধ্যায় ২ (সেট ও ফাংশন)",
    "definitionBn": "কোনো সেটের সকল উপসেট নিয়ে গঠিত সেটকে ঐ সেটের শক্তি সেট বা পাওয়ার সেট বলে।",
    "definitionEn": "The set of all subsets of a given set, including the empty set and the set itself.",
    "explanationBn": "কোনো সেটের উপাদান সংখ্যা যদি $n$ হয়, তবে তার মোট উপসেট বা শক্তি সেটের উপাদান সংখ্যা হবে $2^n$। আর কোনো সেটের যেসকল উপসেটের উপাদান সংখ্যা মূল সেটের চেয়ে কম, তাদের প্রকৃত উপসেট (Proper Subset) বলা হয়। ফলে প্রকৃত উপসেটের সংখ্যা হয় $2^n - 1$। যেমন $A = \\{a, b\\}$ হলে $P(A) = \\{\\emptyset, \\{a\\}, \\{b\\}, \\{a, b\\}\\}$ যার উপাদান সংখ্যা $2^2 = 4$ এবং প্রকৃত উপসেট ৩টি।",
    "explanationEn": "If a set contains n elements, its power set P(A) contains 2^n subsets. Proper subsets exclude the set itself, yielding 2^n - 1 proper subsets.",
    "keyPointsBn": [
      "শক্তি সেটের উপাদান সংখ্যা সূত্র: $2^n$।",
      "প্রকৃত উপসেটের সংখ্যা: $2^n - 1$।",
      "ফাঁকা সেট ($\\emptyset$) যেকোনো সেটেরই উপসেট।"
    ],
    "keyPointsEn": [
      "Power set size is 2^n.",
      "Proper subsets count equals 2^n - 1.",
      "The empty set is an element of every power set."
    ],
    "relatedToolUrl": "/bn/tools/general-math",
    "relatedTermIds": [
      "cartesian-product"
    ],
    "faqs": [
      {
        "questionBn": "একটি সেটের উপাদান সংখ্যা ৩ হলে তার উপসেট ও প্রকৃত উপসেট সংখ্যা কত?",
        "answerBn": "উপসেট সংখ্যা $2^3 = 8$ টি এবং প্রকৃত উপসেট সংখ্যা $2^3 - 1 = 7$ টি।",
        "questionEn": "If a set has 3 elements, how many subsets and proper subsets exist?",
        "answerEn": "It has 2^3 = 8 subsets and 2^3 - 1 = 7 proper subsets."
      }
    ]
  },
  {
    "id": "cartesian-product",
    "subjectId": "general-math",
    "subjectNameBn": "সাধারণ গণিত",
    "subjectNameEn": "General Math",
    "termBn": "কার্তেসীয় গুণজ",
    "termEn": "Cartesian Product",
    "pronunciationBn": "কার্তেসীয়ান প্রোডাক্ট",
    "symbol": "A \\times B",
    "definingEquation": "A \\times B = \\{(x, y) : x \\in A \\text{ এবং } y \\in B\\}, \\text{ } n(A \\times B) = n(A) \\times n(B)",
    "siUnitBn": "ক্রমজোড়ের সেট",
    "siUnitEn": "Set of ordered pairs",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "concept",
    "curriculum": "NCTB সাধারণ গণিত অধ্যায় ২ (সেট ও ফাংশন)",
    "definitionBn": "দুটি সেটের প্রথমটির উপাদানকে প্রথম পদ এবং দ্বিতীয়টির উপাদানকে দ্বিতীয় পদ বিবেচনা করে যতগুলো ক্রমজোড় তৈরি করা যায়, তাদের সেটকে কার্তেসীয় গুণজ বলে।",
    "definitionEn": "The mathematical set operation returning all ordered pairs (x, y) where x belongs to set A and y belongs to set B.",
    "explanationBn": "কার্তেসীয় গুণজের উপাদানগুলো সাধারণ উপাদান নয়, এগুলো হলো ক্রমজোড় (Ordered Pair)। যদি সেট $A$-এর উপাদান সংখ্যা $p$ এবং সেট $B$-এর উপাদান সংখ্যা $q$ হয়, তবে তাদের কার্তেসীয় গুণজ $A \\times B$-এর উপাদান সংখ্যা হবে $p \\times q$। কার্তেসীয় গুণজ মূলত গণিতে রিলেশন (অন্বয়) এবং ফাংশন সংজ্ঞায়িত করার ভিত্তি তৈরি করে।",
    "explanationEn": "The Cartesian product produces ordered pairs bridging set theory with coordinate geometry and mathematical relations. If cardinality of A is p and B is q, then n(A x B) = p * q.",
    "keyPointsBn": [
      "উপাদানগুলো ক্রমজোড় $(x, y)$ আকারে থাকে।",
      "কার্ডিনালিটি সূত্র: $n(A \\times B) = n(A) \\times n(B)$।",
      "সাধারণভাবে $A \\times B \\ne B \\times A$।"
    ],
    "keyPointsEn": [
      "Elements consist of ordered pairs (x, y).",
      "Cardinality: n(A x B) = n(A) * n(B).",
      "Non-commutative: A x B != B x A in general."
    ],
    "relatedToolUrl": "/bn/tools/general-math",
    "relatedTermIds": [
      "power-set"
    ],
    "faqs": [
      {
        "questionBn": "কার্তেসীয় গুণজ কাকে বলে?",
        "answerBn": "দুটি সেটের উপাদান দ্বারা গঠিত সম্ভাব্য সকল ক্রমজোড়ের সেটকে কার্তেসীয় গুণজ ($A \\times B$) বলে।",
        "questionEn": "What is a Cartesian Product?",
        "answerEn": "A set operation generating all possible ordered pairs from two input sets."
      }
    ]
  },
  {
    "id": "discriminant",
    "subjectId": "higher-math",
    "subjectNameBn": "উচ্চতর গণিত",
    "subjectNameEn": "Higher Math",
    "termBn": "দ্বিঘাত নিশ্চয়ক",
    "termEn": "Discriminant",
    "pronunciationBn": "ডিসক্রিমিন্যান্ট",
    "symbol": "D",
    "definingEquation": "D = b^2 - 4ac \\text{ for } ax^2 + bx + c = 0",
    "siUnitBn": "সংখ্যাগত সূচক",
    "siUnitEn": "Numerical determinant",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "scalar",
    "curriculum": "NCTB উচ্চতর গণিত অধ্যায় ৫ (সমীকরণ)",
    "definitionBn": "দ্বিঘাত সমীকরণ $ax^2 + bx + c = 0$-এর মূলসমূহের প্রকৃতি যে রাশিটি দ্বারা নির্ধারিত হয়, সেই $b^2 - 4ac$ রাশিকে সমীকরণের নিশ্চয়ক বা পৃথকায়ক বলে।",
    "definitionEn": "The algebraic parameter b^2 - 4ac that determines the nature and multiplicity of roots in quadratic equations.",
    "explanationBn": "দ্বিঘাত সমীকরণের সূত্র $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$-এর বর্গমূলের ভেতরের রাশিটিই হলো নিশ্চয়ক $D$। এর মানের ওপর মূলের তিনটি প্রধান চরিত্র নির্ধারিত হয়: ১. $D > 0$ হলে মূলগুলো বাস্তব ও অসমান (পূর্ণবর্গ হলে মূলদ, না হলে অমূলদ); ২. $D = 0$ হলে মূলগুলো বাস্তব ও সমান ($x = -b/2a$); এবং ৩. $D < 0$ হলে মূলগুলো অবাস্তব বা জটিল অনুবন্ধী ($x = \\alpha \\pm i\\beta$)।",
    "explanationEn": "The discriminant determines root geometry: D > 0 gives two distinct real roots (rational if D is a perfect square); D = 0 produces one repeated real root; D < 0 generates complex conjugate roots.",
    "keyPointsBn": [
      "$D = b^2 - 4ac$।",
      "$D > 0$: বাস্তব ও অসমান মূল।",
      "$D = 0$: বাস্তব ও সমান মূল।",
      "$D < 0$: জটিল অনুবন্ধী মূল।"
    ],
    "keyPointsEn": [
      "Formula: D = b^2 - 4ac.",
      "D > 0: two distinct real roots.",
      "D = 0: single repeated real root.",
      "D < 0: complex conjugate roots."
    ],
    "relatedToolUrl": "/bn/tools/quadratic-solver",
    "relatedTermIds": [
      "vector"
    ],
    "faqs": [
      {
        "questionBn": "দ্বিঘাত সমীকরণের মূল কখন বাস্তব ও সমান হয়?",
        "answerBn": "যখন নিশ্চয়কের মান শূন্য হয় ($D = b^2 - 4ac = 0$), তখন দ্বিঘাত সমীকরণের মূল দুটি বাস্তব ও সমান হয়।",
        "questionEn": "When are quadratic roots real and equal?",
        "answerEn": "When the discriminant equals zero (b^2 - 4ac = 0)."
      }
    ]
  },
  {
    "id": "apollonius-theorem",
    "subjectId": "higher-math",
    "subjectNameBn": "উচ্চতর গণিত",
    "subjectNameEn": "Higher Math",
    "termBn": "অ্যাপোলোনিয়াসের উপপাদ্য",
    "termEn": "Apollonius Theorem",
    "pronunciationBn": "অ্যাপোলোনিয়াস থিওরেম",
    "symbol": "3\\sum a^2 = 4\\sum d^2",
    "definingEquation": "AB^2 + AC^2 = 2(AD^2 + BD^2)",
    "siUnitBn": "জ্যামিতিক ক্ষেত্রফল অনুপাত",
    "siUnitEn": "Geometric area ratio",
    "cgsUnit": "None",
    "dimensionalFormula": "[L^2]",
    "quantityType": "concept",
    "curriculum": "NCTB উচ্চতর গণিত অধ্যায় ৩ (জ্যামিতি)",
    "definitionBn": "ত্রিভুজের যেকোনো দুই বাহুর ওপর অঙ্কিত বর্গক্ষেত্রের ক্ষেত্রফলের সমষ্টি, তৃতীয় বাহুর অর্ধেকের ওপর অঙ্কিত বর্গক্ষেত্র এবং ঐ বাহুর সমদ্বিখণ্ডক মধ্যমার ওপর অঙ্কিত বর্গক্ষেত্রের ক্ষেত্রফলের সমষ্টির দ্বিগুণের সমান।",
    "definitionEn": "A theorem relating the length of a median of a triangle to the lengths of its three sides.",
    "explanationBn": "প্রাচীন গ্রিক গণিতবিদ অ্যাপোলোনিয়াস এই কালজয়ী উপপাদ্যটি প্রদান করেন যা পিথাগোরাসের উপপাদ্যের এক অনন্য সার্বজনীন রূপ। ত্রিভুজ $ABC$-তে $AD$ যদি $BC$ বাহুর মধ্যমা হয়, তবে উপপাদ্যটি হলো: $AB^2 + AC^2 = 2(AD^2 + BD^2)$। ত্রিভুজের তিনটি বাহু দেওয়া থাকলে মধ্যমার দৈর্ঘ্য নির্ণয় এবং বাহু ও মধ্যমার সম্পর্কের ক্ষেত্রে $3(a^2 + b^2 + c^2) = 4(d_a^2 + d_b^2 + d_c^2)$ প্রমাণে এটি ব্যবহৃত হয়।",
    "explanationEn": "Generalizes the Pythagorean theorem to arbitrary triangles, relating median lengths to side lengths as AB^2 + AC^2 = 2*(AD^2 + BD^2). It yields the universal median identity: 3 * sum(sides^2) = 4 * sum(medians^2).",
    "keyPointsBn": [
      "উপপাদ্যের সমীকরণ: $AB^2 + AC^2 = 2(AD^2 + BD^2)$।",
      "৩টি বাহু থেকে মধ্যমা নির্ণয়ের কার্যকর পদ্ধতি।",
      "বাহু ও মধ্যমার সম্পর্ক: $3(a^2+b^2+c^2) = 4(d_a^2+d_b^2+d_c^2)$।"
    ],
    "keyPointsEn": [
      "Equation: AB^2 + AC^2 = 2(AD^2 + BD^2).",
      "Used to compute median lengths directly from side dimensions.",
      "Proves 3 * sum(sides^2) = 4 * sum(medians^2)."
    ],
    "relatedToolUrl": "/bn/tools/higher-math",
    "relatedTermIds": [
      "vector"
    ],
    "faqs": [
      {
        "questionBn": "অ্যাপোলোনিয়াসের উপপাদ্যটি বিবৃত কর।",
        "answerBn": "ত্রিভুজের যেকোনো দুই বাহুর ওপর অঙ্কিত বর্গক্ষেত্রদ্বয়ের ক্ষেত্রফলের সমষ্টি, তৃতীয় বাহুর অর্ধেকের ওপর অঙ্কিত বর্গক্ষেত্র এবং ঐ বাহুর মধ্যমার ওপর অঙ্কিত বর্গক্ষেত্রের ক্ষেত্রফলের সমষ্টির দ্বিগুণ।",
        "questionEn": "State Apollonius' Theorem.",
        "answerEn": "The sum of the squares on any two sides of a triangle equals twice the square on half the third side plus twice the square on the median bisecting the third side."
      }
    ]
  },
  {
    "id": "vector",
    "subjectId": "higher-math",
    "subjectNameBn": "উচ্চতর গণিত",
    "subjectNameEn": "Higher Math",
    "termBn": "ভেক্টর ও পরম মান",
    "termEn": "Vector & Magnitude",
    "pronunciationBn": "ভেক্টর অ্যান্ড ম্যাগনিচ্যুড",
    "symbol": "\\vec{v} = x\\hat{i} + y\\hat{j}",
    "definingEquation": "|\\vec{v}| = \\sqrt{x^2 + y^2}, \\text{ } \\theta = \\tan^{-1}\\left(\\frac{y}{x}\\right)",
    "siUnitBn": "রাশির প্রকৃতির ওপর নির্ভরশীল",
    "siUnitEn": "Depends on physical nature",
    "cgsUnit": "None",
    "dimensionalFormula": "Varies",
    "quantityType": "vector",
    "curriculum": "NCTB উচ্চতর গণিত অধ্যায় ১২ (সমতলীয় ভেক্টর)",
    "definitionBn": "যেসব রাশিকে সম্পূর্ণরূপে প্রকাশ করার জন্য মান এবং দিক উভয়ের প্রয়োজন হয়, তাদেরকে ভেক্টর রাশি বলে।",
    "definitionEn": "A geometric entity possessing both magnitude and spatial direction, adhering to the vector parallelogram laws of addition.",
    "explanationBn": "সমতলে একটি ভেক্টরকে একক ভেক্টর $\\hat{i}$ ও $\\hat{j}$ এর সাহায্যে $\\vec{v} = x\\hat{i} + y\\hat{j}$ হিসেবে প্রকাশ করা হয়। এর পরম মান বা দৈর্ঘ্য $|\u000bec{v}| = \\sqrt{x^2 + y^2}$ এবং অনুভূমিক অক্ষের সাথে উৎপন্ন কোণ $\\theta = \\tan^{-1}(y/x)$। যে ভেক্টরের মান ১ তাকে একক ভেক্টর এবং যার মান শূন্য তাকে নাল ভেক্টর বা শূন্য ভেক্টর বলা হয়।",
    "explanationEn": "Vectors combine magnitude and direction. In 2D Cartesian coordinates, v = x*i + y*j with magnitude |v| = sqrt(x^2 + y^2). Vectors obey triangle and parallelogram laws of addition rather than elementary scalar algebra.",
    "keyPointsBn": [
      "ভেক্টরের মান ও দিক উভয়ই রয়েছে।",
      "পরম মান: $|\\vec{v}| = \\sqrt{x^2 + y^2}$।",
      "একক ভেক্টর: কোনো ভেক্টরকে তার মান দিয়ে ভাগ করলে একক ভেক্টর পাওয়া যায় ($\\hat{a} = \\frac{\\vec{a}}{|\\vec{a}|}$)।"
    ],
    "keyPointsEn": [
      "Requires both magnitude and direction.",
      "Magnitude: |v| = sqrt(x^2 + y^2).",
      "Unit vector: vector divided by its scalar magnitude."
    ],
    "relatedToolUrl": "/bn/tools/higher-math",
    "relatedTermIds": [
      "velocity",
      "force"
    ],
    "faqs": [
      {
        "questionBn": "একক ভেক্টর ও নাল ভেক্টর কাকে বলে?",
        "answerBn": "যে ভেক্টরের মান ১ একক তাকে একক ভেক্টর বলে। আর যে ভেক্টরের মান শূন্য এবং যার কোনো সুনির্দিষ্ট দিক নেই তাকে নাল ভেক্টর বা শূন্য ভেক্টর বলে।",
        "questionEn": "What are unit and null vectors?",
        "answerEn": "A unit vector has a magnitude of 1. A null (zero) vector has zero magnitude and an indeterminate direction."
      }
    ]
  },
  {
    "id": "probability",
    "subjectId": "higher-math",
    "subjectNameBn": "উচ্চতর গণিত",
    "subjectNameEn": "Higher Math",
    "termBn": "ক্লাসিক্যাল সম্ভাবনা",
    "termEn": "Classical Probability",
    "pronunciationBn": "প্রোবাবিলিটি",
    "symbol": "P(E)",
    "definingEquation": "P(E) = \\frac{n(E)}{n(S)}, \\text{ } 0 \\le P(E) \\le 1",
    "siUnitBn": "এককবিহীন ভগ্নাংশ বা শতকরা হার",
    "siUnitEn": "Dimensionless ratio / percentage",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "concept",
    "curriculum": "NCTB উচ্চতর গণিত অধ্যায় ১৪ (সম্ভাবনা)",
    "definitionBn": "কোনো দৈব পরীক্ষায় কোনো ঘটনার অনুকূল ফলাফল সংখ্যা এবং মোট সম্ভাব্য ফলাফল সংখ্যার অনুপাতকে ঐ ঘটনার সম্ভাবনা বলে।",
    "definitionEn": "The measure of the likelihood that an event will occur, quantified as the ratio of favorable outcomes to total sample space outcomes.",
    "explanationBn": "সম্ভাবনার মান সর্বদা ০ থেকে ১ এর মধ্যে অবস্থান করে ($0 \\le P(E) \\le 1$)। যে ঘটনা কখনোই ঘটা সম্ভব নয় তার সম্ভাবনা শূন্য ($P=0$, অসম্ভব ঘটনা); আর যে ঘটনা নিশ্চিতভাবে ঘটবে তার সম্ভাবনা এক ($P=1$, নিশ্চিত ঘটনা)। যদি দুটি ঘটনা পরস্পর বর্জনশীল হয়, তবে সংযোগ সম্ভাবনা $P(A \\cup B) = P(A) + P(B)$।",
    "explanationEn": "Quantifies certainty and chance across a normalized range [0, 1]. An impossible event has probability 0; a certain event has probability 1. Mutually exclusive outcomes follow the addition theorem P(A U B) = P(A) + P(B).",
    "keyPointsBn": [
      "সম্ভাবনার সীমা: $0 \\le P(E) \\le 1$।",
      "নিশ্চিত ঘটনার সম্ভাবনা ১ এবং অসম্ভব ঘটনার সম্ভাবনা ০।",
      "অনুকূল ফলাফল / মোট ফলাফল = সম্ভাবনা।"
    ],
    "keyPointsEn": [
      "Bounded strictly between 0 and 1.",
      "Certain events have P = 1; impossible events have P = 0.",
      "Calculated as favorable events over sample space size."
    ],
    "relatedToolUrl": "/bn/tools/higher-math",
    "relatedTermIds": [
      "discriminant"
    ],
    "faqs": [
      {
        "questionBn": "একটি ছক্কা একবার নিক্ষেপ করলে জোড় সংখ্যা আসার সম্ভাবনা কত?",
        "answerBn": "ছক্কায় মোট ফলাফল $n(S) = 6$ এবং জোড় সংখ্যা $\\{2, 4, 6\\}$ এর সংখ্যা $n(E) = 3$। অতএব সম্ভাবনা $P = 3/6 = 1/2 = 0.5$ (৫০%)।",
        "questionEn": "What is the probability of rolling an even number on a fair die?",
        "answerEn": "Sample space = 6, favorable events {2, 4, 6} = 3. Probability P = 3/6 = 1/2 (50%)."
      }
    ]
  },
  {
    "id": "boolean-algebra",
    "subjectId": "ict",
    "subjectNameBn": "আইসিটি",
    "subjectNameEn": "ICT",
    "termBn": "বুলিয়ান অ্যালজেবরা",
    "termEn": "Boolean Algebra",
    "pronunciationBn": "বুলিয়ান অ্যালজেবরা",
    "symbol": "0, 1 \\text{ ও } \\cdot, +, \\overline{A}",
    "definingEquation": "\\overline{A+B} = \\overline{A} \\cdot \\overline{B}, \\text{ } \\overline{A \\cdot B} = \\overline{A} + \\overline{B}",
    "siUnitBn": "যৌক্তিক মান (True/False)",
    "siUnitEn": "Logical state (0 / 1)",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "concept",
    "curriculum": "HSC আইসিটি অধ্যায় ৩ (সংখ্যা পদ্ধতি ও ডিজিটাল লজিক)",
    "definitionBn": "গণিতবিদ জর্জ বুল উদ্ভাবিত সত্য (১) ও মিথ্যা (০) এই দুটি লজিক্যাল মানের ওপর ভিত্তি করে গঠিত বিশেষ বীজগণিতকে বুলিয়ান অ্যালজেবরা বলে।",
    "definitionEn": "The branch of mathematics in which the values of the variables are the truth values true (1) and false (0).",
    "explanationBn": "বুলিয়ান অ্যালজেবরা আধুনিক কম্পিউটার সায়েন্স ও ডিজিটাল ইলেকট্রনিক্সের মূল ভিত্তি। এতে কেবল তিনটি মৌলিক অপারেশন রয়েছে: ১. লজিক্যাল যোগ (OR), ২. লজিক্যাল গুণ (AND), এবং ৩. লজিক্যাল পূরক (NOT)। দ্য মরগ্যানের উপপাদ্য দুটি বুলিয়ান সমীকরণ সরলীকরণে সর্বাধিক ব্যবহৃত হয়: $\\overline{A+B} = \\overline{A} \\cdot \\overline{B}$ এবং $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$।",
    "explanationEn": "Founded by George Boole, Boolean algebra governs all binary digital logic circuits. Its three primitive operators are AND, OR, and NOT. De Morgan's laws provide foundational tools for logic minimization.",
    "keyPointsBn": [
      "শুধুমাত্র দুটি বাইনারি মান নিয়ে কাজ করে: ০ এবং ১।",
      "মৌলিক ৩টি অপারেশন: AND (গুণ), OR (যোগ), NOT (পূরক)।",
      "দ্য মরগ্যানের উপপাদ্য ডিজিটাল সার্কিট সরলীকরণে ব্যবহৃত হয়।"
    ],
    "keyPointsEn": [
      "Operates exclusively on binary states: 0 and 1.",
      "3 core logic operators: AND, OR, and NOT.",
      "De Morgan's laws enable circuit minimization."
    ],
    "relatedToolUrl": "/bn/tools/circuit-simulator",
    "relatedTermIds": [
      "logic-gate",
      "truth-table"
    ],
    "faqs": [
      {
        "questionBn": "দ্য মরগ্যানের উপপাদ্য দুটি কী কী?",
        "answerBn": "১ম সূত্র: $\\overline{A+B} = \\overline{A} \\cdot \\overline{B}$ এবং ২য় সূত্র: $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$।",
        "questionEn": "State De Morgan's two laws.",
        "answerEn": "1st Law: ~(A + B) = ~A * ~B. 2nd Law: ~(A * B) = ~A + ~B."
      }
    ]
  },
  {
    "id": "logic-gate",
    "subjectId": "ict",
    "subjectNameBn": "আইসিটি",
    "subjectNameEn": "ICT",
    "termBn": "লজিক গেট",
    "termEn": "Logic Gate",
    "pronunciationBn": "লজিক গেট",
    "symbol": "\\text{AND, OR, NOT, NAND, NOR, XOR, XNOR}",
    "definingEquation": "Y_{\\text{AND}} = A \\cdot B, \\text{ } Y_{\\text{OR}} = A + B, \\text{ } Y_{\\text{XOR}} = A \\oplus B",
    "siUnitBn": "ইলেকট্রনিক সার্কিট",
    "siUnitEn": "Binary logic",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "concept",
    "curriculum": "HSC আইসিটি অধ্যায় ৩ (সংখ্যা পদ্ধতি ও ডিজিটাল লজিক)",
    "definitionBn": "যেসব ইলেকট্রনিক সার্কিট বুলিয়ান অ্যালজেবরার যুক্তিমূলক প্রবাহ মেনে ইনপুটের ওপর ভিত্তি করে নির্দিষ্ট আউটপুট প্রদান করে, তাদেরকে লজিক গেট বলে।",
    "definitionEn": "An idealized or physical electronic circuit implementing a Boolean function to perform logical operations on one or more binary inputs.",
    "explanationBn": "লজিক গেট আধুনিক কম্পিউটারের প্রসেসর ও মেমোরির বিল্ডিং ব্লক। মৌলিক গেট ৩টি: AND, OR, ও NOT। সর্বজনীন গেট (Universal Gate) হলো NAND ও NOR, কারণ এই দুটি গেট ব্যবহার করে যেকোনো জটিল ডিজিটাল সার্কিট বাস্তবায়ন করা যায়। বিশেষ গেট হলো XOR ও XNOR, যা হাফ ও ফুল অ্যাডার বর্তনী তৈরিতে সরাসরি ব্যবহৃত হয়।",
    "explanationEn": "Logic gates are the basic building blocks of digital integrated circuits. Basic gates are AND, OR, and NOT. NAND and NOR are universal gates because any logic system can be constructed exclusively using either. XOR and XNOR facilitate arithmetic binary addition.",
    "keyPointsBn": [
      "মৌলিক গেট: AND, OR, NOT।",
      "সর্বজনীন গেট: NAND ও NOR।",
      "বিশেষ গেট: XOR ও XNOR (অ্যাডার সার্কিটের জন্য অপরিহার্য)।"
    ],
    "keyPointsEn": [
      "Basic gates: AND, OR, NOT.",
      "Universal gates: NAND and NOR.",
      "Special arithmetic gates: XOR and XNOR."
    ],
    "relatedToolUrl": "/bn/tools/circuit-simulator",
    "relatedTermIds": [
      "boolean-algebra",
      "truth-table"
    ],
    "faqs": [
      {
        "questionBn": "NAND ও NOR গেটকে সর্বজনীন গেট বলা হয় কেন?",
        "answerBn": "কারণ অন্য কোনো গেটের সাহায্য ছাড়াই কেবল NAND গেট অথবা কেবল NOR গেট দিয়ে সব ধরনের মৌলিক গেট ও যেকোনো জটিল লজিক সার্কিট তৈরি করা যায়।",
        "questionEn": "Why are NAND and NOR called universal gates?",
        "answerEn": "Because any Boolean circuit or elementary gate can be implemented solely using NAND gates or solely using NOR gates."
      }
    ]
  },
  {
    "id": "truth-table",
    "subjectId": "ict",
    "subjectNameBn": "আইসিটি",
    "subjectNameEn": "ICT",
    "termBn": "সত্যক সারণি",
    "termEn": "Truth Table",
    "pronunciationBn": "ট্রুথ টেবিল",
    "symbol": "\\text{Table}(A, B \\rightarrow Y)",
    "definingEquation": "\\text{Rows} = 2^n \\text{ (for } n \\text{ inputs)}",
    "siUnitBn": "যৌক্তিক সারণি",
    "siUnitEn": "Logical matrix",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "concept",
    "curriculum": "HSC আইসিটি অধ্যায় ৩ (ডিজিটাল লজিক)",
    "definitionBn": "যে সারণির মাধ্যমে একটি লজিক সার্কিটের বা বুলিয়ান সমীকরণের সকল সম্ভাব্য ইনপুট কম্বিনেশনের বিপরীতে আউটপুটের মান প্রদর্শন করা হয়, তাকে সত্যক সারণি বলে।",
    "definitionEn": "A mathematical table used in logic to compute the functional values of logical expressions for every possible combination of inputs.",
    "explanationBn": "ইনপুট চলকের সংখ্যা $n$ হলে সত্যক সারণিতে মোট সারির সংখ্যা হয় $2^n$। যেমন ২টি ইনপুট চলকের জন্য সারির সংখ্যা $2^2 = 4$ এবং ৩টি ইনপুটের জন্য $2^3 = 8$। সত্যক সারণি ডিজিটাল লজিক সার্কিটের সত্যতা যাচাই, সমীকরণ প্রমাণ এবং সার্কিট ডিজাইনের প্রধান হাতিয়ার হিসেবে কাজ করে।",
    "explanationEn": "A truth table maps all 2^n binary input states to their resulting output states for n input variables. It provides empirical verification for digital logic proofs and circuit specifications.",
    "keyPointsBn": [
      "$n$ সংখ্যক ইনপুটের জন্য সত্যক সারণির সারির সংখ্যা $2^n$।",
      "লজিক সার্কিটের কার্যকারিতা যাচাইয়ের প্রামাণ্য মাধ্যম।",
      "০ ও ১ বাইনারি সমন্বয়ে গঠিত হয়।"
    ],
    "keyPointsEn": [
      "Total rows equal 2^n for n input variables.",
      "Primary diagnostic tool for validating digital logic functions.",
      "Constructed using permutations of 0 and 1."
    ],
    "relatedToolUrl": "/bn/tools/circuit-simulator",
    "relatedTermIds": [
      "logic-gate",
      "boolean-algebra"
    ],
    "faqs": [
      {
        "questionBn": "৩টি ইনপুটের জন্য সত্যক সারণির সারি সংখ্যা কতটি হবে?",
        "answerBn": "৩টি ইনপুটের জন্য সত্যক সারণিতে সারির সংখ্যা হবে $2^3 = 8$ টি।",
        "questionEn": "How many rows are in a truth table with 3 inputs?",
        "answerEn": "A 3-input truth table requires 2^3 = 8 rows."
      }
    ]
  },
  {
    "id": "relational-database",
    "subjectId": "ict",
    "subjectNameBn": "আইসিটি",
    "subjectNameEn": "ICT",
    "termBn": "রিলেশনাল ডেটাবেস ও প্রাইমারি কি",
    "termEn": "Relational Database & Primary Key",
    "pronunciationBn": "রিলেশনাল ডেটাবেস অ্যান্ড প্রাইমারি কি",
    "symbol": "\\text{RDBMS (SQL)}",
    "definingEquation": "\\text{Primary Key} \\leftrightarrow \\text{Foreign Key}",
    "siUnitBn": "ডেটাবেস মডেল",
    "siUnitEn": "Relational schema",
    "cgsUnit": "None",
    "dimensionalFormula": "[M^0 L^0 T^0]",
    "quantityType": "concept",
    "curriculum": "HSC আইসিটি অধ্যায় ৬ (ডেটাবেস ম্যানেজমেন্ট সিস্টেম)",
    "definitionBn": "যে ডেটাবেস ব্যবস্থায় ডেটা এক বা একাধিক আন্তঃসম্পর্কযুক্ত দ্বি-মাত্রিক টেবিলে (সারি ও কলাম) সংরক্ষিত হয় এবং সম্পর্কযুক্ত করা যায়, তাকে রিলেশনাল ডেটাবেস (RDBMS) বলে।",
    "definitionEn": "A database structured to recognize relations between stored items of information using tables with rows (tuples) and columns (attributes).",
    "explanationBn": "রিলেশনাল ডেটাবেসের প্রতিটি টেবিলের প্রতিটি রেকর্ডকে অনন্যভাবে শনাক্ত করার জন্য ব্যবহৃত কলামকে প্রাইমারি কি (Primary Key) বলা হয়। প্রাইমারি কি-এর মান কখনো ফাঁকা (Null) বা পুনরাবৃত্ত হতে পারে না। যখন একটি টেবিলের প্রাইমারি কি অন্য টেবিলে রেফারেন্স হিসেবে ব্যবহৃত হয়, তখন তাকে ফরেন কি (Foreign Key) বলে। এই সম্পর্কের ওপর ভিত্তি করেই SQL ভাষার মাধ্যমে `JOIN`, `SELECT`, `WHERE` কুয়েরি চালানো হয়।",
    "explanationEn": "An RDBMS organizes data into tables of records. A Primary Key uniquely distinguishes each record without duplicate or null entries. A Foreign Key references a Primary Key across tables, enabling complex relational queries via SQL.",
    "keyPointsBn": [
      "ডেটা টেবিল (রো ও কলাম) আকারে সংগঠিত থাকে।",
      "প্রাইমারি কি অনন্য (Unique) এবং কখনো নাল (Null) হতে পারে না।",
      "ফরেন কি-এর মাধ্যমে একাধিক টেবিলের মধ্যে রিলেশনশিপ (1:1, 1:M, M:N) তৈরি হয়।"
    ],
    "keyPointsEn": [
      "Data is organized into structured tables (relations).",
      "Primary Keys are strictly unique and cannot contain NULL values.",
      "Foreign Keys establish cross-table relational integrity."
    ],
    "relatedToolUrl": "/bn/tools/database-simulator",
    "relatedTermIds": [
      "boolean-algebra"
    ],
    "faqs": [
      {
        "questionBn": "প্রাইমারি কি ও ফরেন কি-এর মধ্যে সম্পর্ক কী?",
        "answerBn": "একটি টেবিলের প্রাইমারি কি যখন অন্য কোনো সম্পর্কিত টেবিলে রেকর্ড মেলানোর জন্য রেফারেন্স হিসেবে ব্যবহৃত হয়, তখন সেই কলামটিকে দ্বিতীয় টেবিলে ফরেন কি বলে।",
        "questionEn": "What is the relationship between Primary and Foreign Keys?",
        "answerEn": "A Foreign Key in one table references the unique Primary Key of another table to maintain relational integrity."
      }
    ]
  }
];
