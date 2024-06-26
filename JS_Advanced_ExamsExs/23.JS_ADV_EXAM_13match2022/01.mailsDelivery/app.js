function solve() {


    const recipientElement = document.getElementById('recipientName');
    const titleElement = document.getElementById('title');
    const messageElement = document.getElementById('message');

    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');

    const mailsList = document.getElementById('list');
    const sendMailsList = document.querySelector('.sent-list');
    const deleteList = document.querySelector('.delete-list');

    addBtn.addEventListener('click', onClick);
    

    function onClick(e) {
        e.preventDefault();

        let recipient = recipientElement.value;
        let title = titleElement.value;
        let message = messageElement.value;

        if (recipient === '' || title === '' || message === '') {
            return;
        }

        const liEl = document.createElement('li');

        const addTitle = document.createElement('h4');
        addTitle.textContent = `Title: ${title}`;

        const addRecipient = document.createElement('h4');
        addRecipient.textContent = `Recipient Name: ${recipient}`;

        const addMessage = document.createElement('span');
        addMessage.textContent = message;

        let div = document.createElement('div');
        div.setAttribute('id', 'list-action');

        const sendButton = document.createElement('button');
        sendButton.setAttribute('id', 'send');
        sendButton.textContent = 'Send';

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('id', 'delete');
        deleteButton.textContent = 'Delete';

        liEl.appendChild(addTitle);
        liEl.appendChild(addRecipient);
        liEl.appendChild(addMessage);
        div.appendChild(deleteButton);
        div.appendChild(sendButton);
        liEl.appendChild(div);
        mailsList.appendChild(liEl);

        titleElement.value = '';
        recipientElement.value = '';
        messageElement.value = '';

        sendButton.addEventListener('click', onSend);
        

        function onSend() {
            const sendLi = document.createElement('li');

            const toRecipient = document.createElement('span');
            toRecipient.textContent = `To: ${recipient}`;

            const sendTitle = document.createElement('span');
            sendTitle.textContent = `Title: ${title}`;

            const sendDiv = document.createElement('div');
            sendDiv.classList.add('btn');

            const delBtn = document.createElement('button');
            delBtn.setAttribute('class', 'delete');
            delBtn.textContent = 'Delete';

            delBtn.addEventListener('click',onDel);
            function onDel ()  {
                const delLi = document.createElement('li');

                const delRecipient = document.createElement('span');
                delRecipient.textContent = `To: ${recipient}`;

                const delTitle = document.createElement('span');
                delTitle.textContent = `Title: ${title}`;

                delLi.appendChild(delRecipient);
                delLi.appendChild(delTitle);
                deleteList.appendChild(delLi);

                sendLi.remove();
            }

            sendDiv.appendChild(delBtn);
            sendLi.appendChild(toRecipient);
            sendLi.appendChild(sendTitle);
            sendLi.appendChild(sendDiv);
            sendMailsList.appendChild(sendLi);

            liEl.remove();
        }

        deleteButton.addEventListener('click', onDelete);
        function onDelete() {
            const delLi = document.createElement('li');

            const delRecipient = document.createElement('span');
            delRecipient.textContent = `To: ${recipient}`;

            const delTitle = document.createElement('span');
            delTitle.textContent = `Title: ${title}`;

            delLi.appendChild(delRecipient);
            delLi.appendChild(delTitle);
            deleteList.appendChild(delLi);

            liEl.remove();
        }
    }

   

    resetBtn.addEventListener('click', onReset);

    function onReset(e) {
        e.preventDefault();
        titleElement.value = '';
        recipientElement.value = '';
        messageElement.value = '';

        
    }




}
solve()