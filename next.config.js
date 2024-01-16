/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    async rewrites() {
      return {
        source: "/register",
        destination: "auth/register",
      };
    },
  },
};

module.exports = nextConfig;
