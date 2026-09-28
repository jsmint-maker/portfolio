import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables React strict mode for better performance and error spotting
  reactStrictMode: true,

  // Optimize package imports to eliminate dead code and heavy barrel file loading
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;