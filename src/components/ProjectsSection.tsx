import React, { useState } from 'react';
import { ExternalLink, Layers, Award, Sparkles } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'solar' | 'ai-embedded' | 'governance' | 'community'>('all');

  const filteredProjects = PROJECTS.filter(p => activeCategory === 'all' || p.category === activeCategory);

  return (
    <section id="projects" className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 font-mono mb-1">
            Engineering Implementations &amp; Grants
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects &amp; Initiatives
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
            From global AI contest finalist solutions to community-engaged off-grid solar microgrids.
          </p>
        </div>

        {/* Dedicated Filter Tabs Row (consistent across mobile and desktop) */}
        <div className="flex items-center gap-1.5 pb-6 overflow-x-auto">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'solar', label: 'Solar & Microgrids' },
            { id: 'ai-embedded', label: 'AI & Embedded Hardware' },
            { id: 'governance', label: 'Digital Governance' },
            { id: 'community', label: 'Community & Health' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === tab.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col group"
            >
              {/* Optional Project Media Image */}
              {project.image && (
                <div className="aspect-16/10 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-[11px] font-mono uppercase font-semibold text-teal-300">
                      {project.role}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span>{project.period}</span>
                    {project.id === 'amd-ryzen-ai' && (
                      <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold text-[11px]">
                        <Award className="w-3.5 h-3.5" />
                        AMD Global Finalist
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-1 pt-1 text-xs text-slate-600 dark:text-slate-400">
                    {project.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-teal-500 mt-2 shrink-0" />
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with tags and optional link */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
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
                      className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
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
