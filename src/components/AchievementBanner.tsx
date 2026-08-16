"use client";

import React, { useState, useEffect, useRef } from "react";

interface Achievement {
  id: string;
  badge: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  links: {
    github?: string;
    live?: string;
    label?: string;
  };
  accentColor: "amber" | "cyan" | "gold" | "emerald";
  glowGradient: string;
  featured?: boolean;
}

const achievements: Achievement[] = [
  {
    id: "hackathon-apex-zero",
    badge: "🏆 1ST PLACE WINNER",
    category: "AI & Machine Learning",
    title: "Apex Zero Hackathon Champion",
    subtitle: "ML-IPL RosterOptimiser • Team Apex Zero",
    description:
      "Engineered an end-to-end algorithmic auction intelligence engine using XGBoost & Random Forest to calculate player valuation matrices, risk indices, and multi-constraint roster optimization for IPL franchises.",
    metrics: [
      { label: "Predictive Accuracy", value: "94.8%" },
      { label: "Auction Scenarios", value: "10K+" },
      { label: "Data Pipeline", value: "Scikit/XGB" },
    ],
    tags: ["Python", "XGBoost", "Random Forest", "Scikit-Learn", "Data Science"],
    links: {
      github: "https://github.com/Player1205/ML-IPL-RosterOptimiser",
      label: "View Repository",
    },
    accentColor: "gold",
    glowGradient: "from-[#FF9E3B]/25 via-[#D4AF37]/15 to-transparent",
    featured: true,
  },
  {
    id: "guardcall-agentic-ai",
    badge: "🛡️ REAL-TIME AI AGENT",
    category: "Agentic Systems & Audio AI",
    title: "GuardCall: AI Scam Interceptor",
    subtitle: "Groq LPU Inference & Deepgram Streaming",
    description:
      "Architected an ultra-low-latency real-time voice wiretap pipeline that streams live telephone audio over WebSockets to transcribe, detect social engineering fraud, and inject tactical counter-measures in sub-second intervals.",
    metrics: [
      { label: "Voice Stream Latency", value: "<180ms" },
      { label: "Threat Detection", value: "99.2%" },
      { label: "Engine", value: "Groq + Deepgram" },
    ],
    tags: ["Groq AI", "Deepgram", "WebSockets", "FastAPI", "React", "TypeScript"],
    links: {
      github: "https://github.com/Player1205/GuardCall",
      live: "https://guardcall-three.vercel.app/",
      label: "Live Interceptor",
    },
    accentColor: "cyan",
    glowGradient: "from-[#38BDF8]/25 via-[#0284C7]/15 to-transparent",
    featured: true,
  },
  {
    id: "fastify-oss-maintainer",
    badge: "🟢 OPEN SOURCE AUTHOR",
    category: "High-Throughput Backend",
    title: "Fastify Ecosystem Maintainer",
    subtitle: "Author of fastify-param-schema-validation",
    description:
      "Created and open-sourced high-performance parameter schema validation middleware for the Node.js Fastify framework, enforcing strict JSON Schema validation at 35,000+ requests/sec with zero GC overhead.",
    metrics: [
      { label: "Throughput", value: "35K+ RPS" },
      { label: "Overhead", value: "<0.4ms" },
      { label: "Ecosystem", value: "Fastify / Node" },
    ],
    tags: ["Node.js", "Fastify", "JSON Schema", "TypeScript", "Performance"],
    links: {
      github: "https://github.com/Player1205",
      label: "NPM & GitHub",
    },
    accentColor: "emerald",
    glowGradient: "from-[#10B981]/25 via-[#059669]/15 to-transparent",
  },
  {
    id: "thinknext-swe-intern",
    badge: "💻 ENTERPRISE SWE",
    category: "Production Engineering",
    title: "Full Stack Engineer Intern",
    subtitle: "ThinkNEXT Technologies • Enterprise Systems",
    description:
      "Spearheading full-stack software architecture, responsive client-side applications, and scalable API microservices with rigorous performance benchmarks and cross-browser resilience.",
    metrics: [
      { label: "Deployment Cycle", value: "CI/CD" },
      { label: "Architecture", value: "Modular SPA" },
      { label: "Tenure", value: "May 2026 - Present" },
    ],
    tags: ["React", "Node.js", "REST APIs", "System Architecture", "PostgreSQL"],
    links: {
      github: "https://github.com/Player1205",
      label: "Engineering Work",
    },
    accentColor: "amber",
    glowGradient: "from-[#FF9E3B]/20 via-[#EA580C]/10 to-transparent",
  },
];

export function AchievementBanner() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mouse tracking for dynamic spotlight glow
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--glow-x", `${x}px`);
      el.style.setProperty("--glow-y", `${y}px`);
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const activeAchievement = achievements[activeTab];

  return (
    <section
      ref={containerRef}
      className="relative w-full rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden border border-outline-variant/40 bg-surface-container-lowest/90 backdrop-blur-2xl shadow-2xl transition-all duration-500 group"
      data-aos="fade-up"
      style={
        {
          "--glow-x": "50%",
          "--glow-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* 1. Dynamic Mouse-Tracking Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
        style={{
          background:
            "radial-gradient(800px circle at var(--glow-x) var(--glow-y), rgba(255, 158, 59, 0.12), rgba(56, 189, 248, 0.06), transparent 70%)",
        }}
      />

      {/* 2. Concentric Pulsing Gold & Amber Rings in the background */}
      <div className="absolute -top-32 -right-32 w-96 h-96 pointer-events-none z-0">
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite] opacity-40" />
        <div className="absolute inset-8 rounded-full border border-primary/30 animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite_1.5s] opacity-50" />
        <div className="absolute inset-16 rounded-full border border-[#D4AF37]/40 animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite_3s] opacity-60" />
        <div className="absolute inset-24 rounded-full bg-gradient-to-br from-primary/20 via-[#D4AF37]/15 to-transparent blur-2xl" />
      </div>

      {/* 3. Header & Global Metrics Ribbon */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-outline-variant/30">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary font-label-md text-label-md tracking-wider uppercase mb-3 shadow-[0_0_15px_rgba(255,158,59,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Key Milestones &amp; Proof of Work
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-on-surface font-extrabold tracking-tight">
            Distinguished Achievements
          </h2>
          <p className="text-body-sm text-on-surface-variant dark:text-secondary-fixed mt-1 max-w-xl">
            National hackathon championship, real-time agentic AI frameworks, and production-grade open source tooling.
          </p>
        </div>

        {/* Global Key Impact Counters */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 shrink-0">
          <div className="px-3.5 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/30 backdrop-blur-md text-center">
            <div className="font-headline-lg-mobile text-[18px] sm:text-[22px] font-bold text-primary">#1</div>
            <div className="text-[10px] sm:text-[11px] font-code uppercase tracking-wider text-on-surface-variant">Hackathon</div>
          </div>
          <div className="px-3.5 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/30 backdrop-blur-md text-center">
            <div className="font-headline-lg-mobile text-[18px] sm:text-[22px] font-bold text-secondary">35K+</div>
            <div className="text-[10px] sm:text-[11px] font-code uppercase tracking-wider text-on-surface-variant">OSS RPS</div>
          </div>
          <div className="px-3.5 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/30 backdrop-blur-md text-center">
            <div className="font-headline-lg-mobile text-[18px] sm:text-[22px] font-bold text-[#D4AF37]">&lt;180ms</div>
            <div className="text-[10px] sm:text-[11px] font-code uppercase tracking-wider text-on-surface-variant">AI Latency</div>
          </div>
        </div>
      </div>

      {/* 4. Interactive Navigation Tabs */}
      <div className="relative z-10 flex gap-2 overflow-x-auto py-6 no-scrollbar border-b border-outline-variant/20">
        {achievements.map((item, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`group/btn relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-label-md text-label-md transition-all duration-300 whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-surface-container-highest text-primary border border-primary/40 shadow-[0_0_20px_rgba(255,158,59,0.2)]"
                  : "bg-surface-container/40 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 border border-outline-variant/20"
              }`}
            >
              <span className="text-base">{item.badge.split(" ")[0]}</span>
              <span className="font-semibold">{item.title}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* 5. Spotlight Achievement Detail View */}
      <div className="relative z-10 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Deep-dive Info & Metrics */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#F5D061] font-code text-[11px] font-bold tracking-wider uppercase">
              {activeAchievement.badge}
            </span>
            <span className="px-3 py-1 rounded-md bg-secondary/10 border border-secondary/20 text-secondary font-code text-[11px] font-medium tracking-wider">
              {activeAchievement.category}
            </span>
          </div>

          <div>
            <h3 className="font-headline-lg text-[26px] sm:text-[32px] text-on-surface dark:text-inverse-on-surface font-extrabold leading-tight">
              {activeAchievement.title}
            </h3>
            <p className="text-primary dark:text-primary-fixed-dim font-code text-[14px] font-semibold mt-1">
              {activeAchievement.subtitle}
            </p>
          </div>

          <p className="text-body-md text-on-surface-variant dark:text-secondary-fixed leading-relaxed">
            {activeAchievement.description}
          </p>

          {/* Metric Stats Cards */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {activeAchievement.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-surface-container/50 border border-outline-variant/30 backdrop-blur-md flex flex-col justify-center transition-transform hover:-translate-y-0.5 duration-200"
              >
                <div className="text-primary font-headline-lg-mobile text-[18px] sm:text-[20px] font-black">
                  {metric.value}
                </div>
                <div className="text-on-surface-variant/80 text-[11px] font-code tracking-wider uppercase mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {activeAchievement.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-surface-container-high/60 text-secondary font-code text-[12px] border border-outline-variant/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {activeAchievement.links.github && (
              <a
                href={activeAchievement.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,158,59,0.25)]"
              >
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                {activeAchievement.links.label || "Source Code"}
                <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </a>
            )}
            {activeAchievement.links.live && (
              <a
                href={activeAchievement.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn px-5 py-2.5 rounded-xl border border-secondary/40 text-secondary hover:bg-secondary/10 font-label-md text-label-md font-bold transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
                Live System
                <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Holographic Glass Spotlight Plate */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="w-full relative rounded-2xl p-6 bg-gradient-to-b from-surface-container-high/80 to-surface-container/60 border border-outline-variant/40 shadow-xl overflow-hidden group/card hover:border-primary/40 transition-all duration-300">
            {/* Ambient Background Gradient for Card */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${activeAchievement.glowGradient} opacity-60 pointer-events-none`}
            />

            {/* Terminal Style Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-outline-variant/30 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-error" />
                <div className="w-3 h-3 rounded-full bg-[#FFDAB9]" />
                <div className="w-3 h-3 rounded-full bg-secondary" />
              </div>
              <span className="font-code text-[11px] text-on-surface-variant/70 tracking-widest uppercase">
                PROOF_OF_WORK.SH
              </span>
            </div>

            {/* Simulated Live Proof Feed */}
            <div className="relative z-10 space-y-3 font-code text-[12px]">
              <div className="flex items-center justify-between text-secondary">
                <span>&gt; verifying credentials...</span>
                <span className="text-emerald-400 font-bold">VERIFIED [200 OK]</span>
              </div>
              <div className="p-3 rounded-lg bg-surface-container-lowest/80 border border-outline-variant/30 text-on-surface-variant space-y-1.5">
                <div className="text-on-surface font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>{activeAchievement.title}</span>
                </div>
                <div className="text-[11px] text-secondary">
                  Target: <span className="text-on-surface">{activeAchievement.subtitle}</span>
                </div>
                <div className="text-[11px] text-primary">
                  Status: <span className="text-emerald-300">Deployed &amp; Evaluated</span>
                </div>
              </div>

              {/* Code snippet / Verification signature */}
              <div className="p-3 rounded-lg bg-[#05070B] border border-outline-variant/40 text-[11px] text-surface-container-highest">
                <span className="text-primary-fixed">const</span> record = &#123;<br />
                &nbsp;&nbsp;candidate: <span className="text-secondary-fixed">&quot;Vansh Rana&quot;</span>,<br />
                &nbsp;&nbsp;accreditation: <span className="text-tertiary-fixed">&quot;{activeAchievement.category}&quot;</span>,<br />
                &nbsp;&nbsp;impactScore: <span className="text-emerald-400">99.8</span>,<br />
                &nbsp;&nbsp;status: <span className="text-primary-fixed">&quot;PROVEN&quot;</span><br />
                &#125;;
              </div>
            </div>

            {/* Bottom Signature Line */}
            <div className="relative z-10 pt-4 mt-4 border-t border-outline-variant/20 flex items-center justify-between text-[10px] font-code text-on-surface-variant">
              <span>SECURITY_HASH: SHA-256</span>
              <span className="text-primary">PRECISION_SYSTEMS_v2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AchievementBanner;
