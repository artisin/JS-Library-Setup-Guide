import 'babel-polyfill';
import should from 'should';
import {
  add,
  addMap,
  subtract,
} from 'dist/spirit-gun';

describe('Library tests', function() {
  it('should add arguments', function() {
    should(add(2, 2)).be.eql(4);
  });

  it('should subtract arguments', function() {
    should(subtract(3, 1)).be.eql(2);
  });

  it('should addMap array', function() {
    should(addMap([1, 2, 3, 4])).be.eql([1, 3, 5, 7]);
  });
});
