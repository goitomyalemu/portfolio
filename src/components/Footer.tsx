import React from 'react';
import { 
  ArrowUp, 
  FileText, 
  Mail, 
  Linkedin, 
  Twitter, 
  ExternalLink, 
  Globe, 
  BookOpen,
  MessageSquare
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
    <footer className="bg-[#f4efe4] dark:bg-[#0c1424] text-slate-700 dark:text-slate-300 border-t border-[#e3dccd] dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        
        {/* Main 3-Column Sitemap & Identity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Identity & Institutional Stature (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600/10 dark:bg-teal-500/20 border border-teal-600/20 dark:border-teal-500/30 flex items-center justify-center text-teal-800 dark:text-teal-300 font-serif font-bold text-sm shrink-0 shadow-2xs">
                GYA
              </div>
              <div>
                <h3 className="font-serif font-bold text-slate-900 dark:text-slate-100 text-base sm:text-lg leading-tight tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-teal-800 dark:text-teal-400 font-mono font-medium">
                  MSc · Licensed Professional Electrical Engineer (PE)
                </p>
              </div>
            </div>

            <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <p className="font-medium text-slate-800 dark:text-slate-200">
                Director of Information Management · Lecturer, MIT Mekelle University · Founder, GeometraTech
              </p>
              <p>
                Department of Electrical &amp; Computer Engineering, Mekelle Institute of Technology (MIT)
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Mekelle, Tigray, Ethiopia · East Africa Time (UTC+3)
              </p>
            </div>

            {/* Quick Compact Social Links */}
            <div className="flex items-center gap-2 pt-1 text-slate-600 dark:text-slate-400">
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-white/90 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-teal-700 border border-[#dfd6c4] dark:border-slate-700/80 transition-colors shadow-2xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a 
                href={PERSONAL_INFO.twitter}
                target="_blank" 
                rel="noreferrer"
                aria-label="Twitter / X Profile"
                className="p-2 rounded-lg bg-white/90 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-teal-700 border border-[#dfd6c4] dark:border-slate-700/80 transition-colors shadow-2xs"
                title="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <a 
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank" 
                rel="noreferrer"
                aria-label="WhatsApp Message"
                className="p-2 rounded-lg bg-white/90 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-700 border border-[#dfd6c4] dark:border-slate-700/80 transition-colors shadow-2xs"
                title="WhatsApp (@gy_alemu)"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a 
                href={`mailto:${PERSONAL_INFO.emailPrimary}`}
                aria-label="Send Email"
                className="p-2 rounded-lg bg-white/90 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-teal-700 border border-[#dfd6c4] dark:border-slate-700/80 transition-colors shadow-2xs"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Section Navigation (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#about" className="hover:text-teal-800 dark:hover:text-teal-300 transition-colors text-slate-700 dark:text-slate-300">
                  Executive Overview
                </a>
              </li>
              <li>
                <a href="#geometratech" className="hover:text-teal-800 dark:hover:text-teal-300 transition-colors text-slate-700 dark:text-slate-300">
                  GeometraTech Solar Venture
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-teal-800 dark:hover:text-teal-300 transition-colors text-slate-700 dark:text-slate-300">
                  Leadership &amp; Career Experience
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-teal-800 dark:hover:text-teal-300 transition-colors text-slate-700 dark:text-slate-300">
                  Research &amp; Publications
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-800 dark:hover:text-teal-300 transition-colors text-slate-700 dark:text-slate-300">
                  Engineering &amp; AI Projects
                </a>
              </li>
              <li>
                <a href="#theses" className="hover:text-teal-800 dark:hover:text-teal-300 transition-colors text-slate-700 dark:text-slate-300">
                  MSc Thesis Supervisions
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-teal-800 dark:hover:text-teal-300 transition-colors text-slate-700 dark:text-slate-300">
                  Skills &amp; Hardware Telemetry
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-800 dark:hover:text-teal-300 transition-colors text-slate-700 dark:text-slate-300">
                  References &amp; Office Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: External Scholarly & Venture Repositories (Span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400">
              Ventures &amp; Portals
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a 
                  href={PERSONAL_INFO.geometratechUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-slate-800 dark:text-slate-200 hover:text-teal-800 dark:hover:text-teal-300 transition-colors font-medium"
                >
                  <Globe className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                  <span>GeometraTech Official Portal</span>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </a>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-5">
                  Clean energy kiosks &amp; community microgrid power
                </p>
              </li>

              <li>
                <a 
                  href="https://doi.org/10.71624/3ebk5z08" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-slate-800 dark:text-slate-200 hover:text-teal-800 dark:hover:text-teal-300 transition-colors font-medium"
                >
                  <BookOpen className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                  <span>BJET 2025 Paper (DOI: 10.71624/3ebk5z08)</span>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </a>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-5">
                  8051 Microcontroller &amp; Emergency Vehicle Preemption
                </p>
              </li>

              <li>
                <a 
                  href={PERSONAL_INFO.thranUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-slate-800 dark:text-slate-200 hover:text-teal-800 dark:hover:text-teal-300 transition-colors font-medium"
                >
                  <Globe className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                  <span>THRAN Research Association</span>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </a>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-5">
                  Tigray Health Research &amp; Clinical Analytics Network
                </p>
              </li>

              <li>
                <a 
                  href={PERSONAL_INFO.googleSitesUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-slate-800 dark:text-slate-200 hover:text-teal-800 dark:hover:text-teal-300 transition-colors font-medium"
                >
                  <Globe className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                  <span>Mekelle University Faculty Profile</span>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </a>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-5">
                  Institutional profile and academic biography
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Clean Utilities & Copyright */}
        <div className="mt-10 pt-6 border-t border-[#ded5c2] dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 dark:text-slate-400 gap-4">
          <div className="text-center sm:text-left space-y-0.5">
            <p className="text-slate-800 dark:text-slate-300 font-medium">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Department of Electrical &amp; Computer Engineering, Mekelle Institute of Technology (MIT)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPrintCv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-[#dfd6c4] dark:border-slate-700 transition-colors shadow-2xs font-medium cursor-pointer"
              title="View & Download Curriculum Vitae"
            >
              <FileText className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
              <span>Curriculum Vitae</span>
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-[#dfd6c4] dark:border-slate-700 transition-colors shadow-2xs font-medium cursor-pointer"
              title="Return to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
