export interface HalfReactionStep {
  titleEn: string;
  titleBn: string;
  latex: string;
  explanationEn: string;
  explanationBn: string;
}

export interface RedoxReactionResult {
  title: string;
  medium: 'acidic' | 'basic';
  unbalancedLatex: string;
  oxidationHalf: {
    unbalanced: string;
    balanced: string;
    electronCount: number;
    multiplier: number;
    scaledLatex: string;
  };
  reductionHalf: {
    unbalanced: string;
    balanced: string;
    electronCount: number;
    multiplier: number;
    scaledLatex: string;
  };
  steps: HalfReactionStep[];
  balancedIonicLatex: string;
  balancedMolecularLatex?: string;
  spectatorIonsEn?: string;
  spectatorIonsBn?: string;
}

export interface RedoxPreset {
  id: string;
  nameEn: string;
  nameBn: string;
  medium: 'acidic' | 'basic';
  curriculum: string;
  result: RedoxReactionResult;
}

export const REDOX_PRESETS: RedoxPreset[] = [
  {
    id: 'permanganate-iron-acidic',
    nameEn: 'Permanganate + Ferrous (KMnO4 + FeSO4 in H2SO4)',
    nameBn: 'পটাশিয়াম পারম্যাঙ্গানেট + ফেরাস সালফেট (অম্লীয় মাধ্যমে)',
    medium: 'acidic',
    curriculum: 'NCTB HSC Chemistry 1st Paper Ch 3 / NCERT Class 11',
    result: {
      title: 'KMnO4 + FeSO4 + H2SO4 (Acidic)',
      medium: 'acidic',
      unbalancedLatex: '\\text{MnO}_4^- + \\text{Fe}^{2+} + \\text{H}^+ \\longrightarrow \\text{Mn}^{2+} + \\text{Fe}^{3+} + \\text{H}_2\\text{O}',
      oxidationHalf: {
        unbalanced: '\\text{Fe}^{2+} \\longrightarrow \\text{Fe}^{3+}',
        balanced: '\\text{Fe}^{2+} \\longrightarrow \\text{Fe}^{3+} + e^-',
        electronCount: 1,
        multiplier: 5,
        scaledLatex: '5\\text{Fe}^{2+} \\longrightarrow 5\\text{Fe}^{3+} + 5e^-',
      },
      reductionHalf: {
        unbalanced: '\\text{MnO}_4^- \\longrightarrow \\text{Mn}^{2+}',
        balanced: '\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\longrightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}',
        electronCount: 5,
        multiplier: 1,
        scaledLatex: '\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\longrightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}',
      },
      steps: [
        {
          titleEn: 'Step 1: Identify Oxidation States & Couples',
          titleBn: 'ধাপ ১: জারণ সংখ্যা নির্ণয় ও জারণ-বিজারণ যুগল চিহ্নিতকরণ',
          latex: '\\text{Mn: } +7 \\to +2 \\text{ (বিজারণ, ৫টি } e^- \\text{ গ্রহণ)}; \\quad \\text{Fe: } +2 \\to +3 \\text{ (জারণ, ১টি } e^- \\text{ বর্জন)}',
          explanationEn: 'Manganese decreases from +7 to +2 (reduction). Iron increases from +2 to +3 (oxidation).',
          explanationBn: 'ম্যাঙ্গানিজের জারণ সংখ্যা +7 থেকে হ্রাস পেয়ে +2 হয়েছে (বিজারণ)। আয়রনের জারণ সংখ্যা +2 থেকে বৃদ্ধি পেয়ে +3 হয়েছে (জারণ)।',
        },
        {
          titleEn: 'Step 2: Balance Oxidation Half-Reaction',
          titleBn: 'ধাপ ২: জারণ অর্ধ-বিক্রিয়া সমতাকরণ',
          latex: '\\text{Fe}^{2+} \\longrightarrow \\text{Fe}^{3+} + e^-',
          explanationEn: 'Iron atoms are already balanced (1:1). Add 1 electron on the product side to balance the charge (+2 = +3 - 1).',
          explanationBn: 'উভয় পাশে Fe পরমাণু সমান। চার্জের সমতা রক্ষার্থে ডানপাশে ১টি ইলেকট্রন যোগ করা হলো (+2 = +3 - 1)।',
        },
        {
          titleEn: 'Step 3: Balance Reduction Half-Reaction (Atoms, O with H2O, H with H+)',
          titleBn: 'ধাপ ৩: বিজারণ অর্ধ-বিক্রিয়া সমতাকরণ (পরমাণু, অক্সিজেন ও হাইড্রোজেন)',
          latex: '\\text{MnO}_4^- + 8\\text{H}^+ \\longrightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}',
          explanationEn: 'Mn is balanced. 4 oxygen atoms on the left are balanced with 4 H2O on the right. 8 H on the right are balanced with 8 H+ on the left.',
          explanationBn: 'Mn সমতাকৃত। বামপাশের ৪টি অক্সিজেন সমতা করতে ডানপাশে ৪টি H2O যোগ করা হলো। অতঃপর ৮টি হাইড্রোজেন সমতা করতে বামপাশে ৮টি H+ যোগ করা হলো।',
        },
        {
          titleEn: 'Step 4: Balance Charge on Reduction Half-Reaction',
          titleBn: 'ধাপ ৪: বিজারণ অর্ধ-বিক্রিয়ায় চার্জের সমতাকরণ',
          latex: '\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\longrightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}',
          explanationEn: 'Left side charge is (-1 + 8) = +7. Right side charge is +2. Add 5 electrons on the left to equalize (+7 - 5 = +2).',
          explanationBn: 'বামপাশের মোট চার্জ (-1 + 8) = +7 এবং ডানপাশে +2। অতএব বামপাশে ৫টি ইলেকট্রন যোগ করে উভয়পাশে +2 করা হলো।',
        },
        {
          titleEn: 'Step 5: Equalize Electron Exchange & Add Half-Reactions',
          titleBn: 'ধাপ ৫: ইলেকট্রন সংখ্যা সমান করে অর্ধ-বিক্রিয়াদুটি যোগকরণ',
          latex: '\\begin{aligned} (\\text{Fe}^{2+} &\\to \\text{Fe}^{3+} + e^-) \\times 5 \\\\ (\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- &\\to \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}) \\times 1 \\\\ \\hline \\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ &\\longrightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O} \\end{aligned}',
          explanationEn: 'Multiply the oxidation half by 5 and reduction half by 1 so 5 electrons cancel completely.',
          explanationBn: 'জারণ বিক্রিয়াকে ৫ দিয়ে এবং বিজারণ বিক্রিয়াকে ১ দিয়ে গুণ করে যোগ করলে উভয় পাশের ৫টি ইলেকট্রন কাটাকাটি যায়।',
        },
      ],
      balancedIonicLatex: '\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\longrightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}',
      balancedMolecularLatex: '2\\text{KMnO}_4 + 10\\text{FeSO}_4 + 8\\text{H}_2\\text{SO}_4 \\longrightarrow 2\\text{MnSO}_4 + 5\\text{Fe}_2(\\text{SO}_4)_3 + \\text{K}_2\\text{SO}_4 + 8\\text{H}_2\\text{O}',
      spectatorIonsEn: 'Spectator ions: Potassium (K+) and Sulfate (SO4^2-). Multiplying by 2 yields full integer stoichiometry for Fe2(SO4)3.',
      spectatorIonsBn: 'দর্শক আয়ন: পটাশিয়াম (K+) ও সালফেট (SO4^2-)। পূর্ণ আণবিক সমীকরণে Fe2(SO4)3 মেলাতে উভয়পক্ষে ২ দ্বারা গুণ করা হয়েছে।',
    },
  },
  {
    id: 'dichromate-ferrous-acidic',
    nameEn: 'Dichromate + Ferrous (K2Cr2O7 + FeSO4 in H2SO4)',
    nameBn: 'পটাশিয়াম ডাইক্রোমেট + ফেরাস সালফেট (অম্লীয় মাধ্যমে)',
    medium: 'acidic',
    curriculum: 'NCTB HSC Chemistry / NCERT Class 11 / CBSE',
    result: {
      title: 'K2Cr2O7 + FeSO4 + H2SO4 (Acidic)',
      medium: 'acidic',
      unbalancedLatex: '\\text{Cr}_2\\text{O}_7^{2-} + \\text{Fe}^{2+} + \\text{H}^+ \\longrightarrow \\text{Cr}^{3+} + \\text{Fe}^{3+} + \\text{H}_2\\text{O}',
      oxidationHalf: {
        unbalanced: '\\text{Fe}^{2+} \\longrightarrow \\text{Fe}^{3+}',
        balanced: '\\text{Fe}^{2+} \\longrightarrow \\text{Fe}^{3+} + e^-',
        electronCount: 1,
        multiplier: 6,
        scaledLatex: '6\\text{Fe}^{2+} \\longrightarrow 6\\text{Fe}^{3+} + 6e^-',
      },
      reductionHalf: {
        unbalanced: '\\text{Cr}_2\\text{O}_7^{2-} \\longrightarrow 2\\text{Cr}^{3+}',
        balanced: '\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\longrightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}',
        electronCount: 6,
        multiplier: 1,
        scaledLatex: '\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\longrightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}',
      },
      steps: [
        {
          titleEn: 'Step 1: Identify Oxidation States',
          titleBn: 'ধাপ ১: জারণ সংখ্যা ও পরিবর্তন নির্ণয়',
          latex: '\\text{Cr: } +6 \\to +3 \\text{ (প্রতি Cr ৩টি করে মোট ৬টি } e^- \\text{ গ্রহণ)}; \\quad \\text{Fe: } +2 \\to +3 \\text{ (১টি } e^- \\text{ বর্জন)}',
          explanationEn: 'Chromium in Cr2O7(2-) is +6, reduced to Cr3+ (+3). Fe2+ is oxidized to Fe3+ (+3).',
          explanationBn: 'Cr2O7(2-) এ ক্রোমিয়ামের জারণ মান +6 থেকে কমে +3 হয়। দুটি Cr পরমাণুর জন্য মোট ৬টি ইলেকট্রন গ্রহণ হয়।',
        },
        {
          titleEn: 'Step 2: Balance Reduction Half-Reaction Atoms & Oxygen',
          titleBn: 'ধাপ ২: বিজারণ অর্ধ-বিক্রিয়ায় পরমাণু ও অক্সিজেনের সমতা',
          latex: '\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ \\longrightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}',
          explanationEn: '2 Cr atoms on left balanced with 2 Cr3+ on right. 7 oxygen atoms balanced with 7 H2O on right. 14 H balanced with 14 H+ on left.',
          explanationBn: 'বামপাশে ২টি Cr থাকায় ডানপাশে 2Cr3+ লেখা হলো। ৭টি O মেলাতে ডানপাশে 7H2O এবং ১৪টি H মেলাতে বামপাশে 14H+ যোগ করা হলো।',
        },
        {
          titleEn: 'Step 3: Equalize Electrons & Combine',
          titleBn: 'ধাপ ৩: ইলেকট্রন সংখ্যার সমতাকরণ ও সংযোজন',
          latex: '\\begin{aligned} (\\text{Fe}^{2+} &\\to \\text{Fe}^{3+} + e^-) \\times 6 \\\\ (\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- &\\to 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}) \\times 1 \\\\ \\hline \\text{Cr}_2\\text{O}_7^{2-} + 6\\text{Fe}^{2+} + 14\\text{H}^+ &\\longrightarrow 2\\text{Cr}^{3+} + 6\\text{Fe}^{3+} + 7\\text{H}_2\\text{O} \\end{aligned}',
          explanationEn: 'Multiply the oxidation half-reaction by 6 to match the 6 electrons required by dichromate.',
          explanationBn: 'জারণ অর্ধ-বিক্রিয়াকে ৬ দিয়ে গুণ করে উভয় সমীকরণ যোগ করলে ইলেকট্রন শূন্য হয়ে সুষম আয়ন সমীকরণ পাওয়া যায়।',
        },
      ],
      balancedIonicLatex: '\\text{Cr}_2\\text{O}_7^{2-} + 6\\text{Fe}^{2+} + 14\\text{H}^+ \\longrightarrow 2\\text{Cr}^{3+} + 6\\text{Fe}^{3+} + 7\\text{H}_2\\text{O}',
      balancedMolecularLatex: '\\text{K}_2\\text{Cr}_2\\text{O}_7 + 6\\text{FeSO}_4 + 7\\text{H}_2\\text{SO}_4 \\longrightarrow \\text{Cr}_2(\\text{SO}_4)_3 + 3\\text{Fe}_2(\\text{SO}_4)_3 + \\text{K}_2\\text{SO}_4 + 7\\text{H}_2\\text{O}',
      spectatorIonsEn: 'Spectator ions: Potassium (K+) and Sulfate (SO4^2-).',
      spectatorIonsBn: 'দর্শক আয়ন: পটাশিয়াম (K+) ও সালফেট (SO4^2-)।',
    },
  },
  {
    id: 'oxalate-permanganate-acidic',
    nameEn: 'Permanganate + Oxalic Acid (KMnO4 + H2C2O4 in H2SO4)',
    nameBn: 'পটাশিয়াম পারম্যাঙ্গানেট + অক্সালিক এসিড (অম্লীয় মাধ্যমে)',
    medium: 'acidic',
    curriculum: 'NCTB HSC Chemistry / NCERT Class 11 Titrations',
    result: {
      title: 'KMnO4 + H2C2O4 + H2SO4 (Acidic)',
      medium: 'acidic',
      unbalancedLatex: '\\text{MnO}_4^- + \\text{C}_2\\text{O}_4^{2-} + \\text{H}^+ \\longrightarrow \\text{Mn}^{2+} + \\text{CO}_2 + \\text{H}_2\\text{O}',
      oxidationHalf: {
        unbalanced: '\\text{C}_2\\text{O}_4^{2-} \\longrightarrow 2\\text{CO}_2',
        balanced: '\\text{C}_2\\text{O}_4^{2-} \\longrightarrow 2\\text{CO}_2 + 2e^-',
        electronCount: 2,
        multiplier: 5,
        scaledLatex: '5\\text{C}_2\\text{O}_4^{2-} \\longrightarrow 10\\text{CO}_2 + 10e^-',
      },
      reductionHalf: {
        unbalanced: '\\text{MnO}_4^- \\longrightarrow \\text{Mn}^{2+}',
        balanced: '\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\longrightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}',
        electronCount: 5,
        multiplier: 2,
        scaledLatex: '2\\text{MnO}_4^- + 16\\text{H}^+ + 10e^- \\longrightarrow 2\\text{Mn}^{2+} + 8\\text{H}_2\\text{O}',
      },
      steps: [
        {
          titleEn: 'Step 1: Assign Oxidation States',
          titleBn: 'ধাপ ১: জারণ সংখ্যার পরিবর্তন নির্ণয়',
          latex: '\\text{C in } \\text{C}_2\\text{O}_4^{2-}: +3 \\to +4 \\text{ (২টি C মোট ২টি } e^- \\text{ বর্জন)}; \\quad \\text{Mn: } +7 \\to +2 \\text{ (৫টি } e^- \\text{ গ্রহণ)}',
          explanationEn: 'Carbon changes from +3 to +4 (oxidation, loses 2 electrons per oxalate ion). Mn is reduced from +7 to +2 (gains 5 electrons).',
          explanationBn: 'অক্সালেটে কার্বনের জারণ মান +3 থেকে বৃদ্ধি পেয়ে CO2 তে +4 হয় (২টি ইলেকট্রন বর্জন)। Mn এর মান +7 থেকে কমে +2 হয় (৫টি ইলেকট্রন গ্রহণ)।',
        },
        {
          titleEn: 'Step 2: Equalize Electrons (LCM of 2 and 5 is 10)',
          titleBn: 'ধাপ ২: ইলেকট্রন সমতাকরণ (২ ও ৫ এর লসাগু ১০)',
          latex: '\\begin{aligned} (\\text{C}_2\\text{O}_4^{2-} &\\to 2\\text{CO}_2 + 2e^-) \\times 5 \\\\ (\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- &\\to \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}) \\times 2 \\\\ \\hline 2\\text{MnO}_4^- + 5\\text{C}_2\\text{O}_4^{2-} + 16\\text{H}^+ &\\longrightarrow 2\\text{Mn}^{2+} + 10\\text{CO}_2 + 8\\text{H}_2\\text{O} \\end{aligned}',
          explanationEn: 'Multiplying oxidation half by 5 and reduction half by 2 balances the total electron transfer at 10 e-.',
          explanationBn: 'জারণ সমীকরণকে ৫ এবং বিজারণ সমীকরণকে ২ দিয়ে গুণ করলে আদান-প্রদানকৃত মোট ইলেকট্রন সংখ্যা ১০ এ সমতা পায়।',
        },
      ],
      balancedIonicLatex: '2\\text{MnO}_4^- + 5\\text{C}_2\\text{O}_4^{2-} + 16\\text{H}^+ \\longrightarrow 2\\text{Mn}^{2+} + 10\\text{CO}_2 + 8\\text{H}_2\\text{O}',
      balancedMolecularLatex: '2\\text{KMnO}_4 + 5\\text{H}_2\\text{C}_2\\text{O}_4 + 3\\text{H}_2\\text{SO}_4 \\longrightarrow 2\\text{MnSO}_4 + 10\\text{CO}_2 + \\text{K}_2\\text{SO}_4 + 8\\text{H}_2\\text{O}',
    },
  },
  {
    id: 'permanganate-iodide-basic',
    nameEn: 'Permanganate + Iodide (KMnO4 + KI in Basic / Alkaline Medium)',
    nameBn: 'পটাশিয়াম পারম্যাঙ্গানেট + আয়োডাইড (ক্ষারীয় মাধ্যমে)',
    medium: 'basic',
    curriculum: 'NCTB HSC Chemistry / NCERT Class 11 Redox in Base',
    result: {
      title: 'KMnO4 + KI (Basic/Alkaline Medium)',
      medium: 'basic',
      unbalancedLatex: '\\text{MnO}_4^- + \\text{I}^- + \\text{H}_2\\text{O} \\longrightarrow \\text{MnO}_2 + \\text{IO}_3^- + \\text{OH}^-',
      oxidationHalf: {
        unbalanced: '\\text{I}^- \\longrightarrow \\text{IO}_3^-',
        balanced: '\\text{I}^- + 6\\text{OH}^- \\longrightarrow \\text{IO}_3^- + 3\\text{H}_2\\text{O} + 6e^-',
        electronCount: 6,
        multiplier: 1,
        scaledLatex: '\\text{I}^- + 6\\text{OH}^- \\longrightarrow \\text{IO}_3^- + 3\\text{H}_2\\text{O} + 6e^-',
      },
      reductionHalf: {
        unbalanced: '\\text{MnO}_4^- \\longrightarrow \\text{MnO}_2',
        balanced: '\\text{MnO}_4^- + 2\\text{H}_2\\text{O} + 3e^- \\longrightarrow \\text{MnO}_2 + 4\\text{OH}^-',
        electronCount: 3,
        multiplier: 2,
        scaledLatex: '2\\text{MnO}_4^- + 4\\text{H}_2\\text{O} + 6e^- \\longrightarrow 2\\text{MnO}_2 + 8\\text{OH}^-',
      },
      steps: [
        {
          titleEn: 'Step 1: Oxidation Half-Reaction in Basic Medium',
          titleBn: 'ধাপ ১: ক্ষারীয় মাধ্যমে জারণ অর্ধ-বিক্রিয়া সমতাকরণ',
          latex: '\\text{I}^- + 6\\text{OH}^- \\longrightarrow \\text{IO}_3^- + 3\\text{H}_2\\text{O} + 6e^-',
          explanationEn: 'Iodide (-1) oxidizes to iodate (+5), transferring 6 electrons. In basic solution, oxygen is balanced using OH- and H2O.',
          explanationBn: 'আয়োডাইড (-1) থেকে আয়োডেট (+5) এ পরিণত হয়ে ৬টি ইলেকট্রন ত্যাগ করে। ক্ষারীয় দ্রবণে OH- ও H2O দ্বারা সমতা করা হয়।',
        },
        {
          titleEn: 'Step 2: Reduction Half-Reaction in Basic Medium',
          titleBn: 'ধাপ ২: ক্ষারীয় মাধ্যমে বিজারণ অর্ধ-বিক্রিয়া সমতাকরণ',
          latex: '\\text{MnO}_4^- + 2\\text{H}_2\\text{O} + 3e^- \\longrightarrow \\text{MnO}_2 + 4\\text{OH}^-',
          explanationEn: 'Permanganate (+7) is reduced to manganese dioxide (+4), accepting 3 electrons in neutral/weakly alkaline medium.',
          explanationBn: 'পারম্যাঙ্গানেটের Mn (+7) বিজারিত হয়ে বাদামী বর্ণের ম্যাঙ্গানিজ ডাই অক্সাইড MnO2 (+4) তৈরি করে (৩টি ইলেকট্রন গ্রহণ)।',
        },
        {
          titleEn: 'Step 3: Multiply & Add Half-Reactions',
          titleBn: 'ধাপ ৩: ইলেকট্রন সংখ্যার সমতা ও অর্ধ-বিক্রিয়ার সংযোজন',
          latex: '\\begin{aligned} (\\text{I}^- + 6\\text{OH}^- &\\to \\text{IO}_3^- + 3\\text{H}_2\\text{O} + 6e^-) \\times 1 \\\\ (\\text{MnO}_4^- + 2\\text{H}_2\\text{O} + 3e^- &\\to \\text{MnO}_2 + 4\\text{OH}^-) \\times 2 \\\\ \\hline 2\\text{MnO}_4^- + \\text{I}^- + \\text{H}_2\\text{O} &\\longrightarrow 2\\text{MnO}_2 + \\text{IO}_3^- + 2\\text{OH}^- \\end{aligned}',
          explanationEn: 'Multiply reduction half by 2. Cancel common species (4 H2O - 3 H2O = 1 H2O on left; 8 OH- - 6 OH- = 2 OH- on right).',
          explanationBn: 'বিজারণ বিক্রিয়াকে ২ দিয়ে গুণ করে যোগ করলে উভয় পাশের H2O ও OH- বিয়োগ হয়ে চূড়ান্ত সমীকরণ পাওয়া যায়।',
        },
      ],
      balancedIonicLatex: '2\\text{MnO}_4^- + \\text{I}^- + \\text{H}_2\\text{O} \\longrightarrow 2\\text{MnO}_2 + \\text{IO}_3^- + 2\\text{OH}^-',
    },
  },
];

export function getRedoxSolution(id: string): RedoxReactionResult | undefined {
  const preset = REDOX_PRESETS.find((p) => p.id === id);
  return preset?.result;
}
