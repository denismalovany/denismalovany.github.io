# Denys Malovanyi - Product Designer Portfolio

Built with [Astro](https://astro.build/) and Tailwind CSS. Static output deployed to GitHub Pages.

## Quick Start

```bash
npm install
npm run dev          # http://localhost:4321
```

## Build

```bash
npm run build        # Outputs to dist/
npm run preview      # Preview the production build
```

## Project Structure

```
src/
├── components/      # Reusable UI components (Header, Footer, ProjectCard, etc.)
├── data/            # Content data (projects, timeline, skills, site metadata)
├── layouts/         # Base layout with shared head/header/footer
├── pages/           # Route pages (home, about, contact, projects, project detail)
├── scripts/         # Client-side JS (mobile menu, timeline toggle)
└── styles/          # Global CSS + Tailwind directives
```

## Content Editing

Edit files in `src/data/` to update projects, timeline, skills, or site metadata. Changes reflect immediately in dev mode.

## Deployment

Push to `main` - GitHub Actions builds and deploys to GitHub Pages automatically.
