import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';

const ROOT = path.resolve(__dirname, '..');

describe('Full Responsive Design & Mobile Visibility Architecture Suite', () => {
  describe('Global CSS Responsive Rules (global.css)', () => {
    const cssPath = path.join(ROOT, 'src', 'styles', 'global.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');

    it('prevents full-page horizontal blowouts on html and body', () => {
      expect(cssContent).toContain('overflow-x: hidden');
      expect(cssContent).toContain('max-width: 100vw');
    });

    it('enforces native iOS momentum scrolling on overflow containers and KaTeX display', () => {
      expect(cssContent).toContain('-webkit-overflow-scrolling: touch');
      expect(cssContent).toContain('.overflow-x-auto');
      expect(cssContent).toContain('.katex-display');
    });

    it('prevents iOS Safari focus auto-zoom on mobile viewports (< 640px)', () => {
      expect(cssContent).toContain('@media (max-width: 639px)');
      expect(cssContent).toContain('font-size: 16px !important');
    });

    it('provides safe-area inset padding and bottom utility classes', () => {
      expect(cssContent).toContain('env(safe-area-inset-bottom');
      expect(cssContent).toContain('.pb-safe');
      expect(cssContent).toContain('.bottom-safe');
    });

    it('ad banner slots do not have rigid min-width: 320px blowout inside padded containers', () => {
      expect(cssContent).toContain('min-width: 0');
      expect(cssContent).toContain('max-width: 728px');
      expect(cssContent).not.toMatch(/\.ad-slot-banner\s*\{[^}]*min-width:\s*320px/);
    });
  });

  describe('Base Layouts and HTML Shells', () => {
    const baseLayoutPath = path.join(ROOT, 'src', 'layouts', 'BaseLayout.astro');
    const headMetaPath = path.join(ROOT, 'src', 'components', 'seo', 'HeadMeta.astro');
    const toolLayoutPath = path.join(ROOT, 'src', 'layouts', 'ToolLayout.astro');

    it('BaseLayout includes HeadMeta with proper responsive viewport meta tag', () => {
      const baseContent = fs.readFileSync(baseLayoutPath, 'utf8');
      expect(baseContent).toContain('HeadMeta');

      const metaContent = fs.readFileSync(headMetaPath, 'utf8');
      expect(metaContent).toContain('name="viewport"');
      expect(metaContent).toContain('content="width=device-width, initial-scale=1.0"');
    });

    it('ToolLayout uses fluid mobile-first card padding to preserve formula space', () => {
      const content = fs.readFileSync(toolLayoutPath, 'utf8');
      expect(content).toContain('p-4 sm:p-6 md:p-8');
      expect(content).toContain('overflow-x-auto');
    });
  });

  describe('Touch Targets & Mobile Navigation Ergonomics', () => {
    const navbarPath = path.join(ROOT, 'src', 'components', 'common', 'Navbar.astro');
    const themeTogglePath = path.join(ROOT, 'src', 'components', 'common', 'ThemeToggle.astro');
    const cookiePath = path.join(ROOT, 'src', 'components', 'common', 'CookieConsent.astro');

    it('mobile hamburger menu button satisfies WCAG 44x44px minimum tap target', () => {
      const content = fs.readFileSync(navbarPath, 'utf8');
      expect(content).toContain('min-h-[44px]');
      expect(content).toContain('min-w-[44px]');
    });

    it('mobile navigation overlay is constrained to 100dvh with internal scrolling', () => {
      const content = fs.readFileSync(navbarPath, 'utf8');
      expect(content).toContain('max-h-[calc(100dvh-4rem)]');
      expect(content).toContain('overflow-y-auto');
    });

    it('theme toggle button has minimum 40px touch target', () => {
      const content = fs.readFileSync(themeTogglePath, 'utf8');
      expect(content).toContain('min-h-[40px]');
      expect(content).toContain('min-w-[40px]');
    });

    it('cookie consent banner supports safe-area-inset-bottom on mobile devices', () => {
      const content = fs.readFileSync(cookiePath, 'utf8');
      expect(content).toContain('env(safe-area-inset-bottom');
    });
  });

  describe('Interactive Tools & Calculators Mobile Ergonomics', () => {
    it('CRunner, SqlSimulator, and HtmlRunner toolbars do not enforce rigid unconstrained min-widths', () => {
      const cRunner = fs.readFileSync(path.join(ROOT, 'src', 'tools', 'ict', 'c-runner', 'CRunner.tsx'), 'utf8');
      const sqlSim = fs.readFileSync(path.join(ROOT, 'src', 'tools', 'ict', 'database-simulator', 'SqlSimulator.tsx'), 'utf8');
      const htmlRunner = fs.readFileSync(path.join(ROOT, 'src', 'tools', 'ict', 'html-runner', 'HtmlRunner.tsx'), 'utf8');

      expect(cRunner).toContain('sm:min-w-[240px]');
      expect(sqlSim).toContain('sm:min-w-[240px]');
      expect(htmlRunner).toContain('sm:min-w-[240px]');
    });

    it('PeriodicTableIsland has mobile horizontal swipe instruction', () => {
      const content = fs.readFileSync(path.join(ROOT, 'src', 'components', 'periodic-table', 'PeriodicTableIsland.tsx'), 'utf8');
      expect(content).toContain('touch-pan-x');
      expect(content).toContain('ডানে-বামে স্ক্রোল করুন');
    });

    it('GeneralMathCalculator and HigherMathCalculator provide mobile chapter dropdowns', () => {
      const genMath = fs.readFileSync(path.join(ROOT, 'src', 'tools', 'math', 'general-math', 'GeneralMathCalculator.tsx'), 'utf8');
      const highMath = fs.readFileSync(path.join(ROOT, 'src', 'tools', 'higher-math', 'HigherMathCalculator.tsx'), 'utf8');

      expect(genMath).toContain('<div className="md:hidden pb-1">');
      expect(genMath).toContain('<select');
      expect(highMath).toContain('<div className="md:hidden pb-1">');
      expect(highMath).toContain('<select');
    });

    it('mobile floating answer bars include safe-area-inset-bottom padding', () => {
      const genMath = fs.readFileSync(path.join(ROOT, 'src', 'tools', 'math', 'general-math', 'GeneralMathCalculator.tsx'), 'utf8');
      const highMath = fs.readFileSync(path.join(ROOT, 'src', 'tools', 'higher-math', 'HigherMathCalculator.tsx'), 'utf8');
      const phys = fs.readFileSync(path.join(ROOT, 'src', 'tools', 'physics', 'PhysicsCalculator.tsx'), 'utf8');
      const chem = fs.readFileSync(path.join(ROOT, 'src', 'tools', 'chemistry', 'ChemistryCalculator.tsx'), 'utf8');
      const bio = fs.readFileSync(path.join(ROOT, 'src', 'tools', 'biology', 'BiologyCalculator.tsx'), 'utf8');

      expect(genMath).toContain('env(safe-area-inset-bottom');
      expect(highMath).toContain('env(safe-area-inset-bottom');
      expect(phys).toContain('env(safe-area-inset-bottom');
      expect(chem).toContain('env(safe-area-inset-bottom');
      expect(bio).toContain('env(safe-area-inset-bottom');
    });
  });
});
