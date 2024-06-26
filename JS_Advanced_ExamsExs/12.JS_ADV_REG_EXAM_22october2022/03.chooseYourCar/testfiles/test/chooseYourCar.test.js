import { expect,assert } from "chai";
import { chooseYourCar } from "../chooseYourCar.js";

describe('chooseYourCar Tests', function() {
    
    describe('choosingType function', function() {
        
        it('Should return valid message for Sedan type and valid year', function() {
            const result = chooseYourCar.choosingType('Sedan', 'blue', 2015);
            assert.strictEqual(result, 'This blue Sedan meets the requirements, that you have.');
        });

        it('Should return valid message for Sedan type and old year', function() {
            const result = chooseYourCar.choosingType('Sedan', 'red', 2005);
            assert.strictEqual(result, 'This Sedan is too old for you, especially with that red color.');
        });

        it('Should throw error for invalid car type', function() {
            assert.throw(() => chooseYourCar.choosingType('SUV', 'black', 2020), 'This type of car is not what you are looking for.');
        });

        it('Should throw error for invalid year', function() {
            assert.throw(() => chooseYourCar.choosingType('Sedan', 'white', 1880), 'Invalid Year!');
        });

       
       
        it('Should throw error for year greater than 2022', function() {
            assert.throw(() => chooseYourCar.choosingType('Sedan', 'silver', 2023), 'Invalid Year!');
        });

        it('Should handle different cases correctly for type', function() {
            assert.throw(() => chooseYourCar.choosingType('sedan', 'yellow', 2015), 'This type of car is not what you are looking for.');
        });

    });

    describe('brandName function', function() {
        
        it('Should remove the brand at the specified index and return updated list', function() {
            const result = chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 1);
            assert.strictEqual(result, 'BMW, Peugeot');
        });

        it('Should return empty string when removing the only brand', function() {
            const result = chooseYourCar.brandName(['Audi'], 0);
            assert.strictEqual(result, '');
        });

        it('Should throw error for invalid brand array', function() {
            assert.throw(() => chooseYourCar.brandName('BMW', 0), 'Invalid Information!');
        });

        it('Should throw error for out-of-bound index', function() {
            assert.throw(() => chooseYourCar.brandName(['BMW', 'Toyota'], 5), 'Invalid Information!');
        });

        it('Should throw error for non-integer index', function() {
            assert.throw(() => chooseYourCar.brandName(['BMW', 'Toyota'], 1.5), 'Invalid Information!');
        });

        it('Should throw error for negative index', function() {
            assert.throw(() => chooseYourCar.brandName(['BMW', 'Toyota'], -1), 'Invalid Information!');
        });

    });

    describe('carFuelConsumption function', function() {
        
        it('Should return efficient message for low fuel consumption', function() {
            const result = chooseYourCar.carFuelConsumption(500, 35);
            assert.strictEqual(result, 'The car is efficient enough, it burns 7.00 liters/100 km.');
        });

        it('Should return high fuel consumption message', function() {
            const result = chooseYourCar.carFuelConsumption(300, 25);
            assert.strictEqual(result, 'The car burns too much fuel - 8.33 liters!');
        });

        it('Should throw error for negative distance', function() {
            assert.throw(() => chooseYourCar.carFuelConsumption(-500, 35), 'Invalid Information!');
        });

        it('Should throw error for zero distance', function() {
            assert.throw(() => chooseYourCar.carFuelConsumption(0, 35), 'Invalid Information!');
        });

        it('Should throw error for negative fuel consumption', function() {
            assert.throw(() => chooseYourCar.carFuelConsumption(500, -35), 'Invalid Information!');
        });

        it('Should throw error for zero fuel consumption', function() {
            assert.throw(() => chooseYourCar.carFuelConsumption(500, 0), 'Invalid Information!');
        });

        it('Should throw error for non-numeric distance', function() {
            assert.throw(() => chooseYourCar.carFuelConsumption('500', 35), 'Invalid Information!');
        });

        it('Should throw error for non-numeric fuel consumption', function() {
            assert.throw(() => chooseYourCar.carFuelConsumption(500, '35'), 'Invalid Information!');
        });

    });

});