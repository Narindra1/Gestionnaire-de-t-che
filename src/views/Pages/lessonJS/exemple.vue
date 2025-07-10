<script setup>
import { ref } from "vue";
import { onMounted, onUpdated, onBeforeMount, onBeforeUpdate } from "vue";

let user = {};
let koto;
let loading = ref(true);
let loading2 = ref(true);

function fetchUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      res = res.json();
      console.log(res);
      return res;
    })
    .then((data) => {
      console.log(data);
    });
}

onMounted(function () {
  let a = 3;

  if (true) {
    console.log(a);
    a = 5;
  }
  console.log(a);
  fetchUser();

  //exemple de setTimeout imbriqué
  let timerId = setTimeout(function sayHi() {
    console.log("coucou les gens");
    setTimeout(sayHi, 2000);
  }, 2000);
  clearTimeout(timerId);

  //exemple de setInterval
  let id = setInterval(function () {
    console.log("je veux repeter cette fonction 5 fois ");
  }, 2000);
  setTimeout(function () {
    clearInterval(id, alert("stop"));
  }, 5000);

  //exemple de setTimeout
  setTimeout(function () {
    user.nom = "Narindra";
    loading.value = false;
  }, 2000);

  setTimeout(function () {
    koto = "koto";
    loading2.value = false;
  }, 5000);
  console.log("exemple monté", user, koto);
});
/*
async function getAllTask(){
  let tasks;
  .........
  tasks = await fetch http://localhost:8000/getTasks
  return tasks
}

async function getAllTaskForKoto(){
  let tasks = await getAllTask();
  let kotoTask = tasks.filter(e = ...)
  return tasks
}*/

onUpdated(function () {
  console.log("exemple update", user, koto);
});
onBeforeMount(function () {
  console.log("exemple before monté", user, koto);
});
onBeforeUpdate(function () {
  console.log("exemple before update", user, koto);
});
</script>
<template>
  <p v-if="loading">en cours .....</p>
  <p v-else>{{ user.nom }}</p>
  <p v-if="!loading2">{{ koto }}</p>
</template>
