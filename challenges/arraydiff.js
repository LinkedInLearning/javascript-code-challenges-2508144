function arrayDiff(a, b) {
  // Write your code here
     
  return a.filter(e => !b.includes(e));
}

const { assert } = require('chai'); 
describe("Tests", () => {
  it("tests", () => {
    assert.deepEqual(arrayDiff([1,2], [1]), [2]);
    assert.deepEqual(arrayDiff([1,2,3], [1]), [2,3]);
    assert.deepEqual(arrayDiff([1,2,3], [2,3]), [1]);
    assert.deepEqual(arrayDiff([1,2,3,4], []), [1,2,3,4]);
  });
});
