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
import { HostingGuideModal } from './components/HostingGuideModal';
import { PrintCvModal } from './components/PrintCvModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [hostingGuideOpen, setHostingGuideOpen] = useState(false);
  const [printCvOpen, setPrintCvOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Global keyboard shortcuts (Ctrl+K or Cmd+K or ? for hosting guide)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setHostingGuideOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col circuit-pattern transition-colors duration-200">
      
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode(!darkMode)}
        onOpenHostingGuide={() => setHostingGuideOpen(true)}
        onOpenPrintCv={() => setPrintCvOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenHostingGuide={() => setHostingGuideOpen(true)}
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
        onOpenHostingGuide={() => setHostingGuideOpen(true)}
        onOpenPrintCv={() => setPrintCvOpen(true)}
      />

      {/* Modals & Dialogs */}
      <HostingGuideModal
        isOpen={hostingGuideOpen}
        onClose={() => setHostingGuideOpen(false)}
      />

      <PrintCvModal
        isOpen={printCvOpen}
        onClose={() => setPrintCvOpen(false)}
      />

    </div>
  );
}
