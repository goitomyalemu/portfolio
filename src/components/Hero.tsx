import React from 'react';
import { 
  Mail, 
  MapPin, 
  ExternalLink, 
  Zap, 
  FileText,
  Linkedin,
  Twitter,
  Building2
} from 'lucide-react';
import { PERSONAL_INFO, ASSET_IMAGES } from '../data/portfolioData';
import { HardwareTelemetry } from './HardwareTelemetry';

interface HeroProps {
  onOpenPrintCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPrintCv }) => {
  return (
    <section id="about" className="relative pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker - Personal & Leadership Badges */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold mb-5 tracking-wide">
          <span className="text-teal-700 dark:text-teal-400 font-bold">
            Mekelle University
          </span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span className="text-slate-700 dark:text-slate-300">
            Mekelle Institute of Technology (MIT)
          </span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span className="text-amber-700 dark:text-amber-400 font-bold">
            Founder, GeometraTech
          </span>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Personal Typographic Core */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.12]">
              {PERSONAL_INFO.name}
            </h1>

            {/* Professional Credential & Leadership Ribbon */}
            <div className="p-4 sm:p-5 bg-white dark:bg-slate-900/95 rounded-2xl border-l-4 border-l-[#8c1d30] border-y border-r border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
              <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                <span>Founder, GeometraTech</span>{' '}
                <span className="text-slate-300 dark:text-slate-700 font-normal">|</span>{' '}
                <span>Licensed Professional Electrical Engineer</span>{' '}
                <span className="text-slate-300 dark:text-slate-700 font-normal">|</span>{' '}
                <span>Lecturer</span>{' '}
                <span className="text-slate-300 dark:text-slate-700 font-normal">|</span>{' '}
                <span>Director of Information Management</span>
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#8c1d30] dark:text-rose-400 tracking-wide">
                Mekelle Institute of Technology, Mekelle University
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Professional Electrical Engineer with over 14 years bridging reconfigurable computing (FPGAs), 
              software-defined radio (SDR), and edge deep learning with renewable energy microgrids. 
              Currently driving institutional digital transformation, enterprise data validation, and 
              last-mile solar infrastructure across displaced communities in Tigray.
            </p>

            {/* Quick Metadata */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8c1d30] dark:text-rose-400" />
                <span>Mekelle, Tigray, Ethiopia</span>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#8c1d30] dark:text-rose-400" />
                <span>Mekelle Institute of Technology (MIT)</span>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <a 
                href={`mailto:${PERSONAL_INFO.emailPrimary}`}
                className="hover:text-[#8c1d30] dark:hover:text-rose-400 underline decoration-slate-300 dark:decoration-slate-700 underline-offset-2 transition-colors font-mono"
              >
                {PERSONAL_INFO.emailPrimary}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#geometratech"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#8c1d30] hover:bg-[#731526] text-white text-xs font-semibold shadow-xs transition-colors active:scale-98"
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Explore GeometraTech Venture</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold transition-colors active:scale-98"
              >
                <Mail className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>Get in Touch</span>
              </a>

              <button
                onClick={onOpenPrintCv}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold transition-colors active:scale-98"
              >
                <FileText className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>Full Academic CV</span>
              </button>
            </div>

            {/* Professional Networks Row */}
            <div className="flex items-center gap-4 pt-1 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">NETWORKS:</span>
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank" 
                rel="noreferrer"
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors p-1"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={PERSONAL_INFO.twitter}
                target="_blank" 
                rel="noreferrer"
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors p-1"
                title="X / Twitter"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href={PERSONAL_INFO.geometratechUrl}
                target="_blank" 
                rel="noreferrer"
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors p-1"
                title="GeometraTech Website"
                aria-label="GeometraTech"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Lab Media & Interactive Telemetry */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Visual Engineering Workbench Card */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 shadow-xs relative group">
              <div className="aspect-16/10 relative overflow-hidden">
                <img 
                  src={ASSET_IMAGES.heroLab}
                  alt="Engineering lab bench with a PYNQ-Z1 FPGA board, oscilloscope and multimeter"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-teal-300 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    APPLIED HARDWARE LAB · MIT
                  </div>
                  <div className="text-xs text-slate-200 mt-0.5">
                    PYNQ-Z1 / Xilinx FPGA synthesis, SDR telemetry &amp; power diagnostics
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive FPGA Telemetry & Waveform Trace Module */}
            <HardwareTelemetry />
          </div>

        </div>
      </div>
    </section>
  );
};
