"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

const PROFILE_SPECS = [
  { label: "Location", value: "Bandung, Indonesia" },
  { label: "Availability", value: "Open for Freelance & Full-time" },
  { label: "Education", value: "S1 Teknik Informatika — STMIK LPKIA" },
  { label: "Core Interests", value: "Web Apps, Python, Java & Hardware" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6 md:px-10 border-t border-[var(--rule)] bg-[var(--surface)]/45"
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-subtle)] mb-3">
          04 / Background
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Editorial pull-quote */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] leading-[1.15] tracking-[-0.02em] text-[var(--ink)]">
              Bridging hands-on{" "}
              <span className="italic text-[var(--accent)]">
                hardware &amp; networks
              </span>{" "}
              with practical software engineering.
            </h2>
          </motion.div>

          {/* Narrative & spec grid */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-base text-[var(--ink)] leading-[1.8]">
              Hello—I&apos;m <strong>{portfolioData.name}</strong>, a developer
              with an Informatics background at STMIK LPKIA and early vocational
              training in Computer &amp; Network Engineering (TKJ).
            </p>
            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-[1.8]">
              Working across IT support at travel agencies, technical
              troubleshooting, and project administration taught me to approach
              software from the user&apos;s desk outward. Whether I&apos;m
              building an inventory web app, writing a Python scraper, or laying
              out a company booklet, I care about clarity, speed, and tools that
              solve real operational problems.
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 pt-6 border-t border-[var(--rule-strong)]">
              {PROFILE_SPECS.map((spec) => (
                <div key={spec.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-subtle)] mb-1">
                    {spec.label}
                  </dt>
                  <dd className="text-sm font-medium text-[var(--ink)]">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
