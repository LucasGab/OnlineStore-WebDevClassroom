import { createStore } from "vuex";
import UserService from "../service/UserService";
export default createStore({
  state: {
    token: null,
    user: {},
    cart: [],
    wishList: [],
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
    ADD_BOOK_CART(state, book) {
      state.cart.push(book);
      localStorage.setItem("BOOK_STORE_CART", JSON.stringify(state.cart));
    },
    STORAGE_BOOK_CART(state) {
      const cart = localStorage.getItem("BOOK_STORE_CART");
      if (cart !== null) {
        state.cart = JSON.parse(cart);
      }
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
    addBookCart({ commit }, book) {
      commit("ADD_BOOK_CART", book);
    },
    getCartLocalStorage({ commit }) {
      commit("STORAGE_BOOK_CART");
    },
  },
  getters: {
    isUserLoggedIn: (state) => {
      return Boolean(state.token);
    },
    user: (state) => {
      return state.user;
    },
    cart: (state) => {
      return state.cart;
    },
    totalCart: (state) => {
      return state.cart.length;
    },
  },
  modules: {},
});
