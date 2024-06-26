class ChristmasDinner {
    constructor(budget) {
        this._budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(newBudget) {
        if (newBudget < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = newBudget;
    }

    shopping(product) {
        let [type, price] = product;
        if (this.budget < price) {
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`;
    }

    recipes(recipe) {
        let { recipeName, productsList } = recipe;
        for (let product of productsList) {
            if (!this.products.includes(product)) {
                throw new Error("We do not have this product");
            }
        }
        this.dishes.push({ recipeName, productsList });
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (!this.dishes.find(d => d.recipeName === dish)) {
            throw new Error("We do not have this dish");
        }
        if (this.guests.hasOwnProperty(name)) {
            throw new Error("This guest has already been invited");
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let attendance = [];
        for (let guest in this.guests) {
            let dish = this.guests[guest];
            let products = this.dishes.find(d => d.recipeName === dish).productsList.join(", ");
            attendance.push(`${guest} will eat ${dish}, which consists of ${products}`);
        }
        return attendance.join("\n");
    }
}