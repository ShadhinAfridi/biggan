import * as fs from 'node:fs';
import * as path from 'node:path';

const distPath = path.resolve('dist');
const siteUrl = 'https://biggan.me';

function getHtmlFiles(dir, list = []) {
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

console.log('--- COMPREHENSIVE PRODUCTION SEO & SITEMAP VALIDATOR ---');

// 1. Verify Sitemaps
const sitemapIndexPath = path.join(distPath, 'sitemap-index.xml');
const sitemap0Path = path.join(distPath, 'sitemap-0.xml');

if (!fs.existsSync(sitemapIndexPath)) {
  console.error('[FATAL] dist/sitemap-index.xml is missing!');
  process.exit(1);
}
if (!fs.existsSync(sitemap0Path)) {
  console.error('[FATAL] dist/sitemap-0.xml is missing!');
  process.exit(1);
}

const sitemapIndexContent = fs.readFileSync(sitemapIndexPath, 'utf8');
if (!sitemapIndexContent.includes('<sitemapindex') || !sitemapIndexContent.includes('sitemap-0.xml')) {
  console.error('[FATAL] sitemap-index.xml is malformed or does not reference sitemap-0.xml!');
  process.exit(1);
}

const sitemap0Content = fs.readFileSync(sitemap0Path, 'utf8');
if (!sitemap0Content.includes('<urlset') || !sitemap0Content.includes('http://www.sitemaps.org/schemas/sitemap/0.9')) {
  console.error('[FATAL] sitemap-0.xml is malformed or lacks standard namespace!');
  process.exit(1);
}

const sitemapUrls = new Set();
const sitemapMatches = sitemap0Content.matchAll(/<loc>([^<]+)<\/loc>/g);
for (const match of sitemapMatches) {
  sitemapUrls.add(match[1]);
}
console.log(`Verified sitemaps: sitemap-0.xml contains ${sitemapUrls.size} canonical URLs.`);

// 2. Scan HTML pages
const files = getHtmlFiles(distPath);
console.log('Total HTML files scanned:', files.length);

let brokenLinks = 0;
let schemaErrors = 0;
let canonicalErrors = 0;
let sitemapErrors = 0;

for (const file of files) {
  const rel = path.relative(distPath, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');

  const is404 = rel.includes('404');
  const isStaticDoc = rel.endsWith('.html') && !rel.endsWith('index.html');

  // Verify JSON-LD schemas
  const jsonLdMatches = content.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
  for (const match of jsonLdMatches) {
    try {
      JSON.parse(match[1]);
    } catch (e) {
      console.error(`Invalid JSON-LD in ${rel}: ${e.message}`);
      schemaErrors++;
    }
  }

  // Find all internal links
  const hrefMatches = content.matchAll(/href="(\/[^"#?]*)/g);
  for (const hm of hrefMatches) {
    let target = hm[1];
    if (target.startsWith('//') || target.startsWith('/_astro') || target.includes('.')) continue;
    if (!target.endsWith('/')) target += '/';

    const localTarget = path.join(distPath, target.replace(/^\//, ''), 'index.html');
    if (!fs.existsSync(localTarget)) {
      console.warn(`Broken internal link in ${rel} -> ${target}`);
      brokenLinks++;
    }
  }

  // Canonical tag check
  if (!isStaticDoc) {
    let expectedPath = '/' + rel.replace(/index\.html$/, '');
    if (!expectedPath.endsWith('/')) expectedPath += '/';
    const expectedUrl = `${siteUrl}${expectedPath}`;

    const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
    if (!canonicalMatch) {
      console.error(`Missing canonical tag in ${rel}`);
      canonicalErrors++;
    } else if (canonicalMatch[1] !== expectedUrl) {
      console.error(`Canonical mismatch in ${rel}: expected ${expectedUrl}, found ${canonicalMatch[1]}`);
      canonicalErrors++;
    }

    // Verify indexable pages exist in sitemap
    const isNoindex = content.includes('content="noindex');
    if (!is404 && !isNoindex && !sitemapUrls.has(expectedUrl)) {
      console.error(`Missing from sitemap-0.xml: ${expectedUrl}`);
      sitemapErrors++;
    }
  }
}

console.log('Schema errors:', schemaErrors);
console.log('Broken internal links:', brokenLinks);
console.log('Canonical errors:', canonicalErrors);
console.log('Sitemap missing errors:', sitemapErrors);

if (brokenLinks > 0 || schemaErrors > 0 || canonicalErrors > 0 || sitemapErrors > 0) {
  console.error('[FAILED] SEO validation failed with errors!');
  process.exit(1);
} else {
  console.log('[SUCCESS] 100% of canonical routes are valid, crawlable, and present in sitemap!');
}
