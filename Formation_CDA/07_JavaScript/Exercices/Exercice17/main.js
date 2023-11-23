function ask(question, yes, no) {
    if (confirm(question)) // affiche une boite de dialogue avec la possibilité d'accepter ou refuser
        yes();
    else 
        no();
}

ask(
    "Do you agree?",
    () =>{
        alert("You agreed.");
    },
    () =>{
        alert("You canceled the execution.");
    }
);