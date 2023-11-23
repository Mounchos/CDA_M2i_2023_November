# Exercice 20

  - Écrire un programme qui permet de **saisir une chaîne d’ADN** ainsi qu’une plus petite **séquence d’ADN** et qui retourne le **pourcentage d’occurrences** de la séquence dans la chaîne
  - Cette séquence sera composée uniquement de la combinaison de lettre suivante **'a', 't', 'c', 'g'**.
  1. Écrire une fonction **verificationAdn** qui permet de renvoyer la valeur **True** si la chaîne d’ADN est **valide**, **False** si elle est **invalide**
  2. Écrire une fonction **saisieAdn** qui récupère une **saisie**, vérifie sa validité (avec **verificationAdn**) et **renvoie la chaîne d’ADN valide** 
  3. Écrire une fonction **proportion** qui reçoit deux paramètres **une chaîne d’ADN** et **une séquence d’ADN** Elle renverra le **pourcentage d’occurrences**  de la séquence dans la chaîne
  4. Créer des instructions pour pouvoir tester les fonctions

Exemples :
```
Saisir la chaine : zriegfdsjdfhs
Erreur de saisie!!!
Saisir la chaine : ACTgtagT

Saisir la séquence : iuq
Erreur de saisie!!!  
Saisir la séquence : Ac

chaine : actgtagt
sequence : ac

Il y a 25.0% de "ac" dans la chaine "actgtagt"
```

```
Saisir la chaine : actgactgaa
Saisir la séquence : actgactg
chaine : actgactgaa
sequence : actgactg
Il y a 80.0% de "actgactg" dans la chaine "actgactgaa"
```

^: C'est un ancrage qui indique que le motif recherché doit commencer au début de la chaîne. En d'autres termes, la correspondance doit avoir lieu dès le début de la chaîne.

[atcg]+: C'est une classe de caractères entre crochets [...] qui spécifie les caractères autorisés. Dans ce cas, [atcg] signifie que les caractères autorisés sont a, t, c, et g. Le + qui suit signifie que l'un de ces caractères doit apparaître au moins une fois, mais il peut apparaître plusieurs fois de manière consécutive.

/i: C'est un modificateur qui indique que la recherche doit être insensible à la casse. Cela signifie que la regex va correspondre aux lettres minuscules (a, t, c, g) ainsi qu'aux lettres majuscules correspondantes (A, T, C, G).

En résumé, cette expression régulière ^[atcg]+$ vérifie si une chaîne ne contient que des caractères parmi a, t, c, g (indifféremment en majuscules ou en minuscules) et qu'elle ne contient pas d'autres caractères. Elle s'assure que la chaîne ne commence pas par un caractère invalide.

