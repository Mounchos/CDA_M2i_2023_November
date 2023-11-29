class Personne {
    #nom;
    #prenom;

    constructor(nom, prenom) {
        this.#nom = nom;
        this.#prenom = prenom;
    }

    get nomComplet() {
        return this.#prenom + ' ' + this.#nom;
    }

    set prenom(newPrenom) {
        if (newPrenom !== 'Cindy') {
            this.#prenom = newPrenom;
        } else {
            throw new Error("Impossible de définir le prénom à 'Cindy'");
        }
    }

    get prenom() {
        return this.#prenom;
    }

    get nom() {
        return this.#nom;
    }

    set nom(newNom) {
        this.#nom = newNom;
    }
}

export { Personne };
