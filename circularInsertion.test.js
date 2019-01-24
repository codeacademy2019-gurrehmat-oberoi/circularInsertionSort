const circularInsertion = require('./circularInsertion');

describe('parseInput', () => {
  it('should extract array size and array from given string input', () => {
    expect(circularInsertion.parseInput('5\n6 3 0 2 7')).toEqual([6, 3, 0, 2, 7]);
  });
});
