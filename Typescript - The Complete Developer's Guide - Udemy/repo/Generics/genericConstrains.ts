class Car {
    print() {
        console.log('I am a Car');
    }
}

class House {
    print() {
        console.log('I am a House');
    }
}

interface Printable {
    print(): void;
}

function PrintHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

PrintHousesOrCars([new House(), new Car()]);
PrintHousesOrCars([new Car(), new House()]);
// PrintHousesOrCars([1,2,3,4,5]); Will not work as the requirement is for a console.log and we do not cover the constraint due to setting an array of numbers
