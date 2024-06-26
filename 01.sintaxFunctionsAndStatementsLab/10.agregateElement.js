function agregateElement(array) {

    let sum = 0;
    let invertedSum = 0;
    let concatSum = '';

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        sum += element;
        invertedSum += 1 / element;
        concatSum += element;


    }
    console.log(sum);

    console.log(invertedSum);

    console.log(concatSum);
}

agregateElement([1, 2, 3])
agregateElement([2, 4, 8, 16])

// Write a program that performs different operations on an array of elements.
//  Implement the following operations:
// •	Sum(ai) - calculates the sum of all elements from the input array
// •	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
// •	Concat(ai) - concatenates the string representations of all elements from the array
// The input comes as an array of number elements.
// The output should be printed on the console on a new line for each of the operations.
