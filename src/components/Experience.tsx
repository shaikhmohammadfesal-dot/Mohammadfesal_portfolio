import { motion } from 'motion/react';
import { Calendar, Users, ShieldAlert, ChevronRight, Briefcase } from 'lucide-react';
import { EXPERIENCES } from '../data';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="experience"
      className="relative flex min-h-screen flex-col justify-center px-6 py-24 md:px-12 lg:px-24 max-w-7xl mx-auto w-full"
    >
      {/* Section title */}
      <div id="experience-header" className="mb-16">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">03. Involvement</span>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mt-2">
          Experience & Positions
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
      </div>

      <div id="timeline-wrapper" className="relative">
        {/* Vertical timeline line - glowing */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent md:left-1/2 md:-ml-[1px]" />

        <motion.div
          id="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {EXPERIENCES.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row ${
                  isEven ? 'md:flex-row-reverse' : ''
                } items-start md:items-center`}
              >
                {/* Visual Timeline Dot */}
                <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.4)] z-10 md:left-1/2 md:-translate-x-1/2">
                  {idx === 0 ? (
                    <Users size={14} className="text-cyan-400 animate-pulse" />
                  ) : (
                    <Briefcase size={14} className="text-blue-400" />
                  )}
                </div>

                {/* Glassy Timeline Content Card (Takes half-width on desktop) */}
                <div className={`w-full pl-12 md:pl-0 md:w-[calc(50%-32px)] ${
                  isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}>
                  <div className="glass-panel glass-panel-hover rounded-2xl border border-white/5 p-6 md:p-8 space-y-4">
                    {/* Header info */}
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                        {exp.organization}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                        {exp.role}
                      </h3>
                      <div className={`flex items-center gap-1 text-xs text-slate-500 font-mono ${
                        isEven ? 'md:justify-end' : ''
                      }`}>
                        <Calendar size={12} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Responsibilities bullets */}
                    <ul className={`space-y-2.5 text-xs sm:text-sm text-slate-400 ${
                      isEven ? 'md:text-right list-none' : 'list-none'
                    }`}>
                      {exp.responsibilities.map((resp, bIdx) => (
                        <li key={bIdx} className={`flex items-start gap-2 ${
                          isEven ? 'md:flex-row-reverse' : ''
                        }`}>
                          <ChevronRight size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill Tags Learned */}
                    <div className={`flex flex-wrap gap-1.5 pt-2 ${
                      isEven ? 'md:justify-end' : ''
                    }`}>
                      {exp.skillsLearned.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-blue-500/5 border border-blue-500/10 px-2 py-0.5 text-[10px] text-blue-300 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
