<template>
  <h2>Welcome to the Home Page</h2>
  <p>This is the home page content.</p>
  {{ user.email }}
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore';
import { ref } from 'vue';

const user = ref(useAuthStore().user);
</script>