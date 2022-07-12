function isIban(iban) {
  const rearranged = iban.substring(4, iban.length) + iban.substring(0, 4);
  const numeric = Array.from(rearranged).map(c => (isNaN(parseInt(c)) ? (c.charCodeAt(0) - 64 + 9).toString() : c)).join('');
  const remainder = Array.from(numeric).map(c => parseInt(c)).reduce((remainder, value) => (remainder * 10 + value) % 97, 0);

  return remainder === 1;
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
