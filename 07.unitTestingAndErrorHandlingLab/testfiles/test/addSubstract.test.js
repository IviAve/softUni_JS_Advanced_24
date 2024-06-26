import { assert } from 'chai';
import { createCalculator } from '../07.addSubstract.js';

describe('createCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = createCalculator();
    });

    it('should return an object with add(), subtract(), and get() functions', () => {
        assert.strictEqual(typeof calculator, 'object');
        assert.strictEqual(typeof calculator.add, 'function');
        assert.strictEqual(typeof calculator.subtract, 'function');
        assert.strictEqual(typeof calculator.get, 'function');
    });

    it('should start with an internal sum of 0', () => {
        assert.strictEqual(calculator.get(), 0);
    });

    it('should correctly add numbers to the internal sum', () => {
        calculator.add(5);
        calculator.add(10);
        assert.strictEqual(calculator.get(), 15);
    });

    it('should correctly subtract numbers from the internal sum', () => {
        calculator.subtract(5);
        calculator.subtract(3);
        assert.strictEqual(calculator.get(), -8);
    });

    it('should handle string input', () => {
        calculator.add('5');
        calculator.subtract('3');
        assert.strictEqual(calculator.get(), 2);
    });

    it('should handle negative numbers', () => {
        calculator.add(-5);
        calculator.subtract(-3);
        assert.strictEqual(calculator.get(), -2);
    });

    it('should handle float numbers', () => {
        calculator.add(5.5);
        calculator.subtract(2.2);
        assert.strictEqual(calculator.get(), 3.3);
    });

    it('should return the internal sum', () => {
        calculator.add(5);
        calculator.subtract(3);
        assert.strictEqual(calculator.get(), 2);
    });
});