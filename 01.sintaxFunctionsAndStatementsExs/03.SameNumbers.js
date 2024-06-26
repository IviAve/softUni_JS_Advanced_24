function SameNumbers(input) {

    let inputToStr = input.toString();
    let isSame = true;
    let sum = 0;
    let digitToCompare = inputToStr[0];

    for (let i = 0; i < inputToStr.length; i++) {
        let element = inputToStr[i];
        sum += Number(element);

        if (element !== digitToCompare) {
            isSame = false;
        }

    }
    console.log(isSame);
    console.log(sum);
}

SameNumbers(2222222)
SameNumbers(1234)


// Write a function that takes an integer number as an input and checks if all the digits
// in a given number are the same or not.
//  Print on the console true if all numbers are the same and false if not. On the next line,
// print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.
