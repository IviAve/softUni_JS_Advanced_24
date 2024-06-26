import { assert } from 'chai';
import { lookupChar } from '../03.charLookup.js';
import { it } from 'mocha';

describe('lookupChar function tests', () => {

    it('Return char at index', () => {
        assert(lookupChar('Love', 0) === 'L');

    });
    it('Return char at index', () => {
        assert(lookupChar('L', 0) === 'L');

    });
    it('Return char at index', () => {
        assert(lookupChar('Love', 1) === 'o');

    });
    it('Index over the string length', () => {
        assert(lookupChar('Love', 10) === 'Incorrect index')
    });
    it('Negative string  index', () => {
        assert.strictEqual(lookupChar('Love', -2), 'Incorrect index')
    });
    it('Empty string', () => {
        assert.strictEqual(lookupChar("",0), 'Incorrect index')
    })
    it('Return undifined', () => {
        assert.strictEqual(lookupChar('Love', 10.5), undefined)
    });
    it('Return undifined', () => {
        assert.strictEqual(lookupChar(10, '10.5'), undefined)
    });
    it('Return undifined', () => {
        assert.strictEqual(lookupChar(100, 10), undefined)
    });
        
});