import React, { useState } from 'react';
import { X, Download, Copy, Check, FileText } from 'lucide-react';
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
  REFERENCES,
  ACADEMIC_BLURBS,
  COURSES_TAUGHT
} from '../data/portfolioData';
import { downloadCvPdf } from '../utils/generateCvPdf';

interface PrintCvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintCvModal: React.FC<PrintCvModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

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

  const handleDownloadPdf = () => {
    downloadCvPdf();
  };

  const handleCopyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const generatePlaintextCv = (): string => {
    return `${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.title}
Institution: ${PERSONAL_INFO.institution}
Email: ${PERSONAL_INFO.emailPrimary} | ${PERSONAL_INFO.emailInstitutional}
WhatsApp: ${PERSONAL_INFO.whatsappHandle} | GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}
Portfolio: ${PERSONAL_INFO.portfolioUrl}
Location: ${PERSONAL_INFO.location}

=== PROFESSIONAL SUMMARY ===
${PERSONAL_INFO.fullBio}

=== WORK EXPERIENCE ===
${WORK_EXPERIENCE.map(exp => `* ${exp.role} — ${exp.organization} (${exp.period})\n  ${exp.description.join('\n  ')}`).join('\n\n')}

=== EDUCATION ===
${EDUCATION.map(edu => `* ${edu.degree} — ${edu.institution} (${edu.period})${edu.thesis ? `\n  Thesis: ${edu.thesis}` : ''}`).join('\n\n')}

=== PEER-REVIEWED PUBLICATIONS ===
${PUBLICATIONS.map(pub => `* ${pub.authors.join(', ')} (${pub.year}). ${pub.title}. ${pub.venue}.${pub.doi ? ` DOI: https://doi.org/${pub.doi}` : ''}`).join('\n')}

=== MASTER'S & UNDERGRADUATE THESES SUPERVISED ===
${THESIS_SUPERVISIONS.map(t => `* ${t.title} (${t.year}) — ${t.level} Engineering Thesis in ${t.category}`).join('\n')}
`;
  };

  return (
    <div 
      id="cv-modal-overlay" 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        id="cv-modal-wrapper"
        className="relative w-full max-w-4xl max-h-[94vh] bg-white text-slate-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        {/* Top Action Bar (hidden when printing) */}
        <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-3.5 bg-slate-100 border-b border-slate-200">
          <div>
            <h2 id="cv-modal-title" className="text-sm font-bold text-slate-800">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </h2>
            <p className="text-[11px] text-slate-500">
              ATS-compliant, printable academic CV format &amp; grant utilities
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Quick Copy Blurbs for Grants & Papers */}
            <button
              onClick={() => handleCopyText(ACADEMIC_BLURBS.shortBio, 'short-bio')}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors shadow-2xs cursor-pointer"
              title="Copy short academic bio for grant applications & conferences"
            >
              {copiedKey === 'short-bio' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'short-bio' ? 'Copied Bio' : 'Copy Grant Bio'}</span>
            </button>

            <button
              onClick={() => handleCopyText(generatePlaintextCv(), 'plain-cv')}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors shadow-2xs cursor-pointer"
              title="Copy entire CV as clean plain text"
            >
              {copiedKey === 'plain-cv' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <FileText className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'plain-cv' ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={() => {
                const text = generatePlaintextCv();
                const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `Goitom_Yisfa_Alemu_CV.txt`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors shadow-2xs cursor-pointer"
              title="Download CV as a plain text (.txt) file directly"
            >
              <Download className="w-3.5 h-3.5 text-slate-700" />
              <span>Download .TXT</span>
            </button>

            {/* Primary Action: Direct Auto-Download PDF */}
            <button
              onClick={handleDownloadPdf}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#8c1d30] hover:bg-[#731526] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer active:scale-98"
              title="Auto-download formatted academic CV as a standalone PDF file directly"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div 
          id="cv-printable-document" 
          className="flex-1 overflow-y-auto p-6 sm:p-10 font-sans text-xs sm:text-[13px] leading-relaxed text-slate-900 space-y-6 bg-white"
        >
          {/* Header */}
          <div className="cv-section text-center pb-5 border-b-2 border-slate-900">
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
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="underline">
                GitHub: {PERSONAL_INFO.github.replace('http://', '').replace('https://', '')}
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="underline">
                LinkedIn: {PERSONAL_INFO.linkedin.replace('http://', '').replace('https://', '')}
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.portfolioUrl} target="_blank" rel="noreferrer" className="underline">
                Portfolio: github.com/goitomyalemu/portfolio
              </a>
            </div>
          </div>

          {/* Profile Statement */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-xs border-b border-slate-300 pb-1 mb-2 text-slate-900">
              Professional Summary
            </h3>
            <p className="text-justify text-slate-800">
              {PERSONAL_INFO.fullBio}
            </p>
          </div>

          {/* Academic Appointments & Leadership */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-xs border-b border-slate-300 pb-1 mb-2.5 text-slate-900">
              Work Experience &amp; Academic Appointments
            </h3>
            <div className="space-y-4">
              {WORK_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{exp.role} — {exp.organization}</span>
                    <span className="font-mono text-xs">{exp.period}</span>
                  </div>
                  <div className="text-xs text-slate-600 italic">
                    {exp.location}
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-slate-800 mt-1">
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
            <h3 className="font-bold uppercase tracking-wider text-xs border-b border-slate-300 pb-1 mb-2 text-slate-900">
              Education
            </h3>
            <div className="space-y-3">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{edu.degree} — {edu.institution}</span>
                    <span className="font-mono text-xs">{edu.period}</span>
                  </div>
                  <div className="text-xs text-slate-600">
                    {edu.location}
                  </div>
                  {edu.thesis && (
                    <div className="text-xs text-slate-700 italic mt-0.5">
                      Thesis: "{edu.thesis}" {edu.advisor ? `(Advisor: ${edu.advisor})` : ''}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Courses Taught */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-xs border-b border-slate-300 pb-1 mb-2 text-slate-900">
              Curriculum &amp; Courses Taught
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {COURSES_TAUGHT.map((course, idx) => (
                <div key={idx} className="p-2 rounded bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900">{course.title}</strong>
                  <div className="text-[11px] text-slate-600">{course.topics.join(' · ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-xs border-b border-slate-300 pb-1 mb-2 text-slate-900">
              Peer-Reviewed Publications &amp; Research Articles
            </h3>
            <ol className="list-decimal pl-5 space-y-2 text-slate-800">
              {PUBLICATIONS.map((pub, idx) => (
                <li key={idx}>
                  <strong>{pub.authors.join(', ')} ({pub.year}).</strong> <em>{pub.title}</em>. {pub.venue}. {pub.doi ? `DOI: https://doi.org/${pub.doi}` : pub.url ? `Available: ${pub.url}` : ''}
                </li>
              ))}
            </ol>
          </div>

          {/* Supervisions */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-xs border-b border-slate-300 pb-1 mb-2 text-slate-900">
              Engineering Thesis Supervisions (Mekelle Institute of Technology)
            </h3>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-800">
              {THESIS_SUPERVISIONS.map((item, idx) => (
                <li key={idx}>
                  <strong>({item.year}).</strong> "{item.title}" — <em>{item.level} Engineering Thesis in {item.category}</em>.
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Skills & Certifications */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-xs border-b border-slate-300 pb-1 mb-2 text-slate-900">
              Technical Proficiencies &amp; Certifications
            </h3>
            <div className="space-y-2 text-slate-800">
              {TECHNICAL_SKILLS.map((grp, idx) => (
                <div key={idx}>
                  <strong className="text-slate-900">{grp.category}:</strong>{' '}
                  <span>{grp.items.map(i => `${i.name} (${i.detail})`).join('; ')}</span>
                </div>
              ))}
              <div className="pt-1">
                <strong className="text-slate-900">Professional Licenses &amp; Certifications:</strong>{' '}
                <span>
                  {CERTIFICATIONS.map(c => `${c.title} (${c.issuer}, ${c.year})`).join(' · ')}
                </span>
              </div>
            </div>
          </div>

          {/* References Notice */}
          <div className="pt-2 text-slate-600 text-xs italic">
            Academic and professional references from Dr. Fana Hagos Berhane (President, Mekelle University), Dr. Getachew Alemu (AAiT, AAU), and Dr. Leake Enquay Weldemariam (MIT) available upon request.
          </div>

        </div>

      </div>
    </div>
  );
};
