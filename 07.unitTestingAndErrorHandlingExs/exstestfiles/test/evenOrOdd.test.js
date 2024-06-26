
import { assert } from 'chai';
import { isOddOrEven } from '../02.evenOrOdd.js'; 


describe('isOddOrEven', () => {
    // Test for non-string input
    it('should return undefined for non-string input', () => {
        assert.strictEqual(isOddOrEven(123), undefined, "Test with 123");
        assert.strictEqual(isOddOrEven({}), undefined, "Test with object");
        assert.strictEqual(isOddOrEven([]), undefined, "Test with array");
        assert.strictEqual(isOddOrEven(undefined), undefined, "Test with undefined");
        assert.strictEqual(isOddOrEven(null), undefined, "Test with null");
    });

    // Test for string with even length
    it('should return "even" for strings with an even length', () => {
        assert.strictEqual(isOddOrEven('test'), 'even', "'test' has 4 characters"); 
        assert.strictEqual(isOddOrEven('even'), 'even', "'even' has 4 characters"); 
        assert.strictEqual(isOddOrEven('abcd'), 'even', "'abcd' has 4 characters"); 
    });

    // Test for string with odd length
    it('should return "odd" for strings with an odd length', () => {
        assert.strictEqual(isOddOrEven('hello'), 'odd',"'hello' has 5 characters"); 
        assert.strictEqual(isOddOrEven('odd'), 'odd', "'odd' has 3 characters" ); 
        assert.strictEqual(isOddOrEven('abc'), 'odd', "'abc' has 3 characters");  
    });

   
});