import React, { useState } from 'react';
import { BookOpen, Copy, Check, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { PUBLICATIONS, Publication } from '../data/portfolioData';

export const PublicationsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'journal' | 'article' | 'conference'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCopyBibtex = (pub: Publication) => {
    navigator.clipboard.writeText(pub.bibtex);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filteredPubs = PUBLICATIONS.filter(p => filter === 'all' || p.type === filter);

  return (
    <section id="research" className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 font-mono mb-1">
            Scholarly Output &amp; Dissemination
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Publications &amp; Research Articles
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
            Peer-reviewed engineering research, community energy field studies, and conference presentations.
          </p>
        </div>

        {/* Dedicated Filter Tabs Row (consistent across mobile and desktop) */}
        <div className="flex items-center gap-1.5 pb-6 overflow-x-auto">
          {[
            { id: 'all', label: 'All Publications' },
            { id: 'journal', label: 'Journals' },
            { id: 'article', label: 'Special Articles' },
            { id: 'conference', label: 'Conferences' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === tab.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPubs.map((pub) => {
            const isExpanded = expandedId === pub.id;
            return (
              <div 
                key={pub.id}
                className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <span className="font-bold text-teal-700 dark:text-teal-400">{pub.year}</span>
                      <span>·</span>
                      <span className="uppercase text-[11px] tracking-wider">{pub.type}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {pub.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {pub.authors.join(', ')}
                    </p>

                    <p className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                      {pub.venue}
                    </p>
                  </div>

                  {/* Actions Column */}
                  <div className="flex items-center sm:flex-col gap-2 shrink-0">
                    <button
                      onClick={() => handleCopyBibtex(pub)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium transition-colors"
                      title="Copy BibTeX Citation"
                    >
                      {copiedId === pub.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === pub.id ? 'Copied' : 'BibTeX'}</span>
                    </button>

                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900/60 text-teal-800 dark:text-teal-300 hover:bg-teal-100 text-xs font-medium transition-colors"
                      >
                        <span>View</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Abstract Accordion */}
                {pub.abstract && (
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : pub.id)}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1"
                    >
                      <span>{isExpanded ? 'Hide Abstract' : 'Read Abstract'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isExpanded && (
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed bg-slate-50 dark:bg-slate-950/40 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                        {pub.abstract}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
