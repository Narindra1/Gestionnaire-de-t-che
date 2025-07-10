<script setup>
let role1 = {
  id: 1,
  nom: "ADMIN",
};
let role2 = {
  id: 1,
  nom: "MANAGER",
};
let residence1 = {
  id: 9,
  ville: "antananarivo",
  quartier: "Ambohimarina",
};
let residence2 = {
  id: 4,
  ville: "antananarivo",
  quartier: "Ankatso",
};
let residence3 = {
  id: 99,
  ville: "antananarivo",
  quartier: "Ankaraobato",
};

let user1 = {
  id: 1,
  nom: "Marius",
  role: role1,
  residence: residence1,
};
let user2 = {
  id: 1,
  nom: "Do",
  role: role2,
  residence: residence1,
};
let user3 = {
  id: 1,
  nom: "Narindra",
  role: role1,
  residence: residence1,
};
let user4 = {
  id: 1,
  nom: "Khaleba",
  role: role2,
  residence: residence1,
};
let user5 = {
  id: 1,
  nom: "Narindra2",
  role: role1,
  residence: residence1,
};

let users = [];
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(user5);

console.log("Voici les listes des utilisateurs: ", users);

function getAllResidence(users) {
  let residences = [];
  let newResidences = [];
  for (let i = 0; i < users.length; i++) {
    let residence = users[i].residence;
    residences.push(residence);
  }
  newResidences = [...new Set(residences)];
  return newResidences;
}

let test = getAllResidence(users);
console.log("Voici les résidences de chaque utilisateurs", test);

//====================================================================================

function getAllResidenceForAdminUser(users) {
  let residences = [];
  let newResidences = [];

  for (let i = 0; i < users.length; i++) {
    let role = users[i].role;
    let residence = users[i].residence;
    //if (role == role1) : comparaison ana objet 2

    //comparaison natif(int, string,...)
    if (role.nom == "ADMIN") {
      residences.push(residence);
    }
  }
  newResidences = [...new Set(residences)];
  return newResidences;
}
let resids = getAllResidenceForAdminUser(users);
console.log("Residences ADMIN", resids);
</script>
<template>
  <h1>Salama jiaby</h1>
</template>
