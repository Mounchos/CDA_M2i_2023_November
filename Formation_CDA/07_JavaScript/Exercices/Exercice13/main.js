let nombre = parseInt(prompt("Saisir un nombre entier :"));
console.log(`Saisir un nombre entier : ${nombre}`);
console.log("Les sommes consécutives sont :");


for (let i = 1; i <= nombre; i++) {
    let somme = 0;
    let sequence = "";

    for (let j = i; somme < nombre; j++) {
        somme += j;
        sequence += (j === i) ? j : ` + ${j}`; // Cela permet d'ajouter le + entre chaque nombre

        // Si la somme est égale à nombre, cela permet d'afficher la séquence
        if (somme === nombre) {
            console.log(`${nombre} = ${sequence}`);
        }
    }
}
