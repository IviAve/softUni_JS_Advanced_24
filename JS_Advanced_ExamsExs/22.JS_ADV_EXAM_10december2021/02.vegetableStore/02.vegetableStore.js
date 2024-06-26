class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let addedTypes = new Set();
        for (let veg of vegetables) {
            let [type, quantity, price] = veg.split(' ');
            quantity = parseFloat(quantity);
            price = parseFloat(price);
            
            let existing = this.availableProducts.find(prod => prod.type === type);
            if (existing) {
                existing.quantity += quantity;
                if (price > existing.price) {
                    existing.price = price;
                }
            } else {
                this.availableProducts.push({ type, quantity, price });
                addedTypes.add(type);
            }
        }
        let addedTypesArray = Array.from(addedTypes);
        return `Successfully added ${addedTypesArray.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let selected of selectedProducts) {
            let [type, quantityStr] = selected.split(' ');
            let quantity = parseFloat(quantityStr);
            let product = this.availableProducts.find(prod => prod.type === type);

            if (!product) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if (quantity > product.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            totalPrice += quantity * product.price;
            product.quantity -= quantity;
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        let product = this.availableProducts.find(prod => prod.type === type);
        if (!product) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (quantity >= product.quantity) {
            product.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        } else {
            product.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`;
        }
    }

    revision() {
        let sortedProducts = this.availableProducts.sort((a, b) => a.price - b.price);
        let output = ["Available vegetables:"];
        for (let product of sortedProducts) {
            output.push(`${product.type}-${product.quantity}-$${product.price.toFixed(2)}`);
        }
        output.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return output.join('\n');
    }
}