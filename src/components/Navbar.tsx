import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal } from 'lucide-react';
import { NAV_ITEMS } from '../data';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    e.preventDefault();
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="navbar-root"
      className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 py-4 transition-all duration-500 ease-in-out md:px-8"
      style={{
        paddingTop: isScrolled ? '12px' : '20px',
        paddingBottom: isScrolled ? '12px' : '20px',
      }}
    >
      <div
        id="navbar-container"
        className={`flex items-center justify-between w-full transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'max-w-4xl rounded-2xl bg-slate-950/70 border-cyan-500/10 px-6 py-2.5 backdrop-blur-md shadow-2xl shadow-cyan-950/20'
            : 'max-w-7xl rounded-3xl bg-transparent border-transparent px-4 py-2'
        } border border-white/5`}
      >
        {/* Logo/Brand */}
        <a
          id="nav-logo"
          href="#home"
          onClick={(e) => handleClick(e, 'home')}
          className="group flex items-center gap-2 font-display text-lg font-bold text-white tracking-tight"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Terminal size={16} />
          </div>
          <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
            Fesal<span className="text-cyan-400 font-extrabold"> shaikh</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div id="desktop-links" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                id={`nav-link-${item.id}`}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`relative px-4 py-2 font-display text-sm font-medium transition-all duration-300 rounded-lg hover:text-cyan-400 ${
                  isActive ? 'text-cyan-300' : 'text-slate-400'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-b-2 border-cyan-400/60"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle Button */}
        <button
          id="mobile-menu-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white md:hidden"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Glass Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="glass-panel absolute left-4 right-4 top-[80px] z-40 rounded-2xl border border-white/10 p-5 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-base font-semibold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/20 text-cyan-300'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
