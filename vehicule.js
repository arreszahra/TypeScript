var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make,
            this.model = model,
            this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car Engine started");
    };
    return Car;
}());
var Car1 = new Car("anything", "anything2", 2024);
Car1.start();
