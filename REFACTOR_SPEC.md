# Magnius Website Refactor: AI SDR → Webinar Platform

## Overview
Refactor the entire magnius-website from an "AI SDR" product to an "AI-Powered Webinar Platform" that competes with Zoom Webinars and WebinarJam. The design system (dark theme, colors, animations, Tailwind config, UI components) should be KEPT. Only the CONTENT, COPY, and SECTION STRUCTURE changes.

## Brand Constants (update in lib/constants.ts)

```
BRAND:
  name: 'Magnius'
  tagline: 'AI-Powered Webinars That Convert'
  description: 'The modern webinar platform with AI-powered content generation, high-converting registration pages, and reliable streaming. Built for coaches, creators, and businesses who are tired of overpriced, unreliable alternatives.'
  email: 'hello@magnius.ai'
  calendly: 'https://calendly.com/kishor-relius' (keep same)
  parent: 'A Relius Company'
  social: (keep same)
```

## Pages Structure (update App.tsx routes)

1. **/** - HomePage (main landing)
2. **/features** - Features deep-dive (replaces /how-it-works)
3. **/about** - About page (updated)
4. **/contact** - Contact page (updated)

Remove: SupportAgentPage (delete the file or leave unused)

## NAV_LINKS
```
Home → /
Features → /features
Pricing → /#pricing
Contact → /contact
```

Desktop CTA button: "Start Free" (links to /#pricing or a waitlist)

## HomePage Sections (in order)

### 1. Hero
- Badge: "Now in Beta — Join the Waitlist"
- Headline: "Webinars that **sell**."
- Subheadline: "The AI-powered webinar platform built for coaches, creators, and businesses. Reliable streaming, high-converting pages, and AI that writes your content."
- Primary CTA: "Start Free" (scroll to pricing)
- Secondary CTA: "See Features" (link to /features)
- Stats: "500+ attendees" / "99.9% uptime" / "AI-powered" (or similar aspirational stats)

### 2. ValueProp (3 cards)
1. Title: "Streaming that doesn't crash" / Description: "WebRTC-powered streaming with HLS fallback. Your webinar stays live even at 500+ attendees."
2. Title: "Pages that convert" / Description: "High-converting registration pages with countdown timers, social proof, and A/B testing built in."
3. Title: "AI does the heavy lifting" / Description: "Generate slides, scripts, follow-up emails, and recap docs from just a topic. Your AI content assistant."

### 3. Features/Services Section (replaces AI SDR services)
Title: "Everything You Need to Host, Engage, and Convert"
Subtitle: "One platform. No more duct-taping tools together."

Show 6 feature cards in a grid:
1. **Live Streaming** (icon: Video) - "Low-latency WebRTC streaming with automatic HLS fallback. Reliable at any scale."
2. **Registration Pages** (icon: Layout) - "Beautiful, high-converting landing pages with templates, countdown timers, and social proof."
3. **Interactive Tools** (icon: MessageSquare) - "Live chat, polls, Q&A, hand raises, and timed CTA overlays to keep your audience engaged."
4. **AI Content Assistant** (icon: Sparkles) - "Generate webinar slides, scripts, follow-up emails, and recap docs from a topic outline."
5. **Automated Webinars** (icon: PlayCircle) - "Pre-recorded evergreen webinars that feel live. Schedule replays with simulated chat and timed offers."
6. **Analytics Dashboard** (icon: BarChart3) - "Attendance rates, drop-off points, engagement scores, and conversion tracking in real-time."

### 4. Comparison Section (NEW - replaces EngineShowcase concept)
Title: "Why Coaches Are Switching to Magnius"
A comparison table (styled like cards, NOT an HTML table since this could be viewed on Discord):

| Feature | WebinarJam | Zoom Webinars | Magnius |
- Reliable streaming: ❌ Crashes often / ✅ Solid / ✅ WebRTC + HLS
- AI content generation: ❌ / ❌ / ✅
- Sales CTAs & offers: ✅ Basic / ❌ / ✅ Advanced
- Registration pages: Basic / ❌ None / ✅ Builder
- Evergreen webinars: ✅ (EverWebinar) / ❌ / ✅ Built-in
- Starting price: $49/mo / $79/mo add-on / Free

### 5. Pricing Section
Title: "Simple, Transparent Pricing"
Subtitle: "Start free. Upgrade when you're ready."

4 tiers as pricing cards (show 3 main, Enterprise as text):

**Free** - $0/mo
- 25 attendees
- 1 webinar/month
- 30 min max
- Basic analytics
- Magnius branding
CTA: "Get Started Free"

**Starter** - $39/mo (Most Popular)
- 100 attendees
- Unlimited webinars
- 2 hour max
- Registration pages
- Chat & polls
- Email reminders
- AI content (5/mo)
- Custom branding
CTA: "Start Free Trial"

**Pro** - $79/mo
- 500 attendees
- 3 hosts
- Evergreen webinars
- CTA overlays
- Conversion tracking
- AI content (unlimited)
- Integrations (HubSpot, GHL, Zapier)
CTA: "Start Free Trial"

**Business** - $149/mo
- 2,000 attendees
- 6 hosts
- White-label
- Priority support
- API access
- Advanced analytics
- SSO
CTA: "Contact Sales"

Trust badges: "✓ No credit card required ✓ 14-day free trial ✓ Cancel anytime"

### 6. FAQ Section
Update all Q&A to webinar-related:
1. "How is Magnius different from WebinarJam?" → We're built on modern infrastructure (WebRTC), have native AI content generation, and our platform doesn't crash mid-webinar.
2. "What about Zoom Webinars?" → Zoom is great for meetings but wasn't built for sales webinars. No registration page builder, no CTA overlays, no evergreen webinars, no AI.
3. "How does the AI content assistant work?" → Give it a topic or outline, and it generates webinar slides, a presenter script, follow-up email sequences, and post-webinar recap docs.
4. "Can I run automated/evergreen webinars?" → Yes. Record once, then schedule automated replays that feel live — with simulated chat, timed offers, and urgency elements.
5. "What integrations do you support?" → HubSpot, GoHighLevel, Stripe, Mailchimp, ConvertKit, Zapier, and more. Plus webhooks for custom integrations.
6. "How many attendees can I host?" → Up to 2,000 on our Business plan, and custom for Enterprise. Our WebRTC + HLS hybrid ensures smooth streaming at any scale.

### 7. FinalCTA
Title: "Ready to host webinars that actually convert?"
Subtitle: "Join the beta. Start hosting for free."
CTA: "Start Free" button
Secondary text: "No credit card required."

## /features Page (replaces HowItWorksPage)
Title: "The Complete Webinar Platform"
Subtitle: "From registration to replay — everything you need to host engaging, high-converting webinars."

Show the same 6 features from homepage but with EXPANDED descriptions and feature lists (like the old HowItWorks steps with alternating left/right layout).

Steps:
1. Live Streaming - details about WebRTC, HLS fallback, multi-presenter, screen sharing
2. Registration Pages - templates, custom fields, countdown, social proof, A/B testing
3. Interactive Engagement - chat, polls, Q&A, hand raises, CTA overlays, offer popups
4. AI Content Assistant - slide gen, script writing, follow-up emails, recap docs
5. Automated Webinars - evergreen scheduling, simulated live, timed CTAs, replay hosting
6. Analytics & Follow-up - real-time dashboard, drop-off curves, engagement scoring, email sequences

End with a CTA section.

## /about Page
Update to webinar platform story:
- "We built Magnius because we were tired of paying $500/mo for webinar software that crashes."
- Vision: "Modern, AI-native webinar platform that helps coaches and creators convert."
- Keep the 4-card vision section but update content:
  1. "Reliability First" - Built on WebRTC with HLS fallback. No more mid-webinar crashes.
  2. "AI-Native" - Content generation isn't bolted on — it's built into every workflow.
  3. "Built for Conversion" - Every feature exists to help you sell. CTAs, offers, urgency timers.
  4. "Fair Pricing" - Start free. No $500/mo surprises. Scale as you grow.

## /contact Page
Update copy to webinar platform language. Keep the same structure.

## SERVICES constant (replace entirely)
Remove AI SDR services. Replace with pricing tiers data used by the Pricing component.

## index.html
Update:
- title: "Magnius | AI-Powered Webinar Platform"
- meta description: webinar platform description
- og tags: update all to webinar platform
- keywords: "webinar platform, AI webinars, webinar hosting, live streaming, automated webinars, webinar software"

## Files to modify:
1. src/lib/constants.ts - ALL content constants
2. src/components/sections/Hero.tsx - new copy
3. src/components/sections/ValueProp.tsx - new cards (may need icon changes)
4. src/components/sections/Services.tsx - becomes Features grid (6 cards)
5. src/components/sections/Pricing.tsx - 3-4 tier pricing
6. src/components/sections/FAQ.tsx - new Q&A (driven by constants)
7. src/components/sections/FinalCTA.tsx - new copy
8. src/components/Navigation.tsx - nav links update (driven by constants)
9. src/components/Footer.tsx - tagline update (driven by constants)
10. src/pages/HomePage.tsx - add Comparison section import
11. src/pages/HowItWorksPage.tsx - rename/refactor to FeaturesPage.tsx
12. src/pages/AboutPage.tsx - new copy
13. src/pages/ContactPage.tsx - new copy
14. src/App.tsx - update routes (/how-it-works → /features)
15. index.html - meta tags

## NEW files:
- src/components/sections/Comparison.tsx - competitor comparison section

## Files to keep AS-IS (no changes needed):
- All UI components (Button, Input, GlowCard)
- All effects (GradientMesh, NetworkCanvas, NoiseTexture)
- lib/animations.ts
- index.css
- tailwind.config.js
- vite.config.ts
- All config files

## Important Notes:
- Keep the SAME dark futuristic design system. Same colors, same animations, same vibe.
- The WaitlistForm component should be kept and can be reused (change "Join Waitlist" → "Join the Beta" or "Start Free").
- The BookCallCTA can be kept for the contact/about pages.
- Remove all references to "AI SDR", "cold email", "outreach", "sales development", "appointments", "triage", "pre-call assets" etc.
- Replace with webinar language: "streaming", "registration", "attendees", "engagement", "conversion", "replay", "evergreen", "polls", "Q&A", "chat", "CTA overlays"
