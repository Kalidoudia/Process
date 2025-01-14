Réaliisé par https://github.com/AmariAbedlahmid dans la branche AbedlahmidA_FiltrerArtiste_CreationFonctionFiltrerArtiste


Faire une fonction javascript qui va passer à travers cette liste de json et calculer les trois artistes les plus populaires.

Voici la structure de la liste d'objet : [
    {
        "action": "no",
        "id": "53843",
        "name": "KIGALI’S REALNESS (Copy)",
        "attribute": "Cubisme, Maximalist, Neutral, Urban",
        "image": "https://artur.art/wp-content/uploads/2024/04/kigali.webp",
        "artist": "Zema"
    },
    {
        "action": "love",
        "id": "34301",
        "name": "Titre à venir",
        "attribute": "Cubisme, In, Neutral, Urban",
        "image": "https://artur.art/wp-content/uploads/2024/06/Cedric_TaillonPascal_Foisy_St-Denis.jpg",
        "artist": "Cédric Taillon"
    },
    {
        "action": "like",
        "id": "14461",
        "name": "Fork and bottle",
        "attribute": "Cubisme, Maximalist, Neutral, Urban",
        "image": "https://artur.art/wp-content/uploads/2024/06/Labrona_Fork_and_Bottle_St-Denis.jpg",
        "artist": "Labrona"
    }
]
Donc, quand la valeur est no ça vaut 0. Quand la valeur est like ça vaut 1 et quand c'est love ça vaut 2
Donc, ça va permettre d'avoir un score pour chaque artiste. Celui qui a le plus de points est le numéro 1, etc.

Si deux ont le même nombre de points mais que un a plus de love que de like, alors il est premier sur l'autre

Si tout est égal, alors c'est premier arrivé premier servi
