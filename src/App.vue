<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AuthLayout from '@/layouts/AuthLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const route = useRoute();

// Define o layout com base na rota atual
const layout = computed(() => {
  return route.meta.layout === 'AuthLayout' ? AuthLayout : DefaultLayout; // Fallback para DefaultLayout se nenhum layout for definido
});
</script>

<style>
/* Estilos globais podem ser adicionados aqui */
</style>
