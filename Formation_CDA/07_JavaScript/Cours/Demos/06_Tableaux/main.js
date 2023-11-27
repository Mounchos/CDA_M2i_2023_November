// let tab = [];
// let tab = Array();

let tab = ["Pomme", "orange", true, 0.5, 6];

console.table(tab);

tab.push("Annanas"); // Ajout à la fin
tab.unshift("Annanas"); // Ajout au début

console.table(tab);

let ananas1 = tab.pop(); // Retirer à la fin
let ananas2 = tab.shift(); // Retirer au début

console.table(tab);

tab[1] = "ORANGE"; // remplacer à l'indice 1

console.table(tab);

tab[100] = "ORANGE SANGUINE"; // ajouter à un indice non existant

console.table(tab);

console.log("tab[1] : " + tab[1]);
console.log("tab[10] : " + tab[10]);
console.log("tab[100] : " + tab[100]);

console.log(tab.indexOf("ORANGE")); // premier trouvé qui correspond (===)
console.log(tab.lastIndexOf("ORANGE")); // dernier trouvé qui correspond (===)

// découper un tableau
console.table(tab.splice(2,5)); // nouveau tableau (5 éléments consévcutif à partir de l'index 2)
console.table(tab); // l'ancien tableau n'a plus les valeurs

// supprimer une valeur directement
delete tab[1]

console.table(tab);

//ré-indexer le tableau
console.table(tab.filter(val => val))



let tab1 = ["Pomme", "orange", true, 0.5, 6];

// copier un tableau
let tab2 = [...tab1]; // on aura 2 tableau différents

let tab3 = tab1; // /!\ ici nous avont le MEME tableau dans 2 variables (le même dans la mémoire)

tab1.push("test");

console.table(tab1);
console.table(tab2);
console.table(tab3);


// tab1 = ["Pomme", "orange", true, 0.5, 6];
tab1 = ["Pomme", "Orange", "Annanas", "fleur", "pierre"];

// foreach
tab1.forEach((item, index) => console.log(`tab1[${index}] = ${item}`));


// map
let newTab = tab1.map(value => value.toUpperCase());
console.table(newTab);

// reduce
tab1 = [1,5,1,4,2,8,1,3,78,3];

// let add = (x,y) => x*y;
let add = (accum,next) => accum*next;

// resultat = tab1.reduce(<fonction d'accumulation>, <premiere valeur>);
let val = tab1.reduce(add, 1000);

console.log(val);


tab1 = ["Pomme", "Orange", "Annanas", "fleur", "pierre"];

let concat = (str, strNext) => str + " + " + strNext;

val = tab1.reduce(concat, "test");

console.log(val);

val = tab1.join(" + ");

console.log(val);