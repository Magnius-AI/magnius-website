import { Code, Database, Brain, FileCode, Shield, Zap } from 'lucide-react';

export default function TechnologyPage() {
  const techStack = [
    {
      icon: Code,
      title: 'Modern React Frontend',
      items: ['React 19', 'Tailwind CSS 3.4', 'React Router 7.8', 'Lucide React Icons'],
      color: '#C9A961'
    },
    {
      icon: FileCode,
      title: 'High-Performance Python Backend',
      items: ['FastAPI 0.104', 'Uvicorn ASGI', 'SQLAlchemy 2.0+', 'Pydantic Validation'],
      color: '#C9A961'
    },
    {
      icon: Database,
      title: 'PostgreSQL with Vector Extensions',
      items: ['PostgreSQL 14+', 'pgvector 0.2.4', '384-dim embeddings', 'all-MiniLM-L6-v2'],
      color: '#C9A961'
    },
    {
      icon: Brain,
      title: 'Local AI Without the Cloud',
      items: ['Ollama', 'Mistral Magistral', 'Saul-Instruct', 'OpenAI Whisper'],
      color: '#C9A961'
    },
    {
      icon: FileCode,
      title: 'Document Processing',
      items: ['PyPDF 3.17', 'python-docx 1.1', 'pytesseract OCR', 'pdfplumber'],
      color: '#C9A961'
    },
    {
      icon: Shield,
      title: 'Security Stack',
      items: ['bcrypt hashing', 'PyJWT tokens', 'TLS 1.3', 'AES-256 encryption'],
      color: '#C9A961'
    }
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-[#2D1B4E] via-[#3D2861] to-[#2D1B4E] text-white py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Built on Enterprise-Grade Technology</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Modern, secure, and performant stack designed for legal workloads
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech) => (
              <div key={tech.title} className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#C9A961] hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2D1B4E] to-[#3D2861] rounded-lg flex items-center justify-center mb-4">
                  <tech.icon className="text-[#C9A961]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2 text-sm text-gray-700">
                      <span className="text-[#C9A961]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Performance Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Query Response', value: '<2s' },
              { label: 'Document Processing', value: '100 pages/min' },
              { label: 'Concurrent Users', value: '500+' },
              { label: 'Uptime SLA', value: '99.9%' }
            ].map((metric) => (
              <div key={metric.label} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-[#2D1B4E] mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">Our Engineers Are Here to Help</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#2D1B4E] text-white rounded-lg font-semibold hover:bg-[#3D2861] transition-colors">
              Schedule Technical Deep-Dive
            </button>
            <button className="px-8 py-4 border-2 border-[#C9A961] text-[#2D1B4E] rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Download Architecture Whitepaper
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
