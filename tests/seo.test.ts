import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';

const ROOT = path.resolve(__dirname, '..');

describe('Technical SEO & Crawl Architecture Suite', () => {
  describe('robots.txt specification', () => {
    const robotsPath = path.join(ROOT, 'public', 'robots.txt');

    it('exists in public directory', () => {
      expect(fs.existsSync(robotsPath)).toBe(true);
    });

    it('contains valid user-agent and crawl directives', () => {
      const content = fs.readFileSync(robotsPath, 'utf8');
      expect(content).toContain('User-agent: *');
      expect(content).toContain('Allow: /');
      expect(content).toContain('Disallow: /404');
    });

    it('declares canonical sitemap URLs', () => {
      const content = fs.readFileSync(robotsPath, 'utf8');
      expect(content).toContain('Sitemap: https://biggan.me/sitemap-index.xml');
      expect(content).toContain('Sitemap: https://biggan.me/sitemap-0.xml');
    });
  });

  describe('Cloudflare Pages redirects (_redirects)', () => {
    const redirectsPath = path.join(ROOT, 'public', '_redirects');

    it('exists in public directory', () => {
      expect(fs.existsSync(redirectsPath)).toBe(true);
    });

    it('contains standard 301 redirect for legacy sitemap.xml', () => {
      const content = fs.readFileSync(redirectsPath, 'utf8');
      expect(content).toMatch(/\/sitemap\.xml\s+\/sitemap-index\.xml\s+301/);
    });

    it('contains redirect for bare /html-runner to localized tool path', () => {
      const content = fs.readFileSync(redirectsPath, 'utf8');
      expect(content).toMatch(/\/html-runner\s+\/bn\/tools\/html-runner\/\s+301/);
    });

    it('contains clean edge 301 permanent redirect for root / to /bn/', () => {
      const content = fs.readFileSync(redirectsPath, 'utf8');
      expect(content).toMatch(/^\/\s+\/bn\/\s+301/m);
    });

    it('contains 301 redirects for legacy logic-gates and periodic-table paths', () => {
      const content = fs.readFileSync(redirectsPath, 'utf8');
      expect(content).toMatch(/\/bn\/tools\/logic-gates\s+\/bn\/tools\/circuit-simulator\/\s+301/);
      expect(content).toMatch(/\/en\/tools\/logic-gates\s+\/en\/tools\/circuit-simulator\/\s+301/);
      expect(content).toMatch(/\/bn\/tools\/periodic-table\s+\/bn\/periodic-table\/\s+301/);
      expect(content).toMatch(/\/en\/tools\/periodic-table\s+\/en\/periodic-table\/\s+301/);
    });
  });

  describe('Cloudflare Pages security and cache headers (_headers)', () => {
    const headersPath = path.join(ROOT, 'public', '_headers');

    it('exists in public directory', () => {
      expect(fs.existsSync(headersPath)).toBe(true);
    });

    it('specifies OWASP recommended security headers for all routes', () => {
      const content = fs.readFileSync(headersPath, 'utf8');
      expect(content).toContain('X-Content-Type-Options: nosniff');
      expect(content).toContain('X-Frame-Options: SAMEORIGIN');
      expect(content).toContain('Referrer-Policy: strict-origin-when-cross-origin');
      expect(content).toContain('Strict-Transport-Security: max-age=31536000; includeSubDomains; preload');
    });

    it('specifies immutable long-term caching for hashed Astro assets', () => {
      const content = fs.readFileSync(headersPath, 'utf8');
      expect(content).toContain('/_astro/*');
      expect(content).toContain('Cache-Control: public, max-age=31536000, immutable');
    });
  });

  describe('404 Soft-404 Prevention', () => {
    const page404Path = path.join(ROOT, 'src', 'pages', '404.astro');

    it('exists and includes noindex={true} directive', () => {
      expect(fs.existsSync(page404Path)).toBe(true);
      const content = fs.readFileSync(page404Path, 'utf8');
      expect(content).toMatch(/noindex=\{true\}/);
    });
  });

  describe('E-E-A-T Trust & Contact Pages', () => {
    const bnContactPath = path.join(ROOT, 'src', 'pages', 'bn', 'contact.astro');
    const enContactPath = path.join(ROOT, 'src', 'pages', 'en', 'contact.astro');

    it('both Bengali and English contact pages exist', () => {
      expect(fs.existsSync(bnContactPath)).toBe(true);
      expect(fs.existsSync(enContactPath)).toBe(true);
    });

    it('contact pages declare ContactPage Schema.org JSON-LD', () => {
      const bnContent = fs.readFileSync(bnContactPath, 'utf8');
      const enContent = fs.readFileSync(enContactPath, 'utf8');
      expect(bnContent).toContain('ContactPage');
      expect(enContent).toContain('ContactPage');
      expect(bnContent).toContain('editorial@biggan.me');
      expect(enContent).toContain('editorial@biggan.me');
    });
  });

  describe('Tools Breadcrumbs & Schema Integrity', () => {
    const toolLayoutPath = path.join(ROOT, 'src', 'layouts', 'ToolLayout.astro');

    it('ToolLayout enforces canonical URLs in BreadcrumbList schema', () => {
      const content = fs.readFileSync(toolLayoutPath, 'utf8');
      expect(content).toContain('canonicalPageUrl');
      expect(content).toContain('item: canonicalPageUrl');
      expect(content).not.toContain('Astro.url.href');
    });

    it('ToolLayout includes related tools & cross-links section', () => {
      const content = fs.readFileSync(toolLayoutPath, 'utf8');
      expect(content).toContain('RELATED_MAP');
      expect(content).toContain('related-tools');
    });
  });

  describe('All 17 Interactive Tools Exist Across Locales', () => {
    const expectedTools = [
      'physics',
      'chemistry',
      'biology',
      'general-math',
      'higher-math',
      'molar-mass',
      'redox-balancer',
      'significant-figures',
      'projectile-motion',
      'quadratic-solver',
      'vector-calculator',
      'gas-law-calculator',
      'solution-dilution',
      'html-runner',
      'circuit-simulator',
      'c-runner',
      'database-simulator',
    ];

    it.each(expectedTools)('tool "%s" exists in both bn and en directories', (toolId) => {
      const bnTool = path.join(ROOT, 'src', 'pages', 'bn', 'tools', `${toolId}.astro`);
      const enTool = path.join(ROOT, 'src', 'pages', 'en', 'tools', `${toolId}.astro`);
      expect(fs.existsSync(bnTool)).toBe(true);
      expect(fs.existsSync(enTool)).toBe(true);
    });

    it.each(expectedTools)('tool "%s" defines non-empty title and metaDescription', (toolId) => {
      const bnTool = path.join(ROOT, 'src', 'pages', 'bn', 'tools', `${toolId}.astro`);
      const content = fs.readFileSync(bnTool, 'utf8');
      expect(content).toMatch(/title="[^"]+"/);
      expect(content).toMatch(/metaDescription="[^"]+"/);
    });
  });

  describe('Canonical and Verification Safety', () => {
    const headMetaPath = path.join(ROOT, 'src', 'components', 'seo', 'HeadMeta.astro');

    it('HeadMeta supports noindex prop and Bing verification', () => {
      const content = fs.readFileSync(headMetaPath, 'utf8');
      expect(content).toContain('noindex?: boolean');
      expect(content).toContain('PUBLIC_BING_VERIFICATION');
      expect(content).toContain('msvalidate.01');
    });

    it('no development or localhost URLs hardcoded in production metadata templates', () => {
      const headMetaContent = fs.readFileSync(headMetaPath, 'utf8');
      expect(headMetaContent).not.toContain('localhost:');
      expect(headMetaContent).not.toContain('127.0.0.1:');
    });
  });

  describe('Comprehensive 100% Page Indexability Suite (dist output)', () => {
    const distPath = path.join(ROOT, 'dist');

    function getHtmlFiles(dir: string, list: string[] = []): string[] {
      const entries = fs.readdirSync(dir);
      for (const entry of entries) {
        const full = path.join(dir, entry);
        if (fs.statSync(full).isDirectory()) {
          getHtmlFiles(full, list);
        } else if (entry.endsWith('.html')) {
          list.push(full);
        }
      }
      return list;
    }

    it('validates all production HTML pages are indexable without unintended noindex or missing metadata', () => {
      if (!fs.existsSync(distPath)) return; // skip if not built yet

      const files = getHtmlFiles(distPath);
      expect(files.length).toBeGreaterThanOrEqual(206);

      for (const file of files) {
        const rel = path.relative(distPath, file).replace(/\\/g, '/');
        const content = fs.readFileSync(file, 'utf8');

        // Skip verification files
        if (rel.startsWith('google') && rel.endsWith('.html')) {
          continue;
        }

        // index.html redirect and 404.html are the ONLY files allowed to have noindex
        if (rel === 'index.html' || rel === '404.html') {
          expect(content).toContain('noindex');
        } else {
          expect(content, `${rel} has unintended noindex`).not.toContain('noindex');
          expect(content, `${rel} missing index directive`).toContain('index, follow');

          // Must have valid title within search snippet display bounds (<= 60 chars)
          const titleMatch = content.match(/<title>([^<]+)<\/title>/);
          expect(titleMatch, `${rel} missing title`).toBeTruthy();
          const rawTitle = titleMatch![1].trim()
            .replace(/&amp;/g, '&')
            .replace(/&#39;/g, "'")
            .replace(/&quot;/g, '"')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>');
          expect(rawTitle.length, `${rel} title too short (< 5 chars)`).toBeGreaterThan(5);
          expect(rawTitle.length, `${rel} title too long (> 60 chars): "${rawTitle}"`).toBeLessThanOrEqual(60);

          // Must have valid meta description within search engine bounds (50 to 160 chars)
          const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]+)"/);
          expect(descMatch, `${rel} missing meta description`).toBeTruthy();
          const descLength = descMatch![1].trim().length;
          expect(descLength, `${rel} meta description too short (< 50 chars)`).toBeGreaterThanOrEqual(50);
          expect(descLength, `${rel} meta description too long (> 160 chars)`).toBeLessThanOrEqual(160);

          // Must not exceed search engine HTML document weight threshold (1.5MB; Ahrefs warns at 2MB)
          const fileSize = fs.statSync(file).size;
          expect(fileSize, `${rel} HTML file size exceeds 1.5MB (${(fileSize / 1024).toFixed(0)} KB)`).toBeLessThan(1.5 * 1024 * 1024);

          // Must have canonical matching exact URL
          const expectedCanonical = `https://biggan.me/${rel.replace(/index\.html$/, '')}`;
          expect(content, `${rel} canonical mismatch`).toContain(`rel="canonical" href="${expectedCanonical}"`);

          // Must have reciprocal hreflang tags
          expect(content, `${rel} missing hreflang bn`).toContain('hreflang="bn"');
          expect(content, `${rel} missing hreflang en`).toContain('hreflang="en"');
          expect(content, `${rel} missing hreflang x-default`).toContain('hreflang="x-default"');
        }
      }
    });

    it('verifies zero broken internal links to logic-gates or tools/periodic-table in dist HTML', () => {
      if (!fs.existsSync(distPath)) return;
      const files = getHtmlFiles(distPath);
      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        expect(content).not.toContain('href="/bn/tools/logic-gates');
        expect(content).not.toContain('href="/en/tools/logic-gates');
        expect(content).not.toContain('href="/bn/tools/periodic-table');
        expect(content).not.toContain('href="/en/tools/periodic-table');
      }
    });

    it('verifies sitemap-0.xml contains exactly 206 indexable URLs, all with lastmod timestamps', () => {
      const sitemapPath = path.join(distPath, 'sitemap-0.xml');
      if (!fs.existsSync(sitemapPath)) return;

      const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
      const locs = (sitemapContent.match(/<loc>/g) || []).length;
      const lastmods = (sitemapContent.match(/<lastmod>/g) || []).length;

      expect(locs).toBe(206);
      expect(lastmods).toBe(206);
      expect(sitemapContent).not.toContain('<loc>https://biggan.me/</loc>');
      expect(sitemapContent).not.toContain('404');
    });

    it('verifies Google Search Console verification HTML file exists with exact required token', () => {
      const gscFilePath = path.join(ROOT, 'public', 'google9561371fa6c94bfa.html');
      expect(fs.existsSync(gscFilePath)).toBe(true);
      const content = fs.readFileSync(gscFilePath, 'utf8');
      expect(content.trim()).toBe('google-site-verification: google9561371fa6c94bfa.html');
    });
  });
});
