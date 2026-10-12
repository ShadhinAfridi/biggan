import * as fs from 'node:fs';
import * as path from 'node:path';
import { execSync } from 'node:child_process';

const distDir = path.resolve('dist');
const siteUrl = 'https://biggan.me';

function getHtmlFiles(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
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

async function audit() {
  console.log('=== FULL-SITE SEO & ROUTE AUDIT ===');
  
  const htmlFiles = getHtmlFiles(distDir);
  console.log(`Total HTML files in dist: ${htmlFiles.length}`);
  
  // Read sitemap-index.xml and sitemap-0.xml
  const sitemapIndexPath = path.join(distDir, 'sitemap-index.xml');
  const sitemap0Path = path.join(distDir, 'sitemap-0.xml');
  
  const hasIndex = fs.existsSync(sitemapIndexPath);
  const has0 = fs.existsSync(sitemap0Path);
  console.log(`sitemap-index.xml exists: ${hasIndex}`);
  console.log(`sitemap-0.xml exists: ${has0}`);
  
  const sitemapUrls = new Set();
  if (has0) {
    const s0Content = fs.readFileSync(sitemap0Path, 'utf8');
    const matches = s0Content.matchAll(/<loc>([^<]+)<\/loc>/g);
    for (const m of matches) {
      sitemapUrls.add(m[1]);
    }
  }
  console.log(`Total URLs in sitemap-0.xml: ${sitemapUrls.size}`);

  // Build route inventory
  const inventory = [];
  const linkGraph = new Map(); // target -> count of incoming links
  
  // First pass: extract all canonical URLs, noindex, jsonLd, and collect all links
  for (const file of htmlFiles) {
    const rel = path.relative(distDir, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');
    
    // Calculate expected URL
    let routePath = '/' + rel.replace(/index\.html$/, '');
    if (routePath === '/404.html') routePath = '/404';
    if (!routePath.endsWith('/') && !routePath.includes('.')) routePath += '/';
    const pageUrl = `${siteUrl}${routePath}`;
    
    // Extract Canonical
    const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
    const canonicalUrl = canonicalMatch ? canonicalMatch[1] : null;
    
    // Extract Robots Meta
    const robotsMatch = content.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i);
    const robotsContent = robotsMatch ? robotsMatch[1] : 'default';
    const isNoindex = robotsContent.includes('noindex');
    
    // Extract Hreflang
    const hreflangMatches = [...content.matchAll(/<link\s+rel=["']alternate["']\s+hreflang=["']([^"']+)["']\s+href=["']([^"']+)["']/gi)];
    const hreflangs = hreflangMatches.map(m => ({ lang: m[1], href: m[2] }));
    
    // Extract JSON-LD schemas
    const jsonLdScripts = [...content.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
    let jsonLdValid = true;
    const schemaTypes = [];
    for (const s of jsonLdScripts) {
      try {
        const parsed = JSON.parse(s[1]);
        if (Array.isArray(parsed)) {
          parsed.forEach(p => schemaTypes.push(p['@type']));
        } else {
          schemaTypes.push(parsed['@type']);
        }
      } catch (e) {
        jsonLdValid = false;
      }
    }
    
    // Extract internal links
    const linkMatches = [...content.matchAll(/href=["'](\/[^"#?]*)/g)];
    for (const lm of linkMatches) {
      let target = lm[1];
      if (target.startsWith('//') || target.startsWith('/_astro') || target.includes('.')) continue;
      if (!target.endsWith('/')) target += '/';
      const fullTarget = `${siteUrl}${target}`;
      linkGraph.set(fullTarget, (linkGraph.get(fullTarget) || 0) + 1);
    }
    
    inventory.push({
      relPath: rel,
      routePath,
      pageUrl,
      canonicalUrl,
      isNoindex,
      robotsContent,
      hreflangs,
      jsonLdValid,
      schemaTypes,
      inSitemap: sitemapUrls.has(pageUrl)
    });
  }
  
  // Second pass: evaluate link status
  let orphanCount = 0;
  let missingCanonical = 0;
  let mismatchedCanonical = 0;
  let sitemapMismatchCount = 0;
  
  const reportRows = [];
  
  for (const item of inventory) {
    const is404 = item.routePath.includes('404');
    const incomingLinks = linkGraph.get(item.pageUrl) || 0;
    
    let status = 'BUILD_VALIDATED';
    if (item.inSitemap) status = 'SITEMAP_INCLUDED';
    if (incomingLinks > 0) status += ';INTERNALLY_LINKED';
    
    if (is404) {
      status = 'EXCLUDED_INTENTIONALLY';
    } else {
      if (incomingLinks === 0 && item.routePath !== '/bn/' && item.routePath !== '/en/') {
        orphanCount++;
      }
      if (!item.canonicalUrl) {
        missingCanonical++;
      } else if (item.canonicalUrl !== item.pageUrl) {
        mismatchedCanonical++;
      }
      if (!item.isNoindex && !item.inSitemap) {
        sitemapMismatchCount++;
      }
    }
    
    reportRows.push({
      route: item.routePath,
      url: item.pageUrl,
      canonical: item.canonicalUrl,
      canonicalMatches: item.canonicalUrl === item.pageUrl,
      inSitemap: item.inSitemap,
      incomingLinks,
      noindex: item.isNoindex,
      jsonLdValid: item.jsonLdValid,
      schemas: item.schemaTypes.join(','),
      status
    });
  }
  
  console.log('\n--- AUDIT SUMMARY ---');
  console.log(`Total Inventory Routes: ${inventory.length}`);
  console.log(`Canonical matched exact route: ${inventory.length - missingCanonical - mismatchedCanonical}`);
  console.log(`Missing canonicals: ${missingCanonical}`);
  console.log(`Mismatched canonicals: ${mismatchedCanonical}`);
  console.log(`Orphan pages (0 incoming links, excluding roots): ${orphanCount}`);
  console.log(`Eligible indexable pages missing from sitemap: ${sitemapMismatchCount}`);
  
  // Write full JSON report
  const jsonReportPath = path.resolve('scripts', 'audit-route-inventory.json');
  fs.writeFileSync(jsonReportPath, JSON.stringify(reportRows, null, 2));
  console.log(`Detailed audit report written to: ${jsonReportPath}`);
  
  // Write CSV summary
  const csvReportPath = path.resolve('scripts', 'audit-route-inventory.csv');
  const csvHeader = 'Route,URL,Canonical,CanonicalMatch,InSitemap,IncomingLinks,Noindex,JsonLdValid,Status\n';
  const csvBody = reportRows.map(r => 
    `"${r.route}","${r.url}","${r.canonical}",${r.canonicalMatches},${r.inSitemap},${r.incomingLinks},${r.noindex},${r.jsonLdValid},"${r.status}"`
  ).join('\n');
  fs.writeFileSync(csvReportPath, csvHeader + csvBody);
  console.log(`CSV report written to: ${csvReportPath}`);
}

audit();
