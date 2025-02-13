// Tableau contenant les slides (images + textes)
// ----------------------
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

console.log("Slides chargés :", slides);

// Sélectionner les éléments HTML nécessaires à l'affichage
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

console.log("Éléments HTML récupérés :", { bannerImg, tagLine, dotsContainer, leftArrow, rightArrow });

// Étape 1 : Mettez un event listener sur chacune des flèches
// ----------------------

leftArrow.addEventListener("click", () => {
  console.log("Flèche gauche cliquée");
  prevSlide();
});

rightArrow.addEventListener("click", () => {
  console.log("Flèche droite cliquée");
  nextSlide();
});

console.log("Événements ajoutés aux flèches (droite et gauche)");

// Étape 2 : Ajouter des bullet points au slider
// ----------------------

// Vider le conteneur avant d'ajouter de nouveaux points
dotsContainer.innerHTML = ''; 

slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");

  if (index === 0) {
    dot.classList.add("dot_selected");
  }

  dot.addEventListener("click", () => {
    console.log(`Bullet point ${index + 1} cliqué`);
    goToSlide(index);
  });

  dotsContainer.appendChild(dot);
});

console.log("Bullet points créés et ajoutés au conteneur des dots");

// Fonction pour aller à une slide spécifique via les bullets
function goToSlide(index) {
  currentSlide = index;
  console.log("Go to slide, index actuel :", currentSlide);
  updateCarousel();
}

// Étape 3 : Modifier le slide au clic sur le bouton
// ----------------------

function nextSlide() {
  currentSlide++; // augmente de 1 (slide suivante)
  if (currentSlide >= slides.length) {
    currentSlide = 0; // revenir à la première image si on est à la fin
  }
  console.log("Passage à la slide suivante, index actuel :", currentSlide);
  updateCarousel();
}

function prevSlide() {
  currentSlide--; // diminue de 1 (slide précédente)
  if (currentSlide < 0) {
    currentSlide = slides.length - 1; // revenir à la dernière image si on est avant la première
  }
  console.log("Retour à la slide précédente, index actuel :", currentSlide);
  updateCarousel();
}

// Étape 4 : Mettez en place le défilement infini du carrousel
// ----------------------

// Déclarez la variable pour la slide actuelle
let currentSlide = 0; // La première slide (index 0) est la slide active par défaut
updateCarousel(); // Mise à jour immédiate du carrousel

function updateCarousel() {
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
  console.log("Image mise à jour :", bannerImg.src);

  tagLine.innerHTML = slides[currentSlide].tagLine;
  console.log("Texte de la slide mis à jour :", tagLine.innerHTML);

  // Met à jour l'état des bullet points
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentSlide);
  });
}
