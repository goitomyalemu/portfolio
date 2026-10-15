import React from 'react';
import { IMPACT_METRICS } from '../data/portfolioData';

export const ImpactStrip: React.FC = () => {
  return (
    <section className="py-8 bg-slate-100/60 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {IMPACT_METRICS.map((metric, idx) => (
            <div 
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-amber-600 dark:text-amber-400 font-mono tracking-tight tabular-nums truncate">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1">
                {metric.label}
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                {metric.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
