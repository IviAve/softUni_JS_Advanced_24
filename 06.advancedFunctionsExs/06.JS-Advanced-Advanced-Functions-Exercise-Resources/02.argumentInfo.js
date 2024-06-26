function argumentInfo(input) {
    
    let data = {};

    Array.from(arguments).forEach(line =>{
        let type = typeof line;
        console.log(`${type}: ${line}`);

        if (!data[type]) {
            data[type] = 0;
        }
        data[type]++;
    });

    Object.keys(data).sort((a,b) => {
        return data[b] - data[a];

    })
    .forEach(key => console.log(`${key} = ${data[key]}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })


// Write a function that displays information about the arguments which are 
// passed to it (type and value) and a summary 
// about the number of each type in the following format: 
// `{argument type}: {argument value}`
// Print each argument description on a new line. At the end print a tally
//  with counts for each type in descending order, each on a new line in the following format:
// `{type} = {count}`
// If two types have the same count, use order of appearance. 
// Do NOT print anything for types that do not appear in the list of arguments.
// Input
// You will receive a series of arguments passed to your function.
// Output
// Print on the console the type and value of each argument passed into your function.
