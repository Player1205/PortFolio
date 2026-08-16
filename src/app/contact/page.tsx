"use client";

import React from "react";
import { ContactConsole } from "@/components/ContactConsole";

export default function Contact() {
  return (
    <main className="flex-grow pb-24 md:pb-16 px-4 md:px-12 w-full max-w-7xl mx-auto flex flex-col gap-12">
      {/* Header */}
      <header className="mb-2 text-left" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-semibold mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span>Open for Collaborations &amp; Opportunities</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-3">
          Get In Touch &amp; Connect
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          Whether you have an upcoming project, need distributed system consulting, or want to discuss full-stack engineering opportunities, send a direct message below.
        </p>
      </header>

      {/* Interactive Contact Terminal Centerpiece */}
      <section data-aos="zoom-in" data-aos-delay="100">
        <ContactConsole />
      </section>

      {/* Direct Social Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4" data-aos="fade-up">
        <a
          href="https://github.com/Player1205"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card rounded-2xl p-6 flex items-center justify-between group hover:border-amber-500/50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-200 group-hover:text-amber-400 transition-colors">
              <span className="material-symbols-outlined text-2xl">terminal</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                GitHub
              </h3>
              <p className="text-xs font-mono text-slate-500">@Player1205</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-transform">
            arrow_outward
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/vanshrana8165a6323"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card rounded-2xl p-6 flex items-center justify-between group hover:border-sky-500/50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 group-hover:text-sky-300 transition-colors">
              <span className="material-symbols-outlined text-2xl">work</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                LinkedIn
              </h3>
              <p className="text-xs font-mono text-slate-500">vanshrana</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-transform">
            arrow_outward
          </span>
        </a>

        <a
          href="mailto:vansh5201314@gmail.com"
          className="glass-card rounded-2xl p-6 flex items-center justify-between group hover:border-emerald-500/50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:text-emerald-300 transition-colors">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                Direct Email
              </h3>
              <p className="text-xs font-mono text-slate-500">vansh5201314@gmail.com</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform">
            arrow_outward
          </span>
        </a>
      </section>
    </main>
  );
}
