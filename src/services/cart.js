import { taches } from "@/data/taches";
function getCartForList(idList) {
  let tache = [];
  let idListe = 0;
  let tasks = [];

  for (let i = 0; i < taches.length; i++) {
    tache = taches[i];
    idListe = taches[i].liste.id;
    if (idListe == idList) {
      tasks.push(tache);
    }
  }

  return tasks;
}
export { getCartForList };
