<script setup lang="ts">
import { defineModel } from 'vue'
const modelValue = defineModel<{
  modelValue: string;
}>();
</script>

<template>
  <input
    id="input"
    v-model="modelValue"
    v-bind="$attrs"
    type="text"
    class="px-4 py-2 w-250px text-center bg-transparent border rounded border-gray-200 dark:border-gray-700 outline-none active:none"
  />
</template>
