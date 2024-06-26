import { expect,assert } from "chai";
import { numberOperations } from "../03. Number Operations_Resources.js";

describe("numberOperations tests", function() {
    describe("powNumber", function() {
        it("should return the power of the given number", function() {
            assert.strictEqual(numberOperations.powNumber(5), 25);
            assert.strictEqual(numberOperations.powNumber(10), 100);
            assert.strictEqual(numberOperations.powNumber(-3), 9);
        });
    });

    describe("numberChecker", function() {
        it("should return 'The number is lower than 100!' if the input is less than 100", function() {
            assert.strictEqual(numberOperations.numberChecker(50), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker(99), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker(-10), 'The number is lower than 100!');
        });

        it("should return 'The number is greater or equal to 100!' if the input is 100 or greater", function() {
            assert.strictEqual(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
            assert.strictEqual(numberOperations.numberChecker(150), 'The number is greater or equal to 100!');
            assert.strictEqual(numberOperations.numberChecker(500), 'The number is greater or equal to 100!');
        });

       
    });

    describe("sumArrays", function() {
        it("should return the sum of corresponding elements from two arrays", function() {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
            assert.deepEqual(numberOperations.sumArrays([10, 20], [5, 8, 12]), [15, 28, 12]);
            assert.deepEqual(numberOperations.sumArrays([0], [0]), [0]);
        });

        it("should handle arrays of different lengths correctly", function() {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [4]), [5, 2, 3]);
            assert.deepEqual(numberOperations.sumArrays([5, 10], [1, 2, 3]), [6, 12, 3]);
        });
    });
});