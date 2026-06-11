# Denys Malovanyi - Product Designer Portfolio

Static portfolio site built with [Astro](https://astro.build/) v5, Tailwind CSS v3, and TypeScript. Deployed to GitHub Pages at [denismalovany.github.io](https://denismalovany.github.io).

## Quick Start

```bash
npm install
npm run dev          # http://localhost:4321
```

## Build

```bash
npm run build        # Static HTML output to dist/
npm run preview      # Preview the production build locally
```

## Project Structure

```
src/
├── components/      # Reusable Astro components (BaseHead, Header, Footer, PageHero, ProjectCard, SkillsGrid, Timeline, TimelineEntry)
├── content/         # Content collections — project case studies as Markdown with Zod-validated frontmatter
├── data/            # Site metadata (site.ts), skills (skills.ts), career timeline (timeline.ts)
├── layouts/         # Base layout (Layout.astro) with shared <head>, header, footer, JSON-LD, and ViewTransitions
├── pages/           # Routes: index.astro, about.astro, contact.astro, projects.astro, projects/[slug].astro, 404.astro
└── styles/          # Global CSS with custom design tokens (variables, typography, shadows, transitions) and Tailwind directives
```

## Content Editing

- **Site metadata**: `src/data/site.ts` — name, email, social links, page titles/descriptions
- **Skills**: `src/data/skills.ts` — grouped skill tags displayed on the home and about pages
- **Timeline**: `src/data/timeline.ts` — career history entries with expandable details
- **Projects**: `src/content/projects/*.md` — individual case studies with frontmatter schema defined in `src/content/config.ts`

Changes reflect immediately in dev mode via HMR.

## Deployment

Push to `main` — GitHub Actions builds the site (Node 20, `npm ci`, `npm run build`) and deploys to GitHub Pages via `actions/upload-pages-artifact` and `actions/deploy-pages`. Workflow defined in `.github/workflows/deploy.yml`.
