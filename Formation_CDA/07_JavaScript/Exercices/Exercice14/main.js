function nom(prenom, nom) {
    return `${prenom.charAt(0).toUpperCase()}${prenom.slice(1)} ${nom.charAt(0).toUpperCase()}${nom.slice(1)}`;
}

console.log(nom("john", "doe"));