"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { portfolioData } from "@/lib/data";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${portfolioData.email}`;
    }
  };

  return (
    <footer className="bg-[#090908] text-[var(--ink)] border-t border-[var(--rule)] pt-20 md:pt-28 pb-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[var(--rule)] items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-subtle)] mb-4">
              05 / Contact
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.02em] text-[var(--ink)] mb-6">
              Have a project in mind?{" "}
              <span className="italic text-[var(--accent)]">Let&apos;s talk.</span>
            </h2>
            <p className="text-sm md:text-base text-[var(--ink-muted)] max-w-lg leading-relaxed">
              Available for web development, Python tooling, and print/visual
              design projects. Reach out directly by email or WhatsApp.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
            <div className="flex items-stretch border border-[var(--rule-strong)] bg-[var(--surface)]">
              <a
                href={`mailto:${portfolioData.email}`}
                className="flex-1 flex items-center gap-3 px-5 py-4 text-sm text-[var(--ink)] hover:text-[var(--accent)] transition-colors truncate"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-4 h-4 shrink-0 text-[var(--ink-subtle)]"
                />
                <span className="truncate">{portfolioData.email}</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="px-4 border-l border-[var(--rule-strong)] text-xs font-mono uppercase tracking-[0.1em] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-elevated)] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <FontAwesomeIcon
                  icon={copied ? faCheck : faCopy}
                  className="w-3.5 h-3.5"
                />
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <a
              href={`https://wa.me/${portfolioData.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-5 py-4 bg-[var(--accent)] text-[#0E0E0D] font-semibold text-sm hover:bg-[var(--accent-hover)] transition-colors"
            >
              <span className="flex items-center gap-3">
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                Message on WhatsApp
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C867D] font-mono">
          <p>
            © {new Date().getFullYear()} {portfolioData.name}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#F5F2EB] transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="#"
              className="hover:text-[#F5F2EB] transition-colors uppercase tracking-[0.12em]"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
