const { cp, rm } = require("node:fs/promises");
const path = require("node:path");

async function main() {
  const src = path.resolve(".next/output/export");
  const dest = path.resolve("out");

  await rm(dest, { recursive: true, force: true });
  await cp(src, dest, { recursive: true });
}

main().catch((error) => {
  console.error("Failed to prepare static export:", error);
  process.exit(1);
});
