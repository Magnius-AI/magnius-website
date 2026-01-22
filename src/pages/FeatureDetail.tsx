import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

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
      <div className="bg-white min-h-screen pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-3xl font-bold text-brand-dark">Feature not found</h1>
          <Link to="/features" className="text-brand-indigo font-semibold inline-flex items-center gap-2 hover:text-brand-purple transition-colors">
            <ArrowLeft size={18} /> Back to all features
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/features" className="text-brand-indigo font-semibold inline-flex items-center gap-2 mb-6 hover:text-brand-purple transition-colors">
          <ArrowLeft size={18} /> Back to all features
        </Link>

        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-brand-indigo uppercase tracking-[0.14em]">{feature.title}</p>
            <h1 className="text-4xl font-bold text-brand-dark">{feature.subheadline}</h1>
            <p className="text-brand-dark/70 text-lg">{feature.description}</p>
          </div>

          <div className="rounded-2xl bg-brand-mist border border-brand-ice p-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-6">Key capabilities</h2>
            <ul className="grid md:grid-cols-2 gap-4 text-brand-dark/80">
              {feature.capabilities.map((item) => (
                <li key={item} className="flex items-start">
                  <Check size={18} className="text-brand-indigo mr-3 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-brand-mist border border-brand-ice p-6">
            <div className="aspect-video rounded-lg bg-white border border-brand-ice flex items-center justify-center text-brand-dark/40">
              Feature screenshot placeholder
            </div>
          </div>
        </div>

        <section className="py-16 mt-8">
          <div className="max-w-6xl mx-auto rounded-2xl bg-brand-indigo/5 border border-brand-indigo/20 p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Try it free</h2>
            <p className="text-brand-dark/70 mb-8 max-w-3xl mx-auto">
              Start a 14-day free trial and explore this module alongside eight others.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/signup"
                className="px-8 py-3 bg-brand-indigo text-white rounded-lg font-semibold hover:bg-brand-purple transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-3 bg-white text-brand-dark rounded-lg font-semibold border border-brand-ice hover:border-brand-indigo transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
