import { defineConfig } from "vitest/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    css: true,
    setupFiles: [path.resolve(dirname, "vitest.setup.js")],
    include: ["../../packages/**/*.test.jsx"],
  },
});
