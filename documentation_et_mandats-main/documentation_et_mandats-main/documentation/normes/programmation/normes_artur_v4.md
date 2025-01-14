# Normes de programmation de Artur.Art

## Table des matières
1. HTML
2. CSS
3. JavaScript (js)
4. Elementor : Nommage des Sections et des Widgets
5. Clean code
6. Rétroaction obligatoire
7. Résumé
8. Annexe

## 1. HTML

Le HTML doit être structuré de manière logique et lisible. Utilisez les balises sémantiques, nommez les id et class de manière descriptive et organisez le contenu pour faciliter sa lecture.

Exemple d'une section HTML dans un bloc Elementor :

```html
<!-- Section de présentation -->
<section id="section-presentation">
    <div class="contenu-presentation">
        <h1>Notre entreprise</h1>
        <p>Nous sommes specialises dans le developpement web.</p>
    </div>
</section>
```

### Principes
- Utilisez des balises sémantiques (`<section>`, `<article>`, `<header>`, `<footer>`) pour structurer le contenu
- Utilisez des id pour les éléments uniques qui sont utilisés une seule fois sur une page (ex: `id="section-presentation"`)
- Utilisez des classes pour les éléments qui apparaissent plusieurs fois et qui partagent un style ou un comportement commun (ex: `class="contenu-presentation"`)
- Évitez les styles en ligne. Préférez définir les styles dans un bloc `<style>` ou un fichier CSS

## 2. CSS

En CSS, privilégiez des noms de classes descriptifs et des styles modulaires. Organisez le code CSS par section pour éviter les conflits de style.

Exemple de style CSS dans un bloc HTML d'Elementor :

```css
/* Style pour la section de presentation */
#section-presentation {
    background-color: #f5f5f5;
    padding: 40px;
}

/* Style pour le contenu de presentation */
.contenu-presentation {
    text-align: center;
    max-width: 600px;
    margin: auto;
}

.contenu-presentation h1 {
    font-size: 2rem;
    color: #333;
}

.contenu-presentation p {
    font-size: 1rem;
    color: #666;
}
```

### Principes
- Classes vs IDs : Utilisez des classes pour les styles réutilisables et des IDs pour les éléments uniques
- Organisation par section : Définissez les styles de chaque section dans un bloc spécifique, en suivant un ordre logique
- Noms clairs et descriptifs : Choisissez des noms qui décrivent précisément le rôle ou l'emplacement de chaque élément
- Styles de texte cohérents : Utilisez des tailles, couleurs et polices cohérentes pour améliorer l'uniformité visuelle

## 3. JavaScript (js)

En JavaScript, privilégiez des fonctions claires et bien nommées. Assurez-vous que le code est aussi explicite que possible pour minimiser le besoin de commentaires.

**IMPORTANT** : Suivre le guide de style JavaScript de Google : [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html) (à part la section 3)

### Principes
- Noms explicites : Les noms de fonctions et de variables doivent être explicites
- Commentaires pour clarifier : Commentez les étapes importantes ou sections du code qui pourraient ne pas être immédiatement évidentes
- Organisation : Limitez la portée des variables aux blocs ou aux fonctions où elles sont nécessaires (avec let ou const idéalement)
- Gestion des événements : Utilisez `document.addEventListener('DOMContentLoaded', ...)` pour exécuter des scripts après le chargement de la page
- Points-virgules obligatoires : Toujours mettre des points-virgules à la fin des lignes de commande

### RÈGLES À RESPECTER DANS L'ÉCRITURE DU CODE

#### Indentation et formatage
- Utiliser une indentation de 2 espaces
- Toujours utiliser des guillemets doubles
- Toujours utiliser des points-virgules
- Pas d'espaces inutiles en fin de ligne
- Ajouter un espace entre les blocs de code
- Toujours utiliser des accolades dans les instructions de contrôle
- Ne pas utiliser de virgules finales
- Éviter les nombres magiques, sauf pour les index de tableaux ou [0, 1]
- Ajouter des espaces dans les accolades des objets
- Ne pas utiliser d'espaces dans les crochets des tableaux

#### Qualité du code et bonnes pratiques
- Toujours utiliser une égalité stricte (`===`)
- Avertir en cas de variables non utilisées
- Avertir lors de l'usage de console
- Interdire l'utilisation de var
- Préférer const à let
- Préférer les fonctions fléchées
- Autoriser les corps concis dans les fonctions fléchées

#### Conventions de nommage
- Appliquer une convention de camelCase
- Interdire les underscores inutiles
- Limiter la longueur des identifiants à un minimum de 2 et un maximum de 30 caractères, avec des exceptions pour i, j, x, et y

#### Style des commentaires
- Toujours ajouter des espaces après les commentaires
- Exiger des commentaires JSDoc pour certaines déclarations (fonctions, méthodes, classes)
- Désactiver la règle valid-jsdoc pour éviter les conflits avec require-jsdoc

#### Formatage du code
- Limiter la longueur des lignes à 80 caractères
- Utiliser les retours à la ligne Unix (LF)

#### Bonnes pratiques
- Assurer des retours cohérents dans les fonctions
- Interdire l'utilisation de `new Object()`
- Interdire l'utilisation de `eval()`
- Avertir en cas d'utilisation de `alert()`
- Interdire l'évaluation implicite avec `setTimeout()` ou `setInterval()`
- Interdire les importations en double

#### Documentation supplémentaire
- [Documentation MDN sur les événements](https://developer.mozilla.org/fr/docs/Web/API/Event)
- Consultez l'annexe à la fin du document

## 4. Elementor : Nommage des Sections et des Widgets

Dans Elementor, un bon nommage est essentiel pour organiser les sections, colonnes et widgets de manière logique et pour faciliter la maintenance du site.

### Principes
- Noms explicites : Les noms des sections, colonnes ou widgets doivent être explicites et en lien avec leur fonction
- JavaScript centralisé : Le JavaScript doit TOUJOURS être centralisé dans un seul bloc Elementor situé dans la dernière section dans le dernier bloc

### Exceptions pour le JavaScript
1. Librairies nécessitant un chargement précoce
2. Blocs Elementor globaux contenant du JavaScript

### Exemples de nommage
- Sections : introduction, services, contact
- Colonnes : colonne-gauche, colonne-droite, colonne-centrale
- Widgets : widget-titre, widget-bouton-contact, widget-image-equipe

## 5. Clean code

Clean code consiste à écrire du code de manière claire et compréhensible pour d'autres développeurs.

### Principes de base
- Noms explicites : Chaque variable, fonction et classe doit avoir un nom descriptif
- Commentaire minimal : Le code doit être auto-explicatif
- Éviter les répétitions : Utiliser des classes et des fonctions pour organiser le code
- Respect des normes : Suivre les conventions de codage établies

### Ressources
- [Clean Architecture par Uncle Bob](https://blog.cleancoder.com/uncle-bob/2011/11/22/Clean-Architecture.html)
- [Clean Coding pour débutants](https://www.freecodecamp.org/news/clean-coding-for-beginners/)

## 6. Rétroaction obligatoire

### Pourquoi ?
1. Amélioration Continue
2. Partage de Connaissances
3. Standardisation
4. Détection de Bugs
5. Validation Externe

### 6.1 Attitudes à avoir lors de la rétroaction du code
- Être actif dans les discussions
- Être constructif et positif sur GitHub
- Ajuster son code selon les commentaires reçus
- Remercier pour la détection d'erreurs
- Voir la rétroaction comme une aide pour s'améliorer

### Processus de rétroaction
1. Vérifier que le code respecte les conventions
2. Créer une branche dans le dépôt front-end
3. Informer les autres via Discord
4. Rester à l'écoute des commentaires
5. Obtenir le consensus avant les modifications

### Comment fournir de la rétroaction
1. Créer une branche : `NomBrancheOriginale_Revision_SonNom`
2. Pour Wordpress : `w_révision_nomDeLaPageRévisée_nomDuStagiaire_version`
3. Annoncer la proposition sur Discord
4. Expliquer les avantages et identifier les failles
5. Comparer les performances si pertinent

## 7. Résumé

- HTML : Utiliser des balises sémantiques et des noms descriptifs
- CSS : Privilégier les classes réutilisables et l'organisation par section
- JavaScript : Utiliser des noms explicites et une structure logique
- Elementor : Nommer clairement les sections, colonnes et widgets
- Clean Code : Écrire du code maintenable et bien documenté
- Rétroaction : Participer activement au processus de revue de code

## 8. Annexe

### 8.1 Gestion des événements dans le bloc JS

#### 1. Éviter les attributs d'événements HTML
❌ Mauvaise pratique :
```html
<button onclick="maFonction()">Cliquez ici</button>
```

✅ Bonne pratique :
```javascript
const bouton = document.getElementById('monBouton');
bouton.addEventListener('click', maFonction);
```

#### 2. Délégation des événements
```javascript
document.getElementById('liste').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('Élément cliqué :', event.target.textContent);
    }
});
```

#### 3. Gestion des écouteurs
```javascript
const bouton = document.getElementById('monBouton');
const handler = () => console.log('Bouton cliqué !');
bouton.addEventListener('click', handler);

// Supprimer l'écouteur
bouton.removeEventListener('click', handler);
```

#### 4. Utiliser des fonctions nommées
```javascript
// Bon exemple
function gererClic() {
    console.log('Cliqué');
}
element.addEventListener('click', gererClic);
```

#### 5. Gestion des comportements par défaut
```javascript
document.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Lien cliqué');
});
```

### 8.2 Types d'événements

#### Événements du DOM
- Souris : click, dblclick, mousedown, mouseup, mousemove, mouseenter/mouseleave
- Clavier : keydown, keyup
- Formulaire : focus, blur, change, input, submit, reset

#### Événements document/fenêtre
- Chargement : DOMContentLoaded, load, beforeunload, unload
- Fenêtre : resize, scroll

#### Événements multimédia
- Lecture : play, pause, ended, timeupdate, volumechange

#### Événements réseau
- Connectivité : online, offline

#### Événements personnalisés
```javascript
const event = new CustomEvent('monEvenement', {
    detail: { message: 'Hello World!' }
});
```

#### Événements pointeur
- Interactions : pointerdown, pointermove, pointerup

#### Autres événements
- Divers : wheel, drag/drop, animationstart/end/iteration, transitionend