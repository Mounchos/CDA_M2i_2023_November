// function sayHello() { // définition de la fonction
//     alert("Hello everyone!");
// }

// sayHello(); // appel de la fonction

//console.log(sayHello); // affichage du contenu de sayHello => la fonction : ƒ sayHello() { ......}
//console.log(sayHello()); // appel de la fonction puis affichage de son retour => ici undifined

// Paramêtres et Arguments
// function sayHelloToSomeone(name) { // name est un paramêtre => comme une variable
//     alert(`Hello ${name}!`);
// }

// sayHelloToSomeone("Guillaume"); // la valeur "Guillaume" est passée en argument lors de l'appel
// let rox = "Roxane";
// sayHelloToSomeone(rox); // la valeur "Roxane" est passée en argument lors de l'appel


// Paramêtre "par défaut" (ou "avec valeur par défaut")

// function sayMessage(from, message = "Aucun texte") { // message devient facultatif
//     alert(`${from}: ${message}`);
// }

// sayMessage("Guillaume", "hey !")
// sayMessage("Guillaume")

//Retourner un résultat

// function premiereLettre(word){
//     return word.charAt(0);
// }

// console.log(premiereLettre("Bonjour"));
// console.log(premiereLettre("test"));
// console.log(premiereLettre("123"));



// /!\ Attention, JavaScript étant faiblement typée, on peut avoir ce genre de choses

// function addition(a, b){
//     return a+b;
// }

// console.log(addition(1,2)); // addition
// console.log(addition("un","plus deux")); // concaténation


// fonction annonyme, fléchées, (lambda, delegates)

// // avec la syntaxe function
// const sayHi = function () {
//     alert("Hello");
// };

// // fonction "classique"
// function sayHi2() {
//     alert("Hello");
// };

// // fonction "fléchée"
// const sayHi3 = () => alert("Hello"); // return alert("Hello")
// const sayHi4 = () => {
//     alert("Hello");
//     // return;
// };



// CallBack

// function salutation(name) {
//     alert("Bonjour " + name);
// }

// function processUserInput(callback) {
//     var name = prompt("Entrez votre nom.");
//     callback(name);
// }

// processUserInput(salutation);
// processUserInput(alert);
// processUserInput(console.log);


// function addition(x, y) {
//     return x + y;
// }

// let soustraction = function (a, b) {
//     return a - b;
// }

// let multiplication = (x, y) => x * y;

// function calculateur(a, b, operation) {
//     return operation(a, b);
// }

// console.log(calculateur(2, 3, addition))
// console.log(calculateur(2, 3, soustraction))
// console.log(calculateur(2, 3, multiplication))
// console.log(calculateur(2, 3, (a, b) => a / b))
// console.log(calculateur(
//     2, 
//     3, 
//     (a, b) => {
//         return a % b;
//     }
// ))

// console.log(calculateur(2, 3, function (a, b) { return a % b; }))


// console.log(addition)
// console.log(soustraction)
// console.log(multiplication)
// console.log((a, b) => a / b)
// console.log((a, b) => {
//         return a % b;
//     })
// console.log(function (a, b) { return a % b; })



// récursivité (une fonction qui s'appelle elle-même)

// function fonc(){
//     console.log("test")
//     fonc()
// }

// fonc()