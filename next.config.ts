import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Required for S3 static hosting

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
    unoptimized: true, // ✅ IMPORTANT for S3 (disables Next.js image optimization)
  },
};

export default nextConfig;
