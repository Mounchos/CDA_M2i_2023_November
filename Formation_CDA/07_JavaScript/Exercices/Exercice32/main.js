document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('brandModal'); 
    const closeBtn = document.querySelector('.close');
    const brandForm = document.getElementById('brandForm'); 
    const brandInput = document.getElementById('brandInput'); // 
    const brandTable = document.getElementById('brandTable').getElementsByTagName('tbody')[0]; // Remplace "taskTable" par "brandTable"

    // cela permet d'ouvrir le modal
    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // fermer le modal
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // c'est la fonction pour ajouter une tâche dans le formulaire
    brandForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const brandText = brandInput.value.trim();

        if (brandText !== '') {

            const capitalizedBrandText = brandText.charAt(0).toUpperCase() + brandText.slice(1); // transforme automatiquement la première lettre en
            // cela va créer une nouvelle tâche dans le tableau de tâches
            const newRow = brandTable.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2); // ajout de la troisième colonne pour la modifier

            
            cell1.textContent = capitalizedBrandText;

            // ajouter un bouton de suppression
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Supprimer \uD83D\uDDD1\uFE0F';
            deleteButton.className = 'delete-button';
            cell2.appendChild(deleteButton);

            // ajouter un bouton pour modifier la tâche
            const editButton = document.createElement('button'); // Créez le bouton "Éditer"
            editButton.textContent = 'Éditer \uD83D\uDCDD';
            editButton.className = 'edit-button';
            cell3.appendChild(editButton);

            // c'est la fonction pour supprimer la tâche
            deleteButton.addEventListener('click', function () {
                brandTable.deleteRow(newRow.rowIndex - 1); // l'index commence à 1 donc pour pouvoir supprimer la première tache j'ai mis le - 1
            });

            // Fonction pour éditer la tâche lorsque le bouton "Éditer" est cliqué
            editButton.addEventListener('click', function () {
                const editedText = prompt('Éditer la marque de la voiture', brandText);
                if (editedText !== null && editedText.trim() !== '') {
                    const editedCapitalizedBrandText = editedText.charAt(0).toUpperCase() + editedText.slice(1);
                    cell1.textContent = editedCapitalizedBrandText;
                }
            });

            // cela va permettre de réinisialiser le formulaire
            brandInput.value = '';

            modal.style.display = 'none';
        }
    });
});
