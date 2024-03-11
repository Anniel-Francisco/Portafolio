import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dotenv from "dotenv";
dotenv.config();
const isDev = process.env.NODE_ENV === "development";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    server: {
      port: isDev ? 3000 : 8080,
    },
    build: {
      chunkFileNames: isDev ? "[name].js" : "assets/[name].js",
      assetFileNames: isDev ? "[name].[ext]" : "assets/[name].[ext]",
      minify: !isDev,
    },
  },
});
