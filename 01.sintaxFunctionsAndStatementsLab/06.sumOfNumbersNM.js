function sumOfNumbersNM(n,m) {
    
    let num1 = Number(n);
    let num2 = Number(m);
    let result = 0;

    for (let i = num1; i <= num2; i++) {
        result += Number([i]);
        
    }
    return(result)
}
console.log(sumOfNumbersNM('1', '5' ));


sumOfNumbersNM('1', '5' )
sumOfNumbersNM('-8', '20')

// Write a JS function that takes two numbers n and m as an input 
// and prints the sum of all numbers from n to m.
// The input comes as two string elements that need to be parsed as numbers.
// The output should return the sum.
