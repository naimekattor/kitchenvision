// next.config.ts
import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";
import nextI18NextConfig from "./next-i18next.config";
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "i.ibb.co",
  //     },
  //   ],
  // },
  images: {
    domains: ["i.ibb.co", "api.contekuechen.de"],
  },
  ...nextI18NextConfig,
};

export default withBundleAnalyzer(nextConfig);
