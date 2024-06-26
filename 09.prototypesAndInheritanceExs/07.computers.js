function createComputerHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error('Cannot instantiate abstract class Computer directly.');
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (!(value instanceof Battery)) {
                throw new TypeError('Invalid instance. Expected an instance of Battery.');
            }
            this._battery = value;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (!(value instanceof Keyboard)) {
                throw new TypeError('Invalid instance. Expected an instance of Keyboard.');
            }
            this._keyboard = value;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (!(value instanceof Monitor)) {
                throw new TypeError('Invalid instance. Expected an instance of Monitor.');
            }
            this._monitor = value;
        }
    }
    return{
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }


}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);






// You need to implement the class hierarchy for a computer business,
//  here are the classes you should create and support:
// •	Keyboard  class that contains:
// o	manufacturer - string property for the name of the manufacturer
// o	responseTime - number property for the response time of the Keyboard
// •	Monitor class that contains:
// o	manufacturer - string property for the name of the manufacturer
// o	width - number property for the width of the screen
// o	height - number property for the height of the screen
// •	Battery class that contains:
// o	manufacturer - string property for the name of the manufacturer
// o	expectedLife - number property for the expected years of the life of the battery
// •	Computer – an abstract class that contains:
// o	manufacturer - string property for the name of the manufacturer
// o	processorSpeed - a number property containing the speed of the processor in GHz
// o	ram - a number property containing the RAM of the computer in Gigabytes
// o	hardDiskSpace - a number property containing the hard disk space in Terabytes
// •	Laptop - class extending the Computer class that contains:
// o	weight - a number property containing the weight of the Laptop in Kilograms
// o	color - a string property containing the color of the Laptop
// o	battery - an instance of the Battery class containing the laptop's battery.
// There should be a getter and a setter for the property and validation that
// the passed-in argument is an instance of the Battery class.
// •	Desktop - concrete class extending the Computer class that contains:
// o	keyboard - an instance of the Keyboard class containing the Desktop PC's Keyboard.
//  There should be a getter and a setter for the property and validation that the
//  passed-in argument is an instance of the Keyboard class.
// o	monitor - an instance of the Monitor class containing the Desktop PC's Monitor.
// There should be a getter and a setter for the property and validation that the
//  passed-in argument is an instance of the Monitor class.
// Attempting to instantiate an abstract class should throw an Error, attempting
// to pass an object that is not of the expected instance (ex. an object that is
//     not an instance of Battery to the laptop as a battery) should throw a TypeError.
// To achieve better code reuse, it's a good idea to have a base abstract class containing 
// common information - check the classes, what common characteristics do they share that 
// can be grouped in a common base class.
