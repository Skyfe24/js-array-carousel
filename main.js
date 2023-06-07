let slide_img = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
let sliderElement = document.querySelector('.slider');
let sliderContent = "";

for (let i = 0; i < slide_img.length; i++) {
  let currentImage = slide_img[i];
  sliderContent += `<div class="slide"><img src="./img/${currentImage}"></div>`;
}

sliderElement.innerHTML = sliderContent;

let allSlides = document.getElementsByClassName('slide');
let activeElement = 0;
allSlides[activeElement].classList.add('active');

let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');

nextButton.addEventListener('click', function() {
  allSlides[activeElement].classList.remove('active');
  activeElement = (activeElement + 1) % slide_img.length;
  allSlides[activeElement].classList.add('active');
});

prevButton.addEventListener('click', function() {
  allSlides[activeElement].classList.remove('active');
  activeElement = (activeElement - 1 + slide_img.length) % slide_img.length;
  allSlides[activeElement].classList.add('active');
});