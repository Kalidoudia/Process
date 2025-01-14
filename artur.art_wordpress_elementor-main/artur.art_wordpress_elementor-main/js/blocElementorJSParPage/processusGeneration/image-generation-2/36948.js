/*
*
* Déclaration des variables
*
*/
// eslint-disable-next-line no-unused-vars
let format                  = "";
let couleurs                = [];
// eslint-disable-next-line no-unused-vars
let stylePrimaire           = "";
// eslint-disable-next-line no-unused-vars
let modeImpression          = "";

let modeGeneration          = "";
// eslint-disable-next-line no-unused-vars
let styleSecondaire         = "";
// eslint-disable-next-line no-unused-vars
let preferenceOeuvres       = "";
let selectedImageSrc        = "";
let currentLoadingIndex     = 0;
let currentLoadingQuizIndex = 0;

let generationEnCours       = true;

const modal                = document.getElementById("myModal");
const result               = document.getElementById("result");
const closeBtnModal        = document.getElementById("closeBtn");
const modalQuiz            = document.getElementById("myModal-quiz");
const questionUn           = document.getElementById("question1");
const questionDeux         = document.getElementById("question2");
const reponseUn            = document.getElementById("answer1");
const reponseDeux          = document.getElementById("answer2");
const loadingQuiz          = document.getElementById("loadingQuiz");
const player1Btn           = document.getElementById("player1Btn");
const player2Btn           = document.getElementById("player2Btn");
const refPreview           = document.getElementById("refPreview");
const downloadBtn          = document.getElementById("Download-imgref-btn");
const poeticChoice         = document.getElementById("poeticChoice");
const roboticChoice        = document.getElementById("roboticChoice");
const loadingOverlay       = document.getElementById("loading-overlay");
const boutonFermerQuiz     = document.getElementById("closeBtn-quiz");
const boutonVisualiser     = document.getElementById("visualizeBtn-ref");
const userChoiceElement    = document.getElementById("userChoice");
const boutonVisualiserQuiz = document.getElementById("visualizeBtn-quiz");

const CINQ_SECONDES_EN_MILISECONDES = 5000;

/*
*
* Fonctions de premier niveau
*
*/

// Afficher les questions appropriées selon le choix du blogue/thème
/**
 *
 */
function displayQuestions() {

  // eslint-disable-next-line no-undef
  const client       = ClientArtur.charger();
  const sousApproche = client.get("sousApproche") || "Aucun";

  // eslint-disable-next-line no-undef
  const questions = questionSelonSApprochePartage[sousApproche];

  if (questions.length > 0) {
    questionUn.querySelector("h2").textContent   = questions[0];
    questionDeux.querySelector("h2").textContent = questions[1];
    client.set("questionQuiz",questions);
  }
}

// Afficher la section de génération d'image par quiz
/**
 *
 */
function showQuiz() {
  const test = document.getElementById("par-quiz-prompt");
  const imgRef = document.getElementById("Ref-prompt");
  test.style.display = "block";
  imgRef.style.display = "none";
  const rect = test.getBoundingClientRect();
  const offset = 150;
  const elementTop = rect.top + window.scrollY - offset;
  window.scrollTo({
    top: elementTop,
    behavior: "smooth"
  });
}

// Afficher la prochaine question
/**
 *
 */
async function nextQuestion() {
  questionUn.style.display = "none";
  questionDeux.style.display = "block";
}


// Afficher la section de génération d'image par image de référence
/**
 *
 */
function showRef() {
  const test = document.getElementById("par-quiz-prompt");
  const imgRef = document.getElementById("Ref-prompt");
  test.style.display = "none";
  imgRef.style.display = "flex";
  const rect = imgRef.getBoundingClientRect();
  const offset = 150;
  const elementTop = rect.top + window.scrollY - offset;

  window.scrollTo({
    top: elementTop,
    behavior: "smooth"
  });
}


// Fonction pour mettre à jour le contenu du ref
/**
 *
 */
function updateLoadingRefContent(index) {
  const refImage = document.querySelector(".loadingRef img");
  const refDesc = document.querySelector(".loadingRef .loading-description");
  if (refImage && refDesc) {
    // eslint-disable-next-line no-undef
    refImage.src = imageDescription[index][0];
    // eslint-disable-next-line no-undef
    refDesc.textContent = imageDescription[index][1];
  }
}

/**
 *
 */
// eslint-disable-next-line no-unused-vars
function sauvegarderUrlImage(urlImage) {
  // eslint-disable-next-line no-undef
  const client = ClientArtur.charger();
  client.set("urlImageGeneree",urlImage);
}


// Fonction pour mettre à jour le contenu du quiz
/**
 *
 */
function updateLoadingContent(index) {
  const quizImage = document.querySelector(".loadingQuiz img");
  const quizDesc = document.querySelector(".loadingQuiz .loading-description");
  if (quizImage && quizDesc) {
    // eslint-disable-next-line no-undef
    quizImage.src = imageDescription[index][0];
    // eslint-disable-next-line no-undef
    quizDesc.textContent = imageDescription[index][1];
  }
}

/**
 *
 */
function startQuizLoop() {
  loadingQuiz.style.display = "flex";
  const quizInterval = setInterval(() => {
    if (!generationEnCours) {
      clearInterval(quizInterval);
      return;
    }

    // Update quiz content
    updateLoadingContent(currentLoadingQuizIndex);
    currentLoadingQuizIndex =

      // eslint-disable-next-line no-undef
      (currentLoadingQuizIndex + 1) % imageDescription.length;

    // Update ref content
    updateLoadingRefContent(currentLoadingIndex);

    // eslint-disable-next-line no-undef
    currentLoadingIndex = (currentLoadingIndex + 1) % imageDescription.length;
  }, CINQ_SECONDES_EN_MILISECONDES);
}


// Affichage conditionnel des choix d'achat selon le produit sélectionné
/**
 *
 */
// eslint-disable-next-line no-unused-vars
function updateSectionDisplay() {
  const selectedProduct = localStorage.getItem("selectedProduct");
  // Toujours utile ?
  // eslint-disable-next-line no-unused-vars
  const visibilitéSectionRobot = "none";
  // eslint-disable-next-line no-unused-vars
  const visibilitéSectionPoétique = "none";

  const toggleVisibility = (choice, action) => {
    if (choice) {
      choice.style.display = action === "show" ? "block" : "none";
      choice.classList[action === "show" ? "add" : "remove"]("visible");
    }
  };

  switch (selectedProduct) {
  case "Print":
    toggleVisibility(roboticChoice, "show");
    toggleVisibility(poeticChoice, "hide");
    document.querySelector(".recommended-artists-container")
      .classList.remove("visible");
    // eslint-disable-next-line no-undef
    gsap.from(roboticChoice, {
      duration: 0.5,
      y: 20,
      opacity: 0,
      ease: "power1.out"
    });
    break;

  case "mural":
  case "tableau":
    toggleVisibility(poeticChoice, "show");
    toggleVisibility(roboticChoice, "hide");
    document.querySelector(".recommended-artists-container")
      .classList.add("visible");
    // eslint-disable-next-line no-undef
    gsap.from(poeticChoice, {
      duration: 0.5,
      y: 20,
      opacity: 0,
      ease: "power1.out"
    });
    break;

  default:

  }
}

// Récupérer le produit sélectionné dans client artur
// Rediriger vers la bonne page selon le produit sélectionné
/**
 *
 */
// eslint-disable-next-line no-unused-vars
function updateSectionRedirect() {
  // eslint-disable-next-line no-undef
  const client = ClientArtur.charger();
  const produitSélectionné = client.get("modeImpression") || "";
  let urlDeRedirection = "";
  let choixClient = "";

  roboticChoice.style.display = "none";
  poeticChoice.style.display = "none";

  switch (produitSélectionné) {
  case "Print":
    choixClient = "player1Btn";
    urlDeRedirection = "https://artur.art/pagesdevente-copy-2/";
    break;
  case "mural":
  case "tableau":
    choixClient = "player2Btn";
    urlDeRedirection = "https://artur.art/share-reference-with-artist/";
    break;
  default:
    // eslint-disable-next-line max-len
    // Afficher un modal qui avertit que l'utilisateur sera redirigé pour choisir type de produit ?
    break;
  }

  if (urlDeRedirection !== "") {
    localStorage.setItem("selectedPlayer", choixClient);
    window.location.href = urlDeRedirection;
  }

}

/*
*
* Fonctions de niveau supérieur
*
*/

/**
 * Bloquer le défilement de la souris quand montrer les animations
 * Cette fonction est nécessaire car on doit passer en paramètres
 * la même fonction et non une fonction anonyme à la fonction
 * changerPermissionDéfilementSouris.
 */
function empecherDefilementSouris(event) {
  event.preventDefault();
}

/**
 * Alterner le droit de défiler avec la souris
 * @param {boolean} bloquer - Vrai pour empêcher et faux pour permettre
 */
// eslint-disable-next-line id-length, no-unused-vars
function changerPermissionDéfilementSouris(bloquer) {
  if (bloquer) {
    window.addEventListener("wheel", empecherDefilementSouris,{ passive: false }
    );
  } else {
    window.removeEventListener("wheel", empecherDefilementSouris);
  }
}

// Ajout du click du bouton qui génère l'image quand on appuie sur Enter dans l'input 
document.getElementById('answer2').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Ajouter une confirmation avant ? 
    // Vu que l'utilisateur doit attendre ensuite environ 20 secondes. Donc, mieux vaut confirmer avant ? 
    document.getElementById('boutton_question_2').click();
  }
});

// Choix génération par image de référence
document.getElementById("boutonParImageRéférence")
  .addEventListener("click", showRef);

// Choix génération par quiz
document.getElementById("boutonParQuestions")
  .addEventListener("click", showQuiz);

// Boutons pour entrer les réponses aux questions par quiz
document.getElementById("boutton_question_1")
  .addEventListener("click", nextQuestion);

// Recommencer le quiz
document.getElementById("resetQuizButton").addEventListener("click", () => {
  result.style.display = "none";
  loadingQuiz.style.display = "none";
  document.getElementById("options").style.display = "none";
  document.getElementById("resultat-text").style.display = "none";
  const images = document.querySelectorAll("#mainImageGen");

  images.forEach((img) => {
    img.style.display = "none";
  });

  questionUn.style.display = "block";
  questionDeux.style.display = "none";
  reponseUn.value = "";
  reponseDeux.value = "";
  showQuiz();
});

// Télécharger l'image
document.getElementById("downloadButton").addEventListener("click", () => {
  if (selectedImageSrc) {
    const link = document.createElement("a");
    link.href = selectedImageSrc;
    link.download = "votre_oeuvre.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    alert("Veuillez sélectionner une image d'abord.");
  }
});

// Si choisir option 1 joueur
player1Btn.addEventListener("click", () => {
  roboticChoice.classList.add("visible");
  poeticChoice.classList.remove("visible");
  document.querySelector(".recommended-artists-container")
    .classList.remove("visible");

  // eslint-disable-next-line no-undef
  gsap.from(roboticChoice, {
    duration: 0.5,
    y: 20,
    opacity: 0,
    ease: "power1.out"
  });
});

// Si choisir option 2 joueurs
player2Btn.addEventListener("click", () => {
  poeticChoice.classList.add("visible");
  roboticChoice.classList.remove("visible");
  document.querySelector(".recommended-artists-container")
    .classList.add("visible");

  // eslint-disable-next-line no-undef
  gsap.from(poeticChoice, {
    duration: 0.5,
    y: 20,
    opacity: 0,
    ease: "power1.out"
  });
});


/*
*
* Ajout des écouteurs liés aux événements
*
*/

document.body.addEventListener("htmx:beforeRequest", (event) => {

  if (event.target.id === "boutton_question_2") {

    questionDeux.style.display = "none";
    loadingQuiz.style.display = "flex";
    document.body.classList.add("freeze");
    startQuizLoop();

    // eslint-disable-next-line no-undef
    const client = ClientArtur.charger();

    client.set("reponsesQuiz",[reponseUn.value,reponseDeux.value]);

    const styles = client.get("styles") || [];
    if (styles.length > 0) {
      stylePrimaire   = styles[0];
      styleSecondaire = styles[1];
    }
    // Créer une fonction validerDonneeClient qui va contenir
    // la logique de validation
    modeGeneration    = client.get("modeGeneration") || "aucun";
    format            = client.get("format") || "aucun";
    couleurs          = client.get("couleurs") || [];
    modeImpression    = client.get("modeImpression") || "aucun";
    preferenceOeuvres = client.get("preferenceOeuvres") || "aucun";

    // Concatener les éléments du tableau dans une chaîne
    // pour faciliter le traitement en back-end
    couleurs = couleurs.join(" , ");
    /*
      Vérifier si toutes les valeurs sont présentes.
        S'il manque des informations...
        Faire un diagramme d'action
          S'il manque format
          S'il manque couleurs
          S'il manque mode d'impression
          S'il manque préférence oeuvres
    */



  }
  // eslint-disable-next-line max-len
  else if (event.target.id === "bouton-generer-image" || event.target.id === "Button-svt2") {
    loadingOverlay.style.display = "flex";
    document.body.classList.add("freeze");
  }
});



document.addEventListener("htmx:afterRequest", () => {

  // Enlever le gel de la fenêtre et cacher le quiz
  loadingOverlay.style.display = "none";
  document.body.classList.remove("freeze");
  generationEnCours = false;

  const images = document.querySelectorAll(".imageGenereeParIA");

  // Si aucune image n'a été retournée, alors afficher un message et arrêter
  if (images.length < 1) {
    console.log(images.length);
    alert("Aucune image a été générée");
    return;
  }

  const popup = document.getElementById("popup");
  const closeBtnClass = document.querySelector(".close");

  // Afficher les images et les options
  document.getElementById("options").style.display       = "flex";
  document.getElementById("resultRef").style.display     = "flex";
  document.getElementById("optionRef").style.display     = "flex";
  document.getElementById("resultat-text").style.display = "flex";
  result.style.display = "flex";

  // Cacher ...
  loadingQuiz.style.display = "none";
  document.getElementById("loadingRef").style.display = "none";

  // Attribuer à tous les images
  images.forEach(image => {
    image.style.border = "none";
    image.style.height = "auto";
    image.classList.add("thumbnail");

    image.addEventListener("click", () => {

      // Réinitialiser le style des images
      images.forEach(imageApres => {
        imageApres.style.border = "none";
      });

      image.style.border = "5px solid #6198ef";
      selectedImageSrc = image.src;
      document.getElementById("popup-img").src = image.src;

      if (modeGeneration === "quiz") {
        const mapQuizImage = document.querySelector(".map-quiz");
        if (mapQuizImage) {
          mapQuizImage.src = selectedImageSrc;
        }
      }
      else if (modeGeneration === "imgRef") {
        document.querySelectorAll(".img-player")
          .forEach((img) => img.src = image.src);
        const mapRefImage = document.querySelector(".map");
        if (mapRefImage) {
          mapRefImage.src = image.src;
        }
      }
    });
  });


  downloadBtn?.addEventListener("click", () => {
    const selectedImage =
        document.querySelector(".thumbnail[style*=\"border: 5px solid\"]");
    if (selectedImage) {
      const link = document.createElement("a");
      link.href = selectedImage.src;
      link.download =
          selectedImage.src.split("/").pop();
      link.click();
    } else {
      alert("Veuillez sélectionner une image avant de télécharger.");
    }
  });

  closeBtnClass.addEventListener("click", () => {
    popup.style.display = "none";
  });

  popup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  closeBtnClass?.addEventListener("click", () => {
    popup.style.display = "none";
  });

  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });

  // Donner à la première image les attributs de l'image cliquée
  selectedImageSrc = images[0].src;
  images[0].style.border = "5px solid #6198ef";

});

document.body.addEventListener("htmx:responseError", (event) => {
  if (event.target.id === "bouton-generer-image") {
    loadingOverlay.style.display = "none";
    document.body.classList.remove("freeze");
  }
  if(event.target.id === "Button-svt2"){
    loadingOverlay.style.display = "none";
    document.body.classList.remove("freeze");
  }
});

document.addEventListener("DOMContentLoaded", () => {

  // Gestion des deux modals
  boutonVisualiserQuiz.addEventListener("click", () => {
    modalQuiz.style.display = "flex";
  });

  boutonFermerQuiz.addEventListener("click", () => {
    modalQuiz.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Utiliser la façon moderne avec addEventListener
  boutonVisualiser.onclick = function() {
    modal.style.display = "flex";
  };

  // Utiliser la façon moderne avec addEventListener
  closeBtnModal.onclick = function() {
    modal.style.display = "none";
  };


  // eslint-disable-next-line no-unused-vars
  const handleArtistDisplay = (artists, images) => {
    const uniqueArtists = {};

    artists.forEach((artist, index) => {

      if (artist?.trim() && !uniqueArtists[artist]) {
        uniqueArtists[artist] =
          images[index] || ""; // Associe l'image à l'artiste

        const artistItem = document.createElement("div");

        artistItem.classList.add("recommended-artists-item");
        artistItem.innerHTML = `
            <a href="https://app.artur.art/swipe?lang=en_us&needtutorial=no">
                <div class="recommended-artists-profile-img">
                    <div class="recommended-artists-profile-pic" 
                      style="background-image: 
                      url(${uniqueArtists[artist]});"></div>
                    <div class="recommended-artists-heart"></div>
                </div>
                <p>${artist}</p>
            </a>
        `;
        // Ça devrait être un id et non une classe
        document.querySelector(".recommended-artists-options")
          .appendChild(artistItem);
      }
    });
  };

  // Fonction pour gérer le téléchargement d'un fichier image
  const handleFileUpload = (event) => {
    document.getElementById("file")
      .addEventListener("change", handleFileUpload);

    const file = event.target.files[0];
    if (!file) { return; }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const uploadedImageSrc = ev.target.result;

      document.getElementById("uploader").style.display = "none";
      refPreview.style.display = "block";
      refPreview.src = uploadedImageSrc;
      document.querySelector(".img-telecharge").src = uploadedImageSrc;
      document.getElementById("formatChoicesRef").style.display = "block";
    };
    reader.readAsDataURL(file);
  };


  // Attach the event listener to the file input
  document.getElementById("file").addEventListener("change", handleFileUpload);

  // Écouteurs pour les boutons de sélection
  document.querySelectorAll(".chooseBtn").forEach(btn => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const btnId = btn.id;
      // Utiliser ClientARtur
      // Enregistre l'ID du joueur sélectionné
      localStorage.setItem("selectedPlayer", btnId);

      // Utiliser ClientArtur
      // eslint-disable-next-line max-len
      window.location.href =`https://artur.art/selection-produits/?preview_id=31532&post=31532&action=elementor&player=${btnId}`;
    });
  });

  // Attache la fonction de téléchargement d'image
  // à l'événement 'change' du fichier
  window.handleImageUpload = handleFileUpload;
  const fileInput = document.getElementById("file");
  // Si l'élément existe, ajoute l'écouteur d'événement
  fileInput?.addEventListener("change", handleFileUpload);

  // Gestion du bouton de réinitialisation
  // eslint-disable-next-line max-len
  document.getElementById("Relance-imgref-btn")?.addEventListener("click", (event) => {
    event.preventDefault();
    const uploader = document.getElementById("uploader");
    const formatChoicesRef = document.getElementById("formatChoicesRef");
    const resultRef = document.getElementById("resultRef");
    const resultImageGenere = document.querySelector(".resultatImageGenere");
    // Réinitialisation des éléments d'interface utilisateur
    uploader.style.display = "block";
    document.getElementById("refPreview").style.display = "none";
    formatChoicesRef.style.display = "none";
    resultRef.style.display = "none";
    resultImageGenere.innerHTML = "";
  });
  loadingOverlay.style.display = "none";
});


window.onload = function () {
  // Charger le mode de génération au début du chargement de la page
  // eslint-disable-next-line no-undef
  const client     = ClientArtur.charger();
  const choixGeneration = client.get("modeGeneration") || "aucun";

  if (choixGeneration === "quiz") {
    userChoiceElement.style.display = "none";
    displayQuestions();
    showQuiz();
  }
  else if (choixGeneration === "ref") {
    userChoiceElement.style.display = "none";
    showRef();
  }
};

/* eslint-disable max-len */
/*
Corriger (lignes) :

Fonctionnalités
- Vérifier que toutes les données sont là avant et faire diagramme d'action pour décider quoi faire selon les différents cas
- Est-ce qu'on garde les autres images générées non-choisies aussi ? Ou est-ce qu'on laisse le choix de sauvegarder plus qu'une seule image ?  
*/
/* eslint-enable max-len */