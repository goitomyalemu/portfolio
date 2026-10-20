import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, Search } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenPrintCv: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleTheme,
  onOpenPrintCv,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('about');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'GeometraTech', href: '#geometratech' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Supervisions', href: '#theses' },
    { label: 'Skills', href: '#skills' },
  ];

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }

      // Track active section for location feedback
      const sections = ['about', 'geometratech', 'experience', 'research', 'projects', 'theses', 'skills', 'contact'];
      const scrollPosition = scrollTop + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Subtle Reading Progress Bar - Fixed to very top of viewport */}
      <div 
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="fixed top-0 left-0 right-0 h-[3px] bg-slate-200/50 dark:bg-slate-800/60 pointer-events-none z-[60] overflow-hidden"
      >
        <div 
          className="h-full w-full bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-400 dark:from-teal-400 dark:via-teal-300 dark:to-emerald-300 transition-transform duration-75 ease-out shadow-[0_0_8px_rgba(20,184,166,0.6)] will-change-transform"
          style={{ 
            transform: `scaleX(${scrollProgress / 100})`,
            transformOrigin: 'left'
          }}
        />
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0c1424]/95 backdrop-blur-md transition-colors relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          
          {/* Brand Wordmark in Bitter Serif */}
          <a 
            href="#top" 
            className="font-serif text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap shrink-0 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
          >
            {PERSONAL_INFO.name}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-medium text-slate-700 dark:text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap py-1 relative group ${
                    isActive 
                      ? 'text-teal-700 dark:text-teal-400 font-semibold' 
                      : 'text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400'
                  }`}
                >
                  <span>{link.label}</span>
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] bg-teal-700 dark:bg-teal-400 transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </a>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Trigger Button (Desktop & Tablet) */}
            <button
              onClick={onOpenSearch}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300 bg-slate-100/90 hover:bg-slate-200/90 dark:bg-slate-800/90 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-lg transition-colors cursor-pointer group shadow-2xs"
              title="Quick Search Portfolio (⌘K or Ctrl+K)"
              aria-label="Search portfolio"
            >
              <Search className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
              <span className="hidden lg:inline text-slate-700 dark:text-slate-300">Search portfolio...</span>
              <span className="inline lg:hidden text-slate-700 dark:text-slate-300">Search...</span>
              <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-2xs">
                <span>⌘</span>K
              </kbd>
            </button>

            {/* Search Trigger Button (Mobile) */}
            <button
              onClick={onOpenSearch}
              className="sm:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
              aria-label="Search portfolio"
              title="Search portfolio"
            >
              <Search className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            </button>

            {/* CV Button */}
            <button
              onClick={onOpenPrintCv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-2xs cursor-pointer"
              title="View & Download Academic CV (PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
              <span>CV</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Contact Button */}
            <a
              href="#contact"
              className={`inline-flex items-center px-4 py-1.5 text-xs font-semibold rounded-lg shadow-2xs transition-colors whitespace-nowrap ${
                activeSection === 'contact'
                  ? 'text-white bg-teal-800 dark:bg-teal-500 ring-2 ring-teal-500/30'
                  : 'text-white bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700'
              }`}
            >
              Contact
            </a>

            {/* Mobile hamburger menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1424] px-4 pt-2 pb-5 space-y-1 shadow-lg">
            {/* Quick search button in drawer */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full py-2 px-3 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 flex items-center justify-between gap-2 bg-slate-50 dark:bg-slate-900 cursor-pointer shadow-2xs mb-2"
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                <span>Search projects, papers, skills...</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                Filter
              </span>
            </button>

            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-teal-50 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300 font-semibold'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeSection === 'contact'
                  ? 'bg-teal-50 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300 font-semibold'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Contact
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPrintCv();
                }}
                className="w-full py-2 px-3 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 flex items-center justify-center gap-1.5 bg-slate-50 dark:bg-slate-900 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                <span>View &amp; Print Full CV</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

