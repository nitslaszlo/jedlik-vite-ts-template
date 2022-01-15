import { createI18n } from "vue-i18n";

import en from "../locales/en.json";
import hu from "../locales/hu.json";

export default createI18n({
  locale: "hu",
  fallbackLocale: "en",
  messages: {
    en,
    hu,
  },
});
