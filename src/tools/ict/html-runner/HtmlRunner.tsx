import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Copy, Check, Download, Monitor, Tablet, Smartphone, BookOpen, AlertTriangle } from 'lucide-react';
import { HTML_TEMPLATES, HTML_CHEATSHEET, type HtmlTemplate } from './templates';

interface HtmlRunnerProps {
  lang?: 'bn' | 'en';
}

export const HtmlRunner: React.FC<HtmlRunnerProps> = ({ lang = 'bn' }) => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(HTML_TEMPLATES[0].id);
  const [code, setCode] = useState<string>(HTML_TEMPLATES[0].code);
  const [copied, setCopied] = useState(false);
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showCheatsheet, setShowCheatsheet] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Update code when template changes
  const handleTemplateChange = (templateId: string) => {
    const template = HTML_TEMPLATES.find((t) => t.id === templateId);
    if (template) {
      setSelectedTemplateId(templateId);
      setCode(template.code);
    }
  };

  // Run/refresh iframe
  const renderPreview = () => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(code);
        doc.close();
      }
    }
  };

  useEffect(() => {
    renderPreview();
  }, [code, viewport]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hsc_ict_practice.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    const template = HTML_TEMPLATES.find((t) => t.id === selectedTemplateId);
    if (template) setCode(template.code);
  };

  const activeTemplate = HTML_TEMPLATES.find((t) => t.id === selectedTemplateId);

  // Viewport width styles
  const viewportWidths = {
    desktop: 'w-full',
    tablet: 'max-w-[768px]',
    mobile: 'max-w-[375px]',
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl space-y-0">
      {/* Top Toolbar */}
      <div className="bg-slate-950 border-b border-slate-800 p-4 flex flex-wrap items-center justify-between gap-3">
        {/* Template Selector */}
        <div className="flex items-center gap-2 flex-1 min-w-[280px]">
          <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
            {lang === 'bn' ? 'নমুনা কোড:' : 'Preset:'}
          </span>
          <select
            value={selectedTemplateId}
            onChange={(e) => handleTemplateChange(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 text-xs font-medium text-white rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          >
            {HTML_TEMPLATES.map((tpl) => (
              <option key={tpl.id} value={tpl.id}>
                {tpl.isChallenge ? '⚠️ ' : ''}
                {lang === 'bn' ? tpl.titleBn : tpl.titleEn}
              </option>
            ))}
          </select>
        </div>

        {/* Viewport Toggles (DevTools Simulation) */}
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-1 gap-1">
          <button
            type="button"
            onClick={() => setViewport('desktop')}
            className={`px-2.5 py-1 rounded text-xs flex items-center gap-1.5 transition ${
              viewport === 'desktop' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
            title="Desktop 100%"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            type="button"
            onClick={() => setViewport('tablet')}
            className={`px-2.5 py-1 rounded text-xs flex items-center gap-1.5 transition ${
              viewport === 'tablet' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
            title="Tablet 768px"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tablet</span>
          </button>
          <button
            type="button"
            onClick={() => setViewport('mobile')}
            className={`px-2.5 py-1 rounded text-xs flex items-center gap-1.5 transition ${
              viewport === 'mobile' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
            title="Mobile 375px"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowCheatsheet(!showCheatsheet)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition text-xs flex items-center gap-1"
            title={lang === 'bn' ? 'ট্যাগ চিটশিট' : 'Tag Reference'}
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span className="hidden md:inline">{lang === 'bn' ? 'ট্যাগ হ্যান্ডবুক' : 'Tags'}</span>
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition text-xs flex items-center gap-1"
            title="Copy Code"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition text-xs flex items-center gap-1"
            title="Download .html file"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-rose-400 transition text-xs"
            title="Reset code"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Challenge Alert if Selected */}
      {activeTemplate?.isChallenge && (
        <div className="bg-amber-950/40 border-b border-amber-800/60 p-3 px-4 flex items-center gap-3 text-xs text-amber-200">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            {lang === 'bn' ? activeTemplate.descriptionBn : activeTemplate.descriptionEn}
          </span>
        </div>
      )}

      {/* Main Dual-Pane Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 min-h-[520px]">
        {/* Left Pane: Code Editor */}
        <div className="flex flex-col bg-slate-950/80">
          <div className="bg-slate-900/60 border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              HTML / CSS Editor
            </span>
            <span>UTF-8 • Client-Side</span>
          </div>
          <div className="relative flex-1 p-2">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full min-h-[460px] bg-transparent text-cyan-300 font-mono text-xs sm:text-sm p-3 leading-relaxed resize-none focus:outline-none selection:bg-cyan-700 selection:text-white"
              spellCheck={false}
              autoCapitalize="off"
              autoCorrect="off"
            />
          </div>
        </div>

        {/* Right Pane: Live Iframe Preview with Simulated Device Frame */}
        <div className="flex flex-col bg-slate-950 flex-1 items-center justify-start overflow-auto p-4">
          <div className="w-full pb-2 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Play className="w-3.5 h-3.5 text-emerald-400" />
              {lang === 'bn' ? 'লাইভ প্রিভিউ উইন্ডো' : 'Live Browser Preview'}
            </span>
            <span className="text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              {viewport.toUpperCase()} MODE
            </span>
          </div>

          <div
            className={`transition-all duration-300 w-full ${viewportWidths[viewport]} bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-slate-700 min-h-[460px] flex flex-col`}
          >
            {/* Simulated Browser URL bar */}
            <div className="bg-slate-200 px-3 py-1.5 flex items-center gap-2 border-b border-slate-300">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>
              <div className="flex-1 bg-white text-slate-600 font-mono text-[10px] px-2 py-0.5 rounded truncate text-center">
                http://localhost/hsc_ict_exam_preview.html
              </div>
            </div>

            {/* Sandbox Iframe */}
            <iframe
              ref={iframeRef}
              title="HTML Output Preview"
              sandbox="allow-scripts allow-modals"
              className="w-full flex-1 min-h-[420px] bg-white border-0"
            />
          </div>
        </div>
      </div>

      {/* Collapsible Tag Handbook / Cheatsheet Drawer */}
      {showCheatsheet && (
        <div className="bg-slate-950 border-t border-slate-800 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              {lang === 'bn' ? 'এইচএসসি আইসিটি ৪র্থ অধ্যায়: প্রয়োজনীয় HTML ট্যাগ রেফারেন্স' : 'HSC ICT Chapter 4: Essential HTML Tag Reference'}
            </h4>
            <button
              type="button"
              onClick={() => setShowCheatsheet(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              ✕ {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {HTML_CHEATSHEET.map((item, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
                <div className="font-mono text-cyan-400 font-bold">{item.tag}</div>
                <div className="text-slate-300 text-[11px] leading-tight">
                  {lang === 'bn' ? item.descBn : item.descEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
