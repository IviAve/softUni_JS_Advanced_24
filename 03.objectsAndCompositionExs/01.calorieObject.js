function calorieObject(array) {
    
    let obj = {};

    for (let i = 0; i < array.length; i+=2) {
        const name = array[i];
        const calories = Number(array[i + 1]);
        obj[name] = calories;
        
    }
    console.log(obj);

}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])

// Write a function that composes an object by given properties. 
// The input comes as an array of strings. Every even index 
// of the array represents the name of the food. Every odd 
// index is a number that is equal to the calories in 100 grams of the given product. 
// Assign each value to its corresponding property, and finally print the object.
// The input comes as an array of string elements.
// The output should be printed on the console.
