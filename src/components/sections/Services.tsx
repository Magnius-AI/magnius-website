import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../lib/constants';
import { staggerContainer, fadeInUp } from '../../lib/animations';

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
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
            Meet Your <span className="text-gradient">AI Agents</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-silver">
            Three specialized AI agents, each designed to excel at one job. Deploy one or all three.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl bg-graphite/40 backdrop-blur-sm border border-slate/40 hover:border-cyan/50 transition-colors h-full">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan to-teal text-void text-xs font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                    <Icon className="w-6 h-6 text-void" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-frost mb-2">
                    {service.name}
                  </h3>
                  <p className="text-silver mb-6">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="font-display text-3xl font-bold text-frost">${service.price}</span>
                    <span className="text-muted">/month</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-silver">
                        <svg className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  {service.id === 'ai-support' && (
                    <Link
                      to="/support-agent"
                      className="inline-flex items-center gap-2 text-cyan hover:text-teal transition-colors text-sm font-medium"
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
