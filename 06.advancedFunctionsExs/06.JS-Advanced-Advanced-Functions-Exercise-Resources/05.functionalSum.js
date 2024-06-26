function functionalSum(num) {
    
    let sum = 0;

    function inner(number) {
        
        sum += number;

        return inner;
    }
    inner.toString = () =>{
        return sum;
    }
    return inner(num);

}

//functionalSum((1))
console.log(functionalSum(1)(6)(-3).toString());


// Write a function that adds a number passed to it to an internal 
// sum and returns itself with its internal sum set to the new value, 
// so it can be chained functionally. 
// Hint: Overwrite toString() of the function. 
 
// Input
// Your function needs to take one numeric argument.
// Output
// Your function needs to return itself with an updated context.
