// Edit everything in this file with your own information.
// Every section on the page reads from here — you shouldn't need
// to touch component code just to update your content.

export const profile = {
  name: "Dipanshu Tomar",
  role: "Software Developer",
  // Your professional summary — shown as the paragraph under the headline.
  // Wrap a word or phrase in *asterisks* to bold it.
  summary:
    "I'm a software developer working across the *full stack* — frontend, backend, and more recently data science, using Python AI/ML libraries.",
  location: "India",
  availableForWork: true,
  email: "dipanshuthakurrrr7@gmail.com",
  web3FormsAccessKey: "cb3d4a28-07fd-42d2-9d6a-edd04d393eac",
  socials: [
    {
      label: "GitHub",
      icon: "github",
      handle: "@tomar7dp",
      href: "https://github.com/tomar7dp",
    },
    {
      label: "LinkedIn",
      icon: "linkedin",
      handle: "@dipanshutomarrr",
      href: "https://www.linkedin.com/in/dipanshutomarrr",
    },
    {
      label: "LeetCode",
      icon: "leetcode",
      handle: "@tomardipanshu07",
      href: "http://leetcode.com/u/tomardipanshu07",
    },
  ],
  stats: [
    { value: "2+", label: "Years coding" },
    { value: "5+", label: "Projects shipped" },
    { value: "100+", label: "LeetCode solved" },
  ],
};

// Shown in the About section — three short blocks plus a 2x2 stat grid.
export const about = {
  overview:
    "I'm a software developer working across the full stack — frontend, backend, and more recently data science, using Python libraries like NumPy, Pandas, Seaborn, and Matplotlib. I'm currently undergoing training to deepen my data science skills alongside my development work.",
  focus:
    "Right now I'm exploring the AI space — generative AI, RAG (retrieval-augmented generation) systems, and agentic AI — while doing internships and looking for full-time roles.",
  approach:
    "I believe in continuously learning across the stack rather than staying in one lane. I hold certifications in Java Full-Stack Development, SQL & Database Management, and AI Fundamentals (IBM), and I try to bring that same breadth to every project I build.",
  stats: [
    { value: "2+", label: "Years coding" },
    { value: "4", label: "Focus areas" },
    { value: "100+", label: "Problems solved" },
    { value: "8.26", label: "Academic CGPA" },
  ],
};

// TODO(dipanshu): I guessed at the tech stack/tags for these two — correct
// them, and add real liveUrl/codeUrl links once you have them.
export const projects = [
  {
    title: "Digit Prediction System",
    description:
      "A machine learning model that recognizes handwritten digits, built while exploring data science and Python fundamentals.",
    tags: ["Python", "NumPy", "Pandas", "Machine Learning"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/tomar7dp/digit-prediction-system",
    featured: true,
  },
  {
    title: "College Management System",
    description:
      "An ERP-style system for managing college operations — student records, courses, and administrative workflows.",
    tags: ["Java", "SQL", "DBMS"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/tomar7dp/college-management-system",
    featured: true,
  },
];

// Each skill shows as a card with an icon, a one-line description, and a
// proficiency bar. `percent` is just for the bar width — adjust these to
// whatever feels honest to you. `icon` options: code, layers, database,
// server, git, terminal, cloud, box, chart.
export const skills = [
  { name: "JavaScript", description: "Core language for web development", percent: 85, icon: "code" },
  { name: "TypeScript", description: "Typed application code, safer refactors", percent: 75, icon: "code" },
  { name: "Python", description: "Scripting, data science, and automation", percent: 80, icon: "code" },
  { name: "Java", description: "Object-oriented programming and backend logic", percent: 80, icon: "code" },
  { name: "React", description: "Component-based UI development", percent: 80, icon: "layers" },
  { name: "Next.js", description: "Server-rendered React applications", percent: 75, icon: "layers" },
  { name: "HTML / CSS", description: "Semantic markup and styling fundamentals", percent: 85, icon: "layers" },
  { name: "Tailwind CSS", description: "Utility-first styling", percent: 80, icon: "layers" },
  { name: "Node.js / Express", description: "Backend REST APIs and services", percent: 80, icon: "server" },
  { name: "NestJS", description: "Structured, scalable Node.js backends", percent: 65, icon: "server" },
  { name: "MySQL", description: "Relational database design and queries", percent: 75, icon: "database" },
  { name: "PostgreSQL", description: "Relational database design and queries", percent: 70, icon: "database" },
  { name: "MongoDB", description: "NoSQL document-based data storage", percent: 70, icon: "database" },
  { name: "NumPy / Pandas", description: "Data manipulation and analysis in Python", percent: 75, icon: "chart" },
  { name: "Matplotlib / Seaborn", description: "Data visualization in Python", percent: 70, icon: "chart" },
];

// Personal/technical growth timeline — distinct from work Experience below.
// `current: true` on exactly one entry fills that dot in solid.
export const journey = [
  {
    year: "2023",
    title: "First Year — Foundations",
    description:
      "Programming fundamentals through C and C++.",
  },
  {
    year: "2024",
    title: "Second Year — Data Structures & Algorithms",
    description:
      "Spent the year going deep on data structures and algorithms.",
  },
  {
    year: "2025",
    title: "Third Year — Software Engineering & Systems",
    description:
      "Kept solving DSA problems while branching into software engineering, databases (DBMS), operating systems, and system design.",
  },
  {
    year: "2026",
    title: "Fourth Year — Internships & Job Search",
    description:
      "Doing internships and actively looking for full-time roles, while exploring AI fundamentals — generative AI, RAG, and agentic AI.",
    current: true,
  },
  {
    year: "Next",
    title: "What's ahead",
    description:
      "Going deeper into AI and data science while landing a full-time software development role.",
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Blue Swan Lake Studios",
    period: "June 2026 — August 2026",
    description:
      "Part of the team building the internal platform used across the company. Owns the deploy pipeline and API gateway.",
  },
];
// Add a `year` field to any entry if you want a date shown (e.g. year: "2025").
// Add a `credentialUrl` if you have a link to verify it.
type Certification = {
  name: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "Java Full Stack",
    issuer: "EduSkills Academy",
    year: "2025",
    credentialUrl: "/certificates/Certificate Java Full stack Dipanshu Tomar_.pdf",
  },
  {
    name: "SQL and Database Management Systems",
    issuer: "EduSkills Academy",
    year: "2026",
    credentialUrl: "/certificates/Certificate Eduskills SQL Course.pdf",
  },
  {
    name: "AI + Sustainability Virtual Internship",
    issuer: "1M1B × IBM SkillsBuild",
    year: "2026",
    credentialUrl: "/certificates/Certificate  SkillsBuild(1M1B).pdf",
  },
  {
    name: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    credentialUrl:
      "https://www.credly.com/badges/60d42368-a80e-4968-97a4-fdd2601777bb/public_url",
  },
  {
    name: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    credentialUrl:
      "https://www.credly.com/badges/8318faf2-6c30-4dca-aacb-a108a42c99fb/public_url",
  },
  {
    name: "Lifelong Professional Skills",
    issuer: "IBM SkillsBuild",
    credentialUrl:
      "https://www.credly.com/badges/d3b3e4c3-f250-4ee7-9d16-027bd3f8ef16/public_url",
  },
  {
    name: "Project Management Fundamentals",
    issuer: "IBM SkillsBuild",
    credentialUrl:
      "https://www.credly.com/badges/12f75a6a-ddea-4ea5-bc37-edf43da14961/public_url",
  },
];