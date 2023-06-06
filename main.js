console.log("JS OK");
// OPERAZIONI INIZIALI

//recupero i tasti dal dom
const nextButton = document.getElementById("next");
const prevButtonn = document.getElementById("prev");
//recupero le immagini dentro il carousel //selezione l'intero nodo di immagini
const gallery = document.querySelector("gallery");
//lista delle immagini da passare al
const sources = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
];

// html per le immagini
let imageElements = " ";
console.log(imageElements);

// Per ogni source creo un tag img
for (let i = 0; i < sources.length; i++) {
    imageElements += `<img src="${sources[i]}"  alt="Landscape ${i + 1}">`;
    console.log(imageElements);
  }





//inserire img nel dom
gallery.innerHTML = imageElements;
console.log(imageElements);
const images = querySelector("#carousel img");
// Variabile di appoggio per gli elementi da montare

let currentIndex = 0;

// la prima immagine deve essere quella attiva (di partenza)
images[currentIndex].classList.add("active");

// logica dinamica----------------------------------------------------------------------

//Metto in ascolto il button next
nextButton.addEventListener("click", function () {
  images[currentIndex].classList.remove("active");
  currentIndex++;
  if (currentIndex === images.length - 1) return;
  images[currentIndex].classList.add("active");
});
//Metto in ascolto il button prev
prevButton.addEventListener("click", function () {
  images[currentIndex].classList.remove("active");
  currentIndex--;
  if (!currentIndex) return;
  images[currentIndex].classList.add("active");
});


