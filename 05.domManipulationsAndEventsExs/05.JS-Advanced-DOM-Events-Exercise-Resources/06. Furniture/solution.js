// function solve() {

//   function solve() {
//     let textarea = document.querySelectorAll('textarea');
//     let tbody = document.querySelector('tbody');

//     [...document.querySelectorAll('button')].forEach(btn => btn.addEventListener('click', execute));
//     function execute(btn) {
//       if (!textarea[0].value) return;
//       if (btn.target.textContent === 'Generate') {
//         let input = JSON.parse(textarea[0].value);
//         input.forEach(furniture => {
//           tbody.innerHTML += `<tr>
//             <td><img src=${furniture.img}></td>
//             <td><p>${furniture.name}</p></td>
//             <td><p>${furniture.price}</p></td>
//             <td><p>${furniture.decFactor}</p></td>
//             <td><input type="checkbox"/></td>
//             </tr>`
//         })
//       } else {
//         let furnitureName = [];
//         let totalPrice = 0;
//         let averageDecFactor = 0;
//         [...document.querySelectorAll('input:checked')]
//           .forEach(furniture => {
//             let parentRow = furniture.parentNode.parentNode;
//             averageDecFactor += Number(parentRow.children[3].textContent);
//             totalPrice += Number(parentRow.children[2].textContent);
//             furnitureName.push(parentRow.children[1].textContent);
//           });
//         textarea[1].textContent += `Bought furniture: ${furnitureName.join(', ')}\n`;
//         textarea[1].textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
//         textarea[1].textContent += `Average decoration factor: ${averageDecFactor / furnitureName.length}`;
//       }
//     }
//   }

// }

function solve() {

  let [inputText, resultText] = document.querySelectorAll('#container textarea');
  let [generalBtn, buyBtn] = document.querySelectorAll('#container button');
  let tableBody = document.querySelector('.table tbody')

  generalBtn.addEventListener('click', onGenerateHandler);
  buyBtn.addEventListener('click', onBuyHandler);

  function onGenerateHandler(event) {

    if (!inputText.value) {
      return;
    }

    let inputArr = JSON.parse(inputText.value);



    for (const el of inputArr) {

      let tableRowEl = createTableRow(el);
      tableBody.append(tableRowEl);
    }
    inputText.value = '';
  }

  function createTableRow(data) {
    let tr = document.createElement('tr');

    tr.innerHTML = 
    "<td>" +
    `<img src=${data.img}>`+
    "</td>" +
    "<td>" +
    `<p>${data.name}</p>`+
    "</td>"+
   "<td>"+
    `<p>${data.price}</p>`+
    "</td>" +
    "<td>" +
    `<p>${data.decFactor}</p>`+
    "</td>" +
    "<td>" +
    `<input type='checkbox'>`+
    "</td>"


    

    return tr;
  }

  function onBuyHandler(event) {

    let checkBox = Array.from(document.querySelectorAll('input'));
    let items = checkBox.filter(x => x.checked);

    let names = [];

    let totalPrice = 0;
    let sumDecFactor = 0;

    for (let el of items) {

      let trRef = el.parentElement.parentElement;

      let [imgTd, nameTd, priceTd, decFactorTd] = trRef.children;
      let name = nameTd.children[0].textContent;
      let price = priceTd.children[0].textContent;
      price = Number(price);

      let decFactor = decFactorTd.children[0].textContent;
      decFactor = Number(decFactor)
      names.push(name);
      totalPrice += price;
      sumDecFactor += decFactor;

    }
    let resultBuff = `Bought furniture: ${names.join(', ')}\n`;
    resultBuff += `Total price: ${totalPrice.toFixed(2)}\n`;

    resultBuff += `Average decoration factor: ${sumDecFactor / items.length}`;
    resultText.value = resultBuff;
  }
}