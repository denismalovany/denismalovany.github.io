# Awwwards Visual Reimagining — Kilo Brief

## What this is
A single-shot, opinionated brief that asks you (Kilo) to **re-imagine the visual language of the DMpage portfolio** to a level that could honestly be submitted to Awwwards SOTD. Not a checklist. Not "make it nice." A real creative direction.

## Read first (mandatory, in this order)
1. `.kilo/plans/awwwards-enhancement-plan.md` — the existing strategic plan. Treat it as context, not gospel. You are free to disagree, reorder, or scrap ideas from it.
2. `.kilo/rules/design-system.md` — current design tokens. You may extend them, but you must justify every new variable.
3. `.kilo/rules/astro.md` — hard constraints on how code is written. **Non-negotiable.**
4. `src/styles/global.css` and `tailwind.config.mjs` — see what's actually defined before proposing changes.

## Hard constraints (cannot be violated)
- Astro 5 static, Tailwind 3, TypeScript, Content Collections — no React, no JSX.
- No new font families unless you justify (perf + licensing).
- All interactive scripts must follow the `astro:before-swap` / `astro:after-swap` lifecycle pattern.
- `prefers-reduced-motion` must be respected.
- No `view-transition-name` on `transition:persist` elements.
- Keep deployment target: GitHub Pages at `denismalovany.github.io`.
- Keep all existing pages: Home, About, Projects (list + detail), Contact, 404.
- Keep existing content collections schema; you may add optional frontmatter fields.

## Soft constraints (can be bent with reason)
- Can add libraries (GSAP, Lenis, three.js, p5.js) — justify bundle weight, lazy-load where possible.
- Can add 1 display font (variable, subsetted) if the design demands it.
- Can extend `tailwind.config.mjs` and `global.css` with new tokens — but document each addition.

## Who this is for
A solo Ukrainian product designer (Denys, 9+ yrs, ex-Miltec, Kyiv). The site should read as:
- A **premium one-person studio**, not a 20-person agency.
- Internationally credible — could sit next to a Berlin or NY portfolio without blushing.
- Quietly Ukrainian in identity (typography rhythm, color restraint, a sense of "thoughtful cold" in winter) — but never folkloric.
- Confident enough to show range: complex B2B case studies alongside consumer work.

## Who this is NOT for
- Crypto/NFT/AI-art aesthetics (no glitch, no neon, no "vapor").
- "Designer as personal brand influencer" — no face-forward hero, no giant name in caps.
- Trend-chasing maximalism. Restraint is a feature.

## Your job — 4 stages, stop for my review between each

### Stage 1 — Creative direction (NO code)
Deliver a written brief, ~300–500 words, covering:
1. **3 awwwards-grade references** (real, named sites) that you think set the right bar. For each: 1–2 sentences on *what specifically* to borrow, and *what to avoid* (we are not copying).
2. **The one big idea** — a single conceptual hook that ties the whole site together. Examples of the *kind* of thing I mean (do not literally use these): "the site as a printed monograph", "the site as a measurement instrument", "the site as a quiet conversation in a museum". One idea, defended in 2–3 sentences.
3. **Typography direction** — display + body, with reasoning. If you propose a new font, name it, give the weight, and justify the bundle cost.
4. **Color & material direction** — what changes from the current `#9b96a8` accent + monochrome system, and why. Be specific: hex values, opacity rules, where glass/gradient/noise lives.
5. **Motion philosophy** — one paragraph. What does motion *do* here? (Reveal hierarchy? Mark territory? Reward curiosity? Remove friction?) And what does it deliberately *not* do?
6. **The 3 riskiest design bets** — things that could fail, and what makes you confident enough to try them anyway.

**Stop here. Wait for my "go" before Stage 2.**

### Stage 2 — Token system & structural plan (no component code yet)
Deliver:
1. Concrete additions to `tailwind.config.mjs` and `global.css` (new tokens, utilities). Each one with a 1-line "why".
2. New component breakdown: what new components you need, what existing ones get refactored. File tree.
3. Motion system: which library(ies), what's hand-rolled CSS, where the bundle weight lives.
4. Page-by-page transformation summary, 2–3 lines per page.

**Stop here. Wait for my "go" before Stage 3.**

### Stage 3 — Implementation in waves
You will build it in 3–4 waves, in this suggested order (reorder if you have a reason):
- **Wave A: Foundation** — tokens, type ramp, color system, dark mode, View Transitions refinement.
- **Wave B: Hero & motion core** — hero section, primary scroll narrative, custom cursor (if you proposed one).
- **Wave C: Content surfaces** — projects list, project detail, about, contact, 404.
- **Wave D: Polish** — micro-interactions, preloader, performance pass, a11y audit.

Between waves, you should be able to show me a working state and a short diff summary. Don't ask permission between every file — just keep waves small enough that I can review.

### Stage 4 — Verification & handoff
- Lighthouse run on the built site (target: 95+ in all four).
- Accessibility: keyboard nav works, focus rings visible, reduced-motion respected, screen-reader pass on the hero and a project detail page.
- A short "what I built and why" note (~200 words) for the README.
- List of every new dependency + bundle weight delta.

## How to behave
- **Form opinions.** If you think the current accent color is wrong for the new direction, say so and propose the replacement. Don't soften to "maybe consider".
- **Cite the plan when you deviate from it.** If you skip a Tier 1 item from `awwwards-enhancement-plan.md`, say which one and why.
- **No placeholder content.** Don't write "Lorem ipsum" anywhere. If a copy decision is needed, propose 2 options with reasoning and let me pick.
- **Performance is part of the design.** A 200KB hero animation is not "more premium" than a 20KB one. If you can't justify the weight, cut it.
- **Surprise me.** I have read the plan. I have not seen your taste. Show me something I wouldn't have written myself.

## Definition of done (for the whole brief)
- The site, opened cold on a fast connection, on a 1440px screen, in dark mode, on a Wednesday at 2am Kyiv time, makes me want to show it to someone within 30 seconds.
- I cannot point to a single element and say "that looks like a Tailwind starter".
- Lighthouse: 95+ all four. Bundle delta vs. current: documented.
- Every file in the project compiles, the build passes, the deploy preview works.
