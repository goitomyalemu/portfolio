import { jsPDF } from 'jspdf';
import { 
  PERSONAL_INFO, 
  WORK_EXPERIENCE, 
  EDUCATION, 
  PUBLICATIONS, 
  THESIS_SUPERVISIONS, 
  TECHNICAL_SKILLS, 
  CERTIFICATIONS, 
  COURSES_TAUGHT,
  REFERENCES 
} from '../data/portfolioData';

export function downloadCvPdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const marginLeft = 16;
  const marginRight = 16;
  const contentWidth = pageWidth - marginLeft - marginRight;
  const bottomMargin = 20;

  let y = 14;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - bottomMargin) {
      doc.addPage();
      y = 18;
      // Running header
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text(`${PERSONAL_INFO.name} — Curriculum Vitae`, marginLeft, 10);
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(marginLeft, 12, pageWidth - marginRight, 12);
    }
  };

  const drawSectionHeader = (title: string) => {
    checkPageBreak(12);
    y += 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(140, 29, 48); // #8C1D30 Crimson
    doc.text(title.toUpperCase(), marginLeft, y);
    y += 2;
    doc.setDrawColor(140, 29, 48);
    doc.setLineWidth(0.6);
    doc.line(marginLeft, y, pageWidth - marginRight, y);
    y += 5;
  };

  // Top Accent Bar
  doc.setFillColor(140, 29, 48); // Crimson #8C1D30
  doc.rect(0, 0, pageWidth, 4, 'F');

  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42); // #0F172A
  doc.text(PERSONAL_INFO.name.toUpperCase(), marginLeft, y);
  y += 6;

  // Title & Roles
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105);
  const titleLines = doc.splitTextToSize(
    `${PERSONAL_INFO.title} · ${PERSONAL_INFO.institution}`, 
    contentWidth
  );
  doc.text(titleLines, marginLeft, y);
  y += (titleLines.length * 4.2) + 1;

  // Contact Info Row
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const contactText = `Email: ${PERSONAL_INFO.emailPrimary} | ${PERSONAL_INFO.emailInstitutional} | WhatsApp: ${PERSONAL_INFO.whatsappHandle} | Location: ${PERSONAL_INFO.location}`;
  doc.text(contactText, marginLeft, y);
  y += 4;

  const linksText = `GitHub: github.com/goitomyalemu | LinkedIn: linkedin.com/in/goitomyalemu | Portfolio: github.com/goitomyalemu/portfolio`;
  doc.text(linksText, marginLeft, y);
  y += 4;

  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.4);
  doc.line(marginLeft, y, pageWidth - marginRight, y);
  y += 4;

  // 1. Professional Summary
  drawSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  const bioLines = doc.splitTextToSize(PERSONAL_INFO.fullBio, contentWidth);
  checkPageBreak(bioLines.length * 4);
  doc.text(bioLines, marginLeft, y);
  y += (bioLines.length * 4) + 2;

  // 2. Academic Appointments & Work Experience
  drawSectionHeader('Academic Appointments & Work Experience');
  WORK_EXPERIENCE.forEach((exp) => {
    checkPageBreak(18);
    // Role & Organization
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${exp.role} — ${exp.organization}`, marginLeft, y);

    // Period right aligned
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(140, 29, 48);
    doc.text(exp.period, pageWidth - marginRight, y, { align: 'right' });
    y += 4;

    // Location
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(exp.location, marginLeft, y);
    y += 4;

    // Bullets
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);
    exp.description.forEach((bullet) => {
      const bulletLines = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 4);
      checkPageBreak(bulletLines.length * 3.8);
      doc.text(bulletLines, marginLeft + 2, y);
      y += (bulletLines.length * 3.8) + 0.5;
    });
    y += 2.5;
  });

  // 3. Education
  drawSectionHeader('Education');
  EDUCATION.forEach((edu) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${edu.degree} — ${edu.institution}`, marginLeft, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(140, 29, 48);
    doc.text(edu.period, pageWidth - marginRight, y, { align: 'right' });
    y += 4;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(edu.location, marginLeft, y);
    y += 4;

    if (edu.thesis) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      const thesisText = `Thesis: "${edu.thesis}" ${edu.advisor ? `(Advisor: ${edu.advisor})` : ''}`;
      const thesisLines = doc.splitTextToSize(thesisText, contentWidth - 4);
      checkPageBreak(thesisLines.length * 3.8);
      doc.text(thesisLines, marginLeft + 2, y);
      y += (thesisLines.length * 3.8) + 1;
    }
    y += 1.5;
  });

  // 4. Courses Taught
  drawSectionHeader('Curriculum & Courses Taught');
  COURSES_TAUGHT.forEach((c) => {
    checkPageBreak(8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`• ${c.title}:`, marginLeft, y);
    const titleWidth = doc.getTextWidth(`• ${c.title}: `);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    const topics = c.topics.join(' · ');
    const topicLines = doc.splitTextToSize(topics, contentWidth - titleWidth - 2);
    doc.text(topicLines[0] || '', marginLeft + titleWidth, y);
    y += 4;
    if (topicLines.length > 1) {
      for (let i = 1; i < topicLines.length; i++) {
        checkPageBreak(4);
        doc.text(topicLines[i], marginLeft + 6, y);
        y += 4;
      }
    }
  });

  // 5. Peer-Reviewed Publications
  drawSectionHeader('Peer-Reviewed Publications & Research');
  PUBLICATIONS.forEach((pub, pIdx) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    const pubNum = `[${pIdx + 1}] `;
    const numWidth = doc.getTextWidth(pubNum);
    doc.text(pubNum, marginLeft, y);

    const authorsStr = `${pub.authors.join(', ')} (${pub.year}). `;
    doc.setFont('helvetica', 'normal');
    const titleAndVenue = `"${pub.title}." ${pub.venue}.${pub.doi ? ` DOI: https://doi.org/${pub.doi}` : ''}`;
    const fullCitationLines = doc.splitTextToSize(authorsStr + titleAndVenue, contentWidth - numWidth);
    
    doc.text(fullCitationLines, marginLeft + numWidth, y);
    y += (fullCitationLines.length * 4) + 1.5;
  });

  // 6. Thesis Supervisions
  drawSectionHeader('Engineering Thesis Supervisions (Mekelle Institute of Technology)');
  THESIS_SUPERVISIONS.forEach((t) => {
    checkPageBreak(9);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(140, 29, 48);
    const yearPrefix = `(${t.year}) `;
    const yWidth = doc.getTextWidth(yearPrefix);
    doc.text(yearPrefix, marginLeft, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(15, 23, 42);
    const thesisDesc = `"${t.title}" — ${t.level} Capstone in ${t.category} [${t.tech.slice(0, 3).join(', ')}]`;
    const thesisLines = doc.splitTextToSize(thesisDesc, contentWidth - yWidth);
    doc.text(thesisLines, marginLeft + yWidth, y);
    y += (thesisLines.length * 4) + 0.5;
  });

  // 7. Technical Skills & Certifications
  drawSectionHeader('Technical Proficiencies & Certifications');
  TECHNICAL_SKILLS.forEach((grp) => {
    checkPageBreak(10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${grp.category}:`, marginLeft, y);
    y += 3.8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    const skillsText = grp.items.map(i => `${i.name} (${i.detail})`).join('; ');
    const skillLines = doc.splitTextToSize(skillsText, contentWidth - 4);
    checkPageBreak(skillLines.length * 3.8);
    doc.text(skillLines, marginLeft + 2, y);
    y += (skillLines.length * 3.8) + 2;
  });

  checkPageBreak(10);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Professional Licenses & Verified Certifications:', marginLeft, y);
  y += 3.8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const certsText = CERTIFICATIONS.map(c => `${c.title} — ${c.issuer} (${c.year})`).join(' · ');
  const certLines = doc.splitTextToSize(certsText, contentWidth - 4);
  checkPageBreak(certLines.length * 3.8);
  doc.text(certLines, marginLeft + 2, y);
  y += (certLines.length * 3.8) + 2;

  // 8. References Note
  drawSectionHeader('References');
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  const refText = `Formal references from Dr. Fana Hagos Berhane (President, Mekelle University), Dr. Getachew Alemu (Associate Professor, AAiT, Addis Ababa University), and Dr. Leake Enquay Weldemariam (Head of IoT, MIT) are available upon request.`;
  const refLines = doc.splitTextToSize(refText, contentWidth);
  checkPageBreak(refLines.length * 3.8);
  doc.text(refLines, marginLeft, y);
  y += (refLines.length * 3.8) + 2;

  // Add Page Numbers to all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);

    // Bottom rule
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(marginLeft, pageHeight - 12, pageWidth - marginRight, pageHeight - 12);

    // Left footnote
    doc.text(
      `Goitom Yisfa Alemu · MIT, Mekelle University · Verified Academic CV`, 
      marginLeft, 
      pageHeight - 8
    );

    // Right page number
    doc.text(
      `Page ${i} of ${totalPages}`, 
      pageWidth - marginRight, 
      pageHeight - 8, 
      { align: 'right' }
    );
  }

  // Trigger Instant Native Auto-Download
  doc.save('Goitom_Yisfa_Alemu_CV.pdf');
}
