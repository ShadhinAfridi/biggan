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

### SSC Physics Engine (`tests/physics.test.ts` — 13 Tests)

**অধ্যায়ভিত্তিক পরিধি: এসএসসি পদার্থবিজ্ঞান ১ম থেকে ১৩শ অধ্যায়**

| # | অধ্যায় ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| ০১ | Ch 1: ফিজিক্যাল কোয়ান্টিটি ও পরিমাপ | Calculates Vernier constant ($VC = \frac{s}{n}$), slide calipers reading ($L = M + V \times VC - e$), screw gauge least count ($LC = \frac{\text{Pitch}}{\text{Total Divisions}}$), and sphere volume ($V = \frac{4}{3}\pi r^3$). | ভার্নিয়ার কনস্ট্যান্ট ($VC = \frac{s}{n}$), স্লাইড ক্যালিপার্স রিডিং ($L = M + V \times VC - e$), স্ক্রু গেজের লিস্ট কাউন্ট ($LC = \frac{\text{Pitch}}{\text{Total Divisions}}$) এবং গোলকের আয়তন ($V = \frac{4}{3}\pi r^3$) নিখুঁতভাবে মাপে। | ✅ Passed |
| ০২ | Ch 2: গতি (Kinematics & Motion) | Solves linear motion formulas ($v = u + at$, $s = ut + \frac{1}{2}at^2$, $v^2 = u^2 + 2as$) and vertical throw metrics ($H_{\max} = \frac{u^2}{2g}$, $T = \frac{2u}{g}$). | রৈখিক গতির সমীকরণ ($v = u + at$, $s = ut + \frac{1}{2}at^2$, $v^2 = u^2 + 2as$) এবং খাড়া উপরে নিক্ষিপ্ত বস্তুর সর্বোচ্চ উচ্চতা ($H_{\max} = \frac{u^2}{2g}$) ও উড্ডয়ন কাল ($T = \frac{2u}{g}$) সলভ করে। | ✅ Passed |
| ০৩ | Ch 3: বল ও ভরবেগ (Force & Momentum) | Computes force ($F = ma$), momentum conservation in inelastic collisions ($m_1 u_1 + m_2 u_2 = (m_1 + m_2)v$), and Newton's gravitational attraction ($F = G\frac{m_1 m_2}{d^2}$). | বলের মান ($F = ma$), অস্থিতিস্থাপক সংঘর্ষে ভরবেগের সংরক্ষণ ($m_1 u_1 + m_2 u_2 = (m_1 + m_2)v$) এবং নিউটনের মহাকর্ষ বল ($F = G\frac{m_1 m_2}{d^2}$) হিসাব করে। | ✅ Passed |
| ০৪ | Ch 4: কাজ, ক্ষমতা ও শক্তি (Work, Power & Energy) | Calculates work done at an angle ($W = Fs\cos\theta$), kinetic energy ($E_k = \frac{1}{2}mv^2$), potential energy ($E_p = mgh$), and engine efficiency ($\eta = \frac{P_{\text{out}}}{P_{\text{in}}} \times 100\%$). | নির্দিষ্ট কোণে প্রযুক্ত বলে কাজ ($W = Fs\cos\theta$), গতিশক্তি ($E_k = \frac{1}{2}mv^2$), বিভব শক্তি ($E_p = mgh$) এবং ইঞ্জিনের কর্মদক্ষতা ($\eta = \frac{P_{\text{out}}}{P_{\text{in}}} \times 100\%$) ক্যালকুলেট করে। | ✅ Passed |
| ০৫ | Ch 5: পদার্থের অবস্থা ও চাপ (Pressure & Elasticity) | Computes solid pressure ($P = \frac{F}{A}$), liquid pressure at depth ($P = h\rho g$), hydraulic press Pascal force amplification ($\frac{F_2}{F_1} = \frac{A_2}{A_1} = \frac{d_2^2}{d_1^2}$), and Young's modulus ($Y = \frac{FL}{A\Delta L}$). | কঠিনের চাপ ($P = \frac{F}{A}$), তরলের অভ্যন্তরে চাপ ($P = h\rho g$), হাইড্রোলিক প্রেসে প্যাসকেলের বল বৃদ্ধি নীতি ($\frac{F_2}{F_1} = \frac{A_2}{A_1} = \frac{d_2^2}{d_1^2}$) এবং ইয়ং-এর গুণাঙ্ক ($Y = \frac{FL}{A\Delta L}$) হিসাব করে। | ✅ Passed |
| ০৬ | Ch 6: বস্তুর ওপর তাপের প্রভাব (Heat & Expansion) | Converts temperature scales ($\frac{C}{5} = \frac{F - 32}{9} = \frac{K - 273.15}{5}$), calculates linear thermal expansion ($\Delta L = \alpha L_1 \Delta\theta$), sensible heat ($Q = mc\Delta\theta$), and latent heat of phase change ($Q = mL$). | তাপমাত্রা স্কেল রূপান্তর ($\frac{C}{5} = \frac{F - 32}{9} = \frac{K - 273.15}{5}$), দৈর্ঘ্য প্রসারণ ($\Delta L = \alpha L_1 \Delta\theta$), গৃহীত বা বর্জিত তাপ ($Q = mc\Delta\theta$) এবং অবস্থার পরিবর্তনে সুপ্ততাপ ($Q = mL$) হিসাব করে। | ✅ Passed |
| ০৭ | Ch 7: তরঙ্গ ও শব্দ (Waves & Sound) | Calculates wave speed ($v = f\lambda$), sound speed dependence on Celsius temperature ($v_T = 332 + 0.6T\text{ m/s}$), and minimum reflection distance to hear an echo ($d = \frac{vt}{2} \ge 16.6\text{–}17.5\text{ m}$). | তরঙ্গ বেগ ($v = f\lambda$), তাপমাত্রার সাথে শব্দের বেগ বৃদ্ধি ($v_T = 332 + 0.6T\text{ m/s}$) এবং প্রতিধ্বনি শোনার ন্যূনতম প্রতিফলন দূরত্ব ($d = \frac{vt}{2}$) বের করে। | ✅ Passed |
| ০৮ | Ch 8: আলোর প্রতিফলন (Spherical Mirrors) | Determines image distance ($\frac{1}{v} = \frac{1}{f} - \frac{1}{u}$), linear magnification ($m = -\frac{v}{u}$), and image nature (real/inverted vs. virtual/erect) in concave and convex mirrors. | অবতল ও উত্তল গোলীয় দর্পণে প্রতিবিম্বের দূরত্ব ($\frac{1}{v} = \frac{1}{f} - \frac{1}{u}$), রৈখিক বিবর্ধন ($m = -\frac{v}{u}$) এবং বিম্বের প্রকৃতি (বাস্তব/উল্টো নাকি অবাস্তব/সোজা) নির্ধারণ করে। | ✅ Passed |
| ০৯ | Ch 9: আলোর প্রতিসরণ (Refraction & Lenses) | Solves Snell's law of refraction ($n_1 \sin\theta_1 = n_2 \sin\theta_2$), critical angle ($\theta_c = \sin^{-1}\left(\frac{n_2}{n_1}\right)$), and lens power in diopters ($P = \frac{1}{f\text{ (m)}}$). | স্নেলের প্রতিসরণ সূত্র ($n_1 \sin\theta_1 = n_2 \sin\theta_2$), সংকট কোণ ($\theta_c = \sin^{-1}\left(\frac{n_2}{n_1}\right)$) এবং মিটারে ফোকাস দূরত্বের বিপরীতে লেন্সের ক্ষমতা ($P = \frac{1}{f}$) ডায়োপ্টারে বের করে। | ✅ Passed |
| ১০ | Ch 10: স্থির তড়িৎ (Static Electricity) | Computes Coulomb electrostatic force ($F = k \frac{q_1 q_2}{r^2}$), electric field intensity ($E = k\frac{q}{r^2}$), electric potential ($V = k\frac{q}{r}$), and capacitor capacitance ($C = \frac{Q}{V}$). | কুলম্বের সূত্রে স্থির তড়িৎ বল ($F = k \frac{q_1 q_2}{r^2}$), তড়িৎ তীব্রতা ($E = k\frac{q}{r^2}$), তড়িৎ বিভব ($V = k\frac{q}{r}$) এবং ধারকের ধারকত্ব ($C = \frac{Q}{V}$) হিসাব করে। | ✅ Passed |
| ১১ | Ch 11: চল তড়িৎ (Current Electricity) | Applies Ohm's law ($I = \frac{V}{R}$), wire resistance and resistivity ($R = \rho \frac{L}{A}$), series and parallel equivalent resistance ($R_s = \sum R_i$, $\frac{1}{R_p} = \sum \frac{1}{R_i}$), and electrical energy billing ($\text{Cost} = \frac{P \times t}{1000} \times \text{Rate}$). | ওহমের সূত্র ($I = \frac{V}{R}$), তারের আপেক্ষিক রোধ ($R = \rho \frac{L}{A}$), শ্রেণি ও সমান্তরাল তুল্য রোধ ($R_s = \sum R_i$, $\frac{1}{R_p} = \sum \frac{1}{R_i}$) এবং বিওটি ইউনিটে মাসিক বিদ্যুৎ বিল ($\text{Cost} = \frac{P \times t}{1000} \times \text{Rate}$) হিসাব করে। | ✅ Passed |
| ১২ | Ch 12: বিদ্যুতের চৌম্বক ক্রিয়া (Transformers) | Calculates transformer turns ratio ($\frac{V_p}{V_s} = \frac{N_p}{N_s} = \frac{I_s}{I_p}$), secondary voltage, induced secondary current, and step-up versus step-down classification. | ট্রান্সফরমারের কুণ্ডলী অনুপাত সূত্র ($\frac{V_p}{V_s} = \frac{N_p}{N_s} = \frac{I_s}{I_p}$) দিয়ে গৌণ ভোল্টেজ, তড়িৎ প্রবাহ এবং স্টেপ-আপ বনাম স্টেপ-ডাউন শ্রেণিবিভাগ করে। | ✅ Passed |
| ১৩ | Ch 13: আধুনিক পদার্থবিজ্ঞান (Nuclear & Decay) | Computes Einstein's mass-energy equivalence ($E = mc^2$) and radioactive mass remaining after half-lives ($N(t) = N_0 \left(\frac{1}{2}\right)^{t / T_{1/2}} = N_0 e^{-\lambda t}$, where $\lambda = \frac{\ln 2}{T_{1/2}}$). | আইনস্টাইনের ভর-শক্তি রূপান্তর সমীকরণ ($E = mc^2$) এবং অর্ধায়ুর পর তেজস্ক্রিয় পদার্থের অবশিষ্ট ভর ($N(t) = N_0 \left(\frac{1}{2}\right)^{t / T_{1/2}} = N_0 e^{-\lambda t}$, যেখানে $\lambda = \frac{\ln 2}{T_{1/2}}$) হিসাব করে। | ✅ Passed |

---

### SSC Chemistry Engine (`tests/chemistry.test.ts` — 11 Tests)

**অধ্যায়ভিত্তিক পরিধি: এসএসসি রসায়ন পরিমাণগত রসায়ন ও সমীকরণ**

| # | অধ্যায় ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| ০১ | ফর্মুলা পার্সার (Formula Parser) | Parses binary compounds ($\text{H}_2\text{O}$), nested parentheses like $\text{Ca(OH)}_2$, and hydrated salts ($\text{CuSO}_4 \cdot 5\text{H}_2\text{O} = 249.68\text{ g/mol}$) to count atoms and determine molar mass. | বন্ধনীযুক্ত যৌগ ($\text{Ca(OH)}_2$) ও কেলাসিত লবণ ($\text{CuSO}_4 \cdot 5\text{H}_2\text{O} = 249.68\text{ g/mol}$) পার্স করে প্রতিটি পরমাণুর সংখ্যা ও মোলার ভর বের করে আনে। | ✅ Passed |
| ০২ | মডিউল A: গ্যাস ব্যাপন হার (Graham's Law) | Calculates gas diffusion ratios using Graham's law ($\frac{r_1}{r_2} = \sqrt{\frac{M_2}{M_1}}$) and predicts relative diffusion speed (e.g. $\text{NH}_3$ vs. $\text{HCl}$). | গ্রাহামের ব্যাপন সূত্র ($\frac{r_1}{r_2} = \sqrt{\frac{M_2}{M_1}}$) দিয়ে গ্যাসদ্বয়ের (যেমন $\text{NH}_3$ ও $\text{HCl}$) ব্যাপন হারের অনুপাত ও অপেক্ষাকৃত গতিশীল গ্যাস চিহ্নিত করে। | ✅ Passed |
| ০৩ | মডিউল B: পারমাণবিক গঠন (Atomic Structure) | Calculates average atomic mass from isotopic percentage abundances ($\bar{A} = \sum \frac{A_i \times \%_i}{100}$) and electron angular momentum in Bohr orbits ($L = mvr = \frac{nh}{2\pi}$). | আইসোটোপের প্রাচুর্য থেকে মৌলের গড় পারমাণবিক ভর ($\bar{A} = \sum \frac{A_i \times \%_i}{100}$) এবং বোর কক্ষপথে ইলেকট্রনের কৌণিক ভরবেগ ($L = mvr = \frac{nh}{2\pi}$) হিসাব করে। | ✅ Passed |
| ০৪ | মডিউল C1: সমন্বিত মোল সমীকরণ (Mole Conversion) | Converts among mass ($w$), moles ($n$), STP gas volume ($V_{\text{STP}}$ at $22.4\text{ L/mol}$), and particle counts using $n = \frac{w}{M} = \frac{V_{\text{STP}}}{22.4} = \frac{N}{6.023 \times 10^{23}}$. | সমন্বিত মোল সূত্র ($n = \frac{w}{M} = \frac{V_{\text{STP}}}{22.4} = \frac{N}{6.023 \times 10^{23}}$) ব্যবহার করে ভর ($w$), মোল ($n$), এসটিপিতে আয়তন ও কণার সংখ্যার মধ্যে দ্রুত রূপান্তর করে। | ✅ Passed |
| ০৫ | মডিউল C2: দ্রবণের মোলারিটি (Solution Molarity) | Solves for solute mass or solution molarity using $S = \frac{1000w}{MV}$ and $w = \frac{SMV}{1000}$ for precise volumetric preparation. | মোলারিটি সূত্র ($S = \frac{1000w}{MV}$ ও $w = \frac{SMV}{1000}$) ব্যবহার করে দ্রবণের মোলার ঘনমাত্রা ও নির্দিষ্ট আয়তনের দ্রবণ প্রস্তুতিতে দ্রবের প্রয়োজনীয় ভর হিসাব করে। | ✅ Passed |
| ০৬ | মডিউল C4: স্থূল ও আণবিক সংকেত (Empirical Formula) | Determines empirical formula from elemental mass percentages and scales by $n$-factor ($n = \frac{\text{Molar Mass}}{\text{Empirical Mass}}$) to find molecular formula. | মৌলসমূহের শতকরা সংযুতি থেকে স্থূল সংকেত এবং আণবিক গুণক ($n = \frac{\text{Molar Mass}}{\text{Empirical Mass}}$) নির্ণয় করে সঠিক আণবিক সংকেত তৈরি করে। | ✅ Passed |
| ০৭ | মডিউল C5: লিমিটিং বিক্রিয়ক ও ফলন (Limiting Reactant) | Evaluates reactant molar ratios ($aA + bB \rightarrow cC$), identifies the limiting reactant, and calculates theoretical product yield and percentage yield ($\DeclareMathOperator{\Yield}{Yield}\%\Yield = \frac{\text{Actual}}{\text{Theoretical}} \times 100\%$). | বিক্রিয়ার স্টোইকিওমেট্রি ($aA + bB \rightarrow cC$) থেকে লিমিটিং বিক্রিয়ক শনাক্ত করে এবং প্রত্যাশিত উৎপাদের পরিমাণ ও শতকরা ফলন ($\DeclareMathOperator{\Yield}{Yield}\%\Yield$) নির্ণয় করে। | ✅ Passed |
| ০৮ | মডিউল D: জারণ সংখ্যা (Oxidation State) | Solves unknown elemental oxidation states algebraically in neutral molecules ($\sum \text{Ox} = 0$, e.g. $\text{Mn}$ in $\text{KMnO}_4$ is $+7$) and polyatomic radicals. | চার্জের বীজগাণিতিক সমীকরণ ($\sum \text{Ox} = 0$, যেমন $\text{KMnO}_4$-এ $\text{Mn} = +7$) সমাধান করে যৌগের যেকোনো পরমাণুর অজানা জারণ মান বের করে। | ✅ Passed |
| ০৯ | মডিউল E: বিক্রিয়া তাপ (Enthalpy Change $\Delta H$) | Calculates enthalpy change from chemical bond energies using $\Delta H = \sum D_{\text{broken}} - \sum D_{\text{formed}}$ and classifies reaction as exothermic ($\Delta H < 0$) or endothermic ($\Delta H > 0$). | বন্ধন ভাঙা ও গড়ার শক্তির পার্থক্য ($\Delta H = \sum D_{\text{broken}} - \sum D_{\text{formed}}$) থেকে বিক্রিয়া তাপ নির্ণয় করে এবং তাপোৎপাদী ($\Delta H < 0$) নাকি তাপহারী ($\Delta H > 0$) তা নির্দেশ করে। | ✅ Passed |
| ১০ | মডিউল F: pH ও টাইট্রেশন (pH & Neutralization) | Computes $\text{pH} = -\log_{10}[H^+]$, $\text{pOH} = -\log_{10}[OH^-]$, and neutralization volume using $V_A S_A e_A = V_B S_B e_B$ with $\text{pH} + \text{pOH} = 14$. | হাইড্রোজেন আয়ন ঘনমাত্রা থেকে $\text{pH} = -\log_{10}[H^+]$, $\text{pOH} = 14 - \text{pH}$ এবং এসিড-ক্ষার প্রশমনে টাইট্রেশন সমীকরণ ($V_A S_A e_A = V_B S_B e_B$) সলভ করে। | ✅ Passed |
| ১১ | মডিউল G: হাইড্রোকার্বন সমগোত্রীয় শ্রেণি (Hydrocarbons) | Generates molecular and condensed structural formulas for alkanes ($C_n H_{2n+2}$) and alkenes ($C_n H_{2n}$) based on carbon number $n$. | কার্বন সংখ্যা $n$-এর ভিত্তিতে অ্যালকেন ($C_n H_{2n+2}$) ও অ্যালকিন ($C_n H_{2n}$) সমগোত্রীয় শ্রেণির সাধারণ আণবিক ও গাঠনিক সংকেত তৈরি করে। | ✅ Passed |

---

### SSC Biology Engine (`tests/biology.test.ts` — 10 Tests)

**অধ্যায়ভিত্তিক পরিধি: এসএসসি জীববিজ্ঞান পুষ্টি, শ্বসন, বংশগতি ও বাস্তুতন্ত্র**

| # | অধ্যায় ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| ০১ | মডিউল A: পুষ্টি ও বিএমআই (Body Mass Index) | Calculates body mass index ($\text{BMI} = \frac{W\text{ (kg)}}{(H\text{ (m)})^2}$) and categorizes weight status according to clinical health standards ($18.5 \le \text{BMI} \le 24.9$). | দেহের ভর ও উচ্চতার অনুপাত থেকে বিএমআই ($\text{BMI} = \frac{W\text{ (kg)}}{(H\text{ (m)})^2}$) পরিমাপ করে এবং স্বাস্থ্যকর ওজনের আদর্শ সীমা ($18.5 \le \text{BMI} \le 24.9$) প্রদর্শন করে। | ✅ Passed |
| ০২ | মডিউল A: ওজন সমন্বয় লক্ষ্যমাত্রা (Weight Adjustment) | Detects underweight or overweight status and computes exact weight delta ($\Delta W = W_{\text{target}} - W_{\text{actual}}$) required to reach the normal BMI band. | স্বাভাবিক বিএমআই সীমার সাথে তুলনা করে কাঙ্ক্ষিত ওজনে পৌঁছাতে প্রয়োজনীয় ওজন বাড়ানো বা কমানোর সুনির্দিষ্ট লক্ষ্যমাত্রা ($\Delta W$) হিসাব করে। | ✅ Passed |
| ০৩ | মডিউল A: বেসাল মেটাবলিক রেট ও ক্যালরি (BMR & TDEE) | Computes gender-specific BMR via Harris-Benedict equations and multiplies by physical activity level to obtain total daily energy expenditure ($\text{TDEE} = \text{BMR} \times \text{PAL}$). | হ্যারিস-বেনেডিক্ট সমীকরণে লিঙ্গভেদে $\text{BMR}$ এবং শারীরিক সক্রিয়তার সূচক গুণ করে দৈনিক ক্যালরি চাহিদা ($\text{TDEE} = \text{BMR} \times \text{PAL}$) নির্ণয় করে। | ✅ Passed |
| ০৪ | মডিউল B: কোষীয় শ্বসন - ক্লাসিক্যাল মডেল (38 ATP) | Verifies NCTB classical $38\text{ ATP}$ and $6\text{ CO}_2$ balance sheet for complete oxidation of $1\text{ mol}$ glucose ($C_6 H_{12} O_6$) across Glycolysis, Acetyl-CoA, and Krebs cycle ($277.4\text{ kcal}$). | ১ মোল গ্লুকোজ ($C_6 H_{12} O_6$) জারণে গ্লাইকোলাইসিস, অ্যাসিটাইল-CoA ও ক্রেবস চক্রের মাধ্যমে মোট $38\text{ ATP}$ ও $6\text{ CO}_2$ উৎপাদন এবং মোট শক্তির ($277.4\text{ kcal}$) হিসাব মেলায়। | ✅ Passed |
| ০৫ | মডিউল B: আধুনিক শ্বসন মডেল (Modern 36 ATP) | Computes the modern $36\text{ ATP}$ yield model and scales energy output linearly for fractional and multiple glucose amounts ($n \times 36\text{ ATP}$). | আধুনিক $36\text{ ATP}$ মডেল অনুযায়ী গ্লুকোজের ভগ্নাংশ বা একাধিক মোলের জন্য মোট শক্তি উৎপাদন ($n \times 36\text{ ATP}$) ও কার্বন ডাই অক্সাইডের পরিমাণ হিসাব করে। | ✅ Passed |
| ০৬ | মডিউল C: মেন্ডেলের প্রথম সূত্র (Monohybrid Cross) | Solves monohybrid heterozygous cross ($Tt \times Tt$), producing a $3:1$ ($75\% : 25\%$) phenotypic ratio and a $1:2:1$ ($TT:Tt:tt$) genotypic ratio. | মনোহাইব্রিড সংকরায়ণ ($Tt \times Tt$) বিশ্লেষণ করে ফিনোটাইপিক অনুপাত $3:1$ ($75\% : 25\%$) এবং জিনোটাইপিক অনুপাত $1:2:1$ ($TT:Tt:tt$) প্রদর্শন করে। | ✅ Passed |
| ০৭ | মডিউল C: লিঙ্গ-সংযুক্ত বংশগতি (Sex-Linked Genetics) | Solves carrier mother ($X^N X^n$) $\times$ normal father ($X^N Y$) cross, determining affected probabilities for sons ($50\%$) and daughters ($0\%$ affected, $50\%$ carriers). | বর্ণান্ধতার বাহক মা ($X^N X^n$) ও স্বাভাবিক বাবার ($X^N Y$) ক্রসে পুত্রদের আক্রান্ত হওয়ার ($50\%$) এবং কন্যাদের বাহক হওয়ার ($50\%$) সম্ভাবনা হিসাব করে। | ✅ Passed |
| ০৮ | মডিউল C: ক্রিস-ক্রস বংশগতি (Criss-Cross Inheritance) | Proves criss-cross inheritance wherein a color-blind homozygous mother ($X^n X^n$) transmits the trait to $100\%$ of her sons. | বর্ণান্ধ মা ($X^n X^n$) ও স্বাভাবিক বাবার ক্রসে ক্রিস-ক্রস বংশগতির নিয়মে শতভাগ ($100\%$) পুত্র সন্তানের বর্ণান্ধ হওয়া প্রমাণ করে। | ✅ Passed |
| ০৯ | মডিউল D: বাস্তুতন্ত্রে শক্তি প্রবাহ (Lindeman's 10% Rule) | Applies Lindeman's $10\%$ trophic efficiency rule ($E_{n+1} = 0.10 \times E_n$) across successive food chain levels, tracking $90\%$ respiratory heat dissipation. | খাদ্য শিকলে লিন্ডেম্যানের $10\%$ শক্তি রূপান্তর নীতি ($E_{n+1} = 0.10 \times E_n$) প্রয়োগ করে প্রতিটি পুষ্টি স্তরে শক্তির পরিমাণ এবং $90\%$ তাপ অপচয় গণনা করে। | ✅ Passed |
| ১০ | মডিউল E: রক্তদাতার সামঞ্জস্যতা (Blood Group Compatibility) | Evaluates antigen-antibody compatibility for $\text{ABO}$ and $\text{Rh}$ systems, verifying $O^-$ as universal donor and $AB^+$ as universal recipient without agglutination risk. | অ্যান্টিজেন ও অ্যান্টিবডির ভিত্তিতে $\text{ABO}$ ও $\text{Rh}$ সিস্টেম যাচাই করে সার্বজনীন রক্তদাতা ($O^-$) ও সার্বজনীন গ্রহীতা ($AB^+$) এবং রক্ত জমাট বাঁধার ঝুঁকি পরীক্ষা করে। | ✅ Passed |

---

### SSC General Math Engine (`tests/general-math.test.ts` — 17 Tests)

**অধ্যায়ভিত্তিক পরিধি: এসএসসি সাধারণ গণিত সেট, বীজগণিত, ত্রিকোণমিতি, পরিমিতি ও পরিসংখ্যান**

| # | অধ্যায় ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| ০১ | Ch 2: শক্তি সেট ও প্রকৃত উপসেট (Power Set) | Computes power set cardinality $n(P(A)) = 2^n$ and proper subsets count $2^n - 1$ for a set of $n$ elements. | সেটের উপাদান সংখ্যা $n$ হলে শক্তি সেটের মোট উপাদান সংখ্যা ($2^n$) এবং প্রকৃত উপসেট সংখ্যা ($2^n - 1$) বের করে আনে। | ✅ Passed |
| ০২ | Ch 2: কার্তেসীয় গুণজ (Cartesian Product) | Generates ordered pairs for Cartesian product $A \times B$ and validates cardinality identity $n(A \times B) = n(A) \times n(B)$. | দুটি সেটের কার্তেসীয় গুণজ ($A \times B$) করে সকল ক্রমজোড় তৈরি করে এবং উপাদান সংখ্যা $n(A \times B) = n(A) \times n(B)$ যাচাই করে। | ✅ Passed |
| ০৩ | Ch 3: বর্গের অনুসিদ্ধান্ত (Square Identities) | Evaluates $a^2 + b^2 = (a+b)^2 - 2ab$ and $(a-b)^2 = (a+b)^2 - 4ab$ from given sum $(a+b)$ and product $(ab)$. | যোগফল ($a+b$) ও গুণফল ($ab$) থেকে বর্গের অনুসিদ্ধান্ত ($a^2 + b^2 = (a+b)^2 - 2ab$) ও $(a-b)^2 = (a+b)^2 - 4ab$ এর মান বের করে। | ✅ Passed |
| ০৪ | Ch 3: ঘনের অনুসিদ্ধান্ত (Cube Identities) | Computes $a^3 + b^3 = (a+b)^3 - 3ab(a+b)$ from given sum $(a+b)$ and product $(ab)$. | যোগফল ($a+b$) ও গুণফল ($ab$) থেকে ঘনের অনুসিদ্ধান্ত ($a^3 + b^3 = (a+b)^3 - 3ab(a+b)$) ব্যবহার করে মান হিসাব করে। | ✅ Passed |
| ০৫ | Ch 3: ত্রিমাত্রিক বর্গের অনুসিদ্ধান্ত (Trinomial Square) | Computes $a^2 + b^2 + c^2 = (a+b+c)^2 - 2(ab+bc+ca)$ from trinomial sum and pairwise sum of products. | তিনটি পদের যোগফল ($a+b+c$) ও দুটি করে পদের গুণফলের সমষ্টি ($ab+bc+ca$) থেকে $a^2 + b^2 + c^2 = (a+b+c)^2 - 2(ab+bc+ca)$ এর মান বের করে। | ✅ Passed |
| ০৬ | Ch 4: সূচক ও শর্তাবলী (Exponents) | Evaluates exponential powers ($a^n$) and guards against mathematically undefined expressions ($0^{-n}$). | সূচকীয় মান ($a^n$) হিসাব করে এবং অনির্ণেয় গাণিতিক রূপ (যেমন $0^{-n}$) প্রতিরোধে অ্যালার্ট দেয়। | ✅ Passed |
| ০৭ | Ch 4: লগারিদম ও ভিত্তি শর্ত (Logarithms) | Computes logarithm values $\log_b N$ and strictly enforces base and argument validity ($b > 0, b \ne 1, N > 0$). | লগারিদমের মান ($\log_b N$) বের করে এবং ভিত্তির শর্তাবলি ($b > 0, b \ne 1, N > 0$) এনফোর্স করে। | ✅ Passed |
| ০৮ | Ch 4: বৈজ্ঞানিক সংকেত (Scientific Notation) | Formats arbitrarily large or small numbers into standard scientific notation ($A \times 10^n$, where $1 \le A < 10, n \in \mathbb{Z}$). | লার্জ বা স্মল নাম্বারকে স্ট্যান্ডার্ড বৈজ্ঞানিক নোটেশনে ($A \times 10^n$, যেখানে $1 \le A < 10, n \in \mathbb{Z}$) কনভার্ট করে। | ✅ Passed |
| ০৯ | Ch 9-10: দূরত্ব ও উচ্চতা (Trigonometric Heights) | Calculates height from baseline distance and elevation angle using the tangent ratio ($h = d \tan\theta$). | বেস ডিসট্যান্স ($d$) ও উন্নতি কোণ ($\theta$) দিয়ে বিল্ডিং বা টাওয়ারের উচ্চতা ($h = d \tan\theta$) ক্যালকুলেট করে। | ✅ Passed |
| ১০ | Ch 9-10: দুটি বিন্দু থেকে পর্যবেক্ষণ (Two-Point Survey) | Solves tower height and distances observed from two points on the same or opposite sides of a structure. | মিনারের একই বা বিপরীত পাশে দুটি পর্যবেক্ষণ বিন্দুর কোণ ও মধ্যবর্তী দূরত্ব থেকে মিনারের উচ্চতা ও দূরত্ব বের করে। | ✅ Passed |
| ১১ | Ch 9-10: ঝড়ে ভাঙা গাছ সমস্যা (Broken Tree Problem) | Solves the classic broken tree height partition: standing height $x = \frac{h\sin\theta}{1+\sin\theta}$ and broken length $h - x$. | ঝড়ে ভাঙা গাছের মোট উচ্চতা ($h$) ও কোণ ($\theta$) থেকে দণ্ডায়মান অংশ ($x = \frac{h\sin\theta}{1+\sin\theta}$) ও ভাঙা অংশের উচ্চতা সলভ করে। | ✅ Passed |
| ১২ | Ch 11: অনুপাতের যোজন-বিয়োজন (Componendo-Dividendo) | Applies componendo-dividendo transformation ($\frac{a}{b} \rightarrow \frac{a+b}{a-b}$) and prevents division by zero ($a = b$). | অনুপাতের যোজন-বিয়োজন সূত্র ($\frac{a+b}{a-b}$) অ্যাপ্লাই করে এবং হর শূন্য ($a = b$) হওয়া প্রতিরোধ করে। | ✅ Passed |
| ১৩ | Ch 16: সমবাহু ত্রিভুজের ক্ষেত্রফল (Equilateral Triangle) | Calculates equilateral triangle area using $A = \frac{\sqrt{3}}{4}a^2$ with exact radical geometry. | বাহুর দৈর্ঘ্য ($a$) দিয়ে সমবাহু ত্রিভুজের ক্ষেত্রফল ($A = \frac{\sqrt{3}}{4}a^2$) নিখুঁতভাবে ক্যালকুলেট করে। | ✅ Passed |
| ১৪ | Ch 16: হেরন-এর সূত্র ও অসমতা (Heron's Formula) | Computes triangle area $A = \sqrt{s(s-a)(s-b)(s-c)}$ from semi-perimeter $s = \frac{a+b+c}{2}$ and validates triangle inequality ($a+b > c$). | ৩টি বাহু ও অর্ধ-পরিসীমা ($s = \frac{a+b+c}{2}$) দিয়ে হেরনস ফর্মুলায় ক্ষেত্রফল ($A = \sqrt{s(s-a)(s-b)(s-c)}$) মাপে এবং ত্রিভুজ অসমতা ($a+b > c$) ভেরিফাই করে। | ✅ Passed |
| ১৫ | Ch 16: সুষম বহুভুজের ক্ষেত্রফল (Regular Polygon) | Calculates area of regular $n$-sided polygons and hexagons using $A = \frac{n a^2}{4\tan(180^\circ / n)}$. | সুষম বহুভুজের ফর্মুলা ($A = \frac{n a^2}{4\tan(180^\circ / n)}$) দিয়ে সুষম ষড়ভুজের ক্ষেত্রফল হিসাব করে। | ✅ Passed |
| ১৬ | Ch 17: শ্রেণিকৃত তথ্যের পরিসংখ্যান (Grouped Statistics) | Computes mean ($\bar{x} = a + \frac{\sum f_i u_i}{N} \times h$), median, and modal properties from frequency tables. | গ্রুপড ফ্রিকোয়েন্সি সারণি থেকে সংক্ষিপ্ত পদ্ধতিতে গড় ($\bar{x} = a + \frac{\sum f_i u_i}{N} \times h$), মধ্যক ও প্রচুরক বের করে। | ✅ Passed |
| ১৭ | Ch 17: প্রচুরকের প্রান্তিক সীমা ব্যতিক্রম (Modal Edge Case) | Handles boundary edge cases where the first or last interval is the modal class by assigning $f_0 = 0$ or $f_2 = 0$ in $L + \frac{f_1}{f_1 + f_2} \times h$. | প্রথম বা শেষ ক্লাসে প্রচুরক থাকলে $f_0 = 0$ বা $f_2 = 0$ ধরে প্রচুরক সূত্র ($L + \frac{f_1}{f_1 + f_2} \times h$) দিয়ে একুরেট প্রচুরক বের করে। | ✅ Passed |

---

### SSC Higher Math Engine (`tests/higher-math.test.ts` — 17 Tests)

**অধ্যায়ভিত্তিক পরিধি: এসএসসি উচ্চতর গণিত ১৪টি অধ্যায়ের সূত্র ও প্রমাণ**

| # | অধ্যায় ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| ০১ | Ch 1: ৩-সেট ভেন চিত্র (Three-Set Venn Diagram) | Solves 3-set inclusion-exclusion identity $n(A \cup B \cup C)$ and tallies individual disjoint regions ($A\text{ only}, B\text{ only}, C\text{ only}$). | ৩-সেট ইনক্লুশন-এক্সক্লুশন প্রবলেম ($n(A \cup B \cup C)$) সলভ করে এবং প্রতিটি ডিসজয়েন্ট রিজিয়ন কাউন্ট করে। | ✅ Passed |
| ০২ | Ch 1: বিপরীত ফাংশন ও ডোমেন (Rational Inverse) | Finds inverse of rational linear fractional functions $f(x) = \frac{ax+b}{cx+d} \Rightarrow f^{-1}(x) = \frac{-dx+b}{cx-a}$ and calculates domain/range exclusions ($x \ne -\frac{d}{c}, y \ne \frac{a}{c}$). | ভগ্নাংশ ফাংশন $f(x) = \frac{ax+b}{cx+d}$ এর বিপরীত ফাংশন $f^{-1}(x) = \frac{-dx+b}{cx-a}$ এবং ডোমেন ও রেঞ্জের ব্যতিক্রম বিন্দু ($x \ne -\frac{d}{c}, y \ne \frac{a}{c}$) বের করে। | ✅ Passed |
| ০৩ | Ch 2: ভাগশেষ ও উৎপাদক উপপাদ্য (Remainder Theorem) | Evaluates remainder $R = P(a)$ when polynomial $P(x)$ is divided by $(x - a)$ and determines whether $(x - a)$ is a root factor ($P(a) = 0$). | পলিনোমিয়াল $P(x)$ কে $(x - a)$ দিয়ে ডিভাইড করলে ভাগশেষ উপপাদ্য মতে রিমাইন্ডার $P(a)$ এর মান ও উৎপাদক হওয়ার কন্ডিশন ($P(a) = 0$) যাচাই করে। | ✅ Passed |
| ০৪ | Ch 2: চক্র-ক্রমিক ঘন রাশিমালা (Cyclic Cubic Identity) | Evaluates cyclic cubic identity $a^3+b^3+c^3-3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)$ and verifies zero-sum condition when $a+b+c=0$. | সাইক্লিক কিউবিক আইডেন্টিটি $a^3+b^3+c^3-3abc$ এর মান এবং $a+b+c=0$ হলে জিরো-সাম কন্ডিশন ভেরিফাই করে। | ✅ Passed |
| ০৫ | Ch 3: অ্যাপোলোনিয়াসের উপপাদ্য (Apollonius Theorem) | Calculates medians ($d_a = \frac{1}{2}\sqrt{2b^2 + 2c^2 - a^2}$) and validates the identity $3(a^2+b^2+c^2) = 4(d_a^2+d_b^2+d_c^2)$. | ত্রিভুজের বাহু থেকে মধ্যমার দৈর্ঘ্য ($d_a = \frac{1}{2}\sqrt{2b^2 + 2c^2 - a^2}$) মাপে এবং অ্যাপোলোনিয়াসের রিলেশনশিপ $3(a^2+b^2+c^2) = 4(d_a^2+d_b^2+d_c^2)$ চেক করে। | ✅ Passed |
| ০৬ | Ch 5: দ্বিঘাত সমীকরণ ও নিশ্চয়ক (Quadratic Roots) | Solves quadratics $ax^2 + bx + c = 0$ via discriminant $D = b^2 - 4ac$, determining distinct real ($D > 0$), repeated ($D = 0$), or complex conjugate roots ($D < 0$). | ডিসক্রিমিন্যান্ট $D = b^2 - 4ac$ দিয়ে দ্বিঘাত সমীকরণ ($ax^2 + bx + c = 0$) সমাধান করে বাস্তব পৃথক ($D > 0$), সমান ($D = 0$) বা জটিল মূল ($D < 0$) বের করে। | ✅ Passed |
| ০৭ | Ch 6: একঘাত অসমতা (Linear Inequalities) | Solves linear inequalities ($ax + b \le c$) and correctly reverses inequality direction when dividing or multiplying by negative coefficients ($a < 0$). | লিনিয়ার ইনইকুয়ালিটি ($ax + b \le c$) সলভ করে এবং নেগেটিভ কোয়েফিশিয়েন্ট দিয়ে ভাগ করলে সাইন ডিরেকশন রিভার্স করে। | ✅ Passed |
| ০৮ | Ch 7: অসীম গুণোত্তর ধারা (Infinite Geometric Series) | Finds sum of infinite geometric series $S_\infty = \frac{a}{1-r}$ when common ratio $|r| < 1$, and correctly identifies divergence when $|r| \ge 1$. | সাধারণ অনুপাত $|r| < 1$ হলে অসীম গুণোত্তর ধারার সমষ্টি ($S_\infty = \frac{a}{1-r}$) বের করে এবং $|r| \ge 1$ হলে অপসারী (Divergent) কন্ডিশন দেখায়। | ✅ Passed |
| ০৯ | Ch 7: পৌনঃপুনিক দশমিক রূপান্তর (Recurring Decimals) | Converts pure and mixed recurring decimals ($0.333\dots, 0.1666\dots$) into exact irreducible fractions ($\frac{1}{3}, \frac{1}{6}$) using infinite series. | পৌনঃপুনিক দশমিককে অসীম গুণোত্তর ধারার সাহায্যে লঘিষ্ট সাধারণ ভগ্নাংশে (যেমন $0.333\dots \rightarrow \frac{1}{3}$, $0.1666\dots \rightarrow \frac{1}{6}$) কনভার্ট করে। | ✅ Passed |
| ১০ | Ch 8-9: বৃত্তচাপ ও বৃত্তকলা (Arc & Sector) | Converts degrees to radians ($\theta\text{ rad} = \theta^\circ \times \frac{\pi}{180}$) and calculates arc length ($s = r\theta$) and sector area ($A = \frac{1}{2}r^2\theta$). | ডিগ্রিকে রেডিয়ানে কনভার্ট করে বৃত্তচাপের দৈর্ঘ্য ($s = r\theta$) এবং বৃত্তকলার এরিয়া ($A = \frac{1}{2}r^2\theta$) ক্যালকুলেট করে। | ✅ Passed |
| ১১ | Ch 8-9: লগারিদমের ভিত্তি পরিবর্তন (Log Base Change) | Solves logarithmic expressions using base change formula $\log_b a = \frac{\log_k a}{\log_k b} = \frac{\ln a}{\ln b}$ for arbitrary positive bases. | লগারিদমের ম্যাথে ভিত্তি পরিবর্তন ফর্মুলা ($\log_b a = \frac{\log_k a}{\log_k b} = \frac{\ln a}{\ln b}$) ইউজ করে যেকোনো বেসের লগারিদম সলভ করে। | ✅ Passed |
| ১২ | Ch 10: দ্বিপদী বিস্তৃতি ও সমাবেশ (Binomial Expansion) | Computes combinations $\binom{n}{r} = \frac{n!}{r!(n-r)!}$ and generates polynomial expansion coefficients for $(x+y)^n$. | কম্বিনেশন সূত্র $\binom{n}{r} = \frac{n!}{r!(n-r)!}$ এবং দ্বিপদী বিস্তৃতি $(x+y)^n$ এর সহগসমূহ নিখুঁতভাবে জেনারেট করে। | ✅ Passed |
| ১৩ | Ch 11: শীর্ষবিন্দু থেকে বহুভুজের ক্ষেত্রফল (Shoelace Formula) | Computes Cartesian polygon area from coordinate vertices using Gauss's Shoelace determinant formula $A = \frac{1}{2}\left|\sum_{i=1}^n (x_i y_{i+1} - x_{i+1} y_i)\right|$. | শীর্ষবিন্দুর স্থানাঙ্ক থেকে শু-লেস নির্ণায়ক পদ্ধতিতে ($A = \frac{1}{2}\left|\sum (x_i y_{i+1} - x_{i+1} y_i)\right|$) বহুভুজের এরিয়া বের করে। | ✅ Passed |
| ১৪ | Ch 11: সরলরেখার দূরত্ব, ঢাল ও সমীকরণ (Line Distance & Slope) | Calculates planar distance $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$, slope $m = \frac{y_2-y_1}{x_2-x_1}$, and line equation $y - y_1 = m(x - x_1)$. | কো-অর্ডিনেটসের ডিসট্যান্স ($d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$), লাইনের স্লোপ ($m = \frac{y_2-y_1}{x_2-x_1}$) এবং সমীকরণ জেনারেট করে। | ✅ Passed |
| ১৫ | Ch 12: দ্বিমাত্রিক ভেক্টর বিশ্লেষণ (2D Vector Analysis) | Computes vector magnitude $|\vec{v}| = \sqrt{x^2 + y^2}$ and directional angle $\theta = \tan^{-1}\left(\frac{y}{x}\right)$ relative to the positive x-axis. | টু-ডি ভেক্টরের পরম মান ($|\vec{v}| = \sqrt{x^2 + y^2}$) এবং দিক নির্দেশক কোণ ($\theta = \tan^{-1}\left(\frac{y}{x}\right)$) ডিগ্রিতে ক্যালকুলেট করে। | ✅ Passed |
| ১৬ | Ch 13: ঘন জ্যামিতি - কোণক (Solid Geometry - Cone) | Calculates circular cone slant height $l = \sqrt{r^2 + h^2}$, curved surface area $A_{\text{curved}} = \pi r l$, and volume $V = \frac{1}{3}\pi r^2 h$. | কোনের রেডিয়াস ও হাইট দিয়ে স্ল্যান্ট হাইট ($l = \sqrt{r^2 + h^2}$), সারফেস এরিয়া ($A = \pi r l$) এবং ভলিউম ($V = \frac{1}{3}\pi r^2 h$) হিসাব করে। | ✅ Passed |
| ১৭ | Ch 14: ক্লাসিক্যাল সম্ভাবনা তত্ত্ব (Probability) | Computes event probability $P(E) = \frac{n(E)}{n(S)}$, percentage odds, and validates addition theorem $P(A \cup B) = P(A) + P(B) - P(A \cap B)$. | ফেভারেবল ও টোটাল আউটকাম থেকে প্রোবাবিলিটি ($P(E) = \frac{n(E)}{n(S)}$), শতকরা হার এবং সংযোগ থিওরেম ($P(A \cup B)$) ভেরিফাই করে। | ✅ Passed |

---

### HSC ICT Simulator Engine (`tests/ict-engines.test.ts` — 15 Tests)

**অধ্যায়ভিত্তিক পরিধি: এইচএসসি আইসিটি বুলিয়ান অ্যালজেবরা, সার্কিট, এসকিউএল, সি ল্যাঙ্গুয়েজ ও এইচটিএমএল**

| # | অধ্যায় ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| ০১ | লজিক গেট সিমুলেটর (Logic Gates) | Evaluates truth tables for all 7 standard gates: $\text{AND}$, $\text{OR}$, $\text{NOT}$, $\text{XOR}$, $\text{NAND}$, $\text{NOR}$, and $\text{XNOR}$. | $\text{AND}$, $\text{OR}$, $\text{NOT}$, $\text{XOR}$, $\text{NAND}$, $\text{NOR}$, $\text{XNOR}$—সবগুলো বেসিক ও ইউনিভার্সাল লজিক গেটের ট্রুথ টেবিল ইভালুয়েট করে। | ✅ Passed |
| ০২ | হাফ অ্যাডার সার্কিট (Half Adder) | Computes 2-bit Half Adder Sum ($S = A \oplus B$) and Carry ($C = A \cdot B$) boolean outputs. | হাফ অ্যাডারে সাম ($S = A \oplus B$) ও ক্যারি ($C = A \cdot B$) আউটপুট বুলিয়ান লজিক অনুযায়ী জেনারেট করে। | ✅ Passed |
| ০৩ | ফুল অ্যাডার সার্কিট (Full Adder) | Computes 3-bit Full Adder outputs with input carry $C_{\text{in}}$, yielding Sum $S = A \oplus B \oplus C_{\text{in}}$ and Carry-out $C_{\text{out}} = AB + BC_{\text{in}} + C_{\text{in}}A$. | ফুল অ্যাডারে ইনপুট ক্যারি ($C_{\text{in}}$) সহ সাম ($S = A \oplus B \oplus C_{\text{in}}$) এবং ক্যারি আউট ($C_{\text{out}} = AB + BC_{\text{in}} + C_{\text{in}}A$) নির্ভুলভাবে সলভ করে। | ✅ Passed |
| ০৪ | SQL সিলেকশন কুয়েরি (SELECT *) | Executes relational `SELECT * FROM Student` query, returning complete row records and schema columns. | ডেটাবেসে `SELECT * FROM Student` কুয়েরি চালিয়ে সম্পূর্ণ রেকর্ড ও কলাম রিট্রিভ করে। | ✅ Passed |
| ০৫ | SQL শর্তযুক্ত ফিল্টারিং (WHERE Clause) | Filters table records conditionally using `WHERE GPA >= 5.00` relational predicates. | শর্তসাপেক্ষ প্রেডিকেট (যেমন `WHERE GPA >= 5.00`) দিয়ে ডেটাবেস থেকে রেকর্ড ফিল্টার করে। | ✅ Passed |
| ০৬ | SQL ডেটা সাজানো (ORDER BY) | Sorts table rows in ascending or descending sequence using `ORDER BY GPA DESC`. | নির্দিষ্ট কলামের ওপর ভিত্তি করে `ORDER BY GPA DESC` কুয়েরিতে ডেটা সাজায়। | ✅ Passed |
| ০৭ | SQL রিলেশনাল টেবিল জয়েন (INNER JOIN) | Performs relational `INNER JOIN` linking primary and foreign keys (`Student.Roll = Result.Roll`). | প্রাইমারি ও ফরেন কি-এর মিল রেখে `INNER JOIN` অপারেশনের মাধ্যমে একাধিক টেবিল মার্জ করে তথ্য আনে। | ✅ Passed |
| ০৮ | SQL গ্রুপিং ও গণনা (GROUP BY & COUNT) | Groups table rows by categorical attributes and computes aggregate count using `GROUP BY Group` and `COUNT(*)`. | ক্যাটাগরির ভিত্তিতে `GROUP BY` এবং `COUNT(*)` ব্যবহার করে গ্রুপভিত্তিক মোট সংখ্যা বের করে। | ✅ Passed |
| ০৯ | SQL সিনট্যাক্স এরর হ্যান্ডলিং (Syntax Guard) | Intercepts malformed SQL queries gracefully and returns clear explanatory error feedback. | ভুল বা অবৈধ SQL কুয়েরি লিখলে সুন্দরভাবে এরর শনাক্ত করে নির্দেশনামূলক বার্তা দেখায়। | ✅ Passed |
| ১০ | C কোড ট্রেসার: ফিবোনাচ্চি ধারা (Fibonacci) | Traces step-by-step memory updates and accumulator variables during Fibonacci sequence loop iterations. | ফিবোনাচ্চি ধারার লুপ চলার সময় মেমোরির প্রতিটি ভ্যারিয়েবলের মান পরিবর্তন ধাপে ধাপে ট্রেস করে। | ✅ Passed |
| ১১ | C কোড ট্রেসার: মৌলিক সংখ্যা যাচাই (Prime Check) | Traces loop executions and branching conditions while testing integers for primality ($n > 1$). | সি লুপ ও ইফ-এলস শর্তে মৌলিক সংখ্যা ($n > 1$) চেকিং প্রোগ্রামের প্রতিটি ইটারেশনে ভ্যারিয়েবল স্টেট ট্রেস করে। | ✅ Passed |
| ১২ | C কোড ট্রেসার: ফ্যাক্টোরিয়াল $n!$ (Factorial) | Traces iterative multiplication steps and accumulator state for factorial computation $n! = \prod_{i=1}^n i$. | ১ থেকে $n$ পর্যন্ত লুপ চালিয়ে ফ্যাক্টোরিয়াল ($n! = \prod_{i=1}^n i$) গণনার ভ্যারিয়েবল স্টেট লাইভ রেকর্ড করে। | ✅ Passed |
| ১৩ | HTML টেবিল লেআউট (rowspan ও colspan) | Renders and validates HSC board exam template tables containing nested `rowspan` and `colspan` cell alignments. | এইচএসসি বোর্ড কোশ্চেন অনুযায়ী `rowspan` ও `colspan` অ্যাট্রিবিউট ভ্যালিডেট করে পারফেক্ট টেবিল রেন্ডার করে। | ✅ Passed |
| ১৪ | কারিকুলাম ডেটাবেস অখণ্ডতা (Curriculum Integrity) | Validates taxonomy coverage across all 6 core science and math subjects for both SSC and HSC classes. | এসএসসি ও এইচএসসির ৬টি কোর সাবজেক্টের সবগুলো চ্যাপ্টার ও টপিকের ডেটাবেস ইন্টিগ্রিটি চেক করে। | ✅ Passed |
| ১৫ | অধ্যায় ডেটা ফেচিং ও রাউটিং (Chapter Routing) | Verifies lookup of localized chapter names, core syllabus formulas, and interactive calculator routes. | প্রতিটি চ্যাপ্টারের নাম, কোর সূত্রাবলী এবং ইন্টারঅ্যাক্টিভ ক্যালকুলেটরের ইউআরএল রাউট সঠিকভাবে ফেচ করে। | ✅ Passed |

---

### Core Solvers Engine (`tests/engines.test.ts` — 15 Tests)

**অধ্যায়ভিত্তিক পরিধি: আণবিক ভর, জারণ-বিজারণ সমতা, তাৎপর্যপূর্ণ অঙ্ক, প্রক্ষেপক ও দ্বিঘাত মূল**

| # | অধ্যায় ও বিষয় | English Description | বাংলা বিবরণ | অবস্থা |
| :-: | :--- | :--- | :--- | :-: |
| ০১ | সহজ যৌগের মোলার ভর (Molar Mass of H2O) | Calculates molar mass of simple binary compounds like water ($\text{H}_2\text{O} = 18.015\text{ g/mol}$). | সহজ দ্বি-মৌলিক যৌগের (যেমন পানি $\text{H}_2\text{O}$) পারমাণবিক ভরের যোগফল থেকে মোট মোলার ভর ($18.015\text{ g/mol}$) হিসাব করে। | ✅ Passed |
| ০২ | কেলাসিত লবণের মোলার ভর ও সংযুতি (CuSO4·5H2O) | Calculates total formula mass and copper mass percentage ($25.45\%$) for copper sulfate pentahydrate ($\text{CuSO}_4 \cdot 5\text{H}_2\text{O} = 249.68\text{ g/mol}$). | তুঁতের সংকেত ($\text{CuSO}_4 \cdot 5\text{H}_2\text{O}$) পার্স করে কেলাস পানির ভরসহ মোট মোলার ভর ($249.68\text{ g/mol}$) ও কপারের শতকরা হার ($25.45\%$) বের করে। | ✅ Passed |
| ০৩ | বন্ধনীযুক্ত মূলক বিশিষ্ট যৌগ (Ca(OH)2) | Accurately parses nested radical multipliers in slaked lime ($\text{Ca(OH)}_2 = 74.09\text{ g/mol}$). | বন্ধনীযুক্ত মূলক বিশিষ্ট যৌগ যেমন কলিচুন ($\text{Ca(OH)}_2$) নিখুঁতভাবে পার্স করে মোলার ভর ($74.09\text{ g/mol}$) বের করে আনে। | ✅ Passed |
| ০৪ | অবৈধ প্রতীক ইনপুট গার্ড (Unknown Element Guard) | Guards against chemical formula typos by throwing descriptive errors for elements not found in the Periodic Table (e.g. $\text{Xx}_2\text{O}$). | পিরিওডিক টেবিলের বাইরের কোনো অবৈধ রাসায়নিক প্রতীক (যেমন $\text{Xx}_2\text{O}$) ইনপুট দিলে ডেসক্রিপটিভ এরর থ্রো করে। | ✅ Passed |
| ০৫ | অম্লীয় মাধ্যমে রেডক্স সমতা (Acidic KMnO4 + FeSO4) | Balances acidic redox half-reactions for $\text{KMnO}_4 + \text{FeSO}_4$, producing $5\text{Fe}^{3+} + \text{Mn}^{2+} + 4\text{H}_2\text{O}$ via $8\text{H}^+$. | অম্লীয় মাধ্যমে পটাশিয়াম পারম্যাঙ্গানেট ও আয়রন সালফেটের হাফ-রিঅ্যাকশন ($5\text{Fe}^{2+} + \text{MnO}_4^- + 8\text{H}^+$) ব্যালেন্স করে। | ✅ Passed |
| ০৬ | ক্ষারীয় মাধ্যমে রেডক্স সমতা (Basic KMnO4 + KI) | Balances basic redox half-reactions for $\text{KMnO}_4 + \text{KI}$ using $\text{OH}^-$ hydroxide ion balancing. | ক্ষারীয় মাধ্যমে পটাশিয়াম পারম্যাঙ্গানেট ও পটাশিয়াম আয়োডাইডের সমীকরণ $\text{OH}^-$ আয়ন সহযোগে ব্যালেন্স করে। | ✅ Passed |
| ০৭ | তাৎপর্যপূর্ণ অঙ্কের শূন্যের নিয়ম (Sig Figs Rules) | Correctly counts significant figures, distinguishing non-significant leading zeros from significant decimals (e.g. $0.00500$ has $3$ sig figs, $100$ has $1$). | লিডিং জিরো ($0.00500$-এর প্রথম ৩টি শূন্য) ইগনোর করে এবং ডেসিমালের পরের তাৎপর্যপূর্ণ শূন্যসহ মোট ৩টি সিগ ফিগ চিহ্নিত করে। | ✅ Passed |
| ০৮ | যোগের ক্ষেত্রে তাৎপর্যপূর্ণ অঙ্ক (Addition Rounding) | Governs addition and subtraction rounding by the least number of decimal places ($12.1 + 0.354 \rightarrow 12.5$). | যোগের ক্ষেত্রে সবচেয়ে কম দশমিক স্থান বিশিষ্ট ইনপুটের সাথে ম্যাচ করে ফলাফল রাউন্ডিং ($12.1 + 0.354 \rightarrow 12.5$) এনফোর্স করে। | ✅ Passed |
| ০৯ | গুণের ক্ষেত্রে তাৎপর্যপূর্ণ অঙ্ক (Multiplication Rounding) | Governs multiplication and division rounding by the least number of significant figures ($2.5 \times 3.42 \rightarrow 8.6$). | গুণ ও ভাগের ক্ষেত্রে সবচেয়ে কম সিগনিফিকেন্ট ফিগার থাকা পদের সাথে মিলিয়ে ফাইনাল রেজাল্ট রাউন্ড ($2.5 \times 3.42 \rightarrow 8.6$) করে। | ✅ Passed |
| ১০ | প্রজেক্টাইল গতিপথ ও পরামিতি (Projectile Trajectory) | Calculates horizontal range ($R = \frac{v_0^2 \sin 2\theta}{g}$), maximum height ($H_{\max} = \frac{v_0^2 \sin^2\theta}{2g}$), and coordinate trajectories $(x, y)$. | প্রারম্ভিক বেগ ($v_0$) ও কোণ ($\theta$) দিয়ে প্রজেক্টাইলের হরাইজন্টাল রেঞ্জ ($R = \frac{v_0^2 \sin 2\theta}{g}$), ম্যাক্সিমাম হাইট ($H_{\max}$) ও ট্র্যাজেক্টরি স্থানাঙ্ক বের করে। | ✅ Passed |
| ১১ | প্রজেক্টাইল ইনপুট গার্ড (Unphysical Input Guard) | Rejects unphysical kinematic launch parameters such as negative initial velocity ($v_0 < 0$) or angles exceeding $90^\circ$. | নেগেটিভ ভেলোসিটি ($v_0 < 0$) বা $90^\circ$-এর বেশি লঞ্চিং অ্যাঙ্গেল দিলে ক্যালকুলেটর ভ্যালিডেশন এরর থ্রো করে। | ✅ Passed |
| ১২ | দ্বিঘাত সমীকরণ: বাস্তব পৃথক মূল ($D > 0$) | Solves quadratic equations with positive discriminant ($D > 0$), producing two distinct real roots via $x = \frac{-b \pm \sqrt{D}}{2a}$ (e.g. $x^2 - 5x + 6 = 0 \rightarrow x = 3, 2$). | ডিসক্রিমিন্যান্ট পজিটিভ ($D > 0$) হলে সমীকরণের দুটি পৃথক বাস্তব রুট ($x = \frac{-b \pm \sqrt{D}}{2a}$, যেমন $x^2 - 5x + 6 = 0 \rightarrow x = 3, 2$) ধাপে ধাপে বের করে আনে। | ✅ Passed |
| ১৩ | দ্বিঘাত সমীকরণ: সমান বাস্তব মূল ($D = 0$) | Solves quadratic equations with zero discriminant ($D = 0$), yielding a single repeated real root $x = -\frac{b}{2a}$ (e.g. $x^2 - 4x + 4 = 0 \rightarrow x = 2$). | ডিসক্রিমিন্যান্ট শূন্য ($D = 0$) হলে সমীকরণের একটিমাত্র পুনরাবৃত্ত বাস্তব মূল ($x = -\frac{b}{2a}$, যেমন $x^2 - 4x + 4 = 0 \rightarrow x = 2$) সলভ করে দেখায়। | ✅ Passed |
| ১৪ | দ্বিঘাত সমীকরণ: জটিল অনুবন্ধী মূল ($D < 0$) | Solves quadratic equations with negative discriminant ($D < 0$), yielding complex conjugate roots $x = \alpha \pm i\beta$ (e.g. $x^2 + 2x + 5 = 0 \rightarrow -1 \pm 2i$). | ডিসক্রিমিন্যান্ট নেগেটিভ ($D < 0$) হলে ইমেজিনারি ইউনিট ($i = \sqrt{-1}$) সহ কনজুগেট জটিল রুট ($x = \alpha \pm i\beta$, যেমন $x^2 + 2x + 5 = 0 \rightarrow -1 \pm 2i$) হিসাব করে। | ✅ Passed |
| ১৫ | দ্বিঘাত সমীকরণের শর্ত ($a \ne 0$) | Enforces the quadratic definition ($ax^2 + bx + c = 0, a \ne 0$) by throwing an error when leading coefficient $a = 0$. | সেকেন্ড-ডিগ্রি কোয়েফিশিয়েন্ট $a = 0$ হলে সমীকরণটি রৈখিক হয়ে যায়, তাই উপযুক্ত ভ্যালিডেশন অ্যালার্ট দেয়। | ✅ Passed |

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

---

*Directory generated automatically from codebase test suites for biggan.me.*

