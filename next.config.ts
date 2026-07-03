import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/PortFolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
