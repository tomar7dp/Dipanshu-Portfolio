// Edit everything in this file with your own information.
// Every section on the page reads from here — you shouldn't need
// to touch component code just to update your content.

export const profile = {
  name: "Alex Rivera",
  role: "Full-Stack Developer",
  tagline:
    "I build fast, reliable web products — from the database schema to the pixel on screen.",
  location: "Remote / Austin, TX",
  availableForWork: true,
  email: "hello@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/yourusername" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
    { label: "X", href: "https://x.com/yourusername" },
  ],
  stats: [
    { value: "5+", label: "Years building" },
    { value: "30+", label: "Projects shipped" },
    { value: "12", label: "Open-source repos" },
  ],
};

export const projects = [
  {
    title: "Pathfinder",
    description:
      "A route-optimization dashboard for delivery fleets. Cut average delivery time by 18% for pilot customers.",
    tags: ["Next.js", "PostgreSQL", "Mapbox"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/yourusername/pathfinder",
    featured: true,
  },
  {
    title: "Ledgerline",
    description:
      "Self-hosted invoicing tool for freelancers, with recurring billing and Stripe payouts built in.",
    tags: ["TypeScript", "tRPC", "Stripe"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/yourusername/ledgerline",
    featured: true,
  },
  {
    title: "Signal Board",
    description:
      "Realtime team status board — think a shared, always-on standup that updates as people work.",
    tags: ["React", "WebSockets", "Redis"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/yourusername/signal-board",
    featured: false,
  },
  {
    title: "Groundwork",
    description:
      "A CLI that scaffolds a production-ready Next.js + Tailwind + Postgres project in under a minute.",
    tags: ["Node.js", "CLI", "DX tooling"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/yourusername/groundwork",
    featured: false,
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "Redis", "tRPC"],
  },
  {
    category: "Tooling",
    items: ["Docker", "Git", "GitHub Actions", "Vercel"],
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Northwind Labs",
    period: "2023 — Present",
    description:
      "Lead a team of four building the internal platform used by 200+ engineers. Owns the deploy pipeline and API gateway.",
  },
  {
    role: "Software Engineer",
    company: "Fieldstone",
    period: "2021 — 2023",
    description:
      "Built customer-facing dashboards and the billing system that processes 50k+ transactions a month.",
  },
  {
    role: "Junior Developer",
    company: "Coastline Digital",
    period: "2019 — 2021",
    description:
      "Started on the agency's client-sites team, then moved into building their first internal design system.",
  },
];
