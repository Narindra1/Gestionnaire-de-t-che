<script setup></script>
<template>
  <div
    class="flex flex-col justify-center items-start gap-2 text-white bg-tertiaire max-w-[272px] h-[88px] rounded-xl pl-[6px]"
  >
    <input
      type="text"
      placeholder="Saisissez le nom de la liste..."
      class="hover:border-2 border-quartaire rounded-sm w-[260px]"
    />
    <div class="flex gap-1">
      <button
        class="bg-quartaire px-[12px] py-[6px] rounded-sm flex justify-center items-center hover:bg-cinquaire"
      >
        Ajouter une liste
      </button>
      <span
        class="hover:bg-second px-3 rounded-sm flex justify-center items-center"
      >
        <i class="fa-solid fa-xmark"></i>
      </span>
    </div>
  </div>
</template>
