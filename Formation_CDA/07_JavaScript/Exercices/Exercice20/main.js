function verificationAdn(adn) {
    const regex = /^[atcg]+$/i; // L'option 'i' permet d'ignorer la casse (minuscules/majuscules)
    return regex.test(adn);
  }
  
  function saisieAdn() {
    let adn = prompt("Veuillez entrer une chaîne d'ADN :");
    while (!verificationAdn(adn)) {
      adn = prompt("Erreur de saisie! La chaîne d'ADN est invalide. Veuillez réessayer :");
    }
    return adn;
  }
  
  function proportion(chaineAdn, sequenceAdn) {
    const sequenceLength = sequenceAdn.length;
    let count = 0;
  
    for (let i = 0; i <= chaineAdn.length - sequenceLength; i++) {
      const sousChaine = chaineAdn.slice(i, i + sequenceLength);
      if (sousChaine === sequenceAdn) {
        count++;
      }
    }

    const pourcentage = (count / (chaineAdn.length / sequenceLength)) * 100;
    return pourcentage.toFixed(2);
  }
 
  const chaineAdn = saisieAdn();
  const sequenceAdn = prompt("Veuillez entrer une séquence d'ADN :");
  const pourcentage = proportion(chaineAdn, sequenceAdn);
  
  console.log(`La séquence "${sequenceAdn}" apparaît dans la chaîne d'ADN avec un pourcentage de ${pourcentage}% d'occurrence.`);
  