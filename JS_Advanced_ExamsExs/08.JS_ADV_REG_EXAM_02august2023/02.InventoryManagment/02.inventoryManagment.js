
class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        if (this.items.length >= this.capacity) {
            throw new Error("The inventory is already full.");
        }

        const item = this.items.find(i => i.name === itemName);
        if (item) {
            item.quantity += quantity;
        } else {
            this.items.push({ name: itemName, quantity });
        }

        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        const itemIndex = this.items.findIndex(i => i.name === itemName);
        if (itemIndex === -1) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        const item = this.items[itemIndex];
        if (quantity > item.quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }

        item.quantity -= quantity;
        if (item.quantity === 0) {
            this.items.splice(itemIndex, 1);
            this.outOfStock.push(itemName);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        const item = this.items.find(i => i.name === itemName);
        if (item) {
            item.quantity += quantity;
        } else {
            if (this.items.length >= this.capacity) {
                throw new Error("The inventory is already full.");
            }
            this.items.push({ name: itemName, quantity });
        }

        const outOfStockIndex = this.outOfStock.indexOf(itemName);
        if (outOfStockIndex !== -1) {
            this.outOfStock.splice(outOfStockIndex, 1);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        let summary = "Current Inventory:\n";
        this.items.forEach(item => {
            summary += `${item.name}: ${item.quantity}\n`;
        });

        if (this.outOfStock.length > 0) {
            summary += `Out of Stock: ${this.outOfStock.join(", ")}\n`;
        }

        return summary.trim();
    }
}




    // const manager = new InventoryManager(2);
    
    // console.log(manager.addItem("Drill", 10));
    // console.log(manager.addItem("Hammer", 5));
    // console.log(manager.addItem("Level", 3));
     
    
    
    
    
    // const manager = new InventoryManager(3);
    
    // console.log(manager.addItem("Drill", 10));
    // console.log(manager.addItem("Hammer", 5));
    // console.log(manager.addItem("Chisel", 3));
    // console.log(manager.sellItem("Drill", 3)); 
    // console.log(manager.sellItem("Paintbrush", 2));
    
    
    
    
    // const manager = new InventoryManager(3);
    
    // console.log(manager.addItem("Drill", 10));
    // console.log(manager.addItem("Hammer", 5));
    // console.log(manager.addItem("Chisel", 3));
    // console.log(manager.sellItem("Drill", 3)); 
    // console.log(manager.restockItem("Drill", 5));
    // console.log(manager.restockItem("Paintbrush", 1));
     
 
    
   const manager = new InventoryManager(3);
    
    console.log(manager.addItem("Drill", 10));
    console.log(manager.addItem("Hammer", 5));
    console.log(manager.addItem("Chisel", 3));
    console.log(manager.sellItem("Drill", 3));
    console.log(manager.sellItem("Hammer", 5)); 
    console.log(manager.restockItem("Drill", 5));
    console.log(manager.restockItem("Paintbrush", 1));
    console.log(manager.getInventorySummary());
    
    
    
    
    
    



    //  Write a class InventoryManager, which implements the following functionality:
    // Functionality
    // Constructor
    // Should have these 3 properties:
    // •	capacity – Number
    // •	items – Array (empty)
    // •	outOfStock – Array (empty)
    // At the initialization of the InventoryManager class, the constructor accepts the capacity.
    // addItem(itemName, quantity)
    // •	This method should allow adding items to the inventory. It accepts two parameters:
    //  itemName (string) and quantity (number).
    // •	If the quantity is less than or equal to 0, throw an error with the message:
    //          "Quantity must be greater than zero."
    // •	If the inventory is already full (reached the capacity), throw an error with the message:
    //          "The inventory is already full."
    // •	If the item already exists in the inventory, increase the quantity of the existing 
    // item by the specified quantity. Otherwise, add a new item with the itemName and quantity
    //  to the items array.
    // •	Return a string message in the format:
    //          "Added {quantity} {itemName}(s) to the inventory."
    
    // sellItem(itemName, quantity)
    // •	This method should allow selling items from the inventory. It accepts two parameters:
    //  itemName (string) and quantity (number).
    // •	If the quantity is less than or equal to 0, throw an error with the message:
    //              "Quantity must be greater than zero."
    // •	If the item does not exist in the inventory, throw an error with the message:
    //  "The item {itemName} is not available in the inventory."
    // •	If the quantity requested is greater than the available quantity of the item in
    //  the inventory, throw an error with the message:
    //  "Not enough {itemName}(s) in stock."
    // •	Decrease the quantity of the item in the inventory by the specified quantity.
    // •	If the quantity of the item becomes 0 after selling, remove the item from the 
    // items array and add the itemName to the outOfStock array.
    // •	Return a string message in the format:
    //  "Sold {quantity} {itemName}(s) from the inventory."
    
    // restockItem(itemName, quantity)
    // •	This method should allow restocking items in the inventory. It accepts two 
    // parameters: itemName (string) and quantity (number).
    // •	If the quantity is less than or equal to 0, throw an error with the message: 
    // "Quantity must be greater than zero."
    // •	If the item already exists in the inventory, increase the quantity of the
    //  existing item by the specified quantity. Otherwise, add a new item with the 
    //  itemName and quantity to the items array.
    // •	If the item exists in the outOfStock array, remove it from the outOfStock array.
    // •	Return a string message in the format: 
    // "Restocked {quantity} {itemName}(s) in the inventory."
    
    // getInventorySummary()
    // •	This method should return a summary of the current inventory.
    // •	The summary should be a string with the following format:
    // •	 On the first line:
    //                                       "Current Inventory:" 
    // •	For each item in the items array, add a line in the format: 
    // "{itemName}: {quantity}"
    // •	If there are items in the outOfStock array, add a line in the format:
    //  "Out of Stock: {itemName1}, {itemName2}" (comma-separated list of item names)
    
    // Examples
    
    