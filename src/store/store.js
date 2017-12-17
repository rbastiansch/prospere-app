import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: '',
    token: '',
    isLoggedIn: false,
  },
  mutations: {
    SIGNIN(state, { info }) {
      state.email = info.email;
      state.token = info.token;
      state.isLoggedIn = true;
    },
    SIGNOUT(state) {
      state.email = '';
      state.token = '';
      state.isLoggedIn = false;
    },
  },
  actions: {
    signin({ commit }, info) {
      commit('SIGNIN', info);
    },
    signout({ commit }) {
      commit('SIGNOUT');
    },
  },
});
