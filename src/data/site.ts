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

export const services = [
  {
    slug: "hr-support",
    name: "Fractional HR",
    principal: "Evert Akkerman",
    blurb:
      "Hiring, terminations, handbooks, policy, compliance. The outsourced HR department, scoped by the project.",
    forLine: "For owner-operated employers without an in-house HR lead.",
    engagement: "Project or retainer",
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
    {
      label: "Pricing model",
      traditional: "Monthly retainer, often $5k–$15k",
      inhouse: "$90k–$160k salary + benefits",
      xnl: "Fixed-fee project or capped hourly",
    },
    {
      label: "Who's on the file",
      traditional: "Junior staff, partner reviews",
      inhouse: "One generalist",
      xnl: "Senior partner directly",
    },
    {
      label: "Time to start",
      traditional: "2–6 weeks (RFP, onboarding)",
      inhouse: "3–6 months (hire, ramp)",
      xnl: "Under 2 weeks",
    },
    {
      label: "Specialty depth",
      traditional: "Broad but generic",
      inhouse: "Day-to-day only",
      xnl: "25 years, published",
    },
    {
      label: "Lock-in",
      traditional: "6–12 month contracts",
      inhouse: "Permanent overhead",
      xnl: "Project-by-project",
    },
  ],
} as const;
