const nbDeux = 2;
const nbSeize = 16;
const maxRVB = 255;
const troiSecondesEnMilisecondes = 3000;

// Créer la roue de couleur avec IRO.js
// eslint-disable-next-line no-undef
const colorPicker = new iro.ColorPicker("#color-wheel", {
  width: 150,
  height: 150,
  color: "#3498db",
  borderWidth: 1,
  borderColor: "#000"
});

let paletteFinale = [];
let customPalette = ["", "", "", "", ""]; // Palette personnalisée vide

// la couleur sélectionnée
/**
 *
 */
function updateColor() {
  const color = colorPicker.color.hexString;
  document.getElementById("selected-color")
    .innerHTML = `La Couleur sélectionnée : <span>${color}</span>`;
}
updateColor();
colorPicker.on("color:change", updateColor);


// Fonction pour générer des palettes de couleurs
/**
 *
 */
function generatePalettes() {
  const paletteContainer = document.getElementById("palette");
  paletteContainer.innerHTML = ""; // Effacer les palettes précédentes

  const baseColorHex = colorPicker.color.hexString;


  // Fonction pour convertir RGB en HSL
  /* eslint-disable no-magic-numbers */
  /**
   *
   */
  function rgbToHsl(rouge, vert, bleu) {
    const maxRVB = 255; // Assurez-vous que cette constante est définie
    rouge /= maxRVB;
    vert /= maxRVB;
    bleu /= maxRVB;
    const max = Math.max(rouge, vert, bleu);
    const min = Math.min(rouge, vert, bleu);
    let teinte, saturation;
    const luminosite = (max + min) / nbDeux;

    if (max === min) {
      teinte = saturation = 0; // Couleur neutre
    } else {
      const delta = max - min;
      saturation =
        luminosite > 0.5 ? delta / (nbDeux - max - min) : delta / (max + min);
      switch (max) {
      case rouge: teinte = (vert - bleu) / delta + (vert < bleu ? 6 : 0); break;
      case vert: teinte = (bleu - rouge) / delta + nbDeux; break;
      case bleu: teinte = (rouge - vert) / delta + 4; break;
      }
      teinte /= 6;
    }

    return [teinte * 360, saturation * 100, luminosite * 100];
  }

  // Fonction pour convertir HSL en RGB
  /**
   *
  */
  function hslToRgb(teinte, saturation, luminosite) {
    saturation /= 100;
    luminosite /= 100;
    const chroma = (1 - Math.abs(nbDeux * luminosite - 1)) * saturation;
    const couleurSelonTeinte =
      chroma * (1 - Math.abs((teinte / 60) % nbDeux - 1));
    const luminositeGlobale = luminosite - chroma / nbDeux;
    let rouge, vert, bleu;

    if (0 <= teinte && teinte < 60) {
      [rouge, vert, bleu] = [chroma, couleurSelonTeinte, 0];
    } else if (60 <= teinte && teinte < 120) {
      [rouge, vert, bleu] = [couleurSelonTeinte, chroma, 0];
    } else if (120 <= teinte && teinte < 180) {
      [rouge, vert, bleu] = [0, chroma, couleurSelonTeinte];
    } else if (180 <= teinte && teinte < 240) {
      [rouge, vert, bleu] = [0, couleurSelonTeinte, chroma];
    } else if (240 <= teinte && teinte < 300) {
      [rouge, vert, bleu] = [couleurSelonTeinte, 0, chroma];
    } else if (300 <= teinte && teinte < 360) {
      [rouge, vert, bleu] = [chroma, 0, couleurSelonTeinte];
    }

    return [
      Math.round((rouge + luminositeGlobale) * maxRVB),
      Math.round((vert + luminositeGlobale) * maxRVB),
      Math.round((bleu + luminositeGlobale) * maxRVB)
    ];
  }


  const [teinte,saturation, luminosite] = rgbToHsl(
    parseInt(baseColorHex.slice(1, 3), nbSeize),
    parseInt(baseColorHex.slice(3, 5), nbSeize),
    parseInt(baseColorHex.slice(5, 7), nbSeize)
  );


  // Fonction pour générer la palette complémentaire
  /**
   *
   */
  function generateComplementary() {
    const compH = (teinte + 180) % 360;
    const [compR, compG, compB] = hslToRgb(compH, saturation, luminosite);
    const baseColor =
      `#${((1 << 24) +
        (parseInt(baseColorHex.slice(1, 3), nbSeize) << nbSeize)
        + (parseInt(baseColorHex.slice(3, 5), nbSeize) << 8)
        + parseInt(baseColorHex.slice(5, 7), nbSeize))
        .toString(nbSeize).slice(1).toUpperCase()}`;
    const compColor =
      `#${((1 << 24) + (compR << nbSeize) + (compG << 8) + compB)
        .toString(nbSeize).slice(1).toUpperCase()}`;
    return [baseColor, compColor];
  }

  // Fonction pour générer la palette analogique
  /**
   *
   */
  function generateAnalogous() {
    const palette = [];
    for (let i = 1; i >= -1; i--) {
      const teinteAnalogue = (teinte + i * 30) % 360;
      const [rouge, vert, bleu] =
        hslToRgb(teinteAnalogue, saturation, luminosite);
      palette.push(`#${((1 << 24) + (rouge << nbSeize) + (vert << 8) + bleu)
        .toString(nbSeize).slice(1).toUpperCase()}`);
    }
    return palette;
  }


  // Fonction pour générer la palette triadique
  /**
   *
   */
  function generateTriadic() {
    const triadic = [
      teinte,
      (teinte + 120) % 360,
      (teinte + 240) % 360
    ];
    return triadic.map(teinteTriade => {
      const [rouge, vert, bleu] =
        hslToRgb(teinteTriade, saturation, luminosite);
      return `#${((1 << 24) + (rouge << nbSeize) + (vert << 8) + bleu)
        .toString(nbSeize).slice(1).toUpperCase()}`;
    });
  }

  // Fonction pour générer la palette monochromatique
  /**
   *
   */
  function generateMonochromatic() {
    const palette = [];
    for (let i = -nbDeux; i <= nbDeux; i++) {
      let lightness = luminosite + i * 10;
      if (lightness < 0) { lightness = 0; }
      if (lightness > 100) { lightness = 100; }
      const [rouge, vert, bleu] = hslToRgb(teinte, saturation, lightness);
      palette.push(
        `#${((1 << 24) + (rouge << nbSeize) + (vert << 8) + bleu)
          .toString(nbSeize).slice(1)
          .toUpperCase()
        }`);
    }
    return palette;
  }
  /* eslint-enable no-magic-numbers */

  // Afficher les palettes
  /**
   *
   */
  function displayPalette(type, palette) {

    const groupDiv = document.createElement("div");
    groupDiv.className = "palette-group";

    const title = document.createElement("h6");
    title.textContent = type;
    title.style.color = "#686666";
    groupDiv.appendChild(title);

    const groupPalette = document.createElement("div");
    groupPalette.className = "groupPalette";
    groupDiv.appendChild(groupPalette);

    palette.forEach(color => {
      const colorBox = document.createElement("div");
      colorBox.className = "color-box";
      colorBox.style.backgroundColor = color;
      colorBox.style.cursor = "pointer";

      // Ajouter un écouteur de clic pour
      // ajouter la couleur à la palette personnalisée
      colorBox.addEventListener("click", () => {
        addToCustomPalette(color);
        // colorBox.style.border = "2px solid black";
        // colorBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

      });
      groupPalette.appendChild(colorBox);
    });

    document.getElementById("palette").appendChild(groupDiv);
  }

  // Générer et afficher les palettes
  displayPalette("Complémentaire", generateComplementary());
  displayPalette("Analogique", generateAnalogous());
  displayPalette("Triadique", generateTriadic());
  displayPalette("Monochromatique", generateMonochromatic());
}

// Fonction pour ajouter une couleur à la palette personnalisée
/**
 *
 */
function addToCustomPalette(color) {
  const emptySlotIndex =
    customPalette.findIndex(palettePersonalise => palettePersonalise === "");
  // eslint-disable-next-line no-magic-numbers
  if (emptySlotIndex !== -1) {
    customPalette[emptySlotIndex] = color;
    updateCustomPalette();
  } else {
    // eslint-disable-next-line no-alert
    alert(`Votre palette est pleine. 
      Supprimez une couleur avant d'ajouter une nouvelle.`);
  }
}

// Fonction pour supprimer une couleur de la palette personnalisée
/**
 *
 */
function removeFromCustomPalette(index) {
  customPalette[index] = "";
  updateCustomPalette();
}

// Mettre à jour l'affichage de la palette personnalisée
/**
 *
 */
function updateCustomPalette() {
  const customPaletteContainer = document.getElementById("custom-palette");

  customPaletteContainer
    .querySelectorAll(".custom-color-box").forEach((box, index) => {
      box.style.cursor = "pointer";

      if (customPalette[index]) {
        box.style.backgroundColor = customPalette[index];
        // box.style.border = "2px solid #ccc";

      } else {
        box.style.backgroundColor = "";
      // box.style.border = "2px dashed #ccc";
      }
      // Ajouter un écouteur pour supprimer
      //  la couleur si elle est déjà dans la palette
      box.onclick = function () {
        removeFromCustomPalette(index);
      };
    });
}

// bouton valider
document.getElementById("generate-palettes").addEventListener("click", () => {
  // Mettre à jour la couleur sélectionnée
  const selectedColor = colorPicker.color.hexString;
  document.getElementById("selected-color")
    .innerHTML = ` La Couleur sélectionnée : <span>${selectedColor}</span>`;

  // Ajouter la couleur sélectionnée à
  //  la palette personnalisée si il y a des case vide
  for (let i = 0; i <= customPalette.length; i++) {
    if (customPalette[i] === "") {
      customPalette[i] = selectedColor;
      updateCustomPalette();
      break; // Add this line to stop after the first empty slot is filled
    }
  }

  // Générer les palettes
  generatePalettes();
});
// Affichage des palettes
generatePalettes();

// Ajout d'un bouton de réinitialisation
//  pour effacer toutes les couleurs de la palette personnalisée
document.getElementById("reset-palette").addEventListener("click", () => {
  // Supprimer toutes les couleurs de la palette personnelle
  customPalette = ["", "", "", "", ""]; // Réinitialiser la palette
  updateCustomPalette(); // Mettre à jour l'affichage de la palette
});

// Gestion de la sélection d'une palette
const palettes = document.querySelectorAll(".palette-selected-group");
const btn = document.getElementById("custom-palette-BTN");

const customPaletteContainer = document.getElementById("custom-palette");
const finalSelectedPalette = document.getElementById("final-selected-palette");
const finalPaletteTitle = document.getElementById("final-palette-title");


// Fonction pour déselectionner toutes les palettes
/**
 *
 */
function deselectAllPalettes() {
  palettes.forEach(palette => {
    palette.classList.remove("selected");
  });
}

// Fonction pour gérer la sélection de la palette
palettes.forEach(palette => {
  palette.addEventListener("click", function () {
    // Si le checkbox est coché, on le décoche
    if (btn.selected) {
      btn.selected = false;
      // customPaletteContainer.style.display = 'none';
    }
    // On vérifie si l'élément cliqué est déjà sélectionné
    if (this.classList.contains("selected")) {
      this.classList.remove("selected");
      finalPaletteTitle.style.display = "none";
      finalSelectedPalette.style.display = "none";
    } else {
      deselectAllPalettes();
      this.classList.add("selected");
      displayFinalPalette(this);
    }
  });
});

// Gestion du checkbox
document.getElementById("custom-palette-BTN")
  .addEventListener("click", function () {
  // Vérifiez si le bouton est sélectionné
    this.classList.toggle("selected");

    if (this.classList.contains("selected")) {
    // Si le checkbox est coché, on déselectionne toutes les palettes
      deselectAllPalettes();
      // customPaletteContainer.style.display = 'block';
      displayFinalPalette(customPaletteContainer);

    } else {
    // customPaletteContainer.style.display = 'none';
      finalSelectedPalette.style.display = "none";
      finalPaletteTitle.style.display = "none";
    }
  });

/**
 *
 */
function rgbToHex1(rgb) {
  const trimmedString = rgb.replace("rgb(", "").replace(")", "");
  const rgbValues = trimmedString.split(",");

  // eslint-disable-next-line no-magic-numbers
  if (rgbValues.length !== 3) { return rgb; }

  // Convert each value to HEX and join them
  return rgbValues.map(value => {

    const hex = parseInt(value.trim()).toString(nbSeize);
    return hex.length === 1 ? `0${  hex}` : hex;
  }).join("");
}

// Function to display the final selected palette
/**
 *
 */
function displayFinalPalette(paletteElement) {
  finalSelectedPalette.innerHTML = ""; // Clear previous selection
  finalPaletteTitle.style.display = "block";
  finalSelectedPalette.style.display = "";

  paletteFinale=[];

  // Get the colors from the selected palette or custom palette
  const colorBoxes = paletteElement
    .querySelectorAll(".color-box, .custom-color-box");
  colorBoxes.forEach(colorBox => {
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = colorBox.style.backgroundColor;
    colorDiv.style.width = "40px";
    colorDiv.style.height = "40px";
    colorDiv.style.borderRadius = "5px";
    finalSelectedPalette.appendChild(colorDiv);

    // Convert the color to HEX format and add it to the paletteFinale array
    const colorCode = rgbToHex1(colorDiv.style.backgroundColor);
    paletteFinale.push(colorCode);
  });

  document.getElementById("btn-suivant")
    .scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// afficher plus de palettes
const hiddenPalettes = document.querySelectorAll(".palette-existante .hidden");
hiddenPalettes.forEach((palette) => {
  palette.style.display = "none";
});


// Afficher le popup
document.getElementById("show-more-p").addEventListener("click", () => {
  document.querySelector("#palette-selection-popup").showModal();
  document.body.style.overflowY = "hidden";
});

// Quitter le popUp
document.querySelector("#palette-selection-popup")
  .addEventListener("click", () => {
    document.querySelector("#palette-selection-popup").close();
    document.body.style.overflowY = "visible";
  });

// Quitter le popup avec Esc
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.body.style.overflowY = "visible";
  }
});


document.getElementById("btn-suivant").addEventListener("click", (event) => {

  event.preventDefault();

  // Vérifiez si paletteFinale est vide et retournez si c'est le cas
  if (!paletteFinale || paletteFinale.length === 0) {
    return; // Sortir de la fonction si paletteFinale est vide
  }

  // Sauvegarder les données de l'oeuvre et l'action
  // eslint-disable-next-line no-undef
  const client = ClientArtur.charger();

  // Obtenir la liste des oeuvres appréciées par l'utilisateur
  const preferenceCouleurs = client.get("couleurs") || [];

  // Vérifier si l'oeuvre a déjà été évalué précédemment
  preferenceCouleurs.push(paletteFinale);

  // Enregistrer les préférences
  client.set("couleurs", preferenceCouleurs);
  client.sauvegarder();

  window.location.href = "https://artur.art/psycho-creatif/";
});

// Cela stockera les données de pixels extraites
// de l'image après qu'elle ait été peinte sur l'élément canvas
let imageData;

// Un tableau contenant les 5 couleurs, en code hexadécimal,
// de la palette générée par l'image
let extractedPalette = [];

const createNotification = (message) => {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => { notification.remove(); }, troiSecondesEnMilisecondes);
};

const rgbToHex = (rouge, vert, bleu) => {
  // Assurez-vous que les valeurs sont entre 0 et 255
  rouge = Math.max(0, Math.min(maxRVB, rouge));
  vert = Math.max(0, Math.min(maxRVB, vert));
  bleu = Math.max(0, Math.min(maxRVB, bleu));

  /*
   Convertir chaque composant en hexadécimal et remplissez les valeurs
   hexadécimales avec des zéros non significatifs si nécessaire pour qu'il
   s'agit de deux chiffres
  */
  const hexRouge = rouge.toString(nbSeize).padStart(nbDeux, "0");
  const hexVert = vert.toString(nbSeize).padStart(nbDeux, "0");
  const hexBleu = bleu.toString(nbSeize).padStart(nbDeux, "0");

  return `#${hexRouge}${hexVert}${hexBleu}`;
};

const displayPalette = (colours) => {
  const palette = document.getElementById("extracted-palette");
  palette.textContent = "";

  colours.forEach(colour => {
    const colourBox = document.createElement("div");
    colourBox.classList.add("colour-box");
    colourBox.style.backgroundColor = colour;
    colourBox.style.width = "40px";
    colourBox.style.height = "40px";
    colourBox.style.borderRadius = "5px";

    const colourCode = document.createElement("div");
    colourCode.classList.add("colour-code");
    colourCode.textContent = colour;

    colourCode.style.display = "none";

    colourBox.addEventListener("click", () => {
      const text = colourCode.textContent;
      navigator.clipboard.writeText(text)
        .then(() => {
          createNotification("Copied to clipboard");
        });
    });

    colourBox.appendChild(colourCode);

    palette.appendChild(colourBox);
  });
};

// Calculer la distance euclidienne entre deux couleurs
const colourDistance = (rgb1, rgb2) => {
  const [r1, g1, b1] = rgb1.split(",").map(Number);
  const [r2, g2, b2] = rgb2.split(",").map(Number);

  // eslint-disable-next-line max-len
  return Math.sqrt((r1 - r2) ** nbDeux + (g1 - g2) ** nbDeux + (b1 - b2) ** nbDeux);
};

const extractPalette = (data) => {
  const colourCount = 5;

  const colourSet = [];
  let colours = [];
  const minDistance = 100;


  // eslint-disable-next-line no-magic-numbers
  for (let i = 0; i < data.length; i += 4) {
    const rouge = data[i];
    const vert = data[i + 1];

    const bleu = data[i + nbDeux];
    const rgb = `${rouge},${vert},${bleu}`;

    let isDiffEnough = true;

    for (const existingColour of colourSet) {
      if (colourDistance(rgb, existingColour) < minDistance) {
        isDiffEnough = false;
        break;
      }
    }

    if (isDiffEnough) {
      colourSet.push(rgb);
    }
  }

  colours = colourSet.slice(0, colourCount);

  colours.forEach((colour, index) => {
    const rgb = colour.split(",");
    const hexCode = rgbToHex(rgb[0], rgb[1], rgb[nbDeux]);
    colours[index] = hexCode;
  });

  return colours;
};

const drawImageToCanvas = (img) => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  const maxWidth = 300;
  const maxHeight = 300;

  let drawWidth, drawHeight;

  // Calculer le rapport hauteur/largeur
  const imgRatio = img.width / img.height;

  if (img.width > img.height) {
    // Orientation paysage
    drawWidth = Math.min(maxWidth, img.width);
    drawHeight = drawWidth / imgRatio;
    if (drawHeight > maxHeight) {
      drawHeight = maxHeight;
      drawWidth = drawHeight * imgRatio;
    }
  } else {
    // Orientation portrait
    drawHeight = Math.min(maxHeight, img.height);
    drawWidth = drawHeight * imgRatio;
    if (drawWidth > maxWidth) {
      drawWidth = maxWidth;
      drawHeight = drawWidth / imgRatio;
    }
  }

  // Définir les dimensions pour le canvas
  canvas.width = drawWidth;
  canvas.height = drawHeight;

  const x = 0;
  const y = 0;

  // Effacer le canvas et dessiner l'image sélectionnée sur le canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(img, x, y, drawWidth, drawHeight);

  // isImageLoaded = true;
  canvas.addEventListener("click", () => {
    document.getElementById("imageInput").click();
  });

  // Cela récupère les données de pixel d'un rectangle spécifié sur le canevas
  imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  const colours = extractPalette(imageData.data);

  extractedPalette = [];
  extractedPalette = colours;

  // paletteFinale contient les codes HEX sans le caractère "#"
  extractedPalette.forEach((colour, index) => {
    paletteFinale[index] = colour.replace("#", "");
  });

  displayPalette(colours);
};

const imageInput = document.getElementById("imageInput");
imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  const img = new Image();
  const reader = new FileReader();

  reader.onload = (event) => {
    img.src = event.target.result;
  };

  img.onload = () => {
    drawImageToCanvas(img);
  };

  reader.readAsDataURL(file);
});

// Afficher l'image initiale sur le canvas
const defaultImg = document.getElementById("default-image");
defaultImg.onload = () => {
  drawImageToCanvas(defaultImg);
};
// eslint-disable-next-line no-self-assign
defaultImg.src = defaultImg.src;

// Ouvrir le lecteur de fichiers lorsque vous cliquez sur téléchargement
const uploadArea = document.querySelector(".upload-area");
uploadArea.addEventListener("click", () => {
  document.getElementById("imageInput").click();
});

// Une fonction d'affichage de la palette finale sélectionnée
const updateFinalSelectedPalette = () => {
  finalPaletteTitle.style.display = "block";
  finalSelectedPalette.textContent = "";
  finalSelectedPalette.style.display = "flex";

  extractedPalette.forEach(colour => {
    const colourBox = document.createElement("div");
    colourBox.classList.add("final-palette-colour-box");
    colourBox.style.backgroundColor = colour;
    colourBox.style.width = "40px";
    colourBox.style.height = "40px";
    colourBox.style.borderRadius = "5px";
    finalSelectedPalette.appendChild(colourBox);
  });

  document.getElementById("btn-suivant")
    .scrollIntoView(
      { behavior: "smooth", block: "nearest" }
    );
};

// Afficher la palette générée dans le conteneur si sur click la palette
const extractedPaletteContainer = document.getElementById("extracted-palette");
extractedPaletteContainer.addEventListener("click", () => {
  updateFinalSelectedPalette();
});

// Afficher la palette générée dans le conteneur si sur "Choisir"
const selectBtn = document.querySelector(".select-extracted-palette-btn");
selectBtn.addEventListener("click", () => {
  updateFinalSelectedPalette();
});