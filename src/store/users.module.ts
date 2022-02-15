import $axios from "./axios.instance";

export default {
  namespaced: true,
  state: {
    loading: false,
    errorMsg: "",
    loggedUser: null,
  },
  getters: {
    getLoading(state) {
      return state.loading;
    },
    getErrorMsg(state) {
      return state.errorMsg;
    },
    getLoggedUser(state) {
      return state.loggedUser;
    },
  },
  mutations: {
    setLoading(state, status) {
      state.loading = status;
    },
    setErrorMsg(state, value) {
      state.errorMsg = value;
    },
    setLoggedUser(state, value) {
      state.loggedUser = value;
    },
  },
  actions: {
    async clearErrorMsg(context) {
      context.commit("setErrorMsg", "");
    },
    async loginUser(context, params) {
      context.commit("setLoading", true);
      $axios
        .post("auth/login", {
          email: params.email,
          password: params.password,
        })
        .then((res) => {
          // console.log("Authenticated");
          // alert(`${res.data.name} is logged in`);
          context.commit("setLoggedUser", res.data);
          context.commit("setLoading", false);
        })
        .catch(() => {
          // alert("Error on Authentication");
          context.commit("setLoggedUser", null);
          context.commit("setLoading", false);
          context.commit("setErrorMsg", "Error on Authentication");
        });
    },
    async logOut(context) {
      context.commit("setLoading", true);
      $axios
        .post("auth/logout")
        .then(() => {
          // console.log("Logged out");
          context.commit("setLoggedUser", null);
          context.commit("setLoading", false);
        })
        .catch(() => {
          // console.log("Error on Authentication");
          context.commit("setLoggedUser", null);
          context.commit("setLoading", false);
        });
    },
  },
};
