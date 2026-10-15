import React from 'react';
import { 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Zap, 
  Globe, 
  FileText,
  Linkedin,
  Twitter,
  Building2
} from 'lucide-react';
import { PERSONAL_INFO, ASSET_IMAGES } from '../data/portfolioData';
import { HardwareTelemetry } from './HardwareTelemetry';

interface HeroProps {
  onOpenHostingGuide: () => void;
  onOpenPrintCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenHostingGuide, onOpenPrintCv }) => {
  return (
    <section id="about" className="pt-8 pb-12 lg:pt-12 lg:pb-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-400 mb-3 tracking-wide">
          <span>Mekelle University</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span>Mekelle Institute of Technology (MIT)</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span className="text-amber-700 dark:text-amber-400 font-bold">Founder, GeometraTech</span>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Typographic Core */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] text-balance">
              {PERSONAL_INFO.name}
            </h1>

            {/* Professional Credential & Leadership Header */}
            <div className="space-y-1.5 border-l-2 border-teal-500 pl-3.5 py-0.5">
              <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                Founder, GeometraTech <span className="text-slate-300 dark:text-slate-600 font-normal">|</span> Licensed Professional Electrical Engineer <span className="text-slate-300 dark:text-slate-600 font-normal">|</span> Lecturer <span className="text-slate-300 dark:text-slate-600 font-normal">|</span> Director of Information Management
              </p>
              <p className="text-xs sm:text-sm font-semibold text-teal-700 dark:text-teal-400">
                Mekelle Institute of Technology, Mekelle University
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              Professional Electrical Engineer with over 14 years bridging reconfigurable computing (FPGAs), 
              software-defined radio (SDR), and edge deep learning with renewable energy microgrids. 
              Currently driving institutional digital transformation, enterprise data validation, and 
              last-mile solar infrastructure across displaced communities in Tigray.
            </p>

            {/* Quick Metadata Info */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                Mekelle, Tigray, Ethiopia
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                Mekelle Institute of Technology (MIT)
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <a 
                href={`mailto:${PERSONAL_INFO.emailPrimary}`}
                className="hover:text-slate-900 dark:hover:text-white underline decoration-slate-300 dark:decoration-slate-700 underline-offset-2 transition-colors"
              >
                {PERSONAL_INFO.emailPrimary}
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#geometratech"
                className="px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5"
              >
                <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
                Explore GeometraTech Venture
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                Get in Touch
              </a>

              <button
                onClick={onOpenPrintCv}
                className="px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                Full Academic CV
              </button>

              <button
                onClick={onOpenHostingGuide}
                className="px-4 py-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-900/60 text-amber-900 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/40 text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                Deploy Site
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-4 pt-1 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-mono uppercase text-slate-400">Networks:</span>
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank" 
                rel="noreferrer"
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={PERSONAL_INFO.twitter}
                target="_blank" 
                rel="noreferrer"
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                title="X / Twitter"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href={PERSONAL_INFO.geometratechUrl}
                target="_blank" 
                rel="noreferrer"
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                title="GeometraTech Website"
                aria-label="GeometraTech"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Res Lab Media & Interactive Telemetry */}
          <div className="lg:col-span-5 space-y-4">
            {/* Visual Engineering Workbench Card */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-sm relative group">
              <div className="aspect-16/9 relative overflow-hidden">
                <img 
                  src={ASSET_IMAGES.heroLab}
                  alt="Electronics Engineering Workbench with FPGA Zedboard, Oscilloscope, Multimeter, and Microcontroller Testbench"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback container
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-teal-300 font-semibold">
                    Applied Hardware Lab · MIT
                  </div>
                  <div className="text-xs text-slate-200 mt-0.5">
                    PYNQ-Z1 / Xilinx FPGA synthesis, SDR telemetry &amp; power diagnostics
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Circuit & Waveform Telemetry Module */}
            <HardwareTelemetry />
          </div>

        </div>
      </div>
    </section>
  );
};
