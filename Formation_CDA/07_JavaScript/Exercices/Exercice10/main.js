

// Exercice 10

const hauteur = parseInt(prompt("Entrez la hauteur du triangle :"));

if (isNaN(hauteur) || hauteur <= 0) {
  console.log("Veuillez entrer une hauteur valide supérieure à 0.");
} else {
  for (let i = 1; i <= hauteur; i++) {
    
    let espaces = " ".repeat(hauteur - i);
    
    let etoiles = "*".repeat(2 * i + 1);
   
    console.log(espaces + etoiles);
  }
}



// // Alternative de l'exercice 10

// const hauteur = parseInt(prompt("Entrez la hauteur du triangle :"));

// if (isNaN(hauteur) || hauteur <= 0) {
//   console.log("Veuillez entrer une hauteur valide supérieure à 0.");
// } else {
//   for (let i = 1; i <= hauteur; i++) {
//     let ligne = "";
//     for (let j = 1; j <= hauteur - i; j++) {
//       ligne += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       ligne += "*";
//     }
//     console.log(ligne);
//   }
// }