import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Rocket,
} from 'lucide-react';
import { GradientMesh } from '../components/effects';
import { FEATURES, BRAND } from '../lib/constants';

const metrics = [
  { value: '4+', label: 'Integrations' },
  { value: '24/7', label: 'Monitoring' },
  { value: '100%', label: 'Automated' },
  { value: 'AI', label: 'Powered' },
];

export function FeaturesPage() {
  const scrollToPricing = () => {
    window.location.href = '/#pricing';
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <GradientMesh />
        </div>
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-graphite/60 backdrop-blur-sm border border-slate/40 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-silver">
                Platform Features
              </span>
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-frost mb-6 leading-tight">
              The Complete{' '}
              <span className="text-gradient">Data Narrative Platform</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-silver mb-12">
              From raw data to actionable insights — everything you need to understand your agency's performance.
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-center"
                >
                  <span className="font-display text-3xl font-bold text-gradient">
                    {metric.value}
                  </span>
                  <div className="text-xs text-muted uppercase tracking-wider mt-1">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-20 sm:py-32 bg-night">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="font-display text-5xl font-bold text-graphite">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl font-bold text-frost">
                      {feature.name}
                    </h3>
                    <p className="text-lg text-cyan font-medium">{feature.shortName}</p>
                    <p className="text-silver text-lg leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="space-y-3">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                          <span className="text-silver">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className="flex-1">
                    <div
                      className={`relative p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-90`}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-graphite/80 backdrop-blur-sm" />
                      <div className="relative flex items-center justify-center h-64">
                        <Icon className="w-24 h-24 text-frost opacity-80" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-night to-void">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-frost mb-6">
              Ready to See It in Action?
            </h2>
            <p className="text-silver text-lg mb-8 max-w-2xl mx-auto">
              Book a demo to see how Magnius connects the dots in your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BRAND.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan to-teal text-void font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default FeaturesPage;
