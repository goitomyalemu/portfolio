import React from 'react';

export const ImpactStrip: React.FC = () => {
  const stats = [
    {
      value: "Off-Grid",
      label: "Community Solar Power",
      description: "Decentralized solar charging kiosks & microgrid infrastructure in Tigray",
    },
    {
      value: "1,000+",
      label: "Students & Tech Upskilled",
      description: "Trained in software & AI via Gebeya-Safaricom and Mastercard Foundation SEED",
    },
    {
      value: "200+",
      label: "Entrepreneurs Mentored",
      description: "Certified UNCTAD-EMPRETEC & EBMS trainer with EDI Ethiopia",
    },
    {
      value: "40+",
      label: "Theses & Capstones Supervised",
      description: "Master's & undergraduate engineering research guided at Mekelle Institute of Technology",
    },
  ];

  return (
    <section className="py-12 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-amber-600 dark:text-amber-400 tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="font-serif text-base font-bold text-slate-900 dark:text-slate-100 mt-3 leading-snug">
                  {stat.label}
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
