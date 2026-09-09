# 🔬 Biggan.me (বিজ্ঞান.মি) — Interactive STEM Platform

[![Website](https://img.shields.io/badge/Website-biggan.me-06b6d4?style=flat-square)](https://biggan.me)
[![Tests](https://img.shields.io/badge/Vitest-195%20Passing-emerald?style=flat-square)](tests/)
[![Astro](https://img.shields.io/badge/Built%20With-Astro%205-purple?style=flat-square)](https://astro.build)
[![Tailwind](https://img.shields.io/badge/Tailwind-CSS%20v4-38bdf8?style=flat-square)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-slate?style=flat-square)](LICENSE)

**Biggan.me** is Bangladesh's premier, open-access, bilingual interactive STEM education platform for the National Curriculum and Textbook Board (**NCTB**) across **SSC (Classes 9–10)** and **HSC (Classes 11–12)**.

---

## 🌟 Features

- **17+ Interactive STEM Simulators & Calculators:**
  - **Physics:** 1D Kinematics, Projectile Motion, Vector Cross/Dot Product, Work & Energy.
  - **Chemistry:** Stoichiometry & Molarity, Limiting Reactants, Bond Energy ($\Delta H$), Gas Laws, Redox Half-Reaction Balancer, pH Spectrum, Dynamic Periodic Table.
  - **General Mathematics:** Grouped Data Statistics (Mean, Median, Mode), Trigonometric Elevation, Algebraic Identities.
  - **Higher Mathematics:** Apollonius Theorem, Quadratic Systems, Infinite Geometric Series, Recurring Decimals, Coordinate Geometry, Vectors, Binomial Expansion, Solid Geometry, Probability.
  - **ICT:** C Code Sandbox, HTML/CSS Web Runner, Logic Gate Simulator, Relational Database/SQL Simulator.
  - **Biology:** Genetic Crosses (Monohybrid / Dihybrid), Blood Group Matching, Cellular Respiration Energy Accounting, BMI/BMR.
- **Hardware Calculator Guides:** Step-by-step keystroke guides for Casio **fx-991EX ClassWiz** and **fx-991ES PLUS**.
- **100% Mobile-First:** Responsive across phones (320px+), tablets, and desktops with safe-area insets and touch-optimized controls.
- **Strict Bilingual Parity:** Fully mirrored `/bn/` (Bengali default) and `/en/` (English) with bidirectional hreflang SEO architecture.
- **High-Performance JAMstack:** Pre-rendered static pages with selective React hydration (`client:idle` / `client:visible`) and zero layout shift KaTeX typography.

---

## 📖 Complete Documentation

For architectural guidelines, developer rules, bilingual routing, and step-by-step instructions for adding new tools and formulas, please consult:

👉 **[PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md)**

---

## 🛠️ Tech Stack

- **Framework:** [Astro 5+](https://astro.build)
- **UI Islands:** [React 19](https://react.dev)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Math Engine:** [KaTeX](https://katex.org)
- **Icons:** [Lucide React](https://lucide.dev)
- **Testing:** [Vitest](https://vitest.dev) (13 test suites, 195+ automated tests)
- **Edge Deployment:** [Cloudflare Pages](https://pages.cloudflare.com)

---

## 🚀 Quickstart & Commands

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Run automated test suites
npm test -- --run

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 🌐 Production Deployment

Deployments to Cloudflare Pages:

```powershell
npm run build
$env:CLOUDFLARE_API_TOKEN="<YOUR_TOKEN>"
$env:CLOUDFLARE_ACCOUNT_ID="<YOUR_ACCOUNT_ID>"
npx wrangler pages deploy dist --project-name=biggan --branch=master
```

---

## 📄 License
MIT © [Biggan.me Team](https://biggan.me)
