import { useState } from 'react';
import { Brain, HeartHandshake, LayoutGrid, ShieldCheck, Sparkles, Target, Users, Zap } from 'lucide-react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import PricingCard from '../components/PricingCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import DemoModal from '../components/DemoModal';

const features = [
  { icon: Users, title: 'Donor Management', description: 'Unified constituent profiles with engagement scoring and giving history.' },
  { icon: Target, title: 'Fundraising & Campaigns', description: 'Track goals, donations, recurring giving, and campaign performance.' },
  { icon: LayoutGrid, title: 'Events & Ticketing', description: 'Registration, ticketing, and capacity management for every event type.' },
  { icon: ShieldCheck, title: 'Grants Management', description: 'Full lifecycle tracking from LOI to award with reminders and documents.' },
  { icon: HeartHandshake, title: 'Prospect Research', description: 'Moves management for major gifts with AI-recommended next steps.' },
  { icon: Zap, title: 'Auctions', description: 'Run live, silent, online, or hybrid auctions with real-time bidding.' },
  { icon: Brain, title: 'AI Insights', description: 'Predict churn risk, recommended ask amounts, and generate donor comms.' },
  { icon: Sparkles, title: 'Fund Accounting', description: 'Track restricted vs unrestricted funds with audit-friendly reports.' },
  { icon: LayoutGrid, title: 'Task Management', description: 'Keep teams aligned with smart tasks and reminders tied to records.' },
];

const faqs = [
  {
    question: 'Can I switch plans anytime?',
    answer: 'Yes. Upgrade or downgrade at any time—changes take effect immediately and your billing adjusts automatically.',
  },
  {
    question: 'What happens if I exceed my constituent limit?',
    answer: 'We will notify you and give you time to upgrade or clean your database so you are never surprised.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes. Every plan comes with a 14-day free trial with full feature access. No credit card required.',
  },
  {
    question: 'Do you offer nonprofit discounts?',
    answer: 'Our pricing is already tailored to nonprofit budgets—typically 50–80% lower than legacy vendors.',
  },
];

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="bg-brand-dark text-brand-ice">
      <Hero
        eyebrow="The AI-First CRM Built for Nonprofits"
        title="Stop Overpaying for Nonprofit Software"
        subtitle="Magnius brings AI-powered donor management, fundraising, grants, and events into one affordable platform."
        primaryCta=
          {<button className="px-6 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-sky transition-colors">
            Start Free Trial
          </button>}
        secondaryCta={
          <button
            className="px-6 py-3 bg-brand-steel text-white rounded-lg font-semibold border border-brand-blue/30 hover:bg-brand-steel/80"
            onClick={() => setDemoOpen(true)}
          >
            Watch Demo
          </button>
        }
        trustBadges={["No credit card required", "14-day free trial", "Unlimited users"]}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8" id="problem">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nonprofits deserve better software</h2>
          <p className="text-brand-ice/80 max-w-3xl mx-auto">
            Fragmented tools and per-seat pricing drain budgets. Magnius consolidates your stack into one AI-first platform with predictable pricing.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 rounded-xl bg-brand-steel/60 border border-brand-blue/20">
            <h3 className="text-xl font-semibold text-white mb-2">Fragmented tools</h3>
            <p className="text-brand-ice/70">Juggling 5+ disconnected apps is chaos for your team and your data.</p>
          </div>
          <div className="p-6 rounded-xl bg-brand-steel/60 border border-brand-blue/20">
            <h3 className="text-xl font-semibold text-white mb-2">Overpriced per-user fees</h3>
            <p className="text-brand-ice/70">$60–$300/user/month adds up fast. Magnius charges by constituents, not seats.</p>
          </div>
          <div className="p-6 rounded-xl bg-brand-steel/60 border border-brand-blue/20">
            <h3 className="text-xl font-semibold text-white mb-2">Outdated interfaces</h3>
            <p className="text-brand-ice/70">Legacy tools feel like 1999. Magnius ships a modern, AI-first experience.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-navy/50" id="features">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything you need. Nothing you don't.</h2>
          <p className="text-brand-ice/80">Nine integrated modules that replace disconnected tools and give you AI superpowers.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8" id="ai">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">AI that actually helps (not hypes)</h2>
            <p className="text-brand-ice/80">Powered by Gemini 2.5 Flash to deliver tangible nonprofit outcomes.</p>
            <ul className="space-y-3 text-brand-ice/80">
              <li>• Predict donor disengagement before it happens</li>
              <li>• Get AI-recommended ask amounts based on capacity</li>
              <li>• Generate personalized thank-you notes in seconds</li>
              <li>• Query your data in plain English</li>
              <li>• Analyze sentiment in donor communications</li>
            </ul>
            <button className="px-6 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-sky transition-colors">
              See AI Features
            </button>
          </div>
          <div className="p-8 rounded-2xl bg-brand-steel/60 border border-brand-blue/25 shadow-lg shadow-brand-blue/10">
            <div className="grid grid-cols-2 gap-4 text-sm text-brand-ice/80">
              <div className="p-4 rounded-xl bg-brand-navy/70 border border-brand-blue/20">
                <div className="text-brand-sky font-semibold mb-2">Churn Risk</div>
                <div className="text-4xl font-bold text-white">2.4%</div>
                <p className="text-xs text-brand-ice/60">at-risk donors flagged this week</p>
              </div>
              <div className="p-4 rounded-xl bg-brand-navy/70 border border-brand-blue/20">
                <div className="text-brand-sky font-semibold mb-2">Recommended Ask</div>
                <div className="text-4xl font-bold text-white">$1,250</div>
                <p className="text-xs text-brand-ice/60">median suggested upgrade</p>
              </div>
              <div className="p-4 rounded-xl bg-brand-navy/70 border border-brand-blue/20 col-span-2">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-brand-sky font-semibold">Engagement Query</span>
                  <span className="text-xs bg-brand-steel/70 px-2 py-1 rounded-full">Natural language</span>
                </div>
                <div className="rounded-lg bg-brand-steel/60 p-3 text-sm">Show donors with 3+ gifts who haven't been contacted in 90 days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-navy/40" id="pricing-preview">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transparent pricing. No surprises.</h2>
          <p className="text-brand-ice/80">Unlimited users on every plan. Pay by constituents, not seats.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <PricingCard
            name="Starter"
            price="$49/mo"
            annualPrice="$39/mo billed annually"
            description="Best for growing nonprofits"
            features={["500 constituents", "Unlimited users", "All features"]}
          />
          <PricingCard
            name="Growth"
            price="$99/mo"
            annualPrice="$79/mo billed annually"
            description="For expanding teams"
            features={["2,500 constituents", "Unlimited users", "All features"]}
            highlighted
          />
          <PricingCard
            name="Professional"
            price="$199/mo"
            annualPrice="$159/mo billed annually"
            description="For multi-program orgs"
            features={["10,000 constituents", "Unlimited users", "All features"]}
          />
          <PricingCard
            name="Enterprise"
            price="$399/mo"
            annualPrice="$319/mo billed annually"
            description="For scaled networks"
            features={["Unlimited constituents", "Unlimited users", "Priority support"]}
          />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8" id="social-proof">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by nonprofits making a difference</h2>
          <p className="text-brand-ice/80">“Magnius replaced 4 different tools for us and saved $12,000/year. The AI insights alone are worth it.” — Sarah Chen, Development Director</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <TestimonialCard quote="Magnius replaced 4 different tools for us and saved $12,000/year." name="Sarah Chen" title="Development Director, Community Foundation" />
          <TestimonialCard quote="The AI recommendations helped us increase average gifts within two months." name="Daniel Reyes" title="Chief Development Officer" />
          <TestimonialCard quote="Finally, a CRM that feels built for nonprofits, not retrofitted." name="Priya Patel" title="Executive Director" />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-navy/40" id="faq">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing FAQ</h2>
          <p className="text-brand-ice/80">Clear answers to the most common questions we hear from nonprofit teams.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        title="Ready to modernize your nonprofit?"
        subtitle="Start your free 14-day trial today. No credit card required."
        primaryAction={
          <button className="px-8 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-sky transition-colors">
            Start Free Trial
          </button>
        }
        secondaryAction={
          <button className="px-8 py-3 bg-brand-steel text-white rounded-lg font-semibold border border-brand-blue/30 hover:bg-brand-steel/80">
            Schedule a Demo
          </button>
        }
      />

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)}>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Watch the Magnius demo</h3>
          <p className="text-brand-ice/80 text-sm">
            Get a quick overview of how Magnius unifies donors, fundraising, events, and grants in one AI-first platform.
          </p>
          <div className="aspect-video rounded-xl bg-brand-steel/60 border border-brand-blue/20 flex items-center justify-center text-brand-ice/60">
            Demo video placeholder
          </div>
        </div>
      </DemoModal>
    </div>
  );
}
