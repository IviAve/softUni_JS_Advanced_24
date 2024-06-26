import { expect,assert } from "chai";
import { ChristmasMovies } from "../02. Christmas Movies_Resources.js";

describe('ChristmasMovies', function () {
    let christmas;

    beforeEach(function () {
        christmas = new ChristmasMovies();
    });

    describe('Instantiation', function () {
        it('should have properties movieCollection, watched, and actors', function () {
            expect(christmas.movieCollection).to.eql([]);
            expect(christmas.watched).to.eql({});
            expect(christmas.actors).to.eql([]);
        });
    });

    describe('buyMovie()', function () {
        it('should add a new movie with unique actors', function () {
            expect(christmas.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']))
                .to.equal('You just got Last Christmas to your collection in which Madison Ingoldsby, Emma Thompson, Boris Isakovic are taking part!');
            
            expect(christmas.movieCollection.length).to.equal(1);
        });

        it('should throw an error if movie is already in collection', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            expect(() => christmas.buyMovie('Home Alone', ['Macaulay Culkin'])).to.throw('You already own Home Alone in your collection!');
        });
    });

    describe('discardMovie()', function () {
        it('should remove a movie from collection and watched list', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.watchMovie('Home Alone');
            expect(christmas.discardMovie('Home Alone')).to.equal('You just threw away Home Alone!');
            expect(christmas.movieCollection.length).to.equal(0);
            expect(christmas.watched).to.eql({});
        });

        it('should throw an error if movie is not in collection', function () {
            expect(() => christmas.discardMovie('Home Alone')).to.throw('Home Alone is not at your collection!');
        });
    });

    describe('watchMovie()', function () {
        

        it('should throw an error if movie is not in collection', function () {
            expect(() => christmas.watchMovie('Home Alone')).to.throw('No such movie in your collection!');
        });
    });

    describe('favouriteMovie()', function () {
        it('should return favourite movie message', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            expect(christmas.favouriteMovie()).to.equal('Your favourite movie is Home Alone and you have watched it 2 times!');
        });

        it('should throw an error if no movies watched', function () {
            expect(() => christmas.favouriteMovie()).to.throw('You have not watched a movie yet this year!');
        });
    });

    describe('mostStarredActor()', function () {
        it('should return most starred actor message', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic']);
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Last Christmas');
            expect(christmas.mostStarredActor()).to.equal('The most starred actor is Macaulay Culkin and starred in 1 movies!');
        });

        it('should throw an error if no movies in collection', function () {
            expect(() => christmas.mostStarredActor()).to.throw('You have not watched a movie yet this year!');
        });
    });
});