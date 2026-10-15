import { 
  PERSONAL_INFO, 
  IMPACT_METRICS, 
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

export function generateStandaloneHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${PERSONAL_INFO.name} | Electrical Engineer, Lecturer, Director & Founder</title>
<meta name="description" content="Official portfolio and academic profile of ${PERSONAL_INFO.name}. Senior Lecturer at MIT, Director of Information Management at Mekelle University, and Founder of GeometraTech.">
<style>
:root{
  --bg:#f8fafc; --surface:#ffffff; --ink:#0f172a; --muted:#475569; --line:#e2e8f0;
  --accent:#0d9488; --accent-dark:#0f766e; --amber:#d97706; --amber-light:#fef3c7;
  --on-accent:#ffffff; --card-shadow:0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.06);
  --sans:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  --mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;
}
@media (prefers-color-scheme:dark){
  :root:not([data-theme="light"]){
    --bg:#090d16;--surface:#0f172a;--ink:#f1f5f9;--muted:#94a3b8;--line:#1e293b;
    --accent:#2dd4bf;--accent-dark:#14b8a6;--amber:#f59e0b;--amber-light:#292008;--on-accent:#042f2e;
    --card-shadow:0 4px 6px -1px rgba(0,0,0,0.4);
  }
}
:root[data-theme="dark"]{
  --bg:#090d16;--surface:#0f172a;--ink:#f1f5f9;--muted:#94a3b8;--line:#1e293b;
  --accent:#2dd4bf;--accent-dark:#14b8a6;--amber:#f59e0b;--amber-light:#292008;--on-accent:#042f2e;
  --card-shadow:0 4px 6px -1px rgba(0,0,0,0.4);
}
:root[data-theme="light"]{
  --bg:#f8fafc;--surface:#ffffff;--ink:#0f172a;--muted:#475569;--line:#e2e8f0;
  --accent:#0d9488;--accent-dark:#0f766e;--amber:#d97706;--amber-light:#fef3c7;--on-accent:#ffffff;
  --card-shadow:0 1px 3px 0 rgba(0,0,0,0.06);
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--ink);font:15px/1.65 var(--sans);background-image:radial-gradient(var(--line) 1px,transparent 1px);background-size:24px 24px}
a{color:var(--accent);text-decoration:none}
a:hover{text-decoration:underline}
:focus-visible{outline:2px solid var(--accent);outline-offset:2px;border-radius:4px}

.container{max-width:1120px;margin:0 auto;padding:0 24px}
header.top-nav{position:sticky;top:0;z-index:40;background:rgba(255,255,255,0.85);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
:root[data-theme="dark"] header.top-nav, @media (prefers-color-scheme:dark){header.top-nav{background:rgba(15,23,42,0.85)}}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:64px;gap:20px}
.brand{font-weight:700;font-size:1.05rem;color:var(--ink);white-space:nowrap}
.nav-links{display:flex;align-items:center;gap:18px;list-style:none;margin:0;padding:0;overflow-x:auto}
.nav-links a{color:var(--muted);font-size:0.875rem;font-weight:500;white-space:nowrap;padding:4px 0}
.nav-links a:hover{color:var(--ink);text-decoration:none}
.nav-actions{display:flex;align-items:center;gap:10px}
.btn{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:8px;font-size:0.85rem;font-weight:600;border:1px solid var(--line);background:var(--surface);color:var(--ink);cursor:pointer}
.btn:hover{background:var(--line);text-decoration:none}
.btn-primary{background:var(--accent);color:var(--on-accent);border-color:transparent}
.btn-primary:hover{opacity:0.92}

.hero{padding:56px 0 32px}
.hero-grid{display:grid;grid-template-columns:1fr;gap:32px;align-items:center}
@media (min-width:840px){.hero-grid{grid-template-columns:1.2fr 0.8fr}}
.hero h1{font-size:clamp(2rem,4vw,3.2rem);line-height:1.15;font-weight:800;letter-spacing:-0.02em;margin:0 0 12px}
.hero-role{color:var(--accent);font-size:1.1rem;font-weight:600;margin:0 0 16px}
.hero-bio{color:var(--muted);font-size:1rem;line-height:1.7;margin:0 0 24px}

.metrics-strip{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin:36px 0;padding:24px;background:var(--surface);border:1px solid var(--line);border-radius:12px;box-shadow:var(--card-shadow)}
.metric-box b{display:block;font-size:1.85rem;font-weight:800;color:var(--amber);font-variant-numeric:tabular-nums}
.metric-box span{display:block;font-size:0.88rem;font-weight:600;color:var(--ink);margin-top:2px}
.metric-box small{display:block;font-size:0.78rem;color:var(--muted);margin-top:2px}

section{padding:48px 0;border-top:1px solid var(--line)}
.section-title{font-size:1.5rem;font-weight:800;letter-spacing:-0.01em;margin:0 0 8px;display:flex;align-items:center;gap:10px}
.section-sub{color:var(--muted);font-size:0.92rem;margin:0 0 28px}

.card{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:24px;box-shadow:var(--card-shadow);margin-bottom:16px}
.grid-2{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px}

.timeline{position:relative;border-left:2px solid var(--line);margin-left:8px;padding-left:24px}
.timeline-item{position:relative;margin-bottom:32px}
.timeline-item::before{content:"";position:absolute;left:-31px;top:6px;width:12px;height:12px;border-radius:50%;background:var(--accent);border:2px solid var(--surface)}
.timeline-item h3{margin:0 0 4px;font-size:1.05rem;font-weight:700}
.timeline-meta{color:var(--muted);font-size:0.85rem;margin-bottom:10px}
.timeline-item ul{margin:0;padding-left:18px;color:var(--ink);font-size:0.92rem}
.timeline-item li{margin-bottom:4px}

.tag{display:inline-block;padding:2px 10px;border-radius:999px;background:var(--bg);border:1px solid var(--line);font-size:0.78rem;font-weight:500;color:var(--muted);margin:2px 4px 2px 0}
.pub-item{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:20px;margin-bottom:16px}
.pub-title{font-weight:700;font-size:1rem;color:var(--ink);margin:0 0 6px}
.pub-authors{color:var(--muted);font-size:0.85rem;margin:0 0 6px}
.pub-venue{color:var(--accent);font-size:0.85rem;font-weight:600;margin:0 0 10px}

footer{padding:48px 0;border-top:1px solid var(--line);color:var(--muted);font-size:0.85rem;text-align:center}
@media (max-width:768px){.nav-links{display:none}}
</style>
</head>
<body>

<header class="top-nav">
  <div class="container nav-inner">
    <div class="brand">${PERSONAL_INFO.name}</div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#geometratech">GeometraTech</a></li>
      <li><a href="#research">Research</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#theses">Supervisions</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#networks">Networks</a></li>
      <li><a href="#certs">Certifications</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <button class="btn" onclick="toggleTheme()" aria-label="Toggle Dark Mode">&#9680; Theme</button>
      <a class="btn btn-primary" href="#contact">Contact</a>
    </div>
  </div>
</header>

<main class="container">
  <!-- HERO -->
  <section class="hero" id="about" style="border-top:none">
    <div class="hero-grid">
      <div>
        <div style="font-size:0.85rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--accent);margin-bottom:8px">
          Mekelle University · Mekelle Institute of Technology
        </div>
        <h1>${PERSONAL_INFO.name}</h1>
        <p class="hero-role" style="line-height:1.4">
          Founder, GeometraTech | Licensed Professional Electrical Engineer | Lecturer | Director of Information Management<br>
          <span style="font-size:0.95rem;color:var(--muted);font-weight:600">Mekelle Institute of Technology, Mekelle University</span>
        </p>
        <p class="hero-bio">${PERSONAL_INFO.fullBio}</p>
        <div style="display:flex;flex-wrap:wrap;gap:10px">
          <a class="btn btn-primary" href="#contact">Get in Touch</a>
          <a class="btn" href="${PERSONAL_INFO.linkedin}" target="_blank" rel="noreferrer">LinkedIn Profile</a>
          <a class="btn" href="${PERSONAL_INFO.geometratechUrl}" target="_blank" rel="noreferrer">GeometraTech.com</a>
        </div>
      </div>
      <div>
        <!-- Circuit & Waveform Interactive Emulation -->
        <div class="card" style="padding:20px;text-align:center;background:radial-gradient(circle at top,rgba(13,148,136,0.06),transparent 70%),var(--surface)">
          <div style="font-size:0.78rem;font-weight:700;letter-spacing:0.08em;color:var(--muted);text-transform:uppercase;margin-bottom:12px">
            Reconfigurable Hardware &amp; Telemetry
          </div>
          <svg viewBox="0 0 400 120" style="width:100%;height:auto;margin-bottom:12px" aria-hidden="true">
            <path d="M10 60 H80 L100 20 L120 100 L140 30 L160 80 L180 60 H260 L280 20 L300 100 L320 60 H390" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="100" cy="20" r="4" fill="var(--amber)"/>
            <circle cx="120" cy="100" r="4" fill="var(--amber)"/>
            <circle cx="280" cy="20" r="4" fill="var(--amber)"/>
            <circle cx="300" cy="100" r="4" fill="var(--amber)"/>
          </svg>
          <div style="font-size:0.82rem;font-family:var(--mono);color:var(--muted)">
            Target: PYNQ-Z1 · Clock: 100MHz · State: Nominal
          </div>
        </div>
      </div>
    </div>

    <!-- Impact Metrics Strip -->
    <div class="metrics-strip">
      ${IMPACT_METRICS.map(m => `
        <div class="metric-box">
          <b>${m.value}</b>
          <span>${m.label}</span>
          <small>${m.sublabel}</small>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- GEOMETRATECH -->
  <section id="geometratech">
    <h2 class="section-title">GeometraTech Engineering Venture</h2>
    <p class="section-sub">Powering Ethiopia's last mile with off-grid solar infrastructure and intelligent digital solutions.</p>
    <div class="card" style="border-left:4px solid var(--amber)">
      <h3 style="margin:0 0 8px;font-size:1.15rem;font-weight:700">Decentralized Clean Energy &amp; Battery Telemetry</h3>
      <p style="color:var(--muted);margin:0 0 16px">
        Founded in Mekelle in 2024, GeometraTech designs, manufactures, and deploys high-reliability solar charging stations, shared battery hubs, and embedded monitoring hardware for communities beyond the national grid.
      </p>
      <div class="grid-2">
        <div>
          <h4 style="font-size:0.95rem;font-weight:700;margin:0 0 8px">Sustainable Energy Infrastructure</h4>
          <p style="font-size:0.88rem;color:var(--muted);margin:0">
            • Modular solar charging stations &amp; kiosk enclosures<br>
            • Shared neighborhood battery charging hubs<br>
            • Field installation, commissioning, and warranty support<br>
            • Capacity building for local community operators
          </p>
        </div>
        <div>
          <h4 style="font-size:0.95rem;font-weight:700;margin:0 0 8px">Intelligent Digital Systems</h4>
          <p style="font-size:0.88rem;color:var(--muted);margin:0">
            • IoT remote telemetry &amp; battery state-of-charge monitoring<br>
            • Power conversion and custom DC charge electronics<br>
            • Institutional management platforms for microgrid networks
          </p>
        </div>
      </div>
      <div style="margin-top:16px">
        <a class="btn btn-primary" href="${PERSONAL_INFO.geometratechUrl}" target="_blank" rel="noreferrer">Visit GeometraTech Website</a>
      </div>
    </div>
  </section>

  <!-- WORK EXPERIENCE -->
  <section id="experience">
    <h2 class="section-title">Work Experience &amp; Leadership</h2>
    <p class="section-sub">Over 14 years advancing higher education data systems, engineering education, and research.</p>
    <div class="timeline">
      ${WORK_EXPERIENCE.map(exp => `
        <div class="timeline-item">
          <h3>${exp.role}</h3>
          <div class="timeline-meta">${exp.organization} · ${exp.location} | ${exp.period}</div>
          <ul>
            ${exp.description.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- RESEARCH & PUBLICATIONS -->
  <section id="research">
    <h2 class="section-title">Publications &amp; Articles</h2>
    <p class="section-sub">Peer-reviewed literature, engineering journal papers, and international analytical articles.</p>
    <div>
      ${PUBLICATIONS.map(pub => `
        <div class="pub-item">
          <h3 class="pub-title">${pub.title}</h3>
          <p class="pub-authors">${pub.authors.join(', ')} (${pub.year})</p>
          <p class="pub-venue">${pub.venue}</p>
          ${pub.abstract ? `<p style="font-size:0.88rem;color:var(--muted);margin:0 0 12px">${pub.abstract}</p>` : ''}
          ${pub.url ? `<a class="btn" style="padding:4px 10px;font-size:0.78rem" href="${pub.url}" target="_blank" rel="noreferrer">Read Full Paper ↗</a>` : ''}
        </div>
      `).join('')}
    </div>
  </section>

  <!-- FEATURED PROJECTS -->
  <section id="projects">
    <h2 class="section-title">Featured Projects &amp; Initiatives</h2>
    <p class="section-sub">From global AI developer contest finalist tools to community off-grid solar microgrids.</p>
    <div class="grid-2">
      ${PROJECTS.map(p => `
        <div class="card">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
            <span style="font-weight:700;color:var(--accent);font-size:0.82rem">${p.period}</span>
            <span style="font-size:0.75rem;font-weight:600;color:var(--amber)">${p.role}</span>
          </div>
          <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 8px">${p.title}</h3>
          <p style="font-size:0.85rem;color:var(--muted);margin:0 0 10px">${p.summary}</p>
          <ul style="margin:0 0 12px;padding-left:16px;font-size:0.82rem;color:var(--ink)">
            ${p.highlights.map(hl => `<li>${hl}</li>`).join('')}
          </ul>
          <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;padding-top:10px;border-top:1px solid var(--line)">
            <div>
              ${p.tags.slice(0, 3).map(tag => `<span class="tag">#${tag}</span>`).join('')}
            </div>
            ${p.url ? `<a class="btn" style="padding:3px 10px;font-size:0.78rem" href="${p.url}" target="_blank" rel="noreferrer">Project Link ↗</a>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- THESIS SUPERVISIONS -->
  <section id="theses">
    <h2 class="section-title">BSc Thesis Supervision (2017 – 2026)</h2>
    <p class="section-sub">Guiding undergraduate BSc engineering theses at Mekelle Institute of Technology.</p>
    <div class="grid-2">
      ${THESIS_SUPERVISIONS.map(t => `
        <div class="card">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
            <span style="font-weight:700;color:var(--accent);font-size:0.82rem">${t.year} · ${t.level} Thesis</span>
            <span style="font-size:0.75rem;color:var(--muted)">${t.category}</span>
          </div>
          <h3 style="font-size:0.95rem;font-weight:700;margin:0 0 8px">${t.title}</h3>
          <p style="font-size:0.85rem;color:var(--muted);margin:0 0 12px">${t.description}</p>
          <div>
            ${t.tech.map(tech => `<span class="tag">${tech}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- SKILLS & TECHNICAL EXPERTISE -->
  <section id="skills">
    <h2 class="section-title">Skills &amp; Technical Expertise</h2>
    <p class="section-sub">Specialized toolchains, programming languages, and engineering competencies.</p>
    <div class="grid-2">
      ${TECHNICAL_SKILLS.map(cat => `
        <div class="card">
          <h3 style="font-size:1rem;font-weight:700;margin:0 0 12px;color:var(--accent)">${cat.category}</h3>
          ${cat.items.map(it => `
            <div style="margin-bottom:10px">
              <strong style="font-size:0.88rem;display:block">${it.name}</strong>
              <span style="font-size:0.82rem;color:var(--muted)">${it.detail}</span>
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>
  </section>

  <!-- ADVISORY & COMMUNITY NETWORKS -->
  <section id="networks">
    <h2 class="section-title">Advisory, Enterprise Training &amp; Networks</h2>
    <p class="section-sub">Mentorship with UNCTAD-EMPRETEC, regional financial technology, and leadership in professional associations.</p>
    <div class="grid-2">
      ${COMMUNITY_AND_NETWORKS.map(net => `
        <div class="card">
          <h3 style="font-size:0.98rem;font-weight:700;margin:0 0 4px">${net.name}</h3>
          <div style="color:var(--accent);font-size:0.82rem;font-weight:600;margin-bottom:6px">${net.role}</div>
          <p style="font-size:0.85rem;color:var(--muted);margin:0">${net.detail}</p>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- CERTIFICATIONS -->
  <section id="certs">
    <h2 class="section-title">Verified Certifications &amp; Accreditations</h2>
    <p class="section-sub">Machine learning, IoT protocols, cybersecurity, and intellectual property credentials.</p>
    <div class="grid-2">
      ${CERTIFICATIONS.map(cert => `
        <div class="card" style="padding:16px">
          <h3 style="font-size:0.92rem;font-weight:700;margin:0 0 4px">${cert.title}</h3>
          <div style="font-size:0.8rem;color:var(--muted)">${cert.issuer} · <b style="color:var(--accent)">${cert.year}</b></div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- REFERENCES -->
  <section id="references">
    <h2 class="section-title">Academic &amp; Professional References</h2>
    <div class="grid-2">
      ${REFERENCES.map(ref => `
        <div class="card">
          <h3 style="margin:0 0 4px;font-size:1rem;font-weight:700">${ref.name}</h3>
          <p style="margin:0 0 8px;font-size:0.85rem;color:var(--muted)">${ref.title}, ${ref.organization}</p>
          <p style="margin:0;font-size:0.85rem"><a href="mailto:${ref.email}">${ref.email}</a> · ${ref.phone}</p>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact">
    <h2 class="section-title">Get in Touch</h2>
    <p class="section-sub">For academic research collaborations, solar microgrid installations, or university inquiries.</p>
    <div class="card" style="max-width:600px">
      <p style="margin:0 0 16px;font-size:0.95rem">
        <strong>Primary Email:</strong> <a href="mailto:${PERSONAL_INFO.emailPrimary}">${PERSONAL_INFO.emailPrimary}</a><br>
        <strong>University Email:</strong> <a href="mailto:${PERSONAL_INFO.emailInstitutional}">${PERSONAL_INFO.emailInstitutional}</a><br>
        <strong>Phone / WhatsApp:</strong> <a href="${PERSONAL_INFO.whatsappUrl}">${PERSONAL_INFO.phoneFormatted}</a><br>
        <strong>Location:</strong> ${PERSONAL_INFO.location}
      </p>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        <a class="btn btn-primary" href="mailto:${PERSONAL_INFO.emailPrimary}">Send Email</a>
        <a class="btn" href="${PERSONAL_INFO.whatsappUrl}" target="_blank" rel="noreferrer">WhatsApp Chat</a>
        <a class="btn" href="${PERSONAL_INFO.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
        <a class="btn" href="${PERSONAL_INFO.twitter}" target="_blank" rel="noreferrer">X (Twitter)</a>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="container">
    <p>${PERSONAL_INFO.name} · ${PERSONAL_INFO.title}</p>
    <p>© ${new Date().getFullYear()} · Optimized for GitHub Pages &amp; Google Sites</p>
  </div>
</footer>

<script>
function toggleTheme(){
  var cur = document.documentElement.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  var next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try{ localStorage.setItem('theme', next); }catch(e){}
}
(function(){
  try{
    var saved = localStorage.getItem('theme');
    if(saved) document.documentElement.setAttribute('data-theme', saved);
  }catch(e){}
})();
</script>
</body>
</html>`;
}
