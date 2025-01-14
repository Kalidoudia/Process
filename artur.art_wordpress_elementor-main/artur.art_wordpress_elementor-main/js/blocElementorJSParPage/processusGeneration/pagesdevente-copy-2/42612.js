/* 
*
* Déclaration des variables 
* 
*/
    let currentIndex       = 0; 
    let selectedformat     = "14x14";
    let selectedCouleur    = "marron";
    let selectedproduct    = "canvas";
    let selectedoptTshirt  = "avant";

    const imgHolder      = verifierSiElementExisteParId('imgHolder');
    const roomButton     = verifierSiElementExisteParId('show-room');
    const frameButton    = verifierSiElementExisteParId('show-frame');
    const roomContainer  = verifierSiElementExisteParId('room-container');
    const frameContainer = verifierSiElementExisteParId('frame');

    const itemTypes   = ["canvas", "affiche", "chandail-court"];
    const cadreTypes  = ["marron", "noir", "blanc"];
    const tshirtTypes = ["avant", "derriere"];

    class ItemDuPanier {
        #typeItem;
        #formatItem;
        #couleurItem;
        #optionItem;
        #quantiteItem;

        constructor(typeItem, formatItem, couleurItem, optionItem, quantiteItem) {
            this.#typeItem = typeItem;
            this.#formatItem = formatItem;
            this.#couleurItem = couleurItem;
            this.#optionItem = optionItem;
            this.#quantiteItem = quantiteItem;
        }

        // Getters
        get typeItem() { return this.#typeItem; }
        get formatItem() { return this.#formatItem; }
        get optionItem() { return this.#optionItem; }
        get couleurItem() { return this.#couleurItem; }
        get quantiteItem() { return this.#quantiteItem; }

        // Setters
        set quantiteItem(value) { this.#quantiteItem = value; }

        afficherDetails() {
            console.log(`Type: ${this.typeItem}`);
            console.log(`Format: ${this.formatItem}`);
            console.log(`Couleur: ${this.couleurItem}`);
            console.log(`Option: ${this.optionItem}`);
            console.log(`Quantité: ${this.quantiteItem}`);
        }
    }

    

/*
* 
* Fonction de premier niveau 
* 
*/
    // Gestion de la date 
    function addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    
    function calculateEstimatedDate() {
        const today = new Date(); 
        const fabricationDelay = 10;
        const fabricationDate = addDays(today, fabricationDelay);
        const day = ("0" + fabricationDate.getDate()).slice(-2);
        const month = ("0" + (fabricationDate.getMonth() + 1)).slice(-2);
        const year = fabricationDate.getFullYear();
        const estimatedDate = `${day}/${month}/${year}`;
        document.getElementById('estimated-date').innerHTML = `Livraison dès le <strong>${estimatedDate}</strong>`;
    }


    // Choisir un item 
    function displayItem(itemType) {
        let name, preview, description, imageUrl, imageWidth, imageHeight;
    
        document.querySelectorAll('.icons_popin_configurator').forEach(el => {
            el.classList.remove('active-item');
        });
    
        if (itemType === 'canvas') {
            name = "<strong>Canvas</strong>";
            preview = "A high-quality canvas perfect for showcasing fine art.";
            description = "This canvas print brings elegance and durability to any room.";
            imageUrl = "https://artur.art/wp-content/uploads/2024/11/CanvasModifie.png";
            imageWidth = "100%";
            imageHeight = "auto";
            document.querySelector('.icons_popin_configurator:nth-child(1)').classList.add('active-item');
        } 
        else if (itemType === 'affiche') {
            name = "<strong>Poster</strong>";
            preview = "Customize your poster with different frame sizes.";
            description = "Choose from multiple sizes to fit your space perfectly.";
            imageUrl = "https://artur.art/wp-content/uploads/2024/11/dorianverdier_httpss.mj_.rungtu9.png";
            imageWidth = "100%";
            imageHeight = "auto";
            document.querySelector('.icons_popin_configurator:nth-child(2)').classList.add('active-item');
        } 
        else if (itemType === 'chandail-court') {
            name = "<strong>T-shirt</strong>";
            preview = "Place your favorite motif on a T-shirt.";
            description = "Available in various sizes for a custom fit.";
            imageUrl = "https://artur.art/wp-content/uploads/2024/11/dorianverdier_t-shirt_and_a_post-removebg-preview.png";
            imageWidth = "100%";
            imageHeight = "auto";
            document.querySelector('.icons_popin_configurator:nth-child(3)').classList.add('active-item');
        }
    
        verifierSiElementExisteParId("popin_configurator_name").innerHTML = name; 
        verifierSiElementExisteParId("popin_configurator_preview").textContent = preview;
        verifierSiElementExisteParId("popin_configurator_description").textContent = description;
        verifierSiElementExisteParId("itemImage").src = imageUrl;
        verifierSiElementExisteParId("itemImage").style.width = imageWidth;
        verifierSiElementExisteParId("itemImage").style.height = imageHeight;
    }
    
    // Choisir les options de la couleur du cadre
    function displayCadre(itemType) {
        let name, preview, description, imageUrl, imageWidth, imageHeight;
    
        document.querySelectorAll('.icons_popinCadre_configurator').forEach(el => {
            el.classList.remove('active-item');
        });
            
        if (itemType === 'marron') {
            name = "<strong>Marron</strong>";
            preview = "Boite en bois teck.";
            description = "Boite en bois teck Le cadre boite présente un léger espacement entre le verre et lœuvre ce qui donne une impression de volume à lensemble. Un encadrement original et chic.";
            imageUrl = "https://artur.art/wp-content/uploads/2024/11/marron-1.png";
            imageWidth = "100%";
            imageHeight = "auto";
            document.querySelector('.icons_popinCadre_configurator:nth-child(1)').classList.add('active-item');
        } 
        else if (itemType === 'noir') {
            name = "<strong>Noir</strong>";
            preview = "Boite en bois wengé";
            description = "Le cadre boite présente un léger espacement entre le verre et l'œuvre ce qui donne une impression de volume à l'ensemble. Un encadrement original et chic.";
            imageUrl = "https://artur.art/wp-content/uploads/2024/11/noir-1.png";
            imageWidth = "100%";
            imageHeight = "auto";
            document.querySelector('.icons_popinCadre_configurator:nth-child(2)').classList.add('active-item');
        } 
        else if (itemType === 'blanc') {
            name = "<strong>Blanc</strong>";
            preview = "Boite blanche en bois";
            description = "Le cadre boite présente un léger espacement entre le verre et l'œuvre ce qui donne une impression de volume à l'ensemble. Un encadrement original et chic.";
            imageUrl = "https://artur.art/wp-content/uploads/2024/11/blanc-1.png";
            imageWidth = "100%";
            imageHeight = "auto";
            document.querySelector('.icons_popinCadre_configurator:nth-child(3)').classList.add('active-item');
        }
    
        verifierSiElementExisteParId("cadreImage").src = imageUrl;
        verifierSiElementExisteParId("cadreImage").style.width = imageWidth;
        verifierSiElementExisteParId("cadreImage").style.height = imageHeight;
        verifierSiElementExisteParId("popinCadre_configurator_name").innerHTML = name; 
        verifierSiElementExisteParId("popinCadre_configurator_preview").textContent = preview;
        verifierSiElementExisteParId("popinCadre_configurator_description").textContent = description;
    }

    // Sélectionner une couleur pour le cadre 
    function selectPosterBorderColor(element) {
        let map=document.querySelectorAll('.map');
        let innerBevel=document.querySelectorAll('.innerBevel');
        let outerBevel =document.querySelectorAll('.outerBevel');
        let flatSurface = document.querySelectorAll('.flatSurface');
        
        switch (element.id) {
            case "Image-marron":
                outerBevel.forEach(el => el.style.borderColor = "rgb(109, 84, 58) rgb(24, 19, 13) rgb(24, 19, 13) rgb(109, 84, 58)");
                flatSurface.forEach(el => el.style.borderColor = "rgb(65, 40, 16)");
                innerBevel.forEach(el => el.style.borderColor = "rgb(24, 19, 13) rgb(109, 84, 58) rgb(109, 84, 58) rgb(24, 19, 13)");
                map.forEach(el => {
                    el.style.backgroundColor = "rgb(255,249,224)";
                    el.style.borderColor = "rgb(207, 166, 0) rgb(207, 166, 0) rgb(145, 110, 0) rgb(145, 110, 0)";
                });
                break;
            case "Image-Noir":
               outerBevel.forEach(el => el.style.borderColor = "rgb(30, 30, 30) rgb(10, 10, 10) rgb(10, 10, 10) rgb(30, 30, 30)");
                flatSurface.forEach(el => el.style.borderColor = "rgb(15, 15, 15)");
                innerBevel.forEach(el => el.style.borderColor = "rgb(10, 10, 10) rgb(30, 30, 30) rgb(30, 30, 30) rgb(10, 10, 10)");
                map.forEach(el => {
                    el.style.backgroundColor ="rgb(255, 255, 255)";
                    el.style.borderColor = "rgb(80, 80, 80) rgb(80, 80, 80) rgb(50, 50, 50) rgb(50, 50, 50)";
                });
                break;
            case "Image-blanc":
                outerBevel.forEach(el => el.style.borderColor = "rgb(230, 230, 230) rgb(200, 200, 200) rgb(200, 200, 200) rgb(230, 230, 230)");
                flatSurface.forEach(el => el.style.borderColor = "rgb(240, 240, 240)");
                innerBevel.forEach(el => el.style.borderColor = "rgb(200, 200, 200) rgb(230, 230, 230) rgb(230, 230, 230) rgb(200, 200, 200)");
                map.forEach(el => {
                    el.style.backgroundColor = "rgb(255, 255, 255)";
                    el.style.borderColor = "rgb(230, 230, 230) rgb(230, 230, 230) rgb(180, 180, 180) rgb(180, 180, 180)";
                });
                break;
        }
    }

    // Choisir l'option de la disposition du t-shirt 
    function displayTshirtOptions(itemType) {
        let name, description, imageUrl, imageWidth, imageHeight;
    
        document.querySelectorAll('.icons_popinTshirtOptions_configurator').forEach(el => {
            el.classList.remove('active-item');
        });
    
        if (itemType === 'avant') {
            name = "<strong>Avant</strong>";
            description = "Format d'un T-shirt avant";
            imageUrl = "https://artur.art/wp-content/uploads/2024/11/dorianverdier_httpss.mj_.runFnfifwS71IM_generate_images_for_wh_dbd526b0-3fa7-4140-adfe-aa90c0955a0e_3-removebg-preview.png";
            imageWidth = "100%";
            imageHeight = "auto";
            document.querySelector('.icons_popinTshirtOptions_configurator:nth-child(1)').classList.add('active-item');
        } 
        else if (itemType === 'derriere') {
            name = "<strong>Derrière</strong>";
            description = "Format d'un T-shirt derrière";
            imageUrl = "https://artur.art/wp-content/uploads/2024/11/dorianverdier_httpss.mj_.runFnfifwS71IM_Generate_high-quality__f07a2019-8d0c-41c2-b578-5c6d8dcc113a_0-removebg-preview.png";
            imageWidth = "100%";
            imageHeight = "auto";
            document.querySelector('.icons_popinTshirtOptions_configurator:nth-child(2)').classList.add('active-item');
        }
    
        verifierSiElementExisteParId("TshirtOptionsImage").src = imageUrl;
        verifierSiElementExisteParId("TshirtOptionsImage").style.width = imageWidth;
        verifierSiElementExisteParId("TshirtOptionsImage").style.height = imageHeight;
        verifierSiElementExisteParId("popinTshirtOptions_configurator_name").innerHTML = name; 
        verifierSiElementExisteParId("popinTshirtOptions_configurator_description").textContent = description;
    }

    // Changer d'item  
    function showOptions(item) {    
        ['mainImageTag','collapseChoixOptionTShirt','collapseChoixMaterielCanva','collapseChoixMaterielTShirt','collapseChoixMaterielAffiche','collapseChoixOptionAfficheCanva']
            .forEach(id => document.getElementById(id).style.display = 'none');
    
        if (item === 'canva') {
            ['collapseChoixMaterielCanva','collapseChoixOptionAfficheCanva'].forEach(id => document.getElementById(id).style.display = 'block');
        } 
        else if (item === 'affiche') {
            ['collapseChoixMaterielAffiche','collapseChoixOptionAfficheCanva'].forEach(id => document.getElementById(id).style.display = 'block');
        } 
        else if (item === 'chandail-court') {
            ['mainImageTag','collapseChoixOptionTShirt','collapseChoixMaterielTShirt'].forEach(id => document.getElementById(id).style.display = 'block');
        }
    }
// Function to get the cookie value by name
function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
}


    // Quand l'utilisateur choisi un item 
    function selectItem(selected) {
        const labels = document.querySelectorAll('.size-option label');
        labels.forEach(label => {
            label.style.fontWeight = 'normal';
        });
        
        const label = selected.querySelector('label');
        label.style.fontWeight = 'bold';
        
        const images = document.querySelectorAll('.size-option img');
        images.forEach(img => {
            img.style.border = '2px solid rgb(180, 180, 180)'; 
        });
        
        const img = selected.querySelector('img');
        if (img) {
            img.style.border = '2px solid black'; 
        }
        
        const imgHolder        = verifierSiElementExisteParId('imgHolder');
        const formatSection    = verifierSiElementExisteParId('formatSection');
        const tailleSection    = verifierSiElementExisteParId('tailleSection');
        const posterOptSection = verifierSiElementExisteParId('imgPoster');
        
        let outerBevel  = document.querySelectorAll('.outerBevel');
        let innerBevel  = document.querySelectorAll('.innerBevel');
        let flatSurface = document.querySelectorAll('.flatSurface');
        
        switch (selected.id) {
            case 'canvas':
                selectedproduct=selected.id;
                verifierSiElementExisteParId('room-container').style.display = 'block';
                formatSection.style.display = 'block';
                document.querySelector('.poster-salon-preview').style.display = 'none';
                document.querySelector('.artwork').style.display     = 'block';
                verifierSiElementExisteParId('frame').style.display  = 'none';
                document.querySelector('.poster-div').style.display  = 'none';
                document.querySelector('.tshirt-div').style.display  = 'none';
                tailleSection.style.display                          = 'none';
                document.querySelector('.imgTshirt').style.display   = 'none';
                document.querySelector('.imgPoster').style.display   = 'none';
                break;
              
            case 'affiche':
                selectedproduct=selected.id;
                imgHolder.style.boxShadow = 'none';
                document.getElementById('room-container').style.display = 'block';
                document.querySelector('.poster-salon-preview').style.display = 'block';
                document.getElementById('frame').style.display = 'none';
                document.querySelector('.tshirt-div').style.display = 'none';
                formatSection.style.display = 'block';
                tailleSection.style.display = 'none';
                document.querySelector('.imgTshirt').style.display = 'none';
                document.querySelector('.imgPoster').style.display = 'block';
                posterOptSection.style.display = 'block';
                break;
              
            case 'chandail-court':
                selectedproduct=selected.id;
                document.querySelector('.tshirt-div').style.display = 'block';
                document.getElementById('room-container').style.display = 'none';
                document.getElementById('frame').style.display = 'none';
                document.querySelector('.poster-div').style.display = 'none';
                formatSection.style.display = 'none';
                tailleSection.style.display = 'block';
                document.querySelector('.imgTshirt').style.display = 'block';
                imgHolder.style.boxShadow = 'none';
                document.querySelector('.imgPoster').style.display = 'none';
                break;
        }
    }

    // Quand l'utilisateur choisit une taille 
    function selectOption(selected) {
        const labels        = document.querySelectorAll('.size-option label');
        const artwork       = document.getElementById('artworkPreview');
        const roomContainer = document.getElementById('room-container');

        labels.forEach(label => {
            label.style.fontWeight = 'normal';
        });
    
        const label = selected.querySelector('label');
        label.style.fontWeight = 'bold';

        const images = document.querySelectorAll('.size-option img');
        images.forEach(img => {
            img.style.border = '2px solid rgb(180, 180, 180)'; 
        });
    
        const img = selected.querySelector('img');
        
        if (img) {
            img.style.border = '2px solid black'; 
        }
        
        switch (selected.id) {
            case '12x12', "14x14":
                artwork.style.width = '130px';
                artwork.style.left = '60%';
                artwork.style.top = '25%';
                roomContainer.style.background = "url('https://artur.art/wp-content/uploads/2024/11/salon_detail_page.jpg') no-repeat center/cover"; 
                break;
            case '16x16':
                artwork.style.width = '150px';
                artwork.style.left = '48%';
                artwork.style.top = '30%';
                roomContainer.style.background = "";
                roomContainer.style.width = "100%";
                break;
            case '18x18':
                artwork.style.width = '200px';
                artwork.style.width = '200px';
                artwork.style.left = '48%';
                artwork.style.top = '30%';
                roomContainer.style.background = ""; 
                roomContainer.style.width= "100%";
                break;
        }
    }

    // Sélectionner un option du T-shirt
    function selectOptImg(selectedElement) {
        const tshirtContainer = document.querySelector('.tshirt-container');
        if (selectedElement.id === "Image-devant") {
            tshirtContainer.style.background = "url('https://artur.art/wp-content/uploads/2024/11/dorianverdier_httpss.mj_.runFnfifwS71IM_generate_images_for_wh_dbd526b0-3fa7-4140-adfe-aa90c0955a0e_3-removebg-preview.png')no-repeat center center";
           tshirtContainer.style.position = "relative";
    tshirtContainer.style.width = "400px";
    tshirtContainer.style.height = "400px";
    tshirtContainer.style.margin = "20px";
    tshirtContainer.style.backgroundSize = "cover";
        } 
        else if (selectedElement.id === "Image-derriere") {
            tshirtContainer.style.background = "url('https://artur.art/wp-content/uploads/2024/11/dorianverdier_httpss.mj_.runFnfifwS71IM_Generate_high-quality__f07a2019-8d0c-41c2-b578-5c6d8dcc113a_0-removebg-preview.png')no-repeat center center";
            tshirtContainer.style.position = "relative";
    tshirtContainer.style.width = "400px";
    tshirtContainer.style.height = "400px";
    tshirtContainer.style.margin = "20px";
    tshirtContainer.style.backgroundSize = "cover";
        }
    }
    
    // Aller chercher la liste des items du paniers 
    function getPanierAchatsIA() {
        let cookiesNonSplit = document.cookie; 
        if (cookiesNonSplit) {
            
            let cookies = cookiesNonSplit.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let clefVal = cookies[i].split('=');
                if (clefVal[0].trim() === "panierAchatsIA") {
                    try {
                        // Decode and parse the JSON value of the panierAchatsIA cookie
                        let items = JSON.parse(decodeURIComponent(clefVal[1].trim()));
                        return items; // Return the list of items
                    } catch (error) {
                        console.log('Error while parsing the panierAchatsIA cookie:', error);
                        return []; // Return an empty array in case of an error
                    }
                }
            }
        }
        return []; 
    }

    function ajouterOuIncrementerItem(typeItem, formatItem, couleurItem, optionItem) {

        // Récupérer le panier
        let panierAchatsIA = getPanierAchatsIA();

        // Trouver l'item dans le panier
        let item = panierAchatsIA.find(item => 
            item.typeItem === typeItem &&
            item.formatItem === formatItem &&
            item.couleurItem === couleurItem &&
            item.optionItem === optionItem
        );

        if (item) {
            // Si l'item existe, incrémenter la quantité de 1
            item.quantiteItem += 1;
            console.log(`Quantité de l'item ${typeItem} incrémentée à ${item.quantiteItem}`);
        } 
        else {
            // Si l'item n'existe pas, créer l'item avec une quantité de 1
            let itemDuPanier = {
                typeItem: typeItem,
                formatItem: formatItem,
                couleurItem: couleurItem,
                optionItem: optionItem,
                quantiteItem: 1
            };
            panierAchatsIA.push(itemDuPanier);
            console.log(`Item ${typeItem} ajouté avec une quantité de 1`);
        }

        // Mettre à jour le panier dans les cookies
        document.cookie = `panierAchatsIA=${encodeURIComponent(JSON.stringify(panierAchatsIA))}; path=/;`;
    }
    
    // Affichage des popup
    function openPopup() {
        document.getElementById("popup").style.display = "block";
    }
    function openPopupFormat() {
        document.getElementById("popupFormat").style.display = "block";
    }
    function closePopup() {
        ['popup','popupFormat','popupItem'].forEach(id => document.getElementById(id).style.display = 'none');
    }

    function openPopupTshirt() {
        document.getElementById("popupT-shirt").style.display = "block";
    }

    function closeTshirtPopup() {
        document.getElementById("popupT-shirt").style.display = "none";
    }

    function verifierSiElementExisteParId(id) {
        try {
            let elementRecherché = document.getElementById(id);
            if (!elementRecherché) {
                console.log(`Élément avec id "${id}" pas trouvé ...`);
                return null; // Explicitly return null if not found
            } else {
                return elementRecherché;
            }
        } catch (exception) {
            console.log(`Exception "${exception.message}" lancée quand tentative d'accès à élément dont id est : "${id}" ...`);
            return null; // Explicitly return null on exception
        }
    }



/*
* 
* Fonctions d'ordre supérieur  
* 
*/
    function showFormatSection(item) {     
        const formatSection = verifierSiElementExisteParId('formatSection');
        if (formatSection) {
            formatSection.style.display = item === 'canvas' ? 'block' : 'none';
        }
    }

    function openPopupItem() {
        document.getElementById("popupItem").style.display = "block";
        displayItem('canvas');
    }
    function openPopupCadre() {
        document.getElementById("popupCadre").style.display = "block";
        displayCadre('marron');
    }
    function openPopupTshirtOptions() {
        document.getElementById("popupTshirtOptions").style.display = "block";
        displayTshirtOptions('avant');
    }

    function avertirClientItemAjouteAuPanier(panierAchatsIA) {
        if (panierAchatsIA && panierAchatsIA.length > 0) {
            let panierItemsList = document.getElementById('panierItemsList');
            panierItemsList.innerHTML = ''; // Clear the list before adding new items

            let total = 0;

            panierAchatsIA.forEach(item => {
                let itemElement = document.createElement('li');
                itemElement.classList.add('list-group-item');

                // Accessing the properties of the item (including quantity)
                itemElement.innerHTML = `
                    <strong>${item.typeItem}</strong><br>
                    Format: ${item.formatItem} <br>
                    Couleur: ${item.couleurItem} <br>
                    Option: ${item.optionItem} <br>
                    Quantité: ${item.quantiteItem} <br><br>
                `;
                panierItemsList.appendChild(itemElement);

                // Calculate the total price (you can replace 20 with the actual price logic)
                total += 20 * item.quantiteItem; // Assuming price per item is 20 for simplicity
            });

            document.getElementById('panierTotal').textContent = `Total: ${total} €`;

            // Show the modal
            var myModal = new bootstrap.Modal(document.getElementById('panierModal'));
            myModal.show();
        } else {
            console.log('Le panier est vide.');
        }
    }


    function ajouterPanierAchatsIA() {
        // Créer un nouvel objet ItemDuPanier avec les informations actuelles
        let itemDuPanier = new ItemDuPanier(
            selectedproduct, 
            selectedformat, 
            selectedCouleur, 
            selectedoptTshirt
        );

        itemDuPanier.afficherDetails(); // Afficher les détails de l'item (optionnel)

        // Vérifier si itemDuPanier est valide
        if (itemDuPanier) {
            let panierAchatsIA = getPanierAchatsIA(); // Récupérer le panier ou une liste vide

            // Si panierAchatsIA existe, on continue
            if (panierAchatsIA) {

                // Vérifier si l'item existe déjà dans le panier
                let itemExist = panierAchatsIA.find(item => 
                    item.typeItem === itemDuPanier.typeItem &&
                    item.formatItem === itemDuPanier.formatItem &&
                    item.couleurItem === itemDuPanier.couleurItem &&
                    item.optionItem === itemDuPanier.optionItem
                );

                // Si l'item n'existe pas, on l'ajoute au panier avec la quantité de 1. Sinon, incrémenter de 1 sa valeur
                if (itemExist) {
                    itemExist.quantiteItem += 1;
                    console.log(`Quantité de l'item ${itemDuPanier.typeItem} incrémentée.`);
                } 
                else {    
                    let itemDuPanierJSON = {
                        typeItem: itemDuPanier.typeItem,
                        formatItem: itemDuPanier.formatItem,
                        couleurItem: itemDuPanier.couleurItem,
                        optionItem: itemDuPanier.optionItem,
                        quantiteItem: 1 
                    };
                    panierAchatsIA.push(itemDuPanierJSON);
                    console.log(`Item ${itemDuPanier.typeItem} ajouté au panier.`);
                }

                // Mettre à jour le panier dans les cookies
                document.cookie = `panierAchatsIA=${encodeURIComponent(JSON.stringify(panierAchatsIA))}; path=/;`;
            } 
            else {
                // Si le panier est vide ou non défini, on le crée
                console.log("Le panier n'existe pas, création d'un panier vide.");
                panierAchatsIA = [];
                let itemDuPanierJSON = {
                    typeItem: itemDuPanier.typeItem,
                    formatItem: itemDuPanier.formatItem,
                    couleurItem: itemDuPanier.couleurItem,
                    optionItem: itemDuPanier.optionItem,
                    quantiteItem: 1
                };
                panierAchatsIA.push(itemDuPanierJSON);
                document.cookie = `panierAchatsIA=${encodeURIComponent(JSON.stringify(panierAchatsIA))}; path=/;`;
            }

            // Appeler la fonction pour mettre à jour l'UI (modal, total, etc.)
            avertirClientItemAjouteAuPanier(panierAchatsIA);
        } 
        else {
            console.log("L'itemDuPanier n'a pas été créé dans la méthode ajouterPanierAchatsIA()");
        }
    }


/*
* 
* Écouteur liés aux éléments HTML  
* 
*/
    roomButton.addEventListener('click', () => {
        roomContainer.style.display = 'block';
        frameContainer.style.display = 'none';
    });
   
    frameButton.addEventListener('click', () => {
        imgHolder.style.boxShadow = 'none';
        roomContainer.style.display = 'none';
        frameContainer.style.display = 'block';
        document.querySelector('.poster-div').style.display = 'none';
        document.querySelector('.tshirt-div').style.display = 'none';
    });

    document.getElementById("bouton-ajouterAuPanier").addEventListener("click", function() {
        // window.location.href = 'https://artur.art/xproduction_processusvente_saoussenarfaoui-copy-copy/';
        ajouterPanierAchatsIA();
    });

    document.getElementById("bouton-commander").addEventListener("click", function() {
        window.location.href = 'https://artur.art/xproduction_processusvente_saoussenarfaoui-copy-copy/';
    });

    // Left arrow click event Tshirt Options
    document.getElementById("popinTshirtOptions_configurator_arrow_left").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + tshirtTypes.length) % tshirtTypes.length; // Wrap around to last item if at start
        let optionTShirt = tshirtTypes[currentIndex];
        selectedoptTshirt = optionTShirt;
        displayTshirtOptions(selectedoptTshirt);
    });
    
    // Right arrow click event
    document.getElementById("popinTshirtOptions_configurator_arrow_right").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % tshirtTypes.length; // Wrap around to first item if at end
        let optionTShirt = tshirtTypes[currentIndex];
        selectedoptTshirt = optionTShirt;
        displayTshirtOptions(selectedoptTshirt);
    });
    
    document.getElementById("popin_configurator_arrow_left").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + itemTypes.length) % itemTypes.length; 
        displayItem(itemTypes[currentIndex]);
    });
    
    // Right arrow click event
    document.getElementById("popin_configurator_arrow_right").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % itemTypes.length; 
        displayItem(itemTypes[currentIndex]);
    });
    // Left arrow click event Cadre
    document.getElementById("popinCadre_configurator_arrow_left").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + cadreTypes.length) % cadreTypes.length; 
        displayCadre(cadreTypes[currentIndex]);
    });
    
    // Right arrow click event
    document.getElementById("popinCadre_configurator_arrow_right").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % cadreTypes.length; 
        displayCadre(cadreTypes[currentIndex]);
    });

    document.getElementById("popinCadre_configurator_arrow_right").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % cadreTypes.length; 
        displayCadre(cadreTypes[currentIndex]);
    });

    document.querySelectorAll('.optionDeLaCouleur').forEach(element => {

        element.addEventListener('click', function() {
            
            let couleurChoisie = "marron";

            switch(this.id) {
                case 'noir'   : 
                case "Image-Noir"   : {
                    couleurChoisie = "noir";
                    break;
                } 
                case 'blanc'  : 
                case "Image-blanc"  : {
                    couleurChoisie = "blanc";
                    break;
                }
                case 'marron' :
                case "Image-marron" : {
                    couleurChoisie = "marron";
                    break;
                }
                default : {
                    console.log('Couleur pas trouvé quand sélection de l\'option ' + this.id );
                    break;
                }
            }
            selectedCouleur = couleurChoisie;
        });
    });

    document.querySelectorAll('.optionDeLaTaille').forEach(element => {

        element.addEventListener('click', function() {
            let tailleChoisie = this.id;
        });
    });

/*
* 
* Écouteur d'événement 
* 
*/
    document.addEventListener('DOMContentLoaded', function () {
        
        const client = ClientArtur.charger();
        const urlImageGeneree = decodeURIComponent(client.get("urlImageGeneree") || "");
        [
            document.getElementById('imgDetails'),
            document.getElementById('artworkPreview'),
            document.getElementById('image-genere-affiche-apercu'),
            document.getElementById('image-genere-affiche'),
            document.getElementById('image-genere-cadre'),
            document.getElementById('design-image')
        ].forEach(image => {
            if (image) {
                image.src = urlImageGeneree;
            }
        });

        calculateEstimatedDate();
        displayCadre(cadreTypes[currentIndex]);
        displayTshirtOptions(tshirtTypes[currentIndex]);
        const productType = getCookie('productType'); // Get the cookie value

    // Check if productType exists, is not empty, and equals 'tshirt'
    if (productType && productType === 'tshirt') {
        // Select the element by ID and invoke the selectItem function with that element
        const selectedItem = document.getElementById('chandail-court');
        if (selectedItem) {
            selectItem(selectedItem); // Pass the DOM element itself to the function
        }
    }
});