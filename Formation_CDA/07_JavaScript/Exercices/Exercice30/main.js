import { Chien, Chat, Cheval } from './animal.js';

        const tableauAnimaux = [];
        const animalForm = document.getElementById('animalForm');
        const listeAnimaux = document.getElementById('listeAnimaux');

        animalForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const typeAnimal = document.getElementById('typeAnimal').value.toLowerCase();
            const nomAnimal = document.getElementById('nomAnimal').value;

            let nouvelAnimal;

            switch (typeAnimal) {
                case 'chien':
                    nouvelAnimal = new Chien(nomAnimal);
                    break;
                case 'chat':
                    nouvelAnimal = new Chat(nomAnimal);
                    break;
                case 'cheval':
                    nouvelAnimal = new Cheval(nomAnimal);
                    break;
                default:
                    alert("Type d'animal invalide.");
                    return;
            }

            tableauAnimaux.push(nouvelAnimal);
            document.getElementById('typeAnimal').value = '';
            document.getElementById('nomAnimal').value = '';

            afficherAnimaux();
        
        });

        function afficherAnimaux() {
            const tbody = document.getElementById('listeAnimaux');
            
            while (tbody.firstChild) {
                tbody.removeChild(tbody.firstChild);
            }
        
            tableauAnimaux.forEach((animal) => {
                const tr = document.createElement('tr');
                const tdNom = document.createElement('td');
                const tdType = document.createElement('td');
        
                tdNom.textContent = animal.nom;
                tdType.textContent = animal.espece;
        
                tr.appendChild(tdNom);
                tr.appendChild(tdType);
        
                tbody.appendChild(tr);
            });
        }
        