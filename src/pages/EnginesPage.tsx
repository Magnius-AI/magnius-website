import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Engine {
  name: string;
  questions: string[];
  inputs: string;
  outputs: string;
}

const engines: Engine[] = [
  {
    name: 'Strategy Engine',
    questions: [
      'What are the top 3 growth opportunities for the next 3 years?',
      'Which markets should we prioritize based on our capabilities?',
      'How does our positioning compare to competitors X, Y, and Z?',
    ],
    inputs: 'Company financials, market research, competitor data, internal capabilities assessment, strategic goals and constraints.',
    outputs: 'Multi-year strategy scenarios, competitive positioning maps, growth option analysis with expected ROI, risk assessments, and recommended strategic moves.',
  },
  {
    name: 'Financial Simulation Engine',
    questions: [
      'What happens to cash flow if we expand headcount by 20% next quarter?',
      'How sensitive is EBITDA to a 5% change in pricing?',
      'What are the financial implications of entering a new market?',
    ],
    inputs: 'P&L statements, balance sheets, cash flow data, revenue drivers, cost structures, headcount plans, CapEx/OpEx forecasts.',
    outputs: 'Dynamic financial models, scenario comparisons, sensitivity analyses, KPI forecasts, and waterfall charts showing impact breakdowns.',
  },
  {
    name: 'Organizational Dynamics Engine',
    questions: [
      'Where are the bottlenecks in our current org structure?',
      'Who are the key influencers for this transformation initiative?',
      'What happens if we restructure reporting lines in the sales org?',
    ],
    inputs: 'Org charts, reporting relationships, communication patterns, project data, employee feedback, and performance metrics.',
    outputs: 'Influence network maps, bottleneck identification, change impact assessments, recommended org restructures, and stakeholder engagement plans.',
  },
  {
    name: 'Operational Engine',
    questions: [
      'How can we reduce cycle time in our fulfillment process?',
      'What is the ROI of automating our customer onboarding workflow?',
      'Where are the highest-impact process improvements?',
    ],
    inputs: 'Process documentation, throughput data, cycle times, resource allocation, SLA metrics, and operational constraints.',
    outputs: 'Process maps, bottleneck analysis, optimization recommendations, automation ROI calculations, and implementation roadmaps.',
  },
  {
    name: 'Competitive Intelligence Engine',
    questions: [
      'What strategic moves have our competitors made in the past 6 months?',
      'How are competitor pricing strategies evolving?',
      'Where are competitors investing in talent and capabilities?',
    ],
    inputs: 'Competitor websites, job postings, product announcements, pricing data, news articles, and social media activity.',
    outputs: 'Competitive move timelines, pricing trend analyses, capability gap assessments, and strategic threat/opportunity briefs.',
  },
  {
    name: 'Stakeholder & Political Engine',
    questions: [
      'Who needs to be involved in this decision for it to succeed?',
      'What are the likely resistance points for this initiative?',
      'How should we sequence stakeholder engagement?',
    ],
    inputs: 'Org structure, past project outcomes, stakeholder roles, influence networks, and change history.',
    outputs: 'Stakeholder maps, influence paths, resistance analysis, engagement strategies, and political risk assessments.',
  },
  {
    name: 'Execution Engine',
    questions: [
      'What are the key milestones for this strategic initiative?',
      'How should we structure OKRs for the next quarter?',
      'What dependencies exist across our current roadmap?',
    ],
    inputs: 'Strategic decisions, project plans, resource constraints, existing OKRs, and tool integrations (Jira, Asana, Salesforce).',
    outputs: '30-60-90 day plans, OKR frameworks, dependency maps, KPI scorecards, and automated updates to project management tools.',
  },
  {
    name: 'Narrative & Communication Engine',
    questions: [
      'Generate an executive memo summarizing this scenario analysis.',
      'Create a board deck for our market entry strategy.',
      'Draft a company-wide email announcing the org restructure.',
    ],
    inputs: 'Outputs from other engines, company context, audience profiles, communication goals, and brand voice guidelines.',
    outputs: 'Executive memos, board presentations, strategy narratives, internal communications, and stakeholder briefings—all grounded in live data.',
  },
];

export default function EnginesPage() {
  const [openEngine, setOpenEngine] = useState<number | null>(0);

  const toggleEngine = (index: number) => {
    setOpenEngine(openEngine === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-brand-dark pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Engines
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Each engine is a specialized reasoning system that operates on your company's data model. Together, they form a comprehensive consulting operating system.
            </p>
          </div>

          <div className="space-y-4">
            {engines.map((engine, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleEngine(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                >
                  <h3 className="text-2xl font-semibold text-white">{engine.name}</h3>
                  {openEngine === index ? (
                    <ChevronUp className="text-brand-blue flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-slate-400 flex-shrink-0" size={24} />
                  )}
                </button>

                {openEngine === index && (
                  <div className="px-8 pb-8 space-y-6 border-t border-slate-700 pt-6">
                    <div>
                      <h4 className="text-lg font-semibold text-brand-blue mb-3">
                        Questions it answers
                      </h4>
                      <ul className="space-y-2">
                        {engine.questions.map((question, i) => (
                          <li key={i} className="text-slate-300 pl-4 border-l-2 border-slate-700">
                            {question}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-brand-blue mb-3">
                        Inputs it uses
                      </h4>
                      <p className="text-slate-300">{engine.inputs}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-brand-blue mb-3">
                        Outputs it generates
                      </h4>
                      <p className="text-slate-300">{engine.outputs}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
