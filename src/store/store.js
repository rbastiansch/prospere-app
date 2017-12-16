import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    isLoggedIn: false,
  },
  mutations: {
    SIGNIN(state, { token }) {
      state.token = token;
      state.isLoggedIn = true;
    },
    SIGNOUT(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    signin({ commit }, token) {
      commit('SIGNIN', token);
    },
    signout({ commit }) {
      commit('SIGNOUT');
    },
  },
});
