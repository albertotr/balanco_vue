import axios from "axios";

// Configuração do Axios
const api = axios.create({
  baseURL: "http://localhost/", // URL base da API Laravel
  withCredentials: true, // Permite o envio de cookies
});

// Interceptador para adicionar o token CSRF
api.interceptors.request.use((config) => {
  config.headers.Accept = "application/json";
  const token = localStorage.getItem("token"); // Recupera o token de autenticação
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Adiciona o token ao header
  }

  // Captura o cookie XSRF-TOKEN e envia no header X-XSRF-TOKEN
  const xsrfToken = getCookie("XSRF-TOKEN");
  if (xsrfToken) {
    config.headers["X-XSRF-TOKEN"] = xsrfToken;
  }

  return config;
});

// Função para capturar o valor de um cookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2)
    return decodeURIComponent(parts.pop().split(";").shift());
}

export default api;
