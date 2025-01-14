
let selectedBoxsapId = null;

document.addEventListener("DOMContentLoaded", () => {
  const approche = client.get("approche");
  // eslint-disable-next-line no-undef
  const client = ClientArtur.charger();

  afficherApproche(approche);
  afficherChoixSousApproche(approche);
  const boxes = document.querySelectorAll(".box-wrapper .box");
  boxes.forEach(box => {
    box.addEventListener("click", function() {
      selectedBoxsapId= this.id;
      boxes.forEach(box => box.classList.remove("selected"));
      this.classList.add("selected");
      client.set("sousApproche",this.id);
      client.sauvegarder();
    });
  });
});

// Obtenir l'approche choisie et l'afficher dans le titre
/**
 *
 */
function afficherApproche(approche) {
  const heading = document.getElementById("selected-approach");

  if (approche) {
    heading.textContent = `L’approche choisie : ${approche}`;

  } else {
    heading.textContent = "L’approche choisie :";
  }

}


document.addEventListener("DOMContentLoaded", () => {


  const retourLink = document.getElementById("back");
  retourLink.href = "https://artur.art/selection-approache/";

  document.querySelector(".btn").addEventListener("click", () => {
    if (typeof selectedBoxsapId !== "undefined" && selectedBoxsapId) {
      window.location.href = "https://artur.art/image-generation-2";
    } else {
      // eslint-disable-next-line no-alert
      alert("Veuillez sélectionner une boîte avant de continuer.");
    }
  });
});

/**
 *
 */
/* eslint-disable max-len */
/**
 *
 */
function afficherChoixSousApproche(approche) {
  const heading = document.getElementById("selected-approach");
  const contentContainer = document.getElementById("content-container");
  // Obtenir le nom de l'approche

  if (approche) {
    heading.textContent = `L’approche choisie : ${approche}`;

    // Add HTML content based on the selected box name
    let contentHtml = "";

    switch (approche) {
    case "By message":
    case
      "Par message":
      contentHtml = `
          <div class="box-wrapper">
              <div class="box" id="Liberté" >
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Liberté</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-liberte-50-1.png" alt="Liberté Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/liberte-2/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Écologiste">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Écologiste</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-plante-a-la-main-50-1.png" alt="Écologiste Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/ecologiste/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Paix">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Paix</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-pigeon-de-la-paix-50.png" alt="Paix Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/blog-paix/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Education">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Education</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-enseignement-50.png" alt="Education Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/blog-education/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Protection">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Protection</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-protection-50-1.png" alt="Protection Icon">
                  </div>
              </div>
                  <a style="color: #686666;" target="_blank" href="https://artur.art/blog-protection-de-la-vie" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Féministe">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Féministe</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-feminism-50.png" alt="Féministe Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/feministe/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Sexualité">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Sexualité</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-enseignement-50.png" alt="Sexualité Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/sexualite/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Égalité">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Égalité</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-egalite-des-sexes-50-1.png" alt="Égalité Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/blog-equality/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Racisme">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Racisme</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-racisme-50.png" alt="Racisme Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/racisme/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Dépression">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Dépression</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-coeur-brise-50.png" alt="Dépression Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/blog-mort/" class="learn-more">En savoir plus</a>
          </div>
          `;
      break;
    case "To offer":
    case "Pour offrir":
      contentHtml = `
          <div class="box-wrapper">
              <div class="box" id="Mariage">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Mariage</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-jeune-mariee-50.png" alt="Mariage Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/mariage/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Anniversaire">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Anniversaire</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-anniversaire-50.png" alt="Anniversaire Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/blog-anniversaire/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Naissance">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Naissance</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-chambre-de-bebe-50.png" alt="Naissance Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/naissance/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Choix du nom">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Choix du nom</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-bebe-50-1.png" alt="Choix du nom Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/choix-du-nom/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Décès">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Décès</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-cimetiere-50.png" alt="Décès Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/blog-mort/" class="learn-more">En savoir plus</a>
          </div>
          `;
      break;

    case "By identity":
    case
      "Par identité":
      contentHtml = `
          <div class="box-wrapper">
              <div class="box" id="Musique">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Musique</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-note-de-musique-50.png" alt="Musique Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/blog-musique/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Passions">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Passions</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-passion-64.png" alt="Passions Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/blog-passion/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Culture">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Culture</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-globe-terrestre-50.png" alt="Culture Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/culture/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Philosophies">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Philosophies</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-philosophie-50.png" alt="Philosophies Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/philosophie-3/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Religion">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Religion</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-prier-50.png" alt="Religion Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/religion-2/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Astrologie">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Astrologie</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-boule-de-cristal-48.png" alt="Astrologie Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href=https://artur.art/astrologie-et-numerologie/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Psychologie">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Psychologie</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-psychologie-50.png" alt="Psychologie Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/psychologie/" class="learn-more">En savoir plus</a>
          </div>

          <div class="box-wrapper">
              <div class="box" id="Souvenirs">
                  <div class="box-content">
                      <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Souvenirs</h2>
                      <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-souvenir-50.png" alt="Souvenirs Icon">
                  </div>
              </div>
              <a style="color: #686666;" target="_blank" href="https://artur.art/souvenir-2/" class="learn-more">En savoir plus</a>
          </div>
          `;
      break;
    case "For every place":
    case "Pour chaque endroit":
      contentHtml = `
        <div class="box-wrapper">
            <div class="box" id="Chambre">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Chambre</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-chambre-interieur-50.png" alt="Chambre Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/fr/blog-chambre/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Salon">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Salon</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-salon-50.png" alt="Salon Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/blog-salon-2/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Couloir">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Couloir</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-couloir-50.png" alt="Couloir Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/fr/blog-couloir/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Mur Extérieur">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Mur Extérieur</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-mur-de-briques-100.png" alt="Mur Extérieur Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/blog-mur-exterieur/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Salle de bain">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Salle de bain</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-douche-48.png" alt="Salle de bain Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/blog-salle-de-bain/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Bureau">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Bureau</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-bureau-50.png" alt="Bureau Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/fr/blog-bureaux/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Espace de pause">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Espace de pause</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-salle-dattente-50.png" alt="Espace de pause Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/blog-espace-de-pause/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Salles de Réunion">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Salles de Réunion</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-salle-de-reunion-50-1.png" alt="Salles de Réunion Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/blog-salle-de-reunion/" class="learn-more">En savoir plus</a>
        </div>
        `;
      break;
    case "By Style":
    case
      "Par Style":
      contentHtml = `
        <div class="box-wrapper">
            <div class="box" id="Animaux">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Animaux</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-chat-64.png" alt="Animaux Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/animaux/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Paysage">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Paysage</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-paysage-50.png" alt="Paysage Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/paysage/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Fleurs">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Fleurs</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-fleurs-50.png" alt="Fleurs Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/fleurs-et-plantes/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="portraits">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">portraits</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-portrait-50.png" alt="portraits Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/personnes-et-portraits/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Abstrait">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Abstrait</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-abstrait-64.png" alt="Abstrait Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/abstrait-et-conceptuel/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Transport et cartes">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Transport et cartes</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-carte-du-monde-64.png" alt="Transport et cartes Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/transport-et-cartes/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Architecture">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Architecture</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-architecture-50.png" alt="Architecture Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/architecture-et-villes/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Nu et érotique">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Nu et érotique</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-modern-art-50.png" alt="Nu et érotique Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/nu-et-erotique/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Street art">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Street art</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-mur-de-briques-100.png" alt="Street art Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/street-art/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Impressionniste">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Impressionniste</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-palette-de-peinture-50.png" alt="Impressionniste Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/impressionniste/" class="learn-more">En savoir plus</a>
        </div>
        `;
      break;
    case "Diversion":
    case
      "Détournement":
      contentHtml = `
        <div class="box-wrapper">
            <div class="box" id="Héros d’Enfance">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Héros d’Enfance</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-superman-50.png" alt="Héros d’Enfance Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/heros-denfance/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Marques Préférées">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Marques Préférées</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-alimentation-fast-food-street-food-09-50.png" alt="Marques Préférées Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/marques-preferees/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Photos Mémorables">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Photos Mémorables</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-pile-de-photos-50.png" alt="Photos Mémorables Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/photos-memorable/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Artistes Favoris">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Artistes Favoris</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-guitariste-50-1.png" alt="Artistes Favoris Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/artist-favoris/" class="learn-more">En savoir plus</a>
        </div>
        `;
      break;
    case "Parody":
      contentHtml = `
        <div class="box-wrapper">
            <div class="box" id="Politiques">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Politiques</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-superman-50.png" alt="Politiques Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/parlons-politique/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="Critique profonde">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">Critique profonde</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/08/icons8-alimentation-fast-food-street-food-09-50.png" alt="Critique profonde Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/fr/blog-critique-profonde/" class="learn-more">En savoir plus</a>
        </div>

        <div class="box-wrapper">
            <div class="box" id="L’Art de l’humour">
                <div class="box-content">
                    <h2 style=" color: #686666; margin-top: auto; margin-bottom: auto;margin-left: 10px;">L’Art de l’humour</h2>
                    <img class="sp-icon" src="https://artur.art/wp-content/uploads/2024/09/icons8-humour-50.png" alt="L’Art de l’humour Icon">
                </div>
            </div>
            <a style="color: #686666;" target="_blank" href="https://artur.art/fr/blog-art-humour/" class="learn-more">En savoir plus</a>
        </div>
        `;
      break;
      // Add additional cases here as needed
    default:
      contentHtml = "<p>Details about the selected approach will be shown here.</p>";
      break;
    }

    contentContainer.innerHTML = contentHtml;

  } else {
    heading.textContent = "L’approche choisie :";
    contentContainer.innerHTML = "<p>Aucune approche choisie</p>";
  }
}
/* eslint-enable max-len */