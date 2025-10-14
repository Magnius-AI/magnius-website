import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function AboutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    attorneys: '',
    deployment: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-[#2D1B4E] via-[#3D2861] to-[#2D1B4E] text-white py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">See Relius AI in Action</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Schedule a personalized demo with our team and discover how Relius AI can transform your legal practice
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Request Your Demo</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#C9A961] focus:outline-none"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#C9A961] focus:outline-none"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#C9A961] focus:outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#C9A961] focus:outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company/Firm Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#C9A961] focus:outline-none"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Attorneys *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#C9A961] focus:outline-none"
                    value={formData.attorneys}
                    onChange={(e) => setFormData({...formData, attorneys: e.target.value})}
                  >
                    <option value="">Select...</option>
                    <option value="1-5">1-5</option>
                    <option value="6-25">6-25</option>
                    <option value="26-100">26-100</option>
                    <option value="100+">100+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Deployment Preference *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#C9A961] focus:outline-none"
                    value={formData.deployment}
                    onChange={(e) => setFormData({...formData, deployment: e.target.value})}
                  >
                    <option value="">Select...</option>
                    <option value="onpremise">On-Premise Air-Gapped</option>
                    <option value="cloud">Cloud</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="unsure">Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message / Questions
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#C9A961] focus:outline-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#2D1B4E] text-white rounded-lg font-semibold hover:bg-[#3D2861] transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Request Demo</span>
                  <Send size={18} />
                </button>
              </form>

              <p className="text-center text-gray-600 mt-4">
                Prefer to call? <span className="text-[#2D1B4E] font-semibold">(555) 123-4567</span>
              </p>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#2D1B4E] to-[#3D2861] rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
                <div className="space-y-4">
                  {[
                    'Live product walkthrough (30-45 min)',
                    'Custom demo environment with your use cases',
                    'Q&A with product experts',
                    'Security and compliance discussion',
                    'ROI analysis for your practice',
                    'Deployment options review'
                  ].map((item) => (
                    <div key={item} className="flex items-start space-x-3">
                      <span className="text-[#C9A961] mt-1">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="text-[#C9A961] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">support@relius.ai</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="text-[#C9A961] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">(555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-[#C9A961] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <div className="text-gray-600">Legal Tech Plaza<br />San Francisco, CA 94105</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Empowering Legal Professionals with Secure, Intelligent AI
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Relius AI is committed to delivering enterprise-grade legal technology that puts security and control first
          </p>
        </div>
      </section>
    </div>
  );
}
