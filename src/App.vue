<script setup lang="ts">
import { useHead } from "@unhead/vue";
import { isDark, preferredDark } from "./composables/dark";
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: "Vitesse",
  meta: [
    { name: "description", content: "Opinionated Vite Starter Template" },
    {
      name: "theme-color",
      content: () => isDark.value ? "#00aba9" : "#ffffff",
    },
    { name: "og:title", content: "this is OG title"}
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: () => preferredDark.value ? "/favicon-dark.svg" : "/favicon.svg",
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
