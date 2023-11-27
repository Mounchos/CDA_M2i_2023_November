let listeContacts = [];

const nbContacts = +prompt("Combien de contacts voulez-vous entrer ?");

const getContacts = () => {
  listeContacts = [];

  for (let i = 0; i < nbContacts; i++) {
    const newContact = prompt(`Donnez le nom du contact n°${i + 1}:`);

    if (!listeContacts.includes(newContact)) listeContacts.push(newContact);
    else i--;
  }
};

const printContacts = () => {
  let message = "--- LISTE DES CONTACTS ---\n";
  listeContacts.forEach((contact, index) => {
    message += `${index}: ${contact}\n`;
  });

  alert(message);

  /*
    0: John
    1: Maria
    ...
  */
};

const sortContactsAlpha = () => {
  listeContacts.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
};

const shuffleContacts = () => {
  listeContacts.sort(() => 0.5 - Math.random());
};

const deleteContactByName = () => {
  const contactName = prompt("Donnez le nom complet du contact:");

  const contactFound = listeContacts.find((c) => c === contactName);

  if (contactFound) {
    listeContacts = listeContacts.filter((c) => c !== contactFound);
  }
};

const searchByNameIncludes = () => {
  const contactName = prompt("Donnez une partie de nom d'un contact:");

  const contactFound = listeContacts.find((c) => c.includes(contactName));

  if (contactFound) {
    alert("Contact trouvé: " + contactFound);
  }
};

/*
  TRUTHY / FALSY
  
  Si on fait un test logique d'une variable en JS:
  
  On obtient une valeur 'true' si : 
  * Un nombre différent de 0
  * Une chaine de caractère non vide
  * Un tableau / objet
  
  On obtient une valeur dite 'falsy' (false) pour le reste.
  
  */
const printMenu = () => {
  return +prompt(`
      --- MENU PRINCIPAL ---
      1. Saisir les contacts
      2. Afficher les contacts
      3. Trier par ordre alphabethique
      4. Mélanger les contacts
      5. Supprimer un contact
      6. Rechercher un contact
      0. Quitter le programme
    `);
};

let userChoice = 1;
while (userChoice) {
  userChoice = printMenu();

  switch (userChoice) {
    case 1:
      getContacts();
      break;

    case 2:
      printContacts();
      break;

    case 3:
      sortContactsAlpha();
      break;

    case 4:
      shuffleContacts();
      break;

    case 5:
      deleteContactByName();
      break;

    case 6:
      searchByNameIncludes();
      break;

    default:
      break;
  }

}
