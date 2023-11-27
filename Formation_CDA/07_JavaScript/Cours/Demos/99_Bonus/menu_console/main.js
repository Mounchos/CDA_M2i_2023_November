function menu(){
    while (true){
        // choix = prompt("Faites votre choix :\n  1 - Choix 1\n  2 - Choix 2\n  3 - Choix 3\n  0 - Quitter\nVotre choix : ");
        // choix = prompt("Faites votre choix :\n"
        //                + "  1 - Choix 1\n"
        //                + "  2 - Choix 2\n  3 - Choix 3\n  0 - Quitter\nVotre choix : ");
        choix = prompt(`Faites votre choix :
            1 - Choix 1
            2 - Choix 2
            3 - Choix 3
            0 - Quitter
        Votre choix : `);
        switch (choix){
            case "1":
                // comportement si choix 1
                alert("Vous avez choisi 1")
                break;
            case "2":
                // comportement si choix 2
                alert("Vous avez choisi 2")
                break;
            case "3":
                // comportement si choix 3
                alert("Vous avez choisi 3")
                break;
            case "0":
                alert("À bientôt !")
                return; //on sort de la fonction
            default:
                alert("Erreur de saisie ! Réessayez.")
                break;        
        }    
    }
} 
    
alert("Avant le menu.")
menu()
alert("Après le menu.")