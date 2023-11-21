let tempCelcius = Number(prompt("Saisir la température (°C) :"))

if(tempCelcius < 0){
    alert("SOLIDE")
} else if(tempCelcius <= 100){
    alert("LIQUIDE")
} else {
    alert("GAZEUX")
}

let etat = (tempCelcius < 0) ? "SOLIDE" : ((tempCelcius <= 100) ? "LIQUIDE" : "GAZEUX");
alert("ternaire : " + etat)



// vérifier un type 
// let verif = typeof val === "number";