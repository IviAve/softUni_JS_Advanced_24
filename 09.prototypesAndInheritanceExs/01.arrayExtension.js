
(function solve() {
 
    Array.prototype.skip = function (n) {
 
        let newArr = [];
 
        for (let index = n; index < this.length; index++) {
 
            newArr.push(this[index]);
 
        }
        return newArr;
    }
 
    Array.prototype.last = function () {
 
        return this[this.length - 1];
 
    }
 
    Array.prototype.take = function (n) {
 
        let newArr = [];
 
        for (let index = 0; index < n; index++) {
 
            newArr.push(this[index]);
 
        }
        return newArr;
 
    }
 
    Array.prototype.sum = function () {
 
        let sum = 0;
 
        for (let index = 0; index < this.length; index++) {
 
            sum += this[index];
 
        }
        return sum;
 
    }
 
    Array.prototype.average = function () {
 
        return this.sum() / this.length;
 
    }
 
 
}());







// Extend the built-in Array object with additional functionality.
// Implement the following functionality:
// •	last() - returns the last element of the array
// •	skip(n) - returns a new array which includes all original elements,
// except the first n elements; n is a Number parameter
// •	take(n) - returns a new array containing the first n elements from
// the original array; n is a Number parameter
// •	sum() - returns a sum of all array elements
// •	average() - returns the average of all array elements
// Input / Output
// Input for functions that expect it will be passed as valid parameters.
//  Output from functions should be their return value.
// Constraints
// Structure your code as an IIFE.
