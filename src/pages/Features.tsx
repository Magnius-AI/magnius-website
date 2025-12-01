import { Link } from 'react-router-dom';
import { Brain, Calendar, FileCheck2, HeartHandshake, LayoutGrid, Sparkles, Target, Users, Zap } from 'lucide-react';

const featureList = [
  { slug: 'donor-management', title: 'Donor Management', description: 'Unified constituent database with engagement scoring.', icon: Users },
  { slug: 'fundraising', title: 'Fundraising & Campaigns', description: 'Track goals, donations, recurring giving, and campaign ROI.', icon: Target },
  { slug: 'events', title: 'Events & Ticketing', description: 'Registration, ticketing, and capacity management in one place.', icon: Calendar },
  { slug: 'grants', title: 'Grants Management', description: 'Full lifecycle tracking from LOI to award with reminders.', icon: FileCheck2 },
  { slug: 'prospects', title: 'Prospect Research', description: 'Moves management for major gifts with AI insights.', icon: HeartHandshake },
  { slug: 'auctions', title: 'Auctions', description: 'Live, silent, online, or hybrid auctions with real-time bidding.', icon: Zap },
  { slug: 'ai-insights', title: 'AI Insights', description: 'Predict churn risk and generate donor communications.', icon: Brain },
  { slug: 'fund-accounting', title: 'Fund Accounting', description: 'Track restricted vs unrestricted funds with confidence.', icon: Sparkles },
  { slug: 'tasks', title: 'Task Management', description: 'Keep your team aligned with smart task management.', icon: LayoutGrid },
];

export default function Features() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold text-brand-indigo uppercase tracking-[0.14em]">Features</p>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Nine modules. One AI-first platform.</h1>
        <p className="text-brand-dark/70 max-w-3xl mx-auto">
          Replace five disconnected tools with a single CRM purpose-built for nonprofits. Explore each module below.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {featureList.map((feature) => (
          <Link key={feature.slug} to={`/features/${feature.slug}`}>
            <div className="p-6 rounded-xl bg-white border border-brand-ice hover:border-brand-indigo hover:shadow-lg transition-all h-full">
              <div className="w-12 h-12 rounded-lg bg-brand-indigo/10 text-brand-indigo flex items-center justify-center mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">{feature.title}</h3>
              <p className="text-brand-dark/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-6xl mx-auto rounded-2xl bg-brand-mist border border-brand-ice p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">See Magnius in action</h2>
          <p className="text-brand-dark/70 mb-8 max-w-3xl mx-auto">
            Start your free 14-day trial or schedule a guided walkthrough with our team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-brand-indigo text-white rounded-lg font-semibold hover:bg-brand-purple transition-colors">
              Start Free Trial
            </button>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-brand-dark rounded-lg font-semibold border border-brand-ice hover:border-brand-indigo transition-colors text-center"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
