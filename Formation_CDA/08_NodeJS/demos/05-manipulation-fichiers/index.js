import * as fs from 'fs';
import * as fsPromises from 'fs/promises';
import * as path from 'path';

let file = '../../support/nodejs_m2i.pdf';

// Traitement asynchrone
fs.stat(file, (err, stats) => {
    if(err)  {
        console.log(err.message)
        return;
    };

    console.log(stats.size);

    if(stats.isFile) {
        console.log("C'est un fichier");
;    }
});

console.log(path.basename(file));
console.log(path.resolve(file));

// Méthode de lecture asynchrone avec callback
fs.readFile('./exemple-callback.txt', (err, data) => {
    if(err) {
        console.log(err);
    }

    console.log(data.toString());
});

let content = fs.readFileSync('exemple-sync.txt', {encoding: 'utf8'});
console.log(`readFileSync: ${content}`);

// IIFE
// Immediately Invoked Function Expression
// Utilisation de la fonction sous forme de promesses
(async () => console.log(await fsPromises.readFile('./exemple-promise.txt', {encoding: 'utf8'})))();

let text = "J'adore les chiens\n";

fs.writeFile('mon-secret', text, {flag: 'a', encoding: 'utf-8'}, (err) => {
    if(err) {
        console.log(err.message);
    }
});



