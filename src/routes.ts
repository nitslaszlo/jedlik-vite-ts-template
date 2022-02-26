import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import AboutView from "./views/AboutView.vue";
import BootstrapVue3View from "./views/BootstrapVue3View.vue";
import StartPageView from "./views/StartPageView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "StartPage",
    component: StartPageView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/bootstrapvue3",
    name: "Bootstrap Vue 3",
    component: BootstrapVue3View,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
