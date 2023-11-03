<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="px-4 py-10 text-center teal-700 dark:gray-200">
    <div class="text-4xl">
      <div i-carbon-warning class="inline-block" />
    </div>
    <RouterView />
    <div>
      <button class="text-sm btn m-3 mt-8" @click="router.back()">
        {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>
