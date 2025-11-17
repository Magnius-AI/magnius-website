import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Book a Demo', path: '/book-demo' },
  ];

  return (
    <footer className="bg-brand-dark border-t border-brand-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Logo and tagline */}
          <div>
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold text-white">Magnius Consulting OS</span>
            </Link>
            <p className="mt-2 text-sm text-brand-ice/70">
              Replace consulting slide decks with a living company OS
            </p>
          </div>

          {/* Center: Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-brand-ice/70 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Copyright */}
          <div className="text-right">
            <p className="text-sm text-brand-ice/60">
              © {currentYear} Magnius. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
