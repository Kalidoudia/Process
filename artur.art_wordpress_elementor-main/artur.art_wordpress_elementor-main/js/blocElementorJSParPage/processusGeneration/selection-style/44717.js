const maximumStyleSelectionne = 2;
const baliseMessageErreur = document.getElementById("error-message");

/** Sauvegarder le ou les styles sélectionnés et envoyer le formulaire
*
*/
function sauvegarderStyle(event) {

  event.preventDefault();

  const selectedImages = document.querySelectorAll(".selectImage.selected");
  const selectedStyles = Array.from(selectedImages).map(img => img.alt);
  if (selectedStyles.length > 0) {

    // Mettre les styles dans l'input car c'est requis pour la prochaine page
    const inputValeurStyle = document.getElementById("valeurStyle");
    inputValeurStyle.value = selectedStyles.join(",");

    // eslint-disable-next-line no-undef
    const client = ClientArtur.charger();

    // Mettre les styles sélectionnés dans l'attribut styles
    client.set("styles",selectedStyles);

    // Envoyer le formulaire une fois les styles sauvegardés
    event.target.submit();
  } else {
    baliseMessageErreur.textContent = "Veuillez sélectionner au moins un style";
  }
}

/**
*
*/
function inverserEtatSelectionStyle(image) {
  const selectedImages = document.querySelectorAll(".selectImage.selected");
  const isSelected = image.classList.contains("selected");
  let messageErreur = "";

  if (isSelected) {
    image.classList.remove("selected");
  }
  else {
    if (selectedImages.length < maximumStyleSelectionne) {
      image.classList.add("selected");
    }
    else {
      messageErreur = "Vous ne pouvez sélectionner que 1 ou 2 images.";
    }
    baliseMessageErreur.textContent = messageErreur;
  }
}

document.querySelectorAll(".selectImage").forEach(element => {
  element.addEventListener("click", event => {
    inverserEtatSelectionStyle(event.target);
  });
});

document.getElementById("formulaireStyle")
  .addEventListener("submit", (event) => { sauvegarderStyle(event); } );