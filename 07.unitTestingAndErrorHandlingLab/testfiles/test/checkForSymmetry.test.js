//import { expect } from 'chai';
import { assert } from 'chai';
import { isSymmetric } from '../05.checkForSymmetry.js';
//import {describe, it} from "mocha";


describe('isSymmetric', () => {
    it('should return false for non-array inputs', () => {
        assert.strictEqual(isSymmetric(123), false);
        assert.strictEqual(isSymmetric('abc'), false);
        assert.strictEqual(isSymmetric({}), false);
        assert.strictEqual(isSymmetric(null), false);
        assert.strictEqual(isSymmetric(undefined), false);
    });

    it('should return true for symmetric arrays', () => {
        assert.strictEqual(isSymmetric([1, 2, 3, 2, 1]), true);
        assert.strictEqual(isSymmetric(['a', 'b', 'b', 'a']), true);
        assert.strictEqual(isSymmetric([1, 2, 2, 1]), true);
        assert.strictEqual(isSymmetric(['a', 'a']), true);
        assert.strictEqual(isSymmetric([1]), true);
        assert.strictEqual(isSymmetric([]), true);
        assert.strictEqual(isSymmetric([1,1]), true);
        assert.strictEqual(isSymmetric([1,1,1]), true);
    });

    it('should return false for non-symmetric arrays', () => {
        assert.strictEqual(isSymmetric([1, 2, 3, 4, 5]), false);
        assert.strictEqual(isSymmetric(['a', 'b', 'c']), false);
        assert.strictEqual(isSymmetric([1, 2, 3, 1]), false);
        assert.strictEqual(isSymmetric(['a', 'b', 'a', 'b']), false);
    });

    it('should return true for symmetric arrays with mixed types', () => {
        assert.strictEqual(isSymmetric([1, 'a', 1]), true);
        assert.strictEqual(isSymmetric(['a', 1, 1, 'a']), true);
        assert.strictEqual(isSymmetric([1, 'a', 'a', 1]), true);
    });

    it('should return false for non-symmetric arrays with mixed types', () => {
        assert.strictEqual(isSymmetric([1, 'a', 2]), false);
        assert.strictEqual(isSymmetric(['a', 1, 2, 'a']), false);
    });
    it('should return false for arrays with different data types', () => {
        assert.strictEqual(isSymmetric([1, '1']), false);
        assert.strictEqual(isSymmetric([1, 2, '2', 1]), false);
    });

});

