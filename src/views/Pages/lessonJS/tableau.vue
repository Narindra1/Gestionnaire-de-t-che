<script setup>
//fonction isPair
let number = 6;
function isPair(number) {
  if (number % 2 == 0) {
    console.log("le nombre est paire");
    return true;
  } else {
    console.log("le nombre est impaire");
    return false;
  }
}

let bolean = isPair(1);

//================================================================

//fonction getAllPaire
console.log("fonction getAllPaire");
let tabs = [14, 3, 5, 8, 9, 7, 12, 6, 4, 0, 8, 2];
function getAllPaire(tableau) {
  //  response = tableau.filter((tableau) => tableau % 2 == 0);
  let response = tableau.filter((element) => isPair(element));

  return response;
}
let arrays = [5, 3, 7, 9, 4];

let reponse = getAllPaire(arrays);
console.log(reponse);

//============================================================

//implementation
console.log("IMPLEMENTATION");
function getAllPaire2(tableau) {
  let responses = [];
  for (let i = 0; i < tableau.length; i++) {
    let element = tableau[i];
    let bool = isPair(element);
    if (bool) {
      responses.push(element);
    }
  }
  return responses;
}

let example = getAllPaire2(tabs);
console.log(example);
</script>
<template>
  <h4>Fonction isPair</h4>
</template>
