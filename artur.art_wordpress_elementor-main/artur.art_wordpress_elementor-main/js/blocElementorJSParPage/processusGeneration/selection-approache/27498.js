document.querySelectorAll(".box").forEach(box => {
  box.addEventListener("click", function(event) {
    if (event.target.classList.contains("learn-more")) {
      return;
    }

    // eslint-disable-next-line no-unused-vars
    const boxId = this.id;
    const boxName = this.querySelector("h2").textContent;

    // eslint-disable-next-line no-undef
    const client = ClientArtur.charger();
    client.set("approche",boxName);

    window.location.href = "https://artur.art/selection-sous-approache/";
  });
});