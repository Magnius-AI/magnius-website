import { ArrowRight, LineChart, Mails, Network, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Network,
    title: 'Smart Donor Insights',
    description: 'AI that predicts which donors are ready to give again.',
  },
  {
    icon: Mails,
    title: 'Automated Stewardship',
    description: 'Personalized email sequences that thank donors automatically.',
  },
  {
    icon: LineChart,
    title: 'Impact Analytics',
    description: 'Real-time dashboards showing how funds translate to impact.',
  },
];

const logos = ['World Wildlife Fund', 'Red Cross', 'charity: water', 'Habitat for Humanity', 'UNICEF'];

export default function Home() {
  return (
    <div className="bg-white">
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8" id="top">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-[#0D3FA5] uppercase tracking-[0.14em]">AI CRM for Nonprofits</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              The Operating System for Modern Nonprofits.
            </h1>
            <p className="text-lg text-[#0F172A]/80 leading-relaxed">
              Magnius unites donor data, fundraising automation, and impact reporting in one intelligent platform. Stop managing
              spreadsheets and start scaling your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-[#0D3FA5] hover:bg-[#4F7EDD] text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Start Free Trial
              </button>
              <button className="px-6 py-3 border border-[#0D3FA5] text-[#0D3FA5] font-medium rounded-lg hover:bg-[#F8FAFC] transition-colors">
                View Demo
              </button>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-[#0F172A]/70">
              <span className="px-3 py-2 rounded-full border bg-[#F8FAFC]">No credit card required</span>
              <span className="px-3 py-2 rounded-full border bg-[#F8FAFC]">14-day free trial</span>
              <span className="px-3 py-2 rounded-full border bg-[#F8FAFC]">Unlimited users</span>
            </div>
          </div>

          <div className="bg-[#F8FAFC] border rounded-2xl p-6 space-y-4">
            <div className="rounded-xl bg-white border p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#0D3FA5]">Donor Retention</p>
                  <p className="text-xs text-[#0F172A]/60">Rolling 12 months</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-[#0F172A]">92%</p>
                  <p className="text-xs text-[#0F172A]/60">+6% vs last year</p>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-2 items-end h-32">
                {[58, 66, 72, 80, 86, 92].map((value) => (
                  <div key={value} className="flex flex-col items-center gap-1">
                    <div className="w-full rounded-full bg-[#E5E7EB] h-2" />
                    <div className="w-full bg-[#0D3FA5] rounded-full" style={{ height: `${value}%` }} />
                    <span className="text-[10px] text-[#0F172A]/60">{value}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-white border p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#0D3FA5]">Suggested Outreach</p>
                  <p className="text-xs text-[#0F172A]/60">AI-powered recommendations</p>
                </div>
                <Sparkles className="h-5 w-5 text-[#0D3FA5]" />
              </div>
              <div className="grid gap-3 text-sm text-[#0F172A]">
                <div className="flex items-start gap-3 border rounded-lg p-3 bg-[#F8FAFC]">
                  <div className="h-9 w-9 rounded-full bg-[#0D3FA5]/10 text-[#0D3FA5] flex items-center justify-center font-semibold">
                    L
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Lena Ortiz — Major donor</p>
                    <p className="text-[#0F172A]/70">Send gratitude email + update on scholarship impact.</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#0D3FA5]" />
                </div>
                <div className="flex items-start gap-3 border rounded-lg p-3 bg-[#F8FAFC]">
                  <div className="h-9 w-9 rounded-full bg-[#0D3FA5]/10 text-[#0D3FA5] flex items-center justify-center font-semibold">
                    R
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Recurring givers</p>
                    <p className="text-[#0F172A]/70">Upsell to annual pledge before renewal window.</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#0D3FA5]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]" id="features">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Purpose-built for nonprofit growth</h2>
          <p className="text-lg text-[#0F172A]/80 max-w-3xl mx-auto">
            Replace disconnected tools with one intelligent platform designed to steward donors, automate fundraising, and
            measure your impact.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white border rounded-xl p-6 space-y-4 h-full">
              <div className="h-12 w-12 rounded-full bg-[#0D3FA5]/10 text-[#0D3FA5] flex items-center justify-center">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-[#0F172A]/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-[#0D3FA5] uppercase tracking-[0.12em]">Social Proof</p>
            <h3 className="text-2xl md:text-3xl font-bold">Trusted by forward-thinking nonprofits</h3>
            <p className="text-[#0F172A]/70 max-w-2xl">
              Teams modernizing their fundraising and stewardship choose Magnius to keep donors engaged and showcase impact with
              confidence.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {logos.map((logo) => (
              <div
                key={logo}
                className="border rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold text-[#0F172A]/60 tracking-wide uppercase"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
