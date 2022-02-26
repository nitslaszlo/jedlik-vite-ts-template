import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import App from "./App.vue";
import BootstrapVue3 from "bootstrap-vue-3";
import { createApp } from "vue";
import { createPinia } from "pinia";
import routes from "./routes";

// Optional, since every component import their Bootstrap funcionality
// the following line is not necessary:
// import "bootstrap";

const app = createApp(App);
app.use(createPinia());
app.use(routes);
app.use(BootstrapVue3);
app.mount("#app");
