// console.log("Coucou :D !");
// console.error("Erreur !");
// console.warn("Attention !")
// console.info("Une information")



var maVariable = 10;
console.log(maVariable);

// const

const PI = 3.141592653589793

console.log(PI);

// let

let maVariableLet;

console.log(maVariableLet); // Non défini donc undefined

console.log("Type de ma variable maVariableLet :" + typeof maVariableLet + " .");

maVariableLet = "Salut"; // Assignation

console.log(maVariableLet); // Salut

console.log("Type de ma variable maVariableLet :" + typeof maVariableLet) + " .";

maVariableLet = 33;

let str = "Ma chaine de caractères" // String
console.log("Type de ma variable maVariableLet :" + typeof str) + " .";

let nbr = 15; // Number
console.log("Type de ma variable maVariableLet :" + typeof nbr) + ".";

let boolean = true; // Boolean
boolean = false; // Boolean
console.log("Type de ma variable maVariableLet :" + typeof boolean) + ".";

let maVariableNull = null; // Null
console.log("Type de ma variable maVariableNull :" + typeof maVariableNull) + ".";

// Interaction
// prompt

let maValeur;
maValeur = prompt("Taper une valeur");
console.clear(); // nettoyage de la console
console.log(maValeur);
console.log("Type de ma variable maValeur :" + typeof maValeur) + ".";

console.log(`de ma variable maValeur : ${typeof maValeur}) . `);