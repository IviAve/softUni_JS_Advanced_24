function squareOfStars(input) {
    
    for (let i = 0; i < input; i++) {
        const row = '* '.repeat(input);
        
        console.log(row);
    }
}

squareOfStars(1)
squareOfStars(2)
squareOfStars(5)
squareOfStars(7)

// Write a function that prints a rectangle made of stars with variable size, 
// depending on an input parameter. If there is no parameter specified, 
// the rectangle should always be of size 5. Look at the examples to get an idea.
// The input comes as a single number argument.
// The output is a series of lines printed on the console, forming a rectangle of variable size.
