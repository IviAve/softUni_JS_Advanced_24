import { expect,assert } from "chai";
import { Repository } from "../solution.js";

describe("Repository Tests", function() {
    let properties;
    let repository;

    beforeEach(function() {
        properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        repository = new Repository(properties);
    });

    describe("Initialization", function() {
        it("should initialize with empty data", function() {
            expect(repository.count).to.equal(0);
        });
    });

    describe("Add method", function() {
        it("should add a valid entity", function() {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let id = repository.add(entity);
            expect(id).to.equal(0);
            expect(repository.count).to.equal(1);
        });

        it("should throw error for missing property", function() {
            let entity = {
                name: "Maria",
                age: 30
            };
            expect(() => repository.add(entity)).to.throw('Property birthday is missing from the entity!');
            expect(repository.count).to.equal(0);
        });

        it("should throw error for incorrect type", function() {
            let entity = {
                name: "Ivan",
                age: "thirty",
                birthday: new Date(1995, 5, 15)
            };
            expect(() => repository.add(entity)).to.throw('Property age is not of correct type!');
            expect(repository.count).to.equal(0);
        });

        it("should add entities with different types of properties", function() {
            let entity1 = {
                name: "Alice",
                age: 25,
                birthday: new Date(1996, 3, 10)
            };
            let entity2 = {
                name: "Bob",
                age: 30,
                birthday: { year: 1992, month: 8, day: 15 }
            };
            let id1 = repository.add(entity1);
            let id2 = repository.add(entity2);
            expect(id1).to.equal(0);
            expect(id2).to.equal(1);
            expect(repository.count).to.equal(2);
        });

        it("should handle empty entity", function() {
            let entity = {};
            expect(() => repository.add(entity)).to.throw('Property name is missing from the entity!');
            expect(repository.count).to.equal(0);
        });

        it("should handle adding duplicate IDs", function() {
            let entity1 = {
                name: "John",
                age: 28,
                birthday: new Date(1993, 7, 20)
            };
            let entity2 = {
                name: "Jane",
                age: 26,
                birthday: new Date(1995, 2, 12)
            };
            repository.add(entity1);
            expect(() => repository.add(entity2)).to.not.throw();
            expect(repository.count).to.equal(2);
        });
    });

    describe("GetId method", function() {
        it("should get entity by id", function() {
            let entity = {
                name: "Michael",
                age: 35,
                birthday: new Date(1989, 9, 5)
            };
            let id = repository.add(entity);

            let retrievedEntity = repository.getId(id);
            expect(retrievedEntity).to.deep.equal(entity);
        });

        
    });

    describe("Update method", function() {
        it("should update existing entity", function() {
            let entity = {
                name: "Emily",
                age: 33,
                birthday: new Date(1991, 4, 15)
            };
            let id = repository.add(entity);

            let updatedEntity = {
                name: "Emily Watson",
                age: 34,
                birthday: new Date(1991, 4, 15)
            };
            repository.update(id, updatedEntity);
            expect(repository.getId(id)).to.deep.equal(updatedEntity);
        });

        it("should throw error for updating with incorrect type", function() {
            let entity = {
                name: "Peter",
                age: 40,
                birthday: new Date(1981, 11, 3)
            };
            let id = repository.add(entity);

            let updatedEntity = {
                name: "Peter Parker",
                age: "forty",
                birthday: new Date(1981, 11, 3)
            };
            expect(() => repository.update(id, updatedEntity)).to.throw('Property age is not of correct type!');
            expect(repository.getId(id)).to.deep.equal(entity);
        });

        it("should throw error for non-existing id", function() {
            let entity = {
                name: "Sarah",
                age: 27,
                birthday: new Date(1994, 6, 8)
            };
            expect(() => repository.update(10, entity)).to.throw('Entity with id: 10 does not exist!');
        });
    });

    describe("Delete method", function() {
        it("should delete existing entity", function() {
            let entity = {
                name: "Jack",
                age: 29,
                birthday: new Date(1992, 11, 18)
            };
            let id = repository.add(entity);

            repository.del(id);
            expect(repository.count).to.equal(0);
        });

        it("should throw error for non-existing id", function() {
            expect(() => repository.del(20)).to.throw('Entity with id: 20 does not exist!');
        });
    });

});