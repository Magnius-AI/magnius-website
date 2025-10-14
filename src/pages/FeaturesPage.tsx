import { useState } from 'react';
import { FileText, Brain, Search, Mic, FolderTree, FileCheck, Network, FormInput, FileType, Shield, Lock, Key, UserCheck, ClipboardList, Users, Award, Play } from 'lucide-react';

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('core');

  const coreFeatures = [
    {
      icon: FileText,
      title: '50-State + Federal Legal Templates',
      description: 'Comprehensive repository of jurisdiction-specific legal forms, pleadings, and templates. Searchable by state, practice area, and document type.',
      features: [
        'All 50 states + federal jurisdictions',
        'Practice area categorization',
        'Customizable template fields',
        'Jurisdiction-specific rules embedded',
      ],
      cta: 'Explore Template Library',
    },
    {
      icon: Brain,
      title: 'Local LLM with Legal Specialization',
      description: 'Advanced AI models trained on legal corpora, running entirely on your infrastructure with zero data egress.',
      features: [
        'Mistral Magistral & Saul-Instruct models',
        'Legal terminology understanding',
        'Context-aware responses',
        'Citation generation',
      ],
      badge: 'Powered by Ollama',
    },
    {
      icon: Search,
      title: 'Semantic Search with Source Citations',
      description: 'Retrieval Augmented Generation that provides accurate answers with verifiable source citations from your document library.',
      features: [
        'Vector-based semantic search',
        'Source document references',
        'Confidence scoring',
        'Multi-document synthesis',
      ],
      badge: 'pgvector + 384-dim embeddings',
    },
    {
      icon: Mic,
      title: 'Offline Speech-to-Text',
      description: 'Dictate notes, queries, and documents without internet connectivity using OpenAI Whisper.',
      features: [
        'Completely offline operation',
        'Legal terminology recognition',
        'Multiple language support',
        'Real-time transcription',
      ],
      badge: 'OpenAI Whisper',
    },
    {
      icon: FolderTree,
      title: 'Client Matter Organization',
      description: 'Organize documents, conversations, and research by client matters with contextual AI assistance.',
      features: [
        'Hierarchical matter structure',
        'Document association',
        'Timeline tracking',
        'Matter-specific AI context',
      ],
      note: 'Sync with existing practice management systems',
    },
    {
      icon: FileCheck,
      title: 'Multi-Format Document Intelligence',
      description: 'Process PDFs, Word documents, scanned images with OCR, and extract structured data.',
      features: [
        'PDF, DOCX, TXT, images',
        'OCR for scanned documents',
        'Metadata extraction',
        'Form field detection',
      ],
      formats: ['PDF', 'DOCX', 'TXT', 'JPG', 'PNG'],
    },
  ];

  const advancedFeatures = [
    {
      icon: Network,
      title: 'Legal Knowledge Graph',
      description: 'Optional Neo4j-powered knowledge graph connecting cases, statutes, regulations, and concepts.',
      features: [
        'Entity relationship mapping',
        'Citation network analysis',
        'Concept connections',
        'Visual exploration',
      ],
      badge: 'Enterprise Add-on',
    },
    {
      icon: FormInput,
      title: 'Intelligent Form Filling',
      description: 'AI-assisted form field identification and auto-population from matter data.',
      features: [
        'Automatic field detection',
        'Data source mapping',
        'Validation rules',
        'Bulk document generation',
      ],
    },
    {
      icon: FileType,
      title: 'AI-Powered Summarization',
      description: 'Generate concise summaries of lengthy legal documents with key point extraction.',
      features: [
        'Multi-page document support',
        'Extractive + abstractive summaries',
        'Key facts highlighting',
        'Customizable summary length',
      ],
    },
  ];

  const securityFeatures = [
    { icon: Shield, title: 'Air-Gap Architecture', description: 'Complete offline operation' },
    { icon: Lock, title: 'Zero Data Egress', description: 'No external connections' },
    { icon: Key, title: 'End-to-End Encryption', description: 'Data encrypted at rest and in transit' },
    { icon: Lock, title: 'bcrypt Password Hashing', description: 'Industry-standard security' },
    { icon: Key, title: 'JWT Authentication', description: 'Secure token-based auth' },
    { icon: ClipboardList, title: 'Audit Logging', description: 'Complete activity tracking' },
    { icon: Users, title: 'Role-Based Access Control', description: 'Granular permissions' },
    { icon: Award, title: 'SOC 2 Ready Architecture', description: 'Enterprise compliance' },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="text-sm mb-4">
              <span className="text-white">Home</span>
              <span className="mx-2 text-gray-400">/</span>
              <span>Features</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Enterprise-Grade Features for Modern Legal Practice
            </h1>
            <p className="text-xl text-gray-300">
              Everything you need for secure, intelligent legal document management
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 mb-12">
            <nav className="flex space-x-8">
              {[
                { id: 'core', label: 'Core Capabilities' },
                { id: 'advanced', label: 'Advanced Features' },
                { id: 'security', label: 'Security & Compliance' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 px-1 border-b-2 font-medium text-lg transition-colors ${
                    activeTab === tab.id
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {activeTab === 'core' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-gray-900 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2 mb-4">
                    {feature.features.map((item) => (
                      <li key={item} className="flex items-start space-x-2 text-sm text-gray-700">
                        <span className="text-[#10B981] mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {feature.badge && (
                    <div className="inline-block bg-gray-900 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {feature.badge}
                    </div>
                  )}
                  {feature.note && (
                    <p className="text-xs text-gray-500 italic mt-2">{feature.note}</p>
                  )}
                  {feature.formats && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {feature.formats.map((format) => (
                        <span key={format} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {format}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'advanced' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-gray-900 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2 mb-4">
                    {feature.features.map((item) => (
                      <li key={item} className="flex items-start space-x-2 text-sm text-gray-700">
                        <span className="text-[#10B981] mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {feature.badge && (
                    <div className="inline-block bg-gray-700 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {feature.badge}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'security' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white border-2 border-gray-100 rounded-xl p-6 text-center hover:border-gray-900 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See Features in Action</h2>
            <p className="text-xl text-gray-600">Watch how Magnius AI transforms legal workflows</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                  <Play size={32} className="text-black" />
                </div>
                <p className="text-lg">Product Demo Video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to See These Features in Your Firm?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the power of Magnius AI with a personalized demo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg">
              Schedule Demo
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg border-2 border-gray-900">
              Download Feature Comparison
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
