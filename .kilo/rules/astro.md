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
3. Client-side scripts go in `<script>` tags (no attributes — runs on client). All interactive scripts MUST follow the View Transition lifecycle pattern (see section below).
4. **Do NOT use `Astro.glob()`** — use Content Collections instead (`Astro.locals.entries`)
5. Styles primarily via Tailwind utility classes
6. Custom CSS variables from `global.css` are available through Tailwind config

## Content Collections
- Collection `projects` at `src/content/projects/*.md`
- Schema defined in `src/content/config.ts`
- Slug used for dynamic pages: `src/pages/projects/[slug].astro`

## View Transitions & Client-Side Script Lifecycle

The project uses `<ViewTransitions />` from `astro:transitions` in `Layout.astro`. Only `<Header>` and `<Footer>` are persisted across navigations (`transition:persist`). All other content is swapped by the view transition router.

### Required pattern for ALL interactive inline `<script>` blocks

Every interactive `<script>` in an Astro component/page that attaches event listeners or manipulates DOM MUST follow the init/teardown lifecycle pattern. Without this, interactivity breaks after navigating away and back.

```js
<script>
  function setupComponent() {
    // Query fresh DOM elements, attach event listeners
    const el = document.getElementById('my-element');
    if (!el) return;
    
    function handler() { /* ... */ }
    el.addEventListener('click', handler);
    
    // Return a teardown function that removes ALL listeners
    return function teardown() {
      el.removeEventListener('click', handler);
    };
  }

  // Initial call for first page load
  let teardownFn = setupComponent();

  // View Transition lifecycle hooks
  document.addEventListener('astro:before-swap', () => {
    if (teardownFn) { teardownFn(); teardownFn = null; }
  });
  
  document.addEventListener('astro:after-swap', () => {
    teardownFn = setupComponent();
  });
</script>
```

### Rules

1. **Return a teardown function** — `setupComponent()` MUST return a function that cleans up all event listeners, observers, and timers.
2. **Guard against missing DOM** — check `if (!el) return;` early because the component may not be present on every page.
3. **Store the teardown reference** — use a module-scoped variable (`teardownFn`) so `astro:before-swap` can invoke the current teardown.
4. **Use `astro:before-swap`** to tear down before the old DOM is removed.
5. **Use `astro:after-swap`** to re-initialize after the new DOM is inserted.
6. **Always call `setupComponent()` once for the first page load** — view transition events do NOT fire on initial navigation.
7. **Do NOT use `addEventListener` without a corresponding `removeEventListener`** — it causes memory leaks and duplicate handlers across navigations.

### `transition:persist` elements — narrowed exception

Components marked with `transition:persist` (currently only `Header` and `Footer`) retain their DOM across navigations. However, the exception to the lifecycle pattern is **narrowed**:

**Scripts in persisted components STILL REQUIRE lifecycle hooks when they manage mutable state.** This includes menus, toggles, accordions, form inputs, or any logic that sets classes on `document.body`, uses `inert` / `aria-expanded`, or tracks state in closure variables (`isOpen`, `isExpanded`, etc.).

After a View Transition, the `document.body` is a new element, and closure-captured state variables may reference stale DOM or incorrect conditions. The lifecycle hooks ensure:
- `astro:before-swap`: close/teardown mutable state and remove all listeners
- `astro:after-swap`: re-query fresh DOM references and re-initialize

**Scripts in persisted components may omit lifecycle hooks ONLY when they are truly stateless** — pure one-time decoration (e.g., setting `currentYear` in a footer) with no event listeners, no mutable closure state, and no body-level side effects.

### `transition:persist` + `view-transition-name` conflict — PROHIBITED

**Never apply CSS `view-transition-name` to any element that uses `transition:persist`.** The browser's native View Transitions API attempts to independently animate named elements, which conflicts with Astro's DOM-persistence mechanism. This dual-transition behavior corrupts DOM state and disconnects event listeners. The `transition:persist` directive alone is sufficient for preserving elements across navigations.

## Images
- Allowed domains: `images.unsplash.com`
- Optimize via Astro `<Image />` component
- Static assets in `public/`

## Rules
- No React/JSX — all components are `.astro`
- No `Astro.glob()` — use Content Collections everywhere
- All new pages must include meta tags and Open Graph
- Stick to Tailwind styles defined in `tailwind.config.mjs`
