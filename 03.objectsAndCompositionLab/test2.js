let doubleChoko = {
    flourType : 'braun' ,
    bonus: 'fruit',
    weigth : 100,

};

// for (let el in doubleChoko) {
//     console.log(doubleChoko.el);     // Incorrect: undefined, since `el` is not a property of `doubleChoko`
//     console.log(doubleChoko['el']);  // Incorrect: undefined, since 'el' is interpreted as a string literal
//     console.log(doubleChoko[el]);    // Correct: Accesses the property name stored in `el`
// }

let entries = Object.entries(doubleChoko);

for (const el of entries) {
    console.log(`${el.join(' ')}`);
}


// In your code, the first two console.log statements inside the loop are resulting in
//  undefined because of the way you're trying to access the properties of the doubleChoko object. 
//  Let's break down what's happening:

// Understanding Property Access in JavaScript Objects
// Dot Notation (doubleChoko.el):

// When you use doubleChoko.el, JavaScript looks for a property named el in the doubleChoko object.
// Since there is no property named el in doubleChoko, it returns undefined.
// Bracket Notation with String Literal (doubleChoko['el']):

// When you use doubleChoko['el'], JavaScript again looks for a property 
// named el because 'el' is a string literal.
// Similar to dot notation, there is no property named el, so it returns undefined.
// Bracket Notation with Variable (doubleChoko[el]):

// Here, el is a variable that holds the name of the current property in the loop.
// This is the correct way to access the value of the property stored in the el variable.
// Correct Code
// To access the values of the properties correctly within the loop,
//  you should use bracket notation with the variable el.






// let entries = Object.entries(choko);
// console.log(choko);
// console.log(`${entries[0]}`);
// console.log(`${entries[0][0]}`);