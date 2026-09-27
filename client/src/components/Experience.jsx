import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, History } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
            <History className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            My professional journey, previous roles, and academic background.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
          {experience.map((item) => {
            const isWork = item.type === 'Work';
            return (
              <div key={item.id} className="relative group">
                {/* Timeline Icon Marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1 w-10 h-10 rounded-full flex items-center justify-center border-2 border-slate-900 shadow-lg transition-transform group-hover:scale-110 ${isWork
                      ? 'bg-indigo-600 text-white shadow-indigo-600/30'
                      : 'bg-sky-500 text-white shadow-sky-500/30'
                    }`}
                >
                  {isWork ? (
                    <Briefcase className="w-4 h-4" />
                  ) : (
                    <GraduationCap className="w-4 h-4" />
                  )}
                </div>

                {/* Timeline Card */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{item.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <p className="text-sm font-semibold text-indigo-400 mt-1">
                      {item.company}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 text-sm text-slate-300">
                    {item.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
