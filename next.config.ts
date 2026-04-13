import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

function normalizeBasePath(value?: string) {
  if (!value) {
    return "";
  }

  const trimmed = value.replace(/^\/+/, "").replace(/\/+$/, "");
  return trimmed ? `/${trimmed}` : "";
}

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const inferredBasePath = repoName ? `/${repoName}` : "";

const basePath =
  normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH) || inferredBasePath;

const hasBasePath = basePath.length > 0;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix: hasBasePath ? basePath : undefined,
  trailingSlash: true,
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
