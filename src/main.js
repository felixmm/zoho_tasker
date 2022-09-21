import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "@/router/routes";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const app = createApp(App);

// Router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
app.use(router);

// Mount the app
app.mount("#app");
