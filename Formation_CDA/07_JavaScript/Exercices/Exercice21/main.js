let tableau = Array(10)

// for(let i = 0; i < tableau.length; i++){
//     tableau[i] = parseInt(prompt(`Saisir la valeur n° ${i+1}`));
// }
for(let i = 0; i < tableau.length; i++){
    tableau[i] = (Math.random() * 100).toFixed(0);
}

for(let i = 0; i < tableau.length; i++){
    console.log("\t".repeat(i) + tableau[i]);
}

console.log("-".repeat(40))

let tabs = ""
for(let item of tableau){
    console.log(tabs + item);
    tabs += "\t";
}

console.log("-".repeat(40))


tabs = ""
tableau.forEach((val, index) => {
    console.log(tabs + val);
    tabs += "\t";
});