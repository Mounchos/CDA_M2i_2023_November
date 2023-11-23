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