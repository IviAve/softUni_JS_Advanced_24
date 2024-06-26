window.addEventListener("load", solve);

function solve() {
  let snowNameElement = document.getElementById("snowman-name");
  let heightElement = document.getElementById("snowman-height");
  let locationElement = document.getElementById("location");
  let creatorElement = document.getElementById("creator-name");
  let specialAtrElement = document.getElementById("special-attribute");
  let addBtnElement = document.querySelector(".add-btn");
  let snowmanPreviewElement = document.querySelector(".snowman-preview");
  let yourSnowmanElement = document.querySelector(".snow-list");

  let main = document.getElementById("hero");
  let bodyElement = document.querySelector(".body");
  let backImg = document.getElementById('back-img');



  addBtnElement.addEventListener('click', onPublish);
  function onPublish(e) {
    e.preventDefault();
    

    if (snowNameElement.value == ''
      || heightElement.value == ''
      || locationElement.value == ''
      || creatorElement.value == ''
      || specialAtrElement.value == '') {
      return;
    }

    let liElement = document.createElement("li");
    liElement.setAttribute('class', 'snow-info');


    let articleElement = document.createElement("article");

    let btnContainer = document.createElement("div");
    btnContainer.setAttribute("class", "btn-container");

    let snowName = document.createElement("p");
    snowName.textContent = `Name: ${snowNameElement.value}`;


    let heightSnow = document.createElement("p");
    heightSnow.textContent = `Height: ${heightElement.value}`;

    let location = document.createElement("p");
    location.textContent = `Location: ${locationElement.value}`;

    let creator = document.createElement("p");
    creator.textContent = `Creator: ${creatorElement.value}`;

    let specAttribute = document.createElement("p");
    specAttribute.textContent = `Attribute: ${specialAtrElement.value}`;

    let editBtn = document.createElement("button");
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    let nextBtn = document.createElement("button");
    nextBtn.setAttribute('class', 'next-btn');
    nextBtn.textContent = 'Next';

    articleElement.appendChild(snowName);
    articleElement.appendChild(heightSnow);
    articleElement.appendChild(location);
    articleElement.appendChild(creator);
    articleElement.appendChild(specAttribute);

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);

    liElement.appendChild(articleElement);
    liElement.appendChild(btnContainer)


    // liElement.appendChild(editBtn);
    // liElement.appendChild(nextBtn);
    

    snowmanPreviewElement.appendChild(liElement);

    let editSnowName = snowNameElement.value;
    let editHeight = heightElement.value;
    let editLocation = locationElement.value;
    let editCreator = creatorElement.value;
    let editSpecAtr = specialAtrElement.value;

    snowNameElement.value = '';
    heightElement.value = '';
    locationElement.value ='';
    creatorElement.value = '';
    specialAtrElement.value = '';

    addBtnElement.disabled = true;

    editBtn.addEventListener("click", onEdit);

    function onEdit() {
      snowNameElement.value = editSnowName;
      heightElement.value = editHeight;
      locationElement.value = editLocation;
      creatorElement.value = editCreator;
      specialAtrElement.value = editSpecAtr;

      liElement.remove();
      addBtnElement.disabled = false;
    }
    
    nextBtn.addEventListener("click", onNext);

    function onNext() {
      let liElementConfirm = document.createElement("li");
      liElementConfirm.setAttribute("class", "snowman-content");

      let articleElementContinue = document.createElement("article");
      articleElementContinue = articleElement;

      let sendBtn = document.createElement("button");
      sendBtn.setAttribute("class", "send-btn");
      sendBtn.textContent = "Send";

      articleElementContinue.appendChild(sendBtn);
      liElementConfirm.appendChild(articleElementContinue);//liElement but must be liElementConfirm

      liElement.remove();
      // editBtn.remove();
      // nextBtn.remove();


      yourSnowmanElement.appendChild(liElementConfirm);// articleElement but must be liElementConfirm

      sendBtn.addEventListener("click", onConfirm);
      function onConfirm() {
        main.remove();
        let backBtn = document.createElement("button");
        backBtn.setAttribute("class", "back-btn");
        backBtn.textContent = "Back";
        backImg.hidden = false;

        bodyElement.appendChild(backBtn);

        backBtn.addEventListener("click", onBack);
        function onBack() {
          window.location.reload();
        }
      }
    }
    
    
  }
  

}



