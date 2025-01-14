
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

// Il est interdit de déclarer une variable non-utilisée
// const variableVariable = "";
const variableConstanteConstante = document.getElementById("id");



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
 * @param {number} prix Le montant sans les taxes.
 * @return {number} Le montant des taxes.
 */
function calculerTaxe(prix) {
  const TAUX_TAXES = 0.15;
  const CENT = 100;
  return prix * (TAUX_TAXES / CENT);
}



/* FONCTIONS D'ORDRE SUPÉRIEUR
 *
 * TRÈS IMPORTANT : noms de fonction significatifs toujours en français !!!
 *
 */

/**
 * Calcule le prix total d'une commande, y compris la taxe et la remise.
 *
 * @param {number} prix Le prix initial de l'article.
 * @param {number=} remise La remise à appliquer (%), par défaut = 0
 * @return {number} Le prix total après application de la taxe et de la remise.
 */
function calculerPrixTotal(prix, remise = 0) {
  const CENT = 100;
  const montantTaxe = calculerTaxe(prix);
  const montantRemise = prix * (remise / CENT);
  return prix + montantTaxe - montantRemise;
}



/* ÉCOUTEURS LIÉS AUX ÉLÉMENTS HTML
*
* -------------------------------------------------------------------------
*                         !!! TRÈS IMPORTANT !!!
* - Ne pas utiliser onclick="" ou autre événement directement dans la balise
* - Toujours utiliser des écouteurs d'événements déclarés ici
* -------------------------------------------------------------------------
*/

variableConstanteConstante.addEventListener("click", function () {
  calculerPrixTotal(this.id);
});



/* ÉCOUTEURS LIÉS AUX ÉVÉNEMENTS
* - Ne pas utiliser onclick="" ou autre événement directement dans la balise
* - Toujours utiliser des écouteurs d'événements déclarés ici
*/

document.addEventListener("DOMContentLoaded", () => {
//   alert("Coucou ! Ceci a été exécuté après le chargement de la page ;) ");
});



/* IMPORTATION DES LIBRAIRIES OU SCRIPTS QUI PEUVENT L'ÊTRE À LA FIN
*
* Vous pouvez créer un bloc au début de la page uniquement que pour importer
* les librairies si ces dernières doivent l'être absolument au début.
*
*/