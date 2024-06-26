import { expect,assert } from "chai";
import { motorcycleRider } from "../Motorcycle Rider.js";

describe("Tests for MotorcycleRider", function() {
    describe("licenseRestriction", function() {
        it("should return correct message for category AM", function() {
            expect(motorcycleRider.licenseRestriction("AM")).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
        });

        it("should return correct message for category A1", function() {
            expect(motorcycleRider.licenseRestriction("A1")).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        });

        it("should return correct message for category A2", function() {
            expect(motorcycleRider.licenseRestriction("A2")).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
        });

        it("should return correct message for category A", function() {
            expect(motorcycleRider.licenseRestriction("A")).to.equal("No motorcycle restrictions, and the minimum age is 24.");
        });

        it("should throw error for invalid category", function() {
            expect(() => motorcycleRider.licenseRestriction("B")).to.throw("Invalid Information!");
        });
    });

    describe("motorcycleShowroom", function() {
        it("should return correct message for valid input", function() {
            expect(motorcycleRider.motorcycleShowroom([125, 250, 600], 300)).to.equal("There are 2 available motorcycles matching your criteria!");
        });

        it("should throw error for invalid engineVolume type", function() {
            expect(() => motorcycleRider.motorcycleShowroom("not an array", 300)).to.throw("Invalid Information!");
        });

        it("should throw error for invalid maximumEngineVolume type", function() {
            expect(() => motorcycleRider.motorcycleShowroom([125, 250, 600], "not a number")).to.throw("Invalid Information!");
        });

        it("should throw error for empty engineVolume array", function() {
            expect(() => motorcycleRider.motorcycleShowroom([], 300)).to.throw("Invalid Information!");
        });

        it("should throw error for maximumEngineVolume less than 50", function() {
            expect(() => motorcycleRider.motorcycleShowroom([125, 250, 600], 30)).to.throw("Invalid Information!");
        });
    });

    describe("otherSpendings", function() {
        it("should return correct message with discount", function() {
            expect(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], true)).to.equal("You spend $540.00 for equipment and consumables with 10% discount!");
        });

        it("should return correct message without discount", function() {
            expect(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], false)).to.equal("You spend $600.00 for equipment and consumables!");
        });

        it("should throw error for invalid equipment type", function() {
            expect(() => motorcycleRider.otherSpendings("not an array", ["engine oil", "oil filter"], true)).to.throw("Invalid Information!");
        });

        it("should throw error for invalid consumables type", function() {
            expect(() => motorcycleRider.otherSpendings(["helmet", "jacked"], "not an array", true)).to.throw("Invalid Information!");
        });

        it("should throw error for invalid discount type", function() {
            expect(() => motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], "not a boolean")).to.throw("Invalid Information!");
        });
    });
});