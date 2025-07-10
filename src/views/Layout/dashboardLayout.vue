<script setup>
import Header from "@/components/organisms/header.vue";
</script>
<template>
  <div class="h-screen w-screen bg-gray-900">
    <div class="h-[60px] w-full">
      <Header />
    </div>
    <div class="w-full" style="height: calc(100vh - 60px)">
      <slot></slot>
    </div>
  </div>
</template>
