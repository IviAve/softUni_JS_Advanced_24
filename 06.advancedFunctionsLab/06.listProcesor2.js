function listProcessor2() {
    
    let result = [];

    function add(string) {
        return(result.push(string));
        

    }

    function remove(string) {
        result = result.filter(item => item !== string);
        return(result);
    }

    function print() {
        return(result.join(','));
    }

    // return {
    //     add,
    //     remove,
    //     print
    // };
}

function processCommands(array) {


    for (let input of array) {
        
    let [command, string] = input.split(' ');
        if (command === 'add') {
            listProcessor2.add(string);
        } else if (command === 'remove') {
            listProcessor.remove(string);
        } else if (command === 'print') {
            listProcessor.print();
        }
    };
}
processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);
processCommands(['add pesho', 'add george', 'add peter', 'remove peter','print']);

