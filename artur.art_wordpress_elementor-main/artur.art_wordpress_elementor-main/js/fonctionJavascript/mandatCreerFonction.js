/**
 *
 */
function FiltrerArtistes(artistes) {
  // Scores associés aux actions
  const actionScores = { no: 0, like: 1, love: 2 };
  // Stocke les scores de chaque artiste
  const scoresParArtiste = {};

  // Calcul des scores pour chaque artiste
  artistes.forEach((art) => {
    const artiste = art.artist;
    // Score de l'action (0 par défaut)
    const score = actionScores[art.action] || 0;

    // Initialisation ou mise à jour des scores de l'artiste
    if (!scoresParArtiste[artiste]) {
      scoresParArtiste[artiste] = 0; // Initialise le score
    }
    scoresParArtiste[artiste] += score; // Ajoute le score
  });

  // Tri des artistes par score decroissant,
  // puis par ordre alphabetique en cas d'egalité
  return Object.entries(scoresParArtiste)
    .sort(([artisteA, scoreA], [artisteB, scoreB]) => {
      // tri par score décroissant
      if (scoreB !== scoreA) {
        return scoreB - scoreA; // Tri par score
      }
      // tri alphabetique en cas d'egalité
      // Tri alphabétique des noms des artistes
      return artisteA.localeCompare(artisteB);
    })
    // Retourne uniquement le nom et le score
    .map(([artiste, score]) => ({ artiste, score }));
}

// test de la fonction et affichage
const artistes = [
  {
    action: "no",
    id: "53843",
    name: "KIGALI’S REALNESS (Copy)",
    attribute: "Cubisme, Maximalist, Neutral, Urban",
    image: "https://artur.art/wp-content/uploads/2024/04/kigali.webp",
    artist: "Zema"
  },
  {
    action: "love",
    id: "53843",
    name: "KIGALI’S REALNESS (Copy)",
    attribute: "Cubisme, Maximalist, Neutral, Urban",
    image: "https://artur.art/wp-content/uploads/2024/04/kigali.webp",
    artist: "amari"
  },
  {
    action: "love",
    id: "34301",
    name: "Titre à venir",
    attribute: "Cubisme, In, Neutral, Urban",
    // eslint-disable-next-line max-len
    image: "https://artur.art/wp-content/uploads/2024/06/Cedric_TaillonPascal_Foisy_St-Denis.jpg",
    artist: "Cédric Taillon"
  },
  {
    action: "like",
    id: "14461",
    name: "Fork and bottle",
    attribute: "Cubisme, Maximalist, Neutral, Urban",
    // eslint-disable-next-line max-len
    image: "https://artur.art/wp-content/uploads/2024/06/Labrona_Fork_and_Bottle_St-Denis.jpg",
    artist: "Labrona"
  }
];

// Résultat de la fonction
const classement = FiltrerArtistes(artistes);

// Affichage du résultat
console.log(classement);
