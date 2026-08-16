"use client";

import React from "react";

interface Project {
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  badge: string;
  badgeColor: string;
  metrics: string;
}

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "GuardCall",
    category: "Agentic AI & Real-Time Voice Intelligence",
    tagline: "Real-Time AI Wiretap & Scam Interception Engine",
    description:
      "An Agentic AI wiretap that intercepts fraud and extortion in real-time. Streams live audio over WebSockets with Groq LPU and Deepgram speech models to detect psychological scam patterns and feed counter-measures to victims under 180ms latency.",
    stack: ["WebSockets", "Groq AI", "Deepgram", "TypeScript", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/Player1205/GuardCall",
    liveUrl: "https://guardcall-three.vercel.app/",
    badge: "Agentic AI",
    badgeColor: "from-red-500 to-orange-500",
    metrics: "<180ms Latency · Live Stream",
  },
  {
    number: "02",
    title: "ML-IPL RosterOptimiser",
    category: "AI & Machine Learning (Apex Zero)",
    tagline: "Predictive IPL Auction & Squad Optimizer Platform",
    description:
      "An end-to-end algorithmic squad intelligence platform. Utilizes tuned XGBoost regressors and Random Forest classifiers to predict tournament performance metrics, calculate market valuations, and compute optimal auction strategy paths under strict budget constraints.",
    stack: ["Python", "XGBoost", "Random Forest", "Scikit-Learn", "Pandas", "Streamlit"],
    githubUrl: "https://github.com/Player1205/ML-RosterOptimiser",
    badge: "Hackathon Winner",
    badgeColor: "from-amber-500 to-yellow-500",
    metrics: "Apex Zero Winner · ML Models",
  },
  {
    number: "03",
    title: "DataPassport",
    category: "Web3 & Cryptographic Provenance",
    tagline: "Decentralized Data Integrity & Audit Ledger",
    description:
      "A Web3 data integrity protocol ensuring immutable, tamper-proof provenance for sensitive transaction records across distributed node clusters. Implements cryptographic hashing and IPFS distributed storage for zero-knowledge document auditing.",
    stack: ["Blockchain", "Solidity", "IPFS", "Cryptography", "React", "Node.js"],
    githubUrl: "https://github.com/Player1205/DataPassport",
    liveUrl: "https://datapassport-frontend.netlify.app/",
    badge: "Web3 Provenance",
    badgeColor: "from-sky-500 to-blue-600",
    metrics: "Live on Netlify · IPFS Cluster",
  },
  {
    number: "04",
    title: "CampusCoin",
    category: "Decentralized P2P Commerce",
    tagline: "Progressive Web App Marketplace for Campus Ecosystems",
    description:
      "A decentralized Progressive Web App (PWA) built specifically for university campus micro-economies. Enables zero-fee peer-to-peer asset exchange and cryptographic verification with offline-first local state caching.",
    stack: ["PWA", "React", "Web3", "Solidity", "Tailwind CSS", "Ethers.js"],
    githubUrl: "https://github.com/Player1205/CampusCoin",
    badge: "PWA Marketplace",
    badgeColor: "from-purple-500 to-indigo-600",
    metrics: "Offline-First PWA · Smart Contract",
  },
];

export function ProjectsSection() {
  return (
    <section id="work" className="w-full py-12 scroll-mt-24" data-aos="fade-up">
      <div className="flex flex-col gap-3 mb-10 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-semibold w-fit">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span>Selected Architectural Works</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Projects</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
          Production systems, AI agents, and decentralized ledgers built with high-throughput engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <article
            key={project.title}
            className="tilt-card glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 hover:border-amber-500/50 flex flex-col justify-between group relative transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xl sm:text-2xl font-black text-amber-400/80">
                  {project.number}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-white bg-gradient-to-r ${project.badgeColor} shadow-sm`}
                >
                  {project.badge}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                {project.metrics}
              </span>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-2 flex-grow">
              <h3 className="text-2xl font-extrabold text-slate-100 group-hover:text-amber-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                {project.category}
              </p>
              <p className="text-sm text-slate-300 font-medium italic text-amber-200/90 mt-1">
                &ldquo;{project.tagline}&rdquo;
              </p>
              <p className="text-sm text-slate-400 leading-relaxed mt-2">
                {project.description}
              </p>
            </div>

            {/* Stack Badges */}
            <div className="flex flex-wrap gap-1.5 my-6 pt-4 border-t border-slate-800/80">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/60 text-slate-300 font-mono text-[11px] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors px-3 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800"
              >
                <span>GitHub</span>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 px-4 py-2 rounded-lg shadow-md transition-all hover:scale-105"
                >
                  <span>Live Demo</span>
                  <span className="material-symbols-outlined text-sm">rocket_launch</span>
                </a>
              ) : (
                <span className="text-[11px] font-mono text-slate-500 italic">
                  Research Pipeline
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
