import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";
import Login from "@/views/LoginView.vue";
import { useAuthStore } from "@/stores/authStore";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true, layout: "AuthLayout" }, // Rota protegida
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { requiresAuth: true, layout: "AuthLayout" }, // Rota protegida
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: "DefaultLayout" }, // Rota pública
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Verificação de autenticação antes de cada navegação
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "Login" }); // Redireciona para o login se não autenticado
  } else {
    next(); // Permite a navegação
  }
});

export default router;
