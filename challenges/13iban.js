function isIban(iban) {
  // Write your code here
  
}

const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(isIban('DE02200505501015871393'), true);
    assert.equal(isIban('DE88100900001234567892'), true);
    assert.equal(isIban('AT026000000001349870'), true);
    assert.equal(isIban('AT022081500000698597'), true);
    assert.equal(isIban('CH0204835000626882001'), true);
    assert.equal(isIban('CH0200790016271403331'), true);  
  });
});
