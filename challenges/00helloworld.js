function hello() {
  // Write your code here

} 


const { assert } = require('chai');
describe("Tests", function () {
  it("tests", () => {
    assert.equal(hello(), 'Hello world.');
  });
});
