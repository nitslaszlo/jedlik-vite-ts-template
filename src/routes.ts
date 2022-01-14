import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ExamplesView from "./views/ExamplesView.vue";
import AccountView from "./views/AccountView.vue";
import VTableView from "./views/VTableView.vue";
import AboutView from "./views/AboutView.vue";
import GridView from "./views/GridView.vue";
import Vue3TableLiteView from "./views/Vue3TableLiteView.vue";
import VueMasterySocksView from "./views/VueMasterySocksView.vue";
import protectedRoute from "./middlewares/protected";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/examples",
    name: "Examples",
    component: ExamplesView,
  },
  {
    path: "/account",
    name: "Account",
    component: AccountView,
  },
  {
    path: "/vtable",
    name: "VTable",
    component: VTableView,
    beforeEnter: protectedRoute,
  },
  {
    path: "/v3table",
    name: "V3TableLite",
    component: Vue3TableLiteView,
    beforeEnter: protectedRoute,
  },
  {
    path: "/socks",
    name: "Socks",
    component: VueMasterySocksView,
  },
  {
    path: "/grid",
    name: "Grid",
    component: GridView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
