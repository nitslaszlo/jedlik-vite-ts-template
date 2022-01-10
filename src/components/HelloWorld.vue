<script setup lang="ts">
import { reactive } from "vue";
import { useI18n } from "vue-i18n";

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

interface ILanguage {
  short: string;
  icon: string;
}

interface IReactive {
  selectedItem: number;
  languages: Array<ILanguage>;
}

const r = reactive<IReactive>({
  selectedItem: 0,
  languages: [
    {
      short: "en",
      icon: "mdi-flag",
    },
    {
      short: "hu",
      icon: "mdi-flag",
    },
    {
      short: "pt",
      icon: "mdi-flag",
    },
  ],
});

const { t } = useI18n();
</script>

<template>
  <a class="logo-link" href="https://vitejs.dev/">
    <img class="logo" alt="Vite logo" src="./../assets/svg/vite.svg" />
  </a>
  <a class="logo-link" href="https://v3.vuejs.org/">
    <img class="logo" alt="Vue 3 logo" src="./..//assets/svg/vue.svg" />
  </a>
  <a class="logo-link" href="https://www.typescriptlang.org/">
    <img class="logo" alt="TS logo" src="./../assets/svg/ts.svg" />
  </a>
  <a class="logo-link" href="https://eslint.org//">
    <img class="logo" alt="E.S. Lint logo" src="./../assets/svg/eslint.svg" />
  </a>
  <a class="logo-link" href="https://prettier.io/">
    <img class="logo" alt="Prettier logo" src="./../assets/svg/prettier.svg" />
  </a>
  <h1>{{ msg }}</h1>
  <h1>{{ t("welcome") }}</h1>
  <div class="locale-changer">
    <p>{{ t("chooseLanguage") }}</p>
    <select v-model="$i18n.locale">
      <option v-for="lang in r.languages" :key="lang.short" :value="lang.short">
        {{ lang.short }}
      </option>
    </select>
    <div class="d-flex justify-center flex-column flex-md-row fill-height ma-5">
      <v-btn
        class="ma-4"
        rounded="xl"
        color="blue"
        @click="$i18n.locale = 'en'"
      >
        English</v-btn
      >
      <v-btn class="ma-4" rounded="xl" color="red" @click="$i18n.locale = 'hu'">
        Magyar
      </v-btn>
      <v-btn
        class="ma-4"
        rounded="xl"
        color="yellow"
        @click="$i18n.locale = 'pt'"
      >
        Portugál
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/styles/functions/color" as *;

body {
  background-color: color(light);
  color: color(dark);

  @media (prefers-color-scheme: dark) {
    background-color: color(dark);
    color: color(light);
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>

<style lang="scss" scoped>
@use "@/styles/functions/color" as *;

.logo {
  height: 56px;
  width: 56px;
}

.logo-link {
  background: darken(color(light), 35%);
  border-radius: 50%;
  padding: 8px;

  @media (prefers-color-scheme: dark) {
    background: darken(color(dark), 5%);
  }

  & + .logo-link {
    margin-left: 16px;
  }
}
</style>
