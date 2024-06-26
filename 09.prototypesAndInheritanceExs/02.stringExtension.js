(function solve() {

    String.prototype.ensureStart = function (str) {

        if (!this.startsWith(str)) {
            return str.concat(this)
        }
        return this.toString();
    }
    String.prototype.ensureEnd = function (str) {

        if (!this.endsWith(str)) {
            return this.concat(str)
        }
        return this.toString();
    }
    String.prototype.isEmpty = function () {
        return this.length === 0 ? true : false;
    }
    String.prototype.truncate = function (n) {
        if (n < 3) {
            return '.'.repeat(n);

        }
        if (this.toString().length <= n) {
            return this.toString();

        }else{
            let lastIdx = this.toString().substring(0,n-2).lastIndexOf(' ');
            if (lastIdx !== -1) {
                return this.toString().substring(0,lastIdx) + '...';

            }else{
                return this.toString().substring(0,n-3) + '...';

            }
        }
    }
    String.format = function(str,...params){

        for(let i = 0; i< params.length;i++){
            str = str.replace(`{${i}}`,params[i])
        }
        return str;
    }
})()


let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');



//     Extend the built-in String object with additional functionality.
//      Implement the following functions:
// •	ensureStart(str) – if the current string doesn't start with the str
//  parameter, return a new string in which str parameter appended to the 
//  beginning of the current string, otherwise returns the original string
// •	ensureEnd(str) – if the current string doesn't end with str parameter,
//  return a new string in which str parameter appended to the end of the 
//  current string, otherwise returns the original string
// •	isEmpty() - return true if the string is empty and false otherwise
// •	truncate(n) – returns the string truncated to n characters by removing 
// words and appends an ellipsis (three periods) to the end. If a string is less than
//  n characters long, return the same string. If it is longer, split the string where
//   a space occurs and append an ellipsis to it so that the total length is less than
//    or equal to n. If no space occurs anywhere in the string, return n - 3 characters
//     and an ellipsis. If n is less than 4, return n amount of periods.
// •	format(string, …params) - static method to replace placeholders with parameters.
//  A placeholder is a number surrounded by curly braces. If parameter index cannot be
//   found for a certain placeholder, do not modify it. Note static methods are attached 
//   to the String object instead of its prototype. See the examples for more info.
// Note strings are immutable, so your functions will return new strings as a result.

// Input / Output
// Your main code should be structured as an IIFE without input or output - it should
//  modify the existing String prototype instead.
// Input and output of the extension functions should be as described above.
