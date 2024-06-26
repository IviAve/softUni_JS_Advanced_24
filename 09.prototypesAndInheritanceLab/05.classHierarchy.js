
function Hierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
            if (new.target === Figure) {
                throw new TypeError('Figure class is abstract');
            }
        }
        changeUnits(value) {
            this.units = value;
        }
        scaleParam(param) {
            switch (this.units) {
                case 'm':
                    param /= 10;
                    break;
                case 'cm':
                    break;
                case 'mm':
                    param *= 10;
                    break;
                default:
                    break;
            }
            return param;
        }
        toString() {
            return `Figures units: ${this.units}`;
        }
    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }
        get area() {
            return Math.PI * this.radius * this.radius;
        }
        get radius() {
            return this.scaleParam(this._radius);
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }
        get area() {
            return this.width * this.height;
        }
        get width() {
            return this.scaleParam(this._width);
        }
        get height() {
            return this.scaleParam(this._height);
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
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
