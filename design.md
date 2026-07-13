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
- Footer logo variant: same DM wordmark with `tracking-[-0.02em]`, "Portfolio" at `text-[13px]`

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
| `2xs` | 0.6875rem (11px) | 1.3 | Tag chips, eyebrow labels, PDF button, footer copyright |
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
- `h1` in PageHero: `font-display font-bold leading-[1.1] text-black text-3xl md:text-5xl lg:text-6xl tracking-[-0.02em]`
- `h2` sections: `text-2xl md:text-3xl` (uses `.section-title` class)
- `h3` cards (bento): `font-display font-bold text-black` at `1.125rem` (1.25rem for span-2 variants), `line-height: 1.25`, `letter-spacing: -0.01em`
- `h3` featured cards: `font-display font-bold text-black` at `1.75rem` (1.375rem on mobile), `line-height: 1.2`, `letter-spacing: -0.015em`
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
- `tracking-[0.08em]` (0.08em) on chips/tags (`.tag`), PDF button
- `tracking-[0.18em]` (0.18em) on eyebrow (`.eyebrow`)
- `tracking-[0.07em]` on bento-card tags (`.bc-tag`)
- `tracking-[0.04em]` on footer copyright, status indicators
- `tracking-[0.14em]` on project meta labels
- `tracking-wide` on subtitle (e.g. timeline role) — `0.08em` in Tailwind config
- `tracking-wider` on uppercase category labels — `0.08em`
- `tracking-[-0.02em]` on hero h1 and footer logo
- Buttons use `letter-spacing: 0.01em` (in CSS)

---

## 4. Spacing & Layout

### 4.1 Container
- Standard: `container mx-auto max-w-3xl` (most prose content, 768px)
- Wide: `container mx-auto max-w-6xl` (footer)
- Extra-wide: `max-w-7xl` (projects grid page)
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
- All transition durations → `0ms`
- All animation durations → `0.01ms`
- `::view-transition-old(root)` / `::view-transition-new(root)` → `animation: none`

This is a **mandatory** accessibility rule. Any new animation must respect this query.

### 7.3 Standard interactions
- **Button hover**: `translateY(-2px) scale(1.02)` + shadow upgrade + brightness 1.1
- **Button active**: `translateY(0) scale(0.99)` + brightness overlay
- **Card hover**: `translateY(-3px)` + `shadow-accent-lg` + image `scale(1.03)` over 500ms
- **Glass-card hover (`.glass-card--hover`)**: `translateY(-2px)` + `shadow-accent` + border → `#dbd7e0`
- **Link hover**: arrow `translateX(3px)` (forward) or `translateX(-3px)` (back)
- **Nav link hover**: color → `accent-600` + background → `gray-50`
- **Active nav link**: `text-accent-600 bg-accent-50 font-semibold`
- **Accent text hover**: `accent-600` → `accent-500` → `accent-light`
- **Gradient text hover**: `brightness(1.12)`

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

Used for: project cards, contact cards, contact form wrapper, timeline container, case navigation items.

### 8.2 Header (sticky bar)
```css
background: var(--glass-bg);             /* rgba(255,255,255,0.72) */
backdrop-filter: blur(12px) saturate(180%);
border-bottom: 1px solid var(--glass-border);
height: 4.5rem;
z-index: 1000;
```
- Hide on scroll-down via `header.header-hidden { transform: translateY(-100%) }`
- Auto-hide is **disabled** at `lg` breakpoint (≥1024px) — the header remains permanently visible on desktop
- `view-transition-name: site-header` + `transition:persist` (see Section 11.3)

### 8.3 Back-to-top button
- 44×44 circle, `border 1.5px solid gray-200`, `glass-bg` background, `blur(8px)`
- `bottom: 2rem; right: 2rem; z-index: 900`
- Hidden by default (`opacity:0; visibility:hidden; transform:translateY(10px)`)
- Revealed by JS on scroll threshold (>400px)
- Injected by `public/scripts/interactive.js` at runtime (not in Astro templates)
- Hover: `border-color: accent-light` + `color: accent-secondary` + `shadow-accent`
- Active: `translateY(10px) scale(0.95)`

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
- `:focus-visible`: `shadow-accent-lg` + 3px accent ring

#### `.btn-outline` (secondary)
- Padding: `0.75rem 1.75rem`
- Background: transparent
- Text: `var(--color-gray-700)`, `font-weight: 600`
- Border: `1.5px solid var(--color-gray-300)`
- `border-radius: var(--radius-lg)`
- Hover: `border-color: accent-light` + `color: accent-light` + `background: rgba(accent, 0.08)` + `translateY(-1px) scale(1.02)` + `shadow-md`
- Active: `translateY(0) scale(0.99) + background: rgba(accent, 0.12)`
- `:focus-visible`: `border-color: accent` + 3px accent ring

#### `.btn-ghost` (tertiary)
- Padding: `0.75rem 1rem`
- Background: transparent
- Text: `var(--color-gray-700)`, `font-weight: 600`
- Border: `1.5px solid transparent`
- `border-radius: var(--radius-lg)`, `font-size: 0.9375rem`, `letter-spacing: 0.01em`
- Hover: `color: accent-secondary` + `background: rgba(accent, 0.06)`
- `:focus-visible`: 3px accent ring + `border-color: accent`

#### PDF button (header)
- `inline-flex items-center gap-1 px-2.5 py-1 text-2xs font-medium text-gray-500`
- `border border-gray-200 rounded-full`
- Hover: `text-accent-500 border-accent-300 bg-accent-50`
- `uppercase tracking-[0.08em]`

#### Full-width submit button (Contact form)
- Adds `w-full py-3.5`
- Three states: `submit-text`, `submit-loading` (spinner), `submit-success` (green)

### 9.2 Tags / Chips

Tags are implemented via the `.tag` CSS component class (and variants), not raw Tailwind utilities.

#### `.tag` (default / accent)
```css
display: inline-flex;
align-items: center;
padding: 4px 10px;
font-size: 0.6875rem;
font-weight: 500;
line-height: 1.2;
letter-spacing: 0.08em;
text-transform: uppercase;
color: var(--color-accent-secondary, #6b6578);
background: #f6f5f7;
border-radius: 9999px;
border: 1px solid #ecebef;
```
Used for: hero role tags (`[slug].astro`), skill tags (`index.astro`), case study tags (`[slug].astro`).

#### `.tag--plain` (gray variant)
Same structure but neutral colors:
```css
color: var(--color-gray-500);
background: var(--color-gray-50);
border-color: var(--color-gray-100);
```
Used for: non-accent tags on case study pages, status pills (e.g. "Remote / On-site").

#### `.bc-tag` (bento-card tag)
Smaller variant used inside Bento project cards:
```css
padding: 3px 8px;
font-size: 0.625rem;
font-weight: 500;
letter-spacing: 0.07em;
text-transform: uppercase;
color: var(--color-accent-secondary, #6b6578);
background: #f6f5f7;
border-radius: 9999px;
border: 1px solid #ecebef;
```

#### `.fp-tag` (featured-project tag)
Same styling as `.tag`, used inside the featured project card on the projects page.

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
| `.link-arrow` | Appends `→` that translates 3px right on hover; accent gradient underline animates `0 → 100%` width |
| `.link-arrow-back` | Prepends `← ` that translates 3px left on hover; `::after` underline animates `0 → 100%` width |
| `.link-external` | Appends `↗` (75% font-size) |
| `.link-underline` | Accent gradient underline animates width `0 → 100%` on hover, bottom 2px, 1.5px tall |

### 9.5 Bento Grid System (Project Cards)

The primary project card system on the `/projects` page. Replaces older `glass-card`-based project cards.

#### Core grid
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}
```
Responsive: 3 cols at 1100px, 2 cols at 768px, 1 col at 500px.

#### Bento card (`.bento-card`)
```css
border-radius: var(--radius-2xl);  /* 24px */
overflow: hidden;
background: var(--glass-bg);
backdrop-filter: blur(16px);
border: 1px solid var(--glass-border);
box-shadow: var(--glass-shadow);
/* flex column for content stacking */
```
- Hover: `translateY(-3px)` + `shadow-accent-lg`
- Hidden state (`.is-hiding`): `opacity: 0; transform: scale(0.97); display: none`
- Card link (`.bc-link`): full-size `text-decoration: none`, flex column, `height: 100%`

#### Card image (`.bc-image` / `.bc-img`)
- `aspect-ratio: 3/2`, `overflow: hidden`
- Image: `object-fit: cover`, `width: 100%`, `height: 100%`
- Hover scale: `scale(1.03)` over `--transition-slow`
- Span-2 tall variant: `aspect-ratio: 3/4`
- Span-2 wide variant: `aspect-ratio: 16/9`

#### Card body (`.bc-body`)
- `padding: 1.25rem 1.5rem 1.5rem`, flex column, flex: 1
- Compact variant for cards 1-3: `padding: 0.75rem 1.25rem 1rem`
- Compact variant for cards 4+: `padding: 0.75rem 1.25rem 1rem`

#### Card title (`.bc-title`)
- `font-family: var(--font-display)`, `font-size: 1.125rem`, `font-weight: 700`
- `color: var(--color-black)`, `line-height: 1.25`, `letter-spacing: -0.01em`
- Span-2 variants: `font-size: 1.25rem`
- Compact (cards 1-3, 4+): `font-size: 1.0625rem`
- Accent variant (`.bc-accent .bc-title`): `color: var(--color-accent-dark)`

#### Card summary (`.bc-summary`)
- `font-size: 0.8125rem`, `color: var(--color-gray-600)`, `line-height: 1.55`
- Span-2 variants: `font-size: 0.875rem`
- Compact: `font-size: 0.75rem`

#### Card role (`.bc-role`)
- `margin-top: auto`, `padding-top: 1rem`
- `font-size: 0.75rem`, `font-weight: 600`, `color: var(--color-gray-400)`
- `text-transform: uppercase`, `letter-spacing: 0.06em`
- `border-top: 1px solid var(--color-gray-100)`

#### Span-2 variants
- `.bc-span-2`: `grid-column: span 2` (collapses to span 1 on mobile)
- `.bc-tall`: taller image aspect ratio (3/4)
- `.bc-wide`: wider image aspect ratio (16/9)
- Controlled via `bentoLayout` field in content collection: `'default'`, `'span-2-tall'`, `'span-2-wide'`

#### Accent variant (`.bc-accent`)
```css
background: linear-gradient(150deg, rgba(var(--color-accent-rgb), 0.08) 0%, rgba(255, 255, 255, 0.72) 50%);
border-color: rgba(var(--color-accent-rgb), 0.14);
```
Controlled via `bentoAccent: true` in content collection.

#### Stats card (`.bc-stats`)
A special non-interactive bento card displaying project counts:
- No glass effect (`background: transparent`, no `backdrop-filter`, no `border`, no `box-shadow`)
- Hover disabled (`transform: none; box-shadow: none`)
- Number: `font-family: var(--font-display)`, `font-size: 3.5rem` (2.5rem compact), `font-weight: 800`, `color: var(--color-accent)`
- Text: `font-size: 0.875rem`, `color: var(--color-gray-500)`
- Also hides when all grid items are filtered out

### 9.6 Featured Project Card (`.fp-card`)

Used on the `/projects` page to highlight the top project above the bento grid.

- `glass-card` base with `border-radius: var(--radius-2xl)`
- Hover: `translateY(-3px)` + `shadow-accent-lg`
- Hidden state (`.is-hiding`): `opacity: 0; transform: scale(0.98)`

#### Link layout (`.fp-card-link`)
- `display: grid; grid-template-columns: 1.5fr 1fr`, `min-height: 400px`
- Stacks to single column on mobile, image gets `aspect-ratio: 3/2`

#### Image (`.fp-image` / `.fp-img`)
- Full-cover image with `scale(1.03)` on card hover
- "Latest" badge (`.fp-badge`): positioned `top: 1.5rem; left: 1.5rem`, glass pill with `color: accent-dark`

#### Content (`.fp-content`)
- `padding: 2.5rem` (1.5rem on mobile), centered vertically
- Tags row: flex wrap, gap 6px, margin-bottom: 1.25rem
- Title (`.fp-title`): `font-display`, `1.75rem` (1.375rem mobile), `font-weight: 700`, `color: black`, `letter-spacing: -0.015em`
- Summary (`.fp-summary`): `0.9375rem`, `color: gray-600`, `line-height: 1.65`
- Role (`.fp-role`): `0.8125rem`, `font-weight: 600`, `color: gray-400`, `uppercase`, `letter-spacing: 0.07em`

#### Wrapper (`.fp-wrap`)
- Animated hide: `opacity: 0; transform: scale(0.98)` when `.is-hiding`
- Used by the filter system to show/hide the featured card

### 9.7 Forms
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

### 9.8 Header / Navigation
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

### 9.9 Footer
- `border-t border-gray-100/80 mt-24 bg-white`
- Container: `max-w-6xl`
- Four-column grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-10`
- Column 1: DM wordmark + tagline description
  - Logo: `font-extrabold text-2xl tracking-[-0.02em] gradient-text` + "Portfolio" at `text-[13px] text-gray-400`
  - Tagline: `text-sm text-gray-500 max-w-[36ch]`
- Column 2: Navigation links (`text-sm text-gray-600`, hover → `text-accent-500`)
- Column 3: Social links (`text-sm text-gray-600 link-underline link-external`)
- Column 4: Contact (email + location)
- Header label in each column: `text-2xs uppercase tracking-[0.18em] text-gray-400 font-semibold`
- Bottom bar: `py-6 border-t border-gray-100`, copyright (`text-2xs text-gray-400 tracking-[0.04em]`) left, availability badge right (green dot + "Open to opportunities")
- `data-astro-prefetch="hover"` on internal links

### 9.10 Page Hero
- Padding: `pt-24 pb-24 md:pt-28 md:pb-28`
- Centered text, `max-w-3xl mx-auto`
- `h1` with size scale `text-3xl → md:text-5xl → lg:text-6xl`, `tracking-[-0.02em]`
- Divider: 64px × 4px gradient bar, `rounded-full`, `mx-auto my-5`
- Optional subtitle: `text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed font-medium`
- Optional `slot="after"` for CTA buttons
- Background: `var(--gradient-radial)` + masked grid lines (40×40px) fading toward edges
- Responsive padding: `2.5rem @ md`, `3rem @ lg`

### 9.11 Timeline
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

### 9.12 Skills Grid
- `grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10`
- Category title: `font-display font-bold text-black text-sm uppercase tracking-wider mb-4`
- List: `space-y-2.5`
- Item: `flex items-center gap-2.5 text-gray-600 text-sm-plus`
- Bullet: `w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0`

### 9.13 Eyebrow & Lede

#### `.eyebrow`
Decorative section label with an accent-colored leading line:
```css
font-family: var(--font-sans);
font-size: 0.6875rem;
font-weight: 600;
line-height: 1;
text-transform: uppercase;
letter-spacing: 0.18em;
color: var(--color-accent-secondary, #6b6578);
/* ::before pseudo-element: 18px × 1px accent-light line, gap 10px */
```
Used in `PageHero.astro` for the eyebrow prop.

#### `.lede`
Enlarged introductory paragraph:
```css
font-size: 1.125rem;
line-height: 1.65;
color: var(--color-gray-600);
max-width: 62ch;
```

### 9.14 Proof Strip (`.proof-strip`)

Fact/stats callout bar used on the homepage about section:
```css
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 16px 28px;
padding: 18px 24px;
background: var(--glass-bg);
backdrop-filter: blur(12px);
border: 1px solid var(--glass-border);
border-radius: var(--radius-xl);
font-size: 0.875rem;
font-weight: 500;
color: var(--color-gray-600);
```
- Strong numbers: `font-display`, `font-weight: 600`, `1rem`, `color: black`
- Separator dots: `color: gray-300`

#### Sidebar variant (`.proof-strip--sidebar`)
- Stacks vertically with smaller text (`0.8125rem`)
- Hides separator dots
- Switches to horizontal layout at ≤880px

### 9.15 Split Layout (`.split`)

Two-column grid used for the about preview on the homepage:
```css
display: grid;
grid-template-columns: 1.4fr 1fr;
gap: 64px;
align-items: start;
```
Stacks to single column (`gap: 40px`) at ≤880px.

### 9.16 Filter System

Used on the `/projects` page to filter bento cards by tag.

#### Filter bar (`.projects-filter`)
- Flex row, gap 8px, padding: `1rem 0`
- Bordered top and bottom with `gray-100`, `margin-bottom: 3rem`
- Label (`.projects-filter__label`): `text-2xs font-semibold uppercase tracking-[0.16em] text-gray-400`
- Results count (`.projects-filter__count`): `text-sm-plus text-gray-400`, right-aligned, tabular-nums

#### Filter button (`.filter-btn`)
```css
padding: 8px 14px;
border-radius: var(--radius-lg);
font-size: 0.8125rem;
font-weight: 500;
color: var(--color-gray-600);
background: transparent;
border: 1.5px solid var(--color-gray-200);
```
- Hover: `border-color: accent-light`, `color: accent-secondary`
- Active (`.is-active`): `background: accent-gradient`, `color: white`, `shadow-accent`
- Count badge (`.filter-btn__count`): pill with `gray-100` bg; changes to white-on-transparent when active

#### Empty state (`.bento-empty`)
- Hidden by default, shown when no cards match the active filter
- `grid-column: 1 / -1`, centered text, `padding: 6rem 1rem`
- "Clear filter" button: `color: accent-secondary`, underline with `accent-light`

#### JS filter behavior
- Buttons call `applyFilter(key)` which parses `data-tags` attributes
- Toggles `.is-hiding` on both bento cards and featured card
- Stats card hides when all items are filtered out
- Results count updates live
- Full lifecycle: `astro:before-swap` / `astro:after-swap`
- "Clear filter" button resets to "all" (defined in `projects.astro` inline script)

### 9.17 Case Navigation (`.case-nav`)

Previous/next navigation on project detail pages:
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 16px;
```
Stacks to single column at ≤880px.

Each item (`.case-nav__item`): glass card with hover lift (`translateY(-2px)` + `shadow-accent`)
- Label (`.case-nav__label`): `text-2xs uppercase tracking-[0.12em] text-gray-400`
- Title (`.case-nav__title`): `font-display text-lg font-bold text-black`
- Arrow (`.case-nav__arrow`): `text-sm-plus font-medium text-accent-secondary`
- Next variant (`.case-nav__item--next`): `text-align: right` (reverts to left on mobile)

### 9.18 Case Stats (`.case-stats`)

3-column stats grid for case study pages (defined but not currently used on pages):
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
```
- Each cell: glass card padding 28px
- Number (`.num`): `font-display text-4xl font-bold color: black`
- Label (`.label`): `text-2xs uppercase tracking-[0.12em] text-gray-400`
- Stacks to single column at ≤880px

### 9.19 Case Gallery (`.case-gallery`)

2-column image grid for case study pages (defined but not currently used):
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 16px;
```
- Each cell: `aspect-ratio: 4/3`, `rounded-lg`, `accent-50` background
- Placeholder text: `text-2xs uppercase text-accent-secondary`
- Stacks to single column at ≤880px

### 9.20 Closing Row (`.closing-row` / `.closing-card`)

Bottom-of-page CTA cards used on the homepage:
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 16px;
```
Stacks to single column at ≤880px.

Each card: glass card with padding 32px, hover lift (`translateY(-2px)` + `shadow-accent`)
- Eyebrow (`.closing-card__eyebrow`): `text-2xs uppercase tracking-[0.16em] text-accent-secondary`
- h3: `font-display text-xl font-bold text-black`
- p: `text-sm text-gray-600 leading-[1.65] max-w-[38ch]`
- CTA (`.closing-card__cta`): `text-sm-plus text-accent-secondary` with `::after` gradient underline that animates `0 → 100%` on card hover

### 9.21 Project Meta (`.project__meta`)

Metadata row used in the featured projects section on the homepage:
```css
display: flex;
align-items: center;
gap: 10px;
font-size: 0.6875rem;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 0.14em;
color: var(--color-gray-400);
```
- Dot separator: `3px × 3px` circle, `gray-300`

### 9.22 Section Soft (`.section--soft`)

Subtle gray section background variant:
```css
background: var(--color-gray-50);
border-top: 1px solid var(--color-gray-100);
border-bottom: 1px solid var(--color-gray-100);
```

### 9.23 Glass Card Hover (`.glass-card--hover`)

Hover enhancement for glass cards:
- Hover: `translateY(-2px)` + `shadow-accent` + border → `#dbd7e0`
- Focus-visible: 3px accent ring + `border-color: accent`

### 9.24 Contact Cards (contact page)

Contact channel blocks on `/contact`:
- `flex items-start gap-4 sm:gap-6 p-6 sm:p-8 glass-card glass-card--hover`
- Icon container: `w-12 h-12 rounded-xl bg-accent-50 text-accent-600` (or `bg-black text-white` for PDF)
- Title: `font-display text-base font-bold text-black`
- Optional CTA: `btn-primary` aligned right
- Some cards contain internal grid sub-layouts

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

Components in scope: `Header.astro` (mobile menu), `Timeline.astro` (expand/collapse), `ContactForm.astro` (validation/submit), `projects.astro` (filtering). Additionally, `public/scripts/interactive.js` provides scroll-aware header, reveal animations, and back-to-top button — all wired to the same lifecycle events.

### 11.3 Named view transitions on header
The `<header>` element carries `view-transition-name: site-header` alongside the `Header` component's `transition:persist` directive. The `view-transition-name` enables smooth header cross-fades during page transitions while `transition:persist` preserves the header's DOM and event listeners across navigations.

---

## 12. Reveal Animations

Scroll-triggered fade-in animations implemented in `public/scripts/interactive.js`.

### 12.1 `.reveal`
Single-element reveal:
- Initial: `opacity: 0; transform: translateY(30px) scale(0.98)`
- On intersection: `opacity: 1; transform: translateY(0) scale(1)`
- Transition: `0.6s cubic-bezier(0.25, 0.1, 0.25, 1)`
- Uses `IntersectionObserver` with `threshold: 0.1` and `rootMargin: 0px 0px -40px 0px`

### 12.2 `.reveal-container` + `.reveal-stagger`
Container-scoped staggered reveals:
- Each child `.reveal-stagger`: `opacity: 0; transform: translateY(24px)`
- On container intersection: children appear one by one with 80ms stagger delay
- Transition: `0.5s cubic-bezier(0.25, 0.1, 0.25, 1)`

### 12.3 Reduced motion
Both reveal types are bypassed under `prefers-reduced-motion: reduce` — elements are shown immediately with no animation.

### 12.4 Lifecycle
- `initScrollReveals()` / `destroyScrollReveals()` wired to `astro:before-swap` / `astro:after-swap`
- Observers are disconnected and re-created on each navigation
- Scoped to `main` element to avoid observing elements in transition

---

## 13. Scroll-Aware Header

Implemented in `public/scripts/interactive.js`.

- On scroll-down (>80px threshold): adds `header-hidden` class → `transform: translateY(-100%)`
- On scroll-up: removes `header-hidden` → header slides back in
- Disabled at `lg` breakpoint (≥1024px) — `header-hidden` has `transform: none`
- Listener: `scroll` event with `{ passive: true }`
- Lifecycle: `initScrollHeader()` / `destroyScrollHeader()` wired to `astro:before-swap` / `astro:after-swap`

---

## 14. Accessibility

- All interactive controls have `aria-label` (icon-only) or visible text
- `aria-current="page"` on active nav links
- `aria-expanded` + `aria-controls` on mobile menu toggle
- `inert` on mobile menu when closed
- Mobile menu toggles `body.menu-locked { overflow: hidden }` and traps focus implicitly
- Form labels always paired with `for=` inputs
- Form errors use `aria-live`-compatible markup
- `lang="en"` on `<html>`
- Focus styles: 3px `rgba(accent, 0.12)` ring on form inputs and buttons (via `:focus-visible`), plus `border-color: accent` on buttons
- Color contrast: all body text ≥ 4.5:1 against `#ffffff`; accent-700 (#6e6980) used on accent-50 for chips
- `prefers-reduced-motion` honored everywhere
- `scroll-padding-top: 5rem` on `html` to offset sticky header for in-page anchors
- Skip-to-content link: `sr-only` by default, visible on focus

---

## 15. Imagery

- **Source domains allowed**: `images.unsplash.com` (preconnect declared in `BaseHead`)
- **Optimization**: Astro `<Image />` component with `width`, `height`, `sizes`, `loading="lazy"`, `decoding="async"`
- **Project card image**: `aspect-[3/2] object-cover`, scales `1.03` on card hover
- **Case study hero**: `rounded-xl`, eager-loaded (`loading="eager"`)
- **Portrait**: `loading="lazy"`, 320×480, `rounded-2xl overflow-hidden` with accent glow on hover
- **Static assets**: `public/` (fonts, images, CV PDF, scripts, favicon)

---

## 16. SEO & Metadata

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

## 17. Decorative Patterns

### 17.1 Hero grid overlay
```css
background-image:
  linear-gradient(to right, rgba(accent, 0.12) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(accent, 0.12) 1px, transparent 1px);
background-size: 40px 40px;
mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 35%, transparent 70%);
```
Creates a subtle grid that fades from center.

### 17.2 Portrait glow
```css
.absolute -inset-2 rounded-2xl bg-accent-500/15 blur-lg
opacity-0 group-hover:opacity-100
```
Hidden accent glow that appears on hover.

### 17.3 Divider
`.divider` — `1px` horizontal rule with `linear-gradient(90deg, transparent, gray-200, transparent)`, `margin: 3rem 0`.

---

## 18. Implementation Notes

- **Tailwind** powers all spacing, layout, color (accent/gray scales), responsive utilities, typography
- **Custom CSS** in `src/styles/global.css` defines:
  - `:root` design tokens (CSS variables)
  - `body` defaults
  - `@layer components` — `.btn-primary`, `.btn-outline`, `.btn-ghost`, `.glass-card`, `.gradient-text`, `.section-subtle`, `.section-title`, `.eyebrow`, `.lede`, `.tag`, `.proof-strip`, `.split`, `.filters`, `.featured`, `.bento-grid`, `.bento-card` and all `.bc-*` variants, `.fp-*`, `.case-nav`, `.case-stats`, `.closing-row`, `.section--soft`, `.link-arrow`, `.link-arrow-back`, `.link-underline`, `.link-external`, `.text-link`, `.project__meta`
  - Header/back-to-top/mobile-menu/divider/contact-form styles
  - View-transition keyframes
  - `prefers-reduced-motion` overrides
  - Scroll-aware header behavior
- **Astro components** encapsulate interactive patterns; inline `<script>` blocks follow the lifecycle pattern
- **Data layer** (`src/data/*.ts`) feeds components — design tokens are *not* in data files
- **Content collections** (`src/content/projects/*.md`) follow the schema in `src/content/config.ts`; markdown renders with Tailwind Typography
- **Build**: `output: 'static'`, `trailingSlash: 'never'`, `build.format: 'file'` → produces `/page.html` files
- **Deployment**: GitHub Pages at `denismalovany.github.io`

---

## 19. Do / Don't

**Do**
- Use `.btn-primary`, `.btn-outline`, or `.btn-ghost` for all CTAs
- Use `.glass-card` for elevated content blocks
- Use `.section-title` for h2 section headers
- Use `.eyebrow` for decorative section labels above headings
- Use `.tag` / `.tag--plain` / `.bc-tag` for all chip/pill elements
- Use Tailwind utility classes for one-off spacing/color
- Reach for `text-accent-600` (not `accent-500`) for link text
- Honor `prefers-reduced-motion` in any new animation
- Use the view-transition script lifecycle for any new interactive component
- Use `.bento-card` and `.bc-*` classes for project cards in any grid layout

**Don't**
- Create new button variants (use `.btn-primary`, `.btn-outline`, `.btn-ghost`)
- Introduce new color tokens
- Add new CSS variables (use Tailwind utilities)
- Apply `view-transition-name` to non-header `transition:persist` elements
- Use `Astro.glob()` — use Content Collections
- Use `transition-colors` with custom CSS variables without matching duration tokens
- Stack multiple shadows on a single element without testing at all breakpoints
