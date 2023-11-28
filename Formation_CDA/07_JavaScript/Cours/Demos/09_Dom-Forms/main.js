document.addEventListener("DOMContentLoaded", () => {
  // On récupère nos éléments dans le DOM
  const monForm = document.getElementById("mon-form");
  const emailValidElement = document.getElementById('email-validation')
  const submitBtnElement = document.getElementById('submit-btn')
  const monEmailElement = document.getElementById("email");

  // On se branche sur l'envoi du formulaire de sorte à intercepter l'envoi d'une requête (celle-ci aurait causé le rechargement de la page)
  monForm.addEventListener("submit", (blabla) => {
    blabla.preventDefault(); // On empêche le fonctionnement par défaut ici (envoi de la requête + rechargement de la page)
    console.log("J'envoie le formulaire...");
  });


  // Pour faire de la validation d'un champ, en temps réel, on se branche sur l'évènement 'input' déclenché lors de la saisie de texte
  monEmailElement.addEventListener("input", (event) => {
    const inputElement = event.target;

    if (!inputElement.value) {
      // Via le JS, on peut modifier le style des éléments
      inputElement.style.backgroundColor = "red";
      emailValidElement.style.display = 'block'

      // On peut également modifier les attributs des balises HTML
      submitBtnElement.setAttribute('disabled', '');
    } else {
      inputElement.style.backgroundColor = "white";
      emailValidElement.style.display = 'none'
      submitBtnElement.removeAttribute('disabled');
    }
  });
});
