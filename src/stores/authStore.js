import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || null, // Carrega o token do localStorage ao inicializar
    user: JSON.parse(localStorage.getItem("user")) || null, // Carrega o usuário do localStorage ao inicializar
  }),
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem("token", token); // Salva o token no localStorage
    },
    clearToken() {
      this.token = null;
      localStorage.removeItem("token"); // Remove o token do localStorage
      this.user = null;
      localStorage.removeItem("user"); // Remove o usuário do localStorage
    },
    setUser(user) {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user)); // Salva o usuário no localStorage
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token, // Verifica se o token existe
    getUser: (state) => JSON.parse(state.user), // Retorna o usuário em formato JSON
  },
});
