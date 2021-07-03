import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../pages/Home/HomePage.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About/AboutPage.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(
        /* webpackChunkName: "contact" */ "../pages/Contact/ContactPage.vue"
      ),
  },
  {
    path: "/books",
    name: "books",
    component: () =>
      import(/* webpackChunkName: "books" */ "../pages/Books/BooksPage.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../pages/Signup/SignupPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../pages/Login/LoginPage.vue"),
  },
  {
    path: "/book/:name",
    name: "book",
    component: () =>
      import(/* webpackChunkName: "book" */ "../pages/Book/BookPage.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import(/* webpackChunkName: "book" */ "../pages/Cart/CartPage.vue"),
  },
  {
    path: "/wishes",
    name: "wishes",
    component: () =>
      import(/* webpackChunkName: "book" */ "../pages/Wishes/WishesPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/orders",
    name: "orders",
    component: () =>
      import(/* webpackChunkName: "book" */ "../pages/Orders/OrdersPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authenticatedUser = store.getters.isUserLoggedIn;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  // Check for protected route
  if (requiresAuth && !authenticatedUser) next("login");
  else next();
});

export default router;
