class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error("Not enough space in the cellar.");
        }

        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false
        });

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const wine = this.wines.find(w => w.wineName === wineName);

        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }

        wine.paid = true;
        this.bill += price;

        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const wineIndex = this.wines.findIndex(w => w.wineName === wineName);

        if (wineIndex === -1) {
            throw new Error("The wine, you're looking for, is not found.");
        }

        const wine = this.wines[wineIndex];

        if (!wine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines.splice(wineIndex, 1);

        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (wineType) {
            const filteredWines = this.wines.filter(w => w.wineType === wineType);

            if (filteredWines.length === 0) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }

            return filteredWines.map(wine => `${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Has Paid" : "Not Paid"}.`).join("\n");
        } else {
            const emptySlots = this.space - this.wines.length;
            const wineInfo = this.wines
                .sort((a, b) => a.wineName.localeCompare(b.wineName))
                .map(wine => `${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Has Paid" : "Not Paid"}.`)
                .join("\n");

            return `You have space for ${emptySlots} bottles more.\nYou paid ${this.bill}$ for the wine.\n${wineInfo}`;
        }
    }
}



// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));


// Output 1
// You reserved a bottle of Sauvignon Blanc Marlborough White wine.
// You reserved a bottle of Cabernet Sauvignon Napa Valley Red wine.
// Uncaught Error Error: Not enough space in the cellar.

// Input 2
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));


// Output 2
// You bought a Sauvignon Blanc Marlborough for a 120$.
// Uncaught Error Error: Bodegas Godelia Mencía is not in the cellar.

// Input 3
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));


// Output 3
// You drank a bottle of Sauvignon Blanc Marlborough.
// Uncaught Error Error: Cabernet Sauvignon Napa Valley need to be paid before open the bottle.


// Input 4
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
// console.log(selection.cellarRevision('Rose'));


// Output 4
// You reserved a bottle of Bodegas Godelia Mencía Rose wine.
// Bodegas Godelia Mencía > Rose - Not Paid.

// Input 5
const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());


// Output 5
// You have space for 2 bottles more.
// You paid 144$ for the wine.
// Bodegas Godelia Mencía > Rose - Has Paid.
// Cabernet Sauvignon Napa Valley > Red - Not Paid.
// Sauvignon Blanc Marlborough > White - Not Paid.








// Write a class WineSelection, which implements the following functionality:
// Functionality
// Constructor
// Should have these 3 properties:
// •	space – Number
// •	wines – Array (empty)
// •	bill - number
// At the initialization of the WineSelection class, the constructor accepts the space.
// Hint: You can add more properties to help you finish the task.  

// reserveABottle (wineName, wineType, price)
// The wineName and wineType are of type string and price is type number. 
// •	If there's not enough space in the cellar for the bottle, throw an Error:
//               "Not enough space in the cellar."
// •	Otherwise, this function should add the wine, with the properties: 
// wineName, wineType, price, paid: default false, to the wines array and return:
// "You reserved a bottle of {wineName} {wineType} wine."

// payWineBottle( wineName, price ) 
// The wineName is type string and price is type number.
// •	If the wine is not found, throw an Error:
// "{wineName} is not in the cellar."
// •	If the wine has already paid, throw an Error:
// "{wineName} has already been paid."
// •	Otherwise, this function set paid to true on the found wine, 
// add price of the bottle to bill and return:
// "You bought a {wineName} for a {price}$."

// openBottle(wineName) 
// •	If the wine is not found, throw an Error:
// "The wine, you're looking for, is not found."
// •	If the wine hasn't paid, throw an Error:
// "{wineName} need to be paid before open the bottle."
// •	Otherwise, this function should remove the wine from the array and return:
// "You drank a bottle of {wineName}."

// cellarRevision(wineType)
// This method can be called with one parameter or without any.
//  If no parameter is provided, the method should return the full information of the cellar 
// •	At the first line:
// "You have space for { emptySlots } bottles more."
// •	At the second line:
// "You paid {bill}$ for the wine."
// •	On the next lines, display information about each wine, sorted 
// alphabetically ascending, by their wineName:
// "{wineName} > {wineType} - {Has Paid / Not Paid}."
// If the method is called with a parameter for wineType:
// •	Return only the information about the wine from the given wineType:
// "{wineName} > {wineType} - {Has Paid / Not Paid}."
// •	If there is no such wine type found, throw an Error:
// "There is no {wineType} in the cellar."
