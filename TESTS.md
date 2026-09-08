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
| 01 | **অধ্যায় ১:** ভৌত রাশি ও পরিমাপ | Calculates vernier constant, slide calipers reading, screw gauge least count, and sphere volume. | ভার্নিয়ার ধ্রুবক, স্লাইড ক্যালিপার্সের রিডিং, স্ক্রু গজের লঘিষ্ঠ গণন আর গোলকের আয়তন একদম নিখুঁতভাবে মাপে। | ✅ Passed |
| 02 | **অধ্যায় ২:** গতি | Solves linear motion formulas ($v = u + at$, $s = ut + \frac{1}{2}at^2$) and vertical throw metrics ($H_{max}, T$). | গতির বেসিক সূত্রগুলো সলভ করে। খাড়া উপরের দিকে ঢিল ছুড়লে কত উঁচুতে উঠবে আর কতক্ষণ বাতাসে ভাসবে—তার হিসাব বের করে। | ✅ Passed |
| 03 | **অধ্যায় ৩:** বল | Computes force ($F = ma$), momentum in inelastic collisions, and gravitational attraction. | বলের মান ($F=ma$), ধাক্কা বা সংঘর্ষের পর মিলিত বস্তুর বেগ এবং মহাকর্ষ বলের মান হিসাব করে। | ✅ Passed |
| 04 | **অধ্যায় ৪:** কাজ, ক্ষমতা ও শক্তি | Calculates work at an angle, kinetic and potential energy, and machine efficiency percentage. | কোণ করে বল প্রয়োগে কাজ, গতি-বিভবশক্তি এবং ইঞ্জিনের কর্মদক্ষতা (Efficiency) কত পারসেন্ট তা হিসাব করে। | ✅ Passed |
| 05 | **অধ্যায় ৫:** পদার্থের অবস্থা ও চাপ | Computes solid pressure, liquid pressure at depth, hydraulic press force, and Young's modulus. | সাধারণ চাপ, পানির নিচে চাপ, হাইড্রোলিক প্রেসের বল এবং তার টেনে বড় করলে ইয়ং-এর গুণাঙ্ক হিসাব করে দেয়। | ✅ Passed |
| 06 | **অধ্যায় ৬:** বস্তুর উপর তাপের প্রভাব | Converts temperatures across C, F, and K, and calculates linear expansion and sensible/latent heat. | সেলসিয়াস, ফারেনহাইট ও কেলভিনে তাপমাত্রা কনভার্ট করে এবং দৈর্ঘ্য প্রসারণ ও সুপ্ততাপের নিখুঁত পরিমাপ করে। | ✅ Passed |
| 07 | **অধ্যায় ৭:** তরঙ্গ ও শব্দ | Calculates wave speed ($v = f\lambda$), sound speed at given temperature, and minimum echo distance. | তরঙ্গের বেগ, তাপমাত্রার সাথে শব্দের বেগ কীভাবে বদলায় এবং প্রতিধ্বনি শোনার ন্যূনতম দূরত্ব কত হবে তা বের করে। | ✅ Passed |
| 08 | **অধ্যায় ৮:** আলোর প্রতিফলন | Determines image position, magnification, and orientation in concave and convex spherical mirrors. | অবতল ও উত্তল আয়নায় প্রতিবিম্ব কোথায় তৈরি হবে, কতগুণ বড় হবে এবং উল্টো নাকি সোজা হবে তা বলে দেয়। | ✅ Passed |
| 09 | **অধ্যায় ৯:** আলোর প্রতিসরণ | Solves Snell's law, finds critical angle for total reflection, and calculates lens power in diopters. | স্নেলের সূত্র দিয়ে প্রতিসরণ কোণ, পূর্ণ অভ্যন্তরীণ প্রতিফলনের সংকট কোণ এবং লেন্সের ক্ষমতা (ডায়োপ্টার) বের করে। | ✅ Passed |
| 10 | **অধ্যায় ১০:** স্থির তড়িৎ | Computes Coulomb force between charges, electric field strength, potential, and capacitance. | দুটি চার্জের মধ্যকার কুলম্ব বল, তড়িৎ প্রাবল্য, বিভব এবং ধারকের ধারকত্ব সহজেই হিসাব করে দেয়। | ✅ Passed |
| 11 | **অধ্যায় ১১:** চল তড়িৎ | Applies Ohm's law, calculates wire resistivity, series/parallel equivalent resistance, and power bills. | ওহমের সূত্র, তারের আপেক্ষিক রোধ, সার্কিটের তুল্যরোধ এবং মাস শেষে বিদ্যুৎ বিল কত আসবে তা হিসাব করে। | ✅ Passed |
| 12 | **অধ্যায় ১২:** বিদ্যুতের চৌম্বক ক্রিয়া | Calculates step-up and step-down transformer turns ratio, secondary voltage, and current. | স্টেপ-আপ ও স্টেপ-ডাউন ট্রান্সফরমারের কুণ্ডলীর পাকসংখ্যার অনুপাত দিয়ে সেকেন্ডারি ভোল্টেজ ও কারেন্ট বের করে। | ✅ Passed |
| 13 | **অধ্যায় ১৩:** আধুনিক পদার্থবিজ্ঞান | Computes mass-energy conversion ($E = mc^2$) and radioactive mass remaining after half-lives. | আইনস্টাইনের $E=mc^2$ সূত্রে ভরের শক্তিতে রূপান্তর এবং অর্ধায়ুর পর তেজস্ক্রিয় পদার্থের কতটুকু বাকি থাকবে তা নির্ণয় করে। | ✅ Passed |

---

### 4.2 SSC Chemistry Engine (`tests/chemistry.test.ts` — 11 Tests)
**অধ্যায়ভিত্তিক পরিধি:** এসএসসি রসায়ন পাঠ্যবইয়ের পরিমাণগত রসায়ন ও সমীকরণ

| # | মডিউল ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | কেমিক্যাল ফর্মুলা পার্সার | Parses formulas with brackets and crystal hydrates, calculating exact molar mass. | ব্র্যাকেট বা পানিযুক্ত কঠিন রাসায়নিক সংকেত ভেঙে পরমাণুর সংখ্যা ও মোলার ভর চমৎকারভাবে বের করে আনে। | ✅ Passed |
| 02 | মডিউল A: গ্যাস ব্যাপন | Calculates gas diffusion ratios using Graham's law ($r_1 / r_2 = \sqrt{M_2 / M_1}$). | গ্রাহামের সূত্র দিয়ে দুটি গ্যাসের আণবিক ভর তুলনা করে কোনটা দ্রুত ছড়াবে, তার অনুপাত বের করে। | ✅ Passed |
| 03 | মডিউল B: পরমাণুর গঠন | Finds average atomic mass from isotopic abundances and electron angular momentum in orbits. | আইসোটোপের শতকরা পরিমাণ থেকে গড় আপেক্ষিক ভর এবং বোর মডেলে ইলেকট্রনের কৌণিক ভরবেগ হিসাব করে। | ✅ Passed |
| 04 | মডিউল C1: মোল রূপান্তর | Converts between grams, moles, STP volume (22.4 L), and particle counts ($6.023 \times 10^{23}$). | ভর, মোল, লিটার আয়তন (STP তে) এবং অণুর সংখ্যার মধ্যে খুব দ্রুত এবং নির্ভুলভাবে কনভার্ট করে দেয়। | ✅ Passed |
| 05 | মডিউল C2: দ্রবণ ও মোলারিটি | Solves for solute mass or solution molarity using $W = \frac{SMV}{1000}$. | একটি নির্দিষ্ট মোলারিটির দ্রবণ বানাতে ঠিক কত গ্রাম পদার্থ লাগবে বা বর্তমান মোলারিটি কত, তা হিসাব করে দেয়। | ✅ Passed |
| 06 | মডিউল C4: স্থূল ও আণবিক সংকেত | Synthesizes empirical and molecular formulas from mass percentages and molar mass. | মৌলগুলোর শতকরা সংযুতি ব্যবহার করে স্থূল সংকেত এবং সেখান থেকে চূড়ান্ত আণবিক সংকেত বের করে। | ✅ Passed |
| 07 | মডিউল C5: লিমিটিং বিক্রিয়ক | Identifies the limiting reactant and finds theoretical product yield from reactant masses. | বিক্রিয়ায় কোনটা আগে শেষ হবে (লিমিটিং বিক্রিয়ক) আর কতটুকু উৎপাদ পাওয়া যাবে, তা আগেভাগেই বলে দেয়। | ✅ Passed |
| 08 | মডিউল D: জারণ সংখ্যা | Finds unknown oxidation states algebraically in neutral compounds and radicals. | কোনো যৌগের মোট চার্জ হিসাব করে নির্দিষ্ট একটা মৌলের অজানা জারণ সংখ্যা খুব সহজেই বের করে ফেলে। | ✅ Passed |
| 09 | মডিউল E: বিক্রিয়া তাপ ($\Delta H$) | Calculates enthalpy change from broken and formed bond energies and notes exothermic reactions. | বন্ধন ভাঙা-গড়ার শক্তির হিসাব কষে বিক্রিয়া তাপ ($\Delta H$) বের করে এবং বিক্রিয়াটি তাপোৎপাদী নাকি তাপহারী তা জানায়। | ✅ Passed |
| 10 | মডিউল F: pH ও টাইট্রেশন | Computes pH/pOH from $[H^+]$ and finds required volume in acid-base neutralization. | হাইড্রোজেন আয়নের ঘনমাত্রা থেকে pH বা pOH বের করে এবং এসিড-ক্ষার প্রশমন সমীকরণ থেকে দরকারি আয়তন হিসাব করে। | ✅ Passed |
| 11 | মডিউল G: হাইড্রোকার্বন | Generates molecular and condensed structural formulas for alkane and alkene series. | কার্বনের সংখ্যার ওপর ভিত্তি করে অ্যালকেন ও অ্যালকিনের আণবিক ও গাঠনিক সংকেত অটোমেটিকভাবে জেনারেট করে। | ✅ Passed |

---

### 4.3 SSC Biology Engine (`tests/biology.test.ts` — 10 Tests)
**অধ্যায়ভিত্তিক পরিধি:** এসএসসি জীববিজ্ঞান পুষ্টি, শ্বসন, বংশগতি ও বাস্তুতন্ত্র

| # | মডিউল ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | BMI ক্যালকুলেটর ও হেলথি ওয়েট রেঞ্জ | Calculates BMI and identifies normal, healthy weight boundaries for age and height. | ওজন আর উচ্চতা দিয়ে BMI মাপে এবং বয়স অনুযায়ী স্বাস্থ্যকর ওজনের রেঞ্জটা দেখিয়ে দেয়। | ✅ Passed |
| 02 | ওজন ঠিক করা (Underweight/Overweight) | Identifies underweight and overweight categories and calculates required weight changes. | ওজন কম নাকি বেশি তা ধরে ফেলে এবং নরমাল ওজনে আসতে ঠিক কত কেজি বাড়াতে বা কমাতে হবে তার টিপস দেয়। | ✅ Passed |
| 03 | BMR ও ডেইলি ক্যালরি রিকোয়ারমেন্ট | Computes gender-specific BMR and daily calorie requirements (TDEE) based on activity. | আপনি দিনে কতটুকু পরিশ্রম করেন, তার ওপর ভিত্তি করে আপনার BMR ও প্রতিদিন কত ক্যালরি খাবার দরকার তা হিসাব করে। | ✅ Passed |
| 04 | সেলুলার শ্বসন (৩৮ ATP মডেল) | Verifies the 38 ATP balance sheet across Glycolysis, Acetyl-CoA, and Krebs cycle for 1 mol glucose. | ১ মোল গ্লুকোজ জারণে ৩টি ধাপে মোট ৩৮টি এটিপি (ATP) ও ৬ অণু $CO_2$ কীভাবে তৈরি হয়, তার পুরা হিসাব তুলে ধরে। | ✅ Passed |
| 05 | সেলুলার শ্বসন (৩৬ ATP মডেল) | Computes the modern 36 ATP yield model and scales proportionally for fractional glucose amounts. | আধুনিক ৩৬ ATP মডেল অনুযায়ী গ্লুকোজ ভেঙে মোট শক্তি উৎপাদনের হিসাব করে (ভগ্নাংশ মোলের জন্যও কাজ করে)। | ✅ Passed |
| 06 | মেন্ডেলের ১ম সূত্র (মোনোহাইব্রিড ক্রস) | Solves monohybrid cross ($Tt \times Tt$), producing a 3:1 phenotypic and 1:2:1 genotypic ratio. | একসংকর ক্রস ($Tt \times Tt$) সলভ করে মেন্ডেলের বিখ্যাত ৩:১ ফিনোটাইপ এবং ১:২:১ জিনোটাইপ অনুপাতটি দেখায়। | ✅ Passed |
| 07 | সেক্স-লিংকড জেনেটিক্স | Solves carrier mother $\times$ normal father cross, showing affected status for sons and daughters. | বাহক মা ও সুস্থ বাবার মিলনে কন্যারা সুস্থ বা বাহক এবং ৫০% ছেলে বর্ণান্ধ হওয়ার সম্ভাবনাটুকু নিখুঁতভাবে দেখায়। | ✅ Passed |
| 08 | ক্রিস-ক্রস ইনহেরিটেন্স | Demonstrates criss-cross inheritance (color-blind mother passing condition to all sons). | বর্ণান্ধ মা ও স্বাভাবিক বাবার মিলনে 'ক্রিস-ক্রস' নীতি অনুযায়ী সকল ছেলেই যে বর্ণান্ধ হবে, সেটি প্রমাণ করে দেয়। | ✅ Passed |
| 09 | খাদ্য শিকলে শক্তির প্রবাহ (১০% রুল) | Applies Lindeman's 10% energy transfer rule across trophic levels and tallies 90% heat loss. | লিন্ডেম্যানের '১০% শক্তি স্থানান্তর' নিয়ম অনুযায়ী খাদ্য শিকলের প্রতি স্তরে কতটুকু শক্তি যায় আর কতটুকু তাপ হয়ে হারায়, তা মাপে। | ✅ Passed |
| 10 | ব্লাড গ্রুপ ম্যাচিং (ABO ও Rh) | Checks ABO and Rh compatibility, confirming universal donor ($O^-$) and recipient ($AB^+$). | রক্ত দেওয়ার সময় অ্যান্টিজেন বিচার করে ABO এবং Rh গ্রুপের ম্যাচিং করে এবং রক্ত জমাট বাঁধার কোনো ঝুঁকি আছে কিনা চেক করে। | ✅ Passed |

---

### 4.4 SSC General Math Engine (`tests/general-math.test.ts` — 17 Tests)
**অধ্যায়ভিত্তিক পরিধি:** এসএসসি সাধারণ গণিত সেট, বীজগণিত, ত্রিকোণমিতি, পরিমিতি ও পরিসংখ্যান

| # | অধ্যায় ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | অধ্যায় ২: পাওয়ার সেট (^n$) | Finds power set element count ($2^n$) and proper subsets ($2^n - 1$). | যেকোনো সেটের উপাদান সংখ্যা থেকে তার পাওয়ার সেটের উপাদান ($2^n$) ও প্রকৃত উপসেট সংখ্যা ($2^n-1$) বের করে। | ✅ Passed |
| 02 | অধ্যায় ২: কার্তেসীয় গুণজ (ক্রস প্রোডাক্ট) | Generates Cartesian product ordered pairs and verifies cardinality $n(A \times B)$. | দুটি সেটের ক্রস গুণন (কার্তেসীয় গুণজ) করে ক্রোমজোড়গুলো তৈরি করে এবং মোট উপাদানের সংখ্যা মিলিয়ে দেখে। | ✅ Passed |
| 03 | অধ্যায় ৩: বর্গের অনুসিদ্ধান্ত | Computes $a^2 + b^2$ and $(a-b)^2$ from given sum $(a+b)$ and product $(ab)$. | দুটি রাশির যোগফল ও গুণফল দেওয়া থাকলে, অনুসিদ্ধান্ত ফেলে খুব সহজেই বর্গের যোগফল ও বিয়োগফল বের করে। | ✅ Passed |
| 04 | অধ্যায় ৩: ঘনের অনুসিদ্ধান্ত | Solves $a^3 + b^3 = (a+b)^3 - 3ab(a+b)$ from sum and product. | মান দেওয়া থাকলে ঘনের অনুসিদ্ধান্ত ($a^3 + b^3$) ব্যবহার করে দুটি রাশির ঘনকের সমষ্টির মান হিসাব করে ফেলে। | ✅ Passed |
| 05 | অধ্যায় ৩: ত্রিপদী রাশির বর্গ | Evaluates $a^2 + b^2 + c^2$ from $(a+b+c)$ and pairwise products $(ab+bc+ca)$. | $(a+b+c)$ ও $(ab+bc+ca)$-এর মান থেকে তিনটি রাশির বর্গের যোগফলের মান মুহূর্তের মধ্যেই নির্ণয় করে। | ✅ Passed |
| 06 | অধ্যায় ৪: সূচকীয় নিয়ম | Evaluates powers and prevents undefined terms ($0^{-n}$). | সূচকের জটিল মান হিসাব করে এবং শূন্যের পাওয়ার মাইনাস দেওয়ার মতো ভুল করলে ইউজারকে অ্যালার্ট করে দেয়। | ✅ Passed |
| 07 | অধ্যায় ৪: লগারিদম | Computes logarithm values and enforces base rules ($b > 0, b \ne 1, N > 0$). | লগারিদমের মান বের করে এবং ম্যাথের নিয়ম অনুযায়ী ভিত্তি ও সংখ্যার শর্তগুলো ($b > 0, b \ne 1$) ঠিক আছে কিনা চেক করে। | ✅ Passed |
| 08 | অধ্যায় ৪: বৈজ্ঞানিক রূপ | Converts large or small numbers into scientific notation ($A \times 10^n$). | অনেক বড় বা ছোট সংখ্যাকে আদর্শ সায়েন্টিফিক ফরমেটে ($A \times 10^n$) কনভার্ট করে দেয়। | ✅ Passed |
| 09 | অধ্যায় ৯-১০: কোণ ও উচ্চতা | Finds height from distance and elevation angle ($h = d \tan\theta$). | ভূমির দূরত্ব আর উন্নতি কোণ দেওয়া থাকলে সমকোণী ত্রিভুজের সূত্র ($h = d \tan\theta$) দিয়ে বিল্ডিং বা মিনারের উচ্চতা মাপে। | ✅ Passed |
| 10 | অধ্যায় ৯-১০: দুই বিন্দু থেকে উচ্চতা | Solves tower height observed from two observation points on same or opposite sides. | নদীর এক তীরে বা দুই পাশের ভিন্ন ভিন্ন উন্নতি কোণ থেকে মিনার বা টাওয়ারের উচ্চতা নিখুঁতভাবে বের করে। | ✅ Passed |
| 11 | অধ্যায় ৯-১০: ভাঙা গাছ | Solves the classic storm-broken tree problem for broken and standing heights. | ঝড়ে গাছ ভেঙে যাওয়ার সেই বিখ্যাত অঙ্কের ভাঙা ও দাঁড়িয়ে থাকা অংশের উচ্চতা বের করে। | ✅ Passed |
| 12 | অধ্যায় ১১: যোজন-বিয়োজন | Applies componendo-dividendo $\frac{a+b}{a-b}$ and prevents zero denominator ($a=b$). | অনুপাতের অঙ্কে যোজন-বিয়োজন ($\frac{a+b}{a-b}$) করে দেয় এবং নিচে শূন্য চলে এলে এরর মেসেজ দিয়ে সতর্ক করে। | ✅ Passed |
| 13 | অধ্যায় ১৬: সমবাহু ত্রিভুজ | Calculates equilateral triangle area using $\frac{\sqrt{3}}{4}a^2$. | শুধু এক বাহুর দৈর্ঘ্য ইনপুট দিলেই সমবাহু ত্রিভুজের ক্ষেত্রফলের সূত্র ফেলে একদম সঠিক মানটা বের করে দেয়। | ✅ Passed |
| 14 | অধ্যায় ১৬: হেরনের সূত্র | Computes triangle area with Heron's formula and enforces triangle inequality ($a+b > c$). | ৩টি বাহুর দৈর্ঘ্য দিলে হেরনের সূত্রে ক্ষেত্রফল মাপে। তবে বাহুগুলো দিয়ে ত্রিভুজ বানানো সম্ভব না হলে আটকে দেয়। | ✅ Passed |
| 15 | অধ্যায় ১৬: সুষম ষড়ভুজ | Calculates regular hexagon area from side length. | সুষম বহুভুজের সূত্র ব্যবহার করে শুধুমাত্র প্রতি বাহুর দৈর্ঘ্য থেকেই যেকোনো ষড়ভুজের ক্ষেত্রফল হিসাব করে দেয়। | ✅ Passed |
| 16 | অধ্যায় ১৭: গড়, মধ্যক, প্রচুরক | Computes mean, median, and mode from grouped frequency distribution tables. | শ্রেণিকৃত উপাত্তের টেবিল থেকে সংক্ষিপ্ত পদ্ধতিতে গড়, মধ্যক ও প্রচুরক শ্রেণির মান অত্যন্ত দ্রুত বের করে। | ✅ Passed |
| 17 | অধ্যায় ১৭: প্রচুরক প্রান্তিক কেস | Handles modal calculations when the first interval is the modal class ($f_1 = f_m - 0$). | প্রথম শ্রেণিতেই প্রচুরক থাকলে, আগের শ্রেণির গণসংখ্যা শূন্য ধরে নিয়ে প্রচুরকের অঙ্কটি একদম ঠিকঠাক সলভ করে। | ✅ Passed |

---

### 4.5 SSC Higher Math Engine (`tests/higher-math.test.ts` — 17 Tests)
**অধ্যায়ভিত্তিক পরিধি:** এসএসসি উচ্চতর গণিত ১৪টি অধ্যায়ের সূত্র ও প্রমাণ

| # | অধ্যায় ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | অধ্যায় ১: ৩-সেট ভেনচিত্র | Solves 3-set inclusion-exclusion and finds disjoint region counts ($A$ only, $B$ only, $C$ only). | ৩টি সেটের ভেনচিত্র থেকে সংযোগের উপাদান এবং কেবল একটি সেটে থাকা স্বতন্ত্র অংশের মান খুব সহজেই বের করে। | ✅ Passed |
| 02 | অধ্যায় ১: বিপরীত ফাংশন | Inverts rational functions $f(x) = \frac{ax+b}{cx+d}$ and finds restricted domain/range values. | ভগ্নাংশ ফাংশনের বিপরীত ফাংশন নির্ণয় করে এবং ডোমেন ও রেঞ্জের শর্তগুলো (কোথায় হর শূন্য হবে) দেখিয়ে দেয়। | ✅ Passed |
| 03 | অধ্যায় ২: ভাগশেষ উপপাদ্য | Evaluates polynomial remainder $P(a)$ when divided by $(x - a)$ and checks if it is a factor. | বহুপদীকে $(x-a)$ দিয়ে ভাগ করলে ভাগশেষ কত থাকবে এবং সেটি আসলেই উৎপাদক কিনা, তা চমৎকারভাবে টেস্ট করে। | ✅ Passed |
| 04 | অধ্যায় ২: চক্র-ক্রমিক ঘন অভেদ | Evaluates cyclic cubic identity $a^3+b^3+c^3-3abc$ and checks the zero-sum condition. | চক্র-ক্রমিক বহুপদীর মান বের করে এবং $a+b+c=0$ হলে রাশিটির মান যে শূন্য হবে—তা গাণিতিকভাবে প্রমাণ করে। | ✅ Passed |
| 05 | অধ্যায় ৩: অ্যাপোলোনিয়াসের উপপাদ্য | Calculates triangle medians and verifies $3\sum\text{sides}^2 = 4\sum\text{medians}^2$. | ৩টি বাহু থেকে অ্যাপোলোনিয়াসের সূত্রে মধ্যমাগুলোর দৈর্ঘ্য মাপে এবং বাহু ও মধ্যমার মধ্যকার মূল সম্পর্কটি মিলিয়ে দেখে। | ✅ Passed |
| 06 | অধ্যায় ৫: দ্বিঘাত সমীকরণ | Solves quadratics and determines roots (real distinct, equal, or complex conjugate). | নিশ্চায়ক ($D$) বিচার করে সমীকরণের মূলগুলো বাস্তব, সমান নাকি জটিল সংখ্যা হবে, তা চেক করে অ্যানসার দেয়। | ✅ Passed |
| 07 | অধ্যায় ৬: অসমতা সমাধান | Solves linear inequalities, reversing direction when dividing by negative coefficients. | একচলকের অসমতা সলভ করে এবং মাইনাস সংখ্যা দিয়ে ভাগ করার সময় নিয়ম অনুযায়ী অসমতার চিহ্ন উল্টে দেয়। | ✅ Passed |
| 08 | অধ্যায় ৭: অসীম গুণোত্তর ধারা | Finds sum of infinite geometric series ($S_\infty = \frac{a}{1-r}$) when $|r| < 1$. | সাধারণ অনুপাত $|r| < 1$ হলে অসীমতক সমষ্টি বের করে এবং $|r| \ge 1$ হলে অপসারিতা জানায়। | ✅ Passed |
| 09 | অধ্যায় ৭: পৌনঃপুনিক দশমিক | Converts recurring decimals ($0.333\dots, 0.1666\dots$) into irreducible fractions ($1/3, 1/6$). | পৌনঃপুনিক দশমিক সংখ্যাকে (যেমন: $০.১৬৬৬\dots$) অসীম গুণোত্তর ধারার নিয়ম খাটিয়ে সাধারণ ভগ্নাংশে কনভার্ট করে। | ✅ Passed |
| 10 | অধ্যায় ৮-৯: বৃত্তচাপ ও ক্ষেত্রফল | Calculates arc length ($s = r\theta$) and sector area with degree-to-radian conversion. | ডিগ্রিকে রেডিয়ানে কনভার্ট করে বৃত্তচাপের দৈর্ঘ্য ($s=r\theta$) এবং বৃত্তকলার ক্ষেত্রফলের হিসাবগুলো মুহূর্তেই করে দেয়। | ✅ Passed |
| 11 | অধ্যায় ৮-৯: ভিত্তি পরিবর্তন | Computes logarithms with arbitrary bases using base change formulas. | লগারিদমের অঙ্ক করার সময় 'ভিত্তি পরিবর্তন সূত্র' (Base Change) ব্যবহার করে যেকোনো বেসের মান সহজে সলভ করে। | ✅ Passed |
| 12 | অধ্যায় ১০: দ্বিপদী বিস্তৃতি | Computes combination $nCr$ and binomial coefficients for expansion powers $(x+y)^n$. | সমাবেশ ($nCr$) এবং দ্বিপদী উপপাদ্যের সূত্র ব্যবহার করে বিস্তৃতির পদগুলোর সহগ একদম নির্ভুলভাবে বের করে আনে। | ✅ Passed |
| 13 | অধ্যায় ১১: বহুভুজের ক্ষেত্রফল | Computes polygon area using the coordinate Shoelace method for ordered vertices. | শীর্ষবিন্দুগুলোকে ঘড়ির কাঁটার উল্টো দিকে সাজিয়ে 'শু-লেস' (Shoelace) পদ্ধতিতে যেকোনো বহুভুজের ক্ষেত্রফল বের করে। | ✅ Passed |
| 14 | অধ্যায় ১১: রেখার দূরত্ব ও ঢাল | Calculates Euclidean distance, line slope ($m$), and point-slope linear equation. | স্থানাঙ্কের দুটি বিন্দুর মধ্যবর্তী দূরত্ব, সরলরেখার ঢাল ($m$) এবং সরলরেখার সমীকরণ চমৎকারভাবে বের করে দেয়। | ✅ Passed |
| 15 | অধ্যায় ১২: ভেক্টর বিশ্লেষণ | Computes 2D vector magnitude $|\vec{v}|$ and directional angle in degrees. | দ্বিমাত্রিক ভেক্টরের পরম মান এবং অনুভূমিক অক্ষের সাথে দিক নির্দেশক কোণ ডিগ্রি এককে বের করে। | ✅ Passed |
| 16 | অধ্যায় ১৩: ঘন জ্যামিতি (কোণক) | Calculates cone slant height, curved surface area, and solid volume. | সমবৃত্তভূমিক কোণকের ব্যাসার্ধ ও উচ্চতা দিলে এর হেলানো উচ্চতা, বক্রতলের ক্ষেত্রফল এবং আয়তন হিসাব করে দেয়। | ✅ Passed |
| 17 | অধ্যায় ১৪: সম্ভাবনা ও অনুপাত | Computes theoretical probability $P(E) = \frac{n(E)}{n(S)}$ and percentage odds. | অনুকূল ও মোট ফলাফলের অনুপাত থেকে ক্লাসিক্যাল সম্ভাবনা বের করে এবং পার্সেন্টেজে এর জেতার চান্স দেখিয়ে দেয়। | ✅ Passed |

---

### 4.6 HSC ICT Simulator Engine (`tests/ict-engines.test.ts` — 15 Tests)
**অধ্যায়ভিত্তিক পরিধি:** এইচএসসি আইসিটি বুলিয়ান অ্যালজেবরা, সার্কিট, এসকিউএল, সি ল্যাঙ্গুয়েজ ও এইচটিএমএল

| # | ইঞ্জিন ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | লজিক গেট সিমুলেটর | Evaluates truth tables for basic and universal gates: AND, OR, NOT, XOR, NAND, NOR, XNOR. | AND, OR, NOT থেকে শুরু করে XOR, NAND, NOR—সবগুলো লজিক গেটের ট্রুথ টেবিল যাচাই করে। | ✅ Passed |
| 02 | হাফ অ্যাডার সার্কিট | Computes 2-bit Half Adder Sum ($A \oplus B$) and Carry ($A \cdot B$). | হাফ অ্যাডার বর্তনীতে দুটি বাইনারি বিট ইনপুট দিলে তার যোগফল (Sum) ও ক্যারির (Carry) মান ঠিকঠাক বের করে দেয়। | ✅ Passed |
| 03 | ফুল অ্যাডার সার্কিট | Computes 3-bit Full Adder outputs with input carry ($C_{in}$), producing Sum and $C_{out}$. | ইনপুট ক্যারি সহ ফুল অ্যাডারের তিন বিটের যোগফল ও চূড়ান্ত ক্যারির আউটপুট একদম লজিক অনুযায়ী বের করে। | ✅ Passed |
| 04 | এসকিউএল সিমুলেটর | Executes `SELECT *` on relational tables, returning all rows and schema columns. | রিলেশনাল ডাটাবেজে SELECT * কুয়েরি চালিয়ে সম্পূর্ণ টেবিলের সকল সারি ও কলাম প্রিভিউ হিসেবে দেখায়। | ✅ Passed |
| 05 | এসকিউএল ফিল্টারিং | Filters database records using conditional `WHERE` predicates (e.g. `GPA >= 5.00`). | WHERE কন্ডিশন ব্যবহার করে বিশাল ডাটাবেজ থেকে নির্দিষ্ট শর্ত পূরণ করা রেকর্ডগুলো আলাদা করে ফিল্টার করে আনে। | ✅ Passed |
| 06 | এসকিউএল বাছাইকরণ | Sorts numeric and text table records using `ORDER BY` ascending and descending. | ORDER BY ব্যবহার করে যেকোনো কলামের ভ্যালুকে ছোট থেকে বড় বা বড় থেকে ছোট আকারে সুন্দরভাবে সাজিয়ে দেয়। | ✅ Passed |
| 07 | এসকিউএল রিলেশন | Performs relational `INNER JOIN` across primary-foreign keys (Student $\leftrightarrow$ Result). | প্রাইমারি ও ফরেন কি (Key) মিলিয়ে INNER JOIN-এর মাধ্যমে দুটি আলাদা টেবিলকে যুক্ত করে একটা রেজাল্ট বানায়। | ✅ Passed |
| 08 | এসকিউএল গ্রুপিং | Computes aggregate counts grouped by categories using `GROUP BY` and `COUNT`. | GROUP BY এবং COUNT ফাংশন চালিয়ে বিভাগ অনুযায়ী ডেটাকে গ্রুপ করে মোট শিক্ষার্থীর সংখ্যা গুনে দেখায়। | ✅ Passed |
| 09 | এসকিউএল ত্রুটি হ্যান্ডলিং | Catches syntax errors gracefully and displays readable instructional feedback. | কুয়েরি লিখতে কোনো সিনট্যাক্স ভুল হলে ব্রাউজার ক্র্যাশ না করিয়ে, কোথায় ভুল হয়েছে তা স্পষ্টভাবে বলে দেয়। | ✅ Passed |
| 10 | সি ট্রেসার (ফিবোনাচ্চি) | Generates step-by-step memory variable traces during Fibonacci sequence loops. | ফিবোনাচ্চি ধারার লুপ চলার সময় মেমোরিতে ভ্যারিয়েবলের মান কীভাবে পাল্টাচ্ছে, তা ভিজ্যুয়ালি দেখায়। | ✅ Passed |
| 11 | সি ট্রেসার (মৌলিক সংখ্যা) | Traces variable updates and condition branches during prime number testing in C. | মৌলিক সংখ্যা চেক করার প্রোগ্রামে লুপের প্রতিটি স্টেপ ও কন্ডিশন কীভাবে কাজ করছে তার লাইভ পরিবর্তন দেখায়। | ✅ Passed |
| 12 | সি ট্রেসার (ফ্যাক্টোরিয়াল) | Traces multiplication accumulator across loop iterations for $n!$ computation. | ১ থেকে $n$ পর্যন্ত ক্রমিক গুণের সময় ($n!$) লুপের প্রতি ইটারেশনে ভ্যালু কীভাবে বাড়ে তা রেকর্ড করে রাখে। | ✅ Passed |
| 13 | এইচটিএমএল টেবিল | Verifies board exam templates with table cells spanning multiple rows and columns. | এইচএসসি বোর্ডের প্যাটার্ন অনুযায়ী টেবিল বানানো এবং rowspan ও colspan ট্যাগের সঠিকতা নিখুঁতভাবে চেক করে। | ✅ Passed |
| 14 | কারিকুলাম ডাটাবেজ চেক | Asserts taxonomy completeness across 6 core subjects for both SSC and HSC levels. | ডাটাবেজে এসএসসি ও এইচএসসি স্তরের ৬টি মেইন সাবজেক্টের সবগুলো চ্যাপ্টারের ডেটা ঠিকমতো আছে কিনা তা ভেরিফাই করে। | ✅ Passed |
| 15 | চ্যাপ্টার ডাটা এক্সট্রাকশন | Tests lookup of localized chapter names, core formulas, and interactive tool routes. | প্রতিটি অধ্যায়ের নাম, মেইন সূত্রগুলো এবং ক্যালকুলেটরের সঠিক লিঙ্ক ডাটাবেজ থেকে ঠিকঠাক ফেচ করতে পারে। | ✅ Passed |

---

### 4.7 Core Solvers Engine (`tests/engines.test.ts` — 15 Tests)
**অধ্যায়ভিত্তিক পরিধি:** আণবিক ভর, জারণ-বিজারণ সমতা, তাৎপর্যপূর্ণ অঙ্ক, প্রক্ষেপক ও দ্বিঘাত মূল

| # | ইঞ্জিন ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | মোলার ভর ($H_2O$) | Calculates molar mass of simple binary compounds ($18.015\text{ g/mol}$). | যৌগের সংকেত ভেঙে হাইড্রোজেন ও অক্সিজেনের পরমাণু আলাদা করে গুনে মোলার ভর চমৎকারভাবে হিসাব করে দেয়। | ✅ Passed |
| 02 | কেলাস লবণ ($CuSO_4\cdot 5H_2O$) | Calculates mass and elemental percentage for copper sulfate pentahydrate. | তুঁতের মতো জটিল কেলাস যৌগের মোট ভর, ৫ অণু পানির পরিমাণ এবং তামার শতকরা সংযুতি একদম নিখুঁতভাবে বের করে। | ✅ Passed |
| 03 | ব্র্যাকেটযুক্ত সংকেত | Handles nested radical multipliers like $Ca(OH)_2$ properly. | $Ca(OH)_2$-এর মতো ব্র্যাকেটযুক্ত যৌগের সংকেত পার্স করে ভেতরের পরমাণুকে সঠিক সংখ্যা দিয়ে গুণ করে ভর মাপে। | ✅ Passed |
| 04 | ইনভ্যালিড প্রতীক গার্ড | Guards against invalid chemical formula typos by throwing descriptive errors. | পর্যায় সারণির বাইরে কোনো উল্টাপাল্টা প্রতীক বা বানান ভুল ইনপুট দিলে সিস্টেম নিজে থেকেই এরর মেসেজ দিয়ে থামিয়ে দেয়। | ✅ Passed |
| 05 | জারণ-বিজারণ (অম্লীয়) | Balances acidic redox half-reactions for $KMnO_4 + FeSO_4$. | অম্লীয় মাধ্যমে পটাশিয়াম পারম্যাঙ্গানেট ও ফেরাস সালফেটের মতো জটিল অর্ধ-বিক্রিয়াগুলোকে স্টেপ-বাই-স্টেপ সমতা করে। | ✅ Passed |
| 06 | জারণ-বিজারণ (ক্ষারীয়) | Balances basic redox half-reactions for $KMnO_4 + KI$ using $OH^-$ ions. | ক্ষারীয় মাধ্যমে বিক্রিয়ার ক্ষেত্রে ঠিক যেখানে যতটুকু দরকার, সেখানে হাইড্রোক্সাইড ($OH^-$) আয়ন দিয়ে বিক্রিয়া ব্যালেন্স করে। | ✅ Passed |
| 07 | সিগনিফিক্যান্ট ফিগারস (শূন্য নিয়ম) | Identifies non-significant leading zeros and significant trailing decimals. | সংখ্যার শুরুর দামহীন শূন্যগুলো (Leading Zeros) বাদ দেয় এবং দশমিকের পরের দামি শূন্যগুলোকে স্মার্টলি কাউন্ট করে। | ✅ Passed |
| 08 | সিগনিফিক্যান্ট ফিগারস (যোগ-বিয়োগ) | Enforces addition rounding constrained by the term with fewest decimal places. | যোগ ও বিয়োগের সময় রুলস মেনে, সবচেয়ে কম দশমিক ঘর থাকা সংখ্যাটির সমান করে ফাইনাল রেজাল্ট রাউন্ড করে দেয়। | ✅ Passed |
| 09 | সিগনিফিক্যান্ট ফিগারস (গুণ-ভাগ) | Enforces multiplication rounding limited by the term with fewest sig figs. | গুণ ও ভাগের ক্ষেত্রে সবচেয়ে কম সিগনিফিক্যান্ট ফিগার থাকা ইনপুটটির সাথে মিলিয়ে চূড়ান্ত ফলাফল রাউন্ড করে। | ✅ Passed |
| 10 | প্রজেক্টাইল ট্র্যাজেক্টরি | Calculates launch range, maximum height, and coordinate trajectories. | কত বেগে আর কত ডিগ্রি কোণে ছুড়লে অনুভূমিক পাল্লা, সর্বোচ্চ উচ্চতা আর গতিপথ কেমন হবে তা নিমেষেই বের করে ফেলে। | ✅ Passed |
| 11 | ইনভ্যালিড ইনপুট গার্ড | Rejects unphysical inputs such as negative launch velocities or angles over $90^\circ$. | মাইনাস বেগ বা ৯০ ডিগ্রির বেশি নিক্ষেপণ কোণের মতো উল্টাপাল্টা ইনপুট দিলে ক্যালকুলেটর যৌক্তিক সতর্কবার্তা দিয়ে আটকে দেয়। | ✅ Passed |
| 12 | দ্বিঘাত মূল (ভিন্ন বাস্তব) | Solves equations with positive discriminants ($D > 0$), yielding distinct real roots. | নিশ্চায়ক পজিটিভ ($D > 0$) হলে দ্বিঘাত সমীকরণের দুটি ভিন্ন ভিন্ন বাস্তব মূল খুব সুন্দরভাবে ধাপে ধাপে বের করে আনে। | ✅ Passed |
| 13 | দ্বিঘাত মূল (সমান বাস্তব) | Solves equations with zero discriminants ($D = 0$), yielding repeated roots. | নিশ্চায়ক শূন্য ($D = 0$) হয়ে গেলে সমীকরণের পুনরাবৃত্ত একটিমাত্র বাস্তব মূল সমাধান করে দেখিয়ে দেয়। | ✅ Passed |
| 14 | দ্বিঘাত মূল (জটিল অনুবন্ধী) | Solves equations with negative discriminants ($D < 0$), yielding complex roots ($\alpha \pm i\beta$). | নিশ্চায়ক নেগেটিভ ($D < 0$) হলে অবাস্তব বা কাল্পনিক একক ($i$) সহ অনুবন্ধী জটিল মূলগুলো নিখুঁতভাবে হিসাব করে দেয়। | ✅ Passed |
| 15 | দ্বিঘাত সহগ ($a \neq 0$) | Enforces quadratic definition by rejecting $a = 0$. | $ax^2$-এর জায়গায় $a=0$ বসালে সমীকরণটি আর দ্বিঘাত থাকে না, তাই ক্যালকুলেটর ইউজারকে সুন্দরভাবে অ্যালার্ট করে দেয়। | ✅ Passed |

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
