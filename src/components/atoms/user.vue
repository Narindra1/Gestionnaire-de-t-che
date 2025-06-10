<script setup>
import { onMounted } from "vue";
import { defineProps } from "vue";
//let props = defineProps(["label"]);
onMounted(function () {
  console.log("user mounte");
});
</script>
<template>
  <div class="text-white">
    <i class="fa-solid fa-circle-user"></i>
  </div>
</template>
