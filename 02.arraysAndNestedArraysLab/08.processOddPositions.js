function processOddPositions(array) {
    
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (i % 2 !== 0) {
            newArr.push(element);
           
        }
        
    }
   let reduced =  newArr.map(a => a * 2)
    .reverse();

    
    return(reduced.join(' '));
}

processOddPositions([10, 15, 20, 25])
processOddPositions([3, 0, 10, 4, 7, 3])

// You are given an array of numbers. Write a JS function that returns the elements
//  at odd positions from the array, doubled and in reverse order.
// The input comes as an array of number elements.
// The output is the return on the console on a single line, separated by space.
