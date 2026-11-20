import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      {/* Subtle archival paper texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 paper-grain"
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <ProjectsSection />
        <CapabilitiesSection />
        <ExperienceSection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
