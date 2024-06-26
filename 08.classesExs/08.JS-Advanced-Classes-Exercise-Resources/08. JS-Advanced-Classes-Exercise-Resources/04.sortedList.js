class List {

    constructor() {
        this.result = [];
        this.size = this.result.length;
    };

    add(value) {
        this.result.push(value);
        this.size = this.result.length;
        this.result.sort((a, b) => a - b);

    };
    remove(index) {
        if (index < 0 || index >= this.result.length) {
            throw new Error('Invalid index');
        }
        this.result.splice(index, 1);
        this.size = this.result.length;

    };

    get(index) {
        if (index < 0 || index >= this.result.length) {
            throw new Error('Invalid index');
        }
        return this.result[index];

    };

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));


// Implement a class List, which keeps a list of numbers, sorted in ascending order.
// It must support the following functionality:
// •	add(element) - adds a new element to the collection
// •	remove(index) - removes the element at position index
// •	get(index) - returns the value of the element at position index
// •	size - number of elements stored in the collection
// The correct order of the elements must be kept at all times,
//  regardless of which operation is called. Removing and retrieving elements shouldn’t
//   work if the provided index points outside the length of the collection (either throw
//     an error or do nothing). Note the size of the collection is not a function.
// Input / Output
// All functions that expect input will receive data as parameters. Functions that
// have validation will be tested with both valid and invalid data. Any result expected
//  from a function should be returned as its result.
// Your add and remove functions should return a class instance with the required functionality as its result.
// Submit the class definition as is, without wrapping it in any function.