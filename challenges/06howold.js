function howOld(dates) {
  // Write your code here

}

const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(howOld(['4. Jan 2025', '30 Nov 2022']), 2);
    assert.equal(howOld(['1. January 2025', '31 December 2024']), 0);
    assert.equal(howOld(['31 December 2024', '1. January 2025']), 0);
    assert.equal(howOld(['12 May 2024', '11 May 2034']), 9);
    assert.equal(howOld(['12 May 2024', '12 May 2034']), 10);  
  });
});
