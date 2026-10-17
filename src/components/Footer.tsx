import React from 'react';
import { 
  ArrowUp, 
  FileText, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  ExternalLink, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  GraduationCap, 
  MessageSquare,
  BookOpen
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenPrintCv: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrintCv }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950 dark:text-slate-400 border-t border-slate-800 transition-colors">
      
      {/* Main Multi-Column Desktop Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Academic & Professional Identity (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Monogram & Name Lockup */}
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-teal-600/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-serif font-bold text-base shrink-0 shadow-inner">
                GYA
              </div>
              <div>
                <h3 className="font-serif font-bold text-slate-100 text-lg leading-tight tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-teal-400 font-mono mt-0.5">
                  MSc · Licensed PE · Academic &amp; Founder
                </p>
              </div>
            </div>

            {/* Core Roles & Mission */}
            <p className="text-xs text-slate-300 dark:text-slate-400 leading-relaxed max-w-sm">
              Electrical Engineer and academic researcher dedicated to resilient embedded systems, edge artificial intelligence, and sustainable off-grid renewable microgrids across Tigray and the Horn of Africa.
            </p>

            {/* Institutional Affiliation & Location */}
            <div className="space-y-2 text-xs text-slate-400 dark:text-slate-400 pt-2 border-t border-slate-800/80">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  Mekelle Institute of Technology (MIT), Mekelle University
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Mekelle, Tigray, Ethiopia · East Africa Time (UTC+3)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Licensed Professional Electrical Engineer (ERA / MoInfra)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-teal-300 transition-colors inline-flex items-center gap-1.5 text-slate-300 dark:text-slate-300">
                  <span>Executive Overview</span>
                </a>
              </li>
              <li>
                <a href="#geometratech" className="hover:text-teal-300 transition-colors inline-flex items-center gap-1.5 text-slate-300 dark:text-slate-300">
                  <span>GeometraTech Solar</span>
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-teal-300 transition-colors inline-flex items-center gap-1.5 text-slate-300 dark:text-slate-300">
                  <span>Leadership &amp; Career</span>
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-teal-300 transition-colors inline-flex items-center gap-1.5 text-slate-300 dark:text-slate-300">
                  <span>Research &amp; BJET Paper</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-300 transition-colors inline-flex items-center gap-1.5 text-slate-300 dark:text-slate-300">
                  <span>Engineering Projects</span>
                </a>
              </li>
              <li>
                <a href="#theses" className="hover:text-teal-300 transition-colors inline-flex items-center gap-1.5 text-slate-300 dark:text-slate-300">
                  <span>MSc Supervisions</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-teal-300 transition-colors inline-flex items-center gap-1.5 text-slate-300 dark:text-slate-300">
                  <span>Skills &amp; Hardware</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-300 transition-colors inline-flex items-center gap-1.5 text-slate-300 dark:text-slate-300">
                  <span>References &amp; Office</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Ventures & Research Links (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-400">
              Ventures &amp; Publications
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a 
                  href={PERSONAL_INFO.geometratechUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group block hover:text-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-1.5 font-medium text-slate-200 group-hover:text-teal-300">
                    <Zap className="w-3.5 h-3.5 text-teal-400" />
                    <span>GeometraTech Clean Energy</span>
                    <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    Decentralized solar charging kiosks &amp; community microgrid power
                  </p>
                </a>
              </li>

              <li>
                <a 
                  href="https://doi.org/10.71624/3ebk5z08" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group block hover:text-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-1.5 font-medium text-slate-200 group-hover:text-teal-300">
                    <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                    <span>Branna Journal (BJET)</span>
                    <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    8051 Traffic Control &amp; Emergency Vehicle Preemption
                  </p>
                </a>
              </li>

              <li>
                <a 
                  href={PERSONAL_INFO.thranUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group block hover:text-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-1.5 font-medium text-slate-200 group-hover:text-teal-300">
                    <Globe className="w-3.5 h-3.5 text-teal-400" />
                    <span>THRAN Research Network</span>
                    <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    Tigray Health Research &amp; Clinical Data Analytics
                  </p>
                </a>
              </li>

              <li>
                <a 
                  href={PERSONAL_INFO.googleSitesUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group block hover:text-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-1.5 font-medium text-slate-200 group-hover:text-teal-300">
                    <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
                    <span>Mekelle University Faculty Portal</span>
                    <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    Official faculty biography and academic repository
                  </p>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Direct Actions (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-400">
              Office &amp; Communications
            </h4>

            <div className="space-y-2.5 text-xs">
              <a 
                href={`mailto:${PERSONAL_INFO.emailInstitutional}`}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
              >
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <div className="truncate">
                  <span className="block text-[10px] uppercase font-mono text-slate-400">Institutional</span>
                  <span className="text-slate-200 group-hover:text-teal-300 font-mono text-[11px] truncate block">
                    {PERSONAL_INFO.emailInstitutional}
                  </span>
                </div>
              </a>

              <a 
                href={`mailto:${PERSONAL_INFO.emailPrimary}`}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
              >
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <div className="truncate">
                  <span className="block text-[10px] uppercase font-mono text-slate-400">Primary / Research</span>
                  <span className="text-slate-200 group-hover:text-teal-300 font-mono text-[11px] truncate block">
                    {PERSONAL_INFO.emailPrimary}
                  </span>
                </div>
              </a>

              <a 
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-slate-400">WhatsApp</span>
                    <span className="text-slate-200 group-hover:text-emerald-300 font-mono text-[11px]">
                      {PERSONAL_INFO.whatsappHandle}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 group-hover:underline">Chat ↗</span>
              </a>
            </div>

            {/* Social & Action Row */}
            <div className="flex items-center gap-2 pt-1">
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a 
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
                title="X / Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenPrintCv}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-teal-600 hover:bg-teal-500 text-white transition-colors shadow-2xs cursor-pointer"
                title="View & Download Curriculum Vitae"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </button>
            </div>
          </div>

        </div>

        {/* Middle Tier: Strategic Highlights Ribbon */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
            <span className="block text-base font-serif font-bold text-slate-100">200+</span>
            <span className="text-[11px] text-slate-400">Entrepreneurs Mentored (EDI)</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
            <span className="block text-base font-serif font-bold text-slate-100">Global Finalist</span>
            <span className="text-[11px] text-slate-400">AMD Pervasive AI 2024</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
            <span className="block text-base font-serif font-bold text-slate-100">1,000+</span>
            <span className="text-[11px] text-slate-400">Engineers &amp; Students Upskilled</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
            <span className="block text-base font-serif font-bold text-slate-100">Licensed PE</span>
            <span className="text-[11px] text-slate-400">Electrical Engineering (ERA)</span>
          </div>
        </div>

        {/* Bottom Colophon & Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="text-center md:text-left space-y-0.5">
            <p className="text-slate-300">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500">
              Department of Electrical &amp; Computer Engineering, Mekelle Institute of Technology (MIT)
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-500 hidden sm:inline">
              Built with React, TypeScript &amp; Tailwind CSS
            </span>
            <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700/80 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-teal-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
