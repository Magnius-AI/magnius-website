import { Shield, Lock, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/relius-logo.png" alt="Relius AI" className="h-8 w-auto" />
              <span className="text-xl font-bold text-white">Relius AI</span>
            </div>
            <p className="text-sm mb-4">
              Secure AI-powered legal assistant for modern law firms. Your data, your infrastructure, your control.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1 text-xs">
                <Shield size={16} className="text-green-400" />
                <span>SOC 2 Ready</span>
              </div>
              <div className="flex items-center space-x-1 text-xs">
                <Lock size={16} className="text-green-400" />
                <span>HIPAA</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavigate('features')} className="hover:text-white transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('deployment')} className="hover:text-white transition-colors">
                  Deployment Options
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('technology')} className="hover:text-white transition-colors">
                  Technology
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('pricing')} className="hover:text-white transition-colors">
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavigate('resources')} className="hover:text-white transition-colors">
                  Documentation
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('use-cases')} className="hover:text-white transition-colors">
                  Use Cases
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('resources')} className="hover:text-white transition-colors">
                  API Reference
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('resources')} className="hover:text-white transition-colors">
                  Security Whitepaper
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavigate('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('about')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 Relius AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <Award size={16} className="text-green-400" />
                <span>Air-Gap Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <Shield size={16} className="text-green-400" />
                <span>Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
