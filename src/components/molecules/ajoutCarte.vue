<script setup></script>

<template>
  <div
    class="bg-tertiaire max-w-[275px] min-h-[88px] p-[10px] rounded-xl pl-[6px] flex flex-col gap-2 justify-start"
  >
    <div class="text-white flex justify-between items-center">
      <span class="pl-[12px]">nom du liste</span>
      <span class="hover:bg-second p-2 rounded-sm flex items-center">
        <i class="fa-solid fa-ellipsis"></i>
      </span>
    </div>
    <div
      class="flex flex-col justify-center items-start gap-2 text-white bg-tertiaire max-w-[272px] min-h-[88px] rounded-xl pl-[6px]"
    >
      <input
        type="text"
        placeholder="Saisissez un titre"
        class="hover:border-2 border-quartaire bg-second text-white p-2 rounded-sm w-[247px] h-[40px]"
      />
      <div class="flex gap-1">
        <button
          class="bg-quartaire px-[12px] py-[6px] rounded-sm flex justify-center items-center hover:bg-cinquaire"
        >
          Ajouter une carte
        </button>
        <span
          class="hover:bg-second px-3 rounded-sm flex justify-center items-center"
        >
          <i class="fa-solid fa-xmark"></i>
        </span>
      </div>
    </div>
  </div>
</template>
