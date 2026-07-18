// Edit everything in this file with your own information.
// Every section on the page reads from here — you shouldn't need
// to touch component code just to update your content.

export const profile = {
  name: "Dipanshu Tomar",
  role: "Software Developer",
  // Small pill top-left, e.g. [CORE_DEV]
  tag: "CORE_DEV",
  // The short line that "types" itself out in the terminal box
  terminalLine: "BUILDING SCALABLE SYSTEMS",
  // Wrap words in *asterisks* to highlight them in cyan/purple
  heroDescription:
    "Engineering *reliable* web systems at the intersection of *clean architecture*, backend logic, and *performance-focused* engineering.",
  // Shown in the small tag under the photo: ID: <idCode>  ROLE: <roleCode>  STATUS: <status>
  idCode: "DipanshuTomar",
  roleCode: "SD",
  photoStatus: "ACTIVE",
  summary:
    "I'm a software developer who enjoys *building reliable systems* end to end — from clean backend architecture to a frontend that feels effortless to use.",
  location: "India",
  availableForWork: true,
  email: "dipanshuthakurrrr7@gmail.com",
  socials: [
    { label: "GitHub", icon: "github", href: "https://github.com/tomar7dp" },
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/dipanshutomarrr" },
    { label: "LeetCode", icon: "leetcode", href: "http://leetcode.com/u/tomardipanshu07" },
  ],
  stats: [
    { value: "1+", label: "Years building" },
    { value: "5+", label: "Projects shipped" },
    { value: "4+", label: "Open-source repos" },
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
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "Express"],
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
    period: "June,2026 — Present",
    description:
      "Lead a team building the internal platform used by 200+ engineers. Owns the deploy pipeline and API gateway.",
  }
];
