import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { NetworkCanvas, GradientMesh } from '../effects';
import { WaitlistForm } from './WaitlistForm';
import { HERO } from '../../lib/constants';
import { heroHeadline, heroSubtext, heroCTA, staggerContainer, fadeInUp } from '../../lib/animations';

export function Hero() {
  const scrollToEngines = () => {
    const enginesSection = document.getElementById('engines');
    if (enginesSection) {
      enginesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <GradientMesh />
        <NetworkCanvas nodeCount={100} connectionDistance={120} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-graphite/60 backdrop-blur-sm border border-slate/40 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-silver">
            {HERO.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={heroHeadline}
          initial="hidden"
          animate="visible"
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-frost mb-6 leading-[1.1] tracking-tight"
        >
          The <span className="text-gradient">future</span> of
          <br />
          consulting is here.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={heroSubtext}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-lg sm:text-xl text-silver mb-12 leading-relaxed"
        >
          {HERO.subheadline}
        </motion.p>

        {/* Waitlist Form */}
        <motion.div
          variants={heroCTA}
          initial="hidden"
          animate="visible"
          id="waitlist"
          className="max-w-lg mx-auto mb-16"
        >
          <WaitlistForm size="lg" />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-8 sm:gap-12"
        >
          {HERO.stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        onClick={scrollToEngines}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-cyan transition-colors group"
        aria-label="Scroll to learn more"
      >
        <span className="text-xs uppercase tracking-wider">Discover More</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent" />
    </section>
  );
}

export default Hero;
