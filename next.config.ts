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
const exportBasePath = normalizeBasePath(
  process.env.NEXT_PUBLIC_BASE_PATH ?? inferredBasePath,
);
const hasBasePath = exportBasePath.length > 0;
const isExportMode = process.env.NEXT_EXPORT === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

if (isExportMode) {
  nextConfig.output = "export";
  nextConfig.basePath = exportBasePath;
  nextConfig.assetPrefix = hasBasePath ? exportBasePath : undefined;
  nextConfig.trailingSlash = true;
}

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
