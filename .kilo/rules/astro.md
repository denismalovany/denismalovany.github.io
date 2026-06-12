# Astro 5 Framework Rules

## Stack
- Astro 5 (static output)
- Tailwind CSS 3
- TypeScript
- @astrojs/tailwind, @astrojs/sitemap

## Project Structure
- `src/pages/` — pages (file-based routing)
- `src/components/` — .astro components
- `src/layouts/` — Layout.astro
- `src/content/projects/` — Content Collections (markdown)
- `src/data/` — TypeScript data files (skills, timeline, site config)
- `src/styles/` — global.css

## Config
- `output: 'static'`
- `trailingSlash: 'never'`
- `build.format: 'file'`
- Site deploys to GitHub Pages: `https://denismalovany.github.io`

## .astro Component Conventions
1. Use TypeScript in frontmatter (`---`)
2. Import components: `import Component from '@/components/Component.astro'`
3. Client-side scripts go in `<script>` tags (no attributes — runs on client)
4. **Do NOT use `Astro.glob()`** — use Content Collections instead (`Astro.locals.entries`)
5. Styles primarily via Tailwind utility classes
6. Custom CSS variables from `global.css` are available through Tailwind config

## Content Collections
- Collection `projects` at `src/content/projects/*.md`
- Schema defined in `src/content/config.ts`
- Slug used for dynamic pages: `src/pages/projects/[slug].astro`

## Images
- Allowed domains: `images.unsplash.com`
- Optimize via Astro `<Image />` component
- Static assets in `public/`

## Rules
- No React/JSX — all components are `.astro`
- No `Astro.glob()` — use Content Collections everywhere
- All new pages must include meta tags and Open Graph
- Stick to Tailwind styles defined in `tailwind.config.mjs`
