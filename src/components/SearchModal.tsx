import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Search, 
  X, 
  Briefcase, 
  BookOpen, 
  Cpu, 
  GraduationCap, 
  Building, 
  ExternalLink, 
  ArrowRight, 
  CornerDownLeft,
  Sparkles,
  Award
} from 'lucide-react';
import { 
  PROJECTS, 
  PUBLICATIONS, 
  TECHNICAL_SKILLS, 
  CERTIFICATIONS, 
  THESIS_SUPERVISIONS, 
  WORK_EXPERIENCE 
} from '../data/portfolioData';

export type SearchFilterCategory = 'all' | 'projects' | 'publications' | 'skills' | 'theses' | 'experience';

export interface SearchResultItem {
  id: string;
  title: string;
  type: 'project' | 'publication' | 'skill' | 'thesis' | 'experience' | 'certification';
  categoryLabel: string;
  subtitle: string;
  description: string;
  tags?: string[];
  targetId: string;
  url?: string;
  highlightText?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SearchFilterCategory>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Build searchable index
  const allSearchItems = useMemo<SearchResultItem[]>(() => {
    const items: SearchResultItem[] = [];

    // 1. Projects
    PROJECTS.forEach((p) => {
      items.push({
        id: `proj-${p.id}`,
        title: p.title,
        type: 'project',
        categoryLabel: 'Project',
        subtitle: `${p.role} · ${p.period}`,
        description: p.summary,
        tags: p.tags,
        targetId: `project-${p.id}`,
        url: p.url
      });
    });

    // 2. Publications
    PUBLICATIONS.forEach((pub) => {
      items.push({
        id: `pub-${pub.id}`,
        title: pub.title,
        type: 'publication',
        categoryLabel: 'Publication',
        subtitle: `${pub.venue} (${pub.year}) · ${pub.type.toUpperCase()}`,
        description: pub.abstract || pub.venue,
        tags: [pub.type, String(pub.year), ...pub.authors.slice(0, 2)],
        targetId: `pub-${pub.id}`,
        url: pub.url
      });
    });

    // 3. Technical Skills
    TECHNICAL_SKILLS.forEach((group, gIdx) => {
      group.items.forEach((item, iIdx) => {
        items.push({
          id: `skill-${gIdx}-${iIdx}`,
          title: item.name,
          type: 'skill',
          categoryLabel: 'Skill & Tech',
          subtitle: group.category,
          description: item.detail,
          tags: item.detail.split(',').map(s => s.trim()),
          targetId: 'skills'
        });
      });
    });

    // 4. Certifications
    CERTIFICATIONS.forEach((cert, cIdx) => {
      items.push({
        id: `cert-${cIdx}`,
        title: cert.title,
        type: 'certification',
        categoryLabel: 'Skill & Tech',
        subtitle: `${cert.issuer} · ${cert.year}`,
        description: `${cert.category} Certification verified by ${cert.issuer}`,
        tags: [cert.category, cert.year],
        targetId: 'skills'
      });
    });

    // 5. Thesis Supervisions
    THESIS_SUPERVISIONS.forEach((t, tIdx) => {
      items.push({
        id: `thesis-${tIdx}`,
        title: t.title,
        type: 'thesis',
        categoryLabel: 'Supervision',
        subtitle: `BSc Capstone (${t.year}) · ${t.category}`,
        description: t.description,
        tags: t.tech,
        targetId: 'theses'
      });
    });

    // 6. Work Experience
    WORK_EXPERIENCE.forEach((exp, eIdx) => {
      items.push({
        id: `exp-${eIdx}`,
        title: exp.role,
        type: 'experience',
        categoryLabel: 'Experience',
        subtitle: `${exp.organization} · ${exp.period}`,
        description: exp.description.slice(0, 2).join(' '),
        targetId: `exp-${eIdx}`,
        tags: [exp.location]
      });
    });

    return items;
  }, []);

  // Filtered results
  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();

    return allSearchItems.filter((item) => {
      // Category filter check
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'projects' && item.type !== 'project') return false;
        if (selectedCategory === 'publications' && item.type !== 'publication') return false;
        if (selectedCategory === 'skills' && item.type !== 'skill' && item.type !== 'certification') return false;
        if (selectedCategory === 'theses' && item.type !== 'thesis') return false;
        if (selectedCategory === 'experience' && item.type !== 'experience') return false;
      }

      // If query is empty, return top items in this category
      if (!q) return true;

      // Match in title, subtitle, description, or tags
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSubtitle = item.subtitle.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchTags = item.tags?.some(tag => tag.toLowerCase().includes(q));

      return matchTitle || matchSubtitle || matchDesc || matchTags;
    });
  }, [allSearchItems, query, selectedCategory]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const q = query.trim().toLowerCase();
    const count = {
      all: 0,
      projects: 0,
      publications: 0,
      skills: 0,
      theses: 0,
      experience: 0
    };

    allSearchItems.forEach((item) => {
      let matchesQuery = true;
      if (q) {
        matchesQuery = 
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          (item.tags?.some(tag => tag.toLowerCase().includes(q)) ?? false);
      }

      if (matchesQuery) {
        count.all++;
        if (item.type === 'project') count.projects++;
        if (item.type === 'publication') count.publications++;
        if (item.type === 'skill' || item.type === 'certification') count.skills++;
        if (item.type === 'thesis') count.theses++;
        if (item.type === 'experience') count.experience++;
      }
    });

    return count;
  }, [allSearchItems, query]);

  // Reset selected index when query or category changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, selectedCategory]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < filteredResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : filteredResults.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredResults[selectedIndex]) {
        handleSelectItem(filteredResults[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  const handleSelectItem = (item: SearchResultItem) => {
    onClose();

    // Smooth scroll to target element
    setTimeout(() => {
      const el = document.getElementById(item.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Add temporary pulsing highlight ring
        el.classList.add('ring-4', 'ring-teal-500/60', 'ring-offset-2', 'transition-all', 'duration-500');
        setTimeout(() => {
          el.classList.remove('ring-4', 'ring-teal-500/60', 'ring-offset-2');
        }, 2200);
      } else {
        // Fallback to section anchor
        let section = 'about';
        if (item.type === 'project') section = 'projects';
        else if (item.type === 'publication') section = 'research';
        else if (item.type === 'skill' || item.type === 'certification') section = 'skills';
        else if (item.type === 'thesis') section = 'theses';
        else if (item.type === 'experience') section = 'experience';

        const secEl = document.getElementById(section);
        secEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  const quickSuggestions = [
    'FPGA',
    'AMD Pervasive AI',
    'Solar Microgrid',
    'ESP32',
    'VHDL & Vivado',
    'Edge AI Healthcare',
    'BJET Paper',
    'FreeRTOS'
  ];

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-start justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Search portfolio"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-[#0c1424] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden mt-6 sm:mt-12 md:mt-16 flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150"
        onKeyDown={handleKeyDown}
      >
        {/* Search Bar Header */}
        <div className="p-3 sm:p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 bg-white dark:bg-[#0c1424]">
          <Search className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 ml-1" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, publications, skills, theses..."
            className="flex-1 bg-transparent text-sm sm:text-base text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono uppercase font-semibold text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Filter Mechanism Chips */}
        <div className="px-3 sm:px-4 py-2.5 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-mono uppercase text-slate-600 dark:text-slate-300 font-bold mr-1 shrink-0">
            Filter:
          </span>
          {[
            { id: 'all', label: 'All', count: categoryCounts.all },
            { id: 'projects', label: 'Projects', count: categoryCounts.projects },
            { id: 'publications', label: 'Publications', count: categoryCounts.publications },
            { id: 'skills', label: 'Skills & Tech', count: categoryCounts.skills },
            { id: 'theses', label: 'Supervisions', count: categoryCounts.theses },
            { id: 'experience', label: 'Experience', count: categoryCounts.experience },
          ].map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as SearchFilterCategory)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-teal-700 text-white shadow-2xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1 rounded-sm ${isSelected ? 'bg-teal-800 text-teal-100' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Suggestion Chips (when query is empty) */}
        {!query && (
          <div className="px-3 sm:px-4 py-2 bg-slate-50/50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-800/50 flex items-center gap-1.5 overflow-x-auto text-xs">
            <span className="text-[10px] font-mono uppercase text-slate-600 dark:text-slate-300 shrink-0 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" />
              Quick:
            </span>
            {quickSuggestions.map((sug) => (
              <button
                key={sug}
                onClick={() => setQuery(sug)}
                className="px-2 py-0.5 text-[11px] rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 hover:border-teal-500/40 transition-colors whitespace-nowrap cursor-pointer"
              >
                {sug}
              </button>
            ))}
          </div>
        )}

        {/* Results Container */}
        <div 
          ref={resultsContainerRef}
          className="flex-1 overflow-y-auto p-2 sm:p-3 divide-y divide-slate-100 dark:divide-slate-800/60 max-h-[50vh]"
        >
          {filteredResults.length === 0 ? (
            <div className="py-12 px-4 text-center">
              <Search className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto mb-3 stroke-[1.5]" />
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                No results found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                Try searching for broader keywords like &ldquo;Solar&rdquo;, &ldquo;FPGA&rdquo;, &ldquo;Hardware&rdquo;, or reset the active category filter.
              </p>
              <button
                onClick={() => {
                  setQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-3 py-1.5 text-xs font-semibold rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 hover:bg-teal-100 transition-colors cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredResults.map((item, idx) => {
              const isSelected = idx === selectedIndex;

              // Icon & badge style based on type
              let Icon = Briefcase;
              let badgeColor = 'bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200 dark:border-teal-800';

              if (item.type === 'publication') {
                Icon = BookOpen;
                badgeColor = 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800';
              } else if (item.type === 'skill') {
                Icon = Cpu;
                badgeColor = 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
              } else if (item.type === 'certification') {
                Icon = Award;
                badgeColor = 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800';
              } else if (item.type === 'thesis') {
                Icon = GraduationCap;
                badgeColor = 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800';
              } else if (item.type === 'experience') {
                Icon = Building;
                badgeColor = 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
              }

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectItem(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-xl transition-all cursor-pointer flex items-start gap-3 group ${
                    isSelected
                      ? 'bg-teal-50/70 dark:bg-teal-950/30 ring-1 ring-teal-500/40'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {/* Leading Icon */}
                  <div className={`p-2 rounded-lg shrink-0 mt-0.5 border ${badgeColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-mono uppercase font-bold px-1.5 py-0.5 rounded border ${badgeColor}`}>
                        {item.categoryLabel}
                      </span>
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-300 truncate">
                        {item.subtitle}
                      </span>
                    </div>

                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap pt-1">
                        {item.tags.slice(0, 4).map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Trailing Jump Indicator */}
                  <div className="shrink-0 flex items-center gap-1 self-center pl-2 text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {item.url && (
                      <span title="Has external link">
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      </span>
                    )}
                    <span className="text-xs font-medium hidden sm:inline">Jump</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Bar */}
        <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-300 font-mono">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-2xs">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-2xs">↓</kbd>
              <span>to navigate</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-2xs">
                <CornerDownLeft className="w-3 h-3 inline" />
              </kbd>
              <span>to jump</span>
            </span>
          </div>

          <div className="text-slate-600 dark:text-slate-300">
            {filteredResults.length} {filteredResults.length === 1 ? 'result' : 'results'}
          </div>
        </div>
      </div>
    </div>
  );
};
