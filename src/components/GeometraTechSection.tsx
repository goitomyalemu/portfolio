import React from 'react';
import { Sun, BatteryCharging, Wrench, ShieldCheck, Cpu, Wifi, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, ASSET_IMAGES } from '../data/portfolioData';

export const GeometraTechSection: React.FC = () => {
  return (
    <section id="geometratech" className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono mb-1">
              Engineering Venture · Mekelle, Tigray
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              GeometraTech: Powering Ethiopia's Last Mile
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              An engineering startup founded in 2024 delivering durable solar-powered charging stations, 
              shared community battery hubs, and embedded IoT energy telemetry for off-grid communities.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.geometratechUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shrink-0 transition-colors"
          >
            Visit GeometraTech.com
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Feature Grid: Image + Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Authentic Kiosk Photo & Impact */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-sm relative group">
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
                    Field Deployment · Tigray IDP Camps
                  </div>
                  <div className="text-xs text-slate-200 mt-0.5">
                    Displaced families and community members provided reliable mobile phone charging and lighting hubs
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Locally Built &amp; Serviced in Mekelle</span>
              </div>
              <p className="leading-relaxed text-[11px] text-amber-800/90 dark:text-amber-300/80">
                Rather than importing generic fragile gadgets, GeometraTech designs modular metal enclosures, robust solar controllers, and trains local technicians for 100% on-site maintenance and warranty support.
              </p>
            </div>
          </div>

          {/* Right Column: 2 Pillars of Solutions */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Pillar 1: Sustainable Energy Infrastructure */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-400 flex items-center justify-center">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Sustainable Energy Infrastructure
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Decentralized off-grid hardware deployed where the grid doesn't reach.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Solar Charging Stations:</strong> High-throughput kiosks engineered for multi-device DC fast charging.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Shared Community Hubs:</strong> Centralized charging nodes serving displaced and rural families.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Field Commissioning:</strong> Rigorous electrical installation, safety grounding, and warranty programs.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Institutional Packages:</strong> Turnkey electrification solutions for clinics, schools, and NGOs.
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: Intelligent Digital Solutions */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Intelligent Digital Solutions
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Embedded hardware telemetry, IoT monitoring, and digital dashboards.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">IoT Battery Monitoring:</strong> Cellular and wireless telemetry tracking voltage, cycle health, and power drain.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Power &amp; Control Electronics:</strong> Custom DC-DC regulation, overcurrent protection, and smart duty switching.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Web &amp; Fleet Management:</strong> Real-time status portals enabling remote monitoring of distributed stations.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Operator Upskilling:</strong> Technical training manuals for young local technicians.
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
