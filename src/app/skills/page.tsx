"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the 3D Physics Sandbox with high-tech loader
const SkillsPhysicsSandbox = dynamic(
  () => import("@/components/SkillsPhysicsSandbox").then((mod) => mod.SkillsPhysicsSandbox),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[580px] flex flex-col items-center justify-center rounded-2xl bg-[#0B0F19]/60 border border-slate-800 backdrop-blur-md">
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-sky-500/20 border-t-sky-400 animate-spin" />
          <span className="material-symbols-outlined absolute text-sky-400 text-xl animate-pulse">
            sports_esports
          </span>
        </div>
        <p className="mt-4 font-mono text-xs text-sky-400/80 tracking-widest uppercase animate-pulse">
          Loading 3D Physics Sandbox Engine...
        </p>
      </div>
    ),
  }
);

export default function Skills() {
  return (
    <main className="flex-grow pb-24 md:pb-16 px-4 md:px-12 w-full max-w-7xl mx-auto flex flex-col gap-12">
      {/* Header */}
      <header className="mb-4 text-left" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-xs font-semibold mb-4">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
          <span>Interactive 3D Gravity World</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-3">
          Technical Proficiency &amp; Physics Sandbox
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          Interact with my core engineering stack in real-time 3D space. Drag, toss, filter, and test the physics of each technology below.
        </p>
      </header>

      {/* 3D Physics Gravity Sandbox Centerpiece */}
      <section data-aos="zoom-in" data-aos-delay="100">
        <SkillsPhysicsSandbox />
      </section>

      {/* Detailed Categorized Skill Matrix */}
      <section className="mt-8 flex flex-col gap-6" data-aos="fade-up">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2.5">
            <span className="material-symbols-outlined text-amber-400 text-2xl">
              layers
            </span>
            Structured Stack Breakdown
          </h2>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
            production_grade_tools
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Languages & Core Systems */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 border border-slate-800 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center gap-3 text-amber-400 pb-3 border-b border-slate-800">
              <span className="material-symbols-outlined text-2xl">terminal</span>
              <h3 className="text-lg font-bold text-slate-100">Languages &amp; Core</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "JavaScript", "C++", "Python", "Rust", "Java", "SQL", "HTML5/CSS3"].map(
                (skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 font-mono text-xs text-slate-200 hover:border-amber-500/60 hover:text-amber-300 transition-colors"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 border border-slate-800 hover:border-sky-500/40 transition-colors">
            <div className="flex items-center gap-3 text-sky-400 pb-3 border-b border-slate-800">
              <span className="material-symbols-outlined text-2xl">view_quilt</span>
              <h3 className="text-lg font-bold text-slate-100">Frameworks &amp; Runtimes</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Fastify (OSS Maintainer)",
                "Next.js 16 (App Router)",
                "React 19",
                "Node.js",
                "Express.js",
                "Three.js / R3F",
                "Tailwind CSS v4",
                "Redux Toolkit",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 font-mono text-xs text-slate-200 hover:border-sky-500/60 hover:text-sky-300 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Databases, Cloud & Infrastructure */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 border border-slate-800 hover:border-emerald-500/40 transition-colors md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 text-emerald-400 pb-3 border-b border-slate-800">
              <span className="material-symbols-outlined text-2xl">dns</span>
              <h3 className="text-lg font-bold text-slate-100">Databases &amp; Cloud</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "Apache Kafka",
                "Docker",
                "AWS (EC2, S3)",
                "Git / GitHub Actions",
                "IPFS / Web3",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 font-mono text-xs text-slate-200 hover:border-emerald-500/60 hover:text-emerald-300 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Developer Profile JSON Card */}
      <section
        className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-sky-500 to-emerald-500" />
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400 mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-400 text-base">code</span>
            <span>architect_manifest.json</span>
          </div>
          <span className="text-emerald-400">status: operational</span>
        </div>
        <pre className="font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed">
          <code>{`{
  "developer": "Vansh Rana",
  "role": "Software Engineer & System Architect",
  "focus": ["High-Throughput Backends", "Distributed Systems", "3D Interactive WebGL", "DSA"],
  "open_source": {
    "organization": "Fastify Ecosystem",
    "module": "fastify-param-schema-validation",
    "role": "Maintainer & Contributor"
  },
  "current_research": [
    "Rust Microservices",
    "Web3 Ledger Provenance",
    "Agentic AI Interception Protocols"
  ]
}`}</code>
        </pre>
      </section>
    </main>
  );
}
