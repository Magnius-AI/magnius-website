import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CTASection from '../components/CTASection';

const featureContent: Record<
  string,
  {
    title: string;
    subheadline: string;
    description: string;
    capabilities: string[];
  }
> = {
  'grants': {
    title: 'Grants Management',
    subheadline: 'Stop tracking grants in spreadsheets.',
    description: 'From prospecting to award, manage your entire grant lifecycle in one place.',
    capabilities: [
      'Track LOI deadlines and submissions',
      'Monitor application status across funders',
      'Store required documents per grant',
      'Set reporting reminders',
      'Analyze grant success rates',
    ],
  },
  'donor-management': {
    title: 'Donor Management',
    subheadline: 'Unified constituent records with engagement scoring.',
    description: 'See every interaction, gift, and note in one place so teams stay aligned.',
    capabilities: [
      '360° donor profiles',
      'Household and organization records',
      'Engagement scoring',
      'Communication timeline',
      'Smart duplicate management',
    ],
  },
  'fundraising': {
    title: 'Fundraising & Campaigns',
    subheadline: 'Track goals, donations, and recurring giving.',
    description: 'Stay on top of pledges, recurring gifts, and campaign performance with clear dashboards.',
    capabilities: [
      'Campaign goals and pacing',
      'One-time and recurring gifts',
      'Soft credits and tributes',
      'Goal tracking and alerts',
      'Payment integrations',
    ],
  },
  'events': {
    title: 'Events & Ticketing',
    subheadline: 'Registration, ticketing, and capacity management.',
    description: 'Run in-person or virtual events with branded registration pages and capacity caps.',
    capabilities: ['Custom ticket types', 'Table and seating management', 'Promo codes and discounts', 'Check-in tools', 'Post-event engagement tracking'],
  },
  'prospects': {
    title: 'Prospect Research',
    subheadline: 'Moves management with AI insights.',
    description: 'Build and advance major gift pipelines with recommended next steps.',
    capabilities: [
      'Pipeline stages and tasks',
      'Capacity and affinity scoring',
      'Board and volunteer visibility',
      'AI-recommended asks',
      'Portfolio reporting',
    ],
  },
  'auctions': {
    title: 'Auctions',
    subheadline: 'Live, silent, online, or hybrid auctions.',
    description: 'Run fundraising auctions with mobile bidding and real-time leaderboards.',
    capabilities: ['Item catalog and images', 'Bid tracking and notifications', 'Paddle raise support', 'Checkout and receipts', 'Sponsor visibility'],
  },
  'ai-insights': {
    title: 'AI Insights',
    subheadline: 'AI-first, not AI-washed.',
    description: 'Predict donor behavior, recommend asks, and generate personalized outreach in seconds.',
    capabilities: [
      'Churn risk predictions',
      'Recommended ask amounts',
      'Natural language data queries',
      'Content generation for appeals and thanks',
      'Sentiment analysis on communications',
    ],
  },
  'fund-accounting': {
    title: 'Fund Accounting',
    subheadline: 'Audit-friendly accounting for nonprofits.',
    description: 'Track restricted vs unrestricted funds and prepare donor-ready financials.',
    capabilities: ['Fund and program codes', 'Grant-specific tagging', 'Exportable reports', 'Budget vs actuals', 'Audit trails'],
  },
  'tasks': {
    title: 'Task Management',
    subheadline: 'Keep your team aligned.',
    description: 'Assign tasks, track deadlines, and connect activity back to donors and campaigns.',
    capabilities: ['Task templates', 'Automated reminders', 'Owner and due date tracking', 'Task reporting', 'Collaboration notes'],
  },
};

export default function FeatureDetail() {
  const { slug } = useParams();
  const feature = slug ? featureContent[slug] : undefined;

  if (!feature) {
    return (
      <div className="bg-brand-dark text-brand-ice min-h-screen pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-3xl font-bold text-white">Feature not found</h1>
          <Link to="/features" className="text-brand-sky font-semibold inline-flex items-center gap-2">
            <ArrowLeft size={18} /> Back to all features
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-dark text-brand-ice min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <Link to="/features" className="text-brand-sky font-semibold inline-flex items-center gap-2 mb-6">
        <ArrowLeft size={18} /> Back to all features
      </Link>

      <div className="max-w-5xl mx-auto space-y-10">
        <div className="space-y-4">
          <p className="text-brand-sky font-semibold text-sm uppercase tracking-wide">{feature.title}</p>
          <h1 className="text-4xl font-bold text-white">{feature.subheadline}</h1>
          <p className="text-brand-ice/80 text-lg">{feature.description}</p>
        </div>

        <div className="rounded-2xl bg-brand-steel/60 border border-brand-blue/25 p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Key capabilities</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-brand-ice/80">
            {feature.capabilities.map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-brand-sky mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-brand-navy/50 border border-brand-blue/20 p-6">
          <div className="aspect-video rounded-lg bg-brand-steel/60 border border-brand-blue/20 flex items-center justify-center text-brand-ice/60">
            Feature screenshot placeholder
          </div>
        </div>
      </div>

      <CTASection
        title="Try it free"
        subtitle="Start a 14-day free trial and explore this module alongside eight others."
        primaryAction={
          <button className="px-8 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-sky transition-colors">
            Start Free Trial
          </button>
        }
        secondaryAction={
          <Link
            to="/pricing"
            className="px-8 py-3 bg-brand-steel text-white rounded-lg font-semibold border border-brand-blue/30 hover:bg-brand-steel/80"
          >
            View Pricing
          </Link>
        }
      />
    </div>
  );
}
