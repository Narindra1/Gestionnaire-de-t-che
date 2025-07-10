import { taches } from "@/data/taches";

function getLists() {
  let listes = [];
  let newListes = [];
  for (let i = 0; i < taches.length; i++) {
    let liste = taches[i].liste;
    console.log(liste);
    if (!newListes.includes(liste.id)) {
      listes.push(liste);

      newListes.push(liste.id);
    }
  }

  return listes;
}

export { getLists };
