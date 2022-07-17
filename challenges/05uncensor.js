function uncensor(infected, remedy) {
  // Write your code here

}


const { assert } = require('chai'); 
describe("Tests", function() {
  it("tests", () => {
    assert.deepEqual(uncensor('H*l** W*l*', 'aloet'), 'Hallo Welt');
    assert.deepEqual(uncensor('G*h*im*r T*xt', 'eeee'), 'Geheimer Text');
    assert.deepEqual(uncensor('J*v**c*ipt r*l*z*', 'aaSrue!'), 'JavaScript rulez!');
  });
});
