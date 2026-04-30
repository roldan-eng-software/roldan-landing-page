import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactCompiler: true,
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: "/roldan-page",
        assetPrefix: "/roldan-page/",
        images: {
          unoptimized: true,
        },
      }
    : {}),
};

export default nextConfig;
