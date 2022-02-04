// array annotation initialization
const carMakers: string[] = ["ford", "mazda", "toyota"];
const carsByMake: string[] = ["f150", "f5", "camaro"];

// Help with inference when extracting values
const myCar = carMakers.pop();

// Flexible types example
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-15');
importantDates.push(new Date());