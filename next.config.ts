import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pino", "pino-pretty"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t4.ftcdn.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;
