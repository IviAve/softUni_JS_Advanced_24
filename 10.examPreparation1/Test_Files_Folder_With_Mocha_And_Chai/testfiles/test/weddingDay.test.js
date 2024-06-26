import { expect } from 'chai';
import { weddingDay} from '../weddingDay.js'; 


describe("Tests for weddingDay object", function() {
    
    describe("pickVenue", function() {
        it("should throw error for invalid input", function() {
            expect(() => weddingDay.pickVenue('150', 120, 'Varna')).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue(150, '120', 'Varna')).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue(150, 120, '')).to.throw("Invalid Information!");
        });
        
        it("should throw error for incorrect location", function() {
            expect(() => weddingDay.pickVenue(150, 120, 'Sofia')).to.throw("The location of this venue is not in the correct area!");
        });
        
        it("should return valid message for a suitable venue", function() {
            expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal("This venue meets the requirements, with capacity of 150 guests and 120$ cover.");
        });
        
        it("should return valid message for an unsuitable venue", function() {
            expect(weddingDay.pickVenue(100, 150, 'Varna')).to.equal("This venue does not meet your requirements!");
        });
    });
    
    describe("otherSpendings", function() {
        it("should throw error for invalid input", function() {
            expect(() => weddingDay.otherSpendings('flowers', ['pictures'], true)).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings(['flowers'], 'pictures', true)).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings(['flowers'], ['pictures'], 'true')).to.throw("Invalid Information!");
        });
        
        it("should calculate total price without discount", function() {
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures'], false)).to.equal("You spend 1600$ for wedding decoration and photography!");
        });
        
        it("should calculate total price with discount", function() {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], true)).to.equal("You spend 1020$ for wedding decoration and photography with 15% discount!");
        });
    });
    
    describe("tableDistribution", function() {
        it("should throw error for invalid input", function() {
            expect(() => weddingDay.tableDistribution('100', 10)).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(100, '10')).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(-100, 10)).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(100, -10)).to.throw("Invalid Information!");
        });
        
        it("should return valid message for tables with less than 6 people", function() {
            expect(weddingDay.tableDistribution(10, 2)).to.equal("There is only 5 people on every table, you can join some tables.");
        });
        
        it("should return valid message for tables with 6 or more people", function() {
            expect(weddingDay.tableDistribution(60, 10)).to.equal("You have 10 tables with 6 guests on table.");
        });
    });
});