import { BookOpen, FileText, Video, Download, HelpCircle, Code } from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
    {
      icon: BookOpen,
      title: 'Quick Start Guide',
      description: 'Get up and running in 30 minutes',
      type: 'PDF + Video (15 min)',
      link: 'Download Guide'
    },
    {
      icon: FileText,
      title: 'User Manual',
      description: 'Comprehensive user guide with searchable online version',
      type: 'Online + PDF',
      link: 'Read Manual'
    },
    {
      icon: Code,
      title: 'API Documentation',
      description: 'REST API reference with authentication guide and code examples',
      type: 'Online Documentation',
      link: 'View API Docs'
    },
    {
      icon: Download,
      title: 'System Requirements',
      description: 'Hardware and software requirements with compatibility matrix',
      type: 'PDF',
      link: 'Download Requirements'
    },
    {
      icon: FileText,
      title: 'Security Whitepaper',
      description: 'Air-Gapped AI for Legal Environments (24-page PDF)',
      type: 'Whitepaper',
      link: 'Download Whitepaper'
    },
    {
      icon: BookOpen,
      title: 'Migration Guide',
      description: 'Step-by-step process for migrating from legacy systems',
      type: 'PDF Guide',
      link: 'Download Guide'
    }
  ];

  const videos = [
    'Getting Started with Magnius AI (5 min)',
    'Template Search and Usage (8 min)',
    'AI-Powered Legal Research (10 min)',
    'Matter Management Walkthrough (12 min)',
    'Voice Recognition Setup (6 min)',
    'Document Processing Tutorial (9 min)'
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Resources & Documentation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Everything you need to succeed with Magnius AI
          </p>
          <div className="max-w-xl">
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Documentation & Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-gray-900 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-3">{resource.description}</p>
                <div className="text-sm text-gray-500 mb-4">{resource.type}</div>
                <button className="text-gray-900 font-semibold hover:text-gray-800 flex items-center space-x-2">
                  <span>{resource.link}</span>
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Video Tutorials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <Video className="text-white" size={48} />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{video}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Downloads</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Magnius AI Desktop Client (Windows .exe)',
              'Magnius AI Desktop Client (macOS .dmg)',
              'Magnius AI Linux Package (.deb, .rpm)',
              'User Manual (PDF)',
              'Admin Guide (PDF)',
              'Security Whitepaper (PDF)',
              'Template Import Tool',
              'Sample Templates Package'
            ].map((download) => (
              <div
                key={download}
                className="bg-white border-2 border-gray-100 rounded-lg p-4 hover:border-gray-900 hover:shadow-lg transition-all cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <Download className="text-gray-900" size={20} />
                  <span className="text-gray-900">{download}</span>
                </div>
                <button className="text-gray-900 font-semibold hover:text-gray-800">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="text-gray-900 mx-auto mb-6" size={64} />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Can't Find What You're Looking For?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Contact Support
            </button>
            <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-white transition-colors">
              Request Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
