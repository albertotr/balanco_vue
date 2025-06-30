<template>
    <div class="dock">
        <router-link to="/" class="btn btn-ghost dock-button">
            <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt">
                    <polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" stroke-miterlimit="10"
                        stroke-width="2"></polyline>
                    <path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor"
                        stroke-linecap="square" stroke-miterlimit="10" stroke-width="2">
                    </path>
                    <line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" stroke-linecap="square"
                        stroke-miterlimit="10" stroke-width="2"></line>
                </g>
            </svg>
            <span class="dock-label">Inicio</span>
        </router-link>

        <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M12 21q-.425 0-.712-.288T11 20v-7H4q-.425 0-.712-.288T3 12t.288-.712T4 11h7V4q0-.425.288-.712T12 3t.713.288T13 4v7h7q.425 0 .713.288T21 12t-.288.713T20 13h-7v7q0 .425-.288.713T12 21" />
            </svg>
            <span class="dock-label">Novo Registro</span>
        </button>

        <button @click="logout" v-if="authStore.isAuthenticated">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-[1.2em]" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M5 21q-.825 0-1.412-.587T3 19v-3q0-.425.288-.712T4 15t.713.288T5 16v3h14V5H5v3q0 .425-.288.713T4 9t-.712-.288T3 8V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm6.65-8H4q-.425 0-.712-.288T3 12t.288-.712T4 11h7.65L9.8 9.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L14.8 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-3.575 3.575q-.3.3-.712.288T9.8 16.25q-.275-.3-.288-.7t.288-.7z" />
            </svg>
            <span class="dock-label">Sair</span>
        </button>
    </div>
</template>

<script lang="ts" setup>
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

<style></style>