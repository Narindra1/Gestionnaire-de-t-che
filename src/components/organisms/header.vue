<script setup></script>
<template>
  <div class="flex justify-between items-center px-5 bg-gray-800 h-full">
    <div class="gauche">
      <div class="flex gap-4 text-center">
        <div class="flex gap-2 items-center">
          <span class="text-red-600">
            <i class="fa-solid fa-circle"></i>
          </span>
          <span class="text-yellow-300">
            <i class="fa-solid fa-circle"></i>
          </span>
          <span class="text-green-600">
            <i class="fa-solid fa-circle"></i>
          </span>
        </div>
        <div
          class="flex gap-2 rounded-md bg-gray-700 py-1 px-2 text-white items-center"
        >
          <i class="fa-solid fa-chess-board"></i>
          <span class="">Boards</span>
        </div>
      </div>
    </div>
    <div class="centre">
      <div class="flex gap-4 items-center">
        <span class="text-white"> Product development </span>
        <div class="flex gap-2 items-center text-white">
          <i class="fa-solid fa-circle-user"></i>
          <i class="fa-solid fa-circle-user"></i>
          <i class="fa-solid fa-circle-user"></i>
          <i class="fa-solid fa-circle-user"></i>

          <i class="fa-solid fa-circle-plus text-slate-50"></i>
        </div>
      </div>
    </div>
    <div class="droite">
      <div class="flex gap-8 items-center">
        <div>
          <User label="coucou" />
        </div>
        <div class="text-white">
          <i class="fa-solid fa-bell"></i>
        </div>
        <div class="text-slate-100">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  </div>
</template>
