import { Shield, Lock, Database, Zap, CheckCircle, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Shield,
      title: 'Complete Data Sovereignty',
      description: 'Your data never leaves your infrastructure. Full control and compliance.',
    },
    {
      icon: Database,
      title: '50-State + Federal Templates',
      description: 'Comprehensive legal template repository covering all jurisdictions.',
    },
    {
      icon: Zap,
      title: 'AI-Powered Research with Citations',
      description: 'Get instant answers with verified source citations and document references.',
    },
    {
      icon: Lock,
      title: 'Zero Internet Dependency',
      description: 'Complete offline operation after setup. No external connections required.',
    },
  ];

  const trustBadges = [
    { label: 'SOC 2 Ready', icon: Shield },
    { label: 'HIPAA Compliant', icon: Lock },
    { label: 'Air-Gap Certified', icon: CheckCircle },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-[#2D1B4E] via-[#3D2861] to-[#2D1B4E] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-[#3D2861]/50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-[#C9A961]/50">
              <Shield className="text-[#C9A961]" size={16} />
              <span className="text-sm font-medium">Enterprise-Grade Security | Air-Gapped & Cloud Options</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Secure AI-Powered Legal Assistant for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A961] to-[#E5D4A6]">
                Modern Law Firms
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Enterprise-grade legal AI that works completely offline. Your data, your infrastructure, your control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-4 bg-gradient-to-r from-[#C9A961] to-[#E5D4A6] text-[#2D1B4E] rounded-lg font-semibold text-lg hover:from-[#E5D4A6] hover:to-[#C9A961] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Request Demo
              </button>
              <button
                onClick={() => onNavigate('deployment')}
                className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
              >
                View Deployment Options
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center space-x-2 text-sm bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                  <badge.icon className="text-[#C9A961]" size={18} />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dual Deployment Model
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the deployment option that fits your firm's security and operational requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#2D1B4E] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#2D1B4E] text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                Maximum Security
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">On-Premise Air-Gapped</h3>
                <p className="text-gray-600 mb-6">
                  Complete offline operation for maximum security. Zero data egress, perfect for high-security environments.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Complete offline operation',
                    'No internet required after setup',
                    'Maximum data control',
                    'Local LLM inference',
                    'Perfect for government & compliance-heavy practices',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('deployment')}
                  className="w-full py-3 bg-[#2D1B4E] text-white rounded-lg font-semibold hover:bg-[#3D2861] transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#C9A961] to-[#E5D4A6] text-[#2D1B4E] px-4 py-1 text-sm font-semibold rounded-bl-lg">
                Managed Service
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud/Hybrid Edition</h3>
                <p className="text-gray-600 mb-6">
                  Managed cloud infrastructure with automatic updates. Scalable resources for growing practices.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Automatic updates and maintenance',
                    'Scalable cloud resources',
                    'Distributed team support',
                    'Hybrid option available',
                    'Perfect for mid-size & growing firms',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('deployment')}
                  className="w-full py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Value Propositions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for secure, intelligent legal assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E5D4A6]/30 to-[#C9A961]/20 rounded-2xl mb-4 group-hover:from-[#2D1B4E] group-hover:to-[#3D2861] transition-all duration-300">
                  <feature.icon className="text-[#2D1B4E] group-hover:text-[#C9A961] transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2D1B4E] to-[#3D2861] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#C9A961] to-[#E5D4A6]">
                50+
              </div>
              <div className="text-xl text-gray-300">State & Federal Jurisdictions</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#C9A961] to-[#E5D4A6]">
                100%
              </div>
              <div className="text-xl text-gray-300">Data Sovereignty</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#C9A961] to-[#E5D4A6]">
                Zero
              </div>
              <div className="text-xl text-gray-300">Internet Dependency</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join leading law firms that trust Relius AI for secure, intelligent legal assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-4 bg-[#2D1B4E] text-white rounded-lg font-semibold text-lg hover:bg-[#3D2861] transition-colors shadow-lg"
            >
              Request Enterprise Demo
            </button>
            <button
              onClick={() => onNavigate('resources')}
              className="px-8 py-4 bg-white text-[#2D1B4E] rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg border-2 border-[#2D1B4E]"
            >
              Download Security Whitepaper
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
