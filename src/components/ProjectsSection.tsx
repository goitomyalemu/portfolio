import React, { useState } from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'solar' | 'ai-embedded' | 'governance' | 'community'>('all');

  const filteredProjects = PROJECTS.filter(p => activeCategory === 'all' || p.category === activeCategory);

  const tabs = [
    { id: 'all', label: `All Projects (${PROJECTS.length})` },
    { id: 'solar', label: `Solar & Microgrids (${PROJECTS.filter(p => p.category === 'solar').length})` },
    { id: 'ai-embedded', label: `AI & Embedded Hardware (${PROJECTS.filter(p => p.category === 'ai-embedded').length})` },
    { id: 'governance', label: `Digital Governance (${PROJECTS.filter(p => p.category === 'governance').length})` },
    { id: 'community', label: `Community & Health (${PROJECTS.filter(p => p.category === 'community').length})` },
  ];

  return (
    <section id="projects" className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 font-mono mb-1">
            ENGINEERING IMPLEMENTATIONS &amp; GRANTS
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Featured Projects &amp; Initiatives
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
            From global AI contest finalist solutions to community-engaged off-grid solar microgrids.
          </p>
        </div>

        {/* Filter Tabs Row */}
        <div className="flex items-center gap-2 pb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap active:scale-98 ${
                activeCategory === tab.id
                  ? 'bg-teal-600 text-white shadow-2xs font-semibold'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs hover:border-teal-500/50 hover:shadow-xs transition-all flex flex-col group"
            >
              {/* Project Media Image */}
              {project.image && (
                <div className="aspect-16/10 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-mono uppercase font-semibold text-amber-300">
                      {project.role}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span>{project.period}</span>
                    {project.id === 'amd-ryzen-ai' && (
                      <span className="inline-flex items-center gap-1 text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 px-2.5 py-0.5 rounded-full font-bold text-[10px]">
                        <Award className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                        AMD Global Finalist
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-400">
                    {project.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with tags and action link */}
                <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx}>
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-900 text-xs font-semibold text-teal-700 dark:text-teal-300 hover:bg-teal-100 transition-colors"
                    >
                      <span>Explore</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
