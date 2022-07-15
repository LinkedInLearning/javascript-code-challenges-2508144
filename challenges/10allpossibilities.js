function isAllPossibilities(x) {
  // Write your code here

  const r = [...new Set(x.sort().map((currentValue, index) => currentValue - index))];

  return ((r.length == 1 && r[0] == 0));

  // return x.length > 0 ? x.every((a,i) => x.includes(i)) : false;
}


const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(isAllPossibilities([0, 1, 2, 3, 4, 5]), true);
    assert.equal(isAllPossibilities([1, 2, 3, 4]), false);
    assert.equal(isAllPossibilities([0, 1, 3, 4]), false);
  });
});