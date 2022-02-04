class Vehicle {
    // color: string;
    // constructor (color: string) {
    //     this.color = color;
    // }
    constructor(public color: string) {}
    
    public drive(): void {
        console.log('Driving vehicle');
    }
    private honk(): void {
        console.log('Vehicle beeps');
    }
    // //initialize a variable inside of a class
    // color: string = 'blue';
}

const vehicle = new Vehicle('orange');
//console.log(vehicle.color);

// Modifiers allow team members to restrict access to certain modifiers that shouldn't be used externally
class Car extends Vehicle {
    constructor(public wheels: number, public color: string) {
    super(color);    
    }
    public drive(): void {
        console.log('Vehicle is a car that beeps');
    }
}

//Instance of the above class (we have access to all the defined methods)
// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();
// const car = new Car();
// car.drive();
// car.honk();