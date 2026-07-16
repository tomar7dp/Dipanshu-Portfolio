// Edit everything in this file with your own information.
// Every section on the page reads from here — you shouldn't need
// to touch component code just to update your content.

export const profile = {
  name: "Dipanshu Tomar",
  role: "Full-Stack Developer",
  tagline:
    "I build fast, reliable web products — from the database schema to the pixel on screen.",
  location: "Ghaziabad(NCR) / Uttar Pradesh, India",
  availableForWork: true,
  email: "dipanshuthakurrrr7@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/tomar7dp" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dipanshutomarrr/" },
    { label: "LeetCode", href: "https://leetcode.com/u/tomardipanshu07" },
  ],
  stats: [
    { value: "1+", label: "Years building" },
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
    items: ["Node.js", "PostgreSQL", "Express.js" ],
  },
  {
    category: "Tooling",
    items: ["Docker", "Git", "GitHub Actions", "Vercel"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Blue Swan Lake Studios",
    period: "2026 — Present",
    description:
      "Lead a team of four building the internal platform used by 200+ engineers. Owns the deploy pipeline and API gateway.",
  }
];
