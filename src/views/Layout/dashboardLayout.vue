<script setup>
import Header from "@/components/organisms/header.vue";
</script>
<template>
  <div class="h-screen bg-gray-900">
    <Header />
    <slot></slot>
  </div>
</template>
