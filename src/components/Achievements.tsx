import { motion } from 'motion/react';
import { Award, Trophy, Cloud, Star, Calendar } from 'lucide-react';
import { ACHIEVEMENTS } from '../data';
import { Achievement } from '../types';

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  // Helper to get matching icons for achievements
  const getAchievementIcon = (id: string) => {
    switch (id) {
      case 'ach-1':
        return <Trophy className="text-yellow-400" size={16} />;
      case 'ach-2':
        return <Cloud className="text-blue-400" size={16} />;
      case 'ach-3':
        return <Star className="text-cyan-400" size={16} />;
      default:
        return <Award className="text-purple-400" size={16} />;
    }
  };

  return (
    <section
      id="achievements"
      className="relative flex min-h-screen flex-col justify-center px-6 py-24 md:px-12 lg:px-24 max-w-5xl mx-auto w-full"
    >
      {/* Section title */}
      <div id="achievements-header" className="mb-12">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">05. Milestones</span>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mt-2">
          Achievements & Honors
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
      </div>

      <div id="achievements-timeline-container" className="relative pl-6 md:pl-10">
        {/* Left vertical border line */}
        <div className="absolute left-1 md:left-5 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500/50 via-cyan-500/30 to-transparent" />

        <motion.div
          id="achievements-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {ACHIEVEMENTS.map((ach: Achievement) => (
            <motion.div
              key={ach.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Outer Glowing Dot Icon */}
              <div className="absolute -left-[30px] md:-left-[46px] top-1.5 flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-slate-950 border border-white/10 shadow-lg group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.2)] transition-all z-10">
                {getAchievementIcon(ach.id)}
              </div>

              {/* Glass Card details */}
              <div className="glass-panel glass-panel-hover rounded-2xl border border-white/5 p-5 md:p-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div className="space-y-0.5">
                    {/* Badge */}
                    {ach.badge && (
                      <span className="inline-block rounded-md bg-cyan-400/10 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-cyan-300 border border-cyan-400/10 mb-1.5">
                        {ach.badge}
                      </span>
                    )}
                    <h3 className="font-display text-base md:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {ach.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono sm:text-right">
                    <Calendar size={12} className="text-cyan-500/70" />
                    <span>{ach.date}</span>
                  </div>
                </div>

                <span className="block font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  {ach.organization}
                </span>

                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
