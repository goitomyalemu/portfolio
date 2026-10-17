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

      {/* Print CV Modal */}
      <PrintCvModal
        isOpen={printCvOpen}
        onClose={() => setPrintCvOpen(false)}
      />

    </div>
  );
}
