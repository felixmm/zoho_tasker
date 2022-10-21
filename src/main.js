import { createApp } from "vue";

import App from "./App.vue";

// Styling
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Modal
import { vfmPlugin } from 'vue-final-modal';

const app = createApp(App);

const isDevelopment = process.env.NODE_ENV !== "production";
app.provide('isDevelopment', isDevelopment);

// Plugins
app.use(vfmPlugin);

// Mount
app.mount("#app");
