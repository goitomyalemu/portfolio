import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactStrip } from './components/ImpactStrip';
import { GeometraTechSection } from './components/GeometraTechSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { PublicationsSection } from './components/PublicationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ThesisSupervisionSection } from './components/ThesisSupervisionSection';
import { SkillsAndCertifications } from './components/SkillsAndCertifications';
import { ReferencesAndContact } from './components/ReferencesAndContact';
import { Footer } from './components/Footer';
import { PrintCvModal } from './components/PrintCvModal';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
      }
    } catch {
      // ignore
    }
    return false; // Light theme is default
  });

  const [printCvOpen, setPrintCvOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Global keyboard shortcut: Cmd+K / Ctrl+K or / to open Search
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((document.activeElement?.tagName || ''))) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch {
      // ignore
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen circuit-pattern text-slate-600 dark:text-slate-200 flex flex-col transition-colors duration-200 selection:bg-teal-500/20 selection:text-teal-900 dark:selection:text-teal-200">
      
      {/* Top Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode(!darkMode)}
        onOpenPrintCv={() => setPrintCvOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenPrintCv={() => setPrintCvOpen(true)}
        />
        
        <ImpactStrip />
        
        <GeometraTechSection />
        
        <ExperienceTimeline />
        
        <PublicationsSection />
        
        <ProjectsSection />
        
        <ThesisSupervisionSection />
        
        <SkillsAndCertifications />
        
        <ReferencesAndContact />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrintCv={() => setPrintCvOpen(true)}
      />

      {/* Global Quick Search & Filter Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* Print CV Modal */}
      <PrintCvModal
        isOpen={printCvOpen}
        onClose={() => setPrintCvOpen(false)}
      />

    </div>
  );
}
