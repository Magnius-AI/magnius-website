import { NoiseTexture } from '../components/effects';
import { Hero, ValueProp, Services, Comparison, Pricing, FAQ, FinalCTA } from '../components/sections';

export default function HomePage() {
  return (
    <main className="relative">
      {/* Global noise texture overlay */}
      <NoiseTexture opacity={0.025} />

      {/* Hero Section */}
      <Hero />

      {/* Value Proposition Section */}
      <ValueProp />

      {/* Features Section */}
      <section id="features-section">
        <Services />
      </section>

      {/* Comparison Section */}
      <Comparison />

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section */}
      <FinalCTA />
    </main>
  );
}
