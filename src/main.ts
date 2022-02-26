import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import routes from "./routes";

const app = createApp(App);
app.use(createPinia());
app.use(routes);

app.mount("#app");
