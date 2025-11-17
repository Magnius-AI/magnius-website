import { Link } from 'react-router-dom';
import {
  Target,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Network,
  Settings,
  FileText,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-hex-grid opacity-30" style={{ backgroundSize: '40px 40px' }} />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Replace consulting slide decks with a living company OS.
              </h1>

              <p className="text-xl text-brand-ice/80 leading-relaxed">
                Magnius Consulting OS builds a digital twin of your organization, runs what-if simulations on strategy, org design, and operations, and gives you board-ready answers in minutes instead of months.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-demo"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-sky transition-colors shadow-lg shadow-brand-blue/25"
                >
                  Book a strategy demo
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <a
                  href="#sample-outputs"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-steel text-white rounded-lg font-semibold hover:bg-brand-steel transition-colors border border-brand-blue/30"
                >
                  See sample outputs
                </a>
              </div>

              <p className="text-sm text-brand-ice/70 pt-4">
                Built for CEOs, strategy teams, internal consulting, and PE operators.
              </p>
            </div>

            {/* Right: Dashboard Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-navy to-brand-steel rounded-2xl border border-brand-blue/30 p-6 shadow-2xl shadow-brand-blue/15">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-32 bg-brand-steel rounded" />
                    <div className="h-4 w-20 bg-brand-steel rounded" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-brand-steel rounded-lg p-4 border border-brand-blue/30">
                        <div className="h-3 w-16 bg-brand-ice/30 rounded mb-2" />
                        <div className="h-6 w-20 bg-brand-blue/20 rounded" />
                      </div>
                    ))}
                  </div>
                  <div className="bg-brand-steel rounded-lg p-4 border border-brand-blue/30 h-40">
                    <div className="h-3 w-24 bg-brand-ice/30 rounded mb-4" />
                    <div className="flex items-end justify-between h-24">
                      {[60, 80, 65, 90, 75, 85].map((height, i) => (
                        <div key={i} className="w-8 bg-brand-blue/30 rounded-t" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-navy/60">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Consultants give you static slides. Your business is not static.
          </h2>

          <p className="text-lg text-brand-ice/80 text-center max-w-4xl mx-auto mb-12">
            Most consulting projects work like this: a few interviews, a spreadsheet, and a slide deck that is out of date the moment it is presented. There is no living model of your company, no way to continuously simulate decisions, and no memory of past projects. Magnius replaces episodic, one-off engagements with a persistent operating system that actually understands how your company works.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: XCircle, title: 'Slow & expensive', desc: '12–16 week projects with seven-figure price tags.' },
              { icon: XCircle, title: 'Static outputs', desc: 'PowerPoints no one updates after the engagement.' },
              { icon: XCircle, title: 'Shallow understanding', desc: 'Limited exposure to real systems and data.' },
              { icon: XCircle, title: 'No continuity', desc: 'Every new project starts from zero again.' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-steel/70 rounded-xl p-6 border border-red-900/20">
                <item.icon className="text-red-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-brand-ice/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              A Consulting OS: one brain for your entire organization.
            </h2>
            <p className="text-lg text-brand-ice/80 max-w-3xl mx-auto">
              Magnius connects to your existing data, builds a structured company brain, and layers specialized engines on top of it. These engines generate strategy, simulate financials, model org dynamics, and translate insights into execution plans and narratives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Model',
                desc: 'Import your financials, org structure, and key processes into a unified digital twin.',
              },
              {
                icon: TrendingUp,
                title: 'Simulate',
                desc: 'Run scenarios on pricing, headcount, market entry, org changes, and more.',
              },
              {
                icon: Zap,
                title: 'Execute',
                desc: 'Turn decisions into OKRs, roadmaps, and dashboards tied to live data.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-brand-navy to-brand-steel rounded-xl p-8 border border-brand-blue/30 hover:border-brand-blue transition-colors">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="text-brand-blue" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-brand-ice/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engines Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-navy/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Engines that work like an internal McKinsey, on demand.
            </h2>
            <p className="text-lg text-brand-ice/80 max-w-3xl mx-auto">
              Magnius is built as a stack of coordinated engines that share the same underlying company model.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Strategy Engine',
                desc: 'Generates competitive analysis, growth options, and 3–5 year strategy scenarios tailored to your markets and constraints.',
              },
              {
                title: 'Financial Simulation Engine',
                desc: 'Builds a dynamic model of revenue drivers, costs, headcount, and CapEx/OpEx, so you can see the impact of decisions before you make them.',
              },
              {
                title: 'Organizational Dynamics Engine',
                desc: 'Maps reporting lines, influence networks, and bottlenecks to highlight where execution will stall and where to intervene.',
              },
              {
                title: 'Operational Engine',
                desc: 'Simulates processes, throughput, and SLAs, and proposes optimization moves using lean and automation patterns.',
              },
              {
                title: 'Competitive Intelligence Engine',
                desc: "Monitors competitors' moves, hiring, pricing, and product updates to feed your strategy engine with up-to-date context.",
              },
              {
                title: 'Stakeholder & Political Engine',
                desc: 'Identifies key players, resistance points, and influence paths to support realistic change plans.',
              },
              {
                title: 'Execution Engine',
                desc: 'Translates decisions into 30-60-90 day plans, OKRs, roadmaps, and KPI scorecards integrated with tools like Jira and Salesforce.',
              },
              {
                title: 'Narrative & Communication Engine',
                desc: 'Produces executive memos, board decks, and strategy narratives grounded directly in the live company model.',
              },
            ].map((engine, i) => (
              <div key={i} className="bg-brand-steel/70 rounded-xl p-6 border border-brand-blue/30 hover:border-brand-blue transition-colors">
                <h3 className="text-lg font-semibold text-white mb-3">{engine.title}</h3>
                <p className="text-sm text-brand-ice/70">{engine.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/engines"
              className="inline-flex items-center px-6 py-3 bg-brand-steel text-white rounded-lg font-medium hover:bg-brand-steel transition-colors border border-brand-blue/30"
            >
              Learn more about our engines
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            How Magnius fits into your organization.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Connect & Ingest',
                desc: 'Connect Magnius to your financials, org charts, key process documentation, and SaaS tools. The OS builds a unified, structured model of your company.',
              },
              {
                step: '2',
                title: 'Configure Engines',
                desc: 'Select which engines to activate first (for example: Strategy + Financial Simulation + Narrative). Define constraints, goals, and time horizons.',
              },
              {
                step: '3',
                title: 'Run Scenarios',
                desc: 'Ask questions like "What if we enter Market X next year?" or "What happens if we cut 10% of overhead?" and get simulated outcomes and recommended plans.',
              },
              {
                step: '4',
                title: 'Execute & Learn',
                desc: 'Push plans into your existing systems, track execution, and let Magnius continuously learn from new data and outcomes.',
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-brand-navy to-brand-steel rounded-xl p-8 border border-brand-blue/30">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6 text-brand-blue font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-brand-ice/80">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-brand-blue/30" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/product"
              className="inline-flex items-center px-6 py-3 bg-brand-steel text-white rounded-lg font-medium hover:bg-brand-steel transition-colors border border-brand-blue/30"
            >
              View a sample scenario walkthrough
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-navy/60">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Built for leaders who own outcomes, not just presentations.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: 'CEOs & Founders',
                desc: 'Replace gut-feel debates with clear simulations and structured trade-offs.',
              },
              {
                icon: Target,
                title: 'Strategy & Corporate Development',
                desc: 'Run M&A scenarios, market entry options, and portfolio reshuffles with a consistent model.',
              },
              {
                icon: TrendingUp,
                title: 'Private Equity & Operators',
                desc: 'Stand up a digital twin of portfolio companies and standardize how you diagnose and execute value-creation plans.',
              },
              {
                icon: Settings,
                title: 'Internal Consulting & Transformation Offices',
                desc: 'Turn your team into a leverage point for the entire company with reusable models and engines, instead of bespoke slide work.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-brand-navy to-brand-steel rounded-xl p-8 border border-brand-blue/30 hover:border-brand-blue transition-colors">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="text-brand-blue" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-brand-ice/80">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/use-cases"
              className="inline-flex items-center text-brand-sky hover:text-brand-blue font-medium"
            >
              Explore use cases
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Why it beats traditional consulting
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Consulting Firms */}
            <div className="bg-brand-steel/30 rounded-xl p-8 border border-red-900/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Consulting Firms</h3>
              <ul className="space-y-4">
                {[
                  'One-off projects',
                  'Limited access to real systems and data',
                  'Static slide decks',
                  'Knowledge walks out the door',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <XCircle className="text-red-400 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-brand-ice/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Magnius Consulting OS */}
            <div className="bg-gradient-to-br from-brand-navy to-brand-steel rounded-xl p-8 border border-brand-blue">
              <h3 className="text-2xl font-semibold text-white mb-6">Magnius Consulting OS</h3>
              <ul className="space-y-4">
                {[
                  'Persistent digital twin of your company',
                  'Directly connected to your data and tools',
                  'Continuous simulations and updated recommendations',
                  'Knowledge compounds over time',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="text-green-400 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-brand-ice/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="sample-outputs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-navy/50 via-brand-steel/50 to-brand-blue/30 border-y border-brand-blue/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start building your company's OS.
          </h2>
          <p className="text-xl text-brand-ice/80 mb-10">
            See how Magnius can replace your next consulting project with a living, evolving model of your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-sky transition-colors shadow-lg shadow-brand-blue/25"
            >
              Book a live demo
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-steel text-white rounded-lg font-semibold hover:bg-brand-steel transition-colors border border-brand-blue/30"
            >
              Request a pilot for one business unit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
