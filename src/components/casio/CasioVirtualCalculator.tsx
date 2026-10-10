import React, { useState, useEffect, useRef } from 'react';
import {
  Calculator,
  X,
  RotateCcw,
  Maximize2,
  Minimize2,
  Copy,
  Check,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

interface Props {
  lang?: 'bn' | 'en';
  isOpen?: boolean;
  onClose?: () => void;
  inline?: boolean;
}

export const CasioVirtualCalculator: React.FC<Props> = ({
  lang = 'bn',
  isOpen: controlledIsOpen,
  onClose,
  inline = false,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isModalOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalOpen;

  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string>('0');
  const [history, setHistory] = useState<string[]>([]);
  const [ans, setAns] = useState<string>('0');
  const [isRad, setIsRad] = useState<boolean>(false);
  const [isShift, setIsShift] = useState<boolean>(false);
  const [isAlpha, setIsAlpha] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const displayEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll input display
  useEffect(() => {
    displayEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'end' });
  }, [expression]);

  const handleClose = () => {
    if (onClose) onClose();
    else setInternalOpen(false);
  };

  const evaluateMath = (expr: string): string => {
    try {
      if (!expr.trim()) return '0';

      // Sanitize and translate expressions
      let sanitized = expr
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/π/g, `${Math.PI}`)
        .replace(/Ans/g, `(${ans})`)
        .replace(/e(?![a-zA-Z0-9])/g, `${Math.E}`);

      // Factorial replacement n!
      sanitized = sanitized.replace(/(\d+)!/g, (_, n) => {
        const num = parseInt(n);
        let f = 1;
        for (let i = 2; i <= num; i++) f *= i;
        return `${f}`;
      });

      // Handle power x^y
      sanitized = sanitized.replace(/\^/g, '**');

      // Handle trig with Deg/Rad
      if (!isRad) {
        // Convert deg to rad inside sin/cos/tan
        sanitized = sanitized
          .replace(/sin\(([^)]+)\)/g, 'Math.sin(($1) * Math.PI / 180)')
          .replace(/cos\(([^)]+)\)/g, 'Math.cos(($1) * Math.PI / 180)')
          .replace(/tan\(([^)]+)\)/g, 'Math.tan(($1) * Math.PI / 180)')
          .replace(/asin\(([^)]+)\)/g, '(Math.asin($1) * 180 / Math.PI)')
          .replace(/acos\(([^)]+)\)/g, '(Math.acos($1) * 180 / Math.PI)')
          .replace(/atan\(([^)]+)\)/g, '(Math.atan($1) * 180 / Math.PI)');
      } else {
        sanitized = sanitized
          .replace(/sin\(/g, 'Math.sin(')
          .replace(/cos\(/g, 'Math.cos(')
          .replace(/tan\(/g, 'Math.tan(')
          .replace(/asin\(/g, 'Math.asin(')
          .replace(/acos\(/g, 'Math.acos(')
          .replace(/atan\(/g, 'Math.atan(');
      }

      // Handle sqrt, cbrt, log10, ln
      sanitized = sanitized
        .replace(/sqrt\(/g, 'Math.sqrt(')
        .replace(/cbrt\(/g, 'Math.cbrt(')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/ln\(/g, 'Math.log(');

      // Safe JS evaluation with Function constructor
      // Only allow safe math tokens
      if (!/^[\d\s+\-*/.()MathPIE,]+$/.test(sanitized)) {
        return 'Syntax ERROR';
      }

      // eslint-disable-next-line no-new-func
      const val = Function(`"use strict"; return (${sanitized});`)();
      if (typeof val === 'number') {
        if (!isFinite(val)) return 'Math ERROR';
        if (isNaN(val)) return 'Math ERROR';
        // Format decimal
        const rounded = Number(val.toFixed(10));
        return `${rounded}`;
      }
      return 'Syntax ERROR';
    } catch {
      return 'Syntax ERROR';
    }
  };

  const handleKey = (key: string) => {
    if (key === 'AC') {
      setExpression('');
      setResult('0');
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    if (key === 'DEL') {
      setExpression((prev) => prev.slice(0, -1));
      return;
    }

    if (key === '=') {
      const calcResult = evaluateMath(expression);
      setResult(calcResult);
      if (calcResult !== 'Syntax ERROR' && calcResult !== 'Math ERROR') {
        setAns(calcResult);
        setHistory((prev) => [expression + ' = ' + calcResult, ...prev.slice(0, 9)]);
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    if (key === 'SHIFT') {
      setIsShift((prev) => !prev);
      return;
    }

    if (key === 'ALPHA') {
      setIsAlpha((prev) => !prev);
      return;
    }

    if (key === 'DRG') {
      setIsRad((prev) => !prev);
      return;
    }

    // Process shifted/alpha keys
    let token = key;
    if (isShift) {
      if (key === 'sin') token = 'asin(';
      else if (key === 'cos') token = 'acos(';
      else if (key === 'tan') token = 'atan(';
      else if (key === 'sqrt') token = 'cbrt(';
      else if (key === 'x^2') token = '^3';
      else if (key === 'log') token = '10^(';
      else if (key === 'ln') token = 'e^(';
      else if (key === 'Ans') token = '%';
      else if (key === 'x!') token = '!';
      setIsShift(false);
    } else {
      if (key === 'sin') token = 'sin(';
      else if (key === 'cos') token = 'cos(';
      else if (key === 'tan') token = 'tan(';
      else if (key === 'sqrt') token = 'sqrt(';
      else if (key === 'x^2') token = '^2';
      else if (key === 'x^y') token = '^(';
      else if (key === 'log') token = 'log(';
      else if (key === 'ln') token = 'ln(';
    }

    setExpression((prev) => prev + token);
  };

  const handleCopyResult = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const calculatorContent = (
    <div
      className={`bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-4 sm:p-5 flex flex-col gap-4 text-white font-sans ${
        isExpanded ? 'max-w-2xl w-full' : 'max-w-sm w-full'
      } mx-auto transition-all`}
      style={{
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(14, 165, 233, 0.15)',
      }}
    >
      {/* Brand & Solar Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-extrabold tracking-wider text-xs text-slate-200">CASIO</span>
          <span className="text-[10px] text-cyan-400 font-mono font-bold bg-slate-950 px-1.5 py-0.5 rounded border border-cyan-500/30">
            fx-991EX
          </span>
          <span className="text-[9px] text-slate-400 font-semibold hidden sm:inline">CLASSWIZ</span>
        </div>

        {/* Realistic Solar Panel Strip */}
        <div className="flex items-center gap-1.5 bg-slate-950/90 border border-amber-900/60 rounded px-2 py-1 shadow-inner">
          <div className="w-3 h-2 bg-amber-950 border-r border-amber-800/80" />
          <div className="w-3 h-2 bg-amber-950 border-r border-amber-800/80" />
          <div className="w-3 h-2 bg-amber-950 border-r border-amber-800/80" />
          <div className="w-3 h-2 bg-amber-950" />
          <span className="text-[8px] font-mono text-amber-500/80 uppercase ml-1">TWO WAY POWER</span>
        </div>

        {/* Modal Controls (if floating) */}
        {!inline && (
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition"
              title="Expand/Compact"
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={handleClose}
              className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* High-Contrast LCD Dot Matrix Display */}
      <div className="bg-[#b4c3aa] text-[#1c2419] p-3 rounded-xl border-4 border-[#85967b] shadow-inner font-mono relative overflow-hidden">
        {/* LCD Top Status Flags */}
        <div className="flex items-center justify-between text-[10px] font-bold border-b border-[#96a58d] pb-1 mb-1 tracking-wider opacity-85">
          <div className="flex items-center gap-2">
            <span className={`px-1 rounded ${isShift ? 'bg-[#1c2419] text-[#b4c3aa]' : 'opacity-30'}`}>S</span>
            <span className={`px-1 rounded ${isAlpha ? 'bg-[#1c2419] text-[#b4c3aa]' : 'opacity-30'}`}>A</span>
            <span className="px-1 rounded bg-[#1c2419] text-[#b4c3aa]">{isRad ? 'R' : 'D'}</span>
            <span className="opacity-40">MATH</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] opacity-60">NATURAL-V.P.A.M.</span>
            <button
              onClick={handleCopyResult}
              className="opacity-70 hover:opacity-100 flex items-center gap-0.5 text-[9px] font-sans"
              title="Copy"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-800" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Input Formula Line */}
        <div className="text-right text-sm font-semibold tracking-wide min-h-[1.75rem] overflow-x-auto whitespace-nowrap scrollbar-none py-0.5">
          {expression || ' '}
          <span ref={displayEndRef} />
        </div>

        {/* Result Line */}
        <div className="text-right text-2xl font-extrabold tracking-tight pt-1 border-t border-[#96a58d]/60 min-h-[2.25rem]">
          {result}
        </div>
      </div>

      {/* Control Buttons (Top Row: Shift, Alpha, Replay D-Pad, Mode) */}
      <div className="grid grid-cols-5 gap-1.5 items-center">
        <button
          onClick={() => handleKey('SHIFT')}
          className={`py-1 px-1 rounded-lg text-[10px] font-bold border transition ${
            isShift
              ? 'bg-amber-500 text-slate-950 border-amber-400 font-extrabold'
              : 'bg-amber-950/60 text-amber-300 border-amber-800/60 hover:bg-amber-900/60'
          }`}
        >
          SHIFT
        </button>
        <button
          onClick={() => handleKey('ALPHA')}
          className={`py-1 px-1 rounded-lg text-[10px] font-bold border transition ${
            isAlpha
              ? 'bg-rose-500 text-white border-rose-400 font-extrabold'
              : 'bg-rose-950/60 text-rose-300 border-rose-800/60 hover:bg-rose-900/60'
          }`}
        >
          ALPHA
        </button>

        {/* Mode / Deg-Rad toggle */}
        <button
          onClick={() => handleKey('DRG')}
          className="py-1 px-1 rounded-lg text-[10px] font-bold bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 transition"
          title="Toggle DEG / RAD"
        >
          {isRad ? 'RAD ➔ DEG' : 'DEG ➔ RAD'}
        </button>

        <button
          onClick={() => handleKey('x!')}
          className="py-1 px-1 rounded-lg text-[10px] font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
        >
          x!
        </button>

        <button
          onClick={() => handleKey('AC')}
          className="py-1 px-1 rounded-lg text-[10px] font-bold bg-red-900/80 hover:bg-red-800 text-red-100 border border-red-700 transition"
        >
          ON / AC
        </button>
      </div>

      {/* Scientific Functions Grid (5 Columns) */}
      <div className="grid grid-cols-5 gap-1.5">
        {[
          { label: 'sin', shiftLabel: 'sin⁻¹', val: 'sin' },
          { label: 'cos', shiftLabel: 'cos⁻¹', val: 'cos' },
          { label: 'tan', shiftLabel: 'tan⁻¹', val: 'tan' },
          { label: 'x²', shiftLabel: 'x³', val: 'x^2' },
          { label: 'xʸ', shiftLabel: 'ʸ√x', val: 'x^y' },
          { label: '√', shiftLabel: '∛', val: 'sqrt' },
          { label: 'log', shiftLabel: '10ˣ', val: 'log' },
          { label: 'ln', shiftLabel: 'eˣ', val: 'ln' },
          { label: '(', shiftLabel: '%', val: '(' },
          { label: ')', shiftLabel: ',', val: ')' },
        ].map((btn, i) => (
          <button
            key={i}
            onClick={() => handleKey(btn.val)}
            className="py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 rounded-lg text-xs font-mono font-medium relative group transition active:scale-95 flex flex-col items-center justify-center"
          >
            <span className="text-[8px] text-amber-400 absolute top-0.5 right-1 opacity-75">
              {btn.shiftLabel}
            </span>
            <span className="mt-1">{btn.label}</span>
          </button>
        ))}
      </div>

      {/* Number Pad & Basic Operators (5 Columns) */}
      <div className="grid grid-cols-5 gap-1.5">
        {/* Row 1 */}
        <button
          onClick={() => handleKey('7')}
          className="py-2 bg-slate-800/90 hover:bg-slate-700 text-white rounded-lg text-base font-bold font-mono transition active:scale-95"
        >
          7
        </button>
        <button
          onClick={() => handleKey('8')}
          className="py-2 bg-slate-800/90 hover:bg-slate-700 text-white rounded-lg text-base font-bold font-mono transition active:scale-95"
        >
          8
        </button>
        <button
          onClick={() => handleKey('9')}
          className="py-2 bg-slate-800/90 hover:bg-slate-700 text-white rounded-lg text-base font-bold font-mono transition active:scale-95"
        >
          9
        </button>
        <button
          onClick={() => handleKey('DEL')}
          className="py-2 bg-amber-900/80 hover:bg-amber-800 text-amber-100 rounded-lg text-xs font-bold transition active:scale-95"
        >
          DEL
        </button>
        <button
          onClick={() => handleKey('AC')}
          className="py-2 bg-red-900/80 hover:bg-red-800 text-red-100 rounded-lg text-xs font-bold transition active:scale-95"
        >
          AC
        </button>

        {/* Row 2 */}
        <button
          onClick={() => handleKey('4')}
          className="py-2 bg-slate-800/90 hover:bg-slate-700 text-white rounded-lg text-base font-bold font-mono transition active:scale-95"
        >
          4
        </button>
        <button
          onClick={() => handleKey('5')}
          className="py-2 bg-slate-800/90 hover:bg-slate-700 text-white rounded-lg text-base font-bold font-mono transition active:scale-95"
        >
          5
        </button>
        <button
          onClick={() => handleKey('6')}
          className="py-2 bg-slate-800/90 hover:bg-slate-700 text-white rounded-lg text-base font-bold font-mono transition active:scale-95"
        >
          6
        </button>
        <button
          onClick={() => handleKey('×')}
          className="py-2 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded-lg text-lg font-bold font-mono transition active:scale-95"
        >
          ×
        </button>
        <button
          onClick={() => handleKey('÷')}
          className="py-2 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded-lg text-lg font-bold font-mono transition active:scale-95"
        >
          ÷
        </button>

        {/* Row 3 */}
        <button
          onClick={() => handleKey('1')}
          className="py-2 bg-slate-800/90 hover:bg-slate-700 text-white rounded-lg text-base font-bold font-mono transition active:scale-95"
        >
          1
        </button>
        <button
          onClick={() => handleKey('2')}
          className="py-2 bg-slate-800/90 hover:bg-slate-700 text-white rounded-lg text-base font-bold font-mono transition active:scale-95"
        >
          2
        </button>
        <button
          onClick={() => handleKey('3')}
          className="py-2 bg-slate-800/90 hover:bg-slate-700 text-white rounded-lg text-base font-bold font-mono transition active:scale-95"
        >
          3
        </button>
        <button
          onClick={() => handleKey('+')}
          className="py-2 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded-lg text-lg font-bold font-mono transition active:scale-95"
        >
          +
        </button>
        <button
          onClick={() => handleKey('-')}
          className="py-2 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded-lg text-lg font-bold font-mono transition active:scale-95"
        >
          -
        </button>

        {/* Row 4 */}
        <button
          onClick={() => handleKey('0')}
          className="py-2 bg-slate-800/90 hover:bg-slate-700 text-white rounded-lg text-base font-bold font-mono transition active:scale-95"
        >
          0
        </button>
        <button
          onClick={() => handleKey('.')}
          className="py-2 bg-slate-800/90 hover:bg-slate-700 text-white rounded-lg text-lg font-bold font-mono transition active:scale-95"
        >
          .
        </button>
        <button
          onClick={() => handleKey('π')}
          className="py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-lg text-base font-bold font-mono transition active:scale-95"
        >
          π
        </button>
        <button
          onClick={() => handleKey('Ans')}
          className="py-2 bg-slate-800 hover:bg-slate-700 text-emerald-300 rounded-lg text-xs font-bold font-mono transition active:scale-95"
        >
          Ans
        </button>
        <button
          onClick={() => handleKey('=')}
          className="py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xl font-bold font-mono transition shadow-lg shadow-cyan-600/30 active:scale-95"
        >
          =
        </button>
      </div>

      {/* History tape (last 3 items) */}
      {history.length > 0 && (
        <div className="pt-2 border-t border-slate-800 space-y-1 text-[11px] font-mono text-slate-400">
          <div className="flex justify-between items-center text-[10px] text-slate-500">
            <span>{lang === 'bn' ? 'সাম্প্রতিক হিসেব:' : 'Recent History:'}</span>
            <button
              onClick={() => setHistory([])}
              className="hover:text-slate-300 transition"
              title="Clear history"
            >
              <RotateCcw className="w-2.5 h-2.5" />
            </button>
          </div>
          {history.slice(0, 2).map((item, idx) => (
            <div key={idx} className="truncate bg-slate-950/60 px-2 py-0.5 rounded border border-slate-800/80">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  if (inline) {
    return calculatorContent;
  }

  return (
    <>
      {/* Floating Launcher Trigger (bottom right) */}
      <button
        onClick={() => setInternalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-3.5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 border border-cyan-400/40 text-xs font-bold transition hover:scale-105 active:scale-95 cursor-pointer backdrop-blur"
        title="Open Casio fx-991 Scientific Calculator"
      >
        <Calculator className="w-4 h-4 text-cyan-200" />
        <span className="hidden sm:inline font-mono">fx-991EX</span>
        <span>{lang === 'bn' ? 'ক্যালকুলেটর' : 'Calculator'}</span>
      </button>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-sm">
            {calculatorContent}
          </div>
        </div>
      )}
    </>
  );
};
