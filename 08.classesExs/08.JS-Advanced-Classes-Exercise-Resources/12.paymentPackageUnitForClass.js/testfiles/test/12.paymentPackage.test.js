import { assert } from "chai";
import { PaymentPackage } from "../12.paymentPackage.js";

describe("PaymentPackage", function() {
    it("should instantiate correctly with valid parameters", function() {
        const pkg = new PaymentPackage('Test Package', 100);
        assert.equal(pkg.name, 'Test Package');
        assert.equal(pkg.value, 100);
        assert.equal(pkg.VAT, 20);
        assert.isTrue(pkg.active);
    });

    it("should throw an error if instantiated with invalid name", function() {
        assert.throws(() => new PaymentPackage('', 100), Error, 'Name must be a non-empty string');
        assert.throws(() => new PaymentPackage(123, 100), Error, 'Name must be a non-empty string');
    });

    it("should throw an error if instantiated with invalid value", function() {
        assert.throws(() => new PaymentPackage('Test Package', -100), Error, 'Value must be a non-negative number');
        assert.throws(() => new PaymentPackage('Test Package', '100'), Error, 'Value must be a non-negative number');
    });

    it("should correctly set and get name", function() {
        const pkg = new PaymentPackage('Test Package', 100);
        pkg.name = 'New Name';
        assert.equal(pkg.name, 'New Name');
        assert.throws(() => pkg.name = '', Error, 'Name must be a non-empty string');
    });

    it("should correctly set and get value", function() {
        const pkg = new PaymentPackage('Test Package', 100);
        pkg.value = 200;
        assert.equal(pkg.value, 200);
        assert.throws(() => pkg.value = -1, Error, 'Value must be a non-negative number');
    });

    it("should correctly set and get VAT", function() {
        const pkg = new PaymentPackage('Test Package', 100);
        pkg.VAT = 30;
        assert.equal(pkg.VAT, 30);
        assert.throws(() => pkg.VAT = -10, Error, 'VAT must be a non-negative number');
    });

    it("should correctly set and get active status", function() {
        const pkg = new PaymentPackage('Test Package', 100);
        pkg.active = false;
        assert.isFalse(pkg.active);
        assert.throws(() => pkg.active = 'yes', Error, 'Active status must be a boolean');
    });

    it("should return correct string representation", function() {
        const pkg = new PaymentPackage('Test Package', 100);
        const output = `Package: Test Package\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`;
        assert.equal(pkg.toString(), output);

        pkg.active = false;
        const outputInactive = `Package: Test Package (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`;
        assert.equal(pkg.toString(), outputInactive);
    });

    it("should throw an error if active is set to null", function() {
        const pkg = new PaymentPackage('Test Package', 100);
        assert.throws(() => pkg.active = null, Error, 'Active status must be a boolean');
    });

    it("should throw an error if name is set to an empty string", function() {
        const pkg = new PaymentPackage('Test Package', 100);
        assert.throws(() => pkg.name = '', Error, 'Name must be a non-empty string');
    });

    it("should throw an error if value is set to a negative number", function() {
        const pkg = new PaymentPackage('Test Package', 100);
        assert.throws(() => pkg.value = -1, Error, 'Value must be a non-negative number');
    });

    it("should throw an error if VAT is set to a negative number", function() {
        const pkg = new PaymentPackage('Test Package', 100);
        assert.throws(() => pkg.VAT = -1, Error, 'VAT must be a non-negative number');
    });

    it("should handle zero value correctly", function() {
        const pkg = new PaymentPackage('Test Package', 0);
        assert.equal(pkg.value, 0);
        assert.equal(pkg.toString(), `Package: Test Package\n- Value (excl. VAT): 0\n- Value (VAT 20%): 0`);
    });

    it("should handle zero VAT correctly", function() {
        const pkg = new PaymentPackage('Test Package', 100);
        pkg.VAT = 0;
        assert.equal(pkg.VAT, 0);
        assert.equal(pkg.toString(), `Package: Test Package\n- Value (excl. VAT): 100\n- Value (VAT 0%): 100`);
    });
});