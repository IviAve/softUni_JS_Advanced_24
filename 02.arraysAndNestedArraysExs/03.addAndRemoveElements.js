function addAndRemoveElements(array) {
    
    let newArr = [];
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        count++;
        if (command === 'add') {
            newArr.push(count);
        } else if (command === 'remove') {
            newArr.pop();
        }

    }
    if (newArr.length === 0) {
        console.log('Empty');
    }else {
        console.log(newArr.join('\n'));
    }
}

addAndRemoveElements(['add', 
'add', 
'add', 
'add']

)
addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
)
addAndRemoveElements(['remove', 
'remove', 
'remove']
)

// Write a JS function that adds and removes numbers to/from an array. 
// You will receive a command which can either be "add" or "remove". 
// The initial number is 1. 
// Upon receiving an "add" command you should add the current number to your array. 
// Upon receiving the "remove" command you should remove the last entered number,
//  currently existent in the array.
// Each input command should increase that number, regardless of what it is.
// The input comes as an array of strings. Each element holds a command. 
// The output is the element of the array, each printed on a new line.
//  In case of an empty array, just print "Empty".