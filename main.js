console.log('JS OK')

//recupero i tasti dal dom
const nextButton = document.getElementById('next');
const prevButtonn = document.getElementById('prev');
//recupero le immagini dentro il carousel //selezione l'intero nodo di immagini
const images = querySelectorAll('#carousel img')

//lista delle immagini da passare al
const listImg = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// Variabile di appoggio per gli elementi da montare

let currentIndex = 0;

// la prima immagine deve essere quella attiva (di partenza)
images[currentIndex].classList.add('active');

//Metto in ascolto il button next
nextButton.addEventListener('click', function ()) {
    images[currentIndex].classList.remove('active');
    currentIndex++;
    if (currentIndex === images.lenght) currentIndex=0;
    images[currentIndex].classList.add('active');

}
//Metto in ascolto il button prev
prevButton.addEventListener('click', function ()) {
    images[currentIndex].classList.remove('active');
    currentIndex--;
    if (currentIndex === images[0]) return;
    images[currentIndex].classList.add('active');

}

//recupero la gallery thumbnails
const thumbGallery = document.getElementById ('thumbnails')
//creare anche il thumbnail
const thumbnail = imageElement.cloneNode();