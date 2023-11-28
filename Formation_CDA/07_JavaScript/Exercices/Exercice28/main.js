const personnes = []; // Tableau pour stocker les personnes

const tableBody = document.getElementById('tableBody');
const form = document.getElementById('personForm');
const ajouterButton = document.getElementById('ajouter');

ajouterButton.addEventListener('click', () => {
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const dateNaissance = parseInt(document.getElementById('dateNaissance').value);

  if (nom && prenom && dateNaissance) {
    
    const regex = /^[A-Za-z]+$/;
    if (!regex.test(nom) || !regex.test(prenom)) {
      console.log('Le nom et le prénom doivent contenir uniquement des lettres.');
      alert('Le nom et le prénom doivent contenir uniquement des lettres.');
      return;
    }

    
    if (dateNaissance < 1900 || dateNaissance > 2024) {
      console.log('La date de naissance doit être comprise entre 1900 et 2024.');
      alert('La date de naissance doit être comprise entre 1900 et 2024.');
      return;
    }

    
    const personne = {
      nom: nom,
      prenom: prenom,
      dateNaissance: dateNaissance
    };

    
    personnes.push(personne);

    
    const index = personnes.length;
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
      <td>${index}</td>
      <td>${nom}</td>
      <td>${prenom}</td>
      <td>${dateNaissance}</td>
    `;

    form.reset();
  } else {
    alert('Veuillez remplir tous les champs.');
  }
});
