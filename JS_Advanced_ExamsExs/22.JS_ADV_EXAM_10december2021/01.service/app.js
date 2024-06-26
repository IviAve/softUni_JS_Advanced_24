window.addEventListener('load', solve);

// function solve() {

//     const productTypeElement = document.getElementById('type-product');
//     const descriptionElement = document.getElementById('description');
//     const clientNameElement = document.getElementById('client-name')
//     const clientPhoneElement = document.getElementById('client-phone');

//     const sendBtn = document.querySelector('#right form button');

//     const receivedList = document.getElementById('received-orders h2 img');
//     const completedList = document.getElementById('completed-orders');

//     const clearButton = document.querySelector('.clear-btn')

//     sendBtn.addEventListener('submit', onSend);

//     function onSend(e) {
//         e.preventDefault();

//         if (descriptionElement.value === '' ||
//             clientNameElement.value === '' ||
//             clientPhoneElement.value === '') {

//             return;
//         }

//         let div = document.createElement('div');
//         div.setAttribute('class', 'container');

//         let type = document.createElement('h2');
//         type.textContent = `Product type for repair: ${productTypeElement.value}`;

//         let clientInfo = document.createElement( 'h3');
//         clientInfo.textContent = `Client information: ${clientNameElement.value}, ${clientPhoneElement.value}`;

//         let description = document.createElement('h4');
//         description.textContent = `Description of the problem: ${descriptionElement.value}`;

//         let startButton = document.createElement('button');
//         startButton.setAttribute('class', 'start-btn');
//         startButton.textContent = 'Start repair';


//         let finishButton = document.createElement('button');
//         finishButton.setAttribute('class', 'finish-btn');
//         finishButton.textContent = 'Finish repair';

//         finishButton.disabled = true;

//         div.appendChild(type);
//         div.appendChild(clientInfo);
//         div.appendChild(description);
//         div.appendChild(startButton);
//         div.appendChild(finishButton);

//         receivedList.appendChild(div);

//         clientNameElement.value = '';
//         clientPhoneElement.value = '';
//         descriptionElement.value = '';


//         startButton.addEventListener('click',onStart);

//         function onStart(e){

//         }



//     }


// }

function solve() {
    
    const sendBtn = document.querySelector('#right form button');
    const receivedOrders = document.getElementById('received-orders');
    const completedOrders = document.getElementById('completed-orders');
    const clearBtn = document.querySelector('.clear-btn');

    sendBtn.addEventListener('click', sendForm);

    function sendForm(event) {
        event.preventDefault();

        const type = document.getElementById('type-product').value;
        const description = document.getElementById('description').value;
        const clientName = document.getElementById('client-name').value;
        const clientPhone = document.getElementById('client-phone').value;

        
        if (!description || !clientName || !clientPhone) {
            return;
        }

        
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('container');

        const h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${type}`;
        const h3 = document.createElement('h3');
        h3.textContent = `Client information: ${clientName}, ${clientPhone}`;
        const h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${description}`;

        const startBtn = document.createElement('button');
        startBtn.classList.add('start-btn');
        startBtn.textContent = 'Start repair';
        const finishBtn = document.createElement('button');
        finishBtn.classList.add('finish-btn');
        finishBtn.textContent = 'Finish repair';
        finishBtn.disabled = true;

        startBtn.addEventListener('click', () => startRepair(startBtn, finishBtn));
        finishBtn.addEventListener('click', () => finishRepair(containerDiv, startBtn, finishBtn));

        containerDiv.appendChild(h2);
        containerDiv.appendChild(h3);
        containerDiv.appendChild(h4);
        containerDiv.appendChild(startBtn);
        containerDiv.appendChild(finishBtn);

        receivedOrders.appendChild(containerDiv);

        
        document.getElementById('description').value = '';
        document.getElementById('client-name').value = '';
        document.getElementById('client-phone').value = '';
    }

    function startRepair(startBtn, finishBtn) {
        startBtn.disabled = true;
        finishBtn.disabled = false;
    }

    function finishRepair(containerDiv, startBtn, finishBtn) {
        finishBtn.disabled = true;
        startBtn.remove();
        finishBtn.remove();
        completedOrders.appendChild(containerDiv);
    }

    clearBtn.addEventListener('click', clearCompletedOrders);

    function clearCompletedOrders() {
        while (completedOrders.firstChild) {
            completedOrders.removeChild(completedOrders.firstChild);
        }
    }
}