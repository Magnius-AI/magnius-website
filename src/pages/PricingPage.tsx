import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: 'Pilot',
      description: 'Test the platform with a focused use case',
      features: [
        '1–2 engines',
        '1 business unit',
        'Fixed-scope guided onboarding',
        '8 weeks implementation',
        'Email and Slack support',
        'Quarterly business reviews',
      ],
      cta: 'Request pilot',
    },
    {
      name: 'Standard',
      description: 'Full OS for one company',
      features: [
        'All 8 engines available',
        'Full company coverage',
        'Tiered by headcount or revenue',
        'Dedicated onboarding team',
        'Email and phone support',
        'Regular check-ins and updates',
      ],
      cta: 'Contact sales',
      highlight: true,
    },
    {
      name: 'Enterprise',
      description: 'Multi-entity deployments',
      features: [
        'Unlimited engines and entities',
        'On-prem or private cloud options',
        'Custom integrations and APIs',
        'Dedicated support team',
        'SSO and advanced security',
        'SLA guarantees',
      ],
      cta: 'Contact sales',
    },
  ];

  return (
    <div className="min-h-screen bg-brand-dark pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Pricing</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Flexible plans designed to scale with your organization—from pilots to enterprise deployments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-slate-900 to-slate-800 border-brand-blue ring-2 ring-brand-blue/20'
                    : 'bg-slate-800/50 border-slate-700'
                }`}
              >
                {plan.highlight && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-brand-blue/20 text-brand-blue text-xs font-semibold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="text-green-400 mr-3 mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/book-demo"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    plan.highlight
                      ? 'bg-brand-blue text-white hover:bg-blue-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-700 text-center">
            <p className="text-lg text-slate-300">
              All plans are customized based on your specific needs and scale.
            </p>
            <p className="text-slate-400 mt-2">
              Contact us for detailed pricing and a tailored proposal.
            </p>
            <Link
              to="/book-demo"
              className="inline-flex items-center mt-6 px-8 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25"
            >
              Schedule a pricing discussion
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
