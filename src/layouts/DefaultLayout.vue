<template>
    <div>
        <header>
            <h1>Default Layout</h1>
        </header>
        <main>
            <slot></slot> <!-- Aqui o conteúdo da rota será renderizado -->
        </main>
    </div>
</template>

<script setup>
// Nada é necessário aqui
</script>

<style scoped>
header {
    background-color: #d0d0d0;
    padding: 20px;
    text-align: center;
}
</style>