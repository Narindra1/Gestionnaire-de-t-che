<script setup>
import { ref, onMounted } from "vue";
let loading = ref(true);

onMounted(() => {
  console.log("home mounted");
  setTimeout(function () {
    loading.value = false;
  }, 8000);
});
/*let user1 = {
  id: 1,
  nom: "rakoto",
  role: "ADMIN",
};
let user2 = {
  id: 2,
  nom: "bema",
  role: "MANAGER",
};

function isAdmin(user) {
  console.log(user.nom);
  if (user.role == "ADMIN") {
    return true;
  } else {
    return false;
  }
}

let boleanUser = isAdmin(user1);
console.log(boleanUser);

//=============================================================================

let Users = [
  {
    id: 1,
    nom: "Rivo",
    role: "ADMIN",
  },

  {
    id: 2,
    nom: "Ravaka",
    role: "MANAGER",
  },

  {
    id: 3,
    nom: "Roro",
    role: "VENDEUR",
  },

  {
    id: 4,
    nom: "Nary",
    role: "CHOMEUR",
  },
];
console.log(Users);

function getAllAdmin(users) {
  //maka tableau de boucler-na ny element tsirairay ao anatin'ilay tableau dia rehefa marina ilay aorian'ny => de stockerna ilay izy
  //possible mamerina tableau vide ilay filter
  console.log("before filter");
  let reponses = users.filter((user) => isAdmin(user));
  console.log("after filter");
  return reponses;
}
//autre methode (implementation filter)
function getAllAdmin2(users) {
  let response = [];
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let bool = isAdmin(user);
    if (bool) {
      response.push(user);
    }
  }
  return response;
}
let reponse = getAllAdmin(Users);
console.log(reponse);

let maPromesse = new Promise(function (resolve, reject) {
  // Simule une opération asynchrone
  setTimeout(function () {
    let nombreAleatoire = Math.random();
    if (nombreAleatoire > 0.5) {
      resolve(nombreAleatoire); // Opération réussie
    } else {
      reject("Échec: le nombre est inférieur à 0.5"); // Opération échouée
    }
  }, 1000);
});

maPromesse
  .then(function (resultat) {
    console.log("Succès: " + resultat);
  })
  .catch(function (erreur) {
    console.log("Erreur: " + erreur);
  });*/
</script>

<template>
  <div
    v-if="loading"
    class="flex justify-center items-center w-screen h-screen"
  >
    <div class="loader"></div>
  </div>
  <div v-else>
    <p>terminer</p>
  </div>
</template>
<style>
.loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  background: linear-gradient(
        0deg,
        rgb(0 0 0/50%) 30%,
        #0000 0 70%,
        rgb(0 0 0/100%) 0
      )
      50%/8% 100%,
    linear-gradient(90deg, rgb(0 0 0/25%) 30%, #0000 0 70%, rgb(0 0 0/75%) 0)
      50%/100% 8%;
  background-repeat: no-repeat;
  animation: l23 1s infinite steps(12);
}
.loader::before,
.loader::after {
  content: "";
  grid-area: 1/1;
  border-radius: 50%;
  background: inherit;
  opacity: 0.915;
  transform: rotate(30deg);
}
.loader::after {
  opacity: 0.83;
  transform: rotate(60deg);
}
@keyframes l23 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
