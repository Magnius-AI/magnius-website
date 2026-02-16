import { motion } from 'framer-motion';
import { Calendar, Check } from 'lucide-react';
import { SERVICES, BRAND } from '../../lib/constants';
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

        {/* Pricing Cards - 2 column layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="relative"
              >
                <div className={`relative p-8 rounded-2xl backdrop-blur-sm border h-full flex flex-col ${
                  service.popular 
                    ? 'bg-gradient-to-br from-cyan/10 to-violet/10 border-cyan' 
                    : 'bg-graphite/40 border-slate/40'
                }`}>
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-gradient-to-r from-cyan to-teal text-void text-xs font-semibold rounded-full">
                        Recommended
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-4`}>
                      <Icon className="w-6 h-6 text-void" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-frost">
                      {service.name}
                    </h3>
                    <p className="text-silver mt-1">{service.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="font-display text-5xl font-bold text-frost">${service.price}</span>
                    <span className="text-muted text-lg">/mo</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-silver">
                        <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={BRAND.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-4 text-center font-semibold rounded-lg transition-all ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan to-teal text-void hover:opacity-90'
                        : 'border border-slate/60 text-frost hover:bg-slate/20'
                    }`}
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Call
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Badges & Beta Pricing Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center space-y-3"
        >
          <p className="text-muted text-sm">
            ✓ No setup fees &nbsp;&nbsp; ✓ Cancel anytime &nbsp;&nbsp; ✓ 48-hour onboarding
          </p>
          <p className="text-cyan text-sm font-medium">
            🎉 Beta pricing: Standard $500/mo (normally $750)
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
