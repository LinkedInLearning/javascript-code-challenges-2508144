function hello() {
  // Write your code here

  return 'Hello world.';
}


const { assert } = require('chai');
describe("Tests", function () {
  it("tests", () => {
    assert.equal(hello(), 'Hello world.');
  });
});
