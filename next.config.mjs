import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // ADD THIS PART ↓↓↓
  webpack(config) {
    // Disable webpack caching to prevent oversized .next/cache files on Cloudflare Pages
    config.cache = false;
    return config;
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
