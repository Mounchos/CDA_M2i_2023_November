// let nombre = 0;

// while(nombre < 3){
//     console.log(nombre);
//     nombre++;
// }


// nombre = 0;

// do {
//     console.log(nombre);
//     nombre++;
// } while(nombre < 3);


// for(let cpt = 0; cpt < 3 ; cpt++){
//     console.log(cpt);
// }


// let random = Math.floor(Math.random() *10);

// console.log(random);

// let reponse;

// do {
//  reponse = Number(prompt("Saisir un nombre entre 1 et 10:"))
// } while (reponse !== random);



let nombre = 0;

while(nombre < 10){
    nombre++;

    if(nombre === 4){
        console.log("QUATRE => boucle suivante")
        continue;
    }

    if(nombre === 7) {
        console.log("Sept => je 'casse' la boucle")
        break;
    }

    console.log(nombre);
}


console.log("Après la boucle");