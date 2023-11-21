
// Exercice 03

let rayon = parseFloat(prompt("Veuillez saisir la rayon"));
let hauteur = parseFloat(prompt("Veuillez saisir la hauteur"));

var volume =  (1/3) * Math.PI * rayon**2 * hauteur;

console.log("Le volume de la cone est : " + volume);
alert("Le volume de la cone est : " + volume);


// // Exercice 03 sur une ligne
// alert("Le volume de la cone est : " + ((1/3) * Math.PI * parseFloat(prompt("Veuillez saisir la rayon"))**2 * parseFloat(prompt("Veuillez saisir la hauteur"))));
