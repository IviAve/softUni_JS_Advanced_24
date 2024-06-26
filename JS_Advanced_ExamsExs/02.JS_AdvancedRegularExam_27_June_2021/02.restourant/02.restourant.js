class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        let actions = [];
        for (let product of products) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (this.budgetMoney >= productTotalPrice) {
                if (this.stockProducts[productName]) {
                    this.stockProducts[productName] += productQuantity;
                } else {
                    this.stockProducts[productName] = productQuantity;
                }
                this.budgetMoney -= productTotalPrice;
                actions.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                actions.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        this.history.push(...actions);
        return actions.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: neededProducts,
                price: price
            };
            let mealCount = Object.keys(this.menu).length;
            if (mealCount === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${mealCount} meals in the menu, other ideas?`;
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        let meals = Object.keys(this.menu);
        if (meals.length === 0) {
            return "Our menu is not ready yet, please come later...";
        }
        return meals.map(meal => `${meal} - $ ${this.menu[meal].price}`).join('\n');
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let neededProducts = this.menu[meal].products;
        for (let product of neededProducts) {
            let [productName, productQuantity] = product.split(' ');
            productQuantity = Number(productQuantity);
            if (!this.stockProducts[productName] || this.stockProducts[productName] < productQuantity) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        for (let product of neededProducts) {
            let [productName, productQuantity] = product.split(' ');
            productQuantity = Number(productQuantity);
            this.stockProducts[productName] -= productQuantity;
        }

        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

let kitchen = new Restaurant(1000);
console.log(kitchen.showTheMenu());

// let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));








// Write a class Restaurant which has the following functionality:
// Constructor
// Should have 4 properties:
// -	budgetMoney - number
// -	menu - object
// -	stockProducts - object
// -	history - array
// At initialization of the Restaurant class, the constructor accepts only the budget! 
// The rest of the properties must be empty!
// Methods
// loadProducts() 
// Accept 1 argument products (array from strings).
// o	Every element in this array is information about the product in the format:
// "{productName} {productQuantity} {productTotalPrice}"
// o	They are separated by a single space
// Example: ["Banana 10 5", "Strawberries 50 30", "Honey 5 50"…]
// This method appends products to our products in stock (stockProducts) 
// under the following circumstances:
// o	If the budget allows us to buy the current product ( {productTotalPrice} <= budget  ), 
// we add it to stockProducts keeping the name and quantity of the meal and we deduct
// the price of the product from our budget. If the current product already exists in
//  stockProducts just add the new quantity to the old one
// o	And finally, whether or not we have added a product to stock or not, we record 
// our action in the history:
// -	If we were able to add the current product:
// "Successfully loaded {productQuantity} {productName}"
// -	If we not:
// "There was not enough money to load {productQuantity} {productName}"
// This method must return all actions joined by a new line!
// addToMenu()
// o	Accept 3 arguments meal (string), needed products (array from strings) and price (number).
// o	Every element into needed products is in format: "{productName} {productQuantity}" 
// They are separated by a single space!
// o	If the meal is not on our menu, append a meal to the object menu. Must have properties
//  products and price!
// o	Check how many meals are on the menu and return one of the following messages: 
// -	One meal: 
// "Great idea! Now with the {meal} we have 1 meal in the menu, other ideas?"
// -	Zero, Two or more meals:
// "Great idea! Now with the {meal} we have {the number of all meals in the menu} meals in the menu, other ideas?"
// o	Otherwise, if we already have this meal return the message:
// "The {meal} is already in the our menu, try something different."
// showTheMenu()
// o	This method just returns all meals from our menu separated by a new line in the format:
// {meal} - $ {meal price}
// {meal} - $ {meal price}
// {meal} - $ {meal price}
// …
// o	If our menu is empty, just return the message:
// "Our menu is not ready yet, please come later..."
// makeTheOrder()
// Accept 1 argument meal (string).
// o	This method searches the menu for a certain meal.
// o	If we do not have the given meal, return the following message:
// "There is not {meal} yet in our menu, do you want to order something else?"
// o	Otherwise, if we have this meal on the menu, we need to check if we have the 
// needed products to make it! If we do not have all the needed products for this meal,
//  return the following message:
// "For the time being, we cannot complete your order ({meal}), we are very sorry..."
// o	If we have this meal on the menu and also, have all the needed products to make it, 
// return the following message:
// "Your order ({meal}) will be completed in the next 30 minutes and will cost you {the current price of the meal}."
// o	You also need to reduce the quantity of all used products from those in 
// stock and add the price of the meal to the total budget.
