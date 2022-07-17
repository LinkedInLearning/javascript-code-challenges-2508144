function isOpen(timestamp) {
  // Write your code here

}


const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(isOpen('2026-7-14 09:00'), true);
    assert.equal(isOpen('2026-7-14 16:00'), true);
    assert.equal(isOpen('2026-7-15 10:00'), true);
    assert.equal(isOpen('2026-7-15 16:00'), false);
    assert.equal(isOpen('2026-7-18 14:00'), false);
    assert.equal(isOpen('2026-7-19 09:00'), false);

  });
});
