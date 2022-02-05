//import Vehicle from "./vehicleBaseClass.js";
//import { namex } from "./vehicleBaseClass";
//this includes the vehicle class as a module
//const VehicleModule = module.require("./vehicle")
//import {namex} from 'vehicleBaseClass.js';

//------------------------------------------
//  CAR DERIVATION OF VEHICLE
//------------------------------------------

class Car extends Vehicle {
    constructor (make, model, year, color, mileage) {

        super(make, model, year, color, mileage);

        this.maximumPassengers  = 6;
        this.passenger          = 0;
        this.numberOfWheels     = 4;
        this.maximumSpeed       = 200;
        this.fuel               = 100;
        this.scheduleService    = false;
    }

    loadPassenger(num){
        return ((this.passenger + num) <= this.maximumPassengers);
    }

    canStart() {
        console.log("canStart")
        this.start = (this.fuel > 0);
    }

    scheduleService(mileage){
        this.scheduleService = mileage > 30000;
        return(this.scheduleService)
    }
}

//------------------------------------------
//  CAR DERIVATION OF VEHICLE
//------------------------------------------

class Truck extends Vehicle {
    constructor (make, model, year, color, mileage, payloadMax) {

        super(make, model, year, color, mileage);

        this.maximumPassengers  = 3;
        this.passenger          = 0;
        this.numberOfWheels     = 4;
        this.maximumSpeed       = 120;
        this.fuel               = 100;
        this.scheduleService    = false;
        this.payloadMaximum     = payloadMax;
    }

    loadPassenger(num){
        return ((this.passenger + num) <= this.maximumPassengers);
    }

    canStart() {
        console.log("canStart")
        this.start = (this.fuel > 0);
    }

    scheduleService(mileage){
        this.scheduleService = mileage > 30000;
        return(this.scheduleService)
    }

    getPayloadMaximum() {
        return(this.payloadMaximum)
    }

    isPayloadMaxAFulSizeTruck() {
        return(this.payloadMaximum > 1000)
    }
}

// MAKE A CAR (MERCURY)
console.log("\CAR - MERCURY")
let car = new Car("Mercury", "Sedan", 2019, "Red", 35000);

car.addFuel(20);
let new_passengers = 7;
console.log("Fit " + new_passengers + " = " + car.loadPassenger(new_passengers))
car.start();
car.accelerate();


// MAKE A TRUCK (FORD)
console.log("\nTRUCK - FORD")
let truck = new Truck("Ford", "F150", 2020, "Green", 50000, 1001);

truck.addFuel(40);
truck.loadPassenger(3);
truck.start();
truck.accelerate();
console.log("Max Payload = " + truck.getPayloadMaximum() + " If Full Size = " + truck.isPayloadMaxAFulSizeTruck())





//this shows how to call from this module...
//let car = new Car.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)