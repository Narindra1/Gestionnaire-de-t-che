<script setup>
const props = defineProps({
  carte: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="flex justify-between items-center">
    <div
      class="text-bleu flex gap-2 justify-center items-center bg-gray-200 py-[7px] px-[10px] rounded-lg"
    >
      <span class="text-xs">
        <i class="fa-solid fa-circle"></i>
      </span>

      <span>{{ carte.statut }}</span>
    </div>
    <span>
      <i class="fa-solid fa-ellipsis"></i>
    </span>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-black text-xl">{{ carte.titre }}</span>
    <span class="truncate">{{ carte.description }}</span>
  </div>
  <div class="flex justify-between">
    <span>Assignée à:</span>
    <span>
      <i class="fa-solid fa-circle-user"></i>
      <i class="fa-solid fa-circle-user"></i>
    </span>
  </div>
  <div class="flex justify-between">
    <div class="flex gap-2 justify-center items-center">
      <i class="fa-regular fa-flag"></i>
      <span>{{ carte.dateLimite }}</span>
    </div>
    <div class="text-bleu bg-gray-200 rounded-xl p-[5px]">
      {{ carte.priorite }}
    </div>
  </div>
  <div>
    <hr class="mx-2 text-line" />
  </div>
  <div class="flex justify-between">
    <div class="flex gap-2 justify-center items-center">
      <i class="fa-solid fa-clock"></i>
      <span>{{ carte.dureeEstimee }}</span>
    </div>
    <div class="flex gap-2 justify-center items-center">
      <i class="fa-solid fa-paperclip"></i>
      <span> {{ carte.pieceJointe }} </span>
    </div>
  </div>
</template>
