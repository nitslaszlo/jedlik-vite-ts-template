import vueI18n from "@intlify/vite-plugin-vue-i18n";
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
    vueI18n({
      include: resolve(__dirname, "src/locales/**"),
      compositionOnly: true,
      runtimeOnly: false,
    }),
    eslintPlugin(),
  ],
  define: {
    "process.env": {},
  },
  build: {
    sourcemap: true,
  },
  server: { port: 8080, open: true },
});
