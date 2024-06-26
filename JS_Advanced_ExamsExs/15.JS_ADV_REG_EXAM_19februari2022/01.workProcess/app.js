function solve() {
    
        // Select input fields and other necessary elements
        const firstNameInput = document.getElementById('fname');
        const lastNameInput = document.getElementById('lname');
        const emailInput = document.getElementById('email');
        const birthInput = document.getElementById('birth');
        const positionInput = document.getElementById('position');
        const salaryInput = document.getElementById('salary');
        const hireButton = document.getElementById('add-worker');
        const workersTable = document.getElementById('tbody');
        const budgetMessage = document.getElementById('sum');
    
        let budget = 0;
    
        hireButton.addEventListener('click', hireWorker);
    
        function hireWorker(event) {
            event.preventDefault();
    
            // Get input values
            const firstName = firstNameInput.value;
            const lastName = lastNameInput.value;
            const email = emailInput.value;
            const birth = birthInput.value;
            const position = positionInput.value;
            const salary = salaryInput.value;
    
            // Check if any input field is empty
            if (!firstName || !lastName || !email || !birth || !position || !salary) {
                return;
            }
    
            // Create table row and cells
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${email}</td>
                <td>${birth}</td>
                <td>${position}</td>
                <td>${Number(salary).toFixed(2)}</td>
                <td>
                    <button class="edit">Edit</button>
                    <button class="fired">Fired</button>
                </td>
            `;
    
            // Append the row to the table
            workersTable.appendChild(tr);
    
            // Update budget
            budget += Number(salary);
            budgetMessage.textContent = budget.toFixed(2);
    
            // Clear input fields
            firstNameInput.value = '';
            lastNameInput.value = '';
            emailInput.value = '';
            birthInput.value = '';
            positionInput.value = '';
            salaryInput.value = '';
    
            // Add event listeners to the new buttons
            tr.querySelector('.edit').addEventListener('click', () => editWorker(tr));
            tr.querySelector('.fired').addEventListener('click', () => fireWorker(tr));
        }
    
        function editWorker(row) {
            // Get current row data
            const cells = row.children;
            const firstName = cells[0].textContent;
            const lastName = cells[1].textContent;
            const email = cells[2].textContent;
            const birth = cells[3].textContent;
            const position = cells[4].textContent;
            const salary = Number(cells[5].textContent);
    
            // Populate input fields
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            emailInput.value = email;
            birthInput.value = birth;
            positionInput.value = position;
            salaryInput.value = salary;
    
            // Remove row from table
            row.remove();
    
            // Update budget
            budget -= salary;
            budgetMessage.textContent = budget.toFixed(2);
        }
    
        function fireWorker(row) {
            // Get current row salary
            const salary = Number(row.children[5].textContent);
    
            // Remove row from table
            row.remove();
    
            // Update budget
            budget -= salary;
            budgetMessage.textContent = budget.toFixed(2);
        }
    
}
solve()