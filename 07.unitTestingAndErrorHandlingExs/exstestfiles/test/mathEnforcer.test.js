import { assert } from 'chai';
import { mathEnforcer } from '../04.mathEnforcer.js';

describe('mathEnforcer function test', () => {

    // Tests with uncorrect inputs 
    describe('addFive function test', () => {
        it('Shuld return undefined with string', () => {
            assert.strictEqual(mathEnforcer.addFive('TEST', undefined, 'Return undefined with string'))
        });
        it('Shuld return undefined with array', () => {
            assert.strictEqual(mathEnforcer.addFive([], undefined, 'Return undefined with empty array'))
        });
        it('Shuld return undefined with object', () => {
            assert.strictEqual(mathEnforcer.addFive({}, undefined, 'Return undefined with empty object'))
        });
        it('Shuld return undefined with undefined', () => {
            assert.strictEqual(mathEnforcer.addFive(undefined, undefined, 'Return undefined with undefined'))
        });
        it('Shuld return undefined with null', () => {
            assert.strictEqual(mathEnforcer.addFive(null, undefined, 'Return undefined with null'))
        });

        //Tests with correct input

        it('Positive integer number +5', () => {
            assert(mathEnforcer.addFive(5) === 10, 'Return 10')
        });
        it('Negative  number +5', () => {
            assert(mathEnforcer.addFive(-5) === 0, 'Return 0')
        });
        it('Decimal  number +5', () => {
            assert(mathEnforcer.addFive(5.5) === 10.5, 'Return 10.5')
        });


    });

    describe('substract function test', () => {

        it('Shuld return undefined with string', () => {
            assert.strictEqual(mathEnforcer.subtractTen('TEST', undefined, 'Return undefined with string'))
        });
        it('Shuld return undefined with array', () => {
            assert.strictEqual(mathEnforcer.subtractTen([], undefined, 'Return undefined with empty array'))
        });
        it('Shuld return undefined with object', () => {
            assert.strictEqual(mathEnforcer.subtractTen({}, undefined, 'Return undefined with empty object'))
        });
        it('Shuld return undefined with undefined', () => {
            assert.strictEqual(mathEnforcer.subtractTen(undefined, undefined, 'Return undefined with undefined'))
        });
        it('Shuld return undefined with null', () => {
            assert.strictEqual(mathEnforcer.subtractTen(null, undefined, 'Return undefined with null'))
        });

         //Tests with correct input

         it('Positive integer number -10', () => {
            assert(mathEnforcer.subtractTen(5) === -5, 'Return -5')
        });
        it('Negative  number -10', () => {
            assert(mathEnforcer.subtractTen(-5) === -15, 'Return -15')
        });
        it('Decimal  number -10', () => {
            assert(mathEnforcer.subtractTen(15.5) === 5.5, 'Return 5.5')
        });

    });

    describe('sum function test', () => {

        
         //Tests with correct input

         it('Two positive  integer numbers', () => {
            assert(mathEnforcer.sum(5,10) === 15, 'Return 15')
        });
        it('Test with two negative numbers', () => {
            assert(mathEnforcer.sum(-10,-5) === -15, 'Return -5')
        });
        it('Two decimal numbers', () => {
            assert(mathEnforcer.sum(10.5,5.2) === 15.7, 'Return 15.7')
        });
        it('Test with positive and negative numbers', () => {
            assert(mathEnforcer.sum(10,-5) === 5, 'Return 5')
        });
        it('Test with one  decimal number', () => {
            assert(mathEnforcer.sum(10.5,5) === 15.5, 'Return 15.7')
        });

         // Tests with uncorrect inputs 
         it('Test with first num to be a string', () => {
            assert(mathEnforcer.sum('a',5) === undefined)
        });
        it('Test with second num to be a string', () => {
            assert(mathEnforcer.sum(5,'a') === undefined)
        });
        it('Test with two  strings', () => {
            assert(mathEnforcer.sum('a','b') === undefined)
        });
        it('Test with first num to be a string', () => {
            assert(mathEnforcer.sum('20',5) === undefined)
        });
        it('Test with first num to be a  empty string', () => {
            assert(mathEnforcer.sum('',5) === undefined)
        });
         
    });
});

