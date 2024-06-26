class CarDealership {
    constructor(name) {
        this.name = name
        this.availableCars = []
        this.soldCars = []
        this.totalIncome = 0
    }
    addCar(model, horsePower, price, mileage) {
        if (model == '' || horsePower < 0 || price < 0 || mileage < 0) {  //point 1
            throw new Error('Invalid input!')
        }
        this.availableCars.push({ model, horsePower, price, mileage })
        return `New car added: ${model} - ${horsePower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }
    sellCar(model, desiredMileage) {
        let curr = this.availableCars.find(x => x.model === model)
        if (!curr) {
            throw new Error(`${model} was not found!`)
        } else {
            if (curr.mileage <= desiredMileage) curr.price = curr.price
            else if ((curr.mileage - desiredMileage) <= 40000) curr.price *= 0.95   //point 2
            else curr.price *= 0.90                 //point 2
            this.totalIncome += curr.price
        }
        this.availableCars = this.availableCars.filter(x => x !== curr)
        this.soldCars.push(curr)
        return `${model} was sold for ${curr.price.toFixed(2)}$`
    }
    currentCar() {
        if (this.availableCars.length === 0) {
            return `There are no available cars`
        } else {
            let result = []
            result.push(`-Available cars:`)     //point 3
            this.availableCars.map(x => {
                result.push(`---${x.model} - ${x.horsePower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`)     //point 3
            })
            return result.join('\n')    //point 3
        }
    }
    salesReport(criteria) {
        if (criteria != 'horsepower' && criteria != 'model') {      //point 4
            throw new Error('Invalid criteria!')
        }
        if (criteria === 'horsepower') {
            this.soldCars.sort((a, b) => b.horsePower - a.horsePower)
        }
        if (criteria === 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
        }
        let result = []
        this.soldCars.forEach(x => {
            result.push(`---${x.model} - ${x.horsePower} HP - ${(x.price).toFixed(2)}$`);               //point 5
        })
        return `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:\n${result.join('\n')}`     //point 6
    }
}


// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// Output 1
// New car added: Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// New car added: Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// Uncaught Error Error: Invalid input!

// Input 2
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// Output 2
// Toyota Corolla was sold for 3500.00$
// Mercedes C63 was sold for 26100.00$

// Input 3
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

// Output 3
// -Available cars:
// ---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// ---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// ---Audi A3 - 120 HP - 240000.00 km - 4900.00$


// Input 4
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

// Output 4
// -SoftAuto has a total income of 29600.00$
// -2 cars sold:
// ---Mercedes C63 - 300 HP - 26100.00$
// ---Toyota Corolla - 100 HP - 3500.00$
