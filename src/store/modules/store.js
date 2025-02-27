/*import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// Make Axios play nice with Django CSRF
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default new Vuex.Store({
  state: {
    authUser: {},
    isAuthenticated: false,
    jwt: localStorage.getItem("token"),
    endpoints: {
      // TODO: Remove hardcoding of dev endpoints
      obtainJWT: "https://127.0.0.1:8000/api/v1/auth/obtain_token/",
      refreshJWT: "https://127.0.0.1:8000/api/v1/auth/refresh_token/",
      baseUrl: "https://127.0.0.1:8000/api/v1/",
    },
  },

  mutations: {
    setAuthUser(state, { authUser, isAuthenticated }) {
      Vue.set(state, "authUser", authUser);
      Vue.set(state, "isAuthenticated", isAuthenticated);
    },
    updateToken(state, newToken) {
      // TODO: For security purposes, take localStorage out of the project.
      localStorage.setItem("token", newToken);
      state.jwt = newToken;
    },
    removeToken(state) {
      // TODO: For security purposes, take localStorage out of the project.
      localStorage.removeItem("token");
      state.jwt = null;
    },
  },
});*/