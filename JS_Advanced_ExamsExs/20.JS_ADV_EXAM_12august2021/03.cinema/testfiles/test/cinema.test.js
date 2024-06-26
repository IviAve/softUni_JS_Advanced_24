import { assert,expect } from "chai";
import { cinema } from "../cinema.js";



describe("Tests for cinema object", function() {
    describe("showMovies", function() {
        it("should return correct string when array is empty", function() {
            const result = cinema.showMovies([]);
            assert.strictEqual(result, 'There are currently no movies to show.');
        });

        it("should return movies separated by comma and space", function() {
            const movies = ['King Kong', 'The Tomorrow War', 'Joker'];
            const result = cinema.showMovies(movies);
            assert.strictEqual(result, 'King Kong, The Tomorrow War, Joker');
        });
    });

    describe("ticketPrice", function() {
        it("should return price for valid projection type", function() {
            const result = cinema.ticketPrice('Normal');
            assert.strictEqual(result, 7.50);
        });

        it("should throw error for invalid projection type", function() {
            assert.throw(() => cinema.ticketPrice('IMAX'), Error, 'Invalid projection type.');
        });
    });

    describe("swapSeatsInHall", function() {
        it("should return successful message for valid seat swap", function() {
            const result = cinema.swapSeatsInHall(5, 10);
            assert.strictEqual(result, 'Successful change of seats in the hall.');
        });

        it("should return unsuccessful message for same seat numbers", function() {
            const result = cinema.swapSeatsInHall(3, 3);
            assert.strictEqual(result, 'Unsuccessful change of seats in the hall.');
        });

        it("should return unsuccessful message for non-integer inputs", function() {
            const result = cinema.swapSeatsInHall(2.5, 7);
            assert.strictEqual(result, 'Unsuccessful change of seats in the hall.');
        });

        it("should return unsuccessful message for seats out of bounds", function() {
            const result1 = cinema.swapSeatsInHall(0, 10);
            const result2 = cinema.swapSeatsInHall(15, 25);
            assert.strictEqual(result1, 'Unsuccessful change of seats in the hall.');
            assert.strictEqual(result2, 'Unsuccessful change of seats in the hall.');
        });
    });
    
});