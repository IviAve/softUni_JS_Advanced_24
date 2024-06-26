import { assert,expect } from "chai";
import { library } from "../library.js";

describe("Tests for library object", function() {

    describe("calcPriceOfBook", function() {
        it("should calculate the price correctly for books published after 1980", function() {
            const result = library.calcPriceOfBook('The Great Gatsby', 1990);
            assert.strictEqual(result, 'Price of The Great Gatsby is 20.00');
        });

        it("should apply 50% discount for books published on or before 1980", function() {
            const result = library.calcPriceOfBook('1984', 1979);
            assert.strictEqual(result, 'Price of 1984 is 10.00');
        });

        it("should throw an error for invalid input", function() {
            assert.throw(() => library.calcPriceOfBook(123, '1984'), Error, 'Invalid input');
            assert.throw(() => library.calcPriceOfBook('1984', 'abc'), Error, 'Invalid input');
        });
    });

    describe("findBook", function() {
        it("should find the desired book in the array", function() {
            const books = ['The Great Gatsby', '1984', 'Pride and Prejudice'];
            const result = library.findBook(books, '1984');
            assert.strictEqual(result, 'We found the book you want.');
        });

        it("should handle when the book is not found in the array", function() {
            const books = ['The Great Gatsby', '1984', 'Pride and Prejudice'];
            const result = library.findBook(books, 'To Kill a Mockingbird');
            assert.strictEqual(result, 'The book you are looking for is not here!');
        });

        it("should throw an error when the array of books is empty", function() {
            const books = [];
            assert.throw(() => library.findBook(books, '1984'), Error, 'No books currently available');
        });
    });

    describe("arrangeTheBooks", function() {
        it("should return success message when books are arranged on available shelves", function() {
            const result = library.arrangeTheBooks(32); // 32 books should fit on 5 shelves (40 spaces)
            assert.strictEqual(result, 'Great job, the books are arranged.');
        });

        it("should return error message when more shelves need to be purchased", function() {
            const result = library.arrangeTheBooks(50); // 50 books require more than 40 spaces
            assert.strictEqual(result, 'Insufficient space, more shelves need to be purchased.');
        });

        it("should throw an error for invalid input", function() {
            assert.throw(() => library.arrangeTheBooks('abc'), Error, 'Invalid input');
            assert.throw(() => library.arrangeTheBooks(-10), Error, 'Invalid input');
        });
    });

});