function solve() {

   const createButton = document.querySelector('.btn.create');
   const postsSection = document.querySelector('.site-content main section');
   const archiveSection = document.querySelector('.archive-section ol');

   createButton.addEventListener('click', (event) => {
      event.preventDefault();

      const author = document.getElementById('creator').value.trim();
      const title = document.getElementById('title').value.trim();
      const category = document.getElementById('category').value.trim();
      const content = document.getElementById('content').value.trim();

      
         // Create the article element
         const article = document.createElement('article');

         const titleH1 = document.createElement('h1');
         titleH1.textContent = title;

         const pCategory = document.createElement('p');
         pCategory.innerHTML = `Category: <strong>${category}</strong>`;

         const pAuthor = document.createElement('p');
         pAuthor.innerHTML = `Creator: <strong>${author}</strong>`;

         const pContent = document.createElement('p');
         pContent.textContent = content;

         const buttonsDiv = document.createElement('div');
         buttonsDiv.classList.add('buttons');

         const deleteBtn = document.createElement('button');
         deleteBtn.textContent = 'Delete';
         deleteBtn.classList.add('btn', 'delete');

         const archiveBtn = document.createElement('button');
         archiveBtn.textContent = 'Archive';
         archiveBtn.classList.add('btn', 'archive');

         // Append elements
         buttonsDiv.appendChild(deleteBtn);
         buttonsDiv.appendChild(archiveBtn);
         article.appendChild(titleH1);
         article.appendChild(pCategory);
         article.appendChild(pAuthor);
         article.appendChild(pContent);
         article.appendChild(buttonsDiv);

         postsSection.appendChild(article);

         // Clear input fields
         document.getElementById('creator').value = '';
         document.getElementById('title').value = '';
         document.getElementById('category').value = '';
         document.getElementById('content').value = '';

         // Add event listeners to buttons
         deleteBtn.addEventListener('click', function () {
            article.remove();
         });

         archiveBtn.addEventListener('click', function () {
            const archiveItem = document.createElement('li');
            archiveItem.textContent = title;

            // Add to archive list
            archiveSection.appendChild(archiveItem);

            // Sort archive list
            Array.from(archiveSection.getElementsByTagName('li'))
               .sort((a, b) => a.textContent.localeCompare(b.textContent))
               .forEach(li => archiveSection.appendChild(li));

            // Remove the article
            article.remove();
         })
      
   })


}


// Unexpected error: expected '
// <h2>Articles</h2>
// <article><h1>Arrays</h1>
// <p>Category:Programming</p>
// <p>Author:John</p>
// <p>IloveJavaScript</p>
// <divclass="buttons">
// <buttonclass="btndelete">Delete</button>
// <buttonclass="btnarchive">Archive</button>
// </div></article>'
//  to equal 
//  '<h2>Articles</h2>
//  <article><h1>Arrays</h1>
//  <p>Category:<strong>Programming</strong></p>
//  <p>Creator:<strong>John</strong></p>
//  <p>IloveJavaScript</p>
//  <divclass="buttons"><buttonclass="btndelete">Delete</button
//  ><buttonclass="btnarchive">Archive</button></div></article>'



