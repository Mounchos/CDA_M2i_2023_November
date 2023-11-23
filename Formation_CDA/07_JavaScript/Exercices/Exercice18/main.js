function estPalindrome(chaine) {
    var chaineSansEspaces = "";
  
    for (var i = 0; i < chaine.length; i++) {
      if (chaine[i] !== "") {
        chaineSansEspaces += chaine[i];
      }
    }
  
    var longueur = chaineSansEspaces.length;
    var moitie = Math.floor(longueur / 2);
  
    for (var j = 0; j < moitie; j++) {
      if (chaineSansEspaces[j] !== chaineSansEspaces[longueur - 1 - j]) {
        return false;
      }
    }
  
    return true;
  }
  

  console.log(estPalindrome("non"));
  console.log(estPalindrome("touot"));
  console.log(estPalindrome("1234321"));
  console.log(estPalindrome("kayak"));
  console.log(estPalindrome("pierre"));
  console.log(estPalindrome("palindrome"));
 