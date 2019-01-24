const circularInsertion = require('./circularInsertion');

describe('parseInput', () => {
  it('should extract array size and array from given string input', () => {
    expect(circularInsertion.parseInput('5 6 3 0 2 7')).toEqual([6, 3, 0, 2, 7]);
  });
  it('should ignore extra input', () => {
    expect(circularInsertion.parseInput('3 5 1 7 4 0 2')).toEqual([5, 1, 7]);
  });
  it('should throw error when input is insufficient', () => {
    expect(() => circularInsertion.parseInput('7 3 0 9')).toThrowError(/Insufficient/);
  });
});
