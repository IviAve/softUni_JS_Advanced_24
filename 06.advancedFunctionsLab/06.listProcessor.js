function listProcessor(array) {
    
    let result = [];
    //let command = '';


    for (let input of array) {
        
        let [command,string] = input.split(' ');

        if (command === 'add') {
            
            result.push(string);

        }else if (command === 'remove'){

            if (result.includes(string)) {
                
             result = result.filter(strings => strings !== string );
                //result = newResult;
            }

        }else if(command === 'print'){

            console.log(result.join(','));
        }

    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])



// Using a closure, create an inner object to process list commands. The commands supported
//  should be the following:
// •	add <string> - adds the following string in an inner collection.
// •	remove <string> - removes all occurrences of the supplied <string> from 
// the inner collection.
// •	print - prints all elements of the inner collection joined by ",".
// Input
// The input will come as an array of strings - each string represents a 
// command to be executed from the command execution engine.
// Output
// For every print command - you should print on the console the inner collection joined by ",".
