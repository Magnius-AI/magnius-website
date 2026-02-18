import { useState, useRef, useEffect, useCallback } from 'react';

// ═══ NODE DATA (each item is a box) ═══
const NODES = [
  // Data Infrastructure
  { id: "conn_hyros", label: "Hyros API", group: "infra", desc: "Source connector pulling attribution data, customer journeys, ad-to-sale mapping." },
  { id: "conn_facebook", label: "Facebook Ads API", group: "infra", desc: "API pulling campaigns, ad sets, spend, impressions, clicks, CTR, CPC, CPL." },
  { id: "conn_webinarjam", label: "WebinarJam API", group: "infra", desc: "API pulling webinar sessions, registrants, attendees, show rates." },
  { id: "conn_ghl", label: "GHL / CRM API", group: "infra", desc: "Pulling booked appointments, calendar events, contact records, pipeline stages." },
  { id: "conn_webhooks", label: "Call/Form Webhooks", group: "infra", desc: "Automated call outcome capture replacing manual Google Forms." },
  { id: "identity_stitch", label: "Identity Stitching", group: "infra", desc: "Matches contacts across systems using email, phone, Hyros ID, GHL ID. Universal join key." },
  { id: "data_quality", label: "Data Quality Monitor", group: "infra", desc: "Freshness checks, missing-field detection, duplicate detection, anomaly detection." },
  { id: "attrib_recon", label: "Attribution Reconciliation", group: "infra", desc: "Resolves Hyros vs Facebook attribution discrepancies with configurable trust policies." },
  { id: "canonical_model", label: "Canonical Data Model", group: "infra", desc: "Unified schema: Contact, Campaign, WebinarSession, Appointment, CallOutcome, RevenueEvent." },

  // Paid Acquisition
  { id: "ad_spend", label: "Ad Spend (Total)", group: "ads", desc: "Total monthly/weekly ad budget across all platforms." },
  { id: "ad_spend_google", label: "Google Ads Spend", group: "ads", desc: "Google Ads budget \u2014 Search, Display, YouTube pre-roll." },
  { id: "ad_spend_meta", label: "Meta Ads Spend", group: "ads", desc: "Facebook + Instagram ad spend \u2014 retargeting, lookalikes, cold audiences." },
  { id: "ad_spend_other", label: "Other Channels", group: "ads", desc: "TikTok, LinkedIn, YouTube organic, podcast sponsorships, affiliate spend." },
  { id: "impressions", label: "Impressions", group: "ads", desc: "Total ad impressions served across all platforms." },
  { id: "clicks", label: "Clicks", group: "ads", desc: "Total ad clicks driving traffic to landing pages." },
  { id: "ctr", label: "CTR", group: "ads", desc: "Click-Through Rate = Clicks \u00f7 Impressions. Benchmark: 2\u20135% search." },
  { id: "cpc", label: "CPC", group: "ads", desc: "Cost per Click = Ad Spend \u00f7 Clicks." },
  { id: "lp_views", label: "Landing Page Views", group: "ads", desc: "Clicks that actually loaded the page. Gap vs clicks = speed issues." },
  { id: "lp_conv_rate", label: "LP Conversion Rate", group: "ads", desc: "Opt-ins \u00f7 LP Views. Benchmark: 15\u201335% for high-ticket." },
  { id: "optins", label: "Opt-ins / Leads", group: "ads", desc: "Form fills, registrations, booked calls from paid traffic." },
  { id: "cpl", label: "CPL (Cost per Lead)", group: "ads", desc: "Ad Spend \u00f7 Opt-ins. Benchmark: $20\u2013$80 high-ticket." },

  // Lead Generation
  { id: "setter_dials", label: "Setter Dials", group: "input", desc: "Outbound dials made by setters to generate leads." },
  { id: "dm_outreach", label: "DM Outreach", group: "input", desc: "Direct message outreach for booking calls." },
  { id: "webinar", label: "Webinar Funnel", group: "input", desc: "Webinar-based lead generation channel." },
  { id: "webinar_registrants", label: "Webinar Registrants", group: "input", desc: "Total webinar registrations from all sources." },
  { id: "webinar_attendees", label: "Webinar Attendees", group: "input", desc: "Actual attendees. Benchmark: 25\u201340% live, 15\u201325% automated." },
  { id: "lead_source", label: "Lead Source Filter", group: "input", desc: "Segments all metrics by acquisition channel." },

  // SMS / SendBlue
  { id: "sms_engine", label: "SendBlue Engine", group: "sms", desc: "Triggers automated text sequences based on funnel events and pipeline stage." },
  { id: "sms_sent", label: "SMS Sent", group: "sms", desc: "Total outbound SMS across all sequences." },
  { id: "sms_replies", label: "SMS Replies", group: "sms", desc: "Inbound replies. Reply rate measures engagement quality." },
  { id: "sms_reply_rate", label: "SMS Reply Rate", group: "sms", desc: "Replies \u00f7 Sent. Benchmark: 15\u201325% warm, 5\u201312% cold." },
  { id: "sms_booked", label: "Booked via SMS", group: "sms", desc: "Calls booked from SMS conversations. Key SMS ROI metric." },
  { id: "sms_reengaged", label: "Re-engaged Leads", group: "sms", desc: "Dead leads brought back via SMS re-engagement sequences." },
  { id: "sms_show_lift", label: "SMS Show Rate Lift", group: "sms", desc: "Incremental show rate improvement from SMS reminders. Target: +10\u201320%." },
  { id: "sms_cost", label: "SMS Cost", group: "sms", desc: "Total SendBlue messaging cost. Factor into CAC." },
  { id: "sms_close_attrib", label: "SMS-Attributed Closes", group: "sms", desc: "Closed deals where SMS was in the attribution chain." },

  // Booking Pipeline
  { id: "calls_on_calendar", label: "Calls on Calendar", group: "booking", desc: "Total calls booked across all channels." },
  { id: "booked_dm", label: "Booked Calls (DM)", group: "booking", desc: "Calls booked via DM channel." },
  { id: "booked_dial", label: "Booked Calls (Dial)", group: "booking", desc: "Calls booked from setter dials." },
  { id: "total_booked", label: "Total Booked Calls", group: "booking", desc: "Sum of all booked calls." },

  // Show / Attendance
  { id: "no_show", label: "No Shows", group: "show", desc: "Inverse of show rate. Segment by source to find flaky channels." },
  { id: "show_rate", label: "Show Rate", group: "show", desc: "CEO: 52.60% avg | Looker: 42.39%. Key conversion gate." },
  { id: "dm_show_rate", label: "DM Show Rate", group: "show", desc: "CEO: 57% target, trending 48\u201362%." },
  { id: "webinar_show", label: "Webinar Show Rate", group: "show", desc: "Needs audit (data error). WebinarJam API will fix." },
  { id: "cancelled", label: "Cancelled Calls", group: "show", desc: "Reduces live call volume. Track timing to identify cause." },
  { id: "rescheduled", label: "Rescheduled", group: "show", desc: "Re-enters booking pipeline. Track eventual show rate." },

  // Pitch Delivery
  { id: "live_calls", label: "Live Calls", group: "pitch", desc: "Calls that actually connected." },
  { id: "calls_pitched", label: "Calls Pitched", group: "pitch", desc: "Subset of live calls that received a pitch." },
  { id: "pitch_rate", label: "Pitch Rate", group: "pitch", desc: "Pitched \u00f7 Live Calls. Benchmark: >80%." },

  // Closing
  { id: "close_rate", label: "Close Rate", group: "close", desc: "CEO: 25.40% | Looker: 22.10%. Core sales metric." },
  { id: "closed_won", label: "Closed Won", group: "close", desc: "Total closed deals this period." },
  { id: "dm_closes", label: "DM Closes", group: "close", desc: "Closes from DM channel specifically." },
  { id: "pifs", label: "PIFs (Paid in Full)", group: "close", desc: "Full-payment deals. Better cash flow." },
  { id: "deposits", label: "Deposits", group: "close", desc: "Partial payment deals. Collection risk." },

  // Revenue
  { id: "cash_collected", label: "Cash Collected", group: "revenue", desc: "CEO: $462K vs $400K target | Looker: $168K MTD." },
  { id: "revenue_contracted", label: "Revenue (Contracted)", group: "revenue", desc: "Total contracted value including payment plans." },
  { id: "renewals_cc", label: "Renewals CC", group: "revenue", desc: "Recurring revenue from renewals." },
  { id: "aov", label: "AOV", group: "revenue", desc: "Avg Order Value. Looker: $3,748 | CEO: $3,488." },
  { id: "splits", label: "Splits", group: "revenue", desc: "Revenue shared between closers." },
  { id: "renewals", label: "Renewals (Count)", group: "revenue", desc: "Number of renewal deals." },
  { id: "rev_per_lead", label: "Revenue per Lead", group: "revenue", desc: "Cash \u00f7 Leads. End-to-end efficiency." },

  // Unit Economics
  { id: "cc_per_booked", label: "CC per Booked Call", group: "economics", desc: "Revenue efficiency per booking." },
  { id: "cc_per_live", label: "Cash per Live Call", group: "economics", desc: "Dollar value per connected conversation." },
  { id: "cash_per_day", label: "Cash per Day", group: "economics", desc: "Daily revenue run rate." },
  { id: "monthly_pacing", label: "Monthly Pacing", group: "economics", desc: "Projected month-end based on current pace." },
  { id: "weekly_pacing", label: "Weekly Pacing", group: "economics", desc: "Projected week-end performance." },
  { id: "cac", label: "CAC", group: "economics", desc: "Ad Spend \u00f7 Closed Won. True acquisition cost." },
  { id: "roas", label: "ROAS", group: "economics", desc: "Cash \u00f7 Ad Spend. Benchmark: 3\u201310x." },
  { id: "ltv_cac", label: "LTV:CAC Ratio", group: "economics", desc: "Gold standard: 3:1+. Includes renewals." },

  // Intelligence
  { id: "north_star", label: "North Star Recommender", group: "intelligence", desc: "Weekly automated analysis identifying the single highest-leverage metric." },
  { id: "metric_priority", label: "Metric Prioritizer", group: "intelligence", desc: "Ranks KPIs by distance from target \u00d7 revenue impact \u00d7 trend." },
  { id: "anomaly_engine", label: "Anomaly Detection", group: "intelligence", desc: "Catches trend breaks before they compound. 2\u20133 week early warning." },
  { id: "setter_closer_matrix", label: "Setter\u2194Closer Matrix", group: "intelligence", desc: "Heatmap of best setter-closer pairings. #1 client ask." },
  { id: "funnel_viz", label: "Funnel Visualization", group: "intelligence", desc: "End-to-end funnel with drop-off rates. Filterable by channel." },
  { id: "cross_source", label: "Cross-Source Drilldowns", group: "intelligence", desc: "Any metric sliced by source, setter, closer, time." },

  // Dashboards
  { id: "ceo_dashboard", label: "CEO Dashboard", group: "presentation", desc: "North Star, top 5 metrics, funnel health, auto R/Y/G." },
  { id: "dept_dashboards", label: "Dept Dashboards", group: "presentation", desc: "Marketing, Setting, Closing \u2014 each with owned KPIs." },
  { id: "perf_cards", label: "Performance Cards", group: "presentation", desc: "Per-closer/setter view with full drill-through." },
  { id: "weekly_digest", label: "Weekly Digest", group: "presentation", desc: "Auto summary to Slack/email with key metrics + recommendations." },
  { id: "alert_notifs", label: "Alert Notifications", group: "presentation", desc: "Real-time push for off-track pacing, anomalies, data issues." },

  // Status
  { id: "status", label: "RAG Status (Auto)", group: "status", desc: "Auto R/Y/G from targets. Green: \u226590%, Yellow: 75-90%, Red: <75%." },
  { id: "scoreboard", label: "Closer Scoreboard", group: "status", desc: "Leaderboard ranked by cash collected." },
  { id: "target_gov", label: "Target Governance", group: "status", desc: "Versioned targets with audit log and owner sign-off." },
];

// ═══ EDGES BETWEEN INDIVIDUAL BOXES ═══
const EDGES = [
  // Infra internal
  { from: "conn_hyros", to: "identity_stitch", insight: "Hyros IDs get matched to GHL contacts and Facebook click IDs to create a unified view." },
  { from: "conn_facebook", to: "identity_stitch", insight: "Facebook click IDs and lead form data matched to CRM contacts. Enables true ROAS calculation." },
  { from: "conn_webinarjam", to: "identity_stitch", insight: "WebinarJam emails matched to CRM contacts. Without this, webinar ROI is a guess." },
  { from: "conn_ghl", to: "identity_stitch", insight: "GHL contact records are the anchor. Every appointment and call maps back to a GHL contact_id." },
  { from: "conn_webhooks", to: "canonical_model", insight: "Automated call capture feeds directly into the canonical model, eliminating manual data entry." },
  { from: "identity_stitch", to: "canonical_model", insight: "Stitched contact_id becomes the universal join key for all downstream metrics and drilldowns." },
  { from: "data_quality", to: "canonical_model", insight: "Quality checks gate data before it enters the canonical model. Ensures trustworthy metrics." },
  { from: "conn_hyros", to: "attrib_recon", insight: "Hyros attribution often disagrees with Facebook. Reconciliation resolves with configurable rules." },
  { from: "conn_facebook", to: "attrib_recon", insight: "Facebook attribution window differs from Hyros. Engine displays both, designates primary." },
  { from: "attrib_recon", to: "canonical_model", insight: "Reconciled data feeds canonical model with single source of truth per metric." },
  { from: "data_quality", to: "alert_notifs", insight: "When quality checks fail, alerts fire immediately to Slack. Team knows within minutes." },

  // Infra -> Ads
  { from: "canonical_model", to: "ad_spend", insight: "Canonical model aggregates ad spend from all platforms into a single reconciled total." },
  { from: "canonical_model", to: "impressions", insight: "Impression data flows from canonical model after deduplication and source validation." },

  // Ads internal
  { from: "ad_spend", to: "ad_spend_google", insight: "Compare Google's share of spend against its share of closed deals." },
  { from: "ad_spend", to: "ad_spend_meta", insight: "Evaluate whether Meta deserves more or less budget based on deal contribution." },
  { from: "ad_spend", to: "ad_spend_other", insight: "Track experimental channels vs Google/Meta CPL benchmarks." },
  { from: "impressions", to: "clicks", insight: "Drop-off reveals ad creative effectiveness \u2014 large gap = creative isn't stopping the scroll." },
  { from: "clicks", to: "lp_views", insight: "Gap between clicks and LP views = bounce before load. Over 20% = page speed issues." },
  { from: "lp_views", to: "optins", insight: "LP view to opt-in is the #1 marketing lever \u2014 10% improvement compounds through entire funnel." },
  { from: "lp_views", to: "lp_conv_rate", insight: "LP views are the denominator. If views rise but opt-ins don't, messaging doesn't match the ad." },
  { from: "ad_spend", to: "cpl", insight: "Ad spend is CPL numerator. If spend scales but CPL holds, you found a scalable audience." },
  { from: "optins", to: "cpl", insight: "Opt-ins are CPL denominator. More opt-ins at same spend = more efficient funnel." },
  { from: "impressions", to: "ctr", insight: "Impressions are CTR denominator. Growing impressions with flat clicks = creative fatigue." },
  { from: "clicks", to: "ctr", insight: "Clicks are CTR numerator. Rising clicks with stable impressions = creative is resonating." },
  { from: "ad_spend", to: "cpc", insight: "Spend \u00f7 clicks = blended CPC. If CPC rises while CPL stays flat, LP is compensating." },

  // Ads -> Input
  { from: "optins", to: "setter_dials", insight: "Paid opt-ins become the call list setters work through." },
  { from: "optins", to: "dm_outreach", insight: "Paid leads that don't book become DM targets." },
  { from: "optins", to: "webinar", insight: "Webinar registrations from ads feed this funnel." },
  { from: "optins", to: "calls_on_calendar", insight: "Some leads self-book directly without setter touch." },

  // Input internal
  { from: "webinar", to: "webinar_registrants", insight: "Registration volume by source reveals which channel fills webinars." },
  { from: "webinar_registrants", to: "webinar_attendees", insight: "Registrant-to-attendee = webinar show rate. Benchmark: 25\u201340% live." },
  { from: "webinar_attendees", to: "calls_on_calendar", insight: "Webinar attendees who book have 2\u20133x higher close rate than cold-booked calls." },

  // Ads/Input -> SMS
  { from: "optins", to: "sms_engine", insight: "New opt-ins trigger automated SMS welcome within 5 minutes. 3\u20135x higher engagement." },

  // SMS internal
  { from: "sms_engine", to: "sms_sent", insight: "Engine dispatches across all sequence types. Volume is denominator for reply rate." },
  { from: "sms_sent", to: "sms_replies", insight: "Low replies on high volume = messages aren't compelling. Test personalization." },
  { from: "sms_sent", to: "sms_reply_rate", insight: "Sent is denominator. If volume scales and rate drops, you're hitting fatigue." },
  { from: "sms_replies", to: "sms_reply_rate", insight: "Replies are numerator. Rising replies at stable volume = messaging improving." },
  { from: "sms_replies", to: "sms_booked", insight: "Replies converting to bookings measures SMS sales effectiveness." },
  { from: "sms_engine", to: "sms_reengaged", insight: "Re-engagement targets cold leads. Zero additional acquisition cost \u2014 pure upside." },
  { from: "sms_sent", to: "sms_cost", insight: "Cost = sent \u00d7 per-message rate. Compare vs setter cost-per-booking." },
  { from: "sms_engine", to: "sms_show_lift", insight: "Compare show rates with vs without SMS reminders. Delta = ROI justification." },
  { from: "sms_booked", to: "sms_close_attrib", insight: "SMS-booked calls that close are directly attributed to SMS channel." },
  { from: "sms_reengaged", to: "sms_close_attrib", insight: "Re-engaged leads that close = pure recovered revenue. Strongest SMS ROI proof." },

  // SMS -> Booking/Show/Revenue/Economics
  { from: "sms_booked", to: "calls_on_calendar", insight: "SMS-booked calls enter main pipeline. Often higher show rates." },
  { from: "sms_reengaged", to: "calls_on_calendar", insight: "Re-engaged leads booking = recovered pipeline with zero acquisition cost." },
  { from: "sms_show_lift", to: "show_rate", insight: "+15% show rate on 400 bookings = 60 more live calls per month." },
  { from: "sms_close_attrib", to: "cash_collected", insight: "SMS-attributed revenue feeds total cash. SMS ROAS benchmark: 10\u201330x." },
  { from: "sms_cost", to: "cac", insight: "SMS cost adds to CAC but net impact often negative (savings > cost)." },

  // Show -> SMS (feedback loops)
  { from: "no_show", to: "sms_engine", insight: "No-shows trigger SMS re-engagement within 30 minutes for highest recovery." },
  { from: "cancelled", to: "sms_engine", insight: "Cancellations trigger save sequence. Catches cold feet before lead goes dark." },
  { from: "total_booked", to: "sms_engine", insight: "Bookings trigger SMS confirmation + reminders. Primary lever for show rate." },

  // Input -> Booking
  { from: "setter_dials", to: "booked_dial", insight: "Dials \u00f7 bookings = setter efficiency. 50+ dials per booking = list or script problem." },
  { from: "setter_dials", to: "calls_on_calendar", insight: "Track what % of calendar comes from setters vs self-booked." },
  { from: "dm_outreach", to: "booked_dm", insight: "DM-to-booking conversion shows messaging effectiveness." },
  { from: "webinar", to: "calls_on_calendar", insight: "Webinar attendees booking calls are highest-intent leads." },
  { from: "lead_source", to: "calls_on_calendar", insight: "Filter by source to find most profitable channel." },

  // Booking -> Show
  { from: "booked_dm", to: "total_booked", insight: "DM bookings feed total. Decline = check message volume or response rates." },
  { from: "booked_dial", to: "total_booked", insight: "Compare cost-per-booking for dial vs DM to optimize allocation." },
  { from: "calls_on_calendar", to: "total_booked", insight: "Mismatch = bookings falling through CRM cracks." },
  { from: "total_booked", to: "show_rate", insight: "Bookings up but shows flat = confirmation sequence failing." },
  { from: "total_booked", to: "no_show", insight: "Segment no-shows by source to find flaky channels." },
  { from: "booked_dm", to: "dm_show_rate", insight: "Compare DM show rate against dial and webinar channels." },

  // Show -> Pitch
  { from: "show_rate", to: "live_calls", insight: "10% show rate improvement at 400 bookings = 40 more opportunities/month." },
  { from: "no_show", to: "live_calls", insight: "Revenue lost per no-show = AOV \u00d7 close rate. Justifies reminder automation." },
  { from: "cancelled", to: "live_calls", insight: "Track cancellation timing to identify cold feet vs scheduling friction." },
  { from: "rescheduled", to: "calls_on_calendar", insight: "Rescheduled re-enter pipeline. Track eventual show rate." },
  { from: "live_calls", to: "calls_pitched", insight: "Gap reveals disqualifications or poor call control. Coach if <80%." },
  { from: "calls_pitched", to: "pitch_rate", insight: "Declining pitch rate = too long on discovery or unqualified leads." },

  // Pitch -> Close
  { from: "calls_pitched", to: "close_rate", insight: "Pitches up but close rate down = pitching unqualified or offer needs work." },
  { from: "calls_pitched", to: "closed_won", insight: "Pitched \u00d7 close rate = forecasted deals. Work backward to set booking targets." },
  { from: "close_rate", to: "closed_won", insight: "3% close rate improvement at 145 pitches = ~4 more deals/month." },
  { from: "closed_won", to: "pifs", insight: "High PIF ratio = more cash upfront, less collection risk." },
  { from: "closed_won", to: "deposits", insight: "Track deposit-to-full-payment completion to calculate true value." },
  { from: "dm_show_rate", to: "dm_closes", insight: "High DM show rate but low closes = problem is on closer side." },

  // Close -> Revenue
  { from: "closed_won", to: "cash_collected", insight: "Closed \u00d7 avg cash-per-close = forecasted monthly cash collection." },
  { from: "closed_won", to: "revenue_contracted", insight: "Compare contracted vs collected to see outstanding future revenue." },
  { from: "pifs", to: "cash_collected", insight: "PIFs deliver full value on day one. Improves cash flow." },
  { from: "deposits", to: "cash_collected", insight: "Track completion rates to forecast how much actually materializes." },
  { from: "closed_won", to: "aov", insight: "AOV dropping while deals rise = discounting too aggressively." },
  { from: "renewals", to: "renewals_cc", insight: "Track renewal rate and AOV separately for retention economics." },
  { from: "renewals_cc", to: "cash_collected", insight: "Renewal cash adds without acquisition cost. Fastest path to better ROAS." },
  { from: "cash_collected", to: "rev_per_lead", insight: "Cash is numerator. Captures combined effect of every funnel stage." },
  { from: "optins", to: "rev_per_lead", insight: "Leads is denominator. Revenue per lead by source reveals best channels." },

  // Revenue -> Economics
  { from: "cash_collected", to: "cc_per_booked", insight: "Dollar value per booking. Compare across channels." },
  { from: "total_booked", to: "cc_per_booked", insight: "Bookings up but revenue/booking down = lower-quality leads added." },
  { from: "cash_collected", to: "cc_per_live", insight: "Dollar value per connected conversation. Sets closer comp benchmarks." },
  { from: "live_calls", to: "cc_per_live", insight: "Fewer live calls with same revenue = each call more valuable." },
  { from: "cash_collected", to: "cash_per_day", insight: "Daily run rate. Project month-end to decide on mid-month spend changes." },
  { from: "cash_per_day", to: "monthly_pacing", insight: "Below target by day 10 = increase bookings or close rate immediately." },
  { from: "cash_per_day", to: "weekly_pacing", insight: "Week-over-week comparison catches declining momentum early." },
  { from: "ad_spend", to: "cac", insight: "Spend is CAC numerator. More spend without more deals = rising CAC." },
  { from: "closed_won", to: "cac", insight: "Deals is CAC denominator. Better close rate = lower CAC." },
  { from: "cash_collected", to: "roas", insight: "Cash is ROAS numerator. Below 3x = margin squeeze." },
  { from: "ad_spend", to: "roas", insight: "Spend is ROAS denominator. Scale only if ROAS holds above 3x." },
  { from: "aov", to: "ltv_cac", insight: "AOV is LTV starting point. Higher AOV = more room for acquisition spend." },
  { from: "renewals_cc", to: "ltv_cac", insight: "Renewals extend LTV beyond initial sale. Justifies higher CAC." },
  { from: "cac", to: "ltv_cac", insight: "CAC is denominator. Low CAC from efficient funnels = exceptional ratio." },

  // Economics -> Intelligence
  { from: "ltv_cac", to: "north_star", insight: "Strong LTV:CAC = focus on volume. Weak = focus on efficiency." },
  { from: "roas", to: "metric_priority", insight: "ROAS below 3x bumps marketing metrics to top of priority stack." },
  { from: "cash_collected", to: "anomaly_engine", insight: "Cash is most-watched for anomalies. Drop triggers full upstream investigation." },
  { from: "close_rate", to: "anomaly_engine", insight: "Close rate anomalies surface problems before they hit revenue." },
  { from: "show_rate", to: "anomaly_engine", insight: "Show rate anomalies predict cash shortfalls 2\u20133 weeks early." },
  { from: "show_rate", to: "setter_closer_matrix", insight: "Which setters book leads that actually show? Reveals quality beyond volume." },
  { from: "close_rate", to: "setter_closer_matrix", insight: "Close rate by pairing reveals best setter-closer combinations." },
  { from: "cash_collected", to: "funnel_viz", insight: "Cash is bottom of funnel viz. Shows cumulative drop-off." },
  { from: "optins", to: "funnel_viz", insight: "Opt-ins mid-funnel. LP-to-optin and optin-to-booked are highest-leverage points." },
  { from: "close_rate", to: "cross_source", insight: "Close rate by any dimension is the core drilldown." },

  // Intelligence -> Presentation
  { from: "north_star", to: "ceo_dashboard", insight: "North Star appears as top-line focus. One metric, one action." },
  { from: "metric_priority", to: "ceo_dashboard", insight: "Top 5 priorities populate CEO focus area." },
  { from: "anomaly_engine", to: "alert_notifs", insight: "Anomalies trigger real-time alerts. Not waiting for weekly meeting." },
  { from: "anomaly_engine", to: "weekly_digest", insight: "Top anomalies appear in automated weekly digest." },
  { from: "setter_closer_matrix", to: "dept_dashboards", insight: "Matrix feeds department dashboards for setting and closing managers." },
  { from: "cross_source", to: "dept_dashboards", insight: "Drilldowns power every department dashboard." },
  { from: "funnel_viz", to: "ceo_dashboard", insight: "Funnel gives CEO single-glance pipeline health view." },
  { from: "setter_closer_matrix", to: "perf_cards", insight: "Individual performance cards powered by matrix and cross-source data." },
  { from: "north_star", to: "weekly_digest", insight: "Digest leads with North Star recommendation and revenue impact." },

  // Status
  { from: "cash_collected", to: "status", insight: "Cash triggers RAG status. Green \u226590%, Yellow 75-90%, Red <75%." },
  { from: "close_rate", to: "status", insight: "Below 20% sustained = red flag for lead quality or closer performance." },
  { from: "show_rate", to: "status", insight: "Leading indicator. Declining = future cash shortfall in 2\u20133 weeks." },
  { from: "roas", to: "status", insight: "Below 3x = red. Marketing needs to cut spend or fix funnel." },
  { from: "cpl", to: "status", insight: "Above benchmarks = early warning of rising costs or declining conversion." },
  { from: "target_gov", to: "status", insight: "Versioned targets feed RAG with auditable thresholds." },
  { from: "closed_won", to: "scoreboard", insight: "Deal count ranks closers. Compare volume vs efficiency." },
  { from: "cash_collected", to: "scoreboard", insight: "Cash per closer determines ranking. Fewer deals + higher AOV can win." },
  { from: "status", to: "alert_notifs", insight: "Red status fires immediate alert to metric owner and CEO." },
  { from: "status", to: "ceo_dashboard", insight: "Auto RAG populates CEO dashboard health indicators." },
];

const GROUP_META: Record<string, { color: string; label: string; icon: string }> = {
  infra: { color: "#a78bfa", label: "Data Infrastructure", icon: "\u{1F527}" },
  ads: { color: "#e879f9", label: "Paid Acquisition", icon: "\u{1F4B8}" },
  input: { color: "#6366f1", label: "Lead Generation", icon: "\u{1F4E1}" },
  sms: { color: "#2dd4bf", label: "SMS / SendBlue", icon: "\u{1F4F1}" },
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

// Group order for layout: 3 rows of stacked columns
const ROW_LAYOUT = [
  ["infra", "ads", "input", "sms", "booking"],
  ["show", "pitch", "close", "revenue"],
  ["economics", "intelligence", "presentation", "status"],
];

interface BoxRect { x: number; y: number; width: number; height: number; }
interface EdgeTooltipState { insight: string; fromLabel: string; toLabel: string; fromColor: string; toColor: string; x: number; y: number; }
interface NodeTooltipState { label: string; desc: string; color: string; x: number; y: number; }

export default function SystemMapPage() {
  const [pinnedNode, setPinnedNode] = useState<string | null>(null);
  const activeNode = pinnedNode;
  const [edgeTooltip, setEdgeTooltip] = useState<EdgeTooltipState | null>(null);
  const [nodeTooltip, setNodeTooltip] = useState<NodeTooltipState | null>(null);
  const [boxRects, setBoxRects] = useState<Record<string, BoxRect>>({});
  const [containerSize, setContainerSize] = useState({ w: 1200, h: 800 });
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const boxRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const nodeMap: Record<string, typeof NODES[number]> = {};
  NODES.forEach((n) => (nodeMap[n.id] = n));

  // Connected nodes
  const connectedIds = new Set<string>();
  const activeEdgeIndices = new Set<number>();
  if (activeNode) {
    connectedIds.add(activeNode);
    EDGES.forEach((e, i) => {
      if (e.from === activeNode || e.to === activeNode) {
        connectedIds.add(e.from);
        connectedIds.add(e.to);
        activeEdgeIndices.add(i);
      }
    });
  }

  const measureBoxes = useCallback(() => {
    if (!containerRef.current) return;
    const cr = containerRef.current.getBoundingClientRect();
    setContainerSize({ w: cr.width, h: cr.height });
    const newRects: Record<string, BoxRect> = {};
    NODES.forEach((n) => {
      const el = boxRefs.current[n.id];
      if (el) {
        const r = el.getBoundingClientRect();
        newRects[n.id] = { x: r.left - cr.left, y: r.top - cr.top, width: r.width, height: r.height };
      }
    });
    setBoxRects(newRects);
  }, []);

  useEffect(() => {
    measureBoxes();
    window.addEventListener("resize", measureBoxes);
    return () => window.removeEventListener("resize", measureBoxes);
  }, [measureBoxes]);

  useEffect(() => {
    const t = setTimeout(measureBoxes, 400);
    return () => clearTimeout(t);
  }, [measureBoxes]);

  // Click anywhere outside a box to unpin
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      // Check if the click landed on a node box (they have data-node-box attribute)
      if (!target.closest("[data-node-box]")) {
        setPinnedNode(null);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // Pre-compute edge bundles: edges sharing the same pair of nodes (A->B or B->A)
  // and edges whose endpoints are very close together
  const edgeOffsets = useRef<number[]>([]);
  {
    // Build a map of pair key -> list of edge indices
    const pairMap: Record<string, number[]> = {};
    EDGES.forEach((edge, i) => {
      // Canonical pair key (sorted so A->B and B->A group together)
      const key = [edge.from, edge.to].sort().join("|");
      if (!pairMap[key]) pairMap[key] = [];
      pairMap[key].push(i);
    });

    // Also group edges that share a source or target node and whose other endpoint is nearby
    const proximityGroups: Record<string, number[]> = {};
    EDGES.forEach((edge, i) => {
      const a = boxRects[edge.from];
      const b = boxRects[edge.to];
      if (!a || !b) return;
      // Create a spatial key based on midpoint rounded to 40px grid
      const mx = Math.round(((a.x + a.width / 2) + (b.x + b.width / 2)) / 2 / 40);
      const my = Math.round(((a.y + a.height / 2) + (b.y + b.height / 2)) / 2 / 40);
      const gKey = `${mx},${my}`;
      if (!proximityGroups[gKey]) proximityGroups[gKey] = [];
      proximityGroups[gKey].push(i);
    });

    const offsets = new Array(EDGES.length).fill(0);

    // Assign offsets for exact pair duplicates
    Object.values(pairMap).forEach((indices) => {
      if (indices.length <= 1) return;
      const mid = (indices.length - 1) / 2;
      indices.forEach((idx, j) => {
        offsets[idx] = (j - mid) * 30;
      });
    });

    // For proximity groups, add a smaller spread if not already offset
    Object.values(proximityGroups).forEach((indices) => {
      if (indices.length <= 1) return;
      const mid = (indices.length - 1) / 2;
      indices.forEach((idx, j) => {
        if (offsets[idx] === 0) {
          offsets[idx] = (j - mid) * 18;
        }
      });
    });

    edgeOffsets.current = offsets;
  }

  function getEdgePath(fromId: string, toId: string, edgeIndex: number) {
    const a = boxRects[fromId];
    const b = boxRects[toId];
    if (!a || !b) return null;
    const aCx = a.x + a.width / 2;
    const aCy = a.y + a.height / 2;
    const bCx = b.x + b.width / 2;
    const bCy = b.y + b.height / 2;
    let x1: number, y1: number, x2: number, y2: number;
    if (Math.abs(bCx - aCx) > Math.abs(bCy - aCy)) {
      if (bCx > aCx) { x1 = a.x + a.width; y1 = aCy; x2 = b.x; y2 = bCy; }
      else { x1 = a.x; y1 = aCy; x2 = b.x + b.width; y2 = bCy; }
    } else {
      if (bCy > aCy) { x1 = aCx; y1 = a.y + a.height; x2 = bCx; y2 = b.y; }
      else { x1 = aCx; y1 = a.y; x2 = bCx; y2 = b.y + b.height; }
    }
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    // Perpendicular unit vector
    const px = -dy / len, py = dx / len;
    // Base curve + per-edge offset to spread bundled/nearby arrows apart
    const offset = edgeOffsets.current[edgeIndex] || 0;
    const baseCurve = 0.12;
    const cx = mx + px * (len * baseCurve + offset);
    const cy = my + py * (len * baseCurve + offset);
    return { d: `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}` };
  }

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", fontFamily: "'IBM Plex Mono', 'SF Mono', monospace", color: "#e2e8f0", padding: "20px", boxSizing: "border-box" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        @keyframes dashFlow {
          to { stroke-dashoffset: -20; }
        }
      `}</style>

      {/* Header */}
      <div style={{ marginBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 16 }}>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, margin: 0, background: "linear-gradient(135deg, #a78bfa, #e879f9, #2dd4bf, #06b6d4, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Unified Marketing + Sales Intelligence Platform
        </h1>
        <p style={{ fontSize: 11, color: "#64748b", margin: "6px 0 0", lineHeight: 1.5 }}>
          Click a box to pin connections &nbsp;|&nbsp; Click again to unpin &nbsp;|&nbsp; Hover arrows for insights
        </p>
      </div>

      {/* Map container */}
      <div ref={containerRef} style={{ position: "relative" }}>
        {/* Rows of group columns */}
        {ROW_LAYOUT.map((rowGroups, rowIdx) => (
          <div key={rowIdx} style={{ display: "flex", gap: 10, marginBottom: 14, alignItems: "flex-start" }}>
            {rowGroups.map((gid) => {
              const meta = GROUP_META[gid];
              const groupNodes = NODES.filter((n) => n.group === gid);
              return (
                <div key={gid} style={{ flex: 1, minWidth: 0 }}>
                  {/* Group header */}
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 600, color: meta.color, marginBottom: 4, paddingLeft: 2 }}>
                    {meta.icon} {meta.label}
                  </div>
                  {/* Item boxes */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    {groupNodes.map((node) => {
                      const isActive = !activeNode || connectedIds.has(node.id);
                      const isHovered = activeNode === node.id;
                      const isPinned = pinnedNode === node.id;
                      return (
                        <div
                          key={node.id}
                          data-node-box
                          ref={(el) => { boxRefs.current[node.id] = el; }}
                          onMouseEnter={(e) => {
                            setEdgeTooltip(null);
                            // Show tooltip for any box when not pinned, or connected boxes when pinned
                            if (!pinnedNode || connectedIds.has(node.id)) {
                              setNodeTooltip({ label: node.label, desc: node.desc, color: meta.color, x: e.clientX, y: e.clientY });
                            }
                          }}
                          onMouseLeave={() => {
                            setNodeTooltip(null);
                          }}
                          onClick={() => {
                            setPinnedNode((prev) => prev === node.id ? null : node.id);
                          }}
                          style={{
                            background: isPinned ? meta.color + "22" : isHovered ? meta.color + "18" : "rgba(255,255,255,0.025)",
                            border: `1px solid ${isPinned ? meta.color + "88" : isHovered ? meta.color + "66" : (activeNode && connectedIds.has(node.id) && activeNode !== node.id) ? meta.color + "44" : "rgba(255,255,255,0.06)"}`,
                            borderRadius: 6,
                            padding: "5px 8px",
                            fontSize: 11,
                            color: isPinned || isHovered ? "#fff" : isActive ? "#94a3b8" : "#475569",
                            opacity: isActive ? 1 : 0.2,
                            transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
                            cursor: "pointer",
                            boxShadow: isPinned ? `0 0 16px ${meta.color}30, inset 0 0 8px ${meta.color}10` : isHovered ? `0 0 12px ${meta.color}20` : (activeNode && connectedIds.has(node.id) && activeNode !== node.id) ? `0 0 8px ${meta.color}10` : "none",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {node.label}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {/* SVG arrow overlay */}
        <svg
          ref={svgRef}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 10 }}
          viewBox={`0 0 ${containerSize.w} ${containerSize.h}`}
        >
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.25)" />
            </marker>
            <marker id="arrowHover" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
            </marker>
            {/* Per-group colored markers for highlighted arrows */}
            {Object.entries(GROUP_META).map(([gid, meta]) => (
              <marker key={`m-${gid}`} id={`arrow-${gid}`} viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={meta.color} />
              </marker>
            ))}
            <filter id="edgeGlow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          </defs>

          {/* Visible edges */}
          {EDGES.map((edge, i) => {
            const path = getEdgePath(edge.from, edge.to, i);
            if (!path) return null;
            const highlighted = activeEdgeIndices.has(i);
            const fromNode = nodeMap[edge.from];
            const fromGroup = fromNode?.group || "";
            const isEdgeHovered = edgeTooltip && edgeTooltip.fromLabel === fromNode?.label && edgeTooltip.insight === edge.insight;
            const fromColor = fromNode ? GROUP_META[fromNode.group]?.color || "#fff" : "#fff";
            const col = isEdgeHovered ? "#fbbf24" : highlighted ? fromColor : fromColor;
            const marker = isEdgeHovered ? "url(#arrowHover)" : highlighted ? `url(#arrow-${fromGroup})` : "url(#arrow)";
            return (
              <g key={"e-" + i}>
                {/* Glow layer for hovered/highlighted */}
                {(isEdgeHovered || highlighted) && (
                  <path
                    d={path.d}
                    fill="none"
                    stroke={col}
                    strokeWidth={isEdgeHovered ? 6 : 4}
                    opacity={isEdgeHovered ? 0.3 : 0.15}
                    filter="url(#edgeGlow)"
                    style={{ pointerEvents: "none" }}
                  />
                )}
                {/* Main edge */}
                <path
                  d={path.d}
                  fill="none"
                  stroke={col}
                  strokeWidth={isEdgeHovered ? 3 : highlighted ? 2 : 0.8}
                  opacity={isEdgeHovered ? 1 : activeNode ? (highlighted ? 0.9 : 0.04) : 0}
                  strokeDasharray={isEdgeHovered ? "6 4" : "none"}
                  style={{
                    transition: "all 0.3s",
                    animation: isEdgeHovered ? "dashFlow 0.6s linear infinite" : "none",
                  }}
                  markerEnd={marker}
                />
              </g>
            );
          })}

          {/* Hit targets */}
          {EDGES.map((edge, i) => {
            const path = getEdgePath(edge.from, edge.to, i);
            if (!path) return null;
            const fromNode = nodeMap[edge.from];
            const toNode = nodeMap[edge.to];
            if (!fromNode || !toNode) return null;
            // Only allow hovering arrows that are in the pinned node's flow
            const isRelevant = pinnedNode && activeEdgeIndices.has(i);
            return (
              <path
                key={"h-" + i}
                d={path.d}
                fill="none"
                stroke="transparent"
                strokeWidth={24}
                style={{ cursor: isRelevant ? "pointer" : "default", pointerEvents: isRelevant ? "auto" : "none" }}
                onMouseEnter={(e) => {
                  setNodeTooltip(null);
                  // edge hit target hover
                  const rect = svgRef.current?.getBoundingClientRect();
                  if (rect) setEdgeTooltip({
                    insight: edge.insight,
                    fromLabel: fromNode.label,
                    toLabel: toNode.label,
                    fromColor: GROUP_META[fromNode.group]?.color || "#fff",
                    toColor: GROUP_META[toNode.group]?.color || "#fff",
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }}
                onMouseMove={(e) => {
                  if (edgeTooltip && svgRef.current) {
                    const rect = svgRef.current.getBoundingClientRect();
                    setEdgeTooltip((prev) => prev ? { ...prev, x: e.clientX - rect.left, y: e.clientY - rect.top } : null);
                  }
                }}
                onMouseLeave={() => setEdgeTooltip(null)}
              />
            );
          })}
        </svg>

        {/* Node Tooltip */}
        {nodeTooltip && (
          <div style={{ position: "fixed", left: Math.min(nodeTooltip.x + 14, window.innerWidth - 320), top: Math.max(nodeTooltip.y - 60, 10), background: "rgba(15,15,25,0.96)", border: `1px solid ${nodeTooltip.color}55`, borderRadius: 8, padding: "10px 14px", maxWidth: 300, zIndex: 200, backdropFilter: "blur(12px)", boxShadow: "0 8px 32px rgba(0,0,0,0.6)", pointerEvents: "none" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: nodeTooltip.color, marginBottom: 4, fontFamily: "'Space Grotesk', sans-serif" }}>{nodeTooltip.label}</div>
            <div style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.5 }}>{nodeTooltip.desc}</div>
          </div>
        )}

        {/* Edge Tooltip */}
        {edgeTooltip && (
          <div style={{ position: "fixed", left: Math.min((svgRef.current?.getBoundingClientRect().left || 0) + edgeTooltip.x + 14, window.innerWidth - 380), top: Math.max((svgRef.current?.getBoundingClientRect().top || 0) + edgeTooltip.y - 80, 10), background: "rgba(12,12,20,0.97)", border: "1px solid rgba(251,191,36,0.4)", borderRadius: 10, padding: "12px 16px", maxWidth: 360, zIndex: 200, backdropFilter: "blur(14px)", boxShadow: "0 8px 32px rgba(0,0,0,0.7), 0 0 20px rgba(251,191,36,0.08)", pointerEvents: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8, fontFamily: "'Space Grotesk', sans-serif" }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: edgeTooltip.fromColor, background: edgeTooltip.fromColor + "18", padding: "2px 6px", borderRadius: 4 }}>{edgeTooltip.fromLabel}</span>
              <span style={{ fontSize: 10, color: "#fbbf24" }}>&rarr;</span>
              <span style={{ fontSize: 10, fontWeight: 600, color: edgeTooltip.toColor, background: edgeTooltip.toColor + "18", padding: "2px 6px", borderRadius: 4 }}>{edgeTooltip.toLabel}</span>
            </div>
            <div style={{ fontSize: 10.5, color: "#cbd5e1", lineHeight: 1.6 }}>{edgeTooltip.insight}</div>
          </div>
        )}
      </div>
    </div>
  );
}
