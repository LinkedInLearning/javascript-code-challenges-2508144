function isAllPossibilities(x){
  // Write your code here
 
  const r = [...new Set(x.sort().map((currentValue, index) => currentValue - index))];

  return((r.length == 1 && r[0] == 0));

  // return x.length > 0 ? x.every((a,i) => x.includes(i)) : false;
}
	


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Possiblities Array", () =>{
  it("sample tests", () =>{
    assert.strictEqual(isAllPossibilities([0,1,2,3]),true);
    assert.strictEqual(isAllPossibilities([1,2,3,4]),false);
  });
});