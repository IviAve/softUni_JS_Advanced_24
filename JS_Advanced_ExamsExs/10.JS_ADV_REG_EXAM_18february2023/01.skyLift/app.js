window.addEventListener('load', solve);

function solve() {

    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let countElement = document.getElementById('people-count');
    let daysElement = document.getElementById('days-count');
    let fromDateElement = document.getElementById('from-date')
    let nextBtn = document.getElementById('next-btn');
    let main = document.getElementById('main');
    let infoList = document.querySelector('.ticket-info-list');
    let confirmList = document.querySelector('.confirm-ticket');
    let body = document.getElementById("body");


    nextBtn.addEventListener('click', onNext);
    function onNext(e) {
        e.preventDefault();
        if (firstNameElement.value == ''
            || lastNameElement.value == ''
            || daysElement.value == ''
            || countElement.value == ''
            || fromDateElement.value == '') {
            return;
        }
        let liElementInfo = document.createElement('li');
        liElementInfo.setAttribute('class', 'ticket');

        let articleElementInfo = document.createElement("article");

        let fullName = document.createElement('h3');
        fullName.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

        let fromDate = document.createElement('p');
        fromDate.textContent = `From date: ${fromDateElement.value}`

        let numDays = document.createElement('p');
        numDays.textContent = `For ${daysElement.value} days`;

        let numPeople = document.createElement('p');
        numPeople.textContent = `For ${countElement.value} people`;

       

        

        let editBtn = document.createElement("button");
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        let continueBtn = document.createElement("button");
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        articleElementInfo.appendChild(fullName);
        articleElementInfo.appendChild(fromDate);
        articleElementInfo.appendChild(numDays);
        articleElementInfo.appendChild(numPeople);

        liElementInfo.appendChild(articleElementInfo);
        liElementInfo.appendChild(editBtn);
        liElementInfo.appendChild(continueBtn);

        infoList.appendChild(liElementInfo);

        let editFirstName = firstNameElement.value;
        let editLastName = lastNameElement.value;
        let editFromDate = fromDateElement.value;
        let editcountElement = countElement.value;
        let editdaysElement = daysElement.value;

        firstNameElement.value = "";
        lastNameElement.value = "";
        daysElement.value = "";
        countElement.value = "";
        fromDateElement.value = "";
        nextBtn.disabled = true;

        editBtn.addEventListener("click", onEdit);
        function onEdit() {
            firstNameElement.value = editFirstName;
            lastNameElement.value = editLastName;
            daysElement.value = editdaysElement;
            countElement.value = editcountElement;
            fromDateElement.value = editFromDate;

            liElementInfo.remove();

            nextBtn.disabled = false;
        }
        continueBtn.addEventListener('click', onContinue);
        function onContinue() {
            let liElementconfirm = document.createElement('li');
            liElementconfirm.setAttribute('class', 'ticket-content');

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
                main.remove();
                let thankYou = document.createElement('h1');
                thankYou.setAttribute("id", "thank-you");
                thankYou.textContent = "Thank you, have a nice day!";
                let backBtn = document.createElement('button');
                backBtn.textContent = "Back";
                backBtn.setAttribute("id", "back-btn");
                body.appendChild(thankYou);
                body.appendChild(backBtn);
                backBtn.addEventListener("click", onBack);
                function onBack() {
                    location.reload();

                }

            }

            cancelBtn.addEventListener('click', onCancel);
            function onCancel() {
                liElementconfirm.remove();
                nextBtn.disabled = false;
            }

        }

    }

}




