import { useState, useRef } from 'react';

const NODES = [
  // ═══ ROW 1: DATA INFRASTRUCTURE (bottom/foundation layer) ═══
  { id: "conn_hyros", label: "Hyros API", group: "infra", x: -580, y: 1100, desc: "Source connector pulling attribution data, customer journeys, ad-to-sale mapping. Scheduled daily + on-demand. Rich journey data currently trapped inside Hyros UI." },
  { id: "conn_facebook", label: "Facebook Ads API", group: "infra", x: -580, y: 1210, desc: "API integration pulling campaigns, ad sets, ads, spend, impressions, clicks, CTR, CPC, CPL. Daily pull. Currently disconnected from Looker." },
  { id: "conn_webinarjam", label: "WebinarJam API", group: "infra", x: -580, y: 1320, desc: "API pulling webinar sessions, registrants, attendees, show rates. Post-webinar trigger. Currently isolated analytics page with no downstream connection." },
  { id: "conn_ghl", label: "GHL / CRM API", group: "infra", x: -380, y: 1100, desc: "API/webhook integration pulling booked appointments, calendar events, contact records, pipeline stages. Real-time webhook + daily reconciliation." },
  { id: "conn_webhooks", label: "Call/Form Webhooks", group: "infra", x: -380, y: 1210, desc: "Automated call outcome capture replacing manual Google Forms. Webhook-triggered on call completion from CRM/dialer. Eliminates manual data entry." },
  { id: "identity_stitch", label: "Identity Stitching", group: "infra", x: -180, y: 1100, desc: "Matches contacts across all systems using email, phone, Hyros ID, GHL contact ID. Produces canonical contact_id linking every record. Deterministic matching first, probabilistic later." },
  { id: "data_quality", label: "Data Quality Monitor", group: "infra", x: -180, y: 1210, desc: "Freshness checks (alert if source hasn't synced in X hours), missing-field detection, duplicate contact detection, row-count anomaly detection. Trust layer." },
  { id: "canonical_model", label: "Canonical Data Model", group: "infra", x: -180, y: 1320, desc: "Unified schema: Contact, Campaign, WebinarSession, Appointment, CallOutcome, RevenueEvent. All downstream queries use this model. Single source of truth." },
  { id: "attrib_recon", label: "Attribution Reconciliation", group: "infra", x: -380, y: 1320, desc: "Policy engine resolving discrepancies between Hyros and Facebook attribution. Configurable: trust Hyros for revenue, trust Facebook for spend. Displays both, designates primary." },

  // ═══ ROW 2: PAID ACQUISITION LAYER ═══
  { id: "ad_spend", label: "Ad Spend (Total)", group: "ads", x: -580, y: 80, desc: "Total monthly/weekly ad budget across all platforms (Google, Meta, YouTube, TikTok). Master input for all cost metrics." },
  { id: "ad_spend_google", label: "Google Ads Spend", group: "ads", x: -580, y: 190, desc: "Google Ads budget allocation — Search, Display, YouTube pre-roll. Typically highest-intent traffic." },
  { id: "ad_spend_meta", label: "Meta Ads Spend", group: "ads", x: -580, y: 300, desc: "Facebook + Instagram ad spend — includes retargeting, lookalikes, and cold audiences." },
  { id: "ad_spend_other", label: "Other Channels", group: "ads", x: -580, y: 410, desc: "TikTok, LinkedIn, YouTube organic, podcast sponsorships, affiliate spend, etc." },
  { id: "impressions", label: "Impressions", group: "ads", x: -380, y: 80, desc: "Total ad impressions served across all platforms. Top-of-funnel volume indicator." },
  { id: "clicks", label: "Clicks", group: "ads", x: -380, y: 200, desc: "Total ad clicks driving traffic to landing pages. Volume metric before LP conversion." },
  { id: "ctr", label: "CTR", group: "ads", x: -380, y: 320, desc: "Click-Through Rate = Clicks \u00f7 Impressions. Measures ad creative + targeting effectiveness. Benchmark: 2\u20135% search, 0.5\u20131.5% display." },
  { id: "cpc", label: "CPC", group: "ads", x: -380, y: 430, desc: "Cost per Click = Ad Spend \u00f7 Clicks. Platform efficiency metric. Lower CPC = more traffic per dollar." },
  { id: "lp_views", label: "Landing Page Views", group: "ads", x: -180, y: 80, desc: "Clicks that actually loaded the landing page (accounts for bounce/drop-off before load). Gap vs clicks = mobile/speed issues." },
  { id: "lp_conv_rate", label: "LP Conversion Rate", group: "ads", x: -180, y: 210, desc: "Opt-ins \u00f7 Landing Page Views. Measures page effectiveness. Benchmark: 15\u201335% for high-ticket VSL/webinar pages." },
  { id: "optins", label: "Opt-ins / Leads", group: "ads", x: -180, y: 340, desc: "Form fills, webinar registrations, booked calls from paid traffic. Raw lead volume feeding into sales pipeline." },
  { id: "cpl", label: "CPL (Cost per Lead)", group: "ads", x: -180, y: 460, desc: "Ad Spend \u00f7 Opt-ins. Core marketing efficiency metric. Benchmark varies: $20\u2013$80 for high-ticket coaching." },

  // ═══ SMS / SENDBLUE AUTOMATION LAYER ═══
  { id: "sms_engine", label: "SendBlue Engine", group: "sms", x: 20, y: 540, desc: "Integrated SMS automation platform built into the dashboard. Triggers automated text sequences based on funnel events, lead status, and pipeline stage. Replaces manual follow-up." },
  { id: "sms_sent", label: "SMS Sent", group: "sms", x: 20, y: 650, desc: "Total outbound SMS messages sent across all sequences — confirmation, reminder, nurture, re-engagement, and post-call follow-up. Volume metric for SMS channel." },
  { id: "sms_replies", label: "SMS Replies", group: "sms", x: 200, y: 540, desc: "Inbound replies to SMS sequences. Reply rate measures engagement quality. Segment by sequence type to find which messages drive conversation vs get ignored." },
  { id: "sms_reply_rate", label: "SMS Reply Rate", group: "sms", x: 200, y: 650, desc: "Replies \u00f7 Sent. Benchmark: 15\u201325% for warm leads, 5\u201312% for cold. Below 5% = message or timing needs rework. A/B test opening lines and send times." },
  { id: "sms_booked", label: "Booked via SMS", group: "sms", x: 380, y: 540, desc: "Calls booked directly from SMS conversations — either self-booked via link or setter-booked after SMS engagement. Key attribution metric for SMS ROI." },
  { id: "sms_reengaged", label: "Re-engaged Leads", group: "sms", x: 380, y: 650, desc: "Dead or stale leads brought back into the pipeline via SMS re-engagement sequences. Measures the resurrection value of SMS — leads that would otherwise be lost." },
  { id: "sms_show_lift", label: "SMS Show Rate Lift", group: "sms", x: 200, y: 760, desc: "Incremental show rate improvement from SMS reminders vs no-SMS control group. Measures the direct impact of SMS on reducing no-shows. Target: +10\u201320% lift." },
  { id: "sms_cost", label: "SMS Cost", group: "sms", x: 20, y: 760, desc: "Total SendBlue messaging cost — per-message pricing \u00d7 volume. Factor into CAC and channel ROI. Compare SMS cost-per-booking vs setter cost-per-booking." },
  { id: "sms_close_attrib", label: "SMS-Attributed Closes", group: "sms", x: 380, y: 760, desc: "Closed deals where SMS was in the attribution chain — either SMS-booked calls that closed, or re-engaged leads that eventually converted. Revenue directly tied to SMS." },

  // ═══ SOURCE / INPUT LAYER ═══
  { id: "setter_dials", label: "Setter Dials", group: "input", x: 20, y: 100, desc: "Outbound dials made by setters to generate leads." },
  { id: "dm_outreach", label: "DM Outreach", group: "input", x: 20, y: 220, desc: "Direct message outreach for booking calls." },
  { id: "webinar", label: "Webinar Funnel", group: "input", x: 20, y: 340, desc: "Webinar-based lead generation channel." },
  { id: "lead_source", label: "Lead Source Filter", group: "input", x: 20, y: 460, desc: "Looker filter \u2014 segments all metrics by acquisition channel." },
  { id: "webinar_registrants", label: "Webinar Registrants", group: "input", x: 200, y: 340, desc: "Total webinar registrations from all sources (ads, organic, DM). Top of webinar sub-funnel. Compare registrant-to-attendee conversion by source." },
  { id: "webinar_attendees", label: "Webinar Attendees", group: "input", x: 200, y: 460, desc: "Actual webinar attendees. Attendance rate = Attendees \u00f7 Registrants. Benchmark: 25\u201340% for live, 15\u201325% for automated. Low attendance = weak reminder sequence." },

  // ═══ BOOKING LAYER ═══
  { id: "calls_on_calendar", label: "Calls on Calendar", group: "booking", x: 420, y: 100, desc: "Total calls booked across all channels (CEO: 888 target, Looker: 427 MTD)." },
  { id: "booked_dm", label: "Booked Calls (DM)", group: "booking", x: 420, y: 230, desc: "Calls booked via DM channel (CEO tracks weekly)." },
  { id: "booked_dial", label: "Booked Calls (Dial Set)", group: "booking", x: 420, y: 360, desc: "Calls booked from setter dials (CEO tracks weekly)." },
  { id: "total_booked", label: "Total Booked Calls", group: "booking", x: 420, y: 490, desc: "Sum of all booked calls \u2014 feeds into show rate calc." },

  // ═══ SHOW / ATTENDANCE LAYER ═══
  { id: "no_show", label: "No Shows", group: "show", x: 640, y: 80, desc: "Looker: 90 no-shows (\u219351.1%). Inverse of show rate." },
  { id: "show_rate", label: "Show Rate", group: "show", x: 640, y: 200, desc: "CEO: 52.60% avg | Looker: 42.39%. Key conversion gate." },
  { id: "dm_show_rate", label: "DM Show Rate", group: "show", x: 640, y: 320, desc: "CEO: 57% target, trending 48\u201362%. Channel-specific show metric." },
  { id: "webinar_show", label: "Webinar Show Rate", group: "show", x: 640, y: 440, desc: "CEO: 1390.26% avg (likely data error). Needs audit." },
  { id: "cancelled", label: "Cancelled Calls", group: "show", x: 640, y: 550, desc: "Looker: 86 cancelled (\u219347.6%). Reduces live call volume." },
  { id: "rescheduled", label: "Rescheduled", group: "show", x: 640, y: 660, desc: "Looker: 70 rescheduled (\u219345.7%). Re-enters booking pipeline." },

  // ═══ LIVE CALL / PITCH LAYER ═══
  { id: "live_calls", label: "Live Calls", group: "pitch", x: 860, y: 120, desc: "Looker: 181 (\u219362.1%). Calls that actually connected." },
  { id: "calls_pitched", label: "Calls Pitched", group: "pitch", x: 860, y: 270, desc: "Looker: 145 (\u219365.1%). Subset of live calls that received a pitch." },
  { id: "pitch_rate", label: "Pitch Rate", group: "pitch", x: 860, y: 420, desc: "Looker: 80.11% (\u21937.7%). Pitched \u00f7 Live Calls." },

  // ═══ CLOSE LAYER ═══
  { id: "close_rate", label: "Close Rate", group: "close", x: 1060, y: 120, desc: "CEO: 25.40% avg | Looker: 22.10%. Core sales efficiency metric." },
  { id: "closed_won", label: "Closed Won", group: "close", x: 1060, y: 270, desc: "Looker: 40 deals (\u219365.8%). Total closed deals this period." },
  { id: "dm_closes", label: "DM Closes", group: "close", x: 1060, y: 420, desc: "CEO: 12 total target. Closes from DM channel specifically." },
  { id: "pifs", label: "PIFs (Paid in Full)", group: "close", x: 1060, y: 550, desc: "Looker: 37 (\u219361.1%). Full-payment deals vs deposits." },
  { id: "deposits", label: "Deposits", group: "close", x: 1060, y: 660, desc: "Looker: 6 (\u219364.7%). Partial payment deals." },

  // ═══ REVENUE LAYER ═══
  { id: "cash_collected", label: "Cash Collected", group: "revenue", x: 1280, y: 80, desc: "CEO: $462K actual vs $400K target | Looker: $168K MTD Feb." },
  { id: "revenue", label: "Revenue (Contracted)", group: "revenue", x: 1280, y: 200, desc: "Looker: $204,230 (\u219364.2%). Total contracted value." },
  { id: "renewals_cc", label: "Renewals CC", group: "revenue", x: 1280, y: 320, desc: "Looker: $13,321 (\u219111.5%). Recurring revenue from renewals." },
  { id: "aov", label: "AOV (Avg Order Value)", group: "revenue", x: 1280, y: 440, desc: "Looker: $3,748 (\u21930.4%) | CEO avg cash/close: $3,488." },
  { id: "splits", label: "Splits", group: "revenue", x: 1280, y: 560, desc: "Looker: 3 (\u219336.6%). Revenue shared between closers." },
  { id: "renewals", label: "Renewals (Count)", group: "revenue", x: 1280, y: 660, desc: "Looker: 10 (\u219337.5%). Number of renewal deals." },
  { id: "rev_per_lead", label: "Revenue per Lead", group: "revenue", x: 1280, y: 770, desc: "Cash Collected \u00f7 Total Leads. End-to-end efficiency metric showing the dollar value of each lead entering the funnel. Compare by source to find highest-value channels." },

  // ═══ UNIT ECONOMICS / KPI LAYER ═══
  { id: "cc_per_booked", label: "CC per Booked Call", group: "economics", x: 1500, y: 80, desc: "CEO: $465.18 avg | Looker: $393.46. Revenue efficiency per booking." },
  { id: "cc_per_live", label: "Cash per Live Call", group: "economics", x: 1500, y: 200, desc: "CEO: $1,243 avg (webinar) | Looker: $928.22. Revenue per connected call." },
  { id: "cash_per_day", label: "Cash per Day", group: "economics", x: 1500, y: 320, desc: "Looker: \u2014 (not yet populated). Daily revenue run rate." },
  { id: "monthly_pacing", label: "Monthly Pacing", group: "economics", x: 1500, y: 430, desc: "Looker: \u2014 (not populated). Projected month-end based on current pace." },
  { id: "weekly_pacing", label: "Weekly Pacing", group: "economics", x: 1500, y: 540, desc: "Looker: \u2014 (not populated). Projected week-end performance." },
  { id: "cac", label: "CAC", group: "economics", x: 1500, y: 650, desc: "Customer Acquisition Cost = Ad Spend \u00f7 Closed Won. True cost to acquire one paying client. Critical for profitability." },
  { id: "roas", label: "ROAS", group: "economics", x: 1500, y: 760, desc: "Return on Ad Spend = Cash Collected \u00f7 Ad Spend. Benchmark: 3\u201310x for high-ticket. Below 3x = margin squeeze." },
  { id: "ltv_cac", label: "LTV:CAC Ratio", group: "economics", x: 1500, y: 870, desc: "Lifetime Value \u00f7 CAC. Gold standard: 3:1+. Below 1:1 = losing money per customer. Includes renewals + upsells." },

  // ═══ INTELLIGENCE LAYER ═══
  { id: "north_star", label: "North Star Recommender", group: "intelligence", x: 1720, y: 100, desc: "Weekly automated analysis identifying the single highest-leverage metric. Uses funnel bottleneck detection + ROI sensitivity modeling. Output: 'Your North Star this week is [show rate] because improving it by 5% would add $X in revenue.'" },
  { id: "metric_priority", label: "Metric Prioritizer", group: "intelligence", x: 1720, y: 230, desc: "Sensitivity analysis scoring each KPI by: (a) distance from target, (b) estimated revenue impact if improved by 1 unit, (c) trend direction. Outputs ranked list: 'these are the numbers that matter right now.'" },
  { id: "anomaly_engine", label: "Anomaly Detection", group: "intelligence", x: 1720, y: 360, desc: "Statistical alerting when a metric deviates significantly from its recent trend or historical baseline. Catches problems before they compound. Trend breaks vs historical performance." },
  { id: "setter_closer_matrix", label: "Setter\u2194Closer Matrix", group: "intelligence", x: 1720, y: 490, desc: "Heatmap showing which setter-closer pairings produce the best outcomes (show rate, close rate, cash collected). Directly answers the #1 client ask for cross-source drilldowns." },
  { id: "funnel_viz", label: "Funnel Visualization", group: "intelligence", x: 1720, y: 620, desc: "Visual end-to-end funnel: Ad Impression \u2192 Click \u2192 Registration \u2192 Attendance \u2192 Booked Call \u2192 Show \u2192 Close \u2192 Cash. Drop-off rates at each stage. Filterable by channel." },
  { id: "cross_source", label: "Cross-Source Drilldowns", group: "intelligence", x: 1720, y: 750, desc: "Query any metric sliced by: lead source, channel, setter, closer, time period. Example: 'show rate for closer Linen, broken down by setter.' The #1 feature ask." },

  // ═══ PRESENTATION LAYER ═══
  { id: "ceo_dashboard", label: "CEO Dashboard", group: "presentation", x: 1940, y: 100, desc: "Unified single view: North Star, top 5 priority metrics, funnel health, R/Y/G status (auto-calculated), pacing toward monthly targets. Drill-through to any metric. Replaces manual Google Sheet." },
  { id: "dept_dashboards", label: "Dept Dashboards", group: "presentation", x: 1940, y: 250, desc: "Marketing, DM Setting, Outbound Dialing, Closing \u2014 each with owned KPIs, individual performance, and cross-department context. Replaces isolated Looker views." },
  { id: "perf_cards", label: "Performance Cards", group: "presentation", x: 1940, y: 400, desc: "Per-closer / per-setter view showing their metrics broken down by lead source and channel. Replaces the current flat Looker cards with full drill-through." },
  { id: "weekly_digest", label: "Weekly Digest", group: "presentation", x: 1940, y: 550, desc: "Auto-generated summary (Slack/email): key metrics, R/Y/G status, North Star recommendation, top anomalies, pacing update. Replaces manual weekly reporting." },
  { id: "alert_notifs", label: "Alert Notifications", group: "presentation", x: 1940, y: 700, desc: "Real-time push notifications for: off-track pacing, data freshness issues, anomalies, target changes. Configurable per role. Slack webhooks for v1." },

  // ═══ STATUS / TRACKING ═══
  { id: "status", label: "RAG Status (Auto)", group: "status", x: 1500, y: 980, desc: "Auto-calculated R/Y/G from target \u00b1 configurable threshold bands (Green: \u226590% of pacing, Yellow: 75-90%, Red: <75%). Replaces manual coloring." },
  { id: "scoreboard", label: "Closer Scoreboard", group: "status", x: 1280, y: 880, desc: "Looker leaderboard: Leticia, Kylah, Shayna ranked by cash collected." },
  { id: "target_gov", label: "Target Governance", group: "status", x: 1280, y: 980, desc: "Versioned targets with effective-date ranges. Audit log for every change. Owner sign-off workflow. Mid-month changes tracked with reason codes. No more manual spreadsheet targets." },
];

const EDGES = [
  // ═══ Infrastructure → Canonical Model ═══
  { from: "conn_hyros", to: "identity_stitch", insight: "Hyros provides the richest customer journey data but it's trapped in a silo. Identity stitching matches Hyros IDs to GHL contacts and Facebook click IDs to create a unified view." },
  { from: "conn_facebook", to: "identity_stitch", insight: "Facebook Ads click IDs and lead form data get matched to CRM contacts. This bridge is what enables true ROAS calculation \u2014 connecting ad spend to actual closed revenue." },
  { from: "conn_webinarjam", to: "identity_stitch", insight: "WebinarJam registrant emails get matched to CRM contacts. Without this join, you can't trace which webinar attendees eventually closed \u2014 making webinar ROI a guess." },
  { from: "conn_ghl", to: "identity_stitch", insight: "GHL contact records are the anchor for identity stitching. Every appointment, call outcome, and pipeline stage maps back to a GHL contact_id that links to all other systems." },
  { from: "conn_webhooks", to: "canonical_model", insight: "Automated call outcome capture feeds directly into the canonical model, replacing manual Google Forms. This eliminates the biggest source of data lag and entry errors." },
  { from: "identity_stitch", to: "canonical_model", insight: "The stitched contact_id becomes the universal join key. Every downstream metric, drilldown, and attribution chain depends on this link being accurate and complete." },
  { from: "data_quality", to: "canonical_model", insight: "Data quality checks run before data enters the canonical model. Freshness, completeness, and dedup gates ensure downstream metrics are trustworthy." },
  { from: "conn_hyros", to: "attrib_recon", insight: "Hyros attribution data often disagrees with Facebook on which ad drove a sale. The reconciliation engine resolves this with configurable rules \u2014 trust Hyros for revenue, Facebook for spend." },
  { from: "conn_facebook", to: "attrib_recon", insight: "Facebook's attribution window and model differ from Hyros. The reconciliation engine displays both and lets the team designate a primary source per metric to end debates." },
  { from: "attrib_recon", to: "canonical_model", insight: "Reconciled attribution data feeds the canonical model with a single 'source of truth' per metric, while preserving both Hyros and Facebook views for comparison." },
  { from: "data_quality", to: "alert_notifs", insight: "When data quality checks fail \u2014 stale source, missing fields, duplicate contacts \u2014 alerts fire immediately to Slack. Team knows within minutes, not days, when data is broken." },

  // ═══ Infrastructure → Ads (data feeds) ═══
  { from: "canonical_model", to: "ad_spend", insight: "Canonical model aggregates ad spend from all connected platforms into a single, reconciled total. This is the foundation for CAC, ROAS, and CPL calculations." },
  { from: "canonical_model", to: "impressions", insight: "Impression data flows from the canonical model after deduplication and source validation. Cross-platform impressions are unified into a single metric." },

  // ═══ Ads internal edges ═══
  { from: "ad_spend", to: "ad_spend_google", insight: "Compare Google's share of total spend against its share of closed deals to see if you're over- or under-investing in this channel." },
  { from: "ad_spend", to: "ad_spend_meta", insight: "Compare Meta's share of total spend against its share of closed deals to evaluate whether Facebook/Instagram deserves more or less budget." },
  { from: "ad_spend", to: "ad_spend_other", insight: "Track what percentage of budget goes to experimental channels and whether they produce leads at a competitive CPL compared to Google/Meta." },
  { from: "ad_spend_google", to: "impressions", insight: "If Google spend increases but impressions stay flat, you're hitting audience saturation or your bids are losing auctions \u2014 check quality score and keyword competition." },
  { from: "ad_spend_meta", to: "impressions", insight: "If Meta impressions spike but quality drops, your audience is too broad \u2014 tighten targeting or refresh creatives before scaling." },
  { from: "ad_spend_other", to: "impressions", insight: "Evaluate if secondary channels deliver impressions to a unique audience or just overlap with Google/Meta \u2014 overlap means wasted reach." },
  { from: "impressions", to: "clicks", insight: "The drop-off from impressions to clicks reveals how compelling your ads are \u2014 a large gap means your creative or headline isn't stopping the scroll." },
  { from: "impressions", to: "ctr", insight: "Impressions are the denominator of CTR \u2014 if impressions grow faster than clicks, your CTR is declining which signals creative fatigue or poor targeting." },
  { from: "clicks", to: "ctr", insight: "Clicks are the numerator of CTR \u2014 rising clicks with stable impressions means your ad creative is resonating and you should scale spend on that variation." },
  { from: "ad_spend", to: "cpc", insight: "Total ad spend divided by total clicks gives your blended CPC \u2014 if CPC rises while CPL stays flat, your landing page is compensating well." },
  { from: "clicks", to: "cpc", insight: "More clicks at the same spend means your CPC is dropping \u2014 this usually signals better ad relevance, higher quality scores, or less auction competition." },
  { from: "clicks", to: "lp_views", insight: "The gap between clicks and landing page views reveals how many people bounce before the page loads \u2014 a gap over 20% means page speed or mobile experience is killing you." },
  { from: "lp_views", to: "lp_conv_rate", insight: "Landing page views are the denominator of LP conversion rate \u2014 if views rise but opt-ins don't, the page messaging or offer isn't matching the ad promise." },
  { from: "optins", to: "lp_conv_rate", insight: "Opt-ins are the numerator of LP conversion rate \u2014 test headlines, VSL length, and form placement to push this number up without increasing ad spend." },
  { from: "lp_views", to: "optins", insight: "The conversion from page view to opt-in is the single highest-leverage marketing metric \u2014 a 10% improvement here compounds through the entire downstream funnel." },
  { from: "ad_spend", to: "cpl", insight: "Ad spend is the numerator of CPL \u2014 if spend scales but CPL holds steady, you've found a scalable audience; if CPL rises with spend, you're exhausting the audience." },
  { from: "optins", to: "cpl", insight: "Opt-ins are the denominator of CPL \u2014 more opt-ins at the same spend means your funnel is getting more efficient and you have room to scale." },

  // ═══ Ads \u2192 Lead Generation (bridge) ═══
  { from: "optins", to: "setter_dials", insight: "Paid opt-ins become the call list setters work through \u2014 compare setter connect rates on paid leads vs organic to measure lead quality from ads." },
  { from: "optins", to: "dm_outreach", insight: "Paid leads that don't book immediately become DM targets \u2014 track how many ad leads convert via DM follow-up vs cold outreach to measure ad-sourced intent." },
  { from: "optins", to: "webinar", insight: "Webinar registrations from ads feed this funnel \u2014 compare webinar show rate for paid registrants vs organic to gauge whether paid traffic is actually engaged." },
  { from: "optins", to: "calls_on_calendar", insight: "Some paid leads book directly from the funnel without setter touch \u2014 track what percentage self-book to understand how intent-driven your ad traffic is." },

  // ═══ Webinar sub-funnel ═══
  { from: "webinar", to: "webinar_registrants", insight: "Webinar registrant count is the top of the webinar sub-funnel. Compare registration volume by source (ads vs organic vs DM invite) to understand which channel fills webinars." },
  { from: "webinar_registrants", to: "webinar_attendees", insight: "Registrant-to-attendee conversion is the webinar show rate. Benchmark: 25\u201340% live, 15\u201325% automated. Low conversion = weak reminder sequence or poor event positioning." },
  { from: "webinar_attendees", to: "calls_on_calendar", insight: "Webinar attendees who book a call are the highest-intent leads in the funnel. Their close rate is typically 2\u20133x higher than cold-booked calls." },

  // ═══ SMS Automation edges ═══
  { from: "optins", to: "sms_engine", insight: "New opt-ins trigger automated SMS welcome sequences. First-touch SMS within 5 minutes of opt-in has 3\u20135x higher engagement than delayed outreach." },
  { from: "sms_engine", to: "sms_sent", insight: "The SMS engine dispatches messages across all sequence types \u2014 confirmation, reminder, nurture, re-engagement. Volume here is the denominator for reply rate and cost calculations." },
  { from: "sms_sent", to: "sms_replies", insight: "Reply volume divided by sent volume gives reply rate. Low replies on high volume means your messages aren't compelling \u2014 test personalization, timing, and direct questions vs statements." },
  { from: "sms_sent", to: "sms_reply_rate", insight: "SMS sent is the denominator. If you scale send volume and reply rate drops, you're hitting audience fatigue or sending to lower-quality segments." },
  { from: "sms_replies", to: "sms_reply_rate", insight: "Replies are the numerator. Rising replies at stable volume means your messaging is improving \u2014 double down on the winning templates." },
  { from: "sms_replies", to: "sms_booked", insight: "SMS replies that convert to booked calls measure the sales effectiveness of your text conversations. Compare SMS-booked show rates against other channels." },
  { from: "sms_booked", to: "calls_on_calendar", insight: "SMS-booked calls enter the main booking pipeline. Track their show rate separately \u2014 SMS-booked leads often have higher show rates because the conversation is fresh." },
  { from: "sms_engine", to: "sms_reengaged", insight: "Re-engagement sequences target leads that went cold (no-shows, cancelled, unresponsive). These are leads with zero additional acquisition cost \u2014 pure upside." },
  { from: "sms_reengaged", to: "calls_on_calendar", insight: "Re-engaged leads booking calls represents recovered pipeline. Calculate the revenue value: re-engaged bookings \u00d7 show rate \u00d7 close rate \u00d7 AOV = revenue rescued by SMS." },
  { from: "no_show", to: "sms_engine", insight: "No-shows automatically trigger SMS re-engagement sequences. 'Hey, we missed you today \u2014 want to reschedule?' within 30 minutes of the no-show has the highest recovery rate." },
  { from: "cancelled", to: "sms_engine", insight: "Cancellations trigger a save sequence via SMS. Immediate outreach catches cold feet before the lead goes dark. Track cancellation-to-rebook rate as an SMS efficiency metric." },
  { from: "total_booked", to: "sms_engine", insight: "Booked calls trigger SMS confirmation + reminder sequences. Confirmation within 1 minute, reminder at 24hrs and 1hr before. This is the primary lever for improving show rate." },
  { from: "sms_engine", to: "sms_show_lift", insight: "Compare show rates for leads that received SMS reminders vs those that didn't. The delta is the SMS show rate lift \u2014 your ROI justification for the SMS investment." },
  { from: "sms_show_lift", to: "show_rate", insight: "SMS reminder sequences directly lift overall show rate. If SMS adds +15% show rate on 400 bookings, that's 60 more live calls per month flowing through the pipeline." },
  { from: "sms_sent", to: "sms_cost", insight: "SMS cost = messages sent \u00d7 per-message rate. Track as a separate line item in acquisition cost. Compare cost-per-booking via SMS vs cost-per-booking via setter dials." },
  { from: "sms_cost", to: "cac", insight: "SMS cost adds to total acquisition cost in the CAC calculation. But if SMS reduces no-shows and re-engages dead leads, the net CAC impact is often negative (savings > cost)." },
  { from: "sms_booked", to: "sms_close_attrib", insight: "SMS-booked calls that close are directly attributed to the SMS channel. Track close rate on SMS-booked vs other channels to measure SMS lead quality." },
  { from: "sms_reengaged", to: "sms_close_attrib", insight: "Re-engaged leads that eventually close represent pure recovered revenue. These deals would not have happened without the SMS sequence \u2014 the strongest ROI proof for SendBlue." },
  { from: "sms_close_attrib", to: "cash_collected", insight: "SMS-attributed revenue feeds into total cash collected. Isolate this to calculate SMS ROAS: SMS-attributed cash \u00f7 SMS cost. Benchmark: 10\u201330x for well-tuned sequences." },

  // ═══ Input \u2192 Booking ═══
  { from: "setter_dials", to: "booked_dial", insight: "The ratio of dials to booked calls is setter efficiency \u2014 if it takes 50+ dials per booking, either the lead list quality is poor or the script needs reworking." },
  { from: "setter_dials", to: "calls_on_calendar", insight: "Setter dials contribute to total calendar volume \u2014 track what percentage of all calendar bookings come from setters vs self-booked to plan headcount." },
  { from: "dm_outreach", to: "booked_dm", insight: "DM-to-booking conversion rate shows how well your messaging resonates \u2014 A/B test opening lines and track response-to-book ratios by message variant." },
  { from: "webinar", to: "calls_on_calendar", insight: "Webinar attendees who book a call are the highest-intent leads \u2014 compare their close rate against other channels to justify webinar ad spend." },
  { from: "webinar", to: "webinar_show", insight: "Webinar registrations vs actual attendees reveals your pre-event nurture quality \u2014 low show rates mean your reminder sequence and event positioning need work." },
  { from: "lead_source", to: "calls_on_calendar", insight: "Filtering bookings by lead source lets you see which channel produces the most calls \u2014 cross-reference with close rate to find your most profitable source." },

  // ═══ Booking \u2192 Show ═══
  { from: "booked_dm", to: "total_booked", insight: "DM bookings feed into total booked calls \u2014 if DM bookings decline, check whether message volume dropped or if response rates are falling." },
  { from: "booked_dial", to: "total_booked", insight: "Dial-set bookings contribute to total volume \u2014 compare cost-per-booking for dial-sourced calls vs DM-sourced to optimize setter allocation." },
  { from: "calls_on_calendar", to: "total_booked", insight: "Calendar bookings should equal total booked calls \u2014 any mismatch means some bookings aren't being tracked or are falling through CRM cracks." },
  { from: "total_booked", to: "show_rate", insight: "Total booked is the denominator of show rate \u2014 if bookings increase but shows don't, your confirmation and reminder sequence is failing to hold commitment." },
  { from: "total_booked", to: "no_show", insight: "No-shows are the inverse of show rate on total bookings \u2014 segment no-shows by lead source to find which channels produce flaky leads." },
  { from: "booked_dm", to: "dm_show_rate", insight: "DM-booked calls have their own show rate \u2014 compare it against dial-booked and webinar-booked show rates to see which channel produces the most committed prospects." },

  // ═══ Show \u2192 Live/Pitch ═══
  { from: "show_rate", to: "live_calls", insight: "Show rate directly determines how many live calls your team gets \u2014 a 10% improvement in show rate at 400 bookings means 40 more live opportunities per month." },
  { from: "no_show", to: "live_calls", insight: "Every no-show is a live call that never happened \u2014 calculate the revenue lost per no-show (AOV \u00d7 close rate) to justify investment in reminder automation." },
  { from: "cancelled", to: "live_calls", insight: "Cancellations directly reduce live call volume \u2014 track when cancellations happen (same day vs 24hrs+) to identify if it's cold feet or scheduling friction." },
  { from: "rescheduled", to: "calls_on_calendar", insight: "Rescheduled calls re-enter the booking pipeline \u2014 track how many rescheduled calls eventually show vs become permanent no-shows to measure reschedule quality." },
  { from: "live_calls", to: "calls_pitched", insight: "Not every live call gets pitched \u2014 the gap reveals disqualifications, early hang-ups, or poor call control; coach closers if this ratio drops below 80%." },
  { from: "calls_pitched", to: "pitch_rate", insight: "Calls pitched divided by live calls gives pitch rate \u2014 a declining pitch rate means closers are spending too long on discovery or encountering unqualified leads." },
  { from: "live_calls", to: "pitch_rate", insight: "Live calls are the denominator of pitch rate \u2014 if live calls drop but pitch rate rises, your remaining leads are higher quality even though volume is down." },

  // ═══ Pitch \u2192 Close ═══
  { from: "calls_pitched", to: "close_rate", insight: "Calls pitched is the denominator of close rate \u2014 if pitches increase but close rate drops, you may be pitching unqualified prospects or the offer needs repositioning." },
  { from: "calls_pitched", to: "closed_won", insight: "Every pitched call is a deal opportunity \u2014 multiply pitched calls by close rate to forecast how many deals you'll land, then work backward to set booking targets." },
  { from: "close_rate", to: "closed_won", insight: "Close rate multiplied by pitched calls predicts deal volume \u2014 a 3% improvement in close rate at 145 pitches means roughly 4 more deals per month." },
  { from: "closed_won", to: "pifs", insight: "The split between PIFs and deposits reveals cash flow health \u2014 a high PIF ratio means more cash upfront and less collection risk on payment plans." },
  { from: "closed_won", to: "deposits", insight: "Deposits mean deferred revenue and collection risk \u2014 track what percentage of deposit deals fully pay out vs default to calculate true deposit value." },
  { from: "dm_show_rate", to: "dm_closes", insight: "DM show rate feeds DM close volume \u2014 if DM show rates are higher than average but DM closes are low, the problem is on the closer side, not the marketing side." },

  // ═══ Close \u2192 Revenue ═══
  { from: "closed_won", to: "cash_collected", insight: "Each closed deal generates immediate cash \u2014 multiply closed won by average cash-per-close to forecast monthly cash collection against targets." },
  { from: "closed_won", to: "revenue", insight: "Closed deals create contracted revenue (including payment plans) \u2014 compare contracted revenue to cash collected to see how much future revenue is outstanding." },
  { from: "pifs", to: "cash_collected", insight: "PIFs deliver the full deal value on day one \u2014 if PIF count rises, cash collected will outpace contracted revenue, improving cash flow and reducing default risk." },
  { from: "deposits", to: "cash_collected", insight: "Deposits contribute partial cash now with the rest due later \u2014 track deposit-to-full-payment completion rates to forecast how much of this cash actually materializes." },
  { from: "closed_won", to: "aov", insight: "AOV is total cash divided by closed deals \u2014 if AOV drops while deal count rises, you may be discounting too aggressively or attracting lower-tier buyers." },
  { from: "renewals", to: "renewals_cc", insight: "Each renewal generates recurring revenue \u2014 track renewal rate and renewal AOV separately to understand retention economics and LTV contribution." },
  { from: "renewals_cc", to: "cash_collected", insight: "Renewal cash adds to total cash collected without new acquisition cost \u2014 growing renewal revenue is the fastest path to improving ROAS and overall profitability." },
  { from: "cash_collected", to: "rev_per_lead", insight: "Cash collected is the numerator of revenue per lead. This end-to-end metric captures the combined effect of every funnel stage from ad click to close." },
  { from: "optins", to: "rev_per_lead", insight: "Total leads (opt-ins) is the denominator. Revenue per lead by source reveals which acquisition channels produce the most valuable prospects end-to-end." },

  // ═══ Revenue \u2192 Economics ═══
  { from: "cash_collected", to: "cc_per_booked", insight: "Cash collected per booked call shows the dollar value of each booking \u2014 compare across channels to find which lead source produces the most valuable bookings." },
  { from: "total_booked", to: "cc_per_booked", insight: "Total bookings are the denominator of CC per booked call \u2014 if bookings rise but revenue per booking drops, you're adding lower-quality leads to the pipeline." },
  { from: "cash_collected", to: "cc_per_live", insight: "Cash per live call is a key sales efficiency metric \u2014 it tells you the dollar value of each connected conversation, useful for setting closer compensation benchmarks." },
  { from: "live_calls", to: "cc_per_live", insight: "Live calls are the denominator \u2014 fewer live calls with the same revenue means each call is more valuable, which could signal better lead quality or stronger closing." },
  { from: "cash_collected", to: "cash_per_day", insight: "Daily cash run rate is total cash collected divided by business days elapsed \u2014 use this to project month-end revenue and decide whether to increase ad spend mid-month." },
  { from: "cash_per_day", to: "monthly_pacing", insight: "Cash per day extrapolated to month-end gives your pacing projection \u2014 if pacing is below target by day 10, you need to either increase bookings or improve close rate immediately." },
  { from: "cash_per_day", to: "weekly_pacing", insight: "Weekly pacing smooths out daily variance \u2014 compare week-over-week pacing to catch declining momentum before it becomes a monthly miss." },

  // ═══ Marketing economics ═══
  { from: "ad_spend", to: "cac", insight: "Ad spend is the numerator of CAC \u2014 if you increase spend without proportionally increasing closed deals, your CAC rises and margins shrink." },
  { from: "closed_won", to: "cac", insight: "Closed deals are the denominator of CAC \u2014 improving close rate is the most direct way to lower CAC without cutting ad spend." },
  { from: "cash_collected", to: "roas", insight: "Cash collected is the numerator of ROAS \u2014 every dollar of cash collected relative to ad spend tells you if paid acquisition is profitable or burning money." },
  { from: "ad_spend", to: "roas", insight: "Ad spend is the denominator of ROAS \u2014 scaling spend only makes sense if ROAS holds above 3x; below that, team costs and overhead eat all margin." },
  { from: "aov", to: "ltv_cac", insight: "AOV is the starting point for LTV calculation \u2014 higher AOV means each customer contributes more value, which gives you more room to spend on acquisition." },
  { from: "renewals_cc", to: "ltv_cac", insight: "Renewal revenue extends LTV beyond the initial sale \u2014 if renewals are growing, your true LTV is higher than front-end AOV suggests, justifying higher CAC." },
  { from: "cac", to: "ltv_cac", insight: "CAC is the denominator of LTV:CAC \u2014 even with moderate AOV, a low CAC from efficient funnels can produce an exceptional LTV:CAC ratio." },

  // ═══ Economics \u2192 Intelligence ═══
  { from: "ltv_cac", to: "north_star", insight: "LTV:CAC ratio is a key input for North Star recommendations. If LTV:CAC is strong, the recommender might focus on volume metrics; if it's weak, it'll prioritize efficiency metrics." },
  { from: "roas", to: "metric_priority", insight: "ROAS feeds the prioritization engine \u2014 when ROAS drops below 3x, marketing metrics get bumped to the top of the priority stack regardless of other signals." },
  { from: "cash_collected", to: "anomaly_engine", insight: "Cash collected is the most-watched metric for anomaly detection. A sudden drop triggers investigation across the entire upstream funnel to identify the breaking point." },
  { from: "close_rate", to: "anomaly_engine", insight: "Close rate anomalies surface closer performance problems or lead quality shifts before they hit revenue. A 5% drop in close rate compounds into significant cash shortfalls." },
  { from: "show_rate", to: "anomaly_engine", insight: "Show rate anomalies are leading indicators \u2014 declining show rates predict future cash shortfalls 2\u20133 weeks before they appear in the revenue line." },
  { from: "show_rate", to: "setter_closer_matrix", insight: "Show rate by setter feeds the setter\u2194closer matrix. Which setters book leads that actually show up? This reveals setter quality beyond just booking volume." },
  { from: "close_rate", to: "setter_closer_matrix", insight: "Close rate by closer, sliced by which setter sourced the lead, reveals which pairings produce the best outcomes. Optimize team routing based on this data." },
  { from: "cash_collected", to: "setter_closer_matrix", insight: "Cash collected per setter\u2194closer pairing is the bottom-line view. A setter might book fewer calls but their leads close at 2x the rate, making them more valuable." },
  { from: "cash_collected", to: "funnel_viz", insight: "Cash collected is the bottom of the funnel visualization. The funnel shows cumulative drop-off from impression to cash, making it obvious where the biggest leaks are." },
  { from: "optins", to: "funnel_viz", insight: "Opt-ins appear mid-funnel in the visualization. The drop from LP views to opt-ins and from opt-ins to booked calls are the two highest-leverage conversion points." },
  { from: "close_rate", to: "cross_source", insight: "Close rate sliced by any dimension (source, setter, closer, channel) is the core cross-source drilldown. Example: 'Why is close rate 30% from webinar leads but 18% from cold DM?'" },
  { from: "show_rate", to: "cross_source", insight: "Show rate by source and channel reveals which lead types are most committed. Cross-source drilldowns answer: 'Do Google leads show up more than Meta leads?'" },

  // ═══ Intelligence \u2192 Presentation ═══
  { from: "north_star", to: "ceo_dashboard", insight: "The North Star recommendation appears as the top-line focus item on the CEO dashboard. One metric, one explanation, one action \u2014 clarity for the weekly leadership meeting." },
  { from: "metric_priority", to: "ceo_dashboard", insight: "The top 5 prioritized metrics populate the CEO dashboard's focus area. The CEO sees what matters most this week without scrolling through 40+ KPIs." },
  { from: "anomaly_engine", to: "alert_notifs", insight: "Anomaly detection triggers real-time alerts. When a metric breaks from its trend, the right people get notified immediately \u2014 not at the next weekly meeting." },
  { from: "anomaly_engine", to: "weekly_digest", insight: "Top anomalies from the past week appear in the automated digest. The team sees: 'Show rate dropped 8% this week vs 4-week average \u2014 investigate reminder sequence.'" },
  { from: "setter_closer_matrix", to: "dept_dashboards", insight: "The setter\u2194closer matrix feeds department dashboards. Setting managers see which of their setters produce the best leads; closing managers see which pairings to optimize." },
  { from: "cross_source", to: "dept_dashboards", insight: "Cross-source drilldowns power every department dashboard. Marketing sees performance by channel, setters see their metrics by lead source, closers see their stats by setter." },
  { from: "funnel_viz", to: "ceo_dashboard", insight: "The end-to-end funnel visualization gives the CEO a single-glance view of pipeline health. Drop-off rates at each stage make it immediately clear where to focus." },
  { from: "setter_closer_matrix", to: "perf_cards", insight: "Individual performance cards show each team member their stats broken down by every relevant dimension \u2014 powered by the setter\u2194closer matrix and cross-source data." },
  { from: "north_star", to: "weekly_digest", insight: "The weekly digest leads with the North Star recommendation: 'This week, focus on [show rate]. Improving it by 5% would add ~$18K in monthly revenue. Here's why...'" },
  { from: "metric_priority", to: "weekly_digest", insight: "The prioritized metric stack appears in the weekly digest so the team sees what's urgent before the meeting starts. No more debating which numbers to focus on." },

  // ═══ Status connections ═══
  { from: "cash_collected", to: "status", insight: "Cash collected is the primary trigger for RAG status \u2014 auto-calculated from target \u00b1 threshold bands. Green: \u226590% of pacing, Yellow: 75-90%, Red: <75%." },
  { from: "close_rate", to: "status", insight: "Close rate feeds auto-calculated RAG status \u2014 a sustained drop below 20% flags red, signaling either lead quality issues or closer performance problems." },
  { from: "show_rate", to: "status", insight: "Show rate is a leading indicator on the auto-RAG board \u2014 declining show rates predict future cash shortfalls 2\u20133 weeks before they hit the revenue line." },
  { from: "roas", to: "status", insight: "ROAS triggers auto-RAG status for marketing accountability \u2014 if return on ad spend drops below 3x, marketing needs to either cut spend or fix the funnel fast." },
  { from: "cpl", to: "status", insight: "CPL trending above benchmarks triggers a yellow/red flag \u2014 early warning that ad costs are rising or funnel conversion is declining before it shows in revenue." },
  { from: "target_gov", to: "status", insight: "Target governance feeds RAG status with versioned, auditable targets. No more manual coloring \u2014 thresholds are defined per metric with owner sign-off required for changes." },
  { from: "closed_won", to: "scoreboard", insight: "Closed deal count ranks closers on the leaderboard \u2014 compare each closer's deal volume against their close rate to distinguish volume-driven vs efficiency-driven performers." },
  { from: "cash_collected", to: "scoreboard", insight: "Cash collected per closer determines leaderboard ranking \u2014 a closer with fewer deals but higher AOV may outperform a high-volume closer on total cash." },
  { from: "status", to: "alert_notifs", insight: "When any metric's RAG status flips to red, an immediate alert fires to the metric owner and CEO. No waiting for the weekly meeting to discover off-track performance." },
  { from: "status", to: "ceo_dashboard", insight: "Auto-calculated RAG status populates the CEO dashboard's health indicators. Every metric shows green/yellow/red with zero manual intervention." },
];

const GROUP_META: Record<string, { color: string; label: string; icon: string }> = {
  infra: { color: "#a78bfa", label: "Data Infrastructure", icon: "\u{1F527}" },
  ads: { color: "#e879f9", label: "Paid Acquisition", icon: "\u{1F4B8}" },
  sms: { color: "#2dd4bf", label: "SMS / SendBlue", icon: "\u{1F4F1}" },
  input: { color: "#6366f1", label: "Lead Generation", icon: "\u{1F4E1}" },
  booking: { color: "#8b5cf6", label: "Booking Pipeline", icon: "\u{1F4C5}" },
  show: { color: "#ec4899", label: "Show / Attendance", icon: "\u{1F441}" },
  pitch: { color: "#f59e0b", label: "Pitch Delivery", icon: "\u{1F3AF}" },
  close: { color: "#10b981", label: "Closing", icon: "\u{1F91D}" },
  revenue: { color: "#06b6d4", label: "Revenue", icon: "\u{1F4B0}" },
  economics: { color: "#f97316", label: "Unit Economics", icon: "\u{1F4CA}" },
  intelligence: { color: "#818cf8", label: "Intelligence", icon: "\u{1F9E0}" },
  presentation: { color: "#34d399", label: "Dashboards", icon: "\u{1F4BB}" },
  status: { color: "#ef4444", label: "Tracking / Status", icon: "\u{1F6A6}" },
};

const SCALE = 0.28;
const OFFSET_X = 195;
const OFFSET_Y = 14;

function getNodePos(node: { x: number; y: number }) {
  return { x: node.x * SCALE + OFFSET_X, y: node.y * SCALE + OFFSET_Y };
}

function getEdgePath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const p1 = getNodePos(from);
  const p2 = getNodePos(to);
  const mx = (p1.x + p2.x) / 2;
  const my = (p1.y + p2.y) / 2;
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const cx = mx - dy * 0.1;
  const cy = my + dx * 0.1;
  return { p1, p2, cx, cy, d: `M ${p1.x} ${p1.y} Q ${cx} ${cy} ${p2.x} ${p2.y}` };
}

interface TooltipState {
  text: string;
  label: string;
  group: string;
  x: number;
  y: number;
}

interface EdgeTooltipState {
  insight: string;
  fromLabel: string;
  toLabel: string;
  fromGroup: string;
  toGroup: string;
  x: number;
  y: number;
}

export default function SystemMapPage() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [edgeTooltip, setEdgeTooltip] = useState<EdgeTooltipState | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const nodeMap: Record<string, (typeof NODES)[number]> = {};
  NODES.forEach((n) => (nodeMap[n.id] = n));

  const connectedIds = new Set<string>();
  const activeEdges = new Set<number>();
  if (activeNode) {
    connectedIds.add(activeNode);
    EDGES.forEach((e, i) => {
      if (e.from === activeNode || e.to === activeNode) {
        connectedIds.add(e.from);
        connectedIds.add(e.to);
        activeEdges.add(i);
      }
    });
  }

  const handleNodeEnter = (node: (typeof NODES)[number], e: React.MouseEvent) => {
    setActiveNode(node.id);
    setEdgeTooltip(null);
    const rect = svgRef.current?.getBoundingClientRect();
    if (rect) {
      setTooltip({
        text: node.desc,
        label: node.label,
        group: node.group,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleNodeLeave = () => {
    setActiveNode(null);
    setTooltip(null);
  };

  const handleEdgeEnter = (
    edge: (typeof EDGES)[number],
    fromNode: (typeof NODES)[number],
    toNode: (typeof NODES)[number],
    e: React.MouseEvent,
  ) => {
    setTooltip(null);
    setActiveNode(null);
    const rect = svgRef.current?.getBoundingClientRect();
    if (rect) {
      setEdgeTooltip({
        insight: edge.insight,
        fromLabel: fromNode.label,
        toLabel: toNode.label,
        fromGroup: fromNode.group,
        toGroup: toNode.group,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleEdgeMove = (e: React.MouseEvent) => {
    if (edgeTooltip) {
      const rect = svgRef.current?.getBoundingClientRect();
      if (rect) {
        setEdgeTooltip((prev) =>
          prev
            ? {
                ...prev,
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              }
            : null,
        );
      }
    }
  };

  const handleEdgeLeave = () => {
    setEdgeTooltip(null);
  };

  const analysisCards = [
    {
      title: "\u{1F527} Data Infrastructure",
      color: "#a78bfa",
      items: [
        "5 source connectors (Hyros, Facebook, WebinarJam, GHL, Call Webhooks) replace manual data entry and eliminate Google Forms",
        "Identity stitching via email/phone/ID matching creates a universal contact_id linking every system \u2014 the foundation for all cross-source analysis",
        "Attribution reconciliation resolves Hyros vs Facebook disagreements with configurable trust policies per metric type",
        "Data quality monitoring catches stale sources, missing fields, and duplicates before bad data reaches dashboards",
      ],
    },
    {
      title: "\u{1F4F1} SMS / SendBlue Automation",
      color: "#2dd4bf",
      items: [
        "Integrated SMS engine triggers sequences on funnel events: opt-in welcome, booking confirmation, no-show recovery, cancellation save, re-engagement",
        "SMS show rate lift measures the incremental improvement from text reminders vs no-SMS control group \u2014 target +10\u201320% lift on show rate",
        "Re-engaged leads represent pure recovered pipeline with zero additional acquisition cost. Track resurrection rate and SMS-attributed revenue",
        "SMS cost feeds into CAC calculation, but net impact is often negative (cost savings from fewer no-shows > messaging cost)",
      ],
    },
    {
      title: "\u{1F4B8} Paid Acquisition Health",
      color: "#e879f9",
      items: [
        "Track CTR by platform \u2014 Google Search 3\u20138% (high intent), Meta 0.8\u20132% (interruption). Low CTR = wrong audience or weak creative",
        "LP Conversion Rate is the #1 marketing lever \u2014 improving from 20% to 30% cuts CPL by 33% with zero extra ad spend",
        "CPL tracked by channel: Google leads often cost 2\u20133x Meta but close at higher rates. Blended CPL hides channel issues",
        "With source connectors live, ROAS and CAC become real-time instead of blind spots \u2014 marketers fly with instruments",
      ],
    },
    {
      title: "\u{1F9E0} Intelligence Layer",
      color: "#818cf8",
      items: [
        "North Star Recommender identifies the single highest-leverage metric weekly with revenue impact modeling and rationale",
        "Metric Prioritizer ranks all KPIs by: distance from target \u00d7 revenue sensitivity \u00d7 trend direction \u2014 cuts through overload",
        "Setter\u2194Closer Matrix is the #1 client ask \u2014 heatmap showing which pairings produce the best show rates, close rates, and cash",
        "Anomaly Detection catches trend breaks before they compound into monthly misses. Leading indicators flag problems 2\u20133 weeks early",
      ],
    },
    {
      title: "\u{1F4BB} Dashboards & Alerts",
      color: "#34d399",
      items: [
        "Unified CEO Dashboard: North Star, top 5 metrics, funnel health, auto R/Y/G \u2014 replaces manual Google Sheet entirely",
        "Department Dashboards (Marketing, Setting, Closing, Outbound) with cross-department context and individual performance cards",
        "Automated Weekly Digest to Slack/email: key metrics, R/Y/G, North Star recommendation, anomalies, pacing update",
        "Real-time alert notifications for off-track pacing, data freshness issues, anomalies, and target changes",
      ],
    },
    {
      title: "\u{1F534} Current Gaps Being Solved",
      color: "#ef4444",
      items: [
        "Webinar Show Rate 1390% error \u2192 fixed by WebinarJam API integration with validated registrant/attendee counts",
        "Looker pacing fields blank \u2192 replaced by auto-calculated daily/weekly/monthly pacing from canonical model",
        "No ad spend in Looker \u2192 Facebook + Hyros APIs feed spend data directly into the metric engine",
        "Manual R/Y/G \u2192 auto-calculated from versioned targets with threshold bands and audit trail",
      ],
    },
    {
      title: "\u{1F7E1} Metric Discrepancies",
      color: "#f59e0b",
      items: [
        "Close Rate: CEO 25.40% vs Looker 22.10% \u2192 resolved by canonical metric registry with single formula definition per KPI",
        "Cash Collected: CEO $462K vs Looker $168K \u2192 canonical model ensures one source of truth with date-window alignment",
        "AOV: CEO ~$3,488 vs Looker $3,748 \u2192 metric registry specifies exact deal inclusion criteria, ending ambiguity",
      ],
    },
    {
      title: "\u26A1 Architecture Overview",
      color: "#6366f1",
      items: [
        "Layer 0: Source Connectors (Hyros, Facebook, WebinarJam, GHL, Webhooks) \u2192 Layer 1: Ingestion & Validation",
        "Layer 2: Canonical Data Model (identity-stitched entities) \u2192 Layer 3: Metric Engine (formulas, targets, R/Y/G)",
        "Layer 4: Intelligence (North Star, prioritization, anomalies, matrix) \u2192 Layer 5: Presentation (dashboards, alerts, digest)",
        "SMS/SendBlue woven through Layers 0\u20135: triggers from funnel events, feeds back attribution data, surfaces in dashboards",
      ],
    },
  ];

  return (
    <div
      style={{
        background: "#0a0a0f",
        minHeight: "100vh",
        fontFamily: "'IBM Plex Mono', 'SF Mono', 'Fira Code', monospace",
        color: "#e2e8f0",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Header */}
      <div style={{ marginBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 16 }}>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 22,
            fontWeight: 700,
            margin: 0,
            background: "linear-gradient(135deg, #a78bfa, #e879f9, #2dd4bf, #06b6d4, #10b981)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.02em",
          }}
        >
          Unified Marketing + Sales Intelligence Platform
        </h1>
        <p style={{ fontSize: 11, color: "#64748b", margin: "6px 0 0", lineHeight: 1.5, maxWidth: 900 }}>
          Data Infrastructure &rarr; Paid Acquisition &rarr; SMS Automation &rarr; Lead Gen &rarr; Sales Pipeline &rarr; Revenue &rarr; Intelligence &rarr; Dashboards
          &nbsp;|&nbsp; Hover nodes to trace connections &nbsp;|&nbsp; Hover edges for analytical insights
          &nbsp;|&nbsp; Click group buttons to isolate layers
        </p>
      </div>

      {/* Legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
        {Object.entries(GROUP_META).map(([key, val]) => (
          <button
            key={key}
            onClick={() => setActiveGroup(activeGroup === key ? null : key)}
            style={{
              background: activeGroup === key ? val.color + "22" : "rgba(255,255,255,0.03)",
              border: `1px solid ${activeGroup === key ? val.color : "rgba(255,255,255,0.08)"}`,
              borderRadius: 6,
              padding: "3px 8px",
              color: activeGroup === key ? val.color : "#94a3b8",
              fontSize: 9,
              fontFamily: "inherit",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {val.icon} {val.label}
          </button>
        ))}
      </div>

      {/* SVG Canvas */}
      <div
        style={{
          position: "relative",
          background: "rgba(255,255,255,0.01)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <svg ref={svgRef} viewBox="15 20 760 390" style={{ width: "100%", height: "auto", display: "block" }}>
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.12)" />
            </marker>
            <marker id="arrowHighlight" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#e879f9" />
            </marker>
            <marker id="arrowEdgeHover" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
            </marker>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="edgeGlow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background grid */}
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.015)" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Group bounding boxes + labels */}
          {Object.entries(GROUP_META).map(([key, val]) => {
            const groupNodes = NODES.filter((n) => n.group === key);
            if (!groupNodes.length) return null;
            const minX = Math.min(...groupNodes.map((n) => getNodePos(n).x)) - 14;
            const minY = Math.min(...groupNodes.map((n) => getNodePos(n).y)) - 14;
            const maxX = Math.max(...groupNodes.map((n) => getNodePos(n).x)) + 14;
            const maxY = Math.max(...groupNodes.map((n) => getNodePos(n).y)) + 14;
            const isActive = activeGroup === key || (!activeGroup && !activeNode);
            return (
              <g
                key={key}
                opacity={isActive || (activeNode && groupNodes.some((n) => connectedIds.has(n.id))) ? 1 : 0.2}
                style={{ transition: "opacity 0.3s" }}
              >
                <rect
                  x={minX} y={minY}
                  width={maxX - minX} height={maxY - minY}
                  rx={6}
                  fill={val.color + "06"}
                  stroke={val.color + "18"}
                  strokeWidth={0.5}
                  strokeDasharray="3 3"
                />
                <text x={minX + 3} y={minY + 7} fontSize={4} fill={val.color + "88"} fontWeight={600}>
                  {val.icon} {val.label.toUpperCase()}
                </text>
              </g>
            );
          })}

          {/* Visible edges */}
          {EDGES.map((edge, i) => {
            const fromNode = nodeMap[edge.from];
            const toNode = nodeMap[edge.to];
            if (!fromNode || !toNode) return null;
            const { d } = getEdgePath(fromNode, toNode);
            const highlighted = activeEdges.has(i);
            const isEdgeHovered =
              edgeTooltip && edgeTooltip.fromLabel === fromNode.label && edgeTooltip.toLabel === toNode.label;
            const groupVisible = !activeGroup || fromNode.group === activeGroup || toNode.group === activeGroup;
            const col = isEdgeHovered
              ? "#fbbf24"
              : highlighted
                ? GROUP_META[fromNode.group]?.color || "#fff"
                : "rgba(255,255,255,0.08)";

            return (
              <path
                key={"edge-" + i}
                d={d}
                fill="none"
                stroke={col}
                strokeWidth={isEdgeHovered ? 2 : highlighted ? 1.5 : 0.4}
                opacity={
                  isEdgeHovered ? 1
                    : activeNode ? highlighted ? 1 : 0.03
                    : activeGroup ? groupVisible ? 0.4 : 0.03
                    : 0.12
                }
                style={{ transition: "all 0.3s cubic-bezier(.4,0,.2,1)" }}
                markerEnd={isEdgeHovered ? "url(#arrowEdgeHover)" : highlighted ? "url(#arrowHighlight)" : "url(#arrow)"}
                filter={isEdgeHovered ? "url(#edgeGlow)" : undefined}
              />
            );
          })}

          {/* Invisible wider hit targets for edge hover */}
          {EDGES.map((edge, i) => {
            const fromNode = nodeMap[edge.from];
            const toNode = nodeMap[edge.to];
            if (!fromNode || !toNode) return null;
            const { d } = getEdgePath(fromNode, toNode);
            return (
              <path
                key={"hit-" + i}
                d={d}
                fill="none"
                stroke="transparent"
                strokeWidth={10}
                style={{ cursor: "pointer" }}
                onMouseEnter={(e) => handleEdgeEnter(edge, fromNode, toNode, e)}
                onMouseMove={handleEdgeMove}
                onMouseLeave={handleEdgeLeave}
              />
            );
          })}

          {/* Nodes */}
          {NODES.map((node) => {
            const pos = getNodePos(node);
            const meta = GROUP_META[node.group];
            const isActive = activeNode === node.id;
            const isConnected = connectedIds.has(node.id);
            const groupVisible = !activeGroup || node.group === activeGroup;
            const nodeOpacity = activeNode
              ? isConnected ? 1 : 0.12
              : activeGroup ? groupVisible ? 1 : 0.12
              : 1;

            return (
              <g
                key={node.id}
                opacity={nodeOpacity}
                style={{ transition: "opacity 0.3s", cursor: "pointer" }}
                onMouseEnter={(e) => handleNodeEnter(node, e)}
                onMouseLeave={handleNodeLeave}
              >
                {isActive && (
                  <circle cx={pos.x} cy={pos.y} r={7} fill={meta.color + "20"} filter="url(#glow)" />
                )}
                <circle
                  cx={pos.x} cy={pos.y}
                  r={isActive ? 3.5 : 2.8}
                  fill={isActive ? meta.color : meta.color + "cc"}
                  stroke={isActive ? "#fff" : meta.color + "44"}
                  strokeWidth={isActive ? 0.8 : 0.4}
                  style={{ transition: "all 0.2s" }}
                />
                <text
                  x={pos.x} y={pos.y + 7}
                  textAnchor="middle"
                  fontSize={3.2}
                  fill={isActive ? "#fff" : "#94a3b8"}
                  fontWeight={isActive ? 600 : 400}
                  style={{ transition: "fill 0.2s" }}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Node Tooltip */}
        {tooltip && (
          <div
            style={{
              position: "absolute",
              left: Math.min(tooltip.x + 12, 600),
              top: Math.max(tooltip.y - 70, 10),
              background: "rgba(15,15,25,0.96)",
              border: `1px solid ${GROUP_META[tooltip.group]?.color || "#333"}55`,
              borderRadius: 8,
              padding: "10px 14px",
              maxWidth: 300,
              zIndex: 100,
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
              pointerEvents: "none" as const,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: GROUP_META[tooltip.group]?.color || "#fff",
                marginBottom: 4,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {tooltip.label}
            </div>
            <div style={{ fontSize: 10, color: "#94a3b8", lineHeight: 1.5 }}>{tooltip.text}</div>
          </div>
        )}

        {/* Edge Tooltip */}
        {edgeTooltip && (
          <div
            style={{
              position: "absolute",
              left: Math.min(edgeTooltip.x + 14, 550),
              top: Math.max(edgeTooltip.y - 90, 10),
              background: "rgba(12,12,20,0.97)",
              border: "1px solid rgba(251,191,36,0.4)",
              borderRadius: 10,
              padding: "12px 16px",
              maxWidth: 360,
              zIndex: 100,
              backdropFilter: "blur(14px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.7), 0 0 20px rgba(251,191,36,0.08), 0 0 0 1px rgba(255,255,255,0.03)",
              pointerEvents: "none" as const,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginBottom: 8,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: GROUP_META[edgeTooltip.fromGroup]?.color || "#fff",
                  background: (GROUP_META[edgeTooltip.fromGroup]?.color || "#fff") + "18",
                  padding: "2px 6px",
                  borderRadius: 4,
                }}
              >
                {edgeTooltip.fromLabel}
              </span>
              <span style={{ fontSize: 10, color: "#fbbf24" }}>&rarr;</span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: GROUP_META[edgeTooltip.toGroup]?.color || "#fff",
                  background: (GROUP_META[edgeTooltip.toGroup]?.color || "#fff") + "18",
                  padding: "2px 6px",
                  borderRadius: 4,
                }}
              >
                {edgeTooltip.toLabel}
              </span>
            </div>
            <div style={{ fontSize: 10.5, color: "#cbd5e1", lineHeight: 1.6 }}>{edgeTooltip.insight}</div>
          </div>
        )}
      </div>

      {/* Analysis Cards */}
      <div
        style={{
          marginTop: 20,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 12,
        }}
      >
        {analysisCards.map((card) => (
          <div
            key={card.title}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 10,
              padding: "14px 16px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: card.color,
                margin: "0 0 10px",
              }}
            >
              {card.title}
            </h3>
            {card.items.map((item, i) => (
              <div
                key={i}
                style={{
                  fontSize: 10.5,
                  color: "#94a3b8",
                  lineHeight: 1.6,
                  padding: "6px 0",
                  borderBottom: i < card.items.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                }}
              >
                <span style={{ color: card.color, marginRight: 6 }}>&rarr;</span>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
