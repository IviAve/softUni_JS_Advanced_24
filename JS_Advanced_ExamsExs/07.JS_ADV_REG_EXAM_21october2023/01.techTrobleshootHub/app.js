window.addEventListener('load', solution);

function solution() {
  const employeeElement = document.getElementById('employee');
  const categoryElement = document.getElementById('category');
  const urgencyElement = document.getElementById('urgency');
  const assignedTeamElement = document.getElementById('team');
  const descriptionElement = document.getElementById('description');
  const addBtn = document.getElementById('add-btn');
  const previewList = document.querySelector('.preview-list');
  const pendingList = document.querySelector('.pending-list');
  const resolvedList = document.querySelector('.resolved-list');

  addBtn.addEventListener('click', onNext);

  function onNext(e) {
    e.preventDefault();

    if (employeeElement.value === '' ||
      categoryElement.value === '' ||
      urgencyElement.value === '' ||
      assignedTeamElement.value === '' ||
      descriptionElement.value === '') {
      return;
    }

    const liElementPreview = document.createElement('li');
    liElementPreview.setAttribute('class', 'problem-content');

    const articlePreview = document.createElement('article');

    const employee = document.createElement('p');
    employee.textContent = `From: ${employeeElement.value}`;

    const category = document.createElement('p');
    category.textContent = `Category: ${categoryElement.value}`;

    const urgency = document.createElement('p');
    urgency.textContent = `Urgency: ${urgencyElement.value}`;

    const assignedTeam = document.createElement('p');
    assignedTeam.textContent = `Assigned to: ${assignedTeamElement.value}`;

    const description = document.createElement('p');
    description.textContent = `Description: ${descriptionElement.value}`;

    const editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    const continueBtn = document.createElement('button');
    continueBtn.setAttribute('class', 'continue-btn');
    continueBtn.textContent = 'Continue';

    articlePreview.appendChild(employee);
    articlePreview.appendChild(category);
    articlePreview.appendChild(urgency);
    articlePreview.appendChild(assignedTeam);
    articlePreview.appendChild(description);

    liElementPreview.appendChild(articlePreview);
    liElementPreview.appendChild(editBtn);
    liElementPreview.appendChild(continueBtn);

    previewList.appendChild(liElementPreview);

    const editEmployee = employeeElement.value;
    const editCategory = categoryElement.value;
    const editUrgency = urgencyElement.value;
    const editAssignedTeam = assignedTeamElement.value;
    const editDescription = descriptionElement.value;

    employeeElement.value = '';
    categoryElement.value = '';
    urgencyElement.value = '';
    assignedTeamElement.value = '';
    descriptionElement.value = '';

    addBtn.disabled = true;

    editBtn.addEventListener('click', onEdit);

    function onEdit() {
      employeeElement.value = editEmployee;
      categoryElement.value = editCategory;
      urgencyElement.value = editUrgency;
      assignedTeamElement.value = editAssignedTeam;
      descriptionElement.value = editDescription;

      liElementPreview.remove();
      addBtn.disabled = false;
    }

    continueBtn.addEventListener('click', onContinue);

    function onContinue() {
      const liElementConfirm = document.createElement('li');
      liElementConfirm.setAttribute('class', 'problem-content');

      //const articleElementConfirm = articlePreview.cloneNode(true);
      let articleElementConfirm = document.createElement('article');
      
       articleElementConfirm = articlePreview;

      const resolvedBtn = document.createElement('button');
      resolvedBtn.setAttribute('class', 'resolve-btn');
      resolvedBtn.textContent = 'Resolved';

      liElementConfirm.appendChild(articleElementConfirm);
      liElementConfirm.appendChild(resolvedBtn);
      liElementPreview.remove();

      addBtn.disabled = false;
      pendingList.appendChild(liElementConfirm);

      resolvedBtn.addEventListener('click', onResolved);

      function onResolved() {
        const liElementResolved = document.createElement('li');
        liElementResolved.setAttribute('class', 'problem-content');

       // const articleElementResolved = articleElementConfirm.cloneNode(true);
       let articleElementResolved =document.createElement('article')
         articleElementResolved = articleElementConfirm;

        const clearBtn = document.createElement('button');
        clearBtn.setAttribute('class', 'clear-btn');
        clearBtn.textContent = 'Clear';

        liElementResolved.appendChild(articleElementResolved);
        liElementResolved.appendChild(clearBtn);
        liElementConfirm.remove();

        resolvedList.appendChild(liElementResolved);

        clearBtn.addEventListener('click', onCancel);

        function onCancel() {
          liElementResolved.remove();
          addBtn.disabled = false;
        }
      }
    }
  }
}




