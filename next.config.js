/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  serverRuntimeConfig: {
    async rewrites() {
      return [
        {
          source: "/register",
          destination: "/auth/register",
        },
        {
          source: "/login",
          destination: "/auth/login",
        },
      ];
    },
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     appDir: true,
//   },
// };

// module.exports = nextConfig;
