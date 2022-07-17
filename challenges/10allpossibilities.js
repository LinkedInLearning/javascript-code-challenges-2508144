function isAllPossibilities(array) {
  // Write your code here

  return array.every((value, index) => array.includes(index)) ;
}


const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(isAllPossibilities([0, 1, 2, 3, 4, 5]), true);
    assert.equal(isAllPossibilities([1, 2, 3, 4]), false);
    assert.equal(isAllPossibilities([0, 1, 3, 4]), false);
    assert.equal(isAllPossibilities([0, 1, 3, 2]), true);
  });
});