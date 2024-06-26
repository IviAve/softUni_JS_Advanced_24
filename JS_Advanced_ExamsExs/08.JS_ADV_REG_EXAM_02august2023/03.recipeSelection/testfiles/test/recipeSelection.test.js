import {expect} from 'chai';
import { recipeSelection } from '../recipeSelection.js';

  
  describe("Tests for recipeSelection object", function() {
    describe("isTypeSuitable", function() {
      it("should return not suitable for vegetarians", function() {
        expect(recipeSelection.isTypeSuitable("Meat", "Vegetarian")).to.equal("This recipe is not suitable for vegetarians");
      });
  
      it("should return not suitable for vegans", function() {
        expect(recipeSelection.isTypeSuitable("Meat", "Vegan")).to.equal("This recipe is not suitable for vegans");
        expect(recipeSelection.isTypeSuitable("Dairy", "Vegan")).to.equal("This recipe is not suitable for vegans");
      });
  
      it("should return suitable for other combinations", function() {
        expect(recipeSelection.isTypeSuitable("Vegetable", "Vegetarian")).to.equal("This recipe is suitable for your dietary restriction");
        expect(recipeSelection.isTypeSuitable("Vegetable", "Vegan")).to.equal("This recipe is suitable for your dietary restriction");
      });
  
      it("should throw an error for invalid input", function() {
        expect(() => recipeSelection.isTypeSuitable(123, "Vegan")).to.throw("Invalid input");
        expect(() => recipeSelection.isTypeSuitable("Meat", 123)).to.throw("Invalid input");
      });
    });
  
    describe("isItAffordable", function() {
      it("should return not enough budget", function() {
        expect(recipeSelection.isItAffordable(100, 50)).to.equal("You don't have enough budget to afford this recipe");
      });
  
      it("should return remaining budget", function() {
        expect(recipeSelection.isItAffordable(50, 100)).to.equal("Recipe ingredients bought. You have 50$ left");
      });
  
      it("should throw an error for invalid input", function() {
        expect(() => recipeSelection.isItAffordable("50", 100)).to.throw("Invalid input");
        expect(() => recipeSelection.isItAffordable(50, "100")).to.throw("Invalid input");
      });
    });
  
    describe("getRecipesByCategory", function() {
      it("should return recipes in the specified category", function() {
        const recipes = [
          { title: "Spicy Tofu Stir-Fry", category: "Asian" },
          { title: "Pasta Primavera", category: "Italian" },
          { title: "Sushi", category: "Asian" }
        ];
        expect(recipeSelection.getRecipesByCategory(recipes, "Asian")).to.deep.equal(["Spicy Tofu Stir-Fry", "Sushi"]);
      });
  
      it("should return an empty array if no recipes match the category", function() {
        const recipes = [
          { title: "Spicy Tofu Stir-Fry", category: "Asian" },
          { title: "Pasta Primavera", category: "Italian" }
        ];
        expect(recipeSelection.getRecipesByCategory(recipes, "Mexican")).to.deep.equal([]);
      });
  
      it("should throw an error for invalid input", function() {
        expect(() => recipeSelection.getRecipesByCategory("not an array", "Asian")).to.throw("Invalid input");
        expect(() => recipeSelection.getRecipesByCategory([], 123)).to.throw("Invalid input");
      });
    });
  });