import { useState, FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-dark pt-20 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-400" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Thanks for your interest!</h1>
          <p className="text-xl text-brand-ice/80 mb-8">
            We'll be in touch soon to schedule your demo and discuss how Magnius can help your organization.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-lg font-medium hover:bg-brand-sky transition-colors"
          >
            Return to home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Book a demo</h1>
            <p className="text-xl text-brand-ice/80">
              See how Magnius Consulting OS can transform your strategic decision-making process.
            </p>
          </div>

          <div className="bg-gradient-to-br from-brand-navy to-brand-steel rounded-2xl p-8 border border-brand-blue/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-ice/80 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-steel border border-brand-blue/30 rounded-lg text-white placeholder-brand-ice/50 focus:outline-none focus:border-brand-blue transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-brand-ice/80 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-steel border border-brand-blue/30 rounded-lg text-white placeholder-brand-ice/50 focus:outline-none focus:border-brand-blue transition-colors"
                  placeholder="Acme Corp"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-brand-ice/80 mb-2">
                  Role *
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-steel border border-brand-blue/30 rounded-lg text-white placeholder-brand-ice/50 focus:outline-none focus:border-brand-blue transition-colors"
                  placeholder="CEO, Head of Strategy, etc."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-ice/80 mb-2">
                  Work email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-steel border border-brand-blue/30 rounded-lg text-white placeholder-brand-ice/50 focus:outline-none focus:border-brand-blue transition-colors"
                  placeholder="john@acme.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-ice/80 mb-2">
                  What are you interested in?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-steel border border-brand-blue/30 rounded-lg text-white placeholder-brand-ice/50 focus:outline-none focus:border-brand-blue transition-colors resize-none"
                  placeholder="Tell us about your use case, challenges, or what you'd like to explore..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-sky transition-colors shadow-lg shadow-brand-blue/25"
              >
                Request a demo
              </button>

              <p className="text-sm text-brand-ice/70 text-center">
                We typically respond within 24 hours during business days.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
