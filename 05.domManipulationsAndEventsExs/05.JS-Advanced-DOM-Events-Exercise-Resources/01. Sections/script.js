function create(words) {
   
   let parentElement = document.getElementById('content');
   let elements = words;

   for (const word of elements) {
      
      let div = document.createElement('div');
      let p = document.createElement('p');
      let text = document.createTextNode(word);

      p.append(text);
      p.style.display = 'none';
      div.append(p);
      div.addEventListener('click', function(event){
      event.target.children[0].style.display = 'block';
      });
      parentElement.append(div);

   }
}



// You will receive an array of strings. For each string, create a div with
//  a paragraph with the string in it. Each paragraph is initially hidden (display:none).
//   Add a click event listener to each div that displays the hidden paragraph. Finally, 
//   you should append all divs to the element with an id "content".