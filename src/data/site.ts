// XNL HR — single source of truth for site-wide data.

export const site = {
  legalName: "XNL HR & Communications",
  shortName: "XNL HR",
  tagline: "Senior HR, scoped by the project.",
  description:
    "Fractional HR and workplace mediation for owner-operated employers and not-for-profits. Headquartered in Ontario. Canada-wide on the right files.",
  url: "https://xnlhr.com",
  founded: 2012,
} as const;

export const contact = {
  phone: "289.338.4001",
  phoneE164: "+12893384001",
  email: "info@xnlhr.com",
  address: { locality: "Newmarket", region: "ON", country: "Canada" },
  hours: "Mon to Fri, 9 to 5 ET",
} as const;

export const principals = {
  evert: {
    name: "Evert Akkerman",
    credential: "CHRL, LL.M. (NL)",
    role: "Founder. Fractional HR + editorial.",
    linkedin: "https://www.linkedin.com/in/evertakkerman/",
  },
  wendy: {
    name: "Wendy Akkerman",
    credential: "Mediator",
    role: "Workplace mediation",
    linkedin: "",
    launchNote: "Now booking",
  },
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Rates", href: "/services#pricing" },
  { label: "Approach", href: "/approach" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
] as const;

export const scenarios = [
  { key: "termination", label: "Just terminated someone", context: "Recent termination. We'll help you get the file right, contain the risk, and document defensibly.", urgency: "Usually same-week response" },
  { key: "hrto", label: "Got an HRTO notice", context: "HRTO notice in hand. We'll walk you through mediation prep, response strategy, and the timeline ahead.", urgency: "Time-sensitive. We'll prioritize." },
  { key: "handbook", label: "Handbook is 5+ years old", context: "Your handbook needs a rewrite. We'll audit what's there and rebuild against current ESA, OHSA, and AODA standards.", urgency: "Typically two to four weeks" },
  { key: "turnover", label: "Turnover is bleeding us", context: "Turnover diagnostic. We'll find the root causes and design retention interventions that actually hold.", urgency: "Diagnostic in two weeks" },
] as const;

export const wontDo = [
  { title: "Payroll processing", body: "We don't run payroll. That's ADP, Wagepoint, or Ceridian." },
  { title: "ATS implementation", body: "We won't configure your applicant tracking system. That's Greenhouse or Lever support." },
  { title: "EOR / PEO services", body: "We're not your employer of record. That's Justworks, Borderless, or Deel." },
] as const;

export const services = [
  {
    slug: "hr-support",
    name: "Fractional HR",
    principal: "Evert Akkerman",
    blurb: "Hiring, terminations, handbooks, policy, compliance. The outsourced HR department, scoped by the project.",
    forLine: "For owner-operated employers without an in-house HR lead.",
    engagement: "Project or retainer",
    price: "From $2,500",
    typicalLength: "Two to four weeks per project",
    anonymizedCase: "Manufacturer, 80 employees. Terminated CFO without documented cause. We rebuilt the file and the settlement landed at $35k instead of the projected $140k.",
    icon: "briefcase",
    gradient: "linear-gradient(135deg, #1A1D24 0%, #2D3D4E 50%, #6B5F7D 100%)",
  },
  {
    slug: "mediation",
    name: "Workplace Mediation",
    principal: "Wendy Akkerman. Now booking.",
    blurb: "Independent mediation for workplace conflict, harassment complaints, and termination disputes. Timed to the HRTO mandatory-mediation rule.",
    forLine: "For employers facing internal conflict or HRTO proceedings.",
    engagement: "Per-session",
    price: "From $1,800",
    typicalLength: "Half-day or full-day sessions",
    anonymizedCase: "NFP board, harassment complaint between ED and program director. Two half-day sessions. Both stayed. No formal complaint filed.",
    icon: "scale",
    gradient: "linear-gradient(135deg, #2D3D4E 0%, #6B5F7D 50%, #A8B5A8 100%)",
  },
  {
    slug: "editorial",
    name: "Editorial & Communications",
    principal: "Evert Akkerman",
    blurb: "Op-eds, board memos, communications plans, book editing, EN to NL translation. Drawn from 25+ Canadian bylines.",
    forLine: "For leaders who need a clearer voice in public or internal communication.",
    engagement: "Per-project",
    price: "From $1,200",
    typicalLength: "One to three weeks per project",
    anonymizedCase: "Professional services firm. Founder needed a board memo on a partner exit. 48-hour turnaround. The memo carried the room.",
    icon: "pen",
    gradient: "linear-gradient(135deg, #1A1D24 0%, #2D3D4E 60%, #FAF7F2 100%)",
  },
] as const;

export const credentials = ["Since 2012", "CHRL", "LL.M. (NL)", "Randstad Innovation in HR Award", "Canada's Top-25 HR · 2016, 2017"] as const;

export const testimonials = [
  { quote: "We had a termination going sideways and a board meeting in 72 hours. Evert had us documented, defensible, and confident before the meeting. The room felt different.", role: "Executive Director", org: "Mid-size Ontario nonprofit", placeholder: true },
  { quote: "Wendy made a hard conversation possible without making it harder. Two sessions and the team is still intact.", role: "Founder + CEO", org: "Professional services firm", placeholder: true },
  { quote: "Evert wrote the board memo I'd been trying to write for two weeks. It landed in 20 minutes of his time.", role: "COO", org: "Ontario municipal corporation", placeholder: true },
] as const;

export const articles = [
  {
    slug: "hrto-mandatory-mediation",
    title: "The HRTO mandatory-mediation rule: what Ontario employers misunderstand",
    publication: "XNL Insights",
    date: "January 2026",
    excerpt: "Six months in, most employers I speak with are still treating mandatory mediation as a procedural delay. They're wrong. The cost of that misunderstanding is showing up in their settlement records, their legal bills, and the morale of the teams they're trying to defend.",
    url: "/insights/hrto-mandatory-mediation",
    placeholder: false,
    original: true,
  },
  {
    slug: "cheapest-hr-mistake",
    title: "Why the cheapest HR mistake is the one you spot first",
    publication: "Canadian HR Reporter",
    date: "March 2026",
    excerpt: "Most wrongful dismissal claims have a signal weeks before they file. The cost of catching them early vs. defending them later isn't close.",
    url: "#",
    placeholder: true,
    original: false,
  },
  {
    slug: "hiring-search-problem",
    title: "Hiring is a search problem, not a sales problem",
    publication: "Municipal World",
    date: "November 2025",
    excerpt: "The best hires aren't sold on you. They're found. That distinction changes the entire process, the cost, and the retention math.",
    url: "#",
    placeholder: true,
    original: false,
  },
] as const;

export const publications = [
  { name: "Canadian HR Reporter", weight: 700, tracking: "-0.025em", style: "normal", uppercase: false },
  { name: "Municipal World", weight: 300, tracking: "0.02em", style: "italic", uppercase: false },
  { name: "Ottawa Life", weight: 400, tracking: "0.04em", style: "italic", uppercase: false },
  { name: "Talent Canada", weight: 700, tracking: "-0.03em", style: "normal", uppercase: false },
  { name: "The Lawyer's Daily", weight: 400, tracking: "0.01em", style: "italic", uppercase: false },
  { name: "HR Professional Now", weight: 500, tracking: "0.12em", style: "normal", uppercase: true },
  { name: "HRD Canada", weight: 700, tracking: "-0.015em", style: "italic", uppercase: false },
] as const;

export const voiceSamples = [
  { text: "Most HR problems are documentation problems wearing a people-problem costume." },
  { text: "The HR department's job isn't to protect the company. It's to protect the company from itself." },
  { text: "If your handbook is older than your last hire, you have a handbook problem." },
  { text: "Senior judgment is mostly knowing what NOT to write down." },
  { text: "The cheapest HR mistake is the one you spot before it becomes a wrongful dismissal claim." },
  { text: "If we're not the right fit, I'll tell you in the first ten minutes. The other twenty are for who is." },
] as const;

export const buyerPersonas = [
  { role: "The founder-CEO", sub: "Growing past 30 employees with no HR lead", pain: "Hiring is chaos. The handbook hasn't been touched since 2019. You just made a termination call your gut said was right, but your paper trail can't defend.", fit: "Project-by-project HR with senior judgment on the file when it matters." },
  { role: "The NFP Executive Director", sub: "Board governance and HR overlap, limited budget", pain: "Mediation rules just changed. Complaints are landing. The board treats HR as a line item rather than a strategic risk.", fit: "Senior advisor on the hard files. Wendy on mediation. No full-time HR hire required." },
  { role: "The COO with growing team", sub: "You have HR staff, but you need depth for senior matters", pain: "Your HR generalist is great at the day-to-day. They're out of their depth on the executive termination, the HRTO defense, or the policy overhaul that's overdue.", fit: "Senior advisory layer alongside your team. We bring depth. They keep bandwidth." },
] as const;

export const stageFit = [
  { range: "Under 15", label: "Too small for fractional", body: "You probably need a templated solution and an employment lawyer for one-off matters. We'll refer you.", state: "out" as const },
  { range: "15–250", label: "Sweet spot · XNL", body: "Owner-operated SMBs and not-for-profits. Big enough to need senior HR judgment. Small enough that a full-time hire is overkill.", state: "in" as const },
  { range: "250+", label: "You likely have HR already", body: "You probably have an HR team. We can be a senior advisor for specific matters, but you don't need fractional HR as your primary HR.", state: "out" as const },
] as const;

export const industries = [
  { name: "Manufacturing", icon: "factory", note: "15 to 150 employee shops with hourly + salaried mix" },
  { name: "Professional services", icon: "briefcase", note: "Partner-led firms growing past founder-CEO HR" },
  { name: "Not-for-profit", icon: "heart", note: "Board-governed, ED-led, mission-driven" },
  { name: "Municipal", icon: "building", note: "Town corporations, agencies, boards" },
  { name: "Healthcare", icon: "cross", note: "Clinic groups, allied health, mid-size practices" },
  { name: "Retail / hospitality", icon: "shop", note: "Multi-location operators with turnover at scale" },
] as const;

export const faqs = [
  { q: "How is XNL different from a traditional HR firm?", a: "One senior partner on every file. No retainers required, no junior analysts, no bait-and-switch from the partner you signed with to the staff who actually do the work. You hire Evert (or Wendy for mediation), and Evert (or Wendy) does the work." },
  { q: "What does an engagement cost?", a: "Engagements are scoped to a fixed fee or hourly cap. We share pricing on the intake call once we understand the work. There are no monthly retainers you can't opt out of." },
  { q: "How fast can you start?", a: "Intake call within 48 hours. Scoped proposal in three business days. Live engagement typically within two weeks of the intake. Urgent terminations or HRTO proceedings can move faster." },
  { q: "Do you work outside Ontario?", a: "Yes. Most engagements are Ontario-based since that's where the legal frameworks (ESA, OHSA, AODA, HRTO) sit and where Evert is licensed. But editorial work travels anywhere. Mediation work travels where the matter doesn't touch a specific tribunal. Out-of-province fractional HR happens case by case, usually for companies with operations in multiple provinces or Canadian subsidiaries of international parents. We're up-front about what we can and can't take on." },
  { q: "What size company is the right fit?", a: "Owner-operated SMBs (roughly 15 to 250 employees) and not-for-profits without a senior HR lead. Below that, you probably don't need fractional HR. Above that, you typically have an HR team and want a senior advisor on specific projects." },
  { q: "Can you handle just the mediation, without the rest?", a: "Yes. Wendy's mediation practice is independent. We'll mediate a single workplace dispute or HRTO matter without any other XNL engagement attached." },
  { q: "What if I'm not sure XNL is the right fit?", a: "That's what the 30-minute intake call is for. No cost, no obligation. If we're not the right fit, we'll tell you straight, and we'll refer you to someone who is." },
] as const;

export const mediationFaqs = [
  { q: "What does a mediation session cost?", a: "Half-day sessions start at $1,800. Full-day sessions $3,000. HRTO mandatory mediation matters quoted per file. [Placeholder. Wendy to confirm.]" },
  { q: "Virtual or in-person?", a: "Both. Most workplace disputes resolve faster in person. HRTO mandatory mediation usually runs virtual. Your preference, we accommodate." },
  { q: "What if the parties don't settle?", a: "Written impasse statement at close, preserving the mediation record. The matter proceeds through its formal channel without prejudice to what was discussed in mediation." },
  { q: "Is it confidential?", a: "Yes. All parties sign a confidentiality agreement at intake. Nothing discussed in mediation is admissible if the matter proceeds to a tribunal or court, with limited statutory exceptions." },
  { q: "Do you handle the new Ontario HRTO mandatory-mediation rule?", a: "Yes. The rule took effect in June 2025. Most HRTO applications now require mediation before a hearing. Wendy's practice is built around it." },
  { q: "How is this different from arbitration?", a: "Mediation is voluntary settlement-seeking. The mediator has no authority to impose an outcome. Arbitration is adjudicative. The arbitrator decides. We mediate. We do not arbitrate." },
  { q: "When is mediation NOT the right call?", a: "Active criminal proceedings, court orders pending, or when one party refuses to participate in good faith. We'll tell you straight at intake." },
] as const;

export const hrSupportFaqs = [
  { q: "What's the smallest project you'll take?", a: "A scoped one-week piece. Typically a termination file, a single policy review, or a job description rebuild. Below that we usually refer you to a templated solution." },
  { q: "Do you do monthly retainers?", a: "Only if it genuinely serves you. The default is project-based fixed-fee or capped hourly. Most clients prefer it that way. You pay for the work we do, not a slot on the calendar." },
  { q: "What's the typical first engagement?", a: "Three patterns come up most often: a termination prep + documentation file, a handbook audit + rewrite, or a policy stack review for a specific compliance gap (ESA, OHSA, AODA)." },
  { q: "Do you handle unionized workplaces?", a: "Yes, case by case. Collective agreement work, grievance preparation, and progressive discipline matters in a union environment. Evert has done all of it. Not every union file is the right fit; we scope at intake." },
  { q: "Can Evert sit in on a board meeting?", a: "Yes, as an HR advisor. Especially useful around senior terminations, ED/CEO performance conversations, and post-incident reviews." },
  { q: "What if we already have HR staff?", a: "Then we're an advisor, not a replacement. The best engagements alongside in-house HR are senior-level matters (executive terminations, policy overhauls, HRTO defense) where your HR team needs depth, not bandwidth." },
] as const;

export const editorialFaqs = [
  { q: "What can you write?", a: "Op-eds, board memos, internal communications plans, book editing, technical HR writing, and EN to NL translation. The throughline is plain, direct, defensible language for senior audiences." },
  { q: "How long is a typical project?", a: "One to three weeks per piece. Urgent pieces can move faster (48-hour minimum). Book-length editing runs longer and scopes separately." },
  { q: "Do you ghostwrite?", a: "Yes, both attributed and unattributed. Many of Evert's bylines began as ghostwriting engagements for HR leaders. The client gets to decide whose name lands on it." },
  { q: "What's the turnaround on urgent work?", a: "48 hours minimum for a one-page memo. Tighter than that, we'll tell you straight whether we can deliver." },
  { q: "Do you handle technical HR writing?", a: "That's the wheelhouse. 25+ bylines in Canadian HR Reporter, Municipal World, Talent Canada, and The Lawyer's Daily on HR, employment law, and workplace governance." },
  { q: "Can you work in Dutch?", a: "Yes. Evert is Dutch-native and works EN to NL fluently. Useful for Canadian subsidiaries of Dutch parent companies or for North American firms with operations in the Netherlands." },
] as const;

export const mediationCovers = [
  { title: "Workplace conflict", body: "Peer-to-peer disputes, manager-to-report breakdowns, team-level dysfunction." },
  { title: "Harassment complaints", body: "Formal or informal complaints, before or during investigation." },
  { title: "Termination disputes", body: "Severance negotiations, reference language, post-termination grievances." },
  { title: "HRTO applications", body: "Mandatory mediation prep and representation under the June 2025 rule." },
  { title: "Board-level conflicts", body: "ED vs. board, between board members, NFP governance disputes." },
  { title: "Post-layoff settlements", body: "Group settlement frameworks following workforce reductions." },
] as const;

export const mediationProcess = [
  { n: "01", title: "Intake call", time: "30 min, no cost", body: "Both parties separately. We confirm the matter is mediable and scope the session(s)." },
  { n: "02", title: "Pre-session prep", time: "Three to five business days", body: "Document review, position briefs from each side, confidentiality agreements signed." },
  { n: "03", title: "Session", time: "Half-day or full-day", body: "Wendy mediates. Joint and separate caucus as needed. Settlement, partial settlement, or impasse." },
  { n: "04", title: "Written record", time: "Within five business days", body: "Signed settlement agreement or impasse statement. The matter is closed or proceeds with full record intact." },
] as const;

export const hrSupportCovers = [
  { title: "Hiring + onboarding", body: "Job description rebuilds, interview structure, offer letters, onboarding programs." },
  { title: "Terminations", body: "Termination prep, documentation, severance calculations, exit conversations." },
  { title: "Handbooks + policy", body: "Full handbook audits and rewrites, single-policy reviews, compliance gap analyses." },
  { title: "Compliance", body: "ESA, OHSA, AODA, pay equity, accessibility audits and remediation." },
  { title: "Performance management", body: "PIP design, progressive discipline frameworks, performance review systems." },
  { title: "Senior advisory", body: "Executive terminations, board-level HR strategy, post-incident reviews." },
] as const;

export const editorialCovers = [
  { title: "Op-eds", body: "Bylined or ghostwritten thought leadership for HR trade press and general media." },
  { title: "Board memos", body: "Senior decision documents, governance briefings, board-pack content." },
  { title: "Communications plans", body: "Internal change announcements, layoff messaging, organizational transition comms." },
  { title: "Book editing", body: "Developmental and structural editing for HR, leadership, and professional services books." },
  { title: "Technical HR writing", body: "Compliance documentation, policy explainers, training material that holds up to scrutiny." },
  { title: "EN to NL translation", body: "Native-quality Dutch translation of HR, legal, and business documents." },
] as const;

export const comparison = {
  rows: [
    { label: "Pricing model", traditional: "Monthly retainer, often $5k to $15k", inhouse: "$90k to $160k salary + benefits", xnl: "Fixed-fee project or capped hourly" },
    { label: "Who's on the file", traditional: "Junior staff, partner reviews", inhouse: "One generalist", xnl: "Senior partner directly" },
    { label: "Time to start", traditional: "Two to six weeks (RFP, onboarding)", inhouse: "Three to six months (hire, ramp)", xnl: "Under two weeks" },
    { label: "Specialty depth", traditional: "Broad but generic", inhouse: "Day-to-day only", xnl: "25 years, published" },
    { label: "Lock-in", traditional: "Six- to twelve-month contracts", inhouse: "Permanent overhead", xnl: "Project-by-project" },
  ],
} as const;
