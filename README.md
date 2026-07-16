# Dev Portfolio

A developer portfolio built with Next.js 14 (App Router), TypeScript, and
Tailwind CSS. Clean, code-forward look — a status bar at the bottom acts
like an editor's status line and tracks which section you're viewing.

Sections: Hero/About, Projects, Skills, Experience timeline, Contact.

## 1. Install Node.js

You need Node.js 18.17 or later. Check with:

```bash
node -v
```

If you don't have it, install from [nodejs.org](https://nodejs.org) or with
a version manager like `nvm`.

## 2. Install dependencies

From this project folder:

```bash
npm install
```

## 3. Run it locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page hot-reloads
as you edit.

## 4. Make it yours

Almost everything you need to change lives in **`data/portfolio.ts`**:

- `profile` — your name, role, tagline, email, socials, stats
- `projects` — each project's title, description, tags, and links
- `skills` — grouped by category
- `experience` — your work history for the timeline

You generally don't need to touch component files just to update content.

Other things you may want to change:

- **Colors** — `tailwind.config.ts`, under `theme.extend.colors`
- **Fonts** — `app/layout.tsx` (currently Space Grotesk / Inter / JetBrains
  Mono, all free on Google Fonts)
- **Page title** — `app/layout.tsx`, the `metadata` export
- **Favicon / OG image** — drop files into `public/`

## 5. Deploy it

The easiest path is [Vercel](https://vercel.com) (made by the creators of
Next.js, and free for personal sites):

1. Push this project to a GitHub repo.
2. Go to vercel.com → **Add New Project** → import that repo.
3. Leave the default settings (Vercel auto-detects Next.js) → **Deploy**.

You'll get a live URL in about a minute, and every push to your repo
redeploys automatically.

## Project structure

```
app/
  layout.tsx      → fonts, metadata, wraps every page
  page.tsx        → assembles the sections in order
  globals.css     → base styles, focus states, reduced-motion handling
components/
  Nav.tsx         → top navigation bar
  Hero.tsx        → intro / about section
  Projects.tsx    → project cards
  Skills.tsx      → grouped skill tags
  Timeline.tsx    → work experience timeline
  Contact.tsx     → contact links + footer
  StatusBar.tsx   → the fixed bottom status bar
data/
  portfolio.ts    → all your content — edit this first
```
