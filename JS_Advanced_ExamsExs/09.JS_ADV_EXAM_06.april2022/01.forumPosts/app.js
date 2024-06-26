window.addEventListener("load", solve);

function solve() {




  const titleElement = document.getElementById('post-title')
  const categoryElement = document.getElementById('post-category');
  const contentElement = document.getElementById('post-content');


  const publishBtn = document.getElementById('publish-btn');

  const reviewList = document.getElementById('review-list');
  const publishList = document.getElementById('published-list');

  const clearBtn = document.getElementById('clear-btn');


  publishBtn.addEventListener('click', onClick);
  function onClick(e) {
    e.preventDefault();


    let title = titleElement.value;
    let category = categoryElement.value;
    let content = contentElement.value;


    if (
      title === '' ||
      category === '' ||
      content === '') {
      return;
    }

    const liEl = document.createElement('li');
    liEl.classList.add('rpost');

    const article = document.createElement('article');

    const addTitle = document.createElement('h4');
    addTitle.textContent = title;

    const addCategory = document.createElement('p');
    addCategory.textContent = `Category: ${category}`;

    const addContent = document.createElement('p');
    addContent.textContent = `Content: ${content}`;


    const editButton = document.createElement('button');
    editButton.classList.add('action-btn', 'edit');
    editButton.textContent = 'Edit';

    const approveButton = document.createElement('button');
    approveButton.classList.add('action-btn', 'approve');
    
    approveButton.textContent = 'Approve';

    article.appendChild(addTitle);
    article.appendChild(addCategory);
    article.appendChild(addContent);



    liEl.appendChild(article);
    
    liEl.appendChild(approveButton);
    liEl.appendChild(editButton);

    reviewList.appendChild(liEl);




    titleElement.value = '';
    categoryElement.value = '';
    contentElement.value = '';


    editButton.addEventListener('click', onEdit);
    function onEdit() {
      //e.preventDefault();




      titleElement.value = title;
      categoryElement.value = category;
      contentElement.value = content;

      liEl.remove();
    }

    approveButton.addEventListener('click', onApprove);
    function onApprove() {
      //e.preventDefault();



      editButton.remove();
      approveButton.remove();

      publishList.appendChild(liEl);
    }

    clearBtn.addEventListener('click', onClear);
    function onClear(e) {
      e.preventDefault();
  
      publishList.textContent = '';
    }

  }

  
}
