import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { usersStore } from "../store/usersStore";

export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  const users = usersStore();
  if (users.getLoggedUser) {
    next();
  } else {
    next("/account");
  }
};
