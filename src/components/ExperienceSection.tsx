"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-6 md:px-10 border-t border-[var(--rule)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-subtle)] mb-3">
            03 / Track Record
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-[-0.02em] text-[var(--ink)]">
            Experience &amp; <span className="italic">Education</span>
          </h2>
        </div>

        {/* Work Experience Ledger */}
        <div className="mb-20">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-muted)] pb-4 border-b border-[var(--rule-strong)]">
            Work History
          </h3>
          <div className="divide-y divide-[var(--rule)]">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="py-7 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline hover:bg-[var(--surface)]/75 transition-colors px-2 -mx-2"
              >
                <div className="md:col-span-3 font-mono text-xs text-[var(--ink-subtle)]">
                  {exp.period}
                </div>
                <div className="md:col-span-4">
                  <h4 className="font-serif text-2xl text-[var(--ink)] leading-snug">
                    {exp.company}
                  </h4>
                  <p className="text-xs font-mono uppercase tracking-[0.12em] text-[var(--accent)] mt-1">
                    {exp.role}
                  </p>
                </div>
                <p className="md:col-span-5 text-sm text-[var(--ink-muted)] leading-[1.7]">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Ledger */}
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-muted)] pb-4 border-b border-[var(--rule-strong)]">
            Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:gap-px bg-[var(--rule)] border-b border-[var(--rule)]">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={`${edu.school}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="bg-[var(--paper)] py-6 sm:p-6 flex flex-col justify-between"
              >
                <span className="font-mono text-[11px] text-[var(--ink-subtle)] mb-4 block">
                  {edu.year}
                </span>
                <div>
                  <h4 className="font-serif text-xl text-[var(--ink)] mb-1">
                    {edu.school}
                  </h4>
                  <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                    {edu.degree}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
