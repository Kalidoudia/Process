
document.addEventListener("DOMContentLoaded", () => {
  // Sélectionne toutes les formes géométriques
  const shapes = document.querySelectorAll(".formegeo");

  // Ajoute l'événement de clic à chaque forme géométrique
  shapes.forEach((shape) => {
    shape.addEventListener("click", () => {
      // Désélectionne toutes les formes
      shapes.forEach((forme) => {
        forme.classList.remove("selected");
      });

      // Sélectionne la forme sur laquelle l'utilisateur a cliqué
      shape.classList.add("selected");
    });
  });
});

// Function to handle selection
/**
 *
 */
// eslint-disable-next-line no-unused-vars
function selectForm(element, format) {
  // Remove the 'selected' class from all forms
  const allForms = document.querySelectorAll(".forme div");
  allForms.forEach(form => form.classList.remove("selected"));

  // Add the 'selected' class to the clicked form
  element.classList.add("selected");

  // Enregistrer le choix du format
  // eslint-disable-next-line no-undef
  const client = ClientArtur.charger();
  client.set("format", format);

  // Redirect to the specified URL
  window.location.href = "https://artur.art/image-generation-3/";
}


// Fonction pour créer des boutons ronds avec les couleurs du cookie
/**
 *
 */
function displayColorButtons() {

  // Aller chercher le tableau couleurs dans localstorage
  // eslint-disable-next-line no-undef
  const client = ClientArtur.charger();
  const couleurs = client.get("couleurs");

  if (couleurs && Array.isArray(couleurs) && couleurs.length > 0) {
    const indexDernierePalette = couleurs.length - 1;
    const couleursChoisies = couleurs[indexDernierePalette];
    const affichageBouton = document.getElementById("colorButtonsContainer");

    // Vider le conteneur avant de le remplir avec les nouveaux boutons
    affichageBouton.innerHTML = "";

    // Créer un bouton pour chaque couleur
    couleursChoisies.forEach(color => {
      // Ajouter le '#' devant chaque couleur si ce n'est pas déjà fait
      if (color[0] !== "#") {
        color = `#${ color }`;
      }

      // Créer un élément bouton
      const button = document.createElement("button");
      button.classList.add("color-button"); // Ajouter une classe pour le style
      button.style.backgroundColor = color; // Appliquer la couleur de fond

      // Ajouter le bouton au conteneur
      affichageBouton.appendChild(button);
    });
  } else {
    // console.log("Aucune couleur sélectionnée dans le cookie.");
  }
}

// Appeler la fonction pour afficher les boutons lorsque la page est chargée
window.onload = displayColorButtons;