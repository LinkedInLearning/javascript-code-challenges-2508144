function redistributeWealth(wealth) {
  // Write your code here
  
  const total = wealth.reduce( 
    ( prev, cur ) => prev + cur, 
    0
  );

  const same = Math.floor(total / wealth.length);

  return wealth.fill(same);
}



const { assert, config } = require('chai'); 
config.truncateThreshold = 0;

describe("Wealth equality", function(){
  it ("example tests", function(){
    const wealthEqual = [5,5,5,5,5]; // already equal
    // assert.strictEqual(redistributeWealth(wealthEqual),undefined,"do not return anything");
    assert.deepEqual(wealthEqual, [5,5,5,5,5], "wealth in input array should have been unaffected");
    const wealthUnequal = [0, 11]; // unequal
    // assert.strictEqual(redistributeWealth(wealthUnequal),undefined,"do not return anything");;
    assert.deepEqual(redistributeWealth(wealthUnequal), [5, 5], "wealth in input array should have been redistributed");
    const wealthSingle = [5]; // single citizen
    // assert.strictEqual(redistributeWealth(wealthSingle),undefined,"do not return anything");
    assert.deepEqual(redistributeWealth(wealthSingle), [5], "wealth in input array should have been unaffectedj");
    const wealthFloat = [3,2,2]; // floating point result
    assert.strictEqual(redistributeWealth(wealthFloat),undefined,"do not return anything");
    assert.deepEqual(wealthFloat, [2.3333333333333335,2.3333333333333335, 2.3333333333333335], "wealth in input array should have been redistributed");
  });
});