import messages from "@intlify/vite-plugin-vue-i18n/messages";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import vuetify from "./plugins/vuetify";
import routes from "./routes";
import store from "./store";
import App from "./App.vue";

const i18n = createI18n({
  locale: "en",
  messages,
});

// createApp(App).use(i18n).mount("#app");

const app = createApp(App);
app.use(i18n);
app.use(routes);
app.use(store);
app.use(vuetify);

app.mount("#app");
