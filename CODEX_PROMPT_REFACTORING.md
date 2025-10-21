# MAGNIUS Website Refactoring - Comprehensive CODEX Prompt

## Executive Summary

You are tasked with refactoring the MAGNIUS website to accurately reflect the company's true business model. The current website incorrectly promotes two products:
1. **MAGNIUS Financial Platform** (Bloomberg Terminal replacement) - **DOES NOT EXIST**
2. **MAGNIUS Banking** (on-premise AI for fraud/AML) - **WRONG ARCHITECTURE**

The actual business is:
- **MAGNIUS Banking**: A cloud-native, real-time risk intelligence and data validation platform positioned in the critical communication layer between commercial banks and Central Banks (Federal Reserve)

## Critical Understanding: What MAGNIUS Banking Actually Is

### The Real Business Model

**Position in Data Flow:**
```
Current Flow:
Bank → (Excel/XML/JSON export) → Central Bank → Federal Reserve

MAGNIUS-Enhanced Flow:
Bank → **MAGNIUS Cloud Platform** → Central Bank → Federal Reserve
              ↓
        Real-Time Intelligence Dashboard
        (Early Warning System)
```

**What It Does:**
Every day, banks report their deposits, loans, liquidity, capital ratios, and asset quality to regulators. MAGNIUS intercepts this data **in the cloud**, validates it, analyzes it with AI, and provides early warning alerts to prevent bank failures like Silicon Valley Bank.

**Key Characteristics:**
- **Cloud-Native SaaS** (NOT on-premise, NOT local-first)
- **Multi-Tenant Architecture** (all banks on same platform)
- **Network Effects** (more banks = better AI models and peer benchmarking)
- **Mission:** Prevent bank failures through early detection
- **Target:** ALL 13,700+ commercial banks in the US

### Architecture: Cloud, Not On-Premise

The document is **extremely clear** that this is cloud-native:

**Why Cloud (from the document):**
1. **Network Effects** - Multi-tenant = all banks on same platform, real-time peer benchmarking, aggregated data improves AI
2. **Speed to Market** - No on-premise installations, instant onboarding, banks operational in days not months
3. **Cost Efficiency** - No per-customer hardware costs, elastic scaling, shared infrastructure
4. **Better Product** - Real-time updates, collaborative features, 99.9% uptime SLA
5. **Regulatory Compliance** - SOC 2 Type II certified, easier for regulators to inspect
6. **AI/ML Advantages** - Centralized model training, all bank data improves models, GPU access

**Tech Stack:**
- **Frontend:** React (TypeScript), Next.js, TailwindCSS, Mobile: React Native
- **Backend:** FastAPI (Python), Node.js (WebSockets), GraphQL, REST APIs
- **Database:** PostgreSQL, TimescaleDB, Redis, S3/Blob Storage
- **Data Processing:** Kafka/Kinesis (streaming), Airflow (batch), Lambda (serverless)
- **AI/ML:** Python (scikit-learn, TensorFlow, PyTorch), AWS SageMaker
- **Security:** AWS WAF, Shield, KMS, Okta/Auth0 (SSO, MFA)
- **Infrastructure:** Kubernetes, Docker, Terraform, AWS/Azure/GCP

### Core Features (What to Build on Website)

#### 1. Secure Cloud Data Ingestion
- Drag-and-drop file upload or API integration
- Supports: Excel, XML, JSON, CSV
- Automated daily ingestion (scheduled imports)
- SFTP/API integration options
- End-to-end encryption, virus/malware scanning

#### 2. AI-Powered Anomaly Detection (Cloud Scale)
- Machine learning models analyze all submissions
- Compares to historical trends and peer benchmarks
- Detects: liquidity drops, deposit concentrations, unusual loan patterns, capital deterioration
- **Cloud Advantage:** Models trained on all customer data (better accuracy), GPU-accelerated

#### 3. Real-Time Risk Intelligence Dashboard
- Executive view (desktop and mobile)
- Modules: Liquidity Monitor, Capital Adequacy, Asset Quality, Concentration Risk, Peer Benchmarking, Systemic Risk
- Web app + native mobile apps (iOS/Android)
- AI chatbot for natural language queries

#### 4. Early Warning System
- Automated alerts when risk thresholds breached (🔴 Critical, 🟠 High, 🟡 Medium, 🔵 Info)
- Multi-level escalation (board, CEO, CFO, regulators)
- Predictive models for failure probability
- Delivered via: Dashboard, Email, SMS, Slack/Teams, Webhook

#### 5. Collaborative Intelligence (Network Effects)
- Anonymous aggregation across ALL MAGNIUS customers
- Industry trends: "Your deposit concentration is 30% higher than peers"
- Real-time insights: "3 banks in your region experienced deposit outflows this week"
- **Privacy:** All data anonymized, opt-in participation

#### 6. Regulatory Communication Hub
- Clean, validated data forwarded to Central Bank/Fed
- Automated filing confirmations
- Audit trail of all submissions
- Optional: Fed/FDIC can have read-only dashboard access

#### 7. Mobile Experience (Cloud-Only)
- Native iOS and Android apps
- Executive dashboard on-the-go
- Push notifications for critical alerts
- Secure biometric authentication

### Target Market: ALL BANKS (Not Just Community Banks)

**Tier 1: Large Banks ($50B+ assets)**
- Pricing: $500K-$2M annually
- Decision Factors: Security, compliance, API capabilities, uptime SLA

**Tier 2: Regional Banks ($10B-$50B assets)**
- Pricing: $250K-$500K annually
- Decision Factors: Speed to value, peer benchmarking

**Tier 3: Community Banks ($500M-$10B assets)**
- Pricing: $75K-$150K annually
- Decision Factors: Affordable, easy to use, no hardware to manage

**Tier 4: Credit Unions (all sizes)**
- Pricing: $50K-$100K annually
- Decision Factors: Cost, community features

**Total Addressable Market: 13,700+ institutions = $1B+ opportunity**

### Key Messaging (From Document)

**For Banks:**
> "MAGNIUS Banking is the cloud-based early warning system that prevents bank failures. We sit between your bank and the Federal Reserve, using AI to detect risks like Silicon Valley Bank months before crisis hits. Get started in days, not months."

**For Regulators:**
> "MAGNIUS helps you supervise banks more effectively by providing real-time risk intelligence across the entire banking system. We catch problems early so you don't have to manage crises."

**For Investors:**
> "We're building the industry-standard risk intelligence platform for banking. Multi-tenant SaaS with 90%+ gross margins, network effects that compound over time, and a $1B+ TAM. Cloud-first architecture enables rapid scaling and winner-take-most dynamics."

### Handling Cloud Objections (Sales Scripts)

The document includes detailed scripts for handling objections like:
- "We can't put sensitive data in the cloud"
- "What about regulatory requirements?"
- "What if MAGNIUS gets hacked?"
- "We need data on-premise for compliance"
- "What about vendor lock-in?"

**Example Response (Security Concern):**
> "Every major bank is already in the cloud (Capital One: 100% AWS, Goldman Sachs: Google Cloud). We're SOC 2 Type II certified, same as Salesforce. Bank-grade encryption (AES-256 at rest, TLS 1.3 in transit). Your data isolated from other banks. Multi-factor authentication mandatory. Regulators have reviewed our architecture. The question isn't 'Is cloud secure?' It's 'Are you more secure without it?'"

---

## What to Remove from Current Website

### Complete Removal List

#### 1. MAGNIUS Financial Platform (Entire Product)
**Files to DELETE:**
- [src/pages/FinancialPage.tsx](src/pages/FinancialPage.tsx) - Entire file (1000+ lines)

**Content to REMOVE from HomePage.tsx:**
- "MAGNIUS Financial Platform" product card (lines 48-65)
- All references to RIAs, hedge funds, family offices, investment professionals
- Bloomberg Terminal comparison content
- Financial advisor use cases (lines 177-232)
- Any mention of: "Replace Bloomberg", "investment research", "portfolio analytics", "financial modeling"

**Navigation Updates:**
- Remove "MAGNIUS Financial Platform" from products dropdown in [Navigation.tsx](src/components/Navigation.tsx)
- Remove all footer links to "/financial" in [Footer.tsx](src/components/Footer.tsx)

**Route Removal:**
- Delete route `/financial` from [App.tsx](src/App.tsx)

#### 2. Incorrect "Local-First" and "On-Premise" Messaging

**Search and Replace Across All Files:**

| Current (WRONG) | New (CORRECT) |
|-----------------|---------------|
| "Local-First AI" | "Cloud-Based Risk Intelligence" |
| "On-premise deployment" | "Multi-tenant cloud platform" |
| "100% local processing" | "Secure cloud processing with bank-grade encryption" |
| "Your data never leaves your infrastructure" | "Your data is isolated and encrypted in our SOC 2 Type II certified cloud" |
| "Air-gapped deployment" | "Enterprise-grade cloud security" |
| "No cloud dependencies" | "Cloud-native architecture" |
| "Own your stack" | "Access anytime, anywhere" |
| "Desktop application" | "Web and mobile applications" |

#### 3. Incorrect Banking Features

**Remove from BankingPage.tsx:**
- ❌ "On-Premise Deployment" positioning
- ❌ "Local server deployment" options
- ❌ "Air-gapped, fully isolated configuration"
- ❌ Fraud detection as PRIMARY feature (it's incidental)
- ❌ AML/BSA compliance as PRIMARY feature (it's incidental)
- ❌ Credit underwriting (completely irrelevant)
- ❌ Customer Intelligence (not the core product)
- ❌ Document Processing (not the core product)

**What to KEEP and REFRAME:**
- Regulatory compliance messaging (but reframe for cloud)
- Security features (but cloud security, not on-premise)
- Banking institution targeting (correct)

---

## What to Build: New Website Structure

### 1. Updated Home Page (HomePage.tsx)

**Hero Section:**
- **Headline:** "Prevent Bank Failures with AI-Powered Early Warning"
- **Subheadline:** "Cloud-based risk intelligence platform that sits between your bank and the Federal Reserve, detecting liquidity crises before they become catastrophic."
- **CTA:** "Request Demo" | "See How It Works"

**Social Proof Section:**
- **Stats:**
  - "13,700+ Banks Need This" (total addressable market)
  - "Prevent SVB-Style Failures" (positioning against 2023 crisis)
  - "4 Weeks to Go-Live" (cloud advantage)
  - "99.9% Uptime SLA" (enterprise reliability)

**Product Section (SINGLE PRODUCT):**
- **Title:** "MAGNIUS Banking: Real-Time Risk Intelligence"
- **Description:** "We intercept, validate, and analyze your daily Fed reporting data in the cloud, using AI to detect anomalies like deposit concentrations, liquidity drops, and capital deterioration—before they trigger regulatory action."
- **Features:**
  - Secure Cloud Data Ingestion
  - AI-Powered Anomaly Detection
  - Real-Time Risk Dashboard
  - Early Warning Alerts
  - Peer Benchmarking (Network Effects)
  - Regulatory Communication Hub
  - Mobile Executive Access
- **Target Users:** ALL commercial banks: Large ($50B+), Regional ($10B-$50B), Community ($500M-$10B), Credit Unions
- **Pricing:** "Starting at $50K/year" (Tier 4: Credit Unions)

**How It Works Section:**
- **Step 1:** "Connect Your Data" - API, SFTP, or file upload (Excel/XML/JSON)
- **Step 2:** "We Validate & Analyze" - AI scans for anomalies, compares to peer benchmarks
- **Step 3:** "You Get Alerts" - Dashboard, email, SMS when risks emerge
- **Step 4:** "Submit to Fed" - Clean, validated data forwarded to regulators

**Network Effects Section:**
- **Title:** "The More Banks Join, The Smarter It Gets"
- **Description:** "Multi-tenant cloud architecture means every bank added improves AI accuracy and peer benchmarking for all customers. This is winner-take-most infrastructure."
- **Benefits:**
  - Real-time peer comparisons
  - Industry-wide pattern detection
  - Systemic risk alerts
  - Collaborative intelligence

**Cloud vs. On-Premise Comparison:**
| Feature | On-Premise (Legacy) | MAGNIUS Cloud |
|---------|---------------------|---------------|
| Implementation Time | 4-6 months | 4 weeks |
| Peer Benchmarking | None | Real-time across all banks |
| AI Model Updates | Manual | Automatic (continuous learning) |
| Mobile Access | VPN required | Native apps |
| Uptime | Depends on your IT | 99.9% SLA |
| Cost | $500K+ initial | $50K-$2M annual (no upfront) |
| Scalability | Hardware bottleneck | Elastic (auto-scale) |

**Use Cases Section:**
- **Large Banks:** "Leverage our platform for systemic risk monitoring and regulatory reporting automation"
- **Regional Banks:** "Get enterprise-grade risk intelligence without enterprise IT overhead"
- **Community Banks:** "Compete with large banks using the same AI-powered early warning system"
- **Credit Unions:** "Protect member deposits with real-time liquidity monitoring and peer benchmarking"

**Trust & Security Section:**
- **Title:** "Bank-Grade Security in the Cloud"
- **Features:**
  - SOC 2 Type II Certified
  - AES-256 encryption at rest, TLS 1.3 in transit
  - Multi-factor authentication mandatory
  - Network isolation per customer (VPC)
  - 24/7 security monitoring
  - Annual penetration testing
  - FFIEC, OCC, FDIC approved architecture

**CTA Section:**
- **Title:** "Join the Banks Preventing Failures with MAGNIUS"
- **CTA 1:** "Schedule Demo" (primary)
- **CTA 2:** "Download Security Whitepaper" (secondary)
- **CTA 3:** "Talk to Our Team" (tertiary)

### 2. Rewritten Banking Page (BankingPage.tsx)

**Complete Rewrite Based on Cloud-Native SaaS Model**

**Hero:**
- **Headline:** "AI-Powered Risk Intelligence for Every Bank Reporting to the Fed"
- **Subheadline:** "Prevent catastrophic failures like Silicon Valley Bank with our cloud-based early warning system. We analyze your daily Fed reporting data in real-time, detecting liquidity crises, deposit concentrations, and capital deterioration before they become emergencies."
- **Visual:** Dashboard mockup showing:
  - Liquidity alert: "Deposit outflow 15% above historical average"
  - Peer comparison: "Your capital ratio: 8.2% | Peer average: 10.5%"
  - Early warning: "🔴 Critical: LCR dropped below regulatory minimum"

**Problem Section:**
- **Title:** "Why Silicon Valley Bank Failed (And How MAGNIUS Prevents It)"
- **Problem Cards:**
  1. **Late Detection:** "Regulators only see problems during quarterly exams (too late)"
  2. **No Peer Visibility:** "Banks don't know how they compare to peers in real-time"
  3. **Manual Processes:** "Excel-based reporting misses subtle patterns that AI catches"

**Solution Section:**
- **Title:** "Real-Time Intelligence in the Critical Data Flow"
- **Visual:** Diagram showing data flow:
  ```
  Your Bank → MAGNIUS Cloud → Central Bank → Federal Reserve
               ↓
          AI Analysis (detect anomalies)
               ↓
          Dashboard Alert (warn executives)
               ↓
          Prevent Crisis (before it's too late)
  ```
- **Value Props:**
  - Catch risks months before crisis (early warning)
  - See how you compare to peers (benchmarking)
  - Automate reporting validation (reduce errors)
  - Mobile access for executives (anywhere, anytime)

**Core Features Section (7 Modules):**

**1. Secure Cloud Data Ingestion**
- Drag-and-drop upload or API integration
- Supports: Excel, XML, JSON, CSV
- Automated daily ingestion (schedule imports)
- **Security:** End-to-end encryption, virus scanning, audit trail

**2. AI-Powered Anomaly Detection**
- Machine learning analyzes every submission
- Detects: liquidity drops, deposit concentrations, unusual loan patterns, capital deterioration
- Compares to: historical trends + peer benchmarks
- **Cloud Advantage:** Models trained on all customer data (better accuracy than single-bank models)

**3. Real-Time Risk Dashboard**
- **Executive View:** High-level bank health (desktop + mobile)
- **Modules:** Liquidity Monitor, Capital Adequacy, Asset Quality, Concentration Risk, Peer Benchmarking, Systemic Risk
- **Access:** Web app, iOS app, Android app, API
- **AI Chatbot:** Natural language queries ("Show me liquidity trends for Q4")

**4. Early Warning System**
- Automated alerts when risks emerge
- **Alert Levels:**
  - 🔴 Critical: Immediate action required (liquidity crisis)
  - 🟠 High: Significant risk emerging (concentration spike)
  - 🟡 Medium: Trend to monitor (margin compression)
  - 🔵 Info: FYI only (peer comparison data)
- **Delivery:** Dashboard, Email, SMS, Slack/Teams, Webhook

**5. Collaborative Intelligence (Network Effects)**
- Anonymous aggregation across ALL MAGNIUS customers
- **Insights:**
  - "Your deposit concentration is 30% higher than peers"
  - "Similar banks are reducing bond exposure this month"
  - "3 banks in your region experienced deposit outflows this week"
  - "Industry-wide: Commercial real estate risk increasing"
- **Privacy:** All data anonymized, opt-in participation

**6. Regulatory Communication Hub**
- Clean, validated data forwarded to Central Bank/Fed
- Automated filing confirmations
- Audit trail of all submissions
- **Optional:** Fed/FDIC read-only dashboard access (with your consent)

**7. Mobile Executive Access**
- Native iOS and Android apps
- Dashboard on-the-go
- Push notifications for critical alerts
- Biometric authentication
- **Use Case:** "CFO checks bank health before board meeting, gets alert while traveling, reviews on phone"

**Why Cloud (Not On-Premise) Section:**
- **Title:** "Why MAGNIUS is Cloud-Native (And Why That's Better for Banks)"
- **Advantages:**
  1. **Network Effects:** More banks = smarter AI + better benchmarking
  2. **Faster Implementation:** 4 weeks vs. 4-6 months on-premise
  3. **Always Up-to-Date:** Automatic updates, no version fragmentation
  4. **Mobile Access:** No VPN, access anywhere
  5. **Better Security:** 24/7 monitoring, SOC 2 Type II certified, bank-grade encryption
  6. **Lower Cost:** No hardware, no on-site installation, elastic scaling

**Addressing Cloud Concerns Section:**
- **Title:** "Your Cloud Security Questions, Answered"
- **FAQ-Style:**
  - **Q:** "Can we put sensitive data in the cloud?"
    **A:** "Every major bank already does (Capital One: 100% AWS, Goldman: Google Cloud). We're SOC 2 Type II certified, bank-grade encryption (AES-256), network isolation, MFA mandatory."
  - **Q:** "What about regulatory compliance?"
    **A:** "FFIEC, OCC, FDIC have all approved cloud for banks. We provide examiner-ready documentation, complete audit trails, data residency controls."
  - **Q:** "What if you get hacked?"
    **A:** "Multi-layer security, annual penetration testing, bug bounty program, $50M+ cyber insurance, 99.9% uptime guarantee. Compare to your on-premise security—most banks under-invest."
  - **Q:** "We need data on-premise for compliance."
    **A:** "Hybrid model: Processing in cloud, we sync encrypted exports to your on-premise storage. Best of both worlds. Your core banking system is probably already in the cloud (Jack Henry, Fiserv cloud offerings)."

**Target Market Section:**
- **Title:** "Built for Every Bank Reporting to the Fed"
- **Tiers:**
  - **Large Banks ($50B+):** "Enterprise-grade integrations, custom models, white-glove support" | **Pricing:** $500K-$2M/year
  - **Regional Banks ($10B-$50B):** "Speed to value, peer benchmarking, API access" | **Pricing:** $250K-$500K/year
  - **Community Banks ($500M-$10B):** "Affordable, easy to use, no IT overhead" | **Pricing:** $75K-$150K/year
  - **Credit Unions:** "Community features, collaborative intelligence, member protection" | **Pricing:** $50K-$100K/year
- **TAM:** 13,700+ institutions

**Pricing Section:**
- **Title:** "Transparent Cloud SaaS Pricing"
- **Subscription Model (Annual):**
  - **Credit Unions:** $50K-$100K/year
  - **Community Banks:** $75K-$150K/year
  - **Regional Banks:** $250K-$500K/year
  - **Large Banks:** $500K-$2M/year
- **What's Included:**
  - All 7 core modules
  - Web + mobile apps
  - 99.9% uptime SLA
  - SOC 2 Type II certified infrastructure
  - Standard support (1-business-day response)
- **Add-Ons:**
  - Advanced AI & Analytics: $50K-$200K/year
  - Regulatory Reporting Suite: $30K-$100K/year
  - API & Integrations: $25K-$75K/year
  - White-Label/Custom Branding: $50K-$150K/year

**Implementation Section:**
- **Title:** "Go Live in 4 Weeks (Not 4 Months)"
- **Timeline:**
  - **Week 1:** Account provisioning, user setup, security configuration
  - **Week 2:** Data integration (API or SFTP connection)
  - **Week 3:** User training (admin, executives, analysts)
  - **Week 4:** Go-live and launch support
- **Implementation Fees:**
  - Large Banks: $50K-$100K
  - Regional Banks: $25K-$50K
  - Community Banks: $10K-$25K
  - Credit Unions: $5K-$15K

**Technical Specs Section:**
- **Title:** "Enterprise-Grade Cloud Infrastructure"
- **Architecture:**
  - Multi-tenant SaaS (each bank has isolated data environment)
  - AWS/Azure/GCP (bank's choice)
  - Kubernetes orchestration
  - Elastic auto-scaling
- **Security:**
  - SOC 2 Type II certified
  - AES-256 encryption at rest, TLS 1.3 in transit
  - Multi-factor authentication
  - Network isolation (VPC per customer)
  - 24/7 security monitoring
- **Performance:**
  - 99.9% uptime SLA
  - Real-time processing (<100ms latency)
  - Horizontal scaling (handles any volume)
- **Compliance:**
  - FFIEC, OCC, FDIC approved
  - Data residency controls (US data stays in US)
  - Complete audit trails
  - Annual third-party security audits

**Case Studies Section:**
- **Title:** "Early Adopters Preventing Failures with MAGNIUS"
- **Testimonials (Placeholder for Real Ones):**
  - "Credit union reduced liquidity risk by detecting deposit concentration 3 months before exam"
  - "Regional bank caught capital deterioration early, avoided regulatory action"
  - "Community bank uses peer benchmarking to stay ahead of industry trends"

**CTA Section:**
- **Title:** "Don't Be the Next Silicon Valley Bank"
- **Description:** "Join the banks using AI-powered early warning to detect crises before they happen."
- **CTA 1:** "Schedule Demo"
- **CTA 2:** "Download Security Whitepaper"
- **CTA 3:** "Talk to Our Team"

### 3. Updated Navigation (Navigation.tsx)

**Products Dropdown:**
- **Remove:** "MAGNIUS Financial Platform"
- **Keep:** "MAGNIUS Banking"
- **Updated Description:** "Cloud-Based Risk Intelligence for All Banks"
- **Link:** `/banking` (or make this the primary product page)

**Consider Simplification:**
Since there's only ONE product now, you could:
- Remove "Products" dropdown entirely
- Make "MAGNIUS Banking" a top-level nav link
- Or keep "Products" but have only one item (future-proofing for more products)

### 4. Updated Footer (Footer.tsx)

**Products Section:**
- **Remove:** "MAGNIUS Financial Platform"
- **Keep:** "MAGNIUS Banking"
- **Add:** "Pricing" | "Request Demo" | "Security Whitepaper"

**Solutions Section:**
- **Remove:** "For Financial Advisors", "For Hedge Funds", "For Family Offices"
- **Keep/Add:** "For Large Banks", "For Regional Banks", "For Community Banks", "For Credit Unions"

**Tagline:**
- **Old:** "Local-first, privacy-first AI platforms engineered exclusively for financial professionals and regulated institutions"
- **New:** "Cloud-based risk intelligence platform preventing bank failures through AI-powered early warning systems"

### 5. Other Pages to Update

**Pricing Page (PricingPage.tsx):**
- Remove Financial Platform pricing tiers
- Show Banking platform pricing (4 tiers: Credit Unions, Community, Regional, Large)
- Emphasize: "Starting at $50K/year (Credit Unions)"
- Include: ROI calculator (savings from prevented failures)

**Solutions Page (SolutionsPage.tsx):**
- Remove: RIA, Hedge Fund, Family Office use cases
- Add: Large Bank, Regional Bank, Community Bank, Credit Union use cases
- Focus: How MAGNIUS prevents failures for each bank type

**Company Page (CompanyPage.tsx):**
- Update mission statement to focus on preventing bank failures
- Highlight: Cloud-native SaaS expertise, network effects, regulatory relationships

**Demo Page (DemoPage.tsx):**
- Update form to ask for: Bank name, Assets under management, Role (CEO, CFO, CRO, CIO)
- Messaging: "See how MAGNIUS detects risks like SVB months before crisis"

**Resources Page (ResourcesPage.tsx):**
- Add: Security whitepaper download
- Add: Blog posts about SVB failure, cloud security, regulatory compliance
- Add: Case studies (when available)

---

## Design Patterns to Maintain

The existing website uses a clean, modern, high-tech design. **Maintain these patterns:**

### Visual Style:
- **Color Scheme:**
  - Background: `bg-neutral-950` (very dark)
  - Accent: `text-blue-400`, `bg-blue-600` (bright blue CTAs)
  - Text: `text-white` (headings), `text-gray-300` (body), `text-gray-400` (secondary)
  - Borders: `border-white/10` (subtle borders)
- **Fonts:**
  - `font-sans` (clean sans-serif)
  - `uppercase tracking-[0.3em]` (uppercase + letter-spacing for labels)
  - `font-black` (extra bold for headlines)
  - `font-semibold` (semi-bold for buttons and nav)
- **Spacing:**
  - Generous padding: `px-6 py-24` sections
  - Grid layouts: `grid gap-8 md:grid-cols-2 lg:grid-cols-3`
  - Max width containers: `mx-auto max-w-6xl` or `max-w-7xl`

### Component Patterns:
- **Hero Sections:**
  - Full-width background with gradient overlay
  - Hex grid pattern: `bg-hex-grid bg-[length:32px_32px] opacity-[0.1]`
  - Two-column layout: text left, mockup/visual right
  - CTAs: Primary (filled blue) + Secondary (outlined)
- **Feature Cards:**
  - `rounded-3xl border border-white/10 bg-white/[0.03] p-8`
  - Icon in colored box: `bg-blue-600/15 text-blue-400`
  - Hover effects: `hover:border-blue-500/40`
- **Stats/Social Proof:**
  - Grid of cards with large numbers
  - `text-4xl font-black` for numbers
  - `text-sm text-gray-400` for labels
- **Comparison Tables:**
  - `rounded-3xl border border-white/10 bg-white/[0.02]`
  - Alternating row colors: `bg-white/[0.015]` vs `bg-transparent`
  - MAGNIUS column highlighted: `text-green-400` or `font-semibold`
- **CTAs:**
  - Primary: `bg-blue-600 hover:bg-blue-500 hover:shadow-glow`
  - Secondary: `border border-white/20 hover:border-blue-400`
  - Uppercase: `uppercase tracking-[0.3em]`
  - Rounded: `rounded-full`

### Animation Patterns (Framer Motion):
- **Fade In:**
  ```tsx
  const fadeIn = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: 'easeOut' },
  };
  ```
- **Use on:** Sections, feature cards, comparison tables
- **Hero animations:** Stagger text and mockup (delay: 0.2s)

### Icons (Lucide React):
- **Use for:** Features, benefits, navigation, social links
- **Style:** `size={18}` or `size={22}` (consistent sizing)
- **Color:** Match section color scheme (blue for features, white for headings)

### Mockup/Dashboard Previews:
- **Container:** `rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-6`
- **Nested Cards:** Show dashboard modules (Liquidity Monitor, Alerts, etc.)
- **Status Badges:** `bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-300`
- **Alert Examples:**
  - 🔴 Critical: `text-amber-300`
  - 🟢 Resolved: `text-emerald-300`
  - 🔵 Info: `text-blue-300`

---

## Technical Implementation Guidelines

### File Structure:
```
src/
├── App.tsx                    [UPDATE: Remove /financial route]
├── pages/
│   ├── HomePage.tsx           [REWRITE: Single product (Banking), cloud-native messaging]
│   ├── BankingPage.tsx        [REWRITE: Cloud SaaS, not on-premise]
│   ├── FinancialPage.tsx      [DELETE: Product doesn't exist]
│   ├── PricingPage.tsx        [UPDATE: Remove Financial, show Banking tiers]
│   ├── SolutionsPage.tsx      [UPDATE: Bank use cases only]
│   ├── CompanyPage.tsx        [UPDATE: Mission = prevent failures]
│   ├── DemoPage.tsx           [UPDATE: Form for banks, not RIAs]
│   ├── ResourcesPage.tsx      [UPDATE: Add security whitepaper]
│   ├── PrivacyPage.tsx        [REVIEW: Update for cloud data handling]
│   └── TermsPage.tsx          [REVIEW: Update for SaaS model]
├── components/
│   ├── Navigation.tsx         [UPDATE: Remove Financial from dropdown]
│   └── Footer.tsx             [UPDATE: Remove Financial links, update tagline]
└── assets/
    └── [Add: Dashboard mockups, bank logos, security badges]
```

### Search & Replace Checklist:

**Global Text Replacements:**
1. "Local-First AI" → "Cloud-Based Risk Intelligence"
2. "On-premise deployment" → "Multi-tenant cloud platform"
3. "100% local processing" → "Secure cloud processing with bank-grade encryption"
4. "Your data never leaves your infrastructure" → "Your data is isolated and encrypted in our SOC 2 Type II certified cloud"
5. "Air-gapped deployment" → "Enterprise-grade cloud security"
6. "Desktop application" → "Web and mobile applications"
7. "Investment professionals" → "Commercial banks and credit unions"
8. "Bloomberg Terminal" → "Regulatory reporting systems"
9. "Financial advisors, hedge funds, family offices" → "Large banks, regional banks, community banks, credit unions"
10. "MAGNIUS Financial Platform" → (delete, only one product now)

**Code-Level Updates:**
- Remove all references to `/financial` route
- Remove `FinancialPage.tsx` import and route in `App.tsx`
- Remove "MAGNIUS Financial Platform" from `products` array in `HomePage.tsx`
- Remove "MAGNIUS Financial Platform" from `productLinks` array in `Navigation.tsx`
- Update `footerColumns` in `Footer.tsx` (remove Financial links)

### Data Structures to Update:

**HomePage.tsx - Products Array (BEFORE):**
```tsx
const products = [
  {
    name: 'MAGNIUS Financial Platform',
    tagline: 'For Investment Professionals',
    // ... financial platform details
  },
  {
    name: 'MAGNIUS Banking',
    tagline: 'For Community Banks & Credit Unions',
    // ... banking details (WRONG: on-premise)
  },
];
```

**HomePage.tsx - Products Array (AFTER):**
```tsx
const products = [
  {
    name: 'MAGNIUS Banking',
    tagline: 'Real-Time Risk Intelligence for All Banks',
    description:
      'Cloud-based early warning system that sits between your bank and the Federal Reserve, using AI to detect liquidity crises, deposit concentrations, and capital deterioration before they trigger regulatory action.',
    features: [
      'Secure cloud data ingestion (API, SFTP, file upload)',
      'AI-powered anomaly detection across all submissions',
      'Real-time risk dashboard (web + mobile apps)',
      'Early warning alerts (dashboard, email, SMS, Slack)',
      'Peer benchmarking with network effects',
      'Regulatory communication hub',
      'Mobile executive access (iOS/Android)',
    ],
    users: 'Large Banks, Regional Banks, Community Banks, Credit Unions',
    cta: '/banking',
    pricing: 'Starting at $50,000/year',
    icon: Building2,
  },
];
```

**BankingPage.tsx - Core Modules Array (BEFORE - WRONG):**
```tsx
const coreModules = [
  { name: 'Fraud Detection & Prevention', ... },
  { name: 'AML/BSA Compliance', ... },
  { name: 'Credit Underwriting', ... },
  { name: 'Customer Intelligence', ... },
  { name: 'Document Processing', ... },
  { name: 'Regulatory Reporting', ... },
];
```

**BankingPage.tsx - Core Modules Array (AFTER - CORRECT):**
```tsx
const coreModules = [
  {
    name: 'Secure Cloud Data Ingestion',
    badge: 'Foundation',
    description: 'Securely upload daily Fed reporting data via API, SFTP, or file upload. Supports Excel, XML, JSON, CSV with automated validation.',
    features: [
      'Drag-and-drop file upload',
      'API and SFTP integration',
      'Automated daily ingestion (scheduled)',
      'Multi-format support (Excel, XML, JSON, CSV)',
      'End-to-end encryption and virus scanning',
      'Complete audit trail',
    ],
    roi: 'Eliminate manual data validation errors',
    status: 'Available now',
  },
  {
    name: 'AI-Powered Anomaly Detection',
    badge: 'Intelligence Core',
    description: 'Machine learning models analyze every submission, comparing to historical trends and peer benchmarks to detect emerging risks.',
    features: [
      'Time-series analysis of bank metrics',
      'Peer benchmarking across all customers',
      'Detects: liquidity drops, deposit concentrations, capital deterioration',
      'GPU-accelerated inference (real-time)',
      'Models continuously learn and improve',
      'Explainable AI (see why alerts triggered)',
    ],
    roi: 'Catch risks months before regulatory exams',
    status: 'Available now',
  },
  {
    name: 'Real-Time Risk Dashboard',
    badge: 'Executive View',
    description: 'Comprehensive bank health view with desktop and mobile access, natural language queries, and customizable alerts.',
    features: [
      'Liquidity Monitor (cash positions, LCR, funding)',
      'Capital Adequacy (Tier 1, Total Capital ratios)',
      'Asset Quality (NPLs, charge-offs, reserves)',
      'Concentration Risk (deposits, loans, geographic)',
      'Peer Benchmarking (compare to similar banks)',
      'Systemic Risk (industry trends, contagion)',
      'AI chatbot for natural language queries',
      'Web app + iOS/Android apps',
    ],
    roi: 'Executives make faster, data-driven decisions',
    status: 'Available now',
  },
  {
    name: 'Early Warning System',
    badge: 'Crisis Prevention',
    description: 'Automated alerts when risk thresholds breached, with multi-level escalation and predictive models for failure probability.',
    features: [
      '🔴 Critical alerts (liquidity crisis, immediate action)',
      '🟠 High alerts (significant risk emerging)',
      '🟡 Medium alerts (trends to monitor)',
      '🔵 Info (peer comparison data)',
      'Multi-channel delivery (dashboard, email, SMS, Slack)',
      'Escalation workflows (board, CEO, CFO, regulators)',
      'Scenario analysis ("what if rates rise 2%?")',
      'Historical playback (when did risk emerge?)',
    ],
    roi: 'Prevent catastrophic failures like SVB',
    status: 'Available now',
  },
  {
    name: 'Collaborative Intelligence',
    badge: 'Network Effects',
    description: 'Anonymous aggregation across all MAGNIUS customers provides industry trends, peer comparisons, and systemic risk detection.',
    features: [
      'Real-time peer benchmarking (anonymous)',
      'Industry trend analysis',
      'Systemic risk detection (contagion indicators)',
      'Best practices identification',
      'Insights: "Your deposit concentration is 30% higher than peers"',
      'Privacy-first: All data anonymized, opt-in participation',
    ],
    roi: 'Unique dataset—only MAGNIUS has this',
    status: 'Available now',
  },
  {
    name: 'Regulatory Communication Hub',
    badge: 'Compliance',
    description: 'Clean, validated data forwarded to Central Bank/Fed with automated filing confirmations and examiner-ready audit trails.',
    features: [
      'Automated data validation before submission',
      'Clean data forwarded to Central Bank/Fed',
      'Filing confirmations and receipts',
      'Complete audit trail (every action logged)',
      'Issue resolution tracking',
      'Optional: Fed/FDIC read-only dashboard access',
    ],
    roi: 'Reduce regulatory examination friction',
    status: 'Available now',
  },
  {
    name: 'Mobile Executive Access',
    badge: 'Cloud-Only',
    description: 'Native iOS and Android apps for executives to monitor bank health, receive push notifications, and respond to alerts on-the-go.',
    features: [
      'Native iOS and Android apps',
      'Executive dashboard (simplified view)',
      'Push notifications for critical alerts',
      'Secure biometric authentication',
      'Offline mode (view cached data)',
      'Share dashboard with board members',
    ],
    roi: 'Decision-makers stay informed anywhere, anytime',
    status: 'Available now',
  },
];
```

### Pricing Tiers to Update:

**BankingPage.tsx - Pricing Plans (CORRECT):**
```tsx
const pricingPlans = [
  {
    name: 'Credit Unions',
    price: '$50,000-$100,000/year',
    target: 'All credit union sizes',
    includes: [
      'All 7 core modules',
      'Up to 15 users',
      'Community features (collaborative intelligence)',
      'Standard support (1-business-day response)',
      'Web + mobile apps',
      '99.9% uptime SLA',
      'SOC 2 Type II certified infrastructure',
    ],
    cta: 'Request Proposal',
  },
  {
    name: 'Community Banks',
    price: '$75,000-$150,000/year',
    target: '$500M-$10B in assets',
    includes: [
      'All 7 core modules',
      'Up to 20 users',
      'Peer benchmarking',
      'Standard support',
      'Web + mobile apps',
      '99.9% uptime SLA',
      'SOC 2 Type II certified infrastructure',
    ],
    cta: 'Request Proposal',
    highlighted: true,
  },
  {
    name: 'Regional Banks',
    price: '$250,000-$500,000/year',
    target: '$10B-$50B in assets',
    includes: [
      'All 7 core modules',
      'Up to 50 users',
      'Advanced AI & analytics',
      'Priority support',
      'API and integrations',
      'Custom model training',
      'Quarterly business reviews',
    ],
    cta: 'Request Proposal',
  },
  {
    name: 'Large Banks',
    price: '$500,000-$2,000,000/year',
    target: '$50B+ in assets',
    includes: [
      'All 7 core modules',
      'Unlimited users',
      'Advanced AI & analytics',
      'White-glove support (24/7)',
      'White-label/custom branding',
      'Dedicated account strategist',
      'Custom integrations',
      'On-site training',
    ],
    cta: 'Contact Sales',
  },
];
```

---

## Key Messaging Framework

Use these exact phrases throughout the website:

### Headlines:
- "Prevent Bank Failures with AI-Powered Early Warning"
- "Real-Time Risk Intelligence Between Your Bank and the Fed"
- "Detect Liquidity Crises Before They Become Catastrophic"
- "The More Banks Join, The Smarter It Gets" (network effects)

### Value Props:
- "Catch risks months before regulatory exams"
- "See how you compare to peers in real-time"
- "Go live in 4 weeks (not 4 months)"
- "99.9% uptime SLA with bank-grade encryption"
- "SOC 2 Type II certified cloud platform"

### Objection Handling (FAQs):
**Q: "We can't put sensitive data in the cloud"**
A: "Every major bank already does (Capital One: 100% AWS, Goldman: Google Cloud). We're SOC 2 Type II certified with bank-grade encryption (AES-256 at rest, TLS 1.3 in transit). Your data is isolated from other banks in our multi-tenant architecture. Multi-factor authentication mandatory. The question isn't 'Is cloud secure?' It's 'Are you more secure without it?'"

**Q: "What about regulatory compliance?"**
A: "FFIEC, OCC, FDIC have all approved cloud for banks. We provide examiner-ready documentation, complete audit trails (every action logged), data residency controls (US data stays in US). We've passed regulatory scrutiny at [X banks, X credit unions]."

**Q: "We need data on-premise for compliance"**
A: "Hybrid model available: Processing happens in our cloud (fast, powerful AI), we automatically sync encrypted exports to your on-premise storage. You keep full archive locally (compliance satisfied). Your core banking system is probably already in the cloud (Jack Henry, Fiserv cloud offerings)."

### CTAs:
- **Primary:** "Schedule Demo" (main CTA everywhere)
- **Secondary:** "Download Security Whitepaper" (for technical buyers)
- **Tertiary:** "Talk to Our Team" (for enterprises)

### Social Proof (Placeholder):
- "Trusted by [X] banks representing $[Y]B in assets"
- "Preventing failures across [X] credit unions"
- "Used by [X]% of regional banks in [state/region]"

---

## Testing Checklist

After refactoring, verify:

### Content Accuracy:
- [ ] Zero mentions of "MAGNIUS Financial Platform" anywhere
- [ ] Zero mentions of "Bloomberg Terminal" replacement
- [ ] Zero mentions of RIAs, hedge funds, family offices (except legacy case studies if relevant)
- [ ] All "local-first" and "on-premise" changed to "cloud-based" and "multi-tenant SaaS"
- [ ] Banking product correctly described as "risk intelligence platform" not "fraud detection"
- [ ] Target market is "ALL banks" (13,700+), not just community banks

### Navigation:
- [ ] Products dropdown shows only "MAGNIUS Banking" (or remove dropdown if single product)
- [ ] No links to `/financial` anywhere
- [ ] Footer updated (no Financial Platform links)
- [ ] All nav links work (no 404s)

### Pages:
- [ ] HomePage.tsx: Single product (Banking), cloud-native messaging
- [ ] BankingPage.tsx: Cloud SaaS, network effects, 7 correct modules
- [ ] FinancialPage.tsx: FILE DELETED
- [ ] PricingPage.tsx: 4 tiers (Credit Unions, Community, Regional, Large), no Financial pricing
- [ ] SolutionsPage.tsx: Bank use cases only
- [ ] DemoPage.tsx: Form asks for bank info, not RIA info

### Design:
- [ ] Visual style consistent (dark background, blue accents, clean typography)
- [ ] Framer Motion animations working (fade in on scroll)
- [ ] Icons from Lucide React (consistent sizing)
- [ ] Dashboard mockups show correct features (liquidity alerts, peer benchmarking, etc.)
- [ ] Mobile responsive (test on phone)

### Functionality:
- [ ] All links work (internal navigation, CTAs)
- [ ] Forms submit correctly (demo requests, contact forms)
- [ ] No console errors (check browser DevTools)
- [ ] Fast page load (<3 seconds)

---

## Final Instructions for AI Agent

When executing this refactoring:

1. **Read the entire CODEX prompt first** (understand the business model deeply)
2. **Delete FinancialPage.tsx** (product doesn't exist)
3. **Rewrite HomePage.tsx** (single product: MAGNIUS Banking as cloud SaaS)
4. **Rewrite BankingPage.tsx** (cloud-native, 7 correct modules, network effects, cloud objection handling)
5. **Update Navigation.tsx** (remove Financial Platform)
6. **Update Footer.tsx** (remove Financial links, update tagline)
7. **Update App.tsx** (remove /financial route)
8. **Update all other pages** (Pricing, Solutions, Company, Demo, Resources)
9. **Global search & replace** (local-first → cloud-based, on-premise → cloud, etc.)
10. **Test everything** (use checklist above)

**Maintain:**
- Existing design system (colors, fonts, spacing, component patterns)
- Framer Motion animations (fade in on scroll)
- TypeScript + React + TailwindCSS stack
- Lucide React icons

**Critical Success Factors:**
- ✅ Website accurately reflects the real business (cloud SaaS risk intelligence platform)
- ✅ No remnants of Financial Platform (completely removed)
- ✅ Clear differentiation: MAGNIUS is **cloud-native** (not on-premise), **preventative** (not reactive), **network effects** (gets better with scale)
- ✅ Messaging handles cloud objections proactively (security, compliance, vendor lock-in)
- ✅ Target market is clear: **ALL banks** (13,700+ institutions), not just community banks
- ✅ Pricing is transparent: $50K-$2M/year based on bank size
- ✅ Implementation timeline: 4 weeks (fast onboarding)

**Your goal:** Transform the website to accurately represent MAGNIUS Banking as the industry-standard, cloud-native risk intelligence platform that prevents bank failures through AI-powered early warning—positioned in the critical data flow between banks and the Federal Reserve.

Good luck! 🚀
