import { expect } from 'chai';
import { foodDelivery } from '../foodDelivery.js'; 

describe("Tests for foodDelivery", () => {
    describe("getCategory(category)", () => {
        it("should return the correct string for 'Vegan'", () => {
            expect(foodDelivery.getCategory("Vegan")).to.equal("Dishes that contain no animal products.");
        });

        it("should return the correct string for 'Vegetarian'", () => {
            expect(foodDelivery.getCategory("Vegetarian")).to.equal("Dishes that contain no meat or fish.");
        });

        it("should return the correct string for 'Gluten-Free'", () => {
            expect(foodDelivery.getCategory("Gluten-Free")).to.equal("Dishes that contain no gluten.");
        });

        it("should return the correct string for 'All'", () => {
            expect(foodDelivery.getCategory("All")).to.equal("All available dishes.");
        });

        it("should throw an error for an invalid category", () => {
            expect(() => foodDelivery.getCategory("Invalid")).to.throw("Invalid Category!");
        });
    });

    describe("addMenuItem(menuItem, maxPrice)", () => {
        it("should add items correctly and return the correct string", () => {
            const menuItems = [
                { name: "Salad", price: 10 },
                { name: "Soup", price: 15 },
                { name: "Burger", price: 20 }
            ];
            expect(foodDelivery.addMenuItem(menuItems, 15)).to.equal("There are 2 available menu items matching your criteria!");
        });

        it("should throw an error for invalid parameters (not an array and number)", () => {
            expect(() => foodDelivery.addMenuItem("Not an array", 15)).to.throw("Invalid Information!");
        });

        it("should throw an error for invalid parameters (empty array and maxPrice less than 5)", () => {
            expect(() => foodDelivery.addMenuItem([], 4)).to.throw("Invalid Information!");
        });
    });

    describe("calculateOrderCost(shipping, addons, discount)", () => {
        it("should calculate the total cost correctly without discount", () => {
            expect(foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], false)).to.equal("You spend $12.50 for shipping and addons!");
        });

        it("should calculate the total cost correctly with discount", () => {
            expect(foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], true)).to.equal("You spend $10.63 for shipping and addons with a 15% discount!");
        });

        it("should throw an error for invalid parameters", () => {
            expect(() => foodDelivery.calculateOrderCost("standard", ["sauce"], false)).to.throw("Invalid Information!");
        });
    });
});