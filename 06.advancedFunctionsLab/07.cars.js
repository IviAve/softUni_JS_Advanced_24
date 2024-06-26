function cars(commands) {

    const objects = {};

    for (let command of commands) {
        const parts = command.split(' ');
        const action = parts[0];

        if (action === 'create') {
            const name = parts[1];
            const inherits = parts[3];

            if (inherits) {
                //objects[name] = Object.create(objects[inherits]);
                 objects[name] = {};
                 Object.setPrototypeOf(objects[name], objects[inherits]);

            } else {
                objects[name] = {};
            }


        } else if (action === 'set') {
            const name = parts[1];
            const key = parts[2];
            const value = parts[3];
            objects[name][key] = value;
        } else if (action === 'print') {
            // const name = parts[1];
            // const obj = objects[name];
            // const result = [];
            // for (let key in obj) {
            //     if (obj.hasOwnProperty(key)) {
            //         result.push(`${key}:${obj[key]}`);
            //     }
            // }
            // console.log(result.join(','));

            const name = parts[1];
            const obj = objects[name];
            const result = [];

            // Gather properties from the object itself
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    result.push(`${key}:${obj[key]}`);
                }
            }

            // Gather properties from the prototype chain
            let prototypeObj = Object.getPrototypeOf(obj);
            while (prototypeObj) {
                for (let key in prototypeObj) {
                    if (prototypeObj.hasOwnProperty(key) && !obj.hasOwnProperty(key)) {
                        result.push(`${key}:${prototypeObj[key]}`);
                    }
                }
                prototypeObj = Object.getPrototypeOf(prototypeObj);
            }

            console.log(result.join(','));
        }


    }

}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']

);

// Write a closure that can create and modify objects. All created objects
//  should be kept and be accessible by name. You should support the following functionality:
// •	create <name> - creates an object with the supplied <name>

// •	create <name> inherits <parentName> - creates an object with
// the given <name>, that inherits from the parent object with the <parentName>

// •	set <name> <key> <value> - sets the property with key equal
//  to <key> to <value> in the object with the supplied <name>.

// •	print <name> - prints the object with the supplied <name>

// in the format "<key1>:<value1>,<key2>:<value2>…" - the printing
// should also print all inherited properties from parent objects.

// Inherited properties should come after own properties.

// Input
// The input will come as an array of strings - each string represents
// a command to be executed from your closure.
// Output
// For every print command - you should print on the console all
// properties of the object in the above-mentioned format.
// Constraints
// •	All commands will always be valid, there will be no
//  nonexistent or incorrect input.
