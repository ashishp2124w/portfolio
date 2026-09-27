import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Glowing Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>{personal.status}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="gradient-text">{personal.name}</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-slate-300 font-bold block mt-2">
                {personal.role}
              </span>
            </h1>

            {/* Intro paragraph */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personal.shortIntro}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-semibold shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-105 transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 font-semibold hover:bg-slate-800 hover:text-white transition-all hover:border-slate-600"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>

              {personal.resumeUrl && (
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-slate-400 hover:text-indigo-300 font-medium transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </a>
              )}
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 border-t border-slate-800/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Connect:</span>
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/30 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/30 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/30 transition-all"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Code Window / Graphic Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md glass-panel p-6 rounded-2xl shadow-2xl relative gradient-border animate-float">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>developer.ts</span>
                </div>
              </div>

              {/* Window Content */}
              <div className="pt-4 font-mono text-xs sm:text-sm space-y-3 text-slate-300">
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-sky-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-indigo-300">name</span>: <span className="text-emerald-300">'{personal.name}'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-indigo-300">title</span>: <span className="text-emerald-300">'{personal.role}'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-indigo-300">focus</span>: [<span className="text-amber-300">'React'</span>, <span className="text-amber-300">'TypeScript'</span>, <span className="text-amber-300">'Node'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-indigo-300">passionateAbout</span>: <span className="text-emerald-300">'UI/UX & Performance'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-indigo-300">coffeeToCode</span>: <span className="text-purple-400">true</span>,
                </div>
                <div>&#125;;</div>
                <div className="pt-2 text-slate-500 text-xs">// Ready to build exceptional web experiences</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
