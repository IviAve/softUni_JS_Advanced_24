describe("Tests for dealership object", function() {
    describe("newCarCost function", function() {
        it("should return the new car price when no old car model is provided", function() {
            const result = dealership.newCarCost(undefined, 30000);
            expect(result).to.equal(30000);
        });

        it("should return the discounted price when a valid old car model is provided", function() {
            const result = dealership.newCarCost('Audi A4 B8', 30000);
            expect(result).to.equal(15000); // Discounted price for Audi A4 B8 is 15000
        });

        it("should return the new car price without discount when an invalid old car model is provided", function() {
            const result = dealership.newCarCost('Invalid Model', 30000);
            expect(result).to.equal(30000); // No discount for invalid model
        });
    });

    describe("carEquipment function", function() {
        it("should return an array with selected extras based on provided indexes", function() {
            const extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            const indexArr = [0, 2]; // Selecting heated seats and sport rims
            const result = dealership.carEquipment(extrasArr, indexArr);
            expect(result).to.deep.equal(['heated seats', 'sport rims']);
        });

        it("should return an empty array when no indexes are provided", function() {
            const extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            const indexArr = [];
            const result = dealership.carEquipment(extrasArr, indexArr);
            expect(result).to.deep.equal([]);
        });
    });

    describe("euroCategory function", function() {
        it("should return a message with 5% discount when euro category is 4 or higher", function() {
            const result = dealership.euroCategory(4);
            expect(result).to.include('5% discount to the final price');
        });

        it("should return a message without discount when euro category is below 4", function() {
            const result = dealership.euroCategory(3);
            expect(result).to.include('no discount from the final price');
        });

        it("should calculate correct discounted price for euro category 4", function() {
            // Expected discounted price: 30000 - 15000 = 15000 * 0.95 = 14250
            const result = dealership.euroCategory(4);
            expect(result).to.include('14250');
        });

        it("should handle euro category 0 correctly", function() {
            const result = dealership.euroCategory(0);
            expect(result).to.include('no discount from the final price');
        });
    });
});