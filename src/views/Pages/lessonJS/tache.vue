<script setup>
const taches = [
  {
    id: 1,
    titre: "Développement interface utilisateur",
    description: "Créer l’interface principale du tableau de bord.",
    objectifsSpecifiques:
      "Concevoir une maquette, l’implémenter, et la faire valider.",
    contexteProjet: "Projet de gestion de tâches collaboratif.",
    pieceJointe: "mockup-interface.png",
    dateDebut: "2025-06-01",
    dateLimite: "2025-06-15",
    dureeEstimee: "2 semaines",
    priorite: "Haute",
    statut: "En cours",
    etiquettes: [
      { id: 1, nom: "UI", couleur: "#3498db" },
      { id: 2, nom: "Urgent", couleur: "#e74c3c" },
    ],
    acteur: [
      {
        id: 101,
        nom: "Alice Dupont",
        photo: "alice.jpg",
      },
    ],
    liste: {
      id: 1,
      nom: "À faire",
      ordre: 1,
    },
  },
  {
    id: 2,
    titre: "Rédaction documentation technique",
    description: "Écrire la documentation complète de l’API backend.",
    objectifsSpecifiques:
      "Lister les endpoints, expliquer les paramètres, ajouter des exemples.",
    contexteProjet: "Documentation destinée aux développeurs intégrateurs.",
    pieceJointe: "doc-backend-template.pdf",
    dateDebut: "2025-06-03",
    dateLimite: "2025-06-12",
    dureeEstimee: "1 semaine",
    priorite: "Moyenne",
    statut: "Non commencé",
    etiquettes: [{ id: 3, nom: "Backend", couleur: "#2ecc71" }],
    acteur: [
      {
        id: 102,
        nom: "Jean Martin",
        photo: "jean.png",
      },
    ],
    liste: {
      id: 2,
      nom: "Planifiée",
      ordre: 2,
    },
  },
  {
    id: 3,
    titre: "Tests fonctionnels",
    description: "Vérifier le bon fonctionnement des modules développés.",
    objectifsSpecifiques:
      "Créer des cas de test, les exécuter et corriger les anomalies.",
    contexteProjet: "Cycle de validation des livrables du sprint.",
    pieceJointe: "tests-cas.xlsx",
    dateDebut: "2025-06-05",
    dateLimite: "2025-06-20",
    dureeEstimee: "1.5 semaines",
    priorite: "Haute",
    statut: "En attente",
    etiquettes: [{ id: 4, nom: "QA", couleur: "#f1c40f" }],
    acteur: [
      {
        id: 103,
        nom: "Sophie Tremblay",
        photo: "sophie.jpg",
      },
    ],
    liste: {
      id: 3,
      nom: "À valider",
      ordre: 3,
    },
  },
  {
    id: 4,
    titre: "Mise en production",
    description: "Déployer la version stable de l'application.",
    objectifsSpecifiques:
      "Préparer le package, le tester et lancer la mise en ligne.",
    contexteProjet: "Livraison version 1.0",
    pieceJointe: "release-notes-v1.pdf",
    dateDebut: "2025-06-15",
    dateLimite: "2025-06-18",
    dureeEstimee: "3 jours",
    priorite: "Haute",
    statut: "Planifié",
    etiquettes: [{ id: 5, nom: "Déploiement", couleur: "#9b59b6" }],
    acteur: [
      {
        id: 104,
        nom: "Marc Leroy",
        photo: "marc.jpg",
      },
    ],
    liste: {
      id: 4,
      nom: "Déploiement",
      ordre: 4,
    },
  },
  {
    id: 5,
    titre: "Réunion client",
    description: "Organiser une réunion pour valider les spécifications.",
    objectifsSpecifiques: "Recueillir les retours et ajuster le backlog.",
    contexteProjet: "Suivi du projet avec le client final.",
    pieceJointe: "compte-rendu.docx",
    dateDebut: "2025-06-04",
    dateLimite: "2025-06-04",
    dureeEstimee: "1 jour",
    priorite: "Moyenne",
    statut: "Terminé",
    etiquettes: [{ id: 6, nom: "Communication", couleur: "#34495e" }],
    acteur: [
      {
        id: 105,
        nom: "Julie Moreau",
        photo: "julie.jpg",
      },
    ],
    liste: {
      id: 5,
      nom: "Réunions",
      ordre: 5,
    },
  },
  {
    id: 6,
    titre: "Création base de données",
    description: "Modéliser et implémenter la base de données.",
    objectifsSpecifiques: "Créer les tables, relations et sécuriser les accès.",
    contexteProjet: "Initialisation de l’infrastructure.",
    pieceJointe: "schema-bdd.png",
    dateDebut: "2025-06-02",
    dateLimite: "2025-06-10",
    dureeEstimee: "5 jours",
    priorite: "Élevée",
    statut: "En cours",
    etiquettes: [{ id: 7, nom: "BDD", couleur: "#1abc9c" }],
    acteur: [
      {
        id: 106,
        nom: "Nina Petit",
        photo: "nina.jpg",
      },
    ],
    liste: {
      id: 1,
      nom: "À faire",
      ordre: 1,
    },
  },
  {
    id: 7,
    titre: "Design logo",
    description: "Concevoir le logo du projet en haute résolution.",
    objectifsSpecifiques: "Proposer 3 maquettes, choisir une version finale.",
    contexteProjet: "Identité visuelle de l’application.",
    pieceJointe: "logo-concepts.ai",
    dateDebut: "2025-06-01",
    dateLimite: "2025-06-07",
    dureeEstimee: "3 jours",
    priorite: "Faible",
    statut: "Terminé",
    etiquettes: [{ id: 8, nom: "Design", couleur: "#e67e22" }],
    acteur: [
      {
        id: 107,
        nom: "Laura Gauthier",
        photo: "laura.jpg",
      },
    ],
    liste: {
      id: 6,
      nom: "Design",
      ordre: 6,
    },
  },
  {
    id: 8,
    titre: "Analyse de performance",
    description: "Mesurer la performance de l’application web.",
    objectifsSpecifiques:
      "Utiliser Lighthouse, détecter les goulots d’étranglement.",
    contexteProjet: "Optimisation front-end avant mise en production.",
    pieceJointe: "rapport-performance.pdf",
    dateDebut: "2025-06-08",
    dateLimite: "2025-06-11",
    dureeEstimee: "4 jours",
    priorite: "Moyenne",
    statut: "En cours",
    etiquettes: [{ id: 9, nom: "Optimisation", couleur: "#16a085" }],
    acteur: [
      {
        id: 108,
        nom: "Hugo Lefèvre",
        photo: "hugo.jpg",
      },
    ],
    liste: {
      id: 2,
      nom: "Planifiée",
      ordre: 2,
    },
  },
  {
    id: 9,
    titre: "Traduction interface",
    description: "Traduire l’interface utilisateur en anglais et espagnol.",
    objectifsSpecifiques: "S’assurer de l’internationalisation avec i18n.",
    contexteProjet: "Ciblage international du produit.",
    pieceJointe: "traductions.xlsx",
    dateDebut: "2025-06-05",
    dateLimite: "2025-06-14",
    dureeEstimee: "1 semaine",
    priorite: "Basse",
    statut: "Non commencé",
    etiquettes: [{ id: 10, nom: "Internationalisation", couleur: "#7f8c8d" }],
    acteur: [
      {
        id: 109,
        nom: "Emma Fortin",
        photo: "emma.jpg",
      },
    ],
    liste: {
      id: 7,
      nom: "Traduction",
      ordre: 7,
    },
  },
  {
    id: 10,
    titre: "Intégration continue (CI)",
    description: "Configurer l’intégration continue avec GitHub Actions.",
    objectifsSpecifiques: "Exécuter les tests automatiquement à chaque push.",
    contexteProjet: "Amélioration du workflow de déploiement.",
    pieceJointe: "ci-config.yml",
    dateDebut: "2025-06-06",
    dateLimite: "2025-06-09",
    dureeEstimee: "2 jours",
    priorite: "Haute",
    statut: "En cours",
    etiquettes: [{ id: 11, nom: "DevOps", couleur: "#2980b9" }],
    acteur: [
      {
        id: 110,
        nom: "Paul Dubois",
        photo: "paul.jpg",
      },
    ],
    liste: {
      id: 8,
      nom: "Automatisation",
      ordre: 8,
    },
  },
];
console.log(taches);

function getList() {
  let listes = [];
  let newListes = [];

  // ========================================
  for (let i = 0; i < taches.length; i++) {
    let liste = taches[i].liste;
    console.log(liste);
    if (!newListes.includes(liste.id)) {
      console.log("push");
      listes.push(liste);

      newListes.push(liste.id);
    }
  }

  // =======================================
  /* listes = taches.map((e) => {
    return e.listes;
  });

  // spread operator
  // user = {

  // }
  // admin = {...user , role:"admin"}

  newListes = listes.map((e) => {
    return JSON.stringify(e);
  });

  newListes = [...new Set(newListes)];

  newListes = newListes.map((e) => {
    return JSON.parse(e);
  });
*/
  // =======================================

  return newListes;
}
let test1 = getList();
console.log("valin'ilay tes1:", test1);

console.log(
  "//========================================================================================="
);
/*let tableauId = [];

for (let i = 0; i < taches.length; i++) {
  let id = taches[i].liste.id;
  tableauId.push(id);
}*/
function getCartsForList(taches, idList) {
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
let testa = getCartsForList(taches, 1);
let testb = getCartsForList(taches, 2);
let testc = getCartsForList(taches, 3);
let testd = getCartsForList(taches, 4);
let teste = getCartsForList(taches, 5);
let testf = getCartsForList(taches, 6);
let testg = getCartsForList(taches, 7);
let testh = getCartsForList(taches, 8);
console.log("Valin'ilay test 2", testa);
console.log("Valin'ilay test 2", testb);
console.log("Valin'ilay test 2", testc);
console.log("Valin'ilay test 2", testd);
console.log("Valin'ilay test 2", teste);
console.log("Valin'ilay test 2", testf);
console.log("Valin'ilay test 2", testg);
console.log("Valin'ilay test 2", testh);
</script>
<template>
  <h3>ANDRANA FONCTION GETLIST</h3>
</template>
