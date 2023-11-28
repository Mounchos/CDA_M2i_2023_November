# Exercice 29

Réaliser un formulaire de login via un élément html de type `<form>` ainsi que du code Javascript. 

Il devra être possible de vérifier la saisie des champs requis (pseudonyme et mot de passe) de sorte à avoir un feedback (changement de la couleur de fond des inputs, ajout d'un span / paragraphe et / ou modification du bouton d'envoi) en temps réel, pour que l'expérience utilisateur soit meilleure.

Lors de l'envoi du formulaire, on devra avoir en console l'affichage d'un objet d'utilisateur dont la structure serait par exemple: 

```js
const userDetails = {
  username: "user",
  password: "123"
};
```