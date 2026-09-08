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
| **Execution Time (রানটাইম গতি)** | **~450 ms** | Fast execution, CI/CD and offline friendly |
| **Curriculum Standard (পাঠ্যক্রম মান)** | **NCTB Bangladesh** | SSC (Class 9–10) & HSC (Class 11–12 ICT) |

---

## 🧭 Quick Navigation (সূচিপত্র)

1. [Suite 1: SSC Physics Engine (এসএসসি পদার্থবিজ্ঞান ইঞ্জিন) — 13 Tests](#1-ssc-physics-engine-testsphysicstestts--13-tests)
2. [Suite 2: SSC Chemistry Quantitative Engine (এসএসসি রসায়ন ইঞ্জিন) — 11 Tests](#2-ssc-chemistry-quantitative-engine-testschemistrytestts--11-tests)
3. [Suite 3: SSC Biology Quantitative Engine (এসএসসি জীববিজ্ঞান ইঞ্জিন) — 10 Tests](#3-ssc-biology-quantitative-engine-testsbiologytestts--10-tests)
4. [Suite 4: SSC General Mathematics Engine (এসএসসি সাধারণ গণিত ইঞ্জিন) — 17 Tests](#4-ssc-general-mathematics-engine-testsgeneral-mathtestts--17-tests)
5. [Suite 5: SSC Higher Mathematics Engine (এসএসসি উচ্চতর গণিত ইঞ্জিন) — 17 Tests](#5-ssc-higher-mathematics-engine-testshigher-mathtestts--17-tests)
6. [Suite 6: HSC ICT & System Simulator Engines (এইচএসসি আইসিটি ও সিস্টেম ইঞ্জিন) — 15 Tests](#6-hsc-ict--system-simulator-engines-testsict-enginestestts--15-tests)
7. [Suite 7: Core Solvers & Foundational Engines (কোর সলভার ও মৌলিক ইঞ্জিন) — 15 Tests](#7-core-solvers--foundational-engines-testsenginestestts--15-tests)
8. [How to Run the Tests (টেস্ট পরিচালনার নির্দেশিকা)](#how-to-run-the-tests-টেস্ট-পরিচালনার-নির্দেশিকা)

---

## 1. SSC Physics Engine (`tests/physics.test.ts` — 13 Tests)
**Target:** NCTB SSC Physics (Class 9–10, Chapters 1 to 13)  
**লক্ষ্য:** এসএসসি পদার্থবিজ্ঞান পাঠ্যবইয়ের ১৩টি অধ্যায়ের প্রতিটি গাণিতিক সূত্র ও ব্যবহারিক হিসাব।

| # | Chapter / Module | English Description | বাংলা বিবরণ ও যাচাইকরণ | Status |
| :-: | :--- | :--- | :--- | :-: |
| 01 | **Chapter 1:** Physical Quantities & Measurement | **Vernier Constant and Slide Calipers Reading:** Verifies vernier constant ($VC = s/n$), slide calipers total length ($L = M + V \\times VC$), screw gauge least count ($LC = p/n$), zero error corrections, and sphere volume calculation ($V = \\frac{4}{3}\\pi r^3$). | **ভার্নিয়ার ধ্রুবক ও স্লাইড ক্যালিপার্স পাঠ:** ভার্নিয়ার ধ্রুবক ($VC = s/n$), স্লাইড ক্যালিপার্সে মোট দৈর্ঘ্য ($L = M + V \\times VC$), স্ক্রু গজের লঘিষ্ঠ গণন ($LC$), যান্ত্রিক ত্রুটি সংশোধন এবং গোলকের আয়তন নির্ণয় নির্ভুলভাবে যাচাই করে। | ✅ Passed |
| 02 | **Chapter 2:** Motion | **Kinematics Equations & Vertical Projection:** Validates linear motion formulas ($v = u + at$, $s = ut + \\frac{1}{2}at^2$) and vertical upward projection metrics (maximum height $H_{max} = \\frac{u^2}{2g}$, time of ascent $t$, and total flight time $T$). | **গতিবিদ্যার সমীকরণ ও উল্লম্ব প্রক্ষেপণ:** একমাত্রিক রৈখিক গতির সমীকরণ ($v = u + at$, $s = ut + \\frac{1}{2}at^2$) এবং খাড়া উপরের দিকে নিক্ষিপ্ত বস্তুর সর্বোচ্চ উচ্চতা ($H_{max} = \\frac{u^2}{2g}$), উত্থানকাল ($t$) ও মোট বিচরণকাল ($T$) যাচাই করে। | ✅ Passed |
| 03 | **Chapter 3:** Force | **Newton's Second Law, Momentum Conservation & Gravitation:** Asserts force relation ($F = ma$), inelastic collision momentum conservation ($m_1 u_1 + m_2 u_2 = (m_1 + m_2) v$), and Newton's Universal Law of Gravitation ($F = G \\frac{m_1 m_2}{d^2}$). | **গতির ২য় সূত্র, ভরবেগের নিত্যতা ও মহাকর্ষ বল:** বলের সমীকরণ ($F = ma$), সংঘর্ষের পর মিলিত বস্তুর বেগ ($m_1 u_1 + m_2 u_2 = (m_1+m_2)v$) এবং নিউটনের সর্বজনীন মহাকর্ষ বলের মান সঠিক ধ্রুবক ($G$) সহ যাচাই করে। | ✅ Passed |
| 04 | **Chapter 4:** Work, Power & Energy | **Work, Energy, Power & Efficiency:** Verifies angled mechanical work ($W = F s \\cos\\theta$), kinetic energy ($E_k = \\frac{1}{2} m v^2$), gravitational potential energy ($E_p = mgh$), and machine efficiency percentage ($\\eta = \\frac{P_{out}}{P_{in}} \\times 100\\%$). | **কাজ, গতিশক্তি, বিভবশক্তি ও কর্মদক্ষতা:** নির্দিষ্ট কোণে কাজ ($W = F s \\cos\\theta$), গতিশক্তি ($E_k = \\frac{1}{2}mv^2$), অভিকর্ষজ বিভবশক্তি ($E_p = mgh$) এবং মোট প্রদত্ত ক্ষমতা সাপেক্ষে ইঞ্জিনের কর্মদক্ষতা ($\\eta$) শতকরা হারে হিসাব করে। | ✅ Passed |
| 05 | **Chapter 5:** State of Matter & Pressure | **Pressure, Hydraulic Press & Young's Modulus:** Computes solid pressure ($P = F/A$), fluid hydrostatic pressure ($P = h\\rho g$), hydraulic press mechanical advantage ($F_2 = F_1 \\frac{A_2}{A_1}$), and longitudinal elasticity Young's Modulus ($Y = \\frac{FL}{A\\Delta L}$). | **চাপ, তরলের অভ্যন্তরে চাপ, প্যাস্কেলের সূত্র ও ইয়ং-এর গুণাঙ্ক:** কঠিনের চাপ ($P = F/A$), তরলের তলদেশে চাপ ($P = h\\rho g$), হাইড্রোলিক প্রেসের বল বৃদ্ধি নীতি ($F_2 = F_1 \\frac{A_2}{A_1}$) এবং তারের দৈর্ঘ্যের স্থিতিস্থাপক ইয়ং-এর গুণাঙ্ক ($Y$) হিসাব যাচাই করে। | ✅ Passed |
| 06 | **Chapter 6:** Effect of Heat on Matter | **Temperature Conversion, Thermal Expansion & Heat:** Validates Celsius-Fahrenheit-Kelvin scale cross-conversions, solid linear thermal expansion ($\\Delta L = L_1 \\alpha \\Delta T$), sensible heat ($Q = ms\\Delta\\theta$), and phase change latent heat ($Q = m L_f$). | **তাপমাত্রা স্কেল রূপান্তর, প্রসারণ, তাপ ও সুপ্ততাপ:** সেলসিয়াস, ফারেনহাইট ও কেলভিন স্কেলের পারস্পরিক সম্পর্ক, কঠিনের দৈর্ঘ্য প্রসারণ ($\\alpha$), গৃহিত/বর্জিত তাপ ($Q = ms\\Delta\\theta$) এবং গলনের আপেক্ষিক সুপ্ততাপ ($L_f$) গণনা করে। | ✅ Passed |
| 07 | **Chapter 7:** Waves & Sound | **Waves, Sound Speed with Temperature & Echo:** Verifies wave fundamental equation ($v = f\\lambda$), speed of sound variation with atmospheric temperature ($v_T = 332 + 0.6\\theta$), and minimum obstacle distance for audible echo ($d = \\frac{vt}{2}$). | **তরঙ্গ, তাপমাত্রার সাথে শব্দের বেগ ও প্রতিধ্বনি:** তরঙ্গের মৌলিক সম্পর্ক ($v = f\\lambda$), তাপমাত্রার পরিবর্তনে শব্দের বেগ ($v_T = 332 + 0.6\\theta$) এবং ০.১ সেকেন্ড শব্দানুভূতির স্থায়িত্বকালে প্রতিধ্বনি শোনার ন্যূনতম প্রতিফলক দূরত্ব যাচাই করে। | ✅ Passed |
| 08 | **Chapter 8:** Reflection of Light | **Concave and Convex Mirrors:** Evaluates mirror formula ($\\frac{1}{u} + \\frac{1}{v} = \\frac{1}{f}$), real vs. virtual image distance, magnification ($m = -\\frac{v}{u}$), and inverted/erect image dimensions for spherical mirrors. | **অবতল ও উত্তল দর্পণ:** গোলীয় দর্পণের সমীকরণ ($\\frac{1}{u} + \\frac{1}{v} = \\frac{1}{f}$), বাস্তব বনাম অবাস্তব প্রতিবিম্বের অবস্থান, রৈখিক বিবর্ধন ($m$) এবং প্রতিবিম্বের আকার ও উচ্চতা নির্ণয় নির্ভুলভাবে নিশ্চিত করে। | ✅ Passed |
| 09 | **Chapter 9:** Refraction of Light | **Refraction, Snell's Law, Critical Angle & Lens Power:** Computes Snell's refraction law ($n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$), critical angle for total internal reflection ($\\theta_c = \\sin^{-1}(n_2/n_1)$), thin lens formula, and optical power in Diopters ($P = 1/f$). | **প্রতিসরণ, স্নেলের সূত্র, সংকট কোণ ও লেন্সের ক্ষমতা:** প্রতিসরণাঙ্কের সূত্র ($n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$), পূর্ণ অভ্যন্তরীণ প্রতিফলনের সংকট কোণ ($\\theta_c$), পাতলা লেন্সের প্রতিবিম্ব দূরত্ব এবং ডায়োপ্টার এককে লেন্সের ক্ষমতা ($P = 1/f$) হিসাব করে। | ✅ Passed |
| 10 | **Chapter 10:** Static Electricity | **Coulomb's Law, Field Intensity & Potential:** Verifies electrostatic Coulomb force ($F = k \\frac{q_1 q_2}{d^2}$), electric field intensity ($E = k \\frac{q}{d^2}$), electrostatic potential ($V = k \\frac{q}{d}$), and parallel plate capacitance ($C = Q/V$). | **স্থির তড়িৎ, কুলম্বের সূত্র, প্রাবল্য, বিভব ও ধারকত্ব:** কুলম্বের আকর্ষণী/বিকর্ষণী বল ($F = k \\frac{q_1 q_2}{d^2}$), তড়িৎ ক্ষেত্রের প্রাবল্য ($E$), বিন্দু আধানের জন্য তড়িৎ বিভব ($V$) এবং ধারকের ধারকত্ব ($C = Q/V$) সঠিকভাবে যাচাই করে। | ✅ Passed |
| 11 | **Chapter 11:** Current Electricity | **Ohm's Law, Resistivity, Equivalent Resistors & Electricity Bill:** Computes current ($I = V/R$), conductor resistivity ($R = \\rho \\frac{L}{A}$), series and parallel equivalent resistances, and household electricity bill in BDT based on kilowatt-hours (Units). | **চল তড়িৎ, ওহমের সূত্র, আপেক্ষিক রোধ, তুল্যরোধ ও বিদ্যুৎ বিল:** ওহমের সূত্র ($I = V/R$), উপাদানের আপেক্ষিক রোধ ($R = \\rho L/A$), শ্রেণি ও সমান্তরাল সমবায়ে তুল্যরোধ এবং কিলোওয়াট-ঘণ্টা (বোর্ড ইউনিট) হিসেবে মাসিক বিদ্যুৎ বিল (টাকায়) বের করে। | ✅ Passed |
| 12 | **Chapter 12:** Magnetic Effects of Current | **Transformer Calculations & Classification:** Evaluates step-up vs. step-down voltage transformation ratio ($\\frac{V_p}{V_s} = \\frac{N_p}{N_s} = \\frac{I_s}{I_p}$) and secondary current under conservation of power. | **তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও ট্রান্সফরমার:** স্টেপ-আপ এবং স্টেপ-ডাউন ট্রান্সফরমারের ভোল্টেজ ও কুন্ডলীর পাকসংখ্যার অনুপাত ($\\frac{V_p}{V_s} = \\frac{N_p}{N_s}$) এবং ক্ষমতা অপরিবর্তিত রেখে গৌণ কুন্ডলীর তড়িৎপ্রবাহ হিসাব যাচাই করে। | ✅ Passed |
| 13 | **Chapter 13:** Modern Physics & Electronics | **Mass-Energy Equivalence & Radioactive Decay:** Computes Einstein's mass-energy conversion ($E = m c^2$), radioactive decay law ($N(t) = N_0 e^{-\\lambda t}$), decay constant ($\\lambda = \\frac{\\ln 2}{T_{1/2}}$), and remaining mass after multiple half-lives. | **আধুনিক পদার্থবিজ্ঞান ও তেজস্ক্রিয়তা:** আইনস্টাইনের ভর-শক্তি সমীকরণ ($E = mc^2$), তেজস্ক্রিয় ক্ষয় ধ্রুবক ($\\lambda = 0.693 / T_{1/2}$) এবং একাধিক অর্ধায়ু অতিবাহিত হওয়ার পর অবশিষ্ট পরমাণু বা অবশিষ্টাংশের ভর নিখুঁতভাবে হিসাব করে। | ✅ Passed |

---

## 2. SSC Chemistry Quantitative Engine (`tests/chemistry.test.ts` — 11 Tests)
**Target:** NCTB SSC Chemistry (Class 9–10, Chapters 2 to 11)  
**লক্ষ্য:** রসায়ন প্রথম ও দ্বিতীয় অংশের স্টয়কিওমেট্রি, আণবিক ভর, জারণ সংখ্যা, এনথালপি ও দ্রবণ সমীকরণ।

| # | Module / Topic | English Description | বাংলা বিবরণ ও যাচাইকরণ | Status |
| :-: | :--- | :--- | :--- | :-: |
| 01 | **Chemical Formula Parser** | **Correctly parses standard formulas and hydrates:** Asserts tokenizer decomposition of chemical formulas ($H_2O$, $Ca(OH)_2$, $CuSO_4\\cdot 5H_2O$), nested parenthesis sub-groups, crystalline water molecules, and precision molar mass summation. | **রাসায়নিক সংকেত ও কেলাস পানি পার্সার:** সংকেত বিশ্লেষক ($H_2O$, $Ca(OH)_2$, তুঁতে $CuSO_4\\cdot 5H_2O$) নির্ভুলভাবে প্রতিটি মৌলের পরমাণু সংখ্যা, বন্ধনীর গুণক ও ৫ অণু কেলাস পানি যোগ করে মোলার ভর বের করে। | ✅ Passed |
| 02 | **Module A:** Gas Diffusion | **Graham Diffusion Ratio ($NH_3$ vs $HCl$):** Verifies Graham's Law of Effusion/Diffusion ($r_1 / r_2 = \\sqrt{M_2 / M_1}$) and determines which gas diffuses faster based on inversely proportional molecular weights. | **গ্রাহামের গ্যাস ব্যাপন সূত্র ($NH_3$ বনাম $HCl$):** আণবিক ভরের সাথে ব্যাপন হারের ব্যস্তানুপাতিক সম্পর্ক ($r_1 / r_2 = \\sqrt{M_2 / M_1}$) ব্যবহার করে দুটি গ্যাসের ব্যাপন অনুপাত ও দ্রুততর ব্যাপনশীল গ্যাস শনাক্ত করে। | ✅ Passed |
| 03 | **Module B:** Atomic Structure | **Average Atomic Mass of Chlorine & Bohr Angular Momentum:** Computes isotopic weighted average atomic mass ($Cl$-35 at 75% and $Cl$-37 at 25% yielding 35.5) and Bohr stationary orbit electron angular momentum ($L = \\frac{n h}{2\\pi}$). | **আইসোটোপ থেকে গড় পারমাণবিক ভর ও বোর কৌণিক ভরবেগ:** ক্লোরিনের আইসোটোপ প্রাচুর্য হতে গড় আপেক্ষিক ভর (৩৫.৫) এবং বোরের পরমাণু মডেল অনুসারে $n$-তম শক্তিস্তরে ইলেকট্রনের কৌণিক ভরবেগ ($mvr = \\frac{nh}{2\\pi}$) নির্ণয় করে। | ✅ Passed |
| 04 | **Module C1:** Unified Mole | **Unified Mole Conversion:** Verifies multi-pathway mole equations ($n = \\frac{W}{M} = \\frac{V}{22.4} = \\frac{N}{6.023 \\times 10^{23}}$) from gram mass, STP liters, and Avogadro count. | **মোলের সমন্বিত সমীকরণ রূপান্তর:** মোলের ৪টি সমন্বিত শাখা ($n = \\frac{W}{M} = \\frac{V}{22.4} = \\frac{N}{N_A}$) পরীক্ষা করে গ্রাম ভর, STP আয়তন (লিটার) এবং এভোগাড্রো সংখ্যক কণার মধ্যে সঠিক রূপান্তর নিশ্চিত করে। | ✅ Passed |
| 05 | **Module C2:** Solution Molarity | **Solution Molarity and Solute Mass:** Validates volumetric concentration relationship ($W = \\frac{S \\times M \\times V}{1000}$) to solve for solute mass $W$ or molar concentration $S$ in milliliter solutions. | **দ্রবণের মোলার ঘনমাত্রা ও দ্রবের ভর:** মোলার দ্রবণ তৈরির সূত্র ($W = \\frac{SMV}{1000}$) অনুযায়ী প্রয়োজনীয় দ্রবের ভর ($W$) এবং নির্দিষ্ট ভরের দ্রবে মিলিলিটার আয়তনের দ্রবণের মোলারিটি ($S$) হিসাব করে। | ✅ Passed |
| 06 | **Module C4:** Chemical Formulas | **Empirical and Molecular Formula Synthesis:** Determines empirical formula (e.g. $CH$) and full molecular formula (e.g. $C_6H_6$, Benzene) from elemental percentages ($C=92.31\\%, H=7.69\\%$) and molecular mass (78 g/mol). | **স্থূল সংকেত ও আণবিক সংকেত নির্ণয়:** মৌলসমূহের শতকরা সংযুতি ($C=৯২.৩১\\%, H=৭.৬৯\\%$) ও আণবিক ভর (৭৮) হতে আপেক্ষিক পরমাণু সংখ্যা, সরল অনুপাত (স্থূল সংকেত $CH$) এবং আণবিক সংকেত ($C_6H_6$) বের করে। | ✅ Passed |
| 07 | **Module C5:** Limiting Reactants | **Limiting Reactant and Excess Determination:** Verifies stoichiometric reactant mole consumption ($2H_2 + O_2 \\rightarrow 2H_2O$), identifies the limiting reagent ($O_2$), and calculates theoretical product yield and percent yield. | **লিমিটিং বিক্রিয়ক ও উৎপাদের শতকরা পরিমাণ:** স্টয়কিওমেট্রিক সমীকরণ ($2H_2 + O_2 \\rightarrow 2H_2O$) অনুযায়ী প্রদত্ত ভরের মধ্যে কোন বিক্রিয়কটি নিঃশেষ হবে ($O_2$), কতটুকু উদ্বৃত্ত থাকবে এবং তাত্ত্বিক উৎপাদ (গ্রাম) নির্ধারণ করে। | ✅ Passed |
| 08 | **Module D:** Oxidation Numbers | **Algebraic Oxidation Number Solving:** Solves unknown atom oxidation states through algebraic conservation of compound charge (e.g. $Mn$ in $KMnO_4 = +7$, $S$ in $H_2SO_4 = +6$). | **বীজগণিতীয় জারণ সংখ্যা নির্ণয়:** নিরপেক্ষ যৌগ বা মূলকের মোট চার্জ শূন্য/নির্দিষ্ট ধরে অজানা মৌলের জারণ সংখ্যা (যেমন: $KMnO_4$-এ $Mn = +৭$, $H_2SO_4$-এ $S = +৬$) সমাধান করে। | ✅ Passed |
| 09 | **Module E:** Thermochemistry | **Reaction Enthalpy $\\Delta H$ for Methane Chlorination:** Evaluates bond energy equation ($\\Delta H = \\sum D_{broken} - \\sum D_{formed}$) for $CH_4 + Cl_2 \\rightarrow CH_3Cl + HCl$, confirming exothermic enthalpy change ($-99\\text{ kJ/mol}$). | **বন্ধন শক্তি ও বিক্রিয়া তাপ ($\\Delta H$) নির্ণয়:** ভাঙা বন্ধনের মোট শক্তি ও গড়া বন্ধনের মোট শক্তির বিয়োগফল ($\\Delta H = B_1 - B_2$) হতে মিথেন ও ক্লোরিনের বিক্রিয়ায় তাপমোচী প্রকৃতি ($-৯৯\\text{ kJ/mol}$) প্রতিপাদন করে। | ✅ Passed |
| 10 | **Module F:** Acids, Bases & pH | **pH and Acid-Base Titration Neutralization:** Validates logarithmic hydronium scale ($pH = -\\log[H^+]$, $pOH = 14 - pH$) and stoichiometric volumetric neutralization ($V_A S_A / a = V_B S_B / b$). | **pH ও এসিড-ক্ষার টাইট্রেশন প্রশমন:** হাইড্রোজেন আয়নের মোলার ঘনমাত্রা হতে $pH$ ও $pOH$ ($pH + pOH = ১৪$) এবং এসিড-ক্ষার টাইট্রেশনের প্রশমন সমীকরণ ($V_A S_A / a = V_B S_B / b$) থেকে অজানা আয়তন হিসাব করে। | ✅ Passed |
| 11 | **Module G:** Organic Hydrocarbons | **Hydrocarbon Homologous Series Generation:** Synthesizes homologous formulas, IUPAC names, and condensed structural representations for alkanes ($C_n H_{2n+2}$) and alkenes ($C_n H_{2n}$). | **হাইড্রোকার্বনের সমগোত্রীয় শ্রেণি:** অ্যালকেন ($C_n H_{2n+2}$) ও অ্যালকিন ($C_n H_{2n}$) সমগোত্রীয় শ্রেণির সাধারণ সংকেত হতে কার্বন সংখ্যার ভিত্তিতে আণবিক ও সংক্ষিপ্ত গাঠনিক সংকেত (যেমন: $CH_3-CH_2-CH_3$) প্রস্তুত করে। | ✅ Passed |

---

## 3. SSC Biology Quantitative Engine (`tests/biology.test.ts` — 10 Tests)
**Target:** NCTB SSC Biology (Class 9–10, Nutrition, Bioenergetics, Blood, Genetics, Ecology)  
**লক্ষ্য:** পুষ্টি ও বিপাকীয় হার, কোষীয় শ্বসন এটিপি ব্যালেন্স শিট, মেন্ডেলের জেনেটিক ক্রস ও বাস্তুতন্ত্র শক্তি প্রবাহ।

| # | Module / Chapter | English Description | বাংলা বিবরণ ও যাচাইকরণ | Status |
| :-: | :--- | :--- | :--- | :-: |
| 01 | **Module A:** Nutrition (BMI) | **Case 1: accurately calculates BMI and clinical classification:** Tests $BMI = \\frac{\\text{weight (kg)}}{(\\text{height (m)})^2}$ for 50 kg / 155 cm female, confirming normal weight ($BMI = 20.81$) and healthy weight target range. | **বিএমআই ও ক্লিনিকাল ওজন শ্রেণিবিভাগ:** বিএমআই সমীকরণ ($BMI = W / H^2$) ব্যবহার করে ৫০ কেজি ও ১৫৫ সেমি কিশোরীর স্বাভাবিক ওজন ($২০.৮১$) এবং স্বাভাবিক স্বাস্থ্যকর ওজনের সর্বনিম্ন ও সর্বোচ্চ সীমা বের করে। | ✅ Passed |
| 02 | **Module A:** Nutrition (BMI Bounds) | **Identifies underweight and overweight boundary conditions:** Asserts clinical cutoff thresholds ($BMI < 18.5$ Underweight, $BMI \\ge 25.0$ Overweight) and calculates the required weight gain/loss delta. | **ওজন ঘাটতি ও স্থূলতার প্রান্তিক সীমা:** পাঠ্যবই নির্দেশিত সীমারেখা ($<১৮.৫$ কম ওজন, $\\ge ২৫$ অতিরিক্ত ওজন) অনুযায়ী কাঙ্ক্ষিত স্বাভাবিক ওজনে পৌঁছাতে কত কেজি বাড়াতে বা কমাতে হবে তা যাচাই করে। | ✅ Passed |
| 03 | **Module A:** Metabolism (BMR/TDEE) | **Case 1: accurately computes BMR and TDEE with Harris-Benedict formulas:** Verifies gender-specific basal metabolic rate formulas for males and females, multiplied by physical activity levels (Sedentary to Moderately Active). | **হ্যারিস-বেনেডিক্ট সমীকরণে বিএমআর ও টিডিইই:** ছেলে ও মেয়েদের জন্য আলাদা বৈজ্ঞানিক সূত্রে মৌলিক বিপাকীয় হার (BMR) এবং শারীরিক পরিশ্রমের মাত্রার গুণক অনুযায়ী দৈনিক মোট ক্যালরি চাহিদা (TDEE) হিসাব করে। | ✅ Passed |
| 04 | **Module B:** Bioenergetics (Ch 4) | **Computes NCTB classical 38 ATP balance sheet for 1 mole of glucose:** Validates stage-by-stage ATP ledger: Glycolysis (8 ATP), Acetyl-CoA (6 ATP), and Krebs Cycle (24 ATP) yielding 38 ATP, 6 moles $CO_2$, and 277.4 kcal. | **গ্লুকোজের সবাত শ্বসনে প্রাচীন ৩৮ ATP ব্যালেন্স শিট:** ১ মোল গ্লুকোজ জারণে ৩টি ধাপ—গ্লাইকোলাইসিস (৮টি), এসিটাইল কো-এ (৬টি), ক্রেবস চক্র (২৪টি) মিলে মোট ৩৮টি ATP, ৬ অণু $CO_2$ এবং মোট ক্যালরি শক্তি যাচাই করে। | ✅ Passed |
| 05 | **Module B:** Bioenergetics (Modern) | **Computes modern 36 ATP yield and handles multiple glucose moles:** Verifies modern 36 ATP model accounting for mitochondrial glycerol-phosphate shuttle costs, scaling linearly for fractional glucose quantities. | **আধুনিক ৩৬ ATP মডেল ও ভগ্নাংশ মোল হিসাব:** আধুনিক শারীরবৃত্তীয় ৩৬ ATP মডেল এবং একাধিক বা ভগ্নাংশ মোল গ্লুকোজের জন্য সমানুপাতিক শক্তি উৎপাদন হিসাব নির্ভুলভাবে পরীক্ষা করে। | ✅ Passed |
| 06 | **Module C:** Genetics (Ch 12) | **Executes Mendelian monohybrid heterozygous cross ($Tt \\times Tt$):** Verifies Punnett square allele combinations, yielding 75% dominant, 25% recessive phenotypes, and $1:2:1$ ($TT:Tt:tt$) genotypic ratio. | **মেন্ডেলের মনোহাইব্রিড ক্রস ($Tt \\times Tt$):** প্যানেট স্কয়ার পদ্ধতিতে প্রথম সূত্রের একসংকর ক্রস সমাধান করে ৭৫% লম্বা, ২৫% খাটো ফিনোটাইপ এবং ১:২:১ জিনোটাইপ অনুপাত নিশ্চিত করে। | ✅ Passed |
| 07 | **Module C:** Genetics (Ch 12) | **Case 2: solves sex-linked carrier mother $\\times$ normal father cross:** Analyzes X-linked colorblindness, asserting 0% affected daughters (50% carriers) and 50% affected sons (overall 25% affected progeny). | **সেক্স-লিংকড বংশগতি (বাহক মা ও স্বাভাবিক বাবা):** এক্স-ক্রোমোজোম বাহিত বর্ণান্ধতার বংশগতি বিশ্লেষণ করে প্রমাণ করে যে কন্যারা কেউ আক্রান্ত হবে না (৫০% বাহক) এবং ৫০% পুত্রসন্তান বর্ণান্ধ হবে। | ✅ Passed |
| 08 | **Module C:** Genetics (Ch 12) | **Solves affected mother $\\times$ normal father cross (criss-cross inheritance):** Validates maternal criss-cross inheritance pattern where 100% of sons inherit the condition ($X^n Y$) and 100% of daughters are carriers ($X^N X^n$). | **ক্রিস-ক্রস ইনহেরিটেন্স (আক্রান্ত মা ও সুস্থ বাবা):** বর্ণান্ধ মা এবং সুস্থ বাবার মিলনে ক্রিস-ক্রস নীতি অনুযায়ী সকল পুত্রসন্তান (১০০%) বর্ণান্ধ হবে এবং সকল কন্যাসন্তান (১০০%) রোগটির বাহক হবে তা প্রতিপাদন করে। | ✅ Passed |
| 09 | **Module D:** Ecology (Ch 13) | **Case 3: verifies 10% trophic level transfer and 90% heat loss:** Tests Lindeman's 10% trophic energy law across 4 ecological levels (10,000 J Producer $\\rightarrow$ 1,000 J $\\rightarrow$ 100 J $\\rightarrow$ 10 J Tertiary Consumer), logging 9,990 J heat dissipation. | **লিন্ডেম্যানের ১০% বাস্তুসংস্থানিক শক্তি স্থানান্তর নীতি:** খাদ্য শিকলের ৪টি ট্রফিক স্তরে (উৎপাদক ১০,০০০ জুল $\\rightarrow$ প্রাথমিক ১,০০০ জুল $\\rightarrow$ গৌণ ১০০ জুল $\\rightarrow$ সর্বোচ্চ ১০ জুল) শক্তি প্রবাহ এবং ৯০% তাপীয় অপচয় হিসাব করে। | ✅ Passed |
| 10 | **Module E:** Blood Compatibility | **Correctly identifies universal donor and universal recipient:** Validates ABO/Rh agglutination antigens and plasma antibodies, confirming $O^-$ safety for all, and identifying clumping risks (e.g. $A^+ \\rightarrow B^+$ incompatible). | **রক্তের গ্রুপ ও সঞ্চালন সামঞ্জস্যতা:** লোহিত রক্তকণিকার অ্যান্টিজেন ও রক্তরসের অ্যান্টিবডির বিক্রিয়া বিচার করে $O^-$ সার্বজনীন দাতা, $AB^+$ সার্বজনীন গ্রহীতা এবং অমিল গ্রুপের ক্ষেত্রে রক্ত জমাট বাঁধার ঝুঁকি নির্দেশ করে। | ✅ Passed |

---

## 4. SSC General Mathematics Engine (`tests/general-math.test.ts` — 17 Tests)
**Target:** NCTB SSC General Mathematics (Class 9–10, Chapters 2, 3, 4, 9, 10, 11, 16, 17)  
**লক্ষ্য:** সেট ও ফাংশন, বীজগণিতীয় রাশি, সূচক ও লগারিদম, ত্রিকোণমিতি, অনুপাত, পরিমিতি ও শ্রেণিকৃত পরিসংখ্যান।

| # | Chapter / Module | English Description | বাংলা বিবরণ ও যাচাইকরণ | Status |
| :-: | :--- | :--- | :--- | :-: |
| 01 | **Chapter 2:** Sets & Functions | **Calculates power set elements and proper subsets:** Asserts power set formula $2^n$ and proper subsets $2^n - 1$ for a set of cardinality 3 ($2^3 = 8$ subsets, 7 proper). | **শক্তি সেটের উপাদান ও প্রকৃত উপসেট:** কোনো সেটের উপাদান সংখ্যা $n$ হলে তার শক্তি সেটের উপাদান সংখ্যা $2^n$ এবং প্রকৃত উপসেটের সংখ্যা $2^n - 1$ হওয়ার পাঠ্যবইয়ের সূত্র যাচাই করে। | ✅ Passed |
| 02 | **Chapter 2:** Sets & Functions | **Calculates cartesian product properly:** Evaluates ordered pairs in Cartesian product $A \\times B$ and asserts product cardinality $n(A \\times B) = n(A) \\times n(B)$. | **কার্তেসীয় গুণজ সেট ($A \\times B$):** দুটি সসীম সেটের কার্তেসীয় গুণজের উপাদান সংখ্যা এবং সংশ্লিষ্ট সকল ক্রোমজোড়ের নির্ভুল তালিকা তৈরি পরীক্ষা করে। | ✅ Passed |
| 03 | **Chapter 3:** Algebraic Expressions | **Computes $a^2 + b^2$ and $(a-b)^2$ from sum and product:** Evaluates standard textbook algebraic identities $a^2+b^2 = (a+b)^2 - 2ab$ and $(a-b)^2 = (a+b)^2 - 4ab$ from known sum and product. | **বর্গের অনুসিদ্ধান্ত ($a^2+b^2$ ও $(a-b)^2$):** দুটি রাশির যোগফল ও গুণফল জানা থাকলে সরাসরি সূত্রাবলি প্রয়োগ করে বর্গের যোগফল ও বিয়োগফলের বর্গ নির্ণয় করে। | ✅ Passed |
| 04 | **Chapter 3:** Algebraic Expressions | **Computes $a^3 + b^3$ from sum and product:** Evaluates cubic sum expansion identity $a^3 + b^3 = (a+b)^3 - 3ab(a+b)$ with integer inputs. | **ঘনের অনুসিদ্ধান্ত ($a^3+b^3$):** ঘনের সূত্রাবলির সাহায্যে রাশির ঘনকের সমষ্টির মান নির্ভুলভাবে বের করে। | ✅ Passed |
| 05 | **Chapter 3:** Algebraic Expressions | **Computes $a^2 + b^2 + c^2$ from trinomial sum and pairwise product:** Evaluates three-variable identity $(a+b+c)^2 - 2(ab+bc+ca)$. | **ত্রিপদী রাশির বর্গের অনুসিদ্ধান্ত:** $(a+b+c)$ এবং $(ab+bc+ca)$-এর মান জানা থাকলে $(a^2+b^2+c^2)$-এর সঠিক মান প্রতিপাদন করে। | ✅ Passed |
| 06 | **Chapter 4:** Exponents & Logarithms | **Computes power evaluations and prevents illegal zeroes:** Tests exponent powers and enforces curriculum mathematical guard rails ($0^{-n}$ is undefined). | **সূচকীয় মান ও অনির্ণেয় রূপ প্রতিরোধ:** ধনাত্মক ও ঋণাত্মক সূচকের মান এবং শূন্যের ঋণাত্মক ঘাত ($০^{-n}$) হলে সিস্টেমে সঠিক ত্রুটি বার্তা প্রদান নিশ্চিত করে। | ✅ Passed |
| 07 | **Chapter 4:** Exponents & Logarithms | **Computes logarithms with base validation:** Asserts log value $\\log_b N$ and rejects invalid inputs ($b=1$, $b \\le 0$, $N \\le 0$). | **লগারিদম ও ভিত্তি শর্ত যাচাই:** লগারিদমের মান হিসাব করে এবং পাঠ্যবই অনুসারে ভিত্তির শর্তাবলী ($a > 0, a \\neq 1$) এবং সংখ্যার শর্ত ($N > 0$) কঠোরভাবে যাচাই করে। | ✅ Passed |
| 08 | **Chapter 4:** Exponents & Logarithms | **Converts to scientific notation format $A \\times 10^n$:** Normalizes large integers into standard NCTB scientific notation where $1 \\le A < 10$. | **আদর্শ বা বৈজ্ঞানিক রূপে প্রকাশ ($A \\times 10^n$):** যেকোনো সংখ্যাকে পাঠ্যবই নির্ধারিত আদর্শ রূপে ($১ \\le A < ১০$ এবং $n \\in \\mathbb{Z}$) রূপান্তর করে। | ✅ Passed |
| 09 | **Chapter 9 & 10:** Trigonometry & Heights | **Verifies Walkthrough 2: height from $60^\\circ$ and 30m distance:** Solves right triangle height $h = d \\tan\\theta = 30 \\tan(60^\\circ) = 30\\sqrt{3} \\approx 51.962\\text{ m}$. | **উন্নতি কোণ থেকে উচ্চতা নির্ণয়:** সমকোণী ত্রিভুজে ভূমির দূরত্ব (৩০ মি.) ও উন্নতি কোণ ($৬০^\\circ$) হতে মিনারের উচ্চতা ($h = d\\tan\\theta$) নির্ণয় করে। | ✅ Passed |
| 10 | **Chapter 9 & 10:** Trigonometry & Heights | **Calculates tower observed from two points (same side and opposite side):** Solves classic two-angle distance-height trigonometry problems from same side or opposing sides. | **দুটি বিন্দু থেকে মিনারের উচ্চতা ও দূরত্ব:** নদীর একপারে বা দুই বিপরীত বিন্দু হতে দুটি আলাদা উন্নতি কোণে পর্যবেক্ষণ সংক্রান্ত সৃজনশীল প্রশ্নের সমাধান করে। | ✅ Passed |
| 11 | **Chapter 9 & 10:** Trigonometry & Heights | **Calculates broken tree problem:** Solves classic storm-broken tree scenario ($x = \\frac{H \\sin\\theta}{1 + \\sin\\theta}$) for break height and standing segment. | **ঝড়ে ভাঙা গাছের সমস্যা:** সম্পূর্ণ উচ্চতা ও ভাঙা অংশের ভূমির সাথে সৃষ্ট কোণ দেওয়া থাকলে ভূমিতে স্পর্শ করা অংশ ও দণ্ডায়মান অংশের উচ্চতা বের করে। | ✅ Passed |
| 12 | **Chapter 11:** Ratio & Proportion | **Computes componendo-dividendo and rejects $a == b$:** Tests proportion transformations $\\frac{a+b}{a-b}$ and validates non-zero denominator conditions. | **যোজন-বিয়োজন পদ্ধতি:** অনুপাতের সমীকরণে যোজন-বিয়োজন রূপান্তর ($\frac{a+b}{a-b}$) এবং হর শূন্য ($a=b$) হওয়ার ক্ষেত্রে সতর্কবার্তা প্রদান যাচাই করে। | ✅ Passed |
| 13 | **Chapter 16:** Mensuration | **Calculates equilateral triangle area:** Verifies formula $\\text{Area} = \\frac{\\sqrt{3}}{4} a^2$ for regular equilateral triangles. | **সুষম সমবাহু ত্রিভুজের ক্ষেত্রফল:** প্রতি বাহুর দৈর্ঘ্য $a$ বিশিষ্ট সমবাহু ত্রিভুজের ক্ষেত্রফল ($\frac{\sqrt{3}}{4} a^2$) নিখুঁত দশমিক মানে যাচাই করে। | ✅ Passed |
| 14 | **Chapter 16:** Mensuration | **Strictly validates triangle inequality in Heron formula:** Verifies Heron's area formula $\\sqrt{s(s-a)(s-b)(s-c)}$ and strictly rejects sides violating triangle inequality ($a+b \\le c$). | **হেরনের সূত্রে ক্ষেত্রফল ও ত্রিভুজ অসমতা:** বিষমবাহু ত্রিভুজের ৩টি বাহু হতে ক্ষেত্রফল নির্ণয় এবং যেকোনো দুই বাহুর যোগফল তৃতীয় বাহু অপেক্ষা বৃহত্তর ($a+b > c$) না হলে তা প্রত্যাখ্যান করে। | ✅ Passed |
| 15 | **Chapter 16:** Mensuration | **Calculates regular hexagon area:** Evaluates regular $n$-gon formula $\\text{Area} = \\frac{n a^2}{4 \\tan(\\pi/n)}$ specifically for $n=6$. | **সুষম ষড়ভুজের ক্ষেত্রফল:** প্রতি বাহুর দৈর্ঘ্য জানা থাকলে সুষম বহুভুজ সূত্রের সাহায্যে ষড়ভুজের ক্ষেত্রফল হিসাব করে। | ✅ Passed |
| 16 | **Chapter 17:** Grouped Statistics | **Verifies Walkthrough 1: 31-40 (4), 41-50 (6), 51-60 (8):** Computes grouped frequency distribution mean ($A + \\frac{\\sum f_i u_i}{N} h$), cumulative median ($L + (\\frac{N/2 - F_c}{f_m})h$), and mode ($L + (\\frac{f_1}{f_1 + f_2})h$). | **শ্রেণিকৃত উপাত্তের গড়, মধ্যক ও প্রচুরক:** ক্রমযোজিত গণসংখ্যা সারণি তৈরি করে সংক্ষিপ্ত পদ্ধতিতে গড়, মধ্যক ও প্রচুরক শ্রেণির নিখুঁত মান এবং $f_1, f_2$ বের করে। | ✅ Passed |
| 17 | **Chapter 17:** Grouped Statistics | **Handles first class being the modal class ($f_{preceding} = 0$):** Asserts boundary robustness when the modal class is the very first interval ($f_1 = f_{modal} - 0$). | **প্রথম শ্রেণিতে প্রচুরক থাকার প্রান্তিক কেস:** প্রচুরক শ্রেণি সারণির প্রথমটি হলে তার পূর্ববর্তী শ্রেণির গণসংখ্যা শূন্য ধরে ($f_1 = f_m - ০$) প্রচুরক সূত্র সঠিকভাবে সমাধান করে। | ✅ Passed |

---

## 5. SSC Higher Mathematics Engine (`tests/higher-math.test.ts` — 17 Tests)
**Target:** NCTB SSC Higher Mathematics (Class 9–10, All 14 Chapters)  
**লক্ষ্য:** উচ্চতর গণিতের ভেনচিত্র, বিপরীত ফাংশন, ভাগশেষ উপপাদ্য, অ্যাপোলোনিয়াস, অসমতা, অনন্ত ধারা ও স্থানাঙ্ক জ্যামিতি।

| # | Chapter / Topic | English Description | বাংলা বিবরণ ও যাচাইকরণ | Status |
| :-: | :--- | :--- | :--- | :-: |
| 01 | **Chapter 1:** Sets & Functions | **Accurately computes 3-set Venn inclusion-exclusion:** Solves 3-set union formula $n(A \\cup B \\cup C)$ and partitions mutually exclusive disjoint regions ($n(A \\text{ only})$, $n(B \\text{ only})$, $n(C \\text{ only})$). | **৩টি সেটের ভেনচিত্র ও সংযোগ-ছেদ নীতি:** ৩টি সেটের সংযোগের উপাদান সংখ্যা এবং কেবল $A$, কেবল $B$, কেবল $C$-এর একক এলাকা সমূহের উপাদান সংখ্যা নিখুঁতভাবে বের করে। | ✅ Passed |
| 02 | **Chapter 1:** Sets & Functions | **Determines fractional inverse and domain/range exclusions:** Inverts rational linear fractional function $f(x) = \\frac{ax+b}{cx+d} \\Rightarrow f^{-1}(x) = \\frac{-dx+b}{cx-a}$ and flags restricted domain/range values. | **ভগ্নাংশ ফাংশনের বিপরীত ফাংশন ও ডোমেন-রেঞ্জ:** $f(x) = \\frac{ax+b}{cx+d}$ আকারের ফাংশনের বিপরীত ফাংশন নির্ণয় এবং যে বিন্দুতে হর শূন্য হয় তা বাদ দিয়ে ডোমেন ও রেঞ্জ নির্ধারণ করে। | ✅ Passed |
| 03 | **Chapter 2:** Algebraic Expressions | **Evaluates Remainder Theorem $P(a)$:** Computes remainder of polynomial $P(x)$ divided by $(x - a)$, checking whether $(x - a)$ is an exact factor ($P(a) = 0$). | **ভাগশেষ উপপাদ্য ও উৎপাদক বিশ্লেষণ:** কোনো বহুপদী $P(x)$-কে $(x-a)$ দ্বারা ভাগ করলে ভাগশেষ যে $P(a)$ হয় তা পরীক্ষা করে এবং উৎপাদক হওয়ার শর্ত যাচাই করে। | ✅ Passed |
| 04 | **Chapter 2:** Algebraic Expressions | **Evaluates cyclic cubic identity and zero sum condition:** Computes cyclic symmetric identity $a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2 - ab - bc - ca)$, confirming zero when $a+b+c = 0$. | **চক্র-ক্রমিক ঘন অভেদ ও শূন্য যোগফল শর্ত:** চক্র-ক্রমিক বহুপদীর মান এবং যদি $a+b+c=0$ হয় তবে $a^3+b^3+c^3 = 3abc$ হওয়ার ঐতিহাসিক শর্ত প্রমাণ করে। | ✅ Passed |
| 05 | **Chapter 3:** Geometry | **Calculates triangle medians and verifies $3\\sum(\\text{sides}^2) = 4\\sum(\\text{medians}^2)$:** Implements Apollonius' Theorem to compute all three median lengths ($d_a, d_b, d_c$) and verifies the fundamental ratio. | **অ্যাপোলোনিয়াসের উপপাদ্য ও ত্রিভুজের মধ্যমা:** ৩টি বাহু হতে অ্যাপোলোনিয়াসের সূত্রে মধ্যমা ৩টির দৈর্ঘ্য এবং ৩ × (বাহুগুলোর বর্গের যোগফল) = ৪ × (মধ্যমাগুলোর বর্গের যোগফল) সত্যতা যাচাই করে। | ✅ Passed |
| 06 | **Chapter 5:** Equations | **Solves quadratic with real distinct, equal, and complex roots:** Evaluates discriminant $D = b^2 - 4ac$, deriving real distinct, real equal, or conjugate complex roots ($x = \\alpha \\pm i\\beta$). | **দ্বিঘাত সমীকরণের নিশ্চায়ক ও মূলের প্রকৃতি:** নিশ্চায়কের মান ($D = b^2 - 4ac$) বিচার করে মূলদ্বয় বাস্তব ও অসমান, বাস্তব ও সমান, অথবা অনুবন্ধী জটিল সংখ্যা তা সঠিকভাবে নির্ণয় করে। | ✅ Passed |
| 07 | **Chapter 6:** Inequalities | **Solves linear inequality with positive and negative coefficients:** Solves $ax + b \\le c$, correctly flipping the inequality direction when dividing by a negative coefficient $a < 0$. | **একচলকবিশিষ্ট অসমতা ও ঋণাত্মক চিহ্নের দিক পরিবর্তন:** অসমতা সমাধানের সময় ঋণাত্মক সংখ্যা দ্বারা উভয়পক্ষকে গুণ বা ভাগ করলে অসমতার চিহ্ন যে উল্টে যায় ($x \\ge -k$) তা নিশ্চিত করে। | ✅ Passed |
| 08 | **Chapter 7:** Infinite Series | **Computes sum of infinite geometric series when $|r| < 1$:** Validates sum to infinity formula $S_\\infty = \\frac{a}{1 - r}$ and flags divergent series when $|r| \\ge 1$. | **অসীম গুণোত্তর ধারার সমষ্টি ($|r| < 1$):** সাধারণ অনুপাতের পরমমান ১ অপেক্ষা ছোট হলে অসীমতক সমষ্টির অস্তিত্ব ($S_\\infty = \frac{a}{1-r}$) এবং $|r| \\ge 1$ হলে ধারার অপসারিতা নির্দেশ করে। | ✅ Passed |
| 09 | **Chapter 7:** Infinite Series | **Converts recurring decimal $0.333...$ and $0.1666...$ to irreducible fractions:** Implements geometric progression summation to yield reduced fractions ($1/3$, $1/6$). | **পৌনঃপুনিক দশমিক ভগ্নাংশকে সাধারণ ভগ্নাংশে রূপান্তর:** পৌনঃপুনিক দশমিক সংখ্যাকে অসীম গুণোত্তর ধারায় রূপান্তর করে লঘিষ্ঠ সাধারণ ভগ্নাংশে (যেমন: $০.৩\\dots = ১/৩$) প্রকাশ করে। | ✅ Passed |
| 10 | **Chapter 8 & 9:** Trig & Log | **Calculates arc length and sector area:** Computes circular arc length $s = r\\theta$ and sector area $A = \\frac{1}{2} r^2 \\theta$ with degree-to-radian conversion. | **বৃত্তচাপের দৈর্ঘ্য ও বৃত্তকলার ক্ষেত্রফল:** কোণকে রেডিয়ানে রূপান্তর করে বৃত্তচাপের দৈর্ঘ্য ($s = r\theta$) এবং বৃত্তকলার ক্ষেত্রফল ($A = \frac{1}{2} r^2 \theta$) বের করে। | ✅ Passed |
| 11 | **Chapter 8 & 9:** Trig & Log | **Solves logarithm with base change:** Computes custom base logarithms using change-of-base formula $\\log_b a = \\frac{\\ln a}{\\ln b}$. | **লগারিদমের ভিত্তি পরিবর্তন:** ভিত্তি পরিবর্তনের সূত্রের সাহায্যে যেকোনো ভিত্তির লগারিদমিক মান (যেমন: $\\log_2 8 = 3$) সমাধান করে। | ✅ Passed |
| 12 | **Chapter 10:** Binomial Expansion | **Computes combinations and expands binomial power:** Verifies combination formula $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$ and generates Pascal triangle coefficients for binomial powers $(x+y)^n$. | **দ্বিপদী বিস্তৃতি ও সমাবেশ ($nCr$):** সমাবেশ সংখ্যার মান এবং দ্বিপদী উপপাদ্য অনুযায়ী $(x+y)^n$-এর সকল পদের সহগ নির্ভুলভাবে তৈরি করে। | ✅ Passed |
| 13 | **Chapter 11:** Coordinate Geometry | **Computes Shoelace area for triangle $(2,5), (-1,1), (2,1)$:** Evaluates surveyor's Shoelace formula for vertices ordered anti-clockwise, yielding exact positive geometric area. | **শু-লেস পদ্ধতিতে ত্রিভুজের ক্ষেত্রফল:** স্থানাঙ্ক জ্যামিতিতে শীর্ষবিন্দুগুলোকে ঘড়ির কাঁটার বিপরীত ক্রমে সাজিয়ে নির্ণায়ক/শু-লেস পদ্ধতিতে ক্ষেত্রফল (৬ বর্গ একক) হিসাব করে। | ✅ Passed |
| 14 | **Chapter 11:** Coordinate Geometry | **Computes line distance, slope and equation:** Evaluates Euclidean distance $\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$, gradient $m = \\frac{y_2-y_1}{x_2-x_1}$, and line equation $y - y_1 = m(x - x_1)$. | **সরলরেখার দূরত্ব, ঢাল ও সমীকরণ:** দুটি বিন্দুর মধ্যবর্তী দূরত্ব, সরলরেখার ঢাল ($m$) এবং বিন্দু-ঢাল আকারে সরলরেখার সমীকরণ বের করে। | ✅ Passed |
| 15 | **Chapter 12:** Vectors | **Calculates vector magnitude and angle:** Computes $2\\text{D}$ vector Euclidean norm $|\\vec{v}| = \\sqrt{x^2 + y^2}$ and directional orientation angle $\\theta = \\tan^{-1}(y/x)$ in degrees. | **দ্বিমাত্রিক ভেক্টরের মান ও কোণ:** ভেক্টরের পরম মান ($|\\vec{v}| = \\sqrt{x^2 + y^2}$) এবং অনুভূমিক অক্ষের সাথে দিক নির্দেশক কোণ ($\theta$) ডিগ্রি এককে বের করে। | ✅ Passed |
| 16 | **Chapter 13:** Solid Geometry | **Solves 3D cone geometry:** Calculates right circular cone slant height ($l = \\sqrt{r^2 + h^2}$), curved surface area, total surface area, and solid volume ($V = \\frac{1}{3}\\pi r^2 h$). | **ঘন জ্যামিতিতে সমবৃত্তভূমিক কোণক (শঙ্কু):** ব্যাসার্ধ ও উচ্চতা দেওয়া থাকলে হেলানো উচ্চতা ($l$), বক্রতলের ক্ষেত্রফল এবং আয়তন ($V = \\frac{1}{3}\\pi r^2 h$) হিসাব করে। | ✅ Passed |
| 17 | **Chapter 14:** Probability | **Computes probability and odds:** Asserts theoretical classical probability $P(E) = \\frac{n(E)}{n(S)}$, probability percentage, and relative odds for sample spaces. | **তাত্ত্বিক সম্ভাবনা ও সম্ভাবনা শতকরা:** অনুকূল ফলাফল সংখ্যা ও মোট নমুনা বিন্দুর অনুপাত হতে ক্লাসিক্যাল সম্ভাবনা ($০ \\le P(E) \\le ১$) এবং শতকরা হার নির্ধারণ করে। | ✅ Passed |

---

## 6. HSC ICT & System Simulator Engines (`tests/ict-engines.test.ts` — 15 Tests)
**Target:** NCTB HSC ICT (Class 11–12, Logic Gates, Adders, SQL DBMS, C Programming, HTML & Curriculum Integrity)  
**লক্ষ্য:** এইচএসসি আইসিটির বুলিয়ান লজিক গেট, অ্যাডার সার্কিট, রিলেশনাল এসকিউএল ডাটাবেজ, সি কোড ভ্যারিয়েবল ট্রেসার ও এইচটিএমএল টেবিল।

| # | Engine / Subsystem | English Description | বাংলা বিবরণ ও যাচাইকরণ | Status |
| :-: | :--- | :--- | :--- | :-: |
| 01 | **Logic Gates** | **Evaluates basic logic gates accurately:** Verifies truth tables for primary and universal digital logic gates: AND, OR, NOT, XOR, NAND, NOR, and XNOR across all binary input pairs. | **মৌলিক ও যৌগিক লজিক গেটের সত্যক সারণি:** অ্যান্ড, অর, নট, এক্স-অর, ন্যান্ড, নর এবং এক্স-নর গেটের সকল বাইনারি ইনপুট কম্বিনেশনের আউটপুট নির্ভুলভাবে যাচাই করে। | ✅ Passed |
| 02 | **Digital Adders** | **Accurately computes Half Adder outputs (Sum & Carry):** Tests 2-bit Half Adder circuit truth table: $\\text{Sum} = A \\oplus B$ and $\\text{Carry} = A \\cdot B$. | **হাফ অ্যাডার সার্কিটের যোগফল ও ক্যারি:** হাফ অ্যাডার বর্তনীতে দুটি বাইনারি বিটের যোগফল ($\text{Sum} = A \\oplus B$) এবং হাতে থাকা ক্যারি ($\text{Carry} = AB$) হিসাব নিশ্চিত করে। | ✅ Passed |
| 03 | **Digital Adders** | **Accurately computes Full Adder outputs:** Tests 3-bit Full Adder circuit logic with carry-in ($C_{in}$), producing correct Sum ($A \\oplus B \\oplus C_{in}$) and Carry-out ($AB + BC_{in} + C_{in}A$). | **ফুল অ্যাডার সার্কিটের ৩-বিট যোগ ও ক্যারি:** ইনপুট ক্যারি সহ ফুল অ্যাডারের যোগফল ও আউটপুট ক্যারির সত্যক সারণি সমীকরণ নির্ভুলভাবে যাচাই করে। | ✅ Passed |
| 04 | **SQL Simulator** | **Executes `SELECT *` on Student table:** Verifies in-memory relational SQL engine parsing and projected column generation for table records. | **ডাটাবেজে `SELECT *` কুয়েরি নির্বাহ:** মেমরি-ভিত্তিক রিলেশনাল ডাটাবেজে স্টুডেন্ট টেবিলের সকল রেকর্ড এবং কলাম ফিল্ড সফলভাবে প্রদর্শন করে। | ✅ Passed |
| 05 | **SQL Simulator** | **Filters records with `WHERE` clause:** Validates numerical and string condition predicate evaluation (e.g. `WHERE GPA >= 5.00`), filtering qualifying dataset rows. | **`WHERE` শর্তযুক্ত ফিল্টারিং কুয়েরি:** নির্দিষ্ট শর্ত (যেমন: `GPA >= 5.00`) পূরণকারী রেকর্ডগুলো সঠিকভাবে ফিল্টার ও প্রদর্শন করে। | ✅ Passed |
| 06 | **SQL Simulator** | **Orders records correctly with `ORDER BY`:** Tests descending and ascending order sorting algorithms on numeric database columns. | **`ORDER BY` অনুসারে উপাত্ত সাজানো:** জিপিএ বা রোল নম্বরের ভিত্তিতে উর্ধ্বক্রম বা নিম্নক্রমে রেকর্ড বিন্যাস যাচাই করে। | ✅ Passed |
| 07 | **SQL Simulator** | **Performs `INNER JOIN` between Student and Result tables:** Evaluates primary-foreign key relational joining (`Student.Roll = Result.Roll`), merging disparate table schema columns into a single unified result. | **`INNER JOIN` রিলেশনাল টেবিল ম্যাপিং:** প্রাইমারি ও ফরেন কি-এর ভিত্তিতে দুটি পৃথক টেবিলকে যুক্ত করে সমন্বিত ফলাফল প্রস্তুত করে। | ✅ Passed |
| 08 | **SQL Simulator** | **Performs `GROUP BY` with `COUNT` aggregate:** Validates grouped grouping logic across categorical fields (e.g., grouping by student academic branch: Science, Commerce, Humanities). | **`GROUP BY` ও `COUNT` সমষ্টিগত কুয়েরি:** বিভাগ অনুযায়ী (বিজ্ঞান, মানবিক, ব্যবসায় শিক্ষা) শিক্ষার্থীদের দলবদ্ধ গণনা হিসাব করে। | ✅ Passed |
| 09 | **SQL Simulator** | **Returns graceful error message on invalid syntax:** Ensures syntax errors throw clean, descriptive user-facing feedback without crashing the web client. | **ভুল এসকিউএল সিনট্যাক্সে মার্জিত ত্রুটি বার্তা:** কোয়েরিতে ব্যাকরণগত ভুল থাকলে ব্রাউজার ক্র্যাশ না করে পরিষ্কার নির্দেশনামূলক বার্তা প্রদান করে। | ✅ Passed |
| 10 | **C Code Tracer** | **Generates execution steps for Fibonacci preset:** Traces step-by-step memory variables ($n, a, b, temp$) and stdout buffer during iterative Fibonacci sequence generation. | **সি ল্যাঙ্গুয়েজ ট্রেসিং: ফিবোনাচ্চি ধারা:** লুপের প্রতিটি ধাপে মেমরি ভ্যারিয়েবলের মান পরিবর্তন ও আউটপুট কনসোল ট্রেস তৈরি করে। | ✅ Passed |
| 11 | **C Code Tracer** | **Generates execution steps for prime check preset:** Traces square-root division boundary testing and boolean prime flag updates for integer primality testing in C. | **সি ল্যাঙ্গুয়েজ ট্রেসিং: মৌলিক সংখ্যা যাচাই:** কোনো সংখ্যা মৌলিক কি না তা পরীক্ষার লুপের প্রতিটি ইটারেশন ও ভ্যারিয়েবল স্টেট প্রদর্শন করে। | ✅ Passed |
| 12 | **C Code Tracer** | **Generates execution steps for Factorial preset:** Traces accumulator multiplication variable ($fact = fact \\times i$) across $n!$ loop cycles up to final termination. | **সি ল্যাঙ্গুয়েজ ট্রেসিং: ফ্যাক্টোরিয়াল ($n!$):** ১ থেকে $n$ পর্যন্ত ক্রমিক গুণের ধাপে ধাপে মান বৃদ্ধি এবং চূড়ান্ত ফলাফল রেকর্ড করে। | ✅ Passed |
| 13 | **HTML Templates** | **Contains valid HTML templates with proper tags:** Verifies presence of NCTB board exam presets including table structures with `colspan` and `rowspan` attributes. | **এইচটিএমএল টেবিল ও স্প্যান ট্যাগ ভ্যালিডেশন:** এইচএসসি পরীক্ষার উপযোগী জটিল টেবিল টেমপ্লেট (`colspan`, `rowspan`) এবং ফরম্যাটের নির্ভুলতা নিশ্চিত করে। | ✅ Passed |
| 14 | **Curriculum Taxonomy** | **Includes both SSC and HSC levels across 6 subjects:** Asserts structural completeness of the platform's curriculum database across all 6 core disciplines. | **শিক্ষাক্রম ডাটাবেজে সকল শ্রেণি ও বিষয়ের পূর্ণতা:** এসএসসি ও এইচএসসি স্তরের ৬টি বিষয়েরই কাঠামোগত ডাটাবেজ ইন্টিগ্রিটি যাচাই করে। | ✅ Passed |
| 15 | **Curriculum Taxonomy** | **Retrieves individual subjects and chapters reliably:** Tests deterministic lookup of chapter IDs, localized Bengali chapter titles, formula lists, and interactive tool bindings. | **বিষয় ও অধ্যায়ভিত্তিক তথ্য উত্তোলন নিশ্চয়তা:** প্রতিটি চ্যাপ্টারের আইডি, বাংলা নাম, কোর ফর্মুলা এবং ইন্টারঅ্যাক্টিভ টুলের ম্যাপিং নির্ভরযোগ্যভাবে পরীক্ষা করে। | ✅ Passed |

---

## 7. Core Solvers & Foundational Engines (`tests/engines.test.ts` — 15 Tests)
**Target:** Foundational Mathematical & Chemical Engines  
**লক্ষ্য:** আণবিক ভর ভাঙন, জারণ-বিজারণ ব্যালেন্সার, তাৎপর্যপূর্ণ অংক সংখ্যা, প্রক্ষেপক গতি ও দ্বিঘাত সমীকরণ অ্যালগরিদম।

| # | Engine | English Description | বাংলা বিবরণ ও যাচাইকরণ | Status |
| :-: | :--- | :--- | :--- | :-: |
| 01 | **Molar Mass** | **Correctly calculates molar mass of water ($H_2O$):** Verifies parsing of binary compounds, elemental stoichiometry ($2H + 1O$), and molar mass summation ($18.015\\text{ g/mol}$). | **পানির আণবিক ভর ($H_2O$):** যৌগের সংকেত ভেঙে হাইড্রোজেন ও অক্সিজেনের পরমাণু গণনা এবং সঠিক মোলার ভর হিসাব করে। | ✅ Passed |
| 02 | **Molar Mass** | **Correctly calculates hydrated salt ($CuSO_4\\cdot 5H_2O$):** Tests copper sulfate pentahydrate parsing, verifying copper mass percentage ($25.45\\%$) and total hydrated mass ($249.68\\text{ g/mol}$). | **কেলাস পানিযুক্ত লবণ ($CuSO_4\\cdot 5H_2O$):** তুঁতের ৫ অণু কেলাস পানির সংযুক্তি এবং তামার শতকরা সংযুতি নির্ভুলভাবে যাচাই করে। | ✅ Passed |
| 03 | **Molar Mass** | **Handles nested parentheses like $Ca(OH)_2$:** Asserts recursive element multiplier distribution over chemical radical parentheses ($1Ca + 2O + 2H = 74.09\\text{ g/mol}$). | **জটিল বন্ধনীযুক্ত যৌগ ($Ca(OH)_2$):** কলিচুন বা ব্র্যাকেটযুক্ত যৌগে বন্ধনীর ভিতরের পরমাণুগুলোকে সঠিক গুণকে প্রসারিত করে ভর যোগ করে। | ✅ Passed |
| 04 | **Molar Mass** | **Throws for unknown element symbols:** Guards against invalid user typos (e.g. `$Xx_2O$`), throwing a descriptive error. | **অপরিচিত রাসায়নিক প্রতীকে এক্সেপশন প্রতিরোধ:** পর্যায় সারণির বাইরে কোনো ভুল প্রতীক ইনপুট দিলে সিস্টেম সুরক্ষিতভাবে ইরর প্রদান করে। | ✅ Passed |
| 05 | **Redox Balancer** | **Provides verified solution for acidic $KMnO_4 + FeSO_4$:** Balances half-reactions: oxidation multiplier 5 ($Fe^{2+} \\rightarrow Fe^{3+} + e^-$) and reduction multiplier 1 ($MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$). | **অম্লীয় মাধ্যমে জারণ-বিজারণ সমতাকরণ:** পটাশিয়াম পারম্যাঙ্গানেট ও ফেরাস সালফেটের অর্ধ-বিক্রিয়ায় ইলেকট্রন সমতা এবং দর্শক আয়ন সমন্বয় করে। | ✅ Passed |
| 06 | **Redox Balancer** | **Provides verified solution for basic $KMnO_4 + KI$:** Asserts basic medium balancing with hydroxide ions ($OH^-$) and reduction multiplier 2. | **ক্ষারীয় মাধ্যমে জারণ-বিজারণ সমতাকরণ:** ক্ষারীয় দ্রবণে পারম্যাঙ্গানেট ও আয়োডাইডের বিক্রিয়ায় হাইড্রোক্সাইড ($OH^-$) আয়নের সঠিক অনুপাত তৈরি করে। | ✅ Passed |
| 07 | **Significant Figures** | **Correctly identifies sig figs for leading and trailing zeros:** Analyzes non-significant leading zeros (`0.00500` $\\rightarrow$ 3 sig figs) and significant trailing zeros with decimal points (`104.50` $\\rightarrow$ 5 sig figs). | **তাৎপর্যপূর্ণ অংক সংখ্যা সনাক্তকরণ:** সংখ্যার শুরুর অ-তাৎপর্যপূর্ণ শূন্য এবং দশমিকের পরের তাৎপর্যপূর্ণ শূন্যের সঠিক নিয়ম প্রয়োগ করে। | ✅ Passed |
| 08 | **Significant Figures** | **Governs addition by decimal places:** Ensures addition/subtraction result rounding is strictly constrained by the measurement with the fewest decimal places ($12.1 + 0.354 = 12.5$). | **তাৎপর্যপূর্ণ অংকে যোগের দশমিক নিয়ম:** যোগ ও বিয়োগের ক্ষেত্রে ফলাফলের দশমিক স্থান যে সর্বনিম্ন দশমিক বিশিষ্ট রাশির সমান হবে তা নিশ্চিত করে। | ✅ Passed |
| 09 | **Significant Figures** | **Governs multiplication by least significant figures:** Asserts product/quotient rounding is limited by the term with the fewest significant figures ($2.5 \\times 3.42 = 8.6$). | **গুণ ও ভাগে সর্বনিম্ন তাৎপর্যপূর্ণ অংকের নিয়ম:** গুণফলের তাৎপর্যপূর্ণ অংক সংখ্যা যে ক্ষুদ্রতম তাৎপর্যপূর্ণ অংকবিশিষ্ট ইনপুটের সমান হবে তা যাচাই করে। | ✅ Passed |
| 10 | **Projectile Motion** | **Calculates trajectory metrics for standard ground launch:** Evaluates horizontal range ($R = \\frac{v_0^2 \\sin 2\\theta}{g}$), maximum apogee height ($H = \\frac{v_0^2 \\sin^2\\theta}{2g}$), and generated trajectory coordinate points. | **প্রক্ষেপকের পাল্লা ও সর্বোচ্চ উচ্চতা:** নির্দিষ্ট বেগে ও কোণে নিক্ষিপ্ত বস্তুর অনুভূমিক পাল্লা, সর্বোচ্চ উচ্চতা এবং মসৃণ পরাবৃত্তাকার গতিপথ স্থানাঙ্ক বের করে। | ✅ Passed |
| 11 | **Projectile Motion** | **Validates invalid inputs:** Throws clear validation errors on unphysical negative initial velocity or launch angles outside $0^\\circ - 90^\\circ$. | **অবাস্তব ইনপুট প্রতিরোধ:** ঋণাত্মক বেগ বা ৯০ ডিগ্রির বেশি নিক্ষেপণ কোণ দিলে ক্যালকুলেটর ত্রুটি বার্তা প্রদান করে। | ✅ Passed |
| 12 | **Quadratic Solver** | **Solves distinct real roots: $x^2 - 5x + 6 = 0$:** Identifies positive discriminant ($D > 0$) and computes distinct integer roots ($x_1 = 3, x_2 = 2$). | **ভিন্ন বাস্তব মূলের সমাধান:** নিশ্চায়ক ধনাত্মক হলে দ্বিঘাত সমীকরণের দুটি ভিন্ন বাস্তব মূল সঠিকভাবে সমাধান করে। | ✅ Passed |
| 13 | **Quadratic Solver** | **Solves repeated root: $x^2 - 4x + 4 = 0$:** Identifies zero discriminant ($D = 0$) and returns single repeated real root ($x = 2$). | **পুনরাবৃত্ত সমান মূলের সমাধান:** নিশ্চায়ক শূন্য হলে সমীকরণের পুনরাবৃত্ত বাস্তব মূল সনাক্ত করে। | ✅ Passed |
| 14 | **Quadratic Solver** | **Solves complex conjugate roots: $x^2 + 2x + 5 = 0$:** Detects negative discriminant ($D < 0$) and derives complex conjugate pair ($x = -1 \\pm 2i$). | **জটিল অনুবন্ধী মূলের সমাধান:** নিশ্চায়ক ঋণাত্মক হলে কাল্পনিক সংখ্যা ($i$) সহ দুটি অনুবন্ধী জটিল মূল হিসাব করে। | ✅ Passed |
| 15 | **Quadratic Solver** | **Throws when $a = 0$:** Enforces quadratic definition, throwing an error when leading coefficient is zero ($a \\neq 0$). | **দ্বিঘাত সহগ শূন্য হলে প্রতিরোধ:** শীর্ষ সহগ $a=0$ হলে সমীকরণটি আর দ্বিঘাত থাকে না বিধায় যথাযথ ইরর হ্যান্ডলিং করে। | ✅ Passed |

---

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

### 4. Continuous Watch Mode during Development (ডেভেলপমেন্ট মোডে পর্যবেক্ষণ):
```bash
npx vitest
```

---

*Directory generated automatically from codebase test suites for biggan.me.*
