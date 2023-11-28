function ajouterPrenom() {

    var prenom = document.getElementById("prenomInput").value;

    if (prenom === "") {
            alert("Veuillez saisir un prénom.");
                return;
            }
        else if (!/^[a-zA-Z]+$/.test(prenom)) {
            alert("Le prénom ne doit contenir que des lettres alphabétiques (pas de symbole, chiffre ou accent).");
            return;
        }

        
    var nouveauPrenom = document.createElement("li"); // créer un li avec le prénom dans la liste 
            nouveauPrenom.textContent = prenom; // ajoute le prénom

    var liste = document.getElementById("listePrenoms"); // il me récupére la liste de prénoms que j'ai ajouté
            liste.appendChild(nouveauPrenom); // et là j'ajoute le prénom dans la liste

            document.getElementById("prenomInput").value = "";  // dernière étape on reset la valeur du champ de saisie
    }