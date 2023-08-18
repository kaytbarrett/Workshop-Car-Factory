class Car {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year; 
    }

    getDescription () {
        return `This vehicle is a ${this.year} ${this.make} ${this.model}.`
    }
}

const myCar = new Car('Jeep', 'Renegade', 2023);

console.log(myCar.getDescription());