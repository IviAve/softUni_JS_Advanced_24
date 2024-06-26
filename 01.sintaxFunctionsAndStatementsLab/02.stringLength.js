function stringLength(str1,str2,str3) {

    let newArr = [str1,str2,str3];
    let lengthSum = 0;
    let averageSum = 0;

    for (const str of newArr) {
        
         lengthSum += str.length;
         
    }
    averageSum = lengthSum/3
    console.log(lengthSum);
    console.log(Math.floor(averageSum));
    
}
stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')

// Write a JS function that takes three string arguments as an input.
//  Calculate the sum of the length of the strings and the average length
//   of the strings rounded down to the nearest integer.
// The input comes as three string arguments passed to your function.
// The output should be printed on the console in two lines.
// •	Write a function that receives three string arguments.
// •	Declare two variables named sumLength and averageLength that will keep the mathematical results.
// •	Calculate the length of the strings using the length property.

