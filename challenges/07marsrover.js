function rover(way) {
  // Write your code here

}

const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.deepEqual(rover('rffffr'), { x: 4, y: 0 });
    assert.deepEqual(rover('rfrfrfrfr'), { x: 0, y: 0 });
    assert.deepEqual(rover('ffrfrflflfrf'), { x: 3, y: 2 });
    assert.deepEqual(rover('rfffrfffrf'), { x: 2, y: -3 });
  });
});
