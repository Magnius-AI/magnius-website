import { NoiseTexture } from '../components/effects';
import { Hero, ValueProp, Services, Pricing, FAQ, FinalCTA } from '../components/sections';

export default function HomePage() {
  return (
    <main className="relative">
      {/* Global noise texture overlay */}
      <NoiseTexture opacity={0.025} />

      {/* Hero Section */}
      <Hero />

      {/* Value Proposition Section */}
      <ValueProp />

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section */}
      <FinalCTA />
    </main>
  );
}
