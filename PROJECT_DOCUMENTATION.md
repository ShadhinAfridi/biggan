# Biggan.me — Comprehensive Architecture & Developer Guide

> **Production Platform:** [https://biggan.me](https://biggan.me)  
> **Repository:** [https://github.com/ShadhinAfridi/biggan](https://github.com/ShadhinAfridi/biggan)  
> **Hosting & CDN:** Cloudflare Pages (Static JAMstack Edge)  
> **Framework:** Astro (TypeScript, React Islands, Tailwind CSS v4)  
> **Domain:** `biggan.me` (Primary) | `biggan.pages.dev` (Preview)

---

## 1. Project Overview & Mission

**Biggan.me** (বিজ্ঞান.মি) is Bangladesh's premier, open-access, bilingual interactive STEM education platform for the National Curriculum and Textbook Board (**NCTB**) curriculum across **SSC (Classes 9–10)** and **HSC (Classes 11–12)**.

### Core Disciplines Covered:
- **Physics:** Kinematics, Dynamics, Gravitation, Work & Energy, Wave & Sound, Electricity, Vector Calculus, Projectile Motion.
- **Chemistry:** Mole Concept, Molarity, Empirical/Molecular Formula, Limiting Reactants, Bond Energy ($\Delta H$), Gas Laws, Redox Balancing, pH Spectrum, Dynamic Periodic Table.
- **General Mathematics:** Statistics (Grouped Mean/Median/Mode), Trigonometry & Elevation, Algebraic Identities, Mensuration.
- **Higher Mathematics:** Apollonius Theorem, Quadratic Systems, Infinite Geometric Series, Recurring Decimals, Coordinate Geometry, Vectors, Binomial Theorem, Solid Geometry, Probability.
- **ICT:** C Code Sandbox, HTML/CSS Web Runner, Logic Gate Simulator, Relational Database/SQL Simulator.
- **Biology:** Genetic Crosses (Monohybrid / Dihybrid), Blood Group Compatibility, Cellular Respiration Energy Accounting, BMI/BMR, Ecosystem Trophic Energy.

---

## 2. Tech Stack Architecture

| Layer | Technology | Purpose |
|---|---|---|
| **Static Site Generator** | **Astro 5+** | Content-driven architecture, zero unnecessary JS by default, pre-rendering 207+ static pages. |
| **Client Islands** | **React 19** | Dynamic stateful calculators, simulators, and code runners loaded selectively via `client:idle` or `client:visible`. |
| **Styling** | **Tailwind CSS v4** (`@tailwindcss/vite`) | Modern CSS variables, ultra-fast Vite pipeline, custom dark-first STEM color palette. |
| **Math & Formula Engine** | **KaTeX** (`katex`, `Latex.astro`, `Latex.tsx`) | Mathematical typesetting with zero client-side layout shift (CLS). |
| **Icons** | **lucide-react** | Clean, accessible iconography. |
| **Testing** | **Vitest 5+** | Automated testing suite (13 test suites, 195+ tests) covering STEM math engines, SEO, AdSense compliance, and responsive rules. |
| **Hosting & Edge Router** | **Cloudflare Pages** | Global CDN distribution, Edge 302 locale redirect, HSTS security headers, DDoS protection. |

---

## 3. Directory Layout & File Organization

```text
u:\Biggan\
├── public/                       # Static assets served at the root URL
│   ├── _headers                  # Cloudflare security, HSTS, and cache-control headers
│   ├── _redirects                # Edge routing rules (e.g., / -> /bn/ 302, legacy redirects)
│   ├── robots.txt                # Search engine crawlers, sitemaps, AI bot content signals
│   ├── google9561371fa6c94bfa.html # Google Search Console HTML verification file
│   ├── ads.txt                   # Authorized Google AdSense inventory declarations
│   ├── manifest.webmanifest      # Progressive Web App (PWA) manifest
│   ├── favicon.svg / .ico        # High-DPI brand icons
│   └── og-image.png / .svg       # Open Graph social sharing cards
│
├── src/
│   ├── components/               # UI components
│   │   ├── casio/                # Hardware scientific calculator step guides (fx-991EX, fx-991ES PLUS)
│   │   ├── common/               # Navbar, Footer, LanguageSwitcher, ThemeToggle, CookieConsent
│   │   ├── math/                 # LaTeX rendering wrappers (Latex.astro, Latex.tsx)
│   │   ├── periodic-table/       # Interactive Mendeleev periodic table island
│   │   ├── seo/                  # HeadMeta.astro, AdSlot.astro, Breadcrumb.astro
│   │   └── tools/                # RevisionTracker and shared tool utilities
│   │
│   ├── data/                     # Structured curriculum content
│   │   ├── formulas/             # Formula databases across Physics, Chemistry, Math, ICT, Biology
│   │   └── glossary/             # Bilingual scientific terminology definitions (paribhasha)
│   │
│   ├── i18n/                     # Bilingual localization dictionary & route utilities
│   │   ├── ui.ts                 # Translations dictionary (bn & en)
│   │   └── utils.ts              # URL locale parsers and link helpers
│   │
│   ├── layouts/                  # Base Astro layouts
│   │   ├── BaseLayout.astro      # Master HTML shell (HeadMeta, Navbar, Footer, CookieConsent)
│   │   └── ToolLayout.astro      # Interactive tool wrapper with fluid responsive cards & formulas
│   │
│   ├── pages/                    # File-based routing (Strictly Bilingual)
│   │   ├── bn/                   # Bengali (Default Locale, e.g., /bn/, /bn/tools/..., /bn/formulas/...)
│   │   └── en/                   # English (/en/, /en/tools/..., /en/formulas/...)
│   │
│   ├── styles/                   # Global styles
│   │   └── global.css            # Responsive overflow guards, KaTeX momentum scroll, 16px iOS rule
│   │
│   └── tools/                    # Tool engines and React islands
│       ├── biology/              # Biology calculator & genetics engine
│       ├── chemistry/            # Chemistry calculator & stoichiometry engine
│       ├── gas-law/              # Ideal gas & Graham diffusion calculators
│       ├── higher-math/          # Higher math calculator & geometry engine
│       ├── ict/                  # C Runner, HTML Runner, Logic Gates, SQL Simulator
│       ├── math/general-math/    # SSC general math calculator & statistics engine
│       ├── molar-mass/           # Hydrates & molar mass analyzer
│       ├── physics/              # SSC/HSC unified physics solver & kinematics engine
│       ├── projectile-motion/    # Ballistics trajectory simulator
│       ├── quadratic-solver/     # Polynomial root finder
│       ├── redox-balancer/       # Ion-electron half-reaction balancer
│       ├── significant-figures/  # Sig fig precision & rounding engine
│       ├── solution-dilution/    # M1V1 = M2V2 laboratory dilution calculator
│       └── vector-calculator/    # 2D/3D vector cross/dot product engine
│
├── tests/                        # Vitest automated test suites
│   ├── adsense.test.ts           # AdSense readiness & trust page validation
│   ├── engines.test.ts           # Math, chemistry & physics calculation correctness
│   ├── responsive.test.ts        # Mobile touch targets, safe-area insets, viewport rules
│   └── seo.test.ts               # Sitemaps, hreflang, metadata, canonicals, 100% page crawl audit
│
├── astro.config.mjs              # Astro configuration, sitemap integration, i18n routing
└── package.json                  # Dependencies and build scripts
```

---

## 4. Fundamental Architecture Rules (Must Follow)

### Rule 1: Strict Bilingual Parity (`/bn/` & `/en/`)
1. **Never create an un-prefixed page in `src/pages/`** (e.g. `src/pages/tools.astro` is prohibited).
2. Every public route must exist in both:
   - `src/pages/bn/...` (Bengali default)
   - `src/pages/en/...` (English mirror)
3. Both pages must link to each other via bidirectional `<link rel="alternate" hreflang="...">` handled automatically by `<HeadMeta />`.
4. Technical terms (paribhashik shobdo, e.g., *Molarity*, *Molar Mass*, `<table>`, `<input>`, *Apollonius*, *ATP*) must always retain their standard English name alongside the Bengali explanation.

---

### Rule 2: Root Locale Architecture & Edge Routing
```text
User Request: https://biggan.me/
         ↓
Cloudflare Edge Router (public/_redirects)
         ↓
HTTP/1.1 302 Found  →  Location: /bn/
         ↓
Browser Renders: https://biggan.me/bn/ (HTTP 200 OK)
```
- **Do NOT re-create `src/pages/index.astro`.**
- Astro is configured with `redirectToDefaultLocale: false`. The root URL `/` is resolved strictly at Cloudflare's CDN edge via `public/_redirects`:
  ```text
  /    /bn/    302
  ```
- The root URL `/` is excluded from `sitemap-0.xml` to prevent search engine redirect penalties.

---

### Rule 3: Responsive Design & Mobile Ergonomics
1. **Zero 320px Blowout:** All pages must render with zero horizontal window scrollbars at `320px` width (`window.innerWidth === 320`).
2. **Global Safeguards in [global.css](file:///u:/Biggan/src/styles/global.css):**
   - `html, body { overflow-x: hidden; max-width: 100vw; }`
   - `-webkit-overflow-scrolling: touch;` on all `.overflow-x-auto` and `.katex-display` containers.
   - iOS 16px focus rule: `@media (max-width: 639px) { input, select, textarea { font-size: 16px !important; } }` (prevents Safari auto-zoom).
3. **Touch Targets:** All buttons, menu toggles, and switches must be **$\ge 44 \times 44\text{ px}$** (or $\ge 40\text{ px}$ for compact utility toggles).
4. **Mobile Chapter Navigation:** For multi-module calculators (like Higher Math or General Math), always include a native mobile dropdown:
   ```tsx
   <div className="md:hidden pb-1">
     <select value={activeChapter} onChange={...} className="...">
       {chapters.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
     </select>
   </div>
   <div className="hidden md:flex gap-2">
     {/* Desktop tab buttons */}
   </div>
   ```
5. **Safe-Area Insets:** Sticky floating answer bars or fixed banners must specify:
   ```tsx
   style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom, 0.625rem))' }}
   ```

---

### Rule 4: Performance & Hydration Discipline
1. **Island Directives:**
   - **`client:idle`**: Standard for interactive calculators and code sandboxes.
   - **`client:visible`**: For heavy below-the-fold components (e.g. complex canvas or periodic table).
   - **Never use `client:load`** unless the element is critical to the first paint above the fold.
2. **Formula Rendering:**
   - Prefer server-rendered math via `Latex.astro` for static content.
   - For reactive calculator results, use `Latex.tsx` with KaTeX.

---

### Rule 5: Google AdSense & Monetization Policy
1. **Content First:** Tool inputs, primary calculation cards, and formula explanations must always appear above any ad units.
2. **Ad Slots:** Use `<AdSlot client:idle placement="in-feed|banner|sidebar" format="horizontal|rectangle" />`.
3. **No Artificial Incentives:** Never label ads with misleading text like "Click to Calculate" or place interactive buttons directly touching ad frames.
4. **Preserve Trust Pages:** Maintain the legal and trust pages in both languages:
   - `/privacy/` (Google Consent Mode v2, localStorage disclosures)
   - `/disclaimer/` (Academic safety, lab warnings, Casio trademark fair-use)
   - `/terms/` (Terms of service)
   - `/about/`, `/contact/`, `/methodology/`, `/editorial/`

---

## 5. Step-by-Step Developer Guides

### How to Add a New Interactive Calculator Tool

1. **Step 1: Build the Math / Science Engine**
   - Create `src/tools/<tool-name>/engine.ts`.
   - Write pure TypeScript functions that take numeric/string inputs, validate edge cases (division by zero, negative roots, out-of-bounds), and return formatted results and LaTeX step-by-step solutions:
     ```ts
     export interface CalculationResult {
       success: boolean;
       value: number | string;
       steps: Array<{ labelBn: string; labelEn: string; latex: string }>;
       errorMessage?: string;
     }
     export function solveProblem(input: number): CalculationResult { ... }
     ```

2. **Step 2: Add Engine Unit Tests**
   - Create or update `tests/engines.test.ts` with known textbook test cases and edge cases.
   - Run `npm test -- --run` to verify calculations match NCTB board solutions.

3. **Step 3: Create the React Island UI**
   - Create `src/tools/<tool-name>/<ToolName>Calculator.tsx`.
   - Support `Props { lang?: 'bn' | 'en' }`.
   - Ensure input fields use responsive grid layout (`grid-cols-1 sm:grid-cols-2`).
   - Add safe-area padded floating sticky bar for mobile results.

4. **Step 4: Create the Bilingual Pages**
   - Create `src/pages/bn/tools/<tool-name>.astro` and `src/pages/en/tools/<tool-name>.astro`.
   - Wrap with `<ToolLayout title={...} description={...} lang={lang} ...>`.
   - Mount the island with `<ToolCalculator client:idle lang={lang} />`.
   - Include complete NCTB theory, formulas, step-by-step CQ/MCQ examples, and Casio calculator guide.

5. **Step 5: Verify Build & Sitemaps**
   - Run `npm test -- --run`
   - Run `npm run build`
   - Verify that both URLs appear in `dist/sitemap-0.xml` and pass the crawl test.

---

### How to Add a New NCTB Formula Guide

1. Add formula definitions to `src/data/formulas/<subject>.ts`.
2. Include:
   - `id`, `titleBn`, `titleEn`
   - `latex` (valid KaTeX formula string)
   - `variables`: array of symbols, names, and SI units
   - `casioShortcuts`: keystroke steps for fx-991EX and fx-991ES PLUS
   - `boardExams`: referenced CQ board questions
3. Verify that `/bn/formulas/<subject>/` and `/en/formulas/<subject>/` automatically reflect the updates.

---

## 6. Testing & Quality Assurance

Run test suites before every commit:

```bash
# Run all vitest test suites once
npm test -- --run

# Watch mode during active development
npm test
```

### Existing Automated Test Suites:
- `tests/seo.test.ts`: Crawls all 207 HTML files in `dist/`, checking canonicals, hreflangs, meta tags, and sitemaps.
- `tests/responsive.test.ts`: Validates viewport tags, touch target sizes, mobile dropdowns, and safe-area insets.
- `tests/adsense.test.ts`: Validates trust pages, privacy disclosures, and AdSense structural rules.
- `tests/physics.test.ts`, `tests/chemistry.test.ts`, `tests/higher-math.test.ts`, etc.: Validate calculation correctness against board standards.

---

## 7. Production Deployment Guide

Deployments are handled via Cloudflare Pages:

```powershell
# 1. Build the production site
npm run build

# 2. Deploy to Cloudflare Pages (Production branch: master)
$env:CLOUDFLARE_API_TOKEN="<YOUR_CLOUDFLARE_API_TOKEN>"
$env:CLOUDFLARE_ACCOUNT_ID="<YOUR_CLOUDFLARE_ACCOUNT_ID>"
npx wrangler pages deploy dist --project-name=biggan --branch=master
```

### Deployment Checklist:
- [ ] `npm test -- --run` exits with 0 failures (195+ tests passed).
- [ ] `npm run build` builds all 207 pages with 0 errors.
- [ ] `public/_redirects` and `public/_headers` are uploaded.
- [ ] Verify live endpoints:
  - `curl -I https://biggan.me/` $\to$ `302` to `/bn/`
  - `curl -I https://biggan.me/bn/` $\to$ `200 OK`
  - `curl -I https://biggan.me/google9561371fa6c94bfa.html` $\to$ `200 OK`
  - `curl -I https://biggan.me/sitemap-index.xml` $\to$ `200 OK`
