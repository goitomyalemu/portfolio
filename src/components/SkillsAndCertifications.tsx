import React from 'react';
import { 
  Users, 
  Award,
  Globe2
} from 'lucide-react';
import { 
  TECHNICAL_SKILLS, 
  CERTIFICATIONS, 
  COMMUNITY_AND_NETWORKS 
} from '../data/portfolioData';

export const SkillsAndCertifications: React.FC = () => {
  return (
    <section id="skills" className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* PART 1: TECHNICAL SKILLS */}
        <div>
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 font-mono mb-1">
              CORE COMPETENCIES
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Hardware, AI &amp; Systems Engineering
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Specialized expertise in hardware-software co-design, FPGA digital architectures, and off-grid electronics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECHNICAL_SKILLS.map((skillGroup, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-4 hover:border-teal-500/50 transition-colors"
              >
                <h3 className="font-serif text-base font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2.5">
                  {skillGroup.category}
                </h3>
                <div className="space-y-3.5">
                  {skillGroup.items.map((item, iIdx) => (
                    <div key={iIdx}>
                      <div className="text-xs font-bold text-teal-700 dark:text-teal-400">
                        {item.name}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: OUTREACH & NETWORKS */}
        <div id="outreach">
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 font-mono mb-1">
              OUTREACH &amp; CAPACITY BUILDING
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Advisory, Enterprise Training &amp; Networks
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Mentoring hundreds of regional micro-entrepreneurs and collaborating with international development bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMUNITY_AND_NETWORKS.map((network, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-2.5 hover:border-teal-500/50 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300">
                    <Users className="w-4 h-4 shrink-0" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    {network.name}
                  </h3>
                </div>
                <div className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                  {network.role}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {network.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PART 3: VERIFIED CERTIFICATIONS & LICENSES */}
        <div>
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 font-mono mb-1">
              CONTINUOUS PROFESSIONAL ACCREDITATION
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Verified Certifications &amp; Accreditations
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Professional credentials in Machine Learning, IoT protocols, Cybersecurity, and Intellectual Property.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div 
                key={idx}
                className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-start gap-3.5 shadow-2xs hover:border-teal-500/50 transition-colors"
              >
                <Award className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    {cert.title}
                  </h4>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {cert.issuer} · <span className="font-mono text-teal-700 dark:text-teal-400 font-semibold">{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
