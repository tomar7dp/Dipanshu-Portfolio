# Developer Portfolio (Terminal Theme)

A Next.js + TypeScript + Tailwind portfolio styled like a terminal / shell session,
with a boot-up sequence on load and each section framed as a command (`whoami`,
`ls projects/`, `cat skills.json`, `git log`, `./contact.sh`).

## 1. Install

You need [Node.js](https://nodejs.org) 18.17 or newer installed.

```bash
cd developer-journey-portfolio
npm install
```

## 2. Run it locally

```bash
npm run dev
```

Open http://localhost:3000 — you should see the boot sequence, then your
portfolio.

## 3. Customize your content

Everything is plain text/data in the `components/` folder — no CMS, no config
file to hunt through:

| What to change | File |
|---|---|
| Name, tagline, intro | `components/Hero.tsx` |
| About paragraph | `components/About.tsx` |
| Projects list | `components/Projects.tsx` — edit the `PROJECTS` array |
| Skills / tech stack | `components/Skills.tsx` — edit the `SKILLS` object |
| Work history | `components/Experience.tsx` — edit the `HISTORY` array |
| Email / GitHub / LinkedIn | `components/Contact.tsx` — edit the `LINKS` array |
| Site title / meta description | `app/layout.tsx` |
| Colors (amber/cyan/bg accents) | `tailwind.config.ts` under `theme.extend.colors` |
| Boot-up text | `components/BootSequence.tsx` — edit the `LINES` array |

Each project card and skill/experience entry is just an object in an array —
add or remove entries and the layout adjusts automatically.

## 4. Deploy it (free, ~2 minutes)

The easiest path is [Vercel](https://vercel.com) (made by the creators of Next.js):

1. Push this folder to a GitHub repo.
2. Go to vercel.com → **New Project** → import that repo.
3. Leave all settings as default and click **Deploy**.
4. You'll get a live URL like `your-project.vercel.app` — you can attach a
   custom domain later from the Vercel dashboard.

Alternatively, from the command line:

```bash
npm install -g vercel
vercel
```

and follow the prompts.

## 5. Project structure

```
app/
  layout.tsx      — root layout, loads the mono font
  page.tsx        — assembles all sections
  globals.css     — CRT texture, scrollbar, base styles
components/
  BootSequence.tsx  — the typed boot-up intro
  TerminalWindow.tsx — reusable "terminal window" wrapper used by every section
  Nav.tsx           — sticky nav with command-style links
  Hero.tsx
  About.tsx
  Projects.tsx
  Skills.tsx
  Experience.tsx
  Contact.tsx
```

## Notes

- Respects `prefers-reduced-motion` — the boot sequence and blinking cursor
  are disabled for users who have that OS setting on.
- Fully responsive down to small mobile widths.
- No external UI libraries — just Tailwind, so it's easy to restyle.
