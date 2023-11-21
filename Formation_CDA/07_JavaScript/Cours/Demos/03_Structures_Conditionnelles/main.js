// Structures Conditionnelle


// if ... else if ... else

// let age = Number(prompt("Saisir Age :"));

// console.log("avant");

// if (age < 0 || age === NaN) {
//     console.log("Age invalide !!!");
// } else if (age < 18) {
//     console.log("Vous êtes mineur");
// } else if (age < 225){
//     console.log("Vous êtes majeur");
// } else {
//     console.log("Vous êtes beaucoup trop vieux pour être encore là !");
// }

// console.log("après");


// switch ... case

// let choix = Number(prompt("Choisir un chiffre entre 1 et 3:"));

// console.log("avant");
// switch (choix) {
//     case 1:
//         console.log("choix 1");
//         break;
//     case 2:
//         console.log("choix 2");
//         break;
//     case 3:
//         console.log("choix 3");
//         break;
//     default:
//         console.log("choix invalide !");
//         break;
// }
// console.log("après");


// Opérateur ternaire
// <condition> ? <vauleur si vrai> : <valeur si faux>

let isPIGreaterThan4 = Math.PI > 3 ? "Yep" : "Nope";

console.log(isPIGreaterThan4);


// Opérateur de coalescence nulle
// <valeur1> ?? <valeur défaut  si valeur1 == null ou undifined)

let valNull = null;
// let valNull = undefined;
// let valNull = 3;
// let valNull = "chaine";
console.log(valNull ?? "valeur par défaut");
