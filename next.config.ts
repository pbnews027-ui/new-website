import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Inline Tailwind CSS in <head> to remove the render-blocking stylesheet (faster FCP/LCP).
    inlineCss: true,
  },
};

export default nextConfig;
