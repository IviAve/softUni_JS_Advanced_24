function solve() {
    document.querySelector('#container  button').addEventListener('click', addMove)
 
    function addMove(ev) {
        ev.preventDefault()
        document.querySelector('#archive button').addEventListener('click', clear)
        let [name, hall, ticketPrice] = Array.from(document.querySelectorAll('input'));
        let typeOfPrice = Number(ticketPrice.value);
        const moveSection = document.querySelector('#movies').children[1];
        const archiveSection = document.querySelector('#archive').children[1];
        const createMovie = createEl('li');
        const createArchive = createEl('li');
        const createDiv = createEl('div')
        let tecketsSold = createEl('input', '', 'Tickets Sold');
        if ((name.value != '') && (hall.value != '') && (Number(ticketPrice.value) >= 0)&& (ticketPrice.value != '') && !isNaN(typeOfPrice)) {
            createMovie.appendChild(createEl('span', name.value));
            createMovie.appendChild(createEl('strong', `Hall: ${hall.value}`));
            createDiv.appendChild(createEl('strong', Number(ticketPrice.value).toFixed(2)));
            createDiv.appendChild(tecketsSold);
            createDiv.appendChild(createEl('button', 'Archive', '_', archive))
            createMovie.appendChild(createDiv);
            moveSection.appendChild(createMovie);
        }
        name.value = '';
        hall.value = '';
        ticketPrice.value = '';
 
        function archive(ev) {
            let currentTicketsSold = ev.target.parentElement.children[1].value;
            let currentTicketPrice = ev.target.parentElement.children[0].textContent;
            let totalAmount = Number(currentTicketsSold) * Number(currentTicketPrice);
            if (!isNaN(totalAmount) && (totalAmount >= 0) && currentTicketsSold != '') {
                createMovie.children[1].textContent = `Total amount: ${totalAmount.toFixed(2)}`;
                createMovie.children[2].remove();
                createMovie.appendChild(createEl('button', 'Delete', '_', remove))
                archiveSection.appendChild(createMovie)
            }
        }
 
        function remove(ev) {
            ev.target.parentElement.remove()
        }
 
        function clear() {
            let children = document.querySelector('#archive ul').children;
            let childrenLength = children.length
            for (let i = 0; i < childrenLength; i++) {
                children[0].remove()
            }
        }
    }
 
    function createEl(type, content, placeholder, event) {
        const createElement = document.createElement(type);
        createElement.textContent = content;
        if (placeholder && (placeholder != '_')) {
            createElement.placeholder = placeholder;
        }
        if (event) {
            createElement.addEventListener('click', event)
        }
        return createElement
    }
}
