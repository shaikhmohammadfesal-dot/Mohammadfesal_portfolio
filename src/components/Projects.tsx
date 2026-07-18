import { motion } from 'motion/react';
import { Github, ExternalLink, Code2, Globe, Database, Terminal } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Helper to render customized, gorgeous abstract mockups based on project ID
  const renderProjectMockup = (proj: Project) => {
    let innerGraphic;

    switch (proj.id) {
      case 'proj-1': // Dev Infinity Club Hub
        innerGraphic = (
          <div className="flex flex-col h-full justify-between p-4 font-mono text-[10px]">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 text-slate-500">
              <span>dev_infinity_portal</span>
              <span className="text-cyan-400">ACTIVE</span>
            </div>
            <div className="flex-1 py-3 flex flex-col justify-center gap-1.5">
              <div className="h-2 w-2/3 rounded bg-cyan-400/20" />
              <div className="h-2 w-1/2 rounded bg-blue-500/20" />
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div className="h-6 rounded bg-slate-950/60 border border-cyan-500/20 flex items-center justify-center text-[8px] text-cyan-300">RSVPs: 140</div>
                <div className="h-6 rounded bg-slate-950/60 border border-blue-500/20 flex items-center justify-center text-[8px] text-blue-300">Events: 4</div>
                <div className="h-6 rounded bg-slate-950/60 border border-indigo-500/20 flex items-center justify-center text-[8px] text-indigo-300">Rooms: 2</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[8px] text-slate-500">
              <span>Port: 3000</span>
              <div className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-cyan-400 animate-ping" />
                <span>Synchronized</span>
              </div>
            </div>
          </div>
        );
        break;

      case 'proj-2': // MERN-Stack Event Hub
        innerGraphic = (
          <div className="flex flex-col h-full justify-between p-4 font-mono text-[10px]">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 text-slate-500">
              <span>mern_coordinator_sys</span>
              <span className="text-blue-400">HOST</span>
            </div>
            <div className="flex-1 py-3 flex flex-col justify-center gap-2">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-[7px]">JS</div>
                <div className="h-1.5 flex-1 rounded bg-slate-800" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-[7px]">DB</div>
                <div className="h-1.5 w-2/3 rounded bg-slate-800" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-[7px]">API</div>
                <div className="h-1.5 w-1/2 rounded bg-slate-800" />
              </div>
            </div>
            <div className="text-[8px] text-slate-600">Database connected (127.0.0.1)</div>
          </div>
        );
        break;

      case 'proj-3': // Syllabus Discord Notifier
        innerGraphic = (
          <div className="flex flex-col h-full justify-between p-4 font-mono text-[10px]">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 text-slate-500">
              <span>discord_announcer.py</span>
              <span className="text-emerald-400">RUNNING</span>
            </div>
            <div className="flex-1 py-3 flex flex-col justify-center space-y-1">
              <p className="text-[9px] text-emerald-400">[info] Initialized bs4 scraper</p>
              <p className="text-[9px] text-slate-400">[ok] Detected syllabus update on MSU portal</p>
              <p className="text-[9px] text-indigo-400">[webhook] Sending message to Dev Infinity channel</p>
            </div>
            <div className="flex items-center gap-1 text-[8px] text-slate-600">
              <span>CRON: Every 30 mins</span>
            </div>
          </div>
        );
        break;

      default: // Personal Portfolio Mockup
        innerGraphic = (
          <div className="flex flex-col h-full justify-between p-4 font-mono text-[10px]">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 text-slate-500">
              <span>glassmorphic_render</span>
              <span className="text-purple-400">RENDER</span>
            </div>
            <div className="flex-1 py-3 flex items-center justify-center">
              <div className="text-center space-y-1">
                <div className="text-[14px] font-bold text-glow text-cyan-300">M.S. Portfolio</div>
                <div className="text-[8px] text-slate-500">React 19 + Motion</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[8px] text-slate-600">
              <span>Glassmorphism</span>
              <span>100% Fluid</span>
            </div>
          </div>
        );
    }

    return (
      <div className="relative w-full aspect-video rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-white/5 overflow-hidden shadow-inner group-hover:border-cyan-500/20 transition-all duration-300">
        {/* Mockup header */}
        <div className="flex items-center justify-between bg-slate-950/80 px-4 py-2 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="h-2 w-2 rounded-full bg-red-500/50" />
            <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
            <div className="h-2 w-2 rounded-full bg-green-500/50" />
          </div>
          <div className="flex h-3.5 w-1/3 items-center justify-center rounded bg-white/5 text-[8px] text-slate-500 font-mono">
            localhost:3000
          </div>
          <div className="w-4" />
        </div>

        {/* Mockup Body Content */}
        <div className="h-[calc(100%-25px)] bg-slate-950/40">
          {innerGraphic}
        </div>

        {/* Ambient glowing background inside mockup */}
        <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-xl group-hover:bg-cyan-500/20 transition-all duration-500" />
        <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-blue-500/5 blur-xl" />
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="relative flex min-h-screen flex-col justify-center px-6 py-24 md:px-12 lg:px-24 max-w-7xl mx-auto w-full"
    >
      {/* Section title */}
      <div id="projects-header" className="mb-12">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">04. Works</span>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mt-2">
          Featured Projects
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
      </div>

      {/* Grid of Projects */}
      <motion.div
        id="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
      >
        {PROJECTS.map((proj: Project) => (
          <motion.div
            key={proj.id}
            variants={cardVariants}
            className="glass-panel glass-panel-hover flex flex-col justify-between rounded-3xl p-5 md:p-6 border border-white/5 group h-full"
          >
            <div className="space-y-5">
              {/* Browser Preview / Mockup */}
              {renderProjectMockup(proj)}

              {/* Title & Tags */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>
                  {proj.featured && (
                    <span className="rounded-full bg-cyan-400/10 px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-cyan-400 border border-cyan-400/20 animate-pulse">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {proj.description}
                </p>
              </div>
            </div>

            {/* Bottom Actions & Skill Badges */}
            <div className="mt-6 space-y-4 pt-4 border-t border-white/5">
              {/* Tech Pill chips */}
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-slate-950/50 border border-white/5 px-2.5 py-1 text-[10px] text-slate-300 font-mono font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-1">
                <a
                  id={`project-github-${proj.id}`}
                  href={proj.githubUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={15} />
                  <span>Repository</span>
                </a>

                {proj.liveUrl && (
                  <a
                    id={`project-live-${proj.id}`}
                    href={proj.liveUrl}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
