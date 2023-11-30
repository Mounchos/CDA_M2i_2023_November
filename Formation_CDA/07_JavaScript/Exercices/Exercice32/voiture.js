export class Vehicle {
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    capitalizeFirstLetter(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    toString() {
        return `${this.capitalizeFirstLetter(this.color)} ${this.capitalizeFirstLetter(this.brand)} ${this.capitalizeFirstLetter(this.model)}`;
    }
}

export class TableManager {
    constructor() {
        this.vehicles = [];
    }

    addVehicle(brand, model, color) {
        const vehicle = new Vehicle(brand, model, color);
        this.vehicles.push(vehicle);
        return vehicle;
    }

    deleteVehicle(index) {
        if (index >= 0 && index < this.vehicles.length) {
            this.vehicles.splice(index, 1);
        }
    }

    editVehicle(index, brand, model, color) {
        if (index >= 0 && index < this.vehicles.length) {
            const vehicle = new Vehicle(brand, model, color);
            this.vehicles[index] = vehicle;
        }
    }
}
