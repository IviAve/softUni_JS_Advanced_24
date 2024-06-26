window.addEventListener('load', solve);

function solve() {

    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const contNumElement = document.getElementById('contact-number');
    const classTypeElement = document.getElementById('class-type');
    const classTimeElement = document.getElementById('class-time');
    const nextBtn = document.getElementById('next-btn');
    const previewList = document.querySelector('.class-info');
    const confirmList = document.querySelector('.confirm-class');
    const mainElement = document.getElementById("main");
    const bodyElement = document.getElementById("body");

    nextBtn.addEventListener('click', onNext);

    function onNext(e) {
        e.preventDefault()
        if (nameElement.value === "" ||
            emailElement.value === "" ||
            contNumElement.value === "" ||
            classTypeElement.value === "" ||
            classTimeElement.value === "") {
            return;
        }

        let liNextElement = document.createElement("li");
        liNextElement.setAttribute("class", "info-item");

        let article = document.createElement("article");
        article.setAttribute('class', "personal-info");

        let name = document.createElement("p");
        name.textContent = nameElement.value;

        let email = document.createElement("p");
        email.textContent = emailElement.value;

        let contNum = document.createElement("p");
        contNum.textContent = contNumElement.value;

        let classType = document.createElement("p");
        classType.textContent = classTypeElement.value;

        let classTime = document.createElement("p");
        classTime.textContent = classTimeElement.value;

        let editBtn = document.createElement("button");
        editBtn.setAttribute("class", 'edit-btn');
        editBtn.textContent = "Edit";

        let continueBtn = document.createElement("button");
        continueBtn.setAttribute("class", "continue-btn");
        continueBtn.textContent = "Continue";

        article.appendChild(name);
        article.appendChild(email);
        article.appendChild(contNum);
        article.appendChild(classType);
        article.appendChild(classTime);

        liNextElement.appendChild(article);

        liNextElement.appendChild(editBtn);
        liNextElement.appendChild(continueBtn);

        previewList.appendChild(liNextElement)

        let editedName = nameElement.value;
        let editedEmail = emailElement.value;
        let editedContNum = contNumElement.value;
        let editedClassType = classTypeElement.value;
        let editedClassTime = classTimeElement.value;

        nameElement.value = ""
        emailElement.value = "";
        contNumElement.value = "";
        classTypeElement.value = "";
        classTimeElement.value = "";


        nextBtn.disabled = true;

        editBtn.addEventListener("click", onEdit)

        function onEdit() {

            nameElement.value = editedName;
            emailElement.value = editedEmail;
            contNumElement.value = editedContNum;
            classTypeElement.value = editedClassType;
            classTimeElement.value = editedClassTime;

            nextBtn.disabled = false;

            liNextElement.remove()
        }
        continueBtn.addEventListener("click", onContinue)

        function onContinue() {
            let liElementContinue = document.createElement("li");
            liElementContinue.setAttribute("class", "continue-info");

            let articleContinue = document.createElement("article")
            articleContinue = article;

            let cancelBtn = document.createElement("button");
            cancelBtn.setAttribute("class", "cancel-btn");
            cancelBtn.textContent = "Cancel"

            let confirmBtn = document.createElement("button")
            confirmBtn.setAttribute("class", "confirm-btn");
            confirmBtn.textContent = "Confirm"

            liElementContinue.appendChild(articleContinue);

            liElementContinue.appendChild(cancelBtn);
            liElementContinue.appendChild(confirmBtn);

            confirmList.appendChild(liElementContinue)

            liNextElement.remove()

            cancelBtn.addEventListener("click", onCancel)

            function onCancel() {
                liElementContinue.remove()
                nextBtn.disabled = false;
            }

            confirmBtn.addEventListener("click", onConfirm)

            function onConfirm() {
                mainElement.remove()
                let header1 = document.createElement("h1")
                header1.setAttribute("id", "thank-you");
                header1.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!"

                let backBtn = document.createElement("button")
                backBtn.setAttribute("id", "done-btn")
                backBtn.textContent = "Done"

                bodyElement.appendChild(header1)
                bodyElement.appendChild(backBtn)

                backBtn.addEventListener("click", onBack)

                function onBack() {
                    location.reload()
                }
            }
        }

    }
}




