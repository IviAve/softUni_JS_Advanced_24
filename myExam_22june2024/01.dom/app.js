window.addEventListener('load', solve);

function solve() {
    //TODO...

    
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const fromDateInput = document.getElementById('from-date');
    const toDateInput = document.getElementById('to-date');

    const nextButton = document.getElementById('next-btn');

    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');

    const statusHeader = document.getElementById('status');

    
    nextButton.disabled = false;

    
    [firstNameInput, lastNameInput, fromDateInput, toDateInput].forEach(input => {
        input.addEventListener('input', () => {
            nextButton.disabled = !(
                firstNameInput.value &&
                lastNameInput.value &&
                fromDateInput.value &&
                toDateInput.value &&
                new Date(fromDateInput.value) < new Date(toDateInput.value)
            );
        });
    });

    nextButton.addEventListener('click',onNext);
    function onNext(e) {
        e.preventDefault()
      
        if (!firstNameInput.value || !lastNameInput.value || !fromDateInput.value || !toDateInput.value) {
            return;
        }

        const fromDate = new Date(fromDateInput.value);
        const toDate = new Date(toDateInput.value);
        if (fromDate >= toDate) {
            return;
        }

        
        const li = document.createElement('li');
        li.className = 'vacation-content'; //class

        const article = document.createElement('article');

        const nameHeading = document.createElement('h3');
        nameHeading.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;
        
        const fromDateParagraph = document.createElement('p');
        fromDateParagraph.textContent = `From date: ${fromDateInput.value}`;
        

        const toDateParagraph = document.createElement('p');
        toDateParagraph.textContent = `To date: ${toDateInput.value}`;
        

       

        const editButton = document.createElement('button');
        editButton.className = 'edit-btn';
        editButton.textContent = 'Edit';
        

        const continueButton = document.createElement('button');
        continueButton.className = 'continue-btn';
        continueButton.textContent = 'Continue';
        
        article.appendChild(nameHeading);
        article.appendChild(fromDateParagraph);
        article.appendChild(toDateParagraph);
       
        li.appendChild(article);

        li.appendChild(editButton);
        li.appendChild(continueButton);


        

        infoList.appendChild(li);

        
        firstNameInput.value = '';
        lastNameInput.value = '';
        fromDateInput.value = '';
        toDateInput.value = '';

        nextButton.disabled = true;

        
        editButton.addEventListener('click', onEdit);
        function onEdit() {
            
            const [firstName, lastName] = nameHeading.textContent.replace('Name: ', '').split(' ');
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            fromDateInput.value = fromDateParagraph.textContent.replace('From date: ', '');
            toDateInput.value = toDateParagraph.textContent.replace('To date: ', '');

            
            infoList.removeChild(li);
            nextButton.disabled = false;
        }

        continueButton.addEventListener('click',onContinue);
        function onContinue() {
            
            confirmList.appendChild(li);
            li.removeChild(editButton);
            li.removeChild(continueButton);

            const confirmButton = document.createElement('button');
            confirmButton.className = 'confirm-btn';
            confirmButton.textContent = 'Confirm';
            

            const cancelButton = document.createElement('button');
            cancelButton.className = 'cancel-btn';
            cancelButton.textContent = 'Cancel';
            

            li.appendChild(confirmButton);
            li.appendChild(cancelButton);


            confirmButton.addEventListener('click',onConfirm);
            function onConfirm() {
                confirmList.removeChild(li);
                statusHeader.className = 'vacation-confirmed';
                statusHeader.textContent = 'Vacation Requested';
                nextButton.disabled = false;
            }

            cancelButton.addEventListener('click',onCancel);
            function onCancel() {
                confirmList.removeChild(li);
                statusHeader.className = 'vacation-cancelled';
                statusHeader.textContent = 'Cancelled Vacation';
                nextButton.disabled = false;
            }
        }
    }

    
    statusHeader.addEventListener('click', (e) => {
        e.preventDefault();
        location.reload();
    });
}




