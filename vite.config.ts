/// <reference types="vitest" />

import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar({
      autoImportComponentCase: "pascal",
      sassVariables: "src/quasar-variables.sass",
    }),
  ],
  define: {
    "process.env": {},
  },
  build: {
    sourcemap: true,
  },
  test: {
    environment: "jsdom",
  },
  css: {},
});
