"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faEnvelope, 
  faArrowUpRightFromSquare, 
  faCode, 
  faMobileScreen, 
  faDatabase, 
  faGraduationCap, 
  faBriefcase,
  faScrewdriverWrench,
  faNetworkWired,
  faImages,
  faXmark,
  faChevronLeft,
  faChevronRight,
  faEye
} from "@fortawesome/free-solid-svg-icons"
import { 
  faWhatsapp, 
  faGithub, 
  faLinkedin,
  faReact,
  faBootstrap,
  faHtml5,
  faJs,
  faPython,
  faNodeJs,
  faCss3Alt
} from "@fortawesome/free-brands-svg-icons"
import { portfolioData } from "@/lib/data"
import { cn } from "@/lib/utils"

const getSkillIcon = (name: string) => {
  switch (name) {
    case "React / Next.js":
      return faReact
    case "Bootstrap":
      return faBootstrap
    case "TypeScript":
      return faCode
    case "HTML5":
      return faHtml5
    case "JavaScript":
      return faJs
    case "Python":
      return faPython
    case "React Native / Expo":
      return faReact
    case "Tailwind CSS":
      return faCss3Alt
    case "Node.js":
      return faNodeJs
    case "Supabase / PostgreSQL":
      return faDatabase
    case "Troubleshooting":
      return faScrewdriverWrench
    case "Networking (TKJ)":
      return faNetworkWired
    default:
      return faCode
  }
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Web" | "Design">("All")
  const [activeGallery, setActiveGallery] = useState<{
    title: string
    images: string[]
    currentIndex: number
  } | null>(null)

  // Handle keyboard navigation for modal lightbox
  useEffect(() => {
    if (!activeGallery) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveGallery(null)
      } else if (e.key === "ArrowLeft") {
        setActiveGallery((prev) =>
          prev
            ? {
                ...prev,
                currentIndex:
                  (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
              }
            : null
        )
      } else if (e.key === "ArrowRight") {
        setActiveGallery((prev) =>
          prev
            ? {
                ...prev,
                currentIndex: (prev.currentIndex + 1) % prev.images.length,
              }
            : null
        )
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeGallery])

  const filteredProjects = portfolioData.projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  )

  return (
    <main className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter"
          >
            PORT<span className="text-purple-500">FOLIO</span>
          </motion.span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {['Skills', 'Projects', 'Experience', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4"
          >
            <a href={`mailto:${portfolioData.email}`} className="p-2 hover:bg-white/5 rounded-full transition-colors flex items-center justify-center">
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
            </a>
            <a href={`https://wa.me/${portfolioData.whatsapp}`} className="p-2 hover:bg-white/5 rounded-full transition-colors text-green-400 flex items-center justify-center">
              <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Available for New Projects
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 !leading-[1.1]">
              Crafting <span className="text-gradient">Digital Success</span> Through Elegant Code
            </h1>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              {portfolioData.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={`mailto:${portfolioData.email}`}
                className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Hire Me
              </a>
              <a 
                href="#projects"
                className="px-8 py-3 glass rounded-full font-semibold border border-white/10 hover:border-purple-500/50 transition-all"
              >
                View Works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Core <span className="text-purple-500">Skills</span></h2>
            <div className="w-20 h-1 bg-purple-500 rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioData.skills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-2xl flex flex-col gap-3 group"
              >
                <div className="p-2 w-fit rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 flex items-center justify-center">
                  <FontAwesomeIcon icon={getSkillIcon(skill.name)} className="w-6 h-6" />
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
                <span className="text-xs text-gray-500 uppercase tracking-widest">{skill.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured <span className="text-purple-500">Projects</span></h2>
              <div className="w-20 h-1 bg-purple-500 rounded-full" />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 glass rounded-2xl w-fit border border-white/10">
              {(["All", "Web", "Design"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer",
                    activeCategory === cat
                      ? "bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {cat === "All"
                    ? "All Projects"
                    : cat === "Web"
                    ? "Web Apps"
                    : "Canva Design"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const isDesign = project.category === "Design" && project.images && project.images.length > 0;
                const photoCount = isDesign ? project.images!.length : 0;

                return (
                  <motion.div
                    key={`${project.title}-${index}`}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-3xl glass-card flex flex-col justify-between"
                  >
                    <div>
                      <div 
                        className={cn(
                          "aspect-[16/9] overflow-hidden relative group",
                          isDesign && "cursor-pointer"
                        )}
                        onClick={() => {
                          if (isDesign) {
                            setActiveGallery({
                              title: project.title,
                              images: project.images!,
                              currentIndex: 0,
                            })
                          }
                        }}
                      >
                        {isDesign ? (
                          <>
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Photo Count Badge */}
                            <div className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full glass border border-white/20 text-[11px] font-semibold text-white flex items-center gap-1.5 shadow-lg">
                              <FontAwesomeIcon icon={faImages} className="w-3 h-3 text-purple-400" />
                              <span>{photoCount} {photoCount > 1 ? "Photos" : "Photo"}</span>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-purple-950/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 z-10 text-white">
                              <div className="w-12 h-12 rounded-full bg-purple-500/80 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                <FontAwesomeIcon icon={faEye} className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-xs font-semibold tracking-wide">Lihat Preview Gallery ({photoCount})</span>
                            </div>
                          </>
                        ) : (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                      </div>

                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">{project.type}</span>
                          {isDesign ? (
                            <button
                              onClick={() =>
                                setActiveGallery({
                                  title: project.title,
                                  images: project.images!,
                                  currentIndex: 0,
                                })
                              }
                              className="text-gray-400 group-hover:text-purple-400 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                            >
                              <span>Preview</span>
                              <FontAwesomeIcon icon={faEye} className="w-3.5 h-3.5" />
                            </button>
                          ) : (
                            project.link && (
                              <a href={project.link} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors cursor-pointer" />
                              </a>
                            )
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modal Lightbox Preview */}
      <AnimatePresence>
        {activeGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setActiveGallery(null)}
          >
            {/* Top Header */}
            <div 
              className="w-full max-w-6xl flex items-center justify-between z-10 py-2 border-b border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {activeGallery.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Gambar {activeGallery.currentIndex + 1} dari {activeGallery.images.length}
                </p>
              </div>
              <button
                onClick={() => setActiveGallery(null)}
                className="p-2.5 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image View */}
            <div 
              className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {activeGallery.images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveGallery((prev) =>
                      prev
                        ? {
                            ...prev,
                            currentIndex:
                              (prev.currentIndex - 1 + prev.images.length) %
                              prev.images.length,
                          }
                        : null
                    )
                  }}
                  className="absolute left-2 md:left-4 z-20 p-3 rounded-full glass border border-white/20 text-white hover:bg-purple-500 transition-all cursor-pointer shadow-2xl flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
                </button>
              )}

              <motion.div
                key={activeGallery.currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="h-full max-h-[75vh] w-full flex items-center justify-center"
              >
                <img
                  src={activeGallery.images[activeGallery.currentIndex]}
                  alt={`${activeGallery.title} - ${activeGallery.currentIndex + 1}`}
                  className="max-h-full max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                />
              </motion.div>

              {activeGallery.images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveGallery((prev) =>
                      prev
                        ? {
                            ...prev,
                            currentIndex:
                              (prev.currentIndex + 1) % prev.images.length,
                          }
                        : null
                    )
                  }}
                  className="absolute right-2 md:right-4 z-20 p-3 rounded-full glass border border-white/20 text-white hover:bg-purple-500 transition-all cursor-pointer shadow-2xl flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Bottom Thumbnail Strip */}
            {activeGallery.images.length > 1 && (
              <div 
                className="w-full max-w-4xl overflow-x-auto flex gap-3 p-2 justify-center z-10 no-scrollbar"
                onClick={(e) => e.stopPropagation()}
              >
                {activeGallery.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      setActiveGallery((prev) =>
                        prev ? { ...prev, currentIndex: idx } : null
                      )
                    }
                    className={cn(
                      "relative h-16 w-20 min-w-[5rem] rounded-lg overflow-hidden border-2 transition-all cursor-pointer",
                      activeGallery.currentIndex === idx
                        ? "border-purple-500 scale-105 shadow-[0_0_15px_rgba(168,85,247,0.5)] opacity-100"
                        : "border-transparent opacity-50 hover:opacity-100"
                    )}
                  >
                    <img
                      src={img}
                      alt={`Thumb ${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">About <span className="text-purple-500">Me</span></h2>
            <div className="w-20 h-1 bg-purple-500 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto group"
            >
              <div className="absolute inset-0 bg-purple-500/20 blur-3xl group-hover:bg-purple-500/30 transition-colors" />
              <div className="relative h-full w-full rounded-2xl overflow-hidden glass border border-white/10 group-hover:border-purple-500/50 transition-all duration-500">
                <img 
                  src="/images/profile.jpeg" 
                  alt={portfolioData.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gradient">Who am I?</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Hello! I am <span className="text-white font-semibold">{portfolioData.name}</span>, a dedicated Web & Mobile Developer currently pursuing my bachelor's degree at <span className="text-purple-400">STMIK LPKIA</span>.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With a strong foundation in Computer & Network Engineering (TKJ), I have evolved into a full-stack developer who loves bridging the gap between hardware troubleshooting and high-level software development. My journey across various industries—from IT staff at travel agencies to technical roles in contracting—has shaped me into a versatile problem solver.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-card p-4 rounded-xl border-white/5">
                  <p className="text-xs text-purple-400 uppercase tracking-wider mb-1 font-semibold">Location</p>
                  <p className="text-sm">Bandung, Indonesia</p>
                </div>
                <div className="glass-card p-4 rounded-xl border-white/5">
                  <p className="text-xs text-purple-400 uppercase tracking-wider mb-1 font-semibold">Status</p>
                  <p className="text-sm">Available for Freelance</p>
                </div>
                <div className="glass-card p-4 rounded-xl border-white/5">
                  <p className="text-xs text-purple-400 uppercase tracking-wider mb-1 font-semibold">Interests</p>
                  <p className="text-sm">Web, Python, Hardware</p>
                </div>
                <div className="glass-card p-4 rounded-xl border-white/5">
                  <p className="text-xs text-purple-400 uppercase tracking-wider mb-1 font-semibold">Education</p>
                  <p className="text-sm">S1 Informatics Candidate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <div className="mb-12 flex items-center gap-3">
              <FontAwesomeIcon icon={faBriefcase} className="w-7 h-7 text-purple-500" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <div className="space-y-8 border-l border-white/10 ml-3 pl-8">
              {portfolioData.experience.map((exp, index) => (
                <motion.div 
                  key={`${exp.company}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[45px] top-1 w-8 h-8 rounded-full glass border border-purple-500/50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                  <span className="text-purple-400 text-sm font-medium mb-1 block">{exp.period}</span>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-purple-300/60 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-12 flex items-center gap-3">
              <FontAwesomeIcon icon={faGraduationCap} className="w-7 h-7 text-blue-500" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-8 border-l border-white/10 ml-3 pl-8">
              {portfolioData.education.map((edu, index) => (
                <motion.div 
                  key={`${edu.school}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[45px] top-1 w-8 h-8 rounded-full glass border border-blue-500/50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                  <span className="text-blue-400 text-sm font-medium mb-1 block">{edu.year}</span>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-blue-300/60 font-medium">{edu.school}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="py-32 px-6 relative overflow-hidden bg-black">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Ready to <span className="text-gradient">levitate</span> your project?
          </motion.h2>
          <p className="text-gray-400 mb-12 text-lg">
            Let&apos;s build something extraordinary together. Reach out via email or message me directly on WhatsApp.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href={`mailto:${portfolioData.email}`}
              className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-all w-full md:w-auto justify-center"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              Email Me
            </a>
            <a 
              href={`https://wa.me/${portfolioData.whatsapp}`}
              className="flex items-center gap-3 px-8 py-4 glass border border-green-500/30 text-green-400 font-bold rounded-2xl hover:bg-green-500/10 transition-all w-full md:w-auto justify-center"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
            <p>© 2026 {portfolioData.name}. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="https://github.com/victorygrey" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
                <FontAwesomeIcon icon={faGithub} className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}


