"use client";

import React from "react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full py-12 scroll-mt-24" data-aos="fade-up">
      <div className="flex flex-col gap-3 mb-12 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold w-fit">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Career Timeline &amp; Open Source</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
          Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">&amp; Timeline</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
          Professional milestones, enterprise software engineering, and core ecosystem maintenance.
        </p>
      </div>

      <div className="relative w-full py-6">
        {/* Center Glowing Line */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-amber-500 via-sky-500 to-emerald-500/20" />

        {/* Milestone 1: ThinkNEXT */}
        <div
          className="relative flex flex-col md:flex-row items-center md:justify-between w-full mb-16"
          data-aos="fade-up"
        >
          <div className="hidden md:block w-[45%] text-right pr-8">
            <div className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold">
              May 2026 — Present
            </div>
            <div className="text-xs text-slate-500 font-mono mt-0.5">Enterprise Internship</div>
          </div>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#07090E] border-2 border-amber-400 z-10 items-center justify-center shadow-[0_0_15px_#FF9E3B]">
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          </div>

          <div className="w-full md:w-[45%] text-left">
            <div className="md:hidden font-mono text-xs text-amber-400 uppercase tracking-widest font-bold mb-2">
              May 2026 — Present · Internship
            </div>
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-colors">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-100">Full Stack Engineer Intern</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-mono text-[11px] font-semibold border border-amber-500/30">
                  Active
                </span>
              </div>
              <p className="text-sm font-semibold text-amber-400 mb-3 font-mono">
                ThinkNEXT Technologies
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Architecting full-stack web applications with high emphasis on performance, API latency, and responsive client interfaces. 
                Collaborating closely with cross-functional engineering teams to implement clean domain boundaries and automated validation pipelines.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                {["React.js", "Node.js", "REST APIs", "System Architecture", "PostgreSQL"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-[11px] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Milestone 2: Fastify OSS */}
        <div
          className="relative flex flex-col md:flex-row-reverse items-center md:justify-between w-full mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="hidden md:block w-[45%] text-left pl-8">
            <div className="font-mono text-xs text-sky-400 uppercase tracking-widest font-bold">
              Open Source Ecosystem
            </div>
            <div className="text-xs text-slate-500 font-mono mt-0.5">Maintainer &amp; Core Contributor</div>
          </div>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#07090E] border-2 border-sky-400 z-10 items-center justify-center shadow-[0_0_15px_#38BDF8]">
            <div className="w-2 h-2 rounded-full bg-sky-400"></div>
          </div>

          <div className="w-full md:w-[45%] text-left">
            <div className="md:hidden font-mono text-xs text-sky-400 uppercase tracking-widest font-bold mb-2">
              Open Source Ecosystem · Maintainer
            </div>
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-sky-500/50 transition-colors">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-100">Open Source Maintainer</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 font-mono text-[11px] font-semibold border border-sky-500/30">
                  OSS Core
                </span>
              </div>
              <p className="text-sm font-semibold text-sky-400 mb-3 font-mono">
                Fastify Framework Ecosystem
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Maintained <code className="text-amber-300 font-mono bg-slate-900 px-1.5 py-0.5 rounded">fastify-param-schema-validation</code>, 
                improving parameter parsing efficiency, developer ergonomics, and schema validation benchmarks across distributed Node.js microservices.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                {["Fastify", "JSON Schema", "TypeScript", "Performance Tuning", "Node.js"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-[11px] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeline;
