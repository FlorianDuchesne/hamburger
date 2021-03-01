const boutons = document.querySelectorAll(".collapse");
for (let bouton of boutons) {
  bouton.addEventListener("click", function () {
    if (this.parentElement.nextElementSibling.style.display === "none") {
      this.parentElement.nextElementSibling.style.display = "block";
    } else {
      this.parentElement.nextElementSibling.style.display = "none";
    }
  });
}
