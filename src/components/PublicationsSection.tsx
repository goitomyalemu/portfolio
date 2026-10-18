import React, { useState, useMemo } from 'react';
import { Copy, Check, ExternalLink, ChevronDown, ChevronUp, Search, Quote } from 'lucide-react';
import { PUBLICATIONS, Publication } from '../data/portfolioData';

type CitationFormat = 'bibtex' | 'ieee' | 'apa';

export const PublicationsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'journal' | 'article' | 'conference'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [citationFormat, setCitationFormat] = useState<Record<string, CitationFormat>>({});

  const formatCitation = (pub: Publication, format: CitationFormat): string => {
    switch (format) {
      case 'ieee':
        return `${pub.authors.join(', ')}, "${pub.title}," ${pub.venue}, ${pub.year}.${pub.doi ? ` DOI: https://doi.org/${pub.doi}` : pub.url ? ` Available: ${pub.url}` : ''}`;
      case 'apa':
        return `${pub.authors.join(', ')} (${pub.year}). ${pub.title}. ${pub.venue}.${pub.doi ? ` https://doi.org/${pub.doi}` : pub.url ? ` ${pub.url}` : ''}`;
      case 'bibtex':
      default:
        return pub.bibtex;
    }
  };

  const handleCopyCitation = (pub: Publication) => {
    const format = citationFormat[pub.id] || 'bibtex';
    const text = formatCitation(pub, format);
    navigator.clipboard.writeText(text);
    setCopiedKey(`${pub.id}-${format}`);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const filteredPubs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return PUBLICATIONS.filter(p => {
      const matchesType = filter === 'all' || p.type === filter;
      if (!matchesType) return false;
      if (!q) return true;
      const matchesTitle = p.title.toLowerCase().includes(q);
      const matchesAuthors = p.authors.some(a => a.toLowerCase().includes(q));
      const matchesVenue = p.venue.toLowerCase().includes(q);
      const matchesAbstract = p.abstract?.toLowerCase().includes(q) || false;
      const matchesDoi = p.doi?.toLowerCase().includes(q) || false;
      return matchesTitle || matchesAuthors || matchesVenue || matchesAbstract || matchesDoi;
    });
  }, [filter, searchQuery]);

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
            Peer-reviewed engineering research, microgrid field studies, and clinical data systems with direct DOI resolution and citation tools.
          </p>
        </div>

        {/* Filter Tabs + Search Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6">
          
          {/* Segmented Filter Controls */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap active:scale-98 cursor-pointer ${
                  filter === tab.id
                    ? 'bg-teal-700 text-white shadow-2xs'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative sm:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter by keyword, title, DOI..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-teal-600 shadow-2xs"
            />
          </div>

        </div>

        {/* Publications List */}
        <div className="space-y-4 sm:space-y-5">
          {filteredPubs.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 text-xs">
              No publications matched your search query. Try searching by author or keyword.
            </div>
          ) : (
            filteredPubs.map((pub) => {
              const isExpanded = expandedId === pub.id;
              const currentFmt = citationFormat[pub.id] || 'bibtex';
              const isCopied = copiedKey === `${pub.id}-${currentFmt}`;

              return (
                <div 
                  key={pub.id}
                  id={`pub-${pub.id}`}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs hover:border-teal-500/50 transition-colors scroll-mt-24"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      
                      {/* Zero-Pill Unboxed Metadata with Typographic Separator */}
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                        <span className="font-bold text-teal-700 dark:text-teal-400 tabular-nums">{pub.year}</span>
                        <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                        <span className="uppercase text-[11px] tracking-wider font-semibold text-slate-700 dark:text-slate-300">
                          {pub.type}
                        </span>
                      </div>

                      <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                        {pub.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {renderAuthors(pub.authors)}
                      </p>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-0.5">
                        <p className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                          {pub.venue}
                        </p>
                        {pub.doi && (
                          <div className="inline-flex items-center gap-1.5 font-mono text-[11px]">
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                            >
                              <span className="font-semibold text-slate-500">DOI:</span>
                              <span className="underline underline-offset-2">{pub.doi}</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(pub.doi!);
                                setCopiedKey(`doi-${pub.id}`);
                                setTimeout(() => setCopiedKey(null), 2500);
                              }}
                              className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
                              title="Copy DOI identifier"
                            >
                              {copiedKey === `doi-${pub.id}` ? (
                                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-sans font-semibold">Copied!</span>
                              ) : (
                                <Copy className="w-2.5 h-2.5" />
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions & Multi-Format Citation Toolbar */}
                    <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                      
                      {/* Citation Format Switcher + Copy */}
                      <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                        {(['bibtex', 'ieee', 'apa'] as const).map((fmt) => (
                          <button
                            key={fmt}
                            onClick={() => setCitationFormat(prev => ({ ...prev, [pub.id]: fmt }))}
                            className={`px-2 py-0.5 text-[10px] font-mono uppercase font-semibold rounded transition-colors ${
                              currentFmt === fmt
                                ? 'bg-white dark:bg-slate-900 text-teal-800 dark:text-teal-300 shadow-2xs'
                                : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                            }`}
                          >
                            {fmt}
                          </button>
                        ))}

                        <button
                          onClick={() => handleCopyCitation(pub)}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-medium bg-teal-700 text-white hover:bg-teal-800 transition-colors cursor-pointer"
                          title={`Copy citation in ${currentFmt.toUpperCase()} format`}
                        >
                          {isCopied ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                          <span>{isCopied ? 'Copied' : 'Cite'}</span>
                        </button>
                      </div>

                      {pub.url && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-xs font-semibold transition-colors w-full sm:w-auto justify-center"
                        >
                          <span>View Article</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Expandable Abstract Preview */}
                  {pub.abstract && (
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : pub.id)}
                        className="text-xs text-slate-600 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-300 flex items-center gap-1 font-medium cursor-pointer"
                      >
                        <span>{isExpanded ? 'Hide Abstract' : 'Read Abstract'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {isExpanded && (
                        <div className="mt-2.5 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                          <p>{pub.abstract}</p>
                        </div>
                      )}
                    </div>
                  )}

                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
