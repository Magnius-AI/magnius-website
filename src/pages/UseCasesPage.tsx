import { Scale, Building2, User, Landmark, Heart, Globe } from 'lucide-react';

export default function UseCasesPage() {
  const useCases = [
    {
      icon: Scale,
      title: 'Personal Injury Firms',
      challenge: 'High-volume case management with repetitive pleadings',
      results: ['60% reduction in document prep time', 'Consistent high-quality pleadings', 'Scale to 3x more cases'],
      quote: 'We went from 2 hours per demand letter to 20 minutes'
    },
    {
      icon: Building2,
      title: 'Corporate Law Departments',
      challenge: 'Contract review, compliance tracking, matter management',
      results: ['40% faster contract review', 'Reduced outside counsel spend', 'Centralized knowledge repository'],
      quote: 'Our GC finally has visibility into all legal matters'
    },
    {
      icon: User,
      title: 'Solo Practitioners',
      challenge: 'Limited resources, need affordable AI without subscriptions',
      results: ['Practice like a 10-person firm', 'No monthly AI subscription costs', 'Professional work product'],
      quote: 'Like having a legal research associate 24/7'
    },
    {
      icon: Landmark,
      title: 'Government Legal Departments',
      challenge: 'Strict security requirements, air-gap compliance',
      results: ['Meets security clearance requirements', 'Faster FOIA responses', 'Consistent legal opinions'],
      quote: 'Finally, AI we can actually use in our environment'
    },
    {
      icon: Heart,
      title: 'Legal Aid Organizations',
      challenge: 'Limited budget, high caseloads, need automation',
      results: ['Serve 2x more clients', 'Reduce pro bono attorney burden', 'Consistent service quality'],
      quote: 'We can finally provide quality legal services at scale'
    },
    {
      icon: Globe,
      title: 'Immigration Law Firms',
      challenge: 'Complex, frequently-changing forms and regulations',
      results: ['Always-current forms', 'Reduced filing errors', 'Better client communication'],
      quote: 'Game-changer for our practice'
    }
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-[#2D1B4E] via-[#3D2861] to-[#2D1B4E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Built for Every Legal Practice</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            See how Relius AI transforms legal workflows across practice areas
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-[#C9A961] hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2D1B4E] to-[#3D2861] rounded-xl flex items-center justify-center mb-4">
                  <useCase.icon className="text-[#C9A961]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-[#2D1B4E]">Challenge:</span>
                  <p className="text-gray-600 mt-1">{useCase.challenge}</p>
                </div>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-[#2D1B4E]">Results:</span>
                  <ul className="mt-2 space-y-1">
                    {useCase.results.map((result) => (
                      <li key={result} className="flex items-start space-x-2 text-sm text-gray-700">
                        <span className="text-[#10B981] mt-0.5">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 italic text-gray-700 border-l-4 border-[#C9A961]">
                  "{useCase.quote}"
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Which Use Case Matches Your Practice?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#2D1B4E] text-white rounded-lg font-semibold hover:bg-[#3D2861] transition-colors">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border-2 border-[#C9A961] text-[#2D1B4E] rounded-lg font-semibold hover:bg-white transition-colors">
              See All Features
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
