document.addEventListener("DOMContentLoaded", () => {
    const imgs = document.querySelectorAll(".img-select a"); // Sélectionne toutes les miniatures
    const mainImage = document.querySelector(".img-showcase img"); // Sélectionne l'image principale
  
    imgs.forEach((imgItem) => {
      imgItem.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        const newImageSrc = imgItem.querySelector("img").src; // Récupère la source de l'image miniature
        mainImage.src = newImageSrc; // Met à jour la source de l'image principale
      });
    });
  });