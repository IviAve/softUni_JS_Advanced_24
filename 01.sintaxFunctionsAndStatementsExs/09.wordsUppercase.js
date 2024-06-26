function wordsUppercase(str) {
    
    let transformText = str.toUpperCase();
    let wordArr = transformText.split(/\W+/);
    let filterText = wordArr.filter( x => !!x);
    console.log(filterText.join(', '));
}

wordsUppercase('Hi, how are you?')
wordsUppercase('hello')

// Write a program that extracts all words from a passed-in string and converts them to upper case. 
// The extracted words in the upper case must be printed on a single line separated by ", ".
// The input comes as a single string argument - the text to extract and convert words from.
// The output should be a single line containing the converted string.
// •	You may need to use a Regular Expression or check for all delimiters 
// that can be found in a sentence (ex. ",", " ", "!", "?" and so on).