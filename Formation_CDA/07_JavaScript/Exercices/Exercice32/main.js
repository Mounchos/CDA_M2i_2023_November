import { Vehicle, TableManager } from './voiture.js';


document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('brandModal');
    const closeBtn = document.querySelector('.close');
    const brandForm = document.getElementById('brandForm');
    const brandInput = document.getElementById('brandInput');
    const modelInput = document.getElementById('modelInput');
    const colorInput = document.getElementById('colorInput');
    const brandTable = document.getElementById('brandTable').getElementsByTagName('tbody')[0];
    
    const tableManager = new TableManager();

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    brandForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const brand = brandInput.value.trim();
        const model = modelInput.value.trim();
        const color = colorInput.value.trim();

        if (brand !== '' && model !== '' && color !== '') {
            const vehicle = tableManager.addVehicle(brand, model, color);

            const newRow = brandTable.insertRow();
            const cellBrand = newRow.insertCell(0);
            const cellModel = newRow.insertCell(1);
            const cellColor = newRow.insertCell(2);
            const cellFullName = newRow.insertCell(3);
            const cellDelete = newRow.insertCell(4);
            const cellEdit = newRow.insertCell(5);

            cellBrand.textContent = vehicle.capitalizeFirstLetter(vehicle.brand);
            cellModel.textContent = vehicle.capitalizeFirstLetter(vehicle.model);
            cellColor.textContent = vehicle.capitalizeFirstLetter(vehicle.color);
            cellFullName.textContent = vehicle.toString();

            // Bouton de suppression
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Supprimer \uD83D\uDDD1\uFE0F';
            deleteButton.className = 'delete-button';
            cellDelete.appendChild(deleteButton);

            deleteButton.addEventListener('click', function () {
                const rowIndex = newRow.rowIndex - 1;
                tableManager.deleteVehicle(rowIndex);
                brandTable.deleteRow(rowIndex);
            });

            // Bouton d'édition
            const editButton = document.createElement('button');
            editButton.textContent = 'Éditer \uD83D\uDCDD';
            editButton.className = 'edit-button';
            cellEdit.appendChild(editButton);

            editButton.addEventListener('click', function () {
                const rowIndex = newRow.rowIndex - 1;
                const editedBrand = prompt('Nouvelle marque du véhicule', brand);
                const editedModel = prompt('Nouveau modèle du véhicule', model);
                const editedColor = prompt('Nouvelle couleur du véhicule', color);

                if (editedBrand !== null && editedModel !== null && editedColor !== null) {
                    tableManager.editVehicle(rowIndex, editedBrand, editedModel, editedColor);
                    cellBrand.textContent = editedBrand;
                    cellModel.textContent = editedModel;
                    cellColor.textContent = editedColor;
                    cellFullName.textContent = `${editedColor} ${editedBrand} ${editedModel}`;
                }
            });

            brandInput.value = '';
            modelInput.value = '';
            colorInput.value = '';
            modal.style.display = 'none';
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    });
});
