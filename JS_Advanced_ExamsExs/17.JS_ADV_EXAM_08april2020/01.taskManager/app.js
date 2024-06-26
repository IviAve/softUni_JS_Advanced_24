function solve() {

    document.querySelector('form').addEventListener('submit', onSubmit);

    const [add, open, inProgress, complete] = Array.from(document.querySelectorAll('section'));
    const taskRef = document.getElementById('task');
    const descriptionRef = document.getElementById('description');
    const dateRef = document.getElementById('date');

    function onSubmit(event) {

        event.preventDefault();
        let task = taskRef.value;
        let desc = descriptionRef.value;
        let date = dateRef.value;

        if (!task || !desc || !date) {
            return;
        }

        const article = createArticle(task, desc, date);
        open.children[1].appendChild(article);
        taskRef.value = "";
        descriptionRef.value = "";
        dateRef.value = "";


    }

    function createArticle(task, desc, date) {

        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = task;
        let pDescription = document.createElement("p");
        pDescription.textContent = `Description: ${desc}`;

        let pDate = document.createElement("p");
        pDate.textContent = `Due Date: ${date}`;


        let container = document.createElement('div');
        container.classList.add('flex');

        let btn1 = createBtn("green", "Start", start);

        let btn2 = createBtn("red", "Delete", del);

        container.appendChild(btn1);
        container.appendChild(btn2);

        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(container);

        return article;

    }

    function createBtn(classes, text, handler) {

        let btn = document.createElement("button");
        btn.classList.add(classes);
        btn.textContent = text;
        btn.addEventListener("click", handler);

        return btn;
    }

    function start(ev) {

        const container = ev.currentTarget.parentElement;
        const article = container.parentElement;

        container.innerHTML = "";
        let delBtn = createBtn("red", "Delete", del);
        let finishBtn = createBtn("orange", "Finish", finish);
        container.appendChild(delBtn);
        container.appendChild(finishBtn);
        inProgress.children[1].appendChild(article);

    }

    function del(ev) {
        const article = ev.currentTarget.parentElement.parentElement;
        const container = article.parentElement;
        container.removeChild(article);

    }

    function finish(ev) {

        const btnContainer = ev.currentTarget.parentElement;
        const article = btnContainer.parentElement;
        article.removeChild(btnContainer);
        complete.children[1].appendChild(article);

    }
}