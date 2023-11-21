
// // Première affichage de la table des 1 à 10 :

// const N = parseInt(prompt("Entrez un entier supérieur à 0 :"));

// if (isNaN(N) || N <= 0) {
//   console.log("Veuillez entrer un entier supérieur à 0.");
// } else {
//   for (let i = 1; i <= N; i++) {
//     console.log(`Table des ${i} :`);
    
//     for (let j = 1; j <= 10; j++) {
//       console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log(""); // Séparer les tables
//   }
// }


// Deuxième affichage de la table des 1 à 10 :

const N = parseInt(prompt("Entrez un entier supérieur à 0 :"));

if (isNaN(N) || N <= 0) {
  console.log("Veuillez entrer un entier supérieur à 0.");
} else {
  // Afficher l'en-tête de la table de multiplication
  let header = "";
  for (let i = 1; i <= 10; i++) {
    header += `${i}\t`;
  }
  console.log(header);
  
  console.log("-----------------------------------------");
  
  for (let i = 1; i <= N; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
      row += `${i * j}\t`;
    }
    console.log(row);
  }
}
