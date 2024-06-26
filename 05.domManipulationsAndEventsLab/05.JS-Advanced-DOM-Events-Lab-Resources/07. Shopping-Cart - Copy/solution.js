function solve() {

    let productsDataRef = document.querySelectorAll('.product');
    let resultRef = document.querySelector('textarea');

    let resultObj = {};
    for (const productData of productsDataRef) {
        let productName = productData.querySelector('.product-title');
        let productPrice = productData.querySelector('.product-line-price');
        let productButton = productData.querySelector('.add-product');

        productButton.addEventListener('click', () => {
            let name = productName.textContent;
            let price = Number(productPrice.textContent);

            if (!resultObj[name]) {
                resultObj[name] = 0;
            }
            resultObj[name] += price;

            resultRef.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
        });
    }

    let checkoutButton = document.querySelector('.checkout')
    checkoutButton.addEventListener('click', () => {
        let list = Object.keys(resultObj);
        let sum = list.reduce((sum, price) => sum + resultObj[price], 0);
        resultRef.value += `You bought ${list.join(', ')} for ${sum.toFixed(2)}.`;

        for (const productData of productsDataRef) {
            let productButton = productData.querySelector('.add-product');
            productButton.setAttribute('disabled', 'disabled');

        }
        checkoutButton.setAttribute('disabled', 'disabled');
    });


}


// You will be given some products that you should be able to add to your cart.
//  Each product will have a name, picture, and price.
// When the "Add" button is clicked, append the current product to the textarea in
//  the following format: "Added {name} for {money} to the cart.\n". The price
//   must be fixed to the second digit.
// When the button "Checkout" is clicked, calculate the total money that you
// need to pay for the products that are currently in your cart. Append the
//  result to the textarea in the following format:
// "You bought {list} for {totalPrice}."
// The list should contain only the unique products, separated by ", ". The
// total price should be rounded to the second decimal point.
// Also, after clicking over "Checkout" and every from above is done you should
// disable all buttons. (You can't add products or checkout again if once the checkout button is clicked).
