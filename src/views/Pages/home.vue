<script setup>
import dashboardLayout from "../Layout/dashboardLayout.vue";
import CreateListe from "@/components/molecules/ajoutListe.vue";
import ListeName from "@/components/molecules/listeName.vue";
import Liste from "@/components/molecules/liste.vue";
import AjoutCarte from "@/components/molecules/ajoutCarte.vue";
import Cart from "@/components/molecules/cart.vue";
import { ref, onMounted } from "vue";

onMounted(() => {
  console.log("home mounted");
});
</script>

<template>
  <dashboardLayout>
    <div class="m-[20px] flex flex-row gap-10">
      <div class="flex flex-col gap-2">
        <Liste />
        <AjoutCarte />
      </div>
      <div class="flex flex-col gap-2">
        <CreateListe />
        <ListeName />
      </div>
    </div>
  </dashboardLayout>
</template>
