import { elements } from './elements.js';

/*=====  Name constants instead of magic numbers ==========*/
const KCAL_TO_KJOULES = 4.184;
const MAX_AGE = 120;
const MIN_AGE = 5;
const result = elements.result;
const getHeight = elements.height;
const getWeight = elements.weight;
const getAge = elements.age;
const getMale = elements.male;

function calcBee() {
   /* Values required for calculation */
   const age = parseInt(getAge.value);
   const height = parseFloat(getHeight.value);
   const weight = parseFloat(getWeight.value);

   /* Validate inputs */
   if (
      isNaN(age) ||
      isNaN(height) ||
      isNaN(weight) ||
      age < MIN_AGE ||
      age > MAX_AGE ||
      height < 0 ||
      weight < 0
   ) {
      alert('Please enter valid numbers');
      return null;
   }

   const gender = getMale.checked ? 'male' : 'female';

   /* Calculate BEE based on gender */
   /* Based on Harris-Benedict Equation http://www-users.med.cornell.edu/~spon/picu/calc/beecalc.htm */
   const CONSTANTS_GENDER = {
      male: { base: 66.5, weight: 13.75, height: 5.003, age: 6.775 },
      female: { base: 666.1, weight: 9.563, height: 1.85, age: 4.676 },
   };

   const constants = CONSTANTS_GENDER[gender];

   return (
      constants.base +
      constants.weight * weight +
      constants.height * height -
      constants.age * age
   );
}

const displayResult = () => {
   result.textContent = (calcBee() * KCAL_TO_KJOULES).toFixed(2);
};

/* function to clear values */
const resetForm = () => {
   result.textContent = '';
   getAge.value = '';
   getHeight.value = '';
   getWeight.value = '';
};

export { calcBee, displayResult, resetForm };
