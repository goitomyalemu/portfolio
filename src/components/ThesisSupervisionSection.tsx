import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { THESIS_SUPERVISIONS } from '../data/portfolioData';

export const ThesisSupervisionSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: `All Domains (${THESIS_SUPERVISIONS.length})` },
    { id: 'FPGA & Hardware', label: `FPGA & Hardware (${THESIS_SUPERVISIONS.filter(t => t.category === 'FPGA & Hardware').length})` },
    { id: 'AI & IoT', label: `AI & IoT (${THESIS_SUPERVISIONS.filter(t => t.category === 'AI & IoT').length})` },
    { id: 'Clean Energy', label: `Clean Energy (${THESIS_SUPERVISIONS.filter(t => t.category === 'Clean Energy').length})` },
    { id: 'Automation', label: `Automation (${THESIS_SUPERVISIONS.filter(t => t.category === 'Automation').length})` },
  ];

  const filteredTheses = THESIS_SUPERVISIONS.filter(t => {
    const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.tech.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="theses" className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 font-mono mb-1">
              UNDERGRADUATE ENGINEERING MENTORSHIP
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              BSc Thesis Supervision (2017 – 2026)
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Supervising applied undergraduate engineering theses at Mekelle Institute of Technology (MIT) 
              across FPGA reconfigurable hardware, IoT edge systems, and clean energy automation.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, FPGA, ESP32..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-teal-500 shadow-2xs"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 pb-5 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap active:scale-98 ${
                selectedCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-2xs font-semibold'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Theses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {filteredTheses.map((thesis, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs hover:border-teal-500/50 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-teal-700 dark:text-teal-400">{thesis.year}</span>
                    <span className="text-slate-300 dark:text-slate-700">·</span>
                    <span className="text-slate-500 dark:text-slate-400">{thesis.level} Thesis</span>
                  </div>
                  <span className="text-[11px] font-sans font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                    {thesis.category}
                  </span>
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  {thesis.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {thesis.description}
                </p>
              </div>

              {/* Technologies Tag Row */}
              <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5 mt-4">
                {thesis.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
