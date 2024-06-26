


describe("Tests for bookSelection object", function() {
    describe("isGenreSuitable", function() {
        it("should return not suitable for kids for Thriller genre and age <= 12", function() {
            expect(bookSelection.isGenreSuitable("Thriller", 10)).to.equal("Books with Thriller genre are not suitable for kids at 10 age");
            expect(bookSelection.isGenreSuitable("Horror", 12)).to.equal("Books with Horror genre are not suitable for kids at 12 age");
        });

        it("should return suitable for kids for other genres or age > 12", function() {
            expect(bookSelection.isGenreSuitable("Romance", 10)).to.equal("Those books are suitable");
            expect(bookSelection.isGenreSuitable("Thriller", 13)).to.equal("Those books are suitable");
        });
    });

    describe("isItAffordable", function() {
        it("should return book bought message if budget is sufficient", function() {
            expect(bookSelection.isItAffordable(10, 20)).to.equal("Book bought. You have 10$ left");
        });

        it("should return not enough money message if budget is insufficient", function() {
            expect(bookSelection.isItAffordable(30, 20)).to.equal("You don't have enough money");
        });

        it("should throw an error for invalid input types", function() {
            expect(() => bookSelection.isItAffordable("10", 20)).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable(10, "20")).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable("10", "20")).to.throw("Invalid input");
        });
    });

    describe("suitableTitles", function() {
        it("should return array of book titles that match the wanted genre", function() {
            const books = [
                { title: "The Da Vinci Code", genre: "Thriller" },
                { title: "Harry Potter", genre: "Fantasy" },
                { title: "The Shining", genre: "Horror" }
            ];
            expect(bookSelection.suitableTitles(books, "Thriller")).to.deep.equal(["The Da Vinci Code"]);
            expect(bookSelection.suitableTitles(books, "Fantasy")).to.deep.equal(["Harry Potter"]);
        });

        it("should return an empty array if no books match the wanted genre", function() {
            const books = [
                { title: "The Da Vinci Code", genre: "Thriller" },
                { title: "Harry Potter", genre: "Fantasy" }
            ];
            expect(bookSelection.suitableTitles(books, "Horror")).to.deep.equal([]);
        });

        it("should throw an error for invalid input types", function() {
            expect(() => bookSelection.suitableTitles("Not an array", "Fantasy")).to.throw("Invalid input");
            expect(() => bookSelection.suitableTitles([], 123)).to.throw("Invalid input");
        });
    });
});