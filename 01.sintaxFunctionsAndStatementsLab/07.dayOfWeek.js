function dayOfWeek(input) {

    
    
    switch (input) {
        case 'Monday':
            return(1);
            break;
            case 'Tuesday':
            return(2);

            break;
            case 'Wednesday':
            return(3);

            break;
            case 'Thursday':
            return(4);
            break;
            case 'Friday':
            return(5)
            break;
            case 'Saturday':
            return(6);
            break;
            case 'Sunday':
            return(7);
            break;
    
        default:
            console.log('error');
            break;
    }
    
}

console.log(dayOfWeek('Monday'));
console.log(dayOfWeek('Friday'));
dayOfWeek('Invalid')

// Write a function that prints a number between 1 and 7 when a day of the week 
// is passed to it as a string and an error message if the string is not recognized.
// The input comes as a single-string argument.
// The output should be returned as a result.
