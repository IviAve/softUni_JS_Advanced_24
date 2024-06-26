function sortArray(arr,typeOfOrder) {
    let sortedArr = arr.slice(0);
    //let sortedArr = arr;

if (typeOfOrder === 'asc') {
     sortedArr = sortedArr.sort((a,b) => a-b);

    
}else if( typeOfOrder === 'desc'){

     sortedArr = sortedArr.sort((a,b) => b-a);
}

    return sortedArr;
    //console.log(arr);
}

sortArray([14, 7, 17, 6, 8], 'asc')
sortArray([14, 7, 17, 6, 8], 'desc')


// Write a function that sorts an array with numeric values in ascending or descending order, 
// depending on an argument that is passed to it. 
// You will receive a numeric array and a string as arguments to the function in your code. 
// •	If the second argument is asc, the array should be sorted in
//  ascending order (smallest values first).
// •	If it is desc, the array should be sorted in descending order (largest first).
// Input
// You will receive a numeric array and a string as input parameters. 
// Output
// The output should be the sorted array.
