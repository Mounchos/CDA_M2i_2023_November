// Expression régulière pour valider une adresse e-mail
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Demander à l'utilisateur de saisir une liste d'adresses e-mail séparées par des virgules
const userInput = prompt("Veuillez entrer une liste d'adresses e-mail séparées par des virgules :");

// Séparer les adresses e-mail en un tableau en utilisant la virgule comme séparateur
const emailArray = userInput.split(',');

// Utiliser la méthode .map() pour vérifier la validité de chaque adresse e-mail et stocker les résultats dans un tableau de booléens
const validityArray = emailArray.map(email => emailRegex.test(email.trim()));

// Afficher le tableau des résultats de validité
console.log(validityArray);
