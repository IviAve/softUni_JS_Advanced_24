function carFactory(obj) {
    
let resultCar = {};
let engine = {};
let carriage = {};

resultCar.model = obj.model;

if (obj.power <= 90) {
    
    engine.power = 90;
    engine.volume = 1800;
}else if (obj.power <= 120){

    engine.power = 120;
    engine.volume = 2400;
}else if(obj.power <= 200){

    engine.power = 200;
    engine.volume = 3500;
}
carriage.type = obj.carriage;
carriage.color = obj.color;

if (obj.wheelsize % 2 === 0) {
    
    obj.wheelsize --;
}

resultCar.engine = engine;
resultCar.carriage = carriage;
resultCar.wheels = [
    obj.wheelsize,
    obj.wheelsize,
    obj.wheelsize,
    obj.wheelsize,
];
return(resultCar);
//console.log(resultCar);

}

carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
)

// Write a program that assembles a car by giving requirements out of existing components.
//  The client will place an order in the form of an object describing the car.
//   You need to determine which parts to use to fulfill the client’s order.
//    You have the following parts in storage:
// An engine has power (given in horsepower) and volume (given in cubic centimeters).
//  Both of these values are numbers. When selecting an engine, pick
//   the smallest possible that still meets the requirements.
// Small engine: { power: 90, volume: 1800 }
// Normal engine: { power: 120, volume: 2400 }
// Monster engine: { power: 200, volume: 3500 }
// A carriage has a type and color. Both of these values are strings.
//  You have two types of carriages in storage and can paint them any color.
// Hatchback: { type: 'hatchback', color: <as required> }
// Coupe: { type: 'coupe', color: <as required> }
// The wheels will be represented by an array of 4 numbers, each number
//  represents the diameter of the wheel in inches. The size can only be an odd number.
//   Round down any requirements you receive to the nearest odd number. 
// Input
// You will receive an object as an argument to your function. The format will be as follows:
// { model: <model name>,
//   power: <minimum power>,
//   color: <color>,
//   carriage: <carriage type>,
//   wheelsize: <size> }
// Output
// Return the resulting car object as a result of your function. See the examples for details.
