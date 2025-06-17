import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { useAuthStore } from "@/stores/authStore";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Carrega o token ao inicializar o app
const authStore = useAuthStore();
authStore.token = localStorage.getItem("token") || null;

app.mount("#app");
