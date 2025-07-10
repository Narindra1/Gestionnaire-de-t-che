<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
onMounted(function () {
  console.log("app mounte");
});
console.log("app");
</script>

<template>
  <RouterView />
</template>

<style></style>
