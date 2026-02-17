import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, MapPin, ArrowRight } from 'lucide-react';
import { NoiseTexture, GradientMesh } from '../components/effects';
import { GlowCard } from '../components/ui';
import { BRAND } from '../lib/constants';
import { fadeInUp, staggerContainer, viewportSettings } from '../lib/animations';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
    color: '#00d4ff',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'Connect with us',
    href: BRAND.social.linkedin,
    color: '#00b8a9',
  },
  {
    icon: Twitter,
    title: 'Twitter',
    value: 'Follow us',
    href: BRAND.social.twitter,
    color: '#0066ff',
  },
];

export default function ContactPage() {
  return (
    <main className="relative">
      <NoiseTexture opacity={0.025} />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <GradientMesh />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-graphite/60 backdrop-blur-sm border border-slate/40 mb-8"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-silver">
                Get in Touch
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-frost mb-6"
            >
              Let's <span className="text-gradient">connect</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-xl mx-auto text-lg text-silver"
            >
              Questions about Magnius? Want a personalized demo of our webinar platform?
              We'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('mailto') ? undefined : '_blank'}
                rel={method.href.startsWith('mailto') ? undefined : 'noreferrer'}
                variants={fadeInUp}
                className="block group"
              >
                <GlowCard
                  className="h-full p-6 text-center"
                  glowColor={
                    index === 0 ? 'cyan' :
                    index === 1 ? 'teal' : 'electric'
                  }
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${method.color}20, transparent)`,
                      border: `1px solid ${method.color}30`,
                    }}
                  >
                    <method.icon className="w-7 h-7" style={{ color: method.color }} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-frost mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-cyan group-hover:text-cyan-light transition-colors">
                    {method.value}
                  </p>
                </GlowCard>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 100%, rgba(0, 184, 169, 0.04) 0%, transparent 50%)
            `,
          }}
        />
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-frost mb-6">
              Ready to host webinars that convert?
            </h2>
            <p className="text-silver mb-8">
              Book a demo or start hosting for free today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href={BRAND.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 flex-1 px-6 py-4 bg-gradient-to-r from-cyan to-teal text-void font-semibold rounded-xl hover:shadow-glow-cyan hover:scale-105 transition-all"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 flex-1 px-6 py-4 bg-graphite/60 border border-slate/40 text-frost font-semibold rounded-xl hover:bg-graphite/80 transition-colors"
              >
                Start Free
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="relative py-16 border-t border-slate/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 text-muted"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Based in the United States</span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
