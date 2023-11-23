let populationInitiale, tauxAccroissement, populationVisee;

do {
    populationInitiale = parseFloat(prompt("Entrez la population initiale : "));
} while (isNaN(populationInitiale));

do {
    tauxAccroissement = parseFloat(prompt("Entrez le taux d'accroissement en pourcentage : "));
    tauxAccroissement = tauxAccroissement / 100;
} while (isNaN(tauxAccroissement));

do {
    populationVisee = parseFloat(prompt("Entrez la population visée : "));
} while (isNaN(populationVisee));

let annee = 0;
let populationActuelle = populationInitiale;

while (populationActuelle < populationVisee) {
    populationActuelle = populationActuelle * (1 + tauxAccroissement);
    annee++;
}

console.log("La population dépasse la population visée à l'année " + annee + " (" + Math.round(populationActuelle) + " habitants)");
