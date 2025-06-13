<script setup>
import Cart from "@/components/molecules/cart.vue";
</script>

<template>
  <div
    class="bg-tertiaire min-w-[272px] min-h-[88px] p-[10px] rounded-xl pl-[6px] flex flex-col gap-2 justify-start"
  >
    <div class="text-white flex justify-between items-center">
      <span class="pl-[12px]">ListeName</span>
      <span class="hover:bg-second p-2 rounded-sm flex items-center">
        <i class="fa-solid fa-ellipsis"></i>
      </span>
    </div>
    <div>
      <Cart />
    </div>
    <div class="text-white flex justify-between items-center gap-5">
      <button
        class="flex items-center justify-start bg-tertiaire gap-2 p-[7px] w-[240px] rounded-xl hover:bg-second"
      >
        <i class="fa-solid fa-plus"></i>
        <span>Ajouter un carte</span>
      </button>
      <span class="p-2">
        <i class="fa-solid fa-money-bill"></i>
      </span>
    </div>
  </div>
</template>
