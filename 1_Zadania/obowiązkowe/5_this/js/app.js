//Zadanie 0
let car = {
    brand: "Ford",
    color: "Red",
    numberOfKilometers: 0,
    printCarinfo() {
        return this.color + " " + this.brand + ", " + this.numberOfKilometers + " km";
    },
    drive(distance) {
        this.numberOfKilometers = this.numberOfKilometers + distance;
    }
}
console.log(car.printCarinfo());
car.drive(20);
console.log(car.printCarinfo());

//Zadanie 1

car.overview = ["02.12.2014", "6.03.2019"];

car.overviewUpdate = function (date) {
    this.overview.push(date)
}

car.overviewUpdate("10.12.2019");

car.printOverview = function () {
    for (let i = 0; i < this.overview.length; i++)
        console.log(this.overview[i]);
}

car.printOverview();

//Zadanie #3


let stairs = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    printStep() {
        console.log(this.step);
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep();