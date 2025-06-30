<template>
    <div>
        <div class="hidden sm:block"> <!-- exibe somente se for desktop -->
            <Navbar class="flex w-full" /> <!-- menu do sistema -->
        </div>
        <main>
            <slot></slot> <!-- Aqui o conteúdo da rota será renderizado -->
        </main>
        <div class="block sm:hidden"> <!-- exibe somente se for mobile -->
            <Dock />
        </div>
    </div>
</template>

<script setup>
import Dock from '@/components/dock.vue';
import Navbar from '@/components/navbar.vue';
</script>

<style scoped></style>