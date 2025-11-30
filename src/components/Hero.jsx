import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const proteins = [
    { color: 'text-primary-200', size: 80, top: '12%', left: '8%', duration: 22, delay: 0, x: [0, 40, 0], y: [0, 20, 0], rotate: 0 },
    { color: 'text-accent-200', size: 96, top: '18%', left: '72%', duration: 28, delay: 1, x: [0, -50, 0], y: [0, 25, 0], rotate: 5 },
    { color: 'text-blue-200', size: 90, top: '70%', left: '48%', duration: 18, delay: 0.5, x: [0, 35, 0], y: [0, -20, 0], rotate: -5 },
    { color: 'text-primary-200', size: 70, top: '35%', left: '20%', duration: 20, delay: 0.8, x: [0, 30, 0], y: [0, 15, 0], rotate: 8 },
    { color: 'text-accent-200', size: 72, top: '55%', left: '80%', duration: 24, delay: 1.2, x: [0, -30, 0], y: [0, 18, 0], rotate: -8 },
    { color: 'text-blue-200', size: 60, top: '22%', left: '40%', duration: 26, delay: 0.6, x: [0, 25, 0], y: [0, 10, 0], rotate: 3 },
    { color: 'text-primary-200', size: 64, top: '68%', left: '12%', duration: 21, delay: 0.9, x: [0, 20, 0], y: [0, -15, 0], rotate: -3 },
    { color: 'text-accent-200', size: 84, top: '8%', left: '50%', duration: 23, delay: 0.4, x: [0, 30, 0], y: [0, 12, 0], rotate: 6 },
    { color: 'text-blue-200', size: 68, top: '78%', left: '70%', duration: 19, delay: 1.1, x: [0, -25, 0], y: [0, -12, 0], rotate: -6 },
    { color: 'text-primary-200', size: 58, top: '10%', left: '30%', duration: 24, delay: 0.3, x: [0, 28, 0], y: [0, 10, 0], rotate: 4 },
    { color: 'text-accent-200', size: 62, top: '28%', left: '15%', duration: 20, delay: 0.7, x: [0, -22, 0], y: [0, 12, 0], rotate: -2 },
    { color: 'text-blue-200', size: 54, top: '42%', left: '62%', duration: 27, delay: 0.5, x: [0, 24, 0], y: [0, -10, 0], rotate: 2 },
    { color: 'text-primary-200', size: 66, top: '62%', left: '35%', duration: 23, delay: 1.1, x: [0, -26, 0], y: [0, 14, 0], rotate: -4 },
    { color: 'text-accent-200', size: 60, top: '75%', left: '20%', duration: 21, delay: 0.2, x: [0, 20, 0], y: [0, -12, 0], rotate: 3 },
    { color: 'text-blue-200', size: 64, top: '16%', left: '85%', duration: 25, delay: 0.9, x: [0, -28, 0], y: [0, 16, 0], rotate: -5 },
    { color: 'text-primary-200', size: 52, top: '84%', left: '55%', duration: 19, delay: 0.4, x: [0, 18, 0], y: [0, -8, 0], rotate: 1 },
    { color: 'text-accent-200', size: 56, top: '48%', left: '82%', duration: 26, delay: 0.6, x: [0, -24, 0], y: [0, 10, 0], rotate: -1 },
    { color: 'text-blue-200', size: 50, top: '5%', left: '58%', duration: 22, delay: 1.0, x: [0, 20, 0], y: [0, 10, 0], rotate: 2 },
    { color: 'text-primary-200', size: 48, top: '32%', left: '52%', duration: 24, delay: 0.3, x: [0, -18, 0], y: [0, 8, 0], rotate: -2 },
    { color: 'text-accent-200', size: 50, top: '60%', left: '66%', duration: 23, delay: 0.7, x: [0, 16, 0], y: [0, 10, 0], rotate: 2 },
    { color: 'text-blue-200', size: 46, top: '40%', left: '8%', duration: 20, delay: 1.0, x: [0, 14, 0], y: [0, -10, 0], rotate: 1 },
    { color: 'text-primary-200', size: 44, top: '12%', left: '88%', duration: 26, delay: 0.5, x: [0, -16, 0], y: [0, 12, 0], rotate: -1 },
    { color: 'text-accent-200', size: 52, top: '85%', left: '30%', duration: 21, delay: 0.9, x: [0, 18, 0], y: [0, -10, 0], rotate: 3 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {proteins.map((p, idx) => (
          <motion.svg
            key={idx}
            className={`absolute ${p.color} mix-blend-multiply opacity-40`}
            width={p.size}
            height={p.size}
            viewBox="0 0 100 100"
            style={{ top: p.top, left: p.left, filter: 'blur(1px)' }}
            animate={{ x: p.x, y: p.y, rotate: [p.rotate, p.rotate + 10, p.rotate] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
          >
            <g stroke="currentColor" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10,60 C25,20 45,80 60,40 S90,70 90,40" />
              <circle cx="25" cy="25" r="3" fill="currentColor" />
              <circle cx="55" cy="55" r="3" fill="currentColor" />
              <circle cx="75" cy="35" r="3" fill="currentColor" />
            </g>
          </motion.svg>
        ))}
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Name */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {personalInfo.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              View Designs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
