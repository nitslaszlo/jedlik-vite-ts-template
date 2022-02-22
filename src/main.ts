import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "./plugins/i18n";
import routes from "./routes";
import store from "./store";
import vuetify from "./plugins/vuetify";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(routes);
app.use(store);
app.use(i18n);
app.use(vuetify);

app.mount("#app");
