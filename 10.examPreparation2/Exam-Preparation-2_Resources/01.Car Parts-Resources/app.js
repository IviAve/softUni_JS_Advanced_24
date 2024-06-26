window.addEventListener('load', solve);

function solve() {

        //TODO
        const carModelInput = document.getElementById('car-model');
        const carYearInput = document.getElementById('car-year');
        const partNameInput = document.getElementById('part-name');
        const partNumberInput = document.getElementById('part-number');
        const conditionInput = document.getElementById('condition');
    
        const nextButton = document.getElementById('next-btn');
        const completeImg = document.getElementById('complete-img');
        const completeText = document.getElementById('complete-text');
        const infoList = document.querySelector('.info-list');
        const confirmList = document.querySelector('.confirm-list');
    
        
        nextButton.addEventListener('click', () => {
            const carModel = carModelInput.value.trim();
            const carYear = carYearInput.value.trim();
            const partName = partNameInput.value.trim();
            const partNumber = partNumberInput.value.trim();
            const condition = conditionInput.value.trim();
    
            
            if (
                carModel === '' || 
                partName === '' || 
                partNumber === '' || 
                condition === '' ||
                !carYear || 
                isNaN(carYear) || 
                carYear < 1980 || 
                carYear > 2023
            ) {
                return;
            }
    
            
            const li = document.createElement('li');
            li.classList.add('part-content');
    
            const article = document.createElement('article');
    
            const p1 = document.createElement('p');
            p1.textContent = `Car Model: ${carModel}`;
    
            const p2 = document.createElement('p');
            p2.textContent = `Car Year: ${carYear}`;
    
            const p3 = document.createElement('p');
            p3.textContent = `Part Name: ${partName}`;
    
            const p4 = document.createElement('p');
            p4.textContent = `Part Number: ${partNumber}`;
    
            const p5 = document.createElement('p');
            p5.textContent = `Condition: ${condition}`;
    
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(p3);
            article.appendChild(p4);
            article.appendChild(p5);
    
            li.appendChild(article);
    
            
            const editButton = document.createElement('button');
            editButton.classList.add('edit-btn');
            editButton.textContent = 'Edit';
    
            
            editButton.addEventListener('click', () => {
                carModelInput.value = carModel;
                carYearInput.value = carYear;
                partNameInput.value = partName;
                partNumberInput.value = partNumber;
                conditionInput.value = condition;
    
                infoList.removeChild(li);
                nextButton.disabled = false;
            });
    
            
            const continueButton = document.createElement('button');
            continueButton.classList.add('continue-btn');
            continueButton.textContent = 'Continue';
    
            
            continueButton.addEventListener('click', () => {
                infoList.removeChild(li);
                confirmList.appendChild(li);
    
                
                editButton.remove();
                continueButton.remove();
    
                
                const confirmButton = document.createElement('button');
                confirmButton.classList.add('confirm-btn');
                confirmButton.textContent = 'Confirm';
    
                confirmButton.addEventListener('click', () => {
                    confirmList.removeChild(li);
                    nextButton.disabled = false;
                    completeImg.style.visibility = 'visible';
                    completeText.textContent = 'Part is Ordered!';
                });
    
                const cancelButton = document.createElement('button');
                cancelButton.classList.add('cancel-btn');
                cancelButton.textContent = 'Cancel';
    
                cancelButton.addEventListener('click', () => {
                    confirmList.removeChild(li);
                    nextButton.disabled = false;
                });
    
                li.appendChild(confirmButton);
                li.appendChild(cancelButton);
            });
    
            li.appendChild(editButton);
            li.appendChild(continueButton);
    
            
            infoList.appendChild(li);
    
            
            carModelInput.value = '';
            carYearInput.value = '';
            partNameInput.value = '';
            partNumberInput.value = '';
            conditionInput.value = '';
            nextButton.disabled = true;
    
          
            completeImg.style.visibility = 'hidden';
            completeText.textContent = '';
        });
    
        const inputs = [carModelInput, carYearInput, partNameInput, partNumberInput, conditionInput];
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                nextButton.disabled = inputs.some(input => input.value.trim() === '');
            });
        });
       
};




