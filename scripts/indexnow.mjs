#!/usr/bin/env node
// Submit URLs to IndexNow (Bing, Yandex and other participating engines) after a deploy.
//
// Usage:
//   npm run indexnow                      -> submits every URL in the live sitemap
//   npm run indexnow -- /blog/some-slug   -> submits only the given paths
//
// The key file public/<KEY>.txt must already be live on the site.

const SITE = 'https://www.bolaseo.com';
const KEY = 'db076615744167951a0c74010c5be053';

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  const keyCheck = await fetch(`${SITE}/${KEY}.txt`);
  if (!keyCheck.ok || (await keyCheck.text()).trim() !== KEY) {
    throw new Error(`Key file ${SITE}/${KEY}.txt is not live yet. Deploy first.`);
  }

  const args = process.argv.slice(2);
  const urlList = args.length ? args.map((p) => (p.startsWith('http') ? p : `${SITE}${p}`)) : await sitemapUrls();

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: new URL(SITE).host,
      key: KEY,
      keyLocation: `${SITE}/${KEY}.txt`,
      urlList,
    }),
  });

  // 200 = submitted, 202 = accepted (key validation pending).
  console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URL(s)`);
  if (res.status >= 400) {
    console.log(await res.text());
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('IndexNow failed:', err.message);
  process.exit(2);
});
