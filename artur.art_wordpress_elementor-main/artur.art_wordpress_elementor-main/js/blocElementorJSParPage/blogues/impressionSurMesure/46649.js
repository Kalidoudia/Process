
/**
 * Ajoute le produit dans le client et charge la prochaine page.
 * @param {String} produitSelectionne Le type de produit.
 */
function choisirEtAvancer(produitSelectionne) {

  // eslint-disable-next-line no-undef
  const client = ClientArtur.charger();

  client.set("modeImpression",produitSelectionne);
  client.sauvegarder();

  window.location.href = "https://artur.art/selection-style/";
}

document.getElementById("clickableDivPrint")
  .addEventListener("click", () => choisirEtAvancer("Print"));
document.getElementById("btnPrint")
  .addEventListener("click", () => choisirEtAvancer("Print"));

document.getElementById("clickableDivMural")
  .addEventListener("click", () => choisirEtAvancer("mural"));
document.getElementById("btnMural")
  .addEventListener("click", () => choisirEtAvancer("mural"));

document.getElementById("clickableDivTableau")
  .addEventListener("click", () => choisirEtAvancer("tableau"));
document.getElementById("btnTableau")
  .addEventListener("click", () => choisirEtAvancer("tableau"));