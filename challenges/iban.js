function isIban(iban) {
  // Write your code here

  const bank = iban.substring(4,12);
  const account = iban.substring(12, 22);
  const country = (iban.substring(0, 2).charCodeAt(0) - 64 + 9) + "" + (iban.substring(0, 2).charCodeAt(1) - 64 + 9);

  console.log(country)
  return true;
}

const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(isIban('DE08700901001234567890'), true);
   
  });
});
