import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Disable image optimization for Lambda
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
