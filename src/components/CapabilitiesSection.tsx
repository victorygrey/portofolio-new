"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

interface CapabilityGroup {
  index: string;
  title: string;
  summary: string;
  categories: string[];
}

const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    index: "01",
    title: "Web & Frontend",
    summary:
      "Responsive interfaces, modern React ecosystems, and clean semantic markup.",
    categories: ["Web", "Design"],
  },
  {
    index: "02",
    title: "Languages & Scripting",
    summary:
      "Typed web development, interactive UI logic, and Python automation or scraping.",
    categories: ["Language"],
  },
  {
    index: "03",
    title: "Mobile, Backend & Data",
    summary:
      "Cross-platform mobile apps, API services, and relational database modeling.",
    categories: ["Mobile", "Backend", "Database"],
  },
  {
    index: "04",
    title: "Systems & Infrastructure",
    summary:
      "Hardware diagnostics, workstation maintenance, and local network administration.",
    categories: ["Technical"],
  },
];

export function CapabilitiesSection() {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-6 md:px-10 border-t border-[var(--rule)]"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
        {/* Left sticky intro column */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-subtle)] mb-3">
            02 / Capabilities
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-[-0.02em] text-[var(--ink)] mb-5">
            Technical <span className="italic">Stack</span>
          </h2>
          <p className="text-sm text-[var(--ink-muted)] leading-[1.75]">
            A practical toolkit spanning frontend engineering, Python scripting,
            and hands-on IT systems—focused on shipping reliable software rather
            than chasing hype.
          </p>
        </div>

        {/* Right structured editorial ledger */}
        <div className="lg:col-span-8 divide-y divide-[var(--rule)] border-t border-b border-[var(--rule)]">
          {CAPABILITY_GROUPS.map((group, idx) => {
            const items = portfolioData.skills.filter((s) =>
              group.categories.includes(s.category)
            );

            return (
              <motion.div
                key={group.index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="py-7 md:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start"
              >
                <div className="sm:col-span-5">
                  <span className="font-mono text-[11px] text-[var(--accent)] tracking-[0.14em]">
                    {group.index}
                  </span>
                  <h3 className="font-serif text-2xl text-[var(--ink)] mt-1 mb-2">
                    {group.title}
                  </h3>
                  <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                    {group.summary}
                  </p>
                </div>

                <div className="sm:col-span-7 flex flex-wrap gap-2 pt-1">
                  {items.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3.5 py-1.5 text-xs font-medium text-[var(--ink)] bg-[var(--surface-elevated)] border border-[var(--rule)] hover:border-[var(--ink)] transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
