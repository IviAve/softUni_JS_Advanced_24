function sortedList() {

    return {

        add: function (el) {
            if (typeof (el) !== "number") {
                return;
            }
            this._sortList.push(el);
            this.size = this._sortList.length;
             this._sortList.sort(this._sortArr);

        },
        remove: function (index) {
            if (index < 0 || index >= this.size) {
                return;
            }
            this._sortList.splice(index, 1);
            this._sortList.sort(this._sortArr);
            this.size = this._sortList.length;
            //return this._sortList.sort(this._sortArr);

        },
        get: function (index) {

            if (index < 0 || index >= this.size) {
                return;
            }

            return this._sortList[index];
        },
        size: 0,
        _sortList: [],
        _sortArr: (a, b) => a - b

    }
}
let list = sortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));



// Create a function that returns a special object, which keeps a list of numbers,
// sorted in ascending order. It must support the following functionality:
// •	add(element) - adds a new element to the collection
// •	remove(index) - removes the element at position index
// •	get(index) - returns the value of the element at position index
// •	size - number of elements stored in the collection
// The correct order of the elements must be kept at all times, regardless
// of which operation is called. Removing and retrieving elements shouldn’t work
//  if the provided index points outside the length of the collection
//  (either throw an error or do nothing). Note the size of the collection is not a function.
// Input / Output
// The initial function takes no arguments and must return an object.
// All methods on the object that expect input will receive data as parameters.
// Methods that have validation will be tested with both valid and invalid data.
// Any result expected from a method should be returned as its result.
