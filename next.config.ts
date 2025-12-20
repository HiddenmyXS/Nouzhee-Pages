import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: 'out',         
  images: {
    unoptimized: true,       
  },
  basePath: '/Nouzhee', 
  assetPrefix: '/Nouzhee',

};

export default nextConfig;
