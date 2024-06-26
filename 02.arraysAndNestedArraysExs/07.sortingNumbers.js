function sortingNumbers(array) {
    let sortArr = array.sort((a,b) => a - b);
let newArr = [];

    while (sortArr.length > 0) {
       let minEl = sortArr.shift();
       newArr.push(minEl);
       let maxEl = sortArr.pop();
       newArr.push(maxEl);

    }

    return(newArr)
    
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18])

// Write a function that sorts an array of numbers so that the first element is the smallest one,
//  the second is the biggest one, the third is the second smallest one, 
//  the fourth is the second biggest one, and so on. 
// Return the resulting array.
