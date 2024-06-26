window.addEventListener("load", solve);

function solve() {


    const firstNameElement = document.getElementById('first-name')
    const lastNameElement = document.getElementById('last-name')
    const ageElement = document.getElementById('age');
    const genderElement = document.getElementById('genderSelect');
    const dishInfoElement = document.getElementById('task');

    const submitBtn = document.getElementById('form-btn');
    const inProgresList = document.getElementById('in-progress');
    const finishedList = document.getElementById('finished');
    const clearBtn = document.getElementById('clear-btn');
    const inProgressDishesEl = document.getElementById('progress-count');

    submitBtn.addEventListener('click', onClick);
    function onClick(e) {
        e.preventDefault();

        let firstName = firstNameElement.value;
        let lastName = lastNameElement.value;
        let age = ageElement.value;
        let gender = genderElement.value;
        let dish = dishInfoElement.value;

        if (firstName === '' ||
            lastName === '' ||
            age === '' ||
            gender === '' ||
            dish === '') {
            return;
        }

        const liEl = document.createElement('li');
        liEl.classList.add('each-line');

        const article = document.createElement('article');

        const name = document.createElement('h4');
        name.textContent = `${firstName} ${lastName}`;

        const genderAndAge = document.createElement('p');
        genderAndAge.textContent = `${gender}, ${age}`;

        const dishInfo = document.createElement('p');
        dishInfo.textContent = `Dish description: ${dish}`;


        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete-btn');
        completeButton.textContent = 'Mark as complete';

        article.appendChild(name);
        article.appendChild(genderAndAge);
        article.appendChild(dishInfo);



        liEl.appendChild(article);
        liEl.appendChild(editButton);
        liEl.appendChild(completeButton);

        inProgresList.appendChild(liEl);

        inProgressDishesEl.textContent = Number(inProgressDishesEl.textContent) + 1;

        firstNameElement.value = '';
        lastNameElement.value = '';
        ageElement.value = '';
        genderElement.value = '';
        dishInfoElement.value = '';

        editButton.addEventListener('click', onEdit);
        function onEdit(e) {
            e.preventDefault();
            inProgressDishesEl.textContent = Number(inProgressDishesEl.textContent) - 1;


            firstNameElement.value = firstName;
            lastNameElement.value = lastName;
            ageElement.value = age;
            genderElement.value = gender;
            dishInfoElement.value = dish;

            liEl.remove();
        }

        completeButton.addEventListener('click', onComplete);
        function onComplete(e)  {
            e.preventDefault();
            inProgressDishesEl.textContent = Number(inProgressDishesEl.textContent) - 1;


            editButton.remove();
            completeButton.remove();

            finishedList.appendChild(liEl);
        }
    }

    clearBtn.addEventListener('click',onClear); 
    function onClear (e)  {
        e.preventDefault();

        finishedList.textContent = '';
    }

}
