import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  RotateCcw,
  Copy,
  Check,
  Download,
  Monitor,
  Tablet,
  Smartphone,
  BookOpen,
  Code2,
  Palette,
  Layers,
  Search,
  Sparkles,
  X,
  ExternalLink,
  AlertTriangle,
  FileCode,
  Eye,
  ArrowRight,
  Sun,
  Moon,
  Hash
} from 'lucide-react';
import { HTML_TEMPLATES, type HtmlTemplate } from './templates';
import {
  HTML_TAG_CATEGORIES,
  HTML_TAGS,
  CSS_CATEGORIES,
  CSS_PROPS,
  HSC_GLOSSARY,
  type HtmlTag,
  type CssProp,
  type GlossaryEntry
} from './data';

interface HtmlRunnerProps {
  lang?: 'bn' | 'en';
}

type TabType = 'editor' | 'tags' | 'css' | 'glossary';
type ViewportType = 'desktop' | 'tablet' | 'mobile';

export const HtmlRunner: React.FC<HtmlRunnerProps> = ({ lang = 'bn' }) => {
  // Navigation & View
  const [activeTab, setActiveTab] = useState<TabType>('editor');
  const [viewport, setViewport] = useState<ViewportType>('desktop');
  const [previewTheme, setPreviewTheme] = useState<'light' | 'dark'>('light');

  // Editor State
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(HTML_TEMPLATES[0].id);
  const [code, setCode] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = sessionStorage.getItem('biggan_html_runner_code');
        if (saved) return saved;
      } catch (_) {}
    }
    return HTML_TEMPLATES[0].code;
  });

  // Rendered code passed to srcDoc of iframe
  const [renderedCode, setRenderedCode] = useState<string>(code);
  const [copied, setCopied] = useState(false);
  const [autoRun, setAutoRun] = useState(true);
  const [hasUnrunChanges, setHasUnrunChanges] = useState(false);

  // Search & Filter State
  const [tagCategory, setTagCategory] = useState<string>('all');
  const [tagSearch, setTagSearch] = useState<string>('');
  const [cssCategory, setCssCategory] = useState<string>('all');
  const [cssSearch, setCssSearch] = useState<string>('');
  const [glossarySearch, setGlossarySearch] = useState<string>('');

  // Modal State
  const [modalItem, setModalItem] = useState<{ type: 'tag' | 'css'; data: HtmlTag | CssProp } | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Sync to sessionStorage safely so language change or tab navigation does not wipe code
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('biggan_html_runner_code', code);
      } catch (_) {}
    }
  }, [code]);

  // Execute preview: update renderedCode
  const handleRun = () => {
    setRenderedCode(code);
    setHasUnrunChanges(false);
  };

  // Debounced auto-run when code changes
  useEffect(() => {
    if (autoRun) {
      const timer = setTimeout(() => {
        setRenderedCode(code);
        setHasUnrunChanges(false);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setHasUnrunChanges(true);
    }
  }, [code, autoRun]);

  // Template Change
  const handleTemplateChange = (templateId: string) => {
    const template = HTML_TEMPLATES.find((t) => t.id === templateId);
    if (template) {
      setSelectedTemplateId(templateId);
      setCode(template.code);
      setRenderedCode(template.code);
      setHasUnrunChanges(false);
    }
  };

  // Quick Insertion into code
  const handleInsertSnippet = (snippet: string) => {
    if (!textareaRef.current) {
      setCode((prev) => prev + '\n' + snippet);
      setActiveTab('editor');
      return;
    }
    const start = textareaRef.current.selectionStart ?? code.length;
    const end = textareaRef.current.selectionEnd ?? code.length;
    const newCode = code.substring(0, start) + snippet + code.substring(end);
    setCode(newCode);
    setActiveTab('editor');
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(start + snippet.length, start + snippet.length);
      }
    }, 100);
  };

  // Handle Tab key in textarea
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.currentTarget.selectionStart ?? 0;
      const end = e.currentTarget.selectionEnd ?? 0;
      const newCode = code.substring(0, start) + '  ' + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 2;
        }
      }, 0);
    }
  };

  // Format Code (Basic HTML indent)
  const handleFormatCode = () => {
    let formatted = '';
    let pad = 0;
    const lines = code.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) {
        formatted += '\n';
        continue;
      }
      if (trimmed.startsWith('</')) {
        pad = Math.max(0, pad - 1);
      }
      formatted += '  '.repeat(pad) + trimmed + '\n';
      if (
        trimmed.startsWith('<') &&
        !trimmed.startsWith('</') &&
        !trimmed.endsWith('/>') &&
        !trimmed.startsWith('<!') &&
        !trimmed.startsWith('<!--') &&
        !trimmed.includes('</') &&
        !trimmed.match(/^<(br|hr|img|input|meta|link)/i)
      ) {
        pad++;
      }
    }
    setCode(formatted.trimEnd());
  };

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
    a.download = 'hsc_ict_web_practice.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    const template = HTML_TEMPLATES.find((t) => t.id === selectedTemplateId) || HTML_TEMPLATES[0];
    setCode(template.code);
    setRenderedCode(template.code);
    setHasUnrunChanges(false);
  };

  const activeTemplate = HTML_TEMPLATES.find((t) => t.id === selectedTemplateId);

  // Viewport max-width styles
  const viewportWidths: Record<ViewportType, string> = {
    desktop: 'w-full',
    tablet: 'max-w-[768px]',
    mobile: 'max-w-[375px]',
  };

  // Filtered HTML tags
  const filteredTags = HTML_TAGS.filter((item) => {
    const matchesCategory =
      tagCategory === 'all'
        ? true
        : tagCategory === 'hsc'
        ? item.isHscChapter4
        : item.category === tagCategory;
    const matchesSearch =
      tagSearch === '' ||
      item.tag.toLowerCase().includes(tagSearch.toLowerCase()) ||
      item.titleBn.toLowerCase().includes(tagSearch.toLowerCase()) ||
      item.titleEn.toLowerCase().includes(tagSearch.toLowerCase()) ||
      item.descBn.toLowerCase().includes(tagSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Filtered CSS props
  const filteredCss = CSS_PROPS.filter((item) => {
    const matchesCategory = cssCategory === 'all' || item.category === cssCategory;
    const matchesSearch =
      cssSearch === '' ||
      item.prop.toLowerCase().includes(cssSearch.toLowerCase()) ||
      item.titleBn.toLowerCase().includes(cssSearch.toLowerCase()) ||
      item.titleEn.toLowerCase().includes(cssSearch.toLowerCase()) ||
      item.descBn.toLowerCase().includes(cssSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Filtered Glossary
  const filteredGlossary = HSC_GLOSSARY.filter((item) => {
    return (
      glossarySearch === '' ||
      item.termEn.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.termBn.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.defBn.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.defEn.toLowerCase().includes(glossarySearch.toLowerCase())
    );
  });

  // Quick insertion chips
  const quickSnippets = [
    { label: '<table>', code: '<table border="1">\n  <tr>\n    <th>Header</th>\n  </tr>\n  <tr>\n    <td>Data</td>\n  </tr>\n</table>' },
    { label: 'rowspan', code: '<td rowspan="2">Merged Row</td>' },
    { label: 'colspan', code: '<th colspan="2">Merged Col</th>' },
    { label: 'id="..."', code: 'id="section-1"' },
    { label: 'class="..."', code: 'class="highlight"' },
    { label: '<form>', code: '<form action="#" method="POST">\n  <input type="text" placeholder="Name">\n  <button type="submit">Submit</button>\n</form>' },
    { label: '<input>', code: '<input type="text" name="name" placeholder="Enter text">' },
    { label: '<a> লিংক', code: '<a href="https://biggan.me" target="_blank">Biggan.me</a>' },
    { label: '<img> ছবি', code: '<img src="https://placehold.co/400x200" alt="Sample Image">' },
    { label: '<style>', code: '<style>\n  body { font-family: sans-serif; padding: 20px; }\n  h1 { color: #0284c7; }\n</style>' },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl space-y-0 text-slate-200 transition-colors duration-200">
      {/* ── Top Main Tabs Bar ───────────────────────────────────────────── */}
      <div className="bg-slate-950 border-b border-slate-800 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 sm:gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab('editor')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
              activeTab === 'editor'
                ? 'bg-cyan-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'কোড এডিটর' : 'Code Editor'}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tags')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
              activeTab === 'tags'
                ? 'bg-cyan-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'ট্যাগ রেফারেন্স' : 'HTML Tags'}</span>
            <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60">
              {HTML_TAGS.length}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('css')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
              activeTab === 'css'
                ? 'bg-cyan-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'CSS রেফারেন্স' : 'CSS Docs'}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('glossary')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
              activeTab === 'glossary'
                ? 'bg-cyan-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'HSC পরিভাষা' : 'HSC Glossary'}</span>
          </button>
        </div>

        {/* Action Controls for Editor Tab */}
        {activeTab === 'editor' && (
          <div className="flex flex-wrap items-center gap-2">
            {/* Viewport Toggles */}
            <div className="hidden sm:flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 gap-0.5">
              <button
                type="button"
                onClick={() => setViewport('desktop')}
                className={`px-2 py-1 rounded text-xs flex items-center gap-1 transition ${
                  viewport === 'desktop' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Desktop 100%"
              >
                <Monitor className="w-3 h-3" />
                <span className="hidden md:inline">Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setViewport('tablet')}
                className={`px-2 py-1 rounded text-xs flex items-center gap-1 transition ${
                  viewport === 'tablet' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Tablet 768px"
              >
                <Tablet className="w-3 h-3" />
                <span className="hidden md:inline">Tablet</span>
              </button>
              <button
                type="button"
                onClick={() => setViewport('mobile')}
                className={`px-2 py-1 rounded text-xs flex items-center gap-1 transition ${
                  viewport === 'mobile' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Mobile 375px"
              >
                <Smartphone className="w-3 h-3" />
                <span className="hidden md:inline">Mobile</span>
              </button>
            </div>

            {/* Run Button (Manual) */}
            <button
              type="button"
              onClick={handleRun}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition shadow ${
                hasUnrunChanges
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-950 animate-pulse'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white'
              }`}
              title={lang === 'bn' ? 'কোড রান করুন' : 'Run Code'}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{lang === 'bn' ? 'রান' : 'Run'}</span>
            </button>

            {/* Format code */}
            <button
              type="button"
              onClick={handleFormatCode}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition text-xs flex items-center gap-1"
              title={lang === 'bn' ? 'কোড ফরম্যাট করুন' : 'Format HTML'}
            >
              <Sparkles className="w-3.5 h-3.5" />
            </button>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition text-xs flex items-center gap-1"
              title={lang === 'bn' ? 'কোড কপি করুন' : 'Copy Code'}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>

            {/* Download Button */}
            <button
              type="button"
              onClick={handleDownload}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition text-xs"
              title={lang === 'bn' ? '.html ফাইল ডাউনলোড করুন' : 'Download .html file'}
            >
              <Download className="w-3.5 h-3.5" />
            </button>

            {/* Reset Button */}
            <button
              type="button"
              onClick={handleReset}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-rose-400 transition text-xs"
              title={lang === 'bn' ? 'রিসেট করুন' : 'Reset Code'}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* ── Sub-toolbar for Editor: Preset Select & Quick Chips ──────────── */}
      {activeTab === 'editor' && (
        <div className="bg-slate-950/60 border-b border-slate-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Preset Selector */}
          <div className="flex items-center gap-2 flex-1 min-w-[260px]">
            <span className="text-slate-400 font-mono font-medium shrink-0">
              {lang === 'bn' ? 'নমুনা কোড:' : 'Presets:'}
            </span>
            <select
              value={selectedTemplateId}
              onChange={(e) => handleTemplateChange(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-700 text-xs font-medium text-slate-100 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            >
              {HTML_TEMPLATES.map((tpl) => (
                <option key={tpl.id} value={tpl.id}>
                  {tpl.isChallenge ? '⚠️ ' : ''}
                  {lang === 'bn' ? tpl.titleBn : tpl.titleEn}
                </option>
              ))}
            </select>
          </div>

          {/* Quick Snippet Chips */}
          <div className="hidden xl:flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <span className="text-[11px] text-slate-500 font-mono">
              {lang === 'bn' ? 'দ্রুত যুক্ত:' : 'Quick insert:'}
            </span>
            {quickSnippets.map((snip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleInsertSnippet(snip.code)}
                className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition whitespace-nowrap"
              >
                + {snip.label}
              </button>
            ))}
          </div>

          {/* Canvas theme & auto-run */}
          <div className="flex items-center gap-3 shrink-0">
            <label className="flex items-center gap-1.5 text-[11px] text-slate-400 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={autoRun}
                onChange={(e) => setAutoRun(e.target.checked)}
                className="rounded border-slate-700 text-cyan-500 focus:ring-0"
              />
              <span>{lang === 'bn' ? 'অটো-রান' : 'Auto-run'}</span>
            </label>

            <button
              type="button"
              onClick={() => setPreviewTheme(previewTheme === 'light' ? 'dark' : 'light')}
              className="px-2 py-0.5 rounded text-[11px] bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-1 transition"
              title={lang === 'bn' ? 'প্রিভিউ ব্যাকগ্রাউন্ড পরিবর্তন' : 'Toggle Preview Canvas Background'}
            >
              {previewTheme === 'light' ? <Moon className="w-3 h-3 text-amber-400" /> : <Sun className="w-3 h-3 text-amber-400" />}
              <span>{previewTheme === 'light' ? 'Light Canvas' : 'Dark Canvas'}</span>
            </button>
          </div>
        </div>
      )}

      {/* ── Challenge Banner ────────────────────────────────────────────── */}
      {activeTab === 'editor' && activeTemplate?.isChallenge && (
        <div className="bg-amber-950/40 border-b border-amber-800/60 p-3 px-4 flex items-center gap-3 text-xs text-amber-200">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <div className="flex-1">
            <span className="font-bold uppercase tracking-wider text-amber-300 mr-2">
              {lang === 'bn' ? 'চ্যালেঞ্জ সমস্যা:' : 'Challenge Task:'}
            </span>
            <span>{lang === 'bn' ? activeTemplate.descriptionBn : activeTemplate.descriptionEn}</span>
          </div>
        </div>
      )}

      {/* ── TAB 1: CODE EDITOR & LIVE PREVIEW ──────────────────────────── */}
      {activeTab === 'editor' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 min-h-[580px]">
          {/* Left Pane: Code Editor */}
          <div className="flex flex-col bg-slate-950/90">
            <div className="bg-slate-900/60 border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="font-semibold text-slate-300">HTML / CSS Source</span>
              </span>
              <span>{code.length} chars • UTF-8</span>
            </div>
            <div className="relative flex-1 p-2 flex flex-col">
              <textarea
                ref={textareaRef}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full flex-1 min-h-[500px] bg-transparent text-cyan-300 dark:text-cyan-300 font-mono text-xs sm:text-sm p-3 leading-relaxed resize-none focus:outline-none selection:bg-cyan-700 selection:text-white"
                spellCheck={false}
                autoCapitalize="off"
                autoCorrect="off"
                placeholder="Write HTML here..."
              />
            </div>
          </div>

          {/* Right Pane: Live Iframe Preview with srcDoc */}
          <div className="flex flex-col bg-slate-950 flex-1 items-center justify-start overflow-auto p-4">
            <div className="w-full pb-2 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold text-slate-300">
                  {lang === 'bn' ? 'লাইভ প্রিভিউ উইন্ডো' : 'Live Browser Preview'}
                </span>
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-emerald-400 font-mono">● LIVE</span>
                <span className="text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800 font-mono">
                  {viewport.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Simulated Browser Frame */}
            <div
              className={`transition-all duration-300 w-full ${viewportWidths[viewport]} rounded-xl overflow-hidden shadow-2xl border-4 border-slate-700 min-h-[500px] flex flex-col ${
                previewTheme === 'light' ? 'bg-white' : 'bg-slate-900'
              }`}
            >
              {/* Simulated Browser Address Bar */}
              <div className="bg-slate-200 dark:bg-slate-800 px-3 py-1.5 flex items-center gap-2 border-b border-slate-300 dark:border-slate-700">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex-1 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 font-mono text-[11px] px-3 py-0.5 rounded truncate text-center border border-slate-200 dark:border-slate-800">
                  https://localhost/hsc_board_preview.html
                </div>
              </div>

              {/* Sandboxed Live Output Iframe using srcDoc for bulletproof cross-origin rendering */}
              <iframe
                srcDoc={renderedCode}
                title="HTML Output Preview"
                sandbox="allow-scripts allow-modals allow-same-origin"
                className={`w-full flex-1 min-h-[460px] border-0 ${
                  previewTheme === 'light' ? 'bg-white text-slate-900' : 'bg-slate-900 text-slate-100'
                }`}
              />
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 2: HTML TAGS CATALOG ────────────────────────────────────── */}
      {activeTab === 'tags' && (
        <div className="p-4 sm:p-6 space-y-6 bg-slate-950/60">
          {/* Header & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
                <span>🏷️</span>
                <span>{lang === 'bn' ? 'এইচটিএমএল ট্যাগ রেফারেন্স ও হ্যান্ডবুক' : 'HTML5 Tags Catalog'}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'bn'
                  ? 'এইচএসসি আইসিটি ৪র্থ অধ্যায় ও সাধারণ ওয়েব ডিজাইনে ব্যবহৃত সব ট্যাগ। ক্লিক করে বিস্তারিত দেখুন বা সরাসরি এডিটরে যোগ করুন।'
                  : 'Complete catalog of essential HTML tags. Click to inspect attributes or insert code snippet.'}
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={tagSearch}
                onChange={(e) => setTagSearch(e.target.value)}
                placeholder={lang === 'bn' ? 'ট্যাগ বা বিবরণ খুঁজুন...' : 'Search tags...'}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              />
              {tagSearch && (
                <button
                  type="button"
                  onClick={() => setTagSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setTagCategory('all')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                tagCategory === 'all'
                  ? 'bg-cyan-600 text-white font-bold'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {lang === 'bn' ? 'সব ট্যাগ' : 'All'}
            </button>
            {HTML_TAG_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setTagCategory(cat.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition ${
                  tagCategory === cat.id
                    ? 'bg-cyan-600 text-white font-bold'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{lang === 'bn' ? cat.labelBn : cat.labelEn}</span>
              </button>
            ))}
          </div>

          {/* Tags Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTags.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-4 flex flex-col justify-between gap-3 transition shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono font-bold text-sm text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                      {t.tag}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {t.isHscChapter4 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                          HSC Ch.4
                        </span>
                      )}
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                        {t.type === 'container'
                          ? lang === 'bn' ? 'কন্টেইনার' : 'Container'
                          : lang === 'bn' ? 'এম্পটি' : 'Empty'}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition">
                    {lang === 'bn' ? t.titleBn : t.titleEn}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {lang === 'bn' ? t.descBn : t.descEn}
                  </p>

                  {t.attrs && t.attrs.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap items-center gap-1">
                      <span className="text-[10px] text-slate-500 font-mono">attrs:</span>
                      {t.attrs.map((attr, aIdx) => (
                        <span key={aIdx} className="text-[10px] font-mono bg-slate-950 text-slate-300 px-1.5 py-0.5 rounded border border-slate-800">
                          {attr}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between border-t border-slate-800 pt-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleInsertSnippet(t.example)}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition"
                  >
                    <span>+ {lang === 'bn' ? 'এডিটরে যুক্ত করুন' : 'Insert Code'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalItem({ type: 'tag', data: t })}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition"
                  >
                    <span>{lang === 'bn' ? 'বিস্তারিত' : 'Details'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredTags.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-xs font-mono">
              {lang === 'bn' ? 'কোনো ট্যাগ খুঁজে পাওয়া যায়নি।' : 'No tags matched your query.'}
            </div>
          )}
        </div>
      )}

      {/* ── TAB 3: CSS REFERENCE ────────────────────────────────────────── */}
      {activeTab === 'css' && (
        <div className="p-4 sm:p-6 space-y-6 bg-slate-950/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
                <span>🎨</span>
                <span>{lang === 'bn' ? 'সিএসএস প্রোপার্টি ও স্টাইলিং গাইড' : 'CSS Reference & Styling Guide'}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'bn'
                  ? 'এইচটিএমএল এলিমেন্টে রঙ, ফন্ট, মার্জিন, প্যাডিং ও Flexbox লেআউট যুক্ত করার নিয়মাবলী।'
                  : 'Quick reference for styling HTML elements with CSS box model, colors, and layout systems.'}
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={cssSearch}
                onChange={(e) => setCssSearch(e.target.value)}
                placeholder={lang === 'bn' ? 'CSS প্রোপার্টি খুঁজুন...' : 'Search CSS...'}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              />
              {cssSearch && (
                <button
                  type="button"
                  onClick={() => setCssSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setCssCategory('all')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                cssCategory === 'all'
                  ? 'bg-cyan-600 text-white font-bold'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {lang === 'bn' ? 'সব প্রোপার্টি' : 'All'}
            </button>
            {CSS_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCssCategory(cat.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition ${
                  cssCategory === cat.id
                    ? 'bg-cyan-600 text-white font-bold'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{lang === 'bn' ? cat.labelBn : cat.labelEn}</span>
              </button>
            ))}
          </div>

          {/* CSS Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCss.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-4 flex flex-col justify-between gap-3 transition shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono font-bold text-sm text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                      {item.prop}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 uppercase">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition">
                    {lang === 'bn' ? item.titleBn : item.titleEn}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {lang === 'bn' ? item.descBn : item.descEn}
                  </p>

                  {item.values && item.values.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap items-center gap-1">
                      <span className="text-[10px] text-slate-500 font-mono">values:</span>
                      {item.values.map((v, vIdx) => (
                        <span key={vIdx} className="text-[10px] font-mono bg-slate-950 text-slate-300 px-1.5 py-0.5 rounded border border-slate-800">
                          {v}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between border-t border-slate-800 pt-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleInsertSnippet(`<style>\n  /* ${item.prop} */\n  ${item.example}\n</style>`)}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition"
                  >
                    <span>+ {lang === 'bn' ? 'স্টাইল যোগ করুন' : 'Insert CSS'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalItem({ type: 'css', data: item })}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition"
                  >
                    <span>{lang === 'bn' ? 'কোড উদাহরণ' : 'Example'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── TAB 4: HSC ICT GLOSSARY ─────────────────────────────────────── */}
      {activeTab === 'glossary' && (
        <div className="p-4 sm:p-6 space-y-6 bg-slate-950/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
                <span>📖</span>
                <span>
                  {lang === 'bn'
                    ? 'এইচএসসি আইসিটি ৪র্থ অধ্যায়: গুরুত্বপূর্ণ পারিভাষিক শব্দ ও সংজ্ঞা'
                    : 'HSC ICT Chapter 4 Technical Glossary'}
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'bn'
                  ? 'বোর্ড পরীক্ষার জ্ঞানমূলক ও অনুধাবনমূলক প্রশ্নের জন্য সকল পারিভাষিক শব্দ (Paribhasik Sobdo) অক্ষত রেখে স্পষ্ট ব্যাখ্যা।'
                  : 'Key terminology and examination definitions aligned with the NCTB HSC ICT curriculum.'}
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                placeholder={lang === 'bn' ? 'পরিভাষা খুঁজুন (যেমন: rowspan, URL)...' : 'Search terms...'}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              />
              {glossarySearch && (
                <button
                  type="button"
                  onClick={() => setGlossarySearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Glossary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGlossary.map((term, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-slate-700 transition shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                  <div>
                    {/* Paribhasik Sobdo kept prominently in English */}
                    <span className="text-sm font-bold font-mono text-cyan-400">
                      {term.termEn}
                    </span>
                    <span className="ml-2 text-xs text-slate-400 font-sans">
                      ({term.termBn})
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 uppercase">
                    {term.category}
                  </span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'bn' ? term.defBn : term.defEn}
                </div>

                {lang === 'bn' && (
                  <div className="text-[11px] text-slate-400 font-mono bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-cyan-400 font-bold mr-1">English Standard:</span>
                    <span>{term.defEn}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Detail Modal for Tag or CSS ──────────────────────────────────── */}
      {modalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-base text-cyan-400">
                  {modalItem.type === 'tag'
                    ? (modalItem.data as HtmlTag).tag
                    : (modalItem.data as CssProp).prop}
                </span>
                <span className="text-xs text-slate-400">
                  {modalItem.type === 'tag'
                    ? lang === 'bn'
                      ? (modalItem.data as HtmlTag).titleBn
                      : (modalItem.data as HtmlTag).titleEn
                    : lang === 'bn'
                    ? (modalItem.data as CssProp).titleBn
                    : (modalItem.data as CssProp).titleEn}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setModalItem(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <p className="leading-relaxed">
                {modalItem.type === 'tag'
                  ? lang === 'bn'
                    ? (modalItem.data as HtmlTag).descBn
                    : (modalItem.data as HtmlTag).descEn
                  : lang === 'bn'
                  ? (modalItem.data as CssProp).descBn
                  : (modalItem.data as CssProp).descEn}
              </p>

              {modalItem.type === 'tag' && (modalItem.data as HtmlTag).attrs && (
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1.5">
                  <span className="font-semibold text-slate-400 block">
                    {lang === 'bn' ? 'ব্যবহারযোগ্য অ্যাট্রিবিউটসমূহ:' : 'Supported Attributes:'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(modalItem.data as HtmlTag).attrs!.map((attr, aIdx) => (
                      <span key={aIdx} className="font-mono text-cyan-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                        {attr}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {modalItem.type === 'css' && (modalItem.data as CssProp).values && (
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1.5">
                  <span className="font-semibold text-slate-400 block">
                    {lang === 'bn' ? 'সম্ভাব্য ভ্যালু:' : 'Allowed Values:'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(modalItem.data as CssProp).values!.map((v, vIdx) => (
                      <span key={vIdx} className="font-mono text-cyan-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Snippet Box */}
              <div className="space-y-1.5">
                <span className="font-semibold text-slate-400 block">
                  {lang === 'bn' ? 'ব্যবহারিক উদাহরণ:' : 'Code Example:'}
                </span>
                <pre className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-cyan-300 font-mono text-[11px] overflow-x-auto leading-relaxed">
                  {modalItem.data.example}
                </pre>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  handleInsertSnippet(modalItem.data.example);
                  setModalItem(null);
                }}
                className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition"
              >
                <span>{lang === 'bn' ? 'কোডটি এডিটরে লোড করুন' : 'Load Example in Editor'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
