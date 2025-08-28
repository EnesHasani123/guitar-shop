import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "cdn.worldvectorlogo.com",
      },
      { protocol: "https", hostname: "1000logos.net" },
      { protocol: "https", hostname: "getlogo.net" },
      {
        protocol: "https",
        hostname: "www.freepnglogos.com",
      },
      { protocol: "https", hostname: "poldermeester.nl" },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.eastgatemusic.com.au",
      },
    ],
  },
};

export default nextConfig;
