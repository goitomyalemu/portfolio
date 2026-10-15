import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  Globe, 
  Github, 
  ExternalLink, 
  Code, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { generateStandaloneHtml } from '../utils/exportStandaloneHtml';

interface HostingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostingGuideModal: React.FC<HostingGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'github' | 'googlesites' | 'export'>('comparison');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleDownloadStandaloneHtml = () => {
    const html = generateStandaloneHtml();
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const githubActionsYaml = `name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 id="modal-title" className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              Hosting & Deployment Center: Google Sites vs. GitHub Pages
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Clear recommendations, step-by-step guides, and 1-click standalone HTML exports
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 overflow-x-auto">
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap border-b-2 ${
              activeTab === 'comparison'
                ? 'border-teal-600 text-teal-700 dark:text-teal-400 dark:border-teal-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Platform Comparison
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap border-b-2 ${
              activeTab === 'github'
                ? 'border-teal-600 text-teal-700 dark:text-teal-400 dark:border-teal-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            GitHub Pages Setup (Recommended)
          </button>
          <button
            onClick={() => setActiveTab('googlesites')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap border-b-2 ${
              activeTab === 'googlesites'
                ? 'border-teal-600 text-teal-700 dark:text-teal-400 dark:border-teal-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Google Sites Embedding
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap border-b-2 ${
              activeTab === 'export'
                ? 'border-teal-600 text-teal-700 dark:text-teal-400 dark:border-teal-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            1-Click Standalone HTML Bundle
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: PLATFORM COMPARISON */}
          {activeTab === 'comparison' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-teal-950 dark:text-teal-200">
                      Our Recommendation: Deploy on GitHub Pages + Link/Embed into Google Sites
                    </h3>
                    <p className="text-xs text-teal-800 dark:text-teal-300 mt-1 leading-relaxed">
                      For an electrical engineer, university director, and founder, <strong>GitHub Pages is the superior primary host</strong>: it provides instant global CDN speeds, free HTTPS, support for custom domains (e.g. <code className="px-1 py-0.5 rounded bg-teal-100 dark:bg-teal-900 text-[11px]">goitomyalemu.com</code>), full SEO crawlability, and automatic updates via git. You can simultaneously embed the live link directly into your Mekelle University Google Site (<code className="px-1 py-0.5 rounded bg-teal-100 dark:bg-teal-900 text-[11px]">sites.google.com/mu.edu.et/...</code>) so you get the best of both worlds!
                    </p>
                  </div>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3 font-semibold">Evaluation Criteria</th>
                      <th className="p-3 font-semibold text-teal-700 dark:text-teal-400">GitHub Pages (Recommended)</th>
                      <th className="p-3 font-semibold text-slate-700 dark:text-slate-300">Google Sites</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                    <tr>
                      <td className="p-3 font-medium text-slate-900 dark:text-white">Custom Domain</td>
                      <td className="p-3 text-emerald-700 dark:text-emerald-400 font-medium">Yes, 100% free with automatic SSL</td>
                      <td className="p-3">Yes, but requires Workspace domain admin privileges</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900 dark:text-white">SEO & Google Indexing</td>
                      <td className="p-3 text-emerald-700 dark:text-emerald-400 font-medium">Direct indexing of all text &amp; Schema.org</td>
                      <td className="p-3">Embedded code is inside an iframe (poor search indexing)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900 dark:text-white">Professional Engineer Perception</td>
                      <td className="p-3 text-emerald-700 dark:text-emerald-400 font-medium">Standard for software &amp; hardware researchers</td>
                      <td className="p-3">Often seen as basic or restricted for engineers</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900 dark:text-white">Layout &amp; Styling Freedom</td>
                      <td className="p-3 text-emerald-700 dark:text-emerald-400 font-medium">Full Tailwind CSS, SVG waveforms, animations</td>
                      <td className="p-3">Fixed templates unless embedded via iframe</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900 dark:text-white">Cost</td>
                      <td className="p-3 text-emerald-700 dark:text-emerald-400 font-medium">Free forever (unlimited bandwidth for portfolios)</td>
                      <td className="p-3">Free with Google account</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900 dark:text-white">Academic Institutional Ties</td>
                      <td className="p-3">Connects to your GitHub profile &amp; repositories</td>
                      <td className="p-3 text-emerald-700 dark:text-emerald-400 font-medium">Directly integrates with Mekelle University Google Workspace</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('github')}
                  className="px-4 py-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View GitHub Pages Step-by-Step Guide
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveTab('googlesites')}
                  className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                >
                  <Layers className="w-4 h-4" />
                  View Google Sites Embedding Guide
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: GITHUB PAGES */}
          {activeTab === 'github' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  How to Host on GitHub Pages in 3 Simple Steps
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Your portfolio will be live at <code className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-teal-700 dark:text-teal-400">https://&lt;your-username&gt;.github.io/portfolio</code>
                </p>
              </div>

              {/* Step 1 */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold">1</span>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white">Create a GitHub Repository</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 pl-7">
                  Log into GitHub and create a new public repository named <code className="font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 px-1 py-0.5 rounded">portfolio</code> or <code className="font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 px-1 py-0.5 rounded">goitomyalemu.github.io</code>.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold">2</span>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white">Option A: Drop the Single-File <code className="font-mono">index.html</code> (Fastest)</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 pl-7">
                  You can click the button below to download the complete standalone HTML bundle and upload it directly into your GitHub repository root. Then go to <strong>Settings &gt; Pages</strong> and set branch to <code className="font-mono">main</code>. It goes live in 60 seconds!
                </p>
                <div className="pl-7 pt-1">
                  <button
                    onClick={handleDownloadStandaloneHtml}
                    className="px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Standalone index.html
                  </button>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold">3</span>
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-white">Option B: Automated GitHub Actions CI/CD Workflow</h4>
                  </div>
                  <button
                    onClick={() => handleCopy(githubActionsYaml, 'yaml')}
                    className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1"
                  >
                    {copiedType === 'yaml' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedType === 'yaml' ? 'Copied Workflow!' : 'Copy YAML'}
                  </button>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 pl-7">
                  Create a file at <code className="font-mono text-[11px] bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">.github/workflows/deploy.yml</code> in your repository. GitHub will automatically build and deploy every time you push code:
                </p>
                <div className="pl-7">
                  <pre className="p-3 rounded-lg bg-slate-900 text-slate-200 text-[11px] font-mono overflow-x-auto max-h-48 border border-slate-800">
                    {githubActionsYaml}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GOOGLE SITES */}
          {activeTab === 'googlesites' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Embedding into Google Sites (Mekelle University Workspace)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  You can seamlessly integrate this site into your official university Google Site (<code className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-teal-700 dark:text-teal-400">sites.google.com/mu.edu.et/goitomyisfaalemu</code>) using either of two methods:
                </p>
              </div>

              {/* Method 1 */}
              <div className="p-4 rounded-xl border border-teal-200 dark:border-teal-900/60 bg-teal-50/50 dark:bg-teal-950/20 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Method 1 (Recommended): Embed by Live URL</h4>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 pl-6 leading-relaxed">
                  1. Deploy this site to GitHub Pages or your custom domain.<br />
                  2. Open your Google Site editor at <a href="https://sites.google.com" target="_blank" rel="noreferrer" className="text-teal-600 underline font-medium">sites.google.com</a>.<br />
                  3. In the right panel, click <strong>Insert &gt; Embed (&lt;/&gt;)</strong>.<br />
                  4. Select <strong>By URL</strong> and paste your GitHub Pages link (e.g., <code className="font-mono text-[11px] bg-white dark:bg-slate-900 px-1 py-0.5 rounded">https://goitomyalemu.github.io/portfolio</code>).<br />
                  5. Choose <strong>Whole page</strong> and adjust the frame height. Whenever you update your code on GitHub, your Google Site updates automatically with zero extra work!
                </p>
              </div>

              {/* Method 2 */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-3">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-slate-600 dark:text-slate-400 shrink-0" />
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Method 2: Embed Code (Raw HTML Paste)</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 pl-6 leading-relaxed">
                  If you do not want to use GitHub at all, you can copy the standalone HTML snippet and paste it directly into Google Sites via <strong>Insert &gt; Embed &gt; Embed Code</strong>.
                </p>
                <div className="pl-6">
                  <button
                    onClick={() => {
                      const html = generateStandaloneHtml();
                      handleCopy(html, 'gsuite-embed');
                    }}
                    className="px-3.5 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    {copiedType === 'gsuite-embed' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    {copiedType === 'gsuite-embed' ? 'Copied Embed HTML to Clipboard!' : 'Copy Self-Contained HTML for Google Sites'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: 1-CLICK STANDALONE EXPORT */}
          {activeTab === 'export' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Self-Contained Standalone HTML Generator
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  This exports a 100% self-contained, single-file <code className="font-mono">index.html</code> with all styling, SVG circuit graphics, interactive tabs, and full academic curriculum data bundled into one file. It has <strong>zero external server dependencies</strong> and runs immediately in any browser, GitHub repository, or iframe.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-3">
                  <Download className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Download index.html File</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Save directly to your computer. Ready to drag and drop into any hosting service.
                    </p>
                  </div>
                  <button
                    onClick={handleDownloadStandaloneHtml}
                    className="w-full py-2 px-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download index.html (Static Bundle)
                  </button>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-3">
                  <Copy className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Copy Full HTML Code</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Copies the complete source code to your clipboard for instant pasting into Google Sites.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const html = generateStandaloneHtml();
                      handleCopy(html, 'full-bundle');
                    }}
                    className="w-full py-2 px-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    {copiedType === 'full-bundle' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedType === 'full-bundle' ? 'Copied Entire HTML Bundle!' : 'Copy HTML to Clipboard'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/40 flex items-center justify-between text-xs text-slate-500">
          <span>Targeting GitHub Pages &amp; Google Sites</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
