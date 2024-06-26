class BikeRentalService {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }

    addBikes(bikes) {
        const addedBrands = new Set();

        for (const bike of bikes) {
            let [brand, quantity, price] = bike.split('-');
            quantity = Number(quantity);
            price = Number(price);
            const bikeIndex = this.availableBikes.findIndex(b => b.brand === brand);

            if (bikeIndex !== -1) {
                this.availableBikes[bikeIndex].quantity += (quantity);
                if ((price) > this.availableBikes[bikeIndex].price) {
                    this.availableBikes[bikeIndex].price = (price);
                }
            } else {
                this.availableBikes.push({ brand, quantity: (quantity), price: (price) });
            }

            addedBrands.add(brand);
        }

        return `Successfully added ${Array.from(addedBrands).join(', ')}`;
    }

    rentBikes(selectedBikes) {
        let totalPrice = 0;

        for (const bike of selectedBikes) {
            const [brand, quantity] = bike.split('-');
            const selectedQuantity = Number(quantity);
            const bikeIndex = this.availableBikes.findIndex(b => b.brand === brand);

            if (bikeIndex === -1 || this.availableBikes[bikeIndex].quantity < selectedQuantity) {
                return "Some of the bikes are unavailable or low on quantity in the bike rental service.";
            }

            totalPrice += this.availableBikes[bikeIndex].price * selectedQuantity;
            this.availableBikes[bikeIndex].quantity -= selectedQuantity;
        }

        return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    returnBikes(returnedBikes) {
        for (const bike of returnedBikes) {
            const [brand, quantity] = bike.split('-');
            const returnedQuantity = Number(quantity);
            const bikeIndex = this.availableBikes.findIndex(b => b.brand === brand);

            if (bikeIndex === -1) {
                return "Some of the returned bikes are not from our selection.";
            }

            this.availableBikes[bikeIndex].quantity += returnedQuantity;
        }

        return "Thank you for returning!";
    }

    revision() {
        const sortedBikes = this.availableBikes.slice().sort((a, b) => a.price - b.price);

        let result = "Available bikes:\n";
        result += sortedBikes.map(bike => `${bike.brand} quantity:${bike.quantity} price:$${bike.price}`).join('\n');
        result += `\nThe name of the bike rental service is ${this.name}, and the location is ${this.location}.`;

        return result;
    }
}


// const rentalService = new BikeRentalService("MyBikes", "CityCenter");

// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));

// const rentalService = new BikeRentalService("MyBikes", "CityCenter");

// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
// console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5"]));

// const rentalService = new BikeRentalService("MyBikes", "CityCenter");

// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
// console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
// console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
// console.log(rentalService.revision());

const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3","Test Bike-1"]));
console.log(rentalService.revision());

