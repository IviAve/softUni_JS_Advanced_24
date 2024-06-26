import { expect } from "chai";
import { StringBuilder } from "../13.stringBuilder.js";

describe('StringBuilder', function() {

    it('should create empty StringBuilder if no string is passed to constructor', function() {
      const sb = new StringBuilder();
      expect(sb.toString()).to.equal('');
    });
  
    it('should create StringBuilder with initial string', function() {
      const sb = new StringBuilder('hello');
      expect(sb.toString()).to.equal('hello');
    });
  
    it('should append strings correctly', function() {
      const sb = new StringBuilder('hello');
      sb.append(', there');
      expect(sb.toString()).to.equal('hello, there');
    });
  
    it('should prepend strings correctly', function() {
      const sb = new StringBuilder(' there');
      sb.prepend('hello,');
      expect(sb.toString()).to.equal('hello, there');
    });
  
    it('should insert strings at specified index', function() {
      const sb = new StringBuilder('User, hello');
      sb.insertAt('world!', 5);
      expect(sb.toString()).to.equal('User,world! hello');
    });
  
    it('should handle inserting at the start of the string', function() {
      const sb = new StringBuilder('hello');
      sb.insertAt('World, ', 0);
      expect(sb.toString()).to.equal('World, hello');
    });
  
    it('should handle removing characters starting from index', function() {
      const sb = new StringBuilder('User, hello');
      sb.remove(6, 6);
      expect(sb.toString()).to.equal('User, ');
    });
  
    it('should handle removing characters from the beginning of the string', function() {
      const sb = new StringBuilder('hello, there');
      sb.remove(0, 7);
      expect(sb.toString()).to.equal('there');
    });
  
    it('should handle toString correctly', function() {
      const sb = new StringBuilder('User, hello');
      sb.append(', world!');
      expect(sb.toString()).to.equal('User, hello, world!');
    });
  
    it('should throw error if argument is not a string', function() {
      const sb = new StringBuilder();
      expect(() => sb.append(5)).to.throw(TypeError, 'Argument must be a string');
    });
  
    it('should handle operations on initially empty StringBuilder', function() {
      const sb = new StringBuilder();
      sb.append('hello');
      sb.prepend('World, ');
      sb.insertAt('!', 0);
      sb.remove(6, 3);
      expect(sb.toString()).to.equal('!Worldello');
    });

    it('should handle removing characters beyond string length', function() {
      const sb = new StringBuilder('hello');
      sb.remove(2, 10); // Try to remove more characters than available
      expect(sb.toString()).to.equal('he');
    });
  
    it('toString works correctly - 2', () => {
      const expected = '\n A \n\r B\t123   ';
      const obj = new StringBuilder();
    
      expected.split('').forEach(s => {obj.append(s); obj.prepend(s); });
    
      obj.insertAt('test', 4);
    
      obj.remove(2, 4);
    
      expect(obj.toString()).to.equal('  st21\tB \r\n A \n\n A \n\r B\t123   ');
    });
    // it('should handle operations on very large strings', function() {
    //   const sb = new StringBuilder();
    //   const largeString = 'a'.repeat(100000); // 100,000 characters
    //   sb.append(largeString);
    //   sb.prepend(largeString);
    //   sb.insertAt('b', 50000);
    //   sb.remove(100000, 10000);
    //   expect(sb.toString().length).to.equal(190001);
    // });
  
  });

