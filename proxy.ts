import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This domain previously hosted a WordPress spam blog (Indonesian gambling posts,
// tag/category/page archives). Answer those old URLs with 410 Gone so Google drops
// them faster than a plain 404. Real site routes never match these patterns.
const SPAM_SLUG = /(^\/wp-|xmlrpc|togel|toto|slot|gacor|judi|jitu\d*|bandar|kasino|casino|situs|daftar|maxwin|macau|scatter|mahjong|rtp-)/i;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isWordPressPath = !/^\/[^/]+$/.test(pathname);
  if (isWordPressPath || SPAM_SLUG.test(pathname)) {
    return new NextResponse('410 Gone: this page was permanently removed.', {
      status: 410,
      headers: { 'content-type': 'text/plain; charset=utf-8', 'x-robots-tag': 'noindex' },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Old WordPress archives and system paths (always 410).
    '/tag/:path*',
    '/category/:path*',
    '/page/:path*',
    '/author/:path*',
    '/feed/:path*',
    '/comments/:path*',
    '/wp-admin/:path*',
    '/wp-content/:path*',
    '/wp-includes/:path*',
    '/wp-json/:path*',
    // Root-level post slugs: only 410 when they contain gambling spam keywords.
    '/:slug',
  ],
};
