import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, MapPin } from 'lucide-react';
import { NoiseTexture, GradientMesh } from '../components/effects';
import { GlowCard } from '../components/ui';
import { WaitlistForm } from '../components/sections';
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
      {/* Noise overlay */}
      <NoiseTexture opacity={0.025} />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <GradientMesh />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
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
              Have questions about Magnius? Want to learn more about our platform?
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

      {/* Waitlist CTA */}
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
              Want early access?
            </h2>
            <p className="text-silver mb-8">
              Join our waitlist to be among the first to experience AI-powered consulting intelligence.
            </p>
            <div className="max-w-md mx-auto">
              <WaitlistForm size="lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Placeholder */}
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
