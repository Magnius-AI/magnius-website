import { Server, Cloud, CheckCircle, ArrowRight } from 'lucide-react';

export default function DeploymentPage() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Deploy Your Way: On-Premise or Cloud</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Choose the deployment model that matches your security and operational requirements
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-900 rounded-2xl p-8 shadow-xl">
              <div className="bg-white text-gray-900 px-4 py-1 text-sm font-bold rounded-full inline-block mb-4 border-2 border-gray-900">
                Maximum Security
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <Server className="text-gray-900" size={32} />
                <h2 className="text-3xl font-bold text-gray-900">On-Premise Air-Gapped</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">Complete Data Sovereignty</p>

              <div className="space-y-3 mb-6">
                {[
                  '100% offline operation',
                  'Zero internet dependency after setup',
                  'Complete data control',
                  'No subscription fees',
                  'Perpetual licensing available',
                  'No data egress risk'
                ].map(item => (
                  <div key={item} className="flex items-start space-x-2">
                    <CheckCircle className="text-[#10B981] flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Ideal For:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Government legal departments</li>
                  <li>• High-security law firms</li>
                  <li>• Compliance-heavy practices</li>
                  <li>• Firms handling classified information</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Technical Requirements:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• OS: Windows 10/11, macOS 11+, Ubuntu 20.04+</li>
                  <li>• CPU: 8-core (16 recommended)</li>
                  <li>• RAM: 32GB min (64GB recommended)</li>
                  <li>• Storage: 500GB SSD minimum</li>
                  <li>• GPU: NVIDIA RTX 3060+ (optional)</li>
                </ul>
              </div>

              <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                <span>Request Air-Gap Quote</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-xl">
              <div className="bg-white text-gray-900 px-4 py-1 text-sm font-bold rounded-full inline-block mb-4 border-2 border-gray-900">
                Managed Service
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <Cloud className="text-gray-900" size={32} />
                <h2 className="text-3xl font-bold text-gray-900">Cloud/Hybrid Edition</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">Scalable & Maintained</p>

              <div className="space-y-3 mb-6">
                {[
                  'Zero infrastructure management',
                  'Automatic updates & patches',
                  'Scalable resources',
                  'Geographic redundancy',
                  '99.9% uptime SLA',
                  'Hybrid option available'
                ].map(item => (
                  <div key={item} className="flex items-start space-x-2">
                    <CheckCircle className="text-[#10B981] flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Ideal For:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Mid-size law firms</li>
                  <li>• Growing practices</li>
                  <li>• Distributed teams</li>
                  <li>• Firms without dedicated IT</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Technical Details:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Hosting: AWS, Azure, or private cloud</li>
                  <li>• Multi-region deployment</li>
                  <li>• Automated backups</li>
                  <li>• Load balancing</li>
                  <li>• Managed PostgreSQL</li>
                </ul>
              </div>

              <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Best of Both Worlds: Hybrid Architecture</h2>
          <p className="text-xl text-gray-600 mb-8">
            Keep sensitive data on-premise while leveraging cloud compute for AI processing
          </p>
          <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg">
            Discuss Hybrid Setup
          </button>
        </div>
      </section>
    </div>
  );
}
