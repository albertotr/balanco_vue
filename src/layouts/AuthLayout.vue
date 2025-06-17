<template>
    <div>
        <header>
            <h1>Auth Layout</h1>
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <a @click="logout" v-if="authStore.isAuthenticated">Logout</a>
            </nav>
        </header>
        <main>
            <slot></slot> <!-- Aqui o conteúdo da rota será renderizado -->
        </main>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import api from '@/api';
const authStore = useAuthStore();
const router = useRouter()

const logout = async () => {
    await api.post('logout'); // Faz a requisição POST para logout
    authStore.clearToken(); // Remove o token
    router.push('/login'); // Redireciona para o login
};
</script>

<style scoped>
header {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
}

nav {
    margin-top: 10px;
}
</style>