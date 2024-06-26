window.addEventListener("load", solve);

function solve() {
  let gemNameElement = document.getElementById("gem-name");
  let colorElement = document.getElementById("color");
  let caratsElement = document.getElementById("carats");
  let priceElement = document.getElementById("price");
  let typeElement = document.getElementById("type");
  let addBtnElement = document.getElementById("add-btn");
  let previewList = document.getElementById("preview-list");
  let collectionList = document.getElementById("collection");


  addBtnElement.addEventListener('click', addButonClickHand);


  function addButonClickHand(e) {
    //   e.preventDefault();

    const inputElements = [

      gemNameElement,
      colorElement,
      caratsElement,
      priceElement,
      typeElement,
    ];

    //check for empty el first metod
    //   if (gemNameElement.value == ''
    //     || colorElement.value == ''
    //     || caratsElement.value == ''
    //     || priceElement.value == ''
    //     || typeElement.value == '') {
    //     return;
    //   }

    // check for empty elements second metod with use array and some;

    if (inputElements.some(element => element.value === '')) {
      return;
    }
    if (typeof caratsElement.value === NaN || typeof priceElement === NaN) {
      return;
    }

    // create new preview elements;

    const previewElements = createPreviewElement(

      gemNameElement.value,
      colorElement.value,
      caratsElement.value,
      priceElement.value,
      typeElement.value,
    );

    previewList.appendChild(previewElements);

    // e.currentTarget.disabled = true;
    e.currentTarget.setAttribute('disabled', 'disabled');

    inputElements.forEach(element => element.value = '');

    function createPreviewElement(name, color, carats, price, type) {


      //start li
      const liElement = document.createElement('li');
      liElement.classList.add('gem-info')

      const articleHeaderEl = document.createElement('h4');
      articleHeaderEl.textContent = name;

      const pColorEl = document.createElement('p');
      pColorEl.textContent = `Color: ${color}`;

      const pCaratsEl = document.createElement('p');
      pCaratsEl.textContent = `Carats: ${carats}`;

      const pPriceEl = document.createElement('p');
      pPriceEl.textContent = `Price: ${price}$`;

      const pTypeEl = document.createElement('p');
      pTypeEl.textContent = `Type: ${type}`;



      const articleElement = document.createElement('article');
      articleElement.appendChild(articleHeaderEl);
      articleElement.appendChild(pColorEl);
      articleElement.appendChild(pCaratsEl);
      articleElement.appendChild(pPriceEl);
      articleElement.appendChild(pTypeEl);

      const saveButton = document.createElement('button');
      saveButton.classList.add('save-btn');
      saveButton.textContent = 'Save to Collection';

      const editButton = document.createElement('button');
      editButton.classList.add('edit-btn');
      editButton.textContent = 'Edit Information';

      const cancelButton = document.createElement('button');
      cancelButton.classList.add('cansel-btn');
      cancelButton.textContent = 'Cancel';

      liElement.appendChild(articleElement);
      liElement.appendChild(saveButton);
      liElement.appendChild(editButton);
      liElement.appendChild(cancelButton);


      //end li

      editButton.addEventListener('click', (e) => {

        gemNameElement.value = name;
        colorElement.value = color;
        caratsElement.value = carats;
        priceElement.value = price;
        typeElement.value = type;

        e.currentTarget.parentElement.remove();
        addBtnElement.removeAttribute('disabled');



        //editBtn.addEventListener("click", onEdit);
        //   function onEdit() {
        //     gemNameElement.value = editGemName;
        //     colorElement.value = editColor;
        //     caratsElement.value = editCarats;
        //     priceElement.value = editPrice;
        //     typeElement.value = editType;

        //     liElement.remove();

        //     addBtnElement.disabled = false;
        //   }

      });

      saveButton.addEventListener('click', (e) => {

        const pColectionItem = document.createElement('p');
        pColectionItem.classList.add('colection-item');
        pColectionItem.textContent = `${name} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`


        //pElement.textContent = `${editGemName} - Color: ${editColor}/ Carats: ${editCarats}/ Price: ${editPrice}$/ Type: ${editType}`;
        const liColectionItem = document.createElement('li');
        liColectionItem.appendChild(pColectionItem);

        collectionList.appendChild(liColectionItem);

        e.currentTarget.parentElement.remove();

        addBtnElement.disabled = false;
        


        //saveBtn.addEventListener("click", onSave);
        //   function onSave() {
        //     let liElement = document.createElement("li");

        //     pElement = document.createElement('p');
        //     pElement.setAttribute('class', 'collection-item');

        //     pElement.textContent = `${editGemName} - Color: ${editColor}/ Carats: ${editCarats}/ Price: ${editPrice}$/ Type: ${editType}`;

        //     liElement.appendChild(pElement);

        //     collectionUlElement.appendChild(liElement);
        //     let previewLi = document.querySelector('.gem-info');
        //     previewLi.remove();
        //     addBtnElement.disabled = false;
        //   }

      });

      cancelButton.addEventListener('click', (e) => {

        e.currentTarget.parentElement.remove();

        //addBtnElement.removeAttribute('disabled');
        addBtnElement.disabled = false;
        //addButton.disabled = false;

        //   deleteBtn.addEventListener("click", onDelete);
        //   function onDelete() {
        //     liElement.remove();
        //     addBtnElement.disabled = false;
        //   }

      });

      return liElement;

      // START OF LI
      //   let liElement = document.createElement("li");
      //   liElement.setAttribute('class', 'gem-info');


      //   let articleElement = document.createElement("article");

      //   let gemName = document.createElement("h4");
      //   gemName.textContent = `${gemNameElement.value}`;


      //   let color = document.createElement("p");
      //   color.textContent = `Color: ${colorElement.value}`;

      //   let carats = document.createElement("p");
      //   carats.textContent = `Carats: ${caratsElement.value}`;

      //   let price = document.createElement("p");
      //   price.textContent = `Price: ${priceElement.value}$`;

      //   let type = document.createElement("p");
      //   type.textContent = `Type: ${typeElement.value}`;

      //   let saveBtn = document.createElement("button");
      //   saveBtn.setAttribute('class', 'save-btn');
      //   saveBtn.textContent = 'Save to Collection';

      //   let editBtn = document.createElement("button");
      //   editBtn.setAttribute('class', 'edit-btn');
      //   editBtn.textContent = 'Edit Information';

      //   let deleteBtn = document.createElement("button");
      //   deleteBtn.setAttribute('class', 'cancel-btn');
      //   deleteBtn.textContent = 'Cancel';

      //   articleElement.appendChild(gemName);
      //   articleElement.appendChild(color);
      //   articleElement.appendChild(carats);
      //   articleElement.appendChild(price);
      //   articleElement.appendChild(type);

      //   liElement.appendChild(articleElement);
      //   liElement.appendChild(saveBtn);
      //   liElement.appendChild(editBtn);
      //   liElement.appendChild(deleteBtn);

      //END OF LI

    }








    //   previewUlElement.appendChild(liElement);


    //   let editGemName = gemNameElement.value;
    //   let editColor = colorElement.value;
    //   let editCarats = caratsElement.value;
    //   let editPrice = priceElement.value;
    //   let editType = typeElement.value;

    //   gemNameElement.value = "";
    //   colorElement.value = "";
    //   caratsElement.value = "";
    //   priceElement.value = "";
    //   typeElement.value = "";

    //   addBtnElement.disabled = true;

    //   

    //   



  }

}
