import { Link } from 'react-router-dom';
import { Linkedin, Twitter } from 'lucide-react';
import { BRAND, NAV_LINKS, FOOTER } from '../lib/constants';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: BRAND.social.linkedin,
    icon: Linkedin,
  },
  {
    label: 'Twitter',
    href: BRAND.social.twitter,
    icon: Twitter,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate/20 bg-night">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 100%, rgba(0, 212, 255, 0.03) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.svg"
                alt="Magnius"
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
              />
              <span className="font-display text-2xl font-semibold text-frost">
                {BRAND.name}
              </span>
            </Link>
            <p className="max-w-md text-sm text-silver">
              {BRAND.tagline}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-silver transition-colors hover:text-cyan"
              >
                {link.label}
              </Link>
            ))}
            {FOOTER.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted transition-colors hover:text-silver"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate/40 bg-graphite/50 text-silver transition-all duration-300 hover:border-cyan/30 hover:text-cyan hover:shadow-glow-sm"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-slate/20 w-full">
            <p className="text-xs text-muted text-center">
              {FOOTER.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
