import React, { useState, useMemo } from 'react';
import { ExternalLink, Award, Search, ChevronDown, ChevronUp, Cpu, Wrench } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface TechnicalSpecs {
  architecture?: string;
  hardware?: string;
  toolchain?: string;
  telemetry?: string;
}

const PROJECT_TECH_SPECS: Record<string, TechnicalSpecs> = {
  'amd-ryzen-ai': {
    architecture: 'XDNA NPU + Zen 4 CPU (Ryzen AI Hybrid Accelerator)',
    hardware: 'AMD Phoenix / Hawk Point Ryzen AI SoC with Dedicated Neural Processing Unit',
    toolchain: 'Vitis AI Execution Provider · ONNX Runtime · INT8 Quantized PyTorch Models',
    telemetry: 'Offline Low-Latency Inference (Zero Cloud Dependency for Remote Clinics)'
  },
  'solar-kiosks': {
    architecture: 'Decentralized Off-Grid Photovoltaic Power Distribution',
    hardware: 'Monocrystalline Solar PV Array · 48V LiFePO4 Energy Storage Bank with Custom BMS',
    toolchain: 'Modular Metal Ingress-Protected Enclosures · Smart MPPT Solar Charge Controllers',
    telemetry: 'Cellular IoT Gateway (4G LTE/GSM) Logging Cell Voltages, SOC & Thermal Sensors'
  },
  'fpga-sdr': {
    architecture: 'Heterogeneous Hardware-Software Co-Design (ARM PS + FPGA PL Fabric)',
    hardware: 'Digilent PYNQ-Z1 (Xilinx Zynq-7000 XC7Z020 SoC, 85k Logic Cells)',
    toolchain: 'Xilinx Vivado HLS · AXI4 Streaming Interconnect · Python Embedded Jupyter Bindings',
    telemetry: 'Direct Digital Synthesizer (DDS), Real-Time QPSK Baseband Modulation & Demod'
  }
};

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'solar' | 'ai-embedded' | 'governance' | 'community'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSpecsId, setExpandedSpecsId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return PROJECTS.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      const matchesTitle = p.title.toLowerCase().includes(q);
      const matchesSummary = p.summary.toLowerCase().includes(q);
      const matchesTags = p.tags.some(t => t.toLowerCase().includes(q));
      const matchesRole = p.role.toLowerCase().includes(q);
      return matchesTitle || matchesSummary || matchesTags || matchesRole;
    });
  }, [activeCategory, searchQuery]);

  const tabs = [
    { id: 'all', label: `All Projects (${PROJECTS.length})` },
    { id: 'solar', label: `Solar & Microgrids (${PROJECTS.filter(p => p.category === 'solar').length})` },
    { id: 'ai-embedded', label: `AI & Embedded Hardware (${PROJECTS.filter(p => p.category === 'ai-embedded').length})` },
    { id: 'governance', label: `Digital Governance (${PROJECTS.filter(p => p.category === 'governance').length})` },
    { id: 'community', label: `Community & Health (${PROJECTS.filter(p => p.category === 'community').length})` },
  ];

  return (
    <section id="projects" className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 font-mono mb-1">
            ENGINEERING IMPLEMENTATIONS &amp; GRANTS
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Featured Projects &amp; Initiatives
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
            From global AI contest finalist architectures to field-tested solar microgrids and FPGA hardware acceleration.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap active:scale-98 cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-teal-700 text-white shadow-2xs'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative sm:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search projects by keyword, tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-teal-600 shadow-2xs"
            />
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 text-xs">
              No projects matched your search criteria.
            </div>
          ) : (
            filteredProjects.map((project) => {
              const techSpecs = PROJECT_TECH_SPECS[project.id];
              const isSpecsExpanded = expandedSpecsId === project.id;

              return (
                <div
                  key={project.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs hover:border-teal-500/50 hover:shadow-xs transition-all flex flex-col group"
                >
                  {/* Project Media Image */}
                  {project.image && (
                    <div className="aspect-16/10 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[11px] font-mono uppercase font-semibold text-amber-300">
                          {project.role}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      
                      {/* Zero-Pill Unboxed Header Metadata */}
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{project.period}</span>
                        {project.id === 'amd-ryzen-ai' && (
                          <span className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 font-bold text-xs font-sans">
                            <Award className="w-3.5 h-3.5" />
                            <span>AMD Global Finalist</span>
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Highlights list */}
                      <ul className="space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-400">
                        {project.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-700 dark:bg-teal-400 mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{hl}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Expandable Technical Specs Drawer */}
                      {techSpecs && (
                        <div className="pt-2">
                          <button
                            onClick={() => setExpandedSpecsId(isSpecsExpanded ? null : project.id)}
                            className="text-[11px] font-semibold text-teal-700 dark:text-teal-400 hover:text-teal-800 flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            <Cpu className="w-3 h-3" />
                            <span>{isSpecsExpanded ? 'Hide Technical Architecture' : 'View Technical Architecture'}</span>
                            {isSpecsExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                          </button>

                          {isSpecsExpanded && (
                            <div className="mt-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-[11px] space-y-1.5 font-mono text-slate-600 dark:text-slate-300">
                              {techSpecs.architecture && (
                                <div>
                                  <strong className="text-slate-800 dark:text-slate-100 font-sans">Architecture: </strong>
                                  <span>{techSpecs.architecture}</span>
                                </div>
                              )}
                              {techSpecs.hardware && (
                                <div>
                                  <strong className="text-slate-800 dark:text-slate-100 font-sans">Hardware / SoC: </strong>
                                  <span>{techSpecs.hardware}</span>
                                </div>
                              )}
                              {techSpecs.toolchain && (
                                <div>
                                  <strong className="text-slate-800 dark:text-slate-100 font-sans">Toolchain: </strong>
                                  <span>{techSpecs.toolchain}</span>
                                </div>
                              )}
                              {techSpecs.telemetry && (
                                <div>
                                  <strong className="text-slate-800 dark:text-slate-100 font-sans">Operation: </strong>
                                  <span>{techSpecs.telemetry}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Footer with clean unboxed tags and action link */}
                    <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {project.tags.slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx}>
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-900 text-xs font-semibold text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/60 transition-colors"
                        >
                          <span>Explore</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
