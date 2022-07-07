function uncensor(infected, discovered) {
  // Write your code here

  let disc = discovered.split('');

  while(disc.length > 0){
    infected = infected.replace('*', disc.shift())
  }

  return infected;
}

// eslint-disable-next-line no-unused-vars
function uncensor2(infected, discovered) {
  const arr = [...discovered]
  return [...infected].map(el=> el === '*' ? arr.shift() : el).join('')
}



const chai = require("chai");
const assert = chai.assert;

describe("Ce*s*r*d Strings", function() {
  function test([infected, discovered, answer]) {
    it(`infected = "${infected}", discovered = "${discovered}"`, () => {
      assert.strictEqual(uncensor(infected, discovered), answer)
    })
  }

  describe("Example Tests", () => {
    let data = [
      ['*h*s *s v*ry *tr*ng*', 'Tiiesae', 'This is very strange'],
      ['A**Z*N*', 'MAIG', 'AMAZING'],
      ['xyz', '', 'xyz'],
      ['', '', ''],
      ['***', 'abc', 'abc']
    ];

    data.forEach(test);
  });
});
