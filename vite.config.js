import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import EnvironmentPlugin from "vite-plugin-environment";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [EnvironmentPlugin("all", { prefix: "" }), vue()],
  build: {
    assetsInlineLimit: 0,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
