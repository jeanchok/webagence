/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    loader: "",
    path: "",
  },
  contentSecurityPolicy:
    "default-src 'none'; script-src 'self'; style-src 'nonce-{style-nonce}'; connect-src 'self'; img-src 'self'; font-src 'self'; base-uri 'self'; child-src 'self';",
};

module.exports = nextConfig;
