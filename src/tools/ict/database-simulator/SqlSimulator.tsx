import React, { useState, useEffect } from 'react';
import { Database, Play, History, Table, Key, AlertCircle, CheckCircle2 } from 'lucide-react';
import { INITIAL_DATABASE, SQL_PRESETS, executeSql, type QueryResult } from './sqlEngine';

interface SqlSimulatorProps {
  lang?: 'bn' | 'en';
}

export const SqlSimulator: React.FC<SqlSimulatorProps> = ({ lang = 'bn' }) => {
  const [query, setQuery] = useState<string>(SQL_PRESETS[0].query);
  const [selectedPresetId, setSelectedPresetId] = useState<string>(SQL_PRESETS[0].id);
  const [result, setResult] = useState<QueryResult | null>(null);
  const [queryHistory, setQueryHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [showSchema, setShowSchema] = useState<boolean>(false);

  // Execute initial query
  useEffect(() => {
    runQuery(query);
  }, []);

  const runQuery = (sqlToRun: string) => {
    const res = executeSql(sqlToRun);
    setResult(res);

    // Append to query history (max 10)
    setQueryHistory((prev) => {
      const filtered = prev.filter((q) => q !== sqlToRun);
      return [sqlToRun, ...filtered].slice(0, 10);
    });
  };

  const handlePresetSelect = (presetId: string) => {
    const p = SQL_PRESETS.find((item) => item.id === presetId);
    if (p) {
      setSelectedPresetId(presetId);
      setQuery(p.query);
      runQuery(p.query);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl space-y-0">
      {/* Top Header & Presets */}
      <div className="bg-slate-950 border-b border-slate-800 p-4 flex flex-wrap items-center justify-between gap-3">
        {/* Preset Selector */}
        <div className="flex items-center gap-2 flex-1 min-w-0 w-full sm:w-auto sm:min-w-[240px]">
          <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider shrink-0">
            {lang === 'bn' ? 'এসকিউএল প্রিসেট:' : 'SQL Preset:'}
          </span>
          <select
            value={selectedPresetId}
            onChange={(e) => handlePresetSelect(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 text-xs font-medium text-white rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          >
            {SQL_PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {lang === 'bn' ? p.titleBn : p.titleEn}
              </option>
            ))}
          </select>
        </div>

        {/* View Schema & History Toggles */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowSchema(!showSchema)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              showSchema
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950'
                : 'bg-slate-900 border border-slate-700 text-slate-300 hover:text-white'
            }`}
          >
            <Table className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'bn' ? 'স্কিমা ভিউ (ER)' : 'View Schema (ER)'}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowHistory(!showHistory)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              showHistory
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950'
                : 'bg-slate-900 border border-slate-700 text-slate-300 hover:text-white'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>
              {lang === 'bn' ? `কুয়েরি ইতিহাস (${queryHistory.length})` : `History (${queryHistory.length})`}
            </span>
          </button>
        </div>
      </div>

      {/* Relational Schema Drawer (Collapsible) */}
      {showSchema && (
        <div className="bg-slate-950 border-b border-slate-800 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Database className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'bn' ? 'ডেটাবেজ টেবিল কাঠামো ও প্রাইমারি/ফরেন কি রিলেশন' : 'Database Relational Schema'}</span>
            </h4>
            <button
              type="button"
              onClick={() => setShowSchema(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              ✕ {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.values(INITIAL_DATABASE).map((tbl) => (
              <div key={tbl.name} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-white font-mono text-sm">{tbl.name}</span>
                  <span className="text-[10px] font-mono text-slate-400">{tbl.data.length} records</span>
                </div>
                <div className="space-y-1 text-xs font-mono">
                  {tbl.columns.map((col) => (
                    <div key={col.name} className="flex items-center justify-between text-slate-300 py-0.5">
                      <span className="flex items-center gap-1.5">
                        {col.isPrimary && (
                          <span title="Primary Key">
                            <Key className="w-3 h-3 text-amber-400" />
                          </span>
                        )}
                        {col.isForeign && (
                          <span title="Foreign Key">
                            <Key className="w-3 h-3 text-cyan-400" />
                          </span>
                        )}
                        <span className={col.isPrimary ? 'font-bold text-amber-300' : ''}>{col.name}</span>
                      </span>
                      <span className="text-slate-500 text-[11px]">{col.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Query History Drawer (Collapsible) */}
      {showHistory && (
        <div className="bg-slate-950 border-b border-slate-800 p-4 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
            <span>{lang === 'bn' ? 'সাম্প্রতিক রান করা কুয়েরি সমূহ (ক্লিক করে লোড করুন):' : 'Recent Queries:'}</span>
            <button
              type="button"
              onClick={() => setShowHistory(false)}
              className="hover:text-white"
            >
              ✕
            </button>
          </div>
          <div className="space-y-1.5 max-h-40 overflow-y-auto">
            {queryHistory.map((q, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setQuery(q);
                  runQuery(q);
                  setShowHistory(false);
                }}
                className="p-2 rounded bg-slate-900 hover:bg-slate-800 font-mono text-xs text-cyan-300 cursor-pointer transition flex items-center justify-between"
              >
                <span className="truncate">{q}</span>
                <span className="text-[10px] text-slate-500">Run →</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Query Input Terminal */}
      <div className="p-4 bg-slate-950/80 border-b border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            SQL Query Terminal
          </span>
          <button
            type="button"
            onClick={() => runQuery(query)}
            className="px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-lg shadow-cyan-950"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>{lang === 'bn' ? 'কুয়েরি চালান (F5)' : 'Execute SQL'}</span>
          </button>
        </div>

        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
              e.preventDefault();
              runQuery(query);
            }
          }}
          rows={3}
          className="w-full bg-slate-900 border border-slate-700 text-cyan-300 font-mono text-xs sm:text-sm p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 leading-relaxed"
          placeholder="SELECT * FROM Student WHERE GPA >= 5.00;"
        />
      </div>

      {/* Query Result Grid */}
      <div className="p-4 sm:p-6 space-y-4">
        {result && (
          <div className="space-y-3">
            {/* Status Bar */}
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                {result.success ? (
                  <span className="text-emerald-400 flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    {lang === 'bn' ? `সফল: ${result.rowCount}টি রেকর্ড পাওয়া গেছে` : `Success: ${result.rowCount} rows returned`}
                  </span>
                ) : (
                  <span className="text-rose-400 flex items-center gap-1 font-bold">
                    <AlertCircle className="w-4 h-4" />
                    {lang === 'bn' ? 'কুয়েরি ত্রুটি' : 'Syntax Error'}
                  </span>
                )}
              </div>
              <span className="text-slate-500">
                {result.executionTimeMs} ms • Client-Side Engine
              </span>
            </div>

            {/* Error Message */}
            {!result.success && (
              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs font-mono text-rose-300">
                {result.message}
              </div>
            )}

            {/* Results Table */}
            {result.success && (
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                <table className="w-full text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="bg-slate-900 text-slate-200 border-b border-slate-800">
                      {result.columns.map((col, idx) => (
                        <th key={idx} className="p-3 border-r border-slate-800 last:border-r-0 font-bold uppercase tracking-wider text-cyan-400">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {result.rows.length === 0 ? (
                      <tr>
                        <td colSpan={result.columns.length} className="p-4 text-center text-slate-500">
                          No matching records found.
                        </td>
                      </tr>
                    ) : (
                      result.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-900/40 transition">
                          {result.columns.map((col, cIdx) => (
                            <td key={cIdx} className="p-3 border-r border-slate-800 last:border-r-0">
                              {row[col] !== null && row[col] !== undefined ? String(row[col]) : 'NULL'}
                            </td>
                          ))}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
