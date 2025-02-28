/* -------- Bee species array --------- */
const beeSpeciesNZ = [
   {
      scientificName: 'Apis mellifera',
      commonName: 'European Honey Bee',
      habitat: 'Urban areas, farmlands, and forests',
      role: 'Pollination and honey production',
      fact: 'Introduced to New Zealand in the 19th century, they are crucial for pollinating many crops.',
      pun: 'Why did the honey bee go to school? To get a little buzz-ter education!',
      src: './images/beeArray/european-honey-bee.jpg',
   },
   {
      scientificName: 'Leioproctus fulvescens',
      commonName: 'Native Yellow-Faced Bee',
      habitat: 'Coastal areas, forests, and grasslands',
      role: 'Pollination of native plants',
      fact: 'One of the few native bee species in New Zealand, they are solitary bees.',
      pun: 'What do you call a bee that can’t make up its mind? A maybe!',
      src: './images/beeArray/yellow-faced-bee.jpg',
   },
   {
      scientificName: 'Lasioglossum sordidum',
      commonName: 'Native Sweat Bee',
      habitat: 'Gardens, grasslands, and forests',
      role: 'Pollination of various flowering plants',
      fact: 'These bees are known for their metallic sheen and are important pollinators in native ecosystems.',
      pun: 'Why do sweat bees make great comedians? They always work the crowd!',
      src: './images/beeArray/sweat-bee.jpg',
   },
   {
      scientificName: 'Hylaeus spp.',
      commonName: 'Native Masked Bee',
      habitat: 'Forests, coastal areas, and urban gardens',
      role: 'Pollination of native flora',
      fact: 'Masked bees are small and often nest in hollow stems or wood cavities.',
      pun: 'Why did the masked bee get invited to all the parties? Because it always brought the buzz!',
      src: './images/beeArray/masked-bee.jpg',
   },
   {
      scientificName: 'Bombus terrestris',
      commonName: 'Buff-Tailed Bumblebee',
      habitat: 'Gardens, farmlands, and urban areas',
      role: 'Pollination of crops and wildflowers',
      fact: 'Introduced to New Zealand for pollination purposes, they are now widespread and effective pollinators.',
      pun: 'What do you call a bumblebee with a great sense of direction? A bee-line!',
      src: './images/beeArray/buff-tailed-bumblebee.jpg',
   },
   {
      scientificName: 'Colletes spp.',
      commonName: 'Plasterer Bee',
      habitat: 'Sandy soils, coastal dunes, and gardens',
      role: 'Pollination of flowering plants',
      fact: 'Plasterer bees line their nests with a waterproof secretion, giving them their name.',
      pun: 'Why did the plasterer bee get a promotion? Because it always stuck to the job!',
      src: './images/beeArray/plasterer-bee.jpg',
   },
   {
      scientificName: 'Euryglossina spp.',
      commonName: 'Dwarf Bee',
      habitat: 'Forests and shrublands',
      role: 'Pollination of small flowers',
      fact: 'These tiny bees are often overlooked but play a vital role in pollinating small native flowers.',
      pun: 'Why did the dwarf bee start a band? Because it had the perfect buzz for music!',
      src: './images/beeArray/dwarf-bee.jpg',
   },
   {
      scientificName: 'Nomia spp.',
      commonName: 'Metallic Sweat Bee',
      habitat: 'Grasslands and open fields',
      role: 'Pollination of wildflowers',
      fact: 'Known for their iridescent colors, these bees are attracted to human sweat for its salt content.',
      pun: 'Why did the metallic sweat bee win an award? Because it was outstanding in its field!',
      src: './images/beeArray/metallic-sweat-bee.jpg',
   },
   {
      scientificName: 'Megachile spp.',
      commonName: 'Leafcutter Bee',
      habitat: 'Gardens, forests, and urban areas',
      role: 'Pollination of crops and wildflowers',
      fact: 'Leafcutter bees cut neat circles from leaves to build their nests.',
      pun: 'Why did the leafcutter bee become a tailor? Because it was great at cutting patterns!',
      src: './images/beeArray/leafcutter.webp',
   },
   {
      scientificName: 'Xylocopa spp.',
      commonName: 'Carpenter Bee',
      habitat: 'Forests, gardens, and wooden structures',
      role: 'Pollination of large flowers',
      fact: 'Carpenter bees bore into wood to create nests, but they are important pollinators for many plants.',
      pun: 'Why did the carpenter bee get kicked out of the bar? It kept drilling into the furniture!',
      src: './images/beeArray/carpenter.webp',
   },
];

// beeSpeciesNZ.forEach((bee) => {
//    const beeInfo = document.createElement('div');
//    beeInfo.innerHTML = `
//       <h3>${bee.commonName}</h3>
//       <p>${bee.fact}</p>
//       <p>${bee.pun}</p>
//    `;
//    document.body.appendChild(beeInfo);
// });

/*  Assign DOM Elements to variables*/
const getHeight = document.querySelector("input[name='height']");
const getWeight = document.querySelector("input[name='weight']");
const getAge = document.querySelector("input[name='age']");
const getMale = document.querySelector("input[value='male']");
const getFemale = document.querySelector("input[value='female']");
const calc = document.querySelector("input[value='calculate']");
const reset = document.querySelector("input[value='reset']");
const result = document.querySelector('#result');

/* Based on Harris-Benedict Equation http://www-users.med.cornell.edu/~spon/picu/calc/beecalc.htm */
function calcBee() {
   /* Values required for calculation */
   const age = parseInt(getAge.value);
   const height = parseFloat(getHeight.value);
   const weight = parseFloat(getWeight.value);
   const gender = getMale.checked ? 'male' : 'female';

   /* Validate inputs */
   if (isNaN(age) || isNaN(height) || isNaN(weight)) {
      alert('Please enter valid numbers');
   }

   /* Calculate BEE based on gender */
   let BEE = 0;
   if (gender === 'male') {
      const WEIGHT_CONST_KG = 13.75;
      const HEIGHT_CONST_CM = 5.003;
      const AGE_CONST = 6.775;
      BEE =
         66.5 +
         WEIGHT_CONST_KG * weight +
         HEIGHT_CONST_CM * height -
         AGE_CONST * age;
   } else {
      const WEIGHT_CONST_KG = 9.563;
      const HEIGHT_CONST_CM = 1.85;
      const AGE_CONST = 4.676;
      BEE =
         655.1 +
         WEIGHT_CONST_KG * weight +
         HEIGHT_CONST_CM * height -
         AGE_CONST * age;
   }
   return BEE;
}

const displayResult = () => {
   const kCalToKjoule = 4.184;
   const beeResult = calcBee() * kCalToKjoule;
   result.textContent = beeResult.toFixed(2);
};

/* function to clear values */
const resetForm = () => {
   result.textContent = '';
   getAge.value = '';
   getHeight.value = '';
   getWeight.value = '';
};

/* Event listener for clicking calculate */
calc.addEventListener('click', displayResult);
getMale.addEventListener('click', displayResult);
getFemale.addEventListener('click', displayResult);
reset.addEventListener('click', resetForm);

/* Potential to refactor code using an object
const BeeCalc = {
   elements:{},
   constants: {},
   calcBee(){},
   displayResult(){},
   resetForm(){}
} */

/* Incase of real-time calculation
getHeight.addEventListener('input', displayResult);
getWeight.addEventListener('input', displayResult);
getAge.addEventListener('input', displayResult);
*/

/* ----------  Buzz off mouse ---------------------*/
