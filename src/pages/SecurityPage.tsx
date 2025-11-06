import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  BadgeCheck,
  Database,
  FileKey,
  LucideIcon,
  ShieldCheck,
  ShieldHalf,
  ShieldPlus,
  Users,
} from 'lucide-react';

type FeatureGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

const certifications = [
  { title: 'HIPAA Compliant', description: 'BAA available for covered entities & business associates.' },
  { title: 'SOC 2 Type II', description: 'Audited controls for security, availability, and confidentiality.' },
  { title: 'HITRUST CSF', description: 'Certified framework aligning with HIPAA, NIST, and ISO standards.' },
  { title: 'ISO 27001', description: 'Information security management system certified annually.' },
  { title: 'FDA Guidance Ready', description: 'Processes aligned for regulated healthcare workflows.' },
  { title: 'State-Level Compliance', description: 'Meets state privacy, security, and telehealth regulations.' },
];

const securityFeatures: FeatureGroup[] = [
  {
    title: 'Data Protection',
    icon: ShieldPlus,
    items: [
      'End-to-end encryption (TLS 1.3) and AES-256 encryption at rest with per-tenant keys.',
      'Automatic backups with immutable snapshots, geo-redundant storage, and rapid recovery SLAs.',
      'Continuous vulnerability scanning, penetration testing, and code review pipelines.',
      'Zero-trust network segmentation with least privilege and secure secrets management.',
    ],
  },
  {
    title: 'Access Controls',
    icon: FileKey,
    items: [
      'Role-based access control (RBAC) with granular permissions down to data field level.',
      'Multi-factor authentication (MFA), SSO/SAML, SCIM provisioning, and IP allowlisting.',
      'Session management, device fingerprinting, and auto timeout policies.',
      'Comprehensive audit logs with immutable history and export options.',
    ],
  },
  {
    title: 'HIPAA Compliance',
    icon: ShieldCheck,
    items: [
      'Business Associate Agreements (BAA) for covered entities and partners.',
      'Documented breach notification procedures exceeding regulatory timelines.',
      'Consent management, minimum necessary access, and data de-identification tools.',
      'Ongoing risk assessments, workforce training, and privacy impact analysis.',
    ],
  },
  {
    title: 'Infrastructure Security',
    icon: Database,
    items: [
      'Hosted on AWS with redundant multi-zone architecture and 99.9% uptime SLA.',
      'DDoS mitigation, WAF protection, managed patching, and hardened OS baselines.',
      'Disaster recovery with documented failover playbooks and quarterly testing.',
      'Monitoring via SIEM, IDS/IPS, and 24/7 security operations center.',
    ],
  },
  {
    title: 'Privacy & Data Handling',
    icon: Users,
    items: [
      'Customers maintain full data ownership with export and deletion rights.',
      'Data retention policies configurable per practice and per regulation.',
      'Transparent third-party disclosure policy with vendor security reviews.',
      'Configurable consent, cookie, and preference management for patients.',
    ],
  },
];

const resources = [
  { label: 'Download security whitepaper', to: '/resources/documentation#security-whitepaper' },
  { label: 'Read compliance documentation', to: '/resources/documentation#compliance' },
  { label: 'View audit reports', to: '/resources/documentation#audit-reports' },
  { label: 'Contact our security team', to: '/contact#security' },
];

const fadeInProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function SecurityPage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12)_0%,_rgba(255,255,255,0)_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
          <motion.div {...fadeInProps} className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 shadow-sm">
              Security & Compliance
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Healthcare security and compliance you can trust.
            </h1>
            <p className="text-lg text-slate-600 lg:text-xl">
              Magnius Healthcare AI is HIPAA compliant from day one. We combine best-in-class infrastructure, rigorous
              security practices, and transparent governance so your team can focus on delivering exceptional care.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="certifications">
        <motion.div {...fadeInProps} className="space-y-10">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
              Compliance certifications
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Enterprise-grade controls verified by independent auditors.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification) => (
              <div
                key={certification.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <BadgeCheck className="mx-auto h-8 w-8 text-blue-600" />
                <p className="mt-3 text-lg font-semibold text-slate-900">{certification.title}</p>
                <p className="mt-2 text-sm text-slate-600">{certification.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="space-y-20">
        {securityFeatures.map((group, index) => (
          <div
            key={group.title}
            id={group.title.toLowerCase().replace(/\s+/g, '-')}
            className={index % 2 === 0 ? 'bg-white' : 'bg-slate-100/70'}
          >
            <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
              <motion.div {...fadeInProps} className="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)]">
                <div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                    <group.icon size={18} />
                    {group.title}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">{group.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Safeguards that meet or exceed healthcare industry standards, implemented across infrastructure,
                    application code, and operational processes.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <ul className="space-y-4 text-sm text-slate-600">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <ShieldHalf className="mt-1 h-4 w-4 text-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="privacy">
        <motion.div {...fadeInProps} className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Privacy & data handling</h3>
            <p className="mt-3 text-sm text-slate-600">
              Your practice retains full ownership and control over data. Magnius provides transparent policies for
              retention, deletion, and disclosure backed by legal agreements.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {[
                'Data residency controls with US-only storage by default.',
                'Configurable retention schedules aligned with regulatory requirements.',
                'Support for patient right to access, export, and delete requests.',
                'Third-party risk management program and vendor assessments.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-4 w-4 text-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900" id="hipaa">
              HIPAA compliance program
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Our compliance team partners with you from onboarding through ongoing audits to ensure every workflow
              aligns with HIPAA, HITECH, and state mandates.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {[
                'Signed Business Associate Agreement (BAA) for all covered entities.',
                'Administrative, technical, and physical safeguards with documentation.',
                'Incident response and breach notification plans tested annually.',
                'Employee background checks, security awareness training, and attestations.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-4 w-4 text-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="resources">
        <motion.div {...fadeInProps} className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">Security operations team</h3>
              <p className="mt-3 text-sm text-slate-600">
                Our dedicated security operations center monitors systems 24/7/365. Incident response playbooks,
                escalation contacts, and communication protocols ensure your team stays informed and protected.
              </p>
              <ul className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                {[
                  '24/7 security monitoring & automated alerting',
                  'Dedicated incident response team with 1-hour SLA',
                  'Bug bounty & responsible disclosure program',
                  'Quarterly tabletop exercises with customers',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <AlertTriangle className="mt-1 h-4 w-4 text-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">Resources</p>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.label}>
                    <Link
                      to={resource.to}
                      className="flex items-center justify-between rounded-xl border border-blue-200 bg-white px-4 py-3 font-semibold text-blue-600 transition hover:border-blue-300"
                    >
                      {resource.label}
                      <BadgeCheck className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
