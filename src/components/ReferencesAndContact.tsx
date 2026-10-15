import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  ExternalLink, 
  Copy, 
  Check, 
  MessageSquare,
  Building,
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
            <div className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 font-mono mb-1">
              Endorsements &amp; Recommendations
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Academic &amp; Leadership References
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Distinguished institutional leaders and engineering faculty familiar with my research, pedagogical service, and leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REFERENCES.map((ref, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-teal-700 dark:text-teal-400 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {ref.name}
                  </h3>
                  <div className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                    {ref.title}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {ref.organization}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1 text-xs">
                  <a
                    href={`mailto:${ref.email}`}
                    className="block text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {ref.email}
                  </a>
                  <div className="text-slate-500 font-mono text-[11px]">
                    {ref.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: CONTACT & COLLABORATION HUB */}
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold">
                Direct Communication
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Let's Discuss Collaborations, Microgrid Projects, or Research
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you are seeking advice on community solar electrification, academic research partnerships in low-resource edge AI, or higher education institutional governance systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-400">Primary Contact Email</span>
                <div className="flex items-center justify-between gap-2">
                  <a href={`mailto:${PERSONAL_INFO.emailPrimary}`} className="text-xs font-medium text-white hover:text-teal-300 underline">
                    {PERSONAL_INFO.emailPrimary}
                  </a>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.emailPrimary, 'p-email')}
                    className="p-1 rounded text-slate-400 hover:text-white"
                    title="Copy Email"
                  >
                    {copiedKey === 'p-email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-400">Institutional Email</span>
                <div className="flex items-center justify-between gap-2">
                  <a href={`mailto:${PERSONAL_INFO.emailInstitutional}`} className="text-xs font-medium text-white hover:text-teal-300 underline">
                    {PERSONAL_INFO.emailInstitutional}
                  </a>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.emailInstitutional, 'i-email')}
                    className="p-1 rounded text-slate-400 hover:text-white"
                    title="Copy University Email"
                  >
                    {copiedKey === 'i-email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-400">Telephone / WhatsApp</span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-medium text-white">
                    {PERSONAL_INFO.phoneFormatted}
                  </span>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-medium text-teal-400 hover:underline flex items-center gap-1"
                  >
                    Chat ↗
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-400">Location</span>
                <div className="text-xs font-medium text-white">
                  Mekelle, Tigray, Ethiopia
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.emailPrimary}`}
                className="px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                Send Direct Email
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                Message on WhatsApp
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-white font-medium text-xs transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>

              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-white font-medium text-xs transition-colors flex items-center gap-1.5"
              >
                <Twitter className="w-4 h-4" />
                X / Twitter
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
