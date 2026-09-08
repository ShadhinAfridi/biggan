import { RevisionTracker } from '../../components/tools/RevisionTracker';
import React, { useState, useEffect } from 'react';
import {
  Calculator,
  RotateCcw,
  Copy,
  Check,
  AlertCircle,
  Zap,
  Activity,
  Waves,
  Eye,
  Flame,
  Gauge,
  Magnet,
  Atom,
  ChevronRight,
  BookOpen,
  ArrowRightLeft,
} from 'lucide-react';
import { Latex } from '../../components/math/Latex';
import {
  calcVernierConstant,
  calcSlideCalipers,
  calcScrewGaugeLeastCount,
  calcScrewGaugeReading,
  calcSphereVolume,
  calcMotionEquation,
  calcVerticalProjection,
  calcNewtonSecondLaw,
  calcMomentumConservation,
  calcGravitationalForce,
  calcWork,
  calcKineticEnergy,
  calcPotentialEnergy,
  calcPowerAndEfficiency,
  calcPressure,
  calcLiquidPressure,
  calcHydraulicPress,
  calcYoungsModulus,
  convertTemperature,
  calcThermalExpansion,
  calcSensibleHeat,
  calcLatentHeat,
  calcWaveSpeed,
  calcSpeedOfSoundTemp,
  calcEchoDistance,
  calcMirrorEquation,
  calcSnellsLaw,
  calcCriticalAngle,
  calcLensEquation,
  calcCoulombsLaw,
  calcElectricFieldAndPotential,
  calcCapacitance,
  calcOhmsLaw,
  calcResistivityAndResistance,
  calcEquivalentResistance,
  calcElectricityBill,
  calcTransformer,
  calcMassEnergyEquivalence,
  calcRadioactiveDecay,
  type PhysicsResult,
} from './engine';
import { PHYSICAL_CONSTANTS } from './constants';

interface Props {
  lang?: 'bn' | 'en';
}

type ChapterId =
  | 'ch1'
  | 'ch2'
  | 'ch3'
  | 'ch4'
  | 'ch5'
  | 'ch6'
  | 'ch7'
  | 'ch8'
  | 'ch9'
  | 'ch10'
  | 'ch11'
  | 'ch12'
  | 'ch13';

interface ChapterTab {
  id: ChapterId;
  num: number;
  titleBn: string;
  titleEn: string;
  icon: React.ReactNode;
}


const ForceVectorDiagram: React.FC<{ m: number; a: number; lang?: 'bn' | 'en' }> = ({ m, a, lang = 'bn' }) => {
  const force = m * a;
  const isPositive = force >= 0;
  const absForce = Math.abs(force);
  const arrowLength = Math.min(Math.max(absForce * 1.5, 30), 90);

  return (
    <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 space-y-2 mt-3">
      <div className="flex items-center justify-between text-[11px] text-slate-400">
        <span className="font-semibold text-amber-300">
          {lang === 'bn' ? 'বল ও ত্বরণ ভেক্টর চিত্র (Force Vector Diagram)' : 'Force & Acceleration Vector Diagram'}
        </span>
        <span className="font-mono text-[10px] text-slate-500">F = ma</span>
      </div>
      <div className="flex justify-center">
        <svg viewBox="0 0 320 120" className="w-full max-w-xs h-28 overflow-visible">
          <defs>
            <marker id="arrow-f" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
            </marker>
            <marker id="arrow-a" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
            </marker>
          </defs>
          <line x1="20" y1="90" x2="300" y2="90" stroke="#475569" strokeWidth="2" />
          {[30, 60, 90, 120, 150, 180, 210, 240, 270].map((x) => (
            <line key={x} x1={x} y1="90" x2={x - 10} y2="102" stroke="#334155" strokeWidth="1.5" />
          ))}
          <rect x="130" y="50" width="60" height="40" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <text x="160" y="74" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold" fontFamily="monospace">
            m = {m} kg
          </text>
          {absForce > 0 && (
            <>
              <line
                x1={isPositive ? 190 : 130}
                y1="70"
                x2={isPositive ? 190 + arrowLength : 130 - arrowLength}
                y2="70"
                stroke="#f59e0b"
                strokeWidth="2.5"
                markerEnd="url(#arrow-f)"
              />
              <text
                x={isPositive ? 190 + arrowLength / 2 : 130 - arrowLength / 2}
                y="62"
                textAnchor="middle"
                fill="#f59e0b"
                fontSize="10"
                fontWeight="bold"
                fontFamily="monospace"
              >
                F = {force.toFixed(1)} N
              </text>
              {a !== 0 && (
                <>
                  <line
                    x1="130"
                    y1="36"
                    x2={isPositive ? 130 + Math.min(Math.abs(a) * 8 + 20, 60) : 130 - Math.min(Math.abs(a) * 8 + 20, 60)}
                    y2="36"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                    markerEnd="url(#arrow-a)"
                  />
                  <text
                    x="160"
                    y="30"
                    textAnchor="middle"
                    fill="#38bdf8"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    a = {a} m/s²
                  </text>
                </>
              )}
            </>
          )}
          <line x1="160" y1="50" x2="160" y2="24" stroke="#64748b" strokeWidth="1.5" />
          <line x1="160" y1="90" x2="160" y2="114" stroke="#64748b" strokeWidth="1.5" />
          <text x="160" y="20" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">N</text>
          <text x="160" y="116" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">W=mg</text>
        </svg>
      </div>

    </div>
  );
};

export const PhysicsCalculator: React.FC<Props> = ({ lang = 'bn' }) => {
  const [activeChapter, setActiveChapter] = useState<ChapterId>('ch2');
  const [copied, setCopied] = useState(false);

  // Global settings
  const [gValue, setGValue] = useState<number>(PHYSICAL_CONSTANTS.G_STANDARD);
  const [useSimpleK, setUseSimpleK] = useState<boolean>(true);

  // Chapter 1 State (Measurement)
  const [ch1SubTab, setCh1SubTab] = useState<'vernier' | 'calipers' | 'screw' | 'sphere'>('calipers');
  const [ch1S, setCh1S] = useState<number>(1);
  const [ch1N, setCh1N] = useState<number>(10);
  const [ch1M, setCh1M] = useState<number>(12);
  const [ch1V, setCh1V] = useState<number>(6);
  const [ch1VC, setCh1VC] = useState<number>(0.1);
  const [ch1E, setCh1E] = useState<number>(0);
  const [ch1P, setCh1P] = useState<number>(1);
  const [ch1CircN, setCh1CircN] = useState<number>(100);
  const [ch1Llin, setCh1Llin] = useState<number>(5);
  const [ch1Cscale, setCh1Cscale] = useState<number>(45);
  const [ch1LC, setCh1LC] = useState<number>(0.01);
  const [ch1Radius, setCh1Radius] = useState<number>(3);

  // Chapter 2 State (Motion)
  const [ch2SubTab, setCh2SubTab] = useState<'motion' | 'vertical'>('motion');
  const [ch2SolveFor, setCh2SolveFor] = useState<'v' | 's' | 'a' | 't'>('v');
  const [ch2U, setCh2U] = useState<number>(10);
  const [ch2V, setCh2V] = useState<number>(20);
  const [ch2A, setCh2A] = useState<number>(2);
  const [ch2T, setCh2T] = useState<number>(5);
  const [ch2S, setCh2S] = useState<number>(75);
  const [ch2VertU, setCh2VertU] = useState<number>(19.6);

  // Chapter 3 State (Force)
  const [ch3SubTab, setCh3SubTab] = useState<'f_ma' | 'collision' | 'gravitation'>('f_ma');
  const [ch3M, setCh3M] = useState<number>(5);
  const [ch3A, setCh3A] = useState<number>(3);
  const [ch3M1, setCh3M1] = useState<number>(2);
  const [ch3U1, setCh3U1] = useState<number>(4);
  const [ch3M2, setCh3M2] = useState<number>(3);
  const [ch3U2, setCh3U2] = useState<number>(-1);
  const [ch3GravM1, setCh3GravM1] = useState<number>(1000);
  const [ch3GravM2, setCh3GravM2] = useState<number>(2000);
  const [ch3GravD, setCh3GravD] = useState<number>(5);

  // Chapter 4 State (Work, Power, Energy)
  const [ch4SubTab, setCh4SubTab] = useState<'work' | 'kinetic' | 'potential' | 'efficiency'>('work');
  const [ch4F, setCh4F] = useState<number>(100);
  const [ch4Dist, setCh4Dist] = useState<number>(5);
  const [ch4Theta, setCh4Theta] = useState<number>(60);
  const [ch4MassK, setCh4MassK] = useState<number>(4);
  const [ch4VelK, setCh4VelK] = useState<number>(5);
  const [ch4MassP, setCh4MassP] = useState<number>(10);
  const [ch4HeightP, setCh4HeightP] = useState<number>(5);
  const [ch4UsefulP, setCh4UsefulP] = useState<number>(800);
  const [ch4TotalP, setCh4TotalP] = useState<number>(1000);
  const [ch4TimeSec, setCh4TimeSec] = useState<number>(10);

  // Chapter 5 State (Pressure)
  const [ch5SubTab, setCh5SubTab] = useState<'pressure' | 'liquid' | 'hydraulic' | 'young'>('hydraulic');
  const [ch5F, setCh5F] = useState<number>(500);
  const [ch5A, setCh5A] = useState<number>(0.25);
  const [ch5H, setCh5H] = useState<number>(2);
  const [ch5Rho, setCh5Rho] = useState<number>(1000);
  const [ch5F1, setCh5F1] = useState<number>(50);
  const [ch5D1, setCh5D1] = useState<number>(2);
  const [ch5D2, setCh5D2] = useState<number>(10);
  const [ch5YF, setCh5YF] = useState<number>(100);
  const [ch5YL, setCh5YL] = useState<number>(2);
  const [ch5YA, setCh5YA] = useState<number>(0.001);
  const [ch5YDeltaL, setCh5YDeltaL] = useState<number>(0.002);

  // Chapter 6 State (Heat)
  const [ch6SubTab, setCh6SubTab] = useState<'temp' | 'expansion' | 'sensible' | 'latent'>('sensible');
  const [ch6TempC, setCh6TempC] = useState<number>(100);
  const [ch6ExpL1, setCh6ExpL1] = useState<number>(10);
  const [ch6ExpAlpha, setCh6ExpAlpha] = useState<number>(1.1e-5);
  const [ch6ExpDeltaT, setCh6ExpDeltaT] = useState<number>(50);
  const [ch6HeatM, setCh6HeatM] = useState<number>(2);
  const [ch6HeatS, setCh6HeatS] = useState<number>(4200);
  const [ch6HeatDeltaT, setCh6HeatDeltaT] = useState<number>(20);
  const [ch6LatentM, setCh6LatentM] = useState<number>(2);
  const [ch6LatentPhase, setCh6LatentPhase] = useState<'fusion' | 'vaporization'>('fusion');

  // Chapter 7 State (Waves & Sound)
  const [ch7SubTab, setCh7SubTab] = useState<'speed' | 'temp_sound' | 'echo'>('temp_sound');
  const [ch7Freq, setCh7Freq] = useState<number>(250);
  const [ch7Lambda, setCh7Lambda] = useState<number>(1.36);
  const [ch7TempC, setCh7TempC] = useState<number>(30);
  const [ch7EchoSpeed, setCh7EchoSpeed] = useState<number>(332);
  const [ch7EchoTime, setCh7EchoTime] = useState<number>(0.2);

  // Chapter 8 State (Reflection)
  const [ch8Type, setCh8Type] = useState<'concave' | 'convex'>('concave');
  const [ch8U, setCh8U] = useState<number>(30);
  const [ch8F, setCh8F] = useState<number>(15);
  const [ch8Ho, setCh8Ho] = useState<number>(5);

  // Chapter 9 State (Refraction)
  const [ch9SubTab, setCh9SubTab] = useState<'snell' | 'critical' | 'lens'>('lens');
  const [ch9Eta1, setCh9Eta1] = useState<number>(1.0);
  const [ch9Theta1, setCh9Theta1] = useState<number>(30);
  const [ch9Eta2, setCh9Eta2] = useState<number>(1.33);
  const [ch9Dense, setCh9Dense] = useState<number>(1.33);
  const [ch9Rare, setCh9Rare] = useState<number>(1.0);
  const [ch9LensType, setCh9LensType] = useState<'convex' | 'concave'>('convex');
  const [ch9LensU, setCh9LensU] = useState<number>(30);
  const [ch9LensF, setCh9LensF] = useState<number>(20);

  // Chapter 10 State (Static Electricity)
  const [ch10SubTab, setCh10SubTab] = useState<'coulomb' | 'field' | 'capacitance'>('coulomb');
  const [ch10Q1, setCh10Q1] = useState<number>(2e-6);
  const [ch10Q2, setCh10Q2] = useState<number>(3e-6);
  const [ch10R, setCh10R] = useState<number>(0.1);
  const [ch10Q, setCh10Q] = useState<number>(4e-6);
  const [ch10Dist, setCh10Dist] = useState<number>(0.2);
  const [ch10CapQ, setCh10CapQ] = useState<number>(10e-6);
  const [ch10CapV, setCh10CapV] = useState<number>(5);

  // Chapter 11 State (Current Electricity)
  const [ch11SubTab, setCh11SubTab] = useState<'ohm' | 'resistivity' | 'equivalent' | 'bill'>('bill');
  const [ch11V, setCh11V] = useState<number>(220);
  const [ch11R, setCh11R] = useState<number>(44);
  const [ch11Rho, setCh11Rho] = useState<number>(1.7e-8);
  const [ch11L, setCh11L] = useState<number>(100);
  const [ch11Area, setCh11Area] = useState<number>(1e-6);
  const [ch11RList, setCh11RList] = useState<string>('10, 20, 30');
  const [ch11EqType, setCh11EqType] = useState<'series' | 'parallel'>('parallel');
  const [ch11BillWatts, setCh11BillWatts] = useState<number>(1000);
  const [ch11BillHours, setCh11BillHours] = useState<number>(5);
  const [ch11BillDays, setCh11BillDays] = useState<number>(30);
  const [ch11BillRate, setCh11BillRate] = useState<number>(7.5);

  // Chapter 12 State (Magnetic Effects)
  const [ch12Vp, setCh12Vp] = useState<number>(220);
  const [ch12Np, setCh12Np] = useState<number>(100);
  const [ch12Ns, setCh12Ns] = useState<number>(500);
  const [ch12Ip, setCh12Ip] = useState<number>(10);
  const [ch12Eff, setCh12Eff] = useState<number>(100);

  // Chapter 13 State (Radioactivity)
  const [ch13SubTab, setCh13SubTab] = useState<'mass_energy' | 'decay'>('decay');
  const [ch13MassKg, setCh13MassKg] = useState<number>(0.001);
  const [ch13N0, setCh13N0] = useState<number>(100);
  const [ch13Thalf, setCh13Thalf] = useState<number>(10);
  const [ch13T, setCh13T] = useState<number>(30);

  // Deep-linking with URL hash (#ch1 to #ch13)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('chapter-')) {
        const num = hash.replace('chapter-', '');
        const mappedId = `ch${num}` as ChapterId;
        setActiveChapter(mappedId);
      } else if (hash.startsWith('ch')) {
        setActiveChapter(hash as ChapterId);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const chapters: ChapterTab[] = [
    { id: 'ch1', num: 1, titleBn: 'ভৌত রাশি ও পরিমাপ', titleEn: 'Physical Quantities & Measurement', icon: <Gauge className="w-4 h-4" /> },
    { id: 'ch2', num: 2, titleBn: 'গতি (Motion)', titleEn: 'Motion & Kinematics', icon: <Activity className="w-4 h-4" /> },
    { id: 'ch3', num: 3, titleBn: 'বল (Force)', titleEn: 'Force & Momentum', icon: <Zap className="w-4 h-4" /> },
    { id: 'ch4', num: 4, titleBn: 'কাজ, ক্ষমতা ও শক্তি', titleEn: 'Work, Power & Energy', icon: <Flame className="w-4 h-4" /> },
    { id: 'ch5', num: 5, titleBn: 'পদার্থের অবস্থা ও চাপ', titleEn: 'State of Matter & Pressure', icon: <Gauge className="w-4 h-4" /> },
    { id: 'ch6', num: 6, titleBn: 'বস্তুর উপর তাপের প্রভাব', titleEn: 'Effect of Heat on Matter', icon: <Flame className="w-4 h-4" /> },
    { id: 'ch7', num: 7, titleBn: 'তরঙ্গ ও শব্দ', titleEn: 'Waves & Sound', icon: <Waves className="w-4 h-4" /> },
    { id: 'ch8', num: 8, titleBn: 'আলোর প্রতিফলন', titleEn: 'Reflection of Light', icon: <Eye className="w-4 h-4" /> },
    { id: 'ch9', num: 9, titleBn: 'আলোর প্রতিসরণ', titleEn: 'Refraction of Light', icon: <Eye className="w-4 h-4" /> },
    { id: 'ch10', num: 10, titleBn: 'স্থির তড়িৎ', titleEn: 'Static Electricity', icon: <Zap className="w-4 h-4" /> },
    { id: 'ch11', num: 11, titleBn: 'চল তড়িৎ', titleEn: 'Current Electricity', icon: <Zap className="w-4 h-4" /> },
    { id: 'ch12', num: 12, titleBn: 'বিদ্যুতের চৌম্বক ক্রিয়া', titleEn: 'Magnetic Effects of Current', icon: <Magnet className="w-4 h-4" /> },
    { id: 'ch13', num: 13, titleBn: 'তেজস্ক্রিয়তা ও ইলেকট্রনিক্স', titleEn: 'Radioactivity & Electronics', icon: <Atom className="w-4 h-4" /> },
  ];

  // Dispatched Result per Active Chapter
  let activeResult: PhysicsResult = { success: false, steps: [] };

  switch (activeChapter) {
    case 'ch1':
      if (ch1SubTab === 'vernier') activeResult = calcVernierConstant(ch1S, ch1N);
      else if (ch1SubTab === 'calipers') activeResult = calcSlideCalipers(ch1M, ch1V, ch1VC, ch1E);
      else if (ch1SubTab === 'screw') activeResult = calcScrewGaugeReading(ch1Llin, ch1Cscale, ch1LC, ch1E);
      else activeResult = calcSphereVolume(ch1Radius);
      break;
    case 'ch2':
      if (ch2SubTab === 'motion') {
        activeResult = calcMotionEquation(ch2SolveFor, { u: ch2U, v: ch2V, a: ch2A, t: ch2T, s: ch2S });
      } else {
        activeResult = calcVerticalProjection(ch2VertU, gValue);
      }
      break;
    case 'ch3':
      if (ch3SubTab === 'f_ma') activeResult = calcNewtonSecondLaw('F', { m: ch3M, a: ch3A });
      else if (ch3SubTab === 'collision') activeResult = calcMomentumConservation(ch3M1, ch3U1, ch3M2, ch3U2);
      else activeResult = calcGravitationalForce(ch3GravM1, ch3GravM2, ch3GravD);
      break;
    case 'ch4':
      if (ch4SubTab === 'work') activeResult = calcWork(ch4F, ch4Dist, ch4Theta);
      else if (ch4SubTab === 'kinetic') activeResult = calcKineticEnergy('Ek', { m: ch4MassK, v: ch4VelK });
      else if (ch4SubTab === 'potential') activeResult = calcPotentialEnergy(ch4MassP, ch4HeightP, gValue);
      else activeResult = calcPowerAndEfficiency(ch4UsefulP, ch4TotalP, ch4TimeSec);
      break;
    case 'ch5':
      if (ch5SubTab === 'pressure') activeResult = calcPressure(ch5F, ch5A);
      else if (ch5SubTab === 'liquid') activeResult = calcLiquidPressure(ch5H, ch5Rho, gValue);
      else if (ch5SubTab === 'hydraulic') activeResult = calcHydraulicPress(ch5F1, ch5D1, ch5D2, true);
      else activeResult = calcYoungsModulus(ch5YF, ch5YL, ch5YA, ch5YDeltaL);
      break;
    case 'ch6':
      if (ch6SubTab === 'temp') activeResult = convertTemperature(ch6TempC, 'C', useSimpleK);
      else if (ch6SubTab === 'expansion') activeResult = calcThermalExpansion('linear', ch6ExpL1, ch6ExpAlpha, ch6ExpDeltaT);
      else if (ch6SubTab === 'sensible') activeResult = calcSensibleHeat(ch6HeatM, ch6HeatS, ch6HeatDeltaT);
      else activeResult = calcLatentHeat(ch6LatentM, ch6LatentPhase);
      break;
    case 'ch7':
      if (ch7SubTab === 'speed') activeResult = calcWaveSpeed(ch7Freq, ch7Lambda);
      else if (ch7SubTab === 'temp_sound') activeResult = calcSpeedOfSoundTemp(ch7TempC);
      else activeResult = calcEchoDistance(ch7EchoSpeed, ch7EchoTime, 'd');
      break;
    case 'ch8':
      activeResult = calcMirrorEquation(ch8Type, ch8U, ch8F, ch8Ho);
      break;
    case 'ch9':
      if (ch9SubTab === 'snell') activeResult = calcSnellsLaw(ch9Eta1, ch9Theta1, ch9Eta2);
      else if (ch9SubTab === 'critical') activeResult = calcCriticalAngle(ch9Dense, ch9Rare);
      else activeResult = calcLensEquation(ch9LensType, ch9LensU, ch9LensF);
      break;
    case 'ch10':
      if (ch10SubTab === 'coulomb') activeResult = calcCoulombsLaw(ch10Q1, ch10Q2, ch10R);
      else if (ch10SubTab === 'field') activeResult = calcElectricFieldAndPotential(ch10Q, ch10Dist);
      else activeResult = calcCapacitance(ch10CapQ, ch10CapV);
      break;
    case 'ch11':
      if (ch11SubTab === 'ohm') activeResult = calcOhmsLaw('I', { V: ch11V, R: ch11R });
      else if (ch11SubTab === 'resistivity') activeResult = calcResistivityAndResistance(ch11Rho, ch11L, ch11Area);
      else if (ch11SubTab === 'equivalent') {
        const parsed = ch11RList.split(',').map((x) => parseFloat(x.trim())).filter((x) => !isNaN(x) && x > 0);
        activeResult = calcEquivalentResistance(ch11EqType, parsed);
      } else {
        activeResult = calcElectricityBill(ch11BillWatts, ch11BillHours, ch11BillDays, ch11BillRate);
      }
      break;
    case 'ch12':
      activeResult = calcTransformer(ch12Vp, ch12Np, ch12Ns, ch12Ip, ch12Eff);
      break;
    case 'ch13':
      if (ch13SubTab === 'mass_energy') activeResult = calcMassEnergyEquivalence(ch13MassKg);
      else activeResult = calcRadioactiveDecay(ch13N0, ch13Thalf, ch13T);
      break;
  }

  const handleCopy = () => {
    if (activeResult.value !== undefined) {
      navigator.clipboard.writeText(`${activeResult.value} ${activeResult.unit || ''}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
      {/* Top Header & Global Constants Controls */}
      <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border-b border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-1">
            <Calculator className="w-4 h-4" />
            <span>{lang === 'bn' ? 'এসএসসি পদার্থবিজ্ঞান পূর্ণাঙ্গ সমাধান ইঞ্জিন' : 'SSC Physics Unified Solution Suite'}</span>
            <span className="px-2 py-0.5 rounded-full text-xs bg-amber-500/10 border border-amber-500/20 text-amber-300">
              NCTB 9-10
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {lang === 'bn' ? '১৩টি অধ্যায়ের সূত্র ও সমাধান ক্যালকুলেটর' : '13-Chapter Interactive Physics Solver'}
          </h2>
        </div>

        {/* Global toggles: Gravity and Kelvin precision */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1.5 rounded-lg border border-slate-700">
            <span className="text-slate-400 font-medium">অভিকর্ষজ ত্বরণ g:</span>
            <select
              value={gValue}
              onChange={(e) => setGValue(parseFloat(e.target.value))}
              aria-label="Acceleration due to gravity"
              className="bg-slate-900 text-amber-300 font-bold border-0 rounded px-1.5 py-0.5 cursor-pointer focus:ring-1 focus:ring-amber-400"
            >
              <option value={9.8}>9.8 m/s² (NCTB)</option>
              <option value={9.81}>9.81 m/s² (High Precision)</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1.5 rounded-lg border border-slate-700">
            <span className="text-slate-400 font-medium">কেলভিন স্কেল:</span>
            <button
              onClick={() => setUseSimpleK(!useSimpleK)}
              className="font-bold text-amber-300 hover:text-amber-200 transition"
              title="Toggle between C + 273 and C + 273.15"
            >
              {useSimpleK ? '+273 (পাঠ্যবই)' : '+273.15 (নিখুঁত)'}
            </button>
          </div>
        </div>
      </div>

      {/* Chapter Selection Tabs */}
      <div className="p-3 bg-slate-950/60 border-b border-slate-800 overflow-x-auto scrollbar-thin">
        {/* Mobile Dropdown */}
        <div className="md:hidden pb-1">
          <select
            value={activeChapter}
            onChange={(e) => setActiveChapter(e.target.value as ChapterId)}
            aria-label="Select chapter"
            className="w-full bg-slate-800 text-white font-medium p-2.5 rounded-xl border border-slate-700"
          >
            {chapters.map((ch) => (
              <option key={ch.id} value={ch.id}>
                {ch.num}. {lang === 'bn' ? ch.titleBn : ch.titleEn}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Horizontal Tabs */}
        <div className="hidden md:flex items-center gap-1.5 min-w-max">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => setActiveChapter(ch.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeChapter === ch.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 font-bold'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              <span>{ch.icon}</span>
              <span>{ch.num}. {lang === 'bn' ? ch.titleBn.split(' ')[0] : ch.titleEn.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Form Inputs & Formula Sub-Tabs (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Chapter Title Badge */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-sm font-bold text-amber-400">
              {chapters.find((c) => c.id === activeChapter)?.num}. {lang === 'bn' ? chapters.find((c) => c.id === activeChapter)?.titleBn : chapters.find((c) => c.id === activeChapter)?.titleEn}
            </span>
            <span className="text-xs text-slate-500 font-mono">ID: #{activeChapter}</span>
          </div>

          {/* CHAPTER 1 CONTROLS */}
          {activeChapter === 'ch1' && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'calipers', name: 'স্লাইড ক্যালিপার্স (L)' },
                  { id: 'vernier', name: 'ভার্নিয়ার ধ্রুবক (VC)' },
                  { id: 'screw', name: 'স্ক্রু গজ (d)' },
                  { id: 'sphere', name: 'গোলকের আয়তন (V)' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setCh1SubTab(st.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      ch1SubTab === st.id ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {st.name}
                  </button>
                ))}
              </div>

              {ch1SubTab === 'calipers' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">মূল স্কেল পাঠ M (mm)</label>
                    <input type="number" value={ch1M} onChange={(e) => setCh1M(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">ভার্নিয়ার সমপাতন V</label>
                    <input type="number" value={ch1V} onChange={(e) => setCh1V(parseInt(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">ভার্নিয়ার ধ্রুবক VC (mm)</label>
                    <input type="number" step="0.01" value={ch1VC} onChange={(e) => setCh1VC(parseFloat(e.target.value) || 0.1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">যান্ত্রিক ত্রুটি E (mm)</label>
                    <input type="number" step="0.01" value={ch1E} onChange={(e) => setCh1E(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch1SubTab === 'vernier' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">ক্ষুদ্রতম ঘর s (mm)</label>
                    <input type="number" value={ch1S} onChange={(e) => setCh1S(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">ভার্নিয়ার ভাগ সংখ্যা N</label>
                    <input type="number" value={ch1N} onChange={(e) => setCh1N(parseInt(e.target.value) || 10)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch1SubTab === 'screw' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">রৈখিক স্কেল পাঠ L (mm)</label>
                    <input type="number" value={ch1Llin} onChange={(e) => setCh1Llin(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">বৃত্তাকার স্কেল ভাগ C</label>
                    <input type="number" value={ch1Cscale} onChange={(e) => setCh1Cscale(parseInt(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">লঘিষ্ঠ গণন LC (mm)</label>
                    <input type="number" step="0.001" value={ch1LC} onChange={(e) => setCh1LC(parseFloat(e.target.value) || 0.01)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">শূন্য ত্রুটি E (mm)</label>
                    <input type="number" step="0.01" value={ch1E} onChange={(e) => setCh1E(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch1SubTab === 'sphere' && (
                <div>
                  <label className="text-xs text-slate-400">গোলকের ব্যাসার্ধ r (cm বা m)</label>
                  <input type="number" value={ch1Radius} onChange={(e) => setCh1Radius(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                </div>
              )}
            </div>
          )}

          {/* CHAPTER 2 CONTROLS */}
          {activeChapter === 'ch2' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setCh2SubTab('motion')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${ch2SubTab === 'motion' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                >
                  সরলরেখায় গতির সমীকরণাবলী
                </button>
                <button
                  onClick={() => setCh2SubTab('vertical')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${ch2SubTab === 'vertical' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                >
                  খাড়া নিক্ষিপ্ত বস্তু ও পড়ন্ত বস্তু
                </button>
              </div>

              {ch2SubTab === 'motion' ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 font-medium">কাঙ্ক্ষিত রাশি নির্ণয়:</span>
                    <select
                      value={ch2SolveFor}
                      onChange={(e) => setCh2SolveFor(e.target.value as any)}
                      aria-label="Motion solve variable"
                      className="bg-slate-950 text-amber-300 border border-slate-700 rounded px-2 py-1 text-xs"
                    >
                      <option value="v">শেষ বেগ v (m/s)</option>
                      <option value="s">দূরত্ব s (m)</option>
                      <option value="a">ত্বরণ a (m/s²)</option>
                      <option value="t">প্রয়োজনীয় সময় t (s)</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-400">আদি বেগ u (m/s)</label>
                      <input type="number" value={ch2U} onChange={(e) => setCh2U(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                    </div>
                    {ch2SolveFor !== 'v' && (
                      <div>
                        <label className="text-xs text-slate-400">শেষ বেগ v (m/s)</label>
                        <input type="number" value={ch2V} onChange={(e) => setCh2V(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                      </div>
                    )}
                    {ch2SolveFor !== 'a' && (
                      <div>
                        <label className="text-xs text-slate-400">ত্বরণ a (m/s²)</label>
                        <input type="number" value={ch2A} onChange={(e) => setCh2A(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                      </div>
                    )}
                    {ch2SolveFor !== 't' && (
                      <div>
                        <label className="text-xs text-slate-400">সময় t (s)</label>
                        <input type="number" value={ch2T} onChange={(e) => setCh2T(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <label className="text-xs text-slate-400">উর্ধ্বমুখী নিক্ষেপের আদি বেগ u (m/s)</label>
                  <input type="number" value={ch2VertU} onChange={(e) => setCh2VertU(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                </div>
              )}
            </div>
          )}

          {/* CHAPTER 3 CONTROLS */}
          {activeChapter === 'ch3' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                {[
                  { id: 'f_ma', name: 'নিউটনের ২য় সূত্র (F = ma)' },
                  { id: 'collision', name: 'ভরবেগের সংরক্ষণ ও সংঘর্ষ' },
                  { id: 'gravitation', name: 'মহাকর্ষ বল (F = G·m1m2/d²)' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setCh3SubTab(st.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${ch3SubTab === st.id ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                  >
                    {st.name}
                  </button>
                ))}
              </div>

              {ch3SubTab === 'f_ma' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-400">ভর m (kg)</label>
                      <input type="number" value={ch3M} onChange={(e) => setCh3M(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">ত্বরণ a (m/s²)</label>
                      <input type="number" value={ch3A} onChange={(e) => setCh3A(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                    </div>
                  </div>
                  <ForceVectorDiagram m={ch3M} a={ch3A} lang={lang} />
                </div>
              )}

              {ch3SubTab === 'collision' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">১ম বস্তুর ভর m1 (kg)</label>
                    <input type="number" value={ch3M1} onChange={(e) => setCh3M1(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">১ম বস্তুর আদি বেগ u1 (m/s)</label>
                    <input type="number" value={ch3U1} onChange={(e) => setCh3U1(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">২য় বস্তুর ভর m2 (kg)</label>
                    <input type="number" value={ch3M2} onChange={(e) => setCh3M2(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">২য় বস্তুর আদি বেগ u2 (m/s)</label>
                    <input type="number" value={ch3U2} onChange={(e) => setCh3U2(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch3SubTab === 'gravitation' && (
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">ভর m1 (kg)</label>
                    <input type="number" value={ch3GravM1} onChange={(e) => setCh3GravM1(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">ভর m2 (kg)</label>
                    <input type="number" value={ch3GravM2} onChange={(e) => setCh3GravM2(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">দূরত্ব d (m)</label>
                    <input type="number" value={ch3GravD} onChange={(e) => setCh3GravD(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CHAPTER 4 CONTROLS */}
          {activeChapter === 'ch4' && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'work', name: 'কৃতকাজ (W = F·s·cosθ)' },
                  { id: 'kinetic', name: 'গতিশক্তি (Ek = 0.5mv²)' },
                  { id: 'potential', name: 'বিভব শক্তি (Ep = mgh)' },
                  { id: 'efficiency', name: 'কর্মদক্ষতা ও ক্ষমতা (η)' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setCh4SubTab(st.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${ch4SubTab === st.id ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                  >
                    {st.name}
                  </button>
                ))}
              </div>

              {ch4SubTab === 'work' && (
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">প্রযুক্ত বল F (N)</label>
                    <input type="number" value={ch4F} onChange={(e) => setCh4F(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">সরণ s (m)</label>
                    <input type="number" value={ch4Dist} onChange={(e) => setCh4Dist(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">কোণ θ (ডিগ্রি)</label>
                    <input type="number" value={ch4Theta} onChange={(e) => setCh4Theta(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch4SubTab === 'kinetic' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">ভর m (kg)</label>
                    <input type="number" value={ch4MassK} onChange={(e) => setCh4MassK(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">বেগ v (m/s)</label>
                    <input type="number" value={ch4VelK} onChange={(e) => setCh4VelK(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch4SubTab === 'potential' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">ভর m (kg)</label>
                    <input type="number" value={ch4MassP} onChange={(e) => setCh4MassP(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">উচ্চতা h (m)</label>
                    <input type="number" value={ch4HeightP} onChange={(e) => setCh4HeightP(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch4SubTab === 'efficiency' && (
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">কার্যকর কাজ/ক্ষমতা</label>
                    <input type="number" value={ch4UsefulP} onChange={(e) => setCh4UsefulP(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">প্রদত্ত মোট কাজ/ক্ষমতা</label>
                    <input type="number" value={ch4TotalP} onChange={(e) => setCh4TotalP(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">সময় t (s)</label>
                    <input type="number" value={ch4TimeSec} onChange={(e) => setCh4TimeSec(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CHAPTER 5 CONTROLS */}
          {activeChapter === 'ch5' && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'hydraulic', name: 'হাইড্রলিক প্রেস (প্যাসকেল)' },
                  { id: 'liquid', name: 'তরলের চাপ (h·ρ·g)' },
                  { id: 'pressure', name: 'চাপের সংজ্ঞা (P = F/A)' },
                  { id: 'young', name: 'ইয়ং-এর গুণাঙ্ক (Y)' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setCh5SubTab(st.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${ch5SubTab === st.id ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                  >
                    {st.name}
                  </button>
                ))}
              </div>

              {ch5SubTab === 'hydraulic' && (
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">ছোট পিস্টনে বল F1 (N)</label>
                    <input type="number" value={ch5F1} onChange={(e) => setCh5F1(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">ছোট পিস্টন ব্যাস d1 (cm)</label>
                    <input type="number" value={ch5D1} onChange={(e) => setCh5D1(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">বড় পিস্টন ব্যাস d2 (cm)</label>
                    <input type="number" value={ch5D2} onChange={(e) => setCh5D2(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch5SubTab === 'liquid' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">গভীরতা h (m)</label>
                    <input type="number" value={ch5H} onChange={(e) => setCh5H(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">ঘনত্ব ρ (kg/m³, পানি=1000)</label>
                    <input type="number" value={ch5Rho} onChange={(e) => setCh5Rho(parseFloat(e.target.value) || 1000)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch5SubTab === 'pressure' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">প্রযুক্ত বল F (N)</label>
                    <input type="number" value={ch5F} onChange={(e) => setCh5F(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">ক্ষেত্রফল A (m²)</label>
                    <input type="number" value={ch5A} onChange={(e) => setCh5A(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch5SubTab === 'young' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">টান বল F (N)</label>
                    <input type="number" value={ch5YF} onChange={(e) => setCh5YF(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">আদি দৈর্ঘ্য L (m)</label>
                    <input type="number" value={ch5YL} onChange={(e) => setCh5YL(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">প্রস্থচ্ছেদের ক্ষেত্রফল A (m²)</label>
                    <input type="number" value={ch5YA} onChange={(e) => setCh5YA(parseFloat(e.target.value) || 0.001)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">দৈর্ঘ্য বৃদ্ধি ΔL (m)</label>
                    <input type="number" value={ch5YDeltaL} onChange={(e) => setCh5YDeltaL(parseFloat(e.target.value) || 0.001)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CHAPTER 6 CONTROLS */}
          {activeChapter === 'ch6' && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'sensible', name: 'শোষিত/বর্জিত তাপ (Q = msΔθ)' },
                  { id: 'temp', name: 'তাপমাত্রা রূপান্তর (C, F, K)' },
                  { id: 'expansion', name: 'কঠিনের প্রসারণ (α)' },
                  { id: 'latent', name: 'সুপ্ততাপ (Q = mL)' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setCh6SubTab(st.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${ch6SubTab === st.id ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                  >
                    {st.name}
                  </button>
                ))}
              </div>

              {ch6SubTab === 'sensible' && (
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">ভর m (kg)</label>
                    <input type="number" value={ch6HeatM} onChange={(e) => setCh6HeatM(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">আপেক্ষিক তাপ s (J/kg·K)</label>
                    <input type="number" value={ch6HeatS} onChange={(e) => setCh6HeatS(parseFloat(e.target.value) || 4200)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">তাপমাত্রা পরিবর্তন Δθ (°C)</label>
                    <input type="number" value={ch6HeatDeltaT} onChange={(e) => setCh6HeatDeltaT(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch6SubTab === 'temp' && (
                <div>
                  <label className="text-xs text-slate-400">সেলসিয়াস তাপমাত্রা (°C)</label>
                  <input type="number" value={ch6TempC} onChange={(e) => setCh6TempC(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                </div>
              )}

              {ch6SubTab === 'expansion' && (
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">আদি দৈর্ঘ্য L1 (m)</label>
                    <input type="number" value={ch6ExpL1} onChange={(e) => setCh6ExpL1(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">প্রসারণ সহগ α (K⁻¹)</label>
                    <input type="number" step="0.000001" value={ch6ExpAlpha} onChange={(e) => setCh6ExpAlpha(parseFloat(e.target.value) || 1.1e-5)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">তাপমাত্রা বৃদ্ধি Δθ (°C)</label>
                    <input type="number" value={ch6ExpDeltaT} onChange={(e) => setCh6ExpDeltaT(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch6SubTab === 'latent' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">ভর m (kg)</label>
                    <input type="number" value={ch6LatentM} onChange={(e) => setCh6LatentM(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">দশা রূপান্তর প্রকার</label>
                    <select
                      value={ch6LatentPhase}
                      onChange={(e) => setCh6LatentPhase(e.target.value as any)}
                      aria-label="Latent heat phase"
                      className="w-full bg-slate-950 text-amber-300 border border-slate-700 rounded-lg p-2 text-sm"
                    >
                      <option value="fusion">বরফ গলনের সুপ্ততাপ (Lf = 336,000 J/kg)</option>
                      <option value="vaporization">পানি বাষ্পীভবনের সুপ্ততাপ (Lv = 2,268,000 J/kg)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CHAPTER 7 CONTROLS */}
          {activeChapter === 'ch7' && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'temp_sound', name: 'তাপমাত্রায় শব্দের বেগ ও প্রতিধ্বনি' },
                  { id: 'speed', name: 'তরঙ্গ বেগ (v = f·λ)' },
                  { id: 'echo', name: 'প্রতিফলকের দূরত্ব (2d = vt)' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setCh7SubTab(st.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${ch7SubTab === st.id ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                  >
                    {st.name}
                  </button>
                ))}
              </div>

              {ch7SubTab === 'temp_sound' && (
                <div>
                  <label className="text-xs text-slate-400">বায়ুর তাপমাত্রা (°C)</label>
                  <input type="number" value={ch7TempC} onChange={(e) => setCh7TempC(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                </div>
              )}

              {ch7SubTab === 'speed' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">কম্পাঙ্ক f (Hz)</label>
                    <input type="number" value={ch7Freq} onChange={(e) => setCh7Freq(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">তরঙ্গদৈর্ঘ্য λ (m)</label>
                    <input type="number" value={ch7Lambda} onChange={(e) => setCh7Lambda(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch7SubTab === 'echo' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">শব্দের বেগ v (m/s)</label>
                    <input type="number" value={ch7EchoSpeed} onChange={(e) => setCh7EchoSpeed(parseFloat(e.target.value) || 332)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">প্রতিধ্বনি ফিরে আসার সময় t (s)</label>
                    <input type="number" step="0.01" value={ch7EchoTime} onChange={(e) => setCh7EchoTime(parseFloat(e.target.value) || 0.1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CHAPTER 8 CONTROLS */}
          {activeChapter === 'ch8' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400">দর্পণের ধরন</label>
                  <select
                    value={ch8Type}
                    onChange={(e) => setCh8Type(e.target.value as any)}
                    aria-label="Mirror type"
                    className="w-full bg-slate-950 text-amber-300 border border-slate-700 rounded-lg p-2 text-sm"
                  >
                    <option value="concave">অবতল দর্পণ (Concave - f ধনাত্মক)</option>
                    <option value="convex">উত্তল দর্পণ (Convex - f ঋণাত্মক)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-400">ফোকাস দূরত্ব |f| (cm)</label>
                  <input type="number" value={ch8F} onChange={(e) => setCh8F(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                </div>
                <div>
                  <label className="text-xs text-slate-400">লক্ষ্যবস্তুর দূরত্ব u (cm)</label>
                  <input type="number" value={ch8U} onChange={(e) => setCh8U(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                </div>
                <div>
                  <label className="text-xs text-slate-400">লক্ষ্যবস্তুর দৈর্ঘ্য h_o (cm)</label>
                  <input type="number" value={ch8Ho} onChange={(e) => setCh8Ho(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                </div>
              </div>
            </div>
          )}

          {/* CHAPTER 9 CONTROLS */}
          {activeChapter === 'ch9' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                {[
                  { id: 'lens', name: 'লেন্স সমীকরণ ও ক্ষমতা (P)' },
                  { id: 'snell', name: 'স্নেলের সূত্র (Snell’s Law)' },
                  { id: 'critical', name: 'সংকট কোণ (Critical Angle)' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setCh9SubTab(st.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${ch9SubTab === st.id ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                  >
                    {st.name}
                  </button>
                ))}
              </div>

              {ch9SubTab === 'lens' && (
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">লেন্সের ধরন</label>
                    <select
                      value={ch9LensType}
                      onChange={(e) => setCh9LensType(e.target.value as any)}
                      aria-label="Lens type"
                      className="w-full bg-slate-950 text-amber-300 border border-slate-700 rounded-lg p-2 text-sm"
                    >
                      <option value="convex">উত্তল (Convex)</option>
                      <option value="concave">অবতল (Concave)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">ফোকাস দূরত্ব |f| (cm)</label>
                    <input type="number" value={ch9LensF} onChange={(e) => setCh9LensF(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">বস্তুর দূরত্ব u (cm)</label>
                    <input type="number" value={ch9LensU} onChange={(e) => setCh9LensU(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch9SubTab === 'snell' && (
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">১ম মাধ্যম η1</label>
                    <input type="number" step="0.01" value={ch9Eta1} onChange={(e) => setCh9Eta1(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">আপাতন কোণ θ1 (°)</label>
                    <input type="number" value={ch9Theta1} onChange={(e) => setCh9Theta1(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">২য় মাধ্যম η2</label>
                    <input type="number" step="0.01" value={ch9Eta2} onChange={(e) => setCh9Eta2(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch9SubTab === 'critical' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">ঘন মাধ্যম প্রতিসরাঙ্ক η_dense</label>
                    <input type="number" step="0.01" value={ch9Dense} onChange={(e) => setCh9Dense(parseFloat(e.target.value) || 1.33)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">হালকা মাধ্যম প্রতিসরাঙ্ক η_rare</label>
                    <input type="number" step="0.01" value={ch9Rare} onChange={(e) => setCh9Rare(parseFloat(e.target.value) || 1.0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CHAPTER 10 CONTROLS */}
          {activeChapter === 'ch10' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                {[
                  { id: 'coulomb', name: 'কুলম্বের বল (F = k·q1q2/r²)' },
                  { id: 'field', name: 'তড়িৎ প্রাবল্য ও বিভব (E, V)' },
                  { id: 'capacitance', name: 'ধারকত্ব (C = Q/V)' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setCh10SubTab(st.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${ch10SubTab === st.id ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                  >
                    {st.name}
                  </button>
                ))}
              </div>

              {ch10SubTab === 'coulomb' && (
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">চার্জ q1 (C)</label>
                    <input type="number" step="0.000001" value={ch10Q1} onChange={(e) => setCh10Q1(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">চার্জ q2 (C)</label>
                    <input type="number" step="0.000001" value={ch10Q2} onChange={(e) => setCh10Q2(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">দূরত্ব r (m)</label>
                    <input type="number" step="0.01" value={ch10R} onChange={(e) => setCh10R(parseFloat(e.target.value) || 0.1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch10SubTab === 'field' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">উৎস চার্জ Q (C)</label>
                    <input type="number" step="0.000001" value={ch10Q} onChange={(e) => setCh10Q(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">দূরত্ব r (m)</label>
                    <input type="number" step="0.01" value={ch10Dist} onChange={(e) => setCh10Dist(parseFloat(e.target.value) || 0.1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch10SubTab === 'capacitance' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">সঞ্চিত চার্জ Q (C)</label>
                    <input type="number" step="0.000001" value={ch10CapQ} onChange={(e) => setCh10CapQ(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">বিভব পার্থক্য V (Volts)</label>
                    <input type="number" value={ch10CapV} onChange={(e) => setCh10CapV(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CHAPTER 11 CONTROLS */}
          {activeChapter === 'ch11' && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'bill', name: 'বিদ্যুৎ বিল হিসাব (kWh & টাকা)' },
                  { id: 'ohm', name: 'ওহমের সূত্র (V = IR)' },
                  { id: 'equivalent', name: 'তুল্য রোধ (Series/Parallel)' },
                  { id: 'resistivity', name: 'আপেক্ষিক রোধ (R = ρL/A)' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setCh11SubTab(st.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${ch11SubTab === st.id ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                  >
                    {st.name}
                  </button>
                ))}
              </div>

              {ch11SubTab === 'bill' && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">ক্ষমতা (Watts)</label>
                    <input type="number" value={ch11BillWatts} onChange={(e) => setCh11BillWatts(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">দৈনিক ব্যবহার (ঘণ্টা)</label>
                    <input type="number" value={ch11BillHours} onChange={(e) => setCh11BillHours(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">মোট দিন</label>
                    <input type="number" value={ch11BillDays} onChange={(e) => setCh11BillDays(parseInt(e.target.value) || 30)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">ইউনিট রেট (৳)</label>
                    <input type="number" step="0.5" value={ch11BillRate} onChange={(e) => setCh11BillRate(parseFloat(e.target.value) || 7.5)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch11SubTab === 'ohm' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">বিভব পার্থক্য V (Volts)</label>
                    <input type="number" value={ch11V} onChange={(e) => setCh11V(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">রোধ R (Ohms Ω)</label>
                    <input type="number" value={ch11R} onChange={(e) => setCh11R(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}

              {ch11SubTab === 'equivalent' && (
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <button onClick={() => setCh11EqType('series')} className={`px-2.5 py-1 text-xs rounded ${ch11EqType === 'series' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'}`}>শ্রেণি সমবায়</button>
                    <button onClick={() => setCh11EqType('parallel')} className={`px-2.5 py-1 text-xs rounded ${ch11EqType === 'parallel' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'}`}>সমান্তরাল সমবায়</button>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">রোধসমূহ (কমা দিয়ে আলাদা করুন, যেমন: 10, 20, 30)</label>
                    <input type="text" value={ch11RList} onChange={(e) => setCh11RList(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm font-mono" />
                  </div>
                </div>
              )}

              {ch11SubTab === 'resistivity' && (
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">আপেক্ষিক রোধ ρ (Ω·m)</label>
                    <input type="number" value={ch11Rho} onChange={(e) => setCh11Rho(parseFloat(e.target.value) || 1.7e-8)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">দৈর্ঘ্য L (m)</label>
                    <input type="number" value={ch11L} onChange={(e) => setCh11L(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">ক্ষেত্রফল A (m²)</label>
                    <input type="number" value={ch11Area} onChange={(e) => setCh11Area(parseFloat(e.target.value) || 1e-6)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CHAPTER 12 CONTROLS */}
          {activeChapter === 'ch12' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="text-xs text-slate-400">মুখ্য ভোল্টেজ Vp (V)</label>
                  <input type="number" value={ch12Vp} onChange={(e) => setCh12Vp(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                </div>
                <div>
                  <label className="text-xs text-slate-400">মুখ্য পাকসংখ্যা Np</label>
                  <input type="number" value={ch12Np} onChange={(e) => setCh12Np(parseInt(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                </div>
                <div>
                  <label className="text-xs text-slate-400">গৌণ পাকসংখ্যা Ns</label>
                  <input type="number" value={ch12Ns} onChange={(e) => setCh12Ns(parseInt(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                </div>
                <div>
                  <label className="text-xs text-slate-400">মুখ্য প্রবাহ Ip (A)</label>
                  <input type="number" value={ch12Ip} onChange={(e) => setCh12Ip(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                </div>
              </div>
            </div>
          )}

          {/* CHAPTER 13 CONTROLS */}
          {activeChapter === 'ch13' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setCh13SubTab('decay')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${ch13SubTab === 'decay' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                >
                  তেজস্ক্রিয় ক্ষয় ও অর্ধায়ু (Half-life)
                </button>
                <button
                  onClick={() => setCh13SubTab('mass_energy')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${ch13SubTab === 'mass_energy' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                >
                  আইনস্টাইনের ভর-শক্তি (E = mc²)
                </button>
              </div>

              {ch13SubTab === 'decay' ? (
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">আদি পরিমাণ N0</label>
                    <input type="number" value={ch13N0} onChange={(e) => setCh13N0(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">অর্ধায়ু T½ (বছর/দিন/সে)</label>
                    <input type="number" value={ch13Thalf} onChange={(e) => setCh13Thalf(parseFloat(e.target.value) || 1)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">অতিবাহিত সময় t</label>
                    <input type="number" value={ch13T} onChange={(e) => setCh13T(parseFloat(e.target.value) || 0)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="text-xs text-slate-400">বিলুপ্ত ভর m (kg)</label>
                  <input type="number" step="0.0001" value={ch13MassKg} onChange={(e) => setCh13MassKg(parseFloat(e.target.value) || 0.001)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Mathematical Derivations & KaTeX Output (5 Cols) */}
        <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-4 sm:p-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                {lang === 'bn' ? 'গাণিতিক বিশ্লেষণ ও ফলাফল' : 'Step-by-Step Derivation'}
              </span>
              <button
                onClick={handleCopy}
                disabled={!activeResult.success}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-amber-300 transition disabled:opacity-30 cursor-pointer"
                title="Copy Final Answer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (lang === 'bn' ? 'কপি হয়েছে' : 'Copied!') : (lang === 'bn' ? 'কপি' : 'Copy')}</span>
              </button>
            </div>

            {/* Error Message */}
            {!activeResult.success && activeResult.errorMessage && (
              <div className="p-3 bg-red-950/40 border border-red-800/60 rounded-xl flex items-start gap-2 text-red-300 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{activeResult.errorMessage}</span>
              </div>
            )}

            {/* Highlighted Result Hero Box */}
            {activeResult.success && (
              <div className="p-4 bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 rounded-xl">
                <span className="text-xs text-amber-400 font-semibold block mb-1">
                  {lang === 'bn' ? 'নির্ণীত মান (Calculated Value):' : 'Calculated Value:'}
                </span>
                <div className="text-2xl font-mono font-extrabold text-white flex items-baseline gap-2">
                  <span>{typeof activeResult.value === 'number' ? (Math.abs(activeResult.value) < 0.001 && activeResult.value !== 0 ? activeResult.value.toExponential(4) : activeResult.value.toLocaleString(undefined, { maximumFractionDigits: 4 })) : activeResult.value}</span>
                  {activeResult.unit && (
                    <span className="text-sm font-sans font-medium text-amber-300">
                      {activeResult.unit}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Step-by-Step Derivation list */}
            {activeResult.steps.length > 0 && (
              <div className="space-y-3 pt-1">
                {activeResult.steps.map((step, idx) => (
                  <div key={idx} className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs space-y-1.5">
                    <span className="font-semibold text-slate-400 block">
                      {idx + 1}. {lang === 'bn' ? step.labelBn : step.labelEn}
                    </span>
                    <div className="py-1 px-2 bg-slate-950/80 rounded font-mono overflow-x-auto text-amber-200">
                      <Latex formula={step.latex} />
                    </div>
                    {step.notesBn && (
                      <p className="text-slate-400 italic text-[11px]">
                        {lang === 'bn' ? step.notesBn : step.notesEn}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
            <span>কাসিও সাইন্টিফিক ক্যালকুলেটর শর্টকাটের জন্য নিচে দেখুন</span>
            <span className="text-amber-400 font-mono">fx-991EX / MS</span>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Floating Answer Bar */}
      {activeResult.success && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-amber-500/40 px-4 py-2.5 shadow-2xl flex items-center justify-between">
          <div>
            <span className="text-[10px] text-amber-400 font-semibold block uppercase tracking-wider">
              {lang === 'bn' ? 'ফলাফল (Result):' : 'Result:'}
            </span>
            <div className="text-base font-mono font-bold text-white flex items-baseline gap-1.5">
              <span>
                {typeof activeResult.value === 'number'
                  ? Math.abs(activeResult.value) < 0.001 && activeResult.value !== 0
                    ? activeResult.value.toExponential(4)
                    : activeResult.value.toLocaleString(undefined, { maximumFractionDigits: 4 })
                  : activeResult.value}
              </span>
              {activeResult.unit && <span className="text-xs text-amber-300 font-normal">{activeResult.unit}</span>}
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition flex items-center gap-1 shadow-lg shadow-amber-500/20"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (lang === 'bn' ? 'কপি!' : 'Copied!') : (lang === 'bn' ? 'কপি' : 'Copy')}</span>
          </button>
        </div>
      )}
    </div>
  );
};
