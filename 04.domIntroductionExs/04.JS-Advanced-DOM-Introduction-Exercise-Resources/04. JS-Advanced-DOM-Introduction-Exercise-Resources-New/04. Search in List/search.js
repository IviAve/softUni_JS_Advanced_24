function search() {
   
   let userWord = document.getElementById('searchText').value ;
   let townElement = Array.from(document.querySelectorAll('#towns li'));
   let match = document.getElementById('result');
   let count = 0;

   for (let town of townElement) {

      if (town.textContent.includes(userWord)) {
         
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         count++;
      }else{

         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
      
   }
   match.textContent = `${count} matches found`;
}



// An HTML page holds a list of towns, a search box, and a [Search] button.
//  Implement the search function to bold and underline the items from the list which
//   include the text from the search box. Also, print the number of items the current
//    search matches in the format `${matches} matches found`.
// Note: It is necessary to clear the results of the previous search.
// Write your JavaScript code in this file:

