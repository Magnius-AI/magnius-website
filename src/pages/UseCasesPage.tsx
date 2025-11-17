import { Link } from 'react-router-dom';
import { Target, TrendingUp, Users, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

export default function UseCasesPage() {
  const useCases = [
    {
      icon: Target,
      title: 'Replace traditional strategy consulting',
      context:
        'Your company typically hires a top-tier consulting firm for major strategic decisions—market entry, M&A, portfolio reshuffles. Each engagement costs $500K-$2M, takes 12-16 weeks, and produces a static slide deck that becomes outdated within months.',
      solution:
        'Magnius builds a persistent digital twin of your company that continuously ingests data and updates its models. Instead of episodic projects, you have an always-on consulting OS. Run unlimited scenarios, test strategic options in real-time, and generate board-ready outputs in minutes.',
      success: [
        '80% reduction in consulting spend',
        'Strategic decisions made in days instead of quarters',
        'Living models that evolve with your business',
        'Complete audit trail of all scenario analyses',
      ],
    },
    {
      icon: TrendingUp,
      title: 'PE portfolio OS',
      context:
        'Private equity firms manage portfolios of 10-50+ companies, each needing value-creation plans, operational improvements, and regular performance monitoring. Traditional approaches rely on spreadsheets, PowerPoints, and inconsistent methodologies across portfolio companies.',
      solution:
        'Deploy Magnius across your entire portfolio to create standardized digital twins. Run consistent value-creation playbooks, compare performance across companies, identify operational patterns, and simulate exit scenarios. Each portfolio company becomes a living, queryable model.',
      success: [
        'Standardized value-creation methodology across portfolio',
        '3-6 month faster time-to-insights for new acquisitions',
        'Real-time portfolio performance monitoring',
        'Reusable models and playbooks that compound knowledge',
      ],
    },
    {
      icon: Users,
      title: 'Internal consulting / transformation OS',
      context:
        'Large enterprises have internal strategy or transformation teams that support business units with org design, process optimization, and strategic planning. These teams often reinvent the wheel for each project, lack continuity, and struggle to scale their impact.',
      solution:
        'Turn your internal consulting team into a high-leverage function by giving them Magnius. Build reusable models of each business unit, create a library of engines and templates, and deliver faster, more rigorous analyses. Your team becomes a multiplier rather than a bottleneck.',
      success: [
        '5-10x increase in projects delivered per consultant',
        'Consistent methodology and quality across all engagements',
        'Knowledge base that grows with each project',
        'Business units can self-serve common analyses',
      ],
    },
    {
      icon: Building2,
      title: 'M&A due diligence and integration planning',
      context:
        'Evaluating acquisition targets and planning post-merger integration is time-sensitive and high-stakes. Teams scramble to build financial models, assess cultural fit, map org structures, and identify synergies—often with incomplete data and tight deadlines.',
      solution:
        'Use Magnius to rapidly build a digital twin of the target company, simulate integration scenarios, model synergy opportunities, and identify organizational conflicts. Run "what-if" analyses on different deal structures and integration paths before committing.',
      success: [
        '50% faster due diligence with deeper analysis',
        'Clear synergy models tied to specific actions',
        'Integration roadmaps generated from live models',
        'Risk scenarios quantified before closing',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-brand-dark pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Use Cases
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              How organizations use Magnius to replace consulting engagements with a persistent operating system.
            </p>
          </div>

          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="text-brand-blue" size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">{useCase.title}</h2>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-blue mb-3">The context</h3>
                    <p className="text-slate-300">{useCase.context}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-brand-blue mb-3">
                      How Magnius addresses it
                    </h3>
                    <p className="text-slate-300">{useCase.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-brand-blue mb-3">
                      What success looks like
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {useCase.success.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="text-green-400 mr-3 mt-0.5 flex-shrink-0" size={20} />
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25"
            >
              Discuss your use case
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
