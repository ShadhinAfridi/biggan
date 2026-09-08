import React, { useState } from 'react';
import {
  Activity,
  Flame,
  Dna,
  Share2,
  TreePine,
  Droplet,
  Copy,
  Check,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
} from 'lucide-react';
import { Latex } from '../../components/math/Latex';
import {
  calculateBMI,
  calculateBMR,
  calculateRespirationATP,
  calculateMonohybridCross,
  calculateSexLinkedCross,
  calculateTrophicEnergy,
  checkBloodCompatibility,
  type BMIResult,
  type BMRResult,
  type RespirationResult,
  type MonohybridResult,
  type SexLinkedResult,
  type TrophicResult,
  type BloodMatchResult,
} from './engine';
import {
  ACTIVITY_LEVELS,
  BLOOD_GROUPS,
  type BloodType,
} from './constants';

interface Props {
  lang?: 'bn' | 'en';
}

type BiologyTab =
  | 'bmi_bmr'
  | 'bioenergetics'
  | 'monohybrid'
  | 'sex_linked'
  | 'trophic_energy'
  | 'blood_matching';

export const BiologyCalculator: React.FC<Props> = ({ lang = 'bn' }) => {
  const [activeTab, setActiveTab] = useState<BiologyTab>('bmi_bmr');
  const [copied, setCopied] = useState(false);

  // Tab 1: BMI & BMR State
  const [bmiUnit, setBmiUnit] = useState<'metric' | 'imperial'>('metric');
  const [gender, setGender] = useState<'male' | 'female'>('female');
  const [weightKg, setWeightKg] = useState<number>(50);
  const [heightCm, setHeightCm] = useState<number>(155);
  const [weightLbs, setWeightLbs] = useState<number>(110);
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInches, setHeightInches] = useState<number>(1);
  const [ageYears, setAgeYears] = useState<number>(16);
  const [activityId, setActivityId] = useState<string>('moderate');

  // Tab 2: Bioenergetics State
  const [glucoseMoles, setGlucoseMoles] = useState<number>(1);
  const [respirationModel, setRespirationModel] = useState<'classical' | 'modern'>('classical');

  // Tab 3: Monohybrid State
  const [monoP1, setMonoP1] = useState<string>('Tt');
  const [monoP2, setMonoP2] = useState<string>('Tt');

  // Tab 4: Sex-Linked State
  const [sexCondition, setSexCondition] = useState<'colorblindness' | 'hemophilia'>('colorblindness');
  const [maternalGeno, setMaternalGeno] = useState<'XN_XN' | 'XN_Xn' | 'Xn_Xn'>('XN_Xn');
  const [paternalGeno, setPaternalGeno] = useState<'XN_Y' | 'Xn_Y'>('XN_Y');

  // Tab 5: Trophic Energy State
  const [trophicEnergy, setTrophicEnergy] = useState<number>(10000);
  const [trophicUnit, setTrophicUnit] = useState<'J' | 'kcal'>('J');

  // Tab 6: Blood Compatibility State
  const [donorGroup, setDonorGroup] = useState<BloodType>('O-');
  const [recipientGroup, setRecipientGroup] = useState<BloodType>('AB+');

  // Handle unit conversions for BMI
  const handleLbsChange = (val: number) => {
    setWeightLbs(val);
    setWeightKg(Number((val * 0.453592).toFixed(1)));
  };

  const handleFtInChange = (ft: number, inch: number) => {
    setHeightFeet(ft);
    setHeightInches(inch);
    setHeightCm(Number(((ft * 12 + inch) * 2.54).toFixed(1)));
  };

  const handleKgChange = (val: number) => {
    setWeightKg(val);
    setWeightLbs(Number((val / 0.453592).toFixed(1)));
  };

  const handleCmChange = (val: number) => {
    setHeightCm(val);
    const totalInches = val / 2.54;
    const ft = Math.floor(totalInches / 12);
    const inch = Math.round(totalInches % 12);
    setHeightFeet(ft);
    setHeightInches(inch);
  };

  // Compute Results
  let bmiRes: BMIResult | null = null;
  let bmrRes: BMRResult | null = null;
  try {
    bmiRes = calculateBMI(weightKg, heightCm);
    bmrRes = calculateBMR(gender, weightKg, heightCm, ageYears, activityId);
  } catch {
    // Ignore invalid inputs
  }

  let respRes: RespirationResult | null = null;
  try {
    respRes = calculateRespirationATP(glucoseMoles, respirationModel);
  } catch {
    // Ignore invalid inputs
  }

  let monoRes: MonohybridResult | null = null;
  try {
    monoRes = calculateMonohybridCross(monoP1, monoP2);
  } catch {
    // Ignore invalid inputs
  }

  let sexRes: SexLinkedResult | null = null;
  try {
    sexRes = calculateSexLinkedCross(maternalGeno, paternalGeno, sexCondition);
  } catch {
    // Ignore invalid inputs
  }

  let trophRes: TrophicResult | null = null;
  try {
    trophRes = calculateTrophicEnergy(trophicEnergy, trophicUnit);
  } catch {
    // Ignore invalid inputs
  }

  let bloodRes: BloodMatchResult | null = null;
  try {
    bloodRes = checkBloodCompatibility(donorGroup, recipientGroup);
  } catch {
    // Ignore invalid inputs
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs: { id: BiologyTab; labelBn: string; labelEn: string; icon: React.ReactNode }[] = [
    {
      id: 'bmi_bmr',
      labelBn: 'বিএমআই ও বিএমআর (BMI & BMR)',
      labelEn: 'BMI, BMR & Caloric Needs',
      icon: <Activity className="w-4 h-4 text-emerald-400" />,
    },
    {
      id: 'bioenergetics',
      labelBn: 'জীবনীশক্তি ও এটিপি (ATP Sheet)',
      labelEn: 'Bioenergetics & ATP Balance',
      icon: <Flame className="w-4 h-4 text-amber-400" />,
    },
    {
      id: 'monohybrid',
      labelBn: 'মেন্ডেলীয় একসংকর জনন',
      labelEn: 'Mendelian Monohybrid Cross',
      icon: <Dna className="w-4 h-4 text-teal-400" />,
    },
    {
      id: 'sex_linked',
      labelBn: 'লিঙ্গ-সংযুক্ত বংশগতি (বর্ণান্ধতা)',
      labelEn: 'Sex-Linked Traits (Color Blindness)',
      icon: <Share2 className="w-4 h-4 text-cyan-400" />,
    },
    {
      id: 'trophic_energy',
      labelBn: 'খাদ্যশৃঙ্খল ১০% শক্তি পিরামিড',
      labelEn: 'Lindeman 10% Trophic Energy',
      icon: <TreePine className="w-4 h-4 text-green-400" />,
    },
    {
      id: 'blood_matching',
      labelBn: 'রক্তের গ্রুপ ও সামঞ্জস্যতা',
      labelEn: 'Blood Group Compatibility',
      icon: <Droplet className="w-4 h-4 text-red-400" />,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Tab Navigation */}
      <div className="bg-slate-900/80 border border-slate-800 p-2 rounded-2xl backdrop-blur-sm">
        {/* Mobile Dropdown */}
        <div className="md:hidden">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value as BiologyTab)}
            className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-2.5 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {lang === 'bn' ? tab.labelBn : tab.labelEn}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 text-center ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                {tab.icon}
                <span className="truncate">{lang === 'bn' ? tab.labelBn : tab.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: BMI & BMR */}
      {activeTab === 'bmi_bmr' && bmiRes && bmrRes && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Input Form */}
            <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  {lang === 'bn' ? 'শারীরিক তথ্য ও প্যারামিটার' : 'Physical Attributes & Parameters'}
                </h3>
                {/* Unit Switcher */}
                <div className="inline-flex rounded-lg p-0.5 bg-slate-950 border border-slate-800">
                  <button
                    onClick={() => setBmiUnit('metric')}
                    className={`px-2.5 py-1 text-xs rounded-md font-medium transition ${
                      bmiUnit === 'metric' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Metric (kg/cm)
                  </button>
                  <button
                    onClick={() => setBmiUnit('imperial')}
                    className={`px-2.5 py-1 text-xs rounded-md font-medium transition ${
                      bmiUnit === 'imperial' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Imperial (lbs/ft)
                  </button>
                </div>
              </div>

              {/* Biological Sex */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  {lang === 'bn' ? 'জৈবিক লিঙ্গ (Biological Sex):' : 'Biological Sex:'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-2 rounded-xl text-xs font-semibold border transition ${
                      gender === 'female'
                        ? 'bg-pink-500/20 text-pink-300 border-pink-500/40'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {lang === 'bn' ? 'নারী (Female)' : 'Female'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-2 rounded-xl text-xs font-semibold border transition ${
                      gender === 'male'
                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {lang === 'bn' ? 'পুরুষ (Male)' : 'Male'}
                  </button>
                </div>
              </div>

              {/* Weight & Height */}
              {bmiUnit === 'metric' ? (
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      {lang === 'bn' ? 'ওজন (Weight - kg):' : 'Weight (kg):'}
                    </label>
                    <input
                      type="number"
                      value={weightKg}
                      onChange={(e) => handleKgChange(parseFloat(e.target.value) || 0)}
                      step="0.5"
                      min="20"
                      max="200"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      {lang === 'bn' ? 'উচ্চতা (Height - cm):' : 'Height (cm):'}
                    </label>
                    <input
                      type="number"
                      value={heightCm}
                      onChange={(e) => handleCmChange(parseFloat(e.target.value) || 0)}
                      step="1"
                      min="50"
                      max="250"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      {lang === 'bn' ? 'ওজন (Weight - lbs):' : 'Weight (lbs):'}
                    </label>
                    <input
                      type="number"
                      value={weightLbs}
                      onChange={(e) => handleLbsChange(parseFloat(e.target.value) || 0)}
                      step="1"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        {lang === 'bn' ? 'উচ্চতা ফুট (Feet):' : 'Height (Feet):'}
                      </label>
                      <input
                        type="number"
                        value={heightFeet}
                        onChange={(e) => handleFtInChange(parseInt(e.target.value) || 0, heightInches)}
                        min="2"
                        max="8"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        {lang === 'bn' ? 'ইঞ্চি (Inches):' : 'Inches:'}
                      </label>
                      <input
                        type="number"
                        value={heightInches}
                        onChange={(e) => handleFtInChange(heightFeet, parseFloat(e.target.value) || 0)}
                        min="0"
                        max="11.9"
                        step="0.5"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Age & Activity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    {lang === 'bn' ? 'বয়স (Age - বছর):' : 'Age (Years):'}
                  </label>
                  <input
                    type="number"
                    value={ageYears}
                    onChange={(e) => setAgeYears(parseInt(e.target.value) || 0)}
                    min="10"
                    max="100"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    {lang === 'bn' ? 'শারীরিক পরিশ্রমের মাত্রা:' : 'Physical Activity Level:'}
                  </label>
                  <select
                    value={activityId}
                    onChange={(e) => setActivityId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    {ACTIVITY_LEVELS.map((a) => (
                      <option key={a.id} value={a.id}>
                        {lang === 'bn' ? `${a.labelBn} (x${a.multiplier})` : `${a.labelEn} (x${a.multiplier})`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Calibration Shortcut Preset */}
              <div className="pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setGender('female');
                    setWeightKg(50);
                    setHeightCm(155);
                    setAgeYears(16);
                    setActivityId('moderate');
                    setBmiUnit('metric');
                  }}
                  className="text-xs text-emerald-400 hover:text-emerald-300 underline font-mono inline-flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {lang === 'bn' ? 'বোর্ড পরীক্ষা স্পেশাল মান লোড করুন (16y Female, 50kg, 155cm)' : 'Load Textbook Calibration (16y Female, 50kg, 155cm)'}
                </button>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-6 space-y-4">
              {/* BMI Card */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {lang === 'bn' ? 'দেহ ভর সূচি (BMI)' : 'Body Mass Index (BMI)'}
                  </span>
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${bmiRes.category.colorClass}`}>
                    {lang === 'bn' ? bmiRes.category.categoryBn : bmiRes.category.categoryEn}
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-extrabold text-white font-mono">{bmiRes.bmi}</span>
                  <span className="text-xs text-slate-400 font-mono">kg/m²</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'bn' ? bmiRes.explanationBn : bmiRes.explanationEn}
                </p>
              </div>

              {/* BMR & TDEE Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-1">
                  <span className="text-xs font-bold text-slate-400 block truncate">
                    {lang === 'bn' ? 'মৌলিক বিপাক (BMR)' : 'Basal Metabolic Rate'}
                  </span>
                  <div className="text-2xl font-bold text-white font-mono">{bmrRes.bmr}</div>
                  <span className="text-xs text-slate-500 font-mono">kcal/day</span>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 space-y-1">
                  <span className="text-xs font-bold text-emerald-400 block truncate">
                    {lang === 'bn' ? 'দৈনিক ক্যালরি চাহিদা (TDEE)' : 'Daily Caloric Needs'}
                  </span>
                  <div className="text-2xl font-bold text-emerald-300 font-mono">{bmrRes.tdee}</div>
                  <span className="text-xs text-emerald-500/80 font-mono">kcal/day</span>
                </div>
              </div>

              {/* Copy Result */}
              <button
                onClick={() =>
                  handleCopy(
                    `BMI: ${bmiRes?.bmi} (${bmiRes?.category.categoryEn}), BMR: ${bmrRes?.bmr} kcal/day, TDEE: ${bmrRes?.tdee} kcal/day - biggan.me`
                  )
                }
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-xl text-xs font-semibold transition"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copied ? (lang === 'bn' ? 'কপি হয়েছে!' : 'Copied!') : (lang === 'bn' ? 'ফলাফল কপি করুন' : 'Copy Result')}
              </button>
            </div>
          </div>

          {/* Mathematical Derivation */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              {lang === 'bn' ? 'ধাপে ধাপে গাণিতিক প্রতিপাদন (হ্যারিস-বেনেডিক্ট সমীকরণ)' : 'Step-by-Step Derivation (Harris-Benedict Equations)'}
            </h4>
            <div className="overflow-x-auto py-2">
              <Latex math={bmrRes.stepsLatex} />
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: BIOENERGETICS (ATP BALANCE) */}
      {activeTab === 'bioenergetics' && respRes && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Input Controls */}
            <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Flame className="w-4 h-4 text-amber-400" />
                {lang === 'bn' ? 'শ্বসন সমীকরণ ইনপুট' : 'Respiration Inputs'}
              </h3>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  {lang === 'bn' ? 'গ্লুকোজের পরিমাণ (Glucose - Moles):' : 'Amount of Glucose (Moles):'}
                </label>
                <input
                  type="number"
                  value={glucoseMoles}
                  onChange={(e) => setGlucoseMoles(Math.max(0.1, parseFloat(e.target.value) || 1))}
                  step="0.5"
                  min="0.1"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  {lang === 'bn' ? 'পাঠ্যবই মডেল নির্বাচন:' : 'Curriculum Edition Model:'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRespirationModel('classical')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition ${
                      respirationModel === 'classical'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {lang === 'bn' ? 'NCTB প্রথাগত (38 ATP)' : 'NCTB Classical (38 ATP)'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setRespirationModel('modern')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition ${
                      respirationModel === 'modern'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {lang === 'bn' ? 'আধুনিক স্ট্যান্ডার্ড (36 ATP)' : 'Modern Standard (36 ATP)'}
                  </button>
                </div>
              </div>

              {/* Summary Stats */}
              <div className="pt-2 border-t border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>{lang === 'bn' ? 'প্রতি মোল ATP শক্তি:' : 'Energy per mole ATP:'}</span>
                  <span className="font-mono text-amber-400">7.3 kcal (30.55 kJ)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{lang === 'bn' ? 'অবাত শ্বসনে উৎপাদিত ATP:' : 'Anaerobic ATP Yield:'}</span>
                  <span className="font-mono text-slate-400">{2 * glucoseMoles} ATP</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{lang === 'bn' ? 'নিষ্ক্রান্ত CO₂ গ্যাস:' : 'CO₂ Emitted:'}</span>
                  <span className="font-mono text-emerald-400">{respRes.co2Moles} moles</span>
                </div>
              </div>
            </div>

            {/* Results & Table */}
            <div className="lg:col-span-7 space-y-4">
              {/* Energy Hero Banner */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    {lang === 'bn' ? 'মোট উৎপাদিত কার্যকর শক্তি' : 'Total Usable Energy Yield'}
                  </span>
                  <div className="text-3xl font-extrabold text-white font-mono mt-1">
                    {respRes.totalAtp} <span className="text-base font-normal text-amber-300">ATP</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-mono">
                    = {respRes.totalKcal} kcal ({respRes.totalKj} kJ)
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full text-xs font-bold">
                    {respirationModel === 'classical' ? '38 ATP / Glucose' : '36 ATP / Glucose'}
                  </span>
                </div>
              </div>

              {/* Respiration Stage Breakdown Table */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                    <tr>
                      <th className="p-3 font-semibold">{lang === 'bn' ? 'শ্বসন পর্যায়' : 'Stage'}</th>
                      <th className="p-3 font-semibold text-center">{lang === 'bn' ? 'সরাসরি ATP' : 'Direct ATP'}</th>
                      <th className="p-3 font-semibold text-center">NADH</th>
                      <th className="p-3 font-semibold text-center">FADH₂</th>
                      <th className="p-3 font-semibold text-right">{lang === 'bn' ? 'মোট ATP' : 'Total ATP'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-200">
                    {respRes.stages.map((stg, i) => (
                      <tr key={i} className="hover:bg-slate-800/40 transition">
                        <td className="p-3 font-medium text-white">{lang === 'bn' ? stg.stageNameBn : stg.stageNameEn}</td>
                        <td className="p-3 text-center font-mono">{stg.directAtp}</td>
                        <td className="p-3 text-center font-mono">{stg.nadh}</td>
                        <td className="p-3 text-center font-mono">{stg.fadh2}</td>
                        <td className="p-3 text-right font-mono font-bold text-amber-400">{stg.stageTotalAtp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Derivation */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {lang === 'bn' ? 'সবাত শ্বসনের পূর্ণাঙ্গ শক্তি সমীকরণ' : 'Complete Aerobic Respiration Balance Equation'}
            </h4>
            <div className="overflow-x-auto py-2">
              <Latex math={respRes.stepsLatex} />
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: MONOHYBRID CROSS */}
      {activeTab === 'monohybrid' && monoRes && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Cross Controls */}
            <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Dna className="w-4 h-4 text-teal-400" />
                {lang === 'bn' ? 'জনক জনুর জিনোটাইপ নির্বাচন' : 'Parental Genotypes'}
              </h3>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  {lang === 'bn' ? '১ম জনকের জিনোটাইপ (Parent 1):' : 'Parent 1 Genotype:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['TT', 'Tt', 'tt'].map((geno) => (
                    <button
                      key={geno}
                      type="button"
                      onClick={() => setMonoP1(geno)}
                      className={`py-2 rounded-xl text-xs font-bold border transition ${
                        monoP1 === geno
                          ? 'bg-teal-500/20 text-teal-300 border-teal-500/40'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      {geno}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  {lang === 'bn' ? '২য় জনকের জিনোটাইপ (Parent 2):' : 'Parent 2 Genotype:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['TT', 'Tt', 'tt'].map((geno) => (
                    <button
                      key={geno}
                      type="button"
                      onClick={() => setMonoP2(geno)}
                      className={`py-2 rounded-xl text-xs font-bold border transition ${
                        monoP2 === geno
                          ? 'bg-teal-500/20 text-teal-300 border-teal-500/40'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      {geno}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                <p>• <strong>T (Dominant):</strong> {lang === 'bn' ? 'লম্বা মটরশুঁটি কান্ড' : 'Tall pea plant stem'}</p>
                <p>• <strong>t (Recessive):</strong> {lang === 'bn' ? 'খাটো বা বামন মটরশুঁটি কান্ড' : 'Dwarf pea plant stem'}</p>
              </div>
            </div>

            {/* 2x2 Punnett Square & Ratios */}
            <div className="lg:col-span-7 space-y-4">
              {/* Punnett Square Table */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">
                  {lang === 'bn' ? 'পুনেট স্কয়ার গ্রিড (Punnett Square Grid)' : 'Punnett Square Grid (2 x 2)'}
                </h4>

                <div className="max-w-xs mx-auto">
                  <table className="w-full border-collapse text-center text-sm font-mono">
                    <thead>
                      <tr>
                        <th className="p-2 border border-slate-800 bg-slate-950 text-slate-500">P1 \ P2</th>
                        <th className="p-2 border border-slate-800 bg-teal-500/10 text-teal-300 font-bold">{monoRes.gametes2[0]}</th>
                        <th className="p-2 border border-slate-800 bg-teal-500/10 text-teal-300 font-bold">{monoRes.gametes2[1]}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-slate-800 bg-teal-500/10 text-teal-300 font-bold">{monoRes.gametes1[0]}</td>
                        <td className="p-3 border border-slate-800 bg-slate-950 font-extrabold text-white text-base">
                          {monoRes.grid[0][0]}
                        </td>
                        <td className="p-3 border border-slate-800 bg-slate-950 font-extrabold text-white text-base">
                          {monoRes.grid[0][1]}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-slate-800 bg-teal-500/10 text-teal-300 font-bold">{monoRes.gametes1[1]}</td>
                        <td className="p-3 border border-slate-800 bg-slate-950 font-extrabold text-white text-base">
                          {monoRes.grid[1][0]}
                        </td>
                        <td className="p-3 border border-slate-800 bg-slate-950 font-extrabold text-white text-base">
                          {monoRes.grid[1][1]}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Ratio Cards */}
                <div className="grid grid-cols-2 gap-3 mt-5">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center">
                    <span className="text-xs text-slate-400 block font-bold">{lang === 'bn' ? 'জিনোটাইপিক অনুপাত' : 'Genotypic Ratio'}</span>
                    <span className="text-sm font-bold text-teal-300 font-mono mt-1 block">{monoRes.genotypicRatio}</span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center">
                    <span className="text-xs text-slate-400 block font-bold">{lang === 'bn' ? 'ফিনোটাইপিক অনুপাত' : 'Phenotypic Ratio'}</span>
                    <span className="text-sm font-bold text-emerald-300 font-mono mt-1 block">
                      {monoRes.dominantPercentage}% : {monoRes.recessivePercentage}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Derivation */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {lang === 'bn' ? 'মেন্ডেলের ১ম সূত্র (পৃথকীকরণ সূত্র) বিশ্লেষণ' : "Mendel's Law of Segregation Analysis"}
            </h4>
            <div className="overflow-x-auto py-2">
              <Latex math={monoRes.stepsLatex} />
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: SEX-LINKED INHERITANCE */}
      {activeTab === 'sex_linked' && sexRes && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Selectors */}
            <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Share2 className="w-4 h-4 text-cyan-400" />
                {lang === 'bn' ? 'পিতামাতার ক্রোমোজোম ও অ্যালিল' : 'Parental Chromosomes & Alleles'}
              </h3>

              {/* Trait selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  {lang === 'bn' ? 'বংশগত ব্যাধি নির্বাচন:' : 'Genetic Condition:'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSexCondition('colorblindness')}
                    className={`py-1.5 rounded-xl text-xs font-semibold border text-center transition ${
                      sexCondition === 'colorblindness'
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {lang === 'bn' ? 'লাল-সবুজ বর্ণান্ধতা' : 'Color Blindness'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSexCondition('hemophilia')}
                    className={`py-1.5 rounded-xl text-xs font-semibold border text-center transition ${
                      sexCondition === 'hemophilia'
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {lang === 'bn' ? 'হিমোফিলিয়া' : 'Hemophilia'}
                  </button>
                </div>
              </div>

              {/* Mother Genotype */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  {lang === 'bn' ? 'মাতার জিনোটাইপ (Maternal Genotype):' : 'Maternal Genotype:'}
                </label>
                <select
                  value={maternalGeno}
                  onChange={(e) => setMaternalGeno(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                >
                  <option value="XN_XN">{lang === 'bn' ? 'স্বাভাবিক দৃষ্টিসম্পন্ন মা (Xᴺ Xᴺ)' : 'Normal Mother (Xᴺ Xᴺ)'}</option>
                  <option value="XN_Xn">{lang === 'bn' ? 'বাহক মা (সুস্থ কিন্তু বাহক - Xᴺ Xⁿ)' : 'Carrier Mother (Xᴺ Xⁿ)'}</option>
                  <option value="Xn_Xn">{lang === 'bn' ? 'বর্ণান্ধ/আক্রান্ত মা (Xⁿ Xⁿ)' : 'Affected Mother (Xⁿ Xⁿ)'}</option>
                </select>
              </div>

              {/* Father Genotype */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  {lang === 'bn' ? 'পিতার জিনোটাইপ (Paternal Genotype):' : 'Paternal Genotype:'}
                </label>
                <select
                  value={paternalGeno}
                  onChange={(e) => setPaternalGeno(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                >
                  <option value="XN_Y">{lang === 'bn' ? 'স্বাভাবিক বাবা (Xᴺ Y)' : 'Normal Father (Xᴺ Y)'}</option>
                  <option value="Xn_Y">{lang === 'bn' ? 'বর্ণান্ধ/আক্রান্ত বাবা (Xⁿ Y)' : 'Affected Father (Xⁿ Y)'}</option>
                </select>
              </div>

              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                <p>• <strong>Xᴺ:</strong> {lang === 'bn' ? 'স্বাভাবিক প্রকট অ্যালিল' : 'Normal dominant allele'}</p>
                <p>• <strong>Xⁿ:</strong> {lang === 'bn' ? 'বর্ণান্ধ/হিমোফিলিক প্রচ্ছন্ন অ্যালিল' : 'Mutant recessive allele'}</p>
                <p>• <strong>Y:</strong> {lang === 'bn' ? 'পুরুষ লিঙ্গ নির্ধারক ক্রোমোজোম (কোনো অ্যালিল নেই)' : 'Male sex chromosome (no allele)'}</p>
              </div>
            </div>

            {/* Sex-Linked Punnett Grid & Stats */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">
                  {lang === 'bn' ? 'অপত্য বংশধরের পুনেট স্কয়ার (Sex-Linked Grid)' : 'Sex-Linked Offspring Grid (2 x 2)'}
                </h4>

                <div className="max-w-xs mx-auto">
                  <table className="w-full border-collapse text-center text-xs font-mono">
                    <thead>
                      <tr>
                        <th className="p-2 border border-slate-800 bg-slate-950 text-slate-500">মা \ বাবা</th>
                        <th className="p-2 border border-slate-800 bg-blue-500/10 text-blue-300 font-bold">
                          {sexRes.paternalGametes[0] === 'XN' ? 'Xᴺ' : 'Xⁿ'}
                        </th>
                        <th className="p-2 border border-slate-800 bg-blue-500/10 text-blue-300 font-bold">Y</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-slate-800 bg-pink-500/10 text-pink-300 font-bold">
                          {sexRes.maternalGametes[0] === 'XN' ? 'Xᴺ' : 'Xⁿ'}
                        </td>
                        <td className="p-3 border border-slate-800 bg-slate-950">
                          <span className="font-bold text-white block">{sexRes.grid[0][0].genotype}</span>
                          <span className="text-[10px] text-pink-400 block mt-0.5">{sexRes.grid[0][0].trait}</span>
                        </td>
                        <td className="p-3 border border-slate-800 bg-slate-950">
                          <span className="font-bold text-white block">{sexRes.grid[0][1].genotype}</span>
                          <span className="text-[10px] text-blue-400 block mt-0.5">{sexRes.grid[0][1].trait}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-slate-800 bg-pink-500/10 text-pink-300 font-bold">
                          {sexRes.maternalGametes[1] === 'XN' ? 'Xᴺ' : 'Xⁿ'}
                        </td>
                        <td className="p-3 border border-slate-800 bg-slate-950">
                          <span className="font-bold text-white block">{sexRes.grid[1][0].genotype}</span>
                          <span className="text-[10px] text-pink-400 block mt-0.5">{sexRes.grid[1][0].trait}</span>
                        </td>
                        <td className="p-3 border border-slate-800 bg-slate-950">
                          <span className="font-bold text-white block">{sexRes.grid[1][1].genotype}</span>
                          <span className="text-[10px] text-blue-400 block mt-0.5">{sexRes.grid[1][1].trait}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Segregated Offspring Statistics */}
                <div className="grid grid-cols-2 gap-3 mt-5 text-xs">
                  <div className="p-3 bg-pink-950/30 rounded-xl border border-pink-800/40 space-y-1">
                    <span className="font-bold text-pink-300 block">{lang === 'bn' ? 'কন্যা সন্তান (Daughters):' : 'Daughters:'}</span>
                    <p className="text-slate-300">• স্বাভাবিক: {sexRes.daughterStats.normalPct}%</p>
                    <p className="text-slate-300">• বাহক (সুস্থ): {sexRes.daughterStats.carrierPct}%</p>
                    <p className="text-slate-300">• আক্রান্ত: {sexRes.daughterStats.affectedPct}%</p>
                  </div>
                  <div className="p-3 bg-blue-950/30 rounded-xl border border-blue-800/40 space-y-1">
                    <span className="font-bold text-blue-300 block">{lang === 'bn' ? 'পুত্র সন্তান (Sons):' : 'Sons:'}</span>
                    <p className="text-slate-300">• স্বাভাবিক: {sexRes.sonStats.normalPct}%</p>
                    <p className="text-slate-300">• আক্রান্ত: {sexRes.sonStats.affectedPct}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Derivation */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {lang === 'bn' ? 'বংশগতিধারা বিশ্লেষণ ও ক্রিস-ক্রস ইনহেরিটেন্স' : 'Criss-Cross Inheritance Breakdown'}
            </h4>
            <div className="overflow-x-auto py-2">
              <Latex math={sexRes.stepsLatex} />
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: TROPHIC ENERGY (LINDEMAN 10%) */}
      {activeTab === 'trophic_energy' && trophRes && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Input Controls */}
            <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <TreePine className="w-4 h-4 text-green-400" />
                {lang === 'bn' ? 'বাস্তুতন্ত্রের প্রাথমিক শক্তি' : 'Producer Energy Input'}
              </h3>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  {lang === 'bn' ? 'উৎপাদকের মোট শক্তি (Producers - Level 1):' : 'Total Energy of Producers (Level 1):'}
                </label>
                <input
                  type="number"
                  value={trophicEnergy}
                  onChange={(e) => setTrophicEnergy(Math.max(1, parseFloat(e.target.value) || 1000))}
                  step="100"
                  min="1"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  {lang === 'bn' ? 'শক্তির একক:' : 'Energy Unit:'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTrophicUnit('J')}
                    className={`py-2 rounded-xl text-xs font-semibold border transition ${
                      trophicUnit === 'J'
                        ? 'bg-green-500/20 text-green-300 border-green-500/40'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {lang === 'bn' ? 'জুল (Joules - J)' : 'Joules (J)'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setTrophicUnit('kcal')}
                    className={`py-2 rounded-xl text-xs font-semibold border transition ${
                      trophicUnit === 'kcal'
                        ? 'bg-green-500/20 text-green-300 border-green-500/40'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {lang === 'bn' ? 'কিলো-ক্যালরি (kcal)' : 'Kilocalories (kcal)'}
                  </button>
                </div>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1">
                <p>💡 <strong>{lang === 'bn' ? 'লিণ্ডেম্যানের ১০% নীতি:' : "Lindeman's 10% Rule:"}</strong></p>
                <p className="leading-relaxed">
                  {lang === 'bn'
                    ? 'প্রতিটি ট্রফিক লেভেলে খাদ্যশক্তির প্রায় ৯০% শক্তি শ্বসন ও বর্জ্য উৎপাদনে ব্যয় হয়ে পরিবেশে তাপ হিসেবে বিনষ্ট হয়; মাত্র ১০% পরবর্তী স্তরে স্থানান্তরিত হয়।'
                    : 'At each trophic transition, approximately 90% of energy is dissipated as metabolic heat; only 10% is fixed as consumer biomass.'}
                </p>
              </div>
            </div>

            {/* Pyramid Visualization */}
            <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 text-center">
                {lang === 'bn' ? 'বাস্তুতান্ত্রিক শক্তির পিরামিড (Pyramid of Energy)' : 'Ecological Pyramid of Energy (Trophic Levels)'}
              </h4>

              {/* Stacked Bars from Top (Level 4) to Bottom (Level 1) */}
              <div className="space-y-2.5 max-w-md mx-auto pt-2">
                {/* Level 4: Apex Predators */}
                <div className="w-1/3 mx-auto p-2 bg-emerald-400/20 border border-emerald-400/50 rounded-xl text-center shadow-sm">
                  <span className="text-[11px] font-bold text-emerald-300 block">{lang === 'bn' ? 'সর্বোচ্চ খাদক (Level 4)' : 'Apex (Level 4)'}</span>
                  <span className="text-xs font-mono font-extrabold text-white">{trophRes.levels[3].energy} {trophicUnit} (0.1%)</span>
                </div>

                {/* Level 3: Secondary */}
                <div className="w-1/2 mx-auto p-2 bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-center shadow-sm">
                  <span className="text-[11px] font-bold text-emerald-300 block">{lang === 'bn' ? 'গৌণ খাদক (Level 3)' : 'Carnivores (Level 3)'}</span>
                  <span className="text-xs font-mono font-extrabold text-white">{trophRes.levels[2].energy} {trophicUnit} (1%)</span>
                </div>

                {/* Level 2: Primary */}
                <div className="w-3/4 mx-auto p-2.5 bg-emerald-600/20 border border-emerald-600/50 rounded-xl text-center shadow-sm">
                  <span className="text-[11px] font-bold text-emerald-200 block">{lang === 'bn' ? 'তৃণভোজী খাদক (Level 2)' : 'Herbivores (Level 2)'}</span>
                  <span className="text-xs font-mono font-extrabold text-white">{trophRes.levels[1].energy} {trophicUnit} (10%)</span>
                </div>

                {/* Level 1: Producers */}
                <div className="w-full p-3 bg-emerald-700/30 border border-emerald-600/60 rounded-xl text-center shadow-md">
                  <span className="text-xs font-bold text-emerald-100 block">{lang === 'bn' ? 'উৎপাদক সবুজ উদ্ভিদ (Level 1)' : 'Autotrophs / Producers (Level 1)'}</span>
                  <span className="text-sm font-mono font-extrabold text-white">{trophRes.levels[0].energy} {trophicUnit} (100%)</span>
                </div>
              </div>

              {/* Heat loss tally */}
              <div className="mt-4 pt-3 border-t border-slate-800 text-center text-xs text-slate-400">
                <span>{lang === 'bn' ? 'মোট বিনষ্ট তাপশক্তি:' : 'Total Dissipated Energy:'} </span>
                <span className="font-mono font-bold text-amber-400">{trophRes.totalHeatLoss} {trophicUnit} (99.9%)</span>
              </div>
            </div>
          </div>

          {/* Derivation */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {lang === 'bn' ? 'লিণ্ডেম্যানের ১০% সূত্রের গাণিতিক ধাপ' : "Mathematical Formulation of Lindeman's Efficiency"}
            </h4>
            <div className="overflow-x-auto py-2">
              <Latex math={trophRes.stepsLatex} />
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: BLOOD GROUP COMPATIBILITY */}
      {activeTab === 'blood_matching' && bloodRes && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Selectors */}
            <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Droplet className="w-4 h-4 text-red-400" />
                {lang === 'bn' ? 'রক্তের গ্রুপ নির্বাচন' : 'Select Blood Types'}
              </h3>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  {lang === 'bn' ? 'রক্তদাতার গ্রুপ (Donor Blood Group):' : 'Donor Blood Group:'}
                </label>
                <select
                  value={donorGroup}
                  onChange={(e) => setDonorGroup(e.target.value as BloodType)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white font-mono font-bold focus:ring-2 focus:ring-red-500 focus:outline-none"
                >
                  {Object.keys(BLOOD_GROUPS).map((bg) => (
                    <option key={bg} value={bg}>
                      {bg}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  {lang === 'bn' ? 'গ্রহীতার গ্রুপ (Recipient Blood Group):' : 'Recipient Blood Group:'}
                </label>
                <select
                  value={recipientGroup}
                  onChange={(e) => setRecipientGroup(e.target.value as BloodType)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white font-mono font-bold focus:ring-2 focus:ring-red-500 focus:outline-none"
                >
                  {Object.keys(BLOOD_GROUPS).map((bg) => (
                    <option key={bg} value={bg}>
                      {bg}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs text-slate-300">
                <p>• <strong>O- :</strong> {lang === 'bn' ? 'সার্বজনীন দাতা (Universal Donor)' : 'Universal Donor'}</p>
                <p>• <strong>AB+ :</strong> {lang === 'bn' ? 'সার্বজনীন গ্রহীতা (Universal Recipient)' : 'Universal Recipient'}</p>
              </div>
            </div>

            {/* Compatibility Badge & Clinical Info */}
            <div className="lg:col-span-7 space-y-4">
              <div
                className={`rounded-2xl p-6 border flex items-center gap-4 transition ${
                  bloodRes.isCompatible
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : 'bg-red-500/10 border-red-500/30'
                }`}
              >
                {bloodRes.isCompatible ? (
                  <ShieldCheck className="w-12 h-12 text-emerald-400 shrink-0" />
                ) : (
                  <ShieldAlert className="w-12 h-12 text-red-400 shrink-0" />
                )}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider block opacity-80">
                    {bloodRes.isCompatible
                      ? lang === 'bn' ? 'রক্ত পরিসঞ্চালন নিরাপদ' : 'Compatible Transfusion'
                      : lang === 'bn' ? 'রক্তদান মারাত্মক ঝুঁকিপূর্ণ (অসামঞ্জস্যপূর্ণ)' : 'Incompatible Transfusion Risk'}
                  </span>
                  <div className="text-2xl font-black text-white font-mono mt-1">
                    {donorGroup} <ArrowRight className="inline w-5 h-5 text-slate-400" /> {recipientGroup}
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {lang === 'bn' ? bloodRes.explanationBn : bloodRes.explanationEn}
                  </p>
                </div>
              </div>

              {/* Antigens vs Antibodies Breakdown */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-1">
                  <span className="font-bold text-slate-400 block">{lang === 'bn' ? `দাতার লোহিত কণিকায় অ্যান্টিজেন (${donorGroup}):` : `Donor Antigens (${donorGroup}):`}</span>
                  <p className="text-white font-mono font-semibold">{bloodRes.donorAntigens.join(', ')}</p>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-1">
                  <span className="font-bold text-slate-400 block">{lang === 'bn' ? `গ্রহীতার রক্তরসে অ্যান্টিবডি (${recipientGroup}):` : `Recipient Antibodies (${recipientGroup}):`}</span>
                  <p className="text-white font-mono font-semibold">{bloodRes.recipientAntibodies.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
