<template>
    <!-- <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input v-model="form.email" type="text" placeholder="email" required />
            <input v-model="form.password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    </div> -->

    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-secondary">Autenticação</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="login">
                <div>
                    <fieldset class="fieldset">
                        <legend class="fieldset-legend">Email</legend>
                        <input type="email" class="input" id="email" autocomplete="email" name="email"
                            v-model="form.email" />
                    </fieldset>
                </div>

                <div>
                    <fieldset class="fieldset">
                        <legend class="fieldset-legend">Senha</legend>
                        <input type="password" class="input" id="password" autocomplete="current-password"
                            name="password" v-model="form.password" />
                    </fieldset>
                </div>

                <div>
                    <button type="submit" class="btn btn-primary w-full">Autenticar</button>
                </div>
            </form>
            <div v-if="error" class="mt-4 text-error w-full text-center">
                {{ error }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';
import api from '@/api';

const form = ref({
    email: 'test@example.com',
    password: 'password',
});
const error = ref(''); // Declara a variável 'error' corretamente
const router = useRouter();

// Função para capturar o token CSRF
const fetchCsrfToken = async () => {
    try {
        await api.get("sanctum/csrf-cookie"); // Requisição inicial para capturar o cookie
    } catch (err) {
        console.error('Erro ao capturar o token CSRF:', err);
    }
};

const login = async () => {
    try {
        await fetchCsrfToken(); // Captura o token CSRF antes de fazer login
        const response = await api.post("login", form.value); // Faz a requisição POST
        useAuthStore().setUser(response.data.user); // Atualiza o usuário no store
        useAuthStore().setToken(response.data.access_token); // Atualiza o token no store
        router.push('/'); // Redireciona para a home após o login
    } catch (err) {
        error.value = 'Erro ao fazer login. Verifique suas credenciais.';
        console.error('Erro ao fazer login:', err);
    }

};


</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
    margin: 0 auto;
}
</style>