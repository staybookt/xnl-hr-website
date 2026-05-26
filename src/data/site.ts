// XNL HR — single source of truth for site-wide data.

export const site = {
  legalName: "XNL HR & Communications",
  shortName: "XNL HR",
  tagline: "Senior HR, scoped by the project.",
  description:
    "Fractional HR and workplace mediation for Ontario's owner-operated employers and not-for-profits. No retainers required. No junior staff.",
  url: "https://xnlhr.com",
  founded: 2012,
} as const;

export const contact = {
  phone: "289.338.4001",
  phoneE164: "+12893384001",
  email: "info@xnlhr.com",
  address: {
    locality: "Newmarket",
    region: "ON",
    country: "Canada",
  },
  hours: "Mon–Fri 9–5 ET",
} as const;

export const principals = {
  evert: {
    name: "Evert Akkerman",
    credential: "CHRL, LL.M. (NL)",
    role: "Founder · Fractional HR + Editorial",
    linkedin: "https://www.linkedin.com/in/evertakkerman/",
  },
  wendy: {
    name: "Wendy Akkerman",
    credential: "Mediation",
    role: "Workplace Mediation",
    linkedin: "",
    launchNote: "Now booking",
  },
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/#how" },
  { label: "About", href: "/about" },
  { label: "Articles", href: "/articles" },
] as const;

export const scenarios = [
  {
    key: "termination",
    label: "Just terminated someone",
    context: "Recent termination — we'll help you get the file right, contain risk, and document defensibly.",
    urgency: "Usually same-week response",
  },
  {
    key: "hrto",
    label: "Got an HRTO notice",
    context: "HRTO notice received — we'll walk you through mediation prep, response strategy, and timelines.",
    urgency: "Time-sensitive — we'll prioritize",
  },
  {
    key: "handbook",
    label: "Handbook is 5+ years old",
    context: "Handbook rewrite — we'll audit your current handbook and rebuild against current ESA, OHSA, and AODA standards.",
    urgency: "Typically 2–4 weeks",
  },
  {
    key: "turnover",
    label: "Turnover is bleeding us",
    context: "Turnover analysis — we'll diagnose root causes and design retention interventions that actually hold.",
    urgency: "Diagnostic in 2 weeks",
  },
] as const;

export const wontDo = [
  {
    title: "Payroll processing",
    body: "We don't run your payroll. That's ADP, Wagepoint, or Ceridian.",
  },
  {
    title: "ATS implementation",
    body: "We won't configure your applicant tracking system. That's Greenhouse or Lever support.",
  },
  {
    title: "EOR / PEO services",
    body: "We're not your employer of record. That's Justworks, Borderless, or Deel.",
  },
] as const;

export const services = [
  {
    slug: "hr-support",
    name: "Fractional HR",
    principal: "Evert Akkerman",
    blurb:
      "Hiring, terminations, handbooks, policy, compliance. The outsourced HR department, scoped by the project.",
    forLine: "For owner-operated employers without an in-house HR lead.",
    engagement: "Project or retainer",
    price: "From $2,500",                  // PLACEHOLDER
    typicalLength: "2–4 weeks per project",  // PLACEHOLDER
    anonymizedCase:
      "Manufacturer, 80 employees. Terminated CFO without documented cause. We rebuilt the file and the settlement landed at $35k instead of the projected $140k.",  // PLACEHOLDER — fictional
    icon: "briefcase",
    gradient: "linear-gradient(135deg, #1A1D24 0%, #2D3D4E 50%, #6B5F7D 100%)",
  },
  {
    slug: "mediation",
    name: "Workplace Mediation",
    principal: "Wendy Akkerman · Now booking",
    blurb:
      "Independent mediation for workplace conflict, harassment complaints, and termination disputes. Timed to the HRTO mandatory-mediation rule.",
    forLine: "For employers facing internal conflict or HRTO proceedings.",
    engagement: "Per-session",
    price: "From $1,800",                          // PLACEHOLDER
    typicalLength: "Half-day or full-day sessions",  // PLACEHOLDER
    anonymizedCase:
      "NFP board, harassment complaint between ED and program director. Two half-day sessions. Both stayed. No formal complaint filed.",  // PLACEHOLDER — fictional
    icon: "scale",
    gradient: "linear-gradient(135deg, #2D3D4E 0%, #6B5F7D 50%, #A8B5A8 100%)",
  },
  {
    slug: "editorial",
    name: "Editorial & Communications",
    principal: "Evert Akkerman",
    blurb:
      "Op-eds, board memos, communications plans, book editing, EN↔NL translation. Drawn from 25+ Canadian bylines.",
    forLine: "For leaders who need a clearer voice in public or internal communication.",
    engagement: "Per-project",
    price: "From $1,200",                  // PLACEHOLDER
    typicalLength: "1–3 weeks per project",  // PLACEHOLDER
    anonymizedCase:
      "Professional services firm. Founder needed a board memo on a partner exit. 48-hour turnaround. The memo carried the room.",  // PLACEHOLDER — fictional
    icon: "pen",
    gradient: "linear-gradient(135deg, #1A1D24 0%, #2D3D4E 60%, #FAF7F2 100%)",
  },
] as const;

export const credentials = [
  "Since 2012",
  "CHRL",
  "LL.M. (NL)",
  "Randstad Innovation in HR Award",
  "Canada's Top-25 HR · 2016, 2017",
] as const;

// Testimonials — PLACEHOLDER quotes + attribution (see PLACEHOLDERS.md)
export const testimonials = [
  {
    quote:
      "We had a termination going sideways and a board meeting in 72 hours. Evert had us documented, defensible, and confident before the meeting. The room felt different.",
    role: "Executive Director",
    org: "Mid-size Ontario nonprofit",
    placeholder: true,
  },
  {
    quote:
      "Wendy made a hard conversation possible without making it harder. Two sessions and the team is still intact.",
    role: "Founder + CEO",
    org: "Professional services firm",
    placeholder: true,
  },
  {
    quote:
      "Evert wrote the board memo I'd been trying to write for two weeks. It landed in 20 minutes of his time.",
    role: "COO",
    org: "Ontario municipal corporation",
    placeholder: true,
  },
] as const;

// Recent thinking — PLACEHOLDER article previews (see PLACEHOLDERS.md)
export const articles = [
  {
    title: "Why the cheapest HR mistake is the one you spot first",
    publication: "Canadian HR Reporter",
    date: "March 2026",
    excerpt:
      "Most wrongful dismissal claims have a signal weeks before they file. The cost of catching them early vs. defending them later isn't close.",
    url: "#",
    placeholder: true,
  },
  {
    title: "Mandatory mediation: what Ontario employers should be doing right now",
    publication: "The Lawyer's Daily",
    date: "January 2026",
    excerpt:
      "The HRTO mandatory-mediation rule took effect in June 2025. Most employers still treat mediation as a courtroom delay. Here's why that's the wrong instinct.",
    url: "#",
    placeholder: true,
  },
  {
    title: "Hiring is a search problem, not a sales problem",
    publication: "Municipal World",
    date: "November 2025",
    excerpt:
      "The best hires aren't sold on you. They're found. That distinction changes the entire process, the cost, and the retention math.",
    url: "#",
    placeholder: true,
  },
] as const;

// Publication wordmark styling — typographic variation to evoke real wordmarks
export const publications = [
  { name: "Canadian HR Reporter", weight: 700, tracking: "-0.025em", style: "normal" },
  { name: "Municipal World", weight: 300, tracking: "0.02em", style: "italic" },
  { name: "Ottawa Life", weight: 400, tracking: "0.04em", style: "italic" },
  { name: "Talent Canada", weight: 700, tracking: "-0.03em", style: "normal" },
  { name: "The Lawyer's Daily", weight: 400, tracking: "0.01em", style: "italic" },
  { name: "HR Professional Now", weight: 500, tracking: "0.12em", style: "normal", uppercase: true },
  { name: "HRD Canada", weight: 700, tracking: "-0.015em", style: "italic" },
] as const;

export const faqs = [
  {
    q: "How is XNL different from a traditional HR firm?",
    a: "One senior partner on every file. No retainers required, no junior analysts, no bait-and-switch from the partner you signed with to the staff who actually do the work. You hire Evert (or Wendy for mediation), and Evert (or Wendy) does the work.",
  },
  {
    q: "What does an engagement cost?",
    a: "Project work is fixed-fee. Ongoing support is hourly with a cap. We scope it transparently during the intake call. There are no monthly retainers you can't opt out of — you pay for the work we actually do.",
  },
  {
    q: "How fast can you start?",
    a: "Intake call within 48 hours. Scoped proposal in 3 business days. Live engagement typically within two weeks of the intake. Urgent terminations or HRTO proceedings can move faster.",
  },
  {
    q: "Do you work with companies outside Ontario?",
    a: "Most engagements are Ontario-based since that's where Evert is licensed and where the legal frameworks (ESA, OHSA, AODA, HRTO) sit. We'll take federally regulated work and out-of-province engagements case by case.",
  },
  {
    q: "What size company is the right fit?",
    a: "Owner-operated SMBs (15–250 employees) and not-for-profits without a senior HR lead. Below that, you usually don't need fractional HR. Above that, you typically have an HR team and want a senior advisor on specific projects.",
  },
  {
    q: "Can you handle just the mediation, without the rest?",
    a: "Yes. Wendy's mediation practice is independent — we'll mediate a single workplace dispute or HRTO matter without any other XNL engagement attached.",
  },
  {
    q: "What if I'm not sure XNL is the right fit?",
    a: "That's what the 30-minute intake call is for. No cost, no obligation. If we're not the right fit, we'll tell you straight — and we'll refer you to someone who is.",
  },
] as const;

export const comparison = {
  rows: [
    { label: "Pricing model", traditional: "Monthly retainer, often $5k–$15k", inhouse: "$90k–$160k salary + benefits", xnl: "Fixed-fee project or capped hourly" },
    { label: "Who's on the file", traditional: "Junior staff, partner reviews", inhouse: "One generalist", xnl: "Senior partner directly" },
    { label: "Time to start", traditional: "2–6 weeks (RFP, onboarding)", inhouse: "3–6 months (hire, ramp)", xnl: "Under 2 weeks" },
    { label: "Specialty depth", traditional: "Broad but generic", inhouse: "Day-to-day only", xnl: "25 years, published" },
    { label: "Lock-in", traditional: "6–12 month contracts", inhouse: "Permanent overhead", xnl: "Project-by-project" },
  ],
} as const;
