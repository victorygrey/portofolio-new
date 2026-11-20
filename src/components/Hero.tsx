"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Top editorial metadata strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 md:mb-14 border-b border-[var(--rule)] font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-subtle)]"
        >
          <span>{portfolioData.location}</span>
          <span className="text-[var(--ink-muted)]">
            {portfolioData.role} — Available for Freelance
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left editorial typography column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <h1 className="font-serif text-[clamp(3rem,6.8vw,5.5rem)] leading-[0.98] tracking-[-0.03em] text-[var(--ink)] mb-8">
              Muhamad Faizal{" "}
              <span className="italic text-[var(--accent)] font-normal">
                Hamzah Sudiro
              </span>
            </h1>

            <p className="text-base md:text-lg text-[var(--ink-muted)] leading-[1.75] max-w-xl mb-10">
              {portfolioData.intro}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[var(--ink)] text-[var(--paper)] text-sm font-medium rounded-full hover:bg-[var(--accent)] transition-colors duration-300"
              >
                <span>View Selected Work</span>
                <span aria-hidden="true" className="text-base leading-none">
                  ↓
                </span>
              </a>
              <a
                href={`mailto:${portfolioData.email}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--rule-strong)] text-[var(--ink)] text-sm font-medium rounded-full hover:border-[var(--ink)] hover:bg-[var(--surface)] transition-colors duration-300"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Compact factual index */}
            <div className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-[var(--rule)] max-w-lg">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-subtle)] mb-1">
                  Projects
                </p>
                <p className="font-serif text-3xl text-[var(--ink)]">
                  0{portfolioData.projects.length}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-subtle)] mb-1">
                  Core Stack
                </p>
                <p className="font-serif text-3xl text-[var(--ink)]">
                  {portfolioData.skills.length}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-subtle)] mb-1">
                  Focus
                </p>
                <p className="text-sm font-medium text-[var(--ink)] pt-2">
                  Web, Python &amp; Design
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right editorial portrait column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <figure className="bg-[var(--surface)] p-3 sm:p-4 border border-[var(--rule)]">
              <div className="aspect-[4/5] w-full overflow-hidden bg-[var(--rule)]">
                <img
                  src="/images/profile.jpeg"
                  alt={portfolioData.name}
                  className="w-full h-full object-cover object-center grayscale-[12%] contrast-[1.03] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <figcaption className="flex items-center justify-between pt-3 px-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-subtle)]">
                <span>Fig. 01 — Portrait</span>
                <span>STMIK LPKIA · Informatics</span>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
