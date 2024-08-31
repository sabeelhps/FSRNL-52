class Car{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    printDesc() {
        console.log(`Name: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    // getter and setter methods are used to get and set the single property

    get getName() {
        return this.name;
    }

    get getPrice() {
        return this.price;
    }

    set setPrice(newPrice) {
        if (newPrice < 0) {
            this.price = 0;
            return;
        }
        this.price = newPrice;
    }
}

class RacingCar extends Car{
    constructor(name, price, topSpeed) {
        super(name, price);
        this.topSpeed = topSpeed;
    }

    printTopSpeed() {
        console.log(`TopSpeed of ${this.name}: ${this.topSpeed}`);
    }
}

const c1 = new Car("BMW", 100);
const c2 = new Car("Ferrari", 500);

console.log(c1);
console.log(c2);

const r1 = new RacingCar("BMW", 100, 400);