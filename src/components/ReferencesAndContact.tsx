import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Copy, 
  Check, 
  MessageSquare, 
  UserCheck
} from 'lucide-react';
import { PERSONAL_INFO, REFERENCES } from '../data/portfolioData';

export const ReferencesAndContact: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* PART 1: ACADEMIC & PROFESSIONAL REFERENCES */}
        <div>
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 font-mono mb-1">
              ENDORSEMENTS &amp; RECOMMENDATIONS
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Academic &amp; Leadership References
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Distinguished institutional leaders and engineering faculty familiar with my research, pedagogical service, and leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REFERENCES.map((ref, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-4 hover:border-teal-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                    {ref.name}
                  </h3>
                  <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 mt-0.5">
                    {ref.title}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {ref.organization}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span>Contact details available on request.</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: CONTACT CARD */}
        <div>
          <div className="p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-teal-700 dark:text-teal-400 font-bold">
                  DIRECT COMMUNICATION
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                  Let's Discuss Collaborations, Microgrid Projects, or Research
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Whether you are seeking advice on community solar electrification, academic research partnerships in low-resource edge AI, or higher education institutional governance systems.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Primary Email */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1.5 shadow-2xs">
                  <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold">Primary Contact Email</span>
                  <div className="flex items-center justify-between gap-2">
                    <a href={`mailto:${PERSONAL_INFO.emailPrimary}`} className="text-xs font-semibold text-teal-700 dark:text-teal-400 underline underline-offset-2 hover:text-teal-800">
                      {PERSONAL_INFO.emailPrimary}
                    </a>
                    <button
                      onClick={() => handleCopy(PERSONAL_INFO.emailPrimary, 'p-email')}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      title="Copy Email"
                    >
                      {copiedKey === 'p-email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Institutional Email */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1.5 shadow-2xs">
                  <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold">Institutional Email</span>
                  <div className="flex items-center justify-between gap-2">
                    <a href={`mailto:${PERSONAL_INFO.emailInstitutional}`} className="text-xs font-semibold text-teal-700 dark:text-teal-400 underline underline-offset-2 hover:text-teal-800">
                      {PERSONAL_INFO.emailInstitutional}
                    </a>
                    <button
                      onClick={() => handleCopy(PERSONAL_INFO.emailInstitutional, 'i-email')}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      title="Copy University Email"
                    >
                      {copiedKey === 'i-email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1.5 shadow-2xs">
                  <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold">WhatsApp</span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-medium text-slate-900 dark:text-slate-100">
                      {PERSONAL_INFO.whatsappHandle}
                    </span>
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      Chat ↗
                    </a>
                  </div>
                </div>

                {/* Academic Office */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1.5 shadow-2xs">
                  <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold">Location / Office</span>
                  <div className="text-xs font-medium text-slate-900 dark:text-slate-100">
                    Mekelle, Tigray, Ethiopia (MIT Campus)
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.emailPrimary}`}
                  className="px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-2xs transition-colors flex items-center gap-2 active:scale-98"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 active:scale-98 shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Message on WhatsApp</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors flex items-center gap-2 active:scale-98"
                >
                  <Linkedin className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors flex items-center gap-2 active:scale-98"
                >
                  <Twitter className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  <span>X / Twitter</span>
                </a>
              </div>

              {/* Inquiry Subject Quick Presets */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <span className="block text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-2">
                  Quick Email Presets (1-Click Draft):
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Research Collaboration', subject: 'Academic Research & Paper Collaboration Inquiry' },
                    { label: 'Solar & Microgrids', subject: 'GeometraTech Community Solar & Clean Energy Inquiry' },
                    { label: 'Student Mentorship', subject: 'MSc/BSc Academic Mentorship & Thesis Supervision' },
                    { label: 'Data Governance', subject: 'Higher Education Digital Transformation & HEMIS Inquiry' },
                  ].map((preset, pIdx) => (
                    <a
                      key={pIdx}
                      href={`mailto:${PERSONAL_INFO.emailPrimary}?subject=${encodeURIComponent(preset.subject)}`}
                      className="px-2.5 py-1 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-300 hover:border-teal-500/50 transition-colors shadow-2xs inline-flex items-center gap-1.5"
                    >
                      <span>{preset.label}</span>
                      <span className="text-[10px] text-slate-400">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
