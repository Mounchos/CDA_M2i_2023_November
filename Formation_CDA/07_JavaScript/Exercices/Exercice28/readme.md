# Exercice 28

Réaliser un programme Javascript permettant, au sein d'une page HTML:

* La saisie des informations d'une personne (nom, prénom et date de naissance)
* L'ajout de cette personne à un tableau stocké en mémoire au moment de l'appui sur un bouton dans l'HTML 
* L'affichage en temps réel d'un tableau de personnes celui-ci étant en lien avec le tableau stocké dans la mémoire dans le code Javascript.

Pour ce faire, pensez à utiliser un sélecteur permettant d'atteindre l'élément de type `<tbody>` de votre tableau. Cet élément devra contenir, pour chaque personne, un `<tr>` possédant plusieurs `<td>` (un par attribut de la personne). 

Ainsi, la structure du tableau pourrait être du type: 

```html
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Nom</th>
      <th>Prénom</th>
      <th>Date de naissance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>DUPONT</td>
      <td>John</td>
      <td>22/03/1968</td>
    </tr>
  </tbody>
</table>
```

La partie contenue dans le `<tbody>` sera bien entendu vide de base, et complétée au fur et à mesure via le code Javascript et les intéraction utilisateur.