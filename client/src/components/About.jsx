import React from 'react';
import { User, Award, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { personal, stats } = portfolioData;

  const highlights = [
    "Clean, modern, and semantic code architecture",
    "Responsive design focused on mobile-first principles",
    "Optimized web performance and lighthouse score auditing",
    "Seamless API integration with Node.js & Express backends",
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Driven by Passion, Focused on <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Here's a quick overview of who I am, my philosophy toward web development, and what I bring to every project.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Core Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-400" />
                <span>My Background</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
                {personal.bio}
              </p>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">What I Prioritize:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800 text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-sky-400" />
                  <span>{personal.status}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl text-center flex flex-col justify-center items-center group"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 group-hover:scale-110 transition-transform gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
