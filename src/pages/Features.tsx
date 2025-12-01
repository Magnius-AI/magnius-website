import { Link } from 'react-router-dom';
import { Brain, Calendar, FileCheck2, HeartHandshake, LayoutGrid, Sparkles, Target, Users, Zap } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';

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
    <div className="bg-brand-dark text-brand-ice pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nine modules. One AI-first platform.</h1>
        <p className="text-brand-ice/80 max-w-3xl mx-auto">
          Replace five disconnected tools with a single CRM purpose-built for nonprofits. Explore each module below.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {featureList.map((feature) => (
          <Link key={feature.slug} to={`/features/${feature.slug}`}>
            <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
          </Link>
        ))}
      </div>

      <CTASection
        title="See Magnius in action"
        subtitle="Start your free 14-day trial or schedule a guided walkthrough with our team."
        primaryAction={
          <button className="px-8 py-3 bg-brand-indigo text-white rounded-lg font-semibold hover:bg-brand-purple transition-colors">
            Start Free Trial
          </button>
        }
        secondaryAction={
          <Link
            to="/contact"
            className="px-8 py-3 bg-brand-navy text-white rounded-lg font-semibold border border-brand-indigo/30 hover:bg-brand-navy/80 transition-colors text-center"
          >
            Talk to Sales
          </Link>
        }
      />
    </div>
  );
}
