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

  let { locale, t } = useI18n({
    inheritLocale: true,
    useScope: "global", // Change to "local" if you want to add <i18n></i18n> locally
  });

  // Search icons: https://materialdesignicons.com/
  const menuItems = ref([
    {
      icon: "mdi-home",
      text: "Home",
      name: "",
      route: "/",
      disabled: false,
    },
    {
      icon: "mdi-soccer",
      text: t("examples"),
      name: "examples",
      route: "/examples",
      disabled: false,
    },
    {
      icon: "mdi-table",
      text: "v-table",
      name: "",
      route: "/vtable",
      disabled: notLoggedIn,
    },
    {
      icon: "mdi-table-refresh",
      text: "vue3-table-light",
      name: "",
      route: "/v3table",
      disabled: notLoggedIn,
    },
    {
      icon: "mdi-cart-outline",
      text: "Vue Mastery Socks",
      name: "",
      route: "/socks",
      disabled: false,
    },
    {
      icon: "mdi-grid",
      text: "Grid demo",
      name: "",
      route: "/grid",
      disabled: false,
    },
    {
      icon: "mdi-account",
      text: t("account"),
      name: "account",
      route: "/account",
      disabled: false,
    },
    {
      icon: "mdi-information",
      text: t("about"),
      name: "about",
      route: "/about",
      disabled: false,
    },
  ]);
  const links = ref([
    {
      icon: "mdi-github",
      text: "GitHub repository",
      name: "",
      link: "https://github.com/nitslaszlo/jedlik-vite-ts-template",
      disabled: false,
    },
    {
      icon: "mdi-vuetify",
      text: "Vuetify 3",
      name: "",
      link: "https://next.vuetifyjs.com/en/getting-started/installation",
      disabled: false,
    },
  ]);

  function toggleTheme() {
    theme.value = theme.value === "light" ? "dark" : "light";
  }
  function toggleLanguage() {
    locale.value = locale.value == "hu" ? "en" : "hu";
    menuItems.value.forEach((e) => {
      if (e.name != "") e.text = t(e.name);
    });
  }
</script>

<template>
  <v-app :theme="theme">
    <v-navigation-drawer v-model="drawer" app>
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
        :color="notLoggedIn ? 'surface' : 'success'"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      Jedlik Vite TS {{ $t("template") }} - {{ notLoggedIn ? $t("noUser") : loggedUser }}
      <v-spacer></v-spacer>
      <v-badge :content="locale" offset-x="6" offset-y="6">
        <v-btn icon :color="notLoggedIn ? 'surface' : 'success'" @click="toggleLanguage">
          <v-icon>mdi-comment-text-multiple</v-icon>
        </v-btn>
      </v-badge>
      <v-btn icon class="ml-5" :color="notLoggedIn ? 'surface' : 'success'" @click="toggleTheme">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-app-bar-nav-icon
        :color="notLoggedIn ? 'surface' : 'success'"
        @click="drawer = !drawer"
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
