import { createStore } from "vuex";
import UserService from "../service/UserService";
export default createStore({
  state: {
    token: null,
    user: {},
  },
  mutations: {
    USER_LOGIN(state, { token, user }) {
      state.token = token;
      state.user = user;
    },
    USER_LOGOUT(state) {
      state.token = null;
      state.user = {};
    },
  },
  actions: {
    async userLogin({ commit }, user) {
      let response = await UserService.authenticateUser(user);
      commit("USER_LOGIN", {
        token: response.data.access_token,
        user: response.data.user,
      });
      return response;
    },
    userLogout({ commit }) {
      commit("USER_LOGOUT");
    },
    // eslint-disable-next-line no-empty-pattern
    async userCreate({}, user) {
      let response = await UserService.createUser(user);
      return response;
    },
  },
  getters: {
    isUserLoggedIn: (state) => {
      return Boolean(state.token);
    },
    user: (state) => {
      return state.user;
    },
  },
  modules: {},
});
