import React from 'react';
import { Briefcase, GraduationCap, Building2, Calendar } from 'lucide-react';
import { WORK_EXPERIENCE, EDUCATION } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 font-mono mb-1">
            Career &amp; Academic Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience &amp; Leadership
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            14+ years in university administration, digital governance transformation, 
            and engineering pedagogy across Ethiopia's top higher education institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Timeline Column */}
          <div className="lg:col-span-8">
            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-6 sm:pl-8 space-y-8">
              {WORK_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-white dark:bg-slate-900 ${
                    exp.current 
                      ? 'border-teal-600 ring-4 ring-teal-500/20' 
                      : 'border-slate-400 dark:border-slate-600'
                  }`} />

                  <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs group-hover:border-teal-500/40 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-0.5 rounded-md border border-teal-200/60 dark:border-teal-900/60">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-medium text-slate-700 dark:text-slate-300">{exp.organization}</span>
                      <span>·</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {exp.description.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Formal Degrees & Education */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono">
                  Degrees &amp; Education
                </h3>
              </div>

              <div className="space-y-5">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="pb-4 border-b border-slate-200 dark:border-slate-800 last:border-0 last:pb-0">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-medium text-teal-700 dark:text-teal-400 mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                      {edu.period} · {edu.location}
                    </p>
                    {edu.thesis && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 italic leading-relaxed">
                        Thesis: "{edu.thesis}"
                      </p>
                    )}
                    {edu.highlights && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        {edu.highlights}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick summary box */}
            <div className="p-4 rounded-xl border border-teal-200/80 dark:border-teal-900/60 bg-teal-50/50 dark:bg-teal-950/20 text-xs text-slate-700 dark:text-slate-300">
              <strong className="block text-slate-900 dark:text-white mb-1 font-semibold">Institutional Digital Governance</strong>
              <p className="leading-relaxed text-[11px]">
                In his current role as Director of Information Management at Mekelle University, Goitom leads the consolidation of disparate college data into automated validation platforms (MU-DataLink and MU-KPI), connecting with national Higher Education Management Information Systems (HEMIS).
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
