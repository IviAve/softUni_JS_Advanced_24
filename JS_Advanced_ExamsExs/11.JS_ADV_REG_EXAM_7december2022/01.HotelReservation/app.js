window.addEventListener('load', solve);

function solve() {


    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let dateInElement = document.getElementById('date-in');
    let dateOutElement = document.getElementById('date-out');
    let countElement = document.getElementById('people-count');
    let nextBtn = document.getElementById('next-btn');
    let infoList = document.querySelector('.info-list');
    let confirmList = document.querySelector('.confirm-list');
    let verification = document.getElementById('verification');


    nextBtn.addEventListener('click', onNext)
    function onNext(e) {
        e.preventDefault();
        if (firstNameElement.value == '' ||
             lastNameElement.value == '' ||
             dateInElement.value == '' ||
             dateOutElement.value == '' ||
             countElement.value == '' ||
             new Date(dateInElement.value) >= new Date(dateOutElement.value)) {
            return;
        }
        let liElementInfo = document.createElement('li');
        liElementInfo.setAttribute('class', 'reservation-content');

        let articleElementInfo = document.createElement("article");

        let fullName = document.createElement('h3');
        fullName.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

        let dateIn = document.createElement('p');
        dateIn.textContent = `From date: ${dateInElement.value}`;

        let dateOut = document.createElement('p');
        dateOut.textContent = `To date: ${dateOutElement.value}`;

        let numPople = document.createElement('p');
        numPople.textContent = `For ${countElement.value} people`;

        let editBtn = document.createElement("button");
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        let continueBtn = document.createElement("button");
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        articleElementInfo.appendChild(fullName);
        articleElementInfo.appendChild(dateIn);
        articleElementInfo.appendChild(dateOut);
        articleElementInfo.appendChild(numPople);

        liElementInfo.appendChild(articleElementInfo);
        
        liElementInfo.appendChild(editBtn);
        liElementInfo.appendChild(continueBtn);

        infoList.appendChild(liElementInfo);

        let editFirstName = firstNameElement.value;
        let editLastName = lastNameElement.value;
        let editDateIn = dateInElement.value;
        let editDateOut = dateOutElement.value;
        let editcountElement = countElement.value;

        firstNameElement.value = "";
        lastNameElement.value = "";
        dateInElement.value = "";
        dateOutElement.value = "";
        countElement.value = "";

        nextBtn.disabled = true;

        editBtn.addEventListener("click", onEdit);
        function onEdit() {
            firstNameElement.value = editFirstName;
            lastNameElement.value = editLastName;
            dateInElement.value = editDateIn;
            dateOutElement.value = editDateOut;
            countElement.value = editcountElement;


            liElementInfo.remove();

            nextBtn.disabled = false;
        }
        continueBtn.addEventListener('click', onContinue);
        function onContinue() {
            let liElementconfirm = document.createElement('li');
            liElementconfirm.setAttribute('class', 'reservation-content');

            let articleElementContinue = document.createElement("article");
            articleElementContinue = articleElementInfo;

            let confirmBtn = document.createElement("button");
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent = 'Confirm';

            let cancelBtn = document.createElement("button");
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Cancel';


            liElementconfirm.appendChild(articleElementContinue);
            liElementconfirm.appendChild(confirmBtn);
            liElementconfirm.appendChild(cancelBtn);
            liElementInfo.remove();

            confirmList.appendChild(liElementconfirm)

            confirmBtn.addEventListener('click', onConfirm);
            function onConfirm() {
                liElementconfirm.remove();
                nextBtn.disabled = false;

                verification.setAttribute('class', 'reservation-confirmed');
                verification.textContent = 'Confirmed.';
            }

            cancelBtn.addEventListener('click', onCancel);
            function onCancel() {

                liElementconfirm.remove();
                nextBtn.disabled = false;

                verification.setAttribute('class', 'reservation-cancelled');
                verification.textContent = 'Cancelled.';

            }

        }

    }

    }



    
    
