let taille = parseInt(prompt("Saisir la taille du tableau : "))
// possible contrôle de saisie ici

let tableau = Array(taille)

for(let i = 0; i < tableau.length; i++){
    tableau[i] = (Math.random() * 51).toFixed(0);
}

for(let item of tableau){
    // console.log(`Le nombre ${String(item).padStart(2)} est ${item % 2 === 0 ? "  " : "im"}pair.`);
    console.log(`Le nombre ${item.toString().padStart(2)} est ${item % 2 === 0 ? "  " : "im"}pair.`);
}