// Listing different property names, that a vehicle might have
interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `$Name: ${this.name} is an available car.`
    }
};

const printVehicle = (vehicle: Vehicle): void => {
    // console.log(`Name: ${vehicle.name};Year: ${vehicle.year}; Broken ${vehicle.broken}`);
    console.log(vehicle.summary());
};

printVehicle(oldCivic);