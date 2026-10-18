import React from 'react';
import { Sun, BatteryCharging, Cpu, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, ASSET_IMAGES } from '../data/portfolioData';

export const GeometraTechSection: React.FC = () => {
  return (
    <section id="geometratech" className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 font-mono mb-1">
              Engineering Venture · Mekelle, Tigray
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              GeometraTech: Powering Ethiopia's Last Mile
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
              An engineering startup founded in 2024 delivering durable solar-powered charging stations, 
              shared community battery hubs, and embedded IoT energy telemetry for off-grid communities.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.geometratechUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shrink-0 shadow-xs transition-colors active:scale-98"
          >
            <span>Visit GeometraTech.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Feature Grid: Image + Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Authentic Kiosk Photo & Local Resilience */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 shadow-xs relative group">
              <div className="aspect-4/3 relative">
                <img 
                  src={ASSET_IMAGES.solarStation}
                  alt="Community solar-powered battery charging kiosk in rural Ethiopia with high-efficiency photovoltaic panels"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold">
                    Field Deployment · Tigray Communities
                  </div>
                  <div className="text-xs text-slate-200 mt-0.5">
                    Rural community members and local enterprises provided reliable mobile phone charging and clean lighting hubs
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-xs text-amber-900 dark:text-amber-200 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Locally Built &amp; Serviced in Mekelle</span>
              </div>
              <p className="leading-relaxed text-[11px] text-amber-800 dark:text-amber-300">
                Rather than importing generic fragile gadgets, GeometraTech designs modular metal enclosures, robust solar controllers, and trains local technicians for 100% on-site maintenance and warranty support.
              </p>
            </div>
          </div>

          {/* Right Column: 2 Pillars of Solutions */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Pillar 1: Sustainable Energy Infrastructure */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4 hover:border-teal-500/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-900 text-teal-700 dark:text-teal-300 flex items-center justify-center">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                  Sustainable Energy Infrastructure
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Decentralized off-grid hardware deployed where the grid doesn't reach.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100">Solar Charging Stations:</strong> High-throughput kiosks engineered for multi-device DC fast charging.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100">Shared Community Hubs:</strong> Centralized charging nodes serving off-grid and rural families.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100">Field Commissioning:</strong> Rigorous electrical installation, safety grounding, and warranty programs.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100">Institutional Packages:</strong> Turnkey electrification solutions for clinics, schools, and NGOs.
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: Intelligent Digital Solutions */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4 hover:border-teal-500/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-300 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                  Intelligent Digital Solutions
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Embedded hardware telemetry, IoT monitoring, and digital dashboards.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100">IoT Battery Monitoring:</strong> Cellular and wireless telemetry tracking voltage, cycle health, and power drain.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100">Power &amp; Control Electronics:</strong> Custom DC-DC regulation, overcurrent protection, and smart duty switching.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100">Web &amp; Fleet Management:</strong> Real-time portals for remote monitoring of distributed stations.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100">Operator Upskilling:</strong> Technical training manuals for young local technicians.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
