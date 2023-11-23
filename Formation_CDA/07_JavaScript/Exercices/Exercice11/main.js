const epaisseurInitiale = 0.0001; // 0.1 milimètres en mètres
const epaisseurCible = 0.0001; // Part 2
let epaisseurActuelle = epaisseurInitiale;
let nombreDePlis = 0;
// Part 2
let nombreDeDepliages = 0;

while (epaisseurActuelle < 400) {
  nombreDePlis++;
  epaisseurActuelle *= 2;
}

console.log("Nombre de plis nécessaires pour dépasser 400 mètres : " + nombreDePlis);

while (epaisseurActuelle > epaisseurCible) {
  nombreDeDepliages++;
  epaisseurActuelle /= 2;
}

console.log("Nombre de depliages nécessaires pour atteindre l'epaisseur cible : " + nombreDeDepliages);