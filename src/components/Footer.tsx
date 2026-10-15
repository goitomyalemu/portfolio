import React from 'react';
import { ArrowUp, Globe, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenHostingGuide: () => void;
  onOpenPrintCv: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHostingGuide, onOpenPrintCv }) => {
  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-slate-900 dark:text-white">
              {PERSONAL_INFO.name}
            </p>
            <p className="mt-0.5">
              Founder, GeometraTech · Licensed Professional Electrical Engineer · Lecturer · Director of Information Management
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenHostingGuide}
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              Hosting &amp; Export
            </button>
            <button
              onClick={onOpenPrintCv}
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              Curriculum Vitae
            </button>
            <a
              href="#about"
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              Back to Top
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
          <div>
            Mekelle Institute of Technology (MIT), Mekelle University, Tigray, Ethiopia
          </div>
          <div>
            Built with React &amp; Tailwind CSS · Optimized for GitHub Pages &amp; Google Sites
          </div>
        </div>
      </div>
    </footer>
  );
};
