<script setup lang="ts">
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import { useStore } from "vuex";
import {
  VMain,
  VApp,
  VContainer,
  VList,
  VListItem,
  VAppBar,
  VAppBarNavIcon,
  VSpacer,
  VNavigationDrawer,
} from "vuetify/components";

const isMobileDevice = useDisplay().mobile.value;
const drawer = ref(isMobileDevice);
const store = useStore();

const loggedUser = computed(() => store.getters["users/getLoggedUser"]);
const loggedIn = computed(() => store.getters["users/getLoggedIn"]);

// Search icons: https://materialdesignicons.com/
const menuItems = ref([
  {
    icon: "mdi-home",
    text: "Home",
    route: "/",
  },
  {
    icon: "mdi-soccer",
    text: "Examples",
    route: "/examples",
  },
  {
    icon: "mdi-table",
    text: "v-table",
    route: "/vtable",
  },
  {
    icon: "mdi-table-refresh",
    text: "vue3-table-light",
    route: "/v3table",
  },
  {
    icon: "mdi-cart-outline",
    text: "Vue Mastery Socks",
    route: "/socks",
  },
  {
    icon: "mdi-grid",
    text: "Grid demo",
    route: "/grid",
  },
  {
    icon: "mdi-account",
    text: "Account",
    route: "/account",
  },
  {
    icon: "mdi-information",
    text: "About",
    route: "/about",
  },
]);
const links = ref([
  {
    icon: "mdi-github",
    text: "GitHub repository",
    link: "https://github.com/nitslaszlo/jedlik-vite-template",
  },
  {
    icon: "mdi-vuetify",
    text: "Vuetify 3 home",
    link: "https://next.vuetifyjs.com/en/getting-started/installation",
  },
]);
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <p class="text-center my-3">Routes</p>
      <v-list nav dense>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :prepend-icon="item.icon"
          :title="item.text"
          :to="item.route"
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
          target="_blank"
          link
          @click="drawer = !isMobileDevice"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dark app :color="loggedIn ? 'success' : 'warning'">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        :color="loggedIn ? 'success' : 'warning'"
      ></v-app-bar-nav-icon>
      Jedlik Vite TS Template - {{ loggedUser }}
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        :color="loggedIn ? 'success' : 'warning'"
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
