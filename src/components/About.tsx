import { motion } from 'motion/react';
import { GraduationCap, MapPin, Code2, Users, Calendar, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const statBadges = [
    { label: 'Degree', value: 'BE Computer Science', icon: GraduationCap, color: 'text-cyan-400 bg-cyan-400/5 border-cyan-500/10' },
    { label: 'Year of Study', value: '2nd Year (BE-2)', icon: Calendar, color: 'text-blue-400 bg-blue-400/5 border-blue-500/10' },
    { label: 'Leadership', value: 'Club President', icon: Users, color: 'text-indigo-400 bg-indigo-400/5 border-indigo-500/10' },
    { label: 'Focus', value: 'Full-Stack Web', icon: Code2, color: 'text-purple-400 bg-purple-400/5 border-purple-500/10' },
  ];

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col justify-center px-6 py-24 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      {/* Section title */}
      <div id="about-header" className="mb-12">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">01. Discovery</span>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mt-2">
          About Me
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
      </div>

      <motion.div
        id="about-content-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-3xl mx-auto w-full space-y-8"
      >
        {/* About Info (Centered Layout) */}
        <div id="about-info" className="space-y-6">
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
              I'm <span className="text-cyan-400 font-bold">{PERSONAL_INFO.name}</span>, a tech builder & student leader.
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              I am currently pursuing my <strong>Bachelor of Engineering in Computer Science Engineering (BE-2)</strong> at the prestigious <strong>The Maharaja Sayajirao University of Baroda (MSU Baroda)</strong>. 
              My journey in technology is driven by extreme curiosity and the excitement of building scalable software that solves actual student and organizational problems.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              As the <strong>Club President of Dev Infinity Club</strong> and a <strong>Web Team Member at Code Vimarsh Club</strong>, 
              I find massive joy in managing high-performing student projects, facilitating interactive workshops, and introducing peer-to-peer programming mentorship.
            </p>
          </motion.div>

          {/* Quick Info Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 rounded-xl bg-slate-950/40 border border-white/5 px-4 py-2 text-xs font-medium text-slate-300">
              <MapPin size={14} className="text-cyan-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-slate-950/40 border border-white/5 px-4 py-2 text-xs font-medium text-slate-300">
              <GraduationCap size={14} className="text-blue-400" />
              <span>MSU Baroda</span>
            </div>
          </motion.div>

          {/* Grid of Badges */}
          <motion.div
            id="about-badges-grid"
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 pt-4"
          >
            {statBadges.map((badge, index) => {
              const IconComp = badge.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col gap-1.5 p-4 rounded-2xl border ${badge.color} bg-slate-950/30 backdrop-blur-sm transition-transform hover:scale-[1.02]`}
                >
                  <div className="flex items-center gap-2">
                    <IconComp size={16} />
                    <span className="font-mono text-[10px] uppercase tracking-wider opacity-60">{badge.label}</span>
                  </div>
                  <span className="font-display font-bold text-sm sm:text-base text-white">{badge.value}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
