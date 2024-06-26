import { expect ,assert} from "chai";
import { planYourTrip  } from "../planYourTrip.js";


describe("Tests for planYourTrip", function() {
    describe("Tests for choosingDestination", function() {
        it("should throw error for invalid year", function() {
            assert.throws(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023), Error, "Invalid Year!");
            assert.throws(() => planYourTrip.choosingDestination("Ski Resort", "Winter", null), Error, "Invalid Year!");
            assert.throws(() => planYourTrip.choosingDestination("Ski Resort", "Winter", undefined), Error, "Invalid Year!");
        });

        it("should throw error for invalid destination", function() {
            assert.throws(() => planYourTrip.choosingDestination("Beach", "Winter", 2024), Error, "This destination is not what you are looking for.");
        });
        it("should throw error for invalid destination", function() {
            assert.throws(() => planYourTrip.choosingDestination(0, "Winter", 2024), Error, "This destination is not what you are looking for.");
        });

        it("should return correct message for Winter season", function() {
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024), "Great choice! The Winter is the perfect time to visit the Ski Resort.");
        });

        it("should return correct message for non-Winter season", function() {
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024), "Consider visiting during the Winter for the best experience at the Ski Resort.");
        });
        
        it("should return correct message for invalid season string", function() {
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Autumn", 2024), "Consider visiting during the Winter for the best experience at the Ski Resort.");
        });
        
        it("should throw error for different destination", function() {
            assert.throws(() => planYourTrip.choosingDestination("Mountain", "Winter", 2024), Error, "This destination is not what you are looking for.");
        });
    });

    describe("Tests for exploreOptions", function() {
        it("should throw error for invalid activities parameter", function() {
            assert.throws(() => planYourTrip.exploreOptions("Not an array", 1), Error, "Invalid Information!");
            assert.throws(() =>  planYourTrip.exploreOptions('Swim', 1) ,'Invalid Information!');
            assert.throws(() =>  planYourTrip.exploreOptions(['Swim'], 'a') ,'Invalid Information!');
            assert.throws(() =>  planYourTrip.exploreOptions(['Swim'], 3.1) ,'Invalid Information!');
            assert.throws(() =>  planYourTrip.exploreOptions(['Swim'], 1) ,'Invalid Information!');
            assert.throws(() =>  planYourTrip.exploreOptions('Swim', -1) ,'Invalid Information!');
            
            
        });
        it("should throw error for invalid activityIndex parameter", function() {
            assert.strictEqual(planYourTrip.exploreOptions(['Swim', 'Ride', 'Slide'], 1),'Swim, Slide');
        });
        it("should throw error for invalid activityIndex parameter", function() {
            assert.throws(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], "Not a number"), Error, "Invalid Information!");
            assert.throws(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 3), Error, "Invalid Information!");
            assert.throws(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], -1), Error, "Invalid Information!");
        });

        it("should return correct activities string after removal", function() {
            assert.equal(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1), "Skiing, Winter Hiking");
        });
        
        it("should return correct activities string after removing first element", function() {
            assert.equal(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 0), "Snowboarding, Winter Hiking");
        });
        
        it("should return correct activities string after removing last element", function() {
            assert.equal(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2), "Skiing, Snowboarding");
        });
        
        it("should throw error for empty activities array", function() {
            assert.throws(() => planYourTrip.exploreOptions([], 0), Error, "Invalid Information!");
        });
        
        it("should throw error for non-integer activityIndex", function() {
            assert.throws(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1.5), Error, "Invalid Information!");
        });
    });

    describe("Tests for estimateExpenses", function() {
        it("should throw error for invalid distanceInKilometers parameter", function() {
            assert.throws(() => planYourTrip.estimateExpenses("Not a number", 1.5), Error, "Invalid Information!");
            assert.throws(() => planYourTrip.estimateExpenses(-100, 1.5), Error, "Invalid Information!");
        });
        it("should throw error invalid Information", function() {
            expect(() => { planYourTrip.estimateExpenses('5', '5') }).to.throw('Invalid Information!');
        expect(() => { planYourTrip.estimateExpenses(5, '5') }).to.throw('Invalid Information!');
        expect(() => { planYourTrip.estimateExpenses('5', 5) }).to.throw('Invalid Information!');
        expect(() => {planYourTrip.estimateExpenses(0, 5) }).to.throw('Invalid Information!');
        expect(() => { planYourTrip.estimateExpenses(5, "string") }).to.throw('Invalid Information!');
        expect(() => { planYourTrip.estimateExpenses(5, []) }).to.throw('Invalid Information!');
        expect(() => { planYourTrip.estimateExpenses(5, {}) }).to.throw('Invalid Information!');
        expect(() => { planYourTrip.estimateExpenses(5, true) }).to.throw('Invalid Information!');
        expect(() => { planYourTrip.estimateExpenses(5, -1) }).to.throw('Invalid Information!');
        expect(() => { planYourTrip.estimateExpenses(-5, 1) }).to.throw('Invalid Information!');

        expect(() => { planYourTrip.estimateExpenses("string", 5) }).to.throw('Invalid Information!');
        expect(() => { planYourTrip.estimateExpenses([], 5) }).to.throw('Invalid Information!');
        expect(() => { planYourTrip.estimateExpenses({}, 5) }).to.throw('Invalid Information!');
        expect(() => { planYourTrip.estimateExpenses(true, 5) }).to.throw('Invalid Information!');
        });

        it("should throw error for invalid fuelCostPerLiter parameter", function() {
            assert.throws(() => planYourTrip.estimateExpenses(100, "Not a number"), Error, "Invalid Information!");
            assert.throws(() => planYourTrip.estimateExpenses(100, -1.5), Error, "Invalid Information!");
        });

        it("should return budget-friendly message for low cost", function() {
            assert.equal(planYourTrip.estimateExpenses(100, 4), "The trip is budget-friendly, estimated cost is $400.00.");
        });

        it("should return plan accordingly message for high cost", function() {
            assert.equal(planYourTrip.estimateExpenses(200, 4), "The estimated cost for the trip is $800.00, plan accordingly.");
        });
        
        it("should return budget-friendly message for exact $500 cost", function() {
            assert.equal(planYourTrip.estimateExpenses(250, 2), "The trip is budget-friendly, estimated cost is $500.00.");
        });
        
        it("should return plan accordingly message for just above $500 cost", function() {
            assert.equal(planYourTrip.estimateExpenses(250, 2.01), "The estimated cost for the trip is $502.50, plan accordingly.");
        });
        
        it("should throw error for zero distance", function() {
            assert.throws(() => planYourTrip.estimateExpenses(0, 2), Error, "Invalid Information!");
        });
        
        it("should throw error for zero fuel cost", function() {
            assert.throws(() => planYourTrip.estimateExpenses(250, 0), Error, "Invalid Information!");
        });
    });
});