function compterLettreA(chaine) {
        var lettreA = 0;
        for (var i = 0; i < chaine.length; i++) { 
          if (chaine[i] === "a") {
            lettreA++;
          }
        }
        return lettreA; 
      }
      
      console.log(compterLettreA("abba"));
      console.log(compterLettreA("mixer"));
      console.log(compterLettreA("maadour"));
