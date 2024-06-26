export function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}



// Your tests will be supplied with a function named 'createCalculator()'.
//  It should meet the following requirements:
// •	Return a module (object), containing the functions add(), subtract() and get() as properties
// •	Keep an internal sum that can’t be modified from the outside
// •	The functions add() and subtract() take a parameter that can be parsed as a number 
// (either a number or a string containing a number) that is added or subtracted from the internal sum
// •	The function get() returns the value of the internal sum


