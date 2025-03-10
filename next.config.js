const { withPayload } = require("@payloadcms/next/withPayload");
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  images: {
    minimumCacheTTL: 2678400, // 31 days
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = withPayload(nextConfig);
