

describe("Tests for rentCar", function() {

    describe("searchCar", function() {
        it("should return correct message when model is found", function() {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "BMW")).to.equal("There is 1 car of model BMW in the catalog!");
        });

        it("should throw error when model is not found", function() {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Mercedes")).to.throw("There are no such models in the catalog!");
        });

        it("should throw error for invalid input types", function() {
            expect(() => rentCar.searchCar("not an array", "BMW")).to.throw("Invalid input!");
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 123)).to.throw("Invalid input!");
        });
    });

    describe("calculatePriceOfCar", function() {
        it("should return correct price when model is found", function() {
            expect(rentCar.calculatePriceOfCar("Audi", 5)).to.equal("You choose Audi and it will cost $180!");
        });

        it("should throw error when model is not found", function() {
            expect(() => rentCar.calculatePriceOfCar("Ferrari", 5)).to.throw("No such model in the catalog!");
        });

        it("should throw error for invalid input types", function() {
            expect(() => rentCar.calculatePriceOfCar("Audi", "5")).to.throw("Invalid input!");
            expect(() => rentCar.calculatePriceOfCar(123, 5)).to.throw("Invalid input!");
        });
    });

    describe("checkBudget", function() {
        it("should return correct message when budget is sufficient", function() {
            expect(rentCar.checkBudget(20, 5, 100)).to.equal("You rent a car!");
        });

        it("should return correct message when budget is insufficient", function() {
            expect(rentCar.checkBudget(20, 5, 90)).to.equal("You need a bigger budget!");
        });

        it("should throw error for invalid input types", function() {
            expect(() => rentCar.checkBudget("20", 5, 100)).to.throw("Invalid input!");
            expect(() => rentCar.checkBudget(20, "5", 100)).to.throw("Invalid input!");
            expect(() => rentCar.checkBudget(20, 5, "100")).to.throw("Invalid input!");
        });
    });

});