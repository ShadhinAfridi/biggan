import * as fs from 'node:fs';
import * as path from 'node:path';

const distPath = path.resolve('dist');

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

const files = getHtmlFiles(distPath);
console.log('Total HTML files scanned:', files.length);

let brokenLinks = 0;
let schemaErrors = 0;

for (const file of files) {
  const rel = path.relative(distPath, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');

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
}

console.log('Schema errors:', schemaErrors);
console.log('Broken internal links:', brokenLinks);
