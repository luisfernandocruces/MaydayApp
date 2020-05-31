import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    logged: false,
    user: {},
  },
  mutations: {
    changeTheLogged(state, newLogged) {
      state.logged = newLogged;

    },
    updateUser(state, currentUser) {
      state.user = currentUser;
    },
  },
  actions: {
    changeLogged({ commit }, newLogged) {
      commit("changeTheLogged", newLogged);
    },
  },
});
