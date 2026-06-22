# Design System

> Source of truth for the visual language, components, and interaction patterns used across the portfolio. Everything here is implemented in `tailwind.config.mjs`, `src/styles/global.css`, and the `src/components/*.astro` files. If a value isn't in this document, it shouldn't appear on the site.

---

## 1. Brand Foundations

### 1.1 Identity
- **Subject**: Personal portfolio of Denys Malovanyi — Product Designer & Mechanical Engineer
- **Tone**: Quiet, considered, professional. Restrained color, generous whitespace, type-driven hierarchy
- **Personality**: Craft-oriented, technical-but-warm, evidence-based
- **Tagline**: "UX/UI & Product Designer · AI-Augmented Workflows · 9+ Years of Experience"

### 1.2 Logo & Wordmark
- Wordmark `DM` rendered in `font-display` (Lexend), `font-extrabold`, `text-2xl`
- Wordmark uses `.gradient-text` (accent gradient)
- Trailing "Portfolio" text in `text-sm font-sans text-gray-400`; hover → `text-accent-500`
- Grouped with `group` for combined hover transitions

### 1.3 Theme Color (browser chrome)
- `<meta name="theme-color" content="#9b96a8" />` — accent-500

---

## 2. Color

### 2.1 Accent palette (primary brand color)
A muted dusty-purple. Cool, professional, and reserved.

| Token | Hex | Use |
|---|---|---|
| `accent-50` | `#f6f5f7` | Tag/chip backgrounds, soft tints |
| `accent-100` | `#ecebef` | Pill backgrounds, soft fills |
| `accent-200` | `#dbd7e0` | Dividers, secondary borders |
| `accent-300` | `#c5c0cf` | Hover borders |
| `accent-400` | `#b0a9bd` | Skill-list bullets, decorative |
| `accent-500` | `#9b96a8` | **Core brand color**, focus rings, link hover |
| `accent-600` | `#7d7890` | Primary text in accent context, active nav, links |
| `accent-700` | `#6e6980` | Chip text on `accent-50` |
| `accent-800` | `#5e5a6e` | — |
| `accent-900` | `#42404d` | — |
| `accent-950` | `#28262e` | Deep accent |

**Gradient**: `linear-gradient(135deg, #9b96a8 0%, #6b6578 100%)` — used for `btn-primary`, `.gradient-text`, section-title underline, hero divider.

**RGB tuple** (`--color-accent-rgb: 155, 150, 168`) is used for `rgba()` alpha compositions (e.g. button hover bg `rgba(var(--color-accent-rgb), 0.08)`).

### 2.2 Gray palette (neutrals)
Standard Tailwind gray, used for the vast majority of UI.

| Token | Hex | Use |
|---|---|---|
| `gray-50` | `#f9fafb` | Section-subtle background blends, hover bg |
| `gray-100` | `#f3f4f6` | Borders (default), chip backgrounds |
| `gray-200` | `#e5e7eb` | Dividers, form-input borders |
| `gray-300` | `#d1d5db` | `btn-outline` border |
| `gray-400` | `#9ca3af` | Captions, secondary text, disabled icons |
| `gray-500` | `#6b7280` | Body secondary text, footer links |
| `gray-600` | `#4b5563` | Body text (default) |
| `gray-700` | `#374151` | `btn-outline` text, emphasized body |
| `gray-800` | `#1f2937` | Headings (rare), body color in input |
| `gray-900` | `#111827` | — |

### 2.3 Semantic
- `--color-black: #0a0a0a` — display headings, footer icons
- `--color-white: #fafafa` — `btn-primary` text, page surface accents
- `--color-surface: #ffffff` — `body` background
- `--color-error: #ef4444` — form errors, invalid state
- `--color-success: #16a34a` — valid state, submission success

### 2.4 Gradient utilities
- `--gradient-subtle: linear-gradient(180deg, rgba(155,150,168,0.04) 0%, transparent 100%)` → `.section-subtle` (used on alternating sections)
- `--gradient-radial: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(155,150,168,0.10) 0%, transparent 70%)` → `.hero-section` background

### 2.5 Color usage rules
- Body text: `gray-600` for prose, `gray-500` for secondary, `gray-400` for captions
- Display headings: black (`#0a0a0a` or `text-black`)
- Never use `accent-500` for body text — it lacks contrast
- Active/hover accents always resolve to `accent-light` (`#bdb9c7`) for brightness feedback
- `bg-accent-50` hover → `rgba(var(--color-accent-rgb), 0.12)`
- `text-accent-600` hover → `text-accent-500` then `accent-light`

---

## 3. Typography

### 3.1 Font families
- **Display / Serif / Headings**: `Lexend` — `font-display` (Tailwind class)
  - Weights: 400, 600, 700, 800
  - Used for: h1–h4, section titles, project titles, brand wordmark, nav logo
- **Sans / Body**: `Inter` — `font-sans`
  - Weights: 400, 500, 600, 700
  - Used for: body copy, nav, buttons, form fields, captions
- Self-hosted via Google Fonts CDN with `preconnect`. No fallback list needed beyond system sans.

### 3.2 Type scale

| Token | Size | Line height | Use |
|---|---|---|---|
| `2xs` | 0.6875rem (11px) | 1.3 | Tag chips, eyebrow labels, PDF button |
| `xs` | 0.75rem (12px) | default | Form errors, small captions |
| `sm` | 0.875rem (14px) | default | Nav links, captions, footer copyright |
| `sm-plus` | 0.8125rem (13px) | default | Skill items, timeline descriptions, project cards |
| `base` | 1rem (16px) | 1.7 | Body |
| `lg` | 1.125rem (18px) | default | Card titles (small) |
| `xl` | 1.25rem (20px) | default | `text-lg md:text-xl` in buttons & headings |
| `2xl` | 1.5rem (24px) | default | `text-2xl` body titles |
| `3xl` | 1.875rem (30px) | default | `md:text-3xl` section titles |
| `4xl` | 2.25rem (36px) | 1.1 | `md:text-4xl` case-study titles |
| `5xl` | 3rem (48px) | 1.1 | `md:text-5xl` hero |
| `6xl` | 3.75rem (60px) | 1.1 | `lg:text-6xl` hero |

### 3.3 Heading rules
- `h1` in PageHero: `font-display font-bold leading-[1.1] text-black text-3xl md:text-5xl lg:text-6xl`
- `h2` sections: `text-2xl md:text-3xl` (uses `.section-title` class)
- `h3` cards: `font-display text-lg md:text-xl font-bold text-black`
- `h4` labels: `text-xs font-semibold text-gray-400 uppercase tracking-wider`
- Section title underline: 36px × 3px accent gradient bar (handled by `.section-title`)

### 3.4 Body copy
- Line-height: `1.7` on `body`
- Color: `gray-800` body, `gray-600` in prose
- Prose elements use Tailwind Typography (`prose prose-gray`) with overrides:
  - `prose-headings:font-display prose-headings:font-bold prose-headings:text-black`
  - `prose-a:text-accent-600`
  - `prose-blockquote:border-accent-500`

### 3.5 Letter-spacing
- `tracking-[0.02em]` on chips, eyebrows, PDF button
- `tracking-wide` on subtitle (e.g. timeline role)
- `tracking-wider` on uppercase category labels
- Buttons use `letter-spacing: 0.01em` (in CSS)

---

## 4. Spacing & Layout

### 4.1 Container
- Standard: `container mx-auto max-w-3xl` (most prose content, 768px)
- Wide: `container mx-auto max-w-6xl` (footer)
- Page hero: `max-w-3xl mx-auto` inner; full-width section
- Project case study: `max-w-3xl` body
- About page grid: `md:grid-cols-[1fr_320px]` (text + portrait sidebar)

### 4.2 Vertical rhythm
- Page sections: `py-24 px-6` (96px vertical)
- Smaller sections: `py-20 px-6`
- Section gap: ~6rem between major blocks
- Header fixed height: `4.5rem` (72px); body has `padding-top: 4.5rem` to compensate

### 4.3 Page padding
- Mobile: `px-6` (24px)
- Tablet: `md:px-8` (32px) for header
- Hero: `hero-section { padding-left/right: 2.5rem } @ 768px`, `3rem @ 1024px`

### 4.4 Breakpoints
Standard Tailwind:
- `sm`: 640px
- `md`: 768px — mobile menu collapses to desktop nav
- `lg`: 1024px — header becomes non-hideable
- `xl`: 1280px

---

## 5. Border Radius

| Token | Value | Use |
|---|---|---|
| `sm` | 0.375rem (6px) | Default small |
| `md` | 0.5rem (8px) | Default |
| `lg` | 0.75rem (12px) | Buttons, form inputs, nav-link pill, tag chips |
| `xl` | 1rem (16px) | `.glass-card` |
| `2xl` | 1.5rem (24px) | Project cards, image frames, contact cards |

- Pills/chips: `rounded-full`
- Buttons: `rounded-lg` (12px)
- Cards: `rounded-2xl` (24px) for project cards, `rounded-xl` for glass cards

---

## 6. Shadows

| Token | Value | Use |
|---|---|---|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.03)` | — |
| `shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.04)` | `btn-outline` hover, back-to-top button |
| `shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.06), 0 4px 6px -4px rgba(0,0,0,0.04)` | Mobile menu |
| `shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.04)` | — |
| `shadow-accent` | `0 4px 14px rgba(155,150,168,0.28)` | `btn-primary` default, portrait frame |
| `shadow-accent-lg` | `0 10px 40px rgba(155,150,168,0.35)` | `btn-primary` hover, project card hover |

---

## 7. Motion & Transitions

### 7.1 Durations
| Token | Value | Use |
|---|---|---|
| `fast` | 150ms | Hover color changes, link arrows |
| `normal` | 300ms | Card transforms, button hover |
| `slow` | 500ms | Image scale on project card hover |
| `spring` | 400ms `cubic-bezier(0.34, 1.56, 0.64, 1)` | Reserved (not actively used) |

All transitions use easing `cubic-bezier(0.25, 0.1, 0.25, 1)`.

### 7.2 Reduced motion
`@media (prefers-reduced-motion: reduce)`:
- All transition durations → `0.01ms`
- All animation durations → `0.01ms`
- `::view-transition-old(root)` / `::view-transition-new(root)` → `animation: none`

This is a **mandatory** accessibility rule. Any new animation must respect this query.

### 7.3 Standard interactions
- **Button hover**: `translateY(-2px) scale(1.02)` + shadow upgrade + brightness 1.1
- **Button active**: `translateY(0) scale(0.99)` + brightness overlay
- **Card hover**: `translateY(-4px)` (`hover:-translate-y-1`) + `shadow-accent-lg` + image `scale(1.03)` over 500ms
- **Link hover**: arrow `translateX(3px)` (forward) or `translateX(-3px)` (back)
- **Nav link hover**: color → `accent-600` + background → `gray-50`
- **Active nav link**: `text-accent-600 bg-accent-50 font-semibold`
- **Accent text hover**: `accent-600` → `accent-500` → `accent-light`

---

## 8. Glassmorphism

### 8.1 Card (`glass-card`)
```css
background: rgba(255, 255, 255, 0.72);
backdrop-filter: blur(16px);
border: 1px solid rgba(0, 0, 0, 0.06);
border-radius: var(--radius-xl);  /* 16px */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
```

Used for: project cards, contact cards, contact form wrapper, timeline container.

### 8.2 Header (sticky bar)
```css
background: var(--glass-bg);             /* rgba(255,255,255,0.72) */
backdrop-filter: blur(12px) saturate(180%);
border-bottom: 1px solid var(--glass-border);
height: 4.5rem;
z-index: 1000;
```
- Hide on scroll-down via `header.header-hidden { transform: translateY(-100%) }`
- Re-enable hide on `lg` breakpoint (≥1024px)
- `view-transition-name: site-header` + `transition:persist` (per Astro rules)

### 8.3 Back-to-top button
- 44×44 circle, `border 1.5px solid gray-200`, `glass-bg` background, `blur(8px)`
- `bottom: 2rem; right: 2rem; z-index: 900`
- Hidden by default (`opacity:0; visibility:hidden; transform:translateY(10px)`)
- Revealed by JS on scroll threshold

---

## 9. Components

### 9.1 Buttons

#### `.btn-primary` (gradient)
- Padding: `0.75rem 1.75rem`
- Background: `var(--color-accent-gradient)`
- Text: white, `font-weight: 600`, `font-size: 0.9375rem`, `letter-spacing: 0.01em`
- `border-radius: var(--radius-lg)` (12px)
- `box-shadow: var(--shadow-accent)`
- Hover: `translateY(-2px) scale(1.02) + shadow-accent-lg + brightness(1.1)`
- Active: `translateY(0) scale(0.99) + white-overlay::after (opacity 1)`
- Often paired with arrow `<span class="inline-block ml-2 transition-transform duration-fast group-hover:translate-x-1">→</span>`

#### `.btn-outline` (secondary)
- Padding: `0.75rem 1.75rem`
- Background: transparent
- Text: `var(--color-gray-700)`, `font-weight: 600`
- Border: `1.5px solid var(--color-gray-300)`
- `border-radius: var(--radius-lg)`
- Hover: `border-color: accent-light` + `color: accent-light` + `background: rgba(accent, 0.08)` + `translateY(-1px) scale(1.02)` + `shadow-md`
- Active: `translateY(0) scale(0.99) + background: rgba(accent, 0.12)`

#### PDF button (header)
- `inline-flex items-center gap-1 px-2.5 py-1 text-2xs font-medium text-gray-500`
- `border border-gray-200 rounded-full`
- Hover: `text-accent-500 border-accent-300 bg-accent-50`
- `uppercase tracking-[0.02em]`

#### Full-width submit button (Contact form)
- Adds `w-full py-3.5`
- Three states: `submit-text`, `submit-loading` (spinner), `submit-success` (green)

### 9.2 Tags / Chips
- Inline pill: `inline-flex items-center py-1 px-2.5 text-2xs font-medium tracking-[0.02em] uppercase text-accent-600 bg-accent-50 rounded-full`
- Larger pill (skills): `px-4 py-2 text-sm font-medium text-accent-700 bg-accent-50 border border-accent-100 rounded-full`
- Status pill (Remote / On-site): `px-2 py-0.5 text-xs font-medium rounded-full bg-accent-100 text-accent-700 border border-accent-300`
- Role pill (case study): `text-sm font-medium text-accent-600 bg-accent-50 px-3 py-1 rounded-full`
- Tag pill (case study): `text-sm text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full`

### 9.3 Section Titles (`.section-title`)
- `font-family: var(--font-display)`
- `font-weight: 700`
- `color: var(--color-black)`
- `display: inline-block`
- Underline: `::after` — 36px × 3px accent gradient bar, positioned 8px below baseline, left-aligned, 2px border-radius
- `filter: brightness(1.15)` on hover
- Margin variants: `.section-title--mb-6` (1.5rem), `.section-title--mb-8` (2rem)

### 9.4 Links
| Class | Behavior |
|---|---|
| `.text-link` | `gray-500` → `accent-light` on hover, 4px underline offset |
| `.link-arrow` | Appends `→` that translates 3px right on hover |
| `.link-arrow-back` | Prepends `← ` that translates 3px left on hover |
| `.link-external` | Appends `↗` (75% font-size) |
| `.link-underline` | Accent gradient underline animates width `0 → 100%` on hover, bottom 2px, 1.5px tall |

### 9.5 Cards

#### Project Card
- `glass-card` + `rounded-2xl` + `h-full` + `overflow-hidden`
- Image: `aspect-[3/2] object-cover`, `transition duration-slow group-hover:scale-[1.03]`
- Content padding: `p-6 sm:p-8`
- Tag row: `flex flex-wrap gap-1.5 mb-3`
- Title: `font-display text-lg md:text-xl font-bold text-black` → hover `text-accent-600`
- Summary: `text-sm-plus text-gray-600 line-clamp-3`
- Footer role: `text-sm font-semibold text-gray-400 mt-auto pt-4 border-t border-gray-100`
- Card hover: `-translate-y-1 + shadow-accent-lg`

#### Contact Card (channel block)
- `flex items-start gap-4 sm:gap-6 p-6 sm:p-8 glass-card`
- Icon container: `w-12 h-12 rounded-xl bg-accent-50 text-accent-600` (or `bg-black text-white` for PDF)
- Title: `font-display text-base font-bold text-black`
- Optional CTA: `btn-primary` aligned right

### 9.6 Forms
- Wrapper: `glass-card p-8`
- Group: `space-y-5` between groups, gap-4 within grid
- Label: `form-label` — 0.8125rem, weight 600, `gray-600`, 0.375rem bottom margin
- Input: `form-input`
  - `width: 100%`, `padding: 0.75rem 1rem`
  - `border: 1.5px solid gray-200`
  - `border-radius: var(--radius-lg)`
  - `background: var(--color-surface)`
  - `color: gray-800`
  - `font-family: var(--font-sans)`, `font-size: 0.9375rem`
  - Focus: `border-color: accent` + `box-shadow: 0 0 0 3px rgba(accent, 0.12)`
  - `.invalid`: red border + `box-shadow: 0 0 0 3px rgba(239,68,68,0.1)`
  - `.valid`: green border
- Error message: `form-error` — 0.75rem, error color, weight 500, hidden by default, `.show-error` reveals
- Validation: triggers on `blur` (only if non-empty) and `input` (live clearing)
- Submit: full-width `btn-primary py-3.5` with loading spinner + success state
- Backed by `formsubmit.co` with hidden `_captcha`, `_template`, `_next` fields

### 9.7 Header / Navigation
- Sticky glass bar, height 4.5rem
- Layout: `[logo] ... [nav links + PDF btn] [mobile hamburger]`
- Nav items: `Home, About, All Projects, Contact` + optional `PDF` pill
- Desktop link:
  - `text-sm font-medium px-3 py-2 rounded-lg`
  - Default: `text-gray-600`
  - Hover: `text-accent-600 bg-gray-50`
  - Active: `text-accent-600 bg-accent-50 font-semibold` (`aria-current="page"`)
- `data-astro-prefetch="hover"` on all internal links
- Mobile toggle: 40×40, hamburger ↔ X icon swap on `menu-open`
- Mobile menu:
  - `fixed top-[4.5rem]`, slides in via `max-height 0 → 500px` + opacity
  - Backdrop: `bg-black/20 backdrop-blur-sm` below header
  - `body.menu-locked` adds `overflow: hidden`
  - `inert` attribute toggles for a11y
- Lifecycle: full setup/teardown on `astro:before-swap` / `astro:after-swap`

### 9.8 Footer
- `border-t border-gray-100/80 py-8 px-6 mt-auto`
- Container: `max-w-6xl`
- Two-column (mobile stacks): copyright info on left, social links on right
- Copyright: `text-xs text-gray-400` + role subtitle `text-xs text-gray-300`
- Social links: `text-sm font-medium text-gray-500 link-underline link-external`
- External: `target="_blank" rel="noopener noreferrer"`

### 9.9 Page Hero
- Padding: `pt-24 pb-24 md:pt-28 md:pb-28`
- Centered text, `max-w-3xl mx-auto`
- `h1` with size scale `text-3xl → md:text-5xl → lg:text-6xl`
- Divider: 64px × 4px gradient bar, `rounded-full`, `mx-auto my-5`
- Optional subtitle: `text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed font-medium`
- Optional `slot="after"` for CTA buttons
- Background: `var(--gradient-radial)` + masked grid lines (40×40px) fading toward edges
- Responsive padding: `2.5rem @ md`, `3rem @ lg`

### 9.10 Timeline
- Container: `space-y-0` with left vertical rail
- Entry wrapper: `relative pl-8 border-l-2 border-gray-200` (or `pb-12` for non-last)
- Dot: `absolute -left-[9px] w-4 h-4 rounded-full`
  - Default: `var(--color-accent-gradient)`
  - `dotColor: "gray"` → `var(--color-gray-300)`
- Period: `text-xs font-semibold text-gray-400 mb-1.5`
- Company: `text-lg font-display font-bold text-black mb-0.5`
- Subtitle: `text-sm font-semibold text-accent-500 tracking-wide mb-3`
- Detail blocks: `space-y-3`, each with role/period/description
- Expand/collapse: optional `collapsed={true}` prop with expand button, `max-height: 0 → 2000px` + opacity transition

### 9.11 Skills Grid
- `grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10`
- Category title: `font-display font-bold text-black text-sm uppercase tracking-wider mb-4`
- List: `space-y-2.5`
- Item: `flex items-center gap-2.5 text-gray-600 text-sm-plus`
- Bullet: `w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0`

---

## 10. Iconography

- **Source**: Inline SVG only (no icon library). `stroke="currentColor"` everywhere for color inheritance.
- **Stroke width**: `2` for nav/UI, `1.5` for illustration-style icons (contact, location pin)
- **Default size**: `w-5 h-5` (20px) for nav/buttons, `w-3 h-3` for inline chips, `w-3.5 h-3.5` for inline meta
- **Stroke style**: `stroke-linecap="round" stroke-linejoin="round"`
- **Decorative icons** (e.g. 404) use `stroke-width="1"` and larger size (`w-20 h-20`)

---

## 11. View Transitions

Astro's `<ViewTransitions />` is enabled in `Layout.astro`. Only `Header` and `Footer` use `transition:persist`. All other content swaps through view transitions.

### 11.1 Root transitions
- **Fade-out**: 0.3s, `translateY(0) → translateY(-8px)`
- **Fade-in**: 0.45s with 0.1s delay, `translateY(12px) → translateY(0)`
- Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Disabled entirely under `prefers-reduced-motion`

### 11.2 Interactive script lifecycle (mandatory pattern)
Every inline `<script>` that adds event listeners, observes DOM, or sets body classes **MUST** follow:

```js
function setupComponent() {
  // query fresh DOM, attach listeners
  // return teardown function
}

let teardownFn = setupComponent();

document.addEventListener('astro:before-swap', () => {
  teardownFn?.();
  teardownFn = null;
});
document.addEventListener('astro:after-swap', () => {
  teardownFn = setupComponent();
});
```

Components in scope: `Header.astro` (mobile menu), `Timeline.astro` (expand/collapse), `ContactForm.astro` (validation/submit).

### 11.3 Prohibited
**Never** combine `transition:persist` with CSS `view-transition-name` — the two mechanisms conflict and corrupt state.

---

## 12. Accessibility

- All interactive controls have `aria-label` (icon-only) or visible text
- `aria-current="page"` on active nav links
- `aria-expanded` + `aria-controls` on mobile menu toggle
- `inert` on mobile menu when closed
- Mobile menu toggles `body.menu-locked { overflow: hidden }` and traps focus implicitly
- Form labels always paired with `for=` inputs
- Form errors use `aria-live`-compatible markup
- `lang="en"` on `<html>`
- Focus styles: 3px `rgba(accent, 0.12)` ring on form inputs (button focus relies on browser default + visible hover state)
- Color contrast: all body text ≥ 4.5:1 against `#ffffff`; accent-700 (#6e6980) used on accent-50 for chips
- `prefers-reduced-motion` honored everywhere
- `scroll-padding-top: 5rem` on `html` to offset sticky header for in-page anchors

---

## 13. Imagery

- **Source domains allowed**: `images.unsplash.com` (preconnect declared in `BaseHead`)
- **Optimization**: Astro `<Image />` component with `width`, `height`, `sizes`, `loading="lazy"`, `decoding="async"`
- **Project card image**: `aspect-[3/2] object-cover`, scales `1.03` on card hover
- **Case study hero**: `rounded-xl`, eager-loaded (`loading="eager"`)
- **Portrait**: `loading="lazy"`, 320×480, `rounded-2xl overflow-hidden` with accent glow on hover
- **Static assets**: `public/` (fonts, images, CV PDF, scripts, favicon)

---

## 14. SEO & Metadata

- Every page sets `title`, `description`, `og:title`, `og:description`, `og:type="website"`, `og:url`, `twitter:card="summary_large_image"`
- `<link rel="canonical">` set to current URL
- Project pages accept optional `ogImage`, fall back to `/favicon.svg`
- Default `theme-color: #9b96a8`
- JSON-LD `Person` schema injected on most pages via `Layout.astro` (suppressable with `suppressJsonLd`)
  - Pulls `knowsAbout` from `skillsData`
  - Pulls `alumniOf` from `timelineData`
- `robots.txt` in `public/`
- `<link rel="preconnect">` to Unsplash, Google Fonts (gstatic), FormSubmit

---

## 15. Decorative Patterns

### 15.1 Hero grid overlay
```css
background-image:
  linear-gradient(to right, rgba(accent, 0.12) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(accent, 0.12) 1px, transparent 1px);
background-size: 40px 40px;
mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 35%, transparent 70%);
```
Creates a subtle grid that fades from center.

### 15.2 Portrait glow
```css
.absolute -inset-2 rounded-2xl bg-accent-500/15 blur-lg
opacity-0 group-hover:opacity-100
```
Hidden accent glow that appears on hover.

### 15.3 Divider
`.divider` — `1px` horizontal rule with `linear-gradient(90deg, transparent, gray-200, transparent)`, `margin: 3rem 0`.

### 15.4 Reveal animations
Sections use `.reveal-container` and `.reveal-stagger` classes for scroll-triggered fade-ins. The actual JS is in `public/scripts/interactive.js`.

---

## 16. Implementation Notes

- **Tailwind** powers all spacing, layout, color (accent/gray scales), responsive utilities, typography
- **Custom CSS** in `src/styles/global.css` defines:
  - `:root` design tokens (CSS variables)
  - `body` defaults
  - `@layer components` — `.btn-primary`, `.btn-outline`, `.glass-card`, `.gradient-text`, `.section-subtle`, `.section-title`
  - Header/back-to-top/mobile-menu/divider/contact-form styles
  - View-transition keyframes
  - `prefers-reduced-motion` overrides
- **Astro components** encapsulate interactive patterns; inline `<script>` blocks follow the lifecycle pattern
- **Data layer** (`src/data/*.ts`) feeds components — design tokens are *not* in data files
- **Content collections** (`src/content/projects/*.md`) follow the schema in `src/content/config.ts`; markdown renders with Tailwind Typography
- **Build**: `output: 'static'`, `trailingSlash: 'never'`, `build.format: 'file'` → produces `/page.html` files
- **Deployment**: GitHub Pages at `denismalovany.github.io`

---

## 17. Do / Don't

**Do**
- Use `.btn-primary` or `.btn-outline` for all CTAs
- Use `.glass-card` for elevated content blocks
- Use `.section-title` for h2 section headers
- Use Tailwind utility classes for one-off spacing/color
- Reach for `text-accent-600` (not `accent-500`) for link text
- Honor `prefers-reduced-motion` in any new animation
- Use the view-transition script lifecycle for any new interactive component

**Don't**
- Create new button variants
- Introduce new color tokens
- Add new CSS variables (use Tailwind utilities)
- Apply `view-transition-name` to `transition:persist` elements
- Use `Astro.glob()` — use Content Collections
- Use `transition-colors` with custom CSS variables without matching duration tokens
- Stack multiple shadows on a single element without testing at all breakpoints
