function greatestCommonDivisorGCD(a,b) {
    
    let firstNum = Number(a);
    let secondNum = Number(b);

    while(firstNum !== secondNum){

        if (firstNum > secondNum) {
            firstNum -=secondNum;
            
        }else{
            secondNum -= firstNum;
        }
    }
    console.log(firstNum);
}

greatestCommonDivisorGCD(15, 5)
greatestCommonDivisorGCD(2154, 458)

// Write a function that takes two positive numbers as input and computes the greatest common divisor.	
// The input comes as two positive integer numbers.
// The output should be printed on the console.
