<script setup lang="ts">
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import { useStore } from "vuex";
import {
  VMain,
  VApp,
  VBadge,
  VBtn,
  VContainer,
  VList,
  VListItem,
  VAppBar,
  VAppBarNavIcon,
  VSpacer,
  VNavigationDrawer,
} from "vuetify/components";
import { useI18n } from "vue-i18n";

const isMobileDevice = useDisplay().mobile.value;
const drawer = ref(!isMobileDevice);
const store = useStore();
const theme = ref("light");

const loggedUser = computed(() => store.getters["users/getLoggedUser"]);
const notLoggedIn = computed(() => !store.getters["users/getLoggedIn"]);

// Search icons: https://materialdesignicons.com/
const menuItems = ref([
  {
    icon: "mdi-home",
    text: "Home",
    route: "/",
    disabled: false,
  },
  {
    icon: "mdi-soccer",
    text: "Examples",
    route: "/examples",
    disabled: false,
  },
  {
    icon: "mdi-table",
    text: "v-table",
    route: "/vtable",
    disabled: notLoggedIn,
  },
  {
    icon: "mdi-table-refresh",
    text: "vue3-table-light",
    route: "/v3table",
    disabled: notLoggedIn,
  },
  {
    icon: "mdi-cart-outline",
    text: "Vue Mastery Socks",
    route: "/socks",
    disabled: false,
  },
  {
    icon: "mdi-grid",
    text: "Grid demo",
    route: "/grid",
    disabled: false,
  },
  {
    icon: "mdi-account",
    text: "Account",
    route: "/account",
    disabled: false,
  },
  {
    icon: "mdi-information",
    text: "About",
    route: "/about",
    disabled: false,
  },
]);
const links = ref([
  {
    icon: "mdi-github",
    text: "GitHub repository",
    link: "https://github.com/nitslaszlo/jedlik-vite-template",
    disabled: false,
  },
  {
    icon: "mdi-vuetify",
    text: "Vuetify 3 home",
    link: "https://next.vuetifyjs.com/en/getting-started/installation",
    disabled: false,
  },
]);

let { locale } = useI18n({
  inheritLocale: true,
  useScope: "global", // Change to "local" if you want to add <i18n></i18n> locally
});

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
function toggleLanguage() {
  locale.value = locale.value == "hu" ? "en" : "hu";
}
</script>

<template>
  <v-app :theme="theme">
    <v-navigation-drawer v-model="drawer" app>
      <p class="text-center my-3">Routes</p>
      <v-list nav dense>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :prepend-icon="item.icon"
          :title="item.text"
          :to="item.route"
          :disabled="item.disabled"
          link
          @click="drawer = !isMobileDevice"
        ></v-list-item>
      </v-list>
      <p class="text-center my-3">Links</p>
      <v-list nav dense>
        <v-list-item
          v-for="(item, i) in links"
          :key="i"
          :prepend-icon="item.icon"
          :title="item.text"
          :href="item.link"
          :disabled="item.disabled"
          target="_blank"
          link
          @click="drawer = !isMobileDevice"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dark app :color="notLoggedIn ? 'surface' : 'success'">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        :color="notLoggedIn ? 'surface' : 'success'"
      ></v-app-bar-nav-icon>
      Jedlik Vite TS Template - {{ loggedUser }}
      <v-spacer></v-spacer>
      <v-badge :content="locale" offset-x="6" offset-y="6">
        <v-btn
          icon
          :color="notLoggedIn ? 'surface' : 'success'"
          @click="toggleLanguage"
        >
          <v-icon>mdi-comment-text-multiple</v-icon>
        </v-btn>
      </v-badge>
      <v-btn
        icon
        class="ml-5"
        :color="notLoggedIn ? 'surface' : 'success'"
        @click="toggleTheme"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        :color="notLoggedIn ? 'surface' : 'success'"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
