# Biggan.me — Automated Test Suite Directory (টেস্ট ডিরেক্টরি)

> **Bilingual Documentation (ইংরেজি ও বাংলা সমন্বিত বিবরণ)**  
> Comprehensive catalog of all 98 automated unit test cases running across 7 test suites in `biggan.me`.  
> *biggan.me প্ল্যাটফর্মের ৭টি টেস্ট স্যুটে চলমান সকল ৯৮টি স্বয়ংক্রিয় ইউনিট টেস্টের বিস্তারিত তালিকা। প্রতিটি টেস্টের উদ্দেশ্য, গাণিতিক/বিজ্ঞানিক প্রতিপাদন এবং শিক্ষাক্রমিক প্রাসঙ্গিকতা নিচে তুলে ধরা হলো।*

---

## 📊 Summary Statistics (সারসংক্ষেপ)

| Metric (পরিমাপক) | Value (মান) | Details (বিবরণ) |
| :--- | :--- | :--- |
| **Total Test Suites (মোট টেস্ট ফাইল)** | **7** | `physics`, `chemistry`, `biology`, `general-math`, `higher-math`, `ict-engines`, `engines` |
| **Total Test Cases (মোট টেস্ট কেস)** | **98** | All deterministic, client-side curriculum solvers |
| **Passing Status (পাসের হার)** | **100% (98 / 98 Passing)** | Zero failures or flaky tests |
| **Test Runner (টেস্ট ফ্রেমওয়ার্ক)** | **Vitest v3.0.7** | TypeScript native, ultra-fast test runner |
| **Execution Time (রানটাইম গতি)** | **~400–450 ms** | Fast execution, CI/CD and offline friendly |
| **Curriculum Standard (পাঠ্যক্রম মান)** | **NCTB Bangladesh** | SSC (Class 9–10) & HSC (Class 11–12 ICT) |

---

## 🧭 Quick Navigation (সূচিপত্র)

1. [Suite 1: SSC Physics Engine (এসএসসি পদার্থবিজ্ঞান ইঞ্জিন) — 13 Tests](#41-ssc-physics-engine-testsphysicstestts--13-tests)
2. [Suite 2: SSC Chemistry Engine (এসএসসি রসায়ন ইঞ্জিন) — 11 Tests](#42-ssc-chemistry-engine-testschemistrytestts--11-tests)
3. [Suite 3: SSC Biology Engine (এসএসসি জীববিজ্ঞান ইঞ্জিন) — 10 Tests](#43-ssc-biology-engine-testsbiologytestts--10-tests)
4. [Suite 4: SSC General Math Engine (এসএসসি সাধারণ গণিত ইঞ্জিন) — 17 Tests](#44-ssc-general-math-engine-testsgeneral-mathtestts--17-tests)
5. [Suite 5: SSC Higher Math Engine (এসএসসি উচ্চতর গণিত ইঞ্জিন) — 17 Tests](#45-ssc-higher-math-engine-testshigher-mathtestts--17-tests)
6. [Suite 6: HSC ICT Simulator Engine (এইচএসসি আইসিটি ও সিস্টেম ইঞ্জিন) — 15 Tests](#46-hsc-ict-simulator-engine-testsict-enginestestts--15-tests)
7. [Suite 7: Core Solvers Engine (কোর সলভার ও মৌলিক ইঞ্জিন) — 15 Tests](#47-core-solvers-engine-testsenginestestts--15-tests)
8. [How to Run the Tests (টেস্ট পরিচালনার নির্দেশিকা)](#how-to-run-the-tests-টেস্ট-পরিচালনার-নির্দেশিকা)

---

### 4.1 SSC Physics Engine (`tests/physics.test.ts` — 13 Tests)
**অধ্যায়ভিত্তিক পরিধি:** এসএসসি পদার্থবিজ্ঞান পাঠ্যবইয়ের ১ম থেকে ১৩শ অধ্যায়

| # | অধ্যায় ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | **অধ্যায় ১:** ভৌত রাশি ও পরিমাপ | Calculates vernier constant, slide calipers reading, screw gauge least count, and sphere volume. | ভার্নিয়ার ধ্রুবক, স্লাইড ক্যালিপার্সের মোট দৈর্ঘ্য, স্ক্রু গজের লঘিষ্ঠ গণন এবং গোলকের আয়তন হিসাব করে। | ✅ Passed |
| 02 | **অধ্যায় ২:** গতি | Solves linear motion formulas ($v = u + at$, $s = ut + \frac{1}{2}at^2$) and vertical throw metrics ($H_{max}, T$). | সরলরৈখিক গতির সমীকরণ এবং খাড়া উপরের দিকে নিক্ষিপ্ত বস্তুর সর্বোচ্চ উচ্চতা ও বিচরণকাল বের করে। | ✅ Passed |
| 03 | **অধ্যায় ৩:** বল | Computes force ($F = ma$), momentum in inelastic collisions, and gravitational attraction. | বলের মান ($F = ma$), সংঘর্ষের পর মিলিত বস্তুর বেগ এবং দুটি বস্তুর মধ্যকার মহাকর্ষ বল হিসাব করে। | ✅ Passed |
| 04 | **অধ্যায় ৪:** কাজ, ক্ষমতা ও শক্তি | Calculates work at an angle, kinetic and potential energy, and machine efficiency percentage. | কোণযুক্ত কাজ, গতিশক্তি, বিভবশক্তি এবং প্রদত্ত ক্ষমতা সাপেক্ষে ইঞ্জিনের কর্মদক্ষতা হিসাব করে। | ✅ Passed |
| 05 | **অধ্যায় ৫:** পদার্থের অবস্থা ও চাপ | Computes solid pressure, liquid pressure at depth, hydraulic press force, and Young's modulus. | চাপ, তরলের তলদেশে চাপ, হাইড্রোলিক প্রেসের বল এবং তারের প্রসারণে ইয়ং-এর গুণাঙ্ক বের করে। | ✅ Passed |
| 06 | **অধ্যায় ৬:** বস্তুর উপর তাপের প্রভাব | Converts temperatures across C, F, and K, and calculates linear expansion and sensible/latent heat. | সেলসিয়াস, ফারেনহাইট ও কেলভিন স্কেল রূপান্তর এবং দৈর্ঘ্য প্রসারণ, তাপ ও সুপ্ততাপ হিসাব করে। | ✅ Passed |
| 07 | **অধ্যায় ৭:** তরঙ্গ ও শব্দ | Calculates wave speed ($v = f\lambda$), sound speed at given temperature, and minimum echo distance. | তরঙ্গের বেগ, তাপমাত্রার পরিবর্তনের সাথে শব্দের বেগ এবং প্রতিধ্বনি শোনার ন্যূনতম দূরত্ব বের করে। | ✅ Passed |
| 08 | **অধ্যায় ৮:** আলোর প্রতিফলন | Determines image position, magnification, and orientation in concave and convex spherical mirrors. | অবতল ও উত্তল দর্পণে প্রতিবিম্বের অবস্থান, রৈখিক বিবর্ধন এবং প্রতিবিম্ব বাস্তব না অবাস্তব তা নির্ধারণ করে। | ✅ Passed |
| 09 | **অধ্যায় ৯:** আলোর প্রতিসরণ | Solves Snell's law, finds critical angle for total reflection, and calculates lens power in diopters. | স্নেলের সূত্রে প্রতিসরণ কোণ, পূর্ণ অভ্যন্তরীণ প্রতিফলনের সংকট কোণ এবং লেন্সের ক্ষমতা ডায়োপ্টারে বের করে। | ✅ Passed |
| 10 | **অধ্যায় ১০:** স্থির তড়িৎ | Computes Coulomb force between charges, electric field strength, potential, and capacitance. | দুটি আধানের মধ্যকার কুলম্ব বল, তড়িৎ প্রাবল্য, তড়িৎ বিভব এবং ধারকের ধারকত্ব হিসাব করে। | ✅ Passed |
| 11 | **অধ্যায় ১১:** চল তড়িৎ | Applies Ohm's law, calculates wire resistivity, series/parallel equivalent resistance, and power bills. | ওহমের সূত্র, তারের আপেক্ষিক রোধ, তুল্যরোধ এবং কিলোওয়াট-ঘণ্টা ইউনিটে মাসিক বিদ্যুৎ বিল বের করে। | ✅ Passed |
| 12 | **অধ্যায় ১২:** বিদ্যুতের চৌম্বক ক্রিয়া | Calculates step-up and step-down transformer turns ratio, secondary voltage, and current. | ট্রান্সফরমারের পাকসংখ্যার অনুপাত থেকে গৌণ কুণ্ডলীর ভোল্টেজ ও তড়িৎপ্রবাহ হিসাব করে। | ✅ Passed |
| 13 | **অধ্যায় ১৩:** আধুনিক পদার্থবিজ্ঞান | Computes mass-energy conversion ($E = mc^2$) and radioactive mass remaining after half-lives. | ভর থেকে শক্তি রূপান্তর ($E = mc^2$) এবং অর্ধায়ুর পর তেজস্ক্রিয় পদার্থের অবশিষ্ট ভর বের করে। | ✅ Passed |

---

### 4.2 SSC Chemistry Engine (`tests/chemistry.test.ts` — 11 Tests)
**অধ্যায়ভিত্তিক পরিধি:** এসএসসি রসায়ন পাঠ্যবইয়ের পরিমাণগত রসায়ন ও সমীকরণ

| # | মডিউল ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | সংকেত পার্সার | Parses formulas with brackets and crystal hydrates, calculating exact molar mass. | বন্ধনী ও কেলাস পানিসহ রাসায়নিক সংকেতের পরমাণু সংখ্যা ও মোট মোলার ভর হিসাব করে। | ✅ Passed |
| 02 | মডিউল A: গ্যাস ব্যাপন | Calculates gas diffusion ratios using Graham's law ($r_1 / r_2 = \sqrt{M_2 / M_1}$). | গ্রাহামের সূত্রে দুটি গ্যাসের আণবিক ভর তুলনা করে ব্যাপন হারের অনুপাত বের করে। | ✅ Passed |
| 03 | মডিউল B: পরমাণুর গঠন | Finds average atomic mass from isotopic abundances and electron angular momentum in orbits. | আইসোটোপের শতকরা প্রাচুর্য থেকে গড় আপেক্ষিক ভর এবং বোর কক্ষপথের কৌণিক ভরবেগ বের করে। | ✅ Passed |
| 04 | মডিউল C1: মোল রূপান্তর | Converts between grams, moles, STP volume (22.4 L), and particle counts ($6.023 \times 10^{23}$). | গ্রাম ভর, মোল সংখ্যা, প্রমাণ অবস্থায় লিটার আয়তন এবং অণু সংখ্যার মধ্যে পারস্পরিক রূপান্তর করে। | ✅ Passed |
| 05 | মডিউল C2: দ্রবণ ও মোলারিটি | Solves for solute mass or solution molarity using $W = \frac{SMV}{1000}$. | নির্দিষ্ট আয়তন ও ঘনমাত্রার দ্রবণ তৈরিতে প্রয়োজনীয় দ্রবের ভর বা দ্রবণের মোলারিটি হিসাব করে। | ✅ Passed |
| 06 | মডিউল C4: স্থূল ও আণবিক সংকেত | Synthesizes empirical and molecular formulas from mass percentages and molar mass. | মৌলের শতকরা সংযুতি ও আণবিক ভর থেকে স্থূল সংকেত এবং চূড়ান্ত আণবিক সংকেত নির্ণয় করে। | ✅ Passed |
| 07 | মডিউল C5: লিমিটিং বিক্রিয়ক | Identifies the limiting reactant and finds theoretical product yield from reactant masses. | প্রদত্ত ভরের বিক্রিয়কের মধ্যে কোনটি আগে নিঃশেষ হবে এবং কত গ্রাম উৎপাদ তৈরি হবে তা বের করে। | ✅ Passed |
| 08 | মডিউল D: জারণ সংখ্যা | Finds unknown oxidation states algebraically in neutral compounds and radicals. | যৌগের মোট চার্জ হিসাব করে নির্দিষ্ট কোনো মৌলের অজানা জারণ সংখ্যা সমাধান করে। | ✅ Passed |
| 09 | মডিউল E: বিক্রিয়া তাপ ($\Delta H$) | Calculates enthalpy change from broken and formed bond energies and notes exothermic reactions. | ভাঙা ও গড়া বন্ধন শক্তির বিয়োগফল থেকে বিক্রিয়া তাপ ($\Delta H$) হিসাব করে তাপমোচী প্রকৃতি যাচাই করে। | ✅ Passed |
| 10 | মডিউল F: pH ও টাইট্রেশন | Computes pH/pOH from $[H^+]$ and finds required volume in acid-base neutralization. | হাইড্রোজেন আয়ন থেকে pH ও pOH এবং এসিড-ক্ষার প্রশমনের সমীকরণ থেকে প্রয়োজনীয় আয়তন বের করে। | ✅ Passed |
| 11 | মডিউল G: হাইড্রোকার্বন | Generates molecular and condensed structural formulas for alkane and alkene series. | কার্বন সংখ্যা অনুযায়ী অ্যালকেন ও অ্যালকিনের আণবিক ও সংক্ষিপ্ত গাঠনিক সংকেত তৈরি করে। | ✅ Passed |

---

### 4.3 SSC Biology Engine (`tests/biology.test.ts` — 10 Tests)
**অধ্যায়ভিত্তিক পরিধি:** এসএসসি জীববিজ্ঞান পুষ্টি, শ্বসন, বংশগতি ও বাস্তুতন্ত্র

| # | মডিউল ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | মডিউল A: পুষ্টি ও বিএমআই | Calculates BMI and identifies normal, healthy weight boundaries for age and height. | ওজন ও উচ্চতা থেকে বিএমআই হিসাব করে এবং স্বাভাবিক স্বাস্থ্যকর ওজনের সীমা দেখায়। | ✅ Passed |
| 02 | মডিউল A: ওজন ঘাটতি/স্থূলতা | Identifies underweight and overweight categories and calculates required weight changes. | কম ওজন বা অতিরিক্ত ওজন শনাক্ত করে স্বাভাবিক ওজনে পৌঁছাতে কত কেজি বাড়াতে/কমাতে হবে তা জানায়। | ✅ Passed |
| 03 | মডিউল A: বিএমআর ও ক্যালরি | Computes gender-specific BMR and daily calorie requirements (TDEE) based on activity. | ছেলে ও মেয়েদের জন্য আলাদা সূত্রে মৌলিক বিপাকীয় হার (BMR) ও দৈনিক ক্যালরি চাহিদা (TDEE) হিসাব করে। | ✅ Passed |
| 04 | মডিউল B: সবাত শ্বসন (প্রাচীন) | Verifies the 38 ATP balance sheet across Glycolysis, Acetyl-CoA, and Krebs cycle for 1 mol glucose. | ১ মোল গ্লুকোজ জারণে ৩টি ধাপে মোট ৩৮টি ATP, ৬ অণু $CO_2$ এবং উৎপন্ন ক্যালরি শক্তি হিসাব করে। | ✅ Passed |
| 05 | মডিউল B: সবাত শ্বসন (আধুনিক) | Computes the modern 36 ATP yield model and scales proportionally for fractional glucose amounts. | আধুনিক ৩৬ ATP মডেল এবং একাধিক বা ভগ্নাংশ মোল গ্লুকোজের ক্ষেত্রে মোট শক্তি উৎপাদন হিসাব করে। | ✅ Passed |
| 06 | মডিউল C: মেন্ডেলের ১ম সূত্র | Solves monohybrid cross ($Tt \times Tt$), producing a 3:1 phenotypic and 1:2:1 genotypic ratio. | একসংকর ক্রস ($Tt \times Tt$) সমাধান করে ৩:১ ফিনোটাইপ এবং ১:২:১ জিনোটাইপ অনুপাত প্রদর্শন করে। | ✅ Passed |
| 07 | মডিউল C: সেক্স-লিংকড বংশগতি | Solves carrier mother $\times$ normal father cross, showing affected status for sons and daughters. | বাহক মা ও সুস্থ বাবার মিলনে কন্যারা সুস্থ/বাহক এবং ৫০% পুত্রসন্তান বর্ণান্ধ হওয়ার হিসাব দেখায়। | ✅ Passed |
| 08 | মডিউল C: ক্রিস-ক্রস ইনহেরিটেন্স | Demonstrates criss-cross inheritance (color-blind mother passing condition to all sons). | বর্ণান্ধ মা ও স্বাভাবিক বাবার মিলনে ক্রিস-ক্রস নীতি অনুযায়ী সকল পুত্রের বর্ণান্ধতা নিশ্চিত করে। | ✅ Passed |
| 09 | মডিউল D: খাদ্য শিকলে শক্তি প্রবাহ | Applies Lindeman's 10% energy transfer rule across trophic levels and tallies 90% heat loss. | খাদ্য শিকলের প্রতিটি ট্রফিক স্তরে ১০% শক্তি স্থানান্তর এবং ৯০% তাপীয় শক্তি অপচয় হিসাব করে। | ✅ Passed |
| 10 | মডিউল E: রক্তের গ্রুপ সামঞ্জস্যতা | Checks ABO and Rh compatibility, confirming universal donor ($O^-$) and recipient ($AB^+$). | লোহিত রক্তকণিকার অ্যান্টিজেন বিচার করে রক্তের গ্রুপের সামঞ্জস্যতা ও রক্ত জমাট বাঁধার ঝুঁকি পরীক্ষা করে। | ✅ Passed |

---

### 4.4 SSC General Math Engine (`tests/general-math.test.ts` — 17 Tests)
**অধ্যায়ভিত্তিক পরিধি:** এসএসসি সাধারণ গণিত সেট, বীজগণিত, ত্রিকোণমিতি, পরিমিতি ও পরিসংখ্যান

| # | অধ্যায় ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | অধ্যায় ২: শক্তি সেট | Finds power set element count ($2^n$) and proper subsets ($2^n - 1$). | সেটের উপাদান সংখ্যা হতে শক্তি সেটের উপাদান ($2^n$) ও প্রকৃত উপসেট সংখ্যা ($2^n-1$) বের করে। | ✅ Passed |
| 02 | অধ্যায় ২: কার্তেসীয় গুণজ | Generates Cartesian product ordered pairs and verifies cardinality $n(A \times B)$. | দুটি সেটের কার্তেসীয় গুণজের ক্রোমজোড় তৈরি করে এবং মোট উপাদান সংখ্যা হিসাব করে। | ✅ Passed |
| 03 | অধ্যায় ৩: বর্গের অনুসিদ্ধান্ত | Computes $a^2 + b^2$ and $(a-b)^2$ from given sum $(a+b)$ and product $(ab)$. | দুটি রাশির যোগফল ও গুণফল দেওয়া থাকলে বর্গের যোগফল ও বিয়োগফলের বর্গের মান বের করে। | ✅ Passed |
| 04 | অধ্যায় ৩: ঘনের অনুসিদ্ধান্ত | Solves $a^3 + b^3 = (a+b)^3 - 3ab(a+b)$ from sum and product. | ঘনের অনুসিদ্ধান্ত ব্যবহার করে দুটি রাশির ঘনকের সমষ্টির মান হিসাব করে। | ✅ Passed |
| 05 | অধ্যায় ৩: ত্রিপদী রাশির বর্গ | Evaluates $a^2 + b^2 + c^2$ from $(a+b+c)$ and pairwise products $(ab+bc+ca)$. | $(a+b+c)$ ও $(ab+bc+ca)$-এর মান থেকে তিনটি রাশির বর্গের যোগফলের মান নির্ণয় করে। | ✅ Passed |
| 06 | অধ্যায় ৪: সূচকীয় নিয়ম | Evaluates powers and prevents undefined terms ($0^{-n}$). | সূচকীয় রাশির মান হিসাব করে এবং শূন্যের ঋণাত্মক ঘাত ইনপুট দিলে সতর্কতা বার্তা দেখায়। | ✅ Passed |
| 07 | অধ্যায় ৪: লগারিদম | Computes logarithm values and enforces base rules ($b > 0, b \ne 1, N > 0$). | লগারিদমের মান বের করে এবং ভিত্তি ও সংখ্যার শর্তাবলি ($a > 0, a \ne 1, N > 0$) যাচাই করে। | ✅ Passed |
| 08 | অধ্যায় ৪: বৈজ্ঞানিক রূপ | Converts large or small numbers into scientific notation ($A \times 10^n$). | যেকোনো বাস্তব সংখ্যাকে পাঠ্যবই নির্ধারিত আদর্শ বা বৈজ্ঞানিক রূপে ($A \times 10^n$) রূপান্তর করে। | ✅ Passed |
| 09 | অধ্যায় ৯-১০: কোণ ও উচ্চতা | Finds height from distance and elevation angle ($h = d \tan\theta$). | ভূমির দূরত্ব ও উন্নতি কোণ দেওয়া থাকলে সমকোণী ত্রিভুজের সূত্রের সাহায্যে উচ্চতা বের করে। | ✅ Passed |
| 10 | অধ্যায় ৯-১০: দুই বিন্দু থেকে উচ্চতা | Solves tower height observed from two observation points on same or opposite sides. | নদীর এক তীরে বা বিপরীত দুই বিন্দু হতে ভিন্ন উন্নতি কোণে মিনার পর্যবেক্ষণের উচ্চতা বের করে। | ✅ Passed |
| 11 | অধ্যায় ৯-১০: ভাঙা গাছ | Solves the classic storm-broken tree problem for broken and standing heights. | ঝড়ে ভাঙা গাছের অটুট অংশ ও ভূমিতে স্পর্শ করা অংশের উচ্চতা কোণ সাপেক্ষে হিসাব করে। | ✅ Passed |
| 12 | অধ্যায় ১১: যোজন-বিয়োজন | Applies componendo-dividendo $\frac{a+b}{a-b}$ and prevents zero denominator ($a=b$). | অনুপাতের সমীকরণে যোজন-বিয়োজন রূপান্তর করে এবং হর শূন্য হওয়ার ক্ষেত্রে সতর্কবার্তা দেয়। | ✅ Passed |
| 13 | অধ্যায় ১৬: সমবাহু ত্রিভুজ | Calculates equilateral triangle area using $\frac{\sqrt{3}}{4}a^2$. | বাহুর দৈর্ঘ্য দেওয়া থাকলে সমবাহু ত্রিভুজের ক্ষেত্রফল ($\frac{\sqrt{3}}{4}a^2$) নির্ণয় করে। | ✅ Passed |
| 14 | অধ্যায় ১৬: হেরনের সূত্র | Computes triangle area with Heron's formula and enforces triangle inequality ($a+b > c$). | ৩টি বাহু হতে হেরনের সূত্রে ক্ষেত্রফল বের করে এবং ত্রিভুজ অসমতা না মানলে তা আটকে দেয়। | ✅ Passed |
| 15 | অধ্যায় ১৬: সুষম ষড়ভুজ | Calculates regular hexagon area from side length. | প্রতি বাহুর দৈর্ঘ্য দেওয়া থাকলে সুষম বহুভুজ সূত্রের সাহায্যে ষড়ভুজের ক্ষেত্রফল হিসাব করে। | ✅ Passed |
| 16 | অধ্যায় ১৭: গড়, মধ্যক, প্রচুরক | Computes mean, median, and mode from grouped frequency distribution tables. | শ্রেণিকৃত উপাত্তের সারণি থেকে সংক্ষিপ্ত পদ্ধতিতে গড়, মধ্যক ও প্রচুরক শ্রেণির মান বের করে। | ✅ Passed |
| 17 | অধ্যায় ১৭: প্রচুরক প্রান্তিক কেস | Handles modal calculations when the first interval is the modal class ($f_1 = f_m - 0$). | প্রথম শ্রেণিতে প্রচুরক থাকলে পূর্ববর্তী শ্রেণির গণসংখ্যা শূন্য ধরে প্রচুরক সঠিকভাবে সমাধান করে। | ✅ Passed |

---

### 4.5 SSC Higher Math Engine (`tests/higher-math.test.ts` — 17 Tests)
**অধ্যায়ভিত্তিক পরিধি:** এসএসসি উচ্চতর গণিত ১৪টি অধ্যায়ের সূত্র ও প্রমাণ

| # | অধ্যায় ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | অধ্যায় ১: ৩-সেট ভেনচিত্র | Solves 3-set inclusion-exclusion and finds disjoint region counts ($A$ only, $B$ only, $C$ only). | ৩টি সেটের ভেনচিত্রে সংযোগের উপাদান সংখ্যা এবং কেবল একটি সেটের স্বতন্ত্র অঞ্চলের মান বের করে। | ✅ Passed |
| 02 | অধ্যায় ১: বিপরীত ফাংশন | Inverts rational functions $f(x) = \frac{ax+b}{cx+d}$ and finds restricted domain/range values. | ভগ্নাংশ ফাংশনের বিপরীত ফাংশন নির্ণয় করে এবং হর শূন্য হওয়া বিন্দু বাদ দিয়ে ডোমেন-রেঞ্জ দেখায়। | ✅ Passed |
| 03 | অধ্যায় ২: ভাগশেষ উপপাদ্য | Evaluates polynomial remainder $P(a)$ when divided by $(x - a)$ and checks if it is a factor. | বহুপদীকে $(x-a)$ দ্বারা ভাগ করলে ভাগশেষ $P(a)$ কত হবে এবং তা উৎপাদক কি না তা পরীক্ষা করে। | ✅ Passed |
| 04 | অধ্যায় ২: চক্র-ক্রমিক ঘন অভেদ | Evaluates cyclic cubic identity $a^3+b^3+c^3-3abc$ and checks the zero-sum condition. | চক্র-ক্রমিক বহুপদীর মান এবং $a+b+c=0$ হলে রাশিটির মান শূন্য হওয়ার শর্ত প্রমাণ করে। | ✅ Passed |
| 05 | অধ্যায় ৩: অ্যাপোলোনিয়াসের উপপাদ্য | Calculates triangle medians and verifies $3\sum\text{sides}^2 = 4\sum\text{medians}^2$. | ৩টি বাহু হতে অ্যাপোলোনিয়াসের সূত্রে মধ্যমা ৩টির দৈর্ঘ্য ও মৌলিক সম্পর্ক যাচাই করে। | ✅ Passed |
| 06 | অধ্যায় ৫: দ্বিঘাত সমীকরণ | Solves quadratics and determines roots (real distinct, equal, or complex conjugate). | নিশ্চায়ক ($D = b^2 - 4ac$) বিচার করে সমীকরণের মূলের বাস্তব, সমান বা জটিল প্রকৃতি নির্ধারণ করে। | ✅ Passed |
| 07 | অধ্যায় ৬: অসমতা সমাধান | Solves linear inequalities, reversing direction when dividing by negative coefficients. | একচলক অসমতা সমাধান করে এবং ঋণাত্মক সংখ্যা দ্বারা ভাগ করলে চিহ্নের দিক পরিবর্তন করে। | ✅ Passed |
| 08 | অধ্যায় ৭: অসীম গুণোত্তর ধারা | Finds sum of infinite geometric series ($S_\infty = \frac{a}{1-r}$) when $|r| < 1$. | সাধারণ অনুপাত $|r| < 1$ হলে অসীমতক সমষ্টি বের করে এবং $|r| \ge 1$ হলে অপসারিতা জানায়। | ✅ Passed |
| 09 | অধ্যায় ৭: পৌনঃপুনিক দশমিক | Converts recurring decimals ($0.333\dots, 0.1666\dots$) into irreducible fractions ($1/3, 1/6$). | পৌনঃপুনিক দশমিক সংখ্যাকে অসীম গুণোত্তর ধারার নিয়মে সাধারণ ভগ্নাংশে রূপান্তর করে। | ✅ Passed |
| 10 | অধ্যায় ৮-৯: বৃত্তচাপ ও ক্ষেত্রফল | Calculates arc length ($s = r\theta$) and sector area with degree-to-radian conversion. | কোণকে রেডিয়ানে রূপান্তর করে বৃত্তচাপের দৈর্ঘ্য ($s=r\theta$) এবং বৃত্তকলার ক্ষেত্রফল হিসাব করে। | ✅ Passed |
| 11 | অধ্যায় ৮-৯: ভিত্তি পরিবর্তন | Computes logarithms with arbitrary bases using base change formulas. | ভিত্তি পরিবর্তন সূত্রের সাহায্যে যেকোনো ভিত্তির লগারিদমিক মান সমাধান করে। | ✅ Passed |
| 12 | অধ্যায় ১০: দ্বিপদী বিস্তৃতি | Computes combination $nCr$ and binomial coefficients for expansion powers $(x+y)^n$. | সমাবেশ সংখ্যা এবং দ্বিপদী উপপাদ্যের সাহায্যে পদের সহগসমূহ নির্ভুলভাবে তৈরি করে। | ✅ Passed |
| 13 | অধ্যায় ১১: বহুভুজের ক্ষেত্রফল | Computes polygon area using the coordinate Shoelace method for ordered vertices. | শীর্ষবিন্দুগুলোকে ঘড়ির কাঁটার বিপরীত ক্রমে সাজিয়ে শু-লেস পদ্ধতিতে ক্ষেত্রফল বের করে। | ✅ Passed |
| 14 | অধ্যায় ১১: রেখার দূরত্ব ও ঢাল | Calculates Euclidean distance, line slope ($m$), and point-slope linear equation. | দুটি বিন্দুর মধ্যবর্তী দূরত্ব, সরলরেখার ঢাল এবং সরলরেখার সমীকরণ বের করে। | ✅ Passed |
| 15 | অধ্যায় ১২: ভেক্টর বিশ্লেষণ | Computes 2D vector magnitude $|\vec{v}|$ and directional angle in degrees. | দ্বিমাত্রিক ভেক্টরের পরম মান এবং অনুভূমিক অক্ষের সাথে দিক নির্দেশক কোণ ডিগ্রি এককে বের করে। | ✅ Passed |
| 16 | অধ্যায় ১৩: ঘন জ্যামিতি (কোণক) | Calculates cone slant height, curved surface area, and solid volume. | সমবৃত্তভূমিক কোণকের ব্যাসার্ধ ও উচ্চতা হতে হেলানো উচ্চতা এবং আয়তন হিসাব করে। | ✅ Passed |
| 17 | অধ্যায় ১৪: সম্ভাবনা ও অনুপাত | Computes theoretical probability $P(E) = \frac{n(E)}{n(S)}$ and percentage odds. | অনুকূল ও মোট ফলাফলের অনুপাত হতে ক্লাসিক্যাল সম্ভাবনা ও শতকরা হার নির্ধারণ করে। | ✅ Passed |

---

### 4.6 HSC ICT Simulator Engine (`tests/ict-engines.test.ts` — 15 Tests)
**অধ্যায়ভিত্তিক পরিধি:** এইচএসসি আইসিটি বুলিয়ান অ্যালজেবরা, সার্কিট, এসকিউএল, সি ল্যাঙ্গুয়েজ ও এইচটিএমএল

| # | ইঞ্জিন ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | লজিক গেট সিমুলেটর | Evaluates truth tables for basic and universal gates: AND, OR, NOT, XOR, NAND, NOR, XNOR. | মৌলিক ও যৌগিক লজিক গেটের সত্যক সারণি সকল বাইনারি ইনপুটের জন্য যাচাই করে। | ✅ Passed |
| 02 | হাফ অ্যাডার সার্কিট | Computes 2-bit Half Adder Sum ($A \oplus B$) and Carry ($A \cdot B$). | হাফ অ্যাডার বর্তনীতে দুটি বাইনারি বিটের যোগফল ও ক্যারির মান হিসাব করে। | ✅ Passed |
| 03 | ফুল অ্যাডার সার্কিট | Computes 3-bit Full Adder outputs with input carry ($C_{in}$), producing Sum and $C_{out}$. | ইনপুট ক্যারি সহ ফুল অ্যাডারের তিন বিট যোগফল ও ক্যারির আউটপুট বের করে। | ✅ Passed |
| 04 | এসকিউএল সিমুলেটর | Executes `SELECT *` on relational tables, returning all rows and schema columns. | রিলেশনাল ডাটাবেজে সম্পূর্ণ টেবিলের সকল সারি ও কলাম প্রদর্শন করে। | ✅ Passed |
| 05 | এসকিউএল ফিল্টারিং | Filters database records using conditional `WHERE` predicates (e.g. `GPA >= 5.00`). | নির্দিষ্ট শর্ত পূরণকারী রেকর্ডগুলো ফিল্টার করে সঠিক ফলাফল প্রদর্শন করে। | ✅ Passed |
| 06 | এসকিউএল বাছাইকরণ | Sorts numeric and text table records using `ORDER BY` ascending and descending. | কলামের মানের ভিত্তিতে রেকর্ডগুলোকে ঊর্ধ্বক্রম বা নিম্নক্রমে সাজায়। | ✅ Passed |
| 07 | এসকিউএল রিলেশন | Performs relational `INNER JOIN` across primary-foreign keys (Student $\leftrightarrow$ Result). | প্রাইমারি ও ফরেন কি মিলিয়ে দুটি টেবিলকে যুক্ত করে সমন্বিত ফলাফল তৈরি করে। | ✅ Passed |
| 08 | এসকিউএল গ্রুপিং | Computes aggregate counts grouped by categories using `GROUP BY` and `COUNT`. | বিভাগ অনুযায়ী উপাত্তগুলোকে দলবদ্ধ করে শিক্ষার্থীদের মোট সংখ্যা হিসাব করে। | ✅ Passed |
| 09 | এসকিউএল ত্রুটি হ্যান্ডলিং | Catches syntax errors gracefully and displays readable instructional feedback. | কুয়েরিতে ব্যাকরণগত ভুল থাকলে ব্রাউজার না থামিয়ে স্পষ্ট বার্তা দেখায়। | ✅ Passed |
| 10 | সি ট্রেসার (ফিবোনাচ্চি) | Generates step-by-step memory variable traces during Fibonacci sequence loops. | ফিবোনাচ্চি ধারার লুপ চলার সময় ভ্যারিয়েবলের মান পরিবর্তন ধাপে ধাপে ট্রেস করে। | ✅ Passed |
| 11 | সি ট্রেসার (মৌলিক সংখ্যা) | Traces variable updates and condition branches during prime number testing in C. | সংখ্যা মৌলিক কি না তা পরীক্ষার লুপের প্রতিটি ধাপ ও ভ্যারিয়েবলের মান দেখায়। | ✅ Passed |
| 12 | সি ট্রেসার (ফ্যাক্টোরিয়াল) | Traces multiplication accumulator across loop iterations for $n!$ computation. | ১ থেকে $n$ পর্যন্ত ক্রমিক গুণের ধাপে ধাপে মান বৃদ্ধি এবং চূড়ান্ত ফলাফল রেকর্ড করে। | ✅ Passed |
| 13 | এইচটিএমএল টেবিল | Verifies board exam templates with table cells spanning multiple rows and columns. | এইচএসসি উপযোগী টেবিল কাঠামো এবং rowspan ও colspan ট্যাগের সঠিকতা নিশ্চিত করে। | ✅ Passed |
| 14 | পাঠ্যক্রম ডাটাবেজ | Asserts taxonomy completeness across 6 core subjects for both SSC and HSC levels. | ডাটাবেজে এসএসসি ও এইচএসসি স্তরের সকল বিষয়ের তথ্য মজুত থাকা নিশ্চিত করে। | ✅ Passed |
| 15 | অধ্যায় তথ্য উত্তোলন | Tests lookup of localized chapter names, core formulas, and interactive tool routes. | প্রতিটি অধ্যায়ের নাম, সূত্র এবং সংশ্লিষ্ট ক্যালকুলেটর লিঙ্ক নির্ভরযোগ্যভাবে উত্তোলন করে। | ✅ Passed |

---

### 4.7 Core Solvers Engine (`tests/engines.test.ts` — 15 Tests)
**অধ্যায়ভিত্তিক পরিধি:** আণবিক ভর, জারণ-বিজারণ সমতা, তাৎপর্যপূর্ণ অঙ্ক, প্রক্ষেপক ও দ্বিঘাত মূল

| # | ইঞ্জিন ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | মোলার ভর ($H_2O$) | Calculates molar mass of simple binary compounds ($18.015\text{ g/mol}$). | সংকেত ভেঙে হাইড্রোজেন ও অক্সিজেনের পরমাণু গণনা এবং মোলার ভর হিসাব করে। | ✅ Passed |
| 02 | কেলাস লবণ ($CuSO_4\cdot 5H_2O$) | Calculates mass and elemental percentage for copper sulfate pentahydrate. | তুঁতের ৫ অণু কেলাস পানির সংযুক্তি ও তামার শতকরা সংযুতি বের করে। | ✅ Passed |
| 03 | বন্ধনীযুক্ত সংকেত | Handles nested radical multipliers like $Ca(OH)_2$ properly. | ব্র্যাকেটযুক্ত যৌগের বন্ধনীর ভিতরের পরমাণু সঠিক গুণকে প্রসারিত করে ভর যোগ করে। | ✅ Passed |
| 04 | অজানা প্রতীক প্রতিরোধ | Guards against invalid chemical formula typos by throwing descriptive errors. | পর্যায় সারণির বাইরে কোনো ভুল প্রতীক ইনপুট দিলে সিস্টেম সতর্কবার্তা দেখায়। | ✅ Passed |
| 05 | জারণ-বিজারণ (অম্লীয়) | Balances acidic redox half-reactions for $KMnO_4 + FeSO_4$. | অম্লীয় মাধ্যমে পটাশিয়াম পারম্যাঙ্গানেট ও ফেরাস সালফেটের অর্ধ-বিক্রিয়া সমতা করে। | ✅ Passed |
| 06 | জারণ-বিজারণ (ক্ষারীয়) | Balances basic redox half-reactions for $KMnO_4 + KI$ using $OH^-$ ions. | ক্ষারীয় মাধ্যমে পারম্যাঙ্গানেট ও আয়োডাইডের বিক্রিয়ায় হাইড্রোক্সাইড আয়ন সমতা করে। | ✅ Passed |
| 07 | তাৎপর্যপূর্ণ অঙ্ক (শূন্য নিয়ম) | Identifies non-significant leading zeros and significant trailing decimals. | সংখ্যার শুরুর অ-তাৎপর্যপূর্ণ শূন্য এবং দশমিকের পরের তাৎপর্যপূর্ণ শূন্য শনাক্ত করে। | ✅ Passed |
| 08 | তাৎপর্যপূর্ণ অঙ্ক (যোগ) | Enforces addition rounding constrained by the term with fewest decimal places. | যোগ ও বিয়োগের ক্ষেত্রে ফলাফল সর্বনিম্ন দশমিক স্থান বিশিষ্ট রাশির সমানে রাউন্ড করে। | ✅ Passed |
| 09 | তাৎপর্যপূর্ণ অঙ্ক (গুণ) | Enforces multiplication rounding limited by the term with fewest sig figs. | গুণ ও ভাগে ফলাফল সর্বনিম্ন তাৎপর্যপূর্ণ অঙ্ক বিশিষ্ট ইনপুটের সমানে রাউন্ড করে। | ✅ Passed |
| 10 | প্রক্ষেপক গতিপথ | Calculates launch range, maximum height, and coordinate trajectories. | নির্দিষ্ট বেগে ও কোণে নিক্ষিপ্ত বস্তুর অনুভূমিক পাল্লা, উচ্চতা এবং গতিপথ বের করে। | ✅ Passed |
| 11 | অবাস্তব ইনপুট গার্ড | Rejects unphysical inputs such as negative launch velocities or angles over $90^\circ$. | ঋণাত্মক বেগ বা ৯০ ডিগ্রির বেশি নিক্ষেপণ কোণ দিলে ক্যালকুলেটর সতর্কবার্তা দেখায়। | ✅ Passed |
| 12 | দ্বিঘাত মূল (ভিন্ন বাস্তব) | Solves equations with positive discriminants ($D > 0$), yielding distinct real roots. | নিশ্চায়ক ধনাত্মক হলে দ্বিঘাত সমীকরণের দুটি ভিন্ন বাস্তব মূল সমাধান করে। | ✅ Passed |
| 13 | দ্বিঘাত মূল (সমান বাস্তব) | Solves equations with zero discriminants ($D = 0$), yielding repeated roots. | নিশ্চায়ক শূন্য হলে সমীকরণের পুনরাবৃত্ত একটিমাত্র বাস্তব মূল বের করে। | ✅ Passed |
| 14 | দ্বিঘাত মূল (জটিল অনুবন্ধী) | Solves equations with negative discriminants ($D < 0$), yielding complex roots ($\alpha \pm i\beta$). | নিশ্চায়ক ঋণাত্মক হলে কাল্পনিক একক ($i$) সহ অনুবন্ধী জটিল মূল হিসাব করে। | ✅ Passed |
| 15 | দ্বিঘাত সহগ ($a \neq 0$) | Enforces quadratic definition by rejecting $a = 0$. | শীর্ষ সহগ শূন্য ($a=0$) হলে সমীকরণটি দ্বিঘাত না হওয়ায় যথাযথ সতর্কবার্তা প্রদান করে। | ✅ Passed |

---

*Cleaned and normalized text directory for biggan.me.*

## How to Run the Tests (টেস্ট পরিচালনার নির্দেশিকা)

### 1. Run all 98 unit tests (সকল ৯৮টি টেস্ট একসাথে রান করতে):
```bash
npm test
# অথবা
npx vitest run
```

### 2. Run with verbose descriptive names (প্রতিটি টেস্টের পূর্ণ বিবরণ সহ রান করতে):
```bash
npx vitest run --reporter=verbose
```

### 3. Run a specific test suite (যেকোনো একটি নির্দিষ্ট টেস্ট ফাইল রান করতে):
```bash
# Physics Engine
npx vitest run tests/physics.test.ts

# Chemistry Engine
npx vitest run tests/chemistry.test.ts

# Biology Engine
npx vitest run tests/biology.test.ts

# General Math Engine
npx vitest run tests/general-math.test.ts

# Higher Math Engine
npx vitest run tests/higher-math.test.ts

# HSC ICT Engine
npx vitest run tests/ict-engines.test.ts

# Core Engines
npx vitest run tests/engines.test.ts
```

---

*Directory generated automatically from codebase test suites for biggan.me.*
