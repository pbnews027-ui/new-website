import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Inline Tailwind CSS in <head> to remove the render-blocking stylesheet (faster FCP/LCP).
    inlineCss: true,
  },
  // Permanent (308) redirects for renamed article URLs, so old links and rankings carry over.
  redirects() {
    return [
      {
        source: "/blog/dragon-vs-tiger-rules-tips",
        destination: "/blog/teen-patti-master-dragon-vs-tiger",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
