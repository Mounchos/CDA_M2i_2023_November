import Formateur from "./classes/Formateur.js";
import { writeFileSync, readFileSync } from 'fs';

let jsonFile = './db.json';

// let arthur = new Formateur("Arthur", "Dennetiere", "arthur.dennetiere@labom2i.fr", "0601010101");
// let antoine = new Formateur("Antoine", "Dieudonne", "antoine.dieudonne@labom2i.fr", "0601010102");

// let formateurs = [arthur, antoine];

function writeToJson(file, content) {
    let contentToJson = JSON.stringify(content);

    writeFileSync(file, contentToJson);
}

function readFromJson(file) {
    return JSON.parse(readFileSync(file, {encoding: 'utf-8'}));
}

// writeToJson(jsonFile, formateurs);

readFromJson(jsonFile).forEach(f => console.log(f.prenom));