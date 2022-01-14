import $axios from "./axios.instance";

export default {
  namespaced: true,
  state: {
    loggedIn: false,
    loggedUser: "Please login or register to use all routes",
  },
  getters: {
    getLoggedIn(state) {
      return state.loggedIn;
    },
    getLoggedUser(state) {
      return state.loggedUser;
    },
  },
  mutations: {
    setLoggedIn(state, value) {
      state.loggedIn = value;
    },
    setLoggedUser(state, value) {
      state.loggedUser = value;
    },
  },
  actions: {
    async loginUser(context, params) {
      $axios
        .post("auth/login", {
          email: params.email,
          password: params.password,
        })
        .then((res) => {
          console.log("Authenticated");
          // alert(`${res.data.name} is logged in`);
          context.commit("setLoggedUser", res.data.name);
          context.commit("setLoggedIn", true);
        })
        .catch(() => {
          alert("Error on Authentication");
          context.commit(
            "setLoggedUser",
            "Please login or register to use all routes"
          );
          context.commit("setLoggedIn", false);
        });
    },
    async logOut(context) {
      $axios
        .post("auth/logout")
        .then(() => {
          alert("Logged out");
          context.commit("setLoggedIn", false);
          context.commit(
            "setLoggedUser",
            "Please login or register to use all routes"
          );
        })
        .catch(() => {
          console.log("Error on Authentication");
          context.commit("setLoggedIn", false);
          context.commit(
            "setLoggedUser",
            "Please login or register to use all routes"
          );
        });
    },
  },
};
