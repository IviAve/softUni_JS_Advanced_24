function printAnArrayWithAGivenDelimiter(arr,delimiter) {

    let result = arr.join(delimiter);
    //console.log(result);
   return(result);
    
}

printAnArrayWithAGivenDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'
)
printAnArrayWithAGivenDelimiter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
)

// The input comes as two parameters – an array of strings and a string.
//  The second parameter is the delimiter.
// The output is the elements of the array, printed on the console,
//  each element separated from the others by the given delimiter.
