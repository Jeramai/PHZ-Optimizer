import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.pixelheroes.tips'
      }
    ]
  }
};

export default nextConfig;
