import { createApp } from "vue";
import { makeServer } from "./server";
import App from "./App.vue";
import router from "./router";
import store from "./store";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

createApp(App).use(store).use(router).mount("#app");
