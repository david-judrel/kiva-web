import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets verification builds use a separate folder (NEXT_DIST_DIR=.next-verify)
  // so they never overwrite the cache of a running `next dev`.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
