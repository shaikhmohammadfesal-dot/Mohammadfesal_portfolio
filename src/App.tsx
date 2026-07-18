import { useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { SectionId } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial calculation in case user loaded page scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections: SectionId[] = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -40% 0px', // Responsive viewport trigger margins
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavigate = (id: SectionId) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      // Offset scroll location to account for floating sticky navbar
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div id="portfolio-app-root" className="relative min-h-screen text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sleek top-of-screen scroll progress bar */}
      <div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 z-[100] origin-left shadow-[0_1px_8px_rgba(34,211,238,0.4)] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Immersive background blobs & overlay */}
      <AnimatedBackground />

      {/* Shrinking floating nav pill */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Single Page content */}
      <main id="single-page-wrapper">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

