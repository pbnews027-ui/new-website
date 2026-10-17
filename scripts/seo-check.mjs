#!/usr/bin/env node
// SEO health check: crawls every URL in the sitemap and reports problems that
// would otherwise show up later in Google Search Console.
//
// Usage:
//   npm run seo:check                         -> checks the live site
//   npm run seo:check -- http://localhost:3000 -> checks a local server (dev or start)
//
// Exit code 1 if any ERROR is found, so it can be used in CI.

const LIVE_ORIGIN = 'https://www.bolaseo.com';
const BASE = (process.argv[2] || LIVE_ORIGIN).replace(/\/$/, '');

const TITLE_MAX = 65;
const DESC_MIN = 70;
const DESC_MAX = 165;

const issues = [];
const report = (level, url, msg) => issues.push({ level, url, msg });

// Sitemap/canonical URLs always use the live origin; map them onto BASE when testing locally.
const toBase = (url) => url.replace(LIVE_ORIGIN, BASE);
const norm = (url) => url.replace(/\/$/, '');

async function get(url, { redirect = 'follow' } = {}) {
  const res = await fetch(url, { redirect, headers: { 'user-agent': 'bolaseo-seo-check/1.0' } });
  const body = redirect === 'manual' ? '' : await res.text();
  return { status: res.status, body, location: res.headers.get('location') };
}

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

function attr(tag, name) {
  const m = tag.match(new RegExp(`${name}="([^"]*)"`, 'i'));
  return m ? decode(m[1]) : null;
}

function analyse(url, html, seen) {
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1];
  const metaTags = html.match(/<meta[^>]+>/gi) || [];
  const linkTags = html.match(/<link[^>]+>/gi) || [];
  const desc = metaTags.map((t) => (attr(t, 'name') === 'description' ? attr(t, 'content') : null)).find(Boolean);
  const robots = metaTags.map((t) => (attr(t, 'name') === 'robots' ? attr(t, 'content') : null)).find(Boolean);
  const ogImage = metaTags.map((t) => (attr(t, 'property') === 'og:image' ? attr(t, 'content') : null)).find(Boolean);
  const canonical = linkTags.map((t) => (attr(t, 'rel') === 'canonical' ? attr(t, 'href') : null)).find(Boolean);
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;

  if (!title) report('ERROR', url, 'Missing <title>');
  else {
    const t = decode(title);
    if (t.length > TITLE_MAX) report('WARN', url, `Title is ${t.length} chars (> ${TITLE_MAX}): "${t}"`);
    (seen.titles[t] ||= []).push(url);
  }

  if (!desc) report('ERROR', url, 'Missing meta description');
  else {
    if (desc.length < DESC_MIN || desc.length > DESC_MAX)
      report('WARN', url, `Meta description is ${desc.length} chars (aim ${DESC_MIN}-${DESC_MAX})`);
    (seen.descs[desc] ||= []).push(url);
  }

  if (!canonical) report('ERROR', url, 'Missing canonical link');
  else if (norm(canonical) !== norm(url.replace(BASE, LIVE_ORIGIN)))
    report('ERROR', url, `Canonical points elsewhere: ${canonical}`);

  if (robots && /noindex/i.test(robots)) report('ERROR', url, `Page is noindex: "${robots}"`);
  if (h1Count === 0) report('ERROR', url, 'No <h1> on page');
  if (h1Count > 1) report('WARN', url, `${h1Count} <h1> tags on page (use one)`);
  if (!ogImage) report('WARN', url, 'Missing og:image (poor link previews when shared)');

  for (const img of html.match(/<img[^>]*>/gi) || []) {
    const alt = attr(img, 'alt');
    if (alt === null || alt.trim() === '') report('WARN', url, `Image without alt text: ${attr(img, 'src') || img.slice(0, 80)}`);
    const src = attr(img, 'src');
    if (src && src.startsWith('/')) seen.assets.add(src);
  }

  for (const block of html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi) || []) {
    const json = block.replace(/^<script[^>]*>/i, '').replace(/<\/script>$/i, '');
    try {
      JSON.parse(json);
    } catch {
      report('ERROR', url, 'Invalid JSON-LD structured data block');
    }
  }

  for (const a of html.match(/<a[^>]+href="[^"]*"[^>]*>/gi) || []) {
    const href = attr(a, 'href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
    if (href.startsWith('/')) seen.links.add(href.split('#')[0] || '/');
    else if (href.startsWith(LIVE_ORIGIN)) seen.links.add(href.replace(LIVE_ORIGIN, '').split('#')[0] || '/');
  }
}

async function main() {
  console.log(`\nSEO check for ${BASE}\n`);

  const robots = await get(`${BASE}/robots.txt`);
  if (robots.status !== 200) report('ERROR', '/robots.txt', `robots.txt returned ${robots.status}`);
  else {
    if (/^\s*disallow:\s*\/\s*$/im.test(robots.body)) report('ERROR', '/robots.txt', 'robots.txt blocks the whole site');
    if (!robots.body.includes(`${LIVE_ORIGIN}/sitemap.xml`)) report('WARN', '/robots.txt', 'Sitemap line missing or not on www domain');
  }

  const sitemap = await get(`${BASE}/sitemap.xml`);
  if (sitemap.status !== 200) {
    report('ERROR', '/sitemap.xml', `sitemap.xml returned ${sitemap.status}`);
    return finish(0);
  }
  const locs = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  for (const loc of locs) if (!loc.startsWith(LIVE_ORIGIN)) report('ERROR', loc, `Sitemap URL not on ${LIVE_ORIGIN}`);

  const seen = { titles: {}, descs: {}, links: new Set(), assets: new Set() };
  const sitemapPaths = new Set(locs.map((l) => norm(l.replace(LIVE_ORIGIN, '')) || '/'));

  for (const loc of locs) {
    const url = toBase(loc);
    const res = await get(url, { redirect: 'manual' });
    if (res.status >= 300 && res.status < 400) {
      report('ERROR', url, `Sitemap URL redirects (${res.status}) to ${res.location}`);
      continue;
    }
    if (res.status !== 200) {
      report('ERROR', url, `Sitemap URL returned ${res.status}`);
      continue;
    }
    const page = await get(url);
    analyse(url, page.body, seen);
    process.stdout.write('.');
  }
  console.log('\n');

  for (const [t, urls] of Object.entries(seen.titles))
    if (urls.length > 1) report('ERROR', urls.join(', '), `Duplicate title: "${t}"`);
  for (const [d, urls] of Object.entries(seen.descs))
    if (urls.length > 1) report('WARN', urls.join(', '), `Duplicate meta description: "${d.slice(0, 60)}..."`);

  // Internal links: must resolve, and should not point to redirects.
  for (const path of seen.links) {
    if (path.startsWith('/_next/')) continue;
    const res = await get(`${BASE}${path}`, { redirect: 'manual' });
    if (res.status >= 400) report('ERROR', path, `Broken internal link (${res.status})`);
    else if (res.status >= 300) report('WARN', path, `Internal link goes through a redirect to ${res.location}`);
    else if (!sitemapPaths.has(norm(path) || '/') && !/\.(webp|png|jpe?g|svg|xml|txt)$/i.test(path))
      report('WARN', path, 'Linked page is not in the sitemap');
  }

  for (const src of seen.assets) {
    if (src.startsWith('/_next/image')) continue;
    const res = await get(`${BASE}${src}`, { redirect: 'manual' });
    if (res.status !== 200) report('ERROR', src, `Image returned ${res.status}`);
  }

  finish(locs.length);
}

function finish(pageCount) {
  const errors = issues.filter((i) => i.level === 'ERROR');
  const warns = issues.filter((i) => i.level === 'WARN');
  for (const i of [...errors, ...warns]) console.log(`${i.level === 'ERROR' ? '✖ ERROR' : '⚠ WARN '}  ${i.url}\n          ${i.msg}`);
  console.log(`\nChecked ${pageCount} sitemap URLs: ${errors.length} error(s), ${warns.length} warning(s).`);
  if (!errors.length && !warns.length) console.log('✔ All checks passed.');
  process.exit(errors.length ? 1 : 0);
}

main().catch((err) => {
  console.error('SEO check failed to run:', err.message);
  process.exit(2);
});
