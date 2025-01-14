document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    redirigerEtSauvegarder(this.id);
  });
});

/**
 * Rediriger vers la bonne page et enregistrer la valeur du mode génération
 */
function redirigerEtSauvegarder(buttonId) {
  const paramChoix = "?choix=";
  let url = "https://artur.art";

  // eslint-disable-next-line no-undef
  const client = ClientArtur.charger();
  client.set("modeGeneration", buttonId);

  // Ça ne fait aucun sens..
  // Pourquoi je ne peux pas juste rediriger vers selection-approache ?
  if (buttonId === "quiz") {
    url = `https://artur.art/selection-approache ${ paramChoix }${ buttonId }`;
  }
  else if (buttonId === "imgRef") {
    url = `https://artur.art/image-generation-2/ ${ paramChoix }${ buttonId }`;
  }
  window.location.href = url;

  /* Façon que je voulais utiliser mais qui ne fonctionne pas..

  window.location.href =
    buttonId === "quiz" ? "https://artur.art/selection-approache"
      :
      buttonId === "imgRef" ? "https://artur.art/image-generation-2/"
        :
        "https://artur.art";

  */
}