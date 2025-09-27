// next.config.ts
import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "api.contekuechen.de",
        pathname: "/images/blogs/**", // match your blog images
      },
      {
        protocol: "https",
        hostname: "contekuechen.de",
        pathname: "/images/**", // match images on main domain
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
