function createPerson(firstName,lastName) {
    let result = {
        firstName,
        lastName,
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        set fullName(value) {
            const [firstName, lastName] = value.split(' ');
            this.firstName = firstName;
            this.lastName = lastName;
        }
    };

    return result;
}


let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla





// Write a JS program which takes first & last names as parameters and 
// returns an object with firstName, lastName and fullName ( "{firstName} {lastName}" )
//  properties which should be all accessible, we discovered that "accessible" 
//  also means "mutable". This means that:
// •	If firstName or lastName have changed, then fullName should also be changed.
// •	If fullName is changed, then firstName and lastName should also be changed.
// •	If fullName is invalid, you should not change the other properties.
// •	 A valid full name is in the format: "{firstName} {lastName}".
