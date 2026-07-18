import { motion } from 'motion/react';

export default function AnimatedBackground() {
  return (
    <div id="animated-bg-container" className="fixed inset-0 -z-10 overflow-hidden bg-[#030712]">
      {/* Absolute dark overlay */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(17,24,39,0.1)_0%,#030712_100%]" />

      {/* Floating Glassmorphic Orb 1 - Cyan */}
      <motion.div
        id="bg-orb-cyan-1"
        className="absolute h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[100px] md:h-[500px] md:w-[500px]"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -90, 60, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          top: '10%',
          left: '5%',
        }}
      />

      {/* Floating Glassmorphic Orb 2 - Electric Blue */}
      <motion.div
        id="bg-orb-blue-2"
        className="absolute h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px] md:h-[600px] md:w-[600px]"
        animate={{
          x: [0, -90, 70, 0],
          y: [0, 80, -70, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          bottom: '15%',
          right: '5%',
        }}
      />

      {/* Floating Glassmorphic Orb 3 - Deep Purple / Indigo */}
      <motion.div
        id="bg-orb-indigo-3"
        className="absolute h-[300px] w-[300px] rounded-full bg-indigo-500/8 blur-[110px] md:h-[450px] md:w-[450px]"
        animate={{
          x: [0, 50, -60, 0],
          y: [0, 70, 90, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          top: '40%',
          left: '35%',
        }}
      />

      {/* Grid Pattern overlay for techy/matrix developer vibe */}
      <div 
        id="bg-grid-overlay"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
      />

      {/* Abstract light lines moving */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-[20%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute left-[80%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" />
      </div>
    </div>
  );
}
