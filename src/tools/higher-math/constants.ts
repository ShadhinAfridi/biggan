/**
 * NCTB SSC Higher Mathematics (Classes 9-10) Knowledge Base & Constants
 * Complete 14-chapter curriculum mapping, definitions, and equations.
 */

export interface ChapterMetadata {
  chapterNumber: number;
  titleBn: string;
  titleEn: string;
  syllabusCategory: 'algebra' | 'geometry' | 'trigonometry_calc' | 'statistics_prob';
  coreFormulas: {
    nameBn: string;
    nameEn: string;
    latex: string;
    descriptionBn: string;
    descriptionEn: string;
  }[];
}

export const HIGHER_MATH_CHAPTERS: ChapterMetadata[] = [
  {
    chapterNumber: 1,
    titleBn: 'সেট ও ফাংশন (Set and Function)',
    titleEn: 'Set and Function',
    syllabusCategory: 'algebra',
    coreFormulas: [
      {
        nameBn: 'উপসেটের সংখ্যা',
        nameEn: 'Number of Subsets',
        latex: 'n(P(A)) = 2^n',
        descriptionBn: 'কোনো সেটের উপাদান সংখ্যা n হলে তার উপসেট সংখ্যা 2^n',
        descriptionEn: 'A set with n elements has 2^n subsets',
      },
      {
        nameBn: 'তিন সেটের ভেনচিত্র সূত্র',
        nameEn: 'Three-Set Inclusion-Exclusion',
        latex: 'n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - n(A \\cap B) - n(B \\cap C) - n(C \\cap A) + n(A \\cap B \\cap C)',
        descriptionBn: 'তিনটি সসীম সেটের সংযোগের উপাদান সংখ্যা নির্ণয়',
        descriptionEn: 'Union of three finite sets using inclusion-exclusion principle',
      },
      {
        nameBn: 'ভগ্নাংশ ফাংশনের বিপরীত',
        nameEn: 'Fractional Inverse Function',
        latex: 'f(x) = \\frac{ax+b}{cx+d} \\implies f^{-1}(x) = \\frac{-dx+b}{cx-a}',
        descriptionBn: 'এক-এক ও সার্বিক ভগ্নাংশ ফাংশনের বিপরীত ফাংশন',
        descriptionEn: 'Inverse of a linear fractional bijective function',
      },
    ],
  },
  {
    chapterNumber: 2,
    titleBn: 'বীজগাণিতিক রাশি (Algebraic Expression)',
    titleEn: 'Algebraic Expression',
    syllabusCategory: 'algebra',
    coreFormulas: [
      {
        nameBn: 'ভাগশেষ উপপাদ্য',
        nameEn: 'Remainder Theorem',
        latex: 'P(x) = (x - a)Q(x) + R \\implies R = P(a)',
        descriptionBn: 'P(x) কে (x-a) দ্বারা ভাগ করলে ভাগশেষ হবে P(a)',
        descriptionEn: 'Dividing polynomial P(x) by (x-a) leaves remainder P(a)',
      },
      {
        nameBn: 'চক্র-ক্রমিক ঘন অভেদ',
        nameEn: 'Cyclic Cubic Identity',
        latex: 'a^3 + b^3 + c^3 - 3abc = \\frac{1}{2}(a+b+c)[(a-b)^2 + (b-c)^2 + (c-a)^2]',
        descriptionBn: 'যদি a+b+c = 0 হয় তবে a^3 + b^3 + c^3 = 3abc',
        descriptionEn: 'If a+b+c = 0, then a^3 + b^3 + c^3 = 3abc',
      },
    ],
  },
  {
    chapterNumber: 3,
    titleBn: 'জ্যামিতি (Geometry - Apollonius Theorem)',
    titleEn: 'Geometry (Apollonius Theorem)',
    syllabusCategory: 'geometry',
    coreFormulas: [
      {
        nameBn: 'এ্যাপোলোনিয়াসের উপপাদ্য',
        nameEn: "Apollonius's Theorem",
        latex: 'AB^2 + AC^2 = 2(AD^2 + BD^2)',
        descriptionBn: 'ত্রিভুজের যেকোনো দুই বাহুর বর্গের সমষ্টি = মধ্যমার বর্গের দ্বিগুণ + তৃতীয় বাহুর অর্ধেকের বর্গের দ্বিগুণ',
        descriptionEn: 'Sum of squares of two sides equals twice the sum of square of median and half the third side',
      },
      {
        nameBn: 'বাহু ও মধ্যমার সম্পর্ক',
        nameEn: 'Sides and Medians Relation',
        latex: '3(a^2 + b^2 + c^2) = 4(d_a^2 + d_b^2 + d_c^2)',
        descriptionBn: 'তিন বাহুর বর্গের সমষ্টির ৩ গুণ = তিন মধ্যমার বর্গের সমষ্টির ৪ গুণ',
        descriptionEn: 'Three times sum of squares of sides equals four times sum of squares of medians',
      },
    ],
  },
  {
    chapterNumber: 5,
    titleBn: 'সমীকরণ (Equations & Quadratics)',
    titleEn: 'Equations (Quadratics)',
    syllabusCategory: 'algebra',
    coreFormulas: [
      {
        nameBn: 'দ্বিঘাত সূত্র ও নিশ্চয়ক',
        nameEn: 'Quadratic Formula & Discriminant',
        latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}, \\quad D = b^2 - 4ac',
        descriptionBn: 'D > 0 হলে বাস্তব ও অসমান, D = 0 হলে বাস্তব ও সমান, D < 0 হলে অবাস্তব/জটিল মূল',
        descriptionEn: 'Discriminant determines real, distinct, equal, or complex conjugate roots',
      },
    ],
  },
  {
    chapterNumber: 6,
    titleBn: 'অসমতা (Inequality)',
    titleEn: 'Inequality',
    syllabusCategory: 'algebra',
    coreFormulas: [
      {
        nameBn: 'একচলক অসমতার সমাধান',
        nameEn: 'Linear Inequality Boundary',
        latex: 'ax + b \\le c \\implies x \\le \\frac{c-b}{a} \\; (a > 0)',
        descriptionBn: 'ঋণাত্মক সংখ্যা দিয়ে গুণ বা ভাগ করলে অসমতার চিহ্ন উল্টে যায়',
        descriptionEn: 'Multiplying or dividing by a negative number reverses the inequality symbol',
      },
    ],
  },
  {
    chapterNumber: 7,
    titleBn: 'অসীম ধারা (Infinite Geometric Series)',
    titleEn: 'Infinite Series',
    syllabusCategory: 'algebra',
    coreFormulas: [
      {
        nameBn: 'অসীমতক সমষ্টি',
        nameEn: 'Infinite Geometric Series Sum',
        latex: 'S_{\\infty} = \\frac{a}{1 - r} \\quad (|r| < 1)',
        descriptionBn: 'অসীম গুণোত্তর ধারার সমষ্টি বিদ্যমান থাকবে যদি এবং কেবল যদি |r| < 1 হয়',
        descriptionEn: 'Infinite geometric sum exists if and only if |r| < 1',
      },
      {
        nameBn: 'আবৃত্ত দশমিককে সাধারণ ভগ্নাংশে রূপান্তর',
        nameEn: 'Recurring Decimal to Fraction',
        latex: '0.\\dot{a}\\dot{b} = \\frac{ab}{99}, \\quad a.b\\dot{c}\\dot{d} = \\frac{abcd - ab}{990}',
        descriptionBn: 'পৌনঃপুনিক দশমিক সংখ্যাকে পূর্ণসংখ্যা ও গুণোত্তর ধারায় ভেঙে ভগ্নাংশে রূপান্তর',
        descriptionEn: 'Converting repeating decimals to irreducible fractions via geometric series',
      },
    ],
  },
  {
    chapterNumber: 8,
    titleBn: 'ত্রিকোণমিতি (Trigonometry - Circular Arc)',
    titleEn: 'Trigonometry (Circular Measure)',
    syllabusCategory: 'trigonometry_calc',
    coreFormulas: [
      {
        nameBn: 'বৃত্তচাপের দৈর্ঘ্য ও বৃত্তকলার ক্ষেত্রফল',
        nameEn: 'Arc Length and Sector Area',
        latex: 's = r\\theta, \\quad A = \\frac{1}{2}r^2\\theta \\quad (\\theta \\text{ in radians})',
        descriptionBn: 'বৃত্তের চাপ s = r theta এবং ক্ষেত্রফল A = 0.5 r^2 theta',
        descriptionEn: 'Arc length s = r*theta and sector area A = 0.5*r^2*theta',
      },
    ],
  },
  {
    chapterNumber: 9,
    titleBn: 'সূচকীয় ও লগারিদমীয় ফাংশন (Exponential & Log Function)',
    titleEn: 'Exponential & Logarithmic Functions',
    syllabusCategory: 'algebra',
    coreFormulas: [
      {
        nameBn: 'লগারিদমের ভিত্তি পরিবর্তন',
        nameEn: 'Change of Base Formula',
        latex: '\\log_a b = \\frac{\\log_c b}{\\log_c a} = \\frac{\\ln b}{\\ln a}',
        descriptionBn: 'লগারিদমের যেকোনো ভিত্তিতে রূপান্তর',
        descriptionEn: 'Base changing law for logarithms',
      },
    ],
  },
  {
    chapterNumber: 10,
    titleBn: 'দ্বিপদী বিস্তৃতি (Binomial Expansion)',
    titleEn: 'Binomial Expansion',
    syllabusCategory: 'algebra',
    coreFormulas: [
      {
        nameBn: 'দ্বিপদী উপপাদ্য ও সমাবেশ',
        nameEn: 'Binomial Theorem & Combinations',
        latex: '(x + y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad \\binom{n}{r} = \\frac{n!}{r!(n-r)!}',
        descriptionBn: 'দ্বিপদী রাশির সাধারণ পদ T_{r+1} = nCr * x^{n-r} * y^r',
        descriptionEn: 'General term in binomial expansion',
      },
    ],
  },
  {
    chapterNumber: 11,
    titleBn: 'স্থানাঙ্ক জ্যামিতি (Coordinate Geometry)',
    titleEn: 'Coordinate Geometry',
    syllabusCategory: 'geometry',
    coreFormulas: [
      {
        nameBn: 'দূরত্ব ও ঢাল সূত্র',
        nameEn: 'Distance and Slope Formulas',
        latex: 'd = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}, \\quad m = \\frac{y_2-y_1}{x_2-x_1}',
        descriptionBn: 'দুটি বিন্দুর সরলরেখাংশের দূরত্ব এবং আনতি কোণের ঢাল',
        descriptionEn: 'Euclidean distance and slope of a line segment',
      },
      {
        nameBn: 'বহুভুজের ক্ষেত্রফল (Shoelace সূত্র)',
        nameEn: 'Polygon Area (Shoelace Formula)',
        latex: '\\text{Area} = \\frac{1}{2} |(x_1y_2 + x_2y_3 + \\dots + x_ny_1) - (y_1x_2 + y_2x_3 + \\dots + y_nx_1)|',
        descriptionBn: 'শীর্ষবিন্দুগুলোকে ঘড়ির কাঁটার বিপরীতক্রমে সাজিয়ে নির্ণায়কের সাহায্যে ক্ষেত্রফল',
        descriptionEn: 'Shoelace formula for any simple polygon with vertices counter-clockwise',
      },
    ],
  },
  {
    chapterNumber: 12,
    titleBn: 'সমতলীয় ভেক্টর (Planar Vectors)',
    titleEn: 'Planar Vectors',
    syllabusCategory: 'geometry',
    coreFormulas: [
      {
        nameBn: 'ভেক্টরের মান ও দিক',
        nameEn: 'Vector Magnitude and Direction',
        latex: '|\\vec{v}| = \\sqrt{x^2 + y^2}, \\quad \\theta = \\tan^{-1}\\left(\\frac{y}{x}\\right)',
        descriptionBn: 'দ্বিমাত্রিক ভেক্টরের মান এবং x-অক্ষের সাথে সৃষ্ট কোণ',
        descriptionEn: 'Cartesian vector magnitude and angle of inclination',
      },
    ],
  },
  {
    chapterNumber: 13,
    titleBn: 'ঘন জ্যামিতি (Solid Geometry - Cone, Cylinder, Sphere)',
    titleEn: 'Solid Geometry (3D Shapes)',
    syllabusCategory: 'geometry',
    coreFormulas: [
      {
        nameBn: 'কোণক (Cone)',
        nameEn: 'Right Circular Cone',
        latex: 'l = \\sqrt{r^2 + h^2}, \\quad V = \\frac{1}{3}\\pi r^2 h, \\quad A_{\\text{curved}} = \\pi r l',
        descriptionBn: 'কোণকের হেলানো উচ্চতা l, আয়তন V এবং বক্রতলের ক্ষেত্রফল',
        descriptionEn: 'Slant height, volume, and curved surface area of a cone',
      },
      {
        nameBn: 'বেলন ও গোলক (Cylinder & Sphere)',
        nameEn: 'Cylinder and Sphere',
        latex: 'V_{\\text{cylinder}} = \\pi r^2 h, \\quad V_{\\text{sphere}} = \\frac{4}{3}\\pi r^3, \\quad A_{\\text{sphere}} = 4\\pi r^2',
        descriptionBn: 'সিলিন্ডার ও গোলকের আয়তন এবং সমগ্রতলের ক্ষেত্রফল',
        descriptionEn: 'Volumes and surface areas of cylinders and spheres',
      },
    ],
  },
  {
    chapterNumber: 14,
    titleBn: 'সম্ভাবনা (Probability)',
    titleEn: 'Probability',
    syllabusCategory: 'statistics_prob',
    coreFormulas: [
      {
        nameBn: 'ঘটনার সম্ভাবনা সূত্র',
        nameEn: 'Classical Probability Formula',
        latex: 'P(E) = \\frac{\\text{অনুকূল ফলাফল সংখ্যা}}{\\text{সমগ্র সম্ভাব্য ফলাফল সংখ্যা}} = \\frac{n(E)}{n(S)}, \\quad 0 \\le P(E) \\le 1',
        descriptionBn: 'যেকোনো ঘটনার সম্ভাবনা সবসময় ০ থেকে ১ এর মধ্যে অবস্থান করে',
        descriptionEn: 'Probability of an event always lies between 0 and 1',
      },
    ],
  },
];
