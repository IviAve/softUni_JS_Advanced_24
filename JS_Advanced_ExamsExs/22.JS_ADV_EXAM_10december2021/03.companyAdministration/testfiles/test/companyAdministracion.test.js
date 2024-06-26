


describe("Tests for companyAdministration object", function() {

    describe("hiringEmployee", function() {
        it("should successfully hire an employee with 3+ years experience", function() {
            const result = companyAdministration.hiringEmployee("John Doe", "Programmer", 3);
            assert.strictEqual(result, "John Doe was successfully hired for the position Programmer.");
        });

        it("should reject hiring for less than 3 years experience", function() {
            const result = companyAdministration.hiringEmployee("Jane Smith", "Programmer", 2);
            assert.strictEqual(result, "Jane Smith is not approved for this position.");
        });

        it("should throw error for position other than Programmer", function() {
            assert.throw(() => companyAdministration.hiringEmployee("Mike Johnson", "Manager", 5), Error, "We are not looking for workers for this position.");
        });
    });

    describe("calculateSalary", function() {
        it("should calculate salary without bonus for less than or equal to 160 hours", function() {
            const result = companyAdministration.calculateSalary(160);
            assert.strictEqual(result, 2400);
        });

        it("should calculate salary with bonus for more than 160 hours", function() {
            const result = companyAdministration.calculateSalary(170);
            assert.strictEqual(result, 2650);
        });

        it("should throw error for invalid negative hours", function() {
            assert.throw(() => companyAdministration.calculateSalary(-10), Error, "Invalid hours");
        });

        it("should throw error for invalid non-number input", function() {
            assert.throw(() => companyAdministration.calculateSalary("abc"), Error, "Invalid hours");
        });
    });

    describe("firedEmployee", function() {
        it("should remove employee at valid index and return updated array", function() {
            const employees = ["Alice", "Bob", "Charlie", "David"];
            const result = companyAdministration.firedEmployee(employees, 2);
            assert.strictEqual(result, "Alice, Bob, David");
        });

        it("should throw error for non-array parameter", function() {
            assert.throw(() => companyAdministration.firedEmployee("not an array", 2), Error, "Invalid input");
        });

        it("should throw error for invalid index outside array bounds", function() {
            const employees = ["Alice", "Bob", "Charlie"];
            assert.throw(() => companyAdministration.firedEmployee(employees, 5), Error, "Invalid input");
        });

        it("should throw error for index not being a number", function() {
            const employees = ["Alice", "Bob", "Charlie"];
            assert.throw(() => companyAdministration.firedEmployee(employees, "two"), Error, "Invalid input");
        });
    });

});