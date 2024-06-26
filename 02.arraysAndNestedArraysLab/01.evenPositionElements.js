function evenPositionElements(array) {
    
    let evenArr = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (i % 2 === 0) {
             evenArr.push(element);
        }
        
    }
    console.log(evenArr.join(' '));
}

evenPositionElements(['20', '30', '40', '50', '60'])
evenPositionElements(['5', '10'])


// Write a function that finds the elements at even positions in an array.
// The input comes as an array of string elements.
// The output is printed on the console. Collect all elements in a string, separated by space.


