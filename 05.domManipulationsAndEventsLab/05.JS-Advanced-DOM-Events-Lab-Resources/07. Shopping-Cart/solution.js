function solve() {
   const addProductButtons = document.querySelectorAll('.add-product');
   const textareaElement = document.querySelector('textarea');
   const checkoutButton = document.querySelector('.checkout');

   let cart = {};

   checkoutButton.addEventListener('click', (event) => {
      const totalPrice = Object.values(cart).reduce((sum, price) => sum + price, 0);
      const list = Object.keys(cart).join(', ');
      textareaElement.value += `You bought ${list} for ${totalPrice.toFixed(2)}.`

      addProductButtons.forEach(button => button.setAttribute('disabled', 'disabled'));      
      event.currentTarget.setAttribute('disabled', 'disabled');
   });

   function addProductHandler(event) {
      const productElement = event.currentTarget.parentElement.parentElement;

      const title = productElement.querySelector('.product-title').textContent;
      const price = Number(productElement.querySelector('.product-line-price').textContent);

      console.log(title);
      console.log(price);

      if (!cart[title]) {
         cart[title] = 0;
      }

      cart[title] += price;

      textareaElement.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`
   }

   addProductButtons.forEach(button => button.addEventListener('click', addProductHandler));
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
