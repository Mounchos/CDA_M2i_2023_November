import { readFileSync, writeFileSync } from "fs";

function Film(id, nom, duree, realisateur) {
    this.id = id;
    this.nom = nom;
    this.duree = duree;
    this.realisateur = realisateur;
}

Film.prototype.toString = function() {
    return Object.values(this).join(';');
}

Film.fromCSV = function(tab) {
    let film = new Film(null, null, null, null);
    Object.keys(film).forEach((key, index) => {
        film[key] = tab[index];
    });
    return film;
}

// let monFilm = new Film(1, "Shrek", 120, "Toto");
// let monFilm1 = new Film(1, "Shrek2", 123, "Toto1");
// let monFilm2 = new Film(1, "Shrek3", 130, "Toto2");

function writeToCSV(file, data) {
    let content = "";
    data.forEach(f => content += f.toString() + '\n');
    writeFileSync(file, content, {encoding: 'utf8'});
}

function readFromCSV(file) {
    let elements = readFileSync(file, {encoding: 'utf-8'}).split('\n');
    console.log(elements);
    return elements.map(string => Film.fromCSV(string.split(';')));
}

// writeToCSV('./db.csv', [monFilm, monFilm1, monFilm2])

readFromCSV('./db.csv').forEach(e => console.log(e.realisateur));