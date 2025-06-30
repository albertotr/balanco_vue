<template>
  <div class="flex flex-col justify-center items-center gap-y-4 pt-4">
    <CardAccount v-for="account in accounts" :key="account.id" :account="account" />
  </div>
</template>

<script setup>
import api from '@/api';
import CardAccount from '@/components/cardAccount.vue';
import { useAuthStore } from '@/stores/authStore';
import { ref, onMounted } from 'vue';

const user = ref(useAuthStore().user);
const accounts = ref([]);

onMounted(async () => {
  const response = await api.get('api/account')
  accounts.value = response.data // Adjust if your API returns data differently
});

</script>