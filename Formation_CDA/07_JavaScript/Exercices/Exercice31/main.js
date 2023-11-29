import { Personne } from './personne.js';

const tableauPersonnes = [];
const personForm = document.getElementById('personForm');
const listePersonnes = document.getElementById('listePersonnes');

personForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;

    const nouvellePersonne = new Personne(nom, prenom);

    tableauPersonnes.push(nouvellePersonne);
    document.getElementById('nom').value = '';
    document.getElementById('prenom').value = '';
    
    console.log(`Nom : ${nom}, Prénom : ${prenom}`);
    
    afficherPersonnes();
});

function afficherPersonnes() {
    const tbody = document.getElementById('listePersonnes');
    
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    tableauPersonnes.forEach((personne) => {
        const tr = document.createElement('tr');
        const tdPrenom = document.createElement('td');
        const tdNom = document.createElement('td');
        const tdNomComplet = document.createElement('td');

        tdPrenom.textContent = personne.prenom;
        tdNom.textContent = personne.nom;
        tdNomComplet.textContent = personne.nomComplet;

        tr.appendChild(tdPrenom);
        tr.appendChild(tdNom);
        tr.appendChild(tdNomComplet);

        tbody.appendChild(tr);
    });
}
