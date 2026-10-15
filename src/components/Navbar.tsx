import React from 'react';
import { Sun, Moon, Download, Globe, Menu, X, FileText, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenHostingGuide: () => void;
  onOpenPrintCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleTheme,
  onOpenHostingGuide,
  onOpenPrintCv,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'GeometraTech', href: '#geometratech' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Supervisions', href: '#theses' },
    { label: 'Skills', href: '#skills' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md">
      {/* Top Notice Banner on Hosting */}
      <div className="w-full bg-slate-900 dark:bg-teal-950/80 text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2 border-b border-slate-800 dark:border-teal-900/50">
        <span className="hidden sm:inline text-teal-300">Ready to publish?</span>
        <span>Export ready for <strong>Google Sites Embed</strong> &amp; <strong>GitHub Pages</strong></span>
        <button
          onClick={onOpenHostingGuide}
          className="ml-2 px-2 py-0.5 rounded bg-teal-600 hover:bg-teal-500 text-white text-[11px] font-semibold transition-colors flex items-center gap-1"
        >
          <Globe className="w-3 h-3" />
          Deploy Guide
        </button>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#top" 
          className="text-base font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Zone 2: Single-line Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Print CV, Theme, Host Guide, Contact) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenPrintCv}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            title="View & Print Academic CV"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span>CV</span>
          </button>

          <button
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={onOpenHostingGuide}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/80 text-teal-800 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/60 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Deploy</span>
          </button>

          <a
            href="#contact"
            className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-teal-600 dark:hover:bg-teal-500 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrintCv();
              }}
              className="w-full py-2 px-3 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              View &amp; Print Full CV
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHostingGuide();
              }}
              className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-teal-600 text-white flex items-center justify-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              Deploy to Google Sites / GitHub Pages
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
