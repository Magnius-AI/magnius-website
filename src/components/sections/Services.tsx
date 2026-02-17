import { motion } from 'framer-motion';
import { FEATURES } from '../../lib/constants';
import { staggerContainer, fadeInUp } from '../../lib/animations';

export function Services() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
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
            Everything You Need to{' '}
            <span className="text-gradient">Host, Engage, and Convert</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-silver">
            One platform. No more duct-taping tools together.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl bg-graphite/40 backdrop-blur-sm border border-slate/40 hover:border-cyan/50 transition-colors h-full">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                    <Icon className="w-6 h-6 text-void" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-frost mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-silver">
                    {feature.description}
                  </p>
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
