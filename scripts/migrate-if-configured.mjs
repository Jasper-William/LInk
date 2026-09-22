import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

if (!process.env.DATABASE_URL) {
  console.log("[Payload] DATABASE_URL 未配置，跳过数据库迁移；构建将使用静态备用内容。");
  process.exit(0);
}

const payloadCLI = fileURLToPath(new URL("../node_modules/payload/bin.js", import.meta.url));
const result = spawnSync(process.execPath, [payloadCLI, "migrate"], {
  env: process.env,
  stdio: "inherit",
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
