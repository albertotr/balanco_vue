<template>
    <div>
        <div class="card bg-primary text-primary-content w-96">
            <div class="card-body">
                <div class="flex justify-between">
                    <h2 class="text-3xl font-bold">{{ account.name }}</h2>
                    <span class="text-xl">${{ account.balance }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { defineProps } from 'vue';
const props = defineProps({
    account: {
        type: Object,
        required: true
    }
});

</script>

<style></style>