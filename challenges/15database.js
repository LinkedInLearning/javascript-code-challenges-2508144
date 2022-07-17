function isValid(coupon) {
  // Write your code here

}

const { expect } = require('chai');
describe("Tests", async () => {
  it("tests", async () => {
    expect(await isValid('692784')).to.equal(true);
    expect(await isValid('567237')).to.equal(true);
    expect(await isValid('454896')).to.equal(false);
    expect(await isValid('111')).to.equal(false);
  });
});
