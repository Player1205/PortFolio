"use client";

import React from "react";

interface Project {
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
  featured?: boolean;
}

const PROJECTS_DATA: Project[] = [
  {
    title: "GuardCall",
    category: "Agentic AI & Real-Time Voice Intelligence",
    tagline: "Real-Time AI Wiretap & Scam Interception Engine",
    description:
      "An Agentic AI wiretap that intercepts extortion and phone fraud in real-time. Leverages Groq LPU inference and Deepgram live audio streaming over WebSockets to analyze speech patterns and provide live coaching warnings under 180ms latency.",
    stack: ["WebSockets", "Groq AI", "Deepgram", "TypeScript", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/Player1205/GuardCall",
    liveUrl: "https://guardcall-three.vercel.app/",
    badge: "Agentic AI",
    badgeColor: "from-red-500 to-orange-500",
    metrics: "<180ms Latency · Live Stream",
    featured: true,
  },
  {
    title: "ML-IPL RosterOptimiser",
    category: "AI & Machine Learning Systems",
    tagline: "Predictive IPL Auction & Squad Optimizer (Team Apex Zero)",
    description:
      "An AI-driven player performance evaluation and squad strategy platform. Employs tuned XGBoost regressors and Random Forest classifiers to predict tournament performance metrics, calculate market value valuations, and optimize auction budget allocation.",
    stack: ["Python", "XGBoost", "Random Forest", "Scikit-Learn", "Pandas", "Streamlit"],
    githubUrl: "https://github.com/Player1205/ML-RosterOptimiser",
    badge: "Hackathon Winner",
    badgeColor: "from-amber-500 to-yellow-500",
    metrics: "Apex Zero Winner · ML Models",
    featured: true,
  },
  {
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

export default function Work() {
  return (
    <main className="flex-grow pb-24 md:pb-16 px-4 md:px-12 w-full max-w-7xl mx-auto flex flex-col gap-12">
      {/* Header */}
      <header className="flex flex-col gap-3 text-left" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-semibold w-fit">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          <span>Architectural Case Studies &amp; Deployments</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
          Selected Works &amp; Production Systems
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          A curated showcase of distributed backend systems, machine learning pipelines, and interactive Web3 architectures built for maximum scalability and UX precision.
        </p>
      </header>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {PROJECTS_DATA.map((project, idx) => (
          <article
            key={project.title}
            className="tilt-card glass-card rounded-2xl overflow-hidden border border-slate-800/90 hover:border-amber-500/50 flex flex-col justify-between group p-6 sm:p-8 relative transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {/* Top Bar: Badge and Metrics */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-white bg-gradient-to-r ${project.badgeColor} shadow-sm`}
              >
                <span>{project.badge}</span>
              </div>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                {project.metrics}
              </span>
            </div>

            {/* Project Content */}
            <div className="flex flex-col gap-3 flex-grow">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-100 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                    {project.category}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 font-medium italic text-amber-200/90 mt-1">
                &ldquo;{project.tagline}&rdquo;
              </p>

              <p className="text-sm text-slate-400 leading-relaxed mt-2">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Pills */}
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

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors px-3 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800"
              >
                <span>GitHub Repository</span>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 px-4 py-2 rounded-lg shadow-md transition-all hover:scale-105"
                >
                  <span>Launch Live Demo</span>
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
      </section>
    </main>
  );
}
