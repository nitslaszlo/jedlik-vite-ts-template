import "@mdi/font/css/materialdesignicons.css";
import "vuetify/lib/styles/main.sass";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#41b883",
          background: "#ffffff",
          error: "#d63031",
          info: "#0984e3",
          secondary: "#fdcb6e",
          success: "#00cec9",
          surface: "#ffffff",
          warning: "#2d3436",
          mycolor1: "#777777",
        },
        dark: false,
        variables: {},
      },
    },
  },
  display: {
    mobileBreakpoint: "md",
    thresholds: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1264,
      xl: 1400,
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

export default vuetify;

// import "@mdi/font/css/materialdesignicons.css";
// import "vuetify/styles";

// import { createVuetify } from "vuetify";

// export default createVuetify({
//   theme: {
//     defaultTheme: "light",
//   },
//   display: {
//     mobileBreakpoint: "md",
//     thresholds: {
//       xs: 0,
//       sm: 600,
//       md: 960,
//       lg: 1264,
//       xl: 1400,
//     },
//   },
// });
