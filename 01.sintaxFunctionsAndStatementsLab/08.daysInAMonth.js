function daysInAMonth(month,year) {
    
    let date = new Date(year, month, 0);
    
    return date.getDate();
}

console.log(daysInAMonth(1, 2012));
daysInAMonth(2, 2021)

// Write a JavaScript function to get the number of days in a month.
// The input comes as two numeric parameters. The first element is the month, the second is the year.
// The output must return the number of days in a month for a given year.
