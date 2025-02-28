/*
const countObject = {
   currentCount: 0,
   countElement: document.querySelector('.counter'),
   init() {
      this.countElement.textContent = this.currentCount;
   },

   addCount() {
      this.currentCount++;
      this.countElement.textContent = this.currentCount;
   },
   reset() {
      this.currentCount = 0;
      this.countElement.textContent = this.currentCount;
   },
};
countObject.init();
*/

/*  Assign DOM Elements to variables*/
const getHeight = document.querySelector("input[name='height']");
const getWeight = document.querySelector("input[name='weight']");
const getAge = document.querySelector("input[name='age']");
const getMale = document.querySelector("input[value='male']");
const getFemale = document.querySelector("input[value='female']");
const calc = document.querySelector('input[value="calculate"]');
const result = document.querySelector('#result');

/* Based on Harris-Benedict Equation http://www-users.med.cornell.edu/~spon/picu/calc/beecalc.htm */
function calcBee() {
   /* Values required for calculation */
   const age = parseInt(getAge.value);
   const height = parseFloat(getHeight.value);
   const weight = parseFloat(getWeight.value);
   const gender = getMale.value ? 'male' : 'female';

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
   const beeResult = calcBee().toFixed(2);
   result.textContent = beeResult;
   console.log(getMale.checked);
};

calc.addEventListener('click', displayResult);
getHeight.addEventListener('input', displayResult);
getWeight.addEventListener('input', displayResult);
getMale.addEventListener('input', displayResult);
getFemale.addEventListener('input', displayResult);
getAge.addEventListener('input', displayResult);

/* -------- Bee species array --------- */
const beeSpeciesNZ = [
   {
      scientificName: 'Apis mellifera',
      commonName: 'European Honey Bee',
      habitat: 'Urban areas, farmlands, and forests',
      role: 'Pollination and honey production',
      fact: 'Introduced to New Zealand in the 19th century, they are crucial for pollinating many crops.',
      pun: 'Why did the honey bee go to school? To get a little buzz-ter education!',
   },
   {
      scientificName: 'Leioproctus fulvescens',
      commonName: 'Native Yellow-Faced Bee',
      habitat: 'Coastal areas, forests, and grasslands',
      role: 'Pollination of native plants',
      fact: 'One of the few native bee species in New Zealand, they are solitary bees.',
      pun: 'What do you call a bee that can’t make up its mind? A maybe!',
   },
   {
      scientificName: 'Lasioglossum sordidum',
      commonName: 'Native Sweat Bee',
      habitat: 'Gardens, grasslands, and forests',
      role: 'Pollination of various flowering plants',
      fact: 'These bees are known for their metallic sheen and are important pollinators in native ecosystems.',
      pun: 'Why do sweat bees make great comedians? They always work the crowd!',
   },
   {
      scientificName: 'Hylaeus spp.',
      commonName: 'Native Masked Bee',
      habitat: 'Forests, coastal areas, and urban gardens',
      role: 'Pollination of native flora',
      fact: 'Masked bees are small and often nest in hollow stems or wood cavities.',
      pun: 'Why did the masked bee get invited to all the parties? Because it always brought the buzz!',
   },
   {
      scientificName: 'Bombus terrestris',
      commonName: 'Buff-Tailed Bumblebee',
      habitat: 'Gardens, farmlands, and urban areas',
      role: 'Pollination of crops and wildflowers',
      fact: 'Introduced to New Zealand for pollination purposes, they are now widespread and effective pollinators.',
      pun: 'What do you call a bumblebee with a great sense of direction? A bee-line!',
   },
   {
      scientificName: 'Colletes spp.',
      commonName: 'Plasterer Bee',
      habitat: 'Sandy soils, coastal dunes, and gardens',
      role: 'Pollination of flowering plants',
      fact: 'Plasterer bees line their nests with a waterproof secretion, giving them their name.',
      pun: 'Why did the plasterer bee get a promotion? Because it always stuck to the job!',
   },
   {
      scientificName: 'Euryglossina spp.',
      commonName: 'Dwarf Bee',
      habitat: 'Forests and shrublands',
      role: 'Pollination of small flowers',
      fact: 'These tiny bees are often overlooked but play a vital role in pollinating small native flowers.',
      pun: 'Why did the dwarf bee start a band? Because it had the perfect buzz for music!',
   },
   {
      scientificName: 'Nomia spp.',
      commonName: 'Metallic Sweat Bee',
      habitat: 'Grasslands and open fields',
      role: 'Pollination of wildflowers',
      fact: 'Known for their iridescent colors, these bees are attracted to human sweat for its salt content.',
      pun: 'Why did the metallic sweat bee win an award? Because it was outstanding in its field!',
   },
   {
      scientificName: 'Megachile spp.',
      commonName: 'Leafcutter Bee',
      habitat: 'Gardens, forests, and urban areas',
      role: 'Pollination of crops and wildflowers',
      fact: 'Leafcutter bees cut neat circles from leaves to build their nests.',
      pun: 'Why did the leafcutter bee become a tailor? Because it was great at cutting patterns!',
   },
   {
      scientificName: 'Xylocopa spp.',
      commonName: 'Carpenter Bee',
      habitat: 'Forests, gardens, and wooden structures',
      role: 'Pollination of large flowers',
      fact: 'Carpenter bees bore into wood to create nests, but they are important pollinators for many plants.',
      pun: 'Why did the carpenter bee get kicked out of the bar? It kept drilling into the furniture!',
   },
];
