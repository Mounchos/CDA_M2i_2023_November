const chapitres = ["Chapitre 1", "Chapitre 2", "Chapitre 3"];

const parties = ["partie 1.1", "partie 1.2", "partie 1.3", "partie 2.1", "partie 2.2", "partie 2.3", "partie 3.1", "partie 3.2", "partie 3.3"];

console.log("Table des matières :");

for (const chapitre of chapitres) {
    console.log(`  ${chapitre}:`);
    
    for (const partie of parties) {
        console.log(`        -${partie}`);
    }
}
