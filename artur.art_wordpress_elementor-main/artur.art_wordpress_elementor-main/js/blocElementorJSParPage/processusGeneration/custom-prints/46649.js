
/*
*
*          a     rrrrr   ttttt  u   u  rrrrr    .      a     rrrrr   ttttt
*         a a    r   r     t    u   u  r   r   . .    a a    r   r     t
*        aaaaa   rrrrr     t    u   u  rrrrr  .   .  aaaaa   rrrrr     t
*       a     a  r   r     t    u   u  r  r   . .   a     a  r   r     t
*       a     a  r   r     t    uuuu   r   r    .   a     a  r   r     t
*
*
* -------------------------------------------------------------------------
*                             !!! TRÈS IMPORTANT !!!
* Le javascript doit être dans le bloc elementor situé à la fin de la page
* -------------------------------------------------------------------------
*
* Auteur initial de la page :
*
* Mandat initial :
*
* Date de création :
*
* -------------------------------------------------------------------------
*                             !!! TRÈS IMPORTANT !!!
*          Toujours documenter à chaque modification dans cette en-tête !!!
* -------------------------------------------------------------------------
*
* Auteur/date - dernière modification : Nicolas Bergeron - 2024/12/01:12:30
*
* Ce qui a été modifié :
* 1)
* 2)
* 3)
*
*
* -------------------------------------------------------------------------
*
*
* Fonctionnalités importantes implémentées :
* 1)
* 2)
* 3)
*
* Fonctionnalités à implémenter
* 1)
* 2)
* 3)
*
* Bugs à corriger
* 1)
* 2)
* 3)
*
*
* TOUJOURS LAISSER EXACTEMENT TROIS ESPACES VIDES ENTRE CHAQUE SECTION
*/



/* DÉCLARATION DES VARIABLES
*
* -------------------------------------------------------------------------
* TRÈS IMPORTANT : noms de variables significatifs toujours en français !!!
* -------------------------------------------------------------------------
*/


/* FONCTIONS DE PREMIER NIVEAU (elles n'utilisent pas une autre fonction dedans)
*
* * -----------------------------------------------------------------------
* TRÈS IMPORTANT : noms de fonction significatifs toujours en français !!!
* -------------------------------------------------------------------------
*
*/

// Décrire que fait la fonction ou un groupe de fonctions
/**
 *
 * @param {String} produitSelectionne Le type de produit.
 */
function choisirEtAvancer(produitSelectionne) {

  // eslint-disable-next-line no-undef
  const client = ClientArtur.charger();

  client.set("modeImpression",produitSelectionne);
  client.sauvegarder();

  window.location.href = "https://artur.art/selection-style/";
}



/* FONCTIONS D'ORDRE SUPÉRIEUR
 *
 * TRÈS IMPORTANT : noms de fonction significatifs toujours en français !!!
 *
 */

/**
 * Calcule le prix total d'une commande, y compris la taxe et la remise.
 *
 *
 *
 */



/* ÉCOUTEURS LIÉS AUX ÉLÉMENTS HTML
*
* -------------------------------------------------------------------------
*                         !!! TRÈS IMPORTANT !!!
* - Ne pas utiliser onclick="" ou autre événement directement dans la balise
* - Toujours utiliser des écouteurs d'événements déclarés ici
* -------------------------------------------------------------------------
*/




/* ÉCOUTEURS LIÉS AUX ÉVÉNEMENTS
* - Ne pas utiliser onclick="" ou autre événement directement dans la balise
* - Toujours utiliser des écouteurs d'événements déclarés ici
*/


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



/* IMPORTATION DES LIBRAIRIES OU SCRIPTS QUI PEUVENT L'ÊTRE À LA FIN
*
* Vous pouvez créer un bloc au début de la page uniquement que pour importer
* les librairies si ces dernières doivent l'être absolument au début.
*
*/