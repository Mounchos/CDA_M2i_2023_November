// Les Opérateurs Arithmétiques

// Déclaration variables à la volée

let nb1 = 10, nb2 = 20, resultat;

// L'addition

resultat = nb + nb2;
console.log(nb1 + " + " + nb2 + " = " + resultat)
console.log(`${nb1} + ${nb2} = ${resultat}`)


// La Soustraction

resultat = nb - nb2;
console.log(nb1 + " - " + nb2 + " = " + resultat)
console.log(`${nb1} + ${nb2} = ${resultat}`)

// La Multiplication

resultat = nb * nb2;
console.log(nb1 + " x " + nb2 + " = " + resultat)
console.log(`${nb1} + ${nb2} = ${resultat}`)

// La Division

resultat = nb / nb2;
console.log(nb1 + " / " + nb2 + " = " + resultat)
console.log(`${nb1} + ${nb2} = ${resultat}`)


// Modulo (reste de la division)

resultat = nb % nb2;
console.log(nb1 + " % " + nb2 + " = " + resultat)
console.log(`${nb1} + ${nb2} = ${resultat}`)


// Puissance

resultat = nb ** nb2;
console.log(nb1 + " ** " + nb2 + " = " + resultat)
console.log(`${nb1} puissance + ${nb2} = ${resultat}`)

console.log("Les opérateurs d'incrementation et combinés");

// Incrementation

nb1 = nb1 + 1; // Incrémentation classique
// opérateur d'incrementation
console.log(nb1++); // 12 
console.log("nb1 vaut " + nb1); // 13

// Decrementation

nb1 = nb1 - 1; // Decrementation classique
console.log("nb1 vaut :" + nb1); // 12

// opérateur combiné -=
nb1 -= 1;
console.log("nb1 vaut :" + nb1); // 11

// opérateur d'incrementation
console.log(nb1--); // 11
console.log("nb1 vaut :" + nb1); // 10

// Précision pour les opérateurs ++ et --
console.log(nb1); // 10
// Incrémentation puis lecture de la valeur (préincrementation)
console.log(++nb1); // 11
// Decrementation puis lecture de la valeur (prédecrementation)
console.log(--nb1); // 10
// Lecture de la valeur puis => et incrémentation (préincrementation)
console.log(nb1--); // 10
console.log(nb1); // 11
// Lecture de la valeur puis => et decrementation (prédecrementation)
console.log(nb1--); // 11
console.log(nb1); // 10