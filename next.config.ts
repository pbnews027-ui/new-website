import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Inline Tailwind CSS in <head> to remove the render-blocking stylesheet (faster FCP/LCP).
    inlineCss: true,
  },
  // Permanent (308) redirects for renamed article URLs, so old links and rankings carry over.
  redirects() {
    return [
      // Canonical host is www: send every bolaseo.com request to www.bolaseo.com.
      {
        source: "/:path*",
        has: [{ type: "host", value: "bolaseo.com" }],
        destination: "https://www.bolaseo.com/:path*",
        permanent: true,
      },
      {
        source: "/blog/teen-patti-master-apk-download-2026",
        destination: "/blog/teen-patti-master-download",
        permanent: true,
      },
      {
        source: "/blog/dragon-vs-tiger-rules-tips",
        destination: "/blog/teen-patti-master-dragon-vs-tiger",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
