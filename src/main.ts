import { createApp } from "vue";
import i18n from "./plugins/i18n";
import vuetify from "./plugins/vuetify";
import routes from "./routes";
import store from "./store";
import App from "./App.vue";

const app = createApp(App);
app.use(routes);
app.use(store);
app.use(i18n);
app.use(vuetify);

app.mount("#app");
