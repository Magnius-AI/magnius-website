import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useState } from 'react';

const comparison = [
  { feature: 'Constituents', tiers: ['500', '2,500', '10,000', 'Unlimited'] },
  { feature: 'Users', tiers: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'] },
  { feature: 'Donor Management', tiers: [true, true, true, true] },
  { feature: 'Campaigns', tiers: [true, true, true, true] },
  { feature: 'Events', tiers: [true, true, true, true] },
  { feature: 'Grants', tiers: [true, true, true, true] },
  { feature: 'Auctions', tiers: [true, true, true, true] },
  { feature: 'Prospects', tiers: [true, true, true, true] },
  { feature: 'AI Insights', tiers: [true, true, true, true] },
  { feature: 'Fund Accounting', tiers: [true, true, true, true] },
  { feature: 'Tasks', tiers: [true, true, true, true] },
  { feature: 'API Access', tiers: [false, true, true, true] },
  { feature: 'Priority Support', tiers: [false, false, true, true] },
  { feature: 'Custom Integrations', tiers: [false, false, false, true] },
  { feature: 'Dedicated Success Mgr', tiers: [false, false, false, true] },
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

const plans = [
  { name: 'Starter', price: '$49', annual: '$39', description: '500 constituents', features: ['Unlimited users', 'All 9 modules', 'Email support'] },
  { name: 'Growth', price: '$99', annual: '$79', description: '2,500 constituents', features: ['Unlimited users', 'All 9 modules', 'API access', 'Email support'], highlighted: true },
  { name: 'Professional', price: '$199', annual: '$159', description: '10,000 constituents', features: ['Unlimited users', 'All 9 modules', 'API access', 'Priority support'] },
  { name: 'Enterprise', price: '$399', annual: '$319', description: 'Unlimited constituents', features: ['Unlimited users', 'All 9 modules', 'Custom integrations', 'Dedicated success manager'] },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold text-brand-indigo uppercase tracking-[0.14em]">Pricing</p>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Simple, transparent pricing</h1>
        <p className="text-brand-dark/70">Unlimited users on every plan. Pay by constituent count, not per seat.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-6 rounded-2xl border transition-all ${
              plan.highlighted
                ? 'bg-brand-indigo/5 border-brand-indigo shadow-lg shadow-brand-indigo/10 scale-[1.02]'
                : 'bg-white border-brand-ice hover:border-brand-indigo/50'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-brand-dark">{plan.name}</h3>
              {plan.highlighted && <span className="text-xs px-3 py-1 rounded-full bg-brand-indigo text-white">Popular</span>}
            </div>
            <div className="text-4xl font-bold text-brand-dark mb-1">{plan.price}<span className="text-lg font-normal text-brand-dark/60">/mo</span></div>
            <div className="text-sm text-brand-dark/60 mb-4">Annual: {plan.annual}/mo</div>
            <p className="text-brand-dark/70 mb-6 text-sm">{plan.description}</p>
            <Link
              to="/signup"
              className={`block w-full py-3 rounded-lg font-semibold text-center transition-colors mb-6 ${
                plan.highlighted
                  ? 'bg-brand-indigo text-white hover:bg-brand-purple'
                  : 'bg-brand-mist text-brand-dark hover:bg-brand-ice'
              }`}
            >
              Start Free Trial
            </Link>
            <ul className="space-y-2 text-sm text-brand-dark/80">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check size={16} className="text-brand-indigo mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-brand-dark mb-6 text-center">Feature comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-brand-ice">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-brand-mist text-brand-dark">
              <tr>
                <th className="px-4 py-3 font-semibold">Feature</th>
                <th className="px-4 py-3 font-semibold">Starter</th>
                <th className="px-4 py-3 font-semibold">Growth</th>
                <th className="px-4 py-3 font-semibold">Professional</th>
                <th className="px-4 py-3 font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature} className="border-t border-brand-ice">
                  <td className="px-4 py-3 text-brand-dark font-medium">{row.feature}</td>
                  {row.tiers.map((value, index) => (
                    <td key={index} className="px-4 py-3 text-brand-dark/70">
                      {typeof value === 'boolean' ? (
                        value ? <Check size={16} className="text-brand-indigo" /> : <span className="text-brand-dark/30">—</span>
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-brand-dark mb-6 text-center">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border border-brand-ice rounded-xl bg-white">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="text-brand-dark font-semibold">{faq.question}</span>
                <span className={`text-brand-indigo transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5 text-brand-dark/70 text-sm leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
