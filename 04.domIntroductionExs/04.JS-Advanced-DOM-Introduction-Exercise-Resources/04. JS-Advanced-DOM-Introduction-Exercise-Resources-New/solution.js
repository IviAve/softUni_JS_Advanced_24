function solve() {
  
  let string = document.getElementById('text').value;
 
 
  let convention = document.getElementById('naming-convention').value;
 
  let resultRef = document.getElementById('result');
 
 
 
  string = string.split(' ');
  let resultText = [];
 
  let isError = false;
 
  switch (convention) {
    case 'Camel Case':
      let firstWord = string.shift();
       firstWord = firstWord.toLowerCase();
      resultText.push(firstWord);
 
      for (let word of string) {
        word = word.toLowerCase();
        let firstLetter = word.substring(0, 1);
        firstLetter = firstLetter.toUpperCase();
        let result = firstLetter + word.substring(1);
        resultText.push(result)
      } break;
 
    case "Pascal Case":
      for (let word of string) {
        word = word.toLowerCase()
        let firstLetter = word.substring(0, 1);
        firstLetter = firstLetter.toUpperCase();
        let result = firstLetter + word.substring(1);
        resultText.push(result)
      } break;
 
    default: isError = true; break;
  }
  if (isError) {
    resultRef.textContent = 'Error!'
  } else {
    resultText = resultText.join('');
    resultRef.textContent = resultText;
  }


}

// An HTML file is given and your task is to write a function that takes two string parameters as 
// an input and transforms the first parameter to the type required by the second parameter.
// •	The first parameter will be the text that you need to modify depending on the second parameter.
//  The words in it will always be separated by space.
// •	The second parameter will be either "Camel Case" or "Pascal Case". In case of different input,
//  your output should be "Error!"
// When the button is clicked the function should convert the first string to either of the cases.
//  The output should consist of only one word - the string you have modified. Once your output is done,
//   you should set it as HTML to the <span> element. For more information, see the examples below
