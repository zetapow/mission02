import { elements } from './elements.js';

/* ----------- Bee species ----------------------*/
import { beeSpecies } from './beeSpecies.js';

/* ----------  Bee gallery ---------------------*/
import { gallery } from './beeGallery.js';

/*  Assign DOM Elements to variables*/
const getMale = elements.male;
const getFemale = elements.female;
const calc = elements.calc;
const reset = elements.reset;

// get elements by id for selected-Image, image-name, left-arrow and right arrow
const selectedImage = elements.selectedImage;
const imageName = elements.imageName;
const leftArrow = elements.leftArrow;
const rightArrow = elements.rightArrow;
const thumbnails = elements.thumbnails;

/* For bee info gallery */
const selectedBee = elements.selectedBee;
const beeName = elements.beeName;
const nextBee = elements.nextBee;
const prevBee = elements.prevBee;
const beeThumbnails = elements.beeThumbnails;

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
const RESTART_INDEX = 0;
// to update the selected image and the displayed image name
function updateGallery() {
   selectedImage.src = gallery[currentIndex].src;
   imageName.textContent = gallery[currentIndex].name;
}
// if at end of gallery, start from begining again
// call update gallery
function nextImage(event) {
   currentIndex++;
   if (currentIndex === gallery.length) {
      currentIndex = RESTART_INDEX;
   }
   updateGallery();
}

// if at begining of gallery, change to end
// call update gallery
function prevImage() {
   currentIndex--;
   if (currentIndex < 0) {
      currentIndex = gallery.length - 1;
   }
   updateGallery();
}

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
   beeFact.textContent = currentBee.fact;
   beePun.textContent = currentBee.pun;
}

const nextBeeFun = () => {
   beeIndex++;
   if (beeIndex === beeSpecies.length) {
      beeIndex = RESTART_INDEX;
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
