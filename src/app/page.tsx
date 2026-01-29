"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Github, Linkedin, ExternalLink, Code2, Smartphone, Database, GraduationCap, Briefcase } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function PortfolioPage() {
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
            <a href={`mailto:${portfolioData.email}`} className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <Mail size={20} />
            </a>
            <a href={`https://wa.me/${portfolioData.whatsapp}`} className="p-2 hover:bg-white/5 rounded-full transition-colors text-green-400">
              <MessageCircle size={20} />
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
                <div className="p-2 w-fit rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  {skill.category === 'Web' && <Code2 size={24} />}
                  {skill.category === 'Mobile' && <Smartphone size={24} />}
                  {skill.category === 'Database' && <Database size={24} />}
                  {(!['Web', 'Mobile', 'Database'].includes(skill.category)) && <Code2 size={24} />}
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
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured <span className="text-purple-500">Projects</span></h2>
            <div className="w-20 h-1 bg-purple-500 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl glass-card"
              >
                <div className="aspect-[16/9] overflow-hidden relative group">
                  <div className="absolute inset-0 z-10" /> {/* Pointer events overlay to prevent interacting with iframe controls */}
                  <iframe 
                    src={project.image} 
                    className="w-[110%] h-[110%] -mt-[5%] -ml-[5%] border-none"
                    style={{ pointerEvents: 'none' }}
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">{project.type}</span>
                    <a href={project.link} target="_blank">
                      <ExternalLink size={18} className="text-gray-500 group-hover:text-white transition-colors cursor-pointer" />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                  src="https://drive.google.com/thumbnail?id=1Y-p_30V8OitLpREhN31E2X_C4-9721-y&sz=w1000" 
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
              <Briefcase className="text-purple-500" />
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
              <GraduationCap className="text-blue-500" />
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
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href={`https://wa.me/${portfolioData.whatsapp}`}
              className="flex items-center gap-3 px-8 py-4 glass border border-green-500/30 text-green-400 font-bold rounded-2xl hover:bg-green-500/10 transition-all w-full md:w-auto justify-center"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
            <p>© 2026 {portfolioData.name}. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="https://github.com/victorygrey" target="_blank" className="hover:text-white transition-colors">GitHub</a>
              {/* <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a> */}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
