import { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

export default function PricingPage() {
  const [deployment, setDeployment] = useState<'onpremise' | 'cloud'>('onpremise');

  const onPremiseTiers = [
    {
      name: 'Solo/Small Firm',
      price: '$4,999',
      period: 'one-time',
      description: '1-5 attorneys',
      features: [
        'Perpetual license',
        '50-state template library',
        'Unlimited matters',
        'Local AI models included',
        'Voice recognition',
        '1 year support & updates',
        'Email support',
        'Self-installation guide'
      ],
      highlighted: false
    },
    {
      name: 'Mid-Size Firm',
      price: '$14,999',
      period: 'one-time',
      description: '6-25 attorneys',
      features: [
        'Everything in Solo plan',
        'Priority support (phone + email)',
        'Knowledge Graph included',
        'White-glove installation',
        '2 years support & updates',
        'Quarterly training sessions',
        'Custom template import'
      ],
      highlighted: true,
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: '25+ attorneys',
      features: [
        'Everything in Mid-Size plan',
        'Unlimited users',
        'Dedicated account manager',
        'Custom integrations',
        'Multi-site deployment',
        'SLA guarantees',
        'Annual security audit',
        'Custom model fine-tuning'
      ],
      highlighted: false
    }
  ];

  const cloudTiers = [
    {
      name: 'Starter',
      price: '$49',
      period: '/user/month',
      description: '1-10 users',
      features: [
        '14-day free trial',
        '50-state template library',
        '100GB storage per user',
        'Unlimited matters',
        'AI assistance',
        'Voice recognition',
        'Email support',
        '99.9% uptime SLA'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/user/month',
      description: '10-50 users',
      features: [
        'Everything in Starter',
        '500GB storage per user',
        'Priority support',
        'Knowledge Graph included',
        'Advanced analytics',
        'Custom branding',
        'API access',
        'SSO integration'
      ],
      highlighted: true,
      badge: 'Best Value'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: '50+ users',
      features: [
        'Everything in Professional',
        'Unlimited storage',
        'Dedicated account manager',
        '24/7 premium support',
        'Custom SLA',
        'Multi-region deployment',
        'Advanced security features',
        'Hybrid deployment option'
      ],
      highlighted: false
    }
  ];

  const tiers = deployment === 'onpremise' ? onPremiseTiers : cloudTiers;

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-[#2D1B4E] via-[#3D2861] to-[#2D1B4E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Transparent Pricing for Every Deployment Model</h1>
          <p className="text-xl text-gray-300 mb-8">No hidden fees. No surprises. Choose the plan that fits your practice.</p>

          <div className="inline-flex bg-white/10 rounded-lg p-1 backdrop-blur-sm">
            <button
              onClick={() => setDeployment('onpremise')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                deployment === 'onpremise'
                  ? 'bg-[#C9A961] text-[#2D1B4E]'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              On-Premise
            </button>
            <button
              onClick={() => setDeployment('cloud')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                deployment === 'cloud'
                  ? 'bg-[#C9A961] text-[#2D1B4E]'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Cloud
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 ${
                  tier.highlighted
                    ? 'bg-[#2D1B4E] text-white shadow-2xl scale-105 border-4 border-[#C9A961]'
                    : 'bg-white border-2 border-gray-200 shadow-lg'
                }`}
              >
                {tier.badge && (
                  <div className="bg-[#C9A961] text-[#2D1B4E] px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                    {tier.badge}
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-4 ${tier.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${tier.highlighted ? 'text-[#C9A961]' : 'text-[#2D1B4E]'}`}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={`text-sm ${tier.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                      {tier.period}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2">
                      <CheckCircle
                        className={`flex-shrink-0 mt-0.5 ${tier.highlighted ? 'text-[#C9A961]' : 'text-[#10B981]'}`}
                        size={18}
                      />
                      <span className={`text-sm ${tier.highlighted ? 'text-gray-200' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    tier.highlighted
                      ? 'bg-[#C9A961] text-[#2D1B4E] hover:bg-[#E5D4A6]'
                      : 'bg-[#2D1B4E] text-white hover:bg-[#3D2861]'
                  }`}
                >
                  {tier.price === 'Custom' ? 'Request Quote' : deployment === 'cloud' ? 'Start Free Trial' : 'Purchase License'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I switch from on-premise to cloud later?',
                a: 'Yes, migration assistance included'
              },
              {
                q: 'Do you offer discounts for nonprofits?',
                a: 'Yes, 30% discount for qualified organizations'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'Credit card, ACH, wire transfer'
              },
              {
                q: 'What happens when support expires?',
                a: 'Continue using software, but no updates or support'
              }
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Questions About Pricing?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#2D1B4E] text-white rounded-lg font-semibold hover:bg-[#3D2861] transition-colors">
              Chat with Sales
            </button>
            <button className="px-8 py-4 border-2 border-[#C9A961] text-[#2D1B4E] rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Calculate Your TCO
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
