function largestNumber(n1,n2,n3) {
    
    let newArr = [n1,n2,n3];

    let sorted = newArr.sort((a,b) => b-a);
    console.log(`The largest number is ${sorted[0]}.`);
}

largestNumber(5, -3, 16)
largestNumber(-3, -5, -22.5)

// Write a function that takes three number arguments as input and finds the largest of them. 
// Print the following text on the console:  `The largest number is {number}.`.
// The input comes as three number arguments passed to your function.
// The output should be printed to the console.
