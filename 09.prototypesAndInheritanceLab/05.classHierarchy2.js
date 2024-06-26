
function Hierarchy() {
    
    class Figure {
        constructor(units = "cm") {
            this.units = units;
        }
    
        get area() {
            return 0; // Default area for the base class Figure
        }
    
        changeUnits(newUnits) {
            this.units = newUnits;
        }
    
        convertUnits(value) {
            switch (this.units) {
                case "m":
                    return value / 100;
                case "cm":
                    return value;
                case "mm":
                    return value * 10;
                default:
                    return value;
            }
        }
    
        toString() {
            return `Figures units: ${this.units}`;
        }
    }
    
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius; // Store radius in cm by default
        }
    
        get radius() {
            return this.convertUnits(this._radius);
        }
    
        get area() {
            const radius = this.radius;
            return Math.PI * radius * radius;
        }
    
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }
    
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width; // Store width in cm by default
            this._height = height; // Store height in cm by default
        }
    
        get width() {
            return this.convertUnits(this._width);
        }
    
        get height() {
            return this.convertUnits(this._height);
        }
    
        get area() {
            const width = this.width;
            const height = this.height;
            return width * height;
        }
    
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }
    
    return {
        Figure,
        Circle,
        Rectangle
    };
}



let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50



// Write a function that returns 3 classes - Figure, Circle, and Rectangle.
// Figure:
// •	Should have property units ("m", "cm", "mm") with default value "cm"
// •	Should have a getter area
// •	Has method changeUnits that sets different units for that figure
// •	Has method toString, which returns: `Figures units: {units}`
// Circle:
// •	Extends Figure
// •	Has a property radius
// •	Overrides area getter to return the area of the Circle (PI * r * r)
// •	toString() - should return a string representation of the figure in the format:
// `Figures units: {type} Area: {area} - radius: {radius}`
// Rectangle:
// •	Extends Figure
// •	Has properties width, height, and units (extended from the class Figure)
// •	Overrides area getter to return the area of the Rectangle (width * height)
// •	toString() - should return a string representation of the figure in the format:
// `Figures units: {type} Area: {area} - width: {width}, height: {height}`
// Note:  All Parameters Passed in the Constructors Are in Centimeters ("cm")
// Input / Output
// There will be no input. Your function should return an object containing
//  the Figure, Circle, and Rectangle classes.
// Examples
// This code demonstrates how your classes should behave:
