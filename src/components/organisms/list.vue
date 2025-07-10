<script setup>
import Cart from "@/components/organisms/cart.vue";
import { getCartForList } from "@/services/cart";

const props = defineProps({
  liste: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="bg-tertiaire p-[10px] rounded-xl w-[300px] max-h-full flex flex-col gap-3"
  >
    <div class="text-white flex px-2 justify-between items-center h-[40px]">
      <span class="">{{ liste.nom }}</span>
      <span class="hover:bg-second p-2 rounded-sm flex items-center">
        <i class="fa-solid fa-ellipsis"></i>
      </span>
    </div>
    <!-- all carts in the i-eme liste -->
    <div
      class="flex flex-row flex-wrap gap-5 justify-center items-center overflow-y-scroll flex-grow h-[calc(100%-80px)]"
    >
      <div
        class="text-tertiaire bg-white flex flex-col w-[280px] min-h-[10px] p-[15px] rounded-xl gap-5"
        v-for="carte in getCartForList(liste.id)"
        :key="carte.id"
      >
        <Cart :carte="carte" />
      </div>
    </div>
    <!-- ---------------------------- -->
    <div class="text-white flex justify-between items-center gap-5 h-[40px]">
      <button
        class="flex items-center justify-start gap-2 p-[7px] w-[240px] rounded-xl hover:bg-second"
      >
        <i class="fa-solid fa-plus"></i>
        <span>Ajouter une carte</span>
      </button>
      <span class="p-2">
        <i class="fa-solid fa-money-bill"></i>
      </span>
    </div>
  </div>
</template>
