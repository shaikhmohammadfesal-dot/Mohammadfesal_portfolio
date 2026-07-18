import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '../data';
import { Skill } from '../types';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools' }
  ];

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section
      id="skills"
      className="relative flex min-h-screen flex-col justify-center px-6 py-24 md:px-12 lg:px-24 max-w-7xl mx-auto w-full"
    >
      {/* Section title */}
      <div id="skills-header" className="mb-12">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">02. Expertise</span>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mt-2">
          Skills & Technologies
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
      </div>

      {/* Category Tabs */}
      <div id="skills-filter-tabs" className="mb-10 flex flex-wrap gap-2.5 justify-start">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`relative rounded-xl px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                isSelected
                  ? 'text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                  : 'text-slate-400 border border-white/5 bg-slate-950/20 hover:text-white hover:border-white/15'
              }`}
            >
              {cat.label}
              {isSelected && (
                <motion.span
                  layoutId="activeCategoryHighlight"
                  className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/15"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Grid of skill cards */}
      <motion.div
        id="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill: Skill) => (
            <motion.div
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              key={skill.name}
              className="glass-panel glass-panel-hover flex flex-col items-center justify-center rounded-2xl border border-white/5 p-6 text-center group"
            >
              {/* Skill logo placeholder using image with referrer policy */}
              <div className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950/40 border border-white/5 p-3 group-hover:border-cyan-500/20 group-hover:bg-cyan-500/5 transition-all duration-300">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  referrerPolicy="no-referrer"
                  className="h-9 w-9 object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to text initials if CDN image fails
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const textNode = document.createElement('span');
                      textNode.className = 'font-bold font-mono text-cyan-400 text-sm';
                      textNode.innerText = skill.name.slice(0, 2);
                      parent.appendChild(textNode);
                    }
                  }}
                />
              </div>

              {/* Skill name */}
              <span className="font-display text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </span>

              {/* Subtle tech chip label */}
              <span className="mt-1 font-mono text-[9px] uppercase tracking-wider text-slate-500 group-hover:text-slate-400 transition-colors">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
