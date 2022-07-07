function redistributeWealth(wealth) {
  // Write your code here
  
  const total = wealth.reduce( 
    ( prev, cur ) => prev + cur, 
    0
  );

  const same = total / wealth.length;

  return wealth.fill(same);
}


const { assert, config } = require('chai'); 
config.truncateThreshold = 0;

describe("Tests", function(){
  it("tests", () => {
    assert.deepEqual(redistributeWealth([3,3,3,3]), [3,3,3,3]);
    assert.deepEqual(redistributeWealth([1,2,3,4]), [2.5,2.5,2.5,2.5]);
    assert.deepEqual(redistributeWealth([1,1,5,4,9]), [4,4,4,4,4]);
    assert.deepEqual(redistributeWealth([3,4,5,3,7,2,3,12,15]), [6,6,6,6,6,6,6,6,6]);
  });
});
