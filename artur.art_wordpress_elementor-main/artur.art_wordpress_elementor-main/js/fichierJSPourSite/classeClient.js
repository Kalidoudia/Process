
/**
 * Classe qui correspond aux données du client
 */
class ClientArtur {
  /**
   *
   */
  constructor(data = {}) {
    this.data = {
      questionQuiz: [],
      reponsesQuiz: [],
      preferenceOeuvres: [],
      approche: "",
      sousApproche: "",
      couleurs: [],
      format: "",
      styles: [],
      modeImpression: "",
      modeGeneration: "",
      urlImageGeneree: "",
      panier: [],
      ...data // Remplace les valeurs par défaut avec les données passées
    };
  }

  // Sauvegarde dans le localStorage
  /**
   *
   */
  sauvegarder() {
    localStorage.setItem("clientArtur", JSON.stringify(this.data));
  }

  // Charger depuis le localStorage
  /**
   *
   */
  static charger() {
    const data = localStorage.getItem("clientArtur");
    if (data) {
      return new ClientArtur(JSON.parse(data));
    }
    return new ClientArtur();
  }

  // Accesseur
  /**
   *
   */
  get(key) {
    return this.data[key];
  }

  // Mutateur
  /**
   *
   */
  set(key, value) {
    this.data[key] = value;
    this.sauvegarder();
  }

  // Validate an item
  /**
   *
   */
  validerItem(item) {
    const schema = {
      idItem: "number",
      typeItem: "string",
      formatItem: "string",
      couleurItem: "string",
      optionItem: "string",
      quantiteItem: "number"
    };

    return Object.keys(schema).every(
      key => key in item && typeof item[key] === schema[key]
    );
  }

  // Ajouter un item au panier
  /**
   *
   */
  ajouterItem(item) {
    if (this.validerItem(item)) {
      this.data.panier.push(item);
      this.sauvegarder();
      return true;
    } else {
      return false;
    }
  }

  // Retirer un item du panier
  /**
     *
     */
  retirerItem(itemToRemove) {
    const index = this.data.panier.findIndex(item =>
      item.typeItem === itemToRemove.typeItem &&
          item.formatItem === itemToRemove.formatItem &&
          item.couleurItem === itemToRemove.couleurItem &&
          item.optionItem === itemToRemove.optionItem &&
          item.quantiteItem === itemToRemove.quantiteItem
    );

    // eslint-disable-next-line no-magic-numbers
    if (index !== -1) {
      this.data.panier.splice(index, 1); // Remove the item at the found index
      this.sauvegarder();
      return true;
    }
    else {
      return false;
    }
  }
}

window.ClientArtur = ClientArtur;