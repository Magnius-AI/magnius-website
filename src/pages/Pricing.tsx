import PricingCard from '../components/PricingCard';
import FAQAccordion from '../components/FAQAccordion';

const comparison = [
  { feature: 'Constituents', tiers: ['500', '2,500', '10,000', 'Unlimited'] },
  { feature: 'Users', tiers: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'] },
  { feature: 'Donor Management', tiers: ['Yes', 'Yes', 'Yes', 'Yes'] },
  { feature: 'Campaigns', tiers: ['Yes', 'Yes', 'Yes', 'Yes'] },
  { feature: 'Events', tiers: ['Yes', 'Yes', 'Yes', 'Yes'] },
  { feature: 'Grants', tiers: ['Yes', 'Yes', 'Yes', 'Yes'] },
  { feature: 'Auctions', tiers: ['Yes', 'Yes', 'Yes', 'Yes'] },
  { feature: 'Prospects', tiers: ['Yes', 'Yes', 'Yes', 'Yes'] },
  { feature: 'AI Insights', tiers: ['Yes', 'Yes', 'Yes', 'Yes'] },
  { feature: 'Fund Accounting', tiers: ['Yes', 'Yes', 'Yes', 'Yes'] },
  { feature: 'Tasks', tiers: ['Yes', 'Yes', 'Yes', 'Yes'] },
  { feature: 'API Access', tiers: ['No', 'Yes', 'Yes', 'Yes'] },
  { feature: 'Priority Support', tiers: ['No', 'No', 'Yes', 'Yes'] },
  { feature: 'Custom Integrations', tiers: ['No', 'No', 'No', 'Yes'] },
  { feature: 'Dedicated Success Mgr', tiers: ['No', 'No', 'No', 'Yes'] },
];

const faqs = [
  { question: 'Can I switch plans anytime?', answer: 'Yes, upgrade or downgrade anytime. Changes take effect immediately.' },
  {
    question: 'What happens if I exceed my constituent limit?',
    answer: "We'll notify you and give you time to upgrade or clean your database.",
  },
  { question: 'Is there a free trial?', answer: 'Yes! 14 days, full access, no credit card required.' },
  {
    question: 'Do you offer nonprofit discounts?',
    answer: 'Our pricing is already designed for nonprofit budgets—typically 50–80% less than competitors.',
  },
];

export default function Pricing() {
  return (
    <div className="bg-brand-dark text-brand-ice min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <p className="text-brand-sky font-semibold text-sm uppercase tracking-wide">Pricing</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple, transparent pricing</h1>
        <p className="text-brand-ice/80">Unlimited users on every plan. Pay by constituent count, not per seat.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <PricingCard
          name="Starter"
          price="$49/mo"
          annualPrice="$39/mo"
          description="500 constituents"
          features={["Unlimited users", "All features"]}
        />
        <PricingCard
          name="Growth"
          price="$99/mo"
          annualPrice="$79/mo"
          description="2,500 constituents"
          features={["Unlimited users", "All features"]}
          highlighted
        />
        <PricingCard
          name="Professional"
          price="$199/mo"
          annualPrice="$159/mo"
          description="10,000 constituents"
          features={["Unlimited users", "All features"]}
        />
        <PricingCard
          name="Enterprise"
          price="$399/mo"
          annualPrice="$319/mo"
          description="Unlimited constituents"
          features={["Unlimited users", "Priority support", "Custom integrations"]}
        />
      </div>

      <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Feature comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-brand-blue/20">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-brand-steel/70 text-white">
              <tr>
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">Starter</th>
                <th className="px-4 py-3">Growth</th>
                <th className="px-4 py-3">Prof</th>
                <th className="px-4 py-3">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature} className="border-t border-brand-blue/10">
                  <td className="px-4 py-3 text-white font-semibold">{row.feature}</td>
                  {row.tiers.map((value, index) => (
                    <td key={index} className="px-4 py-3 text-brand-ice/80">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">FAQ</h2>
        <FAQAccordion items={faqs} />
      </div>
    </div>
  );
}
