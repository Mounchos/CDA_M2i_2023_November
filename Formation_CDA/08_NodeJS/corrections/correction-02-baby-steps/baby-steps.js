// 1. copie du tableau
// 2. on découpe à partir du 3ème élément
// 3. on créé un nouveau tableau en les convertissant les éléments en entier
// 4. on fait la somme des éléments du tableau
let sum = [...process.argv].slice(2).map(arg => +arg).reduce((sum, value) => sum + value);
console.log(sum);