/* ----------- Bee species ----------------------*/
import { beeSpecies } from './beeSpecies.js';

/* ----------  Bee gallery ---------------------*/
import { gallery } from './beeGallery.js';

const elements = {
   selectedImage: '#selected-image',
   imageName: '#image-name',
   leftArrow: '#left-arrow',
   rightArrow: '#right-arrow',
   thumbnails: '.thumbnail',
   nextBee: '#next-bee',
   prevBee: '#prev-bee',
   beeThumbnails: '.bee-thumbnail',
   selectedBee: '#selected-bee',
   beeName: '#bee-name',
   calc: "input[value='calculate']",
   male: "input[value='male']",
   female: "input[value='female']",
   reset: "input[value='reset']",
   // anchor: "a[href^='#']",
};

/*  Assign DOM Elements to variables*/
const getMale = document.querySelector(elements.male);
const getFemale = document.querySelector(elements.female);
const calc = document.querySelector(elements.calc);
const reset = document.querySelector(elements.reset);

// get elements by id for selected-Image, image-name, left-arrow and right arrow
// get elements by query selector all for .thumbnail
const selectedImage = document.querySelector(elements.selectedImage);
const imageName = document.querySelector(elements.imageName);
const leftArrow = document.querySelector(elements.leftArrow);
const rightArrow = document.querySelector(elements.rightArrow);
const thumbnails = document.querySelectorAll(elements.thumbnails);
const selectedBee = document.querySelector(elements.selectedBee);
const beeName = document.querySelector(elements.beeName);
const nextBee = document.querySelector(elements.nextBee);
const prevBee = document.querySelector(elements.prevBee);
const beeThumbnails = document.querySelectorAll(elements.beeThumbnails);

/*========================== Bee calculator ======================== */
import { displayResult, resetForm } from './beeCalculator.js';

/* Event listener for clicking calculate */
calc.addEventListener('click', displayResult);
getMale.addEventListener('click', displayResult);
getFemale.addEventListener('click', displayResult);
reset.addEventListener('click', resetForm);

/* Incase of real-time calculation
getHeight.addEventListener('input', displayResult);
getWeight.addEventListener('input', displayResult);
getAge.addEventListener('input', displayResult);
*/

/* Potential to refactor code using an object
const BeeCalc = {
   elements:{},
   constants: {},
   calcBee(){},
   displayResult(){},
   resetForm(){}
} */

/* ==================================================================*/
/* ================= Handle galleries ===========================*/

let currentIndex = 0;

// to update the selected image and the displayed image name
function updateGallery() {
   selectedImage.src = gallery[currentIndex].src;
   imageName.textContent = gallery[currentIndex].name;
}

// to change current index to the next one
// if at end of gallery, start from begining again
// call update gallery
function nextImage(event) {
   currentIndex++;
   if (currentIndex === gallery.length) {
      currentIndex = 0;
   }
   updateGallery();
}

// to change current index to the prevous one
// if at begining of gallery, change to end
// call update gallery
function prevImage() {
   currentIndex--;
   if (currentIndex < 0) {
      currentIndex = gallery.indexOf(gallery.at(-1));
   }
   updateGallery();
}

// change current index to selected thumbnail index
// call updateGallery
function selectThumbnail(index) {
   currentIndex = index;
   updateGallery();
}

// add functions to elements by adding event listners or directly in the html
rightArrow.addEventListener('click', nextImage);
leftArrow.addEventListener('click', prevImage);
thumbnails.forEach((thumbnail, index) => {
   thumbnail.addEventListener('click', () => selectThumbnail(index));
});

/* ============================================================= */
/* ================In-case delay required  ==================== 
const ADVANCE_DELAY = 3000;
setInterval(nextImage, ADVANCE_DELAY);
*/

/* ===================== Handle bee species =======================*/

let beeIndex = 0;
function updateBees() {
   const currentBee = beeSpecies[beeIndex];
   selectedBee.src = currentBee.src;
   beeName.textContent = currentBee.commonName;
   document.getElementById('bee-fact').textContent = currentBee.fact;
   document.getElementById('bee-pun').textContent = currentBee.pun;
}

const nextBeeFun = () => {
   beeIndex++;
   if (beeIndex === beeSpecies.length) {
      beeIndex = 0;
   }
   updateBees();
};

const prevBeeFun = () => {
   beeIndex--;
   if (beeIndex < 0) {
      beeIndex = beeSpecies.length - 1;
   }
   updateBees();
};

function selectBee(index) {
   beeIndex = index;
   updateBees();
}
nextBee.addEventListener('click', nextBeeFun);
prevBee.addEventListener('click', prevBeeFun);
beeThumbnails.forEach((beeThumbnail, index) => {
   beeThumbnail.addEventListener('click', () => selectBee(index));
});
