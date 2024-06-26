function listOfNames(array) {
    
    let sorted = array.sort((a,b) => (a).localeCompare(b))
    .forEach((el,i) => console.log(`${i + 1}.${el}`)); 
        
    

    // for (let i = 0; i < array.length; i++) {
    //     console.log(`${ i + 1}.${array[i]}`);
        
    // }

    

}

listOfNames(["John", "Bob", "Christina", "Ema"])


// You will receive an array of names. Sort them alphabetically in 
// ascending order and print a numbered list of all the names, each on a new line.