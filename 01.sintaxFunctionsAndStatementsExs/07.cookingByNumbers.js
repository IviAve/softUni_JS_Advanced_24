function cookingByNumbers(num, p1, p2, p3, p4, p5) {

    let number = Number(num);
    let input = [p1, p2, p3, p4, p5];


    for (let i = 0; i < input.length; i++) {
        const command = input[i];

        switch (command) {
            case 'chop':

                number = number / 2;
                console.log(number);
                break;

            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;

            case 'spice':
                number = number + 1;
                console.log(number);
                break;
            case 'bake':
                number = number * 3;
                console.log(number);
                break;
            case 'fillet':
                number *= 0.80;
                console.log(number.toFixed(2));
                break;

        }

    }

}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

// Write a program that receives 6 parameters which are a number and a list of five operations.
//  Perform the operations sequentially by starting with the input number and using the result of every operation
//  as a starting point for the next one. Print the result of every operation in order.
//  The operations can be one of the following:
// // •	chop - divide the number by two
// // •	dice - square root of a number
// // •	spice - add 1 to the number
// // •	bake - multiply number by 3
// // •	fillet - subtract 20% from the number
// // The input comes as 6 string elements. The first element is the starting point
//  and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.
// // The output should be printed on the console.
