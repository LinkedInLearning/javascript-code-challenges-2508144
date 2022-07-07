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



const { assert } = require('chai'); 

describe("Tests", function() {
  it("tests", () => {
    assert.deepEqual(uncensor('H*l** W*l*', 'aloet'), 'Hallo Welt');
    assert.deepEqual(uncensor('G*h*im*r T*xt', 'eeee'), 'Geheimer Text');
    assert.deepEqual(uncensor('J*v**c*ipt r*l*z*', 'aaSrue!'), 'JavaScript rulez!');
  });
});
