const INDEX_PAS_TROUVÉ = -1;

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");

  // Initialiser le swiper
  // eslint-disable-next-line no-undef
  const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const swiperSlide = this.closest(".swiper-slide");
      if (swiperSlide) {

        // Obtenir les valeurs de l'oeuvre affichée
        const productId = swiperSlide.getAttribute("data-product-id");
        const action = this.classList.contains("like")
          ? "like" : this.classList.contains("love") ? "love" : "no";
        const productName = swiperSlide.getAttribute("data-product-name");
        const productAttribute =
          swiperSlide.getAttribute("data-product-attribute");
        const productImage = swiperSlide.querySelector("img").src;
        const productArtist =
          swiperSlide.getAttribute("data-product-artist");

        // Sauvegarder les données de l'oeuvre et l'action
        // eslint-disable-next-line no-undef
        const client = ClientArtur.charger();

        // Obtenir la liste des oeuvres appréciées par l'utilisateur
        const preferenceOeuvres = client.get("preferenceOeuvres") || [];

        const preferenceOeuvre = {
          action: action,
          id: productId,
          name: productName,
          attribute: productAttribute,
          image: productImage,
          artist: productArtist
        };

        // Vérifier si l'oeuvre a déjà été évalué précédemment
        const indexOeuvre =
          preferenceOeuvres.findIndex(item => item.id === productId);

        if (indexOeuvre === INDEX_PAS_TROUVÉ) {
          preferenceOeuvres.push(preferenceOeuvre);
        } else {
          preferenceOeuvres[indexOeuvre] = preferenceOeuvre;
        }

        // preferenceOeuvres.push(preferenceOeuvre);

        // Enregistrer les préférences
        client.set("preferenceOeuvres", preferenceOeuvres);

        // Vérifier si c'est la dernière oeuvre
        const totalSlides = swiper.slides.length;
        const currentIndex = swiper.activeIndex;
        if (currentIndex === totalSlides - 1) {
          // Passer à la prochaine page
          window.location.href = "https://artur.art/selection-couleurs/";
        } else {
          // Montrer la prochaine oeuvre
          swiper.slideNext();
        }
      } else {
        // console.error("Le bouton n'est pas associé à une oeuvre ");
      }
    });
  });
});
