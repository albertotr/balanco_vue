<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MobileLayout from '@/layouts/MobileLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue';
// import DesktopLayout from './layouts/DesktopLayout.vue';


const route = useRoute();

// Define o layout com base na rota atual
const layout = computed(() => {

  if (route.meta.layout !== 'AuthLayout') {
    return DefaultLayout; // Fallback para MobileLayout se não houver layout definido
  } else if (route.meta.layout === 'AuthLayout' && isMobile.value) {
    return MobileLayout; // Retorna MobileLayout se for uma rota de autenticação e estiver em mobile
  } else {
    return DefaultLayout; // Retorna DefaultLayout para outras rotas
  }
});

const isMobile = computed(() => {
  return window.innerWidth < 768;
})


</script>

<style>
/* Estilos globais podem ser adicionados aqui */
</style>
