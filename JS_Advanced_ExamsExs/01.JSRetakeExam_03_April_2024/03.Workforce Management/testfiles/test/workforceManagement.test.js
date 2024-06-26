import {expect} from 'chai';
import { workforceManagement } from '../workforceManagement.js';



describe("Tests for workforceManagement", () => {
    describe("recruitStaff()", () => {
        it("should throw an error for non-Developer role", () => {
            expect(() => workforceManagement.recruitStaff("John", "Manager", 5)).to.throw('We are not currently hiring for this role.');
        });

        it("should recruit a Developer with sufficient experience", () => {
            expect(workforceManagement.recruitStaff("John", "Developer", 5)).to.equal('John has been successfully recruited for the role of Developer.');
        });

        it("should not recruit a Developer with insufficient experience", () => {
            expect(workforceManagement.recruitStaff("John", "Developer", 2)).to.equal('John is not suitable for this role.');
        });
    });

    describe("computeWages()", () => {
        it("should throw an error for invalid hours input", () =>{
            expect(() => workforceManagement.computeWages("100")).to.throw('Invalid hours');
            expect(() => workforceManagement.computeWages(-10)).to.throw('Invalid hours');
        });

        it("should compute wages without bonus", () => {
            expect(workforceManagement.computeWages(100)).to.equal(1800);
        });

        it("should compute wages with bonus", () => {
            expect(workforceManagement.computeWages(170)).to.equal(4560);
        });
    });

    describe("dismissEmployee()", () => {
        it("should throw an error for invalid input", () => {
            expect(() => workforceManagement.dismissEmployee("not an array", 1)).to.throw('Invalid input');
            expect(() => workforceManagement.dismissEmployee(["John", "Doe"], "1")).to.throw('Invalid input');
            expect(() => workforceManagement.dismissEmployee(["John", "Doe"], -1)).to.throw('Invalid input');
            expect(() => workforceManagement.dismissEmployee(["John", "Doe"], 3)).to.throw('Invalid input');
        });

        it("should dismiss an employee at valid index", () => {
            expect(workforceManagement.dismissEmployee(["John", "Doe", "Jane"], 1)).to.equal('John, Jane');
        });
    });
});