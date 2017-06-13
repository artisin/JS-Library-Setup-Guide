const should = require('should');

describe('Array', function() {
  const myArray = [1, 2, 3];
  it('should be an Array with the length of 3', function() {
    myArray.should.be.an.Array();
  });
  it('Array should have a length of 3', function() {
    (myArray.length).should.be.eql(3);
  });
});
