var expect = require('chai').expect;
var biggestSum = require('./biggestSum');

describe('biggestSum', function() {
  it('should return 27', function() {
    expect(biggestSum([0, 1, 2, 3, 4, 5])).to.equal(27);
  });
  it('should return 1', function() {
    expect(biggestSum([-1, 0, 1])).to.equal(1);
  });
  it('should return 2', function() {
    expect(biggestSum([1, 1])).to.equal(2);
  });
  it('should return 4', function() {
    expect(biggestSum([0, 0, -3, -1, -1, -1, 0, 0])).to.equal(4);
  });
  it('should return -2', function() {
    expect(biggestSum([-4, 1, 1])).to.equal(-2);
  });
  it('should return 1', function() {
    expect(biggestSum([1, -1, 1])).to.equal(1);
  });
  it('should return 0', function() {
    expect(biggestSum([0, 0, 0, 0])).to.equal(0);
  });
});
