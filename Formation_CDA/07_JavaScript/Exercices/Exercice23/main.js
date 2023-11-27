function askForNumberInput(promptMessage, minValue, maxValue = Infinity, promptMessageOnError = "Erreur de saisie, réessayez: \n" + promptMessage){
    let input;

    input = Number(prompt(promptMessage));
    
    while (!validateNumberInput(input, minValue,maxValue)){
        input = Number(prompt(promptMessageOnError));
    }
    
    return input;
}

//The input have to be within min and max, be a number and can't be undefined
function validateNumberInput(input, min , max) {
    if (input < min || input > max || input === undefined || isNaN(input)) return false;
    else return true;
}

//If no argument have been passed the function will prompt for one
function addNote(note, noteArray){
    if (note === undefined){
        note = askForNumberInput("Veillez entrez une note entre 0 et 20 compris:",0,20);
    }

    noteArray.push(note);
}

//Returns the average value of an array
function getAverage(array) {
    let total = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );
    return total / array.length;
}

function displayMenu(noteArray) {
    let inputMode = askForNumberInput(`Choisir mode de saisie:
1 : Saisie fixe:
2 : Saisie jusqu'a note négative`
        ,1,2);

    console.log(`Votre choix : ${inputMode}`);
    
    switch (inputMode) {
        case 1:
            let noteCount = askForNumberInput("Combien de notes", 1);
            for (let i = 0; i < noteCount; i++) {
                addNote(undefined, noteArray);
            }
            break;
        case 2:
            let note;
            while (note !== -1) {
                note = askForNumberInput("Note", -1, 20);
                if (note !== -1) 
                    addNote(note, noteArray);
            }
            break;
    }
}

let noteArray = [];

displayMenu(noteArray);

console.log("Fin de saisie");

//Two ways of getting max/min value of an array
console.log(`Note max ${Math.max.apply(null, noteArray)}`);
// console.log(`Note max ${Math.max(...noteArray)}`);
console.log(`Note min ${Math.min(...noteArray)}`);

console.log(`Moyenne ${getAverage(noteArray)}`);