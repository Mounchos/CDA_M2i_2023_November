class Animal {
    constructor(nom, espece) {
      this.nom = nom;
      this.espece = espece;
    }
  }
  

  class Chien extends Animal {
    constructor(nom) {
      super(nom, "Chien");
    }
  }
  
  class Chat extends Animal {
    constructor(nom) {
      super(nom, "Chat");
    }
  }
  
  class Cheval extends Animal {
    constructor(nom) {
      super(nom, "Cheval");
    }
  }
  
  // Export des classes
  export { Chien, Chat, Cheval };
  