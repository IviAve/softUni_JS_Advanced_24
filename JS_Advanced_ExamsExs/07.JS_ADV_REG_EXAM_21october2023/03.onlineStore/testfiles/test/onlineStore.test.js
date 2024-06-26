import { expect,assert } from "chai";
import { onlineStore } from '../onlineStore.js';


describe("Tests for onlineStore object", function () {
    describe("isProductAvailable()", function () {
        it("should return out of stock message for stockQuantity <= 0", function () {
            expect(onlineStore.isProductAvailable("Laptop", 0)).to.equal("Sorry, Laptop is currently out of stock.");
            expect(onlineStore.isProductAvailable("Laptop", -5)).to.equal("Sorry, Laptop is currently out of stock.");
        });

        it("should return available for purchase message for stockQuantity > 0", function () {
            expect(onlineStore.isProductAvailable("Laptop", 10)).to.equal("Great! Laptop is available for purchase.");
        });

        it("should throw an error for invalid input types", function () {
            expect(() => onlineStore.isProductAvailable(123, 10)).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable("Laptop", "ten")).to.throw("Invalid input.");
        });
    });

    describe("canAffordProduct()", function () {
        it("should return insufficient funds message for accountBalance < productPrice", function () {
            expect(onlineStore.canAffordProduct(100, 50)).to.equal("You don't have sufficient funds to buy this product.");
        });

        it("should return remaining balance message for accountBalance >= productPrice", function () {
            expect(onlineStore.canAffordProduct(100, 150)).to.equal("Product purchased. Your remaining balance is $50.");
        });

        it("should throw an error for invalid input types", function () {
            expect(() => onlineStore.canAffordProduct("100", 150)).to.throw("Invalid input.");
            expect(() => onlineStore.canAffordProduct(100, "150")).to.throw("Invalid input.");
        });
    });

    describe("getRecommendedProducts()", function () {
        it("should return recommended products for a valid category", function () {
            const products = [
                { name: "Camera", category: "Photography" },
                { name: "Tripod", category: "Photography" },
                { name: "Laptop", category: "Electronics" },
            ];
            expect(onlineStore.getRecommendedProducts(products, "Photography")).to.equal("Recommended products in the Photography category: Camera, Tripod");
        });

        it("should return no recommended products message for an empty category", function () {
            const products = [
                { name: "Laptop", category: "Electronics" },
            ];
            expect(onlineStore.getRecommendedProducts(products, "Photography")).to.equal("Sorry, we currently have no recommended products in the Photography category.");
        });

        it("should throw an error for invalid input types", function () {
            expect(() => onlineStore.getRecommendedProducts("not an array", "Photography")).to.throw("Invalid input.");
            expect(() => onlineStore.getRecommendedProducts([], 123)).to.throw("Invalid input.");
        });
    });
});