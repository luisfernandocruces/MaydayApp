import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        logged: false,
    },
    mutations: {
        changeTheLogged(state, newLogged) {
            state.logged = newLogged;
        },
    },
    actions: {
        changeLogged({ commit }, newLogged) {
            commit("changeTheLogged", newLogged)
        },
    }

});