import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
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

  const renderAuthors = (authors: string[]) => {
    return authors.map((author, index) => {
      const isTargetAuthor = author.includes('Alemu, G. Y.') || author.includes('Yisfa, G.');
      return (
        <span key={index}>
          {isTargetAuthor ? <strong className="text-slate-900 dark:text-slate-100 font-semibold">{author}</strong> : author}
          {index < authors.length - 1 ? ', ' : ''}
        </span>
      );
    });
  };

  const tabs = [
    { id: 'all', label: `All Publications (${PUBLICATIONS.length})` },
    { id: 'journal', label: `Journals (${PUBLICATIONS.filter(p => p.type === 'journal').length})` },
    { id: 'article', label: `Special Articles (${PUBLICATIONS.filter(p => p.type === 'article').length})` },
    { id: 'conference', label: `Conferences (${PUBLICATIONS.filter(p => p.type === 'conference').length})` },
  ];

  return (
    <section id="research" className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 font-mono mb-1">
            SCHOLARLY OUTPUT &amp; DISSEMINATION
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Publications &amp; Research Articles
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
            Peer-reviewed engineering research, community energy field studies, and conference presentations.
          </p>
        </div>

        {/* Filter Pills with Counts */}
        <div className="flex items-center gap-2 pb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap active:scale-98 ${
                filter === tab.id
                  ? 'bg-teal-600 text-white shadow-2xs font-semibold'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-4 sm:space-y-5">
          {filteredPubs.map((pub) => {
            const isExpanded = expandedId === pub.id;
            return (
              <div 
                key={pub.id}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs hover:border-teal-500/50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="font-bold text-teal-700 dark:text-teal-400">{pub.year}</span>
                      <span className="text-slate-300 dark:text-slate-700">·</span>
                      <span className="uppercase text-[11px] tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                        {pub.type}
                      </span>
                    </div>

                    <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                      {pub.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {renderAuthors(pub.authors)}
                    </p>

                    <p className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                      {pub.venue}
                    </p>
                  </div>

                  {/* Actions Column */}
                  <div className="flex items-center sm:flex-col gap-2 shrink-0">
                    <button
                      onClick={() => handleCopyBibtex(pub)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-medium transition-colors"
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900 text-teal-700 dark:text-teal-300 hover:bg-teal-100 text-xs font-semibold transition-colors"
                      >
                        <span>View</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Abstract Accordion */}
                {pub.abstract && (
                  <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : pub.id)}
                      className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-400 flex items-center gap-1 transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Abstract' : 'Read Abstract'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                    {isExpanded && (
                      <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-800 leading-relaxed">
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
