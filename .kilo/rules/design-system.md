# Design System Rules

## Typography
- **Display/Serif**: `Lexend` — headings
- **Sans**: `Inter` — body text
- Use CSS variables: `var(--font-display)`, `var(--font-sans)`

## Colors
### Accent (primary)
- Palette: `accent-50: #f6f5f7` … `accent-950: #28262e`
- Core: `#9b96a8` (`accent-500`)
- Light: `#bdb9c7` (`--color-accent-light`)
- Dark: `#6b6578` (`--color-accent-secondary`)
- Gradient: `linear-gradient(135deg, #9b96a8 0%, #6b6578 100%)`

### Gray (neutrals)
Standard Tailwind gray palette: 50–900

### Semantic
- `--color-black: #0a0a0a`
- `--color-white: #fafafa`
- `--color-surface: #ffffff`

## Shadows
- `shadow-accent`: `0 4px 14px rgba(155, 150, 168, 0.28)`
- `shadow-accent-lg`: `0 10px 40px rgba(155, 150, 168, 0.35)`
- `shadow-sm/md/lg/xl` — standard Tailwind

## Border Radius
- `sm: 0.375rem`, `md: 0.5rem`, `lg: 0.75rem`, `xl: 1rem`, `2xl: 1.5rem`

## Transitions
- `fast: 150ms`, `normal: 300ms`, `slow: 500ms`, `spring: 400ms cubic-bezier(0.34, 1.56, 0.64, 1)`
- All use easing: `cubic-bezier(0.25, 0.1, 0.25, 1)`

## Glass Effect
- `glass-card`: background rgba(255,255,255,0.72) + blur(16px) + border
- Header: blur(12px) saturate(180%)

## Reusable Components (from global.css)

### Buttons
- **btn-primary** — accent gradient bg, white text, shadow-accent, hover translateY(-2px) scale(1.02) + brightness(1.1)
- **btn-outline** — transparent + 1.5px solid gray-300 border, hover → accent border + bg with rgba(accent, 0.08)

### Cards & Effects
- **glass-card** — white glassmorphism with backdrop blur
- **gradient-text** — accent gradient applied via `background-clip: text`
- **section-subtle** — subtle gradient background

### Section Titles
- **section-title** — font-display, font-bold, black, inline-block, with accent gradient underline (36px wide, 3px tall)
- Use `section-title section-title--mb-6` or `section-title section-title--mb-8` variants when margin-bottom is needed

### Links
- **link-arrow** — text + `→` arrow that slides right on hover
- **link-arrow-back** — `←` arrow that slides left on hover
- **link-external** — `↗` suffix icon
- **link-underline** — accent gradient underline that animates width 0→100% on hover

### Text
- **text-link** — gray-500, hover → accent-light

## View Transitions
- fade-out: 0.3s, translateY(0) → translateY(-8px)
- fade-in: 0.45s with 0.1s delay, translateY(12px) → translateY(0)
- `prefers-reduced-motion` disables all animations
- **IMPORTANT**: All interactive inline scripts MUST use the `astro:before-swap` / `astro:after-swap` lifecycle pattern (see `astro.md` rules for full specification)

## Important Rules
1. Do NOT create new colors — use existing ones from `tailwind.config.mjs` and `global.css`
2. Do NOT add new CSS variables — use Tailwind utility classes instead
3. Use `--transition-fast` for hover effects
4. Use existing breakpoints: sm(640), md(768), lg(1024), xl(1280)
5. Do NOT modify glass effects — they're part of the visual identity
6. Reuse `.btn-primary` / `.btn-outline` for all CTA buttons — do not create new button variants
