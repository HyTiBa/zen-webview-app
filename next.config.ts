import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack:(config,{isServer})=>{
    if (!isServer) {
      config.resolve = {
          ...config.resolve,
          fallback: {
              fs: false,
          },
      };
  }
  return config;
  },
  eslint:{
    ignoreDuringBuilds:true
  },
};


export default nextConfig;
