// // Solution attendue par l'exercice

// let age = Number(prompt("Entrez votre age"));
// let salaire = Number(prompt("Entrez le salaire attendu"));
// let experience = Number(prompt("Entrez votre nombre d'années d'expérience"));

// if (age < 30) {
//     console.log("Refus ! L'âge minimum pour le poste est 30 ans");
// }
// else if (experience < 5) {
//     console.log("Refus ! Nous recherchons une personne ayant minimum 5 ans d'expérience");
// }
// else if (salaire > 40000) {
//     console.log("Refus ! Nous pouvons offrir un salaire maximum de 40 000 euros");
// }
// else {
//     console.log("Bienvenue dans l'entreprise");
// }



// // Solutions à plusieurs messages

// // solution de Florian

// let age = Number(prompt("Entrez votre age"));
// let salaire = Number(prompt("Entrez le salaire attendu"));
// let xp = Number(prompt("Entrez votre nombre d'années d'expérience"));

// let isAccepted = true; 
// // cette variable sert de "flag", elle contient un état que l'on souhaite garder pour la suite

// if (age < 30) {
//     console.log("Vous n'avez pas l'âge requis");
//     isAccepted = false;
// }
// if (salaire > 40000) {
//     console.log("Le salaire demandé est trop élevé");
//     isAccepted = false;
// }
// if (xp < 5) {
//     console.log("Vous n'avez pas assez d'expériences");
//     isAccepted = false;
// }
// if (isAccepted === true) {
//     console.log("Vous êtes acceptés");
// }


// solution de François

let age = Number(prompt("Quel est votre âge"));
let salary = Number(prompt("Quelle sont vos prétentions salariales"));
let exp = Number(prompt("Combien d'année d'expérience avez vous sur ce poste"));
let message = "";

if (age < 30) // si un if ne contient qu'1 SEULE instruction, les {} deviennent facultatives
    message += "Vous n'avez pas l'âge requis pour le poste. \n"; 
    // ici "+=" permet de faire une concaténation : message = message + "chaine" 
if (salary > 40000) 
    message += "Vos prétentions salariales sont trop élevées\n";
if (exp < 5) 
    message += "Vous n'avez pas l'expérience requise pour ce poste";

alert(message === "" ? "Félicitation, vous êtes engagé" : message);
// si le message contient quelque chose => on l'affiche car une condition n'est pas valide
// si il ne contient rien => les conditions sont valides donc on affiche "Félicitation, ..."