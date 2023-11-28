import Chien from "./chien.js";
import { add, sub, MON_SECRET } from './mesFontions.js'

const myObject = {
  firstname: "John",
  age: 24
};

class MaClasse {
  // Attributs / Champs d'instance
  firstname;
  age;
  id;

  // Attributs / champs communs à tous les objets de cette classe car 'statiques'
  static count = 0;

  // Pour créer un objet de cette classe, on passe par le constructeur
  constructor(firstname, age) {
    // Pour atteindre les champs de l'objet, on va passer par 'this.nomChamp'
    this.firstname = firstname;
    this.age = age;

    // ON accède aux champs statiques via la notation 'NomClasse.nomAttribut'
    MaClasse.count++;

    // ON peut affecter des variables d'instances issues de variables de classe
    this.id = MaClasse.count;
  }

  // On peut également créer des fonctions liées à notre instance via une méthode. Le corps de la fonction aura alors accès à l'objet 'this'
  sayHello() {
    console.log(`Hello, I'm ${this.firstname} and I am ${this.age}yo.`);
  }

  // A contrario, des méthodes déclarées statiques n'auront pas accès à l'objet 'this' et ne pourrons exploiter que les champs égalemennt statiques
  static howMany() {
    console.log(`There are ${MaClasse.count} peoples`);
  }
}

function sayHello(obj) {
  console.log(`Hello, I'm ${obj.firstname} and I am ${obj.age}yo.`);
}

// On peut récupérer les attributs d'une classe via la notation suivante
console.log(MaClasse.count);

// ON peut instancier des objets d'une classe donnée via le mot-clé 'new' et le passage de paramètre au constructeur
const otherObjA = new MaClasse(24, "John")
const otherObjB = new MaClasse("Alain", 32)

// Les objets instanciés peuvent être logués comme des objets litéraux 
console.log(otherObjA);
console.log(otherObjB);

// Les champs statiques sont communs à tous les objets d'une classe donnée
console.log(MaClasse.count);

sayHello(otherObjB);

// Pour appeller une méthode, on passe par la notation 'nomVarObj.nomMethode()'
otherObjB.sayHello()

// Pour appeller une méthode statique, on passe par la notation 'NomClasse.nomMethode()'
MaClasse.howMany()

const monChien = new Chien("Rex", 4)

console.log(monChien);

console.log(MON_SECRET);
