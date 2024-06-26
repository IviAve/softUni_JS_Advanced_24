import {assert,expect} from 'chai';
import { petAdoptionAgency } from '../petAdoptionAgency.js';



describe("petAdoptionAgency Tests", function() {
    describe("isPetAvailable", function() {
        it("should return message for available vaccinated pets", function() {
            const result = petAdoptionAgency.isPetAvailable("dog", 5, true);
            expect(result).to.equal("Great! We have 5 vaccinated dog(s) available for adoption at the agency.");
        });

        it("should return message for available non-vaccinated pets", function() {
            const result = petAdoptionAgency.isPetAvailable("cat", 3, false);
            expect(result).to.equal("Great! We have 3 cat(s) available for adoption, but they need vaccination.");
        });

        it("should return message for no available pets", function() {
            const result = petAdoptionAgency.isPetAvailable("bird", 0, true);
            expect(result).to.equal("Sorry, there are no bird(s) available for adoption at the agency.");
        });

        it("should throw error for invalid input type", function() {
            expect(() => petAdoptionAgency.isPetAvailable("dog", "5", true)).to.throw("Invalid input");
        });
    });

    describe("getRecommendedPets", function() {
        const petList = [
            { name: "Buddy", traits: "friendly" },
            { name: "Max", traits: "playful" },
            { name: "Lucy", traits: "friendly" },
            { name: "Daisy", traits: "energetic" }
        ];

        it("should return recommended pets for matching traits", function() {
            const result = petAdoptionAgency.getRecommendedPets(petList, "friendly");
            expect(result).to.equal("Recommended pets with the desired traits (friendly): Buddy, Lucy");
        });

        it("should return message for no recommended pets", function() {
            const result = petAdoptionAgency.getRecommendedPets(petList, "calm");
            expect(result).to.equal("Sorry, we currently have no recommended pets with the desired traits: calm.");
        });

        it("should throw error for invalid input type", function() {
            expect(() => petAdoptionAgency.getRecommendedPets("petList", "friendly")).to.throw("Invalid input");
        });
    });

    describe("adoptPet", function() {
        it("should return adoption message", function() {
            const result = petAdoptionAgency.adoptPet("Buddy", "Alice");
            expect(result).to.equal("Congratulations, Alice! You have adopted Buddy from the agency. Enjoy your time with your new furry friend!");
        });

        it("should throw error for invalid input type", function() {
            expect(() => petAdoptionAgency.adoptPet("Buddy", 123)).to.throw("Invalid input");
        });
    });
});