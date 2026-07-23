# Hood Akram — Portfolio

A full React portfolio site built with Vite, React Router, and Framer Motion.

## Features

- Multi-page routing (Home, About, Projects, Project detail, Skills, Contact, 404)
- Dark / light theme toggle, persisted in localStorage
- Animated page transitions (Framer Motion `AnimatePresence`)
- Scroll-triggered reveal animations
- Draggable 3D CSS "orbit ring" showing the tech stack (hero + Skills page)
- Canvas starfield background
- Custom cursor (desktop only, auto-disabled on touch devices)
- Scroll progress bar
- Animated terminal-style boot loader on first load
- Project filtering by category
- Contact form with client-side validation (opens a pre-filled email via `mailto:`)
- Fully responsive, with a mobile nav drawer
- Respects `prefers-reduced-motion`

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # to preview the production build locally
```

The production build is output to `dist/`.

## Project structure

```
src/
  components/   Reusable UI: Navbar, Footer, StarField, SkillRing, Loader, etc.
  context/       ThemeContext (dark/light mode)
  data/          Content: projects.js, skills.js, timeline.js
  pages/         Home, About, Projects, ProjectDetail, Skills, Contact, NotFound
  App.jsx        Routes + layout
  main.jsx       Entry point
public/
  Hood_Akram_Resume.pdf   Downloaded from the hero "Download résumé" button
```

## Editing content

All personal content lives in `src/data/`:
- `projects.js` — project cards + case study pages
- `skills.js` — skill tags and the orbit ring items
- `timeline.js` — education / experience / certifications

Contact details (email, phone, links) are in `src/pages/Contact.jsx` and `src/components/Footer.jsx`.

## Deploying

This is a standard Vite + React app, so it deploys as-is to:
- **Vercel** — import the GitHub repo, framework preset "Vite", no config needed
- **Netlify** — build command `npm run build`, publish directory `dist`
- **GitHub Pages** — set `base` in `vite.config.js` to your repo name, then build and push `dist/`

Because this uses client-side routing (`react-router-dom`), if you deploy to a static host make sure it's configured to redirect all paths to `index.html` (Vercel and Netlify do this automatically for SPAs; GitHub Pages needs a `404.html` fallback trick).
