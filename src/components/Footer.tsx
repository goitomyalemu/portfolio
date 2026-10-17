import React from 'react';
import { ArrowUp, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenPrintCv: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrintCv }) => {
  return (
    <footer className="py-8 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Identity & Four Titles */}
          <div className="text-center lg:text-left space-y-1">
            <span className="font-serif font-bold text-slate-900 dark:text-slate-100 text-sm">
              {PERSONAL_INFO.name}
            </span>
            <div className="text-slate-600 dark:text-slate-300">
              Founder, GeometraTech · Licensed Professional Electrical Engineer · Lecturer · Director of Information Management
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Mekelle Institute of Technology (MIT), Mekelle University, Tigray, Ethiopia
            </div>
          </div>

          {/* Quick Links & Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a href="#top" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">Top</a>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <a href="#experience" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">Experience</a>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <a href="#research" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">Research</a>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <a href="#projects" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">Projects</a>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <a href="#contact" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">Contact</a>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <button
              onClick={onOpenPrintCv}
              className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors flex items-center gap-1 font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </button>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <a
              href="#top"
              className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors flex items-center gap-1 font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 text-center text-[11px] text-slate-400 dark:text-slate-500">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
