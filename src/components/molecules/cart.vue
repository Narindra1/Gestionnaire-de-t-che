<script setup></script>
<template>
  <div
    class="text-tertiaire bg-white flex flex-col min-w-[300px] min-h-[80px] p-[15px] rounded-xl gap-5"
  >
    <div class="flex justify-between">
      <div
        class="text-bleu flex gap-2 justify-center items-center bg-gray-200 py-[5px] px-[10px] rounded-lg"
      >
        <span class="text-xs">
          <i class="fa-solid fa-circle"></i>
        </span>

        <span>Status</span>
      </div>
      <span>
        <i class="fa-solid fa-ellipsis"></i>
      </span>
    </div>
    <div class="flex flex-col">
      <span class="text-black text-2xl">Titre</span>
      <span>Description</span>
    </div>
    <div class="flex justify-between">
      <span>Acteur(s)</span>
      <span>
        <i class="fa-solid fa-circle-user"></i>
        <i class="fa-solid fa-circle-user"></i>
      </span>
    </div>
    <div class="flex justify-between">
      <div class="flex gap-2 justify-center items-center">
        <i class="fa-regular fa-flag"></i>
        <span>date d'écheance</span>
      </div>
      <div class="text-bleu bg-gray-200 rounded-xl p-[5px]">priorité</div>
    </div>
    <div>
      <hr class="mx-2 text-line" />
    </div>
    <div class="flex justify-between">
      <div class="flex gap-2 justify-center items-center">
        <i class="fa-solid fa-clock"></i>
        <span>durée estimer</span>
      </div>
      <div class="flex gap-2 justify-center items-center">
        <i class="fa-solid fa-paperclip"></i>
        <span> piece jointe </span>
      </div>
    </div>
  </div>
</template>
