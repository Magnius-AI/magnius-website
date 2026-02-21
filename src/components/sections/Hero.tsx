import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NetworkCanvas, GradientMesh } from '../effects';
import { HERO } from '../../lib/constants';
import { heroHeadline, heroSubtext, heroCTA, staggerContainer, fadeInUp } from '../../lib/animations';

export function Hero() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('waitlist-form');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
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
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center pt-40">
        <div className="max-w-4xl mx-auto">
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
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-frost mb-6 leading-[1.1] tracking-tight"
          >
            Make your agency's data <span className="text-gradient pl-1">speak</span>.
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

          {/* CTA Buttons */}
          <motion.div
            variants={heroCTA}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={scrollToPricing}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan to-teal text-void font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Rocket className="w-5 h-5" />
              {HERO.cta.primary}
            </button>
            <Link
              to="/features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-graphite/60 backdrop-blur-sm border border-slate/40 text-frost font-semibold rounded-lg hover:bg-graphite/80 transition-colors"
            >
              {HERO.cta.secondary}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-20"
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

        {/* Dashboard Mockup Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative max-w-6xl mx-auto mt-8 border border-cyan/20 rounded-2xl md:rounded-[32px] p-2 bg-slate/20 backdrop-blur-md shadow-[0_0_80px_rgba(0,212,255,0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent z-20 rounded-[32px] pointer-events-none" />
          <img
            src="/magnius-dashboard.png"
            alt="Magnius AI Morning Briefing Dashboard"
            className="w-full h-auto rounded-xl md:rounded-[24px] relative z-10 shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        onClick={scrollToFeatures}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-cyan transition-colors group z-30"
        aria-label="Scroll to learn more"
      >
        <span className="text-xs uppercase tracking-wider">Explore Platform</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-void to-transparent z-20" />
    </section>
  );
}

export default Hero;
