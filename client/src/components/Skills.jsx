import React, { useState } from 'react';
import { Cpu, Layout, Server, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const { skills } = portfolioData;

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: Layout, data: skills.frontend },
    { id: 'backend', name: 'Backend & APIs', icon: Server, data: skills.backend },
    { id: 'tools', name: 'Tools & DevOps', icon: Wrench, data: skills.tools },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive overview of my technical capabilities and proficiency levels across the stack.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories
            .find((cat) => cat.id === activeCategory)
            ?.data.map((skill, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white text-base">{skill.name}</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-950/80 border border-indigo-500/30 text-indigo-300">
                    {skill.level}%
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-sky-400 h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
