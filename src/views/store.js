import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: false,
    labelsDate: [
      "2022-01-01",
      "2022-02-01",
      "2022-03-01",
      "2022-04-01",
      "2022-05-01",
      "2022-06-01",
      "2022-07-01",
      "2022-08-01",
      "2022-09-01",
      "2022-10-01",
      "2022-11-01",
      "2022-12-01",
    ],

  },
  mutations: {
    changeLoading(state, load) {
      state.test = load;
    },
    changeLabel(state, loadLabel) {
      state.labelsDate = loadLabel;
    },
  },
  actions: {
    changeLoading(context, load) {
      context.commit("changeLoading", load);
    },
    changeLabel(context, loadLabel) {
      context.commit("changeLabel", loadLabel);
    },
  },
  getters: {},
});
