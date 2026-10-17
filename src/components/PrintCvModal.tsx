import React from 'react';
import { X, Printer, Download, ExternalLink } from 'lucide-react';
import { 
  PERSONAL_INFO, 
  WORK_EXPERIENCE, 
  EDUCATION, 
  PUBLICATIONS, 
  PROJECTS, 
  THESIS_SUPERVISIONS, 
  TECHNICAL_SKILLS, 
  CERTIFICATIONS, 
  COMMUNITY_AND_NETWORKS,
  REFERENCES 
} from '../data/portfolioData';

interface PrintCvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintCvModal: React.FC<PrintCvModalProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[94vh] bg-white text-slate-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        {/* Top Action Bar (hidden when printing) */}
        <div className="no-print flex items-center justify-between px-6 py-3.5 bg-slate-100 border-b border-slate-200">
          <div>
            <h2 id="cv-modal-title" className="text-sm font-bold text-slate-800">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </h2>
            <p className="text-[11px] text-slate-500">
              ATS-compliant, printable academic CV format
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 font-sans text-xs sm:text-[13px] leading-relaxed text-slate-900 space-y-6 bg-white">
          
          {/* Header */}
          <div className="text-center pb-5 border-b-2 border-slate-900">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-950">
              {PERSONAL_INFO.name}
            </h1>
            <div className="mt-2 text-xs text-slate-700 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span>{PERSONAL_INFO.emailPrimary}</span>
              <span>|</span>
              <span>{PERSONAL_INFO.emailInstitutional}</span>
              <span>|</span>
              <span>WhatsApp: {PERSONAL_INFO.whatsappHandle}</span>
              <span>|</span>
              <span>Mekelle, Ethiopia</span>
            </div>
            <div className="mt-1 text-xs text-slate-600 flex flex-wrap items-center justify-center gap-x-3">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="underline">
                LinkedIn: {PERSONAL_INFO.name}
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.geometratechUrl} target="_blank" rel="noreferrer" className="underline">
                geometratech.com
              </a>
            </div>
          </div>

          {/* Profile Statement */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Profile
            </h2>
            <p className="text-slate-800 leading-relaxed">
              Electrical Engineer and Lecturer specializing in Embedded Systems, Reconfigurable Computing (FPGAs), Machine Learning, Renewable Energy Microgrids, and Higher Education Digital Transformation. Director of Information Management at Mekelle University and Founder of GeometraTech. Proven track record in community solar charging deployment for internally displaced populations across Tigray and edge AI healthcare diagnostic tools.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Work Experience
            </h2>
            <div className="space-y-4">
              {WORK_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-slate-950">
                    <span>{exp.role} — {exp.organization}</span>
                    <span className="font-mono text-xs font-normal text-slate-600">{exp.period}</span>
                  </div>
                  <div className="text-xs text-slate-600 italic">{exp.location}</div>
                  <ul className="list-disc pl-5 space-y-0.5 text-slate-800">
                    {exp.description.map((d, dIdx) => (
                      <li key={dIdx}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline font-bold text-slate-950">
                    <span>{edu.degree} — {edu.institution}</span>
                    <span className="font-mono text-xs font-normal text-slate-600">{edu.period}</span>
                  </div>
                  {edu.thesis && (
                    <div className="text-xs text-slate-700 italic">
                      Thesis: {edu.thesis}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Publications &amp; Articles
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-800">
              {PUBLICATIONS.map((pub, idx) => (
                <li key={idx}>
                  <strong>{pub.authors.join(', ')} ({pub.year}).</strong> <em>{pub.title}</em>. {pub.venue}. {pub.doi ? `DOI: https://doi.org/${pub.doi}` : pub.url ? `Available: ${pub.url}` : ''}
                </li>
              ))}
            </ul>
          </div>

          {/* Thesis Supervision */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Undergraduate (BSc) Thesis Supervision (MIT, Mekelle University)
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-800">
              {THESIS_SUPERVISIONS.map((t, idx) => (
                <li key={idx}>
                  <strong>[{t.year}] {t.title}</strong> ({t.level} Thesis). {t.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1 text-slate-800">
              {TECHNICAL_SKILLS.map((sk, idx) => (
                <div key={idx}>
                  <strong>{sk.category}:</strong> {sk.items.map(i => `${i.name} (${i.detail})`).join('; ')}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Key Certifications &amp; Accreditations
            </h2>
            <ul className="list-disc pl-5 space-y-0.5 text-slate-800">
              {CERTIFICATIONS.map((cert, idx) => (
                <li key={idx}>
                  <strong>{cert.title}</strong> — {cert.issuer} ({cert.year})
                </li>
              ))}
            </ul>
          </div>

          {/* References */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              References
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {REFERENCES.map((ref, idx) => (
                <div key={idx} className="text-slate-800">
                  <strong>{ref.name}</strong><br />
                  {ref.title}, {ref.organization}<br />
                  <span className="text-[11px] text-slate-600 italic">{ref.note}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
