import { motion } from 'framer-motion';
import { Calendar, Check, Sparkles } from 'lucide-react';
import { SERVICES, BUNDLE, BRAND } from '../../lib/constants';
import { staggerContainer, fadeInUp } from '../../lib/animations';

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-night/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-frost mb-4">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-silver">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
        >
          {/* Individual Services */}
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="relative"
              >
                <div className={`relative p-6 rounded-2xl bg-graphite/40 backdrop-blur-sm border ${service.popular ? 'border-cyan' : 'border-slate/40'} h-full flex flex-col`}>
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan to-teal text-void text-xs font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-4">
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${service.gradient} mb-3`}>
                      <Icon className="w-5 h-5 text-void" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-frost">
                      {service.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="font-display text-4xl font-bold text-frost">${service.price}</span>
                    <span className="text-muted">/mo</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-silver">
                        <Check className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={BRAND.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 text-center text-sm font-semibold rounded-lg border border-slate/60 text-frost hover:bg-slate/20 transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            );
          })}

          {/* Bundle Card */}
          <motion.div
            variants={fadeInUp}
            className="relative lg:row-span-1"
          >
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-cyan/10 to-violet/10 backdrop-blur-sm border border-cyan h-full flex flex-col">
              {/* Best Value Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 bg-gradient-to-r from-violet to-cyan text-void text-xs font-semibold rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Best Value
                </span>
              </div>

              {/* Header */}
              <div className="mb-4">
                <h3 className="font-display text-lg font-bold text-frost">
                  {BUNDLE.name}
                </h3>
                <p className="text-sm text-silver">{BUNDLE.description}</p>
              </div>

              {/* Price */}
              <div className="mb-2">
                <span className="font-display text-4xl font-bold text-frost">${BUNDLE.price}</span>
                <span className="text-muted">/mo</span>
              </div>
              <p className="text-sm text-cyan mb-6">Save ${BUNDLE.savings}/month</p>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-grow">
                {BUNDLE.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-silver">
                    <Check className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={BRAND.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-center text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan to-teal text-void hover:opacity-90 transition-opacity"
              >
                <Calendar className="w-4 h-4" />
                Book a Call
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted text-sm">
            ✓ No setup fees &nbsp;&nbsp; ✓ Cancel anytime &nbsp;&nbsp; ✓ 48-hour onboarding
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
