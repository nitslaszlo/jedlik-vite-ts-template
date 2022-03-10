import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "./plugins/i18n";
import routes from "./routes";
import { Quasar } from "quasar";
import quasarLang from "quasar/lang/hu";
import quasarIconSet from "quasar/icon-set/mdi-v6";

// Import icon libraries; you can choose different ones!
// See: https://quasar.dev/start/vite-plugin#using-quasar
import "@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css";
import "@quasar/extras/mdi-v6/mdi-v6.css";

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import "quasar/src/css/index.sass";
// import "quasar/dist/quasar.css";

import "vue-global-api/ref";
import "vue-global-api/reactive";
import "vue-global-api/computed";
import "vue-global-api/watch";
import "vue-global-api/watchEffect";
import "vue-global-api/onMounted";

const app = createApp(App);

app.use(i18n);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  iconSet: quasarIconSet,
  lang: quasarLang,
  /*
    config: {
      brand: {
        // primary: '#e46262',
        // ... or all other brand colors
      },
      notify: {...}, // default set of options for Notify Quasar plugin
      loading: {...}, // default set of options for Loading Quasar plugin
      loadingBar: { ... }, // settings for LoadingBar Quasar plugin
      // ..and many more (check Installation card on each Quasar component/directive/plugin)
    }
    */
});
app.use(createPinia());
app.use(routes);

app.mount("#app");
