"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/lib/data";

const NAV_ITEMS = [
  { label: "Work", href: "#projects" },
  { label: "Capabilities", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--paper)]/92 backdrop-blur-md border-b border-[var(--rule)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-18 flex items-center justify-between">
        <a
          href="#"
          className="group flex items-baseline gap-2.5 text-[var(--ink)] focus:outline-none"
        >
          <span className="font-serif text-2xl tracking-[-0.02em]">
            {portfolioData.shortName}
          </span>
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-subtle)] group-hover:text-[var(--accent)] transition-colors">
            / Portfolio
          </span>
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-9 text-sm text-[var(--ink-muted)]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="editorial-link hover:text-[var(--ink)] transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href={`mailto:${portfolioData.email}`}
            className="text-sm font-medium text-[var(--ink)] hover:text-[var(--accent)] transition-colors editorial-link"
          >
            Contact
          </a>
          <a
            href={`https://wa.me/${portfolioData.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-xs font-mono uppercase tracking-[0.12em] bg-[var(--ink)] text-[var(--paper)] rounded-full hover:bg-[var(--accent)] transition-colors"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink)] py-2 px-3 border border-[var(--rule-strong)] rounded-full"
        >
          <span>{mobileOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[var(--paper)] border-b border-[var(--rule)] px-6 py-6"
          >
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-baseline justify-between py-2 border-b border-[var(--rule)] text-lg font-serif text-[var(--ink)]"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-[11px] text-[var(--ink-subtle)]">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </nav>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${portfolioData.email}`}
                className="flex-1 text-center py-2.5 px-4 border border-[var(--ink)] text-xs font-mono uppercase tracking-[0.12em] text-[var(--ink)] rounded-full"
              >
                Email
              </a>
              <a
                href={`https://wa.me/${portfolioData.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2.5 px-4 bg-[var(--ink)] text-xs font-mono uppercase tracking-[0.12em] text-[var(--paper)] rounded-full"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
