import { expect,assert } from "chai";
import { findNewApartment } from "../findApartment.js";


describe("Tests for findNewApartment", function() {
    describe("isGoodLocation", function() {
        it("should return 'Invalid input!' for invalid input types", function() {
            expect(() => findNewApartment.isGoodLocation(123, true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation("Sofia", "true")).to.throw("Invalid input!");
        });

        it("should return 'This location is not suitable for you.' for unsuitable cities", function() {
            expect(findNewApartment.isGoodLocation("Burgas", true)).to.equal("This location is not suitable for you.");
        });

        it("should return 'There is no public transport in area.' if there is no public transport", function() {
            expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal("There is no public transport in area.");
        });

        it("should return 'You can go on home tour!' for suitable city and public transport", function() {
            expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!");
        });
    });

    describe("isLargeEnough", function() {
        it("should throw 'Invalid input!' for invalid input types", function() {
            expect(() => findNewApartment.isLargeEnough("not an array", 50)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([], "not a number")).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([], 50)).to.throw("Invalid input!");
        });

        it("should return correct apartments that are large enough", function() {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.equal("50, 60");
            expect(findNewApartment.isLargeEnough([30, 20, 10], 15)).to.equal("30, 20");
        });
    });

    describe("isItAffordable", function() {
        it("should throw 'Invalid input!' for invalid input types", function() {
            expect(() => findNewApartment.isItAffordable("not a number", 1000)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(100, "not a number")).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(-100, 1000)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(100, -1000)).to.throw("Invalid input!");
        });

        it("should return 'You don't have enough money for this house!' if price is more than budget", function() {
            expect(findNewApartment.isItAffordable(2000, 1500)).to.equal("You don't have enough money for this house!");
        });

        it("should return 'You can afford this home!' if budget is enough", function() {
            expect(findNewApartment.isItAffordable(1000, 1500)).to.equal("You can afford this home!");
        });
    });
});