/**
 * IndexNow submission script for Biggan.me
 * Automatically notifies Bing, Yandex, and other IndexNow-compliant search engines
 * whenever pages are built or updated.
 *
 * Specification: https://www.indexnow.org/documentation
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

const HOST = 'biggan.me';
const KEY = '45abc49cd2cb4afdbc5097162428a2db';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function submitIndexNow() {
  console.log('--- Starting IndexNow Submission for Biggan.me ---');

  // Verify the key file exists in dist
  const distKeyFile = path.resolve('dist', `${KEY}.txt`);
  if (!fs.existsSync(distKeyFile)) {
    console.warn(`[WARN] ${distKeyFile} not found in dist. Ensure build has run.`);
  }

  // Parse sitemap-0.xml to get all URLs
  const sitemapPath = path.resolve('dist', 'sitemap-0.xml');
  let urlList = [];

  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const matches = sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g);
    for (const match of matches) {
      urlList.push(match[1]);
    }
  }

  if (urlList.length === 0) {
    console.log('No URLs found from dist/sitemap-0.xml. Fetching from live origin...');
    try {
      const res = await fetch(`https://${HOST}/sitemap-0.xml`);
      const xml = await res.text();
      const matches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
      for (const match of matches) {
        urlList.push(match[1]);
      }
    } catch (e) {
      console.error('Failed to fetch live sitemap:', e.message);
      return;
    }
  }

  console.log(`Discovered ${urlList.length} canonical URLs for IndexNow submission.`);

  // IndexNow allows up to 10,000 URLs per request
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList,
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`Submitting to ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      console.log(`Response from ${endpoint}: ${response.status} ${response.statusText}`);
      if (response.status === 200 || response.status === 202) {
        console.log(`[SUCCESS] Submitted ${urlList.length} URLs to ${endpoint}`);
      } else {
        const body = await response.text();
        console.warn(`[WARN] Non-200 response (${response.status}):`, body);
      }
    } catch (err) {
      console.error(`[ERROR] Failed to post to ${endpoint}:`, err.message);
    }
  }
}

submitIndexNow();
