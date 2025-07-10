<script setup>
async function getUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log("Utilisateur :", data);
  } catch (err) {
    console.error("Erreur :", err);
  }
}
getUser();

//GET
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log("Données reçue", data);
  })
  .catch((error) => {
    console.log("Erreur", error);
  });

//POST
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    title: "New Post",
    body: "Hello World! This is a test.",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Nouveau poste créer", data);
  })
  .catch((error) => {
    console.log("Erreur", error);
  });

//async/await
async function test() {
  console.log("Ready");
  let example = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log("I will print second");
}

test();
console.log("I will print first");
</script>
<template>
  <p>Voici quelques exemples d'utilisation du fetch API</p>
</template>
