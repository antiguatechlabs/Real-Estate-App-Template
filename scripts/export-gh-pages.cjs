const { access, rename, rm } = require("node:fs/promises");
const { spawnSync } = require("node:child_process");
const path = require("node:path");

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const repoApiDir = path.resolve("app/api");
  const tempApiDir = path.resolve("app-api-export-disabled");
  const marketingCatchAllDir = path.resolve("app/(marketing)/[locale]/[...rest]");
  const marketingCatchAllTempDir = path.resolve(
    "marketing-locale-catchall-disabled",
  );

  const hasApi = await exists(repoApiDir);
  const hasTemp = await exists(tempApiDir);

  if (!hasApi && hasTemp) {
    await rename(tempApiDir, repoApiDir);
  }

  const hasCatchAll = await exists(marketingCatchAllDir);
  const hasCatchAllTemp = await exists(marketingCatchAllTempDir);

  if (!hasCatchAll && hasCatchAllTemp) {
    await rename(marketingCatchAllTempDir, marketingCatchAllDir);
  }

  let renamedApi = false;
  let renamedCatchAll = false;
  if (await exists(repoApiDir)) {
    await rename(repoApiDir, tempApiDir);
    renamedApi = true;
  }
  if (await exists(marketingCatchAllDir)) {
    await rename(marketingCatchAllDir, marketingCatchAllTempDir);
    renamedCatchAll = true;
  }

  const outDir = path.resolve("out");
  await rm(outDir, { recursive: true, force: true });

  try {
    const result = spawnSync("npm", ["run", "build"], {
      stdio: "inherit",
      env: { ...process.env, NEXT_EXPORT: "1" },
    });

    if (result.error) {
      throw result.error;
    }

    if (result.status !== 0) {
      throw new Error(`npm run build exited with code ${result.status}`);
    }
  } finally {
    if (renamedCatchAll && (await exists(marketingCatchAllTempDir))) {
      await rename(marketingCatchAllTempDir, marketingCatchAllDir);
    }
    if (renamedApi && (await exists(tempApiDir))) {
      await rename(tempApiDir, repoApiDir);
    }
  }

  if (!(await exists(outDir))) {
    throw new Error("Expected Next.js export to produce an out/ directory.");
  }
}

main().catch((error) => {
  console.error("Export failed:", error);
  process.exit(1);
});
