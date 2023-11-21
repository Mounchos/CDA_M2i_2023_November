let age;
let majeur;
let mineur;

parseInt(prompt("Entrez votre age : "));

age >= 18? (majeur = true, mineur = false): (majeur = false, mineur = true);
alert("Vous êtes " + (majeur? "majeur" : "mineur"))