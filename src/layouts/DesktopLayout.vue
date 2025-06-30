<template>
    <div>
        <main>
            <slot></slot> <!-- Aqui o conteúdo da rota será renderizado -->
        </main>
    </div>
</template>

<script setup>
import Dock from '@/components/dock.vue';
</script>

<style scoped></style>