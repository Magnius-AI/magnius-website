import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Magnius</h1>
          </div>

          {/* Mission */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Magnius exists</h2>
            <div className="space-y-4 text-lg text-slate-300">
              <p>
                We started Magnius because we were frustrated with the episodic, slide-driven nature of traditional
                consulting. Companies spend millions on strategy projects that produce beautiful PowerPoints—but no
                living model of their business.
              </p>
              <p>
                Every new project starts from scratch. There's no memory, no continuity, no way to simulate decisions
                before making them. The consultants leave, and the knowledge walks out the door.
              </p>
              <p>
                We believe there's a better way: a persistent operating system that actually understands how your
                company works, that evolves with your business, and that gives you board-ready answers in minutes
                instead of months.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="mb-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6">Vision</h2>
            <p className="text-lg text-slate-300">
              Every serious company will run on an OS like this within 10 years. Just as every company now has a CRM
              for customers and an ERP for operations, they will have a Consulting OS for strategy, simulations, and
              decision-making.
            </p>
          </div>

          {/* Founding Story */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Founding story</h2>
            <div className="space-y-4 text-lg text-slate-300">
              <p>
                Magnius was founded by a team of former management consultants, data scientists, and AI engineers who
                spent years building analytical systems for Fortune 500 companies and PE firms.
              </p>
              <p>
                We saw the same pattern everywhere: brilliant people doing excellent work, but trapped in a model that
                produces static outputs and doesn't compound knowledge over time. We wanted to build something more
                rigorous, more persistent, and more powerful.
              </p>
              <p>
                Magnius is the consulting firm we wish we had worked at—and the tool we wish we'd had access to when
                making critical business decisions.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8 border-t border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">Want to learn more?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Book a demo to see how Magnius can work for your organization.
            </p>
            <Link
              to="/book-demo"
              className="inline-flex items-center px-8 py-4 bg-brand-blue text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25"
            >
              Book a demo
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
