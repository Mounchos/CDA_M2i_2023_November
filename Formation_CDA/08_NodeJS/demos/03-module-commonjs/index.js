const Cercle = require('./classes/Cercle.js');
const utils = require('./classes/utils.js');

let myCercle = new Cercle.Cercle(3);

console.log(myCercle.aire());

console.log(myCercle.perimetre());

console.log(utils.pointiller("lorem ipsum beta alpha tango charlie ursule")); 

console.log(utils.reverse("Chanter"));

