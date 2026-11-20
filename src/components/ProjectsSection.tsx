"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import { portfolioData, type ProjectItem } from "@/lib/data";
import { cn } from "@/lib/utils";
import { LightboxModal, type ActiveGallery } from "./LightboxModal";

type FilterCategory = "All" | "Web" | "Design";

const FILTER_TABS: { id: FilterCategory; label: string }[] = [
  { id: "All", label: "All Works" },
  { id: "Web", label: "Web & Code" },
  { id: "Design", label: "Visual Design" },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [activeGallery, setActiveGallery] = useState<ActiveGallery | null>(
    null
  );

  const filteredProjects = portfolioData.projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const getCount = (cat: FilterCategory) =>
    cat === "All"
      ? portfolioData.projects.length
      : portfolioData.projects.filter((p) => p.category === cat).length;

  const openGallery = (project: ProjectItem) => {
    if (!project.images || project.images.length === 0) return;
    setActiveGallery({
      title: project.title,
      images: project.images,
      currentIndex: 0,
    });
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-6 md:px-10 border-t border-[var(--rule)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header & editorial filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-subtle)] mb-3">
              01 / Selected Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-[-0.02em] text-[var(--ink)]">
              Projects &amp; <span className="italic">Visual Archive</span>
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex items-center gap-6 border-b border-[var(--rule)] pb-2"
          >
            {FILTER_TABS.map((tab) => {
              const active = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(tab.id)}
                  className={cn(
                    "relative pb-2 text-sm transition-colors cursor-pointer flex items-baseline gap-1.5",
                    active
                      ? "text-[var(--ink)] font-medium"
                      : "text-[var(--ink-subtle)] hover:text-[var(--ink)]"
                  )}
                >
                  <span>{tab.label}</span>
                  <span className="font-mono text-[10px]">
                    ({getCount(tab.id)})
                  </span>
                  {active && (
                    <motion.span
                      layoutId="activeFilterRule"
                      className="absolute left-0 right-0 -bottom-[9px] h-[2px] bg-[var(--accent)]"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const hasGallery =
                Boolean(project.images) && project.images!.length > 0;
              const photoCount = hasGallery ? project.images!.length : 0;
              const isLead = activeCategory === "All" && index === 0;

              return (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2) }}
                  className={cn(
                    "group flex flex-col",
                    isLead && "md:col-span-2 md:grid md:grid-cols-12 md:gap-8 md:items-center pb-10 border-b border-[var(--rule)]"
                  )}
                >
                  {/* Image frame */}
                  <div
                    onClick={() => {
                      if (hasGallery) openGallery(project);
                    }}
                    className={cn(
                      "relative overflow-hidden bg-[var(--surface)] border border-[var(--rule)] aspect-[16/10]",
                      hasGallery && "cursor-pointer",
                      isLead && "md:col-span-7"
                    )}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    {hasGallery && (
                      <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-[var(--paper)]/92 backdrop-blur-sm border border-[var(--rule-strong)] text-[var(--ink)] font-mono text-[10px] uppercase tracking-[0.12em] flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={faImages}
                          className="w-3 h-3 text-[var(--accent)]"
                        />
                        <span>
                          {photoCount} {photoCount > 1 ? "Frames" : "Frame"}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Editorial metadata & copy */}
                  <div
                    className={cn(
                      "pt-5 flex flex-col justify-between flex-1",
                      isLead && "md:col-span-5 md:pt-0"
                    )}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-2.5">
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-subtle)]">
                          {String(index + 1).padStart(2, "0")} — {project.type}
                        </span>
                      </div>

                      <h3
                        className={cn(
                          "font-serif tracking-[-0.015em] text-[var(--ink)] mb-3 group-hover:text-[var(--accent)] transition-colors",
                          isLead ? "text-3xl md:text-4xl" : "text-2xl md:text-[26px]"
                        )}
                      >
                        {project.title}
                      </h3>

                      <p className="text-sm text-[var(--ink-muted)] leading-[1.7] mb-5">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[var(--rule)] flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-x-3 gap-y-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[11px] text-[var(--ink-subtle)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        {hasGallery && (
                          <button
                            type="button"
                            onClick={() => openGallery(project)}
                            className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink)] hover:text-[var(--accent)] transition-colors cursor-pointer editorial-link"
                          >
                            Gallery ({photoCount})
                          </button>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink)] hover:text-[var(--accent)] transition-colors editorial-link"
                          >
                            <span>Visit</span>
                            <FontAwesomeIcon
                              icon={faArrowUpRightFromSquare}
                              className="w-2.5 h-2.5"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <LightboxModal
        gallery={activeGallery}
        onClose={() => setActiveGallery(null)}
        onChangeIndex={(nextIndex) =>
          setActiveGallery((prev) =>
            prev ? { ...prev, currentIndex: nextIndex } : null
          )
        }
      />
    </section>
  );
}
