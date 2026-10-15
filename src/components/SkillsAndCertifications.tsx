import React from 'react';
import { 
  Cpu, 
  Layers, 
  Award, 
  Users, 
  CheckCircle2, 
  Globe2, 
  ShieldCheck 
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
            <div className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 font-mono mb-1">
              Core Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Hardware, AI &amp; Systems Engineering
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Specialized expertise in hardware-software co-design, FPGA digital architectures, and off-grid electronics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECHNICAL_SKILLS.map((skillGroup, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4"
              >
                <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
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

        {/* PART 2: ADVISORY, ENTERPRISE TRAINING & NETWORKS */}
        <div>
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono mb-1">
              Outreach &amp; Capacity Building
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Advisory, Enterprise Training &amp; Networks
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Mentoring hundreds of regional micro-entrepreneurs and collaborating with international development bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMMUNITY_AND_NETWORKS.map((network, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 shadow-xs space-y-2"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {network.name}
                  </h3>
                </div>
                <div className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                  {network.role}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {network.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PART 3: CERTIFICATIONS & LICENSES */}
        <div>
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 font-mono mb-1">
              Continuous Professional Development
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Verified Certifications &amp; Accreditations
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Professional credentials in Machine Learning, IoT protocols, Cybersecurity, and Intellectual Property.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {CERTIFICATIONS.map((cert, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/70 flex items-start gap-3 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <Award className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
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
