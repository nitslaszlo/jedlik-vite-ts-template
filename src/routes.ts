import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import AboutView from "./views/AboutView.vue";
// import AccountView from "./views/AccountView.vue";
// import ExamplesView from "./views/ExamplesView.vue";
// import GridView from "./views/GridView.vue";
// import protectedRoute from "./middlewares/protected";
import StartPageView from "./views/StartPageView.vue";
// import VTableView from "./views/VTableView.vue";
// import Vue3TableLiteView from "./views/Vue3TableLiteView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "StartPage",
    component: StartPageView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
