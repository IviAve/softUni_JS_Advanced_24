import { expect } from "chai";
import { testNumbers } from "../03.testNumbers.js";

describe("Tests for testNumbers", function() {
    describe("sumNumbers", function() {
        it("should return undefined if any of the parameters is not a number", function() {
            expect(testNumbers.sumNumbers('a', 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, 'b')).to.be.undefined;
            expect(testNumbers.sumNumbers('a', 'b')).to.be.undefined;
        });

        it("should return the correct sum rounded to two decimal places", function() {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
            expect(testNumbers.sumNumbers(1.123, 2.456)).to.equal('3.58');
            expect(testNumbers.sumNumbers(-1, 1)).to.equal('0.00');
            expect(testNumbers.sumNumbers(-1.123, -2.456)).to.equal('-3.58');
        });
    });

    describe("numberChecker", function() {
        it("should throw an error if the input is not a number", function() {
            expect(() => testNumbers.numberChecker('a')).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(NaN)).to.throw('The input is not a number!');
        });

        it("should return 'The number is even!' if the number is even", function() {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
        });

        it("should return 'The number is odd!' if the number is odd", function() {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(-1)).to.equal('The number is odd!');
        });
    });

    describe("averageSumArray", function() {
        it("should return the correct average sum", function() {
            expect(testNumbers.averageSumArray([1, 2, 3, 4])).to.equal(2.5);
            expect(testNumbers.averageSumArray([1, 1, 1, 1])).to.equal(1);
            expect(testNumbers.averageSumArray([-1, -1, -1, -1])).to.equal(-1);
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
        });
    });
});