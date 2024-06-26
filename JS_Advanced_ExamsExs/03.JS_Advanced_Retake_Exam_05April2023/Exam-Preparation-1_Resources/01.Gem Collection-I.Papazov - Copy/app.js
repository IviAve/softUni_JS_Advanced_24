window.addEventListener("load", solve);

function solve() {
  let gemNameElement = document.getElementById("gem-name");
  let colorElement = document.getElementById("color");
  let caratsElement = document.getElementById("carats");
  let priceElement = document.getElementById("price");
  let typeElement = document.getElementById("type");
  let addButton = document.getElementById("add-btn");
  let previewList = document.getElementById("preview-list");
  let collectionList = document.getElementById("collection");

  addButton.disabled = false;


  addButton.addEventListener('click', addButonClick);

  function addButonClick(ev) {

    ev.preventDefault();

    if (gemNameElement.value === '' ||
      colorElement.value === '' ||
      caratsElement.value === '' ||
      priceElement.value === '' ||
      typeElement.value === '') {

        return;

    }

    if (typeof caratsElement.value === NaN || typeof priceElement === NaN) {
      return;
    }
    let liElement = document.createElement('li');
    liElement.setAttribute('class', 'gem-info');

    let articleEl = document.createElement('article')

    let name = document.createElement('h4');
    name.textContent = `${gemNameElement.value}`;

    let color = document.createElement('p');
    color.textContent = `${colorElement.value}`;

    let carats = document.createElement('p');
    carats.textContent = `${caratsElement.value}`;

    let price = document.createElement('p');
    price.textContent = `${priceElement.value}$`;

    let type = document.createElement('p');
    type.textContent = `${typeElement.value}`;

    let saveBtn = document.createElement("button");
      saveBtn.setAttribute('class', 'save-btn');
      saveBtn.textContent = 'Save to Collection';
  
      let editBtn = document.createElement("button");
      editBtn.setAttribute('class', 'edit-btn');
      editBtn.textContent = 'Edit Information';
  
      let cancelBtn = document.createElement("button");
      cancelBtn.setAttribute('class', 'cancel-btn');
      cancelBtn.textContent = 'Cancel';

      articleEl.appendChild(name);
      articleEl.appendChild(color);
      articleEl.appendChild(carats);
      articleEl.appendChild(price);
      articleEl.appendChild(type);
      
      liElement.appendChild(articleEl);
      liElement.appendChild(saveBtn);
      liElement.appendChild(editBtn);
      liElement.appendChild(cancelBtn);

      previewList.appendChild(liElement);

      let editGemName = gemNameElement.value;
      let editColor = colorElement.value;
      let editCarats = caratsElement.value;
      let editPrice = priceElement.value;
      let editType = typeElement.value;
  

      gemNameElement.value = "";
      colorElement.value = "";
      caratsElement.value = "";
      priceElement.value = "";
      typeElement.value = "";

      addButton.disabled = true;

      saveBtn.addEventListener("click", onSave);
      function onSave() {
        let liElement = document.createElement("li");
      
       let pElement = document.createElement('p');
        pElement.setAttribute('class', 'collection-item');
  
        pElement.textContent = `${editGemName} - Color: ${editColor}/ Carats: ${editCarats}/ Price: ${editPrice}$/ Type: ${editType}`;
  
        liElement.appendChild(pElement);
  
        collectionList.appendChild(liElement);
         previewList = document.querySelector('.gem-info');
        previewList.remove();
        addButton.disabled = false;
      }

      editBtn.addEventListener("click", onEdit);
      function onEdit() {
        gemNameElement.value = editGemName;
        colorElement.value = editColor;
        caratsElement.value = editCarats;
        priceElement.value = editPrice;
        typeElement.value = editType;
  
        liElement.remove();
  
        addButton.disabled = false;
      }
  
      cancelBtn.addEventListener("click", onDelete);
      function onDelete() {
        liElement.remove();
        addButton.disabled = false;
      }




  }




}