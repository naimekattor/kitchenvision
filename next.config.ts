// next.config.ts
import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";
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
    domains: ["i.ibb.co", "api.contekuechen.de", "contekuechen.de"],
  },
  // i18n: {
  //   locales: ["de", "en"], // German (default), English
  //   defaultLocale: "de", // Homepage renders in German first
  // },
};

export default withBundleAnalyzer(nextConfig);
