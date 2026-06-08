# Denys Malovanyi — Product Designer Portfolio

A static portfolio website for Denys Malovanyi, UX/UI and product designer with 9+ years of experience spanning frontend development, product design, and mechanical engineering.

Built with **[Eleventy (11ty)](https://www.11ty.dev/)** and **[WebC](https://www.11ty.dev/docs/languages/webc/)** as the sole templating and component engine. Styled with Tailwind CSS via CDN. Content is data-driven — all project cards, timeline entries, skills, and contact information originate from structured data files and are pre-rendered into static HTML at build time.

## Key Features

- **Data-driven content** — Projects, timeline, skills, and site metadata live in structured JS data files in `src/_data/`. A single build command regenerates all pages.
- **WebC component architecture** — All UI fragments (header, footer, hero, project cards, timeline, skills, contact cards) are reusable WebC components in `src/_components/`.
- **ATS-compatible output** — All text content exists in static HTML source with no JavaScript dependency. Structured data (JSON-LD `Person` schema), meta descriptions, and Open Graph tags are injected at build time.
- **Semantic HTML** — Proper heading hierarchy (`h1`-`h3`), `<section>` landmarks, `<ul>` skill lists, and accessible ARIA attributes on the mobile menu.
- **Zero runtime dependencies** — The production site loads no npm packages in the browser. Tailwind is served via CDN.
- **Print-ready** — `@media print` styles produce a clean PDF resume when printed from the browser.
- **Mobile-responsive** — Collapsible mobile navigation with smooth scroll and delegated event handling.

## Pages

| Page | Content |
|---|---|
| **Home** (`index.html`) | Hero, about preview with skills tags, professional timeline (expandable), featured projects |
| **About** (`about.html`) | Full bio, skills grid (3 categories), complete career timeline |
| **All Projects** (`projects.html`) | Grid of 6 project case study cards with images and descriptions |
| **Contact** (`contact.html`) | Email, LinkedIn, Behance, Dribbble contact cards |
| **Project Detail ×6** (`projects/project-1.html` through `project-6.html`) | Individual case studies with hero, back navigation, image, and description |

## Project Structure

```
DMpage/
├── src/                                    # Source (edit these)
│   ├── _data/                              # 11ty global data files
│   │   ├── site.js                         # Name, email, LinkedIn, page titles/descriptions
│   │   ├── projects.js                     # 6 project objects (title, description, image, tags)
│   │   ├── timeline.js                     # 7 career entries (period, company, role, details)
│   │   └── skills.js                       # 3 skill categories with lists
│   ├── _components/                        # WebC components (auto-discovered)
│   │   ├── base-layout.webc                # Root HTML layout (DOCTYPE, head, body shell)
│   │   ├── site-header.webc                # Navigation header with logo, nav links, mobile menu
│   │   ├── site-footer.webc                # Footer with copyright and social links
│   │   ├── hero-section.webc               # Reusable hero with title, subtitle, optional CTA slot
│   │   ├── project-card.webc               # Individual project card (image, tags, title, summary)
│   │   ├── project-grid.webc               # Grid container iterating project cards
│   │   ├── timeline-entry.webc             # Single timeline row (dot, period, company, details)
│   │   ├── timeline-section.webc           # Timeline container with expand/collapse support
│   │   ├── skills-grid.webc                # 3-column skills grid (used on About page)
│   │   ├── skills-tags.webc                # Inline skills tags (used on Home page)
│   │   └── contact-card.webc               # Contact card with multiple type variants
│   ├── assets/                             # Static assets (passthrough copy)
│   │   ├── css/style.css                   # Custom styles (design system, layout, print)
│   │   └── js/script.js                    # Client-side JS (mobile menu, timeline toggle, nav)
│   ├── index.webc                          # Home page
│   ├── about.webc                          # About page
│   ├── contact.webc                        # Contact page
│   ├── projects.webc                       # All projects listing
│   └── projects/                           # Project detail pages
│       ├── project-1.webc                  # CoffeeNanny Lviv
│       ├── project-2.webc                  # Volunteer Centre County
│       ├── project-3.webc                  # Capacitive Stamp Loyalty System
│       ├── project-4.webc                  # Breather Coach
│       ├── project-5.webc                  # FeliTalk
│       └── project-6.webc                  # Safety Brochure
├── _site/                                  # Build output (git-ignored)
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   ├── projects.html
│   ├── projects/*.html
│   └── assets/
├── eleventy.config.js                      # 11ty configuration (WebC plugin, passthrough)
├── package.json
└── README.md
```

**Key principle:** Files in `src/` are the source of truth. Files in `_site/` are build artifacts — generated by `npm run build` and never edited directly.

## Getting Started

### Prerequisites

- **Node.js 18 or later**

### Install & Build

```bash
npm install
npm run build
```

This reads all source templates from `src/`, processes WebC components using data from `src/_data/`, and writes populated HTML to `_site/`. **10 pages output.**

### Local Development

```bash
npm run dev
```

Starts a local dev server with hot reload and incremental builds at `http://localhost:8080`.

### Production Build

```bash
npm run build
```

Output is in `_site/`. Deploy that directory to any static host.

## Customization

### Updating Content

All content is driven by the four data files in `src/_data/`. Edit them and rebuild:

| Change | Edit |
|---|---|
| Add/remove/update a project | `src/_data/projects.js` |
| Add/remove/update a timeline entry | `src/_data/timeline.js` |
| Add/remove/update a skill | `src/_data/skills.js` |
| Change email, LinkedIn URL, page titles, or copyright year | `src/_data/site.js` |

### Updating Styles

Edit `src/assets/css/style.css`. CSS custom properties (colors, shadows, transitions) are defined in `:root`. Print styles are in the `@media print` block at the bottom.

### Adding a New Project Detail Page

1. Create `src/projects/project-7.webc` — copy an existing detail page as a template
2. Add the project entry to `src/_data/projects.js` with a new `id`
3. Run `npm run build`

## ATS & Structured Data

Every page includes:
- **`<meta name="description">`** — Page-specific description
- **Open Graph tags** — `og:title`, `og:description`, `og:type`, `og:url`
- **Twitter card** — `twitter:card` summary
- **JSON-LD structured data** — `Person` schema with `name`, `email`, `jobTitle`, `knowsAbout`, and `alumniOf`

All text content exists in the static HTML source with zero JavaScript dependency.

### Print / PDF Export

Open any page in a browser and print to PDF. Print styles automatically:
- Remove the fixed header
- Hide the mobile menu and expand/collapse buttons
- Disable hover effects, shadows, and transforms
- Show all collapsed timeline content
- Strip background patterns from the hero section

## Deployment

### GitHub Pages

Push the repository to GitHub with Pages enabled on the `main` branch, configured to serve from the `_site/` directory (or set `output: "."` in `eleventy.config.js` to serve from root).

### Any Static Host

The site is fully static — deploy `_site/` to Netlify, Vercel, S3, or any static file server.

## License

MIT
