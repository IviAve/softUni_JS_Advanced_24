function solve() {

    
    const taskElement = document.getElementById('task');
    const descriptionElement = document.getElementById('description');
    const dateElement = document.getElementById('date');

    const addBtn = document.getElementById('add');


    const openList = document.querySelector('.orange');
    const inProgressList = document.getElementById('in-progress');
    const completeList = document.querySelector('.green');

    addBtn.addEventListener('click', onClick);


    function onClick(e) {
        e.preventDefault();

        let task = taskElement.value;
        let description = descriptionElement.value;
        let date = dateElement.value;

        if (task === '' || description === '' || date === '') {
            return;
        }

        const article = document.createElement('article');

        const addTask = document.createElement('h3');
        addTask.textContent = task;

        const addDescription = document.createElement('p');
        addDescription.textContent = `Description: ${description}`;

        const addDate = document.createElement('p');
        addDate.textContent = `Due Date: ${date}`;

        let divBtns = document.createElement('div');
        divBtns.setAttribute('class','flex');

        const startButton = document.createElement('button');
        startButton.setAttribute('class','green');
        startButton.textContent = 'Start';

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class','red');
        deleteButton.textContent = 'Delete';

        article.appendChild(addTask);
        article.appendChild(addDescription);
        article.appendChild(addDate);
        divBtns.appendChild(deleteButton);
        divBtns.appendChild(startButton);
        article.appendChild(divBtns);
        openList.appendChild(article);

        descriptionElement.value = '';
        taskElement.value = '';
        dateElement.value = '';


        deleteButton.addEventListener('click', onDelete);
        function onDelete() {


            article.remove();
        }

        startButton.addEventListener('click', onStart);


        function onStart() {

            const startArticle = document.createElement('article');

            const addTask = document.createElement('h3');
            addTask.textContent = task;

            const addDescription = document.createElement('p');
            addDescription.textContent = `Description: ${description}`;

            const addDate = document.createElement('p');
            addDate.textContent = `Due Date: ${date}`;

            let divBtns = document.createElement('div');
            divBtns.setAttribute('class','flex');

            const delBtn = document.createElement('button');
            delBtn.setAttribute('class','red');
            delBtn.textContent = 'Delete';

            const finishButton = document.createElement('button');
            finishButton.setAttribute('class','orange');
            finishButton.textContent = 'Finish';

            startArticle.appendChild(addTask);
            startArticle.appendChild(addDescription);
            startArticle.appendChild(addDate);
            divBtns.appendChild(delBtn);
            divBtns.appendChild(finishButton);
            startArticle.appendChild(divBtns);
            

            inProgressList.appendChild(startArticle);

            article.remove()


            delBtn.addEventListener('click', onDel);
            function onDel() {


                article.remove();
            }

            finishButton.addEventListener('click', onFinish);

            function onFinish() {



                const finishTask = document.createElement('h3');
                addTask.textContent = task;

                const finishDescription = document.createElement('p');
                addDescription.textContent = `Description: ${description}`;

                const finishDate = document.createElement('p');
                addDate.textContent = `Due Date: ${date}`;

                const finishArticle = document.createElement('article');
                finishArticle.appendChild(finishTask);
                finishArticle.appendChild(finishDescription);
                finishArticle.appendChild(finishDate);

                completeList.appendChild(finishArticle);
                
            }

        }


    }

}