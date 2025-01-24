const { withPayload } = require("@payloadcms/next/withPayload");
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  images: {
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
