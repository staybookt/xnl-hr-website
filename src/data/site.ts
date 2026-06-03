// XNL HR — single source of truth for site-wide data.

export const site = {
  legalName: "XNL HR & Communications",
  shortName: "XNL HR",
  tagline: "Senior HR, scoped by the project.",
  description:
    "Fractional HR and editorial for owner-operated businesses and not-for-profits across Canada. Headquartered in Newmarket, Ontario. Founded 2012 by Evert Akkerman (CHRL, LL.M.).",
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
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Rates", href: "/services#pricing" },
  { label: "Approach", href: "/approach" },
  { label: "Insights", href: "/insights" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
] as const;

export const scenarios = [
  { key: "termination", label: "Just terminated someone", context: "Recent termination. We'll help you get the file right, contain the risk, and document defensibly.", urgency: "Usually same-week response" },
  { key: "handbook", label: "Handbook is 5+ years old", context: "Your handbook needs a rewrite. We'll audit what's there and rebuild against current ESA, OHSA, and AODA standards.", urgency: "Typically two to four weeks" },
  { key: "turnover", label: "Turnover is bleeding us", context: "Turnover diagnostic. We'll find the root causes and design retention interventions that actually hold.", urgency: "Diagnostic in two weeks" },
  { key: "executive", label: "Senior matter, no in-house depth", context: "Executive termination, board-level HR issue, or compliance overhaul your in-house team isn't built for.", urgency: "Intake call within 48 hours" },
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
    blurb: "From handbook updates and hiring support to defensible termination prep, compliance audits, and senior advisory. The outsourced HR department, scoped by the project.",
    forLine: "For owner-operated businesses without an in-house HR lead.",
    engagement: "Project or retainer",
    price: "From $2,500",
    typicalLength: "Two to four weeks per project",
    anonymizedCase: "Manufacturer, 80 employees. Terminated CFO without documented cause. We rebuilt the file and the settlement landed at $35k instead of the projected $140k.",
    icon: "briefcase",
    gradient: "linear-gradient(135deg, #1A1D24 0%, #2D3D4E 50%, #6B5F7D 100%)",
  },
  {
    slug: "editorial",
    name: "Editorial & Communications",
    principal: "Evert Akkerman",
    blurb: "Op-eds, board memos, resume revamps, communications plans, book editing, EN to NL translation.",
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
  { quote: "We had a termination going sideways and a board meeting in 72 hours. Evert had us documented, defensible, and confident before the meeting. The room felt different.", role: "Executive Director", org: "Mid-size Ontario nonprofit", placeholder: true, practice: "hr" as const },
  { quote: "Evert wrote the board memo I'd been trying to write for two weeks. It landed in 20 minutes of his time.", role: "COO", org: "Ontario municipal corporation", placeholder: true, practice: "editorial" as const },
  { quote: "Our handbook hadn't been touched since 2018. Evert had a defensible rewrite in our hands inside four weeks, with a clean compliance trail for every change.", role: "Founder + CEO", org: "Manufacturing firm, GTA", placeholder: true, practice: "hr" as const },
  { quote: "We needed an op-ed in Canadian HR Reporter under our managing partner's byline. Evert delivered a draft we barely touched before publishing.", role: "Managing Partner", org: "Professional services firm", placeholder: true, practice: "editorial" as const },
  { quote: "Our HR generalist runs day-to-day fine. When the executive termination landed, she didn't have the depth. Evert filled the gap for the six weeks it mattered, then we went back to business as usual.", role: "COO", org: "Healthcare services group", placeholder: true, practice: "hr" as const },
] as const;

export const articles = [
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
  {
    slug: "performance-reviews-ritual-dance",
    title: "Performance reviews are a ritual dance",
    publication: "HR News Canada",
    date: "September 2025",
    excerpt: "In many organizations, performance reviews are a ritual dance: a lot of movement and no progress. Meanwhile, your exposure grows.",
    url: "#",
    placeholder: true,
    original: false,
  },
] as const;

export const publications = [
  { name: "Canadian HR Reporter", weight: 700, tracking: "-0.025em", style: "normal", uppercase: false },
  { name: "Municipal World", weight: 300, tracking: "0.02em", style: "italic", uppercase: false },
  { name: "HR News Canada", weight: 400, tracking: "0.04em", style: "italic", uppercase: false },
  { name: "Talent Canada", weight: 700, tracking: "-0.03em", style: "normal", uppercase: false },
  { name: "The Lawyer's Daily", weight: 400, tracking: "0.01em", style: "italic", uppercase: false },
  { name: "HR Professional Now", weight: 500, tracking: "0.12em", style: "normal", uppercase: true },
  { name: "HRD Canada", weight: 700, tracking: "-0.015em", style: "italic", uppercase: false },
] as const;

export const voiceSamples = [
  { text: "Most HR problems are documentation problems wearing a people-problem costume." },
  { text: "The HR department's job isn't to protect the company. It's to protect the company from itself." },
  { text: "If your handbook is older than your last hire, you have a handbook problem." },
  { text: "In many organizations, performance reviews are a ritual dance: a lot of movement and no progress. Meanwhile, your exposure grows." },
  { text: "Senior judgment is mostly knowing what NOT to write down." },
  { text: "The cheapest HR mistake is the one you spot before it becomes a wrongful dismissal claim." },
  { text: "If we're not the right fit, I'll tell you in the first ten minutes. The other twenty are for who is." },
] as const;

export const buyerPersonas = [
  { role: "The founder-CEO", sub: "Growing past 30 employees with no HR lead", pain: "Hiring is chaos. The handbook hasn't been touched since 2019. You just made a termination call your gut said was right, but your paper trail can't defend.", fit: "Handbook rewrites, hiring support, defensible termination prep, op-ed drafting when you want to publish. Pay per project, no retainer." },
  { role: "The NFP Executive Director", sub: "Board governance and HR overlap, limited budget", pain: "Complaints land in your inbox. The board treats HR as a line item rather than a strategic risk. You need a senior voice on call without the cost of hiring one.", fit: "Day-to-day HR work, board memos, escalation support when files turn serious. One partner who learns your file." },
  { role: "The COO with growing team", sub: "You have HR staff, but you need depth for senior matters", pain: "Your HR generalist is great at the day-to-day. They're out of their depth on the executive termination or the policy overhaul that's overdue.", fit: "Senior backstop on the hard matters, plus ongoing capacity for the work your team can't get to." },
] as const;

export const stageFit = [
  { range: "Under 5", label: "One-off project work", body: "Handbook drafts, single-policy reviews, hiring support, termination prep. Pay per matter. We'll refer you to an employment lawyer when the work is purely legal.", state: "secondary" as const },
  { range: "5–100", label: "Sweet spot · fractional partner", body: "Owner-operated SMBs and not-for-profits without a senior HR lead. Day-to-day HR support, hard files when they land, ongoing project work. One senior partner who learns your file.", state: "primary" as const },
  { range: "100+", label: "Senior advisor on specific projects", body: "You typically have an HR team and want a senior advisor on specific projects: executive search support, board-level HR advisory, interim leadership during turnover.", state: "secondary" as const },
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
  { q: "What is fractional HR?", a: "Fractional HR is a service model where a senior HR partner works with your business on a project or part-time basis, instead of you hiring a full-time HR employee. You get senior judgment when you need it, scoped to the work, without the overhead of a permanent hire. XNL has practised this model since 2012." },
  { q: "How is XNL different from a traditional HR firm?", a: "One senior partner on every file. No retainers required, no junior analysts, no bait-and-switch from the partner you signed with to the staff who actually do the work. You hire Evert Akkerman, and Evert does the work." },
  { q: "What does an engagement cost?", a: "Engagements are scoped to a fixed fee or hourly cap. We share pricing on the intake call once we understand the work. There are no monthly retainers you can't opt out of. Fractional HR projects typically start at $2,500. Editorial projects typically start at $1,200." },
  { q: "How fast can you start?", a: "Intake call within 48 hours. Scoped proposal in three business days. Live engagement typically within two weeks of the intake. Urgent terminations or active complaints can move faster." },
  { q: "Do you work outside Ontario?", a: "Yes. Most fractional HR engagements are Ontario-based since that's where the legal frameworks (ESA, OHSA, AODA) sit and where Evert is licensed. Editorial work travels anywhere. Out-of-province fractional HR happens case by case, usually for companies with operations in multiple provinces or Canadian subsidiaries of international parents." },
  { q: "What size company is the right fit?", a: "Owner-operated SMBs (roughly 5 to 100 employees) and not-for-profits without a senior HR lead." },
  { q: "How do I book a call?", a: "Call 289.338.4001 or email info@xnlhr.com. Online booking is not how we work. The intake call is a conversation, and conversations start with a phone or email." },
  { q: "What if I'm not sure XNL is the right fit?", a: "That's what the 30-minute intake call is for. No cost, no obligation. If we're not the right fit, we'll tell you straight, and we'll refer you to someone who is." },
] as const;

export const hrSupportFaqs = [
  { q: "What's the smallest project you'll take?", a: "A scoped one-week piece. Typically a termination file, a single policy review, or a job description rebuild. Below that we usually refer you to a templated solution." },
  { q: "Do you do monthly retainers?", a: "Only if it genuinely serves you. The default is project-based fixed-fee or capped hourly. Most clients prefer it that way. You pay for the work we do, not a slot on the calendar." },
  { q: "What's the typical first engagement?", a: "Three patterns come up most often: a termination prep + documentation file, a handbook audit + rewrite, or a policy stack review for a specific compliance gap (ESA, OHSA, AODA)." },
  { q: "Do you handle unionized workplaces?", a: "Yes, case by case. Collective agreement work, grievance preparation, and progressive discipline matters in a union environment. Evert has done all of it. Not every union file is the right fit; we scope at intake." },
  { q: "Can Evert sit in on a board meeting?", a: "Yes, as an HR advisor. Especially useful around senior terminations, ED/CEO performance conversations, and post-incident reviews." },
  { q: "What if we already have HR staff?", a: "Then we're an advisor, not a replacement. The best engagements alongside in-house HR are senior-level matters (executive terminations, policy overhauls) where your HR team needs depth, not bandwidth." },
] as const;

export const editorialFaqs = [
  { q: "What can you write?", a: "Op-eds, board memos, resume revamps, internal communications plans, book editing, technical HR writing, and EN to NL translation. The throughline is plain, direct, defensible language for senior audiences." },
  { q: "How long is a typical project?", a: "One to three weeks per piece. Urgent pieces can move faster (48-hour minimum). Book-length editing runs longer and scopes separately." },
  { q: "Do you ghostwrite?", a: "Yes, both attributed and unattributed. Many of Evert's bylines began as ghostwriting engagements for HR leaders. The client gets to decide whose name lands on it." },
  { q: "What's the turnaround on urgent work?", a: "48 hours minimum for a one-page memo. Tighter than that, we'll tell you straight whether we can deliver." },
  { q: "Do you handle technical HR writing?", a: "That's the wheelhouse. 25+ bylines in Canadian HR Reporter, Municipal World, Talent Canada, HR News Canada, and others on HR, employment law, and workplace governance." },
  { q: "Can you work in Dutch?", a: "Yes. Evert is Dutch-native and works EN to NL fluently. Useful for Canadian subsidiaries of Dutch parent companies or for North American firms with operations in the Netherlands." },
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
  { title: "Resume revamps", body: "Senior-executive resumes rebuilt to read like a hiring manager would write them." },
  { title: "Communications plans", body: "Internal change announcements, layoff messaging, organizational transition comms." },
  { title: "Book editing", body: "Developmental and structural editing for HR, leadership, and professional services books." },
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
