import React from 'react';
import { Briefcase, GraduationCap, Building2, BookOpen, Layers } from 'lucide-react';
import { WORK_EXPERIENCE, EDUCATION, COURSES_TAUGHT } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 font-mono mb-1">
            CAREER &amp; ACADEMIC BACKGROUND
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Work Experience &amp; Leadership
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Over 14 years in university administration, digital governance transformation, 
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
                      ? 'border-teal-700 ring-4 ring-teal-500/20' 
                      : 'border-slate-400 dark:border-slate-600'
                  }`} />

                  <div 
                    id={`exp-${idx}`} 
                    className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs group-hover:border-teal-600/50 transition-colors scroll-mt-24"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                        {exp.role}
                      </h3>
                      {/* Zero-Pill Unboxed Period */}
                      <span className={`text-xs font-mono font-semibold ${
                        exp.current
                          ? 'text-teal-700 dark:text-teal-400 font-bold'
                          : 'text-slate-500 dark:text-slate-400'
                      }`}>
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3.5 font-medium">
                      <Building2 className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{exp.organization}</span>
                      <span>·</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                      {exp.description.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-700 dark:bg-teal-400 mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Formal Degrees & Academic Teaching */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Education Card */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
                <GraduationCap className="w-5 h-5 text-teal-700 dark:text-teal-400" />
                <h3 className="font-serif text-base font-bold text-slate-900 dark:text-slate-100">
                  Degrees &amp; Education
                </h3>
              </div>

              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="pb-5 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0">
                    <h4 className="font-serif text-sm font-bold text-slate-900 dark:text-slate-100">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                      {edu.period} · {edu.location}
                    </p>
                    {edu.thesis && (
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 italic leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
                        Thesis: "{edu.thesis}"
                      </p>
                    )}
                    {edu.highlights && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                        {edu.highlights}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching & Academic Instruction Card */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800">
                <BookOpen className="w-5 h-5 text-teal-700 dark:text-teal-400" />
                <div>
                  <h3 className="font-serif text-base font-bold text-slate-900 dark:text-slate-100">
                    Curriculum &amp; Courses Taught
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Undergraduate &amp; Lab Instruction at MIT
                  </p>
                </div>
              </div>

              <div className="space-y-3.5">
                {COURSES_TAUGHT.map((course, cIdx) => (
                  <div key={cIdx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900 dark:text-slate-100">
                        {course.title}
                      </span>
                      {course.code && (
                        <span className="font-mono text-[10px] text-teal-700 dark:text-teal-400 font-semibold">
                          {course.code}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      {course.topics.join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
