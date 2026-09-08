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
| 01 | Ch 1: ফিজিক্যাল কোয়ান্টিটি | Calculates vernier constant, slide calipers reading, screw gauge least count, and sphere volume. | ভার্নিয়ার কনস্ট্যান্ট, স্লাইড ক্যালিপার্স রিডিং, স্ক্রু গেজের লিস্ট কাউন্ট আর স্পেয়ারের ভলিউম একদম একুরেটলি মাপে। | ✅ Passed |
| 02 | Ch 2: মোশন (Motion) | Solves linear motion formulas ($v = u + at$, $s = ut + \frac{1}{2}at^2$) and vertical throw metrics ($H_{max}, T$). | মোশনের বেসিক ইকুয়েশনগুলো সলভ করে। ভার্টিক্যালি ছুড়লে ম্যাক্সিমাম হাইট আর টাইম অব ফ্লাইট বের করে। | ✅ Passed |
| 03 | Ch 3: ফোর্স (Force) | Computes force ($F = ma$), momentum in inelastic collisions, and gravitational attraction. | ফোর্সের ভ্যালু (F=ma), ইনইলাস্টিক কলিশনের পর ভেলোসিটি এবং গ্র্যাভিটেশনাল ফোর্স হিসাব করে। | ✅ Passed |
| 04 | Ch 4: ওয়ার্ক, পাওয়ার ও এনার্জি | Calculates work at an angle, kinetic and potential energy, and machine efficiency percentage. | অ্যাঙ্গেল করে ফোর্স অ্যাপ্লাই করলে ওয়ার্ক, কাইনেটিক-পটেনশিয়াল এনার্জি এবং ইঞ্জিনের এফিসিয়েন্সি ক্যালকুলেট করে। | ✅ Passed |
| 05 | Ch 5: স্টেট অব ম্যাটার ও প্রেশার | Computes solid pressure, liquid pressure at depth, hydraulic press force, and Young's modulus. | সলিড প্রেশার, লিকুইড প্রেশার, হাইড্রোলিক প্রেস এবং ইয়াংস মডুলাস (Young's Modulus) হিসাব করে দেয়। | ✅ Passed |
| 06 | Ch 6: ইফেক্ট অব হিট | Converts temperatures across C, F, and K, and calculates linear expansion and sensible/latent heat. | সেলসিয়াস, ফারেনহাইট ও কেলভিনে টেম্পারেচার কনভার্ট করে এবং লিনিয়ার এক্সপ্যানশন ও ল্যাটেন্ট হিটের ভ্যালু দেয়। | ✅ Passed |
| 07 | Ch 7: ওয়েভস ও সাউন্ড | Calculates wave speed ($v = f\lambda$), sound speed at given temperature, and minimum echo distance. | ওয়েভ স্পিড, টেম্পারেচারের সাথে সাউন্ডের ভেলোসিটির চেঞ্জ এবং ইকো (Echo) শোনার মিনিমাম ডিসট্যান্স বের করে। | ✅ Passed |
| 08 | Ch 8: রিফ্লেকশন অব লাইট | Determines image position, magnification, and orientation in concave and convex spherical mirrors. | কনকেভ (Concave) ও কনভেক্স মিররে ইমেজের পজিশন, ম্যাগনিফিকেশন এবং ইমেজের নেচার বলে দেয়। | ✅ Passed |
| 09 | Ch 9: রিফ্র্যাকশন অব লাইট | Solves Snell's law, finds critical angle for total reflection, and calculates lens power in diopters. | স্নেলস ল (Snell's law) দিয়ে রিফ্র্যাকশন অ্যাঙ্গেল, ক্রিটিক্যাল অ্যাঙ্গেল এবং লেন্সের পাওয়ার (ডায়োপ্টার) বের করে। | ✅ Passed |
| 10 | Ch 10: স্ট্যাটিক ইলেকট্রিসিটি | Computes Coulomb force between charges, electric field strength, potential, and capacitance. | কুলম্বস ল (Coulomb's Law) দিয়ে ফোর্স, ইলেকট্রিক ফিল্ড, পটেনশিয়াল এবং ক্যাপাসিট্যান্স হিসাব করে। | ✅ Passed |
| 11 | Ch 11: কারেন্ট ইলেকট্রিসিটি | Applies Ohm's law, calculates wire resistivity, series/parallel equivalent resistance, and power bills. | ওহমস ল (Ohm's law), রেজিস্টিভিটি, ইকুইভ্যালেন্ট রেজিস্ট্যান্স এবং মান্থলি পাওয়ার বিল ক্যালকুলেট করে। | ✅ Passed |
| 12 | Ch 12: ম্যাগনেটিক ইফেক্টস | Calculates step-up and step-down transformer turns ratio, secondary voltage, and current. | স্টেপ-আপ ও স্টেপ-ডাউন ট্রান্সফরমারের টার্নস রেশিও (Turns ratio) দিয়ে সেকেন্ডারি ভোল্টেজ ও কারেন্ট বের করে। | ✅ Passed |
| 13 | Ch 13: মডার্ন ফিজিক্স | Computes mass-energy conversion ($E = mc^2$) and radioactive mass remaining after half-lives. | E=mc2 দিয়ে মাস-এনার্জি কনভার্সন এবং হাফ-লাইফের পর রেডিওঅ্যাকটিভ ম্যাটেরিয়ালের মাস ডিকে (Decay) হিসাব করে। | ✅ Passed |

---

### 4.2 SSC Chemistry Engine (`tests/chemistry.test.ts` — 11 Tests)
**অধ্যায়ভিত্তিক পরিধি:** এসএসসি রসায়ন পাঠ্যবইয়ের পরিমাণগত রসায়ন ও সমীকরণ

| # | মডিউল ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | ফর্মুলা পার্সার (Formula Parser) | Parses formulas with brackets and crystal hydrates, calculating exact molar mass. | ব্র্যাকেট বা হাইড্রেটেড কম্পাউন্ডের কেমিক্যাল ফর্মুলা পার্স করে অ্যাটমের নাম্বার ও মোলার মাস বের করে আনে। | ✅ Passed |
| 02 | মডিউল A: গ্যাস ডিফিউশন | Calculates gas diffusion ratios using Graham's law ($r_1 / r_2 = \sqrt{M_2 / M_1}$). | গ্রাহামস ল (Graham's Law) দিয়ে ডিফিউশন রেশিও (Diffusion Ratio) ক্যালকুলেট করে। | ✅ Passed |
| 03 | মডিউল B: অ্যাটমিক স্ট্রাকচার | Finds average atomic mass from isotopic abundances and electron angular momentum in orbits. | আইসোটোপিক অ্যাবানড্যান্স থেকে অ্যাভারেজ মাস এবং অরবিটে ইলেকট্রনের অ্যাঙ্গুলার মোমেন্টাম হিসাব করে। | ✅ Passed |
| 04 | মডিউল C1: মোল কনভার্সন | Converts between grams, moles, STP volume (22.4 L), and particle counts ($6.023 \times 10^{23}$). | মাস, মোল, ভলিউম (STP তে) এবং পার্টিকেল নাম্বারের মধ্যে ফাস্ট কনভার্ট করে দেয়। | ✅ Passed |
| 05 | মডিউল C2: সলিউশন মোলারিটি | Solves for solute mass or solution molarity using $W = \frac{SMV}{1000}$. | নির্দিষ্ট মোলারিটির সলিউশন বানাতে কত মাস লাগবে বা কারেন্ট মোলারিটি কত, তা সলভ করে। | ✅ Passed |
| 06 | মডিউল C4: অ্যাম্পিরিক্যাল ফর্মুলা | Synthesizes empirical and molecular formulas from mass percentages and molar mass. | মাস পার্সেন্টেজ ব্যবহার করে অ্যাম্পিরিক্যাল ফর্মুলা (Empirical Formula) এবং মলিকিউলার ফর্মুলা বের করে। | ✅ Passed |
| 07 | মডিউল C5: লিমিটিং রিঅ্যাক্ট্যান্ট | Identifies the limiting reactant and finds theoretical product yield from reactant masses. | রিঅ্যাকশনে কোনটা আগে শেষ হবে (Limiting Reactant) আর প্রোডাক্ট ইল্ড (Yield) কত হবে তা ক্যালকুলেট করে। | ✅ Passed |
| 08 | মডিউল D: অক্সিডেশন স্টেট | Finds unknown oxidation states algebraically in neutral compounds and radicals. | যৌগের টোটাল চার্জ হিসাব করে স্পেসিফিক এলিমেন্টের আননোন অক্সিডেশন স্টেট (Oxidation State) সলভ করে। | ✅ Passed |
| 09 | মডিউল E: এনথালপি (ΔH) | Calculates enthalpy change from broken and formed bond energies and notes exothermic reactions. | বন্ড এনার্জি দিয়ে এনথালপি চেঞ্জ (ΔH) বের করে এবং রিঅ্যাকশন এক্সোথার্মিক নাকি এন্ডোথার্মিক তা জানায়। | ✅ Passed |
| 10 | মডিউল F: pH ও টাইট্রেশন | Computes pH/pOH from $[H^+]$ and finds required volume in acid-base neutralization. | [H+] কনসেন্ট্রেশন থেকে pH/pOH বের করে এবং এসিড-বেস নিউট্রালাইজেশনে রিকোয়ার্ড ভলিউম হিসাব করে। | ✅ Passed |
| 11 | মডিউল G: হাইড্রোকার্বন | Generates molecular and condensed structural formulas for alkane and alkene series. | কার্বন নাম্বারের ওপর বেইস করে অ্যালকেন ও অ্যালকিনের মলিকিউলার ও স্ট্রাকচারাল ফর্মুলা জেনারেট করে। | ✅ Passed |

---

### 4.3 SSC Biology Engine (`tests/biology.test.ts` — 10 Tests)
**অধ্যায়ভিত্তিক পরিধি:** এসএসসি জীববিজ্ঞান পুষ্টি, শ্বসন, বংশগতি ও বাস্তুতন্ত্র

| # | মডিউল ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | মডিউল A: নিউট্রিশন ও BMI | Calculates BMI and identifies normal, healthy weight boundaries for age and height. | ওয়েট আর হাইট দিয়ে BMI মাপে এবং হেলদি ওয়েটের বাউন্ডারি দেখিয়ে দেয়। | ✅ Passed |
| 02 | মডিউল A: ওয়েট অ্যাডজাস্টমেন্ট | Identifies underweight and overweight categories and calculates required weight changes. | আন্ডারওয়েট বা ওভারওয়েট ডিটেক্ট করে নরমাল ওয়েটে আসতে ওয়েট চেঞ্জের টার্গেট দেয়। | ✅ Passed |
| 03 | মডিউল A: BMR ও ক্যালরি | Computes gender-specific BMR and daily calorie requirements (TDEE) based on activity. | ফিজিক্যাল অ্যাক্টিভিটি লেভেলের ওপর বেইস করে BMR ও ডেইলি ক্যালরি রিকোয়ারমেন্ট (TDEE) হিসাব করে। | ✅ Passed |
| 04 | মডিউল B: রেসপিরেশন (ক্লাসিক) | Verifies the 38 ATP balance sheet across Glycolysis, Acetyl-CoA, and Krebs cycle for 1 mol glucose. | ১ মোল গ্লুকোজ অক্সিডেশনে ৩৮টি ATP ও ৬ অণু CO2 প্রোডাকশনের ব্যালেন্স শিট ভেরিফাই করে। | ✅ Passed |
| 05 | মডিউল B: রেসপিরেশন (মডার্ন) | Computes the modern 36 ATP yield model and scales proportionally for fractional glucose amounts. | মডার্ন ৩৬ ATP মডেল অনুযায়ী এনার্জি ইল্ড ক্যালকুলেট করে (ফ্র্যাকশনাল মোলের জন্যও কাজ করে)। | ✅ Passed |
| 06 | মডিউল C: মেন্ডেলস ল | Solves monohybrid cross ($Tt \times Tt$), producing a 3:1 phenotypic and 1:2:1 genotypic ratio. | মনোহাইব্রিড ক্রস (Tt×Tt) সলভ করে ফিনোটাইপিক (3:1) এবং জিনোটাইপিক (1:2:1) রেশিও দেখায়। | ✅ Passed |
| 07 | মডিউল C: সেক্স-লিংকড জেনেটিক্স | Solves carrier mother $\times$ normal father cross, showing affected status for sons and daughters. | ক্যারিয়ার মাদার × নরমাল ফাদারের ক্রসে চাইল্ডদের অ্যাফেক্টেড হওয়ার প্রোবাবিলিটি দেখায়। | ✅ Passed |
| 08 | মডিউল C: ক্রিস-ক্রস ইনহেরিটেন্স | Demonstrates criss-cross inheritance (color-blind mother passing condition to all sons). | কালার-ব্লাইন্ড মাদার থেকে সব সন্স (Sons) যে কালার-ব্লাইন্ড হবে—তা প্রুভ করে। | ✅ Passed |
| 09 | মডিউল D: এনার্জি ফ্লো | Applies Lindeman's 10% energy transfer rule across trophic levels and tallies 90% heat loss. | লিন্ডেম্যানের ১০% এনার্জি ট্রান্সফার রুল দিয়ে ট্রফিক লেভেলে এনার্জি ও হিট লস ক্যালকুলেট করে। | ✅ Passed |
| 10 | মডিউল E: ব্লাড গ্রুপ ম্যাচিং | Checks ABO and Rh compatibility, confirming universal donor ($O^-$) and recipient ($AB^+$). | অ্যান্টিজেন দিয়ে ABO এবং Rh গ্রুপের কম্প্যাটিবিলিটি (Compatibility) টেস্ট করে। | ✅ Passed |

---

### 4.4 SSC General Math Engine (`tests/general-math.test.ts` — 17 Tests)
**অধ্যায়ভিত্তিক পরিধি:** এসএসসি সাধারণ গণিত সেট, বীজগণিত, ত্রিকোণমিতি, পরিমিতি ও পরিসংখ্যান

| # | অধ্যায় ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | Ch 2: পাওয়ার সেট (Power Set) | Finds power set element count ($2^n$) and proper subsets ($2^n - 1$). | সেটের এলিমেন্ট নাম্বার থেকে পাওয়ার সেটের এলিমেন্ট (2n) ও প্রপার সাবসেট (2n−1) বের করে। | ✅ Passed |
| 02 | Ch 2: কার্তেসীয় প্রোডাক্ট | Generates Cartesian product ordered pairs and verifies cardinality $n(A \times B)$. | দুটি সেটের কার্তেসীয় প্রোডাক্ট (Cartesian Product) করে অর্ডারড পেয়ার ও কার্ডিনালিটি চেক করে। | ✅ Passed |
| 03 | Ch 3: স্কয়ার আইডেন্টিটি | Computes $a^2 + b^2$ and $(a-b)^2$ from given sum $(a+b)$ and product $(ab)$. | সাম (Sum) ও প্রোডাক্ট (Product) থেকে স্কয়ার আইডেন্টিটি ব্যবহার করে ভ্যালু ইভালুয়েট করে। | ✅ Passed |
| 04 | Ch 3: কিউব আইডেন্টিটি | Solves $a^3 + b^3 = (a+b)^3 - 3ab(a+b)$ from sum and product. | সাম ও প্রোডাক্ট থেকে কিউব আইডেন্টিটি (a3+b3) ব্যবহার করে ভ্যালু হিসাব করে। | ✅ Passed |
| 05 | Ch 4: এক্সপোনেন্টস (Exponents) | Evaluates $a^2 + b^2 + c^2$ from $(a+b+c)$ and pairwise products $(ab+bc+ca)$. | এক্সপোনেনশিয়াল ভ্যালু হিসাব করে এবং আনডিফাইন্ড টার্ম (যেমন 0−n) হলে অ্যালার্ট করে। | ✅ Passed |
| 06 | Ch 4: লগারিদম (Logarithms) | Evaluates powers and prevents undefined terms ($0^{-n}$). | লগারিদমের ভ্যালু বের করে এবং ম্যাথমেটিক্যাল বেস রুলস (b>0,b=1) এনফোর্স করে। | ✅ Passed |
| 07 | Ch 4: সায়েন্টিফিক নোটেশন | Computes logarithm values and enforces base rules ($b > 0, b \ne 1, N > 0$). | লার্জ বা স্মল নাম্বারকে স্ট্যান্ডার্ড সায়েন্টিফিক নোটেশনে (A×10n) কনভার্ট করে। | ✅ Passed |
| 08 | Ch 9-10: হাইট অ্যান্ড ডিসট্যান্স | Converts large or small numbers into scientific notation ($A \times 10^n$). | বেস ডিসট্যান্স ও অ্যাঙ্গেল অব এলিভেশন দিয়ে বিল্ডিং বা টাওয়ারের হাইট (h=dtanθ) ক্যালকুলেট করে। | ✅ Passed |
| 09 | Ch 9-10: ব্রোকেন ট্রি | Finds height from distance and elevation angle ($h = d \tan\theta$). | স্টর্ম-ব্রোকেন ট্রির (Broken tree) ম্যাথে ব্রোকেন ও স্ট্যান্ডিং পার্টের হাইট সলভ করে। | ✅ Passed |
| 10 | Ch 11: কম্পোনেন্ডো-ডিভিডেন্ডো | Solves tower height observed from two observation points on same or opposite sides. | রেশিওর ম্যাথে কম্পোনেন্ডো-ডিভিডেন্ডো (যোজন-বিয়োজন) রুল অ্যাপ্লাই করে। | ✅ Passed |
| 11 | Ch 16: ইকুইল্যাটারাল ট্রায়াঙ্গেল | Solves the classic storm-broken tree problem for broken and standing heights. | সাইড লেন্থ দিয়ে ইকুইল্যাটারাল ট্রায়াঙ্গেলের (সমবাহু ত্রিভুজ) এরিয়া ক্যালকুলেট করে। | ✅ Passed |
| 12 | Ch 16: হেরনস ফর্মুলা (Heron's) | Applies componendo-dividendo $\frac{a+b}{a-b}$ and prevents zero denominator ($a=b$). | ৩টি সাইড দিয়ে হেরনস ফর্মুলায় এরিয়া মাপে এবং ট্রায়াঙ্গেল ইনইকুয়ালিটি ভেরিফাই করে। | ✅ Passed |
| 13 | Ch 16: রেগুলার হেক্সাগন | Calculates equilateral triangle area using $\frac{\sqrt{3}}{4}a^2$. | রেগুলার পলিগন (Polygon) ফর্মুলা দিয়ে হেক্সাগনের এরিয়া হিসাব করে। | ✅ Passed |
| 14 | Ch 17: স্ট্যাটিসটিক্স (Statistics) | Computes triangle area with Heron's formula and enforces triangle inequality ($a+b > c$). | গ্রুপড ফ্রিকোয়েন্সি ডিস্ট্রিবিউশন টেবিল থেকে মিন (Mean), মিডিয়ান (Median) ও মোড (Mode) বের করে। | ✅ Passed |
| 15 | Ch 17: অজিভ কার্ভ ও ফ্রিকোয়েন্সি পলিগন | Calculates regular hexagon area from side length. | কিউমুলেটিভ ফ্রিকোয়েন্সি ক্যালকুলেট করে অজিভ কার্ভ (Ogive curve) এবং হিস্টোগ্রামের মিডপয়েন্ট দিয়ে ফ্রিকোয়েন্সি পলিগন ড্র করে। | ✅ Passed |
| 16 | Ch 17: শর্টকাট মেথডে মিন (Mean) | Computes mean, median, and mode from grouped frequency distribution tables. | অ্যাসিউমড মিন ($a$) এবং স্টেপ ডেভিয়েশন ($u_i$) ফর্মুলা ইউজ করে গ্রুপড ডেটার মিন একুরেটলি হিসাব করে। | ✅ Passed |
| 17 | Ch 17: মোড ক্যালকুলেশন এক্সেপশন | Handles modal calculations when the first interval is the modal class ($f_1 = f_m - 0$). | প্রথম বা শেষ ক্লাসে মোড থাকলে $f_0$ বা $f_2$-কে জিরো ধরে মোডাল ক্লাসের ফর্মুলা দিয়ে একুরেট মোড বের করে। | ✅ Passed |

---

### 4.5 SSC Higher Math Engine (`tests/higher-math.test.ts` — 17 Tests)
**অধ্যায়ভিত্তিক পরিধি:** এসএসসি উচ্চতর গণিত ১৪টি অধ্যায়ের সূত্র ও প্রমাণ

| # | অধ্যায় ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | Ch 1: ৩-সেট ভেন ডায়গ্রাম | Solves 3-set inclusion-exclusion and finds disjoint region counts ($A$ only, $B$ only, $C$ only). | ৩-সেট ইনক্লুশন-এক্সক্লুশন প্রবলেম সলভ করে ডিসজয়েন্ট রিজিয়ন কাউন্ট করে। | ✅ Passed |
| 02 | Ch 1: ইনভার্স ফাংশন | Inverts rational functions $f(x) = \frac{ax+b}{cx+d}$ and finds restricted domain/range values. | র্যাশনাল ফাংশনের ইনভার্স ফাংশন বের করে এবং ডোমেন-রেঞ্জ রেস্ট্রিকশন দেখায়। | ✅ Passed |
| 03 | Ch 2: রিমাইন্ডার থিওরেম | Evaluates polynomial remainder $P(a)$ when divided by $(x - a)$ and checks if it is a factor. | পলিনোমিয়ালকে (x−a) দিয়ে ডিভাইড করলে রিমাইন্ডার (Remainder) কত হবে তা ইভালুয়েট করে। | ✅ Passed |
| 04 | Ch 2: সাইক্লিক আইডেন্টিটি | Evaluates cyclic cubic identity $a^3+b^3+c^3-3abc$ and checks the zero-sum condition. | সাইক্লিক কিউবিক আইডেন্টিটির ভ্যালু এবং জিরো-সাম কন্ডিশন ভেরিফাই করে। | ✅ Passed |
| 05 | Ch 3: অ্যাপোলোনিয়াস থিওরেম | Calculates triangle medians and verifies $3\sum\text{sides}^2 = 4\sum\text{medians}^2$. | সাইড থেকে মিডিয়ানের (Median) লেন্থ মাপে এবং অ্যাপোলোনিয়াসের রিলেশনশিপ চেক করে। | ✅ Passed |
| 06 | Ch 5: কোয়াড্রেটিক ইকুয়েশন | Solves quadratics and determines roots (real distinct, equal, or complex conjugate). | ডিসক্রিমিন্যান্ট (D) দিয়ে রুটের নেচার (রিয়েল, ইকুয়াল নাকি কমপ্লেক্স) বের করে সলভ করে। | ✅ Passed |
| 07 | Ch 6: ইনইকুয়ালিটি (Inequality) | Solves linear inequalities, reversing direction when dividing by negative coefficients. | লিনিয়ার ইনইকুয়ালিটি সলভ করে এবং নেগেটিভ দিয়ে ডিভাইড করলে সাইন ডিরেকশন রিভার্স করে। | ✅ Passed |
| 08 | অধ্যায় ৭: অসীম গুণোত্তর ধারা | Finds sum of infinite geometric series ($S_\infty = \frac{a}{1-r}$) when $|r| < 1$. | সাধারণ অনুপাত $|r| < 1$ হলে অসীমতক সমষ্টি বের করে এবং $|r| \ge 1$ হলে অপসারিতা জানায়। | ✅ Passed |
| 09 | Ch 8-9: আর্ক ও সেক্টর | Converts recurring decimals ($0.333\dots, 0.1666\dots$) into irreducible fractions ($1/3, 1/6$). | ডিগ্রিকে রেডিয়ানে কনভার্ট করে আর্ক লেন্থ (s=rθ) এবং সেক্টর এরিয়া ক্যালকুলেট করে। | ✅ Passed |
| 10 | Ch 8-9: লগ বেস চেঞ্জ | Calculates arc length ($s = r\theta$) and sector area with degree-to-radian conversion. | লগারিদমের ম্যাথে বেস চেঞ্জ (Base Change) ফর্মুলা ইউজ করে ভ্যালু সলভ করে। | ✅ Passed |
| 11 | Ch 10: বাইনোমিয়াল এক্সপ্যানশন | Computes logarithms with arbitrary bases using base change formulas. | কম্বিনেশন (nCr) এবং বাইনোমিয়াল কোয়েফিশিয়েন্ট (Binomial Coefficient) একুরেটলি জেনারেট করে। | ✅ Passed |
| 12 | Ch 11: পলিগন এরিয়া | Computes combination $nCr$ and binomial coefficients for expansion powers $(x+y)^n$. | শু-লেস (Shoelace) মেথডে ভার্টিসেস (Vertices) ইউজ করে পলিগনের এরিয়া বের করে। | ✅ Passed |
| 13 | Ch 11: ডিসট্যান্স ও স্লোপ | Computes polygon area using the coordinate Shoelace method for ordered vertices. | কো-অর্ডিনেটসের ডিসট্যান্স, লাইনের স্লোপ (Slope) এবং ইকুয়েশন জেনারেট করে। | ✅ Passed |
| 14 | Ch 12: ভেক্টর অ্যানালাইসিস | Calculates Euclidean distance, line slope ($m$), and point-slope linear equation. | টু-ডি ভেক্টরের ম্যাগনিচ্যুড (Magnitude) এবং ডিরেকশনাল অ্যাঙ্গেল ক্যালকুলেট করে। | ✅ Passed |
| 15 | অধ্যায় ১২: ভেক্টর বিশ্লেষণ | Computes 2D vector magnitude $|\vec{v}|$ and directional angle in degrees. | দ্বিমাত্রিক ভেক্টরের পরম মান এবং অনুভূমিক অক্ষের সাথে দিক নির্দেশক কোণ ডিগ্রি এককে বের করে। | ✅ Passed |
| 16 | Ch 14: প্রোবাবিলিটি (Probability) | Calculates cone slant height, curved surface area, and solid volume. | ফেভারেবল ও টোটাল আউটকামের রেশিও থেকে প্রোবাবিলিটি এবং পার্সেন্টেজ অডস বের করে। | ✅ Passed |
| 17 | Ch 14: ক্লাসিক্যাল প্রোবাবিলিটি ও ভেন | Computes theoretical probability $P(E) = \frac{n(E)}{n(S)}$ and percentage odds. | মিউচুয়ালি এক্সক্লুসিভ ও ইন্ডিপেন্ডেন্ট ইভেন্টের প্রোবাবিলিটি এবং অ্যাডিশন থিওরেম ($P(A \cup B)$) ভেরিফাই করে। | ✅ Passed |

---

### 4.6 HSC ICT Simulator Engine (`tests/ict-engines.test.ts` — 15 Tests)
**অধ্যায়ভিত্তিক পরিধি:** এইচএসসি আইসিটি বুলিয়ান অ্যালজেবরা, সার্কিট, এসকিউএল, সি ল্যাঙ্গুয়েজ ও এইচটিএমএল

| # | ইঞ্জিন ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | লজিক গেট সিমুলেটর | Evaluates truth tables for basic and universal gates: AND, OR, NOT, XOR, NAND, NOR, XNOR. | AND, OR, NOT, XOR, NAND, NOR—সবগুলো লজিক গেটের ট্রুথ টেবিল ইভালুয়েট করে। | ✅ Passed |
| 02 | হাফ ও ফুল অ্যাডার | Computes 2-bit Half Adder Sum ($A \oplus B$) and Carry ($A \cdot B$). | হাফ এবং ফুল অ্যাডারে সাম (Sum) ও ক্যারি (Carry) আউটপুট লজিক অনুযায়ী জেনারেট করে। | ✅ Passed |
| 03 | SQL সিমুলেটর (SELECT/WHERE) | Computes 3-bit Full Adder outputs with input carry ($C_{in}$), producing Sum and $C_{out}$. | ডেটাবেসে SELECT * এবং WHERE কন্ডিশন দিয়ে রেকর্ড ফিল্টার করে আউটপুট দেয়। | ✅ Passed |
| 04 | SQL সর্টিং ও গ্রুপিং | Executes `SELECT *` on relational tables, returning all rows and schema columns. | ORDER BY দিয়ে সর্টিং এবং GROUP BY দিয়ে অ্যাগ্রিগেট কাউন্ট (Aggregate count) দেখায়। | ✅ Passed |
| 05 | SQL JOIN অপারেশন | Filters database records using conditional `WHERE` predicates (e.g. `GPA >= 5.00`). | প্রাইমারি ও ফরেন কি (Key) ইউজ করে INNER JOIN-এর মাধ্যমে মাল্টিপল টেবিল মার্জ করে। | ✅ Passed |
| 06 | C ট্রেসার (ফিবোনাচ্চি) | Sorts numeric and text table records using `ORDER BY` ascending and descending. | ফিবোনাচ্চি সিরিজের লুপ চলার সময় মেমোরিতে ভ্যারিয়েবলের চেঞ্জ ভিজ্যুয়ালি ট্রেস করে। | ✅ Passed |
| 07 | HTML টেবিল ইঞ্জিন | Performs relational `INNER JOIN` across primary-foreign keys (Student $\leftrightarrow$ Result). | rowspan ও colspan ট্যাগ ইউজ করে কমপ্লেক্স টেবিল লেআউট রেন্ডার ও ভেরিফাই করে। | ✅ Passed |
| 08 | SQL সর্টিং (ORDER BY) | Computes aggregate counts grouped by categories using `GROUP BY` and `COUNT`. | এক বা একাধিক কলামের ওপর ASC বা DESC অর্ডারে কুয়েরি রেজাল্ট সর্ট করে। | ✅ Passed |
| 09 | SQL লিমিট ও অফসেট (LIMIT/OFFSET) | Catches syntax errors gracefully and displays readable instructional feedback. | কুয়েরি আউটপুটের রো নাম্বার রেস্ট্রিক্ট করতে LIMIT এবং পেজিনেশনের জন্য OFFSET অ্যাপ্লাই করে। | ✅ Passed |
| 10 | SQL টেবিল জয়েন (INNER JOIN) | Generates step-by-step memory variable traces during Fibonacci sequence loops. | প্রাইমারি ও ফরেন কি ম্যাচ করে দুটি ভিন্ন টেবিল থেকে কম্বাইন্ড ডেটা রিট্রিভ করে। | ✅ Passed |
| 11 | C ট্রেসার (প্রাইম নাম্বার) | Traces variable updates and condition branches during prime number testing in C. | লুপ ও ইফ-এলস কন্ডিশনে প্রাইম নাম্বার চেকিং প্রোগ্রামের প্রতিটি ইটারেশনে ভ্যারিয়েবল স্টেট ট্রেস করে। | ✅ Passed |
| 12 | C ট্রেসার (ফ্যাক্টোরিয়াল $n!$) | Traces multiplication accumulator across loop iterations for $n!$ computation. | ১ থেকে $n$ পর্যন্ত লুপ চলার সময় অ্যাকুমুলেটর ভ্যারিয়েবলের ভ্যালু আপডেট লাইভ রেকর্ড করে। | ✅ Passed |
| 13 | HTML টেবিল লেআউট (rowspan/colspan) | Verifies board exam templates with table cells spanning multiple rows and columns. | এইচএসসি বোর্ড কোশ্চেন অনুযায়ী rowspan ও colspan অ্যাট্রিবিউট ভ্যালিডেট করে পারফেক্ট টেবিল রেন্ডার করে। | ✅ Passed |
| 14 | কারিকুলাম ডেটাবেস ভ্যালিডেশন | Asserts taxonomy completeness across 6 core subjects for both SSC and HSC levels. | এসএসসি ও এইচএসসির ৬টি কোর সাবজেক্টের সবগুলো চ্যাপ্টার ও টপিকের ডেটাবেস ইন্টিগ্রিটি চেক করে। | ✅ Passed |
| 15 | চ্যাপ্টার ডেটা ফেচিং ও রাউটিং | Tests lookup of localized chapter names, core formulas, and interactive tool routes. | প্রতিটি চ্যাপ্টারের নাম, কোর ফর্মুলা এবং ইন্টারঅ্যাক্টিভ ক্যালকুলেটরের ইউআরএল রাউট ফেচ করে। | ✅ Passed |

---

### 4.7 Core Solvers Engine (`tests/engines.test.ts` — 15 Tests)
**অধ্যায়ভিত্তিক পরিধি:** আণবিক ভর, জারণ-বিজারণ সমতা, তাৎপর্যপূর্ণ অঙ্ক, প্রক্ষেপক ও দ্বিঘাত মূল

| # | ইঞ্জিন ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| 01 | মোলার মাস ও ব্র্যাকেট পার্সিং | Calculates molar mass of simple binary compounds ($18.015\text{ g/mol}$). | Ca(OH)2 বা CuSO4⋅5H2O-এর মতো কমপ্লেক্স ফর্মুলা পার্স করে টোটাল মাস ক্যালকুলেট করে। | ✅ Passed |
| 02 | ইনভ্যালিড সিম্বল গার্ড | Calculates mass and elemental percentage for copper sulfate pentahydrate. | পিরিওডিক টেবিলের বাইরের কোনো ইনভ্যালিড সিম্বল ইনপুট দিলে ডেসক্রিপটিভ এরর থ্রো (Throw) করে। | ✅ Passed |
| 03 | রেডক্স (এসিডিক/বেসিক) | Handles nested radical multipliers like $Ca(OH)_2$ properly. | এসিডিক ও বেসিক মিডিয়ামে হাফ-রিঅ্যাকশন মেথডে কমপ্লেক্স রেডক্স ইকুয়েশন ব্যালেন্স করে। | ✅ Passed |
| 04 | সিগ ফিগ (Sig Figs) রুলস | Guards against invalid chemical formula typos by throwing descriptive errors. | লিডিং জিরো (Leading Zeros) ইগনোর করে এবং এডিশন/মাল্টিপ্লিকেশনের রাউন্ডিং রুলস এনফোর্স করে। | ✅ Passed |
| 05 | প্রজেক্টাইল ট্র্যাজেক্টরি | Balances acidic redox half-reactions for $KMnO_4 + FeSO_4$. | ভেলোসিটি আর অ্যাঙ্গেল দিয়ে হরিজন্টাল রেঞ্জ, ম্যাক্স হাইট আর ট্র্যাজেক্টরি কো-অর্ডিনেটস বের করে। | ✅ Passed |
| 06 | আনফিজিক্যাল ইনপুট গার্ড | Balances basic redox half-reactions for $KMnO_4 + KI$ using $OH^-$ ions. | নেগেটিভ ভেলোসিটি বা ৯০ ডিগ্রির বেশি অ্যাঙ্গেলের মতো আনফিজিক্যাল ইনপুট রিজেক্ট করে। | ✅ Passed |
| 07 | কোয়াড্রেটিক রুটস | Identifies non-significant leading zeros and significant trailing decimals. | ডিসক্রিমিন্যান্ট (D) পজিটিভ, নেগেটিভ বা জিরো হলে—রিয়েল ও কমপ্লেক্স রুটস একুরেটলি সলভ করে। | ✅ Passed |
| 08 | কোয়াড্রেটিক গার্ড (a=0) | Enforces addition rounding constrained by the term with fewest decimal places. | লিডিং কোয়েফিশিয়েন্ট a=0 হলে ইকুয়েশনটি আর কোয়াড্রেটিক থাকে না, তাই ইউজারকে অ্যালার্ট করে। | ✅ Passed |
| 09 | সিগ ফিগ (মাল্টিপ্লিকেশন ও ডিভিশন) | Enforces multiplication rounding limited by the term with fewest sig figs. | গুণ ও ভাগের ক্ষেত্রে সবচেয়ে কম সিগনিফিকেন্ট ফিগার থাকা ইনপুটের সাথে ম্যাচ করে ফাইনাল রেজাল্ট রাউন্ড করে। | ✅ Passed |
| 10 | প্রজেক্টাইল মোশন ট্র্যাজেক্টরি | Calculates launch range, maximum height, and coordinate trajectories. | স্পেসিফিক টাইম $t$-তে প্রজেক্টাইলের হরাইজন্টাল ডিসপ্লেসমেন্ট $x$ ও ভার্টিক্যাল পজিশন $y$ ক্যালকুলেট করে। | ✅ Passed |
| 11 | আনফিজিক্যাল ইনপুট গার্ড (Negative Velocity) | Rejects unphysical inputs such as negative launch velocities or angles over $90^\circ$. | নেগেটিভ ভেলোসিটি বা ৯০ ডিগ্রির বেশি লঞ্চিং অ্যাঙ্গেল দিলে ক্যালকুলেটর ভ্যালিডেশন এরর থ্রো করে। | ✅ Passed |
| 12 | কোয়াড্রেটিক রুটস ($D > 0$) | Solves equations with positive discriminants ($D > 0$), yielding distinct real roots. | ডিসক্রিমিন্যান্ট পজিটিভ হলে দুটি ডিস্টিংক্ট রিয়েল রুট ধাপে ধাপে বের করে আনে। | ✅ Passed |
| 13 | কোয়াড্রেটিক রুটস ($D = 0$) | Solves equations with zero discriminants ($D = 0$), yielding repeated roots. | ডিসক্রিমিন্যান্ট শূন্য হলে সিঙ্গেল রিপিটেড রিয়েল রুট সলভ করে দেখায়। | ✅ Passed |
| 14 | কোয়াড্রেটিক রুটস ($D < 0$) | Solves equations with negative discriminants ($D < 0$), yielding complex roots ($\alpha \pm i\beta$). | ডিসক্রিমিন্যান্ট নেগেটিভ হলে ইমেজিনারি ইউনিট ($i$) সহ কনজুগেট কমপ্লেক্স রুটস হিসাব করে। | ✅ Passed |
| 15 | কোয়াড্রেটিক ভ্যালিডেশন ($a = 0$) | Enforces quadratic definition by rejecting $a = 0$. | সেকেন্ড-ডিগ্রি কোয়েফিশিয়েন্ট $a=0$ হলে ইকুয়েশনটি লিনিয়ার হয়ে যায়, তাই ভ্যালিডেশন অ্যালার্ট দেয়। | ✅ Passed |

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

