import { Link } from 'react-router-dom';
import { Database, Brain, Monitor, ArrowRight } from 'lucide-react';

export default function ProductPage() {
  const sampleQuestions = [
    'What happens to EBITDA if we expand headcount by 15% in sales?',
    'Which market should we enter next based on current strengths?',
    'Where are the organizational bottlenecks slowing execution?',
    'What is the ROI of automating our fulfillment process?',
    'How does a 10% price increase affect churn and revenue?',
    'Which customer segments are most profitable to expand?',
  ];

  return (
    <div className="min-h-screen bg-brand-dark pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            One platform. Many engines. A single source of truth.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Magnius Consulting OS is an AI-powered platform built on top of your company's data. It combines structured knowledge with specialized reasoning engines to deliver strategy, simulations, and execution plans on demand.
          </p>
        </div>
      </section>

      {/* Architecture Layers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Three layers working together
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Database className="text-brand-blue" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Data Layer</h3>
              <p className="text-slate-300 mb-4">
                The foundation that ingests and structures your company's information.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Vector store for documents and knowledge</li>
                <li>• Graph database for org structure and relationships</li>
                <li>• Relational DB for financials and metrics</li>
                <li>• Connectors to ERPs, CRMs, and SaaS tools</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Brain className="text-brand-blue" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Reasoning Layer</h3>
              <p className="text-slate-300 mb-4">
                Where specialized engines run simulations and generate insights.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• LLM-driven orchestration for complex queries</li>
                <li>• Rules-based financial and operational models</li>
                <li>• Graph algorithms for org dynamics</li>
                <li>• Monte Carlo simulations for risk scenarios</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Monitor className="text-brand-blue" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Interface Layer</h3>
              <p className="text-slate-300 mb-4">
                How you interact with the platform and consume outputs.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Interactive dashboards and scenario canvases</li>
                <li>• Natural language copilot for queries</li>
                <li>• Export to PowerPoint, PDF, and Excel</li>
                <li>• API for integration with existing tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Magnius Can Answer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-6">
            Questions Magnius can answer
          </h2>
          <p className="text-lg text-slate-300 text-center max-w-3xl mx-auto mb-12">
            Instead of waiting weeks for a consulting report, ask Magnius directly and get simulated, board-ready answers.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sampleQuestions.map((question, i) => (
              <div
                key={i}
                className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-brand-blue transition-colors"
              >
                <p className="text-slate-300">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 border-y border-brand-blue/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            See how the platform works
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            Explore our engines in detail or see real-world use cases.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/engines"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25"
            >
              Explore engines
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/use-cases"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors border border-slate-700"
            >
              View use cases
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
