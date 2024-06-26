window.addEventListener("load", solve);

function solve() {
  
  const makeElement = document.getElementById('make');
  const modelElement = document.getElementById('model');
  const yearElement = document.getElementById('year');
  const fuelElement = document.getElementById('fuel');
  const originalPriceElement = document.getElementById('original-cost');
  const sellingPriceElement = document.getElementById('selling-price');

  const submitBtn = document.getElementById('publish');

  const tableBodyList = document.getElementById('table-body');

  const soldCarsList = document.getElementById('cars-list');

  const profitElement = document.getElementById('profit');


  submitBtn.addEventListener('click', onSubmit);
  function onSubmit(e) {
    e.preventDefault();

    const make = makeElement.value;
    const model = modelElement.value;
    const year = yearElement.value;
    const fuel = fuelElement.value;
    const original = Number(originalPriceElement.value);
    const selling = Number(sellingPriceElement.value);

    if (!make || !model || !year || !fuel || !original || !selling || selling <= original) {
      return;
    }

    const trEl = document.createElement('tr');
    trEl.classList.add('row');

    const makeTd = document.createElement('td');
    makeTd.textContent = make;
    
    const modelTd = document.createElement('td');
    modelTd.textContent = model;

    const yearTd = document.createElement('td');
    yearTd.textContent = year;

    const fuelTdEl = document.createElement('td');
    fuelTdEl.textContent = fuel;

    const originalPriceTd = document.createElement('td');
    originalPriceTd.textContent = original;

    const sellingPriceTd = document.createElement('td');
    sellingPriceTd.textContent = selling;

    const tdForButtons = document.createElement('td');

    const editButton = document.createElement('button');
    editButton.classList.add('action-btn', 'edit');
    editButton.textContent = 'Edit';

    const sellButton = document.createElement('button');
    sellButton.classList.add('action-btn', 'sell');
    sellButton.textContent = 'Sell';

    tdForButtons.appendChild(editButton);
    tdForButtons.appendChild(sellButton);

    trEl.appendChild(makeTd);
    trEl.appendChild(modelTd);
    trEl.appendChild(yearTd);
    trEl.appendChild(fuelTdEl);
    trEl.appendChild(originalPriceTd);
    trEl.appendChild(sellingPriceTd);
    trEl.appendChild(tdForButtons);

    tableBodyList.appendChild(trEl);

    makeElement.value = '';
    modelElement.value = '';
    yearElement.value = '';
    fuelElement.value = '';
    originalPriceElement.value = '';
    sellingPriceElement.value = '';

    editButton.addEventListener('click',onEdit);
    function onEdit(e) {
      e.preventDefault();

      makeElement.value = make;
      modelElement.value = model;
      yearElement.value = year;
      fuelElement.value = fuel;
      originalPriceElement.value = original;
      sellingPriceElement.value = selling;

      trEl.remove();
    }

    sellButton.addEventListener('click', onSell);
    function onSell(e) {
      e.preventDefault();

      const liEl = document.createElement('li');
      liEl.classList.add('each-list');

      const makeModelSpanEl = document.createElement('span');
      makeModelSpanEl.textContent = `${make} ${model}`;

      const yearSpanEl = document.createElement('span');
      yearSpanEl.textContent = year;

      const priceSpanEl = document.createElement('span');
      priceSpanEl.textContent = selling - original;

      liEl.appendChild(makeModelSpanEl);
      liEl.appendChild(yearSpanEl);
      liEl.appendChild(priceSpanEl);

      soldCarsList.appendChild(liEl);

      trEl.remove();

      profitElement.textContent = (Number(profitElement.textContent) + (selling - original)).toFixed(2);
    }
  }

}
