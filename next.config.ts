import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  eslint:{
    ignoreDuringBuilds:true
  }
};

module.exports = {

  // Can be safely removed in newer versions of Next.js
  future: {

    // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
    webpack5: true,   
  },

  webpack(config: { resolve: { fallback: any; }; }) {
    config.resolve.fallback = {

      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,  

      fs: false, // the solution
    };
    
    return config;
  },
};

export default nextConfig;
