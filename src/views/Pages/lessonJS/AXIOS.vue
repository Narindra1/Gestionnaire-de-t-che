<script>
import axios from "axios";

//axios avec async/await
async function getUser() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log("Utilisateur :", res.data);
  } catch (err) {
    console.error("Erreur :", err);
  }
}
getUser();

//axios avec .then()

//GET
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Erreur :", error.message);
  });

//POST
axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "New Post",
    body: "Hello World! This is a test.",
    userId: 1,
  })
  .then((res) => console.log("Nouveau Post ajouté :", res.data))
  .catch((err) => console.error("Erreur :", err));
</script>
<template>
  <p>exemple d'utilisation d'API Axios</p>
</template>
