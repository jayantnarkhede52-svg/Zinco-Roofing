/**
 * Post-build script: Injects page-specific SEO meta tags into each prerendered index.html.
 * 
 * This version imports data from src/data/siteData.js to ensure consistency
 * between the React application and the build process.
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { siteData } from '../src/data/siteData.js';

const DIST = join(import.meta.dirname, '..', 'dist');
const SITE_URL = siteData.settings.siteUrl;

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

let updated = 0;
let skipped = 0;

// Convert the siteData.pages object into an array for easier iteration
const pages = Object.entries(siteData.pages).map(([route, data]) => ({
  route,
  ...data
}));

for (const page of pages) {
  const routePath = page.route === '/' ? '' : page.route;
  const htmlPath = join(DIST, routePath, 'index.html');

  if (!existsSync(htmlPath)) {
    // console.log(`⚠ SKIP (missing): ${htmlPath}`);
    skipped++;
    continue;
  }

  let html = readFileSync(htmlPath, 'utf-8');
  const titleEscaped = escapeHtml(page.title);
  const descEscaped = escapeHtml(page.description);
  const kwEscaped = escapeHtml(page.keywords);
  const canonicalUrl = `${SITE_URL}${page.route === '/' ? '/' : page.route}`;

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${titleEscaped}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${descEscaped}">`
  );

  // Replace meta keywords
  html = html.replace(
    /<meta name="keywords" content="[^"]*">/,
    `<meta name="keywords" content="${kwEscaped}">`
  );

  // Replace canonical URL
  html = html.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${canonicalUrl}">`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${titleEscaped}">`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${descEscaped}">`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*">/,
    `<meta property="og:url" content="${canonicalUrl}">`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${titleEscaped}">`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${descEscaped}">`
  );

  writeFileSync(htmlPath, html);
  // console.log(`✓ ${page.route}`);
  updated++;
}

console.log(`\nSEO Injection Complete: ${updated} pages updated, ${skipped} skipped.`);
