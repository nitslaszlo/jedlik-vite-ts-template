import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import vuetify from "@vuetify/vite-plugin";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
    eslintPlugin(),
  ],
  define: {
    "process.env": {},
  },
  build: {
    sourcemap: false,
  },
  server: { port: 8080 },
});
