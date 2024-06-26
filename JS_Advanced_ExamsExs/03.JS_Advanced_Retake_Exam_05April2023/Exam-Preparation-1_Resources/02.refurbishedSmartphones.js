class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (
            typeof model !== 'string' || model.trim() === '' ||
            typeof storage !== 'number' || storage <= 0 ||
            typeof price !== 'number' || price <= 0 ||
            typeof condition !== 'string' || condition.trim() === ''
        ) {
            throw new Error("Invalid smartphone!");
        }

        const smartphone = { model, storage, price: parseFloat(price.toFixed(2)), condition };
        this.availableSmartphones.push(smartphone);
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        const smartphoneIndex = this.availableSmartphones.findIndex(s => s.model === model);
        if (smartphoneIndex === -1) {
            throw new Error(`${model} was not found!`);
        }

        const smartphone = this.availableSmartphones[smartphoneIndex];
        let soldPrice = smartphone.price;

        if (smartphone.storage < desiredStorage) {
            const storageDifference = smartphone.storage - desiredStorage;
            
                if (storageDifference <= 128) {
                    soldPrice *= 0.90;
                } else {
                    soldPrice *= 0.80;
                }
            
            
        }else{
            soldPrice = soldPrice;
        }

        soldPrice = parseFloat(soldPrice.toFixed(2));
        this.availableSmartphones.splice(smartphoneIndex, 1);
        this.soldSmartphones.push({ model: smartphone.model, storage: smartphone.storage, soldPrice });
        this.revenue += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    upgradePhones() {
        if (this.availableSmartphones.length === 0) {
            throw new Error("There are no available smartphones!");
        }

        this.availableSmartphones.forEach(phone => {
            phone.storage *= 2;
        });

        return [
            "Upgraded Smartphones:",
            ...this.availableSmartphones.map(phone => 
                `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`
            )
        ].join('\n');
    }

    salesJournal(criteria) {
        if (!['storage', 'model'].includes(criteria)) {
            throw new Error("Invalid criteria!");
        }

        const sortedSmartphones = this.soldSmartphones.sort((a, b) => {
            if (criteria === 'storage') {
                return b.storage - a.storage;
            } else if (criteria === 'model') {
                return a.model.localeCompare(b.model);
            }
        });

        return [
            `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`,
            `${this.soldSmartphones.length} smartphones sold:`,
            ...sortedSmartphones.map(phone => 
                `${phone.model} / ${phone.storage} GB / ${phone.soldPrice.toFixed(2)}$`
            )
        ].join('\n');
    }
}

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
console.log(retailer.upgradePhones());

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// retailer.sellSmartphone('Samsung S20 Ultra', 256);
// retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
// console.log(retailer.salesJournal('model'));






// Write a class RefurbishedSmartphones, which implements the following functionality:
// Functionality
// Constructor
// Should have these 4 properties:
// •	retailer – String
// •	availableSmartphones – Array
// •	soldSmartphones – Array
// •	revenue – default: 0
// At the initialization of the RefurbishedSmartphones class, the constructor 
// accepts the retailer. The revenue has a default value of 0! The rest of the 
// properties must be empty!
// Hint: You can add more properties to help you finish the task.  

// addSmartphone (model, storage, price, condition) - This method should add a 
// new smartphone to the retailer. The method accepts 4 arguments:
// •	If any of the following requirements is NOT fulfilled, an error with the 
// following message should be thrown: "Invalid smartphone!"
// o	Model – non-empty string;
// o	Storage – positive integer number;
// o	Price – positive number;
// o	Condition – non-empty string;
// Hint: Zero is also a positive number.
// •	Otherwise, you should add the smartphone, with
//  properties: {model, storage, price, condition} to the availableSmartphones array and return:
// "New smartphone added: {model} / {storage} GB / {condition} condition - {price}$"
// •	When returning the result, the Price must be rounded to the second decimal point!
// sellSmartphone (model, desiredStorage) – This method should search for a 
// smartphone with the given model in the availableSmartphones array, and then 
// sell it. Accepts 2 arguments.
// •	If a smartphone with the given model cannot be found, an error with the
//  following message should be thrown:
// "{model} was not found!"
// •	If you find the smartphone with the given model, you should look up its storage. 
// The person who wants to buy it has a simple request. He is looking for a smartphone 
// with a storage that is more or equal to his desired storage. To ensure the sale of 
// the smartphone you must make a bargain:
// o	If the found smartphone’s storage is more than or equal to the desiredStorage – 
// the price stays the same!
// o	If the difference between the smartphone’s storage and the desiredStorage is
//  less or equal to 128 GB – the price gets deducted by 10%!
// o	If the difference between the smartphone’s storage and the desiredStorage
//  is more than 128 GB  – the price gets deducted by 20%!
// •	You should remove the smartphone from the availableSmartphones array and 
// add it to the soldSmartphones array in the following format: {model, storage, soldPrice}
// •	Finally, you must add the soldPrice to the revenue and return:
// "{model} was sold for {soldPrice}$"
// Note: soldPrice must be rounded to the second decimal point!
// upgradePhones () - This method should find the storage for every available 
// smartphone and double it, then return them separated by a new line in format:
// " Upgraded Smartphones:
// {model} / {storage} GB / {condition} condition / {price}$
// {model} / {storage} GB / {condition} condition / {price}$"
// Note: price must be rounded to the second decimal point!
// Note: storage must be updated to availableSmartphones array!
// •	If there are no available smartphones, throw:
// "There are no available smartphones!"
// salesJournal (criteria) – This method accepts 1 argument.  It should sort 
// the sold smartphones, based on a given criteria. The two possible criteria are – "storage" or "model"
// •	If the given criteria do not match either of the possible criteria,
//  an error with the following message should be thrown:
// "Invalid criteria!"
// •	If the given criteria is "storage" – the sold smartphones must be
//  sorted by their storage in descending order;
// •	If the given criteria is "model" – the sold smartphones must be
//  sorted alphabetically by their model;
// •	Finally, return all sorted sold smartphones separated by a new line in format:
// "{ RetailerName} has a total income of { revenue }$
// {soldSmartphonesCount} smartphones sold:
// {model} / {storage} GB / {price}$
// {model} / {storage} GB / {price}$"
// …
// Note: revenue and price must be rounded to the second decimal point!
