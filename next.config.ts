import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  eslint:{
    ignoreDuringBuilds:true
  }
};

module.exports={
  webpack5: true,
  webpack: (config: { resolve: { fallback: { fs: boolean; }; }; }) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}

export default nextConfig;
