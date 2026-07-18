import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { SectionId } from '../types';

interface HeroProps {
  onNavigate: (id: SectionId) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = PERSONAL_INFO.roles;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const currentFullRole = roles[roleIndex];
      if (!isDeleting) {
        // Typing letters
        setRoleText(currentFullRole.substring(0, roleText.length + 1));
        setTypingSpeed(100);

        if (roleText === currentFullRole) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        // Deleting letters
        setRoleText(currentFullRole.substring(0, roleText.length - 1));
        setTypingSpeed(40);

        if (roleText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(300); // pause before starting next word
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex, typingSpeed, roles]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center"
    >
      {/* Sparkle badge */}
      <motion.div
        id="hero-badge"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="glass-panel mb-6 flex items-center gap-2 rounded-full border border-cyan-500/20 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md"
      >
        <Sparkles size={14} className="animate-pulse text-cyan-400" />
        <span className="font-mono tracking-wider uppercase">Available for Internships & Collaborations</span>
      </motion.div>

      {/* Main Title Name */}
      <motion.h1
        id="hero-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
      >
        Hi, I'm <br className="sm:hidden" />
        <span className="gradient-text text-glow select-none">
          {PERSONAL_INFO.name}
        </span>
      </motion.h1>

      {/* Typewriter Subtitle */}
      <motion.div
        id="hero-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 flex h-10 items-center justify-center gap-2 text-xl font-medium text-slate-300 sm:text-2xl md:text-3xl"
      >
        <span className="text-slate-400">I am a</span>
        <span className="font-display font-semibold text-cyan-400 border-r-2 border-cyan-400 pr-1 py-0.5 animate-caret min-w-[10px]">
          {roleText}
        </span>
      </motion.div>

      {/* Hero tagline */}
      <motion.p
        id="hero-tagline"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mx-auto mt-6 max-w-2xl px-2 text-sm text-slate-400 sm:text-base md:text-lg"
      >
        {PERSONAL_INFO.tagline}
      </motion.p>

      {/* Social quick links */}
      <motion.div
        id="hero-socials"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8 flex items-center justify-center gap-4"
      >
        <a
          id="hero-social-github"
          href={PERSONAL_INFO.github}
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-slate-300 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/5"
        >
          <Github size={20} />
        </a>
        <a
          id="hero-social-linkedin"
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-slate-300 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/5"
        >
          <Linkedin size={20} />
        </a>
        <a
          id="hero-social-email"
          href={`mailto:${PERSONAL_INFO.email}`}
          aria-label="Send Email"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-slate-300 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/5"
        >
          <Mail size={20} />
        </a>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        id="hero-actions"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:w-auto"
      >
        <button
          id="hero-cta-projects"
          onClick={() => onNavigate('projects')}
          className="relative group flex items-center justify-center w-full sm:w-auto overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/30 active:scale-95"
        >
          <span className="relative z-10">View Projects</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-transform duration-300 group-hover:translate-x-0" />
        </button>

        <button
          id="hero-cta-contact"
          onClick={() => onNavigate('contact')}
          className="relative flex items-center justify-center w-full sm:w-auto rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white active:scale-95"
        >
          Contact Me
        </button>
      </motion.div>

      {/* Bouncing Scroll indicator */}
      <motion.div
        id="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        onClick={() => onNavigate('about')}
        className="absolute bottom-10 flex cursor-pointer flex-col items-center gap-2 text-slate-500 transition-colors hover:text-cyan-400"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Scroll Down</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
